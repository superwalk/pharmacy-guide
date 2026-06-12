// ═══ Supabase 数据适配器 ═══
// 在线时从 Supabase 获取数据，离线时降级到 data.js / localStorage

var _supabase = null;
var _online = navigator.onLine;
window.addEventListener('online', function(){ _online = true; });
window.addEventListener('offline', function(){ _online = false; });

function initSupabase() {
  if (!_supabase && typeof supabase !== 'undefined' && typeof SUPABASE_CONFIG !== 'undefined') {
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

// ─── 列名映射表（Supabase 列名 → 前端用的列名） ───
var COLUMN_MAP = {
  diseases: { description: 'desc' },
  med_edu:  { key_point: 'key' }
};

function mapRow(table, row) {
  if (!row || typeof row !== 'object') return row;
  var map = COLUMN_MAP[table];
  if (!map) return row;
  var out = {};
  for (var key in row) {
    if (row.hasOwnProperty(key)) {
      out[map[key] || key] = row[key];
    }
  }
  return out;
}

function mapRows(table, rows) {
  if (!rows || !Array.isArray(rows)) return rows || [];
  return rows.map(function(row){ return mapRow(table, row); });
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
      var mapped = mapRows(table, r.data);
      setCache('table_' + table, mapped);
      return mapped;
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
      return r.data ? mapRow(table, r.data) : null;
    });
  } else {
    var data = getCached('table_' + table) || [];
    return Promise.resolve(data.find(function(x){ return x.id === id; }) || null);
  }
}

// ─── 用户（保持不变，继续使用 localStorage） ───
function getCurrentUserId() {
  var u = getCurrentUser();
  return u ? u.id : null;
}

function getCurrentUser() {
  return _currentSupabaseUser || null;
}

var _currentSupabaseUser = null;

function supabaseLogin(email, password) {
  initSupabase();
  if (!_supabase) return Promise.reject(new Error('Supabase 未初始化'));
  return _supabase.auth.signInWithPassword({ email: email, password: password });
}

function supabaseSignUp(email, password) {
  initSupabase();
  if (!_supabase) return Promise.reject(new Error('Supabase 未初始化'));
  return _supabase.auth.signUp({ email: email, password: password });
}

