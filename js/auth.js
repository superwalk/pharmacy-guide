// ═══ 用户认证（Supabase 同步版） ═══
let currentUser = null;
var _sbUsersLoaded = false;
var _sbUsers = [];

// 从 users.json 同步过来的核心数据（离线降级用）
const USERS = [
  { username:'walkman0097', password:'@Ab7704..Di', role:'admin', nickname:'管理员' },
  { username:'user001', password:'exr3690', role:'editor', nickname:'管理员-λ' },
  { username:'user002', password:'wfx4480', role:'editor', nickname:'管理员-θ' },
  { username:'user003', password:'qdf0212', role:'editor', nickname:'管理员-σ' },
  { username:'user004', password:'uil6918', role:'editor', nickname:'管理员-φ' },
  { username:'user005', password:'aud4706', role:'user', nickname:'药师005' },
  { username:'user006', password:'uug4540', role:'user', nickname:'药师006' },
  { username:'user007', password:'fia2906', role:'user', nickname:'药师007' },
  { username:'user008', password:'ksj9168', role:'user', nickname:'药师008' },
  { username:'user009', password:'fvk9285', role:'user', nickname:'药师009' },
  { username:'user010', password:'jog6468', role:'user', nickname:'药师010' },
  { username:'user011', password:'jdl6400', role:'user', nickname:'药师011' },
  { username:'user012', password:'wox7858', role:'user', nickname:'药师012' },
  { username:'user013', password:'mej1169', role:'user', nickname:'药师013' },
  { username:'user014', password:'kop6248', role:'user', nickname:'药师014' },
  { username:'user015', password:'voa2802', role:'user', nickname:'药师015' },
  { username:'user016', password:'rfj9770', role:'user', nickname:'药师016' },
  { username:'user017', password:'tmi6874', role:'user', nickname:'药师017' },
  { username:'user018', password:'aok3424', role:'user', nickname:'药师018' },
  { username:'user019', password:'oze2490', role:'user', nickname:'药师019' },
  { username:'user020', password:'iic6167', role:'user', nickname:'药师020' },
  { username:'user021', password:'tul6244', role:'user', nickname:'药师021' },
  { username:'user022', password:'alr4765', role:'user', nickname:'药师022' },
  { username:'user023', password:'ygi3591', role:'user', nickname:'药师023' },
  { username:'user024', password:'xly5273', role:'user', nickname:'药师024' },
  { username:'user025', password:'evc6832', role:'user', nickname:'药师025' },
  { username:'user026', password:'yyx8344', role:'user', nickname:'药师026' },
  { username:'user027', password:'beg8692', role:'user', nickname:'药师027' },
  { username:'user028', password:'wut0594', role:'user', nickname:'药师028' },
  { username:'user029', password:'erc8106', role:'user', nickname:'药师029' },
  { username:'user030', password:'uob5975', role:'user', nickname:'药师030' },
  { username:'user031', password:'axm9088', role:'user', nickname:'药师031' },
  { username:'user032', password:'bxd9433', role:'user', nickname:'药师032' },
  { username:'user033', password:'syi9344', role:'user', nickname:'药师033' },
  { username:'user034', password:'ulb2673', role:'user', nickname:'药师034' },
  { username:'user035', password:'mhp7919', role:'user', nickname:'药师035' },
  { username:'user036', password:'arq8755', role:'user', nickname:'药师036' },
  { username:'user037', password:'swg2474', role:'user', nickname:'药师037' },
  { username:'user038', password:'aao6401', role:'user', nickname:'药师038' },
  { username:'user039', password:'ltw9060', role:'user', nickname:'药师039' },
  { username:'user040', password:'olp7126', role:'user', nickname:'药师040' },
  { username:'user041', password:'bgv7820', role:'user', nickname:'药师041' },
  { username:'user042', password:'ktk5155', role:'user', nickname:'药师042' },
  { username:'user043', password:'yyv4970', role:'user', nickname:'药师043' },
  { username:'user044', password:'rcv9750', role:'user', nickname:'药师044' },
  { username:'user045', password:'aqr6576', role:'user', nickname:'药师045' },
  { username:'user046', password:'srr9565', role:'user', nickname:'药师046' },
  { username:'user047', password:'hqg8089', role:'user', nickname:'药师047' },
  { username:'user048', password:'hwh5105', role:'user', nickname:'药师048' },
  { username:'user049', password:'cpl6243', role:'user', nickname:'药师049' },
  { username:'user050', password:'kes2963', role:'user', nickname:'药师050' },
  { username:'user051', password:'mgs6108', role:'user', nickname:'药师051' },
  { username:'user052', password:'pqt6546', role:'user', nickname:'药师052' },
  { username:'user053', password:'bkh8622', role:'user', nickname:'药师053' },
  { username:'user054', password:'oyj0196', role:'user', nickname:'药师054' },
  { username:'user055', password:'dqt3880', role:'user', nickname:'药师055' },
  { username:'user056', password:'bkl7793', role:'user', nickname:'药师056' },
  { username:'user057', password:'bdi2710', role:'user', nickname:'药师057' },
  { username:'user058', password:'qoh8084', role:'user', nickname:'药师058' },
  { username:'user059', password:'con7706', role:'user', nickname:'药师059' },
  { username:'user060', password:'hzq5595', role:'user', nickname:'药师060' },
  { username:'user061', password:'ltt9596', role:'user', nickname:'药师061' },
  { username:'user062', password:'vur9098', role:'user', nickname:'药师062' },
  { username:'user063', password:'fse2407', role:'user', nickname:'药师063' },
  { username:'user064', password:'kfx2775', role:'user', nickname:'药师064' },
  { username:'user065', password:'kvy7161', role:'user', nickname:'药师065' },
  { username:'user066', password:'jib0337', role:'user', nickname:'药师066' },
  { username:'user067', password:'lcp5438', role:'user', nickname:'药师067' },
  { username:'user068', password:'jkd7500', role:'user', nickname:'药师068' },
  { username:'user069', password:'lle0916', role:'user', nickname:'药师069' },
  { username:'user070', password:'lpi3638', role:'user', nickname:'药师070' },
  { username:'user071', password:'mde5773', role:'user', nickname:'药师071' },
  { username:'user072', password:'lhp8465', role:'user', nickname:'药师072' },
  { username:'user073', password:'oai1814', role:'user', nickname:'药师073' },
  { username:'user074', password:'ydc4621', role:'user', nickname:'药师074' },
  { username:'user075', password:'jsh8949', role:'user', nickname:'药师075' },
  { username:'user076', password:'yvu0114', role:'user', nickname:'药师076' },
  { username:'user077', password:'yvn9043', role:'user', nickname:'药师077' },
  { username:'user078', password:'hzp7814', role:'user', nickname:'药师078' },
  { username:'user079', password:'pur3672', role:'user', nickname:'药师079' },
  { username:'user080', password:'dhf5035', role:'user', nickname:'药师080' },
  { username:'user081', password:'mxi5663', role:'user', nickname:'药师081' },
  { username:'user082', password:'hdl3927', role:'user', nickname:'药师082' },
  { username:'user083', password:'ote9553', role:'user', nickname:'药师083' },
  { username:'user084', password:'jnm8104', role:'user', nickname:'药师084' },
  { username:'user085', password:'uxu1384', role:'user', nickname:'药师085' },
  { username:'user086', password:'umh5082', role:'user', nickname:'药师086' },
  { username:'user087', password:'pbe6518', role:'user', nickname:'药师087' },
  { username:'user088', password:'lrg7946', role:'user', nickname:'药师088' },
  { username:'user089', password:'gkc3090', role:'user', nickname:'药师089' },
  { username:'user090', password:'vej5612', role:'user', nickname:'药师090' },
  { username:'user091', password:'wsl4716', role:'user', nickname:'药师091' },
  { username:'user092', password:'paz7579', role:'user', nickname:'药师092' },
  { username:'user093', password:'zkl3098', role:'user', nickname:'药师093' },
  { username:'user094', password:'qay3807', role:'user', nickname:'药师094' },
  { username:'user095', password:'jev3160', role:'user', nickname:'药师095' },
  { username:'user096', password:'non7417', role:'user', nickname:'药师096' },
  { username:'user097', password:'orw7159', role:'user', nickname:'药师097' },
  { username:'user098', password:'fyr9830', role:'user', nickname:'药师098' },
  { username:'user099', password:'cos4179', role:'user', nickname:'药师099' },
];

