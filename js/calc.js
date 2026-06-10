// ═══ 计算工具 ═══
function renderCalc() {
  const c=document.getElementById('calc-content');
  c.innerHTML=`
    <div class="section-title" style="font-size:26px">计算工具</div>
    <div class="search-bar search-sm" style="margin-bottom:16px"><svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#94A3B8" stroke-width="2"/></svg><input id="calc-filter" placeholder="搜索工具…" oninput="filterCalcTools()"></div>
    <div id="calc-tools">
      ${buildChildWeight()}
      ${buildBSA()}
      ${buildPotency()}
      ${buildABXRenal()}
      ${buildPedDose()}
      ${buildSurgeryWound()}
      ${buildLabRef()}
    </div>
  `;
}

function filterCalcTools() {
  const kw=document.getElementById('calc-filter').value.toLowerCase();
  document.querySelectorAll('#calc-tools .detail-hero').forEach(el=>{
    el.style.display=el.textContent.toLowerCase().includes(kw)?'block':'none';
  });
}

function buildChildWeight(){ return `
<div class="detail-hero" style="margin-bottom:16px">
  <div style="font-size:17px;font-family:var(--font-heading);font-weight:700;color:var(--primary-dark)">👶 儿童体重估算</div>
  <div style="font-size:12px;color:var(--text-light);margin-bottom:8px">适用于无法称重时的体重估算</div>
  <div style="display:flex;gap:8px;margin-bottom:8px">
    <input id="cw-age" type="number" placeholder="年龄" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px">
    <select id="cw-unit" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px;border:1px solid var(--border)">
      <option value="year">岁</option><option value="month">月</option>
    </select>
  </div>
  <button class="btn btn-primary btn-full" onclick="calcChildWeight()">计算体重</button>
  <div id="cw-result" style="text-align:center;font-size:20px;font-weight:700;color:var(--primary);padding:10px;display:none"></div>
</div>`;}

function buildBSA(){ return `
<div class="detail-hero" style="margin-bottom:16px">
  <div style="font-size:17px;font-family:var(--font-heading);font-weight:700;color:var(--primary-dark)">📐 体表面积 BSA</div>
  <div style="font-size:12px;color:var(--text-light);margin-bottom:8px">基于 Mosteller 公式：√(身高×体重/3600)</div>
  <div style="display:flex;gap:8px;margin-bottom:8px">
    <input id="bsa-h" type="number" placeholder="身高 cm" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px" step="0.1">
    <input id="bsa-w" type="number" placeholder="体重 kg" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px" step="0.1">
  </div>
  <button class="btn btn-primary btn-full" onclick="calcBSA()">计算体表面积</button>
  <div id="bsa-result" style="text-align:center;font-size:20px;font-weight:700;color:var(--primary);padding:10px;display:none"></div>
</div>`;}

function buildPotency(){ return `
<div class="detail-hero" style="margin-bottom:16px">
  <div style="font-size:17px;font-family:var(--font-heading);font-weight:700;color:var(--primary-dark)">⚡ 抗生素效价单位换算</div>
  <div style="font-size:12px;color:var(--text-light);margin-bottom:8px">万单位 ↔ 毫克/克 换算（理论效价）</div>
  <div style="display:flex;gap:8px;margin-bottom:8px">
    <select id="pot-drug" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:14px;border:1px solid var(--border)">
      <option value="penK">青霉素G钾 (1mg≈1598U)</option>
      <option value="penNa">青霉素G钠 (1mg≈1670U)</option>
      <option value="genta">庆大霉素 (1mg≈590U)</option>
      <option value="vanco">万古霉素 (1mg≈1007U)</option>
      <option value="amika">阿米卡星 (1mg≈690U)</option>
      <option value="eryth">红霉素乳糖酸盐 (1mg≈672U)</option>
      <option value="polyB">多粘菌素B (1mg≈10000U)</option>
      <option value="strepto">链霉素 (1mg≈740U)</option>
    </select>
  </div>
  <div style="display:flex;gap:8px;margin-bottom:8px">
    <input id="pot-val" type="number" placeholder="输入数值" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px" step="0.01">
    <select id="pot-dir" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:14px;border:1px solid var(--border)">
      <option value="u2mg">万单位 → mg</option><option value="mg2u">mg → 万单位</option>
    </select>
  </div>
  <button class="btn btn-primary btn-full" onclick="calcPotency()">换算</button>
  <div id="pot-result" style="text-align:center;font-size:18px;font-weight:700;color:var(--primary);padding:10px;display:none"></div>
</div>`;}

