// ═══ 内容管理 ═══

// 编辑日志
function addEditLog(type, name, action) {
  try {
    var logs = JSON.parse(localStorage.getItem('edit_logs') || '[]');
    logs.unshift({
      time: new Date().toLocaleString('zh-CN'),
      user: currentUser ? currentUser.nickname : '未知',
      type: type,
      name: name,
      action: action
    });
    if (logs.length > 200) logs = logs.slice(0, 200);
    localStorage.setItem('edit_logs', JSON.stringify(logs));
  } catch(e) {}
}

function showEditLogs() {
  pushScreen('label');
  var logs = JSON.parse(localStorage.getItem('edit_logs') || '[]');
  // 过滤掉账户操作（只保留内容编辑）
  logs = logs.filter(function(l){ return l.type !== '用户' && l.type !== '账户'; });
  var html = '<div class="section-title" style="font-size:22px">📝 编辑记录</div>';
  if (logs.length === 0) {
    html += '<div style="text-align:center;padding:40px;color:var(--text-light)">暂无编辑记录</div>';
  } else {
    html += '<div style="display:flex;justify-content:flex-end;margin-bottom:8px"><button class="btn btn-sm btn-outline" onclick="clearEditLogs()">清空记录</button></div>';
    logs.forEach(function(l) {
      var color = l.action === '新增' ? 'var(--primary)' : (l.action === '删除' ? 'var(--danger)' : 'var(--accent)');
      html += '<div class="list-card"><div class="icon-box" style="font-size:12px">' + l.action + '</div><div class="info"><div class="name">' + l.name + '</div><div class="desc" style="font-size:11px">' + l.user + ' · ' + l.action + l.type + ' · ' + l.time + '</div></div></div>';
    });
  }
  document.getElementById('label-content').innerHTML = html;
}

function clearEditLogs() {
  showModal('确认清空', '<p style="text-align:center">确认清空所有编辑记录？</p>', [
    {label: '取消'},
    {label: '清空', primary: true, onClick: function() {
      localStorage.removeItem('edit_logs');
      showEditLogs();
      toast('已清空');
    }}
  ]);
}

function initAdmin() {
  if (!isEditor()) { toast('无权限访问'); goBack(); return; }

  document.querySelectorAll('#admin-tabs .segment-item').forEach(t => {
    t.onclick = () => {
      document.querySelectorAll('#admin-tabs .segment-item').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      renderAdminList(t.dataset.tab, document.getElementById('admin-search')?.value||'');
      const labels = { drugs:'+ 新增药品', guidelines:'+ 新增指南', education:'+ 新增科普', infusion:'+ 新增配伍', diseases:'+ 新增疾病', users:'+ 新增用户' };
      document.getElementById('admin-add-btn').textContent = labels[t.dataset.tab] || '+ 新增';
    };
  });

  document.getElementById('admin-add-btn').onclick = () => {
    const t = document.querySelector('#admin-tabs .segment-item.active').dataset.tab;
    if (t === 'drugs') showDrugEditor();
    else if (t === 'guidelines') showGuidelineEditor();
    else if (t === 'education') showEduEditor();
    else if (t === 'infusion') showInfEditor();
    else if (t === 'diseases') showDiseaseEditor();
    else if (t === 'users') showUserEditor();
  };

  // 搜索框实时过滤
  var searchInput = document.getElementById('admin-search');
  if (searchInput) {
    var _searchTimer = null;
    searchInput.oninput = function(){
      clearTimeout(_searchTimer);
      var t2 = document.querySelector('#admin-tabs .segment-item.active');
      var kw = this.value;
      _searchTimer = setTimeout(function(){ renderAdminList(t2?.dataset?.tab||'drugs', kw); }, 200);
    };
  }

  // 权限控制：所有管理员可见推送到仓库；仅walkman0097可见导出导入
  var isSuper = currentUser && currentUser.username === 'walkman0097';
  var syncBtn = document.getElementById('admin-sync-btn');
  var expBtn = document.getElementById('admin-export-btn');
  var impBtn = document.getElementById('admin-import-btn');
  if (syncBtn) syncBtn.style.display = 'inline-flex';
  if (expBtn) expBtn.style.display = isSuper ? 'inline-flex' : 'none';
  if (impBtn) impBtn.style.display = isSuper ? 'inline-flex' : 'none';

  renderAdminList('drugs');
}