// ═══ Supabase 用户同步 ═══
function loadUsersFromSupabase(callback) {
  if (!_online || typeof _supabase === 'undefined' || !_supabase) {
    initSupabase();
    if (!_supabase) { if(callback) callback(null); return; }
  }
  _supabase.from('profiles').select('id,username,password,nickname,display_name,role,source,email,security_q1,security_a1,security_q2,security_a2,security_q3,security_a3,pw_reset_count,pw_reset_date,created_at').then(function(r){
    if (r.error) { console.warn('Supabase 加载用户失败:', r.error); if(callback) callback(null); return; }
    if (r.data && r.data.length > 0) {
      _sbUsers = r.data;
      _sbUsersLoaded = true;
      var localUsers = r.data.map(function(p){
        return { username: p.username, password: p.password || '', nickname: p.display_name || p.nickname || p.username, role: p.role || 'user', source: p.source || 'manual', id: p.id, email: p.email || '', security_q1: p.security_q1, security_a1: p.security_a1, security_q2: p.security_q2, security_a2: p.security_a2, security_q3: p.security_q3, security_a3: p.security_a3, pw_reset_count: p.pw_reset_count || 0, pw_reset_date: p.pw_reset_date };
      });
      localStorage.setItem('custom_users', JSON.stringify(localUsers));
      if (callback) callback(localUsers);
    } else {
      if (callback) callback(null);
    }
  }).catch(function(e){
    console.warn('Supabase 加载用户异常:', e);
    if (callback) callback(null);
  });
}

