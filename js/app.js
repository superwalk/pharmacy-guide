// ═══ 合并自定义数据 ───
function allDrugs() { const c=JSON.parse(localStorage.getItem('custom_data')||'{"drugs":[],"guidelines":[]}'); return [...DRUGS, ...c.drugs]; }
function allGuides() { const c=JSON.parse(localStorage.getItem('custom_data')||'{"drugs":[],"guidelines":[]}'); return [...GUIDELINES, ...c.guidelines]; }
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
function addRecent(id) { let r=getRecent(); r=r.filter(x=>x!==id); r.unshift(id); if(r.length>10)r.pop(); localStorage.setItem(recentKey(),JSON.stringify(r)); }

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
    if(['home','knowledge','guidelines','profile'].includes(s)) el.style.height='calc(100% - var(--nav-height))';
  });
  showScreen('home');
  initSearch();
  initCompare();
  initProfileMenus();
}

// ═══ 时钟 ───
setInterval(()=>{ const t=new Date(); const s=t.getHours().toString().padStart(2,'0')+':'+t.getMinutes().toString().padStart(2,'0'); for(let i=1;i<=10;i++){ const c=document.getElementById('clock'+i); if(c)c.textContent=s; } },30000);

// ═══ 首页 ───
function renderHome() {
  document.getElementById('home-grid').querySelectorAll('.entry-card').forEach(card=>{
    card.onclick=()=>{
      const nav=card.dataset.nav;
      if(nav==='compare'){ pushScreen('compare'); renderCompare(); return; }
      if(nav==='calc'){ pushScreen('calc'); renderCalc(); return; }
      if(card.dataset.tab) { showScreen(nav); document.querySelectorAll('#kb-tabs .segment-item').forEach(t=>t.classList.toggle('active',t.dataset.tab===card.dataset.tab)); renderKnowledge(); }
      else { showScreen(nav); }
    };
  });
  const rl=document.getElementById('recent-list');
  const recent=getRecent();
  if(recent.length===0){ rl.innerHTML='<div style="text-align:center;padding:20px;color:var(--text-light);font-size:13px">暂无浏览记录</div>'; return; }
  rl.innerHTML=recent.map(id=>{
    const d=findDrug(id); if(!d)return '';
    return `<div class="list-card" data-drug="${d.id}"><div class="icon-box">💊</div><div class="info"><div class="name">${d.name}</div><div class="desc">${d.category} · ${d.indications.slice(0,20)}…</div></div></div>`;
  }).join('');
  rl.querySelectorAll('.list-card').forEach(c=>c.onclick=()=>{ addRecent(c.dataset.drug); pushScreen('detail'); renderDetail(c.dataset.drug); });
}

