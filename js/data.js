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

// ═══ 疾病数据 ═══
const DISEASES = [
  { id:'ds001', cat:'呼吸系统疾病', name:'社区获得性肺炎', desc:'社区环境中感染的肺实质炎症。常见病原体：肺炎链球菌、流感嗜血杆菌、肺炎支原体等。', symptoms:'发热、咳嗽、咳痰、胸痛、呼吸困难。', diagnosis:'胸部X线/CT显示浸润影 + 临床症状。', treatment:'经验性抗感染治疗为主，根据CURB-65评分决定治疗场所。' },
  { id:'ds002', cat:'呼吸系统疾病', name:'COPD', desc:'慢性阻塞性肺疾病，以持续气流受限为特征的常见呼吸系统疾病。主要病因：吸烟、空气污染。', symptoms:'慢性咳嗽、咳痰、进行性呼吸困难。', diagnosis:'肺功能FEV1/FVC<0.7。', treatment:'戒烟+支气管扩张剂（LABA/LAMA）+吸入激素（频繁急性加重者）。' },
  { id:'ds003', cat:'呼吸系统疾病', name:'支气管哮喘', desc:'以慢性气道炎症为特征的异质性疾病。特征：可变性气流受限。', symptoms:'反复发作性喘息、胸闷、咳嗽。', diagnosis:'可变气流受限证据+典型症状。', treatment:'按GINA阶梯方案，ICS为基础控制药物。' },
  { id:'ds004', cat:'心血管疾病', name:'高血压', desc:'动脉血压持续升高的慢性疾病。诊断标准：非同日3次SBP≥140和/或DBP≥90mmHg。', symptoms:'多数无症状，部分头晕、头痛。', diagnosis:'非同日多次测量血压升高。', treatment:'生活方式干预+五大类降压药。' },
  { id:'ds005', cat:'心血管疾病', name:'心力衰竭', desc:'各种心脏结构/功能异常导致心室充盈或射血能力受损的临床综合征。', symptoms:'呼吸困难、乏力、水肿。', diagnosis:'BNP/NT-proBNP升高+心脏超声LVEF评估。', treatment:'新四联：ARNI+β-blocker+MRA+SGLT2i。' },
  { id:'ds006', cat:'心血管疾病', name:'冠心病', desc:'冠状动脉粥样硬化导致管腔狭窄或阻塞，心肌缺血缺氧。', symptoms:'胸痛（压榨性）、放射至左肩。', diagnosis:'心电图+心肌酶+冠脉造影。', treatment:'抗血小板+他汀+β-blocker±血运重建。' },
  { id:'ds007', cat:'消化系统疾病', name:'胃溃疡', desc:'胃黏膜缺损深度超过黏膜肌层的慢性溃疡。Hp感染和NSAIDs为主要病因。', symptoms:'上腹痛（餐后加重）、反酸。', diagnosis:'胃镜+病理+Hp检测。', treatment:'根除Hp+PPI+胃黏膜保护剂。' },
  { id:'ds008', cat:'消化系统疾病', name:'反流性食管炎', desc:'胃内容物反流至食管引起的食管黏膜损伤。', symptoms:'烧心、反酸、胸骨后疼痛。', diagnosis:'胃镜检查。', treatment:'PPI为主，疗程4-8周。' },
  { id:'ds009', cat:'内分泌疾病', name:'2型糖尿病', desc:'胰岛素抵抗和/或分泌不足导致的慢性高血糖。', symptoms:'多饮、多尿、多食、体重减轻。', diagnosis:'FBG≥7.0或OGTT 2h≥11.1或HbA1c≥6.5%。', treatment:'二甲双胍为基础，逐步升级治疗。' },
  { id:'ds010', cat:'内分泌疾病', name:'痛风', desc:'嘌呤代谢紊乱致高尿酸血症，尿酸盐结晶沉积引起的关节炎。', symptoms:'急性关节炎（常首发第一跖趾关节）。', diagnosis:'高尿酸血症+典型关节炎+关节液尿酸盐结晶。', treatment:'急性期NSAIDs/秋水仙碱，缓解期降尿酸。' },
  { id:'ds011', cat:'内分泌疾病', name:'甲亢', desc:'甲状腺激素分泌过多。最常见：Graves病。', symptoms:'心悸、多汗、手抖、消瘦。', diagnosis:'TSH↓ + FT3/FT4↑。', treatment:'抗甲状腺药物±放射性碘或手术。' },
  { id:'ds012', cat:'神经系统疾病', name:'癫痫', desc:'大脑神经元异常同步放电导致的反复发作性疾病。', symptoms:'突发意识障碍、肢体抽搐等。', diagnosis:'临床发作特点+脑电图。', treatment:'抗癫痫药物，部分可手术。' },
  { id:'ds013', cat:'神经系统疾病', name:'脑卒中', desc:'急性脑血管病，分为缺血性（约80%）和出血性。', symptoms:'突发面部不对称、单侧肢体无力。', diagnosis:'头颅CT/MRI。', treatment:'溶栓/取栓+抗血小板+危险因素控制。' },
  { id:'ds014', cat:'消化系统疾病', name:'肝硬化', desc:'慢性肝损伤导致肝纤维化和假小叶形成的终末期肝病。', symptoms:'乏力、黄疸、腹水、肝掌。', diagnosis:'影像学+肝功能+肝弹性检测。', treatment:'病因治疗+并发症管理+肝移植评估。' },
  { id:'ds015', cat:'泌尿系统疾病', name:'尿路感染', desc:'病原微生物侵入尿路上皮引起的炎症反应。', symptoms:'尿频、尿急、尿痛，可伴发热。', diagnosis:'尿常规+尿培养。', treatment:'抗生素（呋喃妥因/头孢类/喹诺酮类）。' },
  { id:'ds016', cat:'心血管疾病', name:'心房颤动', desc:'最常见的心律失常，心房失去有效收缩。', symptoms:'心悸、胸闷、头晕，部分无症状。', diagnosis:'心电图+Holter。', treatment:'抗凝（DOAC/华法林）+ 心率/节律控制（β阻滞剂/胺碘酮）。' },
  { id:'ds017', cat:'心血管疾病', name:'心肌梗死', desc:'冠状动脉急性闭塞导致心肌缺血坏死。', symptoms:'胸痛>20min、出汗、放射至左肩/下颌。', diagnosis:'心电图ST段抬高+肌钙蛋白升高。', treatment:'急诊PCI+双联抗血小板+他汀+β阻滞剂。' },
  { id:'ds018', cat:'心血管疾病', name:'高脂血症', desc:'血液中脂质（胆固醇、甘油三酯）水平异常升高。', symptoms:'多数无症状。', diagnosis:'TC≥5.2或LDL-C≥3.4或TG≥1.7。', treatment:'他汀为基础，依折麦布/PCSK9i补充。' },
  { id:'ds019', cat:'呼吸系统疾病', name:'肺结核', desc:'结核分枝杆菌引起的慢性传染病。', symptoms:'咳嗽≥2周、咯血、午后低热、盗汗、消瘦。', diagnosis:'痰涂片/培养+胸部X线+PPD/IGRA。', treatment:'2HRZE/4HR方案（异烟肼+利福平+吡嗪酰胺+乙胺丁醇）。' },
  { id:'ds020', cat:'呼吸系统疾病', name:'肺栓塞', desc:'内源性或外源性栓子阻塞肺动脉。', symptoms:'突发呼吸困难、胸痛、咯血。', diagnosis:'CTPA+D-二聚体。', treatment:'抗凝（DOAC/低分子肝素→华法林），高危者溶栓。' },
  { id:'ds021', cat:'消化系统疾病', name:'胰腺炎', desc:'胰腺的急性炎症反应。', symptoms:'持续性上腹痛、向背部放射、恶心呕吐。', diagnosis:'血淀粉酶/脂肪酶≥3倍正常值+CT。', treatment:'禁食+补液+镇痛+营养支持。胆源性者ERCP。' },
  { id:'ds022', cat:'消化系统疾病', name:'炎症性肠病', desc:'包括克罗恩病和溃疡性结肠炎的慢性肠道炎症。', symptoms:'腹泻、腹痛、便血、体重下降。', diagnosis:'结肠镜+病理。', treatment:'5-ASA/激素/免疫抑制剂/生物制剂。' },
  { id:'ds023', cat:'内分泌疾病', name:'甲减', desc:'甲状腺激素分泌不足。', symptoms:'乏力、怕冷、体重增加、便秘、记忆力减退。', diagnosis:'TSH↑ + FT4↓。', treatment:'左甲状腺素替代治疗（清晨空腹）。' },
  { id:'ds024', cat:'内分泌疾病', name:'高尿酸血症', desc:'嘌呤代谢异常致血尿酸>420μmol/L。', symptoms:'多数无症状，部分进展为痛风。', diagnosis:'非同日2次空腹SUA>420。', treatment:'生活干预（低嘌呤饮食+多饮水）+ 别嘌醇/非布司他/苯溴马隆。' },
  { id:'ds025', cat:'内分泌疾病', name:'骨质疏松', desc:'骨密度下降、骨微结构破坏。', symptoms:'疼痛、身高变矮、驼背、易骨折。', diagnosis:'DXA骨密度T值≤-2.5。', treatment:'钙+VD+双膦酸盐/地舒单抗/特立帕肽。' },
  { id:'ds026', cat:'神经系统疾病', name:'帕金森病', desc:'黑质多巴胺神经元变性死亡。', symptoms:'静止性震颤、肌强直、运动迟缓、姿势步态异常。', diagnosis:'临床表现为主。', treatment:'左旋多巴/多巴胺受体激动剂（普拉克索）/MAO-B抑制剂。' },
  { id:'ds027', cat:'神经系统疾病', name:'偏头痛', desc:'反复发作的中重度搏动性头痛。', symptoms:'单侧搏动性头痛、畏光畏声、恶心。', diagnosis:'临床诊断（至少5次发作符合标准）。', treatment:'急性期：NSAIDs/曲普坦。预防：普萘洛尔/托吡酯/肉毒素。' },
  { id:'ds028', cat:'神经系统疾病', name:'阿尔茨海默病', desc:'进行性认知功能障碍和行为损害。', symptoms:'近记忆减退→语言障碍→定向力障碍→人格改变。', diagnosis:'认知量表+影像+排除其他原因。', treatment:'胆碱酯酶抑制剂（多奈哌齐）+NMDA拮抗剂（美金刚）。' },
  { id:'ds029', cat:'泌尿系统疾病', name:'慢性肾病', desc:'肾脏结构或功能异常≥3个月。', symptoms:'早期无症状→乏力、水肿、高血压、贫血。', diagnosis:'eGFR<60或蛋白尿≥3个月。', treatment:'控制血压（ACEI/ARB）+控糖+SGLT2i+低蛋白饮食。' },
  { id:'ds030', cat:'泌尿系统疾病', name:'肾结石', desc:'尿中晶体物质过饱和析出形成结石。', symptoms:'肾绞痛、血尿、恶心呕吐。', diagnosis:'B超/CT。', treatment:'<5mm保守排石（多饮水+α阻滞剂）；>10mm体外碎石/内镜取石。' },
  { id:'ds031', cat:'妇产科疾病', name:'妊娠期高血压', desc:'妊娠20周后出现的血压升高。', symptoms:'高血压±蛋白尿±水肿。', diagnosis:'BP≥140/90mmHg（妊娠20周后）。', treatment:'拉贝洛尔/硝苯地平/甲基多巴，硫酸镁防子痫。' },
  { id:'ds032', cat:'妇产科疾病', name:'月经失调', desc:'月经周期、经期或经量异常。', symptoms:'周期<21或>35天，经量过多/过少。', diagnosis:'病史+妇科检查+激素六项+B超。', treatment:'根据病因：激素调节/调经/手术治疗。' },
  { id:'ds033', cat:'五官科疾病', name:'青光眼', desc:'眼压升高导致视神经损伤。', symptoms:'早期无症状→视野缺损→视力下降。', diagnosis:'眼压测量+眼底检查+视野检查。', treatment:'降眼压药（噻吗洛尔/拉坦前列素/布林佐胺）+手术。' },
  { id:'ds034', cat:'五官科疾病', name:'中耳炎', desc:'中耳黏膜的急性或慢性炎症。', symptoms:'耳痛、听力下降、耳闷胀感，小儿可伴发热。', diagnosis:'耳镜检查鼓膜充血/穿孔。', treatment:'抗生素（阿莫西林/头孢类）+对症止痛。' },
  { id:'ds035', cat:'皮肤疾病', name:'湿疹', desc:'多种内外因素引起的表皮及真皮浅层炎症。', symptoms:'多形性皮损（红斑、丘疹、水疱）+剧烈瘙痒。', diagnosis:'临床表现+排除接触性皮炎等。', treatment:'保湿+外用激素/钙调磷酸酶抑制剂±口服抗组胺药。' },
  { id:'ds036', cat:'皮肤疾病', name:'银屑病', desc:'以红斑鳞屑为特征的慢性炎症性皮肤病。', symptoms:'边界清楚的红斑+银白色鳞屑+点状出血。', diagnosis:'临床表现+皮肤镜/病理。', treatment:'外用激素/维生素D3衍生物+光疗+系统用药（MTX/环孢素/生物制剂）。' },
  { id:'ds037', cat:'肿瘤疾病', name:'胃癌', desc:'胃黏膜上皮细胞的恶性肿瘤。', symptoms:'上腹痛、食欲减退、消瘦、黑便。', diagnosis:'胃镜+病理活检。', treatment:'手术+化疗+靶向（HER2阳性者曲妥珠单抗）+免疫治疗。' },
  { id:'ds038', cat:'肿瘤疾病', name:'结直肠癌', desc:'结肠或直肠黏膜上皮的恶性肿瘤。', symptoms:'排便习惯改变、便血、腹痛、消瘦。', diagnosis:'结肠镜+病理+CT分期。', treatment:'手术+化疗（FOLFOX/FOLFIRI）±靶向（贝伐珠单抗/西妥昔单抗）。' },
  { id:'ds039', cat:'肿瘤疾病', name:'乳腺癌', desc:'乳腺导管或小叶上皮的恶性肿瘤。', symptoms:'乳房无痛性肿块、皮肤凹陷/橘皮样变。', diagnosis:'乳腺B超+钼靶+穿刺活检。', treatment:'手术+化疗+放疗+内分泌治疗（ER/PR+）+靶向（HER2+）。' },
  { id:'ds040', cat:'血液系统疾病', name:'缺铁性贫血', desc:'体内铁储备不足导致血红蛋白合成减少。', symptoms:'乏力、头晕、苍白、异食癖。', diagnosis:'Hb↓+血清铁↓+铁蛋白↓。', treatment:'口服铁剂（琥珀酸亚铁）+VC同服促吸收+病因治疗。' },
];
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
  { id:'d001', name:'阿莫西林胶囊', py:'AMXLJN', en:'Amoxicillin Capsules', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'适用于敏感菌所致的呼吸道感染、泌尿生殖道感染、皮肤软组织感染、急性单纯性淋病、伤寒等。',
    contraindications:'对青霉素过敏者禁用。用药前必须进行青霉素皮肤试验，阳性反应者禁用。',
    adverse:'常见：恶心、呕吐、腹泻等胃肠道反应；偶见：皮疹、药物热、哮喘等过敏反应；罕见：伪膜性肠炎。',
    dosage:'口服。成人一次0.5g，每6~8小时1次，一日剂量不超过4g。小儿一日剂量按体重20~40mg/kg，每8小时1次。',
    storage:'遮光，密封，在阴凉干燥处（不超过20℃）保存。',
    interactions:'丙磺舒可竞争性抑制本药肾小管分泌；与氨基糖苷类合用可增强杀菌作用；与避孕药合用可能降低避孕效果。',
    label:`【药品名称】通用名称：阿莫西林胶囊 英文名称：Amoxicillin Capsules\n【成份】主要成份为阿莫西林。\n【性状】本品为胶囊剂，内容物为白色或类白色粉末。\n【适应症】适用于敏感菌所致的呼吸道感染、泌尿生殖道感染等。\n【用法用量】口服。成人一次0.5g，每6~8小时1次，一日不超过4g。\n【不良反应】常见胃肠道反应，偶见过敏反应。\n【禁忌】青霉素过敏者禁用。\n【注意事项】用药前须做皮试。肾功能不全者需调整剂量。\n【药物相互作用】与丙磺舒合用可延长半衰期；与氨基糖苷类有协同作用。\n【贮藏】遮光，密封，阴凉干燥处保存。\n【批准文号】国药准字H......` },
  { id:'d002', name:'头孢克肟胶囊', py:'TBKWJN', en:'Cefixime Capsules', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'适用于敏感菌所致的呼吸道感染、泌尿道感染、胆道感染、中耳炎等。',
    contraindications:'对头孢菌素类过敏者禁用。有青霉素过敏性休克史者慎用。',
    adverse:'偶见腹泻、恶心、皮疹、一过性肝功能异常。',
    dosage:'成人及体重30kg以上儿童：一次0.1g，一日2次。',
    storage:'遮光，密封，阴凉干燥处保存。',
    interactions:'与氨基糖苷类合用可能增加肾毒性。与抗凝药合用可能增加出血风险。' },
  { id:'d003', name:'左氧氟沙星片', py:'ZYFSX片', en:'Levofloxacin Tablets', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'适用于敏感菌所致的社区获得性肺炎、复杂性尿路感染、慢性支气管炎急性发作等。',
    contraindications:'对喹诺酮类药物过敏者、癫痫患者、18岁以下禁用。',
    adverse:'常见恶心、腹泻、头晕、失眠；偶见肌腱炎、QT间期延长。',
    dosage:'成人一次0.5g，一日1次。',
    storage:'遮光，密封，阴凉处保存。',
    interactions:'与含金属离子药物（铁剂、铝剂）合用影响吸收，需间隔2小时以上。' },
  { id:'d004', name:'硝苯地平控释片', py:'XBDPKS片', en:'Nifedipine Controlled-release', category:'心血管系统用药', subcategory:'降压药', type:'处方药',
    indications:'用于治疗高血压、心绞痛（慢性稳定性心绞痛及变异型心绞痛）。',
    contraindications:'心源性休克、严重主动脉瓣狭窄、不稳定心绞痛急性发作期。',
    adverse:'常见头痛、面部潮红、踝部水肿、心悸。',
    dosage:'一次30mg，一日1次。整片吞服，不可掰开。',
    storage:'遮光，密封，不超过25℃保存。',
    interactions:'与CYP3A4抑制剂（如葡萄柚汁）合用可能升高血药浓度。与β受体阻滞剂合用可能加重心衰。' },
  { id:'d005', name:'二甲双胍片', py:'EJSG片', en:'Metformin Tablets', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药',
    indications:'用于单纯饮食控制不满意的2型糖尿病患者，尤其是肥胖和伴高胰岛素血症者。',
    contraindications:'严重肾功能不全（eGFR<30）、糖尿病酮症酸中毒、严重感染时禁用。',
    adverse:'常见胃肠道反应（恶心、腹泻）；长期使用可能影响维生素B12吸收。',
    dosage:'起始剂量一次0.25g，一日2-3次，随餐服用；最大剂量一日2g。',
    storage:'密封保存。',
    interactions:'碘造影剂检查前需暂停本药。与酒精合用可能增加乳酸酸中毒风险。' },
  { id:'d006', name:'奥美拉唑肠溶片', py:'AMLZCR片', en:'Omeprazole Enteric-coated', category:'消化系统用药', subcategory:'抗酸药', type:'处方药',
    indications:'用于胃溃疡、十二指肠溃疡、反流性食管炎、卓-艾综合征。',
    contraindications:'对本药过敏者禁用。',
    adverse:'常见头痛、腹泻、恶心；长期使用可能增加骨折风险和维生素B12缺乏。',
    dosage:'一次20mg，一日1-2次。晨起吞服，不可咀嚼。',
    storage:'遮光，密封，阴凉干燥处保存。',
    interactions:'与氯吡格雷合用可能降低后者抗血小板效果。影响胃酸依赖药物（如酮康唑）的吸收。' },
  { id:'d007', name:'阿司匹林肠溶片', py:'ASPLCR片', en:'Aspirin Enteric-coated', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'OTC',
    indications:'抑制血小板聚集，用于预防心脑血管疾病。也用于解热镇痛。',
    contraindications:'活动性消化性溃疡、出血倾向者、哮喘患者。',
    adverse:'常见胃肠道反应、出血时间延长；偶见过敏反应。',
    dosage:'抗血小板：一次100mg，一日1次。解热镇痛：一次0.3-0.6g。',
    storage:'密封，阴凉干燥处保存。',
    interactions:'与其他NSAIDs合用增加胃溃疡风险；与抗凝药合用增加出血风险。' },
  { id:'d008', name:'氯雷他定片', py:'L雷T定片', en:'Loratadine Tablets', category:'呼吸系统用药', subcategory:'抗组胺药', type:'OTC',
    indications:'用于缓解过敏性鼻炎症状，如喷嚏、流涕、鼻痒及眼部症状。也用于慢性荨麻疹。',
    contraindications:'对本药过敏者禁用。',
    adverse:'罕见乏力、头痛、口干。无明显镇静作用。',
    dosage:'成人及12岁以上儿童：一次10mg，一日1次。',
    storage:'密封保存。',
    interactions:'与酮康唑、红霉素合用可能升高氯雷他定血药浓度。' },
  { id:'d009', name:'阿托伐他汀钙片', py:'ATFT汀G片', en:'Atorvastatin Calcium', category:'心血管系统用药', subcategory:'调脂药', type:'处方药',
    indications:'用于高胆固醇血症和混合型高脂血症，降低心血管事件风险。',
    contraindications:'活动性肝病、不明原因转氨酶持续升高、妊娠及哺乳期。',
    adverse:'常见肌痛、腹泻；偶见肝功能异常、肌酸激酶升高。',
    dosage:'起始剂量10-20mg，一日1次，晚餐后服用。',
    storage:'遮光，密封保存。',
    interactions:'与吉非罗齐合用增加肌病风险。与环孢素、克拉霉素合用需调整剂量。' },
  { id:'d010', name:'氢氯噻嗪片', py:'QLSQ片', en:'Hydrochlorothiazide', category:'心血管系统用药', subcategory:'利尿剂', type:'处方药',
    indications:'用于水肿性疾病、高血压、尿崩症。',
    contraindications:'无尿者、磺胺过敏者。',
    adverse:'电解质紊乱（低钾、低钠）、高尿酸血症、血糖升高。',
    dosage:'降压：一次12.5-25mg，一日1次。',
    storage:'遮光，密封保存。',
    interactions:'与洋地黄类合用注意低钾风险；与降糖药合用可能影响降糖效果。' },
  { id:'d011', name:'头孢曲松钠', py:'TBQSN', en:'Ceftriaxone Sodium', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'用于敏感菌所致的下呼吸道感染、泌尿道感染、腹腔感染、败血症、脑膜炎等。',
    contraindications:'对头孢菌素过敏者禁用。',
    adverse:'常见腹泻、皮疹；偶见胆道假结石、一过性肝酶升高。',
    dosage:'成人一次1-2g，一日1次。严重感染可增至4g/d。',
    storage:'遮光，密闭，阴凉干燥处保存。',
    interactions:'与含钙溶液配伍禁忌。与氨基糖苷类合用有协同作用。' },
  { id:'d012', name:'阿奇霉素片', py:'AQMS片', en:'Azithromycin Tablets', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'用于敏感菌所致的呼吸道感染、皮肤软组织感染、泌尿生殖道感染。',
    contraindications:'对大环内酯类过敏者禁用。',
    adverse:'常见腹泻、恶心；偶见QT间期延长、肝功能异常。',
    dosage:'成人一次0.5g，一日1次，连用3天；或首日0.5g，第2-5日0.25g qd。',
    storage:'密封，干燥处保存。',
    interactions:'与抗凝药合用可能增加出血风险。与茶碱合用可能增加茶碱血药浓度。' },
  { id:'d013', name:'莫西沙星片', py:'MXSX片', en:'Moxifloxacin Tablets', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'用于敏感菌所致的社区获得性肺炎、慢性支气管炎急性发作、急性鼻窦炎。',
    contraindications:'18岁以下、癫痫患者、QT间期延长者禁用。',
    adverse:'常见恶心、腹泻、头晕；偶见QT间期延长、肌腱炎。',
    dosage:'一次0.4g，一日1次。疗程5-14天。',
    storage:'遮光，密封保存。',
    interactions:'与抗心律失常药合用可能加重QT延长。与含金属离子药物间隔2小时以上服用。' },
  { id:'d014', name:'布洛芬缓释胶囊', py:'BLFHSJN', en:'Ibuprofen SR Capsules', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'OTC',
    indications:'用于缓解轻中度疼痛、关节痛、头痛、牙痛、痛经；也用于退热。',
    contraindications:'活动性消化性溃疡、严重肾功能不全、妊娠晚期禁用。',
    adverse:'常见胃肠道反应；偶见头晕、皮疹、肾功能损害。',
    dosage:'一次0.3g，一日2次。饭后服用减轻胃肠刺激。',
    storage:'密封保存。',
    interactions:'与抗凝药合用增加出血风险。与其他NSAIDs合用增加胃溃疡风险。' },
  { id:'d015', name:'氯沙坦钾片', py:'LSTJ片', en:'Losartan Potassium', category:'心血管系统用药', subcategory:'降压药', type:'处方药',
    indications:'用于治疗原发性高血压。尤其适用于合并糖尿病肾病的高血压患者。',
    contraindications:'妊娠中晚期禁用。双侧肾动脉狭窄者禁用。',
    adverse:'偶见头晕、高钾血症、肾功能损害。干咳发生率低于ACEI。',
    dosage:'起始剂量50mg，一日1次。可增至100mg qd。',
    storage:'遮光，密封保存。',
    interactions:'与保钾利尿药合用可能增加高钾血症风险。与NSAIDs合用可能减弱降压效果。' },
  { id:'d016', name:'氨氯地平片', py:'ALDP片', en:'Amlodipine Tablets', category:'心血管系统用药', subcategory:'降压药', type:'处方药',
    indications:'用于治疗高血压和稳定性心绞痛。',
    contraindications:'重度主动脉瓣狭窄、不稳定心绞痛急性期。',
    adverse:'常见踝部水肿、头痛、面部潮红；偶见心悸、牙龈增生。',
    dosage:'起始剂量5mg，一日1次。最大10mg qd。',
    storage:'遮光，密封保存。',
    interactions:'与CYP3A4强抑制剂合用可能升高血药浓度。与β受体阻滞剂合用注意心衰风险。' },
  { id:'d017', name:'美托洛尔缓释片', py:'MTLEHS片', en:'Metoprolol SR', category:'心血管系统用药', subcategory:'降压药', type:'处方药',
    indications:'用于高血压、心绞痛、慢性心力衰竭（NYHA Ⅱ-Ⅲ级）。',
    contraindications:'心源性休克、病态窦房结综合征、严重心动过缓。',
    adverse:'常见疲劳、头晕、心动过缓；偶见肢端发冷、支气管痉挛。',
    dosage:'心衰：起始23.75mg qd，逐步滴定至190mg qd。降压：47.5-95mg qd。',
    storage:'遮光，密封保存。',
    interactions:'与维拉帕米合用禁。与地高辛合用可能增加心动过缓风险。' },
  { id:'d018', name:'沙库巴曲缬沙坦片', py:'SKBQXST片', en:'Sacubitril/Valsartan', category:'心血管系统用药', subcategory:'抗心衰药', type:'处方药',
    indications:'用于射血分数降低的慢性心力衰竭（NYHA Ⅱ-Ⅳ级）。',
    contraindications:'同时使用ACEI者（需洗脱36h）、血管性水肿史、妊娠期。',
    adverse:'常见低血压、高钾血症、肾功能损害；偶见血管性水肿。',
    dosage:'起始剂量50mg bid，逐步增加至200mg bid。',
    storage:'密封，不超过25℃保存。',
    interactions:'禁与ACEI合用。与保钾利尿药合用增加高钾风险。与NSAIDs合用可能减弱疗效。' },
  { id:'d019', name:'非布司他片', py:'FBST片', en:'Febuxostat Tablets', category:'解热镇痛药', subcategory:'抗痛风药', type:'处方药',
    indications:'用于痛风患者高尿酸血症的长期治疗（不推荐用于无临床症状的高尿酸血症）。',
    contraindications:'正在使用硫唑嘌呤或巯嘌呤者禁用。',
    adverse:'常见肝功能异常、关节痛；偶见心血管事件增加风险。',
    dosage:'起始剂量40mg，一日1次。2周后SUA不达标可增至80mg qd。',
    storage:'遮光，密封保存。',
    interactions:'与硫唑嘌呤、巯嘌呤合用可显著增加后者毒性。' },
  { id:'d020', name:'胰岛素注射液（短效）', py:'YDSZSY（短效）', en:'Regular Insulin', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药', tag:'高危',
    indications:'用于1型糖尿病、2型糖尿病口服药控制不佳、糖尿病急症（酮症酸中毒）。',
    contraindications:'低血糖发作时禁用。',
    adverse:'常见低血糖、注射部位脂肪萎缩；偶见过敏反应。',
    dosage:'个体化给药。一般餐前15-30分钟皮下注射。',
    storage:'未开封：2-8℃冷藏。开封后：室温（<25℃）保存不超过4周。',
    interactions:'与糖皮质激素、噻嗪类利尿药合用可能减弱降糖效果。与β受体阻滞剂合用可能掩盖低血糖症状。' },
  { id:'d021', name:'达格列净片', py:'达GL净片', en:'Dapagliflozin', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药',
    indications:'用于2型糖尿病、射血分数降低的心衰、慢性肾病（eGFR≥25）。',
    contraindications:'eGFR<25时禁用。1型糖尿病禁用。',
    adverse:'常见泌尿生殖道感染；偶见酮症酸中毒（血糖不高时也可发生）、脱水。',
    dosage:'2型糖尿病/心衰/CKD：10mg qd。',
    storage:'密封保存。',
    interactions:'与利尿剂合用可能增加脱水风险。与胰岛素/磺脲类合用增加低血糖风险。' },
  { id:'d022', name:'氯吡格雷片', py:'LBG雷片', en:'Clopidogrel', category:'血液系统用药', subcategory:'抗凝药', type:'处方药',
    indications:'用于预防动脉粥样硬化血栓形成事件：ACS、PCI术后、缺血性卒中。',
    contraindications:'活动性出血、严重肝功能损害。',
    adverse:'常见出血（消化道、皮肤）；偶见血小板减少症。',
    dosage:'负荷量300mg，维持量75mg qd。',
    storage:'密封保存。',
    interactions:'与PPI（尤其是奥美拉唑）合用可能减弱抗血小板效果。与抗凝药合用增加出血风险。' },
  { id:'d023', name:'利伐沙班片', py:'利FS班片', en:'Rivaroxaban', category:'血液系统用药', subcategory:'抗凝药', type:'处方药',
    indications:'用于非瓣膜性房颤卒中预防、DVT/PE治疗和预防。',
    contraindications:'活动性出血、严重肝功能损害合并凝血障碍。',
    adverse:'常见出血；偶见肝功能异常、血小板减少。',
    dosage:'房颤：20mg qd（CrCl 15-49者15mg qd）。DVT/PE：15mg bid×21天，然后20mg qd。',
    storage:'密封，不超过30℃。',
    interactions:'与其他抗凝药、抗血小板药合用增加出血风险。与CYP3A4/P-gp强抑制剂合用增加血药浓度。' },
  { id:'d024', name:'孟鲁司特钠片', py:'MLSTN片', en:'Montelukast Sodium', category:'呼吸系统用药', subcategory:'平喘药', type:'处方药',
    indications:'用于哮喘的预防和长期治疗（包括阿司匹林敏感性哮喘）、过敏性鼻炎。',
    contraindications:'对本药过敏者禁用。',
    adverse:'罕见头痛、腹痛；极罕见精神神经事件。',
    dosage:'成人10mg qd，睡前服用。',
    storage:'遮光，密封，室温保存。',
    interactions:'与苯妥英钠、利福平合用可能降低血药浓度。' },
  { id:'d025', name:'甲泼尼龙片', py:'JPN龙片', en:'Methylprednisolone', category:'内分泌系统用药', subcategory:'激素类', type:'处方药',
    indications:'用于过敏性疾病、自身免疫性疾病、炎症性疾病、器官移植排斥反应等。',
    contraindications:'全身性真菌感染、对本品过敏者。',
    adverse:'长期使用：库欣综合征、骨质疏松、高血糖、感染风险增加、消化道溃疡。',
    dosage:'起始剂量4-48mg/d，根据疾病和反应调整。需逐步减量停药。',
    storage:'遮光，密封保存。',
    interactions:'与NSAIDs合用增加消化道溃疡风险。与利福平合用加速代谢。' },
  { id:'d026', name:'甲钴胺片', py:'JGA片', en:'Mecobalamin', category:'营养支持药', subcategory:'维生素类', type:'OTC',
    indications:'用于周围神经病变、巨幼细胞性贫血。',
    contraindications:'对本药过敏者禁用。',
    adverse:'偶见食欲不振、恶心、腹泻；罕见皮疹。',
    dosage:'一次0.5mg，一日3次。',
    storage:'遮光，密封保存。',
    interactions:'与氯霉素合用可能影响造血系统。' },
  { id:'d027', name:'碳酸钙D3片', py:'TSGD3片', en:'Calcium Carbonate/D3', category:'营养支持药', subcategory:'电解质', type:'OTC',
    indications:'用于预防和治疗钙缺乏症、骨质疏松的辅助治疗。',
    contraindications:'高钙血症、严重肾功能不全。',
    adverse:'偶见便秘、胃肠胀气。',
    dosage:'一次1片（钙600mg+D3 200IU），一日1-2次。',
    storage:'密封保存。',
    interactions:'与四环素类、喹诺酮类抗生素同服影响吸收，需间隔2小时以上。' },
  { id:'d028', name:'铝碳酸镁咀嚼片', py:'LTSM咀嚼片', en:'Hydrotalcite', category:'消化系统用药', subcategory:'胃黏膜保护剂', type:'OTC',
    indications:'用于胃酸过多引起的胃痛、胃灼热、反酸、饱胀等。',
    contraindications:'严重肾功能不全、低磷血症。',
    adverse:'偶见便秘、腹泻。',
    dosage:'一次1-2片，一日3-4次。餐后1-2小时嚼服。',
    storage:'密封保存。',
    interactions:'可影响四环素类、喹诺酮类、铁剂吸收，需间隔1-2小时服用。' },
  { id:'d029', name:'氯硝西泮片', py:'LXXP片', en:'Clonazepam', category:'神经系统用药', subcategory:'镇静催眠药', type:'处方药（精二）', tag:'精二',
    indications:'用于癫痫和惊恐障碍。',
    contraindications:'重症肌无力、闭角型青光眼、严重呼吸功能不全。',
    adverse:'常见嗜睡、乏力、共济失调；长期使用可产生依赖性。',
    dosage:'癫痫：起始0.5mg tid，每3天增量0.5-1mg。成人最大量20mg/d。',
    storage:'遮光，密封保存。',
    interactions:'与酒精及其他中枢抑制剂合用增强镇静作用。与丙戊酸合用可能诱发失神发作。' },
  { id:'d030', name:'氨溴索片', py:'AXS片', en:'Ambroxol', category:'呼吸系统用药', subcategory:'祛痰药', type:'OTC',
    indications:'用于急慢性呼吸道疾病引起的痰液黏稠、咳痰困难。',
    contraindications:'对本品过敏者。',
    adverse:'偶见恶心、胃部不适。',
    dosage:'成人一次30mg，一日3次。长期服用减为bid。',
    storage:'遮光，密封保存。',
    interactions:'与抗生素（阿莫西林、头孢呋辛等）合用可增加其在肺组织的浓度。' },
  { id:'d031', name:'头孢呋辛酯片', py:'TBFXZ片', en:'Cefuroxime Axetil', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'用于敏感菌所致的呼吸道、泌尿道、皮肤软组织感染等。手术预防用药。', contraindications:'头孢类过敏者禁用。',
    adverse:'常见腹泻、恶心；偶见皮疹。', dosage:'0.25-0.5g bid，餐后服用。', storage:'遮光密封。',
    interactions:'与氨基糖苷类合用增加肾毒性。' },
  { id:'d032', name:'哌拉西林他唑巴坦', py:'哌LXLTZBT', en:'Piperacillin/Tazobactam', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'中重度感染：腹腔感染、肺炎、败血症等。', contraindications:'青霉素过敏者禁用。',
    adverse:'常见腹泻；偶见肝酶升高、血小板减少。', dosage:'4.5g q8h 静脉滴注。', storage:'遮光密封。',
    interactions:'与氨基糖苷类有协同作用。与甲氨蝶呤合用增加后者毒性。' },
  { id:'d033', name:'美罗培南', py:'ML培南', en:'Meropenem', category:'抗生素', subcategory:'抗生素', type:'处方药（特殊使用级）', tag:'高危',
    indications:'多重耐药菌所致重症感染：腹腔感染、脑膜炎、败血症等。', contraindications:'碳青霉烯类过敏者禁用。',
    adverse:'常见腹泻、转氨酶升高；偶见癫痫。', dosage:'0.5-1g q8h 静脉滴注。', storage:'密封保存。',
    interactions:'与丙戊酸钠合用显著降低后者血药浓度（禁忌联用）。' },
  { id:'d034', name:'万古霉素', py:'WGMS', en:'Vancomycin', category:'抗生素', subcategory:'抗生素', type:'处方药（特殊使用级）', tag:'高危',
    indications:'MRSA等耐药G+菌重症感染。艰难梭菌相关性腹泻（口服）。', contraindications:'对本药过敏者。',
    adverse:'肾毒性、耳毒性、红人综合征。需监测血药谷浓度(10-20mg/L)。', dosage:'1g q12h 静脉滴注≥60min。', storage:'密封保存。',
    interactions:'与其他肾毒性药物合用增加肾损伤风险。' },
  { id:'d035', name:'甲硝唑片', py:'JXZ片', en:'Metronidazole', category:'抗生素', subcategory:'抗生素', type:'处方药',
    indications:'厌氧菌感染、滴虫病、阿米巴病。Hp根除方案组分。', contraindications:'妊娠早期禁用。',
    adverse:'金属味、恶心；服药期间尿液呈红棕色（正常现象）。', dosage:'0.4-0.5g bid-tid。', storage:'遮光密封。',
    interactions:'服药期间及停药7天内禁酒（双硫仑样反应）。与华法林合用增强抗凝作用。' },
  { id:'d036', name:'氟康唑胶囊', py:'FKZJN', en:'Fluconazole', category:'抗生素', subcategory:'抗真菌药', type:'处方药',
    indications:'念珠菌感染、隐球菌性脑膜炎。', contraindications:'对本药过敏者。',
    adverse:'常见恶心；偶见肝毒性。', dosage:'首剂0.4g，之后0.2g qd。', storage:'密封保存。',
    interactions:'与华法林合用增强抗凝。与磺脲类降糖药合用增加低血糖风险。' },
  { id:'d037', name:'奥司他韦胶囊', py:'ASTWJN', en:'Oseltamivir', category:'抗生素', subcategory:'抗病毒药', type:'处方药',
    indications:'用于成人和1岁以上儿童的甲型和乙型流感治疗及预防。症状出现48h内开始。', contraindications:'对本药过敏者。',
    adverse:'常见恶心、呕吐（与食物同服可减轻）。', dosage:'治疗：75mg bid×5天。预防：75mg qd。', storage:'密封保存。',
    interactions:'与丙磺舒合用可增加奥司他韦血药浓度。' },
  { id:'d038', name:'恩替卡韦片', py:'ETKW片', en:'Entecavir', category:'抗生素', subcategory:'抗病毒药', type:'处方药',
    indications:'慢性乙型肝炎。', contraindications:'对本药过敏者。',
    adverse:'偶见头痛、疲劳；罕见乳酸酸中毒。', dosage:'0.5mg qd，空腹服用（餐前/后≥2h）。', storage:'密封保存。',
    interactions:'与食物同服可显著降低吸收。' },
  { id:'d039', name:'厄贝沙坦片', py:'厄贝ST片', en:'Irbesartan', category:'心血管系统用药', subcategory:'降压药', type:'处方药',
    indications:'原发性高血压。合并高血压的2型糖尿病肾病。', contraindications:'妊娠中晚期禁用。',
    adverse:'偶见头晕、高钾血症。', dosage:'150mg qd，可增至300mg qd。', storage:'密封保存。',
    interactions:'与保钾利尿药或补钾制剂合用增加高钾风险。' },
  { id:'d040', name:'比索洛尔片', py:'BSLE片', en:'Bisoprolol', category:'心血管系统用药', subcategory:'降压药', type:'处方药',
    indications:'高血压、冠心病、慢性心力衰竭。', contraindications:'严重心动过缓、Ⅱ度以上房室传导阻滞。',
    adverse:'常见心动过缓、乏力、肢端发冷。', dosage:'起始2.5-5mg qd，心衰最大10mg qd。', storage:'遮光密封。',
    interactions:'与维拉帕米合用禁。与地高辛合用增加心动过缓风险。' },
  { id:'d041', name:'硝苯地平片', py:'XBDP片', en:'Nifedipine', category:'心血管系统用药', subcategory:'降压药', type:'处方药',
    indications:'高血压、心绞痛。', contraindications:'心源性休克、严重主动脉瓣狭窄。',
    adverse:'头痛、面部潮红、踝部水肿、反射性心悸（短效剂型）。', dosage:'控释片30mg qd；普通片10mg tid。', storage:'遮光密封。',
    interactions:'与CYP3A4抑制剂（葡萄柚汁）合用可能升高血药浓度。' },
  { id:'d042', name:'螺内酯片', py:'LNZ片', en:'Spironolactone', category:'心血管系统用药', subcategory:'利尿剂', type:'处方药',
    indications:'心力衰竭、高血压、原醛症。', contraindications:'高钾血症、严重肾功能不全。',
    adverse:'高钾血症、男性乳房发育、月经紊乱。', dosage:'心衰：起始20mg qd。', storage:'密封保存。',
    interactions:'与ACEI/ARB合用增加高钾风险。与地高辛合用可增加地高辛血药浓度。' },
  { id:'d043', name:'呋塞米片', py:'FSM片', en:'Furosemide', category:'心血管系统用药', subcategory:'利尿剂', type:'处方药',
    indications:'水肿性疾病（心衰、肾衰、肝硬化）、高血压。', contraindications:'无尿者、严重电解质紊乱者。',
    adverse:'低钾、低钠、低氯性碱中毒、高尿酸血症、耳毒性。', dosage:'起始20-40mg qd-bid。', storage:'遮光密封。',
    interactions:'与氨基糖苷类合用增加耳毒性。与NSAIDs合用减弱利尿效果。' },
  { id:'d044', name:'华法林钠片', py:'HFLN片', en:'Warfarin Sodium', category:'血液系统用药', subcategory:'抗凝药', type:'处方药', tag:'高危',
    indications:'房颤卒中预防、DVT/PE治疗和预防、心脏瓣膜置换术后。', contraindications:'活动性出血、妊娠期。',
    adverse:'出血（需监测INR）。', dosage:'初始2.5-3mg qd，根据INR调整（目标2.0-3.0）。', storage:'遮光密封。',
    interactions:'与多种药物（抗生素、NSAIDs、胺碘酮等）和食物（VK含量）相互作用。' },
  { id:'d045', name:'艾司奥美拉唑肠溶片', py:'ASAMLZCR片', en:'Esomeprazole', category:'消化系统用药', subcategory:'抗酸药', type:'处方药',
    indications:'消化性溃疡、反流性食管炎、根除Hp、NSAIDs相关溃疡预防。', contraindications:'对本药过敏者。',
    adverse:'常见头痛、腹泻；长期：骨质疏松、维生素B12缺乏、肠道感染风险。', dosage:'20-40mg qd，晨起空腹。', storage:'遮光密封。',
    interactions:'与氯吡格雷合用可能降低后者抗血小板效果。影响酮康唑等胃酸依赖药物吸收。' },
  { id:'d046', name:'多潘立酮片', py:'DPLT片', en:'Domperidone', category:'消化系统用药', subcategory:'止吐药', type:'处方药',
    indications:'胃排空延缓、胃食管反流引起的恶心呕吐。', contraindications:'消化道出血、穿孔者禁用。',
    adverse:'偶见口干、头痛；罕见QT延长。', dosage:'10mg tid，餐前15-30min。', storage:'遮光密封。',
    interactions:'与酮康唑等CYP3A4抑制剂合用增加QT延长风险。' },
  { id:'d047', name:'蒙脱石散', py:'MTSS', en:'Montmorillonite Powder', category:'消化系统用药', subcategory:'止泻药', type:'OTC',
    indications:'成人及儿童急慢性腹泻。', contraindications:'对本品过敏者。',
    adverse:'偶见便秘。', dosage:'1袋（3g）tid，两餐之间服用。', storage:'密封保存。',
    interactions:'与其他药物间隔至少2小时服用，以免影响吸收。' },
  { id:'d048', name:'瑞舒伐他汀钙片', py:'RSFT汀G片', en:'Rosuvastatin Calcium', category:'心血管系统用药', subcategory:'调脂药', type:'处方药',
    indications:'高胆固醇血症和混合型高脂血症。', contraindications:'活动性肝病、妊娠哺乳期。',
    adverse:'肌痛、肝酶升高；偶见蛋白尿。', dosage:'起始5-10mg qd，最大20mg qd。', storage:'密封保存。',
    interactions:'与吉非罗齐合用增加肌病风险。与环孢素、抗病毒药合用需减量。' },
  { id:'d049', name:'格列美脲片', py:'GLMN片', en:'Glimepiride', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药',
    indications:'用于饮食和运动控制不满意的2型糖尿病。', contraindications:'1型糖尿病、酮症酸中毒。',
    adverse:'低血糖、体重增加。', dosage:'起始1mg qd，早餐前服用。最大6mg qd。', storage:'密封保存。',
    interactions:'与氟康唑合用增强降糖作用。与β受体阻滞剂合用可能掩盖低血糖症状。' },
  { id:'d050', name:'阿卡波糖片', py:'AKBT片', en:'Acarbose', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药',
    indications:'用于2型糖尿病（降低餐后血糖）。', contraindications:'肠梗阻、严重肾功能不全。',
    adverse:'常见腹胀、排气增多。', dosage:'起始50mg tid，与第一口饭同嚼服。最大200mg tid。', storage:'密封保存。',
    interactions:'与磺脲类/胰岛素合用增加低血糖风险（低血糖时需用葡萄糖纠正，蔗糖无效）。' },
  { id:'d051', name:'胰岛素（甘精胰岛素）', py:'YDS（GJYDS）', en:'Insulin Glargine', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药', tag:'高危',
    indications:'1型/2型糖尿病的基础胰岛素治疗。', contraindications:'低血糖发作时。',
    adverse:'低血糖、注射部位脂肪增生。', dosage:'个体化，qd皮下注射（固定时间）。', storage:'未开封2-8℃，开封后<25℃，4周内用完。',
    interactions:'与糖皮质激素、甲状腺素合用可能减弱降糖效果。' },
  { id:'d052', name:'甲氨蝶呤片', py:'JADL片', en:'Methotrexate', category:'抗肿瘤药', subcategory:'化疗药', type:'处方药', tag:'毒',
    indications:'类风湿关节炎、银屑病、滋养细胞肿瘤、急性白血病。', contraindications:'严重肝肾功能不全、妊娠哺乳期。',
    adverse:'骨髓抑制、肝毒性、口腔炎、间质性肺炎。', dosage:'RA：7.5-15mg qw。补充叶酸5mg qw（MTX后24h）。', storage:'遮光密封。',
    interactions:'与NSAIDs合用减少MTX排泄增加毒性。与磺胺类合用增加骨髓抑制。' },
  { id:'d053', name:'来氟米特片', py:'LFMT片', en:'Leflunomide', category:'抗肿瘤药', subcategory:'免疫治疗药', type:'处方药',
    indications:'类风湿关节炎、狼疮性肾炎。', contraindications:'严重肝功能损害、妊娠期。',
    adverse:'腹泻、肝酶升高、脱发。', dosage:'负荷量50mg qd×3天，维持量20mg qd。', storage:'密封保存。',
    interactions:'与其他肝毒性药物合用增加肝损伤风险。与华法林合用增强抗凝。' },
  { id:'d054', name:'羟氯喹片', py:'QLK片', en:'Hydroxychloroquine', category:'抗肿瘤药', subcategory:'免疫治疗药', type:'处方药',
    indications:'类风湿关节炎、系统性红斑狼疮、光敏性疾病。', contraindications:'黄斑病变、6岁以下儿童。',
    adverse:'视网膜毒性（需每年眼科检查）、皮肤色素沉着、胃肠道反应。', dosage:'RA/SLE：0.2-0.4g qd。', storage:'遮光密封。',
    interactions:'与胺碘酮等增加QT延长风险。与地高辛合用增加地高辛血药浓度。' },
  { id:'d055', name:'别嘌醇片', py:'BPC片', en:'Allopurinol', category:'解热镇痛药', subcategory:'抗痛风药', type:'处方药', tag:'毒',
    indications:'慢性高尿酸血症、痛风石、尿酸性肾病。', contraindications:'急性痛风发作时不可新用。',
    adverse:'皮疹（严重者超敏反应综合征），起始小剂量可减少。', dosage:'起始50-100mg qd，逐步增量至300mg qd。', storage:'密封保存。',
    interactions:'与硫唑嘌呤、6-MP合用显著增加后者毒性（禁忌联用）。与华法林合用增强抗凝。' },
  { id:'d056', name:'苯溴马隆片', py:'BXML片', en:'Benzbromarone', category:'解热镇痛药', subcategory:'抗痛风药', type:'处方药',
    indications:'原发性高尿酸血症。', contraindications:'中度以上肾功能不全、肾结石。',
    adverse:'胃肠反应；偶见肝毒性。', dosage:'50mg qd，早餐后服。用药期间保证每日饮水>2000mL。', storage:'密封保存。',
    interactions:'与华法林合用增强抗凝。水杨酸类药物减弱其促尿酸排泄作用。' },
  { id:'d057', name:'普瑞巴林胶囊', py:'PRBLJN', en:'Pregabalin', category:'神经系统用药', subcategory:'抗癫痫药', type:'处方药（精二）', tag:'精二',
    indications:'带状疱疹后神经痛、纤维肌痛、癫痫辅助治疗。', contraindications:'对本品过敏者。',
    adverse:'头晕、嗜睡、口干、体重增加。', dosage:'起始75mg bid，可增至150mg bid。', storage:'密封保存。',
    interactions:'与中枢抑制剂合用增强镇静作用。与噻唑烷二酮类合用增加体重增加和水肿风险。' },
  { id:'d058', name:'卡马西平片', py:'KMXP片', en:'Carbamazepine', category:'神经系统用药', subcategory:'抗癫痫药', type:'处方药',
    indications:'癫痫（部分性发作）、三叉神经痛。', contraindications:'骨髓抑制、房室传导阻滞。',
    adverse:'头晕、嗜睡、皮疹（警惕Stevens-Johnson综合征）、白细胞减少。HLA-B*1502阳性者禁用。', dosage:'起始100mg bid，逐步增量。', storage:'遮光密封。',
    interactions:'强CYP3A4诱导剂，加速多种药物代谢（口服避孕药、华法林、环孢素）。' },
  { id:'d059', name:'左乙拉西坦片', py:'ZYLXT片', en:'Levetiracetam', category:'神经系统用药', subcategory:'抗癫痫药', type:'处方药',
    indications:'部分性发作的添加治疗。', contraindications:'对本品过敏者。',
    adverse:'嗜睡、乏力、头晕。', dosage:'起始500mg bid，可增至1500mg bid。', storage:'密封保存。',
    interactions:'与其他抗癫痫药相比，药物相互作用少。' },
  { id:'d060', name:'舍曲林片', py:'SQL片', en:'Sertraline', category:'神经系统用药', subcategory:'抗抑郁药', type:'处方药',
    indications:'抑郁症、强迫症、社交焦虑障碍、创伤后应激障碍。', contraindications:'与MAOIs合用禁。',
    adverse:'恶心、腹泻、失眠、性功能障碍。', dosage:'起始50mg qd，晨或晚服用。最大200mg qd。', storage:'密封保存。',
    interactions:'禁与MAOIs合用（间隔至少14天）。与NSAIDs/抗凝药合用增加出血风险。' },
  { id:'d061', name:'氯化钾缓释片', py:'L化JHS片', en:'KCl SR Tablets', category:'营养支持药', subcategory:'电解质', type:'处方药', tag:'高危',
    indications:'各种原因引起的低钾血症的预防和治疗。', contraindications:'高钾血症、严重肾功能不全。',
    adverse:'口服后胃肠不适。', dosage:'0.5-1g bid-tid，餐后服。', storage:'密封保存。',
    interactions:'与ACEI/ARB、保钾利尿剂合用增加高钾血症风险。' },
  { id:'d062', name:'琥珀酸亚铁片', py:'琥珀S亚T片', en:'Ferrous Succinate', category:'血液系统用药', subcategory:'抗贫血药', type:'OTC',
    indications:'缺铁性贫血的预防和治疗。', contraindications:'血色病、含铁血黄素沉着症。',
    adverse:'黑便（正常现象）、胃肠道不适、便秘。', dosage:'一次1-2片，一日1-3次。餐后服。', storage:'密封保存。',
    interactions:'与四环素类、喹诺酮类、抗酸药同服间隔2小时以上。VC同服可增加吸收。' },
  { id:'d063', name:'叶酸片', py:'YS片', en:'Folic Acid', category:'血液系统用药', subcategory:'抗贫血药', type:'OTC',
    indications:'巨幼细胞性贫血、妊娠期叶酸缺乏的预防（0.4mg qd）。MTX治疗时的补充。', contraindications:'对本品过敏者。',
    adverse:'罕见过敏反应。', dosage:'治疗量：5-10mg tid。预防量：0.4mg qd。', storage:'遮光密封。',
    interactions:'与苯妥英钠合用可能降低后者血药浓度。大剂量叶酸可掩盖B12缺乏。' },
  { id:'d064', name:'左甲状腺素钠片', py:'ZJ状腺SN片', en:'Levothyroxine Sodium', category:'内分泌系统用药', subcategory:'甲状腺用药', type:'处方药',
    indications:'甲减的替代治疗。TSH抑制治疗（甲状腺癌术后）。', contraindications:'未纠正的肾上腺皮质功能不全。',
    adverse:'过量时出现甲亢症状。', dosage:'起始25-50μg qd，根据TSH每4-6周调整。清晨空腹，至少30min后进食。', storage:'遮光密封，<25℃。',
    interactions:'与钙剂、铁剂、含铝药物间隔≥4h服用。与含大豆制品间隔服用。' },
  { id:'d065', name:'地高辛片', py:'DGX片', en:'Digoxin', category:'心血管系统用药', subcategory:'抗心律失常药', type:'处方药', tag:'高危',
    indications:'心力衰竭（尤其合并快速房颤）、房颤/房扑的心室率控制。', contraindications:'室颤、预激综合征合并房颤。',
    adverse:'心律失常、恶心、视觉异常（黄视/绿视）。治疗窗窄，需监测血药浓度（0.5-2.0ng/mL）。', dosage:'0.125-0.25mg qd。', storage:'密封保存。',
    interactions:'低钾、低镁增加中毒风险。与胺碘酮、维拉帕米合用增加血药浓度。' },
  { id:'d066', name:'胺碘酮片', py:'ADT片', en:'Amiodarone', category:'心血管系统用药', subcategory:'抗心律失常药', type:'处方药', tag:'高危',
    indications:'房颤复律及窦律维持、室性心律失常。', contraindications:'严重心动过缓、甲状腺功能异常者。',
    adverse:'肺毒性（监测肺功能）、甲状腺功能异常、肝毒性、角膜微粒沉积、皮肤蓝灰色色素沉着。', dosage:'负荷量0.2g tid×7天，维持0.2g qd。', storage:'遮光密封。',
    interactions:'与华法林合用增强抗凝（需减少华法林1/3-1/2）。与地高辛合用增加地高辛浓度。' },
  { id:'d067', name:'阿仑膦酸钠片', py:'AL膦SN片', en:'Alendronate Sodium', category:'内分泌系统用药', subcategory:'激素类', type:'处方药',
    indications:'骨质疏松症。', contraindications:'食管排空延迟、不能站立或端坐30min者。',
    adverse:'食管炎、食管糜烂。', dosage:'70mg qw，清晨空腹大量水送服，保持直立≥30min。', storage:'密封保存。',
    interactions:'与钙剂、抗酸药、含金属离子药物间隔≥30min服用。' },
  { id:'d068', name:'坦索罗辛缓释胶囊', py:'TSLXHSJN', en:'Tamsulosin SR', category:'男科/泌尿科用药', subcategory:'前列腺用药', type:'处方药',
    indications:'前列腺增生所致的排尿障碍。', contraindications:'体位性低血压史者。',
    adverse:'头晕、射精异常。', dosage:'0.2mg qd，餐后服。', storage:'密封保存。',
    interactions:'与PDE5抑制剂（西地那非等）合用增加低血压风险。与其他α受体阻滞剂合用注意血压。' },
  { id:'d069', name:'非那雄胺片', py:'FNXA片', en:'Finasteride', category:'男科/泌尿科用药', subcategory:'前列腺用药', type:'处方药',
    indications:'前列腺增生、男性雄激素性脱发。', contraindications:'妇女和儿童。',
    adverse:'性欲减退、勃起功能障碍。', dosage:'BPH：5mg qd。脱发：1mg qd。', storage:'密封保存。',
    interactions:'无显著药物相互作用。但可降低血清PSA水平（约50%），解释PSA结果时需注意。' },
  { id:'d070', name:'黄体酮胶囊', py:'HTTJN', en:'Progesterone', category:'妇产科用药', subcategory:'激素类', type:'处方药',
    indications:'先兆流产、习惯性流产、月经失调。', contraindications:'严重肝病、血栓性疾病。',
    adverse:'头晕、嗜睡、乳房胀痛。', dosage:'先兆流产：0.2-0.3g/d分次服。', storage:'遮光密封。',
    interactions:'与CYP3A4诱导剂合用可能降低药效。' },
  { id:'d071', name:'泼尼松片', py:'PNS片', en:'Prednisone', category:'内分泌系统用药', subcategory:'激素类', type:'处方药',
    indications:'过敏性疾病、自身免疫性疾病、炎症性疾病、淋巴系统肿瘤。', contraindications:'全身性真菌感染。',
    adverse:'长期：库欣综合征、骨质疏松、高血糖、感染风险增加。需逐步减量。', dosage:'5-60mg/d，按疾病调整。', storage:'遮光密封。',
    interactions:'与NSAIDs合用增加溃疡风险。与利福平合用加速代谢。与降糖药合用可能减弱降糖效果。' },
  { id:'d072', name:'氯苯那敏片', py:'LBN敏片', en:'Chlorpheniramine', category:'呼吸系统用药', subcategory:'抗组胺药', type:'OTC',
    indications:'过敏性鼻炎、荨麻疹等过敏性疾病。', contraindications:'新生儿、早产儿。',
    adverse:'嗜睡、口干。服药期间避免驾驶。', dosage:'4mg tid。', storage:'密封保存。',
    interactions:'与其他中枢抑制剂合用增强镇静。与MAOIs合用可能增强抗胆碱能作用。' },
  { id:'d073', name:'吸入用布地奈德混悬液', py:'吸入YBD奈德混悬Y', en:'Budesonide Inhalation', category:'呼吸系统用药', subcategory:'平喘药', type:'处方药',
    indications:'支气管哮喘。', contraindications:'对本品过敏者。',
    adverse:'口腔念珠菌感染、声音嘶哑（吸药后漱口可预防）。', dosage:'0.5-1mg bid 雾化吸入。', storage:'遮光密封。',
    interactions:'与CYP3A4强抑制剂合用可能增加全身暴露。' },
  { id:'d074', name:'异丙托溴铵吸入剂', py:'YBTX铵吸入J', en:'Ipratropium Bromide', category:'呼吸系统用药', subcategory:'平喘药', type:'处方药',
    indications:'COPD的支气管扩张治疗。', contraindications:'对阿托品类过敏者。',
    adverse:'口干、咳嗽。', dosage:'2-4喷 tid-qid。', storage:'遮光密封。',
    interactions:'与其他抗胆碱能药物合用增强作用。' },
  { id:'d075', name:'乳果糖口服液', py:'RGTKFY', en:'Lactulose Oral Solution', category:'消化系统用药', subcategory:'止泻药', type:'OTC',
    indications:'慢性功能性便秘。肝性脑病的辅助治疗。', contraindications:'半乳糖血症。',
    adverse:'初始腹胀，继续使用后缓解。', dosage:'15-30mL qd-bid。', storage:'密封保存。',
    interactions:'与其他泻药合用可能增加腹泻风险。' },
  { id:'d076', name:'柳氮磺吡啶肠溶片', py:'LDHB啶CR片', en:'Sulfasalazine', category:'消化系统用药', subcategory:'止泻药', type:'处方药',
    indications:'溃疡性结肠炎、克罗恩病、类风湿关节炎。', contraindications:'磺胺类过敏、肠梗阻。',
    adverse:'恶心、头痛、皮疹、男性不育（可逆）。', dosage:'起始0.5g bid，渐增至1g tid-qid。', storage:'密封保存。',
    interactions:'与叶酸合用可能影响叶酸吸收。与抗凝药合用增强抗凝。' },
  { id:'d077', name:'美沙拉秦肠溶片', py:'MSL秦CR片', en:'Mesalazine', category:'消化系统用药', subcategory:'止泻药', type:'处方药',
    indications:'溃疡性结肠炎、克罗恩病。', contraindications:'严重肾功能损害、水杨酸过敏。',
    adverse:'腹泻、恶心、腹痛；罕见肾毒性。', dosage:'急性期1g qid；维持期0.5g tid。', storage:'密封保存。',
    interactions:'与硫唑嘌呤合用可能增加骨髓抑制风险。' },
  { id:'d078', name:'西地那非片', py:'XDNF片', en:'Sildenafil', category:'男科/泌尿科用药', subcategory:'勃起功能障碍药', type:'处方药',
    indications:'勃起功能障碍、肺动脉高压。', contraindications:'与硝酸酯类药物合用禁。',
    adverse:'头痛、面部潮红、消化不良、视觉异常。', dosage:'ED：50mg 性活动前1h服用。', storage:'密封保存。',
    interactions:'禁与任何形式的硝酸酯类药物合用（严重低血压）。与α受体阻滞剂合用注意血压。' },
  { id:'d079', name:'曲马多缓释片', py:'QMDHS片', en:'Tramadol SR', category:'解热镇痛药', subcategory:'阿片类', type:'处方药（精二）', tag:'精二',
    indications:'中度至重度疼痛。', contraindications:'严重呼吸抑制、急性酒精中毒。',
    adverse:'恶心、头晕、便秘、出汗。', dosage:'50-100mg q12h。', storage:'密封保存。',
    interactions:'与SSRI类抗抑郁药合用可能增加5-HT综合征风险。与其他中枢抑制剂合用增强呼吸抑制。' },
  { id:'d080', name:'塞来昔布胶囊', py:'SLXBJN', en:'Celecoxib', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'处方药',
    indications:'骨关节炎、类风湿关节炎的疼痛和炎症。', contraindications:'磺胺类过敏、CABG围术期。',
    adverse:'消化道反应（较传统NSAIDs少）、心血管风险（剂量相关）。', dosage:'0.2g qd-bid。', storage:'密封保存。',
    interactions:'与华法林合用增加出血风险。与ACEI合用可能减弱降压效果。' },
  { id:'d081', name:'阿托品眼用凝胶', py:'AT品YYNJ', en:'Atropine Eye Gel', category:'五官科用药', subcategory:'眼科用药', type:'处方药',
    indications:'散瞳验光、虹膜睫状体炎。', contraindications:'闭角型青光眼。',
    adverse:'视物模糊、畏光、口干。', dosage:'遵医嘱使用。', storage:'遮光密封。',
    interactions:'与其他抗胆碱能药物合用增强作用。' },
  { id:'d082', name:'左氧氟沙星滴眼液', py:'ZYFSXDYY', en:'Levofloxacin Eye Drops', category:'五官科用药', subcategory:'眼科用药', type:'处方药',
    indications:'细菌性结膜炎、角膜炎。', contraindications:'喹诺酮类过敏者。',
    adverse:'一过性眼刺激。', dosage:'1-2滴，q2-4h。', storage:'遮光密封。',
    interactions:'与其他眼用制剂间隔≥5min使用。' },
  { id:'d083', name:'糠酸莫米松鼻喷雾剂', py:'KSMMSBPWJ', en:'Mometasone Nasal Spray', category:'五官科用药', subcategory:'耳鼻喉用药', type:'处方药',
    indications:'过敏性鼻炎。', contraindications:'鼻部手术后未愈。',
    adverse:'鼻出血、咽喉刺激。', dosage:'每侧鼻孔2喷 qd。', storage:'密封保存。',
    interactions:'与CYP3A4强抑制剂合用可能增加全身暴露。' },
  { id:'d084', name:'开塞露', py:'KSL', en:'Glycerin Enema', category:'消化系统用药', subcategory:'止泻药', type:'OTC',
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
  { id:'g011', system:'消化系统', title:'质子泵抑制剂临床应用指南', year:'2024', content:`一、常用PPI
奥美拉唑 20mg / 艾司奥美拉唑 20-40mg / 泮托拉唑 40mg / 雷贝拉唑 10-20mg

二、适应证
1. 消化性溃疡：疗程十二指肠4周/胃6-8周
2. GERD：初始治疗4-8周，维持治疗最低有效剂量
3. Hp根除：标准剂量bid，疗程14天
4. NSAIDs相关溃疡预防：标准剂量qd
5. 上消化道出血：大剂量PPI 80mg iv bolus + 8mg/h持续输注72h

三、合理使用原则
• 用最低有效剂量、最短疗程
• 长期使用（>1年）需评估利弊：骨质疏松、B12缺乏、肠道感染（艰难梭菌）、社区获得性肺炎风险增加
• 应激性溃疡预防仅限于高危患者：机械通气>48h、凝血功能障碍

四、停药建议
• 疗程≤4周可骤停
• 长期使用者建议逐步减量：减量50%/周至停药，防反跳性胃酸高分泌` },
  { id:'g012', system:'抗感染', title:'围手术期抗菌药物预防指南', year:'2024', content:`一、基本原则
• Ⅰ类切口原则上不预防用药
• Ⅱ类切口建议预防用药（切皮前30-60min给药）
• Ⅲ/Ⅳ类切口治疗性使用
• 一般手术预防用药≤24h，心脏手术可延长至48h

二、常用方案
清洁手术（有高危因素）：头孢唑林1-2g或头孢呋辛1.5g
结直肠手术：头孢西丁2g或头孢曲松2g+甲硝唑0.5g
妇科手术：头孢唑林2g±甲硝唑0.5g
骨科关节置换：头孢唑林2g（体重>120kg用3g）

三、特殊人群
青霉素过敏：克林霉素+庆大霉素或万古霉素
MRSA高危：加用万古霉素
手术时间>2倍药物半衰期或失血>1500mL：追加一剂

四、常见错误
• 术后用药时间过长（>48h）
• 使用广谱抗生素替代窄谱（三代头孢代替一代）
• 不必要的联合用药` },
  { id:'g013', system:'血液系统', title:'华法林抗凝治疗中国专家共识', year:'2024', content:`一、适应证
• 非瓣膜性房颤卒中预防（TIA2DS2-VASc≥2分）
• 静脉血栓栓塞症（DVT/PE）治疗和二级预防
• 心脏瓣膜置换术后

二、INR目标范围
• 一般抗凝：INR 2.0-3.0
• 机械瓣（二尖瓣）：INR 2.5-3.5
• 高龄/高出血风险：INR 1.8-2.5

三、剂量与监测
• 初始剂量：2.5-3mg qd（中国人建议2.5mg起始）
• 第3-4天首次测INR
• 稳定前每周监测，稳定后每4周监测
• 一次漏服：发现时立即补服；次日发现则跳过，不可加倍

四、INR异常处理
INR 3.0-4.5（无出血）：减量或跳过一次，监测
INR 4.5-10（无出血）：停1-2次+维生素K1 1-2.5mg po
INR>10（无出血）：停华法林+维生素K1 5mg po
任何INR+严重出血：停华法林+维生素K1 10mg iv+PCC

五、围手术期桥接
• 低血栓风险：术前5天停，术后恢复
• 高血栓风险：停华法林→低分子肝素桥接` },
  { id:'g014', system:'神经系统', title:'慢性疼痛药物治疗指南', year:'2024', content:`一、WHO三阶梯止痛
第一阶梯（轻度NRS 1-3）
对乙酰氨基酚、NSAIDs（布洛芬、塞来昔布）
第二阶梯（中度NRS 4-6）
弱阿片类：曲马多50-100mg q6-8h、可待因±NSAIDs
第三阶梯（重度NRS 7-10）
强阿片类：吗啡、羟考酮、芬太尼透皮贴

二、神经病理性疼痛
一线：加巴喷丁/普瑞巴林、TCAs（阿米替林）、SNRIs（度洛西汀）
二线：曲马多、利多卡因贴片
三线：强阿片类

三、阿片类安全使用
• 起始短效、剂量个体化、按需给药→按时给药
• 预防便秘（常规联合缓泻药）
• 预防恶心（前3-5天甲氧氯普胺）
• 定期评估"4A"：镇痛/Analgesia、活动/Activity、不良反应/Adverse effects、异常行为/Aberrant behavior
• 避免与苯二氮䓬类合用（呼吸抑制风险）

四、癌痛管理
• 阿片类无天花板效应，按需增加剂量
• 神经病理性癌痛：阿片类+加巴喷丁/普瑞巴林
• 骨转移痛：阿片类+NSAIDs+放疗` },
  { id:'g015', system:'消化系统', title:'Hp根除治疗全国专家共识', year:'2024', content:`一、根除适应证
强烈推荐：消化性溃疡（无论活动/静止）、胃MALT淋巴瘤
推荐：慢性胃炎伴消化不良、长期PPI使用者、胃癌家族史、不明原因缺铁性贫血

二、根除方案（铋剂四联14天）
方案1：PPI标准剂量bid + 铋剂220mg bid + 阿莫西林1g bid + 克拉霉素0.5g bid
方案2：PPI标准剂量bid + 铋剂220mg bid + 阿莫西林1g bid + 甲硝唑0.4g tid
方案3：PPI标准剂量bid + 铋剂220mg bid + 阿莫西林1g bid + 四环素0.5g qid
方案4：PPI标准剂量bid + 铋剂220mg bid + 阿莫西林1g bid + 呋喃唑酮0.1g bid

三、青霉素过敏者
• 甲硝唑+四环素+铋剂+PPI
• 克拉霉素+甲硝唑+铋剂+PPI

四、根除后评估
• 停药≥4周后复查C13/C14呼气试验
• 一线根除失败→换方案（避免重复使用克拉霉素/甲硝唑）
• 二线仍失败→药敏试验指导` },
  { id:'g016', system:'内分泌系统', title:'骨质疏松诊疗指南', year:'2024', content:`一、诊断标准
• DXA骨密度：T值≤-2.5（骨质疏松）
• -2.5<T值<-1.0（骨量减少）
• 脆性骨折史即诊断为骨质疏松

二、基础治疗
• 钙剂：1000-1200mg/d（饮食+补充剂）
• 维生素D3：800-1200IU/d，维持血清25(OH)D≥30ng/mL
• 负重运动、预防跌倒

三、药物治疗指征
• T值≤-2.5（无论有无骨折）
• 骨量减少+脆性骨折
• FRAX评估高骨折风险

四、药物选择
一线口服：阿仑膦酸钠70mg qw / 唑来膦酸5mg iv每年一次
替代：地舒单抗60mg sc 每6月一次
绝经后早期：雌激素/SERMs（雷洛昔芬）
高骨折风险：特立帕肽（促骨形成，疗程≤24月）
中成药辅助：补肾壮骨类中药

五、疗程与监测
• 双膦酸盐口服5年、静脉3年后评估
• 低风险：停药观察（药物假期）
• 高风险：继续治疗或更换药物
• 每年复查骨密度` },
  { id:'g017', system:'心血管系统', title:'心房颤动抗凝治疗指南', year:'2024', content:`一、卒中风险评估 CHA2DS2-VASc
C：心衰 1分
H：高血压 1分
A2：年龄≥75岁 2分
D：糖尿病 1分
S2：卒中/TIA/血栓栓塞史 2分
V：血管疾病（心梗/PAD） 1分
A：年龄65-74岁 1分
Sc：女性 1分
≥2分（男）/≥3分（女）：推荐抗凝

二、出血风险评估 HAS-BLED
H：高血压 SBP>160 1分
A：肝/肾功能异常 各1分
S：卒中史 1分
B：出血史/倾向 1分
L：INR不稳定 1分
E：年龄>65岁 1分
D：药物（抗血小板/NSAIDs）/饮酒 各1分
≥3分：高出血风险，需密切监测

三、抗凝选择
首选：DOACs（达比加群、利伐沙班、阿哌沙班、依度沙班）
次选：华法林（INR 2.0-3.0）
机械瓣：仅限华法林
CKD 4-5期：华法林（DOACs证据有限）

四、特殊情况
• 围手术期：DOACs术前停24-48h，术后止血后恢复
• 合并冠心病PCI：三联→双联抗栓（DOAC+氯吡格雷）
• 颅内出血后：多学科评估是否重启抗凝` },
  { id:'g018', system:'血液系统', title:'肾性贫血诊疗指南', year:'2024', content:`一、诊断标准
• 男性Hb<130g/L，女性<120g/L
• 排除其他原因（缺铁、炎症、溶血等）
• eGFR<60且Hb降低

二、治疗靶目标
• Hb目标：110-120g/L（不超过130g/L）
• 铁蛋白：200-500μg/L
• TSAT：20-50%

三、铁剂补充
口服：琥珀酸亚铁0.1-0.2g tid、多糖铁复合物
静脉：蔗糖铁100mg iv qw-biweekly（累积量1000mg后评估）
先用铁剂使铁储备充足后再用ESA

四、ESA使用
起始时机：Hb<100g/L
rhEPO：50-100IU/kg qw（皮下/静脉）
达依泊汀α：起始20-40μg qw
剂量调整：Hb月增速1-2g/dL为目标
Hb>115g/L减量25%，>130g/L暂停

五、ESA低反应
常见原因：铁缺乏（最常见）、炎症/感染、继发性甲旁亢、铝中毒、营养不良
处理：纠正可逆因素后增加ESA剂量25-50%

六、HIF-PHI（新型口服药）
罗沙司他：起始70-100mg tiw（非透析）/ 100-120mg tiw（透析），根据Hb调整` },
  { id:'g019', system:'抗肿瘤', title:'化疗止吐指南', year:'2024', content:`一、化疗致吐风险分级
高致吐（>90%）：顺铂、环磷酰胺≥1.5g/m²
中致吐（30-90%）：奥沙利铂、卡铂、阿霉素
低致吐（10-30%）：紫杉醇、多西他赛、5-FU
轻微（<10%）：长春碱类

二、高致吐方案
急性期（D1）：NK1受体拮抗剂+5-HT3受体拮抗剂+地塞米松12mg±奥氮平5mg
延迟期（D2-4）：地塞米松8mg bid±NK1受体拮抗剂±奥氮平5mg qd

三、中致吐方案
急性期：5-HT3受体拮抗剂+地塞米松12mg
延迟期：地塞米松8mg qd或5-HT3受体拮抗剂

四、低致吐
地塞米松8mg 单药

五、常用止吐药
5-HT3拮抗剂：昂丹司琼8mg bid、格拉司琼1mg bid、帕洛诺司琼0.25mg iv（长效）
NK1拮抗剂：阿瑞匹坦125mg D1、80mg D2-3
地塞米松：注意高血糖、失眠副作用
奥氮平：2.5-5mg qd（注意嗜睡）
甲氧氯普胺：10-20mg q6h（仅用于低致吐或补救）` },
  { id:'g020', system:'内分泌系统', title:'糖皮质激素临床应用指导原则', year:'2024', content:`一、常用制剂与等效剂量
短效：氢化可的松20mg （生物半衰期8-12h）
中效：泼尼松5mg、甲泼尼龙4mg（12-36h）
长效：地塞米松0.75mg（36-54h）
等效抗炎剂量：泼尼松5mg = 甲泼尼龙4mg = 地塞米松0.75mg = 氢化可的松20mg

二、给药方案
• 清晨顿服（符合生理节律，减少HPA轴抑制）
• 隔日疗法（中效制剂，减少副作用）
• 短期冲击（≤5天）：无需逐渐减量
• 长期（>3周）：需根据病情和HPA轴功能逐步减量
减量原则：每1-2周减量2.5-5mg泼尼松等效量

三、主要副作用及预防
高血糖：监测，必要时降糖药
高血压/水钠潴留：限钠、监测血压
骨质疏松：补充钙剂+维生素D，必要时双膦酸盐
消化道溃疡：高危者联合PPI预防
感染风险：用药前筛查TB/HBV，注意机会性感染
白内障/青光眼：眼科定期检查
精神症状：告知患者可能情绪波动

四、特殊人群
妊娠：泼尼松/甲泼尼龙（胎盘代谢率高，胎儿暴露少）
儿童：用最小有效剂量，监测生长发育
老年人：同时补钙和VitD，防骨折

五、撤药综合征处理
症状：乏力、关节痛、肌痛、情绪低落
处理：减慢减量速度，回到上一有效剂量` },
  { id:'g021', system:'抗感染', title:'碳青霉烯类抗菌药物临床应用专家共识', year:'2023', content:`一、代表药物
亚胺培南西司他丁、美罗培南、比阿培南、厄他培南

二、适应证（严格限制）
• 产ESBL肠杆菌科细菌所致重症感染
• 混合需氧/厌氧菌重症感染
• 粒缺伴发热高危患者经验性治疗
• 多重耐药菌感染（仅敏感时）

三、不宜使用情况
• 轻中度感染有替代方案时
• 预防用药
• 已明确病原菌对窄谱抗生素敏感

四、特殊病原菌管理
• CRE（碳青霉烯耐药肠杆菌）：需联合治疗+药敏指导
• 铜绿假单胞菌：仅对亚胺培南/美罗培南敏感菌株
• 鲍曼不动杆菌：多耐药时联合舒巴坦/替加环素/多粘菌素

五、剂量与疗程
• 美罗培南：0.5-1g q8h iv（脑膜炎2g q8h）
• 亚胺培南：0.5g q6h iv（最大4g/d）
• 疗程一般7-14天` },
  { id:'g022', system:'抗感染', title:'喹诺酮类抗菌药物临床应用指导意见', year:'2023', content:`一、分类
第二代：环丙沙星（G-菌+铜绿）
第三代：左氧氟沙星（呼吸喹诺酮）
第四代：莫西沙星（G+菌、厌氧菌增强）

二、适应证
呼吸道：左氧氟沙星/莫西沙星（CAP）
泌尿道：环丙沙星/左氧氟沙星（肾排泄浓度高）
肠道：环丙沙星/左氧氟沙星
腹腔：莫西沙星（厌氧菌覆盖）

三、安全警示（黑框警告）
• 肌腱炎/断裂风险（>60岁、肾衰、激素合用者）
• 周围神经病变
• CNS效应：头晕、失眠、罕见癫痫
• QT间期延长（莫西沙星最显著）
• 重症肌无力加重（禁忌）

四、禁忌
18岁以下、妊娠、哺乳期、喹诺酮类过敏史、QT延长者

五、药物相互作用
• 与含金属离子间隔≥2h（形成螯合物）
• 与茶碱合用可能增加茶碱毒性
• 与华法林合用增强抗凝` },
  { id:'g023', system:'抗感染', title:'β-内酰胺类抗菌药物皮肤试验指导原则', year:'2021', content:`一、青霉素皮试
• 试剂：青霉素G+青霉噻唑酰多聚赖氨酸
• 适应对象：有青霉素过敏史、需用青霉素者
• 不推荐对无过敏史者常规筛查
• 青霉素皮试阴性者可用所有青霉素类（预测值>95%）

二、头孢菌素皮试
• 不推荐常规头孢菌素皮试（预测值低）
• 适应对象：青霉素速发型过敏史+需用头孢者
• 使用拟用的头孢菌素原液做皮试
• 皮试阴性不能完全排除过敏可能

三、交叉过敏
• 青霉素过敏者头孢交叉过敏率约1-2%
• 侧链结构相似的青霉素/头孢交叉过敏风险更高
• 氨曲南（单环β-内酰胺）与青霉素/头孢无交叉过敏

四、预防措施
• 详细询问过敏史（药物、症状、时间）
• 首次注射后观察30分钟
• 备好肾上腺素等急救药品和设备` },
  { id:'g024', system:'心血管系统', title:'中国心力衰竭诊断和治疗指南', year:'2024', content:`一、分类与诊断
HFrEF（射血分数降低）：LVEF≤40%
HFimpEF（改善）：曾LVEF<40%→现在>40%
HFmrEF（轻度降低）：LVEF 41-49%
HFpEF（保留）：LVEF≥50% + NT-proBNP升高+结构/功能异常

二、HFrEF药物治疗（新四联）
• ARNI（沙库巴曲缬沙坦）：起始100mg bid，靶量200mg bid
• β受体阻滞剂：比索洛尔靶量10mg qd / 美托洛尔缓释片190mg qd
• MRA（螺内酯/依普利酮）：靶量50mg qd
• SGLT2i（达格列净/恩格列净）：10mg qd

三、启动与滴定
同时启动四联，每2周逐步增加剂量。每次增量前评估：血压、心率、肾功能、血钾。达靶量后至少维持3个月评估效果。

四、HFpEF治疗
• SGLT2i：已证实获益
• 利尿剂：控制液体潴留
• 合并疾病治疗：降压（目标<130/80）、控糖、减重

五、器械治疗
• ICD：LVEF≤35%+预期生存>1年
• CRT：LBBB QRS≥150ms + LVEF≤35%` },
  { id:'g025', system:'血液系统', title:'抗血栓药物围手术期管理专家共识', year:'2020', content:`一、抗血小板药
阿司匹林：低出血风险手术可继续（如拔牙、白内障）；高出血风险术前停5-7天
氯吡格雷：术前5天停（替格瑞洛停3-5天）
PCI术后：BMS植入后DAPT≥4周→阿司匹林单药；DES植入后DAPT≥6个月→阿司匹林单药

二、华法林
低血栓风险（TIA2DS2-VASc<4）：术前5天停，INR<1.5可手术
高血栓风险（机械瓣、近期VTE）：术前5天停→低分子肝素桥接→术前24h停LMWH
术后：止血后12-24h恢复华法林+LMWH桥接至INR达标

三、DOACs
低出血风险手术：术前24h停药（利伐沙班/阿哌沙班/依度沙班），达比加群CrCl≥50停24h/CrCl30-50停48h
高出血风险（神经外科、脊柱）：术前48h停药
术后：止血后6-8h恢复（高出血风险延迟至48-72h）

四、急诊手术
• 抗血小板：输注血小板
• 华法林：维生素K1 5-10mg iv + PCC
• 达比加群：依达赛珠单抗
• 利伐沙班/阿哌沙班：andexanet alfa（如有）或PCC` },
  { id:'g026', system:'神经系统', title:'卒中二级预防抗血小板治疗指南', year:'2024', content:`一、缺血性卒中/TIA
• 非心源性：首选抗血小板单药（阿司匹林100mg或氯吡格雷75mg）
• 发病24h内轻型卒中（NIHSS≤3）：阿司匹林+氯吡格雷双抗×21天→单药
• 颅内大动脉狭窄（>70%）：阿司匹林+氯吡格雷×90天→单药
• 症状性颅内动脉狭窄支架术后：DAPT≥90天

二、心源性卒中
• 房颤：启动DOAC/华法林（小卒中1天后/中等3天后/大卒中6-8天后）
• 机械瓣：华法林（INR 2.5-3.5）
• 卵圆孔未闭：抗血小板或封堵

三、出血转化后抗栓重启
• 轻度出血转化：7-10天后评估重启
• 颅内出血后抗凝：多学科评估，个体化决定
• 抗凝禁忌者可行左心耳封堵

四、危险因素控制
• 血压：<140/90mmHg（腔梗<130/80）
• LDL-C：<1.8mmol/L（他汀为基础）
• HbA1c：<7.0%
• 戒烟、限酒、减重、运动` },
  { id:'g027', system:'消化系统', title:'非酒精性脂肪性肝病诊疗指南', year:'2024', content:`一、诊断标准
• 影像学（B超/CT/MRI）证实脂肪肝
• 排除酒精性（乙醇摄入男<30g/d 女<20g/d）
• 排除其他肝病（病毒性、自身免疫性等）

二、疾病谱
NAFL（单纯脂肪肝）→ NASH（炎症+肝细胞损伤）→ 纤维化→ 肝硬化→ HCC
NASH是疾病进展的关键阶段

三、非药物治疗（基础）
• 减重：目标减重7-10%（1年）
• 地中海饮食模式：增加单不饱和脂肪酸、ω-3、膳食纤维
• 运动：每周≥150分钟中等强度有氧运动
• 避免果糖（含糖饮料）

四、药物治疗
• 维生素E 800IU/d：非糖尿病成人NASH可改善组织学
• 吡格列酮 30mg qd：合并糖尿病前/糖尿病患者
• GLP-1受体激动剂（利拉鲁肽/司美格鲁肽）：减重+改善NASH
• 他汀类药物：对高脂血症者安全可用（不增肝毒性）
• UDCA：证据不足，不常规推荐` },
  { id:'g028', system:'消化系统', title:'慢性乙型肝炎防治指南', year:'2024', content:`一、治疗指征
• HBV DNA>2000IU/mL + ALT>正常上限（30U/L男/19U/L女）
• 肝硬化（无论ALT和DNA水平）
• 有肝硬化/HCC家族史
• 年龄>30岁+HBV DNA阳性

二、一线抗病毒药
• 恩替卡韦（ETV）0.5mg qd（空腹服用）
• 替诺福韦（TDF）300mg qd
• 丙酚替诺福韦（TAF）25mg qd（肾/骨安全性更优）

三、治疗目标
• 长期抑制HBV DNA至检测不出
• ALT复常
• HBeAg阳性者争取血清学转换
• 理想：HBsAg清除（功能性治愈）

四、监测频率
• HBV DNA/ALT：每3-6个月
• HBeAg/抗-HBe：每6-12个月
• 肝弹性检测：每6-12个月
• HCC筛查：每6个月B超+AFP（肝硬化者）

五、停药标准
HBeAg+：DNA转阴+ALT正常+HBeAg血清学转换后巩固≥3年
HBeAg-：DNA转阴+ALT正常≥3年
肝硬化：不轻易停药` },
  { id:'g029', system:'内分泌系统', title:'维生素D及其类似物临床应用共识', year:'2024', content:`一、维生素D检测
• 25(OH)D是衡量维生素D状态的最佳指标
• 充足：≥30ng/mL (75nmol/L)
• 不足：20-29ng/mL
• 缺乏：<20ng/mL

二、补充方案
• 预防量：800-2000IU/d（成人）
• 治疗量（缺乏）：2000-4000IU/d口服，8-12周后复查
• 负荷疗法：50000IU qw ×8周（依从性差者）
• 肥胖者剂量增加2-3倍（脂肪组织螯合VD）

三、特殊人群
• 妊娠/哺乳：800-2000IU/d
• 老年人：800-2000IU/d + 钙剂1000-1200mg/d
• CKD：根据分期补充（CKD3-5期活化VD不足）
• 骨质疏松：800-1200IU/d + 钙剂，维持25(OH)D≥30

四、活性VD及其类似物
• 骨化三醇：0.25-0.5μg/d（CKD继发性甲旁亢）
• 阿法骨化醇：0.25-1μg/d（需肝脏活化）
• 帕立骨化醇：CKD透析患者继发性甲旁亢

五、监测与安全性
• 治疗3-6个月后复查25(OH)D
• 目标维持30-60ng/mL（>150ng/mL中毒）
• 中毒表现：高钙血症、高钙尿症、肾钙化` },
  { id:'g030', system:'呼吸系统', title:'静脉血栓栓塞症防治指南', year:'2024', content:`一、VTE风险评估（Padua评分）
• 活动性恶性肿瘤 3分
• VTE史 3分
• 制动≥3天 3分
• 血栓形成倾向 3分
• 近期创伤/手术 2分
• 年龄≥70岁 1分
• 心衰/呼衰 1分
• 急性感染/风湿性疾病 1分
• 肥胖BMI≥30 1分
高危≥4分建议药物预防

二、预防方案
低危：早期活动+物理预防（弹力袜/IPC）
中高危+低出血风险：LMWH（依诺肝素40mg qd）或磺达肝癸钠2.5mg qd
高血栓+高出血风险：物理预防，出血风险下降后启动药物

三、DVT/PE治疗
急性期：LMWH 1mg/kg q12h或DOAC（利伐沙班15mg bid×21d）
长期抗凝：DOAC/华法林≥3个月
肿瘤相关VTE：LMWH≥3-6个月或DOAC
不明原因VTE：考虑延长抗凝

四、溶栓指征
高危PE（休克/持续低血压）：溶栓（rt-PA 100mg/2h）
DVT（髂股静脉+症状<14天+低出血风险）：导管溶栓` },
  { id:'g031', system:'血液系统', title:'直接口服抗凝药临床合理应用指南', year:'2024', content:`一、DOACs分类与特点
达比加群（Ⅱa因子抑制剂）：150mg bid。CrCl<30禁用。依达赛珠单抗可逆转。
利伐沙班（Xa因子抑制剂）：房颤20mg qd。与食物同服增加吸收。CrCl<15禁用。
阿哌沙班（Xa因子抑制剂）：5mg bid。出血风险可能最低。CrCl<15数据有限。
依度沙班（Xa因子抑制剂）：60mg qd(CrCl 15-50时减至30mg)。

二、适应证
• 非瓣膜性房颤卒中预防（一线）
• DVT/PE急性期和延长期治疗
• 骨科大手术后VTE预防

三、剂量调整
利伐沙班：CrCl 15-49→15mg qd
阿哌沙班：年龄≥80+体重≤60+Cr≥133中任意2项→2.5mg bid
依度沙班：CrCl 15-50→30mg qd
达比加群：CrCl 30-50考虑减量（中国常用110mg bid），CrCl 15-30禁用

四、围手术期管理
低出血风险：术前24h停（Xa抑制剂）/CrCl正常者达比加群停24h
高出血风险（神经外科/脊柱）：术前48h停
术后：止血后6-8h恢复（高出血风险延至48-72h）

五、出血处理
轻度：停药+局部止血
中度：停药+补液+活性炭（服药2h内）
重度：达比加群→依达赛珠单抗5g iv；Xa抑制剂→andexanet/PCC 50U/kg

六、不适用人群
机械瓣（华法林唯一选择）、抗磷脂综合征、严重肾功能不全（CrCl<15）、妊娠哺乳` },
  { id:'g032', system:'血液系统', title:'抗血小板药物临床应用中国专家共识', year:'2024', content:`一、常用抗血小板药
阿司匹林：不可逆抑制COX-1。剂量75-100mg qd（抗血小板足够，>300mg不增强）。
氯吡格雷：P2Y12受体拮抗剂，需肝脏CYP2C19转化为活性代谢物。75mg qd。
替格瑞洛：可逆P2Y12拮抗剂，起效快。负荷180mg+90mg bid。

二、ACS双联抗血小板（DAPT）
NSTE-ACS/STEMI：阿司匹林+P2Y12抑制剂×12个月
出血高风险缩短至3-6个月后再评估
替格瑞洛优于氯吡格雷（PLATO研究）

三、稳定型冠心病
阿司匹林单药75-100mg qd
PCI术后：DES植入→DAPT≥6个月→阿司匹林单药

四、脑血管病
非心源性卒中/TIA：阿司匹林或氯吡格雷单药
轻型卒中（NIHSS≤3）发病24h内：阿司匹林+氯吡格雷×21天→单药
颅内大动脉狭窄>70%：DAPT×90天

五、DAPT降级策略
• 12个月后阿司匹林+替格瑞洛→替格瑞洛单药（TWILIGHT研究）
• 出血风险高者早期降为P2Y12抑制剂单药
• DAPT评分≥2分支持延长（>12个月）

六、消化道保护
DAPT期间PPI预防（泮托拉唑/雷贝拉唑，避免奥美拉唑/艾司奥美拉唑）
Hp检测+根除
避免合用NSAIDs和糖皮质激素` },
  { id:'g033', system:'内分泌系统', title:'口服降糖药物临床应用专家共识', year:'2024', content:`一、药物分类
双胍类：二甲双胍（一线基石）500mg bid-2000mg/d
磺脲类：格列美脲1-6mg qd、格列齐特30-120mg qd（低血糖、增重）
格列奈类：瑞格列奈0.5-4mg tid（餐前10-15min，短效）
TZD：吡格列酮15-45mg qd（增重、水肿、骨折风险）
α-糖苷酶抑制剂：阿卡波糖50-100mg tid（与第一口饭同服，降低餐后血糖）
DPP-4i：西格列汀100mg qd、利格列汀5mg qd（CKD无需调量）
SGLT2i：达格列净/恩格列净10mg qd（心衰/CKD获益）
GLP-1RA：利拉鲁肽0.6-1.8mg/d、司美格鲁肽0.25-1mg qw（减重、心血管获益）

二、治疗路径
起始：二甲双胍（禁忌或不耐受→SGLT2i/GLP-1RA/DPP-4i）
联合：二甲双胍+SGLT2i（ASCVD/心衰/CKD优选）
三联：二甲双胍+SGLT2i+GLP-1RA或DPP-4i
胰岛素启动：三联口服药HbA1c仍不达标

三、合并症指导
ASCVD/心衰：优先SGLT2i、GLP-1RA
CKD：优先SGLT2i（eGFR≥20）、GLP-1RA（eGFR≥15）
老年人/衰弱：避免磺脲类（低血糖），选用低血糖风险低的药物

四、CKD剂量调整
二甲双胍：eGFR 30-45减量至1000mg/d，eGFR<30禁用
SGLT2i：达格列净可降至eGFR 20
DPP-4i：利格列汀无需调整（胆汁排泄）
磺脲类：格列喹酮可用于CKD（几乎不肾排泄）` },
  { id:'g034', system:'抗肿瘤', title:'化疗药物临床应用管理规范', year:'2024', content:`一、细胞毒性化疗药
烷化剂：环磷酰胺（出血性膀胱炎需水化+美司钠）、异环磷酰胺
铂类：顺铂（肾毒性→充分水化+甘露醇）、卡铂（按Calvert公式AUC计算）、奥沙利铂（神经毒性→避免冷刺激）
抗代谢：5-FU（心脏毒性→24h监护）、吉西他滨、卡培他滨、甲氨蝶呤（需叶酸解救+亚叶酸钙）
植物碱类：紫杉醇（过敏预防→地塞米松+抗组胺+雷尼替丁）、多西他赛、长春瑞滨（静脉炎→PICC/深静脉）
拓扑异构酶抑制剂：伊立替康（腹泻→洛哌丁胺）、依托泊苷

二、剂量计算
BSA公式：mg/m² × 体表面积（Mosteller）
Calvert公式：卡铂剂量 = AUC×（GFR+25）
肥胖：实际体重与理想体重取均值计算BSA（>120%理想体重）

三、常见不良反应管理
粒缺发热：粒细胞>1.0→经验性广谱抗生素（头孢吡肟/哌拉西林他唑巴坦±G-CSF）
恶心呕吐：NK1+5-HT3+地塞米松（高致吐方案）
口腔黏膜炎：碳酸氢钠含漱（预防）+ 制霉菌素（真菌感染）
过敏反应：紫杉醇→前驱用药；单克隆抗体→缓慢输注+监测
心脏毒性：蒽环类累积量限制（阿霉素≤450-550mg/m²）+ 右雷佐生

四、化疗职业防护
• 配制在BSC-Ⅱ生物安全柜中进行
• 操作人员穿防护服、戴双层手套+N95口罩
• 废弃物按医疗锐器和化疗药物废弃物处理
• 孕妇和哺乳期人员避免操作化疗药物

五、常见方案
非小细胞肺癌：培美曲塞+顺铂/卡铂 ± 帕博利珠单抗
结直肠癌：FOLFOX（奥沙利铂+5-FU+亚叶酸钙）/FOLFIRI（伊立替康+5-FU+亚叶酸钙）
乳腺癌AC→T：阿霉素+环磷酰胺→紫杉醇 / TC：多西他赛+环磷酰胺
胃癌：SOX（替吉奥+奥沙利铂）/ XELOX（卡培他滨+奥沙利铂）` },
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
  { system:'抗感染', icon:'🦠', items:GUIDELINES.filter(g=>g.system==='抗感染') },
  { system:'神经系统', icon:'🧠', items:GUIDELINES.filter(g=>g.system==='神经系统') },
  { system:'血液系统', icon:'🩸', items:GUIDELINES.filter(g=>g.system==='血液系统') },
  { system:'抗肿瘤', icon:'🎗️', items:GUIDELINES.filter(g=>g.system==='抗肿瘤') },
  { system:'法律法规', icon:'📋', items:LAWS },
];

