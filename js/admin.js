// ═══ 内容管理 ═══

// 编辑日志
function addEditLog(type, name, action, itemId) {
  try {
    var logs = JSON.parse(localStorage.getItem('edit_logs') || '[]');
    logs.unshift({
      time: new Date().toLocaleString('zh-CN'),
      user: currentUser ? currentUser.nickname : '未知',
      type: type,
      name: name,
      action: action,
      id: itemId || ''
    });
    if (logs.length > 200) logs = logs.slice(0, 200);
    localStorage.setItem('edit_logs', JSON.stringify(logs));
  } catch(e) {}
}

// ═══ 编辑审核 ═══
// 如果当前用户不是管理员（walkman0097），则存为待审核
function trySyncOrQueue(table, data, typeName, itemName) {
  var isAdmin = currentUser && currentUser.username === 'walkman0097';
  if (isAdmin) {
    // 管理员直接同步
    trySupabaseUpsert(table, data);
  } else {
    // 编辑者→存待审核
    try {
      var pending = JSON.parse(localStorage.getItem('pending_edits') || '[]');
      pending.push({
        id: data.id,
        table: table,
        data: data,
        type: typeName,
        name: itemName,
        editor: currentUser ? currentUser.nickname : '未知',
        time: new Date().toLocaleString('zh-CN'),
        ts: Date.now()
      });
      localStorage.setItem('pending_edits', JSON.stringify(pending));
      toast('已提交审核，管理员通过后即可生效');
    } catch(e) {}
  }
}

function showReviewPanel() {
  pushScreen('label');
  var isAdmin = currentUser && currentUser.username === 'walkman0097';
  var pending = [];
  try { pending = JSON.parse(localStorage.getItem('pending_edits') || '[]'); } catch(e) {}
  var html = '<div class="section-title" style="font-size:22px">📋 编辑审核</div>';
  if (!isAdmin) {
    // 编辑者：只看到自己的待审核
    var myName = currentUser.nickname;
    pending = pending.filter(function(p){ return p.editor === myName; });
    if (pending.length === 0) {
      html += '<div style="text-align:center;padding:30px;color:var(--text-light)">暂无待审核的编辑</div>';
    } else {
      html += '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px">以下是你提交的待审核编辑：</div>';
      pending.forEach(function(p){
        html += '<div class="list-card"><div class="info"><div class="name">'+p.type+'：'+p.name+'</div><div class="desc">提交时间：'+p.time+' · 等待审核</div></div></div>';
      });
    }
  } else {
    // 管理员：看到所有待审核
    if (pending.length === 0) {
      html += '<div style="text-align:center;padding:30px;color:var(--text-light)">暂无待审核的编辑</div>';
    } else {
      html += '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px">以下编辑等待你的审核 (共'+pending.length+'条)：</div>';
      pending.forEach(function(p, idx){
        html += '<div class="list-card" style="display:flex;align-items:center;gap:8px"><div class="icon-box">📝</div><div class="info" style="flex:1"><div class="name">' + p.type + '：' + p.name + '</div><div class="desc">编辑者：' + p.editor + ' · ' + p.time + '</div></div>'
          + '<button class="btn btn-sm" style="background:var(--primary);color:#fff;border:none;font-size:11px" data-approve="'+idx+'">通过</button>'
          + '<button class="btn btn-sm" style="color:var(--danger);border-color:var(--danger);font-size:11px" data-reject="'+idx+'">退回</button>'
          + '<button class="btn btn-sm" style="color:var(--text-light);border-color:var(--text-light);font-size:11px" data-ignore="'+idx+'">忽略</button></div>';
      });
    }
    html += '<button class="btn btn-outline btn-full" id="clear-review-btn" style="margin-top:12px;font-size:12px">🗑️ 清空已处理的待审核</button>';
  }
  document.getElementById('label-content').innerHTML = html;
  // 绑定审核按钮
  if (isAdmin) {
    document.querySelectorAll('[data-approve]').forEach(function(btn){
      btn.onclick = function(){
        var idx = parseInt(btn.dataset.approve);
        var pending = JSON.parse(localStorage.getItem('pending_edits') || '[]');
        var item = pending[idx];
        if (!item) return;
        trySupabaseUpsert(item.table, item.data);
        pending.splice(idx, 1);
        localStorage.setItem('pending_edits', JSON.stringify(pending));
        toast('已通过：' + item.name);
        showReviewPanel();
      };
    });
    document.querySelectorAll('[data-reject]').forEach(function(btn){
      btn.onclick = function(){
        var idx = parseInt(btn.dataset.reject);
        var pending = JSON.parse(localStorage.getItem('pending_edits') || '[]');
        pending.splice(idx, 1);
        localStorage.setItem('pending_edits', JSON.stringify(pending));
        toast('已退回');
        showReviewPanel();
      };
    });
    document.querySelectorAll('[data-ignore]').forEach(function(btn){
      btn.onclick = function(e){ e.stopPropagation();
        var idx = parseInt(btn.dataset.ignore);
        var pending = JSON.parse(localStorage.getItem('pending_edits') || '[]');
        pending.splice(idx, 1);
        localStorage.setItem('pending_edits', JSON.stringify(pending));
        toast('已忽略');
        showReviewPanel();
      };
    });
    var clearBtn = document.getElementById('clear-review-btn');
    if (clearBtn) clearBtn.onclick = function(){
      localStorage.setItem('pending_edits', '[]');
      toast('已清空');
      showReviewPanel();
    };
  }
}