function buildABXRenal(){ return `
<div class="detail-hero" style="margin-bottom:16px">
  <div style="font-size:17px;font-family:var(--font-heading);font-weight:700;color:var(--primary-dark)">💊 抗生素肾功剂量调整</div>
  <div style="font-size:12px;color:var(--text-light);margin-bottom:8px">基于肌酐清除率 CrCl 的剂量建议</div>
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
</div>`;}

function buildPedDose(){ return `
<div class="detail-hero" style="margin-bottom:16px">
  <div style="font-size:17px;font-family:var(--font-heading);font-weight:700;color:var(--primary-dark)">🍼 儿科用量计算</div>
  <div style="font-size:12px;color:var(--text-light);margin-bottom:8px">按体重单次/每日总量计算</div>
  <div style="display:flex;gap:8px;margin-bottom:8px">
    <input id="ped-w" type="number" placeholder="体重 kg" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px" step="0.1">
    <input id="ped-dose" type="number" placeholder="剂量 mg/kg/次" style="flex:1;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px" step="0.1">
  </div>
  <input id="ped-freq" type="number" placeholder="每日次数（默认3次）" style="width:100%;height:44px;background:var(--bg);border-radius:10px;padding:0 14px;font-size:15px;margin-bottom:8px" value="3">
  <button class="btn btn-primary btn-full" onclick="calcPed()">计算用量</button>
  <div id="ped-result" style="text-align:center;font-size:16px;font-weight:600;color:var(--primary);padding:10px;display:none"></div>
</div>`;}

function buildSurgeryWound(){ return `
<div class="detail-hero" style="margin-bottom:16px" id="surgery-ref">
  <div style="font-size:17px;font-family:var(--font-heading);font-weight:700;color:var(--primary-dark);cursor:pointer" onclick="toggleSurgeryTable()">🔪 手术切口分类 <span id="surg-arrow">▼</span></div>
  <div id="surgery-table" style="display:block">
    <div style="overflow-x:auto;font-size:12px;line-height:1.7">
      <table style="width:100%;border-collapse:collapse;margin-top:8px">
        <tr style="background:var(--bg)"><th style="padding:8px;text-align:left;font-weight:700;border-bottom:2px solid var(--border)">类别</th><th style="padding:8px;text-align:left;font-weight:700;border-bottom:2px solid var(--border)">定义</th><th style="padding:8px;text-align:left;font-weight:700;border-bottom:2px solid var(--border)">抗菌药使用</th></tr>
        <tr style="background:var(--muted)"><td style="padding:8px;border-bottom:1px solid var(--border);color:var(--primary);font-weight:600">Ⅰ 类切口</td><td style="padding:8px;border-bottom:1px solid var(--border)">清洁切口：未进入炎症区，未进入呼吸道/消化道/泌尿生殖道</td><td style="padding:8px;border-bottom:1px solid var(--border);color:var(--primary)">原则上不用</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid var(--border);color:var(--accent);font-weight:600">Ⅱ 类切口</td><td style="padding:8px;border-bottom:1px solid var(--border)">清洁-污染切口：进入呼吸道/消化道/泌尿生殖道但无明显污染</td><td style="padding:8px;border-bottom:1px solid var(--border);color:var(--accent)">预防用 ≤24h</td></tr>
        <tr style="background:var(--muted)"><td style="padding:8px;border-bottom:1px solid var(--border);color:#D97706;font-weight:600">Ⅲ 类切口</td><td style="padding:8px;border-bottom:1px solid var(--border)">污染切口：新鲜开放性创伤、胃肠道内容物溢出</td><td style="padding:8px;border-bottom:1px solid var(--border);color:#D97706">治疗性使用</td></tr>
        <tr><td style="padding:8px;color:var(--danger);font-weight:600">Ⅳ 类切口</td><td style="padding:8px;border-bottom:1px solid var(--border)">感染切口：陈旧创伤、化脓性感染、脏器穿孔</td><td style="padding:8px;border-bottom:1px solid var(--border);color:var(--danger)">治疗性使用</td></tr>
      </table>
    </div>
    <div style="font-size:11px;color:var(--text-light);margin-top:6px">来源：《抗菌药物临床应用指导原则》</div>
    <div style="display:flex;gap:6px;margin-top:8px">
      <select id="surg-class" style="flex:1;height:40px;background:var(--bg);border-radius:10px;padding:0 12px;font-size:14px;border:1px solid var(--border)">
        <option value="">-- 选择切口类别查询推荐 --</option>
        <option value="I">Ⅰ 类：清洁切口（如甲状腺、乳腺、疝修补）</option>
        <option value="II">Ⅱ 类：清洁-污染（如胃、胆道、子宫全切）</option>
        <option value="III">Ⅲ 类：污染（如结直肠手术、开放创伤）</option>
        <option value="IV">Ⅳ 类：感染切口</option>
      </select>
    </div>
    <button class="btn btn-primary btn-full" style="margin-top:8px" onclick="showSurgeryRec()">查看推荐</button>
    <div id="surg-rec-result" style="padding:10px;font-size:13px;color:var(--text-body);line-height:1.6;display:none;margin-top:8px;background:var(--bg);border-radius:10px"></div>
    <div class="review-tip" style="margin-top:10px">⚠️ 具体预防用药方案需结合患者情况、手术时长和医院流行病学数据综合判断</div>
  </div>
</div>`;}