function renderAdminList(type, kw) {
  const list = document.getElementById('admin-list');
  kw = (kw||'').toLowerCase().trim();
  var html = '';
  try {
    if (type === 'drugs') {
      var drugs = allDrugs();
      var filtered = drugs.filter(function(d){
        if (!kw) return true;
        return (d.name||'').toLowerCase().indexOf(kw)>=0||(d.category||'').toLowerCase().indexOf(kw)>=0||(d.subcategory||'').toLowerCase().indexOf(kw)>=0||(d.indications||'').toLowerCase().indexOf(kw)>=0||(d.py||'').toLowerCase().indexOf(kw)>=0||genPy(d.name||'').indexOf(kw)>=0||genPy(d.category||'').indexOf(kw)>=0;
      });
      html = filtered.map(function(d) {
        var origIdx = drugs.indexOf(d);
        return '<div class="cat-card" style="margin-bottom:8px"><div class="cat-header"><div style="flex:1;min-width:0"><span class="cat-name">'+esc(d.name)+'</span><span class="badge badge-green" style="margin-left:6px">'+esc(d.category)+'</span></div><div style="display:flex;gap:6px;flex-shrink:0"><button class="btn btn-sm btn-outline" data-edit="'+origIdx+'" data-type="drug">编辑</button><button class="btn btn-sm" style="background:#FEF2F2;color:var(--danger)" data-del="'+origIdx+'" data-type="drug">删除</button></div></div><div style="font-size:12px;color:var(--text-light)">适应症：'+esc((d.indications||'').slice(0,50))+'…</div></div>';
      }).join('');
    } else if (type === 'guidelines') {
      var all = [...allGuides(), ...LAWS];
      var filtered = all.filter(function(g){
        if (!kw) return true;
        return (g.title||'').toLowerCase().indexOf(kw)>=0||(g.system||'').toLowerCase().indexOf(kw)>=0||(g.content||'').toLowerCase().indexOf(kw)>=0||(g.year||'')===kw||(g.py||'').toLowerCase().indexOf(kw)>=0||genPy(g.title||'').indexOf(kw)>=0;
      });
      html = filtered.map(function(g) {
        var origIdx = all.indexOf(g);
        return '<div class="cat-card" style="margin-bottom:8px"><div class="cat-header"><div style="flex:1;min-width:0"><span class="cat-name">'+esc(g.title)+'</span><span class="badge badge-blue" style="margin-left:6px">'+esc(g.system||'法规')+'</span></div><div style="display:flex;gap:6px;flex-shrink:0"><button class="btn btn-sm btn-outline" data-edit="'+origIdx+'" data-type="guide">编辑</button><button class="btn btn-sm" style="background:#FEF2F2;color:var(--danger)" data-del="'+origIdx+'" data-type="guide">删除</button></div></div><div style="font-size:12px;color:var(--text-light)">'+esc(g.year||'')+' · '+esc((g.content||'').slice(0,50))+'…</div></div>';
      }).join('');
    } else if (type === 'education') {
      var filtered = HEALTH_EDU.filter(function(h){
        if (!kw) return true;
        return (h.title||'').toLowerCase().indexOf(kw)>=0||(h.cat||'').toLowerCase().indexOf(kw)>=0||(h.content||'').toLowerCase().indexOf(kw)>=0||(h.py||'').toLowerCase().indexOf(kw)>=0||genPy(h.title||'').indexOf(kw)>=0||genPy(h.cat||'').indexOf(kw)>=0;
      });
      html = filtered.map(function(h) {
        var origIdx = HEALTH_EDU.indexOf(h);
        return '<div class="cat-card" style="margin-bottom:8px"><div class="cat-header"><div style="flex:1;min-width:0"><span class="cat-name">'+esc(h.title)+'</span><span class="badge badge-blue" style="margin-left:6px">'+esc(h.cat)+'</span></div><div style="display:flex;gap:6px;flex-shrink:0"><button class="btn btn-sm btn-outline" data-edit="'+origIdx+'" data-type="edu">编辑</button></div></div><div style="font-size:12px;color:var(--text-light)">'+esc((h.content||'').slice(0,50))+'…</div></div>';
      }).join('');
    } else if (type === 'infusion') {
      var filtered = INFUSION_DATA.filter(function(inf){
        if (!kw) return true;
        return (inf.drug||'').toLowerCase().indexOf(kw)>=0||(inf.cat||'').toLowerCase().indexOf(kw)>=0||(inf.vehicle||'').toLowerCase().indexOf(kw)>=0||(inf.note||'').toLowerCase().indexOf(kw)>=0||(inf.py||'').toLowerCase().indexOf(kw)>=0||genPy(inf.drug||'').indexOf(kw)>=0;
      });
      html = filtered.map(function(inf) {
        var origIdx = INFUSION_DATA.indexOf(inf);
        return '<div class="cat-card" style="margin-bottom:8px"><div class="cat-header"><div style="flex:1;min-width:0"><span class="cat-name">'+esc(inf.drug)+'</span><span class="badge badge-blue" style="margin-left:6px">'+esc(inf.cat)+'</span></div><div style="display:flex;gap:6px;flex-shrink:0"><button class="btn btn-sm btn-outline" data-edit="'+origIdx+'" data-type="inf">编辑</button></div></div><div style="font-size:12px;color:var(--text-light)">载体：'+esc(inf.vehicle||'')+' · 浓度：'+esc(inf.conc||'')+'</div></div>';
      }).join('');
    } else if (type === 'diseases') {
      var filtered = DISEASES.filter(function(ds){
        if (!kw) return true;
        return (ds.name||'').toLowerCase().indexOf(kw)>=0||(ds.cat||'').toLowerCase().indexOf(kw)>=0||(ds.desc||'').toLowerCase().indexOf(kw)>=0;
      });
      html = filtered.map(function(ds) {
        var origIdx = DISEASES.indexOf(ds);
        return '<div class="cat-card" style="margin-bottom:8px"><div class="cat-header"><div style="flex:1;min-width:0"><span class="cat-name">'+esc(ds.name)+'</span><span class="badge badge-blue" style="margin-left:6px">'+esc(ds.cat)+'</span></div><div style="display:flex;gap:6px;flex-shrink:0"><button class="btn btn-sm btn-outline" data-edit="'+origIdx+'" data-type="disease">编辑</button></div></div><div style="font-size:12px;color:var(--text-light)">'+esc((ds.desc||'').slice(0,50))+'…</div></div>';
      }).join('');
    } else if (type === 'users') {
      renderUserList(); return;
    }
  } catch(e) { /* 搜索过滤异常，保持空列表 */ }
  list.innerHTML = html || '<div style="text-align:center;padding:40px;color:var(--text-light)">暂无数据</div>';
  bindAdminEvents(type);
}

