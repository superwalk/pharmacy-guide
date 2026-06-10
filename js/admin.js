// ═══ 内容管理 ═══
// admin/editor 可在 App 内直接增删改药品和指南

function initAdmin() {
  if (!isEditor()) { toast('无权限访问'); goBack(); return; }

  document.querySelectorAll('#admin-tabs .segment-item').forEach(t => {
    const handler = () => {
      document.querySelectorAll('#admin-tabs .segment-item').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      renderAdminList(t.dataset.tab);
      const labels = { drugs: '+ 新增药品', guidelines: '+ 新增指南', categories: '+ 新增分类' };
      document.getElementById('admin-add-btn').textContent = labels[t.dataset.tab];
    };
  });

  document.getElementById('admin-add-btn').onclick = () => {
    const t = document.querySelector('#admin-tabs .segment-item.active').dataset.tab;
    if (t === 'drugs') showDrugEditor();
    else if (t === 'guidelines') showGuidelineEditor();
    else showCategoryEditor();
  };

  renderAdminList('drugs');
}

function renderAdminList(type) {
  const list = document.getElementById('admin-list');
  if (type === 'drugs') {
    const drugs = allDrugs();
    const cd = JSON.parse(localStorage.getItem('custom_data') || '{"drugs":[],"guidelines":[]}');
    list.innerHTML = drugs.map((d, i) => {
      const isCustom = i >= DRUGS.length;
      return `<div class="cat-card" style="margin-bottom:8px">
        <div class="cat-header">
          <div style="flex:1;min-width:0">
            <span class="cat-name">${esc(d.name)}</span>
            <span class="badge badge-green" style="margin-left:6px">${esc(d.category)}</span>
            ${isCustom ? '<span class="badge badge-blue" style="margin-left:6px">自定义</span>' : ''}
          </div>
          <div style="display:flex;gap:6px;flex-shrink:0">
            <button class="btn btn-sm btn-outline" data-edit="${i}" data-type="drug">编辑</button>
            <button class="btn btn-sm" style="background:#FEF2F2;color:var(--danger)" data-del="${i}" data-type="drug">删除</button>
          </div>
        </div>
        <div style="font-size:12px;color:var(--text-light)">适应症：${esc(d.indications?.slice(0, 50) || '')}…</div>
      </div>`;
    }).join('');
    list.querySelectorAll('[data-edit]').forEach(b => b.onclick = () => {
      const idx = parseInt(b.dataset.edit);
      const d = allDrugs()[idx];
      showDrugEditor(d, idx);
    });
    list.querySelectorAll('[data-del]').forEach(b => b.onclick = () => deleteItem('drug', parseInt(b.dataset.del)));
  } else if (type === 'guidelines') {
    // 合并指南 + 法规
    const all = [...allGuides(), ...LAWS.map(l => ({ ...l, system: '法律法规', isLaw: true }))];
    const customData = JSON.parse(localStorage.getItem('custom_data') || '{"guidelines":[]}');
    list.innerHTML = all.map((g, i) => {
      const builtinCount = GUIDELINES.length;
      const isCustom = i >= builtinCount && !g.isLaw;
      return `<div class="cat-card" style="margin-bottom:8px">
        <div class="cat-header">
          <div style="flex:1;min-width:0">
            <span class="cat-name">${esc(g.title)}</span>
            <span class="badge badge-blue" style="margin-left:6px">${esc(g.system || '法律法规')}</span>
            ${isCustom ? '<span class="badge badge-blue">自定义</span>' : ''}
            ${g.isLaw ? '<span class="badge badge-blue">法规</span>' : ''}
          </div>
          <div style="display:flex;gap:6px;flex-shrink:0">
            <button class="btn btn-sm btn-outline" data-edit="${i}" data-type="allgl">编辑</button>
            <button class="btn btn-sm" style="background:#FEF2F2;color:var(--danger)" data-del="${i}" data-type="allgl">删除</button>
          </div>
        </div>
        <div style="font-size:12px;color:var(--text-light)">${esc(g.year || '')} · ${esc(g.content?.slice(0, 50) || '')}…</div>
      </div>`;
    }).join('');
    list.querySelectorAll('[data-edit]').forEach(b => b.onclick = () => {
      const idx = parseInt(b.dataset.edit);
      const allItems = [...allGuides(), ...LAWS.map(l => ({ ...l, system: '法律法规', isLaw: true }))];
      const g = allItems[idx];
      showGuidelineEditor(g, idx);
    });
    list.querySelectorAll('[data-del]').forEach(b => b.onclick = () => deleteItem('allgl', parseInt(b.dataset.del)));
  } else {
    showCategoryEditor();
  }
}

