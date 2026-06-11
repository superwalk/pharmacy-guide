// ═══ 合并自定义数据 ───
function allDrugs() { try{const c=JSON.parse(localStorage.getItem('custom_data')||'{"drugs":[],"guidelines":[]}');return[...DRUGS,...(c.drugs||[])];}catch(e){return DRUGS;} }
function allGuides() { try{const c=JSON.parse(localStorage.getItem('custom_data')||'{"drugs":[],"guidelines":[]}');return[...GUIDELINES,...(c.guidelines||[])];}catch(e){return GUIDELINES;} }
function findDrug(id) { return allDrugs().find(d=>d.id===id); }

// ═══ Toast ───
function toast(msg, cb) {
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  if(cb){ t.style.pointerEvents='auto'; t.onclick=()=>{ cb(); t.classList.remove('show'); }; }
  else { t.style.pointerEvents='none'; t.onclick=null; }
  setTimeout(()=>t.classList.remove('show'), cb?4000:2000);
}

// ═══ 弹窗 ───
function showModal(title, content, actions) {
  const ov=document.getElementById('modal-overlay');
  const mb=document.getElementById('modal-box');
  mb.innerHTML=`<h3>${title}</h3>${content}<div class="modal-actions">${actions.map((a,i)=>`<button class="btn ${a.primary?'btn-primary':'btn-outline'}" data-modal-act="${i}">${a.label}</button>`).join('')}</div>`;
  ov.classList.add('show');
  mb.querySelectorAll('[data-modal-act]').forEach(btn=>{ btn.onclick=()=>{ const a=actions[parseInt(btn.dataset.modalAct)]; if(a.onClick)a.onClick(); ov.classList.remove('show'); }; });
}

// ═══ storage 辅助 ───
function favKey() { return 'fav_'+currentUser.username; }
function noteKey() { return 'notes_'+currentUser.username; }
function recentKey() { return 'recent_'+currentUser.username; }
function getFavs() { return JSON.parse(localStorage.getItem(favKey())||'[]'); }
function isFav(id) { return getFavs().includes(id); }
function toggleFav(id) { let f=getFavs(); if(f.includes(id)) f=f.filter(x=>x!==id); else f.push(id); localStorage.setItem(favKey(),JSON.stringify(f)); }
function getNotes() { return JSON.parse(localStorage.getItem(noteKey())||'{}'); }
function saveNote(drugId, text) { const n=getNotes(); n[drugId]=text; localStorage.setItem(noteKey(),JSON.stringify(n)); }
function getRecent() { return JSON.parse(localStorage.getItem(recentKey())||'[]'); }
function addRecent(id, type) { 
  type=type||'drug';
  let r=getRecent(); r=r.filter(x=>!(x.id===id&&x.type===type)); 
  r.unshift({id:id,type:type}); if(r.length>15)r.pop(); 
  localStorage.setItem(recentKey(),JSON.stringify(r)); 
}

// 简易拼音首字母（新增内容自动支持搜索）
function genPy(s){
  var m={a:'阿啊嗄哎哀埃癌矮艾碍爱鞍氨安俺按暗岸胺案肮昂凹熬袄傲奥澳',b:'芭捌扒叭吧巴拔把坝霸罢爸白柏百摆败拜班搬板版扮拌伴瓣半办邦帮绑棒磅胞包薄保堡饱宝抱报暴爆杯碑悲北辈背贝倍备被奔苯本笨崩绷泵蹦逼鼻比笔彼碧毕毙币痹闭必辟壁臂避编贬扁便变辨辩遍标彪表别彬斌滨冰柄丙饼病并玻波播拨波博勃铂伯帛船渤泊驳捕补不布步部',c:'擦猜裁材才财睬踩采彩菜餐参蚕残惭惨灿苍舱仓沧藏操曹草策侧册测层插叉茶查察岔差柴蝉馋缠铲产阐昌场尝常长偿肠厂敞畅唱抄超朝潮吵炒车扯撤彻臣辰尘晨沉陈趁撑成呈乘程惩澄诚承骋秤吃持池迟弛驰耻齿尺赤翅充冲虫崇抽酬畴稠愁筹仇绸丑臭初出橱厨锄除楚础储触处揣川穿传船喘串疮窗床创吹炊锤垂春椿醇唇纯刺次聪从丛凑粗醋簇促崔催脆翠村存寸措挫错',d:'搭达答打大呆歹戴带代贷袋待逮怠丹单胆旦但诞弹蛋当挡党档刀倒岛导到稻悼道盗德得灯登等邓堤低滴迪敌笛抵底地帝弟递颠碘点典电甸店奠殿雕吊钓调跌爹碟蝶叠丁盯钉顶定订丢东冬董懂动栋洞都督毒读堵赌杜肚度渡端短段断堆队对吨蹲盾多夺躲朵'};
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
  document.getElementById('pw-toggle').addEventListener('click',function(){
    const pw=document.getElementById('login-pw');
    if(pw.type==='password'){ pw.type='text'; this.textContent='🙈'; }
    else { pw.type='password'; this.textContent='👁'; }
  });
})();

