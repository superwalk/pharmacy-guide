// ═══ 药品分类 ═══
const DRUG_CATEGORIES = [
  { id:'antimicrobial', name:'抗微生物药', subs:['抗生素','抗病毒药','抗真菌药'] },
  { id:'oncology', name:'抗肿瘤药', subs:['化疗药','靶向药','免疫治疗药','辅助用药'] },
  { id:'cardiovascular', name:'心血管系统用药', subs:['降压药','调脂药','抗心律失常药','抗心衰药'] },
  { id:'digestive', name:'消化系统用药', subs:['抗酸药','胃黏膜保护剂','止吐药','止泻药'] },
  { id:'nervous', name:'神经系统用药', subs:['镇静催眠药','抗抑郁药','抗帕金森药','抗癫痫药'] },
  { id:'respiratory', name:'呼吸系统用药', subs:['平喘药','镇咳药','祛痰药','抗组胺药'] },
  { id:'endocrine', name:'内分泌系统用药', subs:['降糖药','甲状腺用药','激素类'] },
  { id:'analgesic', name:'解热镇痛药', subs:['非甾体抗炎药','阿片类','抗痛风药'] },
  { id:'dermatology', name:'皮肤科用药', subs:['抗过敏药','激素类外用药','抗真菌外用药','维A酸类'] },
  { id:'urology', name:'男科/泌尿科用药', subs:['前列腺用药','勃起功能障碍药','利尿剂'] },
  { id:'gynecology', name:'妇产科用药', subs:['激素类','抗感染药','子宫收缩药','避孕药'] },
  { id:'ent', name:'五官科用药', subs:['眼科用药','耳鼻喉用药'] },
  { id:'nutrition', name:'营养支持药', subs:['维生素类','电解质','肠内营养','肠外营养'] },
  { id:'hematology', name:'血液系统用药', subs:['抗凝药','止血药','抗贫血药'] },
];

// ═══ 疾病分类 ═══
const DISEASE_CATEGORIES = [
  { id:'resp_disease', name:'呼吸系统疾病', subs:['社区获得性肺炎','COPD','支气管哮喘','肺结核'] },
  { id:'cardio_disease', name:'心血管疾病', subs:['高血压','心力衰竭','冠心病','心律失常'] },
  { id:'digest_disease', name:'消化系统疾病', subs:['胃溃疡','反流性食管炎','肝硬化','胰腺炎'] },
  { id:'endo_disease', name:'内分泌疾病', subs:['2型糖尿病','甲亢','甲减','痛风'] },
  { id:'neuro_disease', name:'神经系统疾病', subs:['脑卒中','癫痫','帕金森病','偏头痛'] },
  { id:'onco_disease', name:'肿瘤疾病', subs:['肺癌','乳腺癌','胃癌','结直肠癌','肝癌'] },
  { id:'skin_disease', name:'皮肤疾病', subs:['湿疹','银屑病','荨麻疹','痤疮'] },
  { id:'uro_disease', name:'泌尿系统疾病', subs:['前列腺增生','尿路感染','肾炎','肾结石'] },
  { id:'gyn_disease', name:'妇产科疾病', subs:['月经失调','更年期综合征','盆腔炎'] },
  { id:'ent_disease', name:'五官科疾病', subs:['鼻炎','中耳炎','青光眼','白内障'] },
];

