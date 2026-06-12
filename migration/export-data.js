// ═══ 药学知识指南 — 数据导出到 Supabase SQL ═══
// 运行：node E:\workbuddy\2026-06-10-18-48-39\pharmacy-app\migration\export-data.js
// 输出：E:\workbuddy\2026-06-10-18-48-39\pharmacy-app\migration\02-import.sql

const fs = require('fs');
const path = require('path');
const BASE = 'E:/workbuddy/2026-06-10-18-48-39/pharmacy-app';
const OUT = BASE + '/migration/02-import.sql';

let sql = '-- ═══ 药学知识指南 — 种子数据导入 ═══\n';
sql += '-- 生成时间: ' + new Date().toISOString() + '\n\n';
sql += 'begin;\n\n';

function esc(val) {
  if (val === null || val === undefined) return 'null';
  return "'" + String(val).replace(/'/g, "''") + "'";
}

function escArr(arr) {
  if (!arr || !arr.length) return "'{}'";
  return "'{" + arr.map(s => '"' + s.replace(/"/g, '\\"') + '"').join(',') + "}'";
}

// === 1. 药品数据 (data/drugs/*.json) ===
console.log('导出药品数据...');
let drugCount = 0;
let baseDrugs = {};
const DRUG_DIR = BASE + '/data/drugs';
if (fs.existsSync(DRUG_DIR)) {
  const files = fs.readdirSync(DRUG_DIR).filter(f => f.endsWith('.json') && f !== 'index.json');
  
  // 先从 data.js 读取基础药品列表（indications）
  const dataJs = fs.readFileSync(BASE + '/js/data.js', 'utf8');
  const drugMatch = dataJs.match(/const DRUGS = \[([\s\S]+?)\];/);
  if (drugMatch) {
    // 解析药品对象
    const drugStr = drugMatch[1];
    const regex = /\{([^}]+)\}/g;
    let m;
    while ((m = regex.exec(drugStr)) !== null) {
      const objStr = m[1];
      const idMatch = objStr.match(/id:'([^']+)'/);
      const nameMatch = objStr.match(/name:'([^']+)'/);
      const pyMatch = objStr.match(/py:'([^']+)'/);
      const catMatch = objStr.match(/category:'([^']+)'/);
      const subMatch = objStr.match(/subcategory:'([^']+)'/);
      const typeMatch = objStr.match(/type:'([^']+)'/);
      const indMatch = objStr.match(/indications:'([^']+)'/);
      const tagMatch = objStr.match(/tag:'([^']+)'/);
      if (idMatch) {
        baseDrugs[idMatch[1]] = {
          name: nameMatch ? nameMatch[1] : '',
          py: pyMatch ? pyMatch[1] : '',
          category: catMatch ? catMatch[1] : '',
          subcategory: subMatch ? subMatch[1] : '',
          type: typeMatch ? typeMatch[1] : '处方药',
          indications: indMatch ? indMatch[1] : '',
          tag: tagMatch ? tagMatch[1] : null
        };
      }
    }
  }

  files.forEach(f => {
    const id = f.replace('.json', '');
    const jsonPath = DRUG_DIR + '/' + f;
    try {
      const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      const base = baseDrugs[id] || {};
      
      sql += `insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values(`;
      sql += esc(id) + ',';
      sql += esc(data.name || base.name || '') + ',';
      sql += esc(data.py || base.py || '') + ',';
      sql += esc(data.en || null) + ',';
      sql += esc(data.category || base.category || '') + ',';
      sql += esc(data.subcategory || base.subcategory || '') + ',';
      sql += esc(data.type || base.type || '处方药') + ',';
      sql += esc(data.tag || base.tag || null) + ',';
      sql += esc(data.indications || base.indications || '') + ',';
      sql += esc(data.contraindications || null) + ',';
      sql += esc(data.adverse || null) + ',';
      sql += esc(data.dosage || null) + ',';
      sql += esc(data.storage || null) + ',';
      sql += esc(data.interactions || null) + ',';
      sql += esc(data.label || null);
      sql += ') on conflict (id) do nothing;\n';
      drugCount++;
    } catch(e) {
      console.error('  SKIP ' + f + ': ' + e.message);
    }
  });
}
console.log('  药品: ' + drugCount + ' 条');