function showEditLogs() {
  pushScreen('label');
  var eb=document.getElementById('label-edit-btn'); if(eb) eb.style.display='none';
  var isAdmin = currentUser && currentUser.username === 'walkman0097';
  var logs = JSON.parse(localStorage.getItem('edit_logs') || '[]');
  // 过滤掉账户操作（只保留内容编辑）
  logs = logs.filter(function(l){ return l.type !== '用户' && l.type !== '账户'; });
  var html = '<div style="margin-bottom:8px"><span class="back-btn" onclick="goBack()" style="display:inline-flex;align-items:center;gap:4px;color:var(--accent);cursor:pointer;font-size:13px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2"/></svg> 返回</span></div>'
  + '<div class="section-title" style="font-size:22px">📝 编辑记录与审核</div>';
  // 管理员可见待审核列表
  if (isAdmin) {
    var pending = [];
    try { pending = JSON.parse(localStorage.getItem('pending_edits') || '[]'); } catch(e) {}
    if (pending.length > 0) {
      html += '<div class="cat-card" style="margin-bottom:8px"><div class="cat-header" style="cursor:pointer;background:linear-gradient(135deg,#FEF3C7,#FDE68A)" onclick="toggleGuideGroup(this)" data-expanded="false"><span class="cat-name">📋 待审核 <span style="font-size:12px;color:var(--danger)">('+pending.length+')</span></span><span class="guide-arrow" style="display:inline-block;transition:transform .2s">▶</span></div><div class="guide-items" style="display:none">';
      pending.forEach(function(p, idx){
        // 生成详情内容
        var detailHtml = '<div style="font-size:13px;line-height:1.8">'
          + '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px">编辑者：' + p.editor + ' · ' + p.time + '</div>'
          + '<div style="margin-bottom:8px"><span class="badge badge-blue">' + p.type + '</span></div>';
        if (p.data) {
          var keys = Object.keys(p.data).filter(function(k){ return k !== 'id' && k !== 'py' && k !== 'is_custom'; });
          keys.forEach(function(k){
            var val = p.data[k];
            if (!val) return;
            var nameMap = { name:'名称', title:'标题', category:'分类', cat:'分类', subcategory:'子分类', type:'类型', indications:'适应症', contraindications:'禁忌症', adverse:'不良反应', dosage:'用法用量', storage:'储存条件', interactions:'相互作用', label:'说明书', content:'内容', source_url:'原文链接', system:'系统', year:'年份', drug:'药品名', key_point:'交代要点', key:'交代要点', detail:'详细说明', description:'描述', symptoms:'症状', diagnosis:'诊断', treatment:'治疗原则', vehicle:'输液载体', conc:'浓度', speed:'输注速度', note:'注意事项', interact:'配伍禁忌' };
            var cn = nameMap[k] || k;
            detailHtml += '<div style="margin:6px 0;border-bottom:1px solid var(--border);padding-bottom:4px"><span style="font-weight:600;color:var(--primary-dark)">' + cn + '：</span><span style="color:var(--text-body);white-space:pre-wrap">' + esc(String(val)) + '</span></div>';
          });
        }
        detailHtml += '</div>';
        html += '<div class="list-card" style="display:flex;align-items:center;gap:8px"><div class="icon-box">📝</div><div class="info" style="flex:1"><div class="name">' + p.type + '：' + p.name + '</div><div class="desc">编辑者：' + p.editor + ' · ' + p.time + '</div></div>'
          + '<button class="btn btn-sm btn-outline" style="font-size:11px" data-review="'+idx+'">👁️</button>'
          + '<button class="btn btn-sm" style="background:var(--primary);color:#fff;border:none;font-size:11px" data-approve="'+idx+'">通过</button>'
          + '<button class="btn btn-sm" style="color:var(--danger);border-color:var(--danger);font-size:11px" data-reject="'+idx+'">退回</button>'
          + '<button class="btn btn-sm" style="color:var(--text-light);border-color:var(--text-light);font-size:11px" data-ignore="'+idx+'">忽略</button></div>';
      });
      html += '<button class="btn btn-outline btn-sm" id="clear-review-btn" style="margin-top:4px;font-size:11px">🗑️ 清空已处理</button></div></div>';
    }
  }
  // 编辑记录列表
  if (logs.length === 0) {
    html += '<div style="text-align:center;padding:40px;color:var(--text-light)">暂无编辑记录</div>';
  } else {
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><span style="font-size:12px;color:var(--text-light)">共 '+logs.length+' 条记录</span><button class="btn btn-sm btn-outline" onclick="clearEditLogs()">清空记录</button></div>';
    logs.forEach(function(l) {
      var color = l.action === '新增' ? 'var(--primary)' : (l.action === '删除' ? 'var(--danger)' : 'var(--accent)');
      var clickAttr = l.id ? ' data-log-id="'+l.id+'" data-log-type="'+l.type+'"' : '';
      html += '<div class="list-card"'+clickAttr+'><div class="icon-box" style="font-size:12px;color:'+color+'">' + l.action + '</div><div class="info"><div class="name">' + l.name + '</div><div class="desc" style="font-size:11px">' + l.user + ' · ' + l.type + ' · ' + l.time + '</div></div></div>';
    });
  }
  document.getElementById('label-content').innerHTML = html;
  // 绑定点击跳转
  document.querySelectorAll('[data-log-id]').forEach(function(el){
    el.onclick = function(){
      var id = el.dataset.logId, type = el.dataset.logType;
      if (type === '药品') { var d = findDrug(id); if(d){ addRecent(id,'drug'); pushScreen('detail'); renderDetail(id); } else toast('内容可能已被删除'); }
      else if (type === '指南') { addRecent(id,'guide'); openGuide(id); }
      else if (type === '疾病') { var ds = DISEASES.find(function(x){return x.id===id;}); if(ds) openDisease(ds.name); else toast('内容可能已被删除'); }
      else if (type === '科普') { openHealthEdu(id); }
      else if (type === '用药教育') { openMedEdu(id); }
      else if (type === '配伍') { openInfusion(id); }
    };
  });
  // 绑定审核按钮
  if (isAdmin) {
    // 查看详情
    document.querySelectorAll('[data-review]').forEach(function(btn){
      btn.onclick = function(e){ e.stopPropagation();
        var idx = parseInt(btn.dataset.review);
        var pending = JSON.parse(localStorage.getItem('pending_edits') || '[]');
        var item = pending[idx];
        if (!item || !item.data) { toast('无详细数据'); return; }
        var h = '<div style="font-size:13px;line-height:1.8">'
          + '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px">编辑者：' + item.editor + ' · ' + item.time + '</div>'
          + '<div style="margin-bottom:8px"><span class="badge badge-blue">' + item.type + '</span></div>';
        var keys = Object.keys(item.data).filter(function(k){ return k !== 'id' && k !== 'py' && k !== 'is_custom'; });
        var nameMap = { name:'名称', title:'标题', category:'分类', cat:'分类', subcategory:'子分类', type:'类型', indications:'适应症', contraindications:'禁忌症', adverse:'不良反应', dosage:'用法用量', storage:'储存条件', interactions:'相互作用', label:'说明书', content:'内容', source_url:'原文链接', system:'系统', year:'年份', drug:'药品名', key_point:'交代要点', key:'交代要点', detail:'详细说明', description:'描述', symptoms:'症状', diagnosis:'诊断', treatment:'治疗原则', vehicle:'输液载体', conc:'浓度', speed:'输注速度', note:'注意事项', interact:'配伍禁忌' };
        keys.forEach(function(k){
          var val = item.data[k];
          if (!val) return;
          var cn = nameMap[k] || k;
          h += '<div style="margin:6px 0;border-bottom:1px solid var(--border);padding-bottom:4px"><span style="font-weight:600;color:var(--primary-dark)">' + cn + '：</span><span style="color:var(--text-body);white-space:pre-wrap">' + esc(String(val)) + '</span></div>';
        });
        h += '</div>';
        showModal('👁️ 审核详情', h, [{label:'关闭',primary:true}]);
      };
    });
    document.querySelectorAll('[data-approve]').forEach(function(btn){
      btn.onclick = function(e){ e.stopPropagation();
        var idx = parseInt(btn.dataset.approve);
        var pending = JSON.parse(localStorage.getItem('pending_edits') || '[]');
        var item = pending[idx];
        if (!item) return;
        trySupabaseUpsert(item.table, item.data);
        pending.splice(idx, 1);
        localStorage.setItem('pending_edits', JSON.stringify(pending));
        toast('已通过：' + item.name);
        showEditLogs();
      };
    });
    document.querySelectorAll('[data-reject]').forEach(function(btn){
      btn.onclick = function(e){ e.stopPropagation();
        var idx = parseInt(btn.dataset.reject);
        var pending = JSON.parse(localStorage.getItem('pending_edits') || '[]');
        pending.splice(idx, 1);
        localStorage.setItem('pending_edits', JSON.stringify(pending));
        toast('已退回');
        showEditLogs();
      };
    });
    document.querySelectorAll('[data-ignore]').forEach(function(btn){
      btn.onclick = function(e){ e.stopPropagation();
        var idx = parseInt(btn.dataset.ignore);
        var pending = JSON.parse(localStorage.getItem('pending_edits') || '[]');
        pending.splice(idx, 1);
        localStorage.setItem('pending_edits', JSON.stringify(pending));
        toast('已忽略');
        showEditLogs();
      };
    });
    var clearBtn = document.getElementById('clear-review-btn');
    if (clearBtn) clearBtn.onclick = function(){
      localStorage.setItem('pending_edits', '[]');
      toast('已清空');
      showEditLogs();
    };
  }
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
      const labels = { drugs:'+ 新增药品', guidelines:'+ 新增指南', mededu_combined:'+ 新增用药科普', infusion:'+ 新增配伍', diseases:'+ 新增疾病', users:'+ 新增用户' };
      document.getElementById('admin-add-btn').textContent = labels[t.dataset.tab] || '+ 新增';
    };
  });

  document.getElementById('admin-add-btn').onclick = () => {
    const t = document.querySelector('#admin-tabs .segment-item.active').dataset.tab;
    if (t === 'drugs') showDrugEditor();
    else if (t === 'guidelines') showGuidelineEditor();
    else if (t === 'mededu_combined_edu') showEduEditor();
    else if (t === 'mededu_combined_med') showMedEduEditor();
    else if (t === 'mededu_combined') showMedEduEditor();
    else if (t === 'infusion') showInfEditor();
    else if (t === 'diseases') showDiseaseEditor();
    else if (t === 'mededu') showMedEduEditor();
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

  var isSuper = currentUser && currentUser.username === 'walkman0097';
  // 用户管理手风琴：仅管理员可见
  var userCard = document.querySelector('#screen-admin .content > div:last-child');
  if (userCard) userCard.style.display = isSuper ? 'block' : 'none';

  renderAdminList('drugs');
  // 渲染用户管理手风琴内容
  var userListEl = document.getElementById('admin-user-list');
  if (userListEl) renderUserList(userListEl);
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
        var isPy = kw && ((d.py||'').toLowerCase().indexOf(kw)>=0||genPy(d.name||'').indexOf(kw)>=0||genPy(d.category||'').indexOf(kw)>=0) && !d.name.toLowerCase().includes(kw);
        var pyTag = isPy ? ' <span class="badge badge-blue" style="font-size:10px">PY</span>' : '';
        return '<div class="cat-card" style="margin-bottom:8px;cursor:pointer" data-view="drug" data-view-id="'+d.id+'"><div class="cat-header"><div style="flex:1;min-width:0"><span class="cat-name">'+highlightKw(esc(d.name), kw)+pyTag+'</span><span class="badge badge-green" style="margin-left:6px">'+highlightKw(esc(d.category), kw)+'</span></div><div style="display:flex;gap:6px;flex-shrink:0"><button class="btn btn-sm btn-outline" data-edit="'+origIdx+'" data-type="drug">编辑</button><button class="btn btn-sm" style="background:#FEF2F2;color:var(--danger)" data-del="'+origIdx+'" data-type="drug">删除</button></div></div><div style="font-size:12px;color:var(--text-light)">适应症：'+highlightKw(esc((d.indications||'').slice(0,50)), kw)+'…</div></div>';
      }).join('');
    } else if (type === 'guidelines') {
      // 指南分类管理
      var sysList = (typeof getGuideSystems==='function'?getGuideSystems():GUIDE_SYSTEMS).filter(function(s){return s.system!=='法律法规'&&s.system!=='其他';});
      html = '<div class="section-title" style="font-size:13px;margin-bottom:6px">📂 指南分类 <button class="btn btn-sm btn-outline" style="margin-left:6px;font-size:11px" onclick="addGuideCategory()">+ 新增分类</button></div>'
        + '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:12px">'
        + sysList.map(function(s){ var cnt=s.items.length; var isDel=cnt===0&&s.system!=='法律法规'; return '<span style="display:inline-flex;align-items:center;gap:3px;padding:2px 8px;font-size:12px;background:var(--bg);border-radius:12px;border:1px solid var(--border)">'+esc(s.system)+' <span style="color:var(--text-light);font-size:10px">'+cnt+'</span>'+(isDel?'<span style="cursor:pointer;color:var(--danger);margin-left:2px" onclick="deleteGuideCategory(\''+s.system+'\',this)">✕</span>':'')+'</span>'; }).join('')
        + '</div><div style="height:1px;background:var(--border);margin-bottom:10px"></div>';
      var all = [...allGuides(), ...LAWS];
      var filtered = all.filter(function(g){
        if (!kw) return true;
        return (g.title||'').toLowerCase().indexOf(kw)>=0||(g.system||'').toLowerCase().indexOf(kw)>=0||(g.content||'').toLowerCase().indexOf(kw)>=0||(g.year||'')===kw||(g.py||'').toLowerCase().indexOf(kw)>=0||genPy(g.title||'').indexOf(kw)>=0;
      });
      html = filtered.map(function(g) {
        var origIdx = all.indexOf(g);
        var isPy = kw && ((g.py||'').toLowerCase().indexOf(kw)>=0||genPy(g.title||'').indexOf(kw)>=0||genPy(g.system||'').indexOf(kw)>=0) && !g.title.toLowerCase().includes(kw);
        var pyTag = isPy ? ' <span class="badge badge-blue" style="font-size:10px">PY</span>' : '';
        return '<div class="cat-card" style="margin-bottom:8px;cursor:pointer" data-view="guide" data-view-id="'+g.id+'"><div class="cat-header"><div style="flex:1;min-width:0"><span class="cat-name">'+highlightKw(esc(g.title), kw)+pyTag+'</span><span class="badge badge-blue" style="margin-left:6px">'+highlightKw(esc(g.system||'法规'), kw)+'</span></div><div style="display:flex;gap:6px;flex-shrink:0"><button class="btn btn-sm btn-outline" data-edit="'+origIdx+'" data-type="guide">编辑</button><button class="btn btn-sm" style="background:#FEF2F2;color:var(--danger)" data-del="'+origIdx+'" data-type="guide">删除</button></div></div><div style="font-size:12px;color:var(--text-light)">'+esc(g.year||'')+' · '+esc((g.content||'').slice(0,50))+'…</div></div>';
      }).join('');
    } else if (type === 'education') {
      var filtered = HEALTH_EDU.filter(function(h){
        if (!kw) return true;
        return (h.title||'').toLowerCase().indexOf(kw)>=0||(h.cat||'').toLowerCase().indexOf(kw)>=0||(h.content||'').toLowerCase().indexOf(kw)>=0||(h.py||'').toLowerCase().indexOf(kw)>=0||genPy(h.title||'').indexOf(kw)>=0||genPy(h.cat||'').indexOf(kw)>=0;
      });
      html = filtered.map(function(h) {
        var origIdx = HEALTH_EDU.indexOf(h);
        var isPy = kw && ((h.py||'').toLowerCase().indexOf(kw)>=0||genPy(h.title||'').indexOf(kw)>=0||genPy(h.cat||'').indexOf(kw)>=0) && !h.title.toLowerCase().includes(kw);
        var pyTag = isPy ? ' <span class="badge badge-blue" style="font-size:10px">PY</span>' : '';
        return '<div class="cat-card" style="margin-bottom:8px;cursor:pointer" data-view="edu" data-view-id="'+h.id+'"><div class="cat-header"><div style="flex:1;min-width:0"><span class="cat-name">'+highlightKw(esc(h.title), kw)+pyTag+'</span><span class="badge badge-blue" style="margin-left:6px">'+highlightKw(esc(h.cat), kw)+'</span></div><div style="display:flex;gap:6px;flex-shrink:0"><button class="btn btn-sm btn-outline" data-edit="'+origIdx+'" data-type="edu">编辑</button></div></div><div style="font-size:12px;color:var(--text-light)">'+esc((h.content||'').slice(0,50))+'…</div></div>';
      }).join('');
    } else if (type === 'mededu_combined') {
      // 合并显示科普+用药教育
      var eduItems = HEALTH_EDU.map(function(h){ return { id:h.id, name:h.title, cat:h.cat + ' · 科普', type:'edu', idx:HEALTH_EDU.indexOf(h) }; });
      var medItems = MED_EDU.map(function(m){ return { id:m.id, name:m.drug, cat:(m.cat||'') + ' · 用药教育', type:'med', idx:MED_EDU.indexOf(m) }; });
      var all = eduItems.concat(medItems);
      if (kw) all = all.filter(function(a){ return a.name.toLowerCase().indexOf(kw)>=0||a.cat.toLowerCase().indexOf(kw)>=0||genPy(a.name).indexOf(kw)>=0; });
      html = all.map(function(a){
        var isPy = kw && genPy(a.name).indexOf(kw)>=0 && !a.name.toLowerCase().includes(kw);
        return '<div class="list-card" style="display:flex;align-items:center;gap:8px"><div class="icon-box">'+(a.type==='edu'?'📖':'🗣️')+'</div><div class="info" style="flex:1"><div class="name">'+esc(a.name)+(isPy?' <span class="badge badge-blue" style="font-size:10px">PY</span>':'')+'</div><div class="desc">'+esc(a.cat)+'</div></div><button class="btn btn-sm btn-outline" style="flex-shrink:0" data-edit="'+a.idx+'" data-type="'+a.type+'">编辑</button><button class="btn btn-sm" style="color:var(--danger);border-color:var(--danger);flex-shrink:0" data-del="'+a.idx+'" data-type="'+a.type+'">删除</button></div>';
      }).join('');
    } else if (type === 'infusion') {
      var filtered = INFUSION_DATA.filter(function(inf){
        if (!kw) return true;
        return (inf.drug||'').toLowerCase().indexOf(kw)>=0||(inf.cat||'').toLowerCase().indexOf(kw)>=0||(inf.vehicle||'').toLowerCase().indexOf(kw)>=0||(inf.note||'').toLowerCase().indexOf(kw)>=0||(inf.py||'').toLowerCase().indexOf(kw)>=0||genPy(inf.drug||'').indexOf(kw)>=0;
      });
      html = filtered.map(function(inf) {
        var origIdx = INFUSION_DATA.indexOf(inf);
        var isPy = kw && ((inf.py||'').toLowerCase().indexOf(kw)>=0||genPy(inf.drug||'').indexOf(kw)>=0||genPy(inf.cat||'').indexOf(kw)>=0) && !inf.drug.toLowerCase().includes(kw);
        var pyTag = isPy ? ' <span class="badge badge-blue" style="font-size:10px">PY</span>' : '';
        return '<div class="cat-card" style="margin-bottom:8px;cursor:pointer" data-view="inf" data-view-id="'+inf.id+'"><div class="cat-header"><div style="flex:1;min-width:0"><span class="cat-name">'+highlightKw(esc(inf.drug), kw)+pyTag+'</span><span class="badge badge-blue" style="margin-left:6px">'+highlightKw(esc(inf.cat), kw)+'</span></div><div style="display:flex;gap:6px;flex-shrink:0"><button class="btn btn-sm btn-outline" data-edit="'+origIdx+'" data-type="inf">编辑</button><button class="btn btn-sm" style="color:var(--danger);border-color:var(--danger)" data-del="'+origIdx+'" data-type="inf">删除</button></div></div><div style="font-size:12px;color:var(--text-light)">载体：'+esc(inf.vehicle||'')+' · 浓度：'+esc(inf.conc||'')+'</div></div>';
      }).join('');
    } else if (type === 'diseases') {
      var filtered = DISEASES.filter(function(ds){
        if (!kw) return true;
        return (ds.name||'').toLowerCase().indexOf(kw)>=0||(ds.cat||'').toLowerCase().indexOf(kw)>=0||(ds.desc||'').toLowerCase().indexOf(kw)>=0||(ds.py||'').toLowerCase().indexOf(kw)>=0||genPy(ds.name||'').indexOf(kw)>=0||genPy(ds.cat||'').indexOf(kw)>=0;
      });
      html = filtered.map(function(ds) {
        var origIdx = DISEASES.indexOf(ds);
        var isPy = kw && ((ds.py||'').toLowerCase().indexOf(kw)>=0||genPy(ds.name||'').indexOf(kw)>=0||genPy(ds.cat||'').indexOf(kw)>=0) && !ds.name.toLowerCase().includes(kw);
        var pyTag = isPy ? ' <span class="badge badge-blue" style="font-size:10px">PY</span>' : '';
        return '<div class="cat-card" style="margin-bottom:8px;cursor:pointer" data-view="disease" data-view-id="'+ds.id+'"><div class="cat-header"><div style="flex:1;min-width:0"><span class="cat-name">'+highlightKw(esc(ds.name), kw)+pyTag+'</span></div></div><div style="display:flex;justify-content:space-between;align-items:center;padding:0 12px 10px;font-size:12px;color:var(--text-light)"><span>'+highlightKw(esc(ds.cat), kw)+'</span><span style="display:flex;gap:6px"><button class="btn btn-sm btn-outline" data-edit="'+origIdx+'" data-type="disease">编辑</button><button class="btn btn-sm" style="color:var(--danger);border-color:var(--danger)" data-del="'+origIdx+'" data-type="disease">删除</button></span></div></div>';
      }).join('');
    } else if (type === 'users') {
      renderUserList(); return;
    } else if (type === 'mededu') {
      var filtered = (typeof MED_EDU !== 'undefined' ? MED_EDU : []).filter(function(m){
        if (!kw) return true;
        return (m.drug||'').toLowerCase().indexOf(kw)>=0||(m.key||'').toLowerCase().indexOf(kw)>=0||(m.cat||'').toLowerCase().indexOf(kw)>=0||(m.py||'').toLowerCase().indexOf(kw)>=0||genPy(m.drug||'').indexOf(kw)>=0;
      });
      html = filtered.map(function(m) {
        var origIdx = (typeof MED_EDU !== 'undefined' ? MED_EDU : []).indexOf(m);
        var isPy = kw && ((m.py||'').toLowerCase().indexOf(kw)>=0||genPy(m.drug||'').indexOf(kw)>=0||genPy(m.cat||'').indexOf(kw)>=0) && !m.drug.toLowerCase().includes(kw);
        var pyTag = isPy ? ' <span class="badge badge-blue" style="font-size:10px">PY</span>' : '';
        return '<div class="cat-card" style="margin-bottom:8px;cursor:pointer" data-view="med" data-view-id="'+m.id+'"><div class="cat-header"><div style="flex:1;min-width:0"><span class="cat-name">'+highlightKw(esc(m.drug), kw)+pyTag+'</span><span class="badge badge-blue" style="margin-left:6px">'+highlightKw(esc(m.cat||''), kw)+'</span></div><div style="display:flex;gap:6px;flex-shrink:0"><button class="btn btn-sm btn-outline" data-edit="'+origIdx+'" data-type="med">编辑</button></div></div><div style="font-size:12px;color:var(--text-light)">'+esc((m.key||'').slice(0,50))+'</div></div>';
      }).join('');
    }
  } catch(e) { /* 搜索过滤异常，保持空列表 */ }
  list.innerHTML = html || '<div style="text-align:center;padding:40px;color:var(--text-light)">暂无数据</div>';
  bindAdminEvents(type);
}