// ═══ 药品数据 ═══
const DRUGS = [
  { id:'d001', name:'阿莫西林胶囊', en:'Amoxicillin Capsules', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'适用于敏感菌所致的呼吸道感染、泌尿生殖道感染、皮肤软组织感染、急性单纯性淋病、伤寒等。',
    contraindications:'对青霉素过敏者禁用。用药前必须进行青霉素皮肤试验，阳性反应者禁用。',
    adverse:'常见：恶心、呕吐、腹泻等胃肠道反应；偶见：皮疹、药物热、哮喘等过敏反应；罕见：伪膜性肠炎。',
    dosage:'口服。成人一次0.5g，每6~8小时1次，一日剂量不超过4g。小儿一日剂量按体重20~40mg/kg，每8小时1次。',
    storage:'遮光，密封，在阴凉干燥处（不超过20℃）保存。',
    interactions:'丙磺舒可竞争性抑制本药肾小管分泌；与氨基糖苷类合用可增强杀菌作用；与避孕药合用可能降低避孕效果。',
    label:`【药品名称】通用名称：阿莫西林胶囊 英文名称：Amoxicillin Capsules\n【成份】主要成份为阿莫西林。\n【性状】本品为胶囊剂，内容物为白色或类白色粉末。\n【适应症】适用于敏感菌所致的呼吸道感染、泌尿生殖道感染等。\n【用法用量】口服。成人一次0.5g，每6~8小时1次，一日不超过4g。\n【不良反应】常见胃肠道反应，偶见过敏反应。\n【禁忌】青霉素过敏者禁用。\n【注意事项】用药前须做皮试。肾功能不全者需调整剂量。\n【药物相互作用】与丙磺舒合用可延长半衰期；与氨基糖苷类有协同作用。\n【贮藏】遮光，密封，阴凉干燥处保存。\n【批准文号】国药准字H......` },
  { id:'d002', name:'头孢克肟胶囊', en:'Cefixime Capsules', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'适用于敏感菌所致的呼吸道感染、泌尿道感染、胆道感染、中耳炎等。',
    contraindications:'对头孢菌素类过敏者禁用。有青霉素过敏性休克史者慎用。',
    adverse:'偶见腹泻、恶心、皮疹、一过性肝功能异常。',
    dosage:'成人及体重30kg以上儿童：一次0.1g，一日2次。',
    storage:'遮光，密封，阴凉干燥处保存。',
    interactions:'与氨基糖苷类合用可能增加肾毒性。与抗凝药合用可能增加出血风险。' },
  { id:'d003', name:'左氧氟沙星片', en:'Levofloxacin Tablets', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'适用于敏感菌所致的社区获得性肺炎、复杂性尿路感染、慢性支气管炎急性发作等。',
    contraindications:'对喹诺酮类药物过敏者、癫痫患者、18岁以下禁用。',
    adverse:'常见恶心、腹泻、头晕、失眠；偶见肌腱炎、QT间期延长。',
    dosage:'成人一次0.5g，一日1次。',
    storage:'遮光，密封，阴凉处保存。',
    interactions:'与含金属离子药物（铁剂、铝剂）合用影响吸收，需间隔2小时以上。' },
  { id:'d004', name:'硝苯地平控释片', en:'Nifedipine Controlled-release', category:'心血管系统用药', subcategory:'降压药', type:'处方药',
    indications:'用于治疗高血压、心绞痛（慢性稳定性心绞痛及变异型心绞痛）。',
    contraindications:'心源性休克、严重主动脉瓣狭窄、不稳定心绞痛急性发作期。',
    adverse:'常见头痛、面部潮红、踝部水肿、心悸。',
    dosage:'一次30mg，一日1次。整片吞服，不可掰开。',
    storage:'遮光，密封，不超过25℃保存。',
    interactions:'与CYP3A4抑制剂（如葡萄柚汁）合用可能升高血药浓度。与β受体阻滞剂合用可能加重心衰。' },
  { id:'d005', name:'二甲双胍片', en:'Metformin Tablets', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药',
    indications:'用于单纯饮食控制不满意的2型糖尿病患者，尤其是肥胖和伴高胰岛素血症者。',
    contraindications:'严重肾功能不全（eGFR<30）、糖尿病酮症酸中毒、严重感染时禁用。',
    adverse:'常见胃肠道反应（恶心、腹泻）；长期使用可能影响维生素B12吸收。',
    dosage:'起始剂量一次0.25g，一日2-3次，随餐服用；最大剂量一日2g。',
    storage:'密封保存。',
    interactions:'碘造影剂检查前需暂停本药。与酒精合用可能增加乳酸酸中毒风险。' },
  { id:'d006', name:'奥美拉唑肠溶片', en:'Omeprazole Enteric-coated', category:'消化系统用药', subcategory:'抗酸药', type:'处方药',
    indications:'用于胃溃疡、十二指肠溃疡、反流性食管炎、卓-艾综合征。',
    contraindications:'对本药过敏者禁用。',
    adverse:'常见头痛、腹泻、恶心；长期使用可能增加骨折风险和维生素B12缺乏。',
    dosage:'一次20mg，一日1-2次。晨起吞服，不可咀嚼。',
    storage:'遮光，密封，阴凉干燥处保存。',
    interactions:'与氯吡格雷合用可能降低后者抗血小板效果。影响胃酸依赖药物（如酮康唑）的吸收。' },
  { id:'d007', name:'阿司匹林肠溶片', en:'Aspirin Enteric-coated', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'OTC',
    indications:'抑制血小板聚集，用于预防心脑血管疾病。也用于解热镇痛。',
    contraindications:'活动性消化性溃疡、出血倾向者、哮喘患者。',
    adverse:'常见胃肠道反应、出血时间延长；偶见过敏反应。',
    dosage:'抗血小板：一次100mg，一日1次。解热镇痛：一次0.3-0.6g。',
    storage:'密封，阴凉干燥处保存。',
    interactions:'与其他NSAIDs合用增加胃溃疡风险；与抗凝药合用增加出血风险。' },
  { id:'d008', name:'氯雷他定片', en:'Loratadine Tablets', category:'呼吸系统用药', subcategory:'抗组胺药', type:'OTC',
    indications:'用于缓解过敏性鼻炎症状，如喷嚏、流涕、鼻痒及眼部症状。也用于慢性荨麻疹。',
    contraindications:'对本药过敏者禁用。',
    adverse:'罕见乏力、头痛、口干。无明显镇静作用。',
    dosage:'成人及12岁以上儿童：一次10mg，一日1次。',
    storage:'密封保存。',
    interactions:'与酮康唑、红霉素合用可能升高氯雷他定血药浓度。' },
  { id:'d009', name:'阿托伐他汀钙片', en:'Atorvastatin Calcium', category:'心血管系统用药', subcategory:'调脂药', type:'处方药',
    indications:'用于高胆固醇血症和混合型高脂血症，降低心血管事件风险。',
    contraindications:'活动性肝病、不明原因转氨酶持续升高、妊娠及哺乳期。',
    adverse:'常见肌痛、腹泻；偶见肝功能异常、肌酸激酶升高。',
    dosage:'起始剂量10-20mg，一日1次，晚餐后服用。',
    storage:'遮光，密封保存。',
    interactions:'与吉非罗齐合用增加肌病风险。与环孢素、克拉霉素合用需调整剂量。' },
  { id:'d010', name:'氢氯噻嗪片', en:'Hydrochlorothiazide', category:'心血管系统用药', subcategory:'利尿剂', type:'处方药',
    indications:'用于水肿性疾病、高血压、尿崩症。',
    contraindications:'无尿者、磺胺过敏者。',
    adverse:'电解质紊乱（低钾、低钠）、高尿酸血症、血糖升高。',
    dosage:'降压：一次12.5-25mg，一日1次。',
    storage:'遮光，密封保存。',
    interactions:'与洋地黄类合用注意低钾风险；与降糖药合用可能影响降糖效果。' },
];

