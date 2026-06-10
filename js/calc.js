// ═══ 计算工具 ═══
function renderCalc() {
  const c=document.getElementById('calc-content');
  c.innerHTML=`
    <div class="section-title" style="font-size:26px">计算工具</div>
    <div class="search-bar search-sm" style="margin-bottom:16px"><svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#94A3B8" stroke-width="2"/></svg><input id="calc-filter" placeholder="搜索工具…" oninput="filterCalcTools()"></div>
    <div id="calc-tools">
      ${calcCard('👶 儿童体重估算','weight','适用于无法称重时的体重估算',`
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <input id="cw-age" type="number" placeholder="年龄" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px">
          <select id="cw-unit" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px;border:1px solid var(--border)"><option value="year">岁</option><option value="month">月</option></select>
        </div>
        <button class="btn btn-primary btn-full" onclick="calcChildWeight()">计算体重</button>
        <div id="cw-result" style="text-align:center;font-size:20px;font-weight:700;color:var(--primary);padding:10px;display:none"></div>
      `)}
      ${calcCard('📐 体表面积 BSA','bsa','基于 Mosteller 公式：√(身高×体重/3600)',`
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <input id="bsa-h" type="number" placeholder="身高 cm" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px" step="0.1">
          <input id="bsa-w" type="number" placeholder="体重 kg" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px" step="0.1">
        </div>
        <button class="btn btn-primary btn-full" onclick="calcBSA()">计算体表面积</button>
        <div id="bsa-result" style="text-align:center;font-size:20px;font-weight:700;color:var(--primary);padding:10px;display:none"></div>
      `)}
      ${calcCard('⚡ 抗生素效价单位换算','potency','万单位 ↔ 毫克/克 换算（理论效价）',`
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <select id="pot-drug" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:14px;border:1px solid var(--border)">
            <option value="penK">青霉素G钾 (1mg≈1598U)</option><option value="penNa">青霉素G钠 (1mg≈1670U)</option>
            <option value="genta">庆大霉素 (1mg≈590U)</option><option value="vanco">万古霉素 (1mg≈1007U)</option>
            <option value="amika">阿米卡星 (1mg≈690U)</option><option value="eryth">红霉素乳糖酸盐 (1mg≈672U)</option>
            <option value="polyB">多粘菌素B (1mg≈10000U)</option><option value="strepto">链霉素 (1mg≈740U)</option>
          </select>
        </div>
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <input id="pot-val" type="number" placeholder="输入数值" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px" step="0.01">
          <select id="pot-dir" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:14px;border:1px solid var(--border)"><option value="u2mg">万单位 → mg</option><option value="mg2u">mg → 万单位</option></select>
        </div>
        <button class="btn btn-primary btn-full" onclick="calcPotency()">换算</button>
        <div id="pot-result" style="text-align:center;font-size:18px;font-weight:700;color:var(--primary);padding:10px;display:none"></div>
      `)}
      ${calcCard('💊 抗生素肾功剂量调整','abx-renal','基于肌酐清除率 CrCl 的剂量建议',`
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <input id="crcl" type="number" placeholder="CrCl mL/min" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px" step="0.1">
          <select id="abx-drug" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:14px;border:1px solid var(--border)">
            <option value="amoxicillin">阿莫西林</option><option value="cefixime">头孢克肟</option>
            <option value="levofloxacin">左氧氟沙星</option><option value="vancomycin">万古霉素</option>
            <option value="metformin">二甲双胍</option>
          </select>
        </div>
        <button class="btn btn-primary btn-full" onclick="calcABX()">计算剂量</button>
        <div id="abx-result" style="padding:10px;font-size:13px;color:var(--text-body);line-height:1.6;display:none"></div>
      `)}
      ${calcCard('📊 抗生素 DDD 计算','ddd','Defined Daily Dose — 抗菌药物使用强度',`
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <select id="ddd-drug" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:14px;border:1px solid var(--border)">
            <option value="amoxicillin_po">阿莫西林 口服/注射</option><option value="ceftriaxone">头孢曲松 注射</option>
            <option value="levofloxacin_po">左氧氟沙星 口服/注射</option><option value="azithromycin_po">阿奇霉素 口服/注射</option>
            <option value="moxifloxacin">莫西沙星 口服/注射</option><option value="cefoperazone_sulb">头孢哌酮舒巴坦</option>
            <option value="piperacillin_tazo">哌拉西林他唑巴坦</option><option value="vancomycin_iv">万古霉素 注射</option>
            <option value="meropenem">美罗培南</option><option value="metronidazole">甲硝唑 口服/注射</option>
            <option value="clindamycin">克林霉素 口服/注射</option><option value="linezolid">利奈唑胺 口服/注射</option>
          </select>
        </div>
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <input id="ddd-total" type="number" placeholder="累计用量 (g)" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px" step="0.01">
          <input id="ddd-days" type="number" placeholder="统计天数" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px">
        </div>
        <button class="btn btn-primary btn-full" onclick="calcDDD()">计算 DDD / AUD</button>
        <div id="ddd-result" style="padding:10px;font-size:13px;color:var(--text-body);line-height:1.6;display:none"></div>
        <div style="font-size:11px;color:var(--text-light);margin-top:6px">
          DDD（限定日剂量）：成人主要适应症的平均日维持剂量<br>
          AUD（抗菌药物使用强度）= DDD数×100/同期收治人天数
        </div>
      `)}
      ${calcCard('🍼 儿科用量计算','ped','按体重单次/每日总量计算',`
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <input id="ped-w" type="number" placeholder="体重 kg" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px" step="0.1">
          <input id="ped-dose" type="number" placeholder="剂量 mg/kg/次" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px" step="0.1">
        </div>
        <input id="ped-freq" type="number" placeholder="每日次数（默认3次）" style="width:100%;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px;margin-bottom:8px" value="3">
        <button class="btn btn-primary btn-full" onclick="calcPed()">计算用量</button>
        <div id="ped-result" style="text-align:center;font-size:16px;font-weight:600;color:var(--primary);padding:10px;display:none"></div>
      `)}
      ${calcCard('🔪 手术切口分类','surgery','Ⅰ~Ⅳ 类切口定义 + 抗菌药使用建议',`
        <div id="surgery-table">
          <div style="overflow-x:auto;font-size:12px;line-height:1.7">
            <table style="width:100%;border-collapse:collapse;margin-top:8px">
              <tr style="background:var(--bg)"><th style="padding:8px;text-align:left;font-weight:700;border-bottom:2px solid var(--border)">类别</th><th style="padding:8px;text-align:left;font-weight:700;border-bottom:2px solid var(--border)">定义</th><th style="padding:8px;text-align:left;font-weight:700;border-bottom:2px solid var(--border)">抗菌药</th></tr>
              <tr style="background:var(--muted)"><td style="padding:8px;border-bottom:1px solid var(--border);color:var(--primary);font-weight:600">Ⅰ类</td><td style="padding:8px;border-bottom:1px solid var(--border);font-size:11px">清洁切口：未进入炎症区，未进入呼吸道/消化道/泌尿生殖道</td><td style="padding:8px;border-bottom:1px solid var(--border);color:var(--primary);font-size:11px">原则上不用</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid var(--border);color:var(--accent);font-weight:600">Ⅱ类</td><td style="padding:8px;border-bottom:1px solid var(--border);font-size:11px">清洁-污染：进入呼吸道/消化道/泌尿生殖道但无明显污染</td><td style="padding:8px;border-bottom:1px solid var(--border);color:var(--accent);font-size:11px">预防用 ≤24h</td></tr>
              <tr style="background:var(--muted)"><td style="padding:8px;border-bottom:1px solid var(--border);color:#D97706;font-weight:600">Ⅲ类</td><td style="padding:8px;border-bottom:1px solid var(--border);font-size:11px">污染切口：新鲜开放性创伤、胃肠道内容物溢出</td><td style="padding:8px;border-bottom:1px solid var(--border);color:#D97706;font-size:11px">治疗性使用</td></tr>
              <tr><td style="padding:8px;color:var(--danger);font-weight:600">Ⅳ类</td><td style="padding:8px;border-bottom:1px solid var(--border);font-size:11px">感染切口：陈旧创伤、化脓性感染、脏器穿孔</td><td style="padding:8px;border-bottom:1px solid var(--border);color:var(--danger);font-size:11px">治疗性使用</td></tr>
            </table>
          </div>
          <div style="display:flex;gap:6px;margin-top:8px">
            <select id="surg-class" style="flex:1;height:40px;background:var(--bg);border-radius:10px;padding:0 12px;font-size:14px;border:1px solid var(--border)">
              <option value="">-- 选择切口类别 --</option><option value="I">Ⅰ类：清洁切口</option><option value="II">Ⅱ类：清洁-污染</option><option value="III">Ⅲ类：污染</option><option value="IV">Ⅳ类：感染</option>
            </select>
          </div>
          <button class="btn btn-primary btn-full" style="margin-top:8px" onclick="showSurgeryRec()">查看推荐</button>
          <div id="surg-rec-result" style="padding:10px;font-size:13px;color:var(--text-body);line-height:1.6;display:none;margin-top:8px;background:var(--bg);border-radius:10px"></div>
        </div>
      `)}
      ${calcCard('🩸 化验指标参考值','lab','血常规/肝功/肾功/凝血/电解质/血糖/血脂/甲状腺/心肌/感染/尿常规',`
        <div class="search-bar search-sm" style="margin-bottom:8px"><svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#94A3B8" stroke-width="2"/></svg><input id="lab-filter" placeholder="搜索化验项目…" oninput="filterLabTable()"></div>
        <div id="lab-content">${LAB_DATA.map((cat,i)=>`
          <div class="lab-cat" style="margin-top:10px">
            <div style="font-size:13px;font-family:var(--font-heading);font-weight:700;color:var(--primary);cursor:pointer;padding:6px 0;border-bottom:1px solid var(--border)" onclick="toggleLabCat(${i})" data-expanded="true">${cat.cat} (${cat.items.length}项) <span class="lab-cat-arrow" style="float:right">▼</span></div>
            <div class="lab-cat-items" id="lab-cat-${i}">${cat.items.map(item=>`<div class="lab-item" style="display:flex;padding:8px 0;border-bottom:1px solid var(--border);font-size:11px;gap:4px">
              <div style="flex:1.2;font-weight:600;color:var(--primary-dark)">${item.name}</div><div style="flex:2;color:var(--text-body);text-align:center"><b>${item.ref}</b></div><div style="flex:1.5;font-size:10px;color:var(--text-light)">${item.note||''}</div>
            </div>`).join('')}</div>
          </div>`).join('')}</div>
        <div style="font-size:10px;color:var(--text-light);margin-top:10px;text-align:center">参考值来源于国内通用标准，具体以本院检验科范围为准</div>
      `)}
    </div>
  `;
}