function syncUserToSupabase(username, data) {
  if (!_online) return;
  initSupabase();
  if (!_supabase) return;
  var existing = _sbUsers.find(function(u){ return u.username === username; });
  var payload = { username: username, password: data.password, nickname: data.nickname, display_name: data.nickname, role: data.role || 'user', source: data.source || 'manual', email: data.email || '' };
  if (data.security_q1 !== undefined) payload.security_q1 = data.security_q1;
  if (data.security_a1 !== undefined) payload.security_a1 = data.security_a1;
  if (data.security_q2 !== undefined) payload.security_q2 = data.security_q2;
  if (data.security_a2 !== undefined) payload.security_a2 = data.security_a2;
  if (data.security_q3 !== undefined) payload.security_q3 = data.security_q3;
  if (data.security_a3 !== undefined) payload.security_a3 = data.security_a3;
  if (data.pw_reset_count !== undefined) payload.pw_reset_count = data.pw_reset_count;
  if (data.pw_reset_date !== undefined) payload.pw_reset_date = data.pw_reset_date;
  if (existing && existing.id) {
    payload.id = existing.id;
  } else {
    var hash = 0;
    for (var i = 0; i < username.length; i++) { hash = ((hash << 5) - hash) + username.charCodeAt(i); hash |= 0; }
    payload.id = '00000000-0000-0000-0000-' + String(Math.abs(hash)).padStart(12, '0').slice(0, 12);
  }
  _supabase.from('profiles').upsert(payload, { onConflict: 'username' }).then(function(r){
    if (r.error) console.warn('Supabase 同步用户失败:', r.error);
  }).catch(function(e){ console.warn('Supabase 同步用户异常:', e); });
}

function deleteUserFromSupabase(username) {
  if (!_online) return;
  initSupabase();
  if (!_supabase) return;
  _supabase.from('profiles').delete().eq('username', username).then(function(r){
    if (r.error) console.warn('Supabase 删除用户失败:', r.error);
  }).catch(function(e){ console.warn('Supabase 删除用户异常:', e); });
}

// ═══ 用户管理 ═══
function findUser(username) {
  const users = getUsers();
  return users.find(u => u.username === username);
}

function getUsers() {
  try {
    var saved = localStorage.getItem('custom_users');
    if (saved) {
      var users = JSON.parse(saved);
      USERS.forEach(function(su){
        var local = users.find(function(u){ return u.username === su.username; });
        if (local) local.password = su.password;
      });
      return users;
    }
  } catch(e) {}
  localStorage.setItem('custom_users', JSON.stringify(USERS));
  return USERS.slice();
}

function saveUsers(users) {
  localStorage.setItem('custom_users', JSON.stringify(users));
}

function addUser(user) {
  var users = getUsers();
  if (users.find(u => u.username === user.username)) return { ok: false, msg: '用户名已存在' };
  users.push(user);
  saveUsers(users);
  syncUserToSupabase(user.username, user);
  return { ok: true };
}