function bindAdminEvents(type) {
  document.querySelectorAll('#admin-list [data-edit]').forEach(b => {
    b.onclick = () => {
      var i = parseInt(b.dataset.edit);
      var t = b.dataset.type;
      if (t === 'drug') { showDrugEditor(allDrugs()[i], i); }
      else if (t === 'guide') { var all=[...allGuides(),...LAWS]; showGuidelineEditor(all[i], i); }
      else if (t === 'edu') { showEduEditor(HEALTH_EDU[i], i); }
      else if (t === 'inf') { showInfEditor(INFUSION_DATA[i], i); }
      else if (t === 'disease') { showDiseaseEditor(DISEASES[i], i); }
    };
  });
  document.querySelectorAll('#admin-list [data-del]').forEach(b => {
    b.onclick = () => deleteItem(b.dataset.type, parseInt(b.dataset.del));
  });
}

// ─── 编辑弹窗 ───
function showDrugEditor(drug, index) {
  var isNew = !drug;
  var d = drug || { name:'', category:'', subcategory:'', type:'处方药', indications:'', contraindications:'', adverse:'', dosage:'', storage:'', interactions:'', label:'' };
  showModal(isNew?'新增药品':'编辑药品',
    `<div style="display:flex;flex-direction:column;gap:10px;max-height:60vh;overflow-y:auto">
      <input id="ed-name" value="${esc(d.name)}" placeholder="药品名称 *">
      <input id="ed-cat" value="${esc(d.category)}" placeholder="分类 *">
      <input id="ed-subcat" value="${esc(d.subcategory||'')}" placeholder="子分类">
      <input id="ed-ind" value="${esc(d.indications)}" placeholder="适应症 *">
      <input id="ed-contra" value="${esc(d.contraindications)}" placeholder="禁忌症">
      <input id="ed-adverse" value="${esc(d.adverse)}" placeholder="不良反应">
      <input id="ed-dosage" value="${esc(d.dosage)}" placeholder="用法用量">
      <input id="ed-storage" value="${esc(d.storage)}" placeholder="储存条件">
      <input id="ed-inter" value="${esc(d.interactions||'')}" placeholder="药物相互作用">
    </div>`,
    [{label:'取消'},{label:isNew?'新增':'保存',primary:true,onClick:()=>{
      var nd = { id:isNew? 'custom_'+Date.now(): d.id, name:peg('ed-name'), category:peg('ed-cat'), subcategory:peg('ed-subcat'), type:'处方药', indications:peg('ed-ind'), contraindications:peg('ed-contra'), adverse:peg('ed-adverse'), dosage:peg('ed-dosage'), storage:peg('ed-storage'), interactions:peg('ed-inter'), label:'' };
      if(!nd.name||!nd.category||!nd.indications){toast('名称/分类/适应症为必填');return;}
      var cd=getCust();
      if(isNew){cd.drugs.unshift(nd);}else if(index>=DRUGS.length){cd.drugs[index-DRUGS.length]=nd;}else{cd.drugOverlay=cd.drugOverlay||{};cd.drugOverlay[d.id]=nd;}
      saveCust(cd); renderAdminList('drugs'); addEditLog('药品',nd.name,isNew?'新增':'编辑'); toast(isNew?'新增成功':'保存成功');
    }}]
  );
}