// ═══ 计算函数 ═══
function calcChildWeight() {
  const age=parseFloat(document.getElementById('cw-age').value);
  const unit=document.getElementById('cw-unit').value;
  const r=document.getElementById('cw-result');
  if(!age||age<0){ r.textContent='请输入有效年龄'; r.style.display='block'; return; }
  let y=unit==='month'?age/12:age;
  let kg;
  if(y<=0.5) kg=3+(y*12)*0.7;
  else if(y<=1) kg=7+(y-0.5)*2;
  else if(y<=6) kg=y*2+8;
  else if(y<=12) kg=y*3+2;
  else kg='体重变异大，建议实际称重';
  r.style.display='block';
  r.innerHTML=typeof kg==='number'?`估算体重约 <b style="color:var(--accent)">${kg.toFixed(1)} kg</b>`:`${kg}`;
}

function calcBSA() {
  const h=parseFloat(document.getElementById('bsa-h').value);
  const w=parseFloat(document.getElementById('bsa-w').value);
  const r=document.getElementById('bsa-result');
  if(!h||!w){ r.textContent='请输入身高和体重'; r.style.display='block'; return; }
  const bsa=Math.pow(h*w/3600,0.5);
  r.style.display='block';
  r.innerHTML=`体表面积 <b style="color:var(--accent)">${bsa.toFixed(2)} m²</b>`;
}

function calcPotency() {
  const drug=document.getElementById('pot-drug').value;
  const val=parseFloat(document.getElementById('pot-val').value);
  const dir=document.getElementById('pot-dir').value;
  const r=document.getElementById('pot-result');
  if(!val){ r.textContent='请输入数值'; r.style.display='block'; return; }
  const potencies={penK:1598,penNa:1670,genta:590,vanco:1007,amika:690,eryth:672,polyB:10000,strepto:740};
  const pu=potencies[drug];
  let result,unit;
  if(dir==='u2mg'){ result=val*10000/pu; unit='mg'; }
  else { result=val*pu/10000; unit='万单位'; }
  r.style.display='block';
  r.innerHTML=`= <b style="color:var(--accent)">${result.toFixed(2)} ${unit}</b><div style="font-size:11px;color:var(--text-light);margin-top:4px">理论效价：1mg ≈ ${pu}U</div>`;
}