function removeUser(username) {
  var users = getUsers();
  users = users.filter(u => u.username !== username);
  saveUsers(users);
  deleteUserFromSupabase(username);
}

function updateUser(username, updates) {
  var users = getUsers();
  var idx = users.findIndex(u => u.username === username);
  if (idx < 0) return { ok: false };
  Object.assign(users[idx], updates);
  saveUsers(users);
  syncUserToSupabase(username, users[idx]);
  return { ok: true };
}

// ═══ 登录 ═══
function login(username, password) {
  var lock = checkLock(username);
  if (lock.locked) return { ok:false, msg:'账户已锁定，'+(lock.remain > 60 ? Math.ceil(lock.remain/60)+'分钟' : lock.remain+'秒')+'后重试' };

  const u = findUser(username);
  if (!u) return { ok:false, msg:'用户不存在' };
  if (u.password !== password) {
    recordFail(username);
    var lk = checkLock(username);
    if (lk.locked) return { ok:false, msg:'密码错误，账户已锁定'+(lk.remain > 60 ? Math.ceil(lk.remain/60)+'分钟' : lk.remain+'秒')+'后重试' };
    return { ok:false, msg:'密码错误，剩余'+(5-lk.count)+'次尝试' };
  }
  clearFails(username);
  const saved = JSON.parse(localStorage.getItem('user_' + u.username) || '{}');
  if (saved.nickname) u.nickname = saved.nickname;
  currentUser = u;
  localStorage.setItem('currentUser', u.username);
  return { ok:true, user:u };
}

// ═══ 登录限次 ═══
function checkLock(username) {
  try {
    var data = JSON.parse(localStorage.getItem('login_fails_' + username) || '{"count":0,"time":0}');
    if (data.count >= 5) {
      var elapsed = Math.floor((Date.now() - data.time) / 1000);
      var remain = 900 - elapsed;
      if (remain > 0) return { locked: true, count: data.count, remain: remain };
      data = { count: 0, time: 0 };
    }
    return { locked: false, count: data.count, remain: 0 };
  } catch(e) { return { locked: false, count: 0, remain: 0 }; }
}

function recordFail(username) {
  var data = JSON.parse(localStorage.getItem('login_fails_' + username) || '{"count":0,"time":0}');
  if (data.count >= 5 && Date.now() - data.time < 900000) return;
  if (Date.now() - data.time > 900000) { data.count = 0; }
  data.count++;
  data.time = Date.now();
  localStorage.setItem('login_fails_' + username, JSON.stringify(data));
}

function clearFails(username) {
  localStorage.removeItem('login_fails_' + username);
}

function logout() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  clearRemember();
}

// ═══ 记住密码（15天免登录） ═══
function saveRemember(username, password) {
  var exp = Date.now() + 15 * 24 * 60 * 60 * 1000; // 15天
  localStorage.setItem('remember_login', JSON.stringify({u:username, p:password, exp:exp}));
}

function loadRemember() {
  try{
    var data = JSON.parse(localStorage.getItem('remember_login'));
    if (!data) return null;
    if (data.exp && Date.now() > data.exp) {
      localStorage.removeItem('remember_login');
      return null;
    }
    return data;
  }catch(e){return null;}
}

function clearRemember() {
  localStorage.removeItem('remember_login');
}

function isEditor() { return currentUser && (currentUser.role === 'admin' || currentUser.role === 'editor'); }

function updateNickname(newName) {
  if (!currentUser) return;
  currentUser.nickname = newName;
  const saved = JSON.parse(localStorage.getItem('user_' + currentUser.username) || '{}');
  saved.nickname = newName;
  localStorage.setItem('user_' + currentUser.username, JSON.stringify(saved));
  document.getElementById('profile-nickname').textContent = newName;
  // 同步到 Supabase
  syncUserToSupabase(currentUser.username, { password: currentUser.password, nickname: newName, role: currentUser.role });
  toast('昵称已修改');
}

function changePassword(oldPw, newPw) {
  if (!currentUser) return { ok:false, msg:'未登录' };
  var users = getUsers();
  var u = users.find(function(x){ return x.username === currentUser.username; });
  if (u.password !== oldPw) return { ok:false, msg:'原密码错误' };
  u.password = newPw;
  currentUser.password = newPw;
  saveUsers(users);
  var saved = JSON.parse(localStorage.getItem('user_' + currentUser.username) || '{}');
  saved.password = newPw;
  localStorage.setItem('user_' + currentUser.username, JSON.stringify(saved));
  // 同步到 Supabase
  syncUserToSupabase(currentUser.username, { password: newPw, nickname: currentUser.nickname, role: currentUser.role });
  clearRemember();
  return { ok:true };
}