// 补充 data.js 中定义但 data/drugs/ 中缺失的药品
Object.entries(baseDrugs).forEach(([id, base]) => {
  const jsonPath = DRUG_DIR + '/' + id + '.json';
  if (!fs.existsSync(jsonPath)) {
    sql += `insert into drugs(id,name,py,category,subcategory,type,tag,indications) values(`;
    sql += esc(id) + ',' + esc(base.name) + ',' + esc(base.py) + ',';
    sql += esc(base.category) + ',' + esc(base.subcategory) + ',' + esc(base.type) + ',';
    sql += esc(base.tag) + ',' + esc(base.indications);
    sql += ') on conflict (id) do nothing;\n';
    drugCount++;
  }
});

// === 2. 疾病数据 ===
console.log('导出疾病数据...');
let diseaseCount = 0;
const DIS_DIR = BASE + '/data/diseases';
const disIndex = JSON.parse(fs.readFileSync(DIS_DIR + '/index.json', 'utf8'));
disIndex.forEach(d => {
  const jsonPath = DIS_DIR + '/' + d.id + '.json';
  let detail = {};
  if (fs.existsSync(jsonPath)) {
    try { detail = JSON.parse(fs.readFileSync(jsonPath, 'utf8')); } catch(e) {}
  }
  sql += `insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values(`;
  sql += esc(d.id) + ',' + esc(d.name) + ',' + esc(d.cat) + ',' + esc(d.py) + ',';
  sql += esc(detail.desc || null) + ',' + esc(detail.symptoms || null) + ',';
  sql += esc(detail.diagnosis || null) + ',' + esc(detail.treatment || null);
  sql += ') on conflict (id) do nothing;\n';
  diseaseCount++;
});
console.log('  疾病: ' + diseaseCount + ' 条');

// === 3. 指南数据 ===
console.log('导出指南数据...');
let guideCount = 0;
const GUIDE_DIR = BASE + '/data/guidelines';
const guideIndex = JSON.parse(fs.readFileSync(GUIDE_DIR + '/index.json', 'utf8'));
guideIndex.forEach(g => {
  const jsonPath = GUIDE_DIR + '/' + g.id + '.json';
  let detail = {};
  if (fs.existsSync(jsonPath)) {
    try { detail = JSON.parse(fs.readFileSync(jsonPath, 'utf8')); } catch(e) {}
  }
  sql += `insert into guidelines(id,title,system,year,py,content,source_url) values(`;
  sql += esc(g.id) + ',' + esc(g.title) + ',' + esc(g.system) + ',' + esc(g.year) + ',';
  sql += esc(g.py || null) + ',';
  sql += esc(detail.content || null) + ',';
  sql += esc(detail.sourceUrl || null);
  sql += ') on conflict (id) do nothing;\n';
  guideCount++;
});
console.log('  指南: ' + guideCount + ' 条');

// === 4. 法规数据 ===
console.log('导出法规数据...');
let lawCount = 0;
const LAW_DIR = BASE + '/data/laws';
const lawIndex = JSON.parse(fs.readFileSync(LAW_DIR + '/index.json', 'utf8'));
lawIndex.forEach(l => {
  const jsonPath = LAW_DIR + '/' + l.id + '.json';
  let detail = {};
  if (fs.existsSync(jsonPath)) {
    try { detail = JSON.parse(fs.readFileSync(jsonPath, 'utf8')); } catch(e) {}
  }
  // LAWS 数据可能直接在 data.js 中也有，以 JSON 文件为准
  sql += `insert into laws(id,title,year,content,py) values(`;
  sql += esc(l.id) + ',' + esc(l.title) + ',' + esc(l.year) + ',';
  sql += esc(detail.content || null) + ',';
  sql += esc(detail.py || null);
  sql += ') on conflict (id) do nothing;\n';
  lawCount++;
});
console.log('  法规: ' + lawCount + ' 条');

