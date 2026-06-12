// ═══ 用户认证（Supabase 同步版） ═══
let currentUser = null;
var _sbUsersLoaded = false;
var _sbUsers = [];
var _online = typeof _online !== 'undefined' ? _online : true;
var _supabase = typeof _supabase !== 'undefined' ? _supabase : null;

// ═══ SHA256 哈希（纯JS实现，无外部依赖） ═══
function sha256(str) {
  function r(n,c){return (n>>>c)|(n<<(32-c));}
  function ch(x,y,z){return (x&y)^((~x)&z);}
  function maj(x,y,z){return (x&y)^(x&z)^(y&z);}
  function sigma0(x){return r(x,2)^r(x,13)^r(x,22);}
  function sigma1(x){return r(x,6)^r(x,11)^r(x,25);}
  function gamma0(x){return r(x,7)^r(x,18)^(x>>>3);}
  function gamma1(x){return r(x,17)^r(x,19)^(x>>>10);}
  var K = [0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
    0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
    0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
    0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
    0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
    0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
    0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
    0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
  var H = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
  var msg = [];
  for (var i = 0; i < str.length; i++) { msg.push(str.charCodeAt(i)); }
  var bitLen = msg.length * 8;
  msg.push(0x80);
  while ((msg.length * 8) % 512 !== 448) msg.push(0);
  msg.push((bitLen >>> 24) & 0xff); msg.push((bitLen >>> 16) & 0xff);
  msg.push((bitLen >>> 8) & 0xff); msg.push(bitLen & 0xff);
  for (var j = 0; j < msg.length; j += 64) {
    var W = new Array(64);
    for (var t = 0; t < 16; t++) { W[t] = (msg[j+t*4]<<24)|(msg[j+t*4+1]<<16)|(msg[j+t*4+2]<<8)|msg[j+t*4+3]; }
    for (var t2 = 16; t2 < 64; t2++) { W[t2] = (gamma1(W[t2-2]) + W[t2-7] + gamma0(W[t2-15]) + W[t2-16]) | 0; }
    var a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
    for (var t3 = 0; t3 < 64; t3++) {
      var T1 = (h + sigma1(e) + ch(e,f,g) + K[t3] + W[t3]) | 0;
      var T2 = (sigma0(a) + maj(a,b,c)) | 0;
      h = g; g = f; f = e; e = (d + T1) | 0; d = c; c = b; b = a; a = (T1 + T2) | 0;
    }
    H[0] = (H[0] + a) | 0; H[1] = (H[1] + b) | 0; H[2] = (H[2] + c) | 0;
    H[3] = (H[3] + d) | 0; H[4] = (H[4] + e) | 0; H[5] = (H[5] + f) | 0;
    H[6] = (H[6] + g) | 0; H[7] = (H[7] + h) | 0;
  }
  return H.map(function(n){ return ('00000000' + (n>>>0).toString(16)).slice(-8); }).join('');
}
// ═══ 密码工具函数 ═══
function hashPw(pw) { return sha256(pw); }
function checkPw(input, storedUser) {
  if (!storedUser) return false;
  if (storedUser.pw_hashed) {
    return storedUser.password === hashPw(input);
  }
  return storedUser.password === input;
}
function hashAndMigratePw(storedUser) {
  if (storedUser.pw_hashed) return; // 已经是哈希
  storedUser.password = hashPw(storedUser.password);
  storedUser.pw_hashed = true;
}

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
  _supabase.from('profiles').select('id,username,password,pw_hashed,nickname,display_name,role,source,email,security_q1,security_a1,security_q2,security_a2,security_q3,security_a3,pw_reset_count,pw_reset_date,created_at').then(function(r){
    if (r.error) { console.warn('Supabase 加载用户失败:', r.error); if(callback) callback(null); return; }
    if (r.data && r.data.length > 0) {
      _sbUsers = r.data;
      _sbUsersLoaded = true;
      var localUsers = r.data.map(function(p){
        return { username: p.username, password: p.password || '', pw_hashed: p.pw_hashed ? true : false, nickname: p.display_name || p.nickname || p.username, role: p.role || 'user', source: p.source || 'manual', id: p.id, email: p.email || '', security_q1: p.security_q1, security_a1: p.security_a1, security_q2: p.security_q2, security_a2: p.security_a2, security_q3: p.security_q3, security_a3: p.security_a3, pw_reset_count: p.pw_reset_count || 0, pw_reset_date: p.pw_reset_date };
      });
      // 从本地保存的 user_<username> 恢复昵称和密保数据（避免 Supabase 旧数据覆盖）
      localUsers.forEach(function(u){
        var saved = JSON.parse(localStorage.getItem('user_' + u.username) || '{}');
        if (saved.nickname) u.nickname = saved.nickname;
        // 优先使用本地密码（可能已哈希），否则用服务器密码
        if (saved.password) u.password = saved.password;
        if (saved.pw_hashed) u.pw_hashed = true;
        if (saved.security_a1) u.security_a1 = saved.security_a1;
        if (saved.security_a2) u.security_a2 = saved.security_a2;
        if (saved.security_a3) u.security_a3 = saved.security_a3;
        if (saved.security_q1) u.security_q1 = saved.security_q1;
        if (saved.security_q2) u.security_q2 = saved.security_q2;
        if (saved.security_q3) u.security_q3 = saved.security_q3;
        // 同步写入 user_<用户名>（确保后续登录恢复）
        Object.assign(saved, { nickname: u.nickname, password: u.password, pw_hashed: u.pw_hashed ? true : undefined, security_q1: u.security_q1 || '', security_a1: u.security_a1 || '', security_q2: u.security_q2 || '', security_a2: u.security_a2 || '', security_q3: u.security_q3 || '', security_a3: u.security_a3 || '' });
        localStorage.setItem('user_' + u.username, JSON.stringify(saved));
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
  var payload = { username: username, password: data.password, pw_hashed: data.pw_hashed ? true : false, nickname: data.nickname, display_name: data.nickname, role: data.role || 'user', source: data.source || 'manual', email: data.email || '' };
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
  var saved = null;
  try {
    saved = localStorage.getItem('custom_users');
    if (saved) {
      var users = JSON.parse(saved);
      // 检查是否需要更新默认昵称（如 药师→用户）
      var needSave = false;
      USERS.forEach(function(su){
        var local = users.find(function(u){ return u.username === su.username; });
        if (local) {
          // 如果 localStorage 的昵称是旧版默认昵称，更新为新版
          if (local.nickname && su.nickname && local.nickname !== su.nickname) {
            var oldKeys = ['药师','管理员-λ','管理员-θ','管理员-φ','管理员-σ'];
            var isOld = oldKeys.some(function(k){ return local.nickname.indexOf(k) === 0; });
            if (isOld) { local.nickname = su.nickname; needSave = true; }
          }
        } else {
          users.push(su);
        }
      });
      if (needSave) localStorage.setItem('custom_users', JSON.stringify(users));
      return users;
    }
  } catch(e) { console.warn('getUsers 解析失败:', e); if (saved) { try { return JSON.parse(saved); } catch(e2) {} } }
  localStorage.setItem('custom_users', JSON.stringify(USERS));
  return USERS.slice();
}

function saveUsers(users) {
  localStorage.setItem('custom_users', JSON.stringify(users));
}

function addUser(user) {
  var users = getUsers();
  if (users.find(u => u.username === user.username)) return { ok: false, msg: '用户名已存在' };
  user.password = hashPw(user.password);
  user.pw_hashed = true;
  users.push(user);
  saveUsers(users);
  syncUserToSupabase(user.username, user);
  // 同时写入 user_<用户名>（确保更新后不丢失）
  localStorage.setItem('user_' + user.username, JSON.stringify({ nickname: user.nickname, password: user.password, pw_hashed: true }));
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
  // 如果更新中包含密码，自动哈希
  if (updates.password !== undefined && !updates.pw_hashed) {
    updates.password = hashPw(updates.password);
    updates.pw_hashed = true;
  }
  Object.assign(users[idx], updates);
  saveUsers(users);
  syncUserToSupabase(username, users[idx]);
  // 同时保存到 user_<username>（确保下次登录安全数据不受Supabase覆盖影响）
  var saved = JSON.parse(localStorage.getItem('user_' + username) || '{}');
  Object.assign(saved, updates);
  localStorage.setItem('user_' + username, JSON.stringify(saved));
  return { ok: true };
}

// ═══ 登录 ═══
function login(username, password) {
  var lock = checkLock(username);
  if (lock.locked) return { ok:false, msg:'账户已锁定，'+(lock.remain > 60 ? Math.ceil(lock.remain/60)+'分钟' : lock.remain+'秒')+'后重试' };

  const u = findUser(username);
  if (!u) return { ok:false, msg:'用户不存在' };
  if (!checkPw(password, u)) {
    recordFail(username);
    var lk = checkLock(username);
    if (lk.locked) return { ok:false, msg:'密码错误，账户已锁定'+(lk.remain > 60 ? Math.ceil(lk.remain/60)+'分钟' : lk.remain+'秒')+'后重试' };
    return { ok:false, msg:'密码错误，剩余'+(5-lk.count)+'次尝试' };
  }
  // 登录成功 → 如果是明文密码，自动升级为哈希存储
  hashAndMigratePw(u);
  var users = getUsers();
  var ui = users.findIndex(function(x){ return x.username === u.username; });
  if (ui >= 0) { users[ui].password = u.password; users[ui].pw_hashed = true; saveUsers(users); }
  clearFails(username);
  const saved = JSON.parse(localStorage.getItem('user_' + u.username) || '{}');
  if (saved.nickname) u.nickname = saved.nickname;
  // 恢复密保等数据（避免被Supabase旧数据覆盖）
  if (saved.security_a1) u.security_a1 = saved.security_a1;
  if (saved.security_a2) u.security_a2 = saved.security_a2;
  if (saved.security_a3) u.security_a3 = saved.security_a3;
  if (saved.security_q1) u.security_q1 = saved.security_q1;
  if (saved.security_q2) u.security_q2 = saved.security_q2;
  if (saved.security_q3) u.security_q3 = saved.security_q3;
  // 登录时将当前用户所有数据同步到 user_<用户名>（防止后续覆盖丢失）
  Object.assign(saved, { nickname: u.nickname, password: u.password, pw_hashed: u.pw_hashed ? true : undefined, security_q1: u.security_q1 || '', security_a1: u.security_a1 || '', security_q2: u.security_q2 || '', security_a2: u.security_a2 || '', security_q3: u.security_q3 || '', security_a3: u.security_a3 || '' });
  localStorage.setItem('user_' + u.username, JSON.stringify(saved));
  currentUser = u;
  localStorage.setItem('currentUser', u.username);
  // 同步哈希密码到 Supabase
  if (_online && _supabase) syncUserToSupabase(u.username, { password: u.password, nickname: u.nickname, role: u.role, pw_hashed: true });
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
    [{label:'知道啦'},{label:'查找',primary:true,onClick:function(){
      var nickname = document.getElementById('find-name-input').value.trim();
      if (!nickname) { toast('请输入昵称'); return false; }
      // 先从 getUsers() 查，再从 user_<用户名> localStorage 查
      var users = getUsers();
      var match = users.find(function(u){ return u.nickname === nickname; });
      if (!match) {
        // 遍历所有 localStorage user_<用户名> 条目查找（用下标遍历兼容所有浏览器）
        try {
          for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key && key.indexOf('user_') === 0) {
              var data = JSON.parse(localStorage.getItem(key) || '{}');
              if (data.nickname === nickname) {
                match = { username: key.slice(5), nickname: data.nickname };
                break;
              }
            }
          }
        } catch(e) {}
      }
      // 最后从 Supabase 缓存查找
      if (!match && typeof _sbUsers !== 'undefined' && _sbUsers.length > 0) {
        var su = _sbUsers.find(function(u){ return (u.display_name || u.nickname) === nickname; });
        if (su) match = { username: su.username, nickname: su.display_name || su.nickname };
      }
      var resultEl = document.getElementById('find-name-result');
      if (match) {
        resultEl.innerHTML = '找到你的用户名：<b style="color:var(--primary);font-size:16px;user-select:all">' + match.username + '</b><br><span style="font-size:11px;color:var(--text-light)">点击上方用户名即可复制</span>';
      } else {
        resultEl.innerHTML = '<span style="color:var(--danger)">未找到匹配的用户名，请确认昵称是否正确</span>';
      }
      return false;
    }}]
  );
}

function changePassword(oldPw, newPw) {
  if (!currentUser) return { ok:false, msg:'未登录' };
  var users = getUsers();
  var u = users.find(function(x){ return x.username === currentUser.username; });
  if (!checkPw(oldPw, u)) return { ok:false, msg:'原密码错误' };
  newPw = hashPw(newPw);
  u.password = newPw;
  u.pw_hashed = true;
  currentUser.password = newPw;
  saveUsers(users);
  var saved = JSON.parse(localStorage.getItem('user_' + currentUser.username) || '{}');
  saved.password = newPw;
  saved.pw_hashed = true;
  localStorage.setItem('user_' + currentUser.username, JSON.stringify(saved));
  // 同步到 Supabase
  syncUserToSupabase(currentUser.username, { password: newPw, pw_hashed: true, nickname: currentUser.nickname, role: currentUser.role });
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
    password: hashPw(password),
    pw_hashed: true,
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
  // 如果本地用户没有密保，尝试从 Supabase 缓存获取
  if (!u.security_a1 && !u.security_a2 && !u.security_a3) {
    if (typeof _sbUsers !== 'undefined' && _sbUsers.length > 0) {
      var su = _sbUsers.find(function(x){ return x.username === username; });
      if (su) {
        u.security_q1 = su.security_q1; u.security_a1 = su.security_a1;
        u.security_q2 = su.security_q2; u.security_a2 = su.security_a2;
        u.security_q3 = su.security_q3; u.security_a3 = su.security_a3;
      }
    }
    // Supabase 还没加载完，提示重试
    if (!u.security_a1 && !u.security_a2 && !u.security_a3 && !_sbUsersLoaded) {
      return { ok:false, step:'check', msg:'正在从服务器加载数据，请稍后再点击找回密码' };
    }
  }
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
  u.password = hashPw(newPw);
  u.pw_hashed = true;
  // 更新重置计数
  var today = new Date().toISOString().slice(0,10);
  if (u.pw_reset_date === today) {
    u.pw_reset_count = (u.pw_reset_count || 0) + 1;
  } else {
    u.pw_reset_count = 1;
    u.pw_reset_date = today;
  }
  saveUsers(users);
  // 同步完整用户数据到 Supabase（包含昵称、角色等，防止被覆盖清空）
  syncUserToSupabase(username, u);
  // 同时写入 user_<用户名>
  var saved = JSON.parse(localStorage.getItem('user_' + username) || '{}');
  saved.password = newPw;
  localStorage.setItem('user_' + username, JSON.stringify(saved));
  return { ok:true, username: username, password: newPw };
}