function showGuidelineEditor(guide, index) {
  var all=[...allGuides(),...LAWS];
  var isNew=!guide;
  var g=guide||{title:'',system:'',year:'',content:''};
  showModal(isNew?'新增指南':'编辑指南',
    `<div style="display:flex;flex-direction:column;gap:10px">
      <input id="ed-gtitle" value="${esc(g.title)}" placeholder="标题 *">
      <input id="ed-gsystem" value="${esc(g.system||'')}" placeholder="所属系统 *">
      <input id="ed-gyear" value="${esc(g.year||'')}" placeholder="年份">
      <textarea id="ed-gcontent" style="min-height:120px;border-radius:10px;border:1px solid var(--border);padding:12px;font:inherit;font-size:14px;resize:vertical" placeholder="内容">${esc(g.content||'')}</textarea>
    </div>`,
    [{label:'取消'},{label:isNew?'新增':'保存',primary:true,onClick:()=>{
      var ng={id:g.id||'gl_'+Date.now(),title:peg('ed-gtitle'),system:peg('ed-gsystem'),year:peg('ed-gyear'),content:peg('ed-gcontent')};
      if(!ng.title||!ng.system){toast('标题和系统为必填');return;}
      var cd=getCust();
      if(isNew){cd.guidelines.unshift(ng);}else if(index>=GUIDELINES.length){cd.guidelines[index-GUIDELINES.length]=ng;}else{cd.glOverlay=cd.glOverlay||{};cd.glOverlay[g.id]=ng;}
      saveCust(cd); renderAdminList('guidelines'); addEditLog('指南',ng.title,isNew?'新增':'编辑'); toast(isNew?'新增成功':'保存成功');
    }}]
  );
}

function showEduEditor(item, index) {
  var isNew=!item;
  var h=item||{cat:'',title:'',content:''};
  showModal(isNew?'新增科普':'编辑科普',
    `<div style="display:flex;flex-direction:column;gap:10px">
      <input id="ed-ecat" value="${esc(h.cat)}" placeholder="分类 *">
      <input id="ed-etitle" value="${esc(h.title)}" placeholder="标题 *">
      <textarea id="ed-econtent" style="min-height:120px;border-radius:10px;border:1px solid var(--border);padding:12px;font:inherit;font-size:14px;resize:vertical" placeholder="内容">${esc(h.content||'')}</textarea>
    </div>`,
    [{label:'取消'},{label:isNew?'新增':'保存',primary:true,onClick:()=>{
      var ne={id:h.id||'h_'+Date.now(),cat:peg('ed-ecat'),title:peg('ed-etitle'),content:peg('ed-econtent')};
      if(!ne.title||!ne.cat){toast('分类和标题为必填');return;}
      var cd=getCust();
      cd.education=cd.education||[];
      if(isNew){cd.education.unshift(ne);}else{var idx=cd.education.findIndex(x=>x.id===h.id);if(idx>=0)cd.education[idx]=ne;else{cd.eduOverlay=cd.eduOverlay||{};cd.eduOverlay[h.id]=ne;}}
      saveCust(cd); renderAdminList('education'); addEditLog('科普',ne.title,isNew?'新增':'编辑'); toast(isNew?'新增成功':'保存成功');
    }}]
  );
}

function showInfEditor(item, index) {
  var isNew=!item;
  var inf=item||{cat:'',drug:'',vehicle:'',conc:'',speed:'',note:''};
  showModal(isNew?'新增配伍':'编辑配伍',
    `<div style="display:flex;flex-direction:column;gap:10px">
      <input id="ed-idrug" value="${esc(inf.drug)}" placeholder="药品名 *">
      <input id="ed-icat" value="${esc(inf.cat)}" placeholder="分类">
      <input id="ed-ivehicle" value="${esc(inf.vehicle||'')}" placeholder="输液载体">
      <input id="ed-iconc" value="${esc(inf.conc||'')}" placeholder="浓度">
      <input id="ed-ispeed" value="${esc(inf.speed||'')}" placeholder="输注速度">
      <textarea id="ed-inote" style="min-height:80px;border-radius:10px;border:1px solid var(--border);padding:12px;font:inherit;font-size:14px;resize:vertical" placeholder="注意事项">${esc(inf.note||'')}</textarea>
    </div>`,
    [{label:'取消'},{label:isNew?'新增':'保存',primary:true,onClick:()=>{
      var ni={id:inf.id||'i_'+Date.now(),drug:peg('ed-idrug'),cat:peg('ed-icat'),vehicle:peg('ed-ivehicle'),conc:peg('ed-iconc'),speed:peg('ed-ispeed'),note:peg('ed-inote')};
      if(!ni.drug){toast('药品名为必填');return;}
      var cd=getCust();
      cd.infusion=cd.infusion||[];
      if(isNew){cd.infusion.unshift(ni);}else{var idx=cd.infusion.findIndex(x=>x.id===inf.id);if(idx>=0)cd.infusion[idx]=ni;else{cd.infOverlay=cd.infOverlay||{};cd.infOverlay[inf.id]=ni;}}
      saveCust(cd); renderAdminList('infusion'); addEditLog('配伍',ni.drug,isNew?'新增':'编辑'); toast(isNew?'新增成功':'保存成功');
    }}]
  );
}