// ═══ 知识库 ───
function renderKnowledge() {
  const activeTab=document.querySelector('#kb-tabs .segment-item.active').dataset.tab;
  document.querySelectorAll('#kb-tabs .segment-item').forEach(t=>{ t.onclick=()=>{ document.querySelectorAll('#kb-tabs .segment-item').forEach(x=>x.classList.remove('active')); t.classList.add('active'); renderKnowledge(); }; });
  const kb=document.getElementById('kb-list');
  const kw=(document.getElementById('kb-search').value||'').toLowerCase();

  if(activeTab==='drug'){
    let cats=DRUG_CATEGORIES;
    if(kw) cats=cats.filter(c=>c.name.includes(kw)||c.subs.some(s=>s.includes(kw)));
    kb.innerHTML=cats.map(c=>`
      <div class="cat-card">
        <div class="cat-header" onclick="showDrugList('cat','${c.id}')"><span class="cat-name">${c.name}</span><span class="cat-arrow">›</span></div>
        <div class="cat-subs">${c.subs.map(s=>`<span class="cat-sub" onclick="event.stopPropagation();showDrugList('sub','${s}')">${s}</span>`).join('')}</div>
      </div>
    `).join('');
    if(kw){
      const dmatches=allDrugs().filter(d=>d.name.toLowerCase().includes(kw));
      if(dmatches.length>0) kb.innerHTML+=`<div class="section-title" style="margin-top:8px">🔍 匹配药品 (${dmatches.length})</div>`+dmatches.map(d=>`<div class="list-card" onclick="pushScreen('detail');renderDetail('${d.id}')"><div class="icon-box">💊</div><div class="info"><div class="name">${d.name}</div><div class="desc">${d.category} · ${d.indications.slice(0,30)}…</div></div></div>`).join('');
    }
  } else {
    let cats= DISEASE_CATEGORIES;
    if(kw) cats=cats.filter(c=>c.name.includes(kw)||c.subs.some(s=>s.includes(kw)));
    kb.innerHTML=cats.map(c=>`
      <div class="cat-card"><div class="cat-header"><span class="cat-name">${c.name}</span><span class="cat-arrow">›</span></div>
      <div class="cat-subs">${c.subs.map(s=>`<span class="cat-sub">${s}</span>`).join('')}</div></div>
    `).join('');
  }

  document.getElementById('kb-search').oninput=renderKnowledge;
  const gs=document.getElementById('guide-search'); if(gs) gs.oninput=renderGuidelines;
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
  sr.innerHTML=`<div class="result-group"><div class="result-group-title drugs">💊 ${label} (${drugs.length})</div>`+drugs.map(d=>`<div class="result-item" onclick="pushScreen('detail');renderDetail('${d.id}')">${d.name}<span class="badge badge-green" style="margin-left:auto">${d.category}</span></div>`).join('')+`</div>`;
}

// ═══ 指南法规 ───
function renderGuidelines() {
  const kw=(document.getElementById('guide-search')?.value||'').toLowerCase();
  const gl=document.getElementById('guide-list');
  let systems=GUIDE_SYSTEMS;
  if(kw){
    systems=GUIDE_SYSTEMS.map(s=>({
      ...s,
      items:s.items.filter(g=>g.title.toLowerCase().includes(kw)||(g.content||'').toLowerCase().includes(kw)||g.system.toLowerCase().includes(kw))
    })).filter(s=>s.items.length>0);
  }
  gl.innerHTML=systems.map((s,i)=>`
    <div class="cat-card" style="margin-bottom:8px">
      <div class="cat-header" style="cursor:pointer" onclick="toggleGuideGroup(this)" data-group="${i}" data-expanded="true">
        <span class="cat-name">${s.icon} ${s.system}</span>
        <span style="font-size:12px;color:var(--text-light)">${s.items.length} 篇 <span class="guide-arrow" style="display:inline-block;transition:transform .2s">▼</span></span>
      </div>
      <div class="guide-items" id="guide-group-${i}">${s.items.map(g=>`<div class="guide-item" data-gid="${g.id}" style="display:flex;gap:6px;align-items:center;padding:8px 4px;cursor:pointer;border-bottom:1px solid var(--border)"><span style="width:6px;height:6px;background:${s.system==='法律法规'?'var(--accent)':'var(--primary)'};border-radius:3px;flex-shrink:0"></span><span style="font-size:13px;color:var(--text-body);flex:1">${g.title}</span><span style="font-size:11px;color:var(--text-light);flex-shrink:0">${g.year||''}</span></div>`).join('')}</div>
    </div>
  `).join('');
  if(systems.length===0&&kw) gl.innerHTML='<div style="text-align:center;padding:40px;color:var(--text-light)">未找到匹配的指南或法规</div>';
  gl.querySelectorAll('.guide-item').forEach(item=>{ item.onclick=()=>openGuide(item.dataset.gid); });
}

function toggleGuideGroup(header) {
  const gid=header.dataset.group;
  const items=document.getElementById('guide-group-'+gid);
  const arrow=header.querySelector('.guide-arrow');
  const expanded=header.dataset.expanded==='true';
  if(expanded){ items.style.display='none'; arrow.style.transform='rotate(-90deg)'; header.dataset.expanded='false'; }
  else { items.style.display='block'; arrow.style.transform='rotate(0deg)'; header.dataset.expanded='true'; }
}