function calcABX() {
  const crcl=parseFloat(document.getElementById('crcl').value);
  const drug=document.getElementById('abx-drug').value;
  const r=document.getElementById('abx-result');
  if(!crcl){ r.textContent='请输入CrCl值'; r.style.display='block'; return; }
  const recs={
    amoxicillin:[{min:30,dose:'常规剂量 0.5g q8h',color:'var(--primary)'},{min:10,dose:'0.25-0.5g q12h',color:'var(--accent)'},{min:0,dose:'0.25g q24h',color:'var(--danger)'}],
    cefixime:[{min:60,dose:'常规剂量 0.1g bid',color:'var(--primary)'},{min:20,dose:'0.2g q24h',color:'var(--accent)'},{min:0,dose:'0.2g q48h',color:'var(--danger)'}],
    levofloxacin:[{min:50,dose:'常规剂量 0.5g qd',color:'var(--primary)'},{min:20,dose:'首剂0.5g，然后0.25g qd',color:'var(--accent)'},{min:0,dose:'首剂0.5g，然后0.25g q48h',color:'var(--danger)'}],
    vancomycin:[{min:80,dose:'常规剂量 1g q12h,监测血药浓度',color:'var(--primary)'},{min:50,dose:'1g q24h',color:'var(--accent)'},{min:10,dose:'根据血药浓度个体化',color:'var(--danger)'},{min:0,dose:'<b>慎用</b>',color:'var(--danger)'}],
    metformin:[{min:60,dose:'常规剂量',color:'var(--primary)'},{min:45,dose:'减量50%',color:'var(--accent)'},{min:30,dose:'减量75%',color:'var(--danger)'},{min:0,dose:'<b>禁用</b>',color:'var(--danger)'}]
  };
  const rec=recs[drug].find(rr=>crcl>=rr.min)||recs[drug][recs[drug].length-1];
  r.style.display='block';
  r.innerHTML=`<div>CrCl = <b>${crcl} mL/min</b></div><div style="color:${rec.color};font-weight:600;margin-top:6px">→ ${rec.dose}</div><div style="font-size:11px;color:var(--text-light);margin-top:4px">⚠️ 仅供参考，具体请参照药品说明书</div>`;
}

function calcPed() {
  const w=parseFloat(document.getElementById('ped-w').value);
  const dose=parseFloat(document.getElementById('ped-dose').value);
  const freq=parseInt(document.getElementById('ped-freq').value)||3;
  const r=document.getElementById('ped-result');
  if(!w||!dose){ r.textContent='请输入体重和剂量'; r.style.display='block'; return; }
  const perDose=w*dose;
  const daily=perDose*freq;
  r.style.display='block';
  r.innerHTML=`每次用量: <b style="color:var(--accent)">${perDose.toFixed(1)} mg</b><br>每日总量 (×${freq}): <b style="color:var(--primary)">${daily.toFixed(1)} mg</b>`;
}

function toggleSurgeryTable() {
  const tbl=document.getElementById('surgery-table');
  const arr=document.getElementById('surg-arrow');
  if(tbl.style.display==='none'){ tbl.style.display='block'; arr.textContent='▼'; }
  else { tbl.style.display='none'; arr.textContent='▶'; }
}

function showSurgeryRec() {
  const cls=document.getElementById('surg-class').value;
  const r=document.getElementById('surg-rec-result');
  const recs={
    I:'<b style="color:var(--primary)">Ⅰ类切口：原则上不预防用抗菌药物。</b><br>特殊情况（高龄、免疫功能低下、手术时间长等）可选用<b>头孢唑林</b>或<b>头孢呋辛</b>，术前30-60min单次给药。',
    II:'<b style="color:var(--accent)">Ⅱ类切口：建议预防用药。</b><br>• 胃十二指肠/胆道：<b>头孢唑林</b>或<b>头孢呋辛</b><br>• 结直肠/阑尾：<b>头孢西丁</b>或<b>头孢曲松+甲硝唑</b><br>• 妇科：<b>头孢唑林</b>±<b>甲硝唑</b><br>术前30-60min，一般≤24h。',
    III:'<b style="color:#D97706">Ⅲ类切口：治疗性使用抗菌药物。</b><br>根据污染源和可能致病菌选择：<br>• 肠道污染：覆盖G-杆菌+厌氧菌<br>• 外伤：根据污染程度选药，必要时覆盖MRSA',
    IV:'<b style="color:var(--danger)">Ⅳ类切口：治疗性使用。</b><br>已有感染，需根据病原学结果选择敏感抗菌药物，疗程视感染控制情况而定。'
  };
  r.style.display='block';
  r.innerHTML=recs[cls]||'请选择切口类别';
}