function loginSubmit() {
  const u=document.getElementById('login-user').value.trim();
  const p=document.getElementById('login-pw').value.trim();
  const e=document.getElementById('login-error');
  const b=document.getElementById('login-btn');
  
  // 1. 空输入检测
  if(!u && !p){ showLoginErr(e,'请输入用户名和密码','warn'); return; }
  if(!u){ showLoginErr(e,'请输入用户名','warn'); document.getElementById('login-user').focus(); return; }
  if(!p){ showLoginErr(e,'请输入密码','warn'); document.getElementById('login-pw').focus(); return; }
  
  // 2. 显示加载中
  b.textContent='登录中…'; b.style.opacity='0.7'; showLoginErr(e,'','');
  
  // 3. 模拟网络延迟 + 校验
  setTimeout(()=>{
    const r=login(u,p);
    if(r.ok){
      if(document.getElementById('remember-pw').checked) saveRemember(u,p);
      showLoginErr(e,'登录成功 ✓','success');
      setTimeout(()=>{ initApp(); },500);
    } else {
      b.textContent='登 录'; b.style.opacity='1';
      if(r.msg.includes('不存在')){
        showLoginErr(e,'❌ 用户「'+u+'」不存在，请检查用户名是否正确','error');
        document.getElementById('login-user').select();
      } else if(r.msg.includes('密码')){
        showLoginErr(e,'❌ 密码错误，请重新输入','error');
        document.getElementById('login-pw').select();
      } else {
        showLoginErr(e,'⚠️ '+r.msg,'warn');
      }
    }
  },400);
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
  document.getElementById('home-grid').querySelectorAll('.entry-card').forEach(card=>{
    card.onclick=()=>{
      const nav=card.dataset.nav;
      if(nav==='compare'){ pushScreen('compare'); renderCompare(); return; }
      if(nav==='calc'){ pushScreen('calc'); renderCalc(); return; }
      if(nav==='healthedu'){ pushScreen('healthedu'); renderHealthEdu(); return; }
      if(nav==='infusion'){ pushScreen('infusion'); renderInfusion(); return; }
      if(nav==='mededu'){ pushScreen('mededu'); renderMedEdu(); return; }
      if(card.dataset.tab) { showScreen(nav); document.querySelectorAll('#kb-tabs .segment-item').forEach(t=>t.classList.toggle('active',t.dataset.tab===card.dataset.tab)); renderKnowledge(); }
      else { showScreen(nav); }
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
    if(kw) cats=cats.filter(c=>c.name.toLowerCase().includes(kw)||c.subs.some(s=>s.toLowerCase().includes(kw)));
    kb.innerHTML=cats.map(c=>`
      <div class="cat-card">
        <div class="cat-header" onclick="showDrugList('cat','${c.id}')"><span class="cat-name">${c.name}</span><span class="cat-arrow">›</span></div>
        <div class="cat-subs">${c.subs.map(s=>`<span class="cat-sub" onclick="event.stopPropagation();showDrugList('sub','${s}')">${s}</span>`).join('')}</div>
      </div>
    `).join('');
    if(kw){
      const dmatches=allDrugs().filter(d=>d.name.toLowerCase().includes(kw)||(d.py||'').toLowerCase()===kw);
      if(dmatches.length>0) kb.innerHTML+=`<div class="section-title" style="margin-top:8px">🔍 匹配药品 (${dmatches.length})</div>`+dmatches.map(d=>`<div class="list-card" data-drug="${d.id}" style="cursor:pointer"><div class="icon-box">💊</div><div class="info"><div class="name">${d.name}</div><div class="desc">${d.category} · ${d.indications.slice(0,30)}…</div></div></div>`).join('');
      kb.querySelectorAll('.list-card[data-drug]').forEach(function(c){c.onclick=function(){pushScreen('detail');renderDetail(c.dataset.drug);};});
    }
  } else {
    let cats= DISEASE_CATEGORIES;
    if(kw) cats=cats.filter(c=>c.name.toLowerCase().includes(kw)||c.subs.some(s=>s.toLowerCase().includes(kw)));
    kb.innerHTML=cats.map(c=>`\n      <div class="cat-card">\n        <div class="cat-header" onclick="showDiseaseList('${c.name}')"><span class="cat-name">${c.name}</span><span class="cat-arrow">›</span></div>\n        <div class="cat-subs">${c.subs.map(s=>`<span class="cat-sub" onclick="event.stopPropagation();openDisease('${s}')">${s}</span>`).join('')}</div>\n      </div>\n    `).join('');
    if(kw){
      const matches=DISEASES.filter(d=>d.name.toLowerCase().includes(kw)||(d.py||'').toLowerCase().includes(kw));
      if(matches.length>0) kb.innerHTML+=`<div class="section-title" style="margin-top:8px">🔍 匹配疾病</div>`+matches.map(d=>`<div class="list-card" onclick="openDisease('${d.name}')"><div class="icon-box">🦠</div><div class="info"><div class="name">${d.name}</div><div class="desc">${(d.desc||'').slice(0,40)}…</div></div></div>`).join('');
    }
  }

  document.getElementById('kb-search').oninput=renderKnowledge;
  bindGuideSearch();
}

function bindGuideSearch(){
  var gs=document.getElementById('guide-search');
  if(gs){ gs.oninput=renderGuidelines; }
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
  const kw=(document.getElementById('guide-search')?.value||'').toLowerCase();
  const gl=document.getElementById('guide-list');
  let systems=GUIDE_SYSTEMS;
  if(kw){
    systems=systems.map(function(s){
      return {system:s.system,icon:s.icon,items:s.items.filter(function(g){return g.title.toLowerCase().indexOf(kw)>=0||(g.content||'').toLowerCase().indexOf(kw)>=0||g.system.toLowerCase().indexOf(kw)>=0||(g.py||'').toLowerCase().indexOf(kw)>=0;})};
    }).filter(function(s){return s.items.length>0;});
  }
  gl.innerHTML=systems.map((s,i)=>`
    <div class="cat-card" style="margin-bottom:8px">
      <div class="cat-header" style="cursor:pointer" onclick="toggleGuideGroup(this)" data-group="${i}" data-expanded="false">
        <span class="cat-name">${s.icon} ${s.system}</span>
        <span style="font-size:12px;color:var(--text-light)">${s.items.length} 篇 <span class="guide-arrow" style="display:inline-block;transition:transform .2s">▶</span></span>
      </div>
      <div class="guide-items" id="guide-group-${i}" style="display:none;flex-wrap:wrap;gap:6px">${s.items.map(g=>`<span class="guide-item" data-gid="${g.id}" style="display:inline-block;padding:4px 10px;font-size:12px;background:var(--bg);border:1px solid var(--border);border-radius:6px;cursor:pointer;white-space:nowrap">${g.title} <span style="color:var(--text-light)">${g.year||''}</span></span>`).join('')}</div>
    </div>
  `).join('');
  if(systems.length===0&&kw) gl.innerHTML='<div style="text-align:center;padding:40px;color:var(--text-light)">未找到匹配的指南或法规</div>';
  gl.querySelectorAll('.guide-item').forEach(item=>{ item.onclick=()=>openGuide(item.dataset.gid); });
}

function toggleGuideGroup(header) {
  const gid=header.dataset.group;
  const items=gid!==undefined?document.getElementById('guide-group-'+gid):header.nextElementSibling;
  const arrow=header.querySelector('.guide-arrow');
  const expanded=header.dataset.expanded==='true';
  if(expanded){ items.style.display='none'; arrow.style.transform='rotate(-90deg)'; arrow.textContent='▶'; header.dataset.expanded='false'; }
  else { items.style.display='block'; arrow.style.transform='rotate(0deg)'; arrow.textContent='▼'; header.dataset.expanded='true'; }
}

function openGuide(gid) {
  const g = allGuides().find(x => x.id === gid) || LAWS.find(x => x.id === gid);
  if (!g) return;
  pushScreen('label');
  addRecent(gid,'guide');
  document.getElementById('label-content').innerHTML=`
    <div class="section-title" style="font-size:20px">${g.title}</div>
    <div style="font-size:12px;color:var(--text-light);display:flex;gap:6px"><span class="badge badge-blue">${g.system||'法律法规'}</span><span>${g.year||''}</span></div>
    <div class="label-doc"><p style="font-size:14px;line-height:1.9;color:var(--text-body);white-space:pre-wrap">${hlText(g.content||'')}</p></div>
  `;
  var md=extractMentionedDrugs(g.content||'');
  if(md.length>0){
    var titleEl=document.createElement('div');
    titleEl.className='section-title';
    titleEl.style.marginTop='8px';
    titleEl.textContent='💊 指南提及药品';
    document.getElementById('label-content').appendChild(titleEl);
    md.forEach(function(d){
      var card=document.createElement('div');
      card.className='list-card';
      card.style.cursor='pointer';
      card.innerHTML='<div class="icon-box">💊</div><div class="info"><div class="name">'+d.name+'</div><div class="desc">'+d.category+'</div></div>';
      card.onclick=function(){ pushScreen('detail'); renderDetail(d.id); };
      document.getElementById('label-content').appendChild(card);
    });
  }
  showEditBtn({type:'guide',id:gid}); addRecent(gid,'guide');
  var fnBtn=document.createElement('button');
  fnBtn.className='btn btn-outline btn-sm';
  fnBtn.style.cssText='font-size:13px;padding:6px 16px;margin-top:12px';
  fnBtn.textContent='📄 查看全文';
  fnBtn.onclick=function(){ viewGuideFull(gid); };
  document.getElementById('label-content').appendChild(fnBtn);
}

// ═══ 药品详情 ───
function tagBadge(tag){
  const map={高危:'<span class="tag-high-risk">高危</span>',精二:'<span class="tag-psych">精二</span>',毒:'<span class="tag-toxic">毒</span>',麻:'<span class="tag-narc">麻</span>'};
  return tag?map[tag]||'':'';
}

function hlText(t){
  if(!window._lastQuery) return t;
  var re=new RegExp('('+window._lastQuery.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi');
  return t.replace(re,'<mark style="background:#FEF08A;padding:1px 2px;border-radius:2px">$1</mark>');
}

function renderDetail(drugId) {
  const d=findDrug(drugId); if(!d) return;
  addRecent(drugId);
  const fav=isFav(drugId);
  const notes=getNotes();
  const note=notes[drugId]||'';
  const dc=document.getElementById('detail-content');
  dc.innerHTML=`
    <div class="detail-hero">
      <div class="detail-name">${d.name}</div>
      <div class="detail-badges"><span class="badge badge-green">${d.category}</span><span class="badge badge-blue">${d.type}</span>${tagBadge(d.tag)}</div>
      <div class="detail-actions">
        <button class="btn btn-outline" id="detail-fav"><span style="color:${fav?'var(--danger)':'var(--primary)'}">${fav?'❤️':'🤍'}</span> ${fav?'已收藏':'收藏'}</button>
        <button class="btn btn-outline" id="detail-cmp">⚖️ 加入对比</button>
        <button class="btn btn-primary" id="detail-label">📄 说明书</button>
      </div>
    </div>
    <div class="info-card"><div class="info-label">适应症</div><div class="info-value">${d.indications}</div></div>
    <div class="info-card"><div class="info-label danger">禁忌症</div><div class="info-value">${d.contraindications}</div></div>
    <div class="info-card"><div class="info-label">不良反应</div><div class="info-value">${d.adverse}</div></div>
    <div class="info-card"><div class="info-label">用法用量</div><div class="info-value">${d.dosage}</div></div>
    <div class="info-card"><div class="info-label">储存条件</div><div class="info-value">${d.storage}</div></div>
    <div class="info-card"><div class="info-label">药物相互作用</div><div class="info-value">${d.interactions}</div></div>
    <div class="note-card">
      <div class="note-header"><span class="note-title">📝 个人备注</span><span class="note-edit" id="edit-note">编辑</span></div>
      <div class="note-content" id="note-content-${drugId}">${note||'暂无备注，点击编辑添加…'}</div>
    </div>
  `;
  document.getElementById('detail-fav').onclick=()=>{ toggleFav(drugId); renderDetail(drugId); };
  document.getElementById('detail-cmp').onclick=()=>{ addToCompare(drugId); };
  document.getElementById('detail-label').onclick=()=>{ pushScreen('label'); renderLabel(drugId); };
  showEditBtn({type:'drug',id:drugId});
  document.getElementById('edit-note').onclick=()=>{ showModal('编辑备注',`<textarea id="note-textarea" style="width:100%;min-height:120px;border-radius:10px;border:1px solid var(--border);padding:12px;font:inherit;font-size:14px;resize:vertical">${note}</textarea>`,[{label:'取消'},{label:'保存',primary:true,onClick:()=>{ const t=document.getElementById('note-textarea').value; saveNote(drugId,t); renderDetail(drugId); }}]); };
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

// ═══ 收藏 ───
function renderFavorites() {
  const fl=document.getElementById('fav-list');
  const fe=document.getElementById('fav-empty');
  const fv=getFavs();
  if(fv.length===0){ fl.innerHTML=''; fe.style.display='block'; return; }
  fe.style.display='none';
  const kw=(document.getElementById('fav-search').value||'').toLowerCase();
  let items=fv.map(id=>{ const d=findDrug(id); return d?{id,type:'drug',name:d.name,cat:d.category}:null; }).filter(Boolean).reverse();
  items=items.concat(allGuides().filter(g=>fv.includes(g.id)).map(g=>({id:g.id,type:'guide',name:g.title,cat:g.system})));
  if(kw) items=items.filter(i=>i.name.toLowerCase().includes(kw)||i.cat.includes(kw));
  fl.innerHTML=items.map(i=>`<div class="list-card" data-id="${i.id}" data-type="${i.type}"><div class="icon-box">${i.type==='drug'?'💊':'📋'}</div><div class="info"><div class="name">${i.name}</div><div class="desc">${i.cat}</div></div></div>`).join('');
  fl.querySelectorAll('.list-card').forEach(c=>{ c.onclick=()=>{ if(c.dataset.type==='drug'){ addRecent(c.dataset.id); addRecent(c.dataset.id,'drug'); } }; });
  document.getElementById('fav-search').oninput=renderFavorites;
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
    : `<div class="basket-header"><span class="basket-title">对比篮 (${compareList.length}/5)</span><button class="btn btn-sm btn-outline" onclick="compareList=[];renderCompare()">清空</button></div><div class="chips">${compareList.map(id=>{ const d=findDrug(id); return d?`<span class="chip" style="cursor:pointer" onclick="event.stopPropagation();pushScreen("detail");renderDetail("${id}')">${d.name}<span class="close" onclick="event.stopPropagation();event.preventDefault();removeFromCompare('${id}')">✕</span></span>`:''; }).join('')}</div>`;

  if(compareList.length<2){ ct.innerHTML=''; return; }
  const drugs=compareList.map(id=>findDrug(id)).filter(Boolean);
  if(drugs.length<2){ ct.innerHTML=''; return; }
  ct.innerHTML=`<div class="compare-table">
    <div class="t-row"><div class="t-hdr">分类</div>${drugs.map(d=>`<div class="t-cell">${d.category}</div>`).join('')}</div>
    <div class="t-row"><div class="t-hdr">适应症</div>${drugs.map(d=>`<div class="t-cell" onclick="pushScreen("detail");renderDetail("${d.id}')" style="cursor:pointer">${d.indications}</div>`).join('')}</div>
    <div class="t-row"><div class="t-hdr">禁忌</div>${drugs.map(d=>`<div class="t-cell" style="color:var(--danger)">${d.contraindications}</div>`).join('')}</div>
    <div class="t-row"><div class="t-hdr">不良反应</div>${drugs.map(d=>`<div class="t-cell">${d.adverse?.slice(0,40)||'—'}…</div>`).join('')}</div>
    <div class="t-row"><div class="t-hdr">用法用量</div>${drugs.map(d=>`<div class="t-cell">${d.dosage}</div>`).join('')}</div>
    <div class="t-row"><div class="t-hdr">储存条件</div>${drugs.map(d=>`<div class="t-cell">${d.storage}</div>`).join('')}</div>
    <div class="t-row"><div class="t-hdr">相互作用</div>${drugs.map(d=>`<div class="t-cell">${d.interactions?.slice(0,40)||'—'}…</div>`).join('')}</div>
  </div>
  <div class="review-tip"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#0369A1" stroke-width="2"/><path d="M12 16V12" stroke="#0369A1" stroke-width="2"/><circle cx="12" cy="8" r="1" fill="#0369A1"/></svg>审方提示：${drugs.length}种药品对比，请仔细核对各药适应症及潜在相互作用，注意过敏史重叠风险。具体用药请遵医嘱。</div>`;
}
function initCompare() {
  document.getElementById('cmp-search').oninput=function(){
    const kw=this.value.toLowerCase();
    const res=document.getElementById('cmp-search-results');
    if(kw.length<1){ res.style.display='none'; return; }
    const matches=allDrugs().filter(d=>d.name.toLowerCase().includes(kw)||d.category.includes(kw)).slice(0,5);
    res.style.display='block';
    res.innerHTML=matches.map(d=>`<div class="result-item" data-id="${d.id}">${d.name} <span class="badge badge-green" style="margin-left:auto">${d.category}</span></div>`).join('');
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
    var me=[];
    try{dr=allDrugs().filter(function(d){return matchAny(d.name)||matchAny(d.indications)||matchAny(d.category)||matchAny(d.subcategory)||matchAny(d.py||'');});}catch(e){}
    try{gd=allGuides().filter(function(g){return matchAny(g.title)||matchAny(g.system)||matchAny(g.content)||matchAny(g.py||'');});}catch(e){}
    try{dis=DISEASES.filter(function(d){return matchAny(d.name)||matchAny(d.desc)||matchAny(d.cat);});}catch(e){}
    try{lw=LAWS.filter(function(l){return matchAny(l.title)||matchAny(l.content);});}catch(e){}
    try{rd=HEALTH_EDU.filter(function(h){return matchAny(h.title)||matchAny(h.content)||matchAny(h.cat)||matchAny(h.py||'');});}catch(e){}
    try{me=MED_EDU.filter(function(m){return matchAny(m.drug)||matchAny(m.detail)||matchAny(m.cat)||matchAny(m.key)||matchAny(m.py||'');});}catch(e){}
    try{inf=INFUSION_DATA.filter(function(i){return matchAny(i.drug)||matchAny(i.note)||matchAny(i.cat)||matchAny(i.interact||'')||matchAny(i.vehicle||'')||matchAny(i.py||'');});}catch(e){}
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
  const roleMap={admin:'管理员',editor:'内容编辑',user:'普通用户'};
  document.getElementById('profile-role').textContent=roleMap[currentUser.role]||'普通用户';
  document.getElementById('menu-edit-content').style.display=isEditor()?'flex':'none';
  // 用户管理仅admin可见
  var um=document.getElementById('menu-user-mgmt');
  if(um) um.style.display=(currentUser.username==='walkman0097')?'flex':'none';
}
// ═══ 版本更新 ───
var APP_VERSION='1.0.0';
var CHANGELOG_KEY='changelog_custom';
var DEFAULT_CHANGELOG=[
  '2026-06-11  保护管理员角色不可降级，所有页面增加返回顶部按钮',
  '2026-06-10  新增计算工具、输液配伍模块，药品库扩充至84种',
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
        toast('更新日志已保存');
        showChangelog();
      }}]
    );
  };
}
function initProfileMenus() {
  document.getElementById('edit-nickname-btn').onclick=()=>{ showModal('修改昵称','<input id="new-nickname" placeholder="输入新昵称" value="'+currentUser.nickname+'">',[{label:'取消'},{label:'保存',primary:true,onClick:()=>{ const n=document.getElementById('new-nickname').value.trim(); if(n) updateNickname(n); }}]); };
  document.getElementById('menu-change-pw').onclick=()=>{ showModal('修改密码','<div style="position:relative"><input id="old-pw" type="password" placeholder="原密码" style="padding-right:36px"><span style="position:absolute;right:10px;top:50%;transform:translateY(-50%);cursor:pointer;font-size:16px;user-select:none" id="toggle-pw">👁️</span></div><div style="position:relative;margin-top:8px"><input id="new-pw" type="password" placeholder="新密码" style="padding-right:36px"><span style="position:absolute;right:10px;top:50%;transform:translateY(-50%);cursor:pointer;font-size:16px;user-select:none" id="toggle-pw2">👁️</span></div>',[{label:'取消'},{label:'确认修改',primary:true,onClick:()=>{ const o=document.getElementById('old-pw').value; const n=document.getElementById('new-pw').value; if(!n||n.length<4){ toast('密码至少4位'); return; } const r=changePassword(o,n); if(!r.ok) toast(r.msg); else toast('密码已修改，下次登录生效'); }}]);
  // 绑定小眼睛切换
  setTimeout(function(){
    var t1=document.getElementById('toggle-pw'); var t2=document.getElementById('toggle-pw2');
    if(t1) t1.onclick=function(){ var el=document.getElementById('old-pw'); var show=el.type==='password'; el.type=show?'text':'password'; t1.textContent=show?'🙈':'👁️'; };
    if(t2) t2.onclick=function(){ var el=document.getElementById('new-pw'); var show=el.type==='password'; el.type=show?'text':'password'; t2.textContent=show?'🙈':'👁️'; };
  },100); };
  document.getElementById('menu-disclaimer').onclick=()=>{ showModal('免责声明','<div style="font-size:13px;line-height:1.8;color:var(--text-body)"><p>本应用提供的药学知识内容仅供参考和学习交流之用，<span style="color:var(--danger)">不构成医疗建议、诊断或处方依据。</span></p><p style="margin-top:8px">具体用药方案请以药品说明书和临床指南为准，并遵循执业医师或药师的指导。</p><p style="margin-top:8px"><span style="color:var(--danger)">内容仅供药学专业人员学习参考，不替代专业诊断或治疗方案。</span>因参考本资料而产生的任何直接或间接后果，<span style="color:var(--danger)">作者概不负责</span>。</p><p style="margin-top:8px;color:var(--text-light)">© 2026 药学知识指南</p></div>',[{label:'我知道了',primary:true}]); };
  document.getElementById('menu-logout').onclick=()=>{ logout(); location.reload(); };
  // 使用帮助
  document.getElementById('menu-guide').onclick=()=>{ pushScreen('label'); var guide=isEditor()?ADMIN_GUIDE:USER_GUIDE; document.getElementById('label-content').innerHTML='<div class="section-title" style="font-size:22px">📖 使用帮助</div><div class="label-doc" style="white-space:pre-wrap;font-size:14px;line-height:1.9;color:var(--text-body)">'+guide+'</div>'; };
  // 用户管理（仅admin）
  document.getElementById('menu-user-mgmt').onclick=()=>{ pushScreen('label'); renderUserListInLabel(); };
  // 编辑记录菜单（函数在 admin.js 中定义）
  var elog=document.getElementById('menu-edit-log');
  if(elog) elog.onclick=()=>{ showEditLogs(); };
  // 更新日志
  var clBtn=document.getElementById('menu-changelog');
  if(clBtn) clBtn.addEventListener('click',showChangelog);
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
  ml.innerHTML=entries.map(([id,text])=>{ const d=findDrug(id); return d?`<div class="list-card" data-drug="${id}"><div class="icon-box">💊</div><div class="info"><div class="name">${d.name}</div><div class="desc">${text.slice(0,40)}…</div></div></div>`:''; }).join('');
  ml.querySelectorAll('.list-card').forEach(c=>{ c.onclick=()=>{ addRecent(c.dataset.drug,'drug'); pushScreen('detail'); renderDetail(c.dataset.drug); }; });
}