function showDiseaseEditor(item, index) {
  var isNew=!item;
  var d=item||{name:'',cat:'',desc:'',symptoms:'',diagnosis:'',treatment:''};
  showModal(isNew?'新增疾病':'编辑疾病',
    `<div style="display:flex;flex-direction:column;gap:10px">
      <input id="ed-dname" value="${esc(d.name)}" placeholder="名称 *">
      <input id="ed-dcat" value="${esc(d.cat)}" placeholder="分类 *">
      <input id="ed-ddesc" value="${esc(d.desc||'')}" placeholder="定义">
      <input id="ed-dsympt" value="${esc(d.symptoms||'')}" placeholder="症状">
      <input id="ed-ddiag" value="${esc(d.diagnosis||'')}" placeholder="诊断">
      <input id="ed-dtreat" value="${esc(d.treatment||'')}" placeholder="治疗">
    </div>`,
    [{label:'取消'},{label:isNew?'新增':'保存',primary:true,onClick:()=>{
      var nd={id:d.id||'ds_'+Date.now(),name:peg('ed-dname'),cat:peg('ed-dcat'),desc:peg('ed-ddesc'),symptoms:peg('ed-dsympt'),diagnosis:peg('ed-ddiag'),treatment:peg('ed-dtreat')};
      if(!nd.name||!nd.cat){toast('名称和分类为必填');return;}
      var cd=getCust();
      cd.diseases=cd.diseases||[];
      if(isNew){cd.diseases.unshift(nd);}else{var idx=cd.diseases.findIndex(x=>x.id===d.id);if(idx>=0)cd.diseases[idx]=nd;else{cd.disOverlay=cd.disOverlay||{};cd.disOverlay[d.id]=nd;}}
      saveCust(cd); renderAdminList('diseases'); addEditLog('疾病',nd.name,isNew?'新增':'编辑'); toast(isNew?'新增成功':'保存成功');
    }}]
  );
}

function deleteItem(type, index) {
  showModal('确认删除','<p style="text-align:center;font-size:14px">此操作不可恢复，确认删除？</p>',[
    {label:'取消'},{label:'删除',primary:true,onClick:()=>{
      var cd=getCust();
      if(type==='drug'){if(index<DRUGS.length){toast('内置药品请在data.js中删除');return;}cd.drugs.splice(index-DRUGS.length,1);}
      else if(type==='guide'){if(index<GUIDELINES.length){toast('内置指南请在data.js中删除');return;}cd.guidelines.splice(index-GUIDELINES.length,1);}
      saveCust(cd); renderAdminList(type==='drug'?'drugs':'guidelines'); toast('已删除');
    }}
  ]);
}