// ═══ 化验指标参考值 ═══
const LAB_DATA = [
  {cat:'血常规',items:[
    {name:'白细胞 WBC',ref:'3.5-9.5 ×10⁹/L',unit:'×10⁹/L',low:'<3.5',high:'>9.5',note:'↑感染/炎症/应激 ↓骨髓抑制/病毒感染'},
    {name:'中性粒细胞 NEUT',ref:'1.8-6.3 ×10⁹/L',unit:'×10⁹/L',low:'<1.8',high:'>6.3',note:'↓<0.5粒缺风险'},
    {name:'血红蛋白 Hb',ref:'130-175(男) 115-150(女) g/L',unit:'g/L',low:'<130/115',high:'>175/150',note:'<60需输血评估'},
    {name:'血小板 PLT',ref:'125-350 ×10⁹/L',unit:'×10⁹/L',low:'<125',high:'>350',note:'<50手术风险↑ <20自发出血'},
    {name:'红细胞 RBC',ref:'4.3-5.8(男) 3.8-5.1(女) ×10¹²/L',unit:'×10¹²/L',low:'<4.3/3.8',high:'>5.8/5.1'},
    {name:'红细胞比容 HCT',ref:'40-50(男) 35-45(女) %',unit:'%',low:'<40/35',high:'>50/45'},
  ]},
  {cat:'肝功能',items:[
    {name:'ALT 谷丙转氨酶',ref:'9-50 U/L(男) 7-40 U/L(女)',unit:'U/L',low:'—',high:'>3×ULN',note:'>3倍上限需关注'},
    {name:'AST 谷草转氨酶',ref:'15-40 U/L',unit:'U/L',low:'—',high:'>3×ULN',note:'AST/ALT>2提示酒精性肝损伤'},
    {name:'GGT γ-谷氨酰转移酶',ref:'10-60 U/L',unit:'U/L',low:'—',high:'>3×ULN',note:'↑胆汁淤积/酒精'},
    {name:'ALP 碱性磷酸酶',ref:'45-125 U/L',unit:'U/L',low:'—',high:'>125',note:'↑骨病/胆汁淤积'},
    {name:'TBil 总胆红素',ref:'3.4-17.1 µmol/L',unit:'µmol/L',low:'—',high:'>17.1',note:'>34黄疸可见'},
    {name:'Alb 白蛋白',ref:'40-55 g/L',unit:'g/L',low:'<35',high:'—',note:'<30提示营养不良'},
  ]},
  {cat:'肾功能',items:[
    {name:'Cr 肌酐',ref:'59-104(男) 45-84(女) µmol/L',unit:'µmol/L',low:'—',high:'>104/84',note:'用于计算CrCl/eGFR'},
    {name:'BUN 尿素氮',ref:'2.9-8.2 mmol/L',unit:'mmol/L',low:'—',high:'>8.2'},
    {name:'UA 尿酸',ref:'208-428(男) 155-357(女) µmol/L',unit:'µmol/L',low:'—',high:'>428/357'},
    {name:'eGFR',ref:'≥90 mL/min/1.73m²',unit:'mL/min/1.73m²',low:'<60',high:'—',note:'<60 CKD 3期 <15 ESRD'},
  ]},
  {cat:'凝血功能',items:[
    {name:'PT 凝血酶原时间',ref:'11-14.5 秒',unit:'秒',low:'—',high:'>3秒延长',note:'INR=PT比值^ISI'},
    {name:'INR 国际标准化比值',ref:'0.8-1.2',unit:'—',low:'—',high:'>3.0',note:'华法林目标2.0-3.0'},
    {name:'APTT 活化部分凝血活酶时间',ref:'28-43.5 秒',unit:'秒',low:'—',high:'>10秒延长',note:'肝素监测'},
    {name:'FIB 纤维蛋白原',ref:'2.0-4.0 g/L',unit:'g/L',low:'<1.5',high:'—',note:'<1.0出血风险'},
    {name:'D-二聚体',ref:'<0.5 mg/L',unit:'mg/L',low:'—',high:'>0.5',note:'↑血栓/炎症/术后'},
  ]},
  {cat:'电解质',items:[
    {name:'K⁺ 钾',ref:'3.5-5.3 mmol/L',unit:'mmol/L',low:'<3.5',high:'>5.3',note:'<3.0/ >6.0危急值'},
    {name:'Na⁺ 钠',ref:'137-147 mmol/L',unit:'mmol/L',low:'<135',high:'>147',note:'<120危险 >160危险'},
    {name:'Cl⁻ 氯',ref:'99-110 mmol/L',unit:'mmol/L',low:'<99',high:'>110'},
    {name:'Ca²⁺ 钙',ref:'2.11-2.52 mmol/L',unit:'mmol/L',low:'<2.11',high:'>2.75',note:'白蛋白校正钙'},
    {name:'Mg²⁺ 镁',ref:'0.75-1.02 mmol/L',unit:'mmol/L',low:'<0.75',high:'>1.02'},
    {name:'P 磷',ref:'0.85-1.51 mmol/L',unit:'mmol/L',low:'<0.85',high:'>1.51'},
  ]},
  {cat:'血糖/代谢',items:[
    {name:'空腹血糖 FBG',ref:'3.9-6.1 mmol/L',unit:'mmol/L',low:'<3.9',high:'≥7.0',note:'>7.0诊断DM'},
    {name:'餐后2h血糖',ref:'<7.8 mmol/L',unit:'mmol/L',low:'—',high:'≥11.1',note:'>11.1诊断DM'},
    {name:'HbA1c 糖化血红蛋白',ref:'4.0-6.0 %',unit:'%',low:'—',high:'>7.0',note:'DM控制目标<7.0%'},
    {name:'随机血糖',ref:'<11.1 mmol/L',unit:'mmol/L',low:'<3.9',high:'≥11.1'},
  ]},
  {cat:'血脂',items:[
    {name:'TC 总胆固醇',ref:'<5.2 mmol/L',unit:'mmol/L',low:'—',high:'≥6.2',note:'理想<4.5'},
    {name:'TG 甘油三酯',ref:'<1.7 mmol/L',unit:'mmol/L',low:'—',high:'≥2.3',note:'>5.6胰腺炎风险'},
    {name:'HDL-C 高密度脂蛋白',ref:'>1.04 mmol/L',unit:'mmol/L',low:'<1.04',high:'—'},
    {name:'LDL-C 低密度脂蛋白',ref:'<3.4 mmol/L',unit:'mmol/L',low:'—',high:'≥4.1',note:'高危<1.8'},
  ]},
  {cat:'甲状腺功能',items:[
    {name:'TSH 促甲状腺激素',ref:'0.27-4.2 mIU/L',unit:'mIU/L',low:'<0.27',high:'>4.2',note:'<0.1甲亢 >10甲减'},
    {name:'FT3 游离T3',ref:'3.1-6.8 pmol/L',unit:'pmol/L',low:'<3.1',high:'>6.8'},
    {name:'FT4 游离T4',ref:'12-22 pmol/L',unit:'pmol/L',low:'<12',high:'>22'},
  ]},
  {cat:'心肌标志物',items:[
    {name:'cTnI 高敏肌钙蛋白I',ref:'<0.04 ng/mL',unit:'ng/mL',low:'—',high:'>0.04',note:'动态变化诊断MI'},
    {name:'CK-MB 肌酸激酶同工酶',ref:'<25 U/L',unit:'U/L',low:'—',high:'>25'},
    {name:'BNP B型钠尿肽',ref:'<100 pg/mL',unit:'pg/mL',low:'—',high:'>400',note:'>400心衰可能性大'},
    {name:'NT-proBNP',ref:'<125 pg/mL(<75岁) <450(≥75岁)',unit:'pg/mL',low:'—',high:'>450',note:'排除心衰<300'},
    {name:'MYO 肌红蛋白',ref:'<70 ng/mL',unit:'ng/mL',low:'—',high:'>70',note:'AMI早期升高'},
  ]},
  {cat:'感染指标',items:[
    {name:'CRP C反应蛋白',ref:'<5 mg/L',unit:'mg/L',low:'—',high:'>10',note:'>100提示严重感染'},
    {name:'PCT 降钙素原',ref:'<0.05 ng/mL',unit:'ng/mL',low:'—',high:'>0.5',note:'>0.5提示细菌感染 >2提示脓毒症'},
    {name:'ESR 血沉',ref:'0-15(男) 0-20(女) mm/h',unit:'mm/h',low:'—',high:'>15/20'},
    {name:'IL-6 白介素-6',ref:'<7 pg/mL',unit:'pg/mL',low:'—',high:'>7'},
  ]},
  {cat:'尿常规',items:[
    {name:'尿蛋白 PRO',ref:'阴性(<0.15g/24h)',unit:'—',low:'—',high:'阳性'},
    {name:'尿糖 GLU',ref:'阴性',unit:'—',low:'—',high:'阳性',note:'肾糖阈≈10mmol/L'},
    {name:'尿酮体 KET',ref:'阴性',unit:'—',low:'—',high:'阳性',note:'↑糖尿病/饥饿'},
    {name:'尿潜血 BLD',ref:'阴性',unit:'—',low:'—',high:'阳性'},
    {name:'尿白细胞 LEU',ref:'阴性',unit:'—',low:'—',high:'阳性',note:'↑泌尿道感染'},
  ]},
];