function bindAdminEvents(type) {
  document.querySelectorAll('#admin-list [data-edit]').forEach(b => {
    b.onclick = (e) => {
      e.stopPropagation();
      var i = parseInt(b.dataset.edit);
      var t = b.dataset.type;
      if (t === 'drug') { showDrugEditor(allDrugs()[i], i); }
      else if (t === 'guide') { var all=[...allGuides(),...LAWS]; showGuidelineEditor(all[i], i); }
      else if (t === 'edu') { showEduEditor(HEALTH_EDU[i], i); }
      else if (t === 'inf') { showInfEditor(INFUSION_DATA[i], i); }
      else if (t === 'disease') { showDiseaseEditor(DISEASES[i], i); }
      else if (t === 'med') { var medArr = typeof MED_EDU !== 'undefined' ? MED_EDU : []; showMedEduEditor(medArr[i], i); }
    };
  });
  document.querySelectorAll('#admin-list [data-del]').forEach(b => {
    b.onclick = (e) => {
      e.stopPropagation();
      deleteItem(b.dataset.type, parseInt(b.dataset.del));
    };
  });
  document.querySelectorAll('#admin-list [data-view]').forEach(card => {
    card.onclick = function() {
      var t = this.dataset.view;
      var id = this.dataset.viewId;
      if(t==='drug'){ pushScreen('detail'); renderDetail(id); }
      else if(t==='guide'){ openGuide(id); }
      else if(t==='edu'){ openHealthEdu(id); }
      else if(t==='inf'){ openInfusion(id); }
      else if(t==='disease'){ var ds=DISEASES.find(function(x){return x.id===id;}); if(ds) openDisease(ds.name); }
      else if(t==='med'){ openMedEdu(id); }
    };
  });
}