// ═══ 指南数据 ═══
const GUIDELINES = [
  { id:'g001', system:'心血管系统', title:'中国高血压防治指南 2024', year:'2024', content:`一、诊断标准
在未使用降压药物的情况下，非同日3次测量诊室血压，SBP≥140mmHg和/或DBP≥90mmHg。

二、血压分级
• 正常血压：<120/80
• 正常高值：120-139/80-89
• 1级高血压：140-159/90-99
• 2级高血压：160-179/100-109
• 3级高血压：≥180/110
• 单纯收缩期高血压：≥140/<90

三、治疗目标
一般患者：<140/90mmHg
高龄（≥80岁）：<150/90mmHg
合并糖尿病/肾病：<130/80mmHg

四、药物选择
推荐五大类降压药：ACEI/ARB、CCB、利尿剂、β受体阻滞剂。初始治疗可单药或联合用药。联合方案推荐：ACEI/ARB + CCB + 利尿剂。` },
  { id:'g002', system:'心血管系统', title:'心力衰竭诊疗指南 2023', year:'2023', content:`一、分类
• HFrEF（射血分数降低的心衰）：LVEF≤40%
• HFimpEF（射血分数改善的心衰）
• HFmrEF（射血分数轻度降低）：LVEF 41-49%
• HFpEF（射血分数保留的心衰）：LVEF≥50%

二、新四联药物治疗
• ARNI/ACEI/ARB（首选ARNI沙库巴曲缬沙坦）
• β受体阻滞剂（比索洛尔、美托洛尔缓释片）
• 醛固酮受体拮抗剂（螺内酯、依普利酮）
• SGLT2抑制剂（达格列净、恩格列净）

三、治疗流程
尽早启动四联药物，逐步滴定至靶剂量。定期监测肾功能、电解质、血压、心率。` },
  { id:'g003', system:'心血管系统', title:'中国血脂管理指南 2023', year:'2023', content:`一、血脂检测
20-40岁成年人至少每5年检测1次；40岁以上男性和绝经后女性每年检测1次。

二、LDL-C目标分层
• 极高危：<1.4mmol/L（ASCVD、糖尿病合并靶器官损害）
• 高危：<1.8mmol/L（糖尿病、严重高血压）
• 中危：<2.6mmol/L
• 低危：<3.4mmol/L

三、药物选择
• 他汀类为一线药物
• 他汀不耐受可选用依折麦布
• LDL-C不达标加用PCSK9抑制剂
• 高甘油三酯可选用非诺贝特` },
  { id:'g004', system:'心血管系统', title:'抗血小板治疗中国专家共识', year:'2022', content:`一、急性冠脉综合征（ACS）
• 双联抗血小板（DAPT）：阿司匹林+P2Y12抑制剂
• 稳定型冠心病：阿司匹林单药
• DAPT疗程：一般12个月，高出血风险缩短至3-6个月

二、药物选择
• 阿司匹林：负荷量300mg，维持量100mg qd
• 氯吡格雷：负荷量300-600mg，维持量75mg qd
• 替格瑞洛：负荷量180mg，维持量90mg bid

三、出血风险管理
• 评估CRUSADE评分
• 联合PPI降低消化道出血风险` },
  { id:'g005', system:'呼吸系统', title:'社区获得性肺炎诊治指南', year:'2023', content:`一、诊断标准
• 新出现的咳嗽、咳痰或原有呼吸道症状加重
• 发热（体温≥38℃）
• 肺实变体征和/或湿性啰音
• WBC>10×10⁹/L或<4×10⁹/L
• 胸部影像学显示新的浸润影

二、严重程度评估（CURB-65）
• C：意识障碍 1分
• U：BUN>7mmol/L 1分
• R：呼吸频率≥30次/分 1分
• B：SBP<90或DBP≤60 1分
• 65：年龄≥65岁 1分
≥3分建议住院，≥4分考虑ICU

三、经验性治疗
• 门诊无基础疾病：阿莫西林或多西环素
• 门诊有基础疾病：阿莫西林克拉维酸或头孢类+大环内酯
• 住院非ICU：头孢曲松+阿奇霉素
• ICU：抗假单胞菌β内酰胺+阿奇霉素或呼吸喹诺酮` },
  { id:'g006', system:'呼吸系统', title:'COPD诊治指南 2024', year:'2024', content:`一、诊断标准
• 危险因素暴露（吸烟、职业粉尘）
• 慢性咳嗽、咳痰、呼吸困难
• 肺功能：FEV1/FVC<0.70

二、GOLD分级
• GOLD 1（轻度）：FEV1≥80%预计值
• GOLD 2（中度）：50%≤FEV1<80%
• GOLD 3（重度）：30%≤FEV1<50%
• GOLD 4（极重度）：FEV1<30%

三、治疗策略
• 稳定期：LABA/LAMA双支气管扩张剂为基础，频繁加重加ICS
• 急性加重：短效支扩剂+SABA/SAMA雾化，必要时全身糖皮质激素+抗生素` },
  { id:'g007', system:'呼吸系统', title:'支气管哮喘防治指南', year:'2023', content:`一、诊断
• 反复发作喘息、气急、胸闷或咳嗽
• 发作时双肺散在哮鸣音
• 可变气流受限证据

二、GINA阶梯治疗
Step 1：按需低剂量ICS-福莫特罗
Step 2：低剂量ICS
Step 3：低剂量ICS-LABA
Step 4：中剂量ICS-LABA
Step 5：高剂量ICS-LABA + 附加治疗

三、急性发作处理
• 轻中度：SABA雾化
• 中重度：SABA+SAMA雾化，口服激素
• 危重：评估呼吸衰竭` },
  { id:'g008', system:'消化系统', title:'消化性溃疡诊疗规范', year:'2022', content:`一、病因
• 幽门螺杆菌感染（最常见）
• NSAIDs等药物
• 胃酸和胃蛋白酶

二、Hp根除方案（四联疗法）
• 铋剂+PPI+阿莫西林+克拉霉素（14天）
• 铋剂+PPI+阿莫西林+甲硝唑（14天）
• 铋剂+PPI+阿莫西林+四环素（14天）

三、PPI应用
• 标准剂量PPI qd-bid
• 疗程：十二指肠溃疡4周，胃溃疡6-8周
• 根除Hp后继续PPI至溃疡愈合` },
  { id:'g009', system:'内分泌系统', title:'中国2型糖尿病防治指南', year:'2024', content:`一、诊断标准
• 空腹血糖≥7.0mmol/L
• OGTT 2h血糖≥11.1mmol/L
• HbA1c≥6.5%
• 典型症状+随机血糖≥11.1mmol/L

二、控制目标
• HbA1c<7.0%（一般患者）
• 空腹血糖4.4-7.0mmol/L
• 餐后血糖<10.0mmol/L

三、药物选择路线
• 一线：二甲双胍（无禁忌）
• 合并ASCVD/心衰：SGLT2抑制剂或GLP-1受体激动剂
• 合并CKD：SGLT2抑制剂
• 二联/三联/胰岛素逐步升级` },
  { id:'g010', system:'内分泌系统', title:'痛风诊疗指南', year:'2023', content:`一、诊断
• 高尿酸血症：非同日2次空腹SUA>420μmol/L
• 痛风：特征性关节炎+高尿酸血症+关节液尿酸盐结晶

二、急性期治疗
• NSAIDs（吲哚美辛、双氯芬酸、塞来昔布）
• 秋水仙碱：首剂1mg，1h后0.5mg
• 糖皮质激素（上述禁忌时）

三、降尿酸治疗
• 目标：SUA<360μmol/L（有痛风石<300）
• 抑制生成：别嘌醇（起始50-100mg qd）、非布司他
• 促进排泄：苯溴马隆
• 急性期不启动降尿酸治疗，已使用者不中断` },
];