function calcCard(title,id,desc,body){ return `
<div class="detail-hero" style="margin-bottom:14px" id="calc-${id}">
  <div style="font-size:16px;font-family:var(--font-heading);font-weight:700;color:var(--primary-dark);cursor:pointer" onclick="toggleCalcSection(this,'calc-${id}')">${title} <span class="calc-arrow" style="float:right;font-size:12px">▼</span></div>
  <div style="font-size:11px;color:var(--text-light);margin-bottom:6px">${desc}</div>
  <div class="calc-body">${body}</div>
</div>`;}

function toggleCalcSection(header,id){
  const card=document.getElementById(id||header.parentElement.id);
  const body=card.querySelector('.calc-body');
  const arrow=header.querySelector('.calc-arrow');
  if(body.style.display==='none'){ body.style.display='block'; arrow.textContent='▼'; }
  else { body.style.display='none'; arrow.textContent='▶'; }
}

function filterCalcTools(){ const kw=document.getElementById('calc-filter').value.toLowerCase(); document.querySelectorAll('#calc-tools .detail-hero').forEach(el=>{ el.style.display=el.textContent.toLowerCase().includes(kw)?'block':'none'; }); }

// ═══ DDD 计算 ═══
const DDD_VALUES={ amoxicillin_po:{ddd:1.0,route:'口服/注射'},ceftriaxone:{ddd:2.0,route:'注射'},levofloxacin_po:{ddd:0.5,route:'口服/注射'},azithromycin_po:{ddd:0.5,route:'口服/注射'},moxifloxacin:{ddd:0.4,route:'口服/注射'},cefoperazone_sulb:{ddd:4.0,route:'注射'},piperacillin_tazo:{ddd:14.0,route:'注射'},vancomycin_iv:{ddd:2.0,route:'注射'},meropenem:{ddd:3.0,route:'注射'},metronidazole:{ddd:1.5,route:'口服/注射'},clindamycin:{ddd:1.8,route:'口服/注射'},linezolid:{ddd:1.2,route:'口服/注射'} };

