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
  { id:'d011', name:'头孢曲松钠', en:'Ceftriaxone Sodium', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'用于敏感菌所致的下呼吸道感染、泌尿道感染、腹腔感染、败血症、脑膜炎等。',
    contraindications:'对头孢菌素过敏者禁用。',
    adverse:'常见腹泻、皮疹；偶见胆道假结石、一过性肝酶升高。',
    dosage:'成人一次1-2g，一日1次。严重感染可增至4g/d。',
    storage:'遮光，密闭，阴凉干燥处保存。',
    interactions:'与含钙溶液配伍禁忌。与氨基糖苷类合用有协同作用。' },
  { id:'d012', name:'阿奇霉素片', en:'Azithromycin Tablets', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'用于敏感菌所致的呼吸道感染、皮肤软组织感染、泌尿生殖道感染。',
    contraindications:'对大环内酯类过敏者禁用。',
    adverse:'常见腹泻、恶心；偶见QT间期延长、肝功能异常。',
    dosage:'成人一次0.5g，一日1次，连用3天；或首日0.5g，第2-5日0.25g qd。',
    storage:'密封，干燥处保存。',
    interactions:'与抗凝药合用可能增加出血风险。与茶碱合用可能增加茶碱血药浓度。' },
  { id:'d013', name:'莫西沙星片', en:'Moxifloxacin Tablets', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'用于敏感菌所致的社区获得性肺炎、慢性支气管炎急性发作、急性鼻窦炎。',
    contraindications:'18岁以下、癫痫患者、QT间期延长者禁用。',
    adverse:'常见恶心、腹泻、头晕；偶见QT间期延长、肌腱炎。',
    dosage:'一次0.4g，一日1次。疗程5-14天。',
    storage:'遮光，密封保存。',
    interactions:'与抗心律失常药合用可能加重QT延长。与含金属离子药物间隔2小时以上服用。' },
  { id:'d014', name:'布洛芬缓释胶囊', en:'Ibuprofen SR Capsules', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'OTC',
    indications:'用于缓解轻中度疼痛、关节痛、头痛、牙痛、痛经；也用于退热。',
    contraindications:'活动性消化性溃疡、严重肾功能不全、妊娠晚期禁用。',
    adverse:'常见胃肠道反应；偶见头晕、皮疹、肾功能损害。',
    dosage:'一次0.3g，一日2次。饭后服用减轻胃肠刺激。',
    storage:'密封保存。',
    interactions:'与抗凝药合用增加出血风险。与其他NSAIDs合用增加胃溃疡风险。' },
  { id:'d015', name:'氯沙坦钾片', en:'Losartan Potassium', category:'心血管系统用药', subcategory:'降压药', type:'处方药',
    indications:'用于治疗原发性高血压。尤其适用于合并糖尿病肾病的高血压患者。',
    contraindications:'妊娠中晚期禁用。双侧肾动脉狭窄者禁用。',
    adverse:'偶见头晕、高钾血症、肾功能损害。干咳发生率低于ACEI。',
    dosage:'起始剂量50mg，一日1次。可增至100mg qd。',
    storage:'遮光，密封保存。',
    interactions:'与保钾利尿药合用可能增加高钾血症风险。与NSAIDs合用可能减弱降压效果。' },
  { id:'d016', name:'氨氯地平片', en:'Amlodipine Tablets', category:'心血管系统用药', subcategory:'降压药', type:'处方药',
    indications:'用于治疗高血压和稳定性心绞痛。',
    contraindications:'重度主动脉瓣狭窄、不稳定心绞痛急性期。',
    adverse:'常见踝部水肿、头痛、面部潮红；偶见心悸、牙龈增生。',
    dosage:'起始剂量5mg，一日1次。最大10mg qd。',
    storage:'遮光，密封保存。',
    interactions:'与CYP3A4强抑制剂合用可能升高血药浓度。与β受体阻滞剂合用注意心衰风险。' },
  { id:'d017', name:'美托洛尔缓释片', en:'Metoprolol SR', category:'心血管系统用药', subcategory:'降压药', type:'处方药',
    indications:'用于高血压、心绞痛、慢性心力衰竭（NYHA Ⅱ-Ⅲ级）。',
    contraindications:'心源性休克、病态窦房结综合征、严重心动过缓。',
    adverse:'常见疲劳、头晕、心动过缓；偶见肢端发冷、支气管痉挛。',
    dosage:'心衰：起始23.75mg qd，逐步滴定至190mg qd。降压：47.5-95mg qd。',
    storage:'遮光，密封保存。',
    interactions:'与维拉帕米合用禁。与地高辛合用可能增加心动过缓风险。' },
  { id:'d018', name:'沙库巴曲缬沙坦片', en:'Sacubitril/Valsartan', category:'心血管系统用药', subcategory:'抗心衰药', type:'处方药',
    indications:'用于射血分数降低的慢性心力衰竭（NYHA Ⅱ-Ⅳ级）。',
    contraindications:'同时使用ACEI者（需洗脱36h）、血管性水肿史、妊娠期。',
    adverse:'常见低血压、高钾血症、肾功能损害；偶见血管性水肿。',
    dosage:'起始剂量50mg bid，逐步增加至200mg bid。',
    storage:'密封，不超过25℃保存。',
    interactions:'禁与ACEI合用。与保钾利尿药合用增加高钾风险。与NSAIDs合用可能减弱疗效。' },
  { id:'d019', name:'非布司他片', en:'Febuxostat Tablets', category:'解热镇痛药', subcategory:'抗痛风药', type:'处方药',
    indications:'用于痛风患者高尿酸血症的长期治疗（不推荐用于无临床症状的高尿酸血症）。',
    contraindications:'正在使用硫唑嘌呤或巯嘌呤者禁用。',
    adverse:'常见肝功能异常、关节痛；偶见心血管事件增加风险。',
    dosage:'起始剂量40mg，一日1次。2周后SUA不达标可增至80mg qd。',
    storage:'遮光，密封保存。',
    interactions:'与硫唑嘌呤、巯嘌呤合用可显著增加后者毒性。' },
  { id:'d020', name:'胰岛素注射液（短效）', en:'Regular Insulin', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药',
    indications:'用于1型糖尿病、2型糖尿病口服药控制不佳、糖尿病急症（酮症酸中毒）。',
    contraindications:'低血糖发作时禁用。',
    adverse:'常见低血糖、注射部位脂肪萎缩；偶见过敏反应。',
    dosage:'个体化给药。一般餐前15-30分钟皮下注射。',
    storage:'未开封：2-8℃冷藏。开封后：室温（<25℃）保存不超过4周。',
    interactions:'与糖皮质激素、噻嗪类利尿药合用可能减弱降糖效果。与β受体阻滞剂合用可能掩盖低血糖症状。' },
  { id:'d021', name:'达格列净片', en:'Dapagliflozin', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药',
    indications:'用于2型糖尿病、射血分数降低的心衰、慢性肾病（eGFR≥25）。',
    contraindications:'eGFR<25时禁用。1型糖尿病禁用。',
    adverse:'常见泌尿生殖道感染；偶见酮症酸中毒（血糖不高时也可发生）、脱水。',
    dosage:'2型糖尿病/心衰/CKD：10mg qd。',
    storage:'密封保存。',
    interactions:'与利尿剂合用可能增加脱水风险。与胰岛素/磺脲类合用增加低血糖风险。' },
  { id:'d022', name:'氯吡格雷片', en:'Clopidogrel', category:'血液系统用药', subcategory:'抗凝药', type:'处方药',
    indications:'用于预防动脉粥样硬化血栓形成事件：ACS、PCI术后、缺血性卒中。',
    contraindications:'活动性出血、严重肝功能损害。',
    adverse:'常见出血（消化道、皮肤）；偶见血小板减少症。',
    dosage:'负荷量300mg，维持量75mg qd。',
    storage:'密封保存。',
    interactions:'与PPI（尤其是奥美拉唑）合用可能减弱抗血小板效果。与抗凝药合用增加出血风险。' },
  { id:'d023', name:'利伐沙班片', en:'Rivaroxaban', category:'血液系统用药', subcategory:'抗凝药', type:'处方药',
    indications:'用于非瓣膜性房颤卒中预防、DVT/PE治疗和预防。',
    contraindications:'活动性出血、严重肝功能损害合并凝血障碍。',
    adverse:'常见出血；偶见肝功能异常、血小板减少。',
    dosage:'房颤：20mg qd（CrCl 15-49者15mg qd）。DVT/PE：15mg bid×21天，然后20mg qd。',
    storage:'密封，不超过30℃。',
    interactions:'与其他抗凝药、抗血小板药合用增加出血风险。与CYP3A4/P-gp强抑制剂合用增加血药浓度。' },
  { id:'d024', name:'孟鲁司特钠片', en:'Montelukast Sodium', category:'呼吸系统用药', subcategory:'平喘药', type:'处方药',
    indications:'用于哮喘的预防和长期治疗（包括阿司匹林敏感性哮喘）、过敏性鼻炎。',
    contraindications:'对本药过敏者禁用。',
    adverse:'罕见头痛、腹痛；极罕见精神神经事件。',
    dosage:'成人10mg qd，睡前服用。',
    storage:'遮光，密封，室温保存。',
    interactions:'与苯妥英钠、利福平合用可能降低血药浓度。' },
  { id:'d025', name:'甲泼尼龙片', en:'Methylprednisolone', category:'内分泌系统用药', subcategory:'激素类', type:'处方药',
    indications:'用于过敏性疾病、自身免疫性疾病、炎症性疾病、器官移植排斥反应等。',
    contraindications:'全身性真菌感染、对本品过敏者。',
    adverse:'长期使用：库欣综合征、骨质疏松、高血糖、感染风险增加、消化道溃疡。',
    dosage:'起始剂量4-48mg/d，根据疾病和反应调整。需逐步减量停药。',
    storage:'遮光，密封保存。',
    interactions:'与NSAIDs合用增加消化道溃疡风险。与利福平合用加速代谢。' },
  { id:'d026', name:'甲钴胺片', en:'Mecobalamin', category:'营养支持药', subcategory:'维生素类', type:'OTC',
    indications:'用于周围神经病变、巨幼细胞性贫血。',
    contraindications:'对本药过敏者禁用。',
    adverse:'偶见食欲不振、恶心、腹泻；罕见皮疹。',
    dosage:'一次0.5mg，一日3次。',
    storage:'遮光，密封保存。',
    interactions:'与氯霉素合用可能影响造血系统。' },
  { id:'d027', name:'碳酸钙D3片', en:'Calcium Carbonate/D3', category:'营养支持药', subcategory:'电解质', type:'OTC',
    indications:'用于预防和治疗钙缺乏症、骨质疏松的辅助治疗。',
    contraindications:'高钙血症、严重肾功能不全。',
    adverse:'偶见便秘、胃肠胀气。',
    dosage:'一次1片（钙600mg+D3 200IU），一日1-2次。',
    storage:'密封保存。',
    interactions:'与四环素类、喹诺酮类抗生素同服影响吸收，需间隔2小时以上。' },
  { id:'d028', name:'铝碳酸镁咀嚼片', en:'Hydrotalcite', category:'消化系统用药', subcategory:'胃黏膜保护剂', type:'OTC',
    indications:'用于胃酸过多引起的胃痛、胃灼热、反酸、饱胀等。',
    contraindications:'严重肾功能不全、低磷血症。',
    adverse:'偶见便秘、腹泻。',
    dosage:'一次1-2片，一日3-4次。餐后1-2小时嚼服。',
    storage:'密封保存。',
    interactions:'可影响四环素类、喹诺酮类、铁剂吸收，需间隔1-2小时服用。' },
  { id:'d029', name:'氯硝西泮片', en:'Clonazepam', category:'神经系统用药', subcategory:'镇静催眠药', type:'处方药（精二）',
    indications:'用于癫痫和惊恐障碍。',
    contraindications:'重症肌无力、闭角型青光眼、严重呼吸功能不全。',
    adverse:'常见嗜睡、乏力、共济失调；长期使用可产生依赖性。',
    dosage:'癫痫：起始0.5mg tid，每3天增量0.5-1mg。成人最大量20mg/d。',
    storage:'遮光，密封保存。',
    interactions:'与酒精及其他中枢抑制剂合用增强镇静作用。与丙戊酸合用可能诱发失神发作。' },
  { id:'d030', name:'氨溴索片', en:'Ambroxol', category:'呼吸系统用药', subcategory:'祛痰药', type:'OTC',
    indications:'用于急慢性呼吸道疾病引起的痰液黏稠、咳痰困难。',
    contraindications:'对本品过敏者。',
    adverse:'偶见恶心、胃部不适。',
    dosage:'成人一次30mg，一日3次。长期服用减为bid。',
    storage:'遮光，密封保存。',
    interactions:'与抗生素（阿莫西林、头孢呋辛等）合用可增加其在肺组织的浓度。' },
  { id:'d031', name:'头孢呋辛酯片', en:'Cefuroxime Axetil', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'用于敏感菌所致的呼吸道、泌尿道、皮肤软组织感染等。手术预防用药。', contraindications:'头孢类过敏者禁用。',
    adverse:'常见腹泻、恶心；偶见皮疹。', dosage:'0.25-0.5g bid，餐后服用。', storage:'遮光密封。',
    interactions:'与氨基糖苷类合用增加肾毒性。' },
  { id:'d032', name:'哌拉西林他唑巴坦', en:'Piperacillin/Tazobactam', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'中重度感染：腹腔感染、肺炎、败血症等。', contraindications:'青霉素过敏者禁用。',
    adverse:'常见腹泻；偶见肝酶升高、血小板减少。', dosage:'4.5g q8h 静脉滴注。', storage:'遮光密封。',
    interactions:'与氨基糖苷类有协同作用。与甲氨蝶呤合用增加后者毒性。' },
  { id:'d033', name:'美罗培南', en:'Meropenem', category:'抗生素', subcategory:'抗生素', type:'处方药（特殊使用级）',
    indications:'多重耐药菌所致重症感染：腹腔感染、脑膜炎、败血症等。', contraindications:'碳青霉烯类过敏者禁用。',
    adverse:'常见腹泻、转氨酶升高；偶见癫痫。', dosage:'0.5-1g q8h 静脉滴注。', storage:'密封保存。',
    interactions:'与丙戊酸钠合用显著降低后者血药浓度（禁忌联用）。' },
  { id:'d034', name:'万古霉素', en:'Vancomycin', category:'抗生素', subcategory:'抗生素', type:'处方药（特殊使用级）',
    indications:'MRSA等耐药G+菌重症感染。艰难梭菌相关性腹泻（口服）。', contraindications:'对本药过敏者。',
    adverse:'肾毒性、耳毒性、红人综合征。需监测血药谷浓度(10-20mg/L)。', dosage:'1g q12h 静脉滴注≥60min。', storage:'密封保存。',
    interactions:'与其他肾毒性药物合用增加肾损伤风险。' },
  { id:'d035', name:'甲硝唑片', en:'Metronidazole', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'厌氧菌感染、滴虫病、阿米巴病。Hp根除方案组分。', contraindications:'妊娠早期禁用。',
    adverse:'金属味、恶心；服药期间尿液呈红棕色（正常现象）。', dosage:'0.4-0.5g bid-tid。', storage:'遮光密封。',
    interactions:'服药期间及停药7天内禁酒（双硫仑样反应）。与华法林合用增强抗凝作用。' },
  { id:'d036', name:'氟康唑胶囊', en:'Fluconazole', category:'抗生素', subcategory:'抗真菌药', type:'处方药',
    indications:'念珠菌感染、隐球菌性脑膜炎。', contraindications:'对本药过敏者。',
    adverse:'常见恶心；偶见肝毒性。', dosage:'首剂0.4g，之后0.2g qd。', storage:'密封保存。',
    interactions:'与华法林合用增强抗凝。与磺脲类降糖药合用增加低血糖风险。' },
  { id:'d037', name:'奥司他韦胶囊', en:'Oseltamivir', category:'抗生素', subcategory:'抗病毒药', type:'处方药',
    indications:'用于成人和1岁以上儿童的甲型和乙型流感治疗及预防。症状出现48h内开始。', contraindications:'对本药过敏者。',
    adverse:'常见恶心、呕吐（与食物同服可减轻）。', dosage:'治疗：75mg bid×5天。预防：75mg qd。', storage:'密封保存。',
    interactions:'与丙磺舒合用可增加奥司他韦血药浓度。' },
  { id:'d038', name:'恩替卡韦片', en:'Entecavir', category:'抗生素', subcategory:'抗病毒药', type:'处方药',
    indications:'慢性乙型肝炎。', contraindications:'对本药过敏者。',
    adverse:'偶见头痛、疲劳；罕见乳酸酸中毒。', dosage:'0.5mg qd，空腹服用（餐前/后≥2h）。', storage:'密封保存。',
    interactions:'与食物同服可显著降低吸收。' },
  { id:'d039', name:'厄贝沙坦片', en:'Irbesartan', category:'心血管系统用药', subcategory:'降压药', type:'处方药',
    indications:'原发性高血压。合并高血压的2型糖尿病肾病。', contraindications:'妊娠中晚期禁用。',
    adverse:'偶见头晕、高钾血症。', dosage:'150mg qd，可增至300mg qd。', storage:'密封保存。',
    interactions:'与保钾利尿药或补钾制剂合用增加高钾风险。' },
  { id:'d040', name:'比索洛尔片', en:'Bisoprolol', category:'心血管系统用药', subcategory:'降压药', type:'处方药',
    indications:'高血压、冠心病、慢性心力衰竭。', contraindications:'严重心动过缓、Ⅱ度以上房室传导阻滞。',
    adverse:'常见心动过缓、乏力、肢端发冷。', dosage:'起始2.5-5mg qd，心衰最大10mg qd。', storage:'遮光密封。',
    interactions:'与维拉帕米合用禁。与地高辛合用增加心动过缓风险。' },
  { id:'d041', name:'硝苯地平片', en:'Nifedipine', category:'心血管系统用药', subcategory:'降压药', type:'处方药',
    indications:'高血压、心绞痛。', contraindications:'心源性休克、严重主动脉瓣狭窄。',
    adverse:'头痛、面部潮红、踝部水肿、反射性心悸（短效剂型）。', dosage:'控释片30mg qd；普通片10mg tid。', storage:'遮光密封。',
    interactions:'与CYP3A4抑制剂（葡萄柚汁）合用可能升高血药浓度。' },
  { id:'d042', name:'螺内酯片', en:'Spironolactone', category:'心血管系统用药', subcategory:'利尿剂', type:'处方药',
    indications:'心力衰竭、高血压、原醛症。', contraindications:'高钾血症、严重肾功能不全。',
    adverse:'高钾血症、男性乳房发育、月经紊乱。', dosage:'心衰：起始20mg qd。', storage:'密封保存。',
    interactions:'与ACEI/ARB合用增加高钾风险。与地高辛合用可增加地高辛血药浓度。' },
  { id:'d043', name:'呋塞米片', en:'Furosemide', category:'心血管系统用药', subcategory:'利尿剂', type:'处方药',
    indications:'水肿性疾病（心衰、肾衰、肝硬化）、高血压。', contraindications:'无尿者、严重电解质紊乱者。',
    adverse:'低钾、低钠、低氯性碱中毒、高尿酸血症、耳毒性。', dosage:'起始20-40mg qd-bid。', storage:'遮光密封。',
    interactions:'与氨基糖苷类合用增加耳毒性。与NSAIDs合用减弱利尿效果。' },
  { id:'d044', name:'华法林钠片', en:'Warfarin Sodium', category:'血液系统用药', subcategory:'抗凝药', type:'处方药',
    indications:'房颤卒中预防、DVT/PE治疗和预防、心脏瓣膜置换术后。', contraindications:'活动性出血、妊娠期。',
    adverse:'出血（需监测INR）。', dosage:'初始2.5-3mg qd，根据INR调整（目标2.0-3.0）。', storage:'遮光密封。',
    interactions:'与多种药物（抗生素、NSAIDs、胺碘酮等）和食物（VK含量）相互作用。' },
  { id:'d045', name:'艾司奥美拉唑肠溶片', en:'Esomeprazole', category:'消化系统用药', subcategory:'抗酸药', type:'处方药',
    indications:'消化性溃疡、反流性食管炎、根除Hp、NSAIDs相关溃疡预防。', contraindications:'对本药过敏者。',
    adverse:'常见头痛、腹泻；长期：骨质疏松、维生素B12缺乏、肠道感染风险。', dosage:'20-40mg qd，晨起空腹。', storage:'遮光密封。',
    interactions:'与氯吡格雷合用可能降低后者抗血小板效果。影响酮康唑等胃酸依赖药物吸收。' },
  { id:'d046', name:'多潘立酮片', en:'Domperidone', category:'消化系统用药', subcategory:'止吐药', type:'处方药',
    indications:'胃排空延缓、胃食管反流引起的恶心呕吐。', contraindications:'消化道出血、穿孔者禁用。',
    adverse:'偶见口干、头痛；罕见QT延长。', dosage:'10mg tid，餐前15-30min。', storage:'遮光密封。',
    interactions:'与酮康唑等CYP3A4抑制剂合用增加QT延长风险。' },
  { id:'d047', name:'蒙脱石散', en:'Montmorillonite Powder', category:'消化系统用药', subcategory:'止泻药', type:'OTC',
    indications:'成人及儿童急慢性腹泻。', contraindications:'对本品过敏者。',
    adverse:'偶见便秘。', dosage:'1袋（3g）tid，两餐之间服用。', storage:'密封保存。',
    interactions:'与其他药物间隔至少2小时服用，以免影响吸收。' },
  { id:'d048', name:'瑞舒伐他汀钙片', en:'Rosuvastatin Calcium', category:'心血管系统用药', subcategory:'调脂药', type:'处方药',
    indications:'高胆固醇血症和混合型高脂血症。', contraindications:'活动性肝病、妊娠哺乳期。',
    adverse:'肌痛、肝酶升高；偶见蛋白尿。', dosage:'起始5-10mg qd，最大20mg qd。', storage:'密封保存。',
    interactions:'与吉非罗齐合用增加肌病风险。与环孢素、抗病毒药合用需减量。' },
  { id:'d049', name:'格列美脲片', en:'Glimepiride', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药',
    indications:'用于饮食和运动控制不满意的2型糖尿病。', contraindications:'1型糖尿病、酮症酸中毒。',
    adverse:'低血糖、体重增加。', dosage:'起始1mg qd，早餐前服用。最大6mg qd。', storage:'密封保存。',
    interactions:'与氟康唑合用增强降糖作用。与β受体阻滞剂合用可能掩盖低血糖症状。' },
  { id:'d050', name:'阿卡波糖片', en:'Acarbose', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药',
    indications:'用于2型糖尿病（降低餐后血糖）。', contraindications:'肠梗阻、严重肾功能不全。',
    adverse:'常见腹胀、排气增多。', dosage:'起始50mg tid，与第一口饭同嚼服。最大200mg tid。', storage:'密封保存。',
    interactions:'与磺脲类/胰岛素合用增加低血糖风险（低血糖时需用葡萄糖纠正，蔗糖无效）。' },
  { id:'d051', name:'胰岛素（甘精胰岛素）', en:'Insulin Glargine', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药',
    indications:'1型/2型糖尿病的基础胰岛素治疗。', contraindications:'低血糖发作时。',
    adverse:'低血糖、注射部位脂肪增生。', dosage:'个体化，qd皮下注射（固定时间）。', storage:'未开封2-8℃，开封后<25℃，4周内用完。',
    interactions:'与糖皮质激素、甲状腺素合用可能减弱降糖效果。' },
  { id:'d052', name:'甲氨蝶呤片', en:'Methotrexate', category:'抗肿瘤药', subcategory:'化疗药', type:'处方药',
    indications:'类风湿关节炎、银屑病、滋养细胞肿瘤、急性白血病。', contraindications:'严重肝肾功能不全、妊娠哺乳期。',
    adverse:'骨髓抑制、肝毒性、口腔炎、间质性肺炎。', dosage:'RA：7.5-15mg qw。补充叶酸5mg qw（MTX后24h）。', storage:'遮光密封。',
    interactions:'与NSAIDs合用减少MTX排泄增加毒性。与磺胺类合用增加骨髓抑制。' },
  { id:'d053', name:'来氟米特片', en:'Leflunomide', category:'抗肿瘤药', subcategory:'免疫治疗药', type:'处方药',
    indications:'类风湿关节炎、狼疮性肾炎。', contraindications:'严重肝功能损害、妊娠期。',
    adverse:'腹泻、肝酶升高、脱发。', dosage:'负荷量50mg qd×3天，维持量20mg qd。', storage:'密封保存。',
    interactions:'与其他肝毒性药物合用增加肝损伤风险。与华法林合用增强抗凝。' },
  { id:'d054', name:'羟氯喹片', en:'Hydroxychloroquine', category:'抗肿瘤药', subcategory:'免疫治疗药', type:'处方药',
    indications:'类风湿关节炎、系统性红斑狼疮、光敏性疾病。', contraindications:'黄斑病变、6岁以下儿童。',
    adverse:'视网膜毒性（需每年眼科检查）、皮肤色素沉着、胃肠道反应。', dosage:'RA/SLE：0.2-0.4g qd。', storage:'遮光密封。',
    interactions:'与胺碘酮等增加QT延长风险。与地高辛合用增加地高辛血药浓度。' },
  { id:'d055', name:'别嘌醇片', en:'Allopurinol', category:'解热镇痛药', subcategory:'抗痛风药', type:'处方药',
    indications:'慢性高尿酸血症、痛风石、尿酸性肾病。', contraindications:'急性痛风发作时不可新用。',
    adverse:'皮疹（严重者超敏反应综合征），起始小剂量可减少。', dosage:'起始50-100mg qd，逐步增量至300mg qd。', storage:'密封保存。',
    interactions:'与硫唑嘌呤、6-MP合用显著增加后者毒性（禁忌联用）。与华法林合用增强抗凝。' },
  { id:'d056', name:'苯溴马隆片', en:'Benzbromarone', category:'解热镇痛药', subcategory:'抗痛风药', type:'处方药',
    indications:'原发性高尿酸血症。', contraindications:'中度以上肾功能不全、肾结石。',
    adverse:'胃肠反应；偶见肝毒性。', dosage:'50mg qd，早餐后服。用药期间保证每日饮水>2000mL。', storage:'密封保存。',
    interactions:'与华法林合用增强抗凝。水杨酸类药物减弱其促尿酸排泄作用。' },
  { id:'d057', name:'普瑞巴林胶囊', en:'Pregabalin', category:'神经系统用药', subcategory:'抗癫痫药', type:'处方药（精二）',
    indications:'带状疱疹后神经痛、纤维肌痛、癫痫辅助治疗。', contraindications:'对本品过敏者。',
    adverse:'头晕、嗜睡、口干、体重增加。', dosage:'起始75mg bid，可增至150mg bid。', storage:'密封保存。',
    interactions:'与中枢抑制剂合用增强镇静作用。与噻唑烷二酮类合用增加体重增加和水肿风险。' },
  { id:'d058', name:'卡马西平片', en:'Carbamazepine', category:'神经系统用药', subcategory:'抗癫痫药', type:'处方药',
    indications:'癫痫（部分性发作）、三叉神经痛。', contraindications:'骨髓抑制、房室传导阻滞。',
    adverse:'头晕、嗜睡、皮疹（警惕Stevens-Johnson综合征）、白细胞减少。HLA-B*1502阳性者禁用。', dosage:'起始100mg bid，逐步增量。', storage:'遮光密封。',
    interactions:'强CYP3A4诱导剂，加速多种药物代谢（口服避孕药、华法林、环孢素）。' },
  { id:'d059', name:'左乙拉西坦片', en:'Levetiracetam', category:'神经系统用药', subcategory:'抗癫痫药', type:'处方药',
    indications:'部分性发作的添加治疗。', contraindications:'对本品过敏者。',
    adverse:'嗜睡、乏力、头晕。', dosage:'起始500mg bid，可增至1500mg bid。', storage:'密封保存。',
    interactions:'与其他抗癫痫药相比，药物相互作用少。' },
  { id:'d060', name:'舍曲林片', en:'Sertraline', category:'神经系统用药', subcategory:'抗抑郁药', type:'处方药',
    indications:'抑郁症、强迫症、社交焦虑障碍、创伤后应激障碍。', contraindications:'与MAOIs合用禁。',
    adverse:'恶心、腹泻、失眠、性功能障碍。', dosage:'起始50mg qd，晨或晚服用。最大200mg qd。', storage:'密封保存。',
    interactions:'禁与MAOIs合用（间隔至少14天）。与NSAIDs/抗凝药合用增加出血风险。' },
  { id:'d061', name:'氯化钾缓释片', en:'KCl SR Tablets', category:'营养支持药', subcategory:'电解质', type:'处方药',
    indications:'各种原因引起的低钾血症的预防和治疗。', contraindications:'高钾血症、严重肾功能不全。',
    adverse:'口服后胃肠不适。', dosage:'0.5-1g bid-tid，餐后服。', storage:'密封保存。',
    interactions:'与ACEI/ARB、保钾利尿剂合用增加高钾血症风险。' },
  { id:'d062', name:'琥珀酸亚铁片', en:'Ferrous Succinate', category:'血液系统用药', subcategory:'抗贫血药', type:'OTC',
    indications:'缺铁性贫血的预防和治疗。', contraindications:'血色病、含铁血黄素沉着症。',
    adverse:'黑便（正常现象）、胃肠道不适、便秘。', dosage:'一次1-2片，一日1-3次。餐后服。', storage:'密封保存。',
    interactions:'与四环素类、喹诺酮类、抗酸药同服间隔2小时以上。VC同服可增加吸收。' },
  { id:'d063', name:'叶酸片', en:'Folic Acid', category:'血液系统用药', subcategory:'抗贫血药', type:'OTC',
    indications:'巨幼细胞性贫血、妊娠期叶酸缺乏的预防（0.4mg qd）。MTX治疗时的补充。', contraindications:'对本品过敏者。',
    adverse:'罕见过敏反应。', dosage:'治疗量：5-10mg tid。预防量：0.4mg qd。', storage:'遮光密封。',
    interactions:'与苯妥英钠合用可能降低后者血药浓度。大剂量叶酸可掩盖B12缺乏。' },
  { id:'d064', name:'左甲状腺素钠片', en:'Levothyroxine Sodium', category:'内分泌系统用药', subcategory:'甲状腺用药', type:'处方药',
    indications:'甲减的替代治疗。TSH抑制治疗（甲状腺癌术后）。', contraindications:'未纠正的肾上腺皮质功能不全。',
    adverse:'过量时出现甲亢症状。', dosage:'起始25-50μg qd，根据TSH每4-6周调整。清晨空腹，至少30min后进食。', storage:'遮光密封，<25℃。',
    interactions:'与钙剂、铁剂、含铝药物间隔≥4h服用。与含大豆制品间隔服用。' },
  { id:'d065', name:'地高辛片', en:'Digoxin', category:'心血管系统用药', subcategory:'抗心律失常药', type:'处方药',
    indications:'心力衰竭（尤其合并快速房颤）、房颤/房扑的心室率控制。', contraindications:'室颤、预激综合征合并房颤。',
    adverse:'心律失常、恶心、视觉异常（黄视/绿视）。治疗窗窄，需监测血药浓度（0.5-2.0ng/mL）。', dosage:'0.125-0.25mg qd。', storage:'密封保存。',
    interactions:'低钾、低镁增加中毒风险。与胺碘酮、维拉帕米合用增加血药浓度。' },
  { id:'d066', name:'胺碘酮片', en:'Amiodarone', category:'心血管系统用药', subcategory:'抗心律失常药', type:'处方药',
    indications:'房颤复律及窦律维持、室性心律失常。', contraindications:'严重心动过缓、甲状腺功能异常者。',
    adverse:'肺毒性（监测肺功能）、甲状腺功能异常、肝毒性、角膜微粒沉积、皮肤蓝灰色色素沉着。', dosage:'负荷量0.2g tid×7天，维持0.2g qd。', storage:'遮光密封。',
    interactions:'与华法林合用增强抗凝（需减少华法林1/3-1/2）。与地高辛合用增加地高辛浓度。' },
  { id:'d067', name:'阿仑膦酸钠片', en:'Alendronate Sodium', category:'内分泌系统用药', subcategory:'激素类', type:'处方药',
    indications:'骨质疏松症。', contraindications:'食管排空延迟、不能站立或端坐30min者。',
    adverse:'食管炎、食管糜烂。', dosage:'70mg qw，清晨空腹大量水送服，保持直立≥30min。', storage:'密封保存。',
    interactions:'与钙剂、抗酸药、含金属离子药物间隔≥30min服用。' },
  { id:'d068', name:'坦索罗辛缓释胶囊', en:'Tamsulosin SR', category:'男科/泌尿科用药', subcategory:'前列腺用药', type:'处方药',
    indications:'前列腺增生所致的排尿障碍。', contraindications:'体位性低血压史者。',
    adverse:'头晕、射精异常。', dosage:'0.2mg qd，餐后服。', storage:'密封保存。',
    interactions:'与PDE5抑制剂（西地那非等）合用增加低血压风险。与其他α受体阻滞剂合用注意血压。' },
  { id:'d069', name:'非那雄胺片', en:'Finasteride', category:'男科/泌尿科用药', subcategory:'前列腺用药', type:'处方药',
    indications:'前列腺增生、男性雄激素性脱发。', contraindications:'妇女和儿童。',
    adverse:'性欲减退、勃起功能障碍。', dosage:'BPH：5mg qd。脱发：1mg qd。', storage:'密封保存。',
    interactions:'无显著药物相互作用。但可降低血清PSA水平（约50%），解释PSA结果时需注意。' },
  { id:'d070', name:'黄体酮胶囊', en:'Progesterone', category:'妇产科用药', subcategory:'激素类', type:'处方药',
    indications:'先兆流产、习惯性流产、月经失调。', contraindications:'严重肝病、血栓性疾病。',
    adverse:'头晕、嗜睡、乳房胀痛。', dosage:'先兆流产：0.2-0.3g/d分次服。', storage:'遮光密封。',
    interactions:'与CYP3A4诱导剂合用可能降低药效。' },
  { id:'d071', name:'泼尼松片', en:'Prednisone', category:'内分泌系统用药', subcategory:'激素类', type:'处方药',
    indications:'过敏性疾病、自身免疫性疾病、炎症性疾病、淋巴系统肿瘤。', contraindications:'全身性真菌感染。',
    adverse:'长期：库欣综合征、骨质疏松、高血糖、感染风险增加。需逐步减量。', dosage:'5-60mg/d，按疾病调整。', storage:'遮光密封。',
    interactions:'与NSAIDs合用增加溃疡风险。与利福平合用加速代谢。与降糖药合用可能减弱降糖效果。' },
  { id:'d072', name:'氯苯那敏片', en:'Chlorpheniramine', category:'呼吸系统用药', subcategory:'抗组胺药', type:'OTC',
    indications:'过敏性鼻炎、荨麻疹等过敏性疾病。', contraindications:'新生儿、早产儿。',
    adverse:'嗜睡、口干。服药期间避免驾驶。', dosage:'4mg tid。', storage:'密封保存。',
    interactions:'与其他中枢抑制剂合用增强镇静。与MAOIs合用可能增强抗胆碱能作用。' },
  { id:'d073', name:'吸入用布地奈德混悬液', en:'Budesonide Inhalation', category:'呼吸系统用药', subcategory:'平喘药', type:'处方药',
    indications:'支气管哮喘。', contraindications:'对本品过敏者。',
    adverse:'口腔念珠菌感染、声音嘶哑（吸药后漱口可预防）。', dosage:'0.5-1mg bid 雾化吸入。', storage:'遮光密封。',
    interactions:'与CYP3A4强抑制剂合用可能增加全身暴露。' },
  { id:'d074', name:'异丙托溴铵吸入剂', en:'Ipratropium Bromide', category:'呼吸系统用药', subcategory:'平喘药', type:'处方药',
    indications:'COPD的支气管扩张治疗。', contraindications:'对阿托品类过敏者。',
    adverse:'口干、咳嗽。', dosage:'2-4喷 tid-qid。', storage:'遮光密封。',
    interactions:'与其他抗胆碱能药物合用增强作用。' },
  { id:'d075', name:'乳果糖口服液', en:'Lactulose Oral Solution', category:'消化系统用药', subcategory:'止泻药', type:'OTC',
    indications:'慢性功能性便秘。肝性脑病的辅助治疗。', contraindications:'半乳糖血症。',
    adverse:'初始腹胀，继续使用后缓解。', dosage:'15-30mL qd-bid。', storage:'密封保存。',
    interactions:'与其他泻药合用可能增加腹泻风险。' },
  { id:'d076', name:'柳氮磺吡啶肠溶片', en:'Sulfasalazine', category:'消化系统用药', subcategory:'止泻药', type:'处方药',
    indications:'溃疡性结肠炎、克罗恩病、类风湿关节炎。', contraindications:'磺胺类过敏、肠梗阻。',
    adverse:'恶心、头痛、皮疹、男性不育（可逆）。', dosage:'起始0.5g bid，渐增至1g tid-qid。', storage:'密封保存。',
    interactions:'与叶酸合用可能影响叶酸吸收。与抗凝药合用增强抗凝。' },
  { id:'d077', name:'美沙拉秦肠溶片', en:'Mesalazine', category:'消化系统用药', subcategory:'止泻药', type:'处方药',
    indications:'溃疡性结肠炎、克罗恩病。', contraindications:'严重肾功能损害、水杨酸过敏。',
    adverse:'腹泻、恶心、腹痛；罕见肾毒性。', dosage:'急性期1g qid；维持期0.5g tid。', storage:'密封保存。',
    interactions:'与硫唑嘌呤合用可能增加骨髓抑制风险。' },
  { id:'d078', name:'西地那非片', en:'Sildenafil', category:'男科/泌尿科用药', subcategory:'勃起功能障碍药', type:'处方药',
    indications:'勃起功能障碍、肺动脉高压。', contraindications:'与硝酸酯类药物合用禁。',
    adverse:'头痛、面部潮红、消化不良、视觉异常。', dosage:'ED：50mg 性活动前1h服用。', storage:'密封保存。',
    interactions:'禁与任何形式的硝酸酯类药物合用（严重低血压）。与α受体阻滞剂合用注意血压。' },
  { id:'d079', name:'曲马多缓释片', en:'Tramadol SR', category:'解热镇痛药', subcategory:'阿片类', type:'处方药（精二）',
    indications:'中度至重度疼痛。', contraindications:'严重呼吸抑制、急性酒精中毒。',
    adverse:'恶心、头晕、便秘、出汗。', dosage:'50-100mg q12h。', storage:'密封保存。',
    interactions:'与SSRI类抗抑郁药合用可能增加5-HT综合征风险。与其他中枢抑制剂合用增强呼吸抑制。' },
  { id:'d080', name:'塞来昔布胶囊', en:'Celecoxib', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'处方药',
    indications:'骨关节炎、类风湿关节炎的疼痛和炎症。', contraindications:'磺胺类过敏、CABG围术期。',
    adverse:'消化道反应（较传统NSAIDs少）、心血管风险（剂量相关）。', dosage:'0.2g qd-bid。', storage:'密封保存。',
    interactions:'与华法林合用增加出血风险。与ACEI合用可能减弱降压效果。' },
  { id:'d081', name:'阿托品眼用凝胶', en:'Atropine Eye Gel', category:'五官科用药', subcategory:'眼科用药', type:'处方药',
    indications:'散瞳验光、虹膜睫状体炎。', contraindications:'闭角型青光眼。',
    adverse:'视物模糊、畏光、口干。', dosage:'遵医嘱使用。', storage:'遮光密封。',
    interactions:'与其他抗胆碱能药物合用增强作用。' },
  { id:'d082', name:'左氧氟沙星滴眼液', en:'Levofloxacin Eye Drops', category:'五官科用药', subcategory:'眼科用药', type:'处方药',
    indications:'细菌性结膜炎、角膜炎。', contraindications:'喹诺酮类过敏者。',
    adverse:'一过性眼刺激。', dosage:'1-2滴，q2-4h。', storage:'遮光密封。',
    interactions:'与其他眼用制剂间隔≥5min使用。' },
  { id:'d083', name:'糠酸莫米松鼻喷雾剂', en:'Mometasone Nasal Spray', category:'五官科用药', subcategory:'耳鼻喉用药', type:'处方药',
    indications:'过敏性鼻炎。', contraindications:'鼻部手术后未愈。',
    adverse:'鼻出血、咽喉刺激。', dosage:'每侧鼻孔2喷 qd。', storage:'密封保存。',
    interactions:'与CYP3A4强抑制剂合用可能增加全身暴露。' },
  { id:'d084', name:'开塞露', en:'Glycerin Enema', category:'消化系统用药', subcategory:'止泻药', type:'OTC',
    indications:'偶发性便秘。', contraindications:'无。',
    adverse:'直肠刺激感。', dosage:'1支 纳肛，保留数分钟。', storage:'密封保存。',
    interactions:'无显著药物相互作用。' },
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