// ─── 编辑弹窗 ───
function showDrugEditor(drug, index) {
  var isNew = !drug;
  var d = drug || { name:'', category:'', subcategory:'', type:'处方药', indications:'', contraindications:'', adverse:'', dosage:'', storage:'', interactions:'', label:'' };
  // 生成分类下拉选项
  var catOpts = DRUG_CATEGORIES.map(function(c){return '<option value="'+c.name+'"'+(d.category===c.name?' selected':'')+'>'+c.name+'</option>';}).join('');
  showModal(isNew?'新增药品':'编辑药品',
    `<div style="display:flex;flex-direction:column;gap:10px;max-height:60vh;overflow-y:auto">
      <input id="ed-name" value="${esc(d.name)}" placeholder="药品名称 *">
      <select id="ed-cat" onchange="updateSubcatOptions()"><option value="">— 选择分类 —</option>${catOpts}</select>
      <select id="ed-subcat"><option value="">— 选择子分类 —</option></select>
      <input id="ed-ind" value="${esc(d.indications)}" placeholder="适应症 *">
      <input id="ed-contra" value="${esc(d.contraindications||'')}" placeholder="禁忌症">
      <input id="ed-adverse" value="${esc(d.adverse||'')}" placeholder="不良反应">
      <input id="ed-dosage" value="${esc(d.dosage||'')}" placeholder="用法用量">
      <input id="ed-storage" value="${esc(d.storage||'')}" placeholder="储存条件">
      <input id="ed-inter" value="${esc(d.interactions||'')}" placeholder="药物相互作用">
    </div>`,
    [{label:'取消'},{label:isNew?'新增':'保存',primary:true,onClick:()=>{
      var nd = { id:isNew? 'custom_'+Date.now(): d.id, name:peg('ed-name'), category:peg('ed-cat'), subcategory:peg('ed-subcat'), type:'处方药', indications:peg('ed-ind'), contraindications:peg('ed-contra'), adverse:peg('ed-adverse'), dosage:peg('ed-dosage'), storage:peg('ed-storage'), interactions:peg('ed-inter'), label:'' };
      if(!nd.name||!nd.category||!nd.indications){toast('名称/分类/适应症为必填');return;}
      var cd=getCust();
      if(isNew){cd.drugs.unshift(nd);}else if(index>=DRUGS.length){cd.drugs[index-DRUGS.length]=nd;}else{cd.drugOverlay=cd.drugOverlay||{};cd.drugOverlay[d.id]=nd;}
      saveCust(cd); renderAdminList('drugs'); addEditLog('药品',nd.name,isNew?'新增':'编辑', nd.id); toast(isNew?'新增成功':'保存成功');
      // 同步到 Supabase
      trySyncOrQueue('drugs', {id:nd.id,name:nd.name,py:genPy(nd.name),category:nd.category,subcategory:nd.subcategory,type:nd.type,indications:nd.indications,contraindications:nd.contraindications||null,adverse:nd.adverse||null, dosage:nd.dosage||null, storage:nd.storage||null, interactions:nd.interactions||null, label:nd.label|| null, is_custom:true}, '药品', nd.name);
    }}]
  );
  // 初始化子分类下拉（编辑时预选子分类）
  setTimeout(function(){
    var catEl = document.getElementById('ed-cat');
    if(catEl && d.subcategory) updateSubcatOptions(d.subcategory);
    else if(catEl) updateSubcatOptions();
  }, 100);
}