function calcDDD(){
  const drug=document.getElementById('ddd-drug').value;
  const total=parseFloat(document.getElementById('ddd-total').value);
  const days=parseInt(document.getElementById('ddd-days').value)||1;
  const r=document.getElementById('ddd-result');
  if(!total||total<=0){ r.textContent='请输入累计用量'; r.style.display='block'; return; }
  const info=DDD_VALUES[drug];
  const dddNum=total/info.ddd;
  r.style.display='block';
  r.innerHTML=`<div style="display:flex;flex-direction:column;gap:6px">
    <div>DDD值：<b>${info.ddd} g</b>（${info.route}）</div>
    <div>累计用量：<b>${total.toFixed(2)} g</b> → DDD数：<b style="color:var(--accent);font-size:18px">${dddNum.toFixed(2)}</b></div>
    <div>统计天数：${days} 天</div>
    ${days>0?`<div>AUD（使用强度）：<b style="color:var(--primary);font-size:18px">${(dddNum*100/days).toFixed(2)}</b> DDD/100人天</div>`:''}
  </div><div style="font-size:10px;color:var(--text-light);margin-top:4px">DDD来源：WHO ATC/DDD Index 2024 ⚠️ 仅供参考</div>`;
}

// ═══ 其他计算函数（保持不变） ═══
function calcChildWeight(){ const age=parseFloat(document.getElementById('cw-age').value); const unit=document.getElementById('cw-unit').value; const r=document.getElementById('cw-result'); if(!age||age<0){ r.textContent='请输入有效年龄'; r.style.display='block'; return; } let y=unit==='month'?age/12:age; let kg; if(y<=0.5) kg=3+(y*12)*0.7; else if(y<=1) kg=7+(y-0.5)*2; else if(y<=6) kg=y*2+8; else if(y<=12) kg=y*3+2; else kg='体重变异大，建议实际称重'; r.style.display='block'; r.innerHTML=typeof kg==='number'?`估算体重约 <b style="color:var(--accent)">${kg.toFixed(1)} kg</b>`:`${kg}`; }
function calcBSA(){ const h=parseFloat(document.getElementById('bsa-h').value); const w=parseFloat(document.getElementById('bsa-w').value); const r=document.getElementById('bsa-result'); if(!h||!w){ r.textContent='请输入身高和体重'; r.style.display='block'; return; } const bsa=Math.pow(h*w/3600,0.5); r.style.display='block'; r.innerHTML=`体表面积 <b style="color:var(--accent)">${bsa.toFixed(2)} m²</b>`; }
function calcPotency(){ const drug=document.getElementById('pot-drug').value; const val=parseFloat(document.getElementById('pot-val').value); const dir=document.getElementById('pot-dir').value; const r=document.getElementById('pot-result'); if(!val){ r.textContent='请输入数值'; r.style.display='block'; return; } const potencies={penK:1598,penNa:1670,genta:590,vanco:1007,amika:690,eryth:672,polyB:10000,strepto:740}; const pu=potencies[drug]; let result,unit; if(dir==='u2mg'){ result=val*10000/pu; unit='mg'; } else { result=val*pu/10000; unit='万单位'; } r.style.display='block'; r.innerHTML=`= <b style="color:var(--accent)">${result.toFixed(2)} ${unit}</b><div style="font-size:11px;color:var(--text-light);margin-top:4px">理论效价：1mg ≈ ${pu}U</div>`; }
function calcABX(){ const crcl=parseFloat(document.getElementById('crcl').value); const drug=document.getElementById('abx-drug').value; const r=document.getElementById('abx-result'); if(!crcl){ r.textContent='请输入CrCl值'; r.style.display='block'; return; } const recs={ amoxicillin:[{min:30,dose:'常规剂量 0.5g q8h',color:'var(--primary)'},{min:10,dose:'0.25-0.5g q12h',color:'var(--accent)'},{min:0,dose:'0.25g q24h',color:'var(--danger)'}],cefixime:[{min:60,dose:'常规剂量 0.1g bid',color:'var(--primary)'},{min:20,dose:'0.2g q24h',color:'var(--accent)'},{min:0,dose:'0.2g q48h',color:'var(--danger)'}],levofloxacin:[{min:50,dose:'常规剂量 0.5g qd',color:'var(--primary)'},{min:20,dose:'首剂0.5g，然后0.25g qd',color:'var(--accent)'},{min:0,dose:'首剂0.5g，然后0.25g q48h',color:'var(--danger)'}],vancomycin:[{min:80,dose:'常规剂量 1g q12h,监测血药浓度',color:'var(--primary)'},{min:50,dose:'1g q24h',color:'var(--accent)'},{min:10,dose:'根据血药浓度个体化',color:'var(--danger)'},{min:0,dose:'<b>慎用</b>',color:'var(--danger)'}],metformin:[{min:60,dose:'常规剂量',color:'var(--primary)'},{min:45,dose:'减量50%',color:'var(--accent)'},{min:30,dose:'减量75%',color:'var(--danger)'},{min:0,dose:'<b>禁用</b>',color:'var(--danger)'}] }; const rec=recs[drug].find(rr=>crcl>=rr.min)||recs[drug][recs[drug].length-1]; r.style.display='block'; r.innerHTML=`<div>CrCl = <b>${crcl} mL/min</b></div><div style="color:${rec.color};font-weight:600;margin-top:6px">→ ${rec.dose}</div><div style="font-size:11px;color:var(--text-light);margin-top:4px">⚠️ 仅供参考</div>`; }
function calcPed(){ const w=parseFloat(document.getElementById('ped-w').value); const dose=parseFloat(document.getElementById('ped-dose').value); const freq=parseInt(document.getElementById('ped-freq').value)||3; const r=document.getElementById('ped-result'); if(!w||!dose){ r.textContent='请输入体重和剂量'; r.style.display='block'; return; } const perDose=w*dose; const daily=perDose*freq; r.style.display='block'; r.innerHTML=`每次用量: <b style="color:var(--accent)">${perDose.toFixed(1)} mg</b><br>每日总量 (×${freq}): <b style="color:var(--primary)">${daily.toFixed(1)} mg</b>`; }
function showSurgeryRec(){ const cls=document.getElementById('surg-class').value; const r=document.getElementById('surg-rec-result'); const recs={ I:'<b style="color:var(--primary)">Ⅰ类切口：原则上不预防用抗菌药物。</b><br>特殊情况可选用<b>头孢唑林</b>或<b>头孢呋辛</b>，术前30-60min单次。', II:'<b style="color:var(--accent)">Ⅱ类切口：建议预防用药。</b><br>• 胃十二指肠/胆道：<b>头孢唑林</b>或<b>头孢呋辛</b><br>• 结直肠/阑尾：<b>头孢西丁</b>或<b>头孢曲松+甲硝唑</b><br>• 妇科：<b>头孢唑林</b>±<b>甲硝唑</b>', III:'<b style="color:#D97706">Ⅲ类切口：治疗性使用。</b><br>肠道污染覆盖G-杆菌+厌氧菌<br>外伤根据污染程度选药，必要时覆盖MRSA', IV:'<b style="color:var(--danger)">Ⅳ类切口：治疗性使用。</b><br>已有感染，根据病原学结果选择敏感抗菌药物' }; r.style.display='block'; r.innerHTML=recs[cls]||'请选择切口类别'; }