// ═══ 科普教育 ─══
function renderHealthEdu() {
  const kw=(document.getElementById('he-search')?.value||'').toLowerCase();
  const hl=document.getElementById('he-list');
  const cats=[...new Set(HEALTH_EDU.map(h=>h.cat))];
  let data=HEALTH_EDU;
  if(kw) data=data.filter(h=>h.title.toLowerCase().includes(kw)||h.content.toLowerCase().includes(kw)||h.cat.toLowerCase().includes(kw)||(h.py||'').toLowerCase().includes(kw));
  hl.innerHTML=cats.map(cat=>{
    const items=data.filter(h=>h.cat===cat);
    if(items.length===0) return '';
    return `<div class="cat-card" style="margin-bottom:8px">
      <div class="cat-header" style="cursor:pointer" onclick="toggleGuideGroup(this)" data-expanded="true"><span class="cat-name">${cat}</span><span style="font-size:12px;color:var(--text-light)">${items.length} 篇 <span class="guide-arrow">▼</span></span></div>
      <div class="guide-items">${items.map(h=>`<div class="guide-item" data-hid="${h.id}" style="display:flex;gap:6px;align-items:center;padding:8px 4px;cursor:pointer;border-bottom:1px solid var(--border);font-size:13px"><span style="width:6px;height:6px;background:#D97706;border-radius:3px;flex-shrink:0"></span><span style="color:var(--text-body);flex:1">${h.title}</span></div>`).join('')}</div>
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
    <div style="font-size:12px;color:var(--text-light)">${h.cat}</div>
    <div class="label-doc"><p style="font-size:14px;line-height:1.9;color:var(--text-body);white-space:pre-wrap">${hlText(h.content||'')}</p></div>
  `;
  showEditBtn({type:'edu',id:hid});
}

// ═══ 输液配伍 ─══
function renderInfusion() {
  const kw=(document.getElementById('inf-search')?.value||'').toLowerCase();
  const il=document.getElementById('inf-list');
  const cats=[...new Set(INFUSION_DATA.map(i=>i.cat))];
  let data=INFUSION_DATA;
  if(kw) data=data.filter(i=>i.drug.toLowerCase().includes(kw)||i.note.toLowerCase().includes(kw)||i.cat.includes(kw)||(i.interact||'').includes(kw));
  il.innerHTML=cats.map(cat=>{
    const items=data.filter(i=>i.cat===cat);
    if(items.length===0) return '';
    return `<div class="cat-card" style="margin-bottom:8px">
      <div class="cat-header" style="cursor:pointer" onclick="toggleGuideGroup(this)" data-expanded="true"><span class="cat-name">${cat}</span><span style="font-size:12px;color:var(--text-light)">${items.length} 条 <span class="guide-arrow">▼</span></span></div>
      <div class="guide-items">${items.map(i=>`<div class="guide-item" data-iid="${i.id}" style="display:flex;gap:6px;align-items:center;padding:8px 4px;cursor:pointer;border-bottom:1px solid var(--border);font-size:13px"><span style="width:6px;height:6px;background:#7C3AED;border-radius:3px;flex-shrink:0"></span><span style="color:var(--text-body);flex:1;font-weight:600">${i.drug}</span><span style="font-size:11px;color:var(--text-light)">${i.vehicle||''}</span></div>`).join('')}</div>
    </div>`;
  }).join('');
  il.querySelectorAll('.guide-item').forEach(item=>{ item.onclick=()=>openInfusion(item.dataset.iid); });
  document.getElementById('inf-search').oninput=renderInfusion;
}

function openInfusion(iid) {
  const i=INFUSION_DATA.find(x=>x.id===iid); if(!i) return;
  pushScreen('label');
  document.getElementById('label-content').innerHTML=`
    <div class="section-title" style="font-size:22px">${i.drug}</div>
    <div style="font-size:13px;color:var(--text-light);margin-bottom:12px"><span class="badge badge-blue">${i.cat}</span></div>
    <div class="info-card"><div class="info-label">输液载体</div><div class="info-value">${i.vehicle||'—'}</div></div>
    <div class="info-card"><div class="info-label">浓度</div><div class="info-value">${i.conc||'—'}</div></div>
    <div class="info-card"><div class="info-label">输注速度</div><div class="info-value">${i.speed||'—'}</div></div>
    ${i.interact?`<div class="info-card"><div class="info-label danger">配伍禁忌</div><div class="info-value">${hlText(i.interact)}</div></div>`:''}
    ${i.detail?`<div class="info-card"><div class="info-label danger">细节</div><div class="info-value">${hlText(i.detail)}</div></div>`:''}
    <div class="info-card"><div class="info-label">注意事项</div><div class="info-value" style="white-space:pre-wrap">${hlText(i.note||'')}</div></div>
  `;
}

function showDiseaseList(catName) {
  const dr=allDrugs().filter(d=>d.indications.toLowerCase().includes(catName.toLowerCase())||d.category.toLowerCase().includes(catName.toLowerCase()));
  const ds=DISEASES.filter(d=>d.cat===catName);
  pushScreen('search');
  document.getElementById('search-results-input').value=catName;
  const sr=document.getElementById('search-results');
  let html='';
  if(ds.length>0) html+=`<div class="result-group"><div class="result-group-title diseases">🦠 ${catName} (${ds.length})</div>`+ds.map(d=>`<div class="result-item" onclick="openDisease('${d.name}')">${d.name}</div>`).join('')+`</div>`;
  if(dr.length>0) html+=`<div class="result-group"><div class="result-group-title drugs">💊 相关药品 (${dr.length})</div>`+dr.map(d=>`<div class="result-item" onclick="pushScreen("detail");renderDetail("${d.id}')">${d.name}<span class="badge badge-green" style="margin-left:auto">${d.category}</span></div>`).join('')+`</div>`;
  sr.innerHTML=html||'<div style="text-align:center;padding:40px;color:var(--text-light)">暂无数据</div>';
}

function openDisease(name) {
  const d=DISEASES.find(x=>x.name===name);
  const drugs=allDrugs().filter(dr=>dr.indications.toLowerCase().includes(name.slice(0,3).toLowerCase())||dr.category.toLowerCase().includes(name.slice(0,3)));
  const guides=allGuides().filter(g=>g.title.includes(name)||g.content.includes(name));
  if(!d && drugs.length===0 && guides.length===0){ toast('暂无数据'); return; }
  pushScreen('label');
  let html='<div class="section-title" style="font-size:22px">'+name+'</div>';
  if(d) html+=`
    <div style="font-size:12px;color:var(--text-light);margin-bottom:12px"><span class="badge badge-blue">${d.cat}</span></div>
    <div class="info-card"><div class="info-label">定义</div><div class="info-value">${hlText(d.desc)}</div></div>
    <div class="info-card"><div class="info-label">症状</div><div class="info-value">${hlText(d.symptoms)}</div></div>
    <div class="info-card"><div class="info-label">诊断</div><div class="info-value">${hlText(d.diagnosis)}</div></div>
    <div class="info-card"><div class="info-label">治疗原则</div><div class="info-value">${hlText(d.treatment)}</div></div>`;
  if(drugs.length>0) html+=`<div class="section-title" style="margin-top:8px">💊 相关药品 (${drugs.length})</div>`+drugs.slice(0,6).map(dr=>`<div class="list-card" onclick="pushScreen("detail");renderDetail("${dr.id}')"><div class="icon-box">💊</div><div class="info"><div class="name">${dr.name}</div><div class="desc">${dr.category} · ${(dr.indications||'').slice(0,30)}…</div></div></div>`).join('');
  if(guides.length>0) html+=`<div class="section-title" style="margin-top:8px">📋 相关指南</div>`+guides.slice(0,3).map(g=>`<div class="list-card" onclick="openGuide('${g.id}')"><div class="icon-box">📋</div><div class="info"><div class="name">${g.title}</div><div class="desc">${g.system} · ${g.year}</div></div></div>`).join('');
  if(!d && drugs.length===0) html+='<div style="text-align:center;padding:40px;color:var(--text-light)">该疾病暂未收录详细信息</div>';
  document.getElementById('label-content').innerHTML=html;
  addRecent(d?d.id:name,'disease'); showEditBtn({type:'disease',id:d.id});
}

function renderMedEdu(){
  var kw=(document.getElementById('me-search')?.value||'').toLowerCase();
  var hl=document.getElementById('me-list');
  var cats=[...new Set(MED_EDU.map(m=>m.cat))];
  var data=MED_EDU;
  if(kw) data=data.filter(m=>m.drug.toLowerCase().includes(kw)||m.detail.toLowerCase().includes(kw)||m.cat.toLowerCase().includes(kw)||m.key.toLowerCase().includes(kw)||(m.py||'').toLowerCase().includes(kw));
  hl.innerHTML=cats.map(function(cat){
    var items=data.filter(function(m){return m.cat===cat;});
    if(items.length===0) return '';
    return '<div class="cat-card" style="margin-bottom:8px"><div class="cat-header" style="cursor:pointer" onclick="toggleGuideGroup(this)" data-expanded="false"><span class="cat-name">'+cat+'</span><span style="font-size:12px;color:var(--text-light)">'+items.length+' 条 <span class="guide-arrow" style="display:inline-block;transition:transform .2s">▶</span></span></div><div class="guide-items" style="display:none">'+items.map(function(m){return '<div class="guide-item" data-meid="'+m.id+'" style="padding:8px 4px;cursor:pointer;border-bottom:1px solid var(--border);font-size:13px"><div style="font-weight:600;color:var(--primary-dark)">'+m.drug+'</div><div style="color:var(--text-body);font-size:12px;margin-top:2px">'+m.key+'</div></div>';}).join('')+'</div></div>';
  }).join('');
  hl.querySelectorAll('.guide-item').forEach(function(item){item.onclick=function(){openMedEdu(item.dataset.meid);};});
  document.getElementById('me-search').oninput=renderMedEdu;
}

function openMedEdu(mid){
  var m=MED_EDU.find(function(x){return x.id===mid;}); if(!m) return;
  pushScreen('label');
  document.getElementById('label-content').innerHTML='<div class="section-title" style="font-size:22px">'+m.drug+'</div><div style="font-size:12px;color:var(--text-light);margin-bottom:12px"><span class="badge badge-blue">'+m.cat+'</span></div><div class="info-card"><div class="info-label">交代要点</div><div class="info-value" style="font-size:16px;font-weight:600;color:var(--accent)">'+m.key+'</div></div><div class="info-card"><div class="info-label">详细说明</div><div class="info-value" style="white-space:pre-wrap">'+m.detail+'</div></div>';
  showEditBtn({type:'med',id:mid});
}

var _currentEditItem=null;
function showEditBtn(item){ 
  _currentEditItem=item; 
  var btn=document.getElementById('label-edit-btn'); 
  if(item.type==='drug'){
    if(btn&&isEditor()) btn.style.display='inline';
    return;
  }
  if(btn) btn.style.display='none';
  if(!isEditor()) return;
  var el=document.getElementById('label-content');
  if(!el||el.querySelector('.inline-edit-row')) return;
  var row=document.createElement('div');
  row.className='inline-edit-row';
  row.style.cssText='display:flex;justify-content:flex-end;margin-bottom:8px';
  var eb=document.createElement('span');
  eb.style.cssText='font-size:13px;color:var(--accent);cursor:pointer;font-weight:600;border:1px solid var(--accent);border-radius:6px;padding:2px 10px';
  eb.textContent='编辑';
  eb.onclick=editCurrentItem;
  row.appendChild(eb);
  var st=el.querySelector('.section-title');
  if(st) st.after(row);
}
function editCurrentItem(){
  if(!_currentEditItem) return;
  var t=_currentEditItem.type;
  var id=_currentEditItem.id;
  if(t==='drug'){ var d=allDrugs().find(function(x){return x.id===id;}); if(d) showDrugEditor(d, allDrugs().indexOf(d)); }
  else if(t==='guide'){ var g=allGuides().find(function(x){return x.id===id;})||LAWS.find(function(x){return x.id===id;}); if(g) showGuidelineEditor(g, allGuides().indexOf(g)); }
  else if(t==='disease'){ var ds=DISEASES.find(function(x){return x.id===id;}); if(ds) showDiseaseEditor(ds, DISEASES.indexOf(ds)); }
  else if(t==='edu'){ var h=HEALTH_EDU.find(function(x){return x.id===id;}); if(h) showEduEditor(h, HEALTH_EDU.indexOf(h)); }
  else if(t==='inf'){ var inf=INFUSION_DATA.find(function(x){return x.id===id;}); if(inf) showInfEditor(inf, INFUSION_DATA.indexOf(inf)); }
  else if(t==='med'){ var m=MED_EDU.find(function(x){return x.id===id;}); if(m) toast('用药教育请在内容管理中编辑'); }
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
  var roleLabel={admin:'管理员',editor:'编辑',user:'普通用户'};
  var container=document.getElementById('um-list');
  if(!container) return;
  container.innerHTML='';
  if(users.length===0){ container.innerHTML='<div style="text-align:center;padding:40px;color:var(--text-light)">暂无用户</div>'; return; }
  users.forEach(function(u){
    var row=document.createElement('div');
    row.className='list-card';
    row.style.cssText='display:flex;align-items:center;gap:8px';
    row.innerHTML='<div class="icon-box">👤</div><div class="info" style="flex:1"><div class="name">'+escHTML(u.username)+'</div><div class="desc">'+roleLabel[u.role||'user']+' · '+escHTML(u.nickname||'')+'</div></div><button class="btn btn-sm btn-outline" style="margin-right:4px">编辑</button><button class="btn btn-sm" style="color:var(--danger);border-color:var(--danger)">删除</button>';
    row.querySelectorAll('button')[0].onclick=function(){ showUserEditor(u); };
    row.querySelectorAll('button')[1].onclick=function(){
      if(u.username===currentUser.username){ toast('不能删除自己'); return; }
      if(u.username==='walkman0097'){ toast('不能删除管理员账户'); return; }
      showModal('确认删除','<p>确定删除用户 <b>'+escHTML(u.username)+'</b>？</p>',[{label:'取消'},{label:'删除',primary:true,style:'background:var(--danger)',onClick:function(){
        removeUser(u.username);
        addEditLog('用户',u.username,'删除');
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
    '<div style="display:flex;gap:6px"><input id="ed-upass" placeholder="密码" value="'+escHTML(u.password||'')+'" style="flex:1"><button class="btn btn-sm btn-outline" id="ed-genpw" style="white-space:nowrap">🎲 随机</button></div>'+
    '<input id="ed-unick" placeholder="昵称" value="'+escHTML(u.nickname||'')+'">'+
    '<select id="ed-urole" '+(u.username==='walkman0097'?'disabled':'')+'><option value="user" '+((u.role||'user')==='user'?'selected':'')+'>普通用户</option><option value="editor" '+(u.role==='editor'?'selected':'')+'>编辑</option></select>'+
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
        addEditLog('用户',uname,'新增');
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
        addEditLog('用户',u.username,'编辑');
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
  var g=allGuides().find(function(x){return x.id===gid;});
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
  if(savedUser){ var u=findUser(savedUser); if(u){ currentUser=u; setTimeout(initApp,200); } }
})();