function buildLabRef(){ return `
<div class="detail-hero" style="margin-bottom:16px" id="lab-ref">
  <div style="font-size:17px;font-family:var(--font-heading);font-weight:700;color:var(--primary-dark);cursor:pointer" onclick="toggleLabTable()">🩸 化验指标参考值 <span id="lab-arrow">▼</span></div>
  <div id="lab-table" style="display:block">
    <div class="search-bar search-sm" style="margin-top:10px"><svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#94A3B8" stroke-width="2"/></svg><input id="lab-filter" placeholder="搜索化验项目…" oninput="filterLabTable()"></div>
    <div id="lab-content">${LAB_DATA.map((cat,i)=>`
      <div class="lab-cat" style="margin-top:12px">
        <div style="font-size:14px;font-family:var(--font-heading);font-weight:700;color:var(--primary);cursor:pointer;padding:8px 0;border-bottom:2px solid var(--border)" onclick="toggleLabCat(${i})" data-expanded="true">
          ${cat.cat} <span style="font-size:12px;color:var(--text-light)">(${cat.items.length}项)</span> <span class="lab-cat-arrow" style="float:right">▼</span>
        </div>
        <div class="lab-cat-items" id="lab-cat-${i}">
          ${cat.items.map(item=>`<div class="lab-item" style="display:flex;padding:10px 0;border-bottom:1px solid var(--border);font-size:12px;align-items:flex-start">
            <div style="flex:1;font-weight:600;color:var(--primary-dark)">${item.name}</div>
            <div style="flex:2;color:var(--text-body);text-align:center"><b>${item.ref}</b></div>
            <div style="flex:1.5;font-size:11px;color:var(--text-light)">${item.note||''}</div>
          </div>`).join('')}
        </div>
      </div>
    `).join('')}</div>
    <div style="font-size:10px;color:var(--text-light);margin-top:12px;text-align:center">参考值来源于国内通用标准，具体以本院检验科范围为准。⚠️ 仅供快速查阅，不替代检验报告判读。</div>
  </div>
</div>`;}

