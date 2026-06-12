// ═══ 合并自定义数据 ───
function allDrugs() { try{const c=JSON.parse(localStorage.getItem('custom_data')||'{"drugs":[],"guidelines":[]}');return[...DRUGS,...(c.drugs||[])];}catch(e){return DRUGS;} }
function allGuides() { try{const c=JSON.parse(localStorage.getItem('custom_data')||'{"drugs":[],"guidelines":[]}');return[...GUIDELINES,...(c.guidelines||[])];}catch(e){return GUIDELINES;} }
function findDrug(id) { return allDrugs().find(d=>d.id===id); }

// ═══ 数据按需加载 ───
var _detailCache = {};
function _loadDetail(type, id, cb) {
  if (_detailCache[type + '/' + id]) { if(cb) cb(_detailCache[type + '/' + id]); return; }

  // 优先从 Supabase 查询
  if (typeof supabaseLoadDetail === 'function' && _online) {
    var tableMap = { drugs:'drugs', diseases:'diseases', guidelines:'guidelines', mededu:'med_edu', healthedu:'health_edu', infusion:'infusion_data' };
    var table = tableMap[type];
    if (table) {
      supabaseLoadDetail(table, id).then(function(data){
        if (data) {
          _detailCache[type + '/' + id] = data;
          if(cb) cb(data);
        } else {
          fallbackLoadDetail(type, id, cb);
        }
      }).catch(function(){
        fallbackLoadDetail(type, id, cb);
      });
      return;
    }
  }
  fallbackLoadDetail(type, id, cb);
}

function fallbackLoadDetail(type, id, cb) {
  var base = location.pathname.replace(/\/[^\/]*$/, '/');
  if (!base || base === '/') base = '/pharmacy-guide/';
  fetch(base + 'data/' + type + '/' + id + '.json').then(function(r) {
    if (!r.ok) { if(cb) cb(null); return; }
    return r.json();
  }).then(function(data) {
    if (data) { _detailCache[type + '/' + id] = data; if(cb) cb(data); }
    else if(cb) cb(null);
  }).catch(function() {
    if(cb) cb(null);
  });
}
// Supabase 数据同步
function trySync(table, data) {
  if (typeof _supabase === 'undefined' || !_supabase) return;
  // 收藏/备注 → 改用 user_sync_data 表（用 username 替代 user_id uuid，确保能正确同步）
  if (table === 'favorites' || table === 'notes') {
    _supabase.from('user_sync_data').upsert({
      username: data.username,
      data_type: table,
      content_id: data.content_id,
      data_value: data.list || data.note || data.data || '',
      updated_at: new Date().toISOString()
    }, { onConflict: 'username,data_type,content_id' }).catch(function(e){});
    return;
  }
  _supabase.from(table).upsert(data, { onConflict: 'id' }).catch(function(e){});
}
function loadDrugDetail(id, cb) { _loadDetail('drugs', id, cb); }
function loadDiseaseDetail(id, cb) { _loadDetail('diseases', id, cb); }
function loadGuideDetail(id, cb) { _loadDetail('guidelines', id, cb); }
function loadMedEduDetail(id, cb) { _loadDetail('mededu', id, cb); }
function loadHealthEduDetail(id, cb) { _loadDetail('healthedu', id, cb); }
function loadInfusionDetail(id, cb) { _loadDetail('infusion', id, cb); }

// ═══ Toast ───
var _toastTimer = null;
function toast(msg, cb) {
  const t=document.getElementById('toast');
  clearTimeout(_toastTimer);
  t.textContent=msg; t.classList.add('show');
  if(cb){ t.style.pointerEvents='auto'; t.onclick=()=>{ cb(); t.classList.remove('show'); }; }
  else { t.style.pointerEvents='none'; t.onclick=null; }
  _toastTimer=setTimeout(()=>t.classList.remove('show'), cb?4000:2000);
}

// ═══ 弹窗 ───
function showModal(title, content, actions) {
  if (!actions) actions = [];
  const ov=document.getElementById('modal-overlay');
  const mb=document.getElementById('modal-box');
  mb.innerHTML=`<h3>${title}</h3>${content}<div class="modal-actions">${actions.map((a,i)=>`<button class="btn ${a.primary?'btn-primary':'btn-outline'}" data-modal-act="${i}">${a.label}</button>`).join('')}</div>`;
  ov.classList.add('show');
  mb.querySelectorAll('[data-modal-act]').forEach(btn=>{ btn.onclick=()=>{ const a=actions[parseInt(btn.dataset.modalAct)]; var close=true; if(a.onClick) close=a.onClick(); if(close!==false) ov.classList.remove('show'); }; });
}

// ═══ storage 辅助 ───
function favKey() { return 'fav_'+currentUser.username; }
function noteKey() { return 'notes_'+currentUser.username; }
function recentKey() { return 'recent_'+currentUser.username; }
function getFavs() { return JSON.parse(localStorage.getItem(favKey())||'[]'); }
function isFav(id) { return getFavs().includes(id); }
function toggleFav(id) {
  let f=getFavs(); if(f.includes(id)) f=f.filter(x=>x!==id); else f.push(id);
  localStorage.setItem(favKey(),JSON.stringify(f));
  // 同步到 Supabase
  var uname = currentUser ? currentUser.username : '';
  if (uname) trySync('favorites', { username: uname, content_id: id, list: JSON.stringify(f) });
}
function getNotes() { return JSON.parse(localStorage.getItem(noteKey())||'{}'); }
function saveNote(id, text) {
  if (text && text.length > 200) { toast('备注不能超过200字'); return false; }
  const n=getNotes(); if(text) { n[id]=text; } else { delete n[id]; }
  localStorage.setItem(noteKey(),JSON.stringify(n));
  // 同步到 Supabase
  var uname = currentUser ? currentUser.username : '';
  if (uname) trySync('notes', { username: uname, content_id: id, note: text || '', data: JSON.stringify(n) });
  return true;
}
function deleteNote(id) {
  const n=getNotes(); delete n[id];
  localStorage.setItem(noteKey(),JSON.stringify(n));
  // 同步到 Supabase
  var uname = currentUser ? currentUser.username : '';
  if (uname) trySync('notes', { username: uname, content_id: id, note: '', data: JSON.stringify(n) });
}

// 根据ID在所有数据源中查找内容
function findContentById(id) {
  if (!id) return null;
  var d = findDrug(id); if (d) return { name: d.name, type: 'drug', icon: '💊' };
  var g = allGuides().find(function(x){return x.id===id;}); if (g) return { name: g.title, type: 'guide', icon: '📋' };
  g = LAWS.find(function(x){return x.id===id;}); if (g) return { name: g.title, type: 'guide', icon: '📋' };
  var ds = DISEASES.find(function(x){return x.id===id;}); if (ds) return { name: ds.name, type: 'disease', icon: '🦠' };
  var h = HEALTH_EDU.find(function(x){return x.id===id;}); if (h) return { name: h.title, type: 'edu', icon: '📖' };
  var i = INFUSION_DATA.find(function(x){return x.id===id;}); if (i) return { name: i.drug, type: 'infusion', icon: '💉' };
  var m = MED_EDU.find(function(x){return x.id===id;}); if (m) return { name: m.drug, type: 'med', icon: '🗣️' };
  return null;
}

// 渲染备注卡片
function renderNote(id) {
  const notes=getNotes();
  const note=notes[id]||'';
  return '<div class="note-card" style="margin-top:12px"><div class="note-header"><span class="note-title">📝 个人备注 <span style="font-size:11px;color:var(--text-light)">(200字上限)</span></span><span class="note-edit" id="edit-note">编辑</span></div><div class="note-content" id="note-content-'+id+'">'+(note||'暂无备注')+'</div></div>';
}
function bindNote(id, refreshFn) {
  var eb = document.getElementById('edit-note');
  if (eb) eb.onclick = function() {
    const notes=getNotes();
    const note=notes[id]||'';
    showModal('编辑备注', '<p style="font-size:12px;color:var(--text-light);margin-bottom:4px">最多200字</p><textarea id="note-textarea" style="width:100%;min-height:120px;border-radius:10px;border:1px solid var(--border);padding:12px;font:inherit;font-size:14px;resize:vertical" maxlength="200">'+note+'</textarea>', [{label:'取消'},{label:'保存',primary:true,onClick:function(){ const t=document.getElementById('note-textarea').value; var r=saveNote(id,t); if(r && refreshFn) refreshFn(); }}]);
  };
}
function getRecent() { return JSON.parse(localStorage.getItem(recentKey())||'[]'); }
function addRecent(id, type) { 
  type=type||'drug';
  let r=getRecent(); r=r.filter(x=>!(x.id===id&&x.type===type)); 
  r.unshift({id:id,type:type}); if(r.length>15)r.pop(); 
  localStorage.setItem(recentKey(),JSON.stringify(r));
  // 同步浏览记录到 Supabase
  if (typeof _supabase !== 'undefined' && _supabase && _online && currentUser) {
    _supabase.from('recent_views').upsert({
      id: currentUser.username + '_' + id,
      username: currentUser.username,
      content_id: id,
      content_type: type,
      updated_at: new Date().toISOString()
    }, { onConflict: 'id' }).catch(function(){});
  }
  // 同步记录浏览统计
  recordView(id, type);
}

// 简易拼音首字母（新增内容自动支持搜索）
function genPy(s){
  var m={a:'奥安按案氨癌碍胺艾铵阿',b:'不丙伴便保倍八别办勃包半变吡哺备孢崩巴布帮并必报斑本板标步比波泵版班瓣病白百编胞苯补表贝败避部靶饱鼻',c:'产传促倡偿储催充册出创初刺参叉喘处存察层巢常床成持操斥晨查次此残测疮础称程稠穿策纯肠茨茶藏虫词超车醇采陈除颤餐',d:'丁代但低典冻动单叠哚啶地多大定对导岛带度当待得德戴断毒氮滴点独电疸癫登的督短碘窦端第等胆蛋蝶订读调达道顶',e:'二儿厄尔恩恶耳',f:'乏伐分反发呋啡复妇封房放方服氟法泛粉肤肥肪肺腹芬范覆负辅酚防非风饭',g:'个估供光公共关冠功勾古各告固国官宫工干惯感改更杆构果根格梗灌甘盖管给肝胍胱观规过酐钙钴隔骨高',h:'互何函划化华号合后含呼和喉回好害寒患或户护换核毫活海混环琥磺红缓荷获虹黄黑',j:'九交仅介件价佳健具决净减击剂加即及咀嚼均基夹家将尽局居巨己建径忌急惊技据接救教旧景晶机检洁激焦甲疾监睫碱禁积竭简精级经结绞聚肌胶脊艰节荐菌见角解计记践辑进酒金钾键镜间阶际降集静颈',k:'亢克况卡口可咳喹困孔库康开快恐扩抗括控框溃看科空糠考',l:'临了仑例六冷列利力劳卵呤录律拉来林柳氯洛流浏淋漏狼率理留略疗瘤硫离立篮类粒累罗老联膦良虑螺览论赖路里量铝链锂阑隆雷露领鲁龄龙',m:'免冒名吗媒孟密慢敏明母每毛泌满目眠码秒秘米美脉膜莫蒙酶镁霉面马麻默',n:'内凝南囊奈女奶尼尿年念昵浓牛男耐能脑脓脲诺那钠钮难黏',o:'偶呕',p:'偏判匹品哌喷嘌培帕平扑批拼排普泊泡泮泼潘片珀疱皮破胖葡评贫迫配',q:'七全其切前区取嗪器奇庆强情抢曲期权气氢求清球确祛秦签缺羟群腔请起轻醛青',r:'乳人任入如妊容弱日染桡溶热然瑞认软韧',s:'三上书事伤似使删刷剩十升双司善噻四塞声失始娠实审室宿射少属岁式慎所手损搜收散数时是术松枢栓梭森死殊水沙深渗湿烧生疏睡石示社神算素索缩署肾舌舍舒色衰视设识试说身输适速酸释随食首髓',t:'他体停同吐吞嚏坦填天太头态托探推替条梯汀涕添特疼痛痰瞳碳童糖统脱腾萄退通酮铁',w:'万为五伍位危围外完尾微我文无未污物稳维网肟胃雾韦',x:'下习休信修像先写协向吸哮型学小屑形循心性息悬效新昔星显欣泄泻洗消溴烯现痫相硝稀系纤细续缬胸腺膝荨血行西询详谢辛选酰醒限险雄需项须鲜',y:'一与严义乙也于亚以余元养医压厌原叶员因域央孕尤已幼应延异引意抑拥月有柚样氧永油液淤源溢炎牙用由疑疡疫痒益盐眼研硬移约育胰药营要议诱运远遗郁银阳阴院隐音页预饮验',z:'专中主之住作值兆再准则制助卒卓只周唑嘱在增子字展左张征志总找折择指支整智暂最杂柱植止正殖汁治注滋灼燥状珠甾疹症直真知种粘粥组织终综置者职肿胀脂脏自至致证诊责账质转载这酯醉重针钟镇长阻障骤'};
  var py='';
  for(var i=0;i<s.length;i++){
    var c=s[i];
    if(c>='a'&&c<='z') py+=c.toUpperCase();
    else if(c>='A'&&c<='Z') py+=c;
    else {
      for(var k in m){ if(m[k].indexOf(c)>=0){ py+=k.toUpperCase(); break; } }
    }
  }
  return py||s;
}

// ═══ 登录 ═══
(function initLogin(){
  const btn=document.getElementById('login-btn');
  if(!btn) return setTimeout(initLogin,100);
  btn.addEventListener('click',loginSubmit);
  document.getElementById('login-pw').addEventListener('keydown',e=>{ if(e.key==='Enter') loginSubmit(); });
  document.getElementById('login-user').addEventListener('keydown',e=>{ if(e.key==='Enter') document.getElementById('login-pw').focus(); });
  // 密码可见/隐藏
  document.getElementById('pw-toggle').addEventListener('click',function(e){
    e.preventDefault();
    const pw=document.getElementById('login-pw');
    if(pw.type==='password'){ pw.type='text'; this.textContent='🙈'; }
    else { pw.type='password'; this.textContent='👁'; }
    pw.focus();
  });
  // 找回密码
  document.getElementById('login-forgot-link').addEventListener('click',function(){ showForgotPasswordModal(); });
  document.getElementById('login-forgot-user').addEventListener('click',function(){ showFindUsername(); });
  var ca=document.getElementById('contact-admin');
  if(ca) ca.onclick=function(){ showModal('联系管理员','<p style="text-align:center;font-size:14px">邮箱：<b style="user-select:all;color:var(--primary)">walkman0097@163.com</b></p><p style="text-align:center;font-size:11px;color:var(--text-light);margin-top:4px">点击上方邮箱地址即可复制</p>',[{label:'关闭'}]); };
  // 登录页也加载 Supabase 用户（跨浏览器找回密码/用户名）
  if (typeof loadUsersFromSupabase === 'function' && _online) {
    loadUsersFromSupabase(function(){});
  }
})();

function loginSubmit() {
  const u=document.getElementById('login-user').value.trim();
  const p=document.getElementById('login-pw').value.trim();
  const e=document.getElementById('login-error');
  const b=document.getElementById('login-btn');
  
  // 1. 空输入检测 — 用弹窗提示
  if(!u && !p){ showModal('登录提示','<p style="text-align:center">请输入用户名和密码</p>',[{label:'知道了',primary:true}]); return; }
  if(!u){ showModal('登录提示','<p style="text-align:center">请输入用户名</p>',[{label:'知道了',primary:true,onClick:()=>document.getElementById('login-user').focus()}]); return; }
  if(!p){ showModal('登录提示','<p style="text-align:center">请输入密码</p>',[{label:'知道了',primary:true,onClick:()=>document.getElementById('login-pw').focus()}]); return; }
  
  b.textContent='登录中…'; b.style.opacity='0.7';
  
  setTimeout(()=>{
    const r=login(u,p);
    if(r.ok){
      if(document.getElementById('remember-pw').checked) saveRemember(u,p);
      recordLogin(u); // 记录今日登录
      initApp();
    } else {
      b.textContent='登 录'; b.style.opacity='1';
      if(r.msg.includes('不存在')){
        showModal('登录失败','<p style="text-align:center">用户「'+u+'」不存在</p>',[{label:'重新输入',primary:true,onClick:()=>document.getElementById('login-user').select()}]);
      } else if(r.msg.includes('锁定')){
        showModal('登录失败','<p style="text-align:center">⚠️ '+r.msg+'</p>',[{label:'知道了',primary:true}]);
      } else if(r.msg.includes('密码')){
        showModal('登录失败','<p style="text-align:center">❌ '+r.msg+'</p>',[{label:'重新输入',primary:true,onClick:()=>document.getElementById('login-pw').select()}]);
      } else {
        showModal('登录失败','<p style="text-align:center">'+r.msg+'</p>',[{label:'知道了',primary:true}]);
      }
    }
  },400);
}

// ═══ 浏览统计 ═══
// 查找内容名称（供统计显示用）
function findContentName(id, type) {
  if (type === 'drug') { var d = findDrug(id); return d ? d.name : id; }
  if (type === 'guide') { var g = allGuides().find(function(x){return x.id===id;}); if(g)return g.title; var l=LAWS.find(function(x){return x.id===id;}); if(l)return l.title; return id; }
  if (type === 'disease') { var d2 = DISEASES.find(function(x){return x.id===id;}); return d2 ? d2.name : id; }
  if (type === 'edu') { var h = HEALTH_EDU.find(function(x){return x.id===id;}); return h ? h.title : id; }
  if (type === 'med') { var m = MED_EDU.find(function(x){return x.id===id;}); return m ? m.drug : id; }
  if (type === 'inf') { var inf = INFUSION_DATA.find(function(x){return x.id===id;}); return inf ? inf.drug : id; }
  return id;
}
// 记录今日登录
function recordLogin(username) {
  try {
    var stats = JSON.parse(localStorage.getItem('login_stats') || '[]');
    var today = new Date().toISOString().slice(0,10);
    // 同一用户同日不重复记录
    if (!stats.find(function(s){return s.date===today && s.username===username;})) {
      stats.push({date: today, username: username});
      localStorage.setItem('login_stats', JSON.stringify(stats));
      // 同步到 Supabase
      if (typeof _supabase !== 'undefined' && _supabase && _online) {
        _supabase.from('login_stats').upsert({
          id: username + '_' + today,
          username: username,
          login_date: today,
          created_at: new Date().toISOString()
        }, { onConflict: 'id' }).catch(function(){});
      }
    }
  } catch(e) {}
}
// 记录浏览次数
function recordView(id, type) {
  try {
    var views = JSON.parse(localStorage.getItem('view_stats') || '[]');
    var name = findContentName(id, type);
    var existing = views.find(function(v){return v.id===id && v.type===type;});
    if (existing) {
      existing.count = (existing.count || 0) + 1;
    } else {
      views.push({id: id, type: type, name: name, count: 1});
    }
    localStorage.setItem('view_stats', JSON.stringify(views));
    // 同步到 Supabase
    if (typeof _supabase !== 'undefined' && _supabase && _online) {
      var found = views.find(function(v){return v.id===id && v.type===type;});
      if (found) {
        _supabase.from('view_stats').upsert({
          id: type + '_' + id,
          content_id: id,
          content_type: type,
          content_name: name,
          view_count: found.count || 1
        }, { onConflict: 'id' }).catch(function(){});
      }
    }
  } catch(e) {}
}
// 渲染浏览统计
function showBrowseStats() {
  pushScreen('label');
  // 今日登录人数
  var today = new Date().toISOString().slice(0,10);
  var loginStats = [];
  try { loginStats = JSON.parse(localStorage.getItem('login_stats') || '[]'); } catch(e) {}
  var todayCount = loginStats.filter(function(s){return s.date===today;}).length;
  var totalUsers = loginStats.filter(function(s){return s.date===today;}).reduce(function(acc, s){
    if (acc.indexOf(s.username) < 0) acc.push(s.username); return acc;
  }, []).length;
  // TOP20 热门
  var views = [];
  try { views = JSON.parse(localStorage.getItem('view_stats') || '[]'); } catch(e) {}
  var top = views.sort(function(a,b){return (b.count||0) - (a.count||0);}).slice(0,20);
  var typeIcon = {drug:'💊', guide:'📋', disease:'🦠', edu:'📖', med:'🗣️', inf:'💉'};
  var html = '<div style="font-size:28px;font-weight:800;color:var(--primary);margin:4px 0 2px">📊 浏览统计</div>'
    + '<div style="font-size:12px;color:var(--text-light);margin-bottom:16px">今日 · '+today+'</div>'
    + '<div style="display:flex;gap:12px;margin-bottom:16px">'
    + '<div style="flex:1;background:var(--bg);border-radius:12px;padding:14px;text-align:center;border:1px solid var(--border)"><div style="font-size:28px;font-weight:800;color:var(--primary)">'+todayCount+'</div><div style="font-size:12px;color:var(--text-light)">今日登录(次)</div></div>'
    + '<div style="flex:1;background:var(--bg);border-radius:12px;padding:14px;text-align:center;border:1px solid var(--border)"><div style="font-size:28px;font-weight:800;color:var(--accent)">'+totalUsers+'</div><div style="font-size:12px;color:var(--text-light)">今日登录人数</div></div>'
    + '</div>'
    + '<div class="section-title" style="margin-top:8px">🔥 热门内容 TOP20</div>';
  if (top.length === 0) {
    html += '<div style="text-align:center;padding:30px;color:var(--text-light)">暂无浏览数据</div>';
  } else {
    top.forEach(function(v, i){
      var icon = typeIcon[v.type] || '📄';
      html += '<div class="list-card hot-item" data-hot-id="'+v.id+'" data-hot-type="'+v.type+'"><div class="icon-box">'+icon+'</div><div class="info"><div class="name"><span style="color:'+(i<3?'var(--danger)':'var(--text-light)')+';font-weight:'+(i<3?'800':'400')+'">#'+(i+1)+'</span> '+v.name+'</div><div class="desc">浏览 '+v.count+' 次</div></div></div>';
    });
  }
  document.getElementById('label-content').innerHTML = html;
  // 绑定热门点击跳转
  document.querySelectorAll('.hot-item').forEach(function(el){
    el.onclick = function(){
      var id = el.dataset.hotId, type = el.dataset.hotType;
      if (type === 'drug') { addRecent(id,'drug'); pushScreen('detail'); renderDetail(id); }
      else if (type === 'guide') { addRecent(id,'guide'); openGuide(id); }
      else if (type === 'disease') { var ds = DISEASES.find(function(x){return x.id===id;}); if(ds) openDisease(ds.name); }
      else if (type === 'edu') { openHealthEdu(id); }
      else if (type === 'med') { openMedEdu(id); }
      else if (type === 'inf') { openInfusion(id); }
    };
  });
}