// ═══ 安全提问预置列表 ═══
var SECURITY_QUESTIONS = [
  '你的小学名称是什么？',
  '你的初中名称是什么？',
  '你的高中名称是什么？',
  '你的家乡是哪里？',
  '你最喜欢的颜色是什么？',
  '你最喜欢的动物是什么？',
  '你的出生地是哪里？',
  '你母亲的姓名是什么？',
  '你父亲的姓名是什么？',
  '你的第一只宠物名字是什么？',
  '你最崇拜的人是谁？',
  '你的生日是几月几日？'
];

// ═══ 用户注册（自注册）═══
function registerUser(username, email, sq1, sa1, sq2, sa2, sq3, sa3) {
  var users = getUsers();
  if (!username || username.length < 3) return { ok:false, msg:'用户名至少3个字符' };
  if (!email || email.indexOf('@') < 0) return { ok:false, msg:'请输入有效的邮箱地址' };
  if (users.find(u => u.username === username)) return { ok:false, msg:'用户名已存在' };
  if (users.find(u => u.email === email)) return { ok:false, msg:'该邮箱已被注册' };
  if (!sa1 || !sa2 || !sa3) return { ok:false, msg:'请填写所有密保答案' };
  // 默认昵称 = 用户名
  var password = genRandPw();
  var newUser = {
    username: username,
    password: password,
    nickname: username,
    role: 'user',
    source: 'email',
    email: email,
    security_q1: sq1, security_a1: sa1,
    security_q2: sq2, security_a2: sa2,
    security_q3: sq3, security_a3: sa3
  };
  users.push(newUser);
  saveUsers(users);
  syncUserToSupabase(username, newUser);
  return { ok:true, username: username, password: password };
}

// ═══ 找回密码（密保验证）═══
function forgotPasswordVerify(username, email) {
  var users = getUsers();
  var u = users.find(function(x){ return x.username === username });
  if (!u) return { ok:false, step:'check', msg:'用户不存在' };
  if (u.email !== email) return { ok:false, step:'check', msg:'邮箱不匹配' };
  if (!u.security_q1) return { ok:false, step:'check', msg:'该用户未设置密保问题，请联系管理员重置密码' };
  // 检查每日重置次数限制
  var today = new Date().toISOString().slice(0,10);
  var resetCount = u.pw_reset_count || 0;
  var resetDate = u.pw_reset_date || '';
  if (resetDate === today && resetCount >= 3) {
    return { ok:false, step:'check', msg:'今日重置次数已达上限（3次），请明天再试' };
  }
  return { ok:true, step:'questions', questions: [u.security_q1, u.security_q2, u.security_q3] };
}

function forgotPasswordReset(username, email, a1, a2, a3) {
  var users = getUsers();
  var u = users.find(function(x){ return x.username === username });
  if (!u) return { ok:false, msg:'用户不存在' };
  if (u.email !== email) return { ok:false, msg:'邮箱不匹配' };
  // 验证密保答案（不区分大小写）
  if ((u.security_a1 || '').toLowerCase() !== (a1 || '').toLowerCase()) return { ok:false, msg:'密保答案1错误' };
  if ((u.security_a2 || '').toLowerCase() !== (a2 || '').toLowerCase()) return { ok:false, msg:'密保答案2错误' };
  if ((u.security_a3 || '').toLowerCase() !== (a3 || '').toLowerCase()) return { ok:false, msg:'密保答案3错误' };
  // 验证通过，生成新密码
  var newPw = genRandPw();
  u.password = newPw;
  // 更新重置计数
  var today = new Date().toISOString().slice(0,10);
  if (u.pw_reset_date === today) {
    u.pw_reset_count = (u.pw_reset_count || 0) + 1;
  } else {
    u.pw_reset_count = 1;
    u.pw_reset_date = today;
  }
  saveUsers(users);
  syncUserToSupabase(username, { password: newPw, pw_reset_count: u.pw_reset_count, pw_reset_date: u.pw_reset_date });
  return { ok:true, username: username, password: newPw };
}