function showDrugEditor(drug, index) {
  const isNew = !drug;
  const d = drug || { name: '', category: '', subcategory: '', type: '处方药', indications: '', contraindications: '', adverse: '', dosage: '', storage: '', interactions: '', label: '' };
  showModal(
    isNew ? '新增药品' : '编辑药品',
    `<div style="display:flex;flex-direction:column;gap:10px;max-height:60vh;overflow-y:auto">
      ${isNew ? '<input id="ed-id" value="custom_'+Date.now()+'" style="display:none">' : ''}
      <input id="ed-name" value="${esc(d.name)}" placeholder="药品名称 *">
      <input id="ed-cat" value="${esc(d.category)}" placeholder="分类 *">
      <input id="ed-subcat" value="${esc(d.subcategory||'')}" placeholder="子分类">
      <input id="ed-ind" value="${esc(d.indications)}" placeholder="适应症 *">
      <input id="ed-contra" value="${esc(d.contraindications)}" placeholder="禁忌症">
      <input id="ed-adverse" value="${esc(d.adverse)}" placeholder="不良反应">
      <input id="ed-dosage" value="${esc(d.dosage)}" placeholder="用法用量">
      <input id="ed-storage" value="${esc(d.storage)}" placeholder="储存条件">
      <input id="ed-inter" value="${esc(d.interactions||'')}" placeholder="药物相互作用">
      <textarea id="ed-label" style="min-height:100px;border-radius:10px;border:1px solid var(--border);padding:12px;font:inherit;font-size:14px;resize:vertical" placeholder="完整说明书">${esc(d.label || '')}</textarea>
    </div>`,
    [
      { label: '取消' },
      { label: isNew ? '新增' : '保存', primary: true, onClick: () => {
        const newDrug = {
          id: isNew ? 'custom_' + Date.now() : d.id,
          name: peg('ed-name'), category: peg('ed-cat'), subcategory: peg('ed-subcat'),
          type: '处方药', indications: peg('ed-ind'), contraindications: peg('ed-contra'),
          adverse: peg('ed-adverse'), dosage: peg('ed-dosage'), storage: peg('ed-storage'),
          interactions: peg('ed-inter'), label: peg('ed-label')
        };
        if (!newDrug.name || !newDrug.category || !newDrug.indications) { toast('名称/分类/适应症为必填'); return; }
        const cd = JSON.parse(localStorage.getItem('custom_data') || '{"drugs":[],"guidelines":[]}');
        if (isNew) { cd.drugs.unshift(newDrug); }
        else if (index >= DRUGS.length) { cd.drugs[index - DRUGS.length] = newDrug; }
        else {
          // 内置药品：保存编辑到 custom_data 的 overlay
          cd.drugOverlay = cd.drugOverlay || {};
          cd.drugOverlay[d.id] = newDrug;
        }
        localStorage.setItem('custom_data', JSON.stringify(cd));
        renderAdminList('drugs'); toast(isNew ? '新增成功' : '保存成功');
        // 强制合并重新加载
        updateAllData();
      }}
    ]);
}