// 根据选择的主分类更新子分类下拉（药品编辑使用）
function updateSubcatOptions(selectedSub) {
  var catEl = document.getElementById('ed-cat');
  var subEl = document.getElementById('ed-subcat');
  if(!catEl||!subEl) return;
  var catName = catEl.value;
  var cat = DRUG_CATEGORIES.find(function(c){return c.name===catName;});
  subEl.innerHTML = '<option value="">— 选择子分类 —</option>';
  if(cat && cat.subs){
    cat.subs.forEach(function(s){
      var sel = s===selectedSub ? ' selected' : '';
      subEl.innerHTML += '<option value="'+s+'"'+sel+'>'+s+'</option>';
    });
  }
}

function showGuidelineEditor(guide, index) {
  var all=[...allGuides(),...LAWS];
  var isNew=!guide;
  var g=guide||{title:'',system:'',year:'',content:'',sourceUrl:''};
  showModal(isNew?'新增指南':'编辑指南',
    `<div style="display:flex;flex-direction:column;gap:10px">
      <input id="ed-gtitle" value="${esc(g.title)}" placeholder="标题 *">
      <select id="ed-gsystem"><option value="">— 选择系统 —</option>${(typeof getGuideSystems==='function'?getGuideSystems():GUIDE_SYSTEMS).filter(function(s){return s.system!=='法律法规'&&s.system!=='其他';}).map(function(s){return '<option value="'+s.system+'"'+(g.system===s.system?' selected':'')+'>'+s.system+'</option>';}).join('')}</select>
      <input id="ed-gyear" value="${esc(g.year||'')}" placeholder="年份">
      <input id="ed-gsource" value="${esc(g.sourceUrl||'')}" placeholder="原文链接（可选，输入URL即可跳转外部网站）">
      <textarea id="ed-gcontent" style="min-height:120px;border-radius:10px;border:1px solid var(--border);padding:12px;font:inherit;font-size:14px;resize:vertical" placeholder="指南内容（如已填写原文链接，内容可不填）">${esc(g.content||'')}</textarea>
    </div>`,
    [{label:'取消'},{label:isNew?'新增':'保存',primary:true,onClick:()=>{
      var ng={id:g.id||'gl_'+Date.now(),title:peg('ed-gtitle'),system:peg('ed-gsystem'),year:peg('ed-gyear'),content:peg('ed-gcontent'),sourceUrl:peg('ed-gsource')||null};
      if(!ng.title||!ng.system){toast('标题和系统为必填');return;}
      var cd=getCust();
      if(isNew){cd.guidelines.unshift(ng);}else if(index>=GUIDELINES.length){cd.guidelines[index-GUIDELINES.length]=ng;}else{cd.glOverlay=cd.glOverlay||{};cd.glOverlay[g.id]=ng;}
      saveCust(cd); renderAdminList('guidelines'); addEditLog('指南',ng.title,isNew?'新增':'编辑', ng.id); toast(isNew?'新增成功':'保存成功');
      // 同步到 Supabase
      trySyncOrQueue('guidelines', {id:ng.id,title:ng.title,system:ng.system,year:ng.year||null,content:ng.content||null,source_url:ng.sourceUrl||null,py:genPy(ng.title),is_custom:true}, '指南', ng.title);
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
      saveCust(cd); renderAdminList('education'); addEditLog('科普',ne.title,isNew?'新增':'编辑', ne.id); toast(isNew?'新增成功':'保存成功');
      // 同步到 Supabase
      trySyncOrQueue('health_edu', {id:ne.id,cat:ne.cat,title:ne.title,py:genPy(ne.title),content:ne.content||null,is_custom:true}, '科普', ne.title);
    }}]
  );
}