// ═══ 法规数据 ═══
const LAWS = [
  { id:'l001', title:'处方管理办法', year:'2007', content:'规定了处方的开具、调配、保管等相关要求...' },
  { id:'l002', title:'抗菌药物临床应用管理办法', year:'2012', content:'抗菌药物分级管理制度（非限制使用级、限制使用级、特殊使用级）...' },
  { id:'l003', title:'麻醉药品和精神药品管理条例', year:'2005', content:'麻精药品的种植、生产、经营、使用、储存、运输管理规定...' },
  { id:'l004', title:'药品管理法', year:'2019', content:'药品研制、生产、经营、使用和监督管理的基本法律...' },
];

// ═══ 指南按系统分组 ═══
const GUIDE_SYSTEMS = [
  { system:'心血管系统', icon:'❤️', items:GUIDELINES.filter(g=>g.system==='心血管系统') },
  { system:'呼吸系统', icon:'🫁', items:GUIDELINES.filter(g=>g.system==='呼吸系统') },
  { system:'消化系统', icon:'🫄', items:GUIDELINES.filter(g=>g.system==='消化系统') },
  { system:'内分泌系统', icon:'🩸', items:GUIDELINES.filter(g=>g.system==='内分泌系统') },
  { system:'法律法规', icon:'📋', items:LAWS },
];