// ═══ 输液与配伍禁忌 ═══
const INFUSION_DATA = [
  { id:'i001', cat:'输液配伍禁忌', drug:'青霉素G钠', vehicle:'0.9%氯化钠', conc:'1万-4万U/mL', speed:'30-60min滴完',
    note:'水溶液不稳定，需即配即用。不可与葡萄糖液配伍（pH<5.0降解加速）。与氨基糖苷类在同一容器中混合致效价降低。' },
  { id:'i002', cat:'输液配伍禁忌', drug:'头孢曲松钠', vehicle:'0.9%氯化钠或5%葡萄糖', conc:'20-40mg/mL', speed:'≥30min',
    note:'含钙溶液（林格液、含钙营养液）配伍禁忌，可形成沉淀。新生儿禁止同时输注含钙溶液。与含乙醇药物有双硫仑风险。' },
  { id:'i003', cat:'输液配伍禁忌', drug:'头孢哌酮舒巴坦', vehicle:'0.9%氯化钠或5%葡萄糖', conc:'20-40mg/mL', speed:'30-60min',
    note:'与含钙溶液禁忌。与氨基糖苷类、甲硝唑在体外配伍禁忌。含舒巴坦，对青霉素过敏者慎用。' },
  { id:'i004', cat:'输液配伍禁忌', drug:'哌拉西林他唑巴坦', vehicle:'0.9%氯化钠或5%葡萄糖', conc:'40-80mg/mL', speed:'30min',
    note:'与氨基糖苷类体外配伍禁忌（在同一容器内失活）。不可与碳酸氢钠溶液配伍。与阿昔洛韦配伍禁忌。' },
  { id:'i005', cat:'输液配伍禁忌', drug:'美罗培南', vehicle:'0.9%氯化钠', conc:'1-20mg/mL', speed:'15-30min(推注) 30-60min(滴注)',
    note:'与丙戊酸钠配伍禁忌（使其血药浓度下降60-100%）。与多种维生素、葡萄糖酸钙配伍后有沉淀。' },
  { id:'i006', cat:'输液配伍禁忌', drug:'万古霉素', vehicle:'0.9%氯化钠或5%葡萄糖', conc:'≤5mg/mL', speed:'≥60min（过快致红人综合征）',
    note:'不可与碱性溶液配伍。与肝素、氨茶碱、地塞米松等有多种配伍禁忌。单独输注通道。' },
  { id:'i007', cat:'输液配伍禁忌', drug:'左氧氟沙星注射液', vehicle:'0.9%氯化钠或5%葡萄糖', conc:'2-5mg/mL', speed:'≥60min(500mg)',
    note:'避免与含金属离子（Ca²⁺、Mg²⁺、Fe²⁺等）的输液同时输注。与肝素、呋塞米、胰岛素配伍禁忌。遮光输注。' },
  { id:'i008', cat:'输液配伍禁忌', drug:'莫西沙星注射液', vehicle:'直接输注原液或稀释', conc:'1.6mg/mL', speed:'≥60min',
    note:'与10%氯化钠、20%甘露醇、碳酸氢钠配伍禁忌。仅可与其他相容输液在同一管路输注。' },
  { id:'i009', cat:'输液配伍禁忌', drug:'甲硝唑注射液', vehicle:'0.9%氯化钠或5%葡萄糖', conc:'1-5mg/mL', speed:'≥30min',
    note:'与含乙醇溶液及药物禁忌。与氨苄西林、苯妥英钠体外配伍禁忌。输液袋需遮光。' },
  { id:'i010', cat:'输液配伍禁忌', drug:'阿奇霉素注射液', vehicle:'先用注射用水溶解', conc:'1-2mg/mL', speed:'≥60min(500mg) ≥3h(高浓度)',
    note:'不可静脉推注。与含氯化钠高渗液配伍后产生沉淀。与大环内酯类、茶碱有相互作用。' },
  { id:'i011', cat:'输液配伍禁忌', drug:'奥美拉唑（注射用）', vehicle:'0.9%氯化钠（不可用葡萄糖）', conc:'0.4mg/mL', speed:'20-30min',
    note:'用0.9%氯化钠溶解和稀释，不可使用葡萄糖液。即配即用，4h内使用。与多种药物配伍变色或沉淀。' },
  { id:'i012', cat:'输液配伍禁忌', drug:'氨茶碱注射液', vehicle:'0.9%氯化钠或5%葡萄糖', conc:'1-2mg/mL', speed:'缓慢输注（过快致心律失常）',
    note:'与维生素C、胰岛素、氢化可的松、氯丙嗪等多种药物配伍禁忌。pH<8时析出茶碱沉淀。' },
  { id:'i013', cat:'输液配伍禁忌', drug:'呋塞米注射液', vehicle:'0.9%氯化钠（不可用葡萄糖）', conc:'1-2mg/mL', speed:'≤4mg/min',
    note:'不可与酸性溶液（葡萄糖、维生素C等）混合。与多巴胺、多巴酚丁胺、庆大霉素等多种药物禁忌。' },
  { id:'i014', cat:'输液配伍禁忌', drug:'氯化钾注射液', vehicle:'0.9%氯化钠或5%葡萄糖', conc:'≤0.3%(40mmol/L)', speed:'≤10-20mmol/h（外周）',
    note:'绝对禁止直接静脉推注！高浓度需从中心静脉给药。与胰岛素合用需注意血糖变化。' },
  { id:'i015', cat:'输液配伍禁忌', drug:'葡萄糖酸钙注射液', vehicle:'0.9%氯化钠或5%葡萄糖', conc:'0.5-1g/50-100mL', speed:'缓慢（≥10min）',
    note:'与含磷酸盐、碳酸盐的溶液配伍禁忌（形成沉淀）。与头孢曲松禁忌。与洋地黄类合用禁。' },
  { id:'i016', cat:'输液配伍禁忌', drug:'胰岛素注射液', vehicle:'0.9%氯化钠', conc:'0.1-1U/mL', speed:'根据血糖调整',
    note:'单独输注通道。吸附于输液袋和管路（需预冲）。与多巴胺、多巴酚丁胺在同一容器中失活。' },
  { id:'i017', cat:'输液配伍禁忌', drug:'多巴胺注射液', vehicle:'0.9%氯化钠或5%葡萄糖', conc:'0.8-3.2mg/mL', speed:'2-20μg/kg/min',
    note:'碱性溶液中失活（不可与碳酸氢钠配伍）。与呋塞米直接混合后变色。遮光输注。' },
  { id:'i018', cat:'输液配伍禁忌', drug:'硝酸甘油注射液', vehicle:'0.9%氯化钠或5%葡萄糖', conc:'50-200μg/mL', speed:'10-200μg/min',
    note:'吸附于PVC输液器（需用PE/玻璃输液器）。避光输注。与肝素在体外配伍禁忌。' },
  { id:'i019', cat:'输液配伍禁忌', drug:'甘露醇注射液', vehicle:'原液20%直接使用', conc:'20%(125mL/250mL)', speed:'30-60min内输完',
    note:'低温析出结晶时需加热溶解后使用。不可与其他药物混合在同一容器。心衰患者慎用。' },
  { id:'i020', cat:'输液配伍禁忌', drug:'丙泊酚注射液', vehicle:'原液直接使用', conc:'10mg/mL', speed:'根据临床需要',
    note:'单独输注通道。与其他药物配伍稳定性差。开启后12h内使用。含大豆油，过敏者禁用。' },
  { id:'i021', cat:'口服配伍禁忌', drug:'四环素类 + 含金属离子药物', interact:'含Ca/Mg/Al/Fe制剂、牛奶、抗酸药',
    detail:'形成不溶性螯合物，显著降低吸收。需间隔至少2小时服用。多西环素受影响较小。' },
  { id:'i022', cat:'口服配伍禁忌', drug:'喹诺酮类 + 含金属离子药物', interact:'含Ca/Mg/Al/Fe制剂、硫糖铝、去铁酮',
    detail:'形成不溶性螯合物，生物利用度降低30-90%。需间隔至少2小时。' },
  { id:'i023', cat:'口服配伍禁忌', drug:'华法林 + 多种药物', interact:'阿司匹林/NSAIDs、抗生素（头孢类、氟康唑、甲硝唑）、胺碘酮、甲状腺素',
    detail:'增强抗凝作用，出血风险显著增加。合并用药时需增加INR监测频率。含VK食物（绿叶蔬菜）需保持摄入量稳定。' },
  { id:'i024', cat:'口服配伍禁忌', drug:'PPI + 氯吡格雷', interact:'奥美拉唑、艾司奥美拉唑',
    detail:'PPI抑制CYP2C19，降低氯吡格雷活性代谢物生成。建议使用泮托拉唑或雷贝拉唑作为替代。' },
  { id:'i025', cat:'口服配伍禁忌', drug:'他汀类 + CYP3A4抑制剂', interact:'环孢素、克拉霉素、伊曲康唑、葡萄柚汁',
    detail:'他汀血药浓度显著升高，横纹肌溶解风险增加。辛伐他汀/阿托伐他汀需特别关注。瑞舒伐他汀/普伐他汀受影响较小。' },
  { id:'i026', cat:'口服配伍禁忌', drug:'ACEI/ARB + 保钾药', interact:'螺内酯、氨苯蝶啶、补钾制剂',
    detail:'高钾血症风险。合用需监测血钾和肾功能。糖尿病患者风险更高。' },
  { id:'i027', cat:'口服配伍禁忌', drug:'甲氨蝶呤 + NSAIDs/磺胺', interact:'布洛芬、萘普生、复方新诺明',
    detail:'竞争性抑制肾小管分泌，MTX清除减少，毒性增加（骨髓抑制、肝毒性）。MTX治疗期间避免合用。' },
  { id:'i028', cat:'口服配伍禁忌', drug:'地高辛 + 多种药物', interact:'胺碘酮、维拉帕米、奎尼丁、低钾（利尿剂导致）',
    detail:'显著增加地高辛血药浓度和中毒风险（心律失常、视觉异常）。低钾、低镁加重地高辛毒性。' },
  { id:'i029', cat:'口服配伍禁忌', drug:'锂盐 + NSAIDs/利尿剂', interact:'布洛芬、氢氯噻嗪',
    detail:'减少锂的肾排泄，血锂浓度显著升高，中毒风险增加。需密切监测血锂浓度。' },
  { id:'i030', cat:'口服配伍禁忌', drug:'避孕药 + 酶诱导剂', interact:'卡马西平、苯妥英钠、利福平、圣约翰草',
    detail:'加速雌激素代谢，避孕失败风险显著增加。建议改用非激素避孕方式。' },
  { id:'i031', cat:'输液通用原则', drug:'常用输液载体选择', vehicle:'一图速查',
    note:`【只能用0.9%氯化钠】奥美拉唑、泮托拉唑、呋塞米、两性霉素B、氨苄西林
【只能用5%葡萄糖】硝普钠、胺碘酮、普罗帕酮、盐酸氨溴索注射液
【两者均可】青霉素类、头孢类（除头孢曲松禁与含钙液）、喹诺酮类、万古霉素
【优先氯化钠】环丙沙星（避免与葡萄糖产生沉淀）` },
  { id:'i032', cat:'输液通用原则', drug:'输液速度控制', vehicle:'速度速查',
    note:`【慢速（≥60min）】万古霉素、左氧氟沙星500mg、阿奇霉素、莫西沙星（防红人综合征、QT延长）\n【中速（30-60min）】头孢类、青霉素类、PPI\n【快速（15-30min）】甘露醇（降颅压）、常规抗生素\n【极慢（按mL/h计）】胰岛素、多巴胺、硝酸甘油（微量泵控制）\n【绝对禁止】氯化钾、高浓度葡萄糖静脉推注` },
  { id:'i033', cat:'输液通用原则', drug:'配伍禁忌快速判断', vehicle:'四步法',
    note:`① 检查pH：酸性药（VitC、胰岛素）不与碱性药（碳酸氢钠、氨茶碱）混\n② 检查离子：含Ca²⁺液不与头孢曲松、磷酸盐混\n③ 查表确认：同一容器中两种以上药物需查配伍禁忌表\n④ 观察外观：配伍后观察30min有无变色、混浊、沉淀` },
];