function getCust(){ try{return JSON.parse(localStorage.getItem('custom_data')||'{"drugs":[],"guidelines":[]}');}catch(e){return {drugs:[],guidelines:[]};} }
function saveCust(cd){ localStorage.setItem('custom_data',JSON.stringify(cd)); }
function esc(s){ return (s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function peg(id){ return (document.getElementById(id)?.value||'').trim(); }
function genRandPw(){ var c='abcdefghjkmnpqrstuvwxyz23456789'; var p=''; for(var i=0;i<8;i++) p+=c[Math.floor(Math.random()*c.length)]; return p; }

// ═══ 用户管理 ═══
function renderUserList(){
  var list=document.getElementById('admin-list');
  var users=getUsers();
  list.innerHTML='';
  if(users.length===0){ list.innerHTML='<div style="text-align:center;padding:40px;color:var(--text-light)">暂无用户</div>'; return; }
  var roleLabel={admin:'管理员',editor:'管理员',user:'普通用户'};
  // 获取内置用户名列表
  var builtinUsernames = (typeof USERS !== 'undefined') ? USERS.map(function(u){return u.username;}) : [];
  users.forEach(function(u){
    var isBuiltin = builtinUsernames.indexOf(u.username) !== -1;
    var row=document.createElement('div');
    row.className='list-card';
    row.style.cssText='display:flex;align-items:center;gap:8px';
    row.innerHTML='<div class="icon-box">👤</div><div class="info" style="flex:1"><div class="name">'+u.username+(isBuiltin?'':' <span style="font-size:10px;color:var(--accent)">手机端</span>')+'</div><div class="desc">'+roleLabel[u.role||'user']+' · '+u.nickname+'</div></div>'
      + (isBuiltin ? '' : '<button class="btn btn-sm btn-outline" style="margin-right:2px;font-size:11px">☁️导出</button>')
      + '<button class="btn btn-sm btn-outline" style="margin-right:4px">编辑</button>'
      + '<button class="btn btn-sm" style="color:var(--danger);border-color:var(--danger)">删除</button>';
    var btns = row.querySelectorAll('button');
    var btnIdx = 0;
    if (!isBuiltin) {
      btns[btnIdx].onclick=function(){ syncOneUserToGitHub(u); };
      btnIdx++;
    }
    btns[btnIdx].onclick=function(){ showUserEditor(u); };
    btns[btnIdx+1].onclick=function(){
      if(u.username===currentUser.username){ toast('不能删除自己'); return; }
      if(u.username==='walkman0097'){ toast('不能删除管理员账户'); return; }
      showModal('确认删除','<p>确定删除用户 <b>'+u.username+'</b>？</p>',[{label:'取消'},{label:'删除',primary:true,style:'background:var(--danger)',onClick:function(){
        removeUser(u.username); renderUserList();
        toast('已删除');
      }}]);
    };
    list.appendChild(row);
  });
}

function showUserEditor(user){
  var isNew=!user;
  var u=user||{};
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
  var isAdmin=u.username==='walkman0097';
  var body='<div style="display:flex;flex-direction:column;gap:8px">'+
    '<input id="ed-uname" placeholder="用户名" value="'+esc(u.username||'')+'" '+(isNew?'':'disabled')+'>'+
    '<div style="display:flex;gap:6px"><input id="ed-upass" placeholder="密码" value="'+esc(u.password||'')+'" style="flex:1"><button class="btn btn-sm btn-outline" id="ed-genpw" style="white-space:nowrap">🎲 随机</button></div>'+
    '<input id="ed-unick" placeholder="昵称" value="'+esc(u.nickname||'')+'">';
  if(isAdmin){
    body+='<div style="padding:8px 0;font-size:13px;color:var(--primary);font-weight:600">🔒 管理员 · 拥有全部权限</div>';
  } else {
    body+='<select id="ed-urole"><option value="user" '+((u.role||'user')==='user'?'selected':'')+'>普通用户</option><option value="editor" '+(u.role==='editor'?'selected':'')+'>管理员</option></select>';
  }
  body+='</div>';
  showModal(isNew?'新增用户':'编辑用户', body,
    [{label:'取消'},{label:isNew?'新增并复制':'保存',primary:true,onClick:function(){
      var uname=peg('ed-uname'); var upass=peg('ed-upass'); var unick=peg('ed-unick'); var urole=peg('ed-urole');
      if(!uname||!upass){ toast('用户名和密码不能为空'); return; }
      if(isNew){
        var r=addUser({username:uname,password:upass,nickname:unick||uname,role:urole||'user'});
        if(!r.ok){ toast(r.msg); return; }
        var info='用户名：'+uname+'\n密码：'+upass;
        navigator.clipboard.writeText(info).then(function(){
          toast('已复制账号信息');
        }).catch(function(){});
        showModal('✅ 新增成功',
          '<div style="text-align:center;line-height:2"><b>'+uname+'</b><br>密码：<b>'+upass+'</b></div><div style="font-size:12px;color:var(--text-light);margin-top:6px">已自动复制到剪贴板</div>',
          [{label:'确定',primary:true}]);
      } else {
        var upData={password:upass,nickname:unick||u.nickname};
        if(!isAdmin) upData.role=urole||'user';
        updateUser(u.username, upData);
      }
      renderUserList();
      if(!isNew) toast('保存成功');
    }}]
  );
  setTimeout(function(){
    var btn=document.getElementById('ed-genpw');
    if(btn) btn.onclick=function(){ document.getElementById('ed-upass').value=genRandPw(); };
  },100);
}

(function bindAdminMenu(){
  var m=document.querySelector('#menu-edit-content');
  if(!m){setTimeout(bindAdminMenu,200);return;}
  m.onclick=()=>{pushScreen('admin');initAdmin();};
})();

// ═══ 数据导出 ═══
function exportAllData() {
  try {
    var exportData = {
      exportTime: new Date().toISOString(),
      appVersion: typeof APP_VERSION !== 'undefined' ? APP_VERSION : '1.0.0',
      custom_data: JSON.parse(localStorage.getItem('custom_data') || '{"drugs":[],"guidelines":[],"education":[],"infusion":[],"diseases":[]}'),
      edit_logs: JSON.parse(localStorage.getItem('edit_logs') || '[]'),
      favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
      changelog: JSON.parse(localStorage.getItem('changelog_custom_v3') || '[]'),
      rememberedUser: (function(){
        try { var s=localStorage.getItem('remembered_user'); return s ? JSON.parse(s) : null; } catch(e) { return null; }
      })()
    };
    // 脱敏：不导出密码
    if (exportData.rememberedUser) delete exportData.rememberedUser.password;

    var blob = new Blob([JSON.stringify(exportData, null, 2)], {type: 'application/json'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    var now = new Date();
    var ts = now.getFullYear()+'-'+
      String(now.getMonth()+1).padStart(2,'0')+'-'+
      String(now.getDate()).padStart(2,'0')+'_'+
      String(now.getHours()).padStart(2,'0')+'-'+
      String(now.getMinutes()).padStart(2,'0');
    a.href = url;
    a.download = 'pharmacy-guide-backup_'+ts+'.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast('✅ 数据已导出，请保存到电脑');
  } catch(e) {
    toast('❌ 导出失败：'+e.message);
  }
}

function importAllData() {
  var input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = function() {
    var file = input.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function() {
      try {
        var data = JSON.parse(reader.result);
        var imported = 0;
        if (data.custom_data) {
          localStorage.setItem('custom_data', JSON.stringify(data.custom_data));
          imported++;
        }
        if (data.edit_logs) {
          // 合并编辑日志（新在前）
          var existing = JSON.parse(localStorage.getItem('edit_logs') || '[]');
          var merged = data.edit_logs.concat(existing);
          if (merged.length > 500) merged = merged.slice(0, 500);
          localStorage.setItem('edit_logs', JSON.stringify(merged));
          imported++;
        }
        if (data.favorites) {
          localStorage.setItem('favorites', JSON.stringify(data.favorites));
          imported++;
        }
        if (data.changelog) {
          localStorage.setItem('changelog_custom_v3', JSON.stringify(data.changelog));
          imported++;
        }
        toast('✅ 已导入 ' + imported + ' 项数据，刷新后生效');
      } catch(e) {
        toast('❌ 文件格式错误：' + e.message);
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// ═══ GitHub同步 ═══
const GITHUB_REPO = 'superwalk/pharmacy-guide';
const GITHUB_BRANCH = 'main';
const GITHUB_TOKEN_KEY = 'github_pat_v2';

function syncToGitHub() {
  var token = localStorage.getItem(GITHUB_TOKEN_KEY);
  if (!token) {
    showModal('GitHub 令牌', 
      '<p style="font-size:12px;color:var(--text-light);margin-bottom:8px">需要 GitHub Personal Access Token 才能将数据同步到仓库。</p>'
      +'<p style="font-size:12px;color:var(--text-light);margin-bottom:12px">🔑 前往 <a href="https://github.com/settings/tokens" target="_blank" style="color:var(--primary)">github.com/settings/tokens</a> 创建一个，权限勾选 <b>repo</b>。</p>'
      +'<input id="github-token-input" type="password" placeholder="输入 GitHub Token" style="width:100%">'
      +'<label style="display:flex;align-items:center;gap:6px;margin-top:8px;font-size:12px;color:var(--text-light)"><input type="checkbox" id="save-token-cb" checked> 记住此令牌</label>',
      [{label:'取消'},{label:'确认同步',primary:true,onClick:function(){
        var tk = document.getElementById('github-token-input').value.trim();
        if (!tk) { toast('请输入令牌'); return; }
        if (document.getElementById('save-token-cb').checked) {
          localStorage.setItem(GITHUB_TOKEN_KEY, tk);
        }
        doSyncToGitHub(tk);
      }}]
    );
    return;
  }
  doSyncToGitHub(token);
}

function doSyncToGitHub(token) {
  var data = buildExportData();
  if (!data) return;
  
  var now = new Date();
  var ts = now.getFullYear()+'-'+
    String(now.getMonth()+1).padStart(2,'0')+'-'+
    String(now.getDate()).padStart(2,'0')+'_'+
    String(now.getHours()).padStart(2,'0')+'-'+
    String(now.getMinutes()).padStart(2,'0');
  var filename = 'data/exports/phone-backup_'+ts+'.json';
  var content = btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2))));
  
  toast('⏳ 正在上传到 GitHub…');
  
  // 先检查文件是否存在
  fetch('https://api.github.com/repos/'+GITHUB_REPO+'/contents/'+filename+'?ref='+GITHUB_BRANCH, {
    headers: { 'Authorization': 'Bearer '+token, 'Accept': 'application/vnd.github.v3+json' }
  }).then(function(r){
    return r.json().then(function(body){
      return {status: r.status, sha: body.sha};
    });
  }).then(function(result){
    // 构建请求体
    var body = {
      message: '📱 手机端数据同步 - '+ts,
      content: content,
      branch: GITHUB_BRANCH
    };
    if (result.sha) body.sha = result.sha; // 覆盖已有文件
    
    return fetch('https://api.github.com/repos/'+GITHUB_REPO+'/contents/'+filename, {
      method: 'PUT',
      headers: { 'Authorization': 'Bearer '+token, 'Content-Type': 'application/json', 'Accept': 'application/vnd.github.v3+json' },
      body: JSON.stringify(body)
    });
  }).then(function(r){
    if (r.status === 201 || r.status === 200) {
      toast('✅ 已同步到仓库，电脑端可以开始合并');
    } else {
      return r.json().then(function(e){ throw new Error(e.message || '同步失败'); });
    }
  }).catch(function(e){
    toast('❌ 同步失败：'+e.message);
  });
}

// ═══ 单独导出单个用户到GitHub ═══
function syncOneUserToGitHub(user) {
  var token = localStorage.getItem(GITHUB_TOKEN_KEY);
  if (!token) {
    showModal('GitHub 令牌',
      '<p style="font-size:12px;color:var(--text-light);margin-bottom:8px">需要先设置 GitHub Token 才能同步。</p>'
      +'<input id="github-token-input" type="password" placeholder="输入 GitHub Token" style="width:100%">'
      +'<label style="display:flex;align-items:center;gap:6px;margin-top:8px;font-size:12px;color:var(--text-light)"><input type="checkbox" id="save-token-cb" checked> 记住此令牌</label>',
      [{label:'取消'},{label:'确认同步',primary:true,onClick:function(){
        var tk = document.getElementById('github-token-input').value.trim();
        if (!tk) { toast('请输入令牌'); return; }
        if (document.getElementById('save-token-cb').checked) {
          localStorage.setItem(GITHUB_TOKEN_KEY, tk);
        }
        doSyncOneUser(user, tk);
      }}]
    );
    return;
  }
  doSyncOneUser(user, token);
}

function doSyncOneUser(user, token) {
  // 只导出这一个用户
  var exportData = {
    exportTime: new Date().toISOString(),
    appVersion: typeof APP_VERSION !== 'undefined' ? APP_VERSION : '1.0.0',
    new_users: [{
      username: user.username,
      password: user.password,
      role: user.role || 'user',
      nickname: user.nickname || user.username
    }]
  };
  
  var now = new Date();
  var ts = now.getFullYear()+'-'+
    String(now.getMonth()+1).padStart(2,'0')+'-'+
    String(now.getDate()).padStart(2,'0')+'_'+
    String(now.getHours()).padStart(2,'0')+'-'+
    String(now.getMinutes()).padStart(2,'0');
  var filename = 'data/exports/new-user_'+user.username+'_'+ts+'.json';
  var content = btoa(unescape(encodeURIComponent(JSON.stringify(exportData, null, 2))));
  
  toast('⏳ 正在导出用户 '+user.username+' 到仓库…');
  
  fetch('https://api.github.com/repos/'+GITHUB_REPO+'/contents/'+filename+'?ref='+GITHUB_BRANCH, {
    headers: { 'Authorization': 'Bearer '+token, 'Accept': 'application/vnd.github.v3+json' }
  }).then(function(r){
    return r.json().then(function(body){
      return {status: r.status, sha: body.sha};
    });
  }).then(function(result){
    var body = {
      message: '📱 新增用户：'+user.username+' ('+(user.nickname||user.username)+')',
      content: content,
      branch: GITHUB_BRANCH
    };
    if (result.sha) body.sha = result.sha;
    
    return fetch('https://api.github.com/repos/'+GITHUB_REPO+'/contents/'+filename, {
      method: 'PUT',
      headers: { 'Authorization': 'Bearer '+token, 'Content-Type': 'application/json', 'Accept': 'application/vnd.github.v3+json' },
      body: JSON.stringify(body)
    });
  }).then(function(r){
    if (r.status === 201 || r.status === 200) {
      toast('✅ 用户 '+user.username+' 已导出到仓库，告诉我一声即可合并进源码');
    } else {
      return r.json().then(function(e){ throw new Error(e.message || '同步失败'); });
    }
  }).catch(function(e){
    toast('❌ 同步失败：'+e.message);
  });
}

function buildExportData() {
  try {
    var users = [];
    try {
      var raw = localStorage.getItem('custom_users');
      if (raw) {
        var all = JSON.parse(raw);
        // 只提取不在内置USERS中的用户（手机新增的）
        var builtin = typeof USERS !== 'undefined' ? USERS.map(function(u){return u.username;}) : [];
        users = all.filter(function(u){ return builtin.indexOf(u.username) === -1; });
      }
    } catch(e) {}
    
    var data = {
      exportTime: new Date().toISOString(),
      appVersion: typeof APP_VERSION !== 'undefined' ? APP_VERSION : '1.0.0',
      custom_data: JSON.parse(localStorage.getItem('custom_data') || '{"drugs":[],"guidelines":[],"education":[],"infusion":[],"diseases":[]}'),
      edit_logs: JSON.parse(localStorage.getItem('edit_logs') || '[]'),
      favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
      changelog: JSON.parse(localStorage.getItem('changelog_custom_v3') || '[]')
    };
    if (users.length > 0) data.new_users = users; // 仅手机新增用户
    return data;
  } catch(e) {
    toast('❌ 打包数据失败：'+e.message);
    return null;
  }
}