// ═══ 注册新账号 ═══
function showRegisterModal(){
  var qOpts = SECURITY_QUESTIONS.map(function(q, i){ return '<option value="'+i+'">'+q+'</option>'; }).join('');
  // 三个下拉默认选中不同的选项（0,1,2）
  var q1 = qOpts.replace('<option value="0"', '<option value="0" selected');
  var q2 = qOpts.replace('<option value="1"', '<option value="1" selected');
  var q3 = qOpts.replace('<option value="2"', '<option value="2" selected');
  var step1HTML =
    '<div style="display:flex;flex-direction:column;gap:8px">'+
    '<div style="font-size:13px;color:var(--text-light);margin-bottom:4px">📝 填写注册信息</div>'+
    '<input id="reg-username" placeholder="用户名（至少5个字符）" style="width:100%">'+
    '<input id="reg-email" placeholder="邮箱地址" type="email" style="width:100%">'+
    '<div style="border-top:1px solid var(--border);padding-top:8px;margin-top:4px;font-size:13px;color:var(--text-light)">🔐 设置密保问题（用于找回密码，至少填写一个）</div>'+
    '<div style="display:flex;gap:4px"><select id="reg-sq1" style="flex:1">'+q1+'</select><input id="reg-sa1" placeholder="答案" style="width:40%"></div>'+
    '<div style="display:flex;gap:4px"><select id="reg-sq2" style="flex:1">'+q2+'</select><input id="reg-sa2" placeholder="答案" style="width:40%"></div>'+
    '<div style="display:flex;gap:4px"><select id="reg-sq3" style="flex:1">'+q3+'</select><input id="reg-sa3" placeholder="答案" style="width:40%"></div>'+
    '<div style="font-size:11px;color:var(--text-light);text-align:center">三选一填写密保答案，用于找回密码</div>'+
    '</div>';
  showModal('📝 注册新账号', step1HTML, [{label:'取消'},{label:'注册',primary:true,onClick:function(){
    var uname = document.getElementById('reg-username').value.trim();
    var email = document.getElementById('reg-email').value.trim();
    var sq1 = SECURITY_QUESTIONS[parseInt(document.getElementById('reg-sq1').value)];
    var sq2 = SECURITY_QUESTIONS[parseInt(document.getElementById('reg-sq2').value)];
    var sq3 = SECURITY_QUESTIONS[parseInt(document.getElementById('reg-sq3').value)];
    var sa1 = document.getElementById('reg-sa1').value.trim();
    var sa2 = document.getElementById('reg-sa2').value.trim();
    var sa3 = document.getElementById('reg-sa3').value.trim();
    var r = registerUser(uname, email, sq1, sa1, sq2, sa2, sq3, sa3);
    if(!r.ok){ toast(r.msg); return; }
    var info = '用户名：'+r.username+'\n密码：'+r.password;
    navigator.clipboard.writeText(info).then(function(){ toast('已复制账号信息'); }).catch(function(){});
    showModal('✅ 注册成功', '<div style="text-align:center;line-height:2"><b>'+r.username+'</b><br>密码：<b style="font-size:18px;letter-spacing:2px">'+r.password+'</b></div><div style="font-size:12px;color:var(--text-light);margin-top:6px">已自动复制到剪贴板，请立即保存密码</div><div style="font-size:12px;color:var(--danger);margin-top:4px">⚠️ 关闭后密码将不再显示</div>', [{label:'登录',primary:true,onClick:function(){
      document.getElementById('login-user').value = r.username;
      document.getElementById('login-pw').value = r.password;
      loginSubmit();
    }}]);
  }}]);
}

// ═══ 找回密码 ═══
function showForgotPasswordModal(){
  var html =
    '<div style="display:flex;flex-direction:column;gap:8px">'+
    '<div style="font-size:13px;color:var(--text-light);margin-bottom:4px">🔑 请输入用户名</div>'+
    '<input id="fp-username" placeholder="用户名" style="width:100%">'+
    '</div>';
  showModal('🔑 找回密码', html, [{label:'取消'},{label:'下一步',primary:true,onClick:function(){
    var uname = document.getElementById('fp-username').value.trim();
    if(!uname){ toast('请输入用户名'); return false; }
    var r = forgotPasswordVerify(uname, '');
    if(!r.ok){ showModal('提示', '<p style="text-align:center;font-size:14px;color:var(--text-body)">'+r.msg+'</p>', [{label:'知道了',primary:true}]); return false; }
    showForgotPasswordQuestions(uname, r.questions);
    return false;
  }}]);
}

function showForgotPasswordQuestions(uname, questions){
  var html =
    '<div style="display:flex;flex-direction:column;gap:8px">'+
    '<div style="font-size:13px;color:var(--text-light);margin-bottom:4px">🔐 任选一个密保问题回答即可（不区分大小写）</div>';
  questions.forEach(function(q){
    html += '<div style="font-size:13px;color:var(--primary);font-weight:600;margin-top:4px">'+q.question+'</div>'+
      '<input id="fp-a'+q.idx+'" placeholder="你的答案" style="width:100%">';
  });
  html += '</div>';
  showModal('🔑 找回密码', html, [{label:'取消'},{label:'重置密码',primary:true,onClick:function(){
    var answers = {};
    questions.forEach(function(q){
      var val = document.getElementById('fp-a'+q.idx).value.trim();
      if (val) answers[q.idx] = val;
    });
    var r = forgotPasswordReset(uname, '', answers);
    if(!r.ok){ toast(r.msg); return false; }
    showModal('✅ 密码已重置', '<div style="text-align:center;line-height:2"><b>'+r.username+'</b><br>新密码：<b style="font-size:18px;letter-spacing:2px;user-select:all">'+r.password+'</b></div><div style="font-size:12px;color:var(--danger);margin-top:4px">⚠️ 关闭后密码将不再显示，请立即登录</div>', [{label:'复制密码',primary:true,onClick:function(){
      navigator.clipboard.writeText('用户名：'+r.username+'\n密码：'+r.password);
      toast('已复制密码');
      return false;
    }},{label:'去登录',onClick:function(){
      document.getElementById('login-user').value = r.username;
      document.getElementById('login-pw').value = r.password;
      loginSubmit();
    }}]);
  }}]);
}

// ═══ 密保设置（我的页面）═══
function showSecuritySettings(){
  var u = currentUser;
  var hasSQ = !!(u.security_a1 || u.security_a2 || u.security_a3);
  var qOpts = SECURITY_QUESTIONS.map(function(q, i){
    return '<option value="'+i+'">'+q+'</option>';
  });
  function makeOpts(savedQ, defaultIdx) {
    return SECURITY_QUESTIONS.map(function(q, i){
      var sel = '';
      if (savedQ && savedQ === q) sel = 'selected';
      else if (!savedQ && i === defaultIdx) sel = 'selected';
      return '<option value="'+i+'" '+sel+'>'+q+'</option>';
    }).join('');
  }
  var q1 = makeOpts(u.security_q1, 0);
  var q2 = makeOpts(u.security_q2, 1);
  var q3 = makeOpts(u.security_q3, 2);
  // 密保内容
  var sqHtml;
  if (hasSQ) {
    // 已设置 → 输入密码查看，不可修改
    sqHtml = '<div style="position:relative;margin-bottom:6px"><input id="ss-view-pw" type="password" placeholder="输入密码查看密保问题" style="width:100%;padding-right:36px;padding:10px;border-radius:8px;border:1px solid var(--border);font:inherit;font-size:13px"><span style="position:absolute;right:10px;top:50%;transform:translateY(-50%);cursor:pointer;font-size:16px;user-select:none;color:var(--text-light)" class="pw-toggle-btn" data-target="ss-view-pw">👁️</span></div>'
      + '<button class="btn btn-outline" id="ss-view-btn" style="width:100%;font-size:13px;padding:8px">🔍 查看已保存的密保</button>'
      + '<div id="ss-view-result" style="margin-top:6px;display:none">'
      + '<div style="font-size:12px;color:var(--text-light);margin-bottom:4px">问题1：<b>' + (u.security_q1||'') + '</b></div><div style="font-size:12px;color:var(--text-light);margin-bottom:4px">答案1：<b>' + (u.security_a1||'') + '</b></div>'
      + '<div style="font-size:12px;color:var(--text-light);margin-bottom:4px">问题2：<b>' + (u.security_q2||'') + '</b></div><div style="font-size:12px;color:var(--text-light);margin-bottom:4px">答案2：<b>' + (u.security_a2||'') + '</b></div>'
      + '<div style="font-size:12px;color:var(--text-light);margin-bottom:4px">问题3：<b>' + (u.security_q3||'') + '</b></div><div style="font-size:12px;color:var(--text-light);margin-bottom:4px">答案3：<b>' + (u.security_a3||'') + '</b></div>'
      + '<div style="font-size:10px;color:var(--danger);text-align:center;margin-top:4px">⚠️ 密保已设置，终生不可修改，请勿遗忘</div></div>'
      + '<div style="font-size:10px;color:var(--text-light);text-align:center;margin-top:4px">密码和密保问题答案后台不可查看，请妥善保管</div>';
  } else {
    // 未设置 → 显示设置表单
    sqHtml = '<div style="position:relative;margin-bottom:6px"><input id="ss-auth-pw" type="password" placeholder="输入当前密码验证身份" style="width:100%;padding-right:36px;padding:10px;border-radius:8px;border:1px solid var(--border);font:inherit;font-size:13px"><span style="position:absolute;right:10px;top:50%;transform:translateY(-50%);cursor:pointer;font-size:16px;user-select:none;color:var(--text-light)" class="pw-toggle-btn" data-target="ss-auth-pw">👁️</span></div>'
      + '<div style="display:flex;flex-direction:column;gap:6px">'
      + '<div><div style="font-size:11px;color:var(--text-light);margin-bottom:2px">问题1</div><select id="ss-sq1" style="width:100%;padding:8px;border-radius:8px;border:1px solid var(--border);font:inherit;font-size:12px;margin-bottom:4px">'+q1+'</select><div style="position:relative"><input id="ss-sa1" type="password" placeholder="答案" value="'+(u.security_a1||'')+'" style="width:100%;padding-right:36px;padding:8px;border-radius:8px;border:1px solid var(--border);font:inherit;font-size:12px"><span style="position:absolute;right:8px;top:50%;transform:translateY(-50%);cursor:pointer;font-size:14px;user-select:none;color:var(--text-light)" class="sq-toggle" data-target="ss-sa1">👁️</span></div></div>'
      + '<div><div style="font-size:11px;color:var(--text-light);margin-bottom:2px">问题2</div><select id="ss-sq2" style="width:100%;padding:8px;border-radius:8px;border:1px solid var(--border);font:inherit;font-size:12px;margin-bottom:4px">'+q2+'</select><div style="position:relative"><input id="ss-sa2" type="password" placeholder="答案" value="'+(u.security_a2||'')+'" style="width:100%;padding-right:36px;padding:8px;border-radius:8px;border:1px solid var(--border);font:inherit;font-size:12px"><span style="position:absolute;right:8px;top:50%;transform:translateY(-50%);cursor:pointer;font-size:14px;user-select:none;color:var(--text-light)" class="sq-toggle" data-target="ss-sa2">👁️</span></div></div>'
      + '<div><div style="font-size:11px;color:var(--text-light);margin-bottom:2px">问题3</div><select id="ss-sq3" style="width:100%;padding:8px;border-radius:8px;border:1px solid var(--border);font:inherit;font-size:12px;margin-bottom:4px">'+q3+'</select><div style="position:relative"><input id="ss-sa3" type="password" placeholder="答案" value="'+(u.security_a3||'')+'" style="width:100%;padding-right:36px;padding:8px;border-radius:8px;border:1px solid var(--border);font:inherit;font-size:12px"><span style="position:absolute;right:8px;top:50%;transform:translateY(-50%);cursor:pointer;font-size:14px;user-select:none;color:var(--text-light)" class="sq-toggle" data-target="ss-sa3">👁️</span></div></div>'
      + '<div style="font-size:10px;color:var(--text-light);text-align:center;margin:4px 0">⚠️ 密保设置后不可修改，请牢记答案</div>'
      + '<button class="btn btn-primary" id="ss-save-sq" style="width:100%;font-size:13px;padding:8px;margin-bottom:2px">保存密保设置</button>'
      + '<div style="font-size:10px;color:var(--text-light);text-align:center">密码和密保问题答案后台不可查看，请妥善保管</div>';
  }
  var html =
    // 修改密码
    '<div style="background:var(--bg);border-radius:12px;padding:14px;margin-bottom:8px;border:1px solid var(--border)">'
    + '<div style="font-size:14px;font-weight:600;color:var(--primary);display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="toggleGuideGroup(this)" data-expanded="false"><span>🔑 修改密码</span><span class="guide-arrow" style="display:inline-block;transition:transform .2s;font-size:12px;color:var(--text-light)">▶</span></div>'
    + '<div class="guide-items" style="display:none;margin-top:8px;border-top:1px solid var(--border);padding-top:6px">'
    + '<div style="position:relative;margin-bottom:6px"><input id="old-pw" type="password" placeholder="原密码" style="width:100%;padding-right:36px;padding:10px;border-radius:8px;border:1px solid var(--border);font:inherit;font-size:13px"><span style="position:absolute;right:10px;top:50%;transform:translateY(-50%);cursor:pointer;font-size:16px;user-select:none;color:var(--text-light)" class="pw-toggle-btn" data-target="old-pw">👁️</span></div>'
    + '<div style="position:relative;margin-bottom:6px"><input id="new-pw" type="password" placeholder="新密码" style="width:100%;padding-right:36px;padding:10px;border-radius:8px;border:1px solid var(--border);font:inherit;font-size:13px"><span style="position:absolute;right:10px;top:50%;transform:translateY(-50%);cursor:pointer;font-size:16px;user-select:none;color:var(--text-light)" class="pw-toggle-btn" data-target="new-pw">👁️</span></div>'
    + '<button class="btn btn-primary" id="ss-save-pw" style="width:100%;font-size:13px;padding:8px">保存新密码</button>'
    + '<div style="font-size:10px;color:var(--text-light);text-align:center;margin-top:4px">密码和密保问题答案后台不可查看，请妥善保管</div>'
    + '</div></div>'
    // 密保设置
    + '<div style="background:var(--bg);border-radius:12px;padding:14px;margin-bottom:8px;border:1px solid var(--border)">'
    + '<div style="font-size:14px;font-weight:600;color:var(--primary);display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="toggleGuideGroup(this)" data-expanded="false"><span>🔐 密保设置</span><span class="guide-arrow" style="display:inline-block;transition:transform .2s;font-size:12px;color:var(--text-light)">▶</span></div>'
    + '<div class="guide-items" style="display:none;margin-top:8px;border-top:1px solid var(--border);padding-top:6px">'
    + sqHtml
    + '</div></div>';
  showModal('🔒 密码与密保', html, []);
  // 点击弹窗外部关闭
  var ov = document.getElementById('modal-overlay');
  var _closeHandler = function(e){ if (e.target === ov) { ov.classList.remove('show'); ov.removeEventListener('click', _closeHandler); } };
  ov.addEventListener('click', _closeHandler);
  // 绑定密码可见切换
  document.querySelectorAll('.pw-toggle-btn, .sq-toggle').forEach(function(btn){
    btn.onclick = function(){
      var inp = document.getElementById(btn.getAttribute('data-target'));
      if (inp) inp.type = inp.type === 'password' ? 'text' : 'password';
    };
  });
  // 修改密码
  var pwBtn = document.getElementById('ss-save-pw');
  if (pwBtn) pwBtn.onclick = function(){
    var opw = document.getElementById('old-pw').value;
    var npw = document.getElementById('new-pw').value;
    if (!opw || !npw) { toast('请填写原密码和新密码'); return; }
    var r = changePassword(opw, npw);
    if (r.ok) { toast('密码已修改'); document.getElementById('old-pw').value = ''; document.getElementById('new-pw').value = ''; }
    else toast(r.msg);
  };
  // 密保设置（未设置时保存）
  var sqBtn = document.getElementById('ss-save-sq');
  if (sqBtn) sqBtn.onclick = function(){
    var authPw = document.getElementById('ss-auth-pw').value;
    if (!authPw) { toast('请输入当前密码验证身份'); return; }
    var users = getUsers();
    var user = users.find(function(x){ return x.username === currentUser.username; });
    if (!user || !checkPw(authPw, user)) { toast('密码验证失败'); return; }
    var sq1 = SECURITY_QUESTIONS[parseInt(document.getElementById('ss-sq1').value)];
    var sq2 = SECURITY_QUESTIONS[parseInt(document.getElementById('ss-sq2').value)];
    var sq3 = SECURITY_QUESTIONS[parseInt(document.getElementById('ss-sq3').value)];
    var sa1 = document.getElementById('ss-sa1').value.trim();
    var sa2 = document.getElementById('ss-sa2').value.trim();
    var sa3 = document.getElementById('ss-sa3').value.trim();
    if(!sa1 && !sa2 && !sa3){ toast('请至少填写一个密保答案'); return; }
    var updates = {};
    if (sa1) { updates.security_q1 = sq1; updates.security_a1 = sa1; currentUser.security_q1 = sq1; currentUser.security_a1 = sa1; }
    if (sa2) { updates.security_q2 = sq2; updates.security_a2 = sa2; currentUser.security_q2 = sq2; currentUser.security_a2 = sa2; }
    if (sa3) { updates.security_q3 = sq3; updates.security_a3 = sa3; currentUser.security_q3 = sq3; currentUser.security_a3 = sa3; }
    updateUser(currentUser.username, updates);
    document.getElementById('modal-overlay').classList.remove('show');
    toast('密保设置已保存');
  };
  // 查看已设置的密保（需验证密码）
  var viewBtn = document.getElementById('ss-view-btn');
  if (viewBtn) viewBtn.onclick = function(){
    var vpw = document.getElementById('ss-view-pw').value;
    if (!vpw) { toast('请输入密码'); return; }
    var users = getUsers();
    var user = users.find(function(x){ return x.username === currentUser.username; });
    if (!user || !checkPw(vpw, user)) { toast('密码验证失败'); return; }
    var el = document.getElementById('ss-view-result');
    if (el) el.style.display = 'block';
  };
}

// 处理联网登录（备用）
function loginWithNetwork(u,p){
  // 将来接入 Supabase 或其他后端时使用
  showLoginErr(document.getElementById('login-error'),'⏳ 正在连接服务器…','warn');
  // 超时处理
  setTimeout(()=>{
    showLoginErr(document.getElementById('login-error'),'🌐 网络连接失败，请检查网络后重试','error');
    document.getElementById('login-btn').textContent='登 录';
    document.getElementById('login-btn').style.opacity='1';
  },8000);
}

function showLoginErr(el, msg, type){
  el.textContent=msg; el.style.display=msg?'block':'none';
  el.className='login-msg login-'+type;
}