// ═══ 用药教育/用药交代 ═══
const MED_EDU = [
  { id:'m001', cat:'服药时间', drug:'左甲状腺素钠', key:'清晨空腹', detail:'至少餐前30分钟服用，与钙剂、铁剂间隔≥4小时。不可与食物同服——食物显著减少吸收。' },
  { id:'m002', cat:'服药时间', drug:'阿仑膦酸钠', key:'清晨空腹', detail:'用一大杯白水（非矿泉水）送服，服药后保持上身直立≥30分钟。不可咀嚼或含服。' },
  { id:'m003', cat:'服药时间', drug:'PPI（奥美拉唑等）', key:'晨起空腹', detail:'早餐前30-60分钟服用效果最佳。不可与抗酸药同时服用。肠溶片/胶囊必须整粒吞服，不可压碎或咀嚼。' },
  { id:'m004', cat:'服药时间', drug:'他汀类（辛伐他汀等）', key:'睡前', detail:'胆固醇主要在夜间合成，短半衰期他汀（辛伐他汀、普伐他汀、氟伐他汀）睡前服效果更佳。阿托伐他汀/瑞舒伐他汀可在一天中任何时间服用。' },
  { id:'m005', cat:'服用方法', drug:'阿司匹林肠溶片', key:'整片吞服', detail:'必须整片吞服，不可压碎、咀嚼或掰开。肠溶衣保护胃黏膜。建议餐后服用以减少胃肠刺激。' },
  { id:'m006', cat:'服用方法', drug:'二甲双胍', key:'随餐或餐后', detail:'随餐或餐后立即服用可减轻恶心、腹泻等消化道反应。缓释片必须整片吞服。如漏服一剂，想起时尽快补服，但不可同时服用两剂。' },
  { id:'m007', cat:'服用方法', drug:'阿卡波糖', key:'与第一口饭同服', detail:'与第一口饭一起嚼碎服用。如果服药后发生低血糖，必须用葡萄糖（而不是蔗糖或普通食物）纠正——阿卡波糖会抑制蔗糖分解。' },
  { id:'m008', cat:'服用方法', drug:'硝酸甘油', key:'舌下含服', detail:'心绞痛发作时立即舌下含服1片，不可吞服。5分钟后症状不缓解可重复1次，最多3次。坐位或半卧位含服以防体位性低血压。' },
  { id:'m009', cat:'不良反应告知', drug:'华法林', key:'出血监测', detail:'必须按医嘱定期监测INR。注意任何异常出血：牙龈出血、皮肤瘀斑、黑便、血尿。外伤后止血时间可能延长。饮食中维生素K摄入量需保持稳定（绿叶蔬菜每日量基本不变）。' },
  { id:'m010', cat:'不良反应告知', drug:'ACEI（培哚普利等）', key:'干咳', detail:'约5-20%患者出现干咳，多为刺激性、夜间加重。通常用药后1周至6个月内出现。如无法忍受，请告知医师更换为ARB类药物。不可擅自停药。' },
  { id:'m011', cat:'不良反应告知', drug:'胺碘酮', key:'多系统', detail:'• 肺毒性：出现干咳、呼吸困难立即就医\n• 皮肤：防晒！暴露部位可能变蓝灰色\n• 眼：每6-12个月眼科检查\n• 甲状腺：每3-6个月检查甲功\n• 肝功能：定期监测肝酶' },
  { id:'m012', cat:'不良反应告知', drug:'甲氨蝶呤', key:'补充叶酸', detail:'服用MTX后24小时补充叶酸5mg，可显著减少口腔炎、恶心、肝酶升高等不良反应而不影响疗效。出现口腔溃疡、发热、异常出血立即就医。' },
  { id:'m013', cat:'特殊人群', drug:'妊娠期安全用药', key:'分级速查', detail:'A级安全：左甲状腺素、叶酸\nB级相对安全：青霉素类、头孢类、对乙酰氨基酚、胰岛素\nC级权衡：多数降压药、SSRIs\nD级有风险：华法林、苯妥英钠、卡马西平、锂盐\nX级禁用：异维A酸、他汀类、利巴韦林、沙利度胺' },
  { id:'m014', cat:'特殊人群', drug:'哺乳期安全用药', key:'相对安全', detail:'• 安全：青霉素类、头孢类、对乙酰氨基酚、布洛芬、胰岛素\n• 慎用：阿司匹林（Reye综合征风险）、四环素类（影响牙齿骨骼）\n• 暂停哺乳：甲硝唑（12-24h后恢复）、放射性药物\n• 原则：喂奶后立即服药，选择短半衰期药物' },
  { id:'m015', cat:'药物储存', drug:'胰岛素', key:'冷藏≠冷冻', detail:'未开封：2-8℃冷藏保存（冰箱冷藏室，不可冷冻！）。\n开封后：室温（<25℃）保存，4周内用完。\n避免阳光直射和剧烈震荡。\n旅行时使用保温袋携带。' },
  { id:'m016', cat:'药物储存', drug:'硝酸甘油片', key:'避光密封', detail:'必须保存在原装棕色瓶中，密封避光。开封后3-6个月失效。随身携带时避免贴身放置（体温加速分解）。药物失效表现：舌下含服无麻刺感。' },
  { id:'m017', cat:'药物储存', drug:'益生菌制剂', key:'冷藏', detail:'多数双歧杆菌、乳杆菌制剂需2-8℃冷藏保存，避免高温和潮湿。服用时用<40℃温开水冲服，高温会杀死活菌。与抗生素间隔≥2小时服用。' },
  { id:'m018', cat:'生活指导', drug:'他汀类', key:'避免葡萄柚', detail:'服药期间避免食用葡萄柚（西柚）及其果汁。葡萄柚抑制CYP3A4，可导致他汀血药浓度升高数倍，增加肌病和肝损伤风险。普通柚子、橙子、柠檬无此影响。' },
  { id:'m019', cat:'生活指导', drug:'头孢类/甲硝唑', key:'禁酒7天', detail:'服用头孢哌酮、头孢曲松、头孢孟多、甲硝唑、呋喃唑酮期间及停药后7天内严禁饮酒和含酒精制品。可能发生双硫仑样反应：面部潮红、头痛、恶心呕吐、心悸，严重者可休克。' },
  { id:'m020', cat:'生活指导', drug:'华法林', key:'饮食稳定', detail:'• 保持每日绿叶蔬菜（菠菜、西兰花等）摄入量基本不变\n• 避免大量摄入蔓越莓汁、银杏、大蒜提取物\n• 饮酒需限量（急性大量饮酒增加出血风险）\n• 补充任何维生素或中药前咨询医师' },
  { id:'m021', cat:'漏服处理', drug:'口服避孕药', key:'12h内补服', detail:'漏服<12小时：立即补服，下次按时服用。\n漏服>12小时：立即补服漏掉的药片，继续按时服剩余药片，未来7天内加用屏障避孕法。' },
  { id:'m022', cat:'漏服处理', drug:'抗生素', key:'尽快补服', detail:'发现漏服后立即补服。如果接近下次服药时间（<2小时），直接跳过漏服的剂量，按原时间服下一次。不可一次服用双倍剂量！' },
  { id:'m023', cat:'漏服处理', drug:'华法林', key:'当日补服', detail:'当天内发现漏服：立即补服。\n次日才发现：跳过漏服的剂量，不可加倍。\n连续漏服≥2天：立即联系医师，可能需要重新调整剂量。' },
  { id:'m024', cat:'药物相互作用', drug:'NSAIDs + ACEI', key:'降压效果减弱', detail:'布洛芬、双氯芬酸等NSAIDs可减弱ACEI/ARB的降压效果，并增加肾功能损害风险。如需长期合用，需密切监测血压和肾功能。对乙酰氨基酚无此相互作用。' },
  { id:'m025', cat:'药物相互作用', drug:'PPI + 氯吡格雷', key:'抗血小板减弱', detail:'奥美拉唑、艾司奥美拉唑抑制CYP2C19酶，减少氯吡格雷活性代谢物生成。建议改用泮托拉唑、雷贝拉唑（影响较小），或直接使用替格瑞洛。' },
];