function showGuidelineEditor(guide, index) {
  const isNew = !guide;
  const g = guide || { title: '', system: '', year: new Date().getFullYear().toString(), content: '' };
  showModal(
    isNew ? '新增指南' : '编辑' + (g.isLaw ? '法规' : '指南'),
    `<div style="display:flex;flex-direction:column;gap:10px">
      <input id="ed-gtitle" value="${esc(g.title)}" placeholder="标题 *">
      <input id="ed-gsystem" value="${esc(g.system||'')}" placeholder="所属系统 *（如：心血管系统 / 法律法规）">
      <input id="ed-gyear" value="${esc(g.year||'')}" placeholder="年份">
      <textarea id="ed-gcontent" style="min-height:120px;border-radius:10px;border:1px solid var(--border);padding:12px;font:inherit;font-size:14px;resize:vertical" placeholder="内容">${esc(g.content||'')}</textarea>
    </div>`,
    [
      { label: '取消' },
      { label: isNew ? '新增' : '保存', primary: true, onClick: () => {
        const newGL = {
          id: g.id || 'gl_' + Date.now(),
          title: peg('ed-gtitle'), system: peg('ed-gsystem'),
          year: peg('ed-gyear'), content: peg('ed-gcontent')
        };
        if (!newGL.title || !newGL.system) { toast('标题和系统为必填'); return; }
        const cd = JSON.parse(localStorage.getItem('custom_data') || '{"drugs":[],"guidelines":[]}');
        if (isNew) { cd.guidelines.unshift(newGL); }
        else if (index >= GUIDELINES.length) { cd.guidelines[index - GUIDELINES.length] = newGL; }
        else {
          // 内置指南：保存 overlay
          cd.glOverlay = cd.glOverlay || {};
          cd.glOverlay[g.id] = newGL;
          // 也修改 LAWS overlay
          if (g.isLaw) {
            cd.lawOverlay = cd.lawOverlay || {};
            cd.lawOverlay[g.id] = newGL;
          }
        }
        localStorage.setItem('custom_data', JSON.stringify(cd));
        renderAdminList('guidelines'); toast(isNew ? '新增成功' : '保存成功');
        updateAllData();
      }}
    ]);
}

function showCategoryEditor() {
  showModal('分类管理说明',
    `<div style="font-size:13px;line-height:1.8;color:var(--text-body)">
      <p><b>药品分类</b>和<b>疾病分类</b>的结构在 <code>js/data.js</code> 文件中。</p>
      <p style="margin-top:8px">如需新增或修改分类，请：</p>
      <p>1. 打开 js/data.js 文件</p>
      <p>2. 找到 DRUG_CATEGORIES / DISEASE_CATEGORIES 数组</p>
      <p>3. 添加/修改条目后保存</p>
      <p>4. 重新部署即可生效</p>
      <p style="margin-top:8px;color:var(--accent)">💡 药品和指南的增删改可在本页面直接操作</p>
    </div>`,
    [{ label: '知道了', primary: true }]
  );
}

function deleteItem(type, index) {
  showModal('确认删除', '<p style="text-align:center;font-size:14px">此操作不可恢复，确认删除？</p>', [
    { label: '取消' },
    { label: '删除', primary: true, onClick: () => {
      const cd = JSON.parse(localStorage.getItem('custom_data') || '{"drugs":[],"guidelines":[]}');
      if (type === 'drug') {
        if (index < DRUGS.length) { toast('内置药品请直接修改 js/data.js 文件后重新部署'); return; }
        cd.drugs.splice(index - DRUGS.length, 1);
      } else if (type === 'allgl') {
        if (index < GUIDELINES.length) { toast('内置指南/法规请直接修改 js/data.js 文件后重新部署'); return; }
        cd.guidelines.splice(index - GUIDELINES.length, 1);
      }
      localStorage.setItem('custom_data', JSON.stringify(cd));
      renderAdminList(type === 'drug' ? 'drugs' : 'guidelines');
      toast('已删除');
    }}
  ]);
}

// 合并 overlay 数据到实际展示
function updateAllData() {
  const cd = JSON.parse(localStorage.getItem('custom_data') || '{}');
  if (cd.drugOverlay) {
    Object.entries(cd.drugOverlay).forEach(([id, val]) => {
      const idx = DRUGS.findIndex(d => d.id === id);
      if (idx >= 0) Object.assign(DRUGS[idx], val);
    });
  }
  if (cd.glOverlay) {
    Object.entries(cd.glOverlay).forEach(([id, val]) => {
      const idx = GUIDELINES.findIndex(g => g.id === id);
      if (idx >= 0) Object.assign(GUIDELINES[idx], val);
    });
    // 更新 LAWS
    if (cd.lawOverlay) {
      Object.entries(cd.lawOverlay).forEach(([id, val]) => {
        const idx = LAWS.findIndex(l => l.id === id);
        if (idx >= 0) Object.assign(LAWS[idx], val);
      });
    }
  }
}

// 启动时合并
(function() { updateAllData(); })();

function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function peg(id) { return (document.getElementById(id)?.value || '').trim(); }

// 绑定内容管理入口
(function bindAdminMenu(){
  const menu=document.querySelector('#menu-edit-content');
  if(!menu){ setTimeout(bindAdminMenu,200); return; }
  menu.onclick=()=>{ pushScreen('admin'); initAdmin(); };
})();