// ═══ 初始化 ───
function initApp() {
  document.getElementById('screen-login').classList.remove('active');
  document.getElementById('nav-bar').style.display='flex';
  SCREENS.forEach(s => {
    const el=document.getElementById('screen-'+s);
    if(['home','knowledge','guidelines','profile','admin','mededu'].includes(s)) el.style.height='calc(100% - var(--nav-height))';
  });
  showScreen('home');
  initSearch();
  initCompare();
  initProfileMenus();
  bindGuideSearch();
  checkVersion(); // 自动检查版本更新
  // 检查密保是否设置，未设置时提示
  if (currentUser && !currentUser.security_a1 && !currentUser.security_a2 && !currentUser.security_a3) {
    setTimeout(function(){
      showModal('🔐 安全提示', '<p style="text-align:center;font-size:14px;line-height:1.8">您尚未设置密保问题答案。</p><p style="text-align:center;font-size:13px;color:var(--text-light)">设置密保后，忘记密码可通过密保问题自助找回。</p>', [{label:'稍后设置'},{label:'立即设置',primary:true,onClick:function(){ showSecuritySettings(); return false; }}]);
    }, 800);
  }
  // 触摸滑动检测：防止滑动时误触展开
  var _touchStartY = null;
  document.addEventListener('touchstart', function(e){
    _touchStartY = e.touches[0].clientY;
  });
  // 手风琴：全局点击委托（兼容桌面click）
  document.addEventListener('click', function(e){
    var el = e.target;
    while (el && el !== document.body && el !== document) {
      try {
        if (el.getAttribute && el.getAttribute('data-expanded') !== null) {
          toggleGuideGroup(el);
          e.preventDefault();
          return;
        }
      } catch(ex) { /* 安全跳过 */ }
      el = el.parentNode;
    }
  });
  // 触屏设备手风琴：检测不是滑动时才触发
  document.addEventListener('touchend', function(e){
    if (_touchStartY !== null) {
      var dy = Math.abs(e.changedTouches[0].clientY - _touchStartY);
      _touchStartY = null;
      if (dy > 10) return; // 滑动超过10px → 忽略
    }
    var el = e.target;
    while (el && el !== document.body && el !== document) {
      try {
        if (el.getAttribute && el.getAttribute('data-expanded') !== null) {
          toggleGuideGroup(el);
          e.preventDefault();
          return;
        }
      } catch(ex) { /* 安全跳过 */ }
      el = el.parentNode;
    }
  });

  // ─── 从 Supabase 加载数据（不阻塞 UI） ───
  if (typeof supabaseLoadAll === 'function') {
    supabaseLoadAll(function(loaded){
      if (loaded && _online) {
        // 同步用户数据
        if (typeof loadUsersFromSupabase === 'function') loadUsersFromSupabase();
        // 数据已刷新，重新渲染当前页面
        var active = document.querySelector('.screen.active');
        if (active) {
          var id = active.id;
          if (id === 'screen-home') renderHome();
          else if (id === 'screen-knowledge') renderKnowledge();
          else if (id === 'screen-guidelines') renderGuidelines();
        }
      }
    });
  }

  // 置顶按钮——监听各屏幕容器的滚动
  function onScreenScroll(){
    var btn=document.getElementById('back-to-top');
    if(!btn) return;
    var active=document.querySelector('.screen.active');
    btn.classList.toggle('show',active?active.scrollTop>300:false);
  }
  document.querySelectorAll('.screen').forEach(function(s){
    s.addEventListener('scroll',onScreenScroll);
  });
}

// ═══ 时钟 ───
// ═══ 时钟 ───
(function updateClock(){
  const s=new Date().getHours().toString().padStart(2,'0')+':'+new Date().getMinutes().toString().padStart(2,'0');
  for(let i=1;i<=14;i++){ const c=document.getElementById('clock'+i); if(c)c.textContent=s; }
  setTimeout(updateClock,10000);
})();

// ═══ 左滑返回 ───
let touchStartX=0,touchStartY=0;
document.addEventListener('touchstart',e=>{
  touchStartX=e.touches[0].clientX;
  touchStartY=e.touches[0].clientY;
},{passive:true});
document.addEventListener('touchend',e=>{
  const dx=e.changedTouches[0].clientX-touchStartX;
  const dy=e.changedTouches[0].clientY-touchStartY;
  if(touchStartX<40 && dx>80 && Math.abs(dx)>Math.abs(dy)*1.5){ goBack(); }
},{passive:true});

// ═══ 首页 ───
function renderHome() {
  // 绑定首页站内信按钮
  // 首页站内信按钮
  var msgHome = document.getElementById('msg-home-btn');
  if (msgHome) { msgHome.onclick = function(){ showMessages(); }; updateMsgBadge(); }
  document.getElementById('home-grid').querySelectorAll('.entry-card').forEach(card=>{
    card.onclick=()=>{
      const nav=card.dataset.nav;
      if(nav==='compare'){ pushScreen('compare'); renderCompare(); return; }
      if(nav==='calc'){ pushScreen('calc'); renderCalc(); return; }
      if(nav==='infusion'){ pushScreen('infusion'); renderInfusion(); return; }
      if(nav==='mededu'){ pushScreen('mededu'); renderMedEduCombined(); return; }
      if(card.dataset.tab) { pushScreen(nav); document.querySelectorAll('#kb-tabs .segment-item').forEach(t=>t.classList.toggle('active',t.dataset.tab===card.dataset.tab)); renderKnowledge(); }
      else { pushScreen(nav); }
    };
  });
  const rl=document.getElementById('recent-list');
  const recent=getRecent();
  if(recent.length===0){ rl.innerHTML='<div style="text-align:center;padding:20px;color:var(--text-light);font-size:13px">暂无浏览记录</div>'; return; }
  rl.innerHTML=recent.map(e=>{
    var id=e.id||e, type=e.type||'drug';
    if(type==='drug'){ var d=findDrug(id); if(d) return `<div class="list-card" data-drug="${d.id}" data-type="drug"><div class="icon-box">💊</div><div class="info"><div class="name">${d.name}</div><div class="desc">${d.category}</div></div></div>`; }
    if(type==='guide'){ var g=allGuides().find(x=>x.id===id)||LAWS.find(x=>x.id===id); if(g) return `<div class="list-card" data-gid="${g.id}" data-type="guide"><div class="icon-box">📋</div><div class="info"><div class="name">${g.title}</div><div class="desc">${g.system||'法规'} · ${g.year||''}</div></div></div>`; }
    if(type==='disease'){ var d2=DISEASES.find(x=>x.id===id); if(d2) return `<div class="list-card" data-did="${d2.id}" data-type="disease"><div class="icon-box">🦠</div><div class="info"><div class="name">${d2.name}</div><div class="desc">${d2.cat}</div></div></div>`; }
    if(type==='edu'){ var h=HEALTH_EDU.find(x=>x.id===id); if(h) return `<div class="list-card" data-hid="${h.id}" data-type="edu"><div class="icon-box">📖</div><div class="info"><div class="name">${h.title}</div><div class="desc">${h.cat}</div></div></div>`; }
    if(type==='inf'){ var inf=INFUSION_DATA.find(x=>x.id===id); if(inf) return `<div class="list-card" data-iid="${inf.id}" data-type="inf"><div class="icon-box">💉</div><div class="info"><div class="name">${inf.drug}</div><div class="desc">${inf.cat}</div></div></div>`; }
    return '';
  }).join('');
  rl.querySelectorAll('.list-card').forEach(c=>{
    var t2=c.dataset.type;
    if(t2==='drug') c.onclick=()=>{ addRecent(c.dataset.drug,'drug'); pushScreen('detail'); renderDetail(c.dataset.drug); };
    else if(t2==='guide') c.onclick=()=>{ addRecent(c.dataset.gid,'guide'); openGuide(c.dataset.gid); };
    else if(t2==='disease') c.onclick=()=>{ addRecent(c.dataset.did,'disease'); openDiseaseById(c.dataset.did); };
    else if(t2==='edu') c.onclick=()=>{ addRecent(c.dataset.hid,'edu'); openHealthEdu(c.dataset.hid); };
    else if(t2==='inf') c.onclick=()=>{ addRecent(c.dataset.iid,'inf'); openInfusion(c.dataset.iid); };
  });
}

// ═══ 知识库 ───
function renderKnowledge() {
  const activeTab=document.querySelector('#kb-tabs .segment-item.active').dataset.tab;
  document.querySelectorAll('#kb-tabs .segment-item').forEach(t=>{ t.onclick=()=>{ document.querySelectorAll('#kb-tabs .segment-item').forEach(x=>x.classList.remove('active')); t.classList.add('active'); renderKnowledge(); }; });
  const kb=document.getElementById('kb-list');
  const kw=(document.getElementById('kb-search').value||'').toLowerCase();

  if(activeTab==='drug'){
    let cats=DRUG_CATEGORIES;
    if(kw) cats=cats.filter(c=>c.name.toLowerCase().includes(kw)||c.subs.some(s=>s.toLowerCase().includes(kw))||genPy(c.name).toLowerCase().includes(kw)||c.subs.some(s=>genPy(s).toLowerCase().includes(kw)));
    kb.innerHTML='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'+cats.map((c,i)=>`
      <div class="cat-card" style="padding:12px;min-height:0">
        <div class="cat-header" style="cursor:pointer" onclick="toggleCatGroup(this,${i})" data-cat-group-idx="${i}" data-cat-expanded="false">
          <span class="cat-name" style="font-size:14px">${kw ? highlightKw(c.name, kw) : c.name}</span>
          <span class="cat-subs-count" style="font-size:11px;color:var(--text-light);margin-left:4px">${c.subs.length} 项 <span class="cat-arrow" style="display:inline-block;transition:transform .2s">▶</span></span>
        </div>
        <div class="cat-items" id="cat-group-${i}" style="display:none;padding:6px 0 0;gap:4px">${c.subs.map(s=>`<span class="cat-sub" onclick="event.stopPropagation();showDrugList('sub','${s}')">${kw ? highlightKw(s, kw) : s}</span>`).join('')}</div>
      </div>
    `).join('')+'</div>';
    if(kw){
      const dmatches=allDrugs().filter(d=>d.name.toLowerCase().includes(kw)||(d.py||'').toLowerCase().includes(kw)||genPy(d.name).toLowerCase().includes(kw));
      if(dmatches.length>0) kb.innerHTML+=`<div class="section-title" style="margin-top:8px">🔍 匹配药品 (${dmatches.length})</div>`+dmatches.map(d=>`<div class="list-card" data-drug="${d.id}" style="cursor:pointer"><div class="icon-box">💊</div><div class="info"><div class="name">${highlightKw(d.name, kw)}</div><div class="desc">${highlightKw(d.category, kw)} · ${(d.indications||'').slice(0,30)}…</div></div></div>`).join('');
      kb.querySelectorAll('.list-card[data-drug]').forEach(function(c){c.onclick=function(){pushScreen('detail');renderDetail(c.dataset.drug);};});
    }
  } else {
    let cats= DISEASE_CATEGORIES;
    if(kw) cats=cats.filter(c=>c.name.toLowerCase().includes(kw)||c.subs.some(s=>s.toLowerCase().includes(kw))||genPy(c.name).toLowerCase().includes(kw)||c.subs.some(s=>genPy(s).toLowerCase().includes(kw)));
    kb.innerHTML='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'+cats.map((c,i)=>`\n      <div class="cat-card" style="padding:12px;min-height:0">\n        <div class="cat-header" style="cursor:pointer" onclick="toggleCatGroup(this,${100+i})" data-cat-group-idx="${100+i}" data-cat-expanded="false">\n          <span class="cat-name" style="font-size:14px">${kw ? highlightKw(c.name, kw) : c.name}</span>\n          <span style="font-size:11px;color:var(--text-light);margin-left:4px">${c.subs.length} 项 <span class="cat-arrow" style="display:inline-block;transition:transform .2s">▶</span></span>\n        </div>\n        <div class="cat-items" id="cat-group-${100+i}" style="display:none;padding:6px 0 0;gap:4px">${c.subs.map(s=>`<span class="cat-sub" onclick="event.stopPropagation();openDisease('${s}')">${kw ? highlightKw(s, kw) : s}</span>`).join('')}</div>\n      </div>\n    `).join('')+'</div>';
    if(kw){
      const matches=DISEASES.filter(d=>d.name.toLowerCase().includes(kw)||(d.py||'').toLowerCase().includes(kw)||genPy(d.name).toLowerCase().includes(kw));
      if(matches.length>0) kb.innerHTML+=`<div class="section-title" style="margin-top:8px">🔍 匹配疾病</div>`+matches.map(d=>`<div class="list-card" onclick="openDisease('${d.name}')"><div class="icon-box">🦠</div><div class="info"><div class="name">${highlightKw(d.name, kw)}</div><div class="desc">${(d.desc||'').slice(0,40)}…</div></div></div>`).join('');
    }
  }

  document.getElementById('kb-search').oninput=renderKnowledge;
  bindGuideSearch();
}

function bindGuideSearch(){
  var gs=document.getElementById('guide-search');
  if(gs && !gs._guideBound){
    gs._guideBound = true;
    gs.addEventListener('input', renderGuidelines);
    // 兼容某些浏览器 oninput 不触发的情况
    gs.addEventListener('keyup', function(e){
      if(e.key==='Backspace'||e.key==='Delete'||e.key.length===1) renderGuidelines();
    });
  }
}

function showDrugList(type,id){
  let drugs;
  if(type==='cat'){
    const cat=DRUG_CATEGORIES.find(c=>c.id===id);
    drugs=allDrugs().filter(d=>d.category.includes(cat?.name||''));
  } else {
    drugs=allDrugs().filter(d=>d.subcategory===id);
  }
  if(drugs.length===0){ toast('该分类下暂无药品'); return; }
  pushScreen('search');
  const label=type==='cat'?DRUG_CATEGORIES.find(c=>c.id===id)?.name||id:id;
  document.getElementById('search-results-input').value=label;
  const sr=document.getElementById('search-results');
  sr.innerHTML=`<div class="result-group"><div class="result-group-title drugs">💊 ${label} (${drugs.length})</div>`+drugs.map(d=>`<div class="result-item" data-drug="${d.id}">${d.name}<span class="badge badge-green" style="margin-left:auto">${d.category}</span></div>`).join('')+`</div>`;
  sr.querySelectorAll('.result-item[data-drug]').forEach(function(r){r.onclick=function(){pushScreen('detail');renderDetail(r.dataset.drug);};});
}

// ═══ 指南法规 ───
function renderGuidelines() {
  bindGuideSearch();
  const kw=(document.getElementById('guide-search')?.value||'').toLowerCase();
  const gl=document.getElementById('guide-list');
  if(!gl) return;
  let systems=getGuideSystems();
  if(kw){
    systems=systems.map(function(s){
      return {system:s.system,icon:s.icon,items:s.items.filter(function(g){return (g.title||'').toLowerCase().indexOf(kw)>=0||(g.content||'').toLowerCase().indexOf(kw)>=0||(g.system||'').toLowerCase().indexOf(kw)>=0||(g.py||'').toLowerCase().indexOf(kw)>=0||genPy(g.title||'').toLowerCase().indexOf(kw)>=0||genPy(g.system||'').toLowerCase().indexOf(kw)>=0;})};
    }).filter(function(s){return s.items.length>0;});
  } else if(!kw){
    // 搜索框清空后恢复默认全部展开(折叠)状态
  }
  gl.innerHTML=systems.map((s,i)=>`
    <div class="cat-card" style="margin-bottom:6px">
      <div class="cat-header" style="cursor:pointer" onclick="toggleGuideGroup(this)" data-group="${i}" data-expanded="${kw?'true':'false'}">
        <span class="cat-name" style="font-size:14px">${s.icon} ${highlightKw(s.system, kw)}</span>
        <span style="font-size:11px;color:var(--text-light)">${s.items.length} 篇 <span class="guide-arrow" style="display:inline-block;transition:transform .2s">${kw?'▼':'▶'}</span></span>
      </div>
      <div class="guide-items" id="guide-group-${i}" style="display:${kw?'block':'none'};margin-top:6px;padding:0">${s.items.map(g=>`<div class="guide-item" data-gid="${g.id}" style="padding:8px 4px;cursor:pointer;border-bottom:1px solid var(--border);font-size:13px">${highlightKw(g.title, kw)} <span style="font-size:11px;color:var(--text-light);white-space:nowrap">${g.year||''}</span></div>`).join('')}</div>
    </div>
  `).join('');
  if(systems.length===0&&kw) gl.innerHTML='<div style="text-align:center;padding:40px;color:var(--text-light)">未找到匹配的指南或法规</div>';
  gl.querySelectorAll('.guide-item').forEach(item=>{ item.onclick=()=>openGuide(item.dataset.gid); });
}

function toggleGuideGroup(header) {
  if (!header) return;
  var items = null;
  var target = header.getAttribute('data-target');
  var group = header.getAttribute('data-group');
  var idx = header.getAttribute('data-idx');
  if (target) { items = document.getElementById(target); }
  if (!items && group !== null) { items = document.getElementById('guide-group-'+group); }
  if (!items && idx !== null) { items = document.getElementById('gi-'+idx); }
  if (!items) { items = header.nextElementSibling; }
  if (!items) { var p = header.parentNode; if (p) items = p.querySelector('.guide-items'); }
  if (!items) return;
  var arrow = header.querySelector('.guide-arrow');
  var expanded = header.getAttribute('data-expanded') === 'true';
  if (expanded) {
    items.style.display = 'none';
    if (arrow) { arrow.style.transform = 'rotate(-90deg)'; arrow.textContent = '▶'; }
    header.setAttribute('data-expanded', 'false');
  } else {
    // 手风琴模式：折叠同一容器内其他已展开的分类
    var container = items.parentNode;
    while (container && container !== document.body) {
      var siblings = container.querySelectorAll('[data-expanded="true"]');
      if (siblings.length > 0) {
        siblings.forEach(function(h){
          if (h !== header) {
            var gi = null;
            var g = h.getAttribute('data-group');
            if (g !== null) gi = document.getElementById('guide-group-'+g);
            if (!gi) { var p = h.parentNode; if (p) gi = p.querySelector('.guide-items'); }
            if (gi) gi.style.display = 'none';
            var ar = h.querySelector('.guide-arrow');
            if (ar) { ar.style.transform = 'rotate(-90deg)'; ar.textContent = '▶'; }
            h.setAttribute('data-expanded', 'false');
          }
        });
        break;
      }
      container = container.parentNode;
    }
    items.style.display = 'block';
    if (arrow) { arrow.style.transform = 'rotate(0deg)'; arrow.textContent = '▼'; }
    header.setAttribute('data-expanded', 'true');
  }
}
// 药品/疾病分类折叠
function toggleCatGroup(header, idx) {
  const items=document.getElementById('cat-group-'+idx);
  const arrow=header.querySelector('.cat-arrow');
  if(!items||!arrow) return;
  const expanded=header.dataset.catExpanded==='true';
  if(expanded){
    items.style.display='none'; arrow.style.transform='rotate(-90deg)'; arrow.textContent='▶'; header.dataset.catExpanded='false';
  } else {
    // 手风琴：折叠同一容器内其他已展开的分类
    var parent=items.closest('#kb-list') || items.parentElement;
    if(parent){
      parent.querySelectorAll('[data-cat-expanded="true"]').forEach(function(h){
        var gid=h.dataset.catGroupIdx;
        if(gid && h!==header){
          var gi=document.getElementById('cat-group-'+gid);
          if(gi){ gi.style.display='none'; }
          var ar=h.querySelector('.cat-arrow');
          if(ar){ ar.style.transform='rotate(-90deg)'; ar.textContent='▶'; }
          h.dataset.catExpanded='false';
        }
      });
    }
    items.style.display='grid'; arrow.style.transform='rotate(0deg)'; arrow.textContent='▼'; header.dataset.catExpanded='true';
  }
}