function openGuide(gid) {
  const g = allGuides().find(x => x.id === gid) || LAWS.find(x => x.id === gid);
  if (!g) return;
  pushScreen('label');
  document.getElementById('label-content').innerHTML=`
    <div class="section-title" style="font-size:20px">${g.title}</div>
    <div style="font-size:12px;color:var(--text-light);display:flex;gap:6px"><span class="badge badge-blue">${g.system||'法律法规'}</span><span>${g.year||''}</span></div>
    <div class="label-doc"><p style="font-size:14px;line-height:1.9;color:var(--text-body);white-space:pre-wrap">${g.content||''}</p></div>
  `;
}

// ═══ 药品详情 ───
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
      <div class="detail-badges"><span class="badge badge-green">${d.category}</span><span class="badge badge-blue">${d.type}</span></div>
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
  let items=fv.map(id=>{ const d=findDrug(id); return d?{id,type:'drug',name:d.name,cat:d.category}:null; }).filter(Boolean);
  items=items.concat(allGuides().filter(g=>fv.includes(g.id)).map(g=>({id:g.id,type:'guide',name:g.title,cat:g.system})));
  if(kw) items=items.filter(i=>i.name.toLowerCase().includes(kw)||i.cat.includes(kw));
  fl.innerHTML=items.map(i=>`<div class="list-card" data-id="${i.id}" data-type="${i.type}"><div class="icon-box">${i.type==='drug'?'💊':'📋'}</div><div class="info"><div class="name">${i.name}</div><div class="desc">${i.cat}</div></div></div>`).join('');
  fl.querySelectorAll('.list-card').forEach(c=>{ c.onclick=()=>{ if(c.dataset.type==='drug'){ addRecent(c.dataset.id); pushScreen('detail'); renderDetail(c.dataset.id); } }; });
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
    : `<div class="basket-header"><span class="basket-title">对比篮 (${compareList.length}/5)</span><button class="btn btn-sm btn-outline" onclick="compareList=[];renderCompare()">清空</button></div><div class="chips">${compareList.map(id=>{ const d=findDrug(id); return d?`<span class="chip" style="cursor:pointer" onclick="event.stopPropagation();pushScreen('detail');renderDetail('${id}')">${d.name}<span class="close" onclick="event.stopPropagation();event.preventDefault();removeFromCompare('${id}')">✕</span></span>`:''; }).join('')}</div>`;

  if(compareList.length<2){ ct.innerHTML=''; return; }
  const drugs=compareList.map(id=>findDrug(id)).filter(Boolean);
  if(drugs.length<2){ ct.innerHTML=''; return; }
  ct.innerHTML=`<div class="compare-table">
    <div class="t-row"><div class="t-hdr">分类</div>${drugs.map(d=>`<div class="t-cell">${d.category}</div>`).join('')}</div>
    <div class="t-row"><div class="t-hdr">适应症</div>${drugs.map(d=>`<div class="t-cell" onclick="pushScreen('detail');renderDetail('${d.id}')" style="cursor:pointer">${d.indications}</div>`).join('')}</div>
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
    document.getElementById('search-results-input').value=q;
    pushScreen('search');
    const results=document.getElementById('search-results');
    const dr=allDrugs().filter(d=>d.name.toLowerCase().includes(q)||d.indications.includes(q)||d.category.includes(q));
    const gd=allGuides().filter(g=>g.title.toLowerCase().includes(q)||g.system.includes(q));
    const dis= DISEASE_CATEGORIES.flatMap(c=>c.subs).filter(s=>s.includes(q));
    const lw=LAWS.filter(l=>l.title.toLowerCase().includes(q));
    const total=dr.length+dis.length+gd.length+lw.length;
    document.getElementById('result-count').textContent=total+'个结果';
    results.innerHTML='';
    if(dr.length>0) results.innerHTML+=`<div class="result-group"><div class="result-group-title drugs">💊 药品 (${dr.length})</div>${dr.map(d=>`<div class="result-item" data-drug="${d.id}">${d.name}<span class="badge badge-green" style="margin-left:auto">${d.category}</span></div>`).join('')}</div>`;
    if(dis.length>0) results.innerHTML+=`<div class="result-group"><div class="result-group-title diseases">🦠 疾病 (${dis.length})</div>${dis.map(d=>`<div class="result-item">${d}</div>`).join('')}</div>`;
    if(gd.length>0) results.innerHTML+=`<div class="result-group"><div class="result-group-title guides">📋 指南 (${gd.length})</div>${gd.map(g=>`<div class="result-item">${g.title}</div>`).join('')}</div>`;
    if(lw.length>0) results.innerHTML+=`<div class="result-group"><div class="result-group-title guides">📜 法规 (${lw.length})</div>${lw.map(l=>`<div class="result-item">${l.title}</div>`).join('')}</div>`;
    if(total===0) results.innerHTML='<div style="text-align:center;padding:40px;color:var(--text-light)">未找到相关内容</div>';
    results.querySelectorAll('.result-item[data-drug]').forEach(r=>r.onclick=()=>{ pushScreen('detail'); renderDetail(r.dataset.drug); });
  }
  document.getElementById('home-search-input').addEventListener('keydown',e=>{ if(e.key==='Enter') doSearch(e.target.value.toLowerCase().trim()); });
  document.getElementById('search-results-input').addEventListener('keydown',e=>{ if(e.key==='Enter') doSearch(e.target.value.toLowerCase().trim()); });
}

// ═══ 个人中心 ───
function renderProfile() {
  document.getElementById('profile-nickname').textContent=currentUser.nickname;
  const roleMap={admin:'管理员',editor:'内容编辑',user:'普通用户'};
  document.getElementById('profile-role').textContent=roleMap[currentUser.role]||'普通用户';
  document.getElementById('menu-edit-content').style.display=isEditor()?'flex':'none';
}
function initProfileMenus() {
  document.getElementById('edit-nickname-btn').onclick=()=>{ showModal('修改昵称','<input id="new-nickname" placeholder="输入新昵称" value="'+currentUser.nickname+'">',[{label:'取消'},{label:'保存',primary:true,onClick:()=>{ const n=document.getElementById('new-nickname').value.trim(); if(n) updateNickname(n); }}]); };
  document.getElementById('menu-change-pw').onclick=()=>{ showModal('修改密码','<input id="old-pw" type="password" placeholder="原密码"><input id="new-pw" type="password" placeholder="新密码">',[{label:'取消'},{label:'确认修改',primary:true,onClick:()=>{ const o=document.getElementById('old-pw').value; const n=document.getElementById('new-pw').value; if(!n||n.length<4){ toast('密码至少4位'); return; } const r=changePassword(o,n); if(!r.ok) toast(r.msg); else toast('密码已修改，下次登录生效'); }}]); };
  document.getElementById('menu-disclaimer').onclick=()=>{ showModal('免责声明','<div style="font-size:13px;line-height:1.8;color:var(--text-body)"><p>本应用提供的药学知识内容仅供参考和学习交流之用，<span style="color:var(--danger)">不构成医疗建议、诊断或处方依据。</span></p><p style="margin-top:8px">具体用药方案请以药品说明书和临床指南为准，并遵循执业医师或药师的指导。</p><p style="margin-top:8px">作者不承担因使用本资料所产生任何直接或间接责任的义务。</p><p style="margin-top:8px;color:var(--text-light)">© 2026 药学知识指南</p></div>',[{label:'我知道了',primary:true}]); };
  document.getElementById('menu-logout').onclick=()=>{ logout(); location.reload(); };
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
  ml.querySelectorAll('.list-card').forEach(c=>{ c.onclick=()=>{ pushScreen('detail'); renderDetail(c.dataset.drug); }; });
}

// ═══ 启动：检查已登录 ───
(function(){
  const savedUser=localStorage.getItem('currentUser');
  if(savedUser){ const u=findUser(savedUser); if(u){ currentUser=u; setTimeout(initApp,200); } }
})();