// ═══ 科普教育数据 ═══
const HEALTH_EDU = [
  { id:'h001', cat:'营养素与食物来源', title:'维生素A', content:`【功能】维持正常视觉功能、上皮组织完整性、免疫功能。\n【食物来源】动物肝脏、鱼肝油、蛋黄、奶制品、胡萝卜、南瓜、菠菜。\n【缺乏症状】夜盲症、干眼症、皮肤干燥角化、免疫力下降。\n【过量风险】>10000IU/d长期：肝毒性、骨痛、皮肤干燥脱屑。\n【对药物的影响】与异维A酸合用增加维生素A中毒风险。`},
  { id:'h002', cat:'营养素与食物来源', title:'维生素B1（硫胺素）', content:`【功能】碳水化合物代谢、神经系统功能维持。\n【食物来源】糙米、全麦、瘦肉、豆类、花生。\n【缺乏症状】脚气病（干性：周围神经炎；湿性：心衰）、Wernicke脑病。\n【对药物的影响】长期使用利尿剂（呋塞米）可加速B1排泄。`},
  { id:'h003', cat:'营养素与食物来源', title:'维生素B6', content:`【功能】氨基酸代谢、神经递质合成、血红蛋白合成。\n【食物来源】鸡肉、鱼肉、土豆、香蕉、坚果。\n【缺乏症状】皮炎、舌炎、周围神经炎、贫血。\n【对药物的影响】异烟肼可导致B6缺乏，需同时补充B6（10-50mg/d）。左旋多巴与B6合用会降低药效。`},
  { id:'h004', cat:'营养素与食物来源', title:'维生素B12', content:`【功能】DNA合成、红细胞成熟、神经系统髓鞘形成。\n【食物来源】动物肝脏、肉类、鱼类、蛋类、奶制品。植物性食物几乎不含B12。\n【缺乏症状】巨幼细胞性贫血、周围神经病变、脊髓亚急性联合变性。\n【对药物的影响】二甲双胍长期使用可影响B12吸收，建议定期监测。PPI长期使用可降低B12吸收。`},
  { id:'h005', cat:'营养素与食物来源', title:'维生素C', content:`【功能】抗氧化、胶原蛋白合成、促进铁吸收、增强免疫。\n【食物来源】新鲜水果（猕猴桃、柑橘、草莓、鲜枣）、蔬菜（西兰花、辣椒、番茄）。\n【缺乏症状】坏血病（牙龈出血、皮下出血、伤口愈合不良）。\n【对药物的影响】大剂量VC可酸化尿液，影响酸性/碱性药物排泄。与铁剂同服可增加铁吸收。`},
  { id:'h006', cat:'营养素与食物来源', title:'维生素D', content:`【功能】促进钙磷吸收、骨骼矿化、免疫调节。\n【食物来源】深海鱼（三文鱼、沙丁鱼）、鱼肝油、蛋黄、强化奶制品、日晒合成。\n【缺乏症状】佝偻病（儿童）、骨质疏松/骨软化（成人）。\n【对药物的影响】糖皮质激素长期使用加速VD代谢，需补充VD+钙。苯妥英钠、卡马西平可加速VD代谢。`},
  { id:'h007', cat:'营养素与食物来源', title:'维生素K', content:`【功能】凝血因子合成（Ⅱ、Ⅶ、Ⅸ、Ⅹ）、骨代谢。\n【食物来源】绿叶蔬菜（菠菜、羽衣甘蓝、西兰花）、植物油、肝脏。\n【缺乏症状】凝血障碍、出血倾向。\n【对药物的影响】华法林通过拮抗VK发挥抗凝作用，需保持每日VK摄入稳定。大量摄入绿叶蔬菜可降低华法林效果。`},
  { id:'h008', cat:'营养素与食物来源', title:'钙 Ca', content:`【功能】骨骼牙齿构成、神经传导、肌肉收缩、凝血。\n【食物来源】奶制品、豆制品、小鱼干、芝麻酱、绿叶蔬菜。成人推荐800-1000mg/d。\n【对药物的影响】与四环素类、喹诺酮类、双膦酸盐同服影响吸收，需间隔2小时以上。噻嗪类利尿剂减少尿钙排泄。`},
  { id:'h009', cat:'营养素与食物来源', title:'钾 K', content:`【功能】维持细胞内外渗透压、神经传导、肌肉收缩、酸碱平衡。\n【食物来源】香蕉、土豆、番茄、橙子、豆类、蘑菇。\n【缺乏症状】乏力、肌无力、心律失常。\n【对药物的影响】利尿剂（呋塞米、氢氯噻嗪）可导致低钾；ACEI/ARB、保钾利尿剂可导致高钾。`},
  { id:'h010', cat:'营养素与食物来源', title:'铁 Fe', content:`【功能】血红蛋白和肌红蛋白的组成成分、氧气运输。\n【食物来源】红肉、动物肝脏、动物血、菠菜、黑木耳。\n【缺乏症状】缺铁性贫血（小细胞低色素性贫血）。\n【对药物的影响】与四环素类、喹诺酮类、左旋多巴同服影响吸收，间隔2小时。与VC同服促进吸收。茶和咖啡中的鞣酸影响铁吸收。`},
  { id:'h011', cat:'药物与饮食相互作用', title:'葡萄柚与药物', content:`葡萄柚（西柚）含有呋喃香豆素，强力抑制肠道CYP3A4酶，导致多种药物血药浓度升高。\n\n【受影响药物】\n• 他汀类：阿托伐他汀、辛伐他汀（风险最高）、洛伐他汀\n• CCB类降压药：硝苯地平、非洛地平\n• 抗心律失常：胺碘酮\n• 免疫抑制剂：环孢素、他克莫司\n• 抗焦虑：丁螺环酮\n\n【建议】服药期间避免食用葡萄柚及其果汁。`},
  { id:'h012', cat:'药物与饮食相互作用', title:'酒精与药物', content:`【双硫仑样反应】头孢类（头孢哌酮、头孢曲松等）、甲硝唑、呋喃唑酮服药前后7天内禁酒。\n【其他相互作用】\n• 对乙酰氨基酚+酒精：增加肝毒性风险\n• 华法林+急性大量饮酒：出血风险增加\n• 降糖药+酒精：低血糖风险（尤其空腹饮酒）\n• 镇静催眠药+酒精：呼吸抑制风险\n• NSAIDs+酒精：消化道出血风险增加`},
  { id:'h013', cat:'药物与饮食相互作用', title:'牛奶与药物', content:`【不宜与牛奶同服的药物】\n• 四环素类、喹诺酮类抗生素：钙离子螯合影响吸收\n• 双膦酸盐（阿仑膦酸钠）：显著降低吸收\n• 铁剂：钙影响铁吸收\n• 甲状腺素（左甲状腺素钠）：降低吸收\n\n【建议】以上药物与牛奶及奶制品间隔至少2小时服用。`},
  { id:'h014', cat:'药物与饮食相互作用', title:'高钾食物与药物', content:`服用以下药物时需控制高钾食物摄入：\n\n【致高钾药物】ACEI（培哚普利等）、ARB（氯沙坦等）、保钾利尿剂（螺内酯）、他克莫司、NSAIDs\n\n【高钾食物】香蕉、土豆、番茄、橙子、西瓜、豆类、菠菜\n\n【建议】使用上述药物者定期监测血钾，避免大量摄入高钾食物。`},
  { id:'h015', cat:'药物与饮食相互作用', title:'高蛋白饮食与药物', content:`高蛋白饮食对药物的影响：\n• 左旋多巴：与氨基酸竞争转运，降低药效，需餐前30min服用\n• 华法林：高蛋白饮食增加血清白蛋白，可能影响华法林蛋白结合率\n• 丙磺舒：高蛋白饮食可能降低其促尿酸排泄效果\n• 茶碱：高蛋白饮食加速茶碱代谢`},
  { id:'h016', cat:'药物服用时间', title:'需空腹服用的药物', content:`空腹=餐前1小时或餐后2小时\n\n• 甲状腺素（左甲状腺素钠）：清晨空腹，至少30min后进食\n• 双膦酸盐（阿仑膦酸钠）：清晨空腹，大量水送服，保持直立30min\n• 质子泵抑制剂（奥美拉唑等）：晨起空腹，餐前30-60min\n• 青霉素类（阿莫西林等）：空腹吸收更好\n• 利福平：空腹服用吸收最佳`},
  { id:'h017', cat:'药物服用时间', title:'需随餐或餐后服用的药物', content:`随餐=与食物同服或餐后立即服\n\n• 二甲双胍：随餐或餐后服，减轻胃肠反应\n• 阿司匹林、布洛芬等NSAIDs：餐后服减轻胃刺激\n• 阿卡波糖：与第一口饭同嚼服\n• 呋喃妥因：与食物同服增加吸收并减轻胃肠反应\n• 铁剂：餐后服减轻胃肠刺激（但VC同服促吸收）\n• 脂溶性维生素（A、D、E、K）：与含脂肪食物同服增加吸收`},
  { id:'h018', cat:'药物服用时间', title:'需睡前服用的药物', content:`• 他汀类（辛伐他汀、普伐他汀等）：胆固醇夜间合成高峰，睡前服效果最佳\n• 阿司匹林肠溶片：睡前服减少晨峰效应\n• 孟鲁司特钠：睡前服（哮喘/鼻炎症状夜间加重）\n• 镇静催眠药：睡前服用\n• 钙剂：睡前服用可抑制夜间骨吸收`},
  { id:'h019', cat:'药物服用时间', title:'服药与进食时间速查表', content:`【餐前30-60分钟】PPI（奥美拉唑等）、多潘立酮、格列美脲、格列吡嗪\n【餐前即刻】阿卡波糖、伏格列波糖\n【餐中】二甲双胍、消化酶制剂、奥利司他\n【餐后】NSAIDs、铁剂、氯化钾、呋喃妥因\n【空腹（餐前1h/餐后2h）】甲状腺素、双膦酸盐、青霉素类、利福平、异烟肼\n【睡前】他汀类（短半衰期）、阿司匹林肠溶片、孟鲁司特`},
  { id:'h020', cat:'特殊人群用药', title:'妊娠期用药分级', content:`FDA妊娠期用药分级：\n\nA级：对照研究显示无风险（维生素、甲状腺素合理剂量）\nB级：动物实验无风险，无人类数据（青霉素类、头孢类、对乙酰氨基酚）\nC级：动物实验显示风险，无人类数据（多数降压药、糖皮质激素）\nD级：有证据显示人类风险（苯妥英钠、卡马西平、华法林）\nX级：禁用（异维A酸、沙利度胺、他汀类、利巴韦林）\n\n⚠️ 具体用药请遵医嘱`},
  { id:'h021', cat:'特殊人群用药', title:'哺乳期用药注意事项', content:`【相对安全的药物】青霉素类、头孢类、对乙酰氨基酚、布洛芬\n【慎用的药物】阿司匹林（Reye综合征风险）、四环素类（影响婴儿牙齿骨骼）\n【禁用的药物】氯霉素（灰婴综合征）、磺胺类（核黄疸）、甲硝唑（暂停哺乳12-24h）\n\n【原则】选择短半衰期药物，喂奶后立即服药。首次用药观察婴儿反应。`},
  { id:'h022', cat:'特殊人群用药', title:'老年人用药原则', content:`【Beers标准】老年人潜在不适当用药：\n• 避免：苯二氮䓬类（增加跌倒/认知障碍风险）\n• 避免：第一代抗组胺药（苯海拉明等，抗胆碱能副作用）\n• 慎用：NSAIDs（消化道/肾毒性风险高）\n• 慎用：PPI长期使用（骨质疏松、感染风险）\n\n【原则】起始小剂量（通常成人量的1/2-2/3），缓慢滴定。精简用药，避免多重用药。`},
];

// ═══ 指南按系统分组 ═══
const GUIDE_SYSTEMS = [
  { system:'心血管系统', icon:'❤️', items:GUIDELINES.filter(g=>g.system==='心血管系统') },
  { system:'呼吸系统', icon:'🫁', items:GUIDELINES.filter(g=>g.system==='呼吸系统') },
  { system:'消化系统', icon:'🫄', items:GUIDELINES.filter(g=>g.system==='消化系统') },
  { system:'内分泌系统', icon:'🩸', items:GUIDELINES.filter(g=>g.system==='内分泌系统') },
  { system:'法律法规', icon:'📋', items:LAWS },
];