function openGuide(gid) {
  const g = allGuides().find(x => x.id === gid) || LAWS.find(x => x.id === gid);
  if (!g) return;
  pushScreen('label');
  addRecent(gid,'guide');
  document.getElementById('label-content').innerHTML=`
    <div class="section-title" style="font-size:20px">${g.title}</div>
    <div style="font-size:12px;color:var(--text-light);display:flex;align-items:center;justify-content:space-between"><span><span class="badge badge-blue">${g.system||'法律法规'}</span><span>${g.year||''}</span> ${sourceBadge(g.id, allGuides())}</span>${isEditor()?`<button class="btn btn-sm btn-outline" id="guide-edit-btn">编辑</button>`:''}</div>
    <div id="guide-body"><div style="text-align:center;padding:30px;color:var(--text-light)">加载中…</div></div>
  `;
  showEditBtn({type:'guide',id:gid});
  loadGuideDetail(gid, function(full) {
    var detail = full || g;
    var gb = document.getElementById('guide-body');
    if(!gb) return;
    // 绑定内联编辑按钮
    var geBtn = document.getElementById('guide-edit-btn');
    if (geBtn) geBtn.onclick = function(){ editCurrentItem(); };
    var html = '<div class="label-doc"><p style="font-size:14px;line-height:1.9;color:var(--text-body);white-space:pre-wrap">'+hlText(detail.content||'')+'</p></div>';
    if(detail.sourceUrl){
      html += '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><a href="'+detail.sourceUrl+'" target="_blank" class="btn btn-outline btn-sm" style="font-size:13px;padding:6px 16px;text-decoration:none;display:inline-block">🔗 查看原文</a></div>';
    } else {
      html += '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-outline btn-sm" style="font-size:13px;padding:6px 16px" onclick="viewGuideFull(\''+gid+'\')">📄 查看全文</button></div>';
    }
    html += renderNote(gid);
    var guideName = detail.title || g.title || gid;
    html += '<button class="btn btn-outline btn-sm" onclick="showFeedbackModal(\''+guideName.replace(/'/g,"\\'")+'\',\'指南\')" style="margin-top:12px;font-size:12px">🔍 纠错</button>';
    gb.innerHTML = html;
    bindNote(gid, function(){ openGuide(gid); });
  });
}

// ═══ 药品详情 ───
function tagBadge(tag){
  const map={高危:'<span class="tag-high-risk">高危</span>',精二:'<span class="tag-psych">精二</span>',毒:'<span class="tag-toxic">毒</span>',麻:'<span class="tag-narc">麻</span>'};
  return tag?map[tag]||'':'';
}
// 信息来源标签
function sourceBadge(id, builtinList) {
  if (!id) return '';
  var isCustom = id.indexOf('custom_') === 0 || id.indexOf('gl_') === 0 || id.indexOf('h_') === 0 || id.indexOf('m_') === 0 || id.indexOf('i_') === 0 || id.indexOf('ds_') === 0;
  if (isCustom) return '<span class="badge" style="background:#FEF3C7;color:#92400E;font-size:10px">📝 用户编辑</span>';
  // 检查是否在全局数据中
  if (builtinList) {
    var exists = builtinList.some(function(x){ return x.id === id; });
    if (!exists) return '<span class="badge" style="background:#FEF3C7;color:#92400E;font-size:10px">📝 用户编辑</span>';
  }
  return '<span class="badge" style="background:#E0F2FE;color:#0369A1;font-size:10px">📦 系统数据</span>';
}

function hlText(t){
  if(!window._lastQuery) return t;
  var re=new RegExp('('+window._lastQuery.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi');
  return t.replace(re,'<mark style="background:#FEF08A;padding:1px 2px;border-radius:2px">$1</mark>');
}

// 通用关键词高亮
function highlightKw(text, kw) {
  if (!kw || !text) return text || '';
  var re = new RegExp('(' + kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
  return text.replace(re, '<mark style="background:#FEF08A;padding:1px 2px;border-radius:2px">$1</mark>');
}

// 获取指南分类列表（内置+自定义）
function getGuideSystems() {
  var custom = JSON.parse(localStorage.getItem('custom_guide_cats') || '[]');
  var deleted = JSON.parse(localStorage.getItem('deleted_guide_cats') || '[]');
  var base = GUIDE_SYSTEMS.filter(function(s){ return deleted.indexOf(s.system) < 0; });
  custom.forEach(function(name){
    if (!base.some(function(s){return s.system===name;}) && name) {
      base.push({ system:name, icon:'📁', items:[] });
    }
  });
  return base;
}

function renderDetail(drugId) {
  const d=findDrug(drugId); if(!d) return;
  addRecent(drugId);
  _currentEditItem = {type:'drug', id:drugId};
  const fav=isFav(drugId);
  const notes=getNotes();
  const note=notes[drugId]||'';
  const dc=document.getElementById('detail-content');
  // 先显示骨架屏（索引数据）
  dc.innerHTML=`
    <div class="detail-hero">
      <div class="detail-name">${d.name}</div>
      <div style="font-size:12px;color:var(--text-light);margin-bottom:12px;display:flex;align-items:center;justify-content:space-between"><span><span class="badge badge-green">${d.category}</span><span class="badge badge-blue">${d.type}</span>${tagBadge(d.tag)} ${sourceBadge(d.id, DRUGS)}</span>${isEditor()?`<button class="btn btn-sm btn-outline" id="edit-detail-btn">编辑</button>`:''}</div>
      <div class="detail-actions">
        <button class="btn btn-outline" id="detail-fav"><span style="color:${fav?'var(--danger)':'var(--primary)'}">${fav?'❤️':'🤍'}</span> ${fav?'已收藏':'收藏'}</button>
        <button class="btn btn-outline" id="detail-cmp">⚖️ 加入对比</button>
        <button class="btn btn-primary" id="detail-label">📄 说明书</button>
      </div>
    </div>
    <div id="detail-body"><div style="text-align:center;padding:30px;color:var(--text-light)">加载中…</div></div>
  `;
  document.getElementById('detail-fav').onclick=()=>{ toggleFav(drugId); renderDetail(drugId); };
  document.getElementById('detail-cmp').onclick=()=>{ addToCompare(drugId); };
  document.getElementById('detail-label').onclick=()=>{ pushScreen('label'); renderLabel(drugId); };
  if(isEditor()){
    document.getElementById('edit-detail-btn').onclick = editCurrentItem;
  }
  // 按需加载详情
  loadDrugDetail(drugId, function(full) {
    var detail = full || d;
    var db = document.getElementById('detail-body');
    if (!db) return;
    db.innerHTML = `
    <div class="info-card"><div class="info-label">适应症</div><div class="info-value">${detail.indications || d.indications || '暂无'}</div></div>
    <div class="info-card"><div class="info-label danger">禁忌症</div><div class="info-value">${detail.contraindications || '暂无'}</div></div>
    <div class="info-card"><div class="info-label">不良反应</div><div class="info-value">${detail.adverse || '暂无'}</div></div>
    <div class="info-card"><div class="info-label">用法用量</div><div class="info-value">${detail.dosage || '暂无'}</div></div>
    <div class="info-card"><div class="info-label">储存条件</div><div class="info-value">${detail.storage || '暂无'}</div></div>
    <div class="info-card"><div class="info-label">药物相互作用</div><div class="info-value">${detail.interactions || '暂无'}</div></div>
    <!-- 配伍禁忌 -->
    <div class="info-card" style="margin-top:8px;border:1px solid var(--border);border-radius:var(--radius);padding:10px 12px">
      <div class="info-label" style="color:#7C3AED">💉 配伍禁忌</div>
      <div class="info-value" id="detail-infusion-${drugId}" style="font-size:12px">加载中…</div>
    </div>
    <div class="note-card" style="margin-top:12px">
      <div class="note-header"><span class="note-title">📝 个人备注 <span style="font-size:11px;color:var(--text-light)">(200字上限)</span></span><span class="note-edit" id="edit-note">编辑</span></div>
      <div class="note-content" id="note-content-${drugId}">${note||'暂无备注，点击编辑添加…'}</div>
    </div>
    <button class="btn btn-outline btn-sm" id="report-error-btn" style="margin-top:12px;font-size:12px">🔍 纠错</button>`;
    // 加载配伍禁忌
    var infEl = document.getElementById('detail-infusion-' + drugId);
    if (infEl) {
      var drugName = d.name;
      var matches = INFUSION_DATA.filter(function(item){ return item.drug.indexOf(drugName.replace(/[（(].*[）)]/,'')) >= 0 || drugName.indexOf(item.drug.replace(/[（(].*[）)]/,'')) >= 0; });
      if (matches.length > 0) {
        infEl.innerHTML = matches.map(function(m){ return '<div style="padding:2px 0"><span style="font-weight:600">'+m.drug+'</span> <span style="color:var(--text-light)">'+m.cat+'</span></div>'; }).join('')
          + '<div style="margin-top:4px"><span class="badge badge-blue" style="cursor:pointer;font-size:10px" onclick="pushScreen(\'infusion\');renderInfusion();">🔍 查看完整配伍信息</span></div>';
      } else {
        infEl.innerHTML = '<span style="color:var(--text-light)">暂无配伍数据</span>';
      }
    }
    // 重新绑定备注点击
    var eb = document.getElementById('edit-note');
    if (eb) eb.onclick = function() {
      showModal('编辑备注', `<p style="font-size:12px;color:var(--text-light);margin-bottom:4px">最多200字</p><textarea id="note-textarea" style="width:100%;min-height:120px;border-radius:10px;border:1px solid var(--border);padding:12px;font:inherit;font-size:14px;resize:vertical" maxlength="200">${escHTML(note)}</textarea>`, [{label:'取消'},{label:'保存',primary:true,onClick:function(){ const t=document.getElementById('note-textarea').value; var r=saveNote(drugId,t); if(r) renderDetail(drugId); }}]);
    };
    // 纠错按钮绑定
    var reportBtn = document.getElementById('report-error-btn');
    if (reportBtn) reportBtn.onclick = function(){ showFeedbackModal(d.name, '药品'); };
  });
}

// ═══ 说明书 ───
function renderLabel(drugId) {
  const d=findDrug(drugId); if(!d) return;
  document.getElementById('label-content').innerHTML=`
    <div class="section-title" style="font-size:20px">${d.name} 说明书</div>
    <div style="font-size:12px;color:var(--text-light)">核准日期：2021-06-15 | 修改日期：2024-03-20</div>
    <div style="height:1px;background:var(--border)"></div>
    <div class="label-doc">${(d.label||'').split('\n').map(line=>{
      const m=line.match(/^【(.+?)】(.*)/);
      if(m) return `<h3>【${m[1]}】</h3><p>${m[2]}</p>`;
      return `<p>${line}</p>`;
    }).join('')}</div>
  `;
}

// ═══ 站内信系统 ═══
function getMessages() {
  var local = [];
  try { local = JSON.parse(localStorage.getItem('messages') || '[]'); } catch(e){}
  // 尝试从 Supabase 合并远程消息
  if (typeof _supabase !== 'undefined' && _supabase && _online && currentUser) {
    _supabase.from('messages').select('*').or('recipient.eq.'+currentUser.username+',recipient.eq.all,sender.eq.'+currentUser.username).order('created_at', { ascending: false }).limit(100).then(function(r){
      if (r.data && r.data.length > 0) {
        var merged = local.slice();
        r.data.forEach(function(sm){
          if (!merged.find(function(m){ return m.id === sm.id; })) {
            merged.push({
              id: sm.id,
              from: sm.sender,
              to: sm.recipient,
              text: sm.content,
              type: sm.msg_type || 'admin',
              read: false,
              timestamp: sm.created_at ? new Date(sm.created_at).toLocaleString('zh-CN') : '',
              ts: sm.created_at ? new Date(sm.created_at).getTime() : 0,
              sourcePage: sm.source_page || ''
            });
          }
        });
        merged.sort(function(a,b){ return (b.ts||0) - (a.ts||0); });
        localStorage.setItem('messages', JSON.stringify(merged));
        // 异步拉取完成后更新红点
        updateMsgBadge();
      }
    }).catch(function(){});
  }
  return local;
}
function saveMessages(msgs) {
  localStorage.setItem('messages', JSON.stringify(msgs));
}
function getUnreadCount() {
  var msgs = getMessages();
  return msgs.filter(function(m){ return m.to === currentUser.username || (m.to === 'all' && m.from !== currentUser.username); }).filter(function(m){ return !m.read; }).length;
}
function sendMessage(from, to, text, type, sourcePage) {
  if (!text || text.length > 200) { toast('消息不能为空或超过200字'); return false; }
  var msgs = getMessages();
  var msg = { id: 'msg_'+Date.now(), from: from, to: to, text: text, type: type || 'admin', read: false, timestamp: new Date().toLocaleString('zh-CN'), ts: Date.now(), sourcePage: sourcePage || '' };
  msgs.unshift(msg);
  saveMessages(msgs);
  // 同步到 Supabase（跨浏览器可见）
  if (typeof _supabase !== 'undefined' && _supabase && _online) {
    _supabase.from('messages').upsert({ id: msg.id, sender: from, recipient: to, content: text, msg_type: type || 'admin', source_page: sourcePage || '', created_at: new Date().toISOString() }, { onConflict: 'id' }).catch(function(){});
  }
  return true;
}
function deleteMessage(msgId) {
  if (!msgId) return;
  var msgs = getMessages().filter(function(m){ return m.id !== msgId; });
  saveMessages(msgs);
  updateMsgBadge();
}
function markAsRead(msgId) {
  var msgs = getMessages();
  var m = msgs.find(function(x){ return x.id === msgId; });
  if (m) { m.read = true; saveMessages(msgs); }
}
// 渲染站内信面板
function showMessages() {
  pushScreen('label');
  var isAdmin = currentUser.username === 'walkman0097';
  var msgs = getMessages();
  // 筛选当前用户的消息：发给我的、群发的、我发出去的
  var myMsgs = msgs.filter(function(m){
    return m.to === currentUser.username || m.to === 'all' || m.from === currentUser.username;
  });
  var html = '<div class="section-title" style="font-size:22px">💬 站内信</div>';
  if (isAdmin) {
    html += '<button class="btn btn-primary btn-full" id="msg-send-btn" style="margin-bottom:12px">✉️ 发送消息</button>';
  }
  if (myMsgs.length === 0) {
    html += '<div style="text-align:center;padding:30px;color:var(--text-light);font-size:13px">暂无消息</div>';
  } else {
    myMsgs.forEach(function(m){
      var isUnread = !m.read && (m.to === currentUser.username || m.to === 'all');
      var fromLabel = m.from === currentUser.username ? '我' : m.from;
      var typeIcon = m.type === 'feedback' ? '📝' : m.type === 'system' ? '🔔' : '💬';
      var pageInfo = m.sourcePage ? '<div style="font-size:11px;color:var(--accent);margin-top:2px">📍 '+m.sourcePage+'</div>' : '';
      html += '<div class="list-card" data-msgid="'+m.id+'" style="'+(isUnread?'border-left:3px solid var(--danger)':'')+'">'
        + '<div class="info" style="flex:1"><div class="name">'+(isUnread?'<span style="display:inline-block;width:8px;height:8px;background:var(--danger);border-radius:4px;margin-right:4px"></span>':'')+typeIcon+' '+m.text.slice(0,80)+(m.text.length>80?'…':'')+'</div>'
        + '<div class="desc">'+fromLabel+' · '+m.timestamp+pageInfo+'</div></div></div>';
    });
  }
  document.getElementById('label-content').innerHTML = html;
  // 点击消息标记已读
  document.querySelectorAll('[data-msgid]').forEach(function(el){
    el.onclick = function(){
      var msgId = el.dataset.msgid;
      markAsRead(msgId);
      // 显示详情
      var msgs = getMessages();
      var m = msgs.find(function(x){ return x.id === msgId; });
      if (m) {
        var detailHtml = '<div style="font-size:14px;line-height:1.8">'
          + '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px">'+m.from+' · '+m.timestamp+'</div>'
          + '<div style="white-space:pre-wrap">'+m.text+'</div>'
          + (m.sourcePage ? '<div style="font-size:12px;color:var(--accent);margin-top:8px">📍 '+m.sourcePage+'</div>' : '')
          + '</div>';
        showModal('💬 消息详情', detailHtml, [{label:'关闭',primary:true},{label:'删除',onClick:function(){
          deleteMessage(msgId);
          showMessages();
        }}]);
      }
      showMessages();
    };
  });
  // 管理员发送按钮
  if (isAdmin) {
    document.getElementById('msg-send-btn').onclick = function(){ showSendMsgModal(); };
  }
}
// 管理员发送消息弹窗
function showSendMsgModal(){
  var users = getUsers().filter(function(u){ return u.username !== currentUser.username; });
  var userOpts = '<option value="all">📢 全员广播</option><option value="__multi">☑️ 多选发送</option>';
  users.forEach(function(u){ userOpts += '<option value="'+u.username+'">'+u.nickname+' ('+u.username+')</option>'; });
  var html = '<div style="display:flex;flex-direction:column;gap:8px">'
    + '<div style="font-size:13px;color:var(--text-light)">收件人</div>'
    + '<select id="msg-recipient">'+userOpts+'</select>'
    + '<div id="msg-multi-checkboxes" style="display:none"></div>'
    + '<textarea id="msg-text" style="width:100%;min-height:80px;border-radius:10px;border:1px solid var(--border);padding:12px;font:inherit;font-size:14px;resize:vertical;maxlength="200" placeholder="消息内容（200字以内）"></textarea>'
    + '<div style="font-size:11px;color:var(--text-light);text-align:right"><span id="msg-char-count">0</span>/200</div>'
    + '</div>';
  showModal('✉️ 发送消息', html, [{label:'取消'},{label:'发送',primary:true,onClick:function(){
    var text = document.getElementById('msg-text').value.trim();
    if (!text) { toast('请输入消息内容'); return; }
    var recip = document.getElementById('msg-recipient').value;
    if (recip === '__multi') {
      var checked = document.querySelectorAll('#msg-multi-checkboxes input:checked');
      if (checked.length === 0) { toast('请选择接收人'); return; }
      checked.forEach(function(cb){ sendMessage(currentUser.username, cb.value, text, 'admin'); });
      toast('消息已发送');
    } else     if (recip === 'all') {
      sendMessage(currentUser.username, 'all', text, 'admin');
      toast('全员广播已发送');
    } else {
      sendMessage(currentUser.username, recip, text, 'admin');
      toast('消息已发送');
    }
  }}]);
  setTimeout(function(){
    var sel = document.getElementById('msg-recipient');
    var multiDiv = document.getElementById('msg-multi-checkboxes');
    var textarea = document.getElementById('msg-text');
    sel.onchange = function(){
      if (sel.value === '__multi') {
        multiDiv.style.display = 'block';
        multiDiv.innerHTML = '<div style="font-size:12px;color:var(--text-light);margin:4px 0">勾选接收人：</div>'
          + '<input id="msg-user-search" placeholder="🔍 搜索用户名或昵称…" style="width:100%;margin-bottom:6px;padding:6px;border-radius:6px;border:1px solid var(--border);font:inherit;font-size:12px;height:30px;box-sizing:border-box">'
          + '<div id="msg-user-list" style="max-height:220px;overflow-y:auto;min-height:60px"></div>';
        renderUserCheckboxes('');
        document.getElementById('msg-user-search').oninput = function(){
          renderUserCheckboxes(document.getElementById('msg-user-search').value.trim().toLowerCase());
        };
      } else {
        multiDiv.style.display = 'none';
      }
    };
    textarea.oninput = function(){ document.getElementById('msg-char-count').textContent = textarea.value.length; };
  }, 100);
}
function renderUserCheckboxes(kw) {
  var list = document.getElementById('msg-user-list');
  if (!list) return;
  var users = getUsers().filter(function(u){
    if (u.username === currentUser.username) return false;
    if (kw) return u.nickname.toLowerCase().indexOf(kw)>=0 || u.username.toLowerCase().indexOf(kw)>=0;
    return true;
  });
  if (users.length === 0) { list.innerHTML = '<div style="font-size:12px;color:var(--text-light);padding:8px">未找到匹配用户</div>'; return; }
  list.innerHTML = users.map(function(u){
    return '<label style="display:flex;align-items:center;gap:6px;font-size:12px;padding:3px 4px;cursor:pointer;border-bottom:1px solid var(--border)"><input type="checkbox" value="'+u.username+'" style="width:14px;height:14px;margin:0;flex-shrink:0"> <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+u.nickname+' ('+u.username+')</span></label>';
  }).join('');
}
// 纠错反馈弹窗
function showFeedbackModal(sourceName, sourceType) {
  showModal('🔍 内容纠错',
    '<div style="font-size:13px;color:var(--text-light);margin-bottom:8px">反馈内容将发送给管理员</div>'
    + '<div style="font-size:12px;color:var(--primary);margin-bottom:8px">📍 ' + sourceType + '：' + sourceName + '</div>'
    + '<textarea id="feedback-text" style="width:100%;min-height:80px;border-radius:10px;border:1px solid var(--border);padding:12px;font:inherit;font-size:14px;resize:vertical;maxlength="200" placeholder="请描述需要修正的内容（200字以内）"></textarea>'
    + '<div style="font-size:11px;color:var(--text-light);text-align:right"><span id="fb-char-count">0</span>/200</div>',
    [{label:'取消'},{label:'提交',primary:true,onClick:function(){
      var text = document.getElementById('feedback-text').value.trim();
      if (!text) { toast('请输入纠错内容'); return; }
      // 发送给所有管理员
      var admins = getUsers().filter(function(u){ return u.role === 'admin' || u.username === 'walkman0097'; });
      admins.forEach(function(admin){
        sendMessage(currentUser.username, admin.username, '【纠错】' + sourceType + '「' + sourceName + '」：' + text, 'feedback', sourceType + '：' + sourceName);
      });
      toast('纠错已提交，感谢您的反馈！');
    }}]);
  setTimeout(function(){
    var fb = document.getElementById('feedback-text');
    if (fb) fb.oninput = function(){ document.getElementById('fb-char-count').textContent = fb.value.length; };
  }, 100);
}
// 更新红点状态
function updateMsgBadge() {
  var badge = document.getElementById('msg-badge');
  if (!badge) return;
  var count = getUnreadCount();
  badge.style.display = count > 0 ? 'inline-flex' : 'none';
  badge.textContent = count > 99 ? '99+' : count;
}

// ═══ 收藏与备注（合并版）───
function renderFavorites() {
  var container = document.getElementById('fav-list');
  var fe = document.getElementById('fav-empty');
  var kw = (document.getElementById('fav-search').value||'').toLowerCase();
  // 标签栏
  var tabs = '<div class="segment" id="fav-tabs" style="margin-bottom:8px">'
    + '<div class="segment-item active" data-tab="fav">⭐ 收藏</div>'
    + '<div class="segment-item" data-tab="note">📝 备注</div>'
    + '</div>';
  // 收藏部分
  var fv = getFavs();
  var favItems = fv.map(function(id){ var d=findDrug(id); return d?{id:id,type:'drug',name:d.name,cat:d.category}:null; }).filter(Boolean).reverse();
  favItems = favItems.concat(allGuides().filter(function(g){return fv.includes(g.id);}).map(function(g){return {id:g.id,type:'guide',name:g.title,cat:g.system};}));
  if (typeof findCalcTool === 'function') {
    fv.forEach(function(id){
      if (id.indexOf('calc-')===0) { var cid=id.slice(5); var ct=findCalcTool(cid); if(ct) favItems.push({id:id,type:'calc',name:ct.name,cat:'🧮 '+ct.cat}); }
    });
  }
  if (kw) favItems = favItems.filter(function(i){return i.name.toLowerCase().includes(kw)||i.cat.includes(kw)||genPy(i.name).toLowerCase().includes(kw)||genPy(i.cat).toLowerCase().includes(kw);});
  var favHtml = favItems.length === 0
    ? '<div style="text-align:center;padding:20px;color:var(--text-light);font-size:13px">暂无收藏</div>'
    : favItems.map(function(i){
      var isPy = kw && genPy(i.name).toLowerCase().includes(kw) && !i.name.toLowerCase().includes(kw);
      var pyTag = isPy ? ' <span class="badge badge-blue" style="font-size:10px">PY</span>' : '';
      return '<div class="list-card" data-id="'+i.id+'" data-type="'+i.type+'"><div class="icon-box">'+(i.type==='drug'?'💊':i.type==='guide'?'📋':'🧮')+'</div><div class="info"><div class="name">'+highlightKw(i.name, kw)+pyTag+'</div><div class="desc">'+highlightKw(i.cat, kw)+'</div></div></div>';
    }).join('');
  // 备注部分
  var notes = getNotes();
  var noteEntries = Object.entries(notes).filter(function(e){return e[1];});
  if (kw) noteEntries = noteEntries.filter(function(e){var c=findContentById(e[0]); return c && (c.name.toLowerCase().includes(kw)||e[1].toLowerCase().includes(kw)||genPy(c.name).toLowerCase().includes(kw));});
  var noteHtml = '<div id="fav-notes-section">';
  if (noteEntries.length === 0) {
    noteHtml += '<div style="text-align:center;padding:20px;color:var(--text-light);font-size:13px">暂无备注</div>';
  } else {
    noteEntries.forEach(function(e){
      var id = e[0], text = e[1];
      var c = findContentById(id);
      if (!c) return;
      noteHtml += '<div class="list-card" style="display:flex;align-items:center;gap:8px"><div class="icon-box">'+c.icon+'</div><div class="info" style="flex:1;cursor:pointer" data-nid="'+id+'" data-ntype="'+c.type+'"><div class="name">'+highlightKw(c.name, kw)+'</div><div class="desc">'+text.slice(0, 40)+(text.length>40?'…':'')+'</div></div><button class="btn btn-sm btn-del-note" data-nid="'+id+'" style="color:var(--danger);border-color:var(--danger);font-size:11px;white-space:nowrap;flex-shrink:0">🗑️</button></div>';
    });
  }
  noteHtml += '</div>';
  container.innerHTML = tabs + '<div id="fav-content">' + favHtml + '</div><div id="note-content" style="display:none">' + noteHtml + '</div>';
  fe.style.display = 'none';
  // 绑定点击
  container.querySelectorAll('#fav-content .list-card').forEach(function(c){ c.onclick=function(){
    var t = c.dataset.type, id = c.dataset.id;
    if (t==='drug'){ addRecent(id,'drug'); pushScreen('detail'); renderDetail(id); }
    else if (t==='guide'){ addRecent(id,'guide'); openGuide(id); }
    else if (t==='calc'){ pushScreen('calc'); renderCalc(); }
  };});
  container.querySelectorAll('#note-content .info').forEach(function(el){ el.onclick=function(){
    var id = el.dataset.nid, tp = el.dataset.ntype;
    if (tp==='drug'){ addRecent(id,'drug'); pushScreen('detail'); renderDetail(id); }
    else if (tp==='guide'){ openGuide(id); }
    else if (tp==='disease'){ var ds=DISEASES.find(function(x){return x.id===id;}); if(ds) openDisease(ds.name); }
    else if (tp==='edu'){ openHealthEdu(id); }
    else if (tp==='infusion'){ openInfusion(id); }
    else if (tp==='med'){ openMedEdu(id); }
  };});
  container.querySelectorAll('#note-content .btn-del-note').forEach(function(btn){ btn.onclick=function(e){ e.stopPropagation(); var nid=btn.dataset.nid; showModal('删除备注','<p>确定删除此备注？</p>',[{label:'取消'},{label:'删除',primary:true,style:'background:var(--danger)',onClick:function(){ deleteNote(nid); renderFavorites(); toast('已删除'); }}]); };});
  // 标签切换
  var tabsEl = document.getElementById('fav-tabs');
  if (tabsEl) {
    tabsEl.querySelectorAll('.segment-item').forEach(function(t){
      t.onclick = function(){
        tabsEl.querySelectorAll('.segment-item').forEach(function(x){x.classList.remove('active');});
        t.classList.add('active');
        var showFav = t.dataset.tab === 'fav';
        document.getElementById('fav-content').style.display = showFav ? '' : 'none';
        document.getElementById('note-content').style.display = showFav ? 'none' : '';
      };
    });
  }
  document.getElementById('fav-search').oninput = renderFavorites;
}

// ═══ 对比 ═══
let compareList=[];
function addToCompare(drugId) {
  if(compareList.includes(drugId)){ toast('已在对比篮中'); return; }
  if(compareList.length>=5){ toast('最多对比5种药品'); return; }
  compareList.push(drugId); renderCompare();
  toast('已加入对比篮 ('+compareList.length+'/5) → 点击查看', ()=>{ pushScreen('compare'); renderCompare(); });
}
function removeFromCompare(drugId) { compareList=compareList.filter(x=>x!==drugId); renderCompare(); }
function renderCompare() {
  const cb=document.getElementById('compare-basket');
  const ct=document.getElementById('compare-table');
  cb.innerHTML=compareList.length===0
    ? '<div style="text-align:center;padding:10px;font-size:13px;color:var(--text-light)">对比篮为空，搜索药品添加</div>'
    : `<div class="basket-header"><span class="basket-title">对比篮 (${compareList.length}/5)</span><button class="btn btn-sm btn-outline" onclick="compareList=[];renderCompare()">清空</button></div><div class="chips">${compareList.map(id=>{ const d=findDrug(id); return d?`<span class="chip" style="cursor:pointer" onclick="event.stopPropagation();pushScreen('detail');renderDetail('${id}')">${d.name}<span class="close" onclick="event.stopPropagation();event.preventDefault();removeFromCompare('${id}')">✕</span></span>`:''; }).join('')}</div>`;

  if(compareList.length<2){ ct.innerHTML=''; return; }
  const drugs=compareList.map(id=>findDrug(id)).filter(Boolean);
  if(drugs.length<2){ ct.innerHTML=''; return; }
  ct.innerHTML=`<div class="compare-table">
    <div class="t-row"><div class="t-hdr">分类</div>${drugs.map(d=>`<div class="t-cell">${d.category||'—'}</div>`).join('')}</div>
    <div class="t-row"><div class="t-hdr">适应症</div>${drugs.map(d=>`<div class="t-cell" onclick="pushScreen('detail');renderDetail('${d.id}')" style="cursor:pointer">${d.indications||'—'}<br><span style="font-size:10px;color:var(--text-light)">👆 点击查看详情</span></div>`).join('')}</div>
    <div class="t-row"><div class="t-hdr">禁忌</div>${drugs.map(d=>`<div class="t-cell" style="color:var(--danger)">${d.contraindications||'—'}</div>`).join('')}</div>
    <div class="t-row"><div class="t-hdr">不良反应</div>${drugs.map(d=>`<div class="t-cell">${(d.adverse||'—').slice(0,40)}${d.adverse&&d.adverse.length>40?'…':''}</div>`).join('')}</div>
    <div class="t-row"><div class="t-hdr">用法用量</div>${drugs.map(d=>`<div class="t-cell">${d.dosage||'—'}</div>`).join('')}</div>
    <div class="t-row"><div class="t-hdr">储存条件</div>${drugs.map(d=>`<div class="t-cell">${d.storage||'—'}</div>`).join('')}</div>
    <div class="t-row"><div class="t-hdr">相互作用</div>${drugs.map(d=>`<div class="t-cell">${(d.interactions||'—').slice(0,40)}${d.interactions&&d.interactions.length>40?'…':''}</div>`).join('')}</div>
  </div>
  <div class="review-tip"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#0369A1" stroke-width="2"/><path d="M12 16V12" stroke="#0369A1" stroke-width="2"/><circle cx="12" cy="8" r="1" fill="#0369A1"/></svg>审方提示：${drugs.length}种药品对比，请仔细核对各药适应症及潜在相互作用，注意过敏史重叠风险。具体用药请遵医嘱。</div>`;
  // 异步加载详情数据填充对比表
  compareList.forEach(function(id){
    loadDrugDetail(id, function(full){
      if(full){
        var d = findDrug(id);
        if(d) Object.assign(d, full);
        // 重新渲染对比表填充数据
        var ct2 = document.getElementById('compare-table');
        if(ct2 && compareList.length>=2){
          var drugs2 = compareList.map(function(x){return findDrug(x);}).filter(Boolean);
          if(drugs2.length>=2){
            ct2.innerHTML=`<div class="compare-table">
              <div class="t-row"><div class="t-hdr">分类</div>${drugs2.map(function(x){return '<div class="t-cell">'+(x.category||'—')+'</div>';}).join('')}</div>
              <div class="t-row"><div class="t-hdr">适应症</div>${drugs2.map(function(x){return '<div class="t-cell" onclick="pushScreen(\'detail\');renderDetail(\''+x.id+'\')" style="cursor:pointer">'+(x.indications||'—')+'<br><span style="font-size:10px;color:var(--text-light)">👆 点击查看详情</span></div>';}).join('')}</div>
              <div class="t-row"><div class="t-hdr">禁忌</div>${drugs2.map(function(x){return '<div class="t-cell" style="color:var(--danger)">'+(x.contraindications||'—')+'</div>';}).join('')}</div>
              <div class="t-row"><div class="t-hdr">不良反应</div>${drugs2.map(function(x){return '<div class="t-cell">'+((x.adverse||'—').slice(0,40))+(x.adverse&&x.adverse.length>40?'…':'')+'</div>';}).join('')}</div>
              <div class="t-row"><div class="t-hdr">用法用量</div>${drugs2.map(function(x){return '<div class="t-cell">'+(x.dosage||'—')+'</div>';}).join('')}</div>
              <div class="t-row"><div class="t-hdr">储存条件</div>${drugs2.map(function(x){return '<div class="t-cell">'+(x.storage||'—')+'</div>';}).join('')}</div>
              <div class="t-row"><div class="t-hdr">相互作用</div>${drugs2.map(function(x){return '<div class="t-cell">'+((x.interactions||'—').slice(0,40))+(x.interactions&&x.interactions.length>40?'…':'')+'</div>';}).join('')}</div>
            </div>`;
          }
        }
      }
    });
  });
}
function initCompare() {
  document.getElementById('cmp-search').oninput=function(){
    const kw=this.value.toLowerCase();
    const res=document.getElementById('cmp-search-results');
    if(kw.length<1){ res.style.display='none'; return; }
    const matches=allDrugs().filter(d=>d.name.toLowerCase().includes(kw)||d.category.includes(kw)||(d.py||'').toLowerCase().includes(kw)||genPy(d.name).toLowerCase().includes(kw)||genPy(d.category).toLowerCase().includes(kw)).slice(0,5);
    res.style.display='block';
    res.innerHTML=matches.map(d=>{
      var isPyMatch = (d.py||'').toLowerCase().includes(kw) || genPy(d.name).toLowerCase().includes(kw);
      return `<div class="result-item" data-id="${d.id}">${highlightKw(d.name, kw)} <span class="badge badge-green" style="margin-left:auto">${d.category}</span></div>`;
    }).join('');
    res.querySelectorAll('.result-item').forEach(r=>r.onclick=()=>{ addToCompare(r.dataset.id); document.getElementById('cmp-search').value=''; res.style.display='none'; });
  };
}

// ═══ 搜索 ───
function initSearch() {
  function doSearch(q) {
    if(q.length<1) return;
    window._lastQuery=q;
    var terms=q.split(/\s+/).filter(function(t){return t.length>0;});
    function matchAny(txt){
      if(!txt) return false;
      txt=txt.toLowerCase();
      for(var i=0;i<terms.length;i++){ if(txt.indexOf(terms[i])>=0) return true; }
      return false;
    }
    function matchPy(py){
      if(!py) return false;
      py=py.toLowerCase();
      for(var i=0;i<terms.length;i++){ if(py.indexOf(terms[i])===0) return true; }
      return false;
    }
    document.getElementById('search-results-input').value=q;
    pushScreen('search');
    var results=document.getElementById('search-results');
    var dr=[],gd=[],dis=[],lw=[],rd=[],inf=[],me=[];
    try{dr=allDrugs().filter(function(d){return matchAny(d.name)||matchAny(d.indications)||matchAny(d.category)||matchAny(d.subcategory)||matchAny(d.py||genPy(d.name))||matchAny(genPy(d.category))||matchAny(genPy(d.subcategory||''));});}catch(e){}
    try{gd=allGuides().filter(function(g){return matchAny(g.title)||matchAny(g.system)||matchAny(g.content)||matchAny(g.py)||matchAny(genPy(g.title))||matchAny(genPy(g.system));});}catch(e){}
    try{dis=DISEASES.filter(function(d){return matchAny(d.name)||matchAny(d.desc)||matchAny(d.cat)||matchAny(genPy(d.cat));});}catch(e){}
    try{lw=LAWS.filter(function(l){return matchAny(l.title)||matchAny(l.content)||matchAny(l.py)||matchAny(genPy(l.title));});}catch(e){}
    try{rd=HEALTH_EDU.filter(function(h){return matchAny(h.title)||matchAny(h.content)||matchAny(h.cat)||matchAny(h.py||genPy(h.title))||matchAny(genPy(h.cat));});}catch(e){}
    try{me=MED_EDU.filter(function(m){return matchAny(m.drug)||matchAny(m.detail)||matchAny(m.cat)||matchAny(m.key)||matchAny(m.py||genPy(m.drug))||matchAny(genPy(m.cat));});}catch(e){}
    try{inf=INFUSION_DATA.filter(function(i){return matchAny(i.drug)||matchAny(i.note)||matchAny(i.cat)||matchAny(i.interact||'')||matchAny(i.vehicle||'')||matchAny(i.py||genPy(i.drug))||matchAny(genPy(i.cat||''));});}catch(e){}
    var total=dr.length+dis.length+gd.length+lw.length+rd.length+inf.length+me.length;
    document.getElementById('result-count').textContent=total+'个结果';
    function hl(t){var re=new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi');return t.replace(re,'<mark style="background:#FEF08A;padding:1px 2px;border-radius:2px">$1</mark>');}
    results.innerHTML='';
    if(dr.length>0) results.innerHTML+=`<div class="result-group"><div class="result-group-title drugs">💊 药品 (${dr.length})</div>${dr.map(d=>`<div class="result-item" data-drug="${d.id}">${hl(d.name)}<span class="badge badge-green" style="margin-left:auto">${d.category}</span></div>`).join('')}</div>`;
    if(dis.length>0) results.innerHTML+=`<div class="result-group"><div class="result-group-title diseases">🦠 疾病 (${dis.length})</div>${dis.map(d=>`<div class="result-item" onclick="openDisease('${d.name}')">${hl(d.name)}<span class="badge badge-blue" style="margin-left:auto">${d.cat}</span></div>`).join('')}</div>`;
    if(gd.length>0) results.innerHTML+=`<div class="result-group"><div class="result-group-title guides">📋 指南 (${gd.length})</div>${gd.map(g=>`<div class="result-item" data-gid="${g.id}">${hl(g.title)}</div>`).join('')}</div>`;
    if(lw.length>0) results.innerHTML+=`<div class="result-group"><div class="result-group-title guides">📜 法规 (${lw.length})</div>${lw.map(l=>`<div class="result-item" data-lid="${l.id}">${hl(l.title)}</div>`).join('')}</div>`;
    if(rd.length>0) results.innerHTML+=`<div class="result-group"><div class="result-group-title" style="color:#D97706">📖 科普教育 (${rd.length})</div>${rd.map(h=>`<div class="result-item" data-hid="${h.id}">${hl(h.title)}<span class="badge badge-blue" style="margin-left:auto;font-size:10px">${h.cat}</span></div>`).join('')}</div>`;
    if(me.length>0) results.innerHTML+=`<div class="result-group"><div class="result-group-title" style="color:#0891B2">🗣️ 用药交代 (${me.length})</div>${me.map(m=>`<div class="result-item" data-meid="${m.id}">${m.drug}<span class="badge badge-blue" style="margin-left:auto;font-size:10px">${m.key}</span></div>`).join('')}</div>`;
    if(inf.length>0) results.innerHTML+=`<div class="result-group"><div class="result-group-title" style="color:#7C3AED">💉 输液配伍 (${inf.length})</div>${inf.map(i=>`<div class="result-item" data-iid="${i.id}">${hl(i.drug)}<span class="badge badge-blue" style="margin-left:auto;font-size:10px">${i.cat}</span></div>`).join('')}</div>`;
    if(total===0) results.innerHTML='<div style="text-align:center;padding:40px;color:var(--text-light)">未找到相关内容</div>';
    try{results.querySelectorAll('.result-item[data-drug]').forEach(function(r){r.onclick=function(){pushScreen('detail');renderDetail(r.dataset.drug);};});}catch(e){}
    try{results.querySelectorAll('.result-item[data-gid]').forEach(function(r){r.onclick=function(){openGuide(r.dataset.gid);};});}catch(e){}
    try{results.querySelectorAll('.result-item[data-lid]').forEach(function(r){r.onclick=function(){openGuide(r.dataset.lid);};});}catch(e){}
    try{results.querySelectorAll('.result-item[data-hid]').forEach(function(r){r.onclick=function(){openHealthEdu(r.dataset.hid);};});}catch(e){}
    try{results.querySelectorAll('.result-item[data-meid]').forEach(function(r){r.onclick=function(){openMedEdu(r.dataset.meid);};});}catch(e){}
    try{results.querySelectorAll('.result-item[data-iid]').forEach(function(r){r.onclick=function(){openInfusion(r.dataset.iid);};});}catch(e){}
  }
  document.getElementById('home-search-input').addEventListener('keydown',e=>{ if(e.key==='Enter') doSearch(e.target.value.toLowerCase().trim()); });
  document.getElementById('search-results-input').addEventListener('keydown',e=>{ if(e.key==='Enter') doSearch(e.target.value.toLowerCase().trim()); });
  // 点击搜索图标也触发
  document.getElementById('home-search').querySelector('svg').addEventListener('click',()=>{
    const v=document.getElementById('home-search-input').value.toLowerCase().trim();
    if(v) doSearch(v);
  });
}

// ═══ 个人中心 ───
function renderProfile() {
  document.getElementById('profile-nickname').textContent=currentUser.nickname;
  const roleMap={admin:'管理员',editor:'管理员',user:'普通用户'};
  document.getElementById('profile-role').textContent=roleMap[currentUser.role]||'普通用户';
  // 后台管理：合并内容管理+用户管理，不改onclick（由bindAdminMenu处理）
  var adminBtn=document.getElementById('menu-edit-content');
  if(adminBtn){
    adminBtn.style.display=isEditor()?'flex':'none';
    adminBtn.querySelector('.label').textContent='后台管理';
    // 不覆盖onclick，bindAdminMenu已设置 pushScreen('admin')+initAdmin()
  }
  // 浏览统计已合并到系统与帮助
  var bs=document.getElementById('menu-browse-stats');
  if(bs) bs.style.display='none';
  // 编辑记录仅编辑员以上可见
  var elog=document.getElementById('menu-edit-log');
  if(elog) elog.style.display=isEditor()?'flex':'none';
  // 编辑审核仅编辑员以上可见
  var reviewMenu=document.getElementById('menu-review');
  if(reviewMenu) reviewMenu.style.display=isEditor()?'flex':'none';
  // 用户管理隐藏（已合并到后台管理）
  var um=document.getElementById('menu-user-mgmt');
  if(um) um.style.display='none';
  // 更新消息红点
  updateMsgBadge();
}
// ═══ 版本更新 ───
var APP_VERSION='1.1.0';
var CHANGELOG_KEY='changelog_custom_v3';
var DEFAULT_CHANGELOG=[
  '2026-06-13  v1.1.0：后台管理合并折叠、密保与密码分栏真手风琴、昵称上传修复、找回用户名',
  '2026-06-13  系统大更新：数据概览/浏览统计合并为系统与帮助，配伍查询加入自动补全/最近搜索/拼音搜索/收藏',
  '2026-06-13  用药科普合并为双列扁平手风琴，内容管理去标签分段，编辑审核流程完善(查看/退回/忽略)',
  '2026-06-13  详情页整改：来源标记(系统数据/用户编辑)，内联编辑按钮，配伍禁忌关联，说明书弹窗化',
  '2026-06-13  新增用药教育科普内容：禁酒药物清单/禁止高空作业药物清单',
  '2026-06-12  新增自注册功能：用户可在登录页自行注册账号，设置密保问题，自动生成密码并复制',
  '2026-06-12  新增找回密码功能：通过邮箱+密保问题验证即可重置密码，每日限3次',
  '2026-06-12  新增密保设置：我的页面可随时修改密保问题及答案',
  '2026-06-12  用户管理新增重置密码按钮：管理员可一键重置用户密码并自动复制',
  '2026-06-12  移除所有☁️推送到GitHub仓库按钮',
  '2026-06-11  指南库扩容至135条：新增25条国际指南（ACC/AHA血脂、ESC心衰/心肾/心梗、NCCN CNS肿瘤、WHO GLP-1肥胖、AACE T2DM、SOGC痛经等），覆盖心血管/神经/内分泌/妇产科/罕见病/AI数字医疗领域',
  '2026-06-11  指南库新增34条中国指南：儿科4条/妇产科6条/骨科5条/内分泌4条/感染5条/眼科1条/药学2条/腔镜机器人2条/其他5条，全部支持查看原文',
  '2026-06-10  新增7种计算工具（肌酐清除率/体表面积/INR/补液等）、33条输液配伍数据模块，药品库扩充至84种',
  '2026-06-09  新增拼音搜索、收藏功能、记住密码',
  '2026-06-08  初始发布：药品/疾病分类、指南法规、用药教育'
];
function getChangelog(){
  try{ var s=localStorage.getItem(CHANGELOG_KEY); if(s) return JSON.parse(s); }catch(e){}
  localStorage.setItem(CHANGELOG_KEY,JSON.stringify(DEFAULT_CHANGELOG));
  return DEFAULT_CHANGELOG.slice();
}
function showChangelog(){
  pushScreen('label');
  var logs=getChangelog();
  var isAdmin=currentUser.username==='walkman0097';
  var html='<div style="font-size:28px;font-weight:800;color:var(--primary);margin:4px 0 2px">v'+APP_VERSION+'</div>'
    +'<div style="font-size:12px;color:var(--text-light);margin-bottom:16px">药学知识指南 · 更新日志</div>';
  logs.forEach(function(l){
    var m=l.match(/^(\d{4}-\d{2}-\d{2})\s+(.+)/);
    if(m) html+='<div style="margin:10px 0;display:flex;gap:8px;align-items:flex-start"><span style="font-size:11px;color:var(--text-light);white-space:nowrap;margin-top:2px">'+m[1]+'</span><span style="font-size:14px;line-height:1.6;color:var(--text-body)">'+m[2]+'</span></div>';
    else html+='<div style="margin:6px 0 6px 48px;font-size:14px;color:var(--text-body)">'+l+'</div>';
  });
  if(isAdmin) html+='<button class="btn btn-outline btn-full" id="edit-changelog-btn" style="margin-top:20px">✏️ 编辑更新日志</button>';
  document.getElementById('label-content').innerHTML=html;
  var btn=document.getElementById('edit-changelog-btn');
  if(btn) btn.onclick=function(){
    var logs=getChangelog();
    showModal('编辑更新日志',
      '<p style="font-size:12px;color:var(--text-light);margin-bottom:8px">每行一条，日期格式：YYYY-MM-DD 内容</p>'
      +'<textarea id="changelog-editor" style="width:100%;min-height:200px;border-radius:10px;border:1px solid var(--border);padding:12px;font:inherit;font-size:13px;resize:vertical">'+escHTML(logs.join('\n'))+'</textarea>',
      [{label:'取消'},{label:'保存',primary:true,onClick:function(){
        var val=document.getElementById('changelog-editor').value.trim();
        if(!val){ toast('内容不能为空'); return; }
        var lines=val.split('\n').filter(function(l){return l.trim();});
        localStorage.setItem(CHANGELOG_KEY,JSON.stringify(lines));
        if (typeof _supabase !== 'undefined' && _supabase && _online) {
          _supabase.from('app_settings').upsert({ key: 'changelog', value: JSON.stringify(lines), updated_at: new Date().toISOString() }, { onConflict: 'key' }).catch(function(){});
        }
        toast('更新日志已保存');
        showChangelog();
      }}]
    );
  };
}
// ═══ 数据导出面板 ═══
function showExportPanel(){
  var isSuper = currentUser && currentUser.username === 'walkman0097';
  pushScreen('label');
  var html='<div style="font-size:28px;font-weight:800;color:var(--primary);margin:4px 0 2px">📥 数据导出</div>'
    +'<div style="font-size:12px;color:var(--text-light);margin-bottom:16px">手机端数据同步与管理</div>'
    +'<div class="label-doc" style="font-size:13px;line-height:1.8;color:var(--text-body)">'
    +(isSuper?'<p style="margin-top:8px"><b>📤 导出</b>：下载包含所有编辑内容、收藏、日志的 JSON 备份文件。</p>':'')
    +(isSuper?'<p style="margin-top:8px"><b>📥 导入</b>：从电脑或旧手机恢复之前导出的备份数据。</p>':'')
    +'</div>'
    +(isSuper?'<button class="btn btn-outline btn-full" onclick="exportAllData()" style="margin-top:16px">📥 导出数据到文件</button>':'')
    +(isSuper?'<button class="btn btn-outline btn-full" onclick="importAllData()" style="margin-top:8px">📤 从文件导入数据</button>':'');
  document.getElementById('label-content').innerHTML=html;
}
// ═══ 版本自动检查 ───
function checkVersion(){
  var url='https://superwalk.github.io/pharmacy-guide/version.json';
  fetch(url+'?t='+Date.now()).then(function(r){
    if(!r.ok) return;
    return r.json();
  }).then(function(data){
    if(!data||!data.version) return;
    if(data.version!==APP_VERSION){
      toast('📦 新版本 v'+data.version+' 已发布，请下拉刷新页面以更新',function(){
        window.location.reload();
      });
    }
  }).catch(function(){ /* 离线忽略 */ });
}
function initProfileMenus() {
  document.getElementById('edit-nickname-btn').onclick=()=>{ showModal('修改昵称','<p style="font-size:11px;color:var(--text-light);margin-bottom:4px">8字以内，不含标点和特殊符号</p><input id="new-nickname" placeholder="输入新昵称" value="'+currentUser.nickname+'" maxlength="8">',[{label:'取消'},{label:'保存',primary:true,onClick:()=>{ var n=document.getElementById('new-nickname').value.trim(); if(!n){toast('昵称不能为空');return;} if(n.length>8){toast('昵称不能超过8个字');return;} if(/[^\u4e00-\u9fa5\w]/.test(n)){toast('昵称不能包含标点和特殊符号');return;} updateNickname(n); }}]); };
  // 密码与密保
  var secMenu = document.getElementById('menu-secure');
  if (secMenu) secMenu.onclick = showSecuritySettings;
  document.getElementById('menu-browse-stats').onclick=showBrowseStats;
  document.getElementById('menu-disclaimer').onclick=()=>{ showModal('免责声明','<div style="font-size:13px;line-height:1.8;color:var(--text-body)"><p>本应用提供的药学知识内容仅供参考和学习交流之用，<span style="color:var(--danger)">不构成医疗建议、诊断或处方依据。</span></p><p style="margin-top:8px">具体用药方案请以药品说明书和临床指南为准，并遵循执业医师或药师的指导。</p><p style="margin-top:8px"><span style="color:var(--danger)">内容仅供药学专业人员学习参考，不替代专业诊断或治疗方案。</span>因参考本资料而产生的任何直接或间接后果，<span style="color:var(--danger)">作者概不负责</span>。</p><p style="margin-top:8px;color:var(--text-light)">© 2026 药学知识指南</p></div>',[{label:'我知道了',primary:true}]); };
  document.getElementById('menu-logout').onclick=()=>{ logout(); location.reload(); };
  // 更新与帮助（合并使用帮助+更新日志）
  document.getElementById('menu-update-help').onclick=function(){
    pushScreen('label');
    var isAdmin = currentUser.username === 'walkman0097';
    // 使用帮助 - 使用统一的USER_GUIDE
    var saved = (function(){
      try { var s = localStorage.getItem('custom_guide'); return s ? JSON.parse(s) : null; } catch(e){ return null; }
    })();
    var guide = saved ? saved.content : USER_GUIDE;
    // 更新日志内容
    var logs = getChangelog();
    var logHtml = logs.map(function(l){
      var m = l.match(/^(\d{4}-\d{2}-\d{2})\s+(.+)/);
      if(m) return '<div style="margin:6px 0;display:flex;gap:8px;align-items:flex-start"><span style="font-size:11px;color:var(--text-light);white-space:nowrap;margin-top:2px">'+m[1]+'</span><span style="font-size:13px;line-height:1.6;color:var(--text-body)">'+m[2]+'</span></div>';
      return '<div style="margin:4px 0 4px 48px;font-size:13px;color:var(--text-body)">'+l+'</div>';
    }).join('');
    // 数据统计
    var dbInfo = '<div style="font-size:12px;line-height:1.8;color:var(--text-light);padding:4px 0">'
      + '💊 药品：' + (typeof DRUGS !== 'undefined' ? DRUGS.length : '—') + ' 种 | '
      + '🦠 疾病：' + (typeof DISEASES !== 'undefined' ? DISEASES.length : '—') + ' 种 | '
      + '📋 指南：' + (typeof GUIDELINES !== 'undefined' ? GUIDELINES.length : '—') + ' 条<br>'
      + '📖 科普：' + (typeof HEALTH_EDU !== 'undefined' ? HEALTH_EDU.length : '—') + ' 篇 | '
      + '🗣️ 用药教育：' + (typeof MED_EDU !== 'undefined' ? MED_EDU.length : '—') + ' 条 | '
      + '💉 配伍：' + (typeof INFUSION_DATA !== 'undefined' ? INFUSION_DATA.length : '—') + ' 条'
      + '</div>';
    // 导出导入按钮（仅admin）
    var exportBtns = isAdmin ? '<div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn btn-outline btn-sm" onclick="exportAllData()">📥 导出数据</button><button class="btn btn-outline btn-sm" onclick="importAllData()">📤 导入数据</button></div>' : '';
    document.getElementById('label-content').innerHTML = '<div class="section-title" style="font-size:22px">📖 系统与帮助</div>'
      // 数据卡片 - 手风琴折叠
      + '<div style="background:var(--bg);border-radius:12px;padding:14px;margin-bottom:10px;border:1px solid var(--border)"><div style="font-size:14px;font-weight:600;color:var(--primary);display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="toggleGuideGroup(this)" data-expanded="false"><span>📦 数据概览</span><span class="guide-arrow" style="display:inline-block;transition:transform .2s;font-size:12px;color:var(--text-light)">▶</span></div><div class="guide-items" style="display:none;margin-top:8px;border-top:1px solid var(--border);padding-top:6px">' + dbInfo + '</div></div>'
      // 更新日志卡片
      + '<div style="background:var(--bg);border-radius:12px;padding:14px;margin-bottom:10px;border:1px solid var(--border)"><div style="font-size:14px;font-weight:600;color:var(--primary);display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="toggleGuideGroup(this)" data-expanded="false"><span>📋 更新日志</span><span class="guide-arrow" style="display:inline-block;transition:transform .2s;font-size:12px;color:var(--text-light)">▶</span></div><div class="guide-items" style="display:none;margin-top:8px;border-top:1px solid var(--border);padding-top:6px">' + logHtml
      + (isAdmin ? '<button class="btn btn-outline btn-sm" id="edit-changelog-btn" style="margin-top:6px">✏️ 编辑</button>' : '') + '</div></div>'
      // 使用帮助卡片
      + '<div style="background:var(--bg);border-radius:12px;padding:14px;margin-bottom:10px;border:1px solid var(--border)"><div style="font-size:14px;font-weight:600;color:var(--primary);display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="toggleGuideGroup(this)" data-expanded="false"><span>📖 使用帮助</span><span class="guide-arrow" style="display:inline-block;transition:transform .2s;font-size:12px;color:var(--text-light)">▶</span></div><div class="guide-items" style="display:none;margin-top:8px;border-top:1px solid var(--border);padding-top:6px"><div class="label-doc" id="guide-content" style="white-space:pre-wrap;font-size:13px;line-height:1.8;color:var(--text-body)">' + guide + '</div>'
      + (isAdmin ? '<button class="btn btn-outline btn-sm" id="edit-guide-btn" style="margin-top:6px">✏️ 编辑</button>' : '') + '</div></div>'
      // 数据管理卡片（仅admin）
      + (isAdmin ? '<div style="background:var(--bg);border-radius:12px;padding:14px;border:1px solid var(--border)"><div style="font-size:14px;font-weight:600;color:var(--primary);display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="toggleGuideGroup(this)" data-expanded="false"><span>💾 数据管理</span><span class="guide-arrow" style="display:inline-block;transition:transform .2s;font-size:12px;color:var(--text-light)">▶</span></div><div class="guide-items" style="display:none;margin-top:8px;border-top:1px solid var(--border);padding-top:6px">'
        + '<div style="font-size:13px;line-height:1.8;color:var(--text-body)"><p><b>📤 导出</b>：下载包含所有编辑内容、收藏、日志的 JSON 备份文件。</p><p><b>📥 导入</b>：从电脑或旧手机恢复之前导出的备份数据。</p></div>'
        + exportBtns + '</div></div>' : '')
      // 浏览统计卡片
      + (isEditor() ? (function(){
        var today = new Date().toISOString().slice(0,10);
        var loginStats = []; try { loginStats = JSON.parse(localStorage.getItem('login_stats') || '[]'); } catch(e) {}
        var todayCount = loginStats.filter(function(s){return s.date===today;}).length;
        var totalUsers = loginStats.filter(function(s){return s.date===today;}).reduce(function(acc, s){ if (acc.indexOf(s.username) < 0) acc.push(s.username); return acc; }, []).length;
        var views = []; try { views = JSON.parse(localStorage.getItem('view_stats') || '[]'); } catch(e) {}
        var top = views.sort(function(a,b){return (b.count||0) - (a.count||0);}).slice(0,20);
        var typeIcon = {drug:'💊', guide:'📋', disease:'🦠', edu:'📖', med:'🗣️', inf:'💉'};
        var topHtml = top.map(function(v,i){
          var icon = typeIcon[v.type] || '📄';
          return '<div class="list-card" style="cursor:pointer" data-hot-id="'+v.id+'" data-hot-type="'+v.type+'"><div class="icon-box">'+icon+'</div><div class="info"><div class="name"><span style="color:'+(i<3?'var(--danger)':'var(--text-light)')+';font-weight:'+(i<3?'800':'400')+'">#'+(i+1)+'</span> '+v.name+'</div><div class="desc">浏览 '+v.count+' 次</div></div></div>';
        }).join('');
        return '<div style="background:var(--bg);border-radius:12px;padding:14px;margin-bottom:10px;border:1px solid var(--border)"><div style="font-size:14px;font-weight:600;color:var(--primary);display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="toggleGuideGroup(this)" data-expanded="false"><span>📊 浏览统计</span><span class="guide-arrow" style="display:inline-block;transition:transform .2s;font-size:12px;color:var(--text-light)">▶</span></div><div class="guide-items" style="display:none;margin-top:8px;border-top:1px solid var(--border);padding-top:6px">'
          + '<div style="display:flex;gap:12px;margin-bottom:8px">'
          + '<div style="flex:1;background:var(--bg);border-radius:12px;padding:10px;text-align:center;border:1px solid var(--border)"><div style="font-size:22px;font-weight:800;color:var(--primary)">'+todayCount+'</div><div style="font-size:11px;color:var(--text-light)">今日登录(次)</div></div>'
          + '<div style="flex:1;background:var(--bg);border-radius:12px;padding:10px;text-align:center;border:1px solid var(--border)"><div style="font-size:22px;font-weight:800;color:var(--accent)">'+totalUsers+'</div><div style="font-size:11px;color:var(--text-light)">今日人数</div></div>'
          + '</div>'
          + '<div style="font-size:13px;font-weight:600;color:var(--primary);margin-bottom:4px">🔥 热门TOP20</div>'
          + (top.length > 0 ? topHtml : '<div style="text-align:center;padding:20px;color:var(--text-light)">暂无浏览数据</div>')
          + '</div></div>';
      })() : '');
    var editChangelogBtn = document.getElementById('edit-changelog-btn');
    if (editChangelogBtn) editChangelogBtn.onclick = function(){
      var logs = getChangelog();
      showModal('编辑更新日志', '<p style="font-size:12px;color:var(--text-light);margin-bottom:8px">每行一条，日期格式：YYYY-MM-DD 内容</p><textarea id="changelog-editor" style="width:100%;min-height:200px;border-radius:10px;border:1px solid var(--border);padding:12px;font:inherit;font-size:13px;resize:vertical">' + escHTML(logs.join('\n')) + '</textarea>',
        [{label:'取消'},{label:'保存',primary:true,onClick:function(){
          var val = document.getElementById('changelog-editor').value;
          var arr = val.split('\n').filter(function(l){return l.trim();});
          try { localStorage.setItem('changelog_custom_v3', JSON.stringify(arr)); } catch(e) {}
          if (typeof _supabase !== 'undefined' && _supabase && _online) {
            _supabase.from('app_settings').upsert({ key: 'changelog', value: JSON.stringify(arr), updated_at: new Date().toISOString() }, { onConflict: 'key' }).catch(function(){});
          }
          toast('更新日志已保存');
          document.getElementById('menu-update-help').onclick();
        }}]);
    };
    var editBtn = document.getElementById('edit-guide-btn');
    if (editBtn) editBtn.onclick = function(){
      var currentGuide = document.getElementById('guide-content').textContent;
      showModal('编辑使用帮助', '<p style="font-size:12px;color:var(--text-light);margin-bottom:8px">编辑使用帮助内容，每一行自动换行。</p><textarea id="guide-editor" style="width:100%;min-height:300px;border-radius:10px;border:1px solid var(--border);padding:12px;font:inherit;font-size:13px;resize:vertical">' + escHTML(currentGuide) + '</textarea>',
        [{label:'取消'},{label:'保存',primary:true,onClick:function(){
          var newGuide = document.getElementById('guide-editor').value;
          try { localStorage.setItem('custom_guide', JSON.stringify({content: newGuide, role: currentUser.role, updated: new Date().toISOString()})); } catch(e) {}
          if (typeof _supabase !== 'undefined' && _supabase && _online) {
            _supabase.from('app_settings').upsert({ key: 'user_guide', value: newGuide, updated_at: new Date().toISOString() }, { onConflict: 'key' }).catch(function(){});
          }
          toast('使用帮助已更新');
          document.getElementById('menu-update-help').onclick();
        }}]);
    };
  };
  // 用户管理（仅admin）
  document.getElementById('menu-user-mgmt').onclick=()=>{ pushScreen('label'); var e2=document.getElementById('label-edit-btn'); if(e2) e2.style.display='none'; renderUserListInLabel(); };
  // 编辑记录菜单（函数在 admin.js 中定义）
  var elog=document.getElementById('menu-edit-log');
  if(elog) elog.onclick=()=>{ showEditLogs(); };
  // 编辑记录与审核（函数在 admin.js 中定义）
  var reviewMenu=document.getElementById('menu-review');
  if(reviewMenu) reviewMenu.onclick=()=>{ showEditLogs(); };
  // 站内信入口在首页状态栏
  // 数据导出已合并到更新与帮助
  document.querySelectorAll('.menu-item[data-nav]').forEach(m=>{ m.onclick=()=>showScreen(m.dataset.nav); });
}

// ═══ 我的备注 ───
function viewMyNotes() {
  pushScreen('mynotes');
  const notes=getNotes();
  const entries=Object.entries(notes).filter(([,v])=>v);
  const ml=document.getElementById('mynotes-list');
  const me=document.getElementById('mynotes-empty');
  if(entries.length===0){ ml.innerHTML=''; me.style.display='block'; return; }
  me.style.display='none';
  ml.innerHTML=entries.map(([id,text])=>{ const c=findContentById(id); return c?`<div class="list-card" data-note-id="${id}" data-note-type="${c.type}"><div class="icon-box">${c.icon}</div><div class="info"><div class="name">${c.name}</div><div class="desc">${text.slice(0,40)}…</div></div></div>`:''; }).join('');
  ml.querySelectorAll('.list-card').forEach(c=>{ c.onclick=()=>{
    var id=c.dataset.noteId; var tp=c.dataset.noteType; if(tp==='drug'){ addRecent(id,'drug'); pushScreen('detail'); renderDetail(id); } else if(tp==='guide'){ openGuide(id); } else if(tp==='disease'){ var ds=DISEASES.find(function(x){return x.id===id;}); if(ds) openDisease(ds.name); } else if(tp==='edu'){ openHealthEdu(id); } else if(tp==='infusion'){ openInfusion(id); } else if(tp==='med'){ openMedEdu(id); } }; });
}

// ═══ 科普教育 ─══
function renderHealthEdu() {
  const kw=(document.getElementById('he-search')?.value||'').toLowerCase();
  const hl=document.getElementById('he-list');
  const cats=[...new Set(HEALTH_EDU.map(h=>h.cat))];
  let data=HEALTH_EDU;
  if(kw) data=data.filter(h=>h.title.toLowerCase().includes(kw)||(h.content||'').toLowerCase().includes(kw)||h.cat.toLowerCase().includes(kw)||(h.py||'').toLowerCase().includes(kw)||genPy(h.cat).toLowerCase().includes(kw));
  hl.innerHTML=cats.map(cat=>{
    const items=data.filter(h=>h.cat===cat);
    if(items.length===0) return '';
    return `<div class="cat-card" style="margin-bottom:8px">
      <div class="cat-header" style="cursor:pointer" onclick="toggleGuideGroup(this)" data-expanded="false"><span class="cat-name">${cat}</span><span style="font-size:12px;color:var(--text-light)">${items.length} 篇 <span class="guide-arrow" style="display:inline-block;transition:transform .2s">▶</span></span></div>
      <div class="guide-items" style="display:none">${items.map(h=>{
        var isPy = kw && ((h.py||'').toLowerCase().includes(kw) || genPy(h.cat).toLowerCase().includes(kw)) && !h.title.toLowerCase().includes(kw);
        var pyTag = isPy ? ' <span class="badge badge-blue" style="font-size:10px">PY</span>' : '';
        return `<div class="guide-item" data-hid="${h.id}" style="display:flex;gap:6px;align-items:center;padding:8px 4px;cursor:pointer;border-bottom:1px solid var(--border);font-size:13px"><span style="width:6px;height:6px;background:#D97706;border-radius:3px;flex-shrink:0"></span><span style="color:var(--text-body);flex:1">${highlightKw(h.title, kw)}${pyTag}</span></div>`;
      }).join('')}</div>
    </div>`;
  }).join('');
  hl.querySelectorAll('.guide-item').forEach(item=>{ item.onclick=()=>openHealthEdu(item.dataset.hid); });
  document.getElementById('he-search').oninput=renderHealthEdu;
}

function openHealthEdu(hid) {
  const h=HEALTH_EDU.find(x=>x.id===hid); if(!h) return;
  pushScreen('label');
  document.getElementById('label-content').innerHTML=`
    <div class="section-title" style="font-size:20px">${h.title}</div>
    <div class="subtitle-row" style="font-size:12px;color:var(--text-light);display:flex;align-items:center;justify-content:space-between"><span>${h.cat} ${sourceBadge(h.id, HEALTH_EDU)}</span></div>
    <div id="healthedu-body"><div style="text-align:center;padding:30px;color:var(--text-light)">加载中…</div></div>
  `;
  showEditBtn({type:'edu',id:hid});
  loadHealthEduDetail(hid, function(full) {
    var detail = full || h;
    var hb = document.getElementById('healthedu-body');
    if(!hb) return;
    hb.innerHTML = '<div class="label-doc"><p style="font-size:14px;line-height:1.9;color:var(--text-body);white-space:pre-wrap">'+hlText(detail.content||'')+'</p></div>' + renderNote(hid);
    bindNote(hid, function(){ openHealthEdu(hid); });
  });
}

// ═══ 输液配伍 ─══
function renderInfusion() {
  var container = document.getElementById('inf-list');
  var kw = (document.getElementById('inf-search')?.value||'').toLowerCase();
  var cats = [...new Set(INFUSION_DATA.map(function(i){return i.cat||'';}))];
  var data = INFUSION_DATA;
  if (kw) data = data.filter(function(i){return i.drug.toLowerCase().includes(kw)||(i.note||'').toLowerCase().includes(kw)||(i.cat||'').includes(kw)||(i.interact||'').includes(kw)||(i.vehicle||'').toLowerCase().includes(kw)||(i.py||'').toLowerCase().includes(kw)||genPy(i.cat||'').toLowerCase().includes(kw);});
  // 配伍查询面板
  var queryHtml = '<div class="cat-card" style="margin-bottom:8px;background:linear-gradient(135deg,#F3E8FF,#E9D5FF)">'
    + '<div class="cat-header" style="cursor:pointer" onclick="toggleGuideGroup(this)" data-expanded="false"><span class="cat-name">🔍 配伍禁忌查询</span><span class="guide-arrow" style="display:inline-block;transition:transform .2s">▶</span></div>'
    + '<div class="guide-items" style="display:none">'
    + '<div style="font-size:12px;color:var(--text-light);margin-bottom:6px">输入药品名称，多个药品用逗号或空格分隔</div>'
    + '<div id="inf-recent" style="margin-bottom:6px"></div>'
    + '<div style="display:flex;gap:4px"><input id="inf-query-input" placeholder="如：头孢曲松, 氨溴索" style="flex:1"><button class="btn btn-sm btn-primary" id="inf-query-btn">查询</button></div>'
    + '<div id="inf-query-results" style="margin-top:8px"></div>'
    + '<div style="font-size:11px;color:var(--text-light);margin-top:8px;padding:8px;border-top:1px solid var(--border)">⚠️ 内容不保证涵盖所有配伍禁忌，结果仅供参考，请以药品说明书和临床指南为准。</div>'
    + '</div></div>';
  // 分类列表
  var listHtml = cats.map(function(cat){
    var items = data.filter(function(i){return i.cat===cat;});
    if (items.length===0) return '';
    return '<div class="cat-card" style="margin-bottom:8px"><div class="cat-header" style="cursor:pointer" onclick="toggleGuideGroup(this)" data-expanded="true"><span class="cat-name">'+cat+'</span><span style="font-size:12px;color:var(--text-light)">'+items.length+' 条 <span class="guide-arrow">▼</span></span></div><div class="guide-items">'+items.map(function(i){return '<div class="guide-item" data-iid="'+i.id+'" style="display:flex;gap:6px;align-items:center;padding:8px 4px;cursor:pointer;border-bottom:1px solid var(--border);font-size:13px"><span style="width:6px;height:6px;background:#7C3AED;border-radius:3px;flex-shrink:0"></span><span style="color:var(--text-body);flex:1;font-weight:600">'+highlightKw(i.drug, kw)+'</span><span style="font-size:11px;color:var(--text-light)">'+ (i.vehicle||'') +'</span></div>';}).join('')+'</div></div>';
  }).join('');
  container.innerHTML = queryHtml + listHtml;
  // 绑定点击
  container.querySelectorAll('.guide-item').forEach(function(item){ item.onclick=function(){openInfusion(item.dataset.iid);}; });
  // 渲染最近查询
  var recentEl = document.getElementById('inf-recent');
  if (recentEl) {
    var recents = JSON.parse(localStorage.getItem('inf_recents') || '[]');
    if (recents.length > 0) {
      recentEl.innerHTML = '<div style="font-size:11px;color:var(--text-light);margin-bottom:3px">最近搜索：</div>'
        + recents.slice(0, 5).map(function(q){
          return '<span style="display:inline-block;padding:2px 8px;margin:2px;background:var(--bg);border:1px solid var(--border);border-radius:12px;font-size:11px;cursor:pointer" data-recent="'+q+'">'+q+'</span>';
        }).join('')
        + '<span style="display:inline-block;padding:2px 8px;margin:2px;font-size:10px;color:var(--text-light);cursor:pointer" id="inf-clear-recent">清空</span>';
      recentEl.querySelectorAll('[data-recent]').forEach(function(el){
        el.onclick = function(){
          var qi = document.getElementById('inf-query-input');
          if (qi) { qi.value = el.dataset.recent; doInfusionQuery(); }
        };
      });
      var clearBtn = document.getElementById('inf-clear-recent');
      if (clearBtn) clearBtn.onclick = function(){ localStorage.removeItem('inf_recents'); renderInfusion(); };
    }
  }
  // 查询功能
  var queryBtn = document.getElementById('inf-query-btn');
  if (queryBtn) queryBtn.onclick = function(){ doInfusionQuery(); };
  var queryInput = document.getElementById('inf-query-input');
  if (queryInput) {
    queryInput.onkeydown = function(e){ if(e.key==='Enter') doInfusionQuery(); };
    // 自动补全
    var _acTimer = null;
    var _acBox = null;
    queryInput.oninput = function(){
      clearTimeout(_acTimer);
      var val = queryInput.value.trim();
      var lastTerm = val.split(/[,，\s]+/).pop() || '';
      if (!lastTerm) { if (_acBox) { _acBox.remove(); _acBox = null; } return; }
      _acTimer = setTimeout(function(){
        var matches = INFUSION_DATA.filter(function(item){ return item.drug.indexOf(lastTerm) >= 0 || (item.py||'').toLowerCase().indexOf(lastTerm.toLowerCase()) >= 0 || genPy(item.drug||'').indexOf(lastTerm.toLowerCase()) >= 0; }).slice(0, 8);
        if (_acBox) { _acBox.remove(); _acBox = null; }
        if (matches.length === 0) return;
        _acBox = document.createElement('div');
        _acBox.style.cssText = 'position:absolute;z-index:999;background:var(--card);border:1px solid var(--border);border-radius:8px;width:'+queryInput.offsetWidth+'px;max-height:200px;overflow-y:auto;box-shadow:0 4px 12px rgba(0,0,0,.1)';
        _acBox.innerHTML = matches.map(function(m){
          return '<div style="padding:8px 12px;cursor:pointer;border-bottom:1px solid var(--border);font-size:13px" data-ac-drug="'+m.drug+'">'+m.drug+' <span style="font-size:11px;color:var(--text-light)">'+m.cat+'</span></div>';
        }).join('');
        // 定位
        var rect = queryInput.getBoundingClientRect();
        var container = document.getElementById('screen-infusion') || document.querySelector('.screen.active');
        if (container) container.appendChild(_acBox);
        _acBox.style.top = (rect.bottom + container.scrollTop) + 'px';
        _acBox.style.left = rect.left + 'px';
        // 绑定点击
        _acBox.querySelectorAll('[data-ac-drug]').forEach(function(el){
          el.onclick = function(){
            var drug = el.dataset.acDrug;
            var parts = queryInput.value.split(/[,，\s]+/);
            parts[parts.length - 1] = drug;
            queryInput.value = parts.join(', ');
            if (_acBox) { _acBox.remove(); _acBox = null; }
            queryInput.focus();
          };
        });
      }, 200);
    };
    // 点击外部关闭
    document.addEventListener('click', function(e){ if (_acBox && !_acBox.contains(e.target) && e.target !== queryInput) { _acBox.remove(); _acBox = null; } });
  }
  document.getElementById('inf-search').oninput = renderInfusion;
}

function doInfusionQuery() {
  var input = document.getElementById('inf-query-input').value.trim();
  if (!input) { toast('请输入药品名称'); return; }
  var terms = input.split(/[,，\s]+/).filter(function(t){return t;});
  var results = [];
  terms.forEach(function(term){
    INFUSION_DATA.forEach(function(item){
      if (item.drug.toLowerCase().indexOf(term.toLowerCase()) >= 0 || (item.py||'').toLowerCase().indexOf(term.toLowerCase()) >= 0 || genPy(item.drug||'').indexOf(term.toLowerCase()) >= 0) {
        // 检查是否已存在
        if (!results.find(function(r){return r.id===item.id;})) {
          results.push(item);
        }
      }
    });
  });
  var container = document.getElementById('inf-query-results');
  if (results.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:12px;color:var(--text-light);font-size:13px">未找到相关配伍信息</div>';
    return;
  }
  var html = '<div style="font-size:12px;color:var(--text-light);margin-bottom:4px">找到 '+results.length+' 条相关配伍信息：</div>';
  results.forEach(function(r){
    var favs = getFavs();
    var isF = favs.indexOf(r.id) >= 0;
    html += '<div class="guide-item" data-iid="'+r.id+'" style="padding:8px 4px;cursor:pointer;border-bottom:1px solid var(--border);font-size:13px;display:flex;gap:6px;align-items:center">'
      + '<span style="width:6px;height:6px;background:#7C3AED;border-radius:3px;flex-shrink:0"></span>'
      + '<span style="flex:1"><span style="font-weight:600;color:var(--primary-dark)">'+r.drug+'</span> <span style="font-size:11px;color:var(--text-light)">'+r.cat+'</span></span>'
      + '<span style="font-size:11px;color:var(--text-light)">'+(r.vehicle||'')+'</span>'
      + '<span class="inf-fav" data-iid="'+r.id+'" style="cursor:pointer;font-size:14px;user-select:none;flex-shrink:0">'+(isF?'⭐':'☆')+'</span></div>';
  });
  container.innerHTML = html;
  container.querySelectorAll('.guide-item').forEach(function(item){ item.onclick=function(){openInfusion(item.dataset.iid);}; });
  // 绑定收藏按钮 - 改用 touchstart+mousedown 确保移动端生效
  container.querySelectorAll('.inf-fav').forEach(function(btn){
    function doToggle(e) {
      e.preventDefault();
      e.stopPropagation();
      var id = btn.getAttribute('data-iid');
      if (!id) return;
      var favs = getFavs();
      if (favs.indexOf(id) >= 0) favs = favs.filter(function(x){return x!==id;});
      else favs.push(id);
      localStorage.setItem(favKey(), JSON.stringify(favs));
      trySync('favorites', { username: currentUser ? currentUser.username : '', content_id: id, list: JSON.stringify(favs) });
      doInfusionQuery();
    }
    btn.addEventListener('mousedown', doToggle);
    btn.addEventListener('touchstart', doToggle, {passive:false});
  });
  // 保存到最近查询
  var input = document.getElementById('inf-query-input');
  if (input) {
    var q = input.value.trim();
    if (q) {
      var recents = JSON.parse(localStorage.getItem('inf_recents') || '[]');
      recents = recents.filter(function(r){ return r !== q; });
      recents.unshift(q);
      if (recents.length > 10) recents = recents.slice(0, 10);
      localStorage.setItem('inf_recents', JSON.stringify(recents));
    }
  }
}

function openInfusion(iid) {
  const i=INFUSION_DATA.find(x=>x.id===iid); if(!i) return;
  pushScreen('label');
  document.getElementById('label-content').innerHTML=`
    <div class="section-title" style="font-size:22px">${i.drug}</div>
    <div style="font-size:13px;color:var(--text-light);margin-bottom:12px;display:flex;align-items:center;justify-content:space-between"><span><span class="badge badge-blue">${i.cat}</span> ${sourceBadge(i.id, INFUSION_DATA)}</span>${isEditor()?`<button class="btn btn-sm btn-outline" id="inf-edit-btn">编辑</button>`:''}</div>
    <div id="infusion-body"><div style="text-align:center;padding:20px;color:var(--text-light)">加载中…</div></div>
  `;
  showEditBtn({type:'inf',id:iid});
  loadInfusionDetail(iid, function(full) {
    var detail = full || i;
    var ib = document.getElementById('infusion-body');
    if(!ib) return;
    // 绑定内联编辑按钮
    var ieBtn = document.getElementById('inf-edit-btn');
    if (ieBtn) ieBtn.onclick = function(){ editCurrentItem(); };
    ib.innerHTML = `
    <div class="info-card"><div class="info-label">输液载体</div><div class="info-value">${detail.vehicle||'—'}</div></div>
    <div class="info-card"><div class="info-label">浓度</div><div class="info-value">${detail.conc||'—'}</div></div>
    <div class="info-card"><div class="info-label">输注速度</div><div class="info-value">${detail.speed||'—'}</div></div>
    ${detail.interact?'<div class="info-card"><div class="info-label danger">配伍禁忌</div><div class="info-value">'+hlText(detail.interact)+'</div></div>':''}
    ${detail.detail?'<div class="info-card"><div class="info-label danger">细节</div><div class="info-value">'+hlText(detail.detail)+'</div></div>':''}
    <div class="info-card"><div class="info-label">注意事项</div><div class="info-value" style="white-space:pre-wrap">${hlText(detail.note||'')}</div></div>` + renderNote(iid);
    bindNote(iid, function(){ openInfusion(iid); });
  });
}

function showDiseaseList(catName) {
  const dr=allDrugs().filter(d=>d.indications.toLowerCase().includes(catName.toLowerCase())||d.category.toLowerCase().includes(catName.toLowerCase()));
  const ds=DISEASES.filter(d=>d.cat===catName);
  pushScreen('search');
  document.getElementById('search-results-input').value=catName;
  const sr=document.getElementById('search-results');
  let html='';
  if(ds.length>0) html+=`<div class="result-group"><div class="result-group-title diseases">🦠 ${catName} (${ds.length})</div>`+ds.map(d=>`<div class="result-item" onclick="openDisease('${d.name}')">${d.name}</div>`).join('')+`</div>`;
  if(dr.length>0) html+=`<div class="result-group"><div class="result-group-title drugs">💊 相关药品 (${dr.length})</div>`+dr.map(d=>`<div class="result-item" onclick="pushScreen('detail');renderDetail('${d.id}')">${d.name}<span class="badge badge-green" style="margin-left:auto">${d.category}</span></div>`).join('')+`</div>`;
  sr.innerHTML=html||'<div style="text-align:center;padding:40px;color:var(--text-light)">暂无数据</div>';
}

function openDisease(name) {
  const d=DISEASES.find(x=>x.name===name);
  if(d) _currentEditItem = {type:'disease', id:d.id};
  const drugs=allDrugs().filter(dr=>dr.indications.toLowerCase().includes(name.slice(0,3).toLowerCase())||dr.category.toLowerCase().includes(name.slice(0,3)));
  const guides=allGuides().filter(g=>g.title.includes(name)||(g.content&&g.content.includes(name)));
  if(!d && drugs.length===0 && guides.length===0){ toast('暂无数据'); return; }
  pushScreen('label');
  let html='<div class="section-title" style="font-size:22px">'+name+'</div>';
  if(d) html+=`
    <div style="font-size:12px;color:var(--text-light);margin-bottom:12px;display:flex;align-items:center;justify-content:space-between"><span><span class="badge badge-blue">${d.cat}</span> ${sourceBadge(d.id, DISEASES)}</span>${isEditor()?'<span style="display:flex;gap:6px"><button class="btn btn-sm btn-outline" onclick="editCurrentItem()">编辑</button></span>':''}</div>
    <div id="disease-body"><div style="text-align:center;padding:20px;color:var(--text-light)">加载中…</div></div>`;
  if(drugs.length>0) html+=`<div class="section-title" style="margin-top:8px">💊 相关药品 (${drugs.length})</div>`+drugs.slice(0,6).map(dr=>`<div class="list-card" onclick="pushScreen('detail');renderDetail('${dr.id}')"><div class="icon-box">💊</div><div class="info"><div class="name">${dr.name}</div><div class="desc">${dr.category} · ${(dr.indications||'').slice(0,30)}…</div></div></div>`).join('');
  if(guides.length>0) html+=`<div class="section-title" style="margin-top:8px">📋 相关指南</div>`+guides.slice(0,3).map(g=>`<div class="list-card" onclick="openGuide('${g.id}')"><div class="icon-box">📋</div><div class="info"><div class="name">${g.title}</div><div class="desc">${g.system} · ${g.year}</div></div></div>`).join('');
  if(!d && drugs.length===0) html+='<div style="text-align:center;padding:40px;color:var(--text-light)">该疾病暂未收录详细信息</div>';
  document.getElementById('label-content').innerHTML=html;
  addRecent(d?d.id:name,'disease');
  if(d) {
    loadDiseaseDetail(d.id, function(full) {
      var detail = full || d;
      var db = document.getElementById('disease-body');
      if(!db) return;
      db.innerHTML = `
        <div class="info-card"><div class="info-label">定义</div><div class="info-value">${hlText(detail.desc||'')}</div></div>
        <div class="info-card"><div class="info-label">症状</div><div class="info-value">${hlText(detail.symptoms||'')}</div></div>
        <div class="info-card"><div class="info-label">诊断</div><div class="info-value">${hlText(detail.diagnosis||'')}</div></div>
        <div class="info-card"><div class="info-label">治疗原则</div><div class="info-value">${hlText(detail.treatment||'')}</div></div>`;
      db.innerHTML += renderNote(d.id);
      bindNote(d.id, function(){ openDisease(name); });
    });
  }
}

function renderMedEdu(){
  var kw=(document.getElementById('me-search')?.value||'').toLowerCase();
  var hl=document.getElementById('me-list');
  var cats=[...new Set(MED_EDU.map(m=>m.cat))];
  var data=MED_EDU;
  if(kw) data=data.filter(m=>m.drug.toLowerCase().includes(kw)||(m.detail||'').toLowerCase().includes(kw)||m.cat.toLowerCase().includes(kw)||m.key.toLowerCase().includes(kw)||(m.py||'').toLowerCase().includes(kw)||genPy(m.cat).toLowerCase().includes(kw));
  hl.innerHTML=cats.map(function(cat){
    var items=data.filter(function(m){return m.cat===cat;});
    if(items.length===0) return '';
    return '<div class="cat-card" style="margin-bottom:8px"><div class="cat-header" style="cursor:pointer" onclick="toggleGuideGroup(this)" data-expanded="false"><span class="cat-name">'+cat+'</span><span style="font-size:12px;color:var(--text-light)">'+items.length+' 条 <span class="guide-arrow" style="display:inline-block;transition:transform .2s">▶</span></span></div><div class="guide-items" style="display:none">'+items.map(function(m){return '<div class="guide-item" data-meid="'+m.id+'" style="padding:8px 4px;cursor:pointer;border-bottom:1px solid var(--border);font-size:13px"><div style="font-weight:600;color:var(--primary-dark)">'+highlightKw(m.drug, kw)+'</div><div style="color:var(--text-body);font-size:12px;margin-top:2px">'+m.key+'</div></div>';}).join('')+'</div></div>';
  }).join('');
  hl.querySelectorAll('.guide-item').forEach(function(item){item.onclick=function(){openMedEdu(item.dataset.meid);};});
  document.getElementById('me-search').oninput=renderMedEdu;
}

// ═══ 用药科普（合并用药教育 + 科普教育）═══
function renderMedEduCombined() {
  var kw = (document.getElementById('me-search')?.value||'').toLowerCase();
  var container = document.getElementById('mededu-combined');
  if (!container) return;
  // 合并所有数据（用药教育+科普教育），统一为 { cat, name, detail, type, id, icon }
  var all = [];
  MED_EDU.forEach(function(m){
    if (kw && !matchKw(m.drug, kw) && !matchKw(m.key, kw) && !matchKw(m.cat, kw) && !matchKw(m.detail, kw) && !(m.py||'').toLowerCase().includes(kw) && !genPy(m.cat).toLowerCase().includes(kw)) return;
    all.push({ cat:m.cat||'其他', name:m.drug, detail:m.key, type:'med', id:m.id, icon:'🗣️' });
  });
  HEALTH_EDU.forEach(function(h){
    if (kw && !matchKw(h.title, kw) && !matchKw(h.cat, kw) && !matchKw(h.content, kw) && !(h.py||'').toLowerCase().includes(kw) && !genPy(h.cat).toLowerCase().includes(kw)) return;
    var isPy = kw && ((h.py||'').toLowerCase().includes(kw) || genPy(h.cat).toLowerCase().includes(kw)) && !h.title.toLowerCase().includes(kw);
    all.push({ cat:h.cat||'其他', name:h.title, detail:h.cat, type:'edu', id:h.id, icon:'📖', pyTag: isPy });
  });
  // 按分类分组
  var cats = {};
  all.forEach(function(a){
    if (!cats[a.cat]) cats[a.cat] = [];
    cats[a.cat].push(a);
  });
  var catNames = Object.keys(cats);
  // 双列扁平化手风琴
  var t = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">';
  catNames.forEach(function(cat){
    var items = cats[cat];
    t += '<div style="background:var(--bg);border-radius:12px;border:1px solid var(--border);padding:10px">'
      + '<div style="font-size:13px;font-weight:600;color:var(--primary);display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="toggleGuideGroup(this)" data-expanded="false">'
      + '<span>'+cat+'</span><span style="font-size:11px;color:var(--text-light)">'+items.length+' <span class="guide-arrow" style="display:inline-block;transition:transform .2s;font-size:10px">▶</span></span></div>'
      + '<div class="guide-items" style="display:none;margin-top:6px;border-top:1px solid var(--border);padding-top:4px">'
      + items.map(function(a){
          var pyTag = a.pyTag ? ' <span class="badge badge-blue" style="font-size:10px">PY</span>' : '';
          return '<div class="guide-item" data-aid="'+a.id+'" data-atype="'+a.type+'" style="padding:6px 4px;cursor:pointer;border-bottom:1px solid var(--border);font-size:12px">'
            + '<div style="font-weight:600;color:var(--primary-dark)">'+a.icon+' '+highlightKw(a.name, kw)+pyTag+'</div>'
            + '<div style="color:var(--text-light);font-size:11px;margin-top:1px">'+highlightKw(a.detail, kw)+'</div></div>';
        }).join('')
      + '</div></div>';
  });
  t += '</div>';
  if (catNames.length === 0) t = '<div style="text-align:center;padding:40px;color:var(--text-light);font-size:13px">未找到相关内容</div>';
  container.innerHTML = t;
  // 绑定点击
  container.querySelectorAll('.guide-item').forEach(function(item){
    item.onclick = function(){
      var id = item.dataset.aid;
      var type = item.dataset.atype;
      if (type === 'med') openMedEdu(id);
      else openHealthEdu(id);
    };
  });
  document.getElementById('me-search').oninput = renderMedEduCombined;
}
function matchKw(val, kw) {
  if (!val) return false;
  return val.toLowerCase().indexOf(kw) >= 0;
}

function openMedEdu(mid){
  var m=MED_EDU.find(function(x){return x.id===mid;}); if(!m) return;
  pushScreen('label');
  document.getElementById('label-content').innerHTML='<div class="section-title" style="font-size:22px">'+m.drug+'</div><div class="subtitle-row" style="font-size:12px;color:var(--text-light);display:flex;align-items:center;justify-content:space-between;margin-bottom:12px"><span class="badge badge-blue">'+m.cat+'</span> '+sourceBadge(m.id, MED_EDU)+'</div><div id="mededu-body"><div style="text-align:center;padding:20px;color:var(--text-light)">加载中…</div></div>';
  showEditBtn({type:'med',id:mid});
  loadMedEduDetail(mid, function(full) {
    var detail = full || m;
    var mb = document.getElementById('mededu-body');
    if(!mb) return;
    mb.innerHTML = '<div class="info-card"><div class="info-label">交代要点</div><div class="info-value" style="font-size:16px;font-weight:600;color:var(--accent)">'+detail.key+'</div></div><div class="info-card"><div class="info-label">详细说明</div><div class="info-value" style="white-space:pre-wrap">'+detail.detail+'</div></div>' + renderNote(mid);
    bindNote(mid, function(){ openMedEdu(mid); });
  });
}

var _currentEditItem=null;
function showEditBtn(item){ 
  _currentEditItem=item; 
  var btn=document.getElementById('label-edit-btn'); 
  // 用药教育/科普教育/指南/配伍使用内联编辑按钮，不在顶部显示
  if(item.type==='med'||item.type==='edu'||item.type==='guide'||item.type==='inf'){
    if(btn) btn.style.display='none';
  } else if(btn&&isEditor()){
    btn.style.display='inline';
    btn.onclick=editCurrentItem;
  }
  // 对于科普教育/用药教育，在副标题行嵌入编辑按钮
  if((item.type==='edu'||item.type==='med') && isEditor()){
    var el=document.getElementById('label-content');
    if(!el) return;
    var sub=el.querySelector('.subtitle-row');
    if(sub && !sub.querySelector('.inline-edit-btn')){
      var eb=document.createElement('span');
      eb.className='inline-edit-btn';
      eb.style.cssText='font-size:12px;color:var(--accent);cursor:pointer;font-weight:600;border:1px solid var(--accent);border-radius:6px;padding:1px 8px';
      eb.textContent='编辑';
      eb.onclick=editCurrentItem;
      sub.appendChild(eb);
    }
  }
}
function editCurrentItem(){
  if(!_currentEditItem) return;
  var t=_currentEditItem.type;
  var id=_currentEditItem.id;
  if(t==='drug'){ var d=allDrugs().find(function(x){return x.id===id;}); if(d){ loadDrugDetail(id, function(full){
    if(full) Object.assign(d, full);
    showDrugEditor(d, allDrugs().indexOf(d));
  }); if(!_detailCache['drugs/'+id]) showDrugEditor(d, allDrugs().indexOf(d)); }}
  else if(t==='guide'){ var g=allGuides().find(function(x){return x.id===id;})||LAWS.find(function(x){return x.id===id;}); if(g){ loadGuideDetail(id, function(full){
    if(full) Object.assign(g, full);
    showGuidelineEditor(g, allGuides().indexOf(g));
  }); if(!_detailCache['guide/'+id]) showGuidelineEditor(g, allGuides().indexOf(g)); }}
  else if(t==='disease'){ var ds=DISEASES.find(function(x){return x.id===id;}); if(ds){ loadDiseaseDetail(id, function(full){
    if(full) Object.assign(ds, full);
    showDiseaseEditor(ds, DISEASES.indexOf(ds));
  }); if(!_detailCache['diseases/'+id]) showDiseaseEditor(ds, DISEASES.indexOf(ds)); }}
  else if(t==='edu'){ var h=HEALTH_EDU.find(function(x){return x.id===id;}); if(h){ loadHealthEduDetail(id, function(full){
    if(full) Object.assign(h, full);
    showEduEditor(h, HEALTH_EDU.indexOf(h));
  }); if(!_detailCache['healthedu/'+id]) showEduEditor(h, HEALTH_EDU.indexOf(h)); }}
  else if(t==='inf'){ var inf=INFUSION_DATA.find(function(x){return x.id===id;}); if(inf){ loadInfusionDetail(id, function(full){
    if(full) Object.assign(inf, full);
    showInfEditor(inf, INFUSION_DATA.indexOf(inf));
  }); if(!_detailCache['infusion/'+id]) showInfEditor(inf, INFUSION_DATA.indexOf(inf)); }}
  else if(t==='med'){ var m=MED_EDU.find(function(x){return x.id===id;}); if(m){ loadMedEduDetail(id, function(full){
    if(full) Object.assign(m, full);
    showMedEduEditor(m, MED_EDU.indexOf(m));
  }); if(!_detailCache['mededu/'+id]) toast('用药教育请先在内容管理打开编辑'); }}
}

// 查看指南全文
// 用户管理（admin专用，在我的→用户管理中显示）
function renderUserListInLabel(){
  var users=getUsers();
  var html='<div class="section-title" style="font-size:22px">👥 用户管理</div>';
  html+='<button class="btn btn-primary btn-full" style="margin:8px 0" id="um-add-btn">+ 新增用户</button>';
  html+='<div id="um-list"></div>';
  document.getElementById('label-content').innerHTML=html;
  document.getElementById('um-add-btn').onclick=function(){ showUserEditor(); };
  refreshUMList();
}

function refreshUMList(){
  var users=getUsers();
  var roleLabel={admin:'管理员',editor:'管理员',user:'普通用户'};
  var container=document.getElementById('um-list');
  if(!container) return;
  container.innerHTML='';
  if(users.length===0){ container.innerHTML='<div style="text-align:center;padding:40px;color:var(--text-light)">暂无用户</div>'; return; }
  users.forEach(function(u){
    var row=document.createElement('div');
    row.className='list-card';
    row.style.cssText='display:flex;align-items:center;gap:8px';
    row.innerHTML='<div class="icon-box">👤</div><div class="info" style="flex:1"><div class="name">'+escHTML(u.username)+'</div><div class="desc">'+roleLabel[u.role||'user']+' · '+escHTML(u.nickname||'')+'</div></div><button class="btn btn-sm btn-copy" data-copy="'+escHTML('用户名：'+u.username+'\n密码：'+u.password)+'" style="padding:2px 6px;font-size:12px;margin-right:2px" title="复制账号密码">📋</button><button class="btn btn-sm btn-um-export" style="padding:2px 6px;font-size:12px;margin-right:2px" title="导出到仓库">☁️</button><button class="btn btn-sm btn-outline" style="margin-right:4px">编辑</button><button class="btn btn-sm" style="color:var(--danger);border-color:var(--danger)">删除</button>';
    var copyBtn=row.querySelector('.btn-copy');
    if(copyBtn) copyBtn.onclick=function(){ navigator.clipboard.writeText(copyBtn.dataset.copy).then(function(){ toast('已复制 '+u.username); }).catch(function(){}); };
    var exportBtn=row.querySelector('.btn-um-export');
    if(exportBtn) exportBtn.onclick=function(){ syncOneUserToGitHub(u); };
    row.querySelectorAll('button')[2].onclick=function(){ showUserEditor(u); };
    row.querySelectorAll('button')[3].onclick=function(){
      if(u.username===currentUser.username){ toast('不能删除自己'); return; }
      if(u.username==='walkman0097'){ toast('不能删除管理员账户'); return; }
      showModal('确认删除','<p>确定删除用户 <b>'+escHTML(u.username)+'</b>？</p>',[{label:'取消'},{label:'删除',primary:true,style:'background:var(--danger)',onClick:function(){
        removeUser(u.username);
        refreshUMList();
        toast('已删除');
      }}]);
    };
    container.appendChild(row);
  });
}

function showUserEditor(user){
  var isNew=!user;
  var u=user||{};
  // 新增时自动生成用户名
  if(isNew){
    var users=getUsers();
    var maxNum=0;
    users.forEach(function(x){
      var m=x.username.match(/^user(\d+)$/);
      if(m){ var n=parseInt(m[1]); if(n>maxNum) maxNum=n; }
    });
    u.username='user'+String(maxNum+1).padStart(3,'0');
    u.password=genRandPw();
    u.nickname=u.username;
  }
  showModal(isNew?'新增用户':'编辑用户',
    '<div style="display:flex;flex-direction:column;gap:8px">'+
    '<input id="ed-uname" placeholder="用户名" value="'+escHTML(u.username||'')+'" '+(isNew?'':'disabled')+'>'+
    '<div style="display:flex;gap:6px"><input id="ed-upass" placeholder="密码" value="'+escHTML(u.password||'')+'" style="flex:1">'+(isNew?'<button class="btn btn-sm btn-outline" id="ed-genpw" style="white-space:nowrap">🎲 随机</button>':'')+'</div>'+
    '<input id="ed-unick" placeholder="昵称" value="'+escHTML(u.nickname||'')+'">'+
    '<select id="ed-urole" '+(u.username==='walkman0097'?'disabled':'')+'><option value="user" '+((u.role||'user')==='user'?'selected':'')+'>普通用户</option><option value="editor" '+(u.role==='editor'?'selected':'')+'>管理员</option></select>'+
    '</div>',
    [{label:'取消'},{label:isNew?'新增并复制':'保存',primary:true,onClick:function(){
      var uname=document.getElementById('ed-uname').value.trim();
      var upass=document.getElementById('ed-upass').value.trim();
      var unick=document.getElementById('ed-unick').value.trim();
      var urole=document.getElementById('ed-urole').value;
      if(!uname||!upass){ toast('用户名和密码不能为空'); return; }
      if(isNew){
        var r=addUser({username:uname,password:upass,nickname:unick||uname,role:urole||'user'});
        if(!r.ok){ toast(r.msg); return; }
        // 复制并提示
        var info='用户名：'+uname+'\n密码：'+upass;
        navigator.clipboard.writeText(info).then(function(){
          toast('已复制账号信息');
        }).catch(function(){});
        showModal('✅ 新增成功',
          '<div style="text-align:center;line-height:2"><b>'+uname+'</b><br>密码：<b>'+upass+'</b></div><div style="font-size:12px;color:var(--text-light);margin-top:6px">已自动复制到剪贴板</div>',
          [{label:'确定',primary:true}]);
      } else {
        updateUser(u.username,{password:upass,nickname:unick||u.nickname,role:urole||'user'});
        // 同步更新 user_{username} 缓存，防止下次加载时被源码密码覆盖
        var cached=JSON.parse(localStorage.getItem('user_'+u.username)||'{}');
        cached.password=upass;
        if(unick) cached.nickname=unick;
        localStorage.setItem('user_'+u.username,JSON.stringify(cached));
      }
      refreshUMList();
      if(!isNew) toast('保存成功');
    }}]
  );
  // 绑定随机密码按钮
  setTimeout(function(){
    var btn=document.getElementById('ed-genpw');
    if(btn) btn.onclick=function(){ document.getElementById('ed-upass').value=genRandPw(); };
  },100);
}

function genRandPw(){
  var chars='abcdefghjkmnpqrstuvwxyz23456789';
  var pw='';
  for(var i=0;i<8;i++) pw+=chars[Math.floor(Math.random()*chars.length)];
  return pw;
}

function escHTML(s){ return (s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function viewGuideFull(gid){
  var g=allGuides().find(function(x){return x.id===gid;})||LAWS.find(function(x){return x.id===gid;});
  if(!g){ toast('未找到指南'); return; }
  var url='guides/'+gid+'.md';
  fetch(url).then(function(r){
    if(r.ok) return r.text();
    throw new Error('no full text');
  }).then(function(text){
    var html='<div class="section-title" style="font-size:20px">'+g.title+'</div>'
           +'<div style="font-size:12px;color:var(--text-light);margin:4px 0 16px">📄 原始指南全文 · 来源：知识库</div>';
    
    var lines=text.split('\n');
    for(var i=0;i<lines.length;i++){
      var l=lines[i].trim();
      if(!l) continue;
      var clean=l.replace(/^#+\s*/,'');
      if(!clean) continue;
      
      // 表格检测：连续的行都包含 | 字符
      if(clean.indexOf('|')>=0 && i+1<lines.length && lines[i+1].trim().indexOf('|')>=0){
        var tableRows=[clean];
        while(i+1<lines.length && lines[i+1].trim().indexOf('|')>=0){
          i++; tableRows.push(lines[i].trim().replace(/^#+\s*/,''));
        }
        // 渲染紧凑表格
        html+='<div style="margin:8px 0;font-size:12px;line-height:1.7;overflow-x:auto">';
        tableRows.forEach(function(row){
          var cells=row.split('|').filter(function(c){return c.trim();}).map(function(c){return c.replace(/\$\$/g,'').trim();});
          html+='<div style="display:flex;border-bottom:1px solid var(--border);padding:3px 0">'+cells.map(function(c){return '<div style="flex:1;min-width:60px;padding:2px 4px;color:var(--text-body)">'+c+'</div>';}).join('')+'</div>';
        });
        html+='</div>';
        continue;
      }
      
      // 大标题：一、二、三、...
      if(/^[一二三四五六七八九十]+[、，]/.test(clean)){
        html+='<h3 style="margin:18px 0 8px;color:var(--primary);font-size:17px;font-weight:700;border-left:3px solid var(--primary);padding-left:8px">'+clean+'</h3>';
      }
      // 二级标题：（一）（二）... or 1. 2.
      else if(/^[（(][一二三四五六七八九十\d]+[）)]/.test(clean)){
        html+='<h4 style="margin:14px 0 6px;color:var(--primary-dark);font-size:15px;font-weight:600">'+clean+'</h4>';
      }
      // 普通段落 - 聚合连续的非标题行
      else {
        var para=clean;
        while(i+1<lines.length && lines[i+1].trim() && !/^#*\s*[一二三四五六七八九十]+[、，]/.test(lines[i+1].trim()) && !/^#*\s*[（(][一二三四五六七八九十\d]+[）)]/.test(lines[i+1].trim())){
          i++;
          para+=' '+lines[i].trim().replace(/^#+\s*/,'');
        }
        html+='<p style="margin:8px 0;font-size:14px;line-height:1.9;color:var(--text-body)">'+para+'</p>';
      }
    }
    pushScreen('label');
    document.getElementById('label-content').innerHTML=html;
  }).catch(function(){
    toast('该指南暂无原始全文数据');
  });
}
// 从文本中提取提及的药品
function extractMentionedDrugs(text){
  if(!text) return [];
  var drugs=allDrugs();
  var found=[];
  drugs.forEach(function(d){
    if(text.indexOf(d.name)>=0 || text.indexOf(d.name.slice(0,-1))>=0) found.push(d);
  });
  return found.slice(0,8);
}
// ═══ 启动：检查已登录 ───
(function(){
  // 先尝试记住的密码登录
  var rem=loadRemember();
  if(rem){ var r=login(rem.u,rem.p); if(r.ok){ setTimeout(initApp,200); return; } else { clearRemember(); } }
  // 再尝试上次登录的session
  var savedUser=localStorage.getItem('currentUser');
  if(savedUser){ var u=findUser(savedUser); if(u){
    var saved=JSON.parse(localStorage.getItem('user_'+u.username)||'{}');
    if(saved.nickname) u.nickname=saved.nickname;
    if(saved.password) u.password=saved.password;
    currentUser=u; setTimeout(initApp,200);
  }}
})();