// ═══ 化验数据（精简保留） ═══
const LAB_DATA=[{cat:'血常规',items:[{name:'WBC',ref:'3.5-9.5 ×10⁹/L',note:'↑感染 ↓骨髓抑制'},{name:'NEUT',ref:'1.8-6.3 ×10⁹/L',note:'<0.5粒缺风险'},{name:'Hb',ref:'130-175(男) 115-150(女) g/L',note:'<60需输血评估'},{name:'PLT',ref:'125-350 ×10⁹/L',note:'<50手术风险↑'},{name:'RBC',ref:'4.3-5.8(男) 3.8-5.1(女) ×10¹²/L'},{name:'HCT',ref:'40-50(男) 35-45(女) %'}]},{cat:'肝功能',items:[{name:'ALT',ref:'9-50 U/L(男) 7-40 U/L(女)',note:'>3倍ULN需关注'},{name:'AST',ref:'15-40 U/L',note:'AST/ALT>2酒精性'},{name:'GGT',ref:'10-60 U/L',note:'↑胆汁淤积/酒精'},{name:'ALP',ref:'45-125 U/L'},{name:'TBil',ref:'3.4-17.1 µmol/L',note:'>34黄疸可见'},{name:'Alb',ref:'40-55 g/L',note:'<30营养不良'}]},{cat:'肾功能',items:[{name:'Cr',ref:'59-104(男) 45-84(女) µmol/L'},{name:'BUN',ref:'2.9-8.2 mmol/L'},{name:'UA',ref:'208-428(男) 155-357(女) µmol/L'},{name:'eGFR',ref:'≥90 mL/min/1.73m²',note:'<60 CKD 3期'}]},{cat:'凝血',items:[{name:'PT',ref:'11-14.5秒'},{name:'INR',ref:'0.8-1.2',note:'华法林目标2.0-3.0'},{name:'APTT',ref:'28-43.5秒'},{name:'FIB',ref:'2.0-4.0 g/L'},{name:'D-二聚体',ref:'<0.5 mg/L'}]},{cat:'电解质',items:[{name:'K⁺',ref:'3.5-5.3 mmol/L',note:'<3.0/>6.0危急值'},{name:'Na⁺',ref:'137-147 mmol/L'},{name:'Cl⁻',ref:'99-110 mmol/L'},{name:'Ca²⁺',ref:'2.11-2.52 mmol/L'},{name:'Mg²⁺',ref:'0.75-1.02 mmol/L'},{name:'P',ref:'0.85-1.51 mmol/L'}]},{cat:'血糖',items:[{name:'FBG',ref:'3.9-6.1 mmol/L',note:'>7.0诊断DM'},{name:'餐后2h',ref:'<7.8 mmol/L',note:'>11.1诊断DM'},{name:'HbA1c',ref:'4.0-6.0%',note:'DM目标<7.0%'},{name:'随机血糖',ref:'<11.1 mmol/L'}]},{cat:'血脂',items:[{name:'TC',ref:'<5.2 mmol/L'},{name:'TG',ref:'<1.7 mmol/L',note:'>5.6胰腺炎风险'},{name:'HDL-C',ref:'>1.04 mmol/L'},{name:'LDL-C',ref:'<3.4 mmol/L',note:'高危<1.8'}]},{cat:'甲功',items:[{name:'TSH',ref:'0.27-4.2 mIU/L',note:'<0.1甲亢 >10甲减'},{name:'FT3',ref:'3.1-6.8 pmol/L'},{name:'FT4',ref:'12-22 pmol/L'}]},{cat:'心肌',items:[{name:'cTnI',ref:'<0.04 ng/mL'},{name:'CK-MB',ref:'<25 U/L'},{name:'BNP',ref:'<100 pg/mL',note:'>400心衰'},{name:'NT-proBNP',ref:'<125 pg/mL',note:'<300排除心衰'}]},{cat:'感染',items:[{name:'CRP',ref:'<5 mg/L',note:'>100严重感染'},{name:'PCT',ref:'<0.05 ng/mL',note:'>0.5细菌感染 >2脓毒症'},{name:'ESR',ref:'0-15(男) 0-20(女) mm/h'},{name:'IL-6',ref:'<7 pg/mL'}]},{cat:'尿常规',items:[{name:'PRO',ref:'阴性'},{name:'GLU',ref:'阴性'},{name:'KET',ref:'阴性'},{name:'BLD',ref:'阴性'},{name:'LEU',ref:'阴性'}]}];

function toggleLabCat(i){ const items=document.getElementById('lab-cat-'+i); const hdr=document.querySelectorAll('.lab-cat')[i]?.querySelector('[data-expanded]'); const arrow=hdr?.querySelector('.lab-cat-arrow'); if(items.style.display==='none'){ items.style.display='block'; if(hdr)hdr.dataset.expanded='true'; if(arrow)arrow.textContent='▼'; } else { items.style.display='none'; if(hdr)hdr.dataset.expanded='false'; if(arrow)arrow.textContent='▶'; } }
function filterLabTable(){ const kw=document.getElementById('lab-filter').value.toLowerCase(); document.querySelectorAll('.lab-item').forEach(item=>{ item.style.display=item.textContent.toLowerCase().includes(kw)?'flex':'none'; }); document.querySelectorAll('.lab-cat').forEach(cat=>{ const visible=cat.querySelectorAll('.lab-item[style*="flex"]').length>0||!kw; cat.style.display=visible?'block':'none'; }); }