// === 5. 科普教育 ===
console.log('导出科普教育...');
let eduCount = 0;
const EDU_DIR = BASE + '/data/healthedu';
const eduIndex = JSON.parse(fs.readFileSync(EDU_DIR + '/index.json', 'utf8'));
eduIndex.forEach(h => {
  const jsonPath = EDU_DIR + '/' + h.id + '.json';
  let detail = {};
  if (fs.existsSync(jsonPath)) {
    try { detail = JSON.parse(fs.readFileSync(jsonPath, 'utf8')); } catch(e) {}
  }
  sql += `insert into health_edu(id,cat,title,py,content) values(`;
  sql += esc(h.id) + ',' + esc(h.cat) + ',' + esc(h.title) + ',';
  sql += esc(h.py || null) + ',';
  sql += esc(detail.content || null);
  sql += ') on conflict (id) do nothing;\n';
  eduCount++;
});
console.log('  科普教育: ' + eduCount + ' 条');

// === 6. 用药教育 ===
console.log('导出用药教育...');
let medCount = 0;
const MED_DIR = BASE + '/data/mededu';
const medIndex = JSON.parse(fs.readFileSync(MED_DIR + '/index.json', 'utf8'));
medIndex.forEach(m => {
  const jsonPath = MED_DIR + '/' + m.id + '.json';
  let detail = {};
  if (fs.existsSync(jsonPath)) {
    try { detail = JSON.parse(fs.readFileSync(jsonPath, 'utf8')); } catch(e) {}
  }
  sql += `insert into med_edu(id,cat,drug,py,key,detail) values(`;
  sql += esc(m.id) + ',' + esc(m.cat) + ',' + esc(m.drug) + ',';
  sql += esc(m.py || null) + ',' + esc(m.key) + ',';
  sql += esc(detail.detail || null);
  sql += ') on conflict (id) do nothing;\n';
  medCount++;
});
console.log('  用药教育: ' + medCount + ' 条');

// === 7. 输液配伍 ===
console.log('导出输液配伍...');
let infCount = 0;
const INF_DIR = BASE + '/data/infusion';
const infIndex = JSON.parse(fs.readFileSync(INF_DIR + '/index.json', 'utf8'));
infIndex.forEach(i => {
  const jsonPath = INF_DIR + '/' + i.id + '.json';
  let detail = {};
  if (fs.existsSync(jsonPath)) {
    try { detail = JSON.parse(fs.readFileSync(jsonPath, 'utf8')); } catch(e) {}
  }
  sql += `insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values(`;
  sql += esc(i.id) + ',' + esc(i.cat) + ',' + esc(i.drug) + ',';
  sql += esc(i.py || null) + ',';
  sql += esc(detail.vehicle || null) + ',' + esc(detail.conc || null) + ',';
  sql += esc(detail.speed || null) + ',' + esc(detail.note || null) + ',';
  sql += esc(detail.interact || null) + ',' + esc(detail.detail || null);
  sql += ') on conflict (id) do nothing;\n';
  infCount++;
});
console.log('  输液配伍: ' + infCount + ' 条');

// === 8. 更新序列 ===
sql += '\n-- 更新统计\n';
sql += 'select setval(pg_get_serial_sequence(\'guide_systems\', \'id\'), (select max(id) from guide_systems));\n';

sql += '\ncommit;\n';

fs.writeFileSync(OUT, sql, 'utf8');
console.log('\n✅ 导出完成！文件: migration/02-import.sql');
console.log('   总计: ' + (drugCount + diseaseCount + guideCount + lawCount + eduCount + medCount + infCount) + ' 条记录');
