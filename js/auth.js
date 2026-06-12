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
  { username:'user005', password:'aud4706', role:'user', nickname:'用户005' },
  { username:'user006', password:'uug4540', role:'user', nickname:'用户006' },
  { username:'user007', password:'fia2906', role:'user', nickname:'用户007' },
  { username:'user008', password:'ksj9168', role:'user', nickname:'用户008' },
  { username:'user009', password:'fvk9285', role:'user', nickname:'用户009' },
  { username:'user010', password:'jog6468', role:'user', nickname:'用户010' },
  { username:'user011', password:'jdl6400', role:'user', nickname:'用户011' },
  { username:'user012', password:'wox7858', role:'user', nickname:'用户012' },
  { username:'user013', password:'mej1169', role:'user', nickname:'用户013' },
  { username:'user014', password:'kop6248', role:'user', nickname:'用户014' },
  { username:'user015', password:'voa2802', role:'user', nickname:'用户015' },
  { username:'user016', password:'rfj9770', role:'user', nickname:'用户016' },
  { username:'user017', password:'tmi6874', role:'user', nickname:'用户017' },
  { username:'user018', password:'aok3424', role:'user', nickname:'用户018' },
  { username:'user019', password:'oze2490', role:'user', nickname:'用户019' },
  { username:'user020', password:'iic6167', role:'user', nickname:'用户020' },
  { username:'user021', password:'tul6244', role:'user', nickname:'用户021' },
  { username:'user022', password:'alr4765', role:'user', nickname:'用户022' },
  { username:'user023', password:'ygi3591', role:'user', nickname:'用户023' },
  { username:'user024', password:'xly5273', role:'user', nickname:'用户024' },
  { username:'user025', password:'evc6832', role:'user', nickname:'用户025' },
  { username:'user026', password:'yyx8344', role:'user', nickname:'用户026' },
  { username:'user027', password:'beg8692', role:'user', nickname:'用户027' },
  { username:'user028', password:'wut0594', role:'user', nickname:'用户028' },
  { username:'user029', password:'erc8106', role:'user', nickname:'用户029' },
  { username:'user030', password:'uob5975', role:'user', nickname:'用户030' },
  { username:'user031', password:'axm9088', role:'user', nickname:'用户031' },
  { username:'user032', password:'bxd9433', role:'user', nickname:'用户032' },
  { username:'user033', password:'syi9344', role:'user', nickname:'用户033' },
  { username:'user034', password:'ulb2673', role:'user', nickname:'用户034' },
  { username:'user035', password:'mhp7919', role:'user', nickname:'用户035' },
  { username:'user036', password:'arq8755', role:'user', nickname:'用户036' },
  { username:'user037', password:'swg2474', role:'user', nickname:'用户037' },
  { username:'user038', password:'aao6401', role:'user', nickname:'用户038' },
  { username:'user039', password:'ltw9060', role:'user', nickname:'用户039' },
  { username:'user040', password:'olp7126', role:'user', nickname:'用户040' },
  { username:'user041', password:'bgv7820', role:'user', nickname:'用户041' },
  { username:'user042', password:'ktk5155', role:'user', nickname:'用户042' },
  { username:'user043', password:'yyv4970', role:'user', nickname:'用户043' },
  { username:'user044', password:'rcv9750', role:'user', nickname:'用户044' },
  { username:'user045', password:'aqr6576', role:'user', nickname:'用户045' },
  { username:'user046', password:'srr9565', role:'user', nickname:'用户046' },
  { username:'user047', password:'hqg8089', role:'user', nickname:'用户047' },
  { username:'user048', password:'hwh5105', role:'user', nickname:'用户048' },
  { username:'user049', password:'cpl6243', role:'user', nickname:'用户049' },
  { username:'user050', password:'kes2963', role:'user', nickname:'用户050' },
  { username:'user051', password:'mgs6108', role:'user', nickname:'用户051' },
  { username:'user052', password:'pqt6546', role:'user', nickname:'用户052' },
  { username:'user053', password:'bkh8622', role:'user', nickname:'用户053' },
  { username:'user054', password:'oyj0196', role:'user', nickname:'用户054' },
  { username:'user055', password:'dqt3880', role:'user', nickname:'用户055' },
  { username:'user056', password:'bkl7793', role:'user', nickname:'用户056' },
  { username:'user057', password:'bdi2710', role:'user', nickname:'用户057' },
  { username:'user058', password:'qoh8084', role:'user', nickname:'用户058' },
  { username:'user059', password:'con7706', role:'user', nickname:'用户059' },
  { username:'user060', password:'hzq5595', role:'user', nickname:'用户060' },
  { username:'user061', password:'ltt9596', role:'user', nickname:'用户061' },
  { username:'user062', password:'vur9098', role:'user', nickname:'用户062' },
  { username:'user063', password:'fse2407', role:'user', nickname:'用户063' },
  { username:'user064', password:'kfx2775', role:'user', nickname:'用户064' },
  { username:'user065', password:'kvy7161', role:'user', nickname:'用户065' },
  { username:'user066', password:'jib0337', role:'user', nickname:'用户066' },
  { username:'user067', password:'lcp5438', role:'user', nickname:'用户067' },
  { username:'user068', password:'jkd7500', role:'user', nickname:'用户068' },
  { username:'user069', password:'lle0916', role:'user', nickname:'用户069' },
  { username:'user070', password:'lpi3638', role:'user', nickname:'用户070' },
  { username:'user071', password:'mde5773', role:'user', nickname:'用户071' },
  { username:'user072', password:'lhp8465', role:'user', nickname:'用户072' },
  { username:'user073', password:'oai1814', role:'user', nickname:'用户073' },
  { username:'user074', password:'ydc4621', role:'user', nickname:'用户074' },
  { username:'user075', password:'jsh8949', role:'user', nickname:'用户075' },
  { username:'user076', password:'yvu0114', role:'user', nickname:'用户076' },
  { username:'user077', password:'yvn9043', role:'user', nickname:'用户077' },
  { username:'user078', password:'hzp7814', role:'user', nickname:'用户078' },
  { username:'user079', password:'pur3672', role:'user', nickname:'用户079' },
  { username:'user080', password:'dhf5035', role:'user', nickname:'用户080' },
  { username:'user081', password:'mxi5663', role:'user', nickname:'用户081' },
  { username:'user082', password:'hdl3927', role:'user', nickname:'用户082' },
  { username:'user083', password:'ote9553', role:'user', nickname:'用户083' },
  { username:'user084', password:'jnm8104', role:'user', nickname:'用户084' },
  { username:'user085', password:'uxu1384', role:'user', nickname:'用户085' },
  { username:'user086', password:'umh5082', role:'user', nickname:'用户086' },
  { username:'user087', password:'pbe6518', role:'user', nickname:'用户087' },
  { username:'user088', password:'lrg7946', role:'user', nickname:'用户088' },
  { username:'user089', password:'gkc3090', role:'user', nickname:'用户089' },
  { username:'user090', password:'vej5612', role:'user', nickname:'用户090' },
  { username:'user091', password:'wsl4716', role:'user', nickname:'用户091' },
  { username:'user092', password:'paz7579', role:'user', nickname:'用户092' },
  { username:'user093', password:'zkl3098', role:'user', nickname:'用户093' },
  { username:'user094', password:'qay3807', role:'user', nickname:'用户094' },
  { username:'user095', password:'jev3160', role:'user', nickname:'用户095' },
  { username:'user096', password:'non7417', role:'user', nickname:'用户096' },
  { username:'user097', password:'orw7159', role:'user', nickname:'用户097' },
  { username:'user098', password:'fyr9830', role:'user', nickname:'用户098' },
  { username:'user099', password:'cos4179', role:'user', nickname:'用户099' },
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
      // 从本地保存的 user_<username> 恢复昵称（避免 Supabase 旧数据覆盖）
      localUsers.forEach(function(u){
        var saved = JSON.parse(localStorage.getItem('user_' + u.username) || '{}');
        if (saved.nickname) u.nickname = saved.nickname;
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
  // 同步到 custom_users（确保下次加载正确）
  try {
    var users = JSON.parse(localStorage.getItem('custom_users') || '[]');
    var u = users.find(function(x){ return x.username === currentUser.username; });
    if (u) { u.nickname = newName; localStorage.setItem('custom_users', JSON.stringify(users)); }
  } catch(e) {}
  toast('昵称已修改');
}

// ═══ 找回用户名 ═══
function showFindUsername() {
  showModal('👤 找回用户名', 
    '<p style="font-size:13px;color:var(--text-light);text-align:center;margin-bottom:8px">输入你的昵称即可查看到对应的用户名</p>'
    + '<input id="find-name-input" placeholder="输入你的昵称" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);font:inherit;font-size:14px">'
    + '<div id="find-name-result" style="margin-top:8px;text-align:center;font-size:14px"></div>',
    [{label:'取消'},{label:'查找',primary:true,onClick:function(){
      var nickname = document.getElementById('find-name-input').value.trim();
      if (!nickname) { toast('请输入昵称'); return; }
      // 先从 getUsers() 查，再从 user_<用户名> localStorage 查
      var users = getUsers();
      var match = users.find(function(u){ return u.nickname === nickname; });
      if (!match) {
        // 遍历所有 localStorage user_<用户名> 条目查找
        try {
          for (var key in localStorage) {
            if (key.indexOf('user_') === 0) {
              var data = JSON.parse(localStorage.getItem(key) || '{}');
              if (data.nickname === nickname) {
                match = { username: key.slice(5), nickname: data.nickname };
                break;
              }
            }
          }
        } catch(e) {}
      }
      var resultEl = document.getElementById('find-name-result');
      if (match) {
        resultEl.innerHTML = '找到你的用户名：<b style="color:var(--primary);font-size:16px;user-select:all">' + match.username + '</b><br><span style="font-size:11px;color:var(--text-light)">点击上方用户名即可复制</span>';
      } else {
        resultEl.innerHTML = '<span style="color:var(--danger)">未找到匹配的用户名，请确认昵称是否正确</span>';
      }
    }}]
  );
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

// ═══ 安全提问（固定3个）═══
var SECURITY_QUESTIONS = [
  '你印象最深的人的名字？',
  '你的初中或小学班主任的名字？',
  '你最喜欢的一本书的名字？'
];

// ═══ 用户注册（自注册）═══
function registerUser(username, email, sq1, sa1, sq2, sa2, sq3, sa3) {
  var users = getUsers();
  if (!username || username.length < 5) return { ok:false, msg:'用户名至少5个字符' };
  if (!email || email.indexOf('@') < 0) return { ok:false, msg:'请输入有效的邮箱地址' };
  if (users.find(u => u.username === username)) return { ok:false, msg:'用户名已存在' };
  if (users.find(u => u.email === email)) return { ok:false, msg:'该邮箱已被注册' };
  if (!sa1 && !sa2 && !sa3) return { ok:false, msg:'请至少填写一个密保答案' };
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
  // email参数不再需要，直接检查密保
  if (!u.security_a1 && !u.security_a2 && !u.security_a3) return { ok:false, step:'check', msg:'该用户未设置密保问题，请联系管理员重置密码' };
  // 只返回有答案的问题
  var qs = [];
  if (u.security_a1) qs.push({ question: u.security_q1, idx: 1 });
  if (u.security_a2) qs.push({ question: u.security_q2, idx: 2 });
  if (u.security_a3) qs.push({ question: u.security_q3, idx: 3 });
  // 检查每日重置次数限制
  var today = new Date().toISOString().slice(0,10);
  var resetCount = u.pw_reset_count || 0;
  var resetDate = u.pw_reset_date || '';
  if (resetDate === today && resetCount >= 3) {
    return { ok:false, step:'check', msg:'今日重置次数已达上限（3次），请明天再试' };
  }
  return { ok:true, step:'questions', questions: qs };
}

function forgotPasswordReset(username, email, answers) {
  // answers = { 1: "答案1", 2: "答案2", 3: "答案3" } — 任选一个正确即可
  var users = getUsers();
  var u = users.find(function(x){ return x.username === username });
  if (!u) return { ok:false, msg:'用户不存在' };
  // 验证：任意一个答案匹配即通过
  var anyCorrect = false;
  var answersProvided = [];
  for (var k in answers) {
    if (answers.hasOwnProperty(k) && answers[k]) {
      answersProvided.push(parseInt(k));
      var expected = u['security_a' + k] || '';
      if (expected.toLowerCase() === answers[k].toLowerCase()) {
        anyCorrect = true;
      }
    }
  }
  if (!anyCorrect) return { ok:false, msg:'密保答案不正确，请核对后重试' };
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