function toggleLabTable() {
  const tbl=document.getElementById('lab-table');
  const arr=document.getElementById('lab-arrow');
  if(tbl.style.display==='none'){ tbl.style.display='block'; arr.textContent='▼'; }
  else { tbl.style.display='none'; arr.textContent='▶'; }
}

function toggleLabCat(i) {
  const items=document.getElementById('lab-cat-'+i);
  const hdr=document.querySelectorAll('.lab-cat')[i].querySelector('[data-expanded]');
  const arrow=hdr?.querySelector('.lab-cat-arrow');
  if(items.style.display==='none'){ items.style.display='block'; hdr.dataset.expanded='true'; if(arrow)arrow.textContent='▼'; }
  else { items.style.display='none'; hdr.dataset.expanded='false'; if(arrow)arrow.textContent='▶'; }
}

function filterLabTable() {
  const kw=document.getElementById('lab-filter').value.toLowerCase();
  document.querySelectorAll('.lab-item').forEach(item=>{
    item.style.display=item.textContent.toLowerCase().includes(kw)?'flex':'none';
  });
  document.querySelectorAll('.lab-cat').forEach(cat=>{
    const visible=cat.querySelectorAll('.lab-item[style*="flex"]').length>0||!kw;
    cat.style.display=visible?'block':'none';
  });
}