function showMedEduEditor(item, index) {
  var isNew=!item;
  var m=item||{drug:'',cat:'',key:'',detail:''};
  showModal(isNew?'新增用药教育':'编辑用药教育',
    `<div style="display:flex;flex-direction:column;gap:10px">
      <input id="ed-mdrug" value="${esc(m.drug)}" placeholder="药品名 *">
      <input id="ed-mcat" value="${esc(m.cat||'')}" placeholder="分类">
      <input id="ed-mkey" value="${esc(m.key||'')}" placeholder="交代要点 *">
      <textarea id="ed-mdetail" style="min-height:80px;border-radius:10px;border:1px solid var(--border);padding:12px;font:inherit;font-size:14px;resize:vertical" placeholder="详细说明">${esc(m.detail||'')}</textarea>
    </div>`,
    [{label:'取消'},{label:isNew?'新增':'保存',primary:true,onClick:()=>{
      var nm={id:m.id||'m_'+Date.now(),drug:peg('ed-mdrug'),cat:peg('ed-mcat'),key:peg('ed-mkey'),detail:peg('ed-mdetail')};
      if(!nm.drug||!nm.key){toast('药品名和交代要点为必填');return;}
      var cd=getCust();
      cd.mededu=cd.mededu||[];
      if(isNew){cd.mededu.unshift(nm);}else{var idx=cd.mededu.findIndex(x=>x.id===m.id);if(idx>=0)cd.mededu[idx]=nm;else{cd.medOverlay=cd.medOverlay||{};cd.medOverlay[m.id]=nm;}}
      saveCust(cd); renderAdminList('mededu'); addEditLog('用药教育',nm.drug,isNew?'新增':'编辑', nm.id); toast(isNew?'新增成功':'保存成功');
      // 同步到 Supabase（注意字段映射：key→key_point）
      trySyncOrQueue('med_edu', {id:nm.id,cat:nm.cat||null,drug:nm.drug,py:genPy(nm.drug),key_point:nm.key,detail:nm.detail||null,is_custom:true}, '用药教育', nm.drug);
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
      saveCust(cd); renderAdminList('infusion'); addEditLog('配伍',ni.drug,isNew?'新增':'编辑', ni.id); toast(isNew?'新增成功':'保存成功');
      // 同步到 Supabase
      trySyncOrQueue('infusion_data', {id:ni.id,cat:ni.cat||null,drug:ni.drug,py:genPy(ni.drug),vehicle:ni.vehicle||null,conc:ni.conc||null,speed:ni.speed||null,note:ni.note||null,is_custom:true}, '配伍', ni.drug);
    }}]
  );
}

