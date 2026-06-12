// ═══ Supabase 数据适配器 ═══
// 在线时从 Supabase 获取数据，离线时降级到 localStorage

// 初始化 Supabase 客户端
var _supabase = null;
var _online = navigator.onLine;
window.addEventListener('online', function(){ _online = true; });
window.addEventListener('offline', function(){ _online = false; });

function initSupabase() {
  if (!_supabase && typeof supabase !== 'undefined') {
    _supabase = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
  }
  return _supabase;
}

// ─── 数据缓存（内存 + localStorage 降级） ───
var _cache = {};

function getCached(key) {
  if (_cache[key]) return _cache[key];
  try { var v = localStorage.getItem('cache_'+key); if(v) _cache[key] = JSON.parse(v); } catch(e){}
  return _cache[key] || null;
}

function setCache(key, data) {
  _cache[key] = data;
  try { localStorage.setItem('cache_'+key, JSON.stringify(data)); } catch(e){}
}

// ─── 通用查询 ───
function queryAll(table, orderBy) {
  if (_online) {
    initSupabase();
    if (!_supabase) return Promise.resolve([]);
    var q = _supabase.from(table).select('*');
    if (orderBy) q = q.order(orderBy);
    return q.then(function(r){
      if (r.error) throw r.error;
      setCache('table_' + table, r.data);
      return r.data;
    });
  } else {
    return Promise.resolve(getCached('table_' + table) || []);
  }
}

function queryById(table, id) {
  if (_online) {
    initSupabase();
    if (!_supabase) return Promise.resolve(null);
    return _supabase.from(table).select('*').eq('id', id).single().then(function(r){
      if (r.error && r.error.code !== 'PGRST116') throw r.error;
      return r.data || null;
    });
  } else {
    var data = getCached('table_' + table) || [];
    return Promise.resolve(data.find(function(x){ return x.id === id; }) || null);
  }
}

// ─── 用户相关 ───
function getCurrentUserId() {
  var u = getCurrentUser();
  return u ? u.id : null;
}

function getCurrentUser() {
  if (_supabase) {
    var session = _supabase.auth.getSession();
    // 同步方式不适用，使用全局变量
  }
  return _currentSupabaseUser || null;
}

var _currentSupabaseUser = null;

// Supabase 登录
function supabaseLogin(email, password) {
  initSupabase();
  if (!_supabase) return Promise.reject(new Error('Supabase 未初始化'));
  return _supabase.auth.signInWithPassword({ email: email, password: password });
}

// Supabase 注册（管理员用）
function supabaseSignUp(email, password) {
  initSupabase();
  if (!_supabase) return Promise.reject(new Error('Supabase 未初始化'));
  return _supabase.auth.signUp({ email: email, password: password });
}

// 监听 auth 状态变化
function initAuthListener(callback) {
  initSupabase();
  if (!_supabase) return;
  _supabase.auth.onAuthStateChange(function(event, session){
    if (session) {
      // 从 profiles 表获取用户详细信息
      _supabase.from('profiles').select('*').eq('id', session.user.id).single().then(function(r){
        if (r.data) {
          _currentSupabaseUser = {
            id: r.data.id,
            email: session.user.email,
            username: r.data.username,
            nickname: r.data.nickname || r.data.username,
            role: r.data.role
          };
          // 兼容旧代码
          if (typeof currentUser !== 'undefined') {
            Object.assign(currentUser, _currentSupabaseUser);
          }
          if (callback) callback(_currentSupabaseUser);
        }
      });
    } else {
      _currentSupabaseUser = null;
    }
  });
}

// 退出登录
function supabaseLogout() {
  initSupabase();
  if (!_supabase) return Promise.resolve();
  return _supabase.auth.signOut();
}

// ─── 数据操作 ───
function upsertData(table, data) {
  initSupabase();
  if (!_supabase) return Promise.reject(new Error('Supabase 未初始化'));
  return _supabase.from(table).upsert(data, { onConflict: 'id' });
}

function deleteData(table, id) {
  initSupabase();
  if (!_supabase) return Promise.reject(new Error('Supabase 未初始化'));
  return _supabase.from(table).delete().eq('id', id);
}

// 搜索（使用 PostgreSQL 的 ILIKE 模糊匹配）
function searchData(table, field, keyword, limit) {
  initSupabase();
  if (!_supabase) return Promise.resolve([]);
  var q = _supabase.from(table).select('*').ilike(field, '%' + keyword + '%');
  if (limit) q = q.limit(limit);
  return q.order('id').then(function(r){
    if (r.error) throw r.error;
    return r.data;
  });
}

// ─── 兼容旧代码的同步包装 ───
// 用于逐步替换，不阻塞 UI
function syncWrap(promise, fallback) {
  var result = fallback;
  promise.then(function(data){ result = data; }).catch(function(){});
  // 返回 fallback 让 UI 先显示，等异步结果来了再刷新
  return result;
}
