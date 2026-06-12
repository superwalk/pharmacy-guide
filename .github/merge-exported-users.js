// 自动合并手机端导出的新用户到 auth.js
const fs = require('fs');
const path = require('path');

const EXPORTS_DIR = 'data/exports';
const AUTH_JS = 'js/auth.js';

// 1. 找到所有导出文件
let exportFiles;
try {
  exportFiles = fs.readdirSync(EXPORTS_DIR)
    .filter(f => f.endsWith('.json') && f !== '.gitkeep' && f !== 'INDEX.json');
} catch(e) {
  console.log('No exports directory, exiting');
  process.exit(0);
}
if (exportFiles.length === 0) {
  console.log('No export files found');
  process.exit(0);
}

// 2. 读取现有 auth.js
let authContent = fs.readFileSync(AUTH_JS, 'utf8');

// 3. 提取所有新用户
let newUsers = [];
let processedFiles = [];
for (const file of exportFiles) {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(EXPORTS_DIR, file), 'utf8'));
    if (data.new_users && Array.isArray(data.new_users) && data.new_users.length > 0) {
      newUsers = newUsers.concat(data.new_users);
      processedFiles.push(file);
      console.log(`  Found ${data.new_users.length} users in ${file}`);
    } else {
      console.log(`  Skip ${file}: no new_users`);
    }
  } catch(e) {
    console.log(`  Skip ${file}: ${e.message}`);
  }
}
if (newUsers.length === 0) {
  for (const f of processedFiles) {
    try { fs.unlinkSync(path.join(EXPORTS_DIR, f)); } catch(e) {}
  }
  console.log('No users to merge');
  process.exit(0);
}

// 4. 提取已有用户名
const USERS_START = 'const USERS = [';
const startIdx = authContent.indexOf(USERS_START);
if (startIdx === -1) { console.error('Cannot find USERS array'); process.exit(1); }

// 找包含 USERS 数组的代码块
// 方法：从 const USERS = [ 开始，数 [] 嵌套找到闭合位置
let depth = 0;
let arrayEnd = startIdx + USERS_START.length;
let inStr = false, strCh = null;
for (let i = arrayEnd; i < authContent.length; i++) {
  const c = authContent[i];
  if (inStr) {
    if (c === '\\') { i++; continue; }
    if (c === strCh) inStr = false;
    continue;
  }
  if (c === "'" || c === '"' || c === '`') { inStr = true; strCh = c; continue; }
  if (c === '[') depth++;
  else if (c === ']') {
    if (depth === 0) { arrayEnd = i + 1; break; }
    depth--;
  }
}

// 提取 USERS 数组内的行
const arrayBlock = authContent.substring(startIdx, arrayEnd);
const lines = arrayBlock.split('\n');
// 去掉首行 "const USERS = [" 和末行 "];"
const userLines = lines.slice(1, -1).filter(l => l.trim().length > 0);

const existingUsernames = new Set();
for (const line of userLines) {
  const m = line.match(/username:'([^']+)'/);
  if (m) existingUsernames.add(m[1]);
}

// 5. 构造新用户行
let insertLines = [];
let added = 0;
for (const u of newUsers) {
  if (existingUsernames.has(u.username)) {
    console.log(`  Skip ${u.username}: exists`);
    continue;
  }
  insertLines.push(`  { username:'${u.username}', password:'${u.password}', role:'${u.role||'user'}', nickname:'${u.nickname||u.username}' },`);
  existingUsernames.add(u.username);
  added++;
  console.log(`  Add ${u.username} (${u.role||'user'})`);
}
if (added === 0) {
  for (const f of processedFiles) {
    try { fs.unlinkSync(path.join(EXPORTS_DIR, f)); } catch(e) {}
  }
  console.log('All users already exist');
  process.exit(0);
}

// 6. 在最后一个 '];' 行之前插入
// 找到数组中最后一个有效内容行的末尾
const endOfArrayContent = authContent.lastIndexOf('];', arrayEnd);
const insertPos = authContent.lastIndexOf('\n', endOfArrayContent) + 1; // 回到 ] 行的行首

const newContent = 
  authContent.slice(0, insertPos) + 
  insertLines.join('\n') + '\n' +
  authContent.slice(insertPos);

fs.writeFileSync(AUTH_JS, newContent, 'utf8');
console.log(`\n✅ Merged ${added} user(s) into auth.js`);

// 7. 清理导出文件
for (const f of processedFiles) {
  try { fs.unlinkSync(path.join(EXPORTS_DIR, f)); console.log(`  Deleted ${f}`); } catch(e) {}
}