function initAuthListener(callback) {
  initSupabase();
  if (!_supabase) return;
  _supabase.auth.onAuthStateChange(function(event, session){
    if (session) {
      _supabase.from('profiles').select('*').eq('id', session.user.id).single().then(function(r){
        if (r.data) {
          _currentSupabaseUser = {
            id: r.data.id,
            email: session.user.email,
            username: r.data.username,
            nickname: r.data.nickname || r.data.username,
            role: r.data.role
          };
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

function searchData(table, field, keyword, limit) {
  initSupabase();
  if (!_supabase) return Promise.resolve([]);
  var q = _supabase.from(table).select('*').ilike(field, '%' + keyword + '%');
  if (limit) q = q.limit(limit);
  return q.order('id').then(function(r){
    if (r.error) throw r.error;
    return mapRows(table, r.data);
  });
}

// ─── 数据详情加载（替代旧的 fetch JSON 方式） ───
function supabaseLoadDetail(table, id) {
  return queryById(table, id);
}

// ─── 全量数据引导加载 ───
// 从 Supabase 获取所有数据并填充到全局变量
var _dataLoaded = false;

function supabaseLoadAll(callback) {
  if (_dataLoaded) { if(callback) callback(true); return; }

  initSupabase();
  if (!_supabase || !_online) {
    // 离线模式：尝试从缓存加载
    tryLoadFromCache(callback);
    return;
  }

  // 并行查询所有表
  Promise.all([
    queryAll('drug_categories').then(mapRows.bind(null, 'drug_categories')),
    queryAll('disease_categories').then(mapRows.bind(null, 'disease_categories')),
    queryAll('guide_systems').then(mapRows.bind(null, 'guide_systems')),
    queryAll('drugs').then(mapRows.bind(null, 'drugs')),
    queryAll('diseases').then(mapRows.bind(null, 'diseases')),
    queryAll('guidelines').then(mapRows.bind(null, 'guidelines')),
    queryAll('laws').then(mapRows.bind(null, 'laws')),
    queryAll('health_edu').then(mapRows.bind(null, 'health_edu')),
    queryAll('med_edu').then(mapRows.bind(null, 'med_edu')),
    queryAll('infusion_data').then(mapRows.bind(null, 'infusion_data'))
  ]).then(function(results) {
    // 结果顺序对应上面的 Promise 顺序
    var drugCats    = results[0];
    var diseaseCats = results[1];
    var guideSys    = results[2];
    var drugs       = results[3];
    var diseases    = results[4];
    var guidelines  = results[5];
    var laws        = results[6];
    var healthEdu   = results[7];
    var medEdu      = results[8];
    var infusionData= results[9];

    // 设置全局变量（覆盖 data.js 的默认值）
    window.DRUG_CATEGORIES = drugCats.length > 0 ? drugCats : window.DRUG_CATEGORIES;
    window.DISEASE_CATEGORIES = diseaseCats.length > 0 ? diseaseCats : window.DISEASE_CATEGORIES;
    window.GUIDE_SYSTEMS = guideSys.length > 0 ? guideSys : window.GUIDE_SYSTEMS;
    window.DRUGS = drugs.length > 0 ? drugs : window.DRUGS;
    window.DISEASES = diseases.length > 0 ? diseases : window.DISEASES;
    window.GUIDELINES = guidelines.length > 0 ? guidelines : window.GUIDELINES;
    window.LAWS = laws.length > 0 ? laws : window.LAWS;
    window.HEALTH_EDU = healthEdu.length > 0 ? healthEdu : window.HEALTH_EDU;
    window.MED_EDU = medEdu.length > 0 ? medEdu : window.MED_EDU;
    window.INFUSION_DATA = infusionData.length > 0 ? infusionData : window.INFUSION_DATA;

    _dataLoaded = true;

    if (callback) callback(true);
  }).catch(function(err) {
    console.warn('Supabase 数据加载失败，使用本地数据:', err);
    tryLoadFromCache(callback);
  });
}

function tryLoadFromCache(callback) {
  // 尝试从缓存加载
  var tables = ['drugs', 'diseases', 'guidelines', 'laws', 'health_edu', 'med_edu', 'infusion_data'];
  var hasCache = false;
  tables.forEach(function(t) {
    var cached = getCached('table_' + t);
    if (cached && cached.length > 0) {
      hasCache = true;
      var name = t === 'med_edu' ? 'MED_EDU' : t === 'health_edu' ? 'HEALTH_EDU' : t === 'infusion_data' ? 'INFUSION_DATA' : t.toUpperCase();
      window[name] = cached;
    }
  });
  if (callback) callback(hasCache);
}

// ─── 兼容旧代码的同步包装 ───
function syncWrap(promise, fallback) {
  var result = fallback;
  promise.then(function(data){ result = data; }).catch(function(){});
  return result;
}

// ─── 后端同步辅助（管理员编辑时调用） ───
// 尝试将数据同步到 Supabase，不阻塞 UI
function trySupabaseUpsert(table, data) {
  if (!_online) return Promise.resolve({ offline: true });
  initSupabase();
  if (!_supabase) return Promise.resolve({ noInit: true });
  return _supabase.from(table).upsert(data, { onConflict: 'id' }).then(function(r){
    if (r.error) { console.warn('Supabase upsert 失败:', r.error); return { error: r.error }; }
    return { ok: true };
  }).catch(function(e){
    console.warn('Supabase upsert 异常:', e);
    return { error: e };
  });
}

function trySupabaseDelete(table, id) {
  if (!_online) return Promise.resolve({ offline: true });
  initSupabase();
  if (!_supabase) return Promise.resolve({ noInit: true });
  return _supabase.from(table).delete().eq('id', id).then(function(r){
    if (r.error) { console.warn('Supabase delete 失败:', r.error); return { error: r.error }; }
    return { ok: true };
  }).catch(function(e){
    console.warn('Supabase delete 异常:', e);
    return { error: e };
  });
}