function showDiseaseEditor(item, index) {
  var isNew=!item;
  var d=item||{name:'',cat:'',desc:'',symptoms:'',diagnosis:'',treatment:''};
  showModal(isNew?'新增疾病':'编辑疾病',
    `<div style="display:flex;flex-direction:column;gap:10px">
      <input id="ed-dname" value="${esc(d.name)}" placeholder="名称 *">
      <select id="ed-dcat">${DISEASE_CATEGORIES.map(function(c){return '<option value="'+c.name+'"'+(d.cat===c.name?' selected':'')+'>'+c.name+'</option>';}).join('')}</select>
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
      saveCust(cd); renderAdminList('diseases'); addEditLog('疾病',nd.name,isNew?'新增':'编辑', nd.id); toast(isNew?'新增成功':'保存成功');
      // 同步到 Supabase（注意字段映射：desc→description）
      trySyncOrQueue('diseases', {id:nd.id,name:nd.name,cat:nd.cat,py:genPy(nd.name),description:nd.desc||null,symptoms:nd.symptoms||null,diagnosis:nd.diagnosis||null,treatment:nd.treatment||null,is_custom:true}, '疾病', nd.name);
    }}]
  );
}

function deleteItem(type, index) {
  showModal('确认删除','<p style="text-align:center;font-size:14px">此操作不可恢复，确认删除？</p>',[
    {label:'取消'},{label:'删除',primary:true,onClick:()=>{
      var cd=getCust();
      var deletedId = null;
      if(type==='drug'){if(index<DRUGS.length){toast('内置药品请在data.js中删除');return;}deletedId = cd.drugs[index-DRUGS.length].id; cd.drugs.splice(index-DRUGS.length,1);}
      else if(type==='guide'){if(index<GUIDELINES.length){toast('内置指南请在data.js中删除');return;}deletedId = cd.guidelines[index-GUIDELINES.length].id; cd.guidelines.splice(index-GUIDELINES.length,1);}
      else if(type==='edu'){deletedId=HEALTH_EDU[index]?.['id'];if(!deletedId){toast('内置内容请在data.js中删除');return;}cd.education=cd.education||[];var ei=cd.education.findIndex(function(x){return x.id===deletedId;});if(ei>=0)cd.education.splice(ei,1);}
      else if(type==='med'){deletedId=MED_EDU[index]?.['id'];if(!deletedId){toast('内置内容请在data.js中删除');return;}cd.mededu=cd.mededu||[];var mi=cd.mededu.findIndex(function(x){return x.id===deletedId;});if(mi>=0)cd.mededu.splice(mi,1);}
      else if(type==='inf'){deletedId=INFUSION_DATA[index]?.['id'];if(!deletedId){toast('内置内容请在data.js中删除');return;}cd.infusion=cd.infusion||[];var ii=cd.infusion.findIndex(function(x){return x.id===deletedId;});if(ii>=0)cd.infusion.splice(ii,1);}
      else if(type==='disease'){deletedId=DISEASES[index]?.['id'];if(!deletedId){toast('内置内容请在data.js中删除');return;}cd.diseases=cd.diseases||[];var di=cd.diseases.findIndex(function(x){return x.id===deletedId;});if(di>=0)cd.diseases.splice(di,1);}
      saveCust(cd); renderAdminList(type==='drug'?'drugs':type==='guide'?'guidelines':type==='edu'||type==='med'?'mededu_combined':type==='inf'?'infusion':type==='disease'?'diseases':'drugs'); toast('已删除');
      // 同步删除到 Supabase
      if (deletedId) {
        var table = type==='drug' ? 'drugs' : 'guidelines';
        trySupabaseDelete(table, deletedId);
      }
    }}
  ]);
}

function getCust(){ try{return JSON.parse(localStorage.getItem('custom_data')||'{"drugs":[],"guidelines":[],"diseases":[],"education":[],"mededu":[],"infusion":[]}');}catch(e){return {drugs:[],guidelines:[],diseases:[],education:[],mededu:[],infusion:[]};} }
function saveCust(cd){ localStorage.setItem('custom_data',JSON.stringify(cd)); }
function esc(s){ return (s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function peg(id){ return (document.getElementById(id)?.value||'').trim(); }
function genRandPw(){ var c='abcdefghjkmnpqrstuvwxyz23456789'; var p=''; for(var i=0;i<8;i++) p+=c[Math.floor(Math.random()*c.length)]; return p; }

// ═══ 用户管理 ═══
function renderUserList(container){
  var list=container || document.getElementById('admin-list');
  var users=getUsers();
  list.innerHTML='';
  if(users.length===0){ list.innerHTML='<div style="text-align:center;padding:40px;color:var(--text-light)">暂无用户</div>'; return; }
  var roleLabel={admin:'管理员',editor:'管理员',user:'普通用户'};
  var sourceLabel = {manual:'👤 手动添加', email:'📧 邮箱注册'};
  // 获取内置用户名列表
  var builtinUsernames = (typeof USERS !== 'undefined') ? USERS.map(function(u){return u.username;}) : [];
  users.forEach(function(u){
    var isBuiltin = builtinUsernames.indexOf(u.username) !== -1;
    var sourceTag = u.source ? '<span style="font-size:10px;color:'+(u.source==='email'?'var(--accent)':'var(--primary)')+'">'+ (sourceLabel[u.source]||u.source) +'</span>' : '';
    var row=document.createElement('div');
    row.className='list-card';
    row.style.cssText='display:flex;align-items:center;gap:8px';
    row.innerHTML='<div class="icon-box">👤</div><div class="info" style="flex:1"><div class="name">'+u.username+' '+sourceTag+'</div><div class="desc">'+roleLabel[u.role||'user']+' · '+u.nickname+'</div></div>'
      + '<button class="btn btn-sm btn-outline" style="margin-right:4px">编辑</button>'
      + '<button class="btn btn-sm btn-outline" style="margin-right:4px;font-size:11px">🔑重置密码</button>'
      + '<button class="btn btn-sm" style="color:var(--danger);border-color:var(--danger)">删除</button>';
    var btns = row.querySelectorAll('button');
    var btnIdx = 0;
    btns[btnIdx].onclick=function(){ showUserEditor(u); };
    btns[btnIdx+1].onclick=function(){
      var newPw = genRandPw();
      updateUser(u.username, {password: newPw});
      var info = '用户名：'+u.username+'\n密码：'+newPw;
      navigator.clipboard.writeText(info).then(function(){
        toast('已复制新密码');
      }).catch(function(){});
      showModal('🔑 密码已重置', '<div style="text-align:center;line-height:2"><b>'+u.username+'</b><br>新密码：<b style="font-size:18px;letter-spacing:2px">'+newPw+'</b></div><div style="font-size:12px;color:var(--text-light);margin-top:6px">已自动复制到剪贴板</div>', [{label:'确定',primary:true}]);
      renderUserList();
    };
    btns[btnIdx+2].onclick=function(){
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

// ═══ 单独导出药品/疾病到GitHub ═══
function syncItemToGitHub(item) {
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
        doSyncItem(item, tk);
      }}]
    );
    return;
  }
  doSyncItem(item, token);
}

function doSyncItem(item, token) {
  var ctName = '';
  var ctData = null;
  if (item.type === 'drug') {
    var d = allDrugs().find(function(x){return x.id===item.id;});
    if (!d) { toast('药品不存在'); return; }
    ctName = d.name;
    ctData = {name:d.name, category:d.category, subcategory:d.subcategory||'', type:d.type, indications:d.indications||'', contraindications:d.contraindications||'', adverse:d.adverse||'', dosage:d.dosage||'', storage:d.storage||'', interactions:d.interactions||''};
  } else if (item.type === 'disease') {
    var ds = DISEASES.find(function(x){return x.id===item.id;});
    if (!ds) { toast('疾病不存在'); return; }
    ctName = ds.name;
    ctData = {name:ds.name, cat:ds.cat, desc:ds.desc||'', symptoms:ds.symptoms||'', diagnosis:ds.diagnosis||'', treatment:ds.treatment||''};
  } else {
    toast('不支持的类型'); return;
  }

  var exp = {
    exportTime: new Date().toISOString(),
    appVersion: typeof APP_VERSION !== 'undefined' ? APP_VERSION : '1.0.0',
    item_type: item.type,
    item: ctData
  };

  var now = new Date();
  var ts = now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0')+'_'+String(now.getHours()).padStart(2,'0')+'-'+String(now.getMinutes()).padStart(2,'0');
  var filename = 'data/exports/'+item.type+'_'+ctName.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g,'_')+'_'+ts+'.json';
  var content = btoa(unescape(encodeURIComponent(JSON.stringify(exp, null, 2))));

  toast('⏳ 正在导出 '+ctName+' 到仓库…');

  fetch('https://api.github.com/repos/'+GITHUB_REPO+'/contents/'+filename+'?ref='+GITHUB_BRANCH, {
    headers: { 'Authorization': 'Bearer '+token, 'Accept': 'application/vnd.github.v3+json' }
  }).then(function(r){
    return r.json().then(function(body){ return {status: r.status, sha: body.sha}; });
  }).then(function(result){
    var body = {
      message: '📱 导出'+(item.type==='drug'?'药品':'疾病')+'：'+ctName,
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
      toast('✅ '+ctName+' 已导出到仓库');
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

// ═══ 指南分类管理 ═══
function addGuideCategory(){
  showModal('新增指南分类', '<input id="ed-new-cat" placeholder="输入分类名称（如：呼吸）" style="width:100%">', [
    {label:'取消'},
    {label:'新增',primary:true,onClick:function(){
      var name=peg('ed-new-cat').trim();
      if(!name){toast('请输入分类名称');return;}
      var cats=JSON.parse(localStorage.getItem('custom_guide_cats')||'[]');
      if(cats.indexOf(name)>=0||(typeof getGuideSystems==='function'?getGuideSystems():GUIDE_SYSTEMS).some(function(s){return s.system===name;})){toast('分类已存在');return;}
      cats.push(name);
      localStorage.setItem('custom_guide_cats',JSON.stringify(cats));
      renderAdminList('guidelines', document.getElementById('admin-search')?.value||'');
      toast('已新增分类：'+name);
    }}
  ]);
  setTimeout(function(){ var inp=document.getElementById('ed-new-cat'); if(inp) inp.focus(); }, 100);
}
function deleteGuideCategory(name, el){
  showModal('删除分类', '<p style="text-align:center">确定删除分类 <b>'+esc(name)+'</b>？<br><span style="font-size:12px;color:var(--text-light)">仅删除分类标签，不影响该分类下的指南条目</span></p>', [
    {label:'取消'},
    {label:'删除',primary:true,onClick:function(){
      var cats=JSON.parse(localStorage.getItem('custom_guide_cats')||'[]');
      var idx=cats.indexOf(name);
      if(idx>=0){
        cats.splice(idx,1);
        localStorage.setItem('custom_guide_cats',JSON.stringify(cats));
      } else {
        var del=JSON.parse(localStorage.getItem('deleted_guide_cats')||'[]');
        if(del.indexOf(name)<0) del.push(name);
        localStorage.setItem('deleted_guide_cats',JSON.stringify(del));
      }
      renderAdminList('guidelines', document.getElementById('admin-search')?.value||'');
      toast('已删除分类：'+name);
    }}
  ]);
}
