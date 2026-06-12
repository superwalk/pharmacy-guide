-- ═══ 药学知识指南 — 种子数据导入 ═══
-- 生成时间: 2026-06-12T03:12:48.604Z

begin;

insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d001','阿莫西林胶囊','AMXLJN','Amoxicillin Capsules','抗微生物药','青霉素类','处方药',null,'适用于敏感菌所致的呼吸道感染、泌尿生殖道感染、皮肤软组织感染、急性单纯性淋病、伤寒等。','对青霉素过敏者禁用。用药前必须进行青霉素皮肤试验，阳性反应者禁用。','常见：恶心、呕吐、腹泻等胃肠道反应；偶见：皮疹、药物热、哮喘等过敏反应；罕见：伪膜性肠炎。','口服。成人一次0.5g，每6~8小时1次，一日剂量不超过4g。小儿一日剂量按体重20~40mg/kg，每8小时1次。','遮光，密封，在阴凉干燥处（不超过20℃）保存。','丙磺舒可竞争性抑制本药肾小管分泌；与氨基糖苷类合用可增强杀菌作用；与避孕药合用可能降低避孕效果。','【药品名称】通用名称：阿莫西林胶囊 英文名称：Amoxicillin Capsules
【成份】主要成份为阿莫西林。
【性状】本品为胶囊剂，内容物为白色或类白色粉末。
【适应症】适用于敏感菌所致的呼吸道感染、泌尿生殖道感染等。
【用法用量】口服。成人一次0.5g，每6~8小时1次，一日不超过4g。
【不良反应】常见胃肠道反应，偶见过敏反应。
【禁忌】青霉素过敏者禁用。
【注意事项】用药前须做皮试。肾功能不全者需调整剂量。
【药物相互作用】与丙磺舒合用可延长半衰期；与氨基糖苷类有协同作用。
【贮藏】遮光，密封，阴凉干燥处保存。
【批准文号】国药准字H......') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d002','头孢克肟胶囊','TBKWJN','Cefixime Capsules','抗微生物药','头孢三代','处方药',null,'适用于敏感菌所致的呼吸道感染、泌尿道感染、胆道感染、中耳炎等。','对头孢菌素类过敏者禁用。有青霉素过敏性休克史者慎用。','偶见腹泻、恶心、皮疹、一过性肝功能异常。','成人及体重30kg以上儿童：一次0.1g，一日2次。','遮光，密封，阴凉干燥处保存。','与氨基糖苷类合用可能增加肾毒性。与抗凝药合用可能增加出血风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d003','左氧氟沙星片','ZYFSXP','Levofloxacin Tablets','抗微生物药','喹诺酮类','处方药',null,'适用于敏感菌所致的社区获得性肺炎、复杂性尿路感染、慢性支气管炎急性发作等。','对喹诺酮类药物过敏者、癫痫患者、18岁以下禁用。','常见恶心、腹泻、头晕、失眠；偶见肌腱炎、QT间期延长。','成人一次0.5g，一日1次。','遮光，密封，阴凉处保存。','与含金属离子药物（铁剂、铝剂）合用影响吸收，需间隔2小时以上。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d004','硝苯地平控释片','XBDPKSP','Nifedipine Controlled-release','心血管系统用药','降压药','处方药',null,'用于治疗高血压、心绞痛（慢性稳定性心绞痛及变异型心绞痛）。','心源性休克、严重主动脉瓣狭窄、不稳定心绞痛急性发作期。','常见头痛、面部潮红、踝部水肿、心悸。','一次30mg，一日1次。整片吞服，不可掰开。','遮光，密封，不超过25℃保存。','与CYP3A4抑制剂（如葡萄柚汁）合用可能升高血药浓度。与β受体阻滞剂合用可能加重心衰。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d005','二甲双胍片','EJSGP','Metformin Tablets','内分泌系统用药','降糖药','处方药',null,'用于单纯饮食控制不满意的2型糖尿病患者，尤其是肥胖和伴高胰岛素血症者。','严重肾功能不全（eGFR<30）、糖尿病酮症酸中毒、严重感染时禁用。','常见胃肠道反应（恶心、腹泻）；长期使用可能影响维生素B12吸收。','起始剂量一次0.25g，一日2-3次，随餐服用；最大剂量一日2g。','密封保存。','碘造影剂检查前需暂停本药。与酒精合用可能增加乳酸酸中毒风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d006','奥美拉唑肠溶片','AMLZCRP','Omeprazole Enteric-coated','消化系统用药','抗酸药','处方药',null,'用于胃溃疡、十二指肠溃疡、反流性食管炎、卓-艾综合征。','对本药过敏者禁用。','常见头痛、腹泻、恶心；长期使用可能增加骨折风险和维生素B12缺乏。','一次20mg，一日1-2次。晨起吞服，不可咀嚼。','遮光，密封，阴凉干燥处保存。','与氯吡格雷合用可能降低后者抗血小板效果。影响胃酸依赖药物（如酮康唑）的吸收。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d007','阿司匹林肠溶片','ASPLCRP','Aspirin Enteric-coated','解热镇痛药','非甾体抗炎药','OTC',null,'抑制血小板聚集，用于预防心脑血管疾病。也用于解热镇痛。','活动性消化性溃疡、出血倾向者、哮喘患者。','常见胃肠道反应、出血时间延长；偶见过敏反应。','抗血小板：一次100mg，一日1次。解热镇痛：一次0.3-0.6g。','密封，阴凉干燥处保存。','与其他NSAIDs合用增加胃溃疡风险；与抗凝药合用增加出血风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d008','氯雷他定片','LLTDP','Loratadine Tablets','呼吸系统用药','抗组胺药','OTC',null,'用于缓解过敏性鼻炎症状，如喷嚏、流涕、鼻痒及眼部症状。也用于慢性荨麻疹。','对本药过敏者禁用。','罕见乏力、头痛、口干。无明显镇静作用。','成人及12岁以上儿童：一次10mg，一日1次。','密封保存。','与酮康唑、红霉素合用可能升高氯雷他定血药浓度。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d009','阿托伐他汀钙片','ATFTTGP','Atorvastatin Calcium','心血管系统用药','调脂药','处方药',null,'用于高胆固醇血症和混合型高脂血症，降低心血管事件风险。','活动性肝病、不明原因转氨酶持续升高、妊娠及哺乳期。','常见肌痛、腹泻；偶见肝功能异常、肌酸激酶升高。','起始剂量10-20mg，一日1次，晚餐后服用。','遮光，密封保存。','与吉非罗齐合用增加肌病风险。与环孢素、克拉霉素合用需调整剂量。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d010','氢氯噻嗪片','QLSQP','Hydrochlorothiazide','心血管系统用药','利尿剂','处方药',null,'用于水肿性疾病、高血压、尿崩症。','无尿者、磺胺过敏者。','电解质紊乱（低钾、低钠）、高尿酸血症、血糖升高。','降压：一次12.5-25mg，一日1次。','遮光，密封保存。','与洋地黄类合用注意低钾风险；与降糖药合用可能影响降糖效果。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d011','头孢曲松钠','TBQSN','Ceftriaxone Sodium','抗微生物药','头孢三代','处方药',null,'用于敏感菌所致的下呼吸道感染、泌尿道感染、腹腔感染、败血症、脑膜炎等。','对头孢菌素过敏者禁用。','常见腹泻、皮疹；偶见胆道假结石、一过性肝酶升高。','成人一次1-2g，一日1次。严重感染可增至4g/d。','遮光，密闭，阴凉干燥处保存。','与含钙溶液配伍禁忌。与氨基糖苷类合用有协同作用。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d012','阿奇霉素片','AQMSP','Azithromycin Tablets','抗微生物药','大环内酯类','处方药',null,'用于敏感菌所致的呼吸道感染、皮肤软组织感染、泌尿生殖道感染。','对大环内酯类过敏者禁用。','常见腹泻、恶心；偶见QT间期延长、肝功能异常。','成人一次0.5g，一日1次，连用3天；或首日0.5g，第2-5日0.25g qd。','密封，干燥处保存。','与抗凝药合用可能增加出血风险。与茶碱合用可能增加茶碱血药浓度。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d013','莫西沙星片','MXSXP','Moxifloxacin Tablets','抗微生物药','喹诺酮类','处方药',null,'用于敏感菌所致的社区获得性肺炎、慢性支气管炎急性发作、急性鼻窦炎。','18岁以下、癫痫患者、QT间期延长者禁用。','常见恶心、腹泻、头晕；偶见QT间期延长、肌腱炎。','一次0.4g，一日1次。疗程5-14天。','遮光，密封保存。','与抗心律失常药合用可能加重QT延长。与含金属离子药物间隔2小时以上服用。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d014','布洛芬缓释胶囊','BLFHSJN','Ibuprofen SR Capsules','解热镇痛药','非甾体抗炎药','OTC',null,'用于缓解轻中度疼痛、关节痛、头痛、牙痛、痛经；也用于退热。','活动性消化性溃疡、严重肾功能不全、妊娠晚期禁用。','常见胃肠道反应；偶见头晕、皮疹、肾功能损害。','一次0.3g，一日2次。饭后服用减轻胃肠刺激。','密封保存。','与抗凝药合用增加出血风险。与其他NSAIDs合用增加胃溃疡风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d015','氯沙坦钾片','LSTJP','Losartan Potassium','心血管系统用药','降压药','处方药',null,'用于治疗原发性高血压。尤其适用于合并糖尿病肾病的高血压患者。','妊娠中晚期禁用。双侧肾动脉狭窄者禁用。','偶见头晕、高钾血症、肾功能损害。干咳发生率低于ACEI。','起始剂量50mg，一日1次。可增至100mg qd。','遮光，密封保存。','与保钾利尿药合用可能增加高钾血症风险。与NSAIDs合用可能减弱降压效果。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d016','氨氯地平片','ALDPP','Amlodipine Tablets','心血管系统用药','降压药','处方药',null,'用于治疗高血压和稳定性心绞痛。','重度主动脉瓣狭窄、不稳定心绞痛急性期。','常见踝部水肿、头痛、面部潮红；偶见心悸、牙龈增生。','起始剂量5mg，一日1次。最大10mg qd。','遮光，密封保存。','与CYP3A4强抑制剂合用可能升高血药浓度。与β受体阻滞剂合用注意心衰风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d017','美托洛尔缓释片','MTLEHSP','Metoprolol SR','心血管系统用药','降压药','处方药',null,'用于高血压、心绞痛、慢性心力衰竭（NYHA Ⅱ-Ⅲ级）。','心源性休克、病态窦房结综合征、严重心动过缓。','常见疲劳、头晕、心动过缓；偶见肢端发冷、支气管痉挛。','心衰：起始23.75mg qd，逐步滴定至190mg qd。降压：47.5-95mg qd。','遮光，密封保存。','与维拉帕米合用禁。与地高辛合用可能增加心动过缓风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d018','沙库巴曲缬沙坦片','SKBQXSTP','Sacubitril/Valsartan','心血管系统用药','抗心衰药','处方药',null,'用于射血分数降低的慢性心力衰竭（NYHA Ⅱ-Ⅳ级）。','同时使用ACEI者（需洗脱36h）、血管性水肿史、妊娠期。','常见低血压、高钾血症、肾功能损害；偶见血管性水肿。','起始剂量50mg bid，逐步增加至200mg bid。','密封，不超过25℃保存。','禁与ACEI合用。与保钾利尿药合用增加高钾风险。与NSAIDs合用可能减弱疗效。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d019','非布司他片','FBSTP','Febuxostat Tablets','解热镇痛药','抗痛风药','处方药',null,'用于痛风患者高尿酸血症的长期治疗（不推荐用于无临床症状的高尿酸血症）。','正在使用硫唑嘌呤或巯嘌呤者禁用。','常见肝功能异常、关节痛；偶见心血管事件增加风险。','起始剂量40mg，一日1次。2周后SUA不达标可增至80mg qd。','遮光，密封保存。','与硫唑嘌呤、巯嘌呤合用可显著增加后者毒性。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d020','胰岛素注射液（短效）','YDSZSYDX','Regular Insulin','内分泌系统用药','降糖药','处方药','高危','用于1型糖尿病、2型糖尿病口服药控制不佳、糖尿病急症（酮症酸中毒）。','低血糖发作时禁用。','常见低血糖、注射部位脂肪萎缩；偶见过敏反应。','个体化给药。一般餐前15-30分钟皮下注射。','未开封：2-8℃冷藏。开封后：室温（<25℃）保存不超过4周。','与糖皮质激素、噻嗪类利尿药合用可能减弱降糖效果。与β受体阻滞剂合用可能掩盖低血糖症状。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d021','达格列净片','DGLJP','Dapagliflozin','内分泌系统用药','降糖药','处方药',null,'用于2型糖尿病、射血分数降低的心衰、慢性肾病（eGFR≥25）。','eGFR<25时禁用。1型糖尿病禁用。','常见泌尿生殖道感染；偶见酮症酸中毒（血糖不高时也可发生）、脱水。','2型糖尿病/心衰/CKD：10mg qd。','密封保存。','与利尿剂合用可能增加脱水风险。与胰岛素/磺脲类合用增加低血糖风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d022','氯吡格雷片','LBGLP','Clopidogrel','血液系统用药','抗凝药','处方药',null,'用于预防动脉粥样硬化血栓形成事件：ACS、PCI术后、缺血性卒中。','活动性出血、严重肝功能损害。','常见出血（消化道、皮肤）；偶见血小板减少症。','负荷量300mg，维持量75mg qd。','密封保存。','与PPI（尤其是奥美拉唑）合用可能减弱抗血小板效果。与抗凝药合用增加出血风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d023','利伐沙班片','LFSBP','Rivaroxaban','血液系统用药','抗凝药','处方药',null,'用于非瓣膜性房颤卒中预防、DVT/PE治疗和预防。','活动性出血、严重肝功能损害合并凝血障碍。','常见出血；偶见肝功能异常、血小板减少。','房颤：20mg qd（CrCl 15-49者15mg qd）。DVT/PE：15mg bid×21天，然后20mg qd。','密封，不超过30℃。','与其他抗凝药、抗血小板药合用增加出血风险。与CYP3A4/P-gp强抑制剂合用增加血药浓度。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d024','孟鲁司特钠片','MLSTNP','Montelukast Sodium','呼吸系统用药','平喘药','处方药',null,'用于哮喘的预防和长期治疗（包括阿司匹林敏感性哮喘）、过敏性鼻炎。','对本药过敏者禁用。','罕见头痛、腹痛；极罕见精神神经事件。','成人10mg qd，睡前服用。','遮光，密封，室温保存。','与苯妥英钠、利福平合用可能降低血药浓度。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d025','甲泼尼龙片','JPNLP','Methylprednisolone','内分泌系统用药','激素类','处方药',null,'用于过敏性疾病、自身免疫性疾病、炎症性疾病、器官移植排斥反应等。','全身性真菌感染、对本品过敏者。','长期使用：库欣综合征、骨质疏松、高血糖、感染风险增加、消化道溃疡。','起始剂量4-48mg/d，根据疾病和反应调整。需逐步减量停药。','遮光，密封保存。','与NSAIDs合用增加消化道溃疡风险。与利福平合用加速代谢。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d026','甲钴胺片','JGAP','Mecobalamin','营养支持药','维生素类','OTC',null,'用于周围神经病变、巨幼细胞性贫血。','对本药过敏者禁用。','偶见食欲不振、恶心、腹泻；罕见皮疹。','一次0.5mg，一日3次。','遮光，密封保存。','与氯霉素合用可能影响造血系统。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d027','碳酸钙D3片','TSGDP','Calcium Carbonate/D3','营养支持药','电解质','OTC',null,'用于预防和治疗钙缺乏症、骨质疏松的辅助治疗。','高钙血症、严重肾功能不全。','偶见便秘、胃肠胀气。','一次1片（钙600mg+D3 200IU），一日1-2次。','密封保存。','与四环素类、喹诺酮类抗生素同服影响吸收，需间隔2小时以上。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d028','铝碳酸镁咀嚼片','LTSMJJP','Hydrotalcite','消化系统用药','胃黏膜保护剂','OTC',null,'用于胃酸过多引起的胃痛、胃灼热、反酸、饱胀等。','严重肾功能不全、低磷血症。','偶见便秘、腹泻。','一次1-2片，一日3-4次。餐后1-2小时嚼服。','密封保存。','可影响四环素类、喹诺酮类、铁剂吸收，需间隔1-2小时服用。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d029','氯硝西泮片','LXXPP','Clonazepam','神经系统用药','镇静催眠药','处方药（精二）','精二','用于癫痫和惊恐障碍。','重症肌无力、闭角型青光眼、严重呼吸功能不全。','常见嗜睡、乏力、共济失调；长期使用可产生依赖性。','癫痫：起始0.5mg tid，每3天增量0.5-1mg。成人最大量20mg/d。','遮光，密封保存。','与酒精及其他中枢抑制剂合用增强镇静作用。与丙戊酸合用可能诱发失神发作。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d030','氨溴索片','AXSP','Ambroxol','呼吸系统用药','祛痰药','OTC',null,'用于急慢性呼吸道疾病引起的痰液黏稠、咳痰困难。','对本品过敏者。','偶见恶心、胃部不适。','成人一次30mg，一日3次。长期服用减为bid。','遮光，密封保存。','与抗生素（阿莫西林、头孢呋辛等）合用可增加其在肺组织的浓度。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d031','头孢呋辛酯片','TBFXZP','Cefuroxime Axetil','抗微生物药','头孢二代','处方药',null,'用于敏感菌所致的呼吸道、泌尿道、皮肤软组织感染等。手术预防用药。','头孢类过敏者禁用。','常见腹泻、恶心；偶见皮疹。','0.25-0.5g bid，餐后服用。','遮光密封。','与氨基糖苷类合用增加肾毒性。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d032','哌拉西林他唑巴坦','PLXLTZBT','Piperacillin/Tazobactam','抗微生物药','青霉素类','处方药',null,'中重度感染：腹腔感染、肺炎、败血症等。','青霉素过敏者禁用。','常见腹泻；偶见肝酶升高、血小板减少。','4.5g q8h 静脉滴注。','遮光密封。','与氨基糖苷类有协同作用。与甲氨蝶呤合用增加后者毒性。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d033','美罗培南','MLPN','Meropenem','抗微生物药','碳青霉烯类','处方药（特殊使用级）','高危','多重耐药菌所致重症感染：腹腔感染、脑膜炎、败血症等。','碳青霉烯类过敏者禁用。','常见腹泻、转氨酶升高；偶见癫痫。','0.5-1g q8h 静脉滴注。','密封保存。','与丙戊酸钠合用显著降低后者血药浓度（禁忌联用）。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d034','万古霉素','WGMS','Vancomycin','抗微生物药','糖肽类','处方药（特殊使用级）','高危','MRSA等耐药G+菌重症感染。艰难梭菌相关性腹泻（口服）。','对本药过敏者。','肾毒性、耳毒性、红人综合征。需监测血药谷浓度(10-20mg/L)。','1g q12h 静脉滴注≥60min。','密封保存。','与其他肾毒性药物合用增加肾损伤风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d035','甲硝唑片','JXZP','Metronidazole','抗微生物药','硝基咪唑类','处方药',null,'厌氧菌感染、滴虫病、阿米巴病。Hp根除方案组分。','妊娠早期禁用。','金属味、恶心；服药期间尿液呈红棕色（正常现象）。','0.4-0.5g bid-tid。','遮光密封。','服药期间及停药7天内禁酒（双硫仑样反应）。与华法林合用增强抗凝作用。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d036','氟康唑胶囊','FKZJN','Fluconazole','抗微生物药','抗真菌药','处方药',null,'念珠菌感染、隐球菌性脑膜炎。','对本药过敏者。','常见恶心；偶见肝毒性。','首剂0.4g，之后0.2g qd。','密封保存。','与华法林合用增强抗凝。与磺脲类降糖药合用增加低血糖风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d037','奥司他韦胶囊','ASTWJN','Oseltamivir','抗微生物药','抗病毒药','处方药',null,'用于成人和1岁以上儿童的甲型和乙型流感治疗及预防。症状出现48h内开始。','对本药过敏者。','常见恶心、呕吐（与食物同服可减轻）。','治疗：75mg bid×5天。预防：75mg qd。','密封保存。','与丙磺舒合用可增加奥司他韦血药浓度。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d038','恩替卡韦片','ETKWP','Entecavir','抗微生物药','抗病毒药','处方药',null,'慢性乙型肝炎。','对本药过敏者。','偶见头痛、疲劳；罕见乳酸酸中毒。','0.5mg qd，空腹服用（餐前/后≥2h）。','密封保存。','与食物同服可显著降低吸收。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d039','厄贝沙坦片','EBSTP','Irbesartan','心血管系统用药','降压药','处方药',null,'原发性高血压。合并高血压的2型糖尿病肾病。','妊娠中晚期禁用。','偶见头晕、高钾血症。','150mg qd，可增至300mg qd。','密封保存。','与保钾利尿药或补钾制剂合用增加高钾风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d040','比索洛尔片','BSLEP','Bisoprolol','心血管系统用药','降压药','处方药',null,'高血压、冠心病、慢性心力衰竭。','严重心动过缓、Ⅱ度以上房室传导阻滞。','常见心动过缓、乏力、肢端发冷。','起始2.5-5mg qd，心衰最大10mg qd。','遮光密封。','与维拉帕米合用禁。与地高辛合用增加心动过缓风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d041','硝苯地平片','XBDPP','Nifedipine','心血管系统用药','降压药','处方药',null,'高血压、心绞痛。','心源性休克、严重主动脉瓣狭窄。','头痛、面部潮红、踝部水肿、反射性心悸（短效剂型）。','控释片30mg qd；普通片10mg tid。','遮光密封。','与CYP3A4抑制剂（葡萄柚汁）合用可能升高血药浓度。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d042','螺内酯片','LNZP','Spironolactone','心血管系统用药','利尿剂','处方药',null,'心力衰竭、高血压、原醛症。','高钾血症、严重肾功能不全。','高钾血症、男性乳房发育、月经紊乱。','心衰：起始20mg qd。','密封保存。','与ACEI/ARB合用增加高钾风险。与地高辛合用可增加地高辛血药浓度。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d043','呋塞米片','FSMP','Furosemide','心血管系统用药','利尿剂','处方药',null,'水肿性疾病（心衰、肾衰、肝硬化）、高血压。','无尿者、严重电解质紊乱者。','低钾、低钠、低氯性碱中毒、高尿酸血症、耳毒性。','起始20-40mg qd-bid。','遮光密封。','与氨基糖苷类合用增加耳毒性。与NSAIDs合用减弱利尿效果。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d044','华法林钠片','HFLNP','Warfarin Sodium','血液系统用药','抗凝药','处方药','高危','房颤卒中预防、DVT/PE治疗和预防、心脏瓣膜置换术后。','活动性出血、妊娠期。','出血（需监测INR）。','初始2.5-3mg qd，根据INR调整（目标2.0-3.0）。','遮光密封。','与多种药物（抗生素、NSAIDs、胺碘酮等）和食物（VK含量）相互作用。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d045','艾司奥美拉唑肠溶片','ASAMLZCRP','Esomeprazole','消化系统用药','抗酸药','处方药',null,'消化性溃疡、反流性食管炎、根除Hp、NSAIDs相关溃疡预防。','对本药过敏者。','常见头痛、腹泻；长期：骨质疏松、维生素B12缺乏、肠道感染风险。','20-40mg qd，晨起空腹。','遮光密封。','与氯吡格雷合用可能降低后者抗血小板效果。影响酮康唑等胃酸依赖药物吸收。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d046','多潘立酮片','DPLTP','Domperidone','消化系统用药','止吐药','处方药',null,'胃排空延缓、胃食管反流引起的恶心呕吐。','消化道出血、穿孔者禁用。','偶见口干、头痛；罕见QT延长。','10mg tid，餐前15-30min。','遮光密封。','与酮康唑等CYP3A4抑制剂合用增加QT延长风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d047','蒙脱石散','MTSS','Montmorillonite Powder','消化系统用药','止泻药','OTC',null,'成人及儿童急慢性腹泻。','对本品过敏者。','偶见便秘。','1袋（3g）tid，两餐之间服用。','密封保存。','与其他药物间隔至少2小时服用，以免影响吸收。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d048','瑞舒伐他汀钙片','RSFTTGP','Rosuvastatin Calcium','心血管系统用药','调脂药','处方药',null,'高胆固醇血症和混合型高脂血症。','活动性肝病、妊娠哺乳期。','肌痛、肝酶升高；偶见蛋白尿。','起始5-10mg qd，最大20mg qd。','密封保存。','与吉非罗齐合用增加肌病风险。与环孢素、抗病毒药合用需减量。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d049','格列美脲片','GLMNP','Glimepiride','内分泌系统用药','降糖药','处方药',null,'用于饮食和运动控制不满意的2型糖尿病。','1型糖尿病、酮症酸中毒。','低血糖、体重增加。','起始1mg qd，早餐前服用。最大6mg qd。','密封保存。','与氟康唑合用增强降糖作用。与β受体阻滞剂合用可能掩盖低血糖症状。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d050','阿卡波糖片','AKBTP','Acarbose','内分泌系统用药','降糖药','处方药',null,'用于2型糖尿病（降低餐后血糖）。','肠梗阻、严重肾功能不全。','常见腹胀、排气增多。','起始50mg tid，与第一口饭同嚼服。最大200mg tid。','密封保存。','与磺脲类/胰岛素合用增加低血糖风险（低血糖时需用葡萄糖纠正，蔗糖无效）。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d051','胰岛素（甘精胰岛素）','YDSGJYDS','Insulin Glargine','内分泌系统用药','降糖药','处方药','高危','1型/2型糖尿病的基础胰岛素治疗。','低血糖发作时。','低血糖、注射部位脂肪增生。','个体化，qd皮下注射（固定时间）。','未开封2-8℃，开封后<25℃，4周内用完。','与糖皮质激素、甲状腺素合用可能减弱降糖效果。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d052','甲氨蝶呤片','JADLP','Methotrexate','抗肿瘤药','化疗药','处方药','毒','类风湿关节炎、银屑病、滋养细胞肿瘤、急性白血病。','严重肝肾功能不全、妊娠哺乳期。','骨髓抑制、肝毒性、口腔炎、间质性肺炎。','RA：7.5-15mg qw。补充叶酸5mg qw（MTX后24h）。','遮光密封。','与NSAIDs合用减少MTX排泄增加毒性。与磺胺类合用增加骨髓抑制。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d053','来氟米特片','LFMTP','Leflunomide','抗肿瘤药','免疫治疗药','处方药',null,'类风湿关节炎、狼疮性肾炎。','严重肝功能损害、妊娠期。','腹泻、肝酶升高、脱发。','负荷量50mg qd×3天，维持量20mg qd。','密封保存。','与其他肝毒性药物合用增加肝损伤风险。与华法林合用增强抗凝。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d054','羟氯喹片','QLKP','Hydroxychloroquine','抗肿瘤药','免疫治疗药','处方药',null,'类风湿关节炎、系统性红斑狼疮、光敏性疾病。','黄斑病变、6岁以下儿童。','视网膜毒性（需每年眼科检查）、皮肤色素沉着、胃肠道反应。','RA/SLE：0.2-0.4g qd。','遮光密封。','与胺碘酮等增加QT延长风险。与地高辛合用增加地高辛血药浓度。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d055','别嘌醇片','BPCP','Allopurinol','解热镇痛药','抗痛风药','处方药','毒','慢性高尿酸血症、痛风石、尿酸性肾病。','急性痛风发作时不可新用。','皮疹（严重者超敏反应综合征），起始小剂量可减少。','起始50-100mg qd，逐步增量至300mg qd。','密封保存。','与硫唑嘌呤、6-MP合用显著增加后者毒性（禁忌联用）。与华法林合用增强抗凝。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d056','苯溴马隆片','BXMLP','Benzbromarone','解热镇痛药','抗痛风药','处方药',null,'原发性高尿酸血症。','中度以上肾功能不全、肾结石。','胃肠反应；偶见肝毒性。','50mg qd，早餐后服。用药期间保证每日饮水>2000mL。','密封保存。','与华法林合用增强抗凝。水杨酸类药物减弱其促尿酸排泄作用。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d057','普瑞巴林胶囊','PRBLJN','Pregabalin','神经系统用药','抗癫痫药','处方药（精二）','精二','带状疱疹后神经痛、纤维肌痛、癫痫辅助治疗。','对本品过敏者。','头晕、嗜睡、口干、体重增加。','起始75mg bid，可增至150mg bid。','密封保存。','与中枢抑制剂合用增强镇静作用。与噻唑烷二酮类合用增加体重增加和水肿风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d058','卡马西平片','KMXPP','Carbamazepine','神经系统用药','抗癫痫药','处方药',null,'癫痫（部分性发作）、三叉神经痛。','骨髓抑制、房室传导阻滞。','头晕、嗜睡、皮疹（警惕Stevens-Johnson综合征）、白细胞减少。HLA-B*1502阳性者禁用。','起始100mg bid，逐步增量。','遮光密封。','强CYP3A4诱导剂，加速多种药物代谢（口服避孕药、华法林、环孢素）。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d059','左乙拉西坦片','ZYLXTP','Levetiracetam','神经系统用药','抗癫痫药','处方药',null,'部分性发作的添加治疗。','对本品过敏者。','嗜睡、乏力、头晕。','起始500mg bid，可增至1500mg bid。','密封保存。','与其他抗癫痫药相比，药物相互作用少。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d060','舍曲林片','SQLP','Sertraline','神经系统用药','抗抑郁药','处方药',null,'抑郁症、强迫症、社交焦虑障碍、创伤后应激障碍。','与MAOIs合用禁。','恶心、腹泻、失眠、性功能障碍。','起始50mg qd，晨或晚服用。最大200mg qd。','密封保存。','禁与MAOIs合用（间隔至少14天）。与NSAIDs/抗凝药合用增加出血风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d061','氯化钾缓释片','LHJHSP','KCl SR Tablets','营养支持药','电解质','处方药','高危','各种原因引起的低钾血症的预防和治疗。','高钾血症、严重肾功能不全。','口服后胃肠不适。','0.5-1g bid-tid，餐后服。','密封保存。','与ACEI/ARB、保钾利尿剂合用增加高钾血症风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d062','琥珀酸亚铁片','HPSYTP','Ferrous Succinate','血液系统用药','抗贫血药','OTC',null,'缺铁性贫血的预防和治疗。','血色病、含铁血黄素沉着症。','黑便（正常现象）、胃肠道不适、便秘。','一次1-2片，一日1-3次。餐后服。','密封保存。','与四环素类、喹诺酮类、抗酸药同服间隔2小时以上。VC同服可增加吸收。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d063','叶酸片','YSP','Folic Acid','血液系统用药','抗贫血药','OTC',null,'巨幼细胞性贫血、妊娠期叶酸缺乏的预防（0.4mg qd）。MTX治疗时的补充。','对本品过敏者。','罕见过敏反应。','治疗量：5-10mg tid。预防量：0.4mg qd。','遮光密封。','与苯妥英钠合用可能降低后者血药浓度。大剂量叶酸可掩盖B12缺乏。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d064','左甲状腺素钠片','ZJZXSNP','Levothyroxine Sodium','内分泌系统用药','甲状腺用药','处方药',null,'甲减的替代治疗。TSH抑制治疗（甲状腺癌术后）。','未纠正的肾上腺皮质功能不全。','过量时出现甲亢症状。','起始25-50μg qd，根据TSH每4-6周调整。清晨空腹，至少30min后进食。','遮光密封，<25℃。','与钙剂、铁剂、含铝药物间隔≥4h服用。与含大豆制品间隔服用。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d065','地高辛片','DGXP','Digoxin','心血管系统用药','抗心律失常药','处方药','高危','心力衰竭（尤其合并快速房颤）、房颤/房扑的心室率控制。','室颤、预激综合征合并房颤。','心律失常、恶心、视觉异常（黄视/绿视）。治疗窗窄，需监测血药浓度（0.5-2.0ng/mL）。','0.125-0.25mg qd。','密封保存。','低钾、低镁增加中毒风险。与胺碘酮、维拉帕米合用增加血药浓度。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d066','胺碘酮片','ADTP','Amiodarone','心血管系统用药','抗心律失常药','处方药','高危','房颤复律及窦律维持、室性心律失常。','严重心动过缓、甲状腺功能异常者。','肺毒性（监测肺功能）、甲状腺功能异常、肝毒性、角膜微粒沉积、皮肤蓝灰色色素沉着。','负荷量0.2g tid×7天，维持0.2g qd。','遮光密封。','与华法林合用增强抗凝（需减少华法林1/3-1/2）。与地高辛合用增加地高辛浓度。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d067','阿仑膦酸钠片','ALLSNP','Alendronate Sodium','内分泌系统用药','激素类','处方药',null,'骨质疏松症。','食管排空延迟、不能站立或端坐30min者。','食管炎、食管糜烂。','70mg qw，清晨空腹大量水送服，保持直立≥30min。','密封保存。','与钙剂、抗酸药、含金属离子药物间隔≥30min服用。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d068','坦索罗辛缓释胶囊','TSLXHSJN','Tamsulosin SR','男科/泌尿科用药','前列腺用药','处方药',null,'前列腺增生所致的排尿障碍。','体位性低血压史者。','头晕、射精异常。','0.2mg qd，餐后服。','密封保存。','与PDE5抑制剂（西地那非等）合用增加低血压风险。与其他α受体阻滞剂合用注意血压。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d069','非那雄胺片','FNXAP','Finasteride','男科/泌尿科用药','前列腺用药','处方药',null,'前列腺增生、男性雄激素性脱发。','妇女和儿童。','性欲减退、勃起功能障碍。','BPH：5mg qd。脱发：1mg qd。','密封保存。','无显著药物相互作用。但可降低血清PSA水平（约50%），解释PSA结果时需注意。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d070','黄体酮胶囊','HTTJN','Progesterone','妇产科用药','激素类','处方药',null,'先兆流产、习惯性流产、月经失调。','严重肝病、血栓性疾病。','头晕、嗜睡、乳房胀痛。','先兆流产：0.2-0.3g/d分次服。','遮光密封。','与CYP3A4诱导剂合用可能降低药效。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d071','泼尼松片','PNSP','Prednisone','内分泌系统用药','激素类','处方药',null,'过敏性疾病、自身免疫性疾病、炎症性疾病、淋巴系统肿瘤。','全身性真菌感染。','长期：库欣综合征、骨质疏松、高血糖、感染风险增加。需逐步减量。','5-60mg/d，按疾病调整。','遮光密封。','与NSAIDs合用增加溃疡风险。与利福平合用加速代谢。与降糖药合用可能减弱降糖效果。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d072','氯苯那敏片','LBNMP','Chlorpheniramine','呼吸系统用药','抗组胺药','OTC',null,'过敏性鼻炎、荨麻疹等过敏性疾病。','新生儿、早产儿。','嗜睡、口干。服药期间避免驾驶。','4mg tid。','密封保存。','与其他中枢抑制剂合用增强镇静。与MAOIs合用可能增强抗胆碱能作用。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d073','吸入用布地奈德混悬液','XRYBDNDHXY','Budesonide Inhalation','呼吸系统用药','平喘药','处方药',null,'支气管哮喘。','对本品过敏者。','口腔念珠菌感染、声音嘶哑（吸药后漱口可预防）。','0.5-1mg bid 雾化吸入。','遮光密封。','与CYP3A4强抑制剂合用可能增加全身暴露。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d074','异丙托溴铵吸入剂','YBTXAXRJ','Ipratropium Bromide','呼吸系统用药','平喘药','处方药',null,'COPD的支气管扩张治疗。','对阿托品类过敏者。','口干、咳嗽。','2-4喷 tid-qid。','遮光密封。','与其他抗胆碱能药物合用增强作用。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d075','乳果糖口服液','RGTKFY','Lactulose Oral Solution','消化系统用药','止泻药','OTC',null,'慢性功能性便秘。肝性脑病的辅助治疗。','半乳糖血症。','初始腹胀，继续使用后缓解。','15-30mL qd-bid。','密封保存。','与其他泻药合用可能增加腹泻风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d076','柳氮磺吡啶肠溶片','LDHBDCRP','Sulfasalazine','消化系统用药','止泻药','处方药',null,'溃疡性结肠炎、克罗恩病、类风湿关节炎。','磺胺类过敏、肠梗阻。','恶心、头痛、皮疹、男性不育（可逆）。','起始0.5g bid，渐增至1g tid-qid。','密封保存。','与叶酸合用可能影响叶酸吸收。与抗凝药合用增强抗凝。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d077','美沙拉秦肠溶片','MSLQCRP','Mesalazine','消化系统用药','止泻药','处方药',null,'溃疡性结肠炎、克罗恩病。','严重肾功能损害、水杨酸过敏。','腹泻、恶心、腹痛；罕见肾毒性。','急性期1g qid；维持期0.5g tid。','密封保存。','与硫唑嘌呤合用可能增加骨髓抑制风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d078','西地那非片','XDNFP','Sildenafil','男科/泌尿科用药','勃起功能障碍药','处方药',null,'勃起功能障碍、肺动脉高压。','与硝酸酯类药物合用禁。','头痛、面部潮红、消化不良、视觉异常。','ED：50mg 性活动前1h服用。','密封保存。','禁与任何形式的硝酸酯类药物合用（严重低血压）。与α受体阻滞剂合用注意血压。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d079','曲马多缓释片','QMDHSP','Tramadol SR','解热镇痛药','阿片类','处方药（精二）','精二','中度至重度疼痛。','严重呼吸抑制、急性酒精中毒。','恶心、头晕、便秘、出汗。','50-100mg q12h。','密封保存。','与SSRI类抗抑郁药合用可能增加5-HT综合征风险。与其他中枢抑制剂合用增强呼吸抑制。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d080','塞来昔布胶囊','SLXBJN','Celecoxib','解热镇痛药','非甾体抗炎药','处方药',null,'骨关节炎、类风湿关节炎的疼痛和炎症。','磺胺类过敏、CABG围术期。','消化道反应（较传统NSAIDs少）、心血管风险（剂量相关）。','0.2g qd-bid。','密封保存。','与华法林合用增加出血风险。与ACEI合用可能减弱降压效果。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d081','阿托品眼用凝胶','ATPYYNJ','Atropine Eye Gel','五官科用药','眼科用药','处方药',null,'散瞳验光、虹膜睫状体炎。','闭角型青光眼。','视物模糊、畏光、口干。','遵医嘱使用。','遮光密封。','与其他抗胆碱能药物合用增强作用。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d082','左氧氟沙星滴眼液','ZYFSXDYY','Levofloxacin Eye Drops','五官科用药','眼科用药','处方药',null,'细菌性结膜炎、角膜炎。','喹诺酮类过敏者。','一过性眼刺激。','1-2滴，q2-4h。','遮光密封。','与其他眼用制剂间隔≥5min使用。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d083','糠酸莫米松鼻喷雾剂','KSMMSBPWJ','Mometasone Nasal Spray','五官科用药','耳鼻喉用药','处方药',null,'过敏性鼻炎。','鼻部手术后未愈。','鼻出血、咽喉刺激。','每侧鼻孔2喷 qd。','密封保存。','与CYP3A4强抑制剂合用可能增加全身暴露。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d084','开塞露','KSL','Glycerin Enema','消化系统用药','止泻药','OTC',null,'偶发性便秘。','无。','直肠刺激感。','1支 纳肛，保留数分钟。','密封保存。','无显著药物相互作用。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d085','噻托溴铵粉吸入剂','STXAFXRJ','Tiotropium Inhaler','呼吸系统用药','COPD用药','处方药',null,'COPD的维持治疗。','对噻托溴铵或阿托品类过敏者。','口干、便秘、尿潴留、视物模糊（窄角型青光眼慎用）。','18μg qd 吸入。','密封干燥保存。','与其他抗胆碱能药物合用可能增强抗胆碱能效应。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d086','沙美特罗替卡松吸入剂','SMTLTKSRXJ','Salmeterol/Fluticasone Inhaler','呼吸系统用药','COPD用药','处方药',null,'哮喘和COPD的维持治疗。','对乳糖或本品过敏者。','声音嘶哑、口腔念珠菌感染、心悸、头痛。','50/250μg或50/500μg bid 吸入。','密封保存。','与CYP3A4强抑制剂合用可能增加全身不良反应。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d087','沙丁胺醇气雾剂','SDACQWJ','Salbutamol Inhaler','呼吸系统用药','COPD用药','处方药',null,'支气管哮喘、COPD急性症状缓解。','对本品过敏者。','心悸、心动过速、肌肉震颤、头痛。','急性发作1-2吸，必要时每4-6h重复。','避光密封。','与β阻滞剂合用可能相互拮抗。与茶碱合用可能增加低钾风险。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d088','乙酰半胱氨酸泡腾片','YXBGASPT','Acetylcysteine Effervescent','呼吸系统用药','祛痰药','OTC',null,'痰液黏稠引起的咳痰困难。','对本品过敏者、苯丙酮尿症患者。','偶有恶心、呕吐、罕见支气管痉挛。','成人600mg qd 泡腾后口服。','密封避潮。','与硝酸甘油合用可能增强血管扩张和抗血小板作用。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d089','氟替卡松吸入气雾剂','FTKSXRQWJ','Fluticasone Inhaler','呼吸系统用药','COPD用药','处方药',null,'哮喘和COPD的抗炎维持治疗。','活动性肺结核、口咽部真菌感染。','声音嘶哑、口腔念珠菌病、生长抑制（儿童）。','COPD 500μg bid 吸入。','密封保存。','与CYP3A4抑制剂合用需谨慎（利托那韦禁忌合用）。',null) on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d090','阿莫西林颗粒','AMXLKL','Amoxicillin Granules','抗生素','抗生素','处方药',null,'用于敏感菌所致呼吸道感染、泌尿道感染、皮肤软组织感染。儿童专属口服剂型，适合吞咽困难患儿。','青霉素过敏者禁用。传染性单核细胞增多症患者禁用（诱发药疹风险显著增加）。','常见：腹泻、恶心等胃肠道反应；偶见：皮疹、药物热；罕见：伪膜性肠炎、肝损伤。','儿童：按体重20-40mg/kg/日，分3次服用。3个月以下婴儿按30mg/kg/日分为2次给药。每2.25g阿莫西林相当于2g活性成分。冲调后立即服用。','密闭，在凉暗干燥处（不超过20℃）保存。','丙磺舒可降低阿莫西林肾小管分泌；与氨基糖苷类合用有协同杀菌作用；可能降低口服避孕药疗效。','【儿童剂型】颗粒剂，适合配制后即服。较胶囊剂更方便儿童分剂给药。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d091','阿莫西林克拉维酸钾片','AMXLKLWJSNGP','Amoxicillin/Clavulanate Potassium Tablets','抗生素','抗生素','处方药','高危','用于产β-内酰胺酶流感嗜血杆菌、卡他莫拉菌所致下呼吸道感染（肺炎、慢支急性加重）、中耳炎、鼻窦炎；产酶金黄色葡萄球菌、产酶肠杆菌科细菌所致皮肤软组织感染、尿路感染；亦用于产酶菌所致腹腔感染、骨髓炎等。对耐阿莫西林单药的产酶菌株有效。','青霉素过敏者禁用；既往阿莫西林克拉维酸相关黄疸/肝功能损害者禁用；传染性单核细胞增多症或淋巴细胞白血病患者禁用（诱发药疹风险极高）；苯丙酮尿症患者慎用（咀嚼片含苯丙氨酸）；严重肾功能不全（CrCl<10mL/min）需调整剂量。','常见：腹泻（发生率约9%，显著高于阿莫西林单药）、恶心、呕吐、皮疹；偶见：荨麻疹、肝功能异常（ALT/AST升高）、药物热；罕见：胆汁淤积性肝炎（老年男性长期用药风险高）、Stevens-Johnson综合征、伪膜性肠炎、粒细胞缺乏、血小板减少。','成人及≥40kg儿童：625mg（阿莫西林500mg/克拉维酸125mg）tid；或1g bid（重症感染用高规格）。3个月-40kg儿童：按阿莫西林计25-45mg/kg/日（一般感染25mg/kg/日，中耳炎/肺炎45mg/kg/日），分2次服用。肾功能不全：CrCl 10-30mL/min者625mg q12h；CrCl<10mL/min者625mg q24h。片剂不可压碎，需整片吞服。','遮光，密封，在干燥处保存。含干燥剂，用后立即密封瓶盖。','丙磺舒抑制阿莫西林肾小管分泌，升高血药浓度；与甲氨蝶呤合用增加后者毒性；与别嘌醇合用增加皮疹发生率；与华法林合用延长INR，需监测；可能降低口服避孕药疗效；与霉酚酸酯合用降低后者血药浓度。','【高危药品】含β-内酰胺酶抑制剂克拉维酸，扩大抗菌谱覆盖产酶菌。腹泻发生率较阿莫西林单药明显增高。老年男性警惕胆汁淤积风险。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d092','阿莫西林克拉维酸钾干混悬剂','AMXLKLWJSGKHXJ','Amoxicillin/Clavulanate for Suspension','抗生素','抗生素','处方药',null,'用于儿童产酶菌所致急性中耳炎（首选推荐）、鼻窦炎、社区获得性肺炎、反复发作性扁桃体炎、皮肤软组织感染、泌尿道感染。儿童口服专属剂型，配制后为草莓/水果味混悬液，提高患儿依从性。','青霉素过敏者禁用；既往阿莫西林克拉维酸相关肝损害/黄疸者禁用；传染性单核细胞增多症患者禁用；苯丙酮尿症者（部分制剂含阿斯巴甜）；严重肾功能不全需调整剂量。','常见：腹泻（儿童发生率约10-15%）、稀便、呕吐；偶见：尿布区皮疹、荨麻疹、恶心；罕见：肝酶升高、伪膜性肠炎、血管性水肿。','按阿莫西林计：儿童（≥3个月）一般感染45mg/kg/日，分2次服用（约q12h）；重症中耳炎/肺炎可用至90mg/kg/日，分2次服用。3个月以下婴儿25-45mg/kg/日，分2次。肾功能不全CrCl<30mL/min者减量。配制方法：加凉开水至瓶身标记线，充分振摇至均匀混悬液（每次服用前均需振摇）。使用随附量杯或滴管精确量取。配制后冷藏（2-8℃），7-10天内用完。','干粉状态：密封，25℃以下干燥保存。配制后混悬液：冷藏2-8℃保存，7-10天内用完，过期弃置。','丙磺舒增加阿莫西林血药浓度；与甲氨蝶呤合用增加血液毒性；可能降低口服避孕药效果；与霉酚酸酯合用降低后者血药浓度达50%；降低维生素K合成，与抗凝药合用需监测INR。','【儿童常用剂型】干混悬剂专为儿童设计，草莓口味提高依从性。配制后须冷藏，每次服用前振摇均匀。显著腹泻需告知医生。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d093','注射用阿莫西林钠克拉维酸钾','ZSYAMXLNKLWJSJ','IV Amoxicillin/Clavulanate','抗生素','抗生素','处方药',null,'用于重症感染：社区/医院获得性肺炎、腹腔感染（阑尾炎、腹膜炎、胆道感染）、复杂性尿路感染、败血症、蜂窝织炎、骨髓炎、手术预防（胆道/胃肠道/妇产科手术中感染预防）。覆盖需氧G+/G-菌及部分厌氧菌的混合感染。','青霉素过敏者禁用；既往β-内酰胺类抗生素相关严重肝损害者禁用；传染性单核细胞增多症患者禁用；严重肾功能不全（CrCl<10mL/min）需谨慎调整。','常见：注射部位疼痛/血栓性静脉炎、腹泻、皮疹；偶见：肝功能异常（ALT/AST/ALP升高）、血小板减少；罕见：急性间质性肾炎、过敏性休克、溶血性贫血、胆汁淤积性肝炎、Stevens-Johnson综合征。','成人及≥12岁儿童：1.2g q8h静脉注射（缓慢推注3-4分钟）或静脉滴注（30-40分钟）。重症感染可用至1.2g q6h。3个月-12岁儿童：按阿莫西林计30mg/kg q8h，重症可用q6h。0-3个月婴儿(体重<4kg)：按30mg/kg q12h。肾功能不全CrCl 10-30mL/min：首剂1.2g，维持1.2g q12h；CrCl<10mL/min：1.2g q24h，无需透析后追加。配制：1.2g用20mL注射用水溶解后加入100mL生理盐水或5%GS中静脉滴注，溶液不稳定，应配制后20分钟内使用。','干粉：30℃以下密封保存。配制后溶液：不宜久置，应在20分钟内完成输注。','与氨基糖苷类体外物理性不相容，不能在同一容器中混合；丙磺舒升高阿莫西林血药浓度；与甲氨蝶呤合用增加毒性；与华法林合用需监测INR（可能延长PT）；大剂量可致尿糖假阳性。','【注射用复方β-内酰胺】用于重症感染的静脉给药途径。覆盖产酶菌株及部分厌氧菌。静脉推注需缓慢（3-4分钟）。溶液不稳定，配制后立即使用。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d094','青霉素V钾片','QMSVJP','Phenoxymethylpenicillin Potassium','抗生素','抗生素','处方药',null,'用于敏感菌所致轻中度感染：A族溶血性链球菌咽炎/扁桃体炎（风湿热一级预防）、猩红热、丹毒、轻度皮肤软组织感染、口腔感染（牙槽脓肿、冠周炎）、肺炎链球菌轻中度肺炎（非菌血症性）、风湿热二级预防。口服耐酸，胃肠道吸收好，不宜被胃酸破坏。','青霉素过敏者禁用。用药前必须进行青霉素皮肤试验，阳性反应者严禁使用。严重肾功能不全者慎用。','常见：恶心、上腹不适、腹泻、黑毛舌；偶见：皮疹（斑丘疹为主）、荨麻疹、口腔炎；罕见：过敏性休克（发生率约0.004-0.04%）、血清病样反应、溶血性贫血、粒细胞缺乏。口服剂型过敏反应较注射剂轻但并非绝对。','成人：250-500mg q6-8h，餐前1小时或餐后2小时服用（空腹提高生物利用度），疗程一般7-10天。A族链球菌感染：500mg q12h，至少10天（预防风湿热）。儿童（≥12岁）：同成人。1-12岁儿童：按体重25-50mg/kg/日，分3-4次。肾功能不全CrCl>10mL/min通常无需调整；CrCl<10mL/min者减量至250mg q6h。','遮光，密封，在干燥处（15-25℃）保存。避免潮湿，防止片剂吸潮变色。','丙磺舒抑制肾小管分泌，延长半衰期；与甲氨蝶呤合用增加后者毒性（减少肾清除）；降低口服避孕药疗效；与华法林合用可能延长出血时间；与氨基糖苷类有协同抗菌作用。','【口服青霉素类】耐酸口服青霉素。抗菌谱较注射青霉素窄。食前或食后2小时空腹服用。风湿热预防的首选口服药物。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d095','注射用苄星青霉素','ZSYBXQMS','Benzathine Penicillin G','抗生素','抗生素','处方药',null,'主要用于梅毒各期治疗（早期梅毒、晚期梅毒、神经梅毒的辅助治疗、妊娠梅毒）；风湿热一级和二级预防（A族β-溶血性链球菌感染后预防复发）；链球菌咽炎/扁桃体炎的根除治疗（青霉素V口服禁忌或不耐受时）；雅司、品他病等螺体感染。','青霉素过敏者禁用；既往青霉素相关过敏性休克或严重皮肤反应史者禁用。用药前必须进行青霉素皮肤试验，阳性者严禁使用。','常见：注射部位疼痛、硬结（深部IM可减轻）；偶见：皮疹、荨麻疹、药物热、血清病样反应；罕见但严重：过敏性休克（肌注后需观察至少30分钟）、Jarisch-Herxheimer反应（梅毒治疗开始后6-12小时出现发热、寒战、头痛、肌痛，24小时内自限）、急性间质性肾炎、溶血性贫血。','梅毒早期（<1年）：240万U单次深部臀肌IM（分两侧臀部各120万U）。梅毒晚期（>1年）或病期不明：240万U q7d×3次（总量720万U）。神经梅毒：需联用水剂青霉素G静脉给药，苄星青霉素仅作后续巩固（240万U q7d×3次）。风湿热预防：120万U每月一次深部IM（体重<27kg儿童60万U每月），长期甚至终生。链球菌咽炎：≤27kg儿童60万U单次IM，>27kg儿童及成人120万U单次IM。仅作深部臀肌IM，严禁IV/IA/SC给药（可致严重组织损伤坏死）。','遮光，密封，在干燥处（15-25℃）保存。溶解后应即刻使用，不能储存。','丙磺舒可升高青霉素G血药浓度并延长半衰期；与甲氨蝶呤合用增加后者毒性；与四环素类、红霉素类合用可能产生拮抗（抑制细菌生长降低青霉素杀菌效果）；可能影响口服抗凝药效果。','【长效青霉素】仅深部肌注。梅毒治疗标准药物。每次注射后观察至少30分钟。Jarisch-Herxheimer反应属常见治疗反应，需与过敏鉴别。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d096','氨苄西林胶囊','ABXLJN','Ampicillin Capsules','抗微生物药','青霉素类','处方药（非限制级）',null,'敏感菌所致呼吸道感染、泌尿道感染、胃肠道感染、脑膜炎、心内膜炎、败血症。广谱半合成青霉素，对G+菌和部分G-菌有效。','青霉素过敏者禁用。传染性单核细胞增多症患者禁用（易发皮疹）。严重肾功能不全者慎用。','常见：腹泻、恶心、皮疹（尤其传单患者可达95%）；偶见：药物热、荨麻疹；罕见：过敏性休克、间质性肾炎、伪膜性肠炎。','成人：250-500mg q6h，空腹服用。重症可增至1g q6h。儿童：50-100mg/kg/日，分4次。肾功能不全CrCl 10-50mL/min：q6-8h；<10mL/min：q12h。脑膜炎：成人2g q4h静脉给药。','遮光，密封，在干燥处（15-25℃）保存。','丙磺舒升高血药浓度；与氨基糖苷类有协同但不可同瓶滴注；降低口服避孕药疗效；与别嘌醇合用增加皮疹风险；高剂量可延长华法林INR。','【非限制级青霉素】广谱氨基青霉素。口服吸收约40%，食物降低吸收。传单患者禁用（皮疹率极高）。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d097','头孢氨苄胶囊（一代）','TBABJN','Cephalexin Capsules','抗微生物药','头孢一代','处方药（非限制级）',null,'敏感G+菌（链球菌、葡萄球菌）所致轻中度感染：咽炎/扁桃体炎、皮肤软组织感染、泌尿道感染。一代头孢口服代表药。','头孢菌素过敏者禁用。青霉素过敏者慎用（交叉过敏率约5-10%）。严重肾功能不全者需调整剂量。','常见：腹泻、恶心、腹痛；偶见：皮疹、荨麻疹、阴道念珠菌病；罕见：过敏性休克、Stevens-Johnson综合征、可逆性间质性肾炎。','成人：250-500mg q6h，空腹服用。最大4g/日。皮肤感染：500mg q12h。儿童：25-50mg/kg/日分2-4次。肾功能不全CrCl<40mL/min需减量；<10mL/min：250mg q12h。','遮光，密封，在凉暗干燥处保存。','丙磺舒升高血药浓度；与氨基糖苷类合用增加肾毒性；降低口服避孕药疗效；与呋塞米合用增加肾损害风险。','【非限制级一代头孢】口服一代代表药物。抗G+菌活性强于G-菌。主要用于轻中度感染门诊治疗。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d098','头孢拉定胶囊（一代）','TBLDJN','Cephradine Capsules','抗微生物药','头孢一代','处方药（非限制级）',null,'敏感G+菌所致感染：呼吸道感染、泌尿道感染、皮肤软组织感染。与头孢氨苄类似，抗G+菌强于G-菌。可口服可注射。','头孢菌素过敏者禁用。青霉素过敏者慎用。严重肾功能不全者需调整剂量。','常见：腹泻、恶心、胃部不适；偶见：皮疹、荨麻疹、嗜酸性粒细胞增多；罕见：过敏性休克、伪膜性肠炎、肾毒性。','成人：250-500mg q6h，最大4g/日。儿童：25-50mg/kg/日分3-4次。肾功能不全需调整：CrCl 10-20mL/min减量50%；<10mL/min减量75%。','遮光，密封，在凉暗处保存。','丙磺舒升高血药浓度；与氨基糖苷类合用增加肾毒性；与呋塞米/万古霉素合用增加肾损害；降低口服避孕药疗效。','【非限制级一代头孢】一代头孢口服剂型。肾毒性是头孢一代共性注意点。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d099','头孢丙烯片（二代）','TBBXP','Cefprozil Tablets','抗微生物药','头孢二代','处方药（非限制级）',null,'敏感菌所致呼吸道感染（咽炎/扁桃体炎/急性鼻窦炎/支气管炎）、皮肤软组织感染。口服二代头孢，G+和G-均有覆盖。','头孢菌素过敏者禁用。青霉素过敏者慎用。严重肾功能不全者需调整。','常见：腹泻、恶心、呕吐；偶见：皮疹、阴道念珠菌病、头痛；罕见：过敏性休克、肝功能异常、伪膜性肠炎。','成人：上呼吸道感染500mg q24h，下呼吸道感染500mg q12h，皮肤感染250-500mg q12h。儿童：7.5-15mg/kg q12h。CrCl<30mL/min减量50%。','遮光，密封，在干燥处保存。','丙磺舒升高血药浓度；降低口服避孕药疗效；与氨基糖苷类合用增加肾毒性。','【非限制级二代头孢】口服二代头孢。抗菌谱较一代广，增加对G-菌活性。每日1-2次给药。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d100','注射用头孢替安（二代）','ZSYTBTA','Cefotiam for Injection','抗微生物药','头孢二代','处方药（限制级）',null,'G+菌及部分G-菌感染：肺炎、胆道感染、腹膜炎、术后感染、尿路感染、败血症。注射二代头孢。','头孢菌素过敏者禁用。青霉素过敏者慎用。严重肾功能不全需调整。新生儿和早产儿慎用。','常见：皮疹、腹泻；偶见：嗜酸性粒细胞增多、转氨酶升高、注射部位疼痛；罕见：过敏性休克、伪膜性肠炎、肾毒性。','成人：1-2g/日，分2-4次静脉滴注。重症可增至4g/日。儿童：40-80mg/kg/日分3-4次。CrCl<10mL/min减量至1/2-1/3。','密闭，在凉暗干燥处（不超过20℃）保存。溶解后立即使用。','与氨基糖苷类有协同但不可同瓶混合；与呋塞米合用增加肾毒性；与口服抗凝药合用可能增加出血风险。','【限制级二代头孢】注射二代头孢。较一代增强G-菌活性，保留G+菌活性。手术预防用药选择之一。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d101','注射用头孢西丁（头霉素类）','ZSYTBXD','Cefoxitin for Injection','抗微生物药','头孢二代','处方药（限制级）',null,'需氧/厌氧菌混合感染：腹盆腔感染、坏死性筋膜炎、子宫内膜炎、阑尾术后感染。手术预防用药（尤其妇产科/胃肠道手术）。头霉素类，抗厌氧菌活性强。','头孢菌素过敏者禁用。青霉素过敏者慎用。严重肾功能不全需调整。','常见：注射部位疼痛/静脉炎、腹泻；偶见：皮疹、嗜酸性粒细胞增多、转氨酶升高；罕见：过敏性休克、伪膜性肠炎、Coomb''s试验阳性。','成人：1-2g q6-8h静脉滴注。重症可增至12g/日。手术预防：2g术前30min静脉给药。儿童：80-160mg/kg/日分4-6次。CrCl 30-50mL/min：1-2g q8-12h；10-30mL/min：1-2g q12-24h；<10mL/min：0.5-1g q24-48h。','密闭，在凉暗干燥处保存。溶解后室温24h内使用。','与氨基糖苷类不可同瓶混合；与呋塞米/万古霉素合用增加肾毒性；降低口服避孕药疗效；与华法林合用可能增加出血。','【限制级二代头霉素】抗厌氧菌活性强，适合腹盆腔混合感染。妇产科/胃肠道手术预防用药。对ESBL无效。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d102','注射用头孢他啶（三代）','ZSYTBTD','Ceftazidime for Injection','抗微生物药','头孢三代','处方药（限制级）',null,'铜绿假单胞菌及G-菌重症感染：脓毒症、医院获得性肺炎、复杂性尿路感染、腹腔感染、脑膜炎。三代头孢中抗铜绿活性最强。','头孢菌素过敏者禁用。青霉素过敏者慎用。严重肾功能不全需调整。','常见：腹泻、皮疹、注射部位静脉炎；偶见：头痛、转氨酶升高、嗜酸性粒细胞增多；罕见：过敏性休克、伪膜性肠炎、肾毒性、双硫仑样反应（罕见）。','成人：1-2g q8-12h静脉滴注。铜绿感染：2g q8h。脑膜炎：2g q8h。肾功能不全需大幅调整：CrCl 30-50mL/min：1g q12h；10-30mL/min：1g q24h；<10mL/min：1g q48h。儿童：30-50mg/kg q8h，最大6g/日。','密闭，在凉暗干燥处保存。溶解后室温7天、冷藏10天。','与氨基糖苷类有协同抗铜绿但不可同瓶混合；与呋塞米合用增加肾毒性；氯霉素拮抗头孢他啶抗菌活性；与万古霉素合用增加肾毒性。','【限制级三代头孢】三代头孢中抗铜绿假单胞菌活性最强。对G+菌活性较弱。肾功能不全需大幅减量。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d103','注射用头孢哌酮舒巴坦（三代复方）','ZSYTBPTSBT','Cefoperazone/Sulbactam for Injection','抗微生物药','头孢三代','处方药（特殊使用级）','高危','多重耐药G-菌感染：铜绿假单胞菌、鲍曼不动杆菌、肺炎克雷伯菌（产ESBL）。腹腔感染、医院获得性肺炎、脓毒症。舒巴坦增强对β-内酰胺酶稳定性。','头孢菌素过敏者禁用。青霉素过敏者慎用。活动性出血者慎用（含NMTT侧链影响凝血）。','常见：腹泻、皮疹；偶见：注射部位疼痛、转氨酶升高、凝血功能异常（维生素K依赖凝血因子减少）；罕见：过敏性休克、双硫仑样反应、出血。','成人：2-4g/日（1:1）分2次静脉滴注。重症可增至8g/日。铜绿感染：3-4g q12h。舒巴坦最大4g/日。儿童：40-80mg/kg/日分2-4次。肝功能不全需调整（头孢哌酮经胆汁排泄），肾功能不全主要影响舒巴坦需调整。','密闭，在凉暗干燥处（不超过20℃）保存。溶解后立即使用。','含NMTT侧链：与华法林合用增加出血风险（需补充维生素K）；饮酒可致双硫仑样反应；与氨基糖苷类不可同瓶混合；与肝素合用增加出血。','【特殊使用级三代头孢复方】含NMTT侧链→影响维生素K依赖凝血因子→出血风险→需补充维生素K。双硫仑样反应。舒巴坦增强抗酶能力。ICU/重症常用。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d104','头孢地尼胶囊（三代口服）','TBDNJN','Cefdinir Capsules','抗微生物药','头孢三代','处方药（非限制级）',null,'敏感菌所致呼吸道感染（急性鼻窦炎/支气管炎/肺炎）、耳鼻喉感染（中耳炎）、皮肤软组织感染、泌尿道感染。口服三代头孢，G+和G-均有覆盖。','头孢菌素过敏者禁用。青霉素过敏者慎用。','常见：腹泻（尤其儿童）、恶心；偶见：皮疹、阴道念珠菌病、头痛；罕见：过敏性休克、伪膜性肠炎。服药期间大便可能呈红色（与铁剂无关）。','成人：300mg q12h或600mg q24h，疗程5-10天。儿童：7mg/kg q12h或14mg/kg q24h，最大600mg/日。CrCl<30mL/min减量（300mg q24h）。','遮光，密封，在凉暗干燥处保存。','含铝/镁抗酸剂和铁剂降低吸收（间隔2h以上）；丙磺舒升高血药浓度；降低口服避孕药疗效。','【非限制级三代口服头孢】口服三代头孢。对G+菌活性优于其他口服三代。注意与铁剂/抗酸剂间隔。儿童腹泻发生率较高。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d105','头孢泊肟酯片（三代口服）','TBBWZP','Cefpodoxime Proxetil Tablets','抗微生物药','头孢三代','处方药（非限制级）',null,'呼吸道感染/泌尿生殖道感染/皮肤软组织感染。口服三代头孢前药，酯化后口服吸收好。','头孢菌素过敏者禁用。青霉素过敏者慎用。严重肾功能不全需调整。','常见：腹泻、恶心、腹痛；偶见：皮疹、头痛、阴道念珠菌病；罕见：过敏性休克、伪膜性肠炎、肝功能异常。','成人：100-200mg q12h，随餐服用。泌尿道感染：100mg q12h；呼吸道感染：200mg q12h。儿童：5mg/kg q12h，最大200mg/剂。CrCl<30mL/min增加给药间隔至q24h。','遮光，密封，在干燥处保存。','含铝/镁/钙抗酸剂降低吸收（间隔2h）；H2受体拮抗剂降低吸收；丙磺舒升高血药浓度；降低口服避孕药疗效。','【非限制级三代口服头孢】前药酯化增加吸收。随餐服用提高生物利用度。注意与抗酸剂间隔。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d106','注射用头孢吡肟（四代）','ZSYTBBW','Cefepime for Injection','抗微生物药','头孢四代','处方药（特殊使用级）','高危','多重耐药菌重症感染：ESBL产酶G-菌、铜绿假单胞菌。中性粒细胞减少伴发热经验治疗。医院获得性肺炎、复杂性尿路感染、腹腔感染。中枢神经系统感染。','头孢菌素过敏者禁用。青霉素过敏者慎用。严重肾功能不全需调整（神经毒性风险）。','常见：腹泻、皮疹、注射部位反应；偶见：头痛、发热、转氨酶升高；严重：神经毒性（肌阵挛、癫痫、脑病）—肾功能不全者高发；罕见：过敏性休克、伪膜性肠炎。','成人：1-2g q12h静脉滴注。重症可2g q8h。中性粒细胞减少发热：2g q8h。肾功能不全必须调整：CrCl 30-60mL/min减量；<30mL/min大幅减量并监测神经毒性。儿童：50mg/kg q8-12h，最大2g/剂。','密闭，在凉暗干燥处保存。溶解后室温7天、冷藏10天。','与氨基糖苷类不可同瓶混合；与呋塞米合用增加肾毒性和耳毒性；肾功能不全时神经毒性风险增加——需密切监测。','【特殊使用级四代头孢】ESBL产酶菌和铜绿有效。肾功能不全→药物蓄积→神经毒性（癫痫/脑病）→必须调整剂量。三代无效时的升级选择。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d107','注射用亚胺培南西司他丁（复方）','ZSYAPNXSTD','Imipenem/Cilastatin for Injection','抗微生物药','碳青霉烯类','处方药（特殊使用级）','高危','多重耐药菌所致重症感染：ESBL产酶肠杆菌科、铜绿假单胞菌、不动杆菌、脆弱拟杆菌混合感染。腹腔感染、医院获得性肺炎、脓毒症。碳青霉烯类最后防线之一。','碳青霉烯类/头孢菌素过敏者禁用。青霉素过敏者慎用（交叉过敏率约1%）。中枢神经系统感染慎用（癫痫风险）。肾功能不全需调整。','常见：恶心、呕吐、腹泻、注射部位疼痛；偶见：皮疹、转氨酶升高、嗜酸性粒细胞增多；严重：癫痫（发生率1-3%，高剂量/肾功能不全/CNS病变者更高）；罕见：过敏性休克、伪膜性肠炎。','成人：0.5-1g q6-8h静脉滴注（30-60min）。最大4g/日或50mg/kg/日。肾功能不全CrCl<70mL/min必须调整：<20mL/min减量至250mg q12h。儿童：15-25mg/kg q6h。癫痫高危患者可选美罗培南。','密闭，在凉暗处保存。溶解后室温4h内使用。','与丙戊酸钠合用显著降低丙戊酸血药浓度（可降至无效水平）→癫痫发作风险；与更昔洛韦合用增加癫痫风险；与氨基糖苷类有协同但不可同瓶混合。','【特殊使用级碳青霉烯】最后防线抗生素。癫痫风险（1-3%）→CNS感染/癫痫史者选美罗培南。与丙戊酸有严重相互作用。西司他丁抑制肾脱氢肽酶防止亚胺培南降解。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d108','注射用比阿培南','ZSYBPN','Biapenem for Injection','抗微生物药','碳青霉烯类','处方药（特殊使用级）','高危','重症感染：腹腔感染、呼吸道感染、败血症、复杂性尿路感染。碳青霉烯类。对肾脱氢肽酶稳定（无需西司他丁）。癫痫风险低于亚胺培南。','碳青霉烯类过敏者禁用。青霉素/头孢菌素过敏者慎用。严重肾功能不全需调整。','常见：腹泻、恶心、皮疹；偶见：转氨酶升高、嗜酸性粒细胞增多、注射部位疼痛；癫痫风险低于亚胺培南；罕见：过敏性休克、伪膜性肠炎。','成人：0.3g q12h静脉滴注（30-60min）。重症可增至0.6g/日。肾功能不全CrCl<50mL/min减量。','密闭，在凉暗处保存。溶解后立即使用。','与丙戊酸钠合用降低丙戊酸血药浓度（类亚胺培南）；与氨基糖苷类不可同瓶混合。','【特殊使用级碳青霉烯】肾脱氢肽酶稳定（无需西司他丁）。癫痫风险低于亚胺培南。国产碳青霉烯代表。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d109','硫酸庆大霉素注射液','LSQDMSZSY','Gentamicin Sulfate Injection','抗微生物药','氨基糖苷类','处方药（限制级）','高危','G-杆菌重症感染：败血症、腹腔感染、尿路感染、胆道感染、肺炎。浓度依赖性杀菌，PAE长。','氨基糖苷类过敏者禁用。孕妇禁用（致畸）。重症肌无力者慎用（神经肌肉阻滞）。肾功能障碍者慎用。','严重：肾毒性（10-25%，近曲小管损伤，通常可逆）、耳毒性（前庭>耳蜗，不可逆）；偶见：神经肌肉阻滞（重症肌无力加重）；罕见：过敏性休克。TDM必查。','成人：1-1.7mg/kg q8h静脉滴注（30min）或5mg/kg q24h（每日一次给药法）。肾功能不全必须TDM调整：CrCl<50mL/min延长间隔或减量。儿童：2-2.5mg/kg q8h。TDM目标：峰值5-10μg/mL，谷值<2μg/mL。','密闭，在凉暗处保存。避免冰冻。','与呋塞米/万古霉素合用增加耳肾毒性；与神经肌肉阻滞剂合用增加呼吸抑制风险；与头孢类合用增加肾毒性（不可同瓶）；与青霉素类有协同但体外灭活。','【限制级氨基糖苷类】肾毒性+耳毒性→TDM必查。浓度依赖性→每日一次给药方案疗效好毒性低。避免与呋塞米/万古霉素联用。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d110','硫酸阿米卡星注射液','LSAMKXZSY','Amikacin Sulfate Injection','抗微生物药','氨基糖苷类','处方药（限制级）','高危','多重耐药G-杆菌感染：铜绿假单胞菌、鲍曼不动杆菌、肺炎克雷伯菌。对庆大霉素耐药菌株可能有效（不被大多数钝化酶灭活）。TDM监测。','氨基糖苷类过敏者禁用。孕妇禁用。重症肌无力慎用。肾功能障碍慎用。','严重：肾毒性（略低于庆大霉素）、耳毒性（耳蜗毒性>前庭，不可逆）；偶见：神经肌肉阻滞；罕见：过敏性休克。TDM必查。','成人：7.5mg/kg q12h或15mg/kg q24h静脉滴注（30-60min）。最大1.5g/日。肾功能不全必须TDM调整。TDM目标：峰值20-30μg/mL，谷值<5-8μg/mL。儿童：15-22.5mg/kg/日分2-3次。','密闭，在凉暗处保存。','与呋塞米/万古霉素合用增加耳肾毒性；与神经肌肉阻滞剂合用增加呼吸抑制；与其他肾毒性药物合用需严密监测；与β-内酰胺类有协同。','【限制级氨基糖苷类】对钝化酶稳定→庆大霉素耐药株可能有效。耳蜗毒性突出→不可逆听力损害。TDM必查。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d111','阿奇霉素干混悬剂（儿童）','AQMSGHXJ','Azithromycin for Suspension','抗微生物药','大环内酯类','处方药（非限制级）',null,'儿童呼吸道感染（咽炎/扁桃体炎/肺炎）、皮肤软组织感染。肺炎支原体肺炎、衣原体感染首选。口服混悬液，适合儿童。','大环内酯类过敏者禁用。严重肝功能不全者慎用。QT延长者慎用。','常见：腹泻、恶心、腹痛、呕吐（儿童多见）；偶见：皮疹、头痛、头晕；罕见：QT延长、肝功能异常、过敏性休克。食物可降低吸收（悬浮剂型影响较小）。','儿童：10mg/kg q24h，连续3天（3日方案）或10mg/kg第1天，5mg/kg第2-5天（5日方案）。最大500mg/日。支原体肺炎：10mg/kg/日×3-5天。肾功能不全通常无需调整。肝功能不全慎用。','密闭，在干燥处保存。冲调后室温10天有效。','与含铝/镁抗酸剂间隔2h；与华法林合用增加出血风险；与地高辛合用增加地高辛血药浓度；与阿托伐他汀合用增加横纹肌溶解风险；与麦角胺合用禁忌。','【非限制级大环内酯】支原体肺炎首选。3日/5日短疗程。组织浓度远高于血药浓度。对胃酸稳定。食物对悬浮剂型影响小。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d112','克拉霉素片','KLMSP','Clarithromycin Tablets','抗微生物药','大环内酯类','处方药（非限制级）',null,'呼吸道感染（咽炎/鼻窦炎/支气管炎/肺炎）、Hp根除方案组分（含铋剂+PPI+阿莫西林）、皮肤软组织感染。抗G+菌活性强于红霉素。','大环内酯类过敏者禁用。同时使用西沙必利/匹莫齐特/麦角胺者禁用。严重肝肾功能不全者慎用。QT延长者禁用。','常见：腹泻、恶心、味觉异常（金属味）；偶见：头痛、皮疹、转氨酶升高；罕见：QT延长、肝毒性、过敏性休克。味觉异常是克拉霉素特征性不良反应。','成人：250-500mg q12h，疗程7-14天。Hp根除：500mg q12h×14天（联合方案）。肾功能不全CrCl<30mL/min减半剂量。儿童：7.5mg/kg q12h，最大1g/日。','遮光，密封，在干燥处保存。','强CYP3A4抑制剂：升高他汀/秋水仙碱/卡马西平血药浓度→横纹肌溶解/秋水仙碱中毒；与华法林合用增加出血；与地高辛合用升高地高辛浓度；与他汀合用禁忌或减量；与麦角胺/西沙必利合用禁忌。','【非限制级大环内酯】CYP3A4强抑制剂→药物相互作用多。味觉异常（金属味）特征性。Hp根除方案组分。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d113','注射用阿奇霉素','ZSYAQMS','Azithromycin for Injection','抗微生物药','大环内酯类','处方药（限制级）',null,'社区获得性肺炎、盆腔感染等需静脉给药的大环内酯类敏感菌感染。重症支原体肺炎静脉给药。衣原体盆腔感染。','大环内酯类过敏者禁用。严重肝功能不全者慎用。QT延长者慎用。','常见：注射部位疼痛/静脉炎、腹泻、恶心；偶见：皮疹、头痛、转氨酶升高；罕见：QT延长、过敏性休克。滴注速度过快可致注射部位疼痛。','成人：500mg q24h静脉滴注（≥60min），至少2天后改口服序贯。社区获得性肺炎：500mg IV q24h×2-5天→口服500mg q24h，总疗程7天。儿童：10mg/kg/日IV，最大500mg/日。','密闭，在凉暗处保存。溶解后立即使用。','与含铝/镁抗酸剂间隔2h；与华法林合用增加出血；与地高辛合用升高地高辛浓度；CYP3A4弱抑制剂（相互作用少于克拉霉素）。','【限制级大环内酯注射剂】重症支原体肺炎静脉给药。滴注时间≥60min（不可静脉推注）。序贯治疗策略。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d114','红霉素肠溶片','HMSCRP','Erythromycin Enteric-Coated Tablets','抗微生物药','大环内酯类','处方药（非限制级）',null,'肺炎支原体/衣原体感染、军团菌病、百日咳、白喉（带菌者）。青霉素过敏替代用药。促胃动力（低剂量）。','大环内酯类过敏者禁用。同时使用西沙必利/匹莫齐特/麦角胺者禁用。QT延长者慎用。严重肝功能不全者慎用。','常见：胃肠道反应（恶心、呕吐、腹痛、腹泻——最突出不良反应）；偶见：皮疹、转氨酶升高；罕见：胆汁淤积性肝炎、QT延长、过敏性休克。促胃动力效应可致腹泻。','成人：250-500mg q6h，餐前1h或餐后2h服用。军团菌病：0.5-1g q6h。百日咳：500mg q6h×14天。儿童：30-50mg/kg/日分3-4次。促胃动力：125-250mg q6h餐前30min。肾功能不全通常无需调整。','遮光，密封，在干燥处保存。肠溶片不可掰开或嚼碎。','CYP3A4强抑制剂（同克拉霉素）：升高他汀/卡马西平/秋水仙碱血药浓度；与地高辛合用升高地高辛浓度；与华法林合用增加出血；与麦角胺合用禁忌；与茶碱合用升高茶碱浓度。','【非限制级大环内酯】经典大环内酯。胃肠道反应最突出→限制临床使用。军团菌病首选。促胃动力副效应。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d115','盐酸环丙沙星片','YSHBSXP','Ciprofloxacin Hydrochloride Tablets','抗微生物药','喹诺酮类','处方药（非限制级）',null,'G-杆菌感染、铜绿假单胞菌感染、泌尿生殖道感染、肠道感染、骨关节感染、皮肤软组织感染。口服吸收良好。抗铜绿活性强于左氧氟沙星。','喹诺酮类过敏者禁用。18岁以下禁用（软骨发育影响）。孕妇和哺乳期禁用。QT延长者慎用。重症肌无力者慎用/禁用（加重肌无力）。','常见：恶心、腹泻、头痛、头晕；偶见：皮疹、转氨酶升高、失眠；严重：肌腱炎/肌腱断裂（60岁以上+糖皮质激素者风险高）、QT延长、中枢兴奋（癫痫）；罕见：主动脉瘤/主动脉夹层、重症肌无力加重。','成人：250-750mg q12h。泌尿道感染：250-500mg q12h×3-7天。铜绿感染：750mg q12h。肾功能不全CrCl<30mL/min需调整。禁止用于18岁以下儿童。','遮光，密封，在干燥处保存。','含铝/镁/钙/铁/锌制剂降低吸收（间隔2-6h）；CYP1A2抑制剂：升高茶碱/咖啡因血药浓度→茶碱中毒；与华法林合用增加出血；与NSAIDs合用增加癫痫风险；与糖皮质激素合用增加肌腱断裂风险。','【非限制级喹诺酮】抗铜绿活性最强喹诺酮。18岁以下禁用。肌腱断裂风险（60岁+激素）。CYP1A2抑制剂→茶碱中毒。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d116','左氧氟沙星氯化钠注射液','ZYFSXLHNZSY','Levofloxacin Sodium Chloride Injection','抗微生物药','喹诺酮类','处方药（限制级）','高危','重症社区获得性肺炎、复杂性尿路感染/肾盂肾炎、医院获得性肺炎、皮肤软组织感染。呼吸喹诺酮，覆盖非典型病原体。静脉给药。','喹诺酮类过敏者禁用。18岁以下禁用。孕妇和哺乳期禁用。QT延长者慎用。重症肌无力者禁用。癫痫患者慎用。','常见：恶心、腹泻、失眠、头痛；偶见：皮疹、转氨酶升高、头晕；严重：肌腱断裂（跟腱最常见）、QT延长、中枢兴奋/癫痫、重症肌无力加重；罕见：主动脉瘤/夹层、Stevens-Johnson综合征、肝毒性。','成人：500-750mg q24h静脉滴注（60-90min）。CAP：500mg q24h×5-7天。复杂性UTI：750mg q24h×5天。肾功能不全CrCl<50mL/min需调整。禁止用于18岁以下。','遮光，密闭保存。避免冰冻。','含铝/镁/钙/铁制剂降低吸收（注射剂型不受影响）；与NSAIDs合用增加癫痫风险；与华法林合用增加出血；与糖皮质激素合用增加肌腱断裂；延长QT药物合用增加心律失常风险。','【限制级呼吸喹诺酮】覆盖典型+非典型病原体→CAP经验治疗。18岁以下禁用。肌腱断裂/QT延长/中枢兴奋三大黑框警告。滴注≥60min。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d117','盐酸多西环素片','YSDXHSP','Doxycycline Hyclate Tablets','抗微生物药','四环素类','处方药（非限制级）',null,'立克次体病（斑疹伤寒/Q热）、支原体肺炎、衣原体感染（泌尿生殖道/沙眼/肺炎）、霍乱、鼠疫、布鲁氏菌病、痤疮、莱姆病。非典型病原体首选。','四环素类过敏者禁用。8岁以下儿童禁用（牙齿黄染/骨发育影响）。孕妇禁用。严重肝功能不全者慎用。','常见：恶心、呕吐、腹泻、食管炎（服药后30min内卧位易发）；偶见：皮疹、光敏反应（明显）；严重：食管溃疡（服药需大量水并保持坐位30min）；罕见：肝毒性（孕妇高剂量）、颅内压升高。','成人：100mg q12h，首剂200mg。痤疮：100mg q24h。支原体肺炎：100mg q12h×7-14天。8岁以下禁用。肾功能不全通常无需调整（主要经粪排泄）。肝功能不全减量。','遮光，密封，在干燥处保存。','含铝/镁/钙/铁/锌制剂降低吸收（间隔2h）；与华法林合用增加出血；与青霉素类合用降低青霉素疗效（抑菌剂干扰杀菌剂）；与维A酸类合用增加颅内压升高风险。','【非限制级四环素】非典型病原体（支原体/衣原体/立克次体）首选。服药后30min内保持坐位→防食管溃疡。8岁以下禁用。光敏反应。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d118','盐酸米诺环素胶囊','YSMNHSJN','Minocycline Hydrochloride Capsules','抗微生物药','四环素类','处方药（非限制级）',null,'痤疮（中重度）、MRSA皮肤软组织感染、布鲁氏菌病、诺卡菌病、梅毒（青霉素过敏替代）。高脂溶性→皮肤浓度高。','四环素类过敏者禁用。8岁以下儿童禁用。孕妇禁用。严重肝功能不全者慎用。','常见：头晕/眩晕（前庭毒性，发生率30-90%——特征性不良反应）；偶见：皮肤色素沉着（长期使用）、恶心；严重：狼疮样综合征（长期用）；罕见：肝毒性、颅内压升高。前庭毒性是与其他四环素的主要区别。','成人：100mg q12h，首剂200mg。痤疮：50-100mg q24h（长疗程）。8岁以下禁用。肾功能不全通常无需调整。','遮光，密封，在干燥处保存。','含铝/镁/钙/铁制剂降低吸收（间隔2h）；与华法林合用增加出血；与维A酸类合用增加颅内压升高风险。','【非限制级四环素】前庭毒性（头晕/眩晕）发生率极高→限制非痤疮使用。皮肤浓度高→痤疮和MRSA皮肤感染。长期用→皮肤色素沉着和狼疮样综合征。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d119','注射用替加环素','ZSYTJHS','Tigecycline for Injection','抗微生物药','四环素类','处方药（特殊使用级）','高危','MDR/XDR细菌所致复杂腹腔感染、复杂皮肤软组织感染、社区获得性肺炎。甘氨酰环素类，广谱覆盖G+/G-/厌氧菌。不推荐用于严重感染（全因死亡率增加信号）。','甘氨酰环素类过敏者禁用。孕妇禁用（D类）。8岁以下儿童禁用。','常见：恶心（26%）、呕吐（18%）、腹泻；偶见：腹痛、头痛、皮疹、转氨酶升高；严重：凝血功能异常（纤维蛋白原下降→出血风险）、全因死亡率增加（FDA黑框警告）；罕见：急性胰腺炎、肝功能衰竭。','成人：首剂100mg，维持50mg q12h静脉滴注（30-60min）。疗程5-14天。重度感染可考虑100mg q12h（超说明书）。肝功能Child-Pugh C减半维持量。肾功能不全无需调整。','密闭，在凉暗处保存。溶解后立即使用。','与华法林合用增加出血风险（监测INR）；降低口服避孕药疗效；与P-gp抑制剂合用可能升高替加环素浓度。','【特殊使用级甘氨酰环素】MDR/XDR最后防线。FDA黑框警告：全因死亡率增加→不推荐用于严重感染。凝血功能异常（纤维蛋白原下降）。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d120','注射用替考拉宁','ZSYKLN','Teicoplanin for Injection','抗微生物药','糖肽类','处方药（特殊使用级）','高危','MRSA/肠球菌等G+菌重症感染：脓毒症、心内膜炎、骨关节感染、肺炎。不良反应较万古霉素少（红人综合征极少）。半衰期长（100h）可每日一次。','糖肽类过敏者禁用。孕妇慎用。肾功能不全需调整。','常见：注射部位疼痛、皮疹；偶见：发热、嗜酸性粒细胞增多、转氨酶升高；肾毒性（低于万古霉素）；耳毒性（低于万古霉素）；红人综合征极少（与万古霉素不同，组胺释放少）。TDM目标：谷浓度15-30mg/L（重症感染>20mg/L）。','成人：负荷剂量6mg/kg q12h×3次（第1天），维持6mg/kg q24h。重症感染负荷12mg/kg q12h×3-5次，维持6-12mg/kg q24h。肾功能不全CrCl<50mL/min延长给药间隔至48-72h。TDM目标谷浓度15-30mg/L。','密闭，在凉暗处保存。','与氨基糖苷类/呋塞米/万古霉素合用增加耳肾毒性；与环孢素合用增加肾毒性；与华法林合用增加出血风险。','【特殊使用级糖肽类】MRSA治疗选择，不良反应少于万古霉素。红人综合征极少。需负荷剂量。半衰期长→每日一次。TDM必查。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d121','注射用盐酸去甲万古霉素','ZSYYSQJWGM','Norvancomycin Hydrochloride for Injection','抗微生物药','糖肽类','处方药（特殊使用级）','高危','MRSA/肠球菌等耐药G+球菌重症感染。国产万古霉素类似物，抗菌活性与万古霉素相当。价格较低。','糖肽类过敏者禁用。孕妇慎用。肾功能不全需调整。','与万古霉素类似：肾毒性、耳毒性、红人综合征（快速输注时）。TDM必查。','成人：0.4-0.8g q12h静脉滴注（≥1h）。肾功能不全需调整。0.4g去甲万古霉素≈0.5g万古霉素。TDM目标同万古霉素：谷浓度15-20mg/L。','密闭，在凉暗处保存。溶解后立即使用。','与氨基糖苷类/呋塞米合用增加耳肾毒性；与麻醉药合用增加红人综合征风险；与华法林合用增加出血。','【特殊使用级糖肽类】国产特有品种，万古霉素去甲基衍生物。0.4mg≈0.5mg万古霉素效价。不良反应谱同万古霉素。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d122','利奈唑胺片/注射液','LNZAPZSY','Linezolid Tablets/Injection','抗微生物药','噁唑烷酮类','处方药（特殊使用级）','高危','MRSA/VRE（万古霉素耐药肠球菌）等耐药G+球菌感染：皮肤软组织感染、肺炎、菌血症。口服生物利用度近100%→序贯治疗。噁唑烷酮类首创药。','利奈唑胺过敏者禁用。同时使用5-HT能药物者慎用（5-HT综合征风险）。未控制的高血压慎用。嗜铬细胞瘤禁用。','常见：腹泻、头痛、恶心；偶见：皮疹、失眠、味觉异常；严重：骨髓抑制（血小板减少最突出，>14天用药高发）、5-HT综合征（与SSRI/SNRI合用）、乳酸酸中毒；长期用（>28天）：周围神经和视神经病变（不可逆）。MAO-A弱抑制→5-HT综合征风险。','成人：600mg q12h口服或静脉滴注（30-120min），疗程10-28天。VRE菌血症：600mg q12h≥14天。肾功能不全通常无需调整。肝功能不全慎用。>14天需每周监测血常规（血小板）。','片剂：遮光密封保存。注射液：遮光密闭，不可冰冻。','与SSRI/SNRI/曲普坦类/哌替啶合用→5-HT综合征（致命）→需洗脱期；含酪胺食物需限制（MAO-A抑制）；与肾上腺素能药物合用→血压升高；与华法林合用增加出血。','【特殊使用级噁唑烷酮类】MRSA/VRE首选之一。口服100%生物利用度→序贯治疗。>14天→血小板减少必查。5-HT综合征→禁联SSRI。MAO-A弱抑制。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d123','复方磺胺甲噁唑片','FFHAJJEP','Co-trimoxazole (SMZ/TMP) Tablets','抗微生物药','磺胺类','处方药（非限制级）',null,'卡氏肺孢子菌肺炎（首选治疗和预防）、奴卡菌病、MRSA皮肤软组织感染、尿路感染、旅行者腹泻。SMZ+TMP协同阻断叶酸代谢。','磺胺类过敏者禁用。严重肝肾功能不全者禁用。孕妇（近足月）禁用（核黄疸风险）。2个月以下婴儿禁用。叶酸缺乏性贫血禁用。','常见：恶心、呕吐、皮疹、光敏反应；偶见：发热、嗜酸性粒细胞增多；严重：Stevens-Johnson综合征/中毒性表皮坏死松解症（SJS/TEN——磺胺类最严重不良反应）、骨髓抑制（叶酸缺乏者）、高钾血症（TMP保钾）、结晶尿/肾损伤。','成人：SMZ 800mg/TMP 160mg（2片）q12h。PCP治疗：4片q6-8h×21天。PCP预防：1片 q24h或2片每周3次。肾功能不全CrCl 15-30mL/min减半；<15mL/min禁用。大量饮水防止结晶尿。','遮光，密封保存。','与华法林合用增加出血；与甲氨蝶呤合用增加骨髓抑制；与ACEI合用增加高钾血症；与苯妥英钠合用增加苯妥英毒性；与口服降糖药合用增加低血糖；磺胺类置换口服抗凝药蛋白结合。','【非限制级磺胺类】PCP首选。SJS/TEN风险→出现皮疹立即停药。大量饮水防结晶尿。高钾血症（TMP保钾）。叶酸缺乏者禁用。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d124','奥硝唑片','AXZP','Ornidazole Tablets','抗微生物药','硝基咪唑类','处方药（非限制级）',null,'厌氧菌感染、滴虫性阴道炎、阿米巴病、贾第鞭毛虫病、根尖周炎、牙周炎。甲硝唑替代，半衰期更长（14h vs 8h），每日1-2次给药。','硝基咪唑类过敏者禁用。早孕（前3个月）禁用。活动性中枢神经系统疾病者慎用。','常见：恶心、口苦、头痛、头晕；偶见：皮疹、金属味；罕见：周围神经病变（长期高剂量）、癫痫。双硫仑样反应（避免饮酒）。不良反应少于甲硝唑。','成人：0.5g q12h，疗程5-7天。厌氧菌感染：首剂0.5-1g，后0.5g q12h。滴虫病：1.5g单剂或0.5g q12h×5天。阿米巴病：0.5g q12h×3天。肾功能不全无需调整。肝功能严重不全减量。','遮光，密封保存。','饮酒→双硫仑样反应（用药期间及停药后3天禁止饮酒）；与华法林合用增加出血；与苯巴比妥/苯妥英钠合用降低奥硝唑血药浓度；CYP3A4诱导剂降低其浓度。','【非限制级硝基咪唑类】甲硝唑替代品。半衰期更长→给药频次少。双硫仑样反应→禁酒3天。中枢神经毒性（长期用）。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d125','伊曲康唑胶囊','YQKZJN','Itraconazole Capsules','抗微生物药','抗真菌药','处方药（非限制级）',null,'念珠菌病：口咽部、食管、阴道念珠菌感染；皮肤癣菌病：手足癣、体股癣；花斑癣；真菌性角膜炎；系统性真菌感染：芽生菌病、组织胞浆菌病、曲霉病（维持治疗）。对皮肤癣菌、酵母菌、曲霉、隐球菌、组织胞浆菌等有广谱抗真菌活性。','对伊曲康唑或辅料过敏者禁用。室性心功能不全（充血性心力衰竭）者禁用。与特非那定、阿司咪唑、西沙必利、匹莫齐特、奎尼丁、多非利特合用禁用（可致QT延长及尖端扭转型室速）。妊娠期禁用（除非危及生命的系统性真菌感染）。','常见：恶心、腹痛、腹泻、头痛、头晕；偶见：皮疹、瘙痒、肝功能异常（转氨酶升高）、呕吐、水肿；严重：充血性心力衰竭、肝毒性（罕见但可致命）；罕见：周围神经病变、低钾血症、肾上腺功能不全、Stevens-Johnson综合征。','成人：口咽念珠菌病200mg qd×7天；食管念珠菌病100mg qd×15天（疗效不佳可增至200mg qd）；阴道念珠菌病200mg bid×1-3天；花斑癣200mg qd×7天；手足癣100mg qd×15天或200mg bid×7天；甲癣200mg bid×7天/月×2-3月（冲击疗法）。儿童：3mg/kg/d分1-2次（数据有限）。肾功能不全：CrCl<30mL/min胶囊生物利用度可能降低，不建议调整剂量但需监测；注射液禁用。餐后立即服用以提高生物利用度。','遮光，密封，在25℃以下保存。','强CYP3A4抑制剂（利托那韦、克拉霉素）可升高伊曲康唑血药浓度；伊曲康唑为强CYP3A4抑制剂→可升高他汀类（禁止合用辛伐他汀/洛伐他汀）、华法林、地高辛、环孢素、苯妥英钠、西罗莫司、苯二氮䓬类、钙通道阻滞剂血药浓度；与利福平、苯妥英钠、苯巴比妥合用可降低伊曲康唑浓度；与口服抗凝药合用增加出血风险；与H2受体拮抗剂、质子泵抑制剂同服可降低吸收。','【非限制级抗真菌药】广谱三唑类抗真菌药。餐后立即服用↑吸收。心功能不全者禁用→可致心力衰竭加重。强CYP3A4抑制剂/底物→大量相互作用。长期用药需监测肝功能。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d126','伏立康唑片','FLKZP','Voriconazole Tablets','抗微生物药','抗真菌药','处方药（限制级）','高危','侵袭性曲霉病（一线治疗）；念珠菌血症及深部念珠菌感染（非中性粒细胞减少者）；食管念珠菌病；足放线病菌属和镰刀菌属感染（严重、危及生命者）。对曲霉、念珠菌（含氟康唑耐药株）、隐球菌、足放线病菌、镰刀菌有强效。','对伏立康唑或辅料过敏者禁用。与特非那定、阿司咪唑、西沙必利、匹莫齐特、奎尼丁、伊伐雷定合用禁用（QT延长）。与利福平、卡马西平、苯巴比妥合用禁用（显著降低伏立康唑血药浓度）。大剂量利托那韦（400mg bid）合用禁用。妊娠期禁用（D类）。','常见：视觉障碍（30%，视物模糊、色觉改变、畏光，多为可逆性）、发热、皮疹、恶心、呕吐、腹泻、头痛；偶见：肝功能异常、幻觉、光敏反应；严重：肝毒性（需监测肝功能）、QT延长、周围神经病变；罕见：肾上腺功能不全、Stevens-Johnson综合征。视觉障碍为特征性不良反应。','成人：负荷剂量第1个24h 400mg q12h；维持剂量200mg q12h。如疗效不佳可增至300mg q12h。儿童（≥2岁）：负荷剂量9mg/kg q12h×2次；维持剂量8mg/kg q12h（最大不超过成人剂量）。肾功能不全：口服无需调整剂量；CrCl<50mL/min避免静脉给药（因赋形剂SBECD蓄积）。肝功能不全（Child-Pugh A/B）：维持剂量减半。餐前1h或餐后1h服用。','遮光，密封，在25℃以下保存。','强CYP3A4抑制剂可升高伏立康唑浓度；伏立康唑为强CYP3A4/CYP2C19抑制剂→禁止与辛伐他汀/洛伐他汀合用；可使华法林PT显著延长→密切监测INR；降低环孢素/他克莫司剂量至1/2-1/3并监测浓度；与苯妥英钠双向作用（苯妥英降低伏立康唑浓度，伏立康唑升高苯妥英浓度）；与奥美拉唑合用时奥美拉唑减半；与长效阿片类合用需减量。','【限制级抗真菌药】【高危】侵袭性曲霉病一线用药。视觉障碍为特征性反应（30%，可逆）。强CYP3A4/CYP2C19抑制剂→大量药物相互作用。需监测肝功能。口服无需肾功能调整，但CrCl<50禁用静脉制剂。负荷剂量必须执行。妊娠禁用。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d127','注射用醋酸卡泊芬净','ZSYCQKBJ','Caspofungin Acetate for Injection','抗微生物药','抗真菌药','处方药（特殊使用级）','高危','侵袭性曲霉病（其他抗真菌药无效或不耐受者的补救治疗）；念珠菌血症及深部念珠菌感染（腹腔脓肿、腹膜炎、胸腔感染）；食管念珠菌病。对念珠菌属（含氟康唑耐药株）和曲霉有杀菌活性，对隐球菌无效。','对卡泊芬净或辅料过敏者禁用。妊娠期禁用（C类，仅获益大于风险时使用）。哺乳期慎用。','常见：发热、头痛、恶心、呕吐、腹泻、静脉炎；偶见：皮疹、瘙痒、肝功能异常（转氨酶升高）、低钾血症、注射部位反应；严重：过敏反应（含过敏性休克）、肝毒性；罕见：组胺介导反应（潮红、支气管痉挛）。总体耐受性良好。','成人：第1天负荷剂量70mg ivd（缓慢静脉滴注1h以上），之后50mg qd ivd。侵袭性曲霉病：70mg负荷后50mg qd，如疗效不佳且耐受可增至70mg qd。儿童（≥3月龄）：负荷剂量70mg/m² ivd，维持剂量50mg/m² qd ivd（最大不超过70mg/d）。肾功能不全无需调整剂量。肝功能不全（Child-Pugh A/B）：维持剂量35mg qd；Child-Pugh C不建议使用。不可使用葡萄糖溶液稀释（因不稳定）。','2-8℃冷藏保存。溶解后室温下24h内使用。','与环孢素合用可致转氨酶显著升高（避免合用，如必须合用需密切监测肝功能）；他克莫司血药浓度可能降低；卡泊芬净不是CYP酶抑制剂或诱导剂，药物相互作用较少；与利福平合用需增加卡泊芬净剂量至70mg qd。','【特殊使用级抗真菌药】【高危】棘白菌素类抗真菌药，作用于细胞壁。侵袭性曲霉病补救治疗+念珠菌血症一线选择。不可用葡萄糖溶液稀释。无需肾功能调整。与环孢素合用→严重肝毒性风险。需副主任以上审批。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d128','盐酸特比萘芬片','YSTBNP','Terbinafine Hydrochloride Tablets','抗微生物药','抗真菌药','处方药（非限制级）',null,'皮肤癣菌感染：手足癣、体股癣、头癣；甲癣（甲真菌病）：趾甲癣需6-12周，指甲癣需6周；花斑癣。对皮肤癣菌（毛癣菌属、小孢子菌属、表皮癣菌属）杀菌力强，对酵母菌效果差。','对特比萘芬或辅料过敏者禁用。严重肝功能不全者禁用。活动性肝病者禁用。','常见：恶心、腹痛、腹泻、味觉障碍（味觉丧失/改变，停药可恢复）、头痛；偶见：皮疹、肝功能异常、食欲减退；严重：肝毒性（罕见但可致命）、严重皮肤反应（Stevens-Johnson综合征、中毒性表皮坏死松解症）；罕见：血小板减少、中性粒细胞减少、周围神经病变、狼疮样综合征。味觉障碍为特征性不良反应。','成人：250mg qd。手足癣2-6周；体股癣2-4周；头癣4周；指甲癣6周；趾甲癣12周。儿童：体重<20kg 62.5mg qd；20-40kg 125mg qd；>40kg 250mg qd。肾功能不全（CrCl<50mL/min）：剂量减半。肝功能不全：严重者禁用。餐前餐后均可。','遮光，密封，在30℃以下保存。','CYP2D6抑制剂（氟西汀等）可升高特比萘芬浓度；特比萘芬为CYP2D6抑制剂→可升高三环类抗抑郁药、β受体阻滞剂、选择性5-HT再摄取抑制剂血药浓度；与利福平合用可降低特比萘芬浓度（CYP诱导）；与西咪替丁合用可升高特比萘芬浓度。','【非限制级抗真菌药】丙烯胺类抗真菌药。皮肤癣菌杀菌力强，甲癣首选口服药。味觉障碍为特征性反应（可逆）。严重肝功能不全禁用。CrCl<50剂量减半。疗程需足，甲癣6-12周。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d129','阿昔洛韦片','AXLWP','Aciclovir Tablets','抗微生物药','抗病毒药','处方药（非限制级）',null,'单纯疱疹病毒（HSV）感染：初发/复发生殖器疱疹、口唇疱疹、疱疹性角膜炎；水痘-带状疱疹病毒（VZV）感染：水痘、带状疱疹。对HSV-1、HSV-2、VZV有效，对EBV弱效，对CMV无效。','对阿昔洛韦或伐昔洛韦过敏者禁用。脱水患者慎用（增加肾毒性风险）。','常见：恶心、呕吐、腹泻、头痛、头晕；偶见：皮疹、疲劳、肝功能异常；严重：急性肾衰竭（快速静脉滴注或脱水时易发）、血栓性血小板减少性紫癜/溶血性尿毒症综合征（免疫缺陷者高剂量）；罕见：神经毒性（震颤、意识模糊、幻觉、癫痫）、过敏性休克。','成人：初发生殖器疱疹200mg q4h（每日5次）×10天；复发200mg q4h（每日5次）×5天；长期抑制400mg bid；带状疱疹800mg q4h（每日5次）×7天；水痘800mg qid×5天。儿童：水痘2岁以上20mg/kg（最大800mg）qid×5天；HSV 2岁以上200mg qid×5天。肾功能不全：CrCl 10-25mL/min带状疱疹800mg q8h；CrCl<10mL/min 800mg q12h。充分水化可减少肾毒性。','遮光，密封，在25℃以下保存。','与肾毒性药物（氨基糖苷类、环孢素、两性霉素B）合用增加肾毒性风险；丙磺舒可延长阿昔洛韦半衰期、升高血药浓度；与吗替麦考酚酯合用可升高两者血药浓度；与齐多夫定合用可能增加神经毒性。','【非限制级抗病毒药】核苷类似物抗病毒药。HSV和VZV首选口服药。口服生物利用度仅15-30%。需充分水化→预防肾小管结晶。肾功能不全需调整剂量。带状疱疹800mg每日5次×7天。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d130','注射用更昔洛韦','ZSYGXW','Ganciclovir for Injection','抗微生物药','抗病毒药','处方药（限制级）','高危','巨细胞病毒（CMV）感染：CMV视网膜炎（AIDS患者）、CMV肺炎、CMV胃肠炎；器官移植后CMV感染的预防和治疗。对CMV活性最强，对HSV、VZV也有活性但非首选。免疫缺陷患者CMV病一线用药。','对更昔洛韦或缬更昔洛韦过敏者禁用。中性粒细胞<500/μL或血小板<25000/μL者禁用。妊娠期禁用（致畸风险）。哺乳期禁用。','常见：骨髓抑制（中性粒细胞减少30-40%、血小板减少20%、贫血）、发热、腹泻、恶心；偶见：肝功能异常、头痛、皮疹、注射部位静脉炎；严重：严重中性粒细胞减少（<500/μL可致死性感染）、血小板减少出血；罕见：癫痫、精神异常、肾功能损害。骨髓抑制为剂量限制性毒性。','成人：CMV视网膜炎诱导治疗5mg/kg ivd q12h×14-21天；维持治疗5mg/kg ivd qd×5-7天/周或6mg/kg ivd qd×5天/周。CMV预防（移植后）5mg/kg ivd qd×7-14天后改为5mg/kg ivd qd每周5天×14-28天。儿童（≥3月龄）：诱导5mg/kg ivd q12h×14-21天；维持5mg/kg ivd qd。肾功能不全：CrCl 50-69mL/min 2.5mg/kg q12h→qd；CrCl 25-49mL/min 1.25mg/kg qd；CrCl 10-24mL/min 0.625mg/kg qd；CrCl<10mL/min 0.625mg/kg 每周3次+血液透析后补充。滴注时间≥1h，不可快速推注。','遮光，密闭，在30℃以下保存。溶解后冷藏2-8℃24h内使用。','与肾毒性药物（两性霉素B、环孢素、他克莫司、氨基糖苷类）合用增加肾毒性；与齐多夫定合用加重骨髓抑制（避免合用）；与亚胺培南/西司他丁合用增加癫痫风险（避免合用）；与丙磺舒合用可升高更昔洛韦浓度；与吗替麦考酚酯合用可升高更昔洛韦浓度；与氟胞嘧啶或地达诺新合用增加毒性。','【限制级抗病毒药】【高危】CMV感染一线用药。骨髓抑制为剂量限制性毒性→用药期间必须监测血常规（每周2次）。中性粒细胞<500禁用。滴注时间≥1h。肾功能不全需严格调整剂量。与亚胺培南合用→癫痫风险。妊娠禁用（致畸）。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d131','伐昔洛韦片','FXLWP','Valaciclovir Tablets','抗微生物药','抗病毒药','处方药（非限制级）',null,'单纯疱疹病毒（HSV）感染：初发/复发生殖器疱疹、口唇疱疹；水痘-带状疱疹病毒（VZV）感染：带状疱疹、水痘。阿昔洛韦的前药，口服生物利用度约55%（vs阿昔洛韦15-30%），给药频次更低。','对伐昔洛韦、阿昔洛韦或辅料过敏者禁用。脱水患者慎用。免疫缺陷患者高剂量使用需警惕血栓性血小板减少性紫癜/溶血性尿毒症综合征（TTP/HUS）。','常见：头痛、恶心、腹痛、腹泻；偶见：头晕、呕吐、皮疹、关节痛；严重：TTP/HUS（免疫缺陷者高剂量）、急性肾衰竭；罕见：神经毒性（意识模糊、幻觉、癫痫）、过敏性休克。总体耐受性优于阿昔洛韦。','成人：带状疱疹1000mg tid×7天；初发生殖器疱疹1000mg bid×10天；复发生殖器疱疹500mg bid×3天（复发≤5次/年）或1000mg qd（复发>5次/年长期抑制）；口唇疱疹2000mg bid×1天；水痘20mg/kg（最大1g）tid×5天。儿童：带状疱疹20mg/kg（最大1g）tid×7天。肾功能不全：CrCl 30-49mL/min 带状疱疹1g q12h；CrCl 10-29mL/min 1g qd；CrCl<10mL/min 500mg qd。充分水化。','遮光，密封，在25℃以下保存。','与肾毒性药物（氨基糖苷类、环孢素、两性霉素B）合用增加肾毒性；丙磺舒可升高阿昔洛韦（活性代谢物）浓度；与吗替麦考酚酯合用可升高阿昔洛韦浓度；与齐多夫定合用可能增加神经毒性；与西咪替丁/丙磺舒合用可降低肾清除率。','【非限制级抗病毒药】阿昔洛韦前药→口服生物利用度55%（vs阿昔洛韦15-30%），给药频次更低。带状疱疹1000mg tid×7天。需充分水化。肾功能不全需调整剂量。免疫缺陷者高剂量警惕TTP/HUS。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d132','布洛芬混悬液（儿童）','BPFHXY','Ibuprofen Suspension for Children','解热镇痛药','非甾体抗炎药','OTC',null,'儿童发热：普通感冒、流行性感冒等引起的发热；儿童轻至中度疼痛：头痛、关节痛、牙痛、肌肉痛、神经痛。适用于6月龄以上儿童。','对布洛芬、阿司匹林或其他NSAIDs过敏者禁用。活动性消化道出血/溃疡者禁用。严重肝肾功能不全者禁用。阿司匹林哮喘者禁用。重度心力衰竭者禁用。6月龄以下婴儿禁用。脱水患儿禁用。','常见：恶心、胃部不适、腹痛、呕吐；偶见：皮疹、头晕、头痛、耳鸣；严重：消化道出血/溃疡、肾损害、过敏反应（血管性水肿、支气管痉挛）；罕见：无菌性脑膜炎、Stevens-Johnson综合征、肝毒性。儿童总体耐受性较好。','儿童：退热5-10mg/kg/次，每6-8小时1次，24h不超过4次，最大日剂量40mg/kg。镇痛建议5mg/kg/次。6月-1岁：体重7-9kg，每次2.5mL（100mg/5mL规格）；1-3岁：10-15kg，每次5mL；4-6岁：16-21kg，每次7.5mL；7-9岁：22-27kg，每次10mL。使用前摇匀。体温<38.5℃一般不需退热药。肾功能不全：慎用或减量。肝功能不全：慎用。','遮光，密封，在25℃以下保存。开封后1个月内用完。','与阿司匹林合用可降低阿司匹林抗血小板作用；与口服抗凝药（华法林）合用增加出血风险；与糖皮质激素合用增加消化道溃疡风险；与利尿剂合用可减弱利尿效果；与ACEI/ARB合用降低降压效果并增加肾损害风险；与锂剂合用可升高血锂浓度。','【OTC解热镇痛药】儿童退热首选之一。6月龄以上可用。5-10mg/kg/次，24h不超过4次。体温<38.5℃一般不需用药。使用前摇匀。脱水患儿禁用（增加肾损害风险）。不与含对乙酰氨基酚的复方感冒药同服。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d133','布洛芬片','BPFP','Ibuprofen Tablets','解热镇痛药','非甾体抗炎药','OTC',null,'发热：感冒、流感等引起的发热；轻至中度疼痛：头痛、关节痛、偏头痛、牙痛、肌肉痛、神经痛、痛经；风湿性及类风湿性关节炎、骨关节炎的炎症和疼痛。','对布洛芬、阿司匹林或其他NSAIDs过敏者禁用。活动性消化道出血/溃疡者禁用。严重肝肾功能不全者禁用。阿司匹林哮喘者禁用。重度心力衰竭者禁用。冠状动脉旁路移植术（CABG）围手术期疼痛禁用。妊娠晚期（30周后）禁用。','常见：恶心、胃部不适、腹痛、消化不良、头晕；偶见：皮疹、头痛、耳鸣、水肿；严重：消化道出血/溃疡/穿孔、肾损害、心肌梗死/卒中风险（长期高剂量）、严重过敏反应；罕见：无菌性脑膜炎、Stevens-Johnson综合征、肝毒性、再生障碍性贫血。','成人：退热/镇痛200-400mg/次，每4-6小时1次，24h不超过4次，最大日剂量1.2g（OTC）；抗炎400-600mg tid，最大日剂量2.4g（处方）。餐后服用。肾功能不全：CrCl<30mL/min禁用；CrCl 30-50mL/min减量并监测。肝功能不全：严重者禁用。老年人：起始低剂量。','遮光，密封，在25℃以下保存。','与阿司匹林合用降低其抗血小板效果；与口服抗凝药（华法林）合用增加出血风险；与糖皮质激素合用增加消化道溃疡/出血风险；与利尿剂合用减弱利尿效果；与ACEI/ARB合用降低降压效果并增加肾损害风险；与锂剂合用升高血锂浓度；与甲氨蝶呤合用增加甲氨蝶呤毒性；与环孢素合用增加肾毒性。','【OTC解热镇痛药】经典NSAID。退热/镇痛200-400mg/次，OTC日剂量≤1.2g。餐后服用可减少胃肠反应。妊娠晚期禁用。CABG围手术期禁用。长期高剂量→心血管风险↑。不与含对乙酰氨基酚的复方感冒药同服。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d134','布洛芬栓（儿童）','BPFS','Ibuprofen Suppositories for Children','解热镇痛药','非甾体抗炎药','OTC',null,'儿童发热：感冒、流感等引起的发热，尤其适用于呕吐、拒药等无法口服给药的情况；儿童轻至中度疼痛。适用于6月龄以上儿童。','对布洛芬、阿司匹林或其他NSAIDs过敏者禁用。活动性消化道出血/溃疡者禁用。严重肝肾功能不全者禁用。阿司匹林哮喘者禁用。重度心力衰竭者禁用。6月龄以下婴儿禁用。脱水患儿禁用。直肠炎/直肠出血者禁用。','常见：肛门局部刺激感、不适；偶见：恶心、腹痛、皮疹、头晕；严重：消化道出血/溃疡、肾损害、过敏反应；罕见：直肠黏膜损伤。直肠给药全身不良反应一般少于口服，但长期使用仍需警惕。','儿童：5-10mg/kg/次，每6-8小时1次，24h不超过4次，最大日剂量40mg/kg。常见规格50mg/粒、100mg/粒。1-3岁（10-15kg）：50-100mg/次；4-6岁（16-21kg）：100mg/次；7-12岁（22-35kg）：100-200mg/次。塞入肛门深处约2cm。使用前润滑。肾功能不全：慎用或减量。肝功能不全：慎用。','遮光，密封，在30℃以下保存。高温可致融化，避免存放于温度过高处。可冷藏后使用以增加硬度便于给药。','与阿司匹林合用降低其抗血小板效果；与口服抗凝药（华法林）合用增加出血风险；与糖皮质激素合用增加消化道溃疡风险；与利尿剂合用减弱利尿效果；与ACEI/ARB合用降低降压效果并增加肾损害风险。','【OTC解热镇痛药】直肠给药途径→适用于呕吐、拒药等无法口服的发热儿童。6月龄以上可用。5-10mg/kg/次，24h不超过4次。高温可融化→存放需注意。不可与口服布洛芬同时使用。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d135','注射用青霉素钠','ZSYQMSN','Benzylpenicillin Sodium for Injection','抗微生物药','青霉素类','处方药（非限制级）',null,'敏感菌所致感染：A组溶血性链球菌感染（咽峡炎、扁桃体炎、猩红热、蜂窝织炎）、肺炎链球菌肺炎、梅毒（各期首选）、钩端螺旋体病、气性坏疽（厌氧菌/产气荚膜梭菌）、破伤风（联合抗毒素）、心内膜炎（链球菌/肠球菌）、脑膜炎球菌脑膜炎、放线菌病。对G+球菌（链球菌、肺炎链球菌）、G+杆菌、螺旋体、放线菌高度敏感。','青霉素过敏者禁用。用药前必须进行青霉素皮肤试验，阳性反应者禁用。有过敏性疾病史者慎用。','常见：过敏反应（皮疹、药物热、血清病样反应）；严重：过敏性休克（发生率0.004-0.04%，可致死，多在给药后5分钟内）；偶见：注射部位疼痛、静脉炎；罕见：溶血性贫血、间质性肾炎、癫痫（大剂量/肾功能不全）。青霉素过敏性休克为最严重不良反应。','成人：一般感染80万-160万U im qd-bid；严重感染240万-2000万U/日 ivd 分4-6次；梅毒（早期）240万U im qw×1周；梅毒（晚期）240万U im qw×3周；心内膜炎1200万-2000万U/日 ivd 分4-6次×4-6周；脑膜炎2000万-2400万U/日 ivd 分4-6次。儿童：2.5万-5万U/kg im qd-bid；严重感染10万-25万U/kg/日 ivd 分4-6次。肾功能不全：CrCl 10-50mL/min 给药间隔延长至q8h-q12h；CrCl<10mL/min q12h-q24h。必须皮试。静脉滴注速度不宜过快（防止中枢毒性）。','密闭，在凉暗干燥处（不超过20℃）保存。','与氨基糖苷类有协同作用但不可同瓶混合（灭活）；丙磺舒可延长半衰期；与华法林合用可增加出血风险；大剂量与钾盐/利尿剂合用注意高钾血症（青霉素钠含钠，100万U含钠约1.7mmol）；氯霉素/大环内酯类/四环素类可拮抗青霉素杀菌作用。','【非限制级青霉素类】首个β-内酰胺类抗生素。梅毒/破伤风/气性坏疽/链球菌感染首选。用药前必须皮试！过敏性休克风险→备肾上腺素。大剂量注意电解质（钠负荷）。与氨基糖苷类协同但不同瓶。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d136','注射用哌拉西林钠他唑巴坦钠','ZSYPLQTZLTN','Piperacillin Sodium and Tazobactam Sodium for Injection','抗微生物药','青霉素类','处方药（限制级）','高危','产酶菌所致中重度感染：腹腔感染（腹膜炎、腹腔脓肿）、下呼吸道感染（医院获得性肺炎）、复杂性尿路感染、败血症、皮肤软组织感染、骨与关节感染、妇科感染、中性粒细胞减少伴发热的经验治疗。覆盖铜绿假单胞菌、肠杆菌科（含产ESBL株）、厌氧菌、G+球菌。他唑巴坦保护哌拉西林不被β-内酰胺酶水解。','青霉素或头孢菌素过敏者禁用。对哌拉西林/他唑巴坦或辅料过敏者禁用。传染性单核细胞增多症患者禁用。用药前须做青霉素皮试。','常见：腹泻、恶心、头痛、失眠；偶见：皮疹、瘙痒、便秘、呕吐、注射部位静脉炎、肝功能异常；严重：伪膜性肠炎、出血（大剂量时血小板功能障碍→延长出血时间）、严重过敏反应（过敏性休克）；罕见：癫痫（大剂量/肾功能不全）、间质性肾炎、溶血性贫血。','成人：一般感染3.375g（哌拉西林3g/他唑巴坦0.375g）ivd q6h×7-14天；医院获得性肺炎4.5g ivd q6h；中性粒细胞减少伴发热4.5g ivd q6h+氨基糖苷类。每次滴注30min以上。儿童（≥2月龄）：90mg/kg ivd q8h（一般感染）；100mg/kg ivd q8h（严重感染/囊性纤维化），最大4.5g/次。肾功能不全：CrCl 20-40mL/min 2.25g q6h；CrCl<20mL/min 2.25g q8h；血液透析后补充2.25g。肝肾功能均不全需进一步减量。','遮光，密闭，在20-25℃保存。溶解后室温24h内使用，冷藏72h内使用。','与氨基糖苷类有协同但不可同瓶混合（灭活）；与万古霉素合用可增加急性肾损伤风险；与肝素/口服抗凝药合用增加出血风险；与丙磺舒合用延长哌拉西林半衰期；与维库溴铵合用延长神经肌肉阻滞；大剂量可致低钾血症（含钠量大）；与非去极化肌松药合用增强肌松效果。','【限制级青霉素类】【高危】哌拉西林+他唑巴坦（β-内酰胺酶抑制剂）。覆盖铜绿+产ESBL肠杆菌+厌氧菌。中性粒细胞减少伴发热经验治疗一线。大剂量→出血风险（血小板功能抑制）。不可与氨基糖苷类同瓶。肾功能不全需调整剂量。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d137','注射用美洛西林钠','ZSYMLXN','Mezlocillin Sodium for Injection','抗微生物药','青霉素类','处方药（非限制级）',null,'敏感菌所致感染：呼吸系统感染、泌尿系统感染、腹腔感染、胆道感染、妇科感染、败血症、皮肤软组织感染、骨与关节感染。对G-菌（铜绿假单胞菌、肠杆菌科）活性强于羧苄西林，对G+菌亦有活性，对厌氧菌有一定活性。','青霉素过敏者禁用。用药前须做青霉素皮试。传染性单核细胞增多症患者禁用。对美洛西林或辅料过敏者禁用。','常见：恶心、腹泻、皮疹、静脉炎；偶见：瘙痒、药物热、嗜酸性粒细胞增多、肝功能异常；严重：过敏性休克、出血（大剂量血小板功能障碍）、伪膜性肠炎；罕见：癫痫（大剂量/肾功能不全）、间质性肾炎、溶血性贫血。','成人：一般感染2-3g ivd q8h；严重感染3-4g ivd q6h；铜绿假单胞菌感染4g ivd q4h-q6h，最大日剂量24g。儿童：50-100mg/kg ivd q8h-q6h；严重感染200-300mg/kg/日分3-4次。肾功能不全：CrCl 10-30mL/min 减量至1/2-2/3；CrCl<10mL/min 减量至1/3。滴注时间30min以上。','密闭，在凉暗干燥处（不超过20℃）保存。溶解后冰箱冷藏24h内使用。','与氨基糖苷类有协同但不可同瓶混合（灭活）；与肝素/口服抗凝药合用增加出血风险；大剂量可致低钾血症（含钠量大）；与丙磺舒合用延长半衰期；与维库溴铵合用延长神经肌肉阻滞。','【非限制级青霉素类】酰脲类青霉素，抗铜绿活性强。对G-菌（含铜绿）活性优于羧苄西林。大剂量→出血风险+低钾血症。需皮试。与氨基糖苷类协同但不同瓶。肾功能不全需调整。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d138','阿莫西林胶囊','AMXLJN','Amoxicillin Capsules','抗微生物药','青霉素类','处方药（非限制级）',null,'敏感菌所致感染：上呼吸道感染（急性中耳炎、鼻窦炎、扁桃体炎）、下呼吸道感染（肺炎、急性支气管炎）、泌尿生殖道感染、皮肤软组织感染、幽门螺杆菌根除（联合克拉霉素+质子泵抑制剂）、急性单纯性淋病。对G+球菌（链球菌、肺炎链球菌、肠球菌）、部分G-菌（流感嗜血杆菌、卡他莫拉菌、大肠埃希菌）有效。','青霉素过敏者禁用。传染性单核细胞增多症患者禁用（可致红斑皮疹）。用药前须询问过敏史。','常见：恶心、呕吐、腹泻等胃肠道反应；偶见：皮疹、药物热、哮喘等过敏反应；严重：过敏性休克、伪膜性肠炎；罕见：溶血性贫血、间质性肾炎、肝毒性。传染性单核细胞增多症患者用药后几乎均出现皮疹。','成人：一般感染0.5g q8h；严重感染1g q8h或0.5g q6h；幽门螺杆菌根除1g bid+克拉霉素500mg bid+质子泵抑制剂×14天；急性淋病3g单剂。儿童：25-50mg/kg/日分2-3次；严重感染可增至80mg/kg/日。肾功能不全：CrCl 10-30mL/min 给药间隔延长至q12h；CrCl<10mL/min q24h。','遮光，密封，在阴凉干燥处（不超过20℃）保存。','丙磺舒可竞争性抑制肾小管分泌→升高阿莫西林血药浓度；与氨基糖苷类合用增强杀菌作用；与避孕药合用可能降低避孕效果；与华法林合用增加出血风险；与别嘌醇合用增加皮疹发生率；与甲氨蝶呤合用增加甲氨蝶呤毒性。','【非限制级青霉素类】口服广谱青霉素。上呼吸道感染/泌尿感染/幽门螺杆菌根除常用药。传染性单核细胞增多症禁用→几乎均出皮疹。口服无需皮试但有过敏史者禁用。肾功能不全需调整剂量。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d139','阿莫西林克拉维酸钾分散片（儿童）','AMXLKLSKFSI','Amoxicillin and Clavulanate Potassium Dispersible Tablets for Children','抗微生物药','青霉素类','处方药（非限制级）',null,'产酶菌所致感染：儿童上呼吸道感染（急性中耳炎、鼻窦炎、扁桃体炎）、下呼吸道感染（肺炎）、泌尿系统感染、皮肤软组织感染。克拉维酸保护阿莫西林不被β-内酰胺酶水解→覆盖产酶金黄色葡萄球菌、产酶流感嗜血杆菌、产酶卡他莫拉菌、产酶大肠埃希菌。','青霉素过敏者禁用。传染性单核细胞增多症患者禁用。对克拉维酸或辅料过敏者禁用。有青霉素相关性黄疸/肝功能异常史者禁用。','常见：腹泻（最常见，发生率约9%）、恶心、呕吐、皮疹；偶见：念珠菌感染、头痛、肝功能异常（与克拉维酸相关）；严重：过敏性休克、胆汁淤积性黄疸（停药可恢复）、伪膜性肠炎；罕见：肝毒性、Stevens-Johnson综合征。腹泻为最常见不良反应，克拉维酸为主要原因。','儿童：按阿莫西林计，一般感染20-40mg/kg/日分3次；严重感染40-80mg/kg/日分3次。常用规格：125mg/31.25mg（阿莫西林/克拉维酸）或200mg/28.5mg或250mg/62.5mg。体重<12kg 20mg/kg/日分3次；12-40kg 20-40mg/kg/日分3次；>40kg按成人剂量。服药前可加水分散后服用。肾功能不全：CrCl 10-30mL/min 减量至1/2；CrCl<10mL/min 禁用分散片（改用其他剂型）。','遮光，密封，在25℃以下保存。吸湿性强，开封后尽快使用。','丙磺舒可升高阿莫西林血药浓度；与避孕药合用可能降低避孕效果；与华法林合用增加出血风险；与别嘌醇合用增加皮疹发生率；与甲氨蝶呤合用增加甲氨蝶呤毒性。','【非限制级青霉素类】阿莫西林+克拉维酸（β-内酰胺酶抑制剂）。覆盖产酶菌→儿童中耳炎/鼻窦炎/肺炎一线。腹泻最常见（9%）→餐中服用可减轻。按阿莫西林成分计算剂量。分散片可加水溶解后服用。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d140','注射用头孢唑林钠（一代）','ZSYTZLN','Cefazolin Sodium for Injection','抗微生物药','头孢一代','处方药（非限制级）',null,'敏感菌所致感染：手术预防感染（围手术期预防首选头孢）、呼吸道感染、尿路感染、皮肤软组织感染、骨与关节感染、败血症、心内膜炎（敏感菌）。对G+球菌（金黄色葡萄球菌、表皮葡萄球菌、链球菌）活性强，对部分G-菌（大肠埃希菌、克雷伯菌）有活性。对MRSA、肠球菌无效。','头孢菌素过敏者禁用。青霉素过敏者慎用（交叉过敏率约5-10%）。对头孢唑林或辅料过敏者禁用。','常见：注射部位疼痛、静脉炎、皮疹；偶见：嗜酸性粒细胞增多、腹泻、恶心、肝功能异常；严重：过敏性休克、伪膜性肠炎、凝血障碍（大剂量可致出血→维生素K依赖凝血因子合成减少）；罕见：间质性肾炎、溶血性贫血。大剂量可致出血（维生素K缺乏）。','成人：一般感染0.5-1g ivd/im q6h-q8h；严重感染1-1.5g ivd q6h，最大日剂量12g。手术预防：术前0.5-1h 1g ivd，手术时间>2h追加0.5-1g，术后24h内停药。儿童：25-50mg/kg/日分3-4次；严重感染100mg/kg/日分3-4次。肾功能不全：CrCl 35-54mL/min 0.5g q8h；CrCl 11-34mL/min 0.25g q12h；CrCl<10mL/min 0.25g q18-24h；透析后补充0.25-0.5g。','密闭，在凉暗干燥处（不超过20℃）保存。溶解后冷藏48h内使用。','与氨基糖苷类有协同但不可同瓶混合（沉淀）；与呋塞米合用增加肾毒性；大剂量与肝素/口服抗凝药合用增加出血风险（维生素K缺乏）；与丙磺舒合用可升高头孢唑林血药浓度。','【非限制级一代头孢】围手术期预防感染首选。G+球菌活性强（金葡菌、链球菌）。大剂量→出血风险（维生素K依赖凝血因子↓）。与氨基糖苷类协同但不同瓶。肾功能不全需调整剂量。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d141','头孢羟氨苄片（一代）','TBQABP','Cefadroxil Tablets','抗微生物药','头孢一代','处方药（非限制级）',null,'敏感菌所致轻中度感染：呼吸道感染（咽炎、扁桃体炎）、尿路感染（急性单纯性膀胱炎）、皮肤软组织感染。对G+球菌（化脓性链球菌、肺炎链球菌、不产酶金葡菌）活性强。口服一代头孢。','头孢菌素过敏者禁用。青霉素过敏者慎用。对头孢羟氨苄或辅料过敏者禁用。','常见：恶心、腹泻、胃部不适；偶见：皮疹、瘙痒、嗜酸性粒细胞增多、阴道念珠菌病；严重：过敏性休克、伪膜性肠炎；罕见：肝功能异常、溶血性贫血。口服一代头孢总体耐受性较好。','成人：0.5-1g qd-bid；尿路感染0.5-1g qd或0.5g bid；皮肤感染0.5g bid×7天；咽炎/扁桃体炎0.5g bid×10天。儿童：15-20mg/kg bid；严重感染25-50mg/kg/日分2次。肾功能不全：CrCl 25-50mL/min 1g q12h→q24h；CrCl 10-25mL/min 1g q24h→q48h；CrCl<10mL/min 1g q48h-q72h。餐前餐后均可。','遮光，密封，在凉暗干燥处保存。','与丙磺舒合用可升高头孢羟氨苄血药浓度；与肾毒性药物（氨基糖苷类、呋塞米）合用增加肾毒性；与口服抗凝药合用可能增加出血风险。','【非限制级一代头孢】口服一代头孢。轻中度G+菌感染。每日1-2次给药（半衰期较长）。肾功能不全需延长给药间隔。对产酶金葡菌无效。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d142','头孢呋辛钠注射液（二代）','TFXNZSY','Cefuroxime Sodium for Injection','抗微生物药','头孢二代','处方药（限制级）',null,'敏感菌所致感染：下呼吸道感染（肺炎、慢性支气管炎急性发作）、腹腔感染、尿路感染、败血症、脑膜炎、骨与关节感染、皮肤软组织感染、手术预防感染。对G+菌活性保留，对G-菌活性增强（流感嗜血杆菌、大肠埃希菌、克雷伯菌、变形杆菌）。二代头孢中对G-菌活性最强者之一。','头孢菌素过敏者禁用。青霉素过敏者慎用。对头孢呋辛或辅料过敏者禁用。','常见：注射部位疼痛、皮疹、嗜酸性粒细胞增多；偶见：腹泻、恶心、肝功能异常、静脉炎；严重：过敏性休克、伪膜性肠炎；罕见：溶血性贫血、间质性肾炎。总体耐受性良好。','成人：一般感染0.75-1.5g ivd/im q8h；严重感染1.5g ivd q6h；脑膜炎3g ivd q8h；手术预防术前30-60min 1.5g ivd，必要时8h、16h各追加0.75g。儿童：50-100mg/kg/日分3-4次；脑膜炎200-240mg/kg/日分3-4次。肾功能不全：CrCl 10-20mL/min 0.75g q12h；CrCl<10mL/min 0.75g q24h；透析后补充0.75g。','遮光，密闭，在25℃以下保存。溶解后冷藏24h内使用。','与氨基糖苷类有协同但不可同瓶混合；与呋塞米合用增加肾毒性；与口服抗凝药合用可能增加出血风险；与丙磺舒合用可升高头孢呋辛血药浓度。','【限制级二代头孢】二代头孢中G-菌活性最强之一。社区获得性肺炎常用。围手术期预防用药。可透过血脑屏障→化脓性脑膜炎选择。肾功能不全需调整剂量。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d143','头孢呋辛酯片（二代口服）','TFXZP','Cefuroxime Axetil Tablets','抗微生物药','头孢二代','处方药（非限制级）',null,'呼吸道感染/泌尿道/皮肤软组织感染。注射头孢呋辛序贯口服治疗。前药酯化增加口服吸收。','头孢菌素过敏者禁用。青霉素过敏者慎用。','常见：腹泻、恶心、呕吐；偶见：皮疹、头痛、嗜酸性粒细胞增多；罕见：过敏性休克、伪膜性肠炎。药片不可碾碎（味苦）。','成人：250-500mg q12h，餐后服用。上呼吸道感染250mg q12h；下呼吸道感染500mg q12h。儿童：20-30mg/kg/日分2次。CrCl<30mL/min减量。','遮光，密封，在干燥处保存。不可碾碎服用。','与呋塞米合用增加肾毒性；与丙磺舒合用升高血药浓度；降低口服避孕药疗效；与抗酸剂间隔2h。','【非限制级二代头孢口服】注射序贯治疗选择。前药酯化→餐后服用提高吸收。药片不可碾碎（味极苦）。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d144','头孢克洛干混悬剂（二代/儿童）','TBKLGHXJ','Cefaclor for Suspension','抗微生物药','头孢二代','处方药（非限制级）',null,'儿童呼吸道/耳鼻喉/泌尿道感染。口服二代头孢，适合儿童服用。','头孢菌素过敏者禁用。青霉素过敏者慎用。','常见：腹泻（儿童多见）、恶心；偶见：皮疹、血清病样反应（儿童多见——特征性不良反应）；罕见：过敏性休克、伪膜性肠炎。','儿童：20-40mg/kg/日分2-3次。中耳炎：40mg/kg/日分3次，最大1g/日。肾功能不全CrCl<30mL/min减半。','密闭，在干燥处保存。冲调后14天冷藏有效。','丙磺舒升高血药浓度；与抗酸剂间隔2h；降低口服避孕药疗效。','【非限制级二代头孢/儿童】血清病样反应是头孢克洛特征性不良反应（儿童多见）。冲调后需冷藏。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d145','注射用头孢曲松钠（三代）','ZSYTBQSN','Ceftriaxone Sodium for Injection','抗微生物药','头孢三代','处方药（限制级）',null,'G-菌重症感染：脑膜炎、脓毒症、腹腔感染、手术预防。长半衰期三代头孢（8.5h），可每日一次给药。','头孢菌素过敏者禁用。青霉素过敏者慎用。新生儿高胆红素血症禁用（与胆红素竞争白蛋白）。新生儿同时使用含钙输液禁忌（致死性沉淀）。','常见：腹泻、皮疹、注射部位疼痛；偶见：嗜酸性粒细胞增多、转氨酶升高、胆泥/假性胆石症（儿童长疗程高发——特征性不良反应）；严重：新生儿含钙输液致死性沉淀；罕见：过敏性休克、胆石症。','成人：1-2g q24h静脉滴注。脑膜炎：2g q12h。手术预防：2g术前30min单剂。儿童：50-75mg/kg q24h，最大4g/日。脑膜炎：100mg/kg q24h（首剂75mg/kg）。新生儿禁与含钙输液同用。肾功能不全+肝功能不全需减量。','密闭，在凉暗处保存。溶解后室温6h、冷藏24h。','严禁与含钙输液同用（新生儿致死性沉淀——头孢曲松钙盐）；与氨基糖苷类不可同瓶混合；与呋塞米合用增加肾毒性；含NMTT侧链但双硫仑样反应罕见。','【限制级三代头孢】长半衰期→每日一次。新生儿禁与含钙输液同用（致死性沉淀）。胆泥/假性胆石症（儿童长疗程）→停药可逆。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d146','注射用头孢噻肟钠（三代）','ZSYTBSN','Cefotaxime Sodium for Injection','抗微生物药','头孢三代','处方药（限制级）',null,'G-菌重症感染：脑膜炎、腹腔感染、败血症、下呼吸道感染。三代头孢，对肠杆菌科活性强。','头孢菌素过敏者禁用。青霉素过敏者慎用。','常见：腹泻、皮疹；偶见：注射部位静脉炎、转氨酶升高；罕见：过敏性休克、伪膜性肠炎。','成人：1-2g q8-12h静脉滴注。脑膜炎：2g q4-6h。败血症：2g q8h。儿童：50-200mg/kg/日分4-6次。肾功能不全CrCl<20mL/min减半。','密闭，在凉暗处保存。溶解后立即使用。','与氨基糖苷类不可同瓶混合；与呋塞米合用增加肾毒性；丙磺舒升高血药浓度。','【限制级三代头孢】对肠杆菌科活性强。脑膜炎常用三代头孢（与头孢曲松并列）。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d147','注射用头孢哌酮钠（三代）','ZSYTBPN','Cefoperazone Sodium for Injection','抗微生物药','头孢三代','处方药（限制级）',null,'G-菌感染及胆道感染为主。主要经胆汁排泄，胆汁浓度高。注意凝血功能（含NMTT侧链）。','头孢菌素过敏者禁用。青霉素过敏者慎用。活动性出血者慎用（NMTT侧链影响维生素K依赖凝血因子）。','常见：腹泻、皮疹；偶见：注射部位疼痛、转氨酶升高、凝血功能异常（维生素K依赖凝血因子减少→出血）；双硫仑样反应；罕见：过敏性休克、出血。','成人：1-2g q12h静脉滴注。重症可增至4g q12h。肝功能不全需调整（主要经胆汁排泄）。肾功能不全影响小。','密闭，在凉暗处保存。','含NMTT侧链→与华法林合用增加出血（需补充维生素K）；饮酒→双硫仑样反应；与氨基糖苷类不可同瓶混合；与肝素合用增加出血。','【限制级三代头孢】含NMTT侧链→出血风险→需补充维生素K。双硫仑样反应。主要经胆汁排泄→胆道感染首选→但肾功能不全无需调整。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d148','注射用盐酸头孢吡肟','zsystbpf','Cefepime Hydrochloride for Injection','抗微生物药','头孢四代','处方药（特殊使用级）','高危','用于治疗对头孢吡肟敏感的产ESBL革兰阴性菌引起的重症感染，包括医院获得性肺炎、复杂性尿路感染、腹腔感染、败血症、中性粒细胞减少伴发热经验治疗。对铜绿假单胞菌、肠杆菌科细菌（产ESBL菌株）、枸橼酸杆菌属、肠球菌属部分菌株有活性。对革兰阳性菌如金黄色葡萄球菌（MSSA）、链球菌属亦有活性。','对头孢菌素类过敏者禁用。对青霉素类有过敏性休克或即刻过敏反应史者禁用。严重肾功能不全（CrCl < 30 mL/min）未调整剂量者慎用。','【常见】腹泻、恶心、皮疹、注射部位反应。【严重】神经毒性（肾功能不全患者出现癫痫、肌阵挛、意识障碍、脑病——特征性不良反应，需警惕），伪膜性肠炎（艰难梭菌相关性腹泻），过敏反应（包括Stevens-Johnson综合征），凝血功能障碍（罕见）。','【成人】一般感染：1-2g q12h ivgtt。重症/中性粒细胞减少伴发热：2g q8h ivgtt。每次输注时间约30min。【肾功能调整】CrCl 30-60 mL/min：常规剂量q12-24h；CrCl 11-29 mL/min：常规剂量q24h；CrCl < 10 mL/min：常规剂量q48h。血液透析者透析后补充。【儿童】≥2月龄：50mg/kg q8h，最大不超过成人剂量。','密闭，15-30℃保存。溶解后稀释液在2-8℃可保存24小时，室温下可保存8小时。','与氨基糖苷类（庆大霉素、妥布霉素）合用增加肾毒性风险。与呋塞米等袢利尿剂合用增加肾毒性。与华法林合用可增强抗凝作用（监测INR）。与丙磺舒合用减少肾排泄，增加头孢吡肟血药浓度。','【特殊使用级】ESBL产酶G-菌重症感染选用，肾功能不全者需警惕神经毒性（癫痫/脑病），必须监测肾功能并调整剂量。第四代头孢菌素，兼具抗G+和G-活性。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d149','注射用头孢匹罗','zsytbp','Cefpirome for Injection','抗微生物药','头孢四代','处方药（特殊使用级）','高危','用于治疗肠杆菌科细菌（包括产ESBL菌株）引起的重症感染，如医院获得性肺炎、败血症、复杂性尿路感染、腹腔感染、中性粒细胞减少伴发热经验治疗。对革兰阳性菌如金黄色葡萄球菌（MSSA）活性优于头孢他啶。铜绿假单胞菌活性略低于头孢他啶。','对头孢菌素类过敏者禁用。对青霉素过敏者（尤其即刻过敏反应史）慎用。严重肾功能不全者需调整剂量。','【常见】腹泻、恶心、皮疹、静脉炎、头痛。【偶见】一过性肝酶升高、嗜酸性粒细胞增多。【严重】过敏反应（过敏性休克），艰难梭菌相关性腹泻，肝肾功能损害，血象异常（粒细胞减少、血小板减少），中枢神经系统反应（肾功能不全者癫痫风险低于头孢吡肟但仍需警惕）。','【成人】一般感染：1-2g q12h ivgtt。重症感染：2g q12h ivgtt 或 2g q8h。每次输注30-60min。【肾功能调整】CrCl 50-90 mL/min：常规剂量q12-24h；CrCl 20-50 mL/min：常规剂量q24h；CrCl < 20 mL/min：常规剂量q48h。【儿童】安全性数据有限，一般不推荐。','密闭，避光，25℃以下保存。','与氨基糖苷类合用增加肾毒性。与华法林合用监测INR。与呋塞米等袢利尿剂合用增加肾毒性。丙磺舒可延缓排泄。','【特殊使用级】肠杆菌科活性优于三代头孢，ESBL产酶菌感染选用。肾功能不全需调整剂量。第四代头孢菌素。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d150','注射用头孢洛林酯','zsytbllz','Ceftaroline Fosamil for Injection','抗微生物药','头孢五代','处方药（特殊使用级）','高危','用于社区获得性肺炎（CAP）和急性细菌性皮肤及皮肤结构感染（cSSTI），包括耐甲氧西林金黄色葡萄球菌（MRSA）感染。作为唯一具有抗MRSA活性的头孢菌素类药物，对MSSA、MRSA、青霉素耐药肺炎链球菌（PRSP）、肠杆菌科细菌、铜绿假单胞菌（活性较弱）均有覆盖。','对头孢菌素类过敏者禁用。对青霉素过敏者慎用（交叉过敏风险）。肾功能中重度不全（CrCl < 50 mL/min）需调整剂量。','【常见】腹泻、恶心、便秘、皮疹、头痛、注射部位反应。【偶见】一过性肝酶升高、嗜酸性粒细胞增多、直接Coombs试验阳性（可能导致假阳性交叉配血）。【严重】过敏反应（包括过敏性休克），艰难梭菌相关性腹泻，间质性肺炎（罕见），中性粒细胞减少（疗程>7天需监测血常规）。','【成人】CAP/cSSTI：600mg q12h ivgtt，输注时间约60min。疗程5-14天。【肾功能调整】CrCl 30-50 mL/min：400mg q12h；CrCl 15-30 mL/min：300mg q12h；CrCl < 15 mL/min（含ESRD）：200mg q12h。血液透析后给药。【儿童】≥2月龄的cSSTI和CAP有批准适应症，剂量按体重计算。','2-8℃冷藏保存，避光。溶解后稀释液在2-8℃可保存24小时，室温下可保存6小时。','与华法林合用可能增强抗凝作用（监测INR）。丙磺舒可减少肾小管分泌，升高血药浓度。与口服避孕药合用可能降低避孕效果。','【特殊使用级·高危】唯一抗MRSA头孢菌素。社区获得性肺炎和cSSTI二线/三线选择。肾功能不全需调整剂量。第五代头孢菌素。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d151','注射用头孢洛林','zyytbll','Ceftaroline for Injection','抗微生物药','头孢五代','处方药（特殊使用级）','高危','用于MRSA与多重耐药（MDR）革兰阴性菌混合感染。适用于社区获得性肺炎（CAP）、急性细菌性皮肤及皮肤结构感染（cSSTI）。对MRSA、青霉素耐药肺炎链球菌（PRSP）、产ESBL肠杆菌科、嗜血杆菌属均有活性。铜绿假单胞菌及厌氧菌覆盖较差。','对头孢菌素类过敏者禁用。对青霉素过敏者慎用（交叉过敏反应风险约1-7%）。严重肾功能不全需调整剂量。','【常见】腹泻（最常见，约10%）、恶心、头痛、瘙痒、注射部位反应。【偶见】皮疹、肝酶升高、直接Coombs试验阳性（约10-15%，不影响临床通常无需特别处理）。【严重】过敏反应（过敏性休克罕见），艰难梭菌相关性腹泻，中性粒细胞减少，间质性肺炎。','【成人】CAP/cSSTI：600mg q12h ivgtt，输注时间60min。疗程5-14天。【肾功能调整】CrCl 30-50 mL/min：400mg q12h；CrCl 15-30 mL/min：300mg q12h；ESRD（含血液透析）：200mg q12h。【儿童】根据感染类型和体重调整，参照头孢洛林酯用药指南。','2-8℃冷藏保存，避光。复溶后稀释液在室温下可稳定6小时。','与华法林合用需监测凝血功能。丙磺舒减少肾小管分泌，可升高头孢洛林血药浓度。','【特殊使用级·高危】五代头孢，抗MRSA+MDR G-菌混合感染。肾功能不全需调整剂量。唯一抗MRSA头孢菌素类。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d152','注射用美罗培南','zsyblpn','Meropenem for Injection','抗微生物药','碳青霉烯类','处方药（特殊使用级）','高危','用于治疗敏感菌引起的重症感染，包括社区获得性肺炎、医院获得性肺炎、败血症、腹腔感染、复杂性尿路感染、皮肤软组织感染、中性粒细胞减少伴发热经验治疗。中枢神经系统感染（细菌性脑膜炎）——因中枢穿透优于亚胺培南，为脑膜炎首选碳青霉烯类药物。对需氧和厌氧革兰阳性及阴性菌均有极强活性，包括产ESBL肠杆菌科、铜绿假单胞菌、厌氧菌。','对碳青霉烯类过敏者禁用（与青霉素和头孢菌素可能存在交叉过敏）。对丙戊酸/丙戊酸钠合用者禁用（显著降低丙戊酸血药浓度致癫痫发作）。严重肾功能不全需调整剂量。','【常见】腹泻、恶心、呕吐、皮疹、头痛、静脉炎。【偶见】肝酶升高、嗜酸性粒细胞增多、血小板增多、口腔念珠菌病。【严重】过敏反应（过敏性休克），艰难梭菌相关性腹泻，癫痫（发生率低于亚胺培南，约0.5%），凝血功能障碍（罕见，长期使用需监测），伪膜性肠炎。【特征性优势】中枢神经系统不良反应明显低于亚胺培南。','【成人】一般感染：0.5-1g q8h ivgtt。重症/院内感染：1-2g q8h ivgtt。脑膜炎：2g q8h ivgtt。输注时间15-30min，亦可延长输注（3h）优化PK/PD。【肾功能调整】CrCl 26-50 mL/min：常规剂量q12h；CrCl 10-25 mL/min：半量q12h；CrCl < 10 mL/min：半量q24h。血液透析者透析后补充。【儿童】≥3月龄：10-20mg/kg q8h；脑膜炎：40mg/kg q8h，最大不超过2g。','密闭，15-25℃保存。溶解后立即使用，稀释液在2-8℃可保存24小时。','与丙戊酸/丙戊酸钠合用：显著降低丙戊酸血药浓度（下降60-100%），可能导致癫痫发作——禁止合用。与氨基糖苷类合用增加肾毒性。与华法林合用可能增强抗凝作用。与丙磺舒合用减少肾排泄，可升高血药浓度（一般不推荐联合）。与口服避孕药合用可能降低避孕效果。','【特殊使用级·高危】碳青霉烯类抗菌谱最广之一。中枢穿透优于亚胺培南，为脑膜炎首选碳青霉烯。癫痫风险低于亚胺培南。重要：禁止与丙戊酸合用。重症感染最后防线之一。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d153','注射用厄他培南','zsyetpn','Ertapenem for Injection','抗微生物药','碳青霉烯类','处方药（限制级）',null,'用于社区获得性感染：复杂性腹腔感染、社区获得性肺炎（CAP）、复杂性尿路感染（包括肾盂肾炎）、急性盆腔感染、糖尿病足部感染（伴骨髓炎）。每日一次给药方案，方便门诊或住院患者。对肠杆菌科细菌（包括产ESBL菌株）、厌氧菌（包括脆弱拟杆菌）、敏感链球菌、葡萄球菌（MSSA）有效。【注意】厄他培南对铜绿假单胞菌、不动杆菌属、肠球菌属无活性。','对碳青霉烯类过敏者禁用。对青霉素和头孢菌素类严重过敏者慎用。与丙戊酸/丙戊酸钠合用者禁用（显著降低丙戊酸血药浓度）。','【常见】腹泻、恶心、头痛、静脉炎/输液部位反应、皮疹。【偶见】肝酶升高、嗜酸性粒细胞增多、阴道炎、口腔念珠菌病。【严重】过敏反应（包括Stevens-Johnson综合征罕见），艰难梭菌相关性腹泻，癫痫（发生率低，但合并神经系统疾病或肾功能不全者风险增加），凝血功能障碍（罕见）。','【成人】1g q24h ivgtt 或 im，输注时间约30min。疗程根据感染类型5-14天（糖尿病足可达28天）。【肾功能调整】CrCl ≤ 30 mL/min（含ESRD血液透析）：500mg q24h。血液透析者透析后6h内补充500mg。【儿童】3月龄-12岁：15mg/kg q12h（最大1g/天）；≥13岁：同成人剂量。肌注给药使用1%利多卡因稀释。','15-30℃保存。溶解后稀释液在2-8℃可保存24小时，室温下可保存6小时。','与丙戊酸/丙戊酸钠合用：显著降低丙戊酸血药浓度（下降60%以上），禁止合用。与丙磺舒合用减少肾排泄，延长半衰期。与华法林合用可能增强抗凝（监测INR）。','【限制级】每日一次给药，方便社区获得性复杂感染治疗。不覆盖铜绿假单胞菌和不动杆菌。禁止与丙戊酸合用。碳青霉烯类对铜绿无活性者。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d154','硫酸妥布霉素注射液','lstbmszsy','Tobramycin Sulfate Injection','抗微生物药','氨基糖苷类','处方药（限制级）','高危','用于治疗铜绿假单胞菌、肠杆菌科细菌等敏感革兰阴性菌引起的重症感染：医院获得性肺炎、败血症、复杂性尿路感染、腹腔感染、烧伤创面感染。对铜绿假单胞菌的体外抗菌活性优于庆大霉素——铜绿假单胞菌感染首选氨基糖苷类之一。与β-内酰胺类联合使用可产生协同作用。','对氨基糖苷类过敏者禁用。重症肌无力患者禁用（神经肌肉阻滞风险）。肾功能不全者慎用或调整剂量。前庭功能或听力障碍者慎用。妊娠期禁用（胎儿耳肾毒性）。','【常见】肾毒性（蛋白尿、管型尿、血肌酐升高——可逆，与剂量和疗程相关），前庭毒性（眩晕、共济失调），耳蜗毒性（耳鸣、高频听力下降——多不可逆）。【偶见】皮疹、头痛、发热、嗜酸性粒细胞增多。【严重】急性肾小管坏死（大剂量/长疗程），神经肌肉阻滞（大剂量快速给药或合用水松剂/肌松药可致呼吸抑制），不可逆耳聋。【TDM必查】','【成人常规】3-5mg/kg q24h ivgtt 或 im（每日一次给药方案——疗效相等，肾毒性降低）。重症：可6-7mg/kg q24h。【肾功能调整】必须根据CrCl延长给药间隔（而非减少剂量）。监测谷浓度：< 1mg/L（每日一次方案）。【儿童】6-7.5mg/kg q24h 或 2.5mg/kg q8h。【TDM】峰浓度（Cmax/MIC ≥ 8-10）和谷浓度（常规方案谷浓度 < 2mg/L）。疗程一般不超过7-10天。','15-30℃保存，避光。','与其他氨基糖苷类合用增加耳肾毒性。与袢利尿剂（呋塞米、依他尼酸）合用增加耳毒性。与神经肌肉阻滞剂合用可增强呼吸抑制。与头孢菌素合用协同抗铜绿假单胞菌（但避免同一注射器混合）。与万古霉素合用增加肾毒性——需加强TDM监测。与两性霉素B、环孢素、他克莫司合用增加肾毒性。','【限制级·高危】抗铜绿假单胞菌活性优于庆大霉素。TDM必查（峰浓度/谷浓度）。肾毒性+不可逆耳毒性。每日一次给药降低肾毒性。疗程不超过7-10天。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d155','硫酸奈替米星注射液','lsntmxzsy','Netilmicin Sulfate Injection','抗微生物药','氨基糖苷类','处方药（非限制级）',null,'用于敏感革兰阴性菌（包括肠杆菌科、铜绿假单胞菌）引起的感染：尿路感染、下呼吸道感染、腹腔感染、皮肤软组织感染、败血症。对金黄色葡萄球菌（包括部分MSSA）亦有活性。耳肾毒性较庆大霉素低——相对安全的氨基糖苷类选择。','对氨基糖苷类过敏者禁用。重症肌无力禁用。肾功能不全慎用。妊娠期和哺乳期慎用。','【常见】肾毒性（较庆大霉素轻，血肌酐升高），耳毒性（前庭和耳蜗均较庆大霉素低）。【偶见】皮疹、肝酶升高、头痛、恶心。【严重】急性肾小管坏死（长期大量使用），神经肌肉阻滞（罕见，但与肌松药合用风险增加）。【优势】耳肾毒性在氨基糖苷类中相对最低。','【成人】4-6mg/kg q24h ivgtt 或 im（每日一次给药方案）。严重感染：6-7.5mg/kg q24h。【肾功能调整】按CrCl延长给药间隔，监测谷浓度。【儿童】5-7.5mg/kg q24h 或 2.5mg/kg q8h。疗程一般不超过7-10天以避免肾毒性积累。','15-30℃保存，避光。','与其他氨基糖苷类合用增加耳肾毒性。与袢利尿剂合用增加耳毒性。与神经肌肉阻滞剂合用增加呼吸抑制风险。与万古霉素合用增加肾毒性。与β-内酰胺类合用有协同作用。','【非限制级】耳肾毒性较庆大霉素低，相对安全的氨基糖苷类。每日一次给药。仍需监测肾功能。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d156','阿奇霉素片（成人）','aqmspcr','Azithromycin Tablets (Adult)','抗微生物药','大环内酯类','处方药（非限制级）',null,'用于敏感菌引起的感染：社区获得性肺炎（CAP）、急性中耳炎、急性鼻窦炎、咽炎/扁桃体炎、急性支气管炎、皮肤及皮肤软组织感染。泌尿生殖系统感染（沙眼衣原体、淋病奈瑟菌、解脲脲原体）。支原体/衣原体感染——首选大环内酯类药物之一。非结核分枝杆菌（MAC）感染的预防和治疗。幽门螺杆菌根除联合方案。','对大环内酯类过敏者禁用。严重肝功能不全者禁用。QTc间期延长、低钾血症、低镁血症、使用其他QT延长药物者慎用。','【常见】腹泻/稀便（最常见，约5-10%）、恶心、腹痛、呕吐、头痛。【偶见】皮疹、肝酶升高、味觉异常、阴道炎。【严重】QTc间期延长（尖端扭转型室速风险），胆汁淤积性黄疸（罕见），艰难梭菌相关性腹泻，严重过敏反应（包括Stevens-Johnson综合征），听力下降（可逆，通常大剂量长期使用）。','【成人】3日疗程方案：500mg qd × 3天。5日疗程方案：首日500mg，第2-5天250mg qd。衣原体尿道炎：1g 单剂口服。CAP疗程：3-5天。咽炎/扁桃体炎：500mg qd × 3天。【服用时间】空腹或餐后均可，但食物影响吸收较小。','15-30℃干燥保存，避光。','与含铝/镁抗酸剂同服可降低阿奇霉素吸收速度（间隔≥2小时）。与华法林合用可能增强抗凝作用（监测INR）。环孢素合用可增加环孢素血药浓度。地高辛合用可增加地高辛血药浓度。与QT延长药物合用（IA/III类抗心律失常药、氟喹诺酮类、抗精神病药）增加心律失常风险。与麦角胺或双氢麦角胺合用可致麦角中毒。','【非限制级】15元环大环内酯，支原体/衣原体感染首选。3日/5日短疗程方案。QT间期延长风险。食物影响吸收小。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d157','阿奇霉素注射液（儿童）','aqmszsyet','Azithromycin Injection (Pediatric)','抗微生物药','大环内酯类','处方药（限制级）',null,'用于儿童重症感染：社区获得性肺炎（CAP）、尤其重症支原体肺炎——需静脉给药的重症支原体肺炎患者。中耳炎、鼻窦炎。支原体/衣原体引起的下呼吸道感染。因治疗严重或不能口服用药时使用。','对大环内酯类过敏者禁用。严重肝病者禁用。QTc间期延长者慎用。新生儿（<6月龄）安全性数据有限，慎用。','【常见】腹泻、恶心、呕吐、腹痛、注射部位疼痛/静脉炎。【偶见】皮疹、肝酶升高。【严重】QTc间期延长，心律失常，听力减退（可逆），严重过敏反应。【静脉给药特别注意事项】输注时间≥60min（滴注过快可致心律失常或注射部位反应）。','【儿童】≥6月龄：10mg/kg qd ivgtt（最大500mg/天），输注时间≥60min，浓度≤2mg/mL。疗程一般3-5天，之后可转为口服序贯治疗。【重症支原体肺炎】10mg/kg qd ivgtt × 5-7天后序贯口服。【输注浓度】1-2mg/mL，用5%葡萄糖或生理盐水稀释。','15-30℃保存。溶解后稀释液在2-8℃可保存24小时。','与华法林合用增强抗凝作用。与环孢素合用升高环孢素血药浓度。与QT延长药物合用增加心律失常风险。与麦角胺合用致麦角中毒。与茶碱合用可升高茶碱血药浓度（需监测）。','【限制级】儿童重症支原体肺炎静脉给药首选。滴注时间必须≥60min。QT间期延长风险。静脉→口服序贯治疗。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d158','罗红霉素胶囊','lhmsjn','Roxithromycin Capsules','抗微生物药','大环内酯类','处方药（非限制级）',null,'用于敏感菌引起的呼吸道感染（咽炎、扁桃体炎、中耳炎、鼻窦炎、支气管炎、社区获得性肺炎）、泌尿生殖道感染（非淋球菌性尿道炎、宫颈炎，尤其衣原体感染）、皮肤软组织感染、百日咳、白喉携带者治疗。14元环大环内酯类抗生素，食物影响吸收小——餐前餐后均可服用。','对大环内酯类过敏者禁用。严重肝功能不全者禁用。QTc间期延长或心动过缓者慎用。','【常见】恶心、腹痛、腹泻、呕吐（胃肠道反应较红霉素明显减轻）。【偶见】皮疹、肝酶升高、头晕、头痛。【严重】QTc间期延长（风险低于红霉素和克拉霉素），艰难梭菌相关性腹泻，肝损伤（罕见），严重过敏反应。','【成人】150mg bid 口服 或 300mg qd 口服（缓释制剂）。餐前15min或餐后服用均可（食物短暂延迟吸收但不影响总量）。疗程7-14天。【肾功能调整】严重肾功能不全（CrCl < 30 mL/min）：150mg qd。【儿童】2.5-5mg/kg bid 口服。','15-25℃干燥保存，避光、密封。','与华法林合用增强抗凝作用（监测INR）。与茶碱合用可增加茶碱血药浓度（较红霉素影响小，但仍需监测）。与麦角胺合用可致麦角中毒。与西沙必利合用可致严重心律失常（禁止合用）。QTc延长药物需谨慎。环孢素合用升高环孢素血药浓度。','【非限制级】14元环大环内酯。食物影响吸收小。胃肠道反应较红霉素轻。呼吸道/衣原体感染。QT间期延长风险。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d159','莫西沙星片','mxsxp','Moxifloxacin Tablets','抗微生物药','喹诺酮类','处方药（限制级）',null,'用于社区获得性肺炎（CAP）、急性细菌性鼻窦炎、急性慢性支气管炎急性发作（AECB）。呼吸喹诺酮——对肺炎链球菌（包括PRSP）、流感嗜血杆菌、卡他莫拉菌、非典型病原体（肺炎支原体、肺炎衣原体、嗜肺军团菌）具有优异活性。对金黄色葡萄球菌（MSSA）和肠杆菌科活性良好。对铜绿假单胞菌活性较弱。【注意】18岁以下禁用。','对喹诺酮类过敏者禁用。18岁以下儿童及青少年禁用。妊娠期及哺乳期妇女禁用。QTc间期延长者或使用其他QT延长药物者禁用。癫痫病史禁用。肌腱疾病史（尤其氟喹诺酮类药物相关性肌腱炎/肌腱断裂）禁用。','【FDA黑框警告】肌腱炎和肌腱断裂（可双侧，用药后数小时至数月内发生，60岁以上及合用糖皮质激素风险最高），周围神经病变（可能不可逆），中枢神经系统效应（头晕、焦虑、失眠、精神异常、癫痫），重症肌无力加重。【常见】恶心、腹泻、头痛、头晕、失眠。【偶见】肝酶升高、皮疹、QTc间期延长、光敏反应。【严重】主动脉夹层/动脉瘤（罕见），艰难梭菌相关性腹泻，低血糖（尤其老年糖尿病患者）。','【成人】400mg qd 口服。疗程：CAP 7-14天，鼻窦炎7-10天，AECB 5天。【服用时间】餐前餐后均可，避免与含钙/镁/铝/铁/锌的制剂同服（间隔≥4h）。【肾功能调整】肾功能不全无需调整剂量。肝功能Child-Pugh C级避免使用。','15-25℃保存，避光、防潮。','与含多价阳离子药物（抗酸剂、硫糖铝、铁剂、锌剂、钙剂）合用降低莫西沙星吸收——间隔至少4小时。与华法林合用增强抗凝作用（监测INR）。与QT延长药物（IA/III类抗心律失常药、三环类抗抑郁药、抗精神病药）合用增加心律失常风险。与糖皮质激素合用增加肌腱断裂风险。与口服降糖药/胰岛素合用可致血糖紊乱（监测血糖）。与NSAIDs合用增加CNS刺激风险。','【限制级】呼吸喹诺酮，覆盖非典型病原体。18岁以下禁用。FDA黑框：肌腱损伤、周围神经病变、CNS效应、重症肌无力加重。QT间期延长。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d160','莫西沙星氯化钠注射液','mxsxlhnzsy','Moxifloxacin Sodium Chloride Injection','抗微生物药','喹诺酮类','处方药（限制级）','高危','用于重症社区获得性肺炎（CAP）患者的静脉给药治疗，尤其重症CAP、需住院治疗或不能口服给药时。呼吸喹诺酮静脉给药，覆盖肺炎链球菌（包括PRSP）、流感嗜血杆菌、卡他莫拉菌、非典型病原体（支原体、衣原体、军团菌）。对肠杆菌科细菌有效，铜绿假单胞菌活性较弱。','对喹诺酮类过敏者禁用。18岁以下禁用。妊娠及哺乳期禁用。QTc间期延长者禁用。癫痫病史禁用。肌腱疾病史禁用。肝功能Child-Pugh C级患者不建议使用。','【FDA黑框警告】肌腱炎和肌腱断裂、周围神经病变（可能不可逆）、CNS效应、重症肌无力加重。【常见】恶心、腹泻、输液部位反应、头痛、头晕、失眠。【严重】QTc间期延长（尖端扭转型室速风险，静脉给药比口服更需关注），肝毒性（肝酶升高，罕见暴发性肝炎），低血糖（尤其老年糖尿病患者），艰难梭菌相关性腹泻。【静脉特异】输注部位静脉炎/血栓性静脉炎。','【成人】400mg qd ivgtt，输注时间≥60min。直接使用的预配液（400mg/250mL）无需稀释。疗程7-14天，之后可转为口服序贯治疗。【肾功能调整】无需调整剂量。肝功能Child-Pugh C避免使用。','15-25℃保存，避光。','与含多价阳离子药物间隔≥4小时。与华法林合用增强抗凝（监测INR）。与QT延长药物合用增加心律失常风险——禁止合用。与糖皮质激素合用增加肌腱断裂风险。与口服降糖药合用可致严重低血糖。与NSAIDs合用增加CNS刺激。','【限制级·高危】呼吸喹诺酮静脉给药，重症CAP治疗。FDA黑框警告。QT间期延长需监测。18岁以下禁用。静脉→口服序贯。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d161','左氧氟沙星片','zyfsxp','Levofloxacin Tablets','抗微生物药','喹诺酮类','处方药（非限制级）',null,'用于敏感菌引起的感染：社区获得性肺炎、急性细菌性鼻窦炎、慢性支气管炎急性发作、复杂性及非复杂性尿路感染（包括肾盂肾炎）、急性前列腺炎、皮肤及软组织感染、腹腔感染（联合甲硝唑）。口服序贯治疗——静脉给药后转为口服等效替代。对肠杆菌科、流感嗜血杆菌、卡他莫拉菌、肺炎链球菌、非典型病原体（支原体、衣原体、军团菌）有活性。【注意】18岁以下禁用。','对喹诺酮类过敏者禁用。18岁以下禁用。妊娠期及哺乳期禁用。癫痫病史及既往喹诺酮相关性肌腱损伤者禁用。QTc间期延长者慎用。','【FDA黑框警告】肌腱炎和肌腱断裂（风险低于莫西沙星，但仍存在），周围神经病变，CNS效应（头晕、失眠、精神异常），重症肌无力加重。【常见】恶心、腹泻、头痛、失眠、头晕、注射部位反应。【偶见】肝酶升高、皮疹、光敏反应。【严重】QTc间期延长（风险低于莫西沙星），难辨梭菌相关性腹泻，低血糖（尤其在老年糖尿病患者使用口服降糖药时），主动脉夹层/动脉瘤（罕见）。','【成人】剂量因感染类型而异：CAP/鼻窦炎：750mg qd × 5天 或 500mg qd × 7-14天。复杂性尿路感染/肾盂肾炎：750mg qd × 5天 或 250mg qd × 10-14天。急性前列腺炎：500mg qd × 28天。口服与静脉给药为等效剂量转换。【肾功能调整】CrCl 20-49 mL/min：初始剂量无需调整，维持剂量减半或给药间隔延长；CrCl < 20 mL/min：首剂后每48h给药一次。【服用时间】餐前1h或餐后2h（食物延缓吸收但不影响总量）。与含多价阳离子药物间隔≥2h。','15-25℃保存，避光、防潮。','与含多价阳离子药物（抗酸剂、硫糖铝、铁剂、锌剂）合用降低吸收——间隔≥2小时。与华法林合用增强抗凝作用（监测INR）。与糖皮质激素合用增加肌腱断裂风险。与口服降糖药合用可致血糖紊乱（监测血糖）。与NSAIDs合用增加CNS刺激。与QT延长药物合用增加心律失常风险。','【非限制级】口服序贯治疗优选。18岁以下禁用。FDA黑框警告。肾功能不全需调整剂量。左氧氟沙星为广谱喹诺酮，口服生物利用度高。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d162','盐酸环丙沙星注射液','yshbsxzsy','Ciprofloxacin Hydrochloride Injection','抗微生物药','喹诺酮类','处方药（非限制级）','高危','用于敏感菌引起的重症感染，尤其是铜绿假单胞菌感染——抗铜绿假单胞菌活性最强的氟喹诺酮类注射剂。适用于复杂尿路感染（包括肾盂肾炎）、医院获得性肺炎、败血症、腹腔感染、骨关节感染、感染性腹泻、伤寒、炭疽（吸入性炭疽治疗和预防）。对肠杆菌科细菌、流感嗜血杆菌、淋病奈瑟菌活性强。厌氧菌覆盖不佳。','对喹诺酮类过敏者禁用。18岁以下禁用（仅在炭疽或假单胞菌等特定严重感染中获益大于风险时使用）。妊娠期及哺乳期禁用。癫痫病史禁用。肌腱疾病史禁用。','【FDA黑框警告】肌腱炎和肌腱断裂、周围神经病变、CNS效应、重症肌无力加重。【常见】恶心、腹泻、呕吐、头痛、头晕、注射部位反应（静脉炎）。【偶见】皮疹、肝酶升高、嗜酸性粒细胞增多、关节痛。【严重】QTc间期延长（风险较莫西沙星和左氧氟沙星低），光敏反应，中枢神经系统毒性（焦虑、失眠、精神异常、癫痫），艰难梭菌相关性腹泻，低血糖（尤其是与口服降糖药合用），主动脉夹层（罕见）。【静脉特异】输注部位静脉炎——需注意稀释浓度和输注速度。','【成人】一般感染：200-400mg q12h ivgtt。重症/医院获得性肺炎/铜绿假单胞菌感染：400mg q8h ivgtt。输注时间≥60min（400mg剂量）。【序贯治疗】静脉→口服（250-750mg bid），口服生物利用度约70-80%。【肾功能调整】CrCl 30-50 mL/min：200-400mg q12-18h；CrCl < 30 mL/min：200-400mg q24h。【儿童】仅限特定适应症（炭疽、假单胞菌感染）：10mg/kg q8h（最大400mg/次）。','15-25℃保存，避光。','与含多价阳离子药物（抗酸剂、硫糖铝、铁剂、锌剂）合用显著降低环丙沙星吸收——间隔≥2小时。与华法林合用显著增强抗凝作用（监测INR）。与茶碱合用升高茶碱血药浓度（可达2-3倍）——需监测茶碱血药浓度或调整剂量。与口服降糖药合用可致严重低血糖。与糖皮质激素合用增加肌腱断裂风险。与NSAIDs合用增加CNS刺激风险。','【非限制级·高危】抗铜绿假单胞菌活性最强氟喹诺酮注射剂。18岁以下禁用。FDA黑框警告。与茶碱有显著相互作用。静脉炎需注意输注速度。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d163','盐酸四环素片','ysshsp','Tetracycline Hydrochloride Tablets','抗微生物药','四环素类','处方药（非限制级）',null,'用于敏感菌引起的感染：立克次体病（斑疹伤寒、恙虫病、Q热）、衣原体感染（鹦鹉热、沙眼、非淋球菌性尿道炎）、支原体肺炎、回归热、布鲁氏菌病、霍乱、鼠疫、炭疽、兔热病、痤疮（寻常痤疮）。经典四环素，目前临床应用受限，主要用于非典型病原体感染和特殊病原体感染。','对四环素类过敏者禁用。8岁以下儿童禁用（牙齿永久性黄染及牙釉质发育不良——四环素牙）。妊娠期及哺乳期禁用（影响胎儿骨骼和牙齿发育）。严重肝功能不全者禁用。肾功能不全慎用。','【常见】胃肠道反应（恶心、呕吐、腹泻、上腹部不适），光敏反应（日晒后皮疹）。【偶见】肝毒性（大剂量静脉给药），前庭毒性（头晕、眩晕，多见于多西环素）。【严重】牙齿永久性黄染（8岁以下儿童暴露），骨骼发育抑制，硬化性肝损伤（大剂量静脉给药），颅内压升高（假性脑瘤——头痛、视力模糊），严重过敏反应，二重感染（长期使用导致念珠菌感染或艰难梭菌相关性腹泻），食道溃疡（服药时饮水不足）。','【成人】250-500mg q6h 口服（常规成人剂量）。宜空腹服用（餐前1h或餐后2h），足量饮水（≥200mL）以避免食道刺激。【儿童】≥8岁：25-50mg/kg/天，分4次服用。【肾功能调整】肾功能不全需减少剂量或延长给药间隔。疗程根据感染类型决定。','15-25℃干燥保存，避光、密封。','与含钙/镁/铝/铁/锌制剂（牛奶、抗酸剂、铁剂、钙剂）合用形成螯合物，显著降低吸收——间隔≥2-3小时。与巴比妥类、苯妥英、卡马西平合用可加速四环素代谢，降低疗效。与华法林合用增强抗凝作用（监测INR）。与口服避孕药合用可能降低避孕效果。与青霉素合用可拮抗青霉素杀菌作用（避免合用）。','【非限制级】经典四环素，8岁以下禁用（四环素牙）。与多价阳离子形成螯合物。用于立克次体、衣原体、支原体感染。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d164','替加环素注射液','tjhsZsy','Tigecycline Injection','抗微生物药','甘氨酰环素类','处方药（特殊使用级）','高危','用于多重耐药（MDR）/泛耐药（XDR）革兰阴性菌、革兰阳性菌及厌氧菌感染的挽救治疗：复杂性皮肤及软组织感染（cSSTI）、复杂性腹腔感染（cIAI）、社区获得性肺炎（CAP）。对MDR不动杆菌属（包括碳青霉烯耐药鲍曼不动杆菌CRAB）、产ESBL肠杆菌科、MRSA、耐万古霉素肠球菌（VRE）、厌氧菌（脆弱拟杆菌等）均有活性。【注意】对铜绿假单胞菌和变形杆菌属天然耐药。医院获得性肺炎（HAP）疗效不佳，不推荐。','对替加环素或四环素类过敏者禁用。妊娠期及哺乳期禁用（动物研究显示胎儿毒性）。8岁以下儿童禁用（牙齿骨骼发育影响）。严重肝功能不全（Child-Pugh C）需调整剂量并慎用。','【FDA黑框警告】全因死亡率增加（在临床试验中，替加环素组死亡率高于对照组，差异约0.6-4.0%——原因未明，HAP和VAP患者风险最高。保留用于无其他合适替代疗法的感染）。【常见】恶心（常见消化道不良反应，可达20-30%）、呕吐、腹泻、腹痛。【偶见】肝酶升高、高胆红素血症、胰腺炎、凝血功能障碍（PT/APTT延长）。【严重】艰难梭菌相关性腹泻，严重肝功能不全，急性胰腺炎，严重过敏反应。','【成人】首剂负荷剂量100mg ivgtt，之后50mg q12h ivgtt。输注时间30-60min。【肝功能调整】Child-Pugh C级：负荷剂量100mg，维持剂量25mg q12h。【疗程】5-14天。【儿童】≥8岁：首剂负荷剂量2mg/kg，之后1mg/kg q12h。','2-8℃冷藏保存。复溶后稀释液在2-8℃可保存24小时，室温下可保存12小时。','与华法林合用可能增强抗凝作用（监测INR）。与口服避孕药合用可能降低避孕效果。与环孢素合用需监测环孢素血药浓度。替加环素为P-gp底物，P-gp抑制剂/诱导剂可影响其暴露量。','【特殊使用级·高危】MDR/XDR感染最后防线。FDA黑框：全因死亡率增加。对铜绿假单胞菌无效。甘氨酰环素类（四环素衍生物）。肝损伤需调整剂量。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d165','注射用盐酸万古霉素','zsystwgm','Vancomycin Hydrochloride for Injection','抗微生物药','糖肽类','处方药（特殊使用级）','高危','用于治疗MRSA及其他耐药革兰阳性菌引起的严重感染：医院获得性肺炎（HAP）/呼吸机相关性肺炎（VAP——MRSA肺炎首选）、复杂性皮肤及软组织感染（cSSTI）、骨关节感染、败血症/菌血症、感染性心内膜炎（金黄色葡萄球菌所致右侧心内膜炎及草绿色链球菌心内膜炎——青霉素过敏者）。中枢神经系统感染（脑膜炎、脑脓肿——可与头孢曲松联合）。艰难梭菌相关性腹泻（伪膜性肠炎——口服万古霉素，经肠道不吸收）。','对万古霉素或糖肽类过敏者禁用。既往有严重听力减退者慎用。肾功能不全者必须调整剂量并监测血药浓度。妊娠期慎用（FDA B类）。','【高危·特征性不良反应】红人综合征/红颈综合征（Red Man Syndrome：快速输注引发非过敏性组胺释放反应——面部、颈部、躯干上部皮肤潮红/红斑，伴瘙痒、低血压——预防措施为减慢滴速≥1h，必要时停药或抗组胺药预处理）。【常见】肾毒性（与血药浓度相关——谷浓度 > 20mg/L时肾毒性风险显著增加）、耳毒性（听力下降、耳鸣——多为可逆，但高浓度长期暴露可致不可逆）。【偶见】静脉炎、药物热、皮疹、嗜酸性粒细胞增多。【严重】急性肾损伤（与合用肾毒性药物相关）、听力丧失（罕见，但需监测）、粒细胞减少/血小板减少。','【TDM必查】目标谷浓度：MRSA重症感染15-20mg/L，一般感染10-15mg/L。峰浓度治疗性监控非必需。【成人常规】15-20mg/kg q8-12h ivgtt（以实际体重计算），单次剂量≤2g，每日总剂量≤4g。每次输注时间≥60min（预防红人综合征）。【肾功能调整】根据CrCl调整剂量和/或间隔。肌酐清除率< 50mL/min时一般需延长给药间隔至q24-96h。血液透析：给药时间在透析结束后。【口服】伪膜性肠炎（艰难梭菌感染）：125-500mg q6h 口服（首剂）。【儿童】15mg/kg q6h ivgtt。新生儿：10-15mg/kg q8-12h。','15-25℃保存。溶解后稀释液在2-8℃可保存24小时（浓度≤5mg/mL）。','与氨基糖苷类（庆大霉素、妥布霉素）合用显著增加肾毒性和耳毒性——需严格TDM监测。与袢利尿剂（呋塞米、依他尼酸）合用增加耳毒性。与两性霉素B、环孢素、他克莫司合用增加肾毒性。与神经肌肉阻滞剂合用可能增强神经肌肉阻滞作用。丙磺舒减少排泄可升高万古霉素血药浓度。与口服抗凝药合用增强抗凝（监测INR）。','【特殊使用级·高危】MRSA全身感染首选。TDM必查（谷浓度15-20mg/L）。红人综合征（输注≥1h预防）。肾毒性+耳毒性。伪膜性肠炎口服治疗。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d167','硫酸粘菌素（多粘菌素E）注射液','lsnjsdjnszsy','Colistin (Polymyxin E) Sulfate Injection','抗微生物药','多肽类','处方药（特殊使用级）','高危','用于碳青霉烯耐药鲍曼不动杆菌（CRAB）、碳青霉烯耐药铜绿假单胞菌（CRPA）及碳青霉烯耐药肠杆菌科（CRE）引起的严重感染的挽救治疗——XDR革兰阴性菌最后防线。适用于医院获得性肺炎（HAP）/呼吸机相关性肺炎（VAP）、败血症/菌血症、复杂性尿路感染。注射用粘菌素为前药（黏菌素甲磺酸钠CMS），在体内转化为活性成分黏菌素。【注意】对革兰阳性菌和厌氧菌无活性。','对多粘菌素类过敏者禁用。重症肌无力患者禁用。急性卟啉病史慎用。妊娠期慎用。','【严重】肾毒性（CMS给药后约30-40%患者出现急性肾损伤——血肌酐升高，多为可逆，需监测肾功能。粘菌素肾毒性可能低于多粘菌素B，但临床实践中两者肾毒性发生率均较高）。神经毒性（感觉异常、口周麻木、肢体麻木、眩晕、共济失调、精神错乱——低于多粘菌素B。严重者可致呼吸抑制/呼吸骤停——需警惕）。【常见】药物热、皮疹、胃肠道反应、注射部位静脉炎。【偶见】低钾血症、低钠血症、肝酶升高。【神经肌肉阻滞】与麻醉剂/肌松剂合用加重，可致呼吸肌麻痹。','【成人】按黏菌素活性碱（CBA）剂量计算。负荷剂量：9MU（约300mg CBA）ivgtt，输注时间30-60min。维持剂量：4.5MU（约150mg CBA）q12h ivgtt。【肾功能调整】CrCl 50-80 mL/min：4.5MU q12h；CrCl 30-50 mL/min：4.5MU q24h；CrCl 10-30 mL/min：4.5MU q36h；CrCl < 10 mL/min：4.5MU q48h。【雾化吸入】辅助治疗肺炎：75-150mg（2-4MU）q12h 雾化。【儿童】≥2岁：首剂9MU/kg（不超过9MU），维持4.5MU/kg q12h。','15-25℃保存，避光。复溶后立即使用。','与氨基糖苷类、万古霉素、两性霉素B、环孢素、他克莫司、NSAIDs合用增加肾毒性。与神经肌肉阻滞剂、麻醉剂、镇静剂合用增强神经肌肉阻滞作用——可致呼吸麻痹（钙剂可部分拮抗）。与利尿剂合用增加电解质紊乱和肾毒性。与碳青霉烯类联合（如美罗培南+粘菌素）用于CRAB感染。','【特殊使用级·高危】CRAB/CRPA/CRE最后防线。肾毒性突出（需监测肾功能）。神经毒性（感觉异常/呼吸抑制风险）。XDR G-菌感染挽救治疗。肾毒性低于多粘菌素B。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d168','注射用磷霉素钠','zyslmsn','Fosfomycin Sodium for Injection','抗微生物药','磷霉素类','处方药（非限制级）',null,'用于敏感菌引起的呼吸道感染、尿路感染、肠道感染、败血症、腹腔感染、皮肤软组织感染、骨关节感染。对金黄色葡萄球菌（包括部分MRSA）、肠杆菌科细菌（包括产ESBL菌株）、铜绿假单胞菌、链球菌属、厌氧菌均有活性。与其他抗生素无交叉耐药——独特作用机制（抑制细菌细胞壁合成第一步）使其成为联合用药的重要组分，尤其与β-内酰胺类或氨基糖苷类联合用于MDR感染。','对磷霉素过敏者禁用。严重肾功能不全（CrCl < 10 mL/min）慎用。高钠血症患者慎用（每克磷霉素钠含钠约0.33g/14.5mmol——高钠负荷）。','【常见】胃肠道反应（恶心、烧心、腹泻——多轻微），注射部位静脉炎。【偶见】皮疹、嗜酸性粒细胞增多、肝酶一过性升高。【严重】高钠血症（大量快速输注可致钠负荷过重，心功能不全/高血压患者需警惕），低钾血症（肾小管排钾增加），过敏反应（罕见），艰难梭菌相关性腹泻（罕见）。','【成人】一般感染：2-4g q6-8h ivgtt。重症感染：4-8g q6-8h ivgtt（最大16g/天）。输注时间：1-2g稀释后30-60min缓慢滴注。【肾功能调整】CrCl 40-80 mL/min：常规剂量q8-12h；CrCl < 40 mL/min：常规剂量q12-24h。【儿童】100-300mg/kg/天，分3-4次给药。【注意事项】含钠量高，心衰/高血压患者需注意钠负荷。','15-25℃保存，密闭、避光。','与β-内酰胺类联合有协同作用（作用于不同PBPs），常用于MDR感染的联合治疗。与氨基糖苷类合用增加肾毒性与神经毒性风险。甲氧氯普胺可加快磷霉素吸收（口服），但注射给药影响小。与其他肾毒性药物合用需监测肾功能。','【非限制级】独特作用机制，与其他抗生素无交叉耐药。MDR感染联合治疗重要组分。高钠负荷——心衰/高血压患者需注意。广谱抗菌。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d169','磷霉素氨丁三醇散','lmsadsn','Fosfomycin Trometamol Granules','抗微生物药','磷霉素类','处方药（非限制级）',null,'用于女性急性单纯性膀胱炎（非复杂性尿路感染）的经验性治疗——单剂3g口服为一线治疗方案之一。亦用于预防泌尿道手术或诊断操作后的尿路感染。对大肠埃希菌（包括产ESBL菌株）、腐生葡萄球菌、肠球菌属、肺炎克雷伯菌等常见尿路感染病原体有活性。尿中药物浓度高——单剂口服即可在尿中达到远高于MIC的治疗浓度。','对磷霉素过敏者禁用。严重肾功能不全（CrCl < 10 mL/min）慎用。苯丙酮尿症患者慎用（制剂中含苯丙氨酸）。','【常见】腹泻（最常见，约10%）、恶心、头痛、眩晕、阴道炎。【偶见】皮疹、腹痛、消化不良、乏力。【严重】严重过敏反应（罕见），艰难梭菌相关性腹泻（罕见）。总体安全性良好。','【成人女性】急性单纯性膀胱炎：单剂3g（1包），空腹口服（最好睡前排空膀胱后服用）。将颗粒溶于60-90mL冷水中溶解后立即饮尽。【预防用】经尿道手术/诊断前3h和术后24h各3g单剂口服。【肾功能调整】肾功能不全慎用，严重不全者避免使用。【儿童】≥12岁：同成人；<12岁：2g单剂（特殊适应症下）。【注意】进食可延迟吸收，建议空腹服用。','15-25℃干燥保存。','与甲氧氯普胺（胃复安）合用可降低磷霉素血药浓度和尿药浓度。与含钙/镁/铝抗酸剂同服可能降低吸收。与华法林合用无显著相互作用（但监测INR仍为建议）。','【非限制级】女性急性单纯性膀胱炎——单剂3g口服（简便有效）。尿中浓度高。产ESBL菌株感染可选用。唯一单剂口服方案的抗生素。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d170','呋喃妥因肠溶片','fntyncrp','Nitrofurantoin Enteric-coated Tablets','抗微生物药','硝基呋喃类','处方药（非限制级）',null,'专用于泌尿道感染（UTI）：急性单纯性膀胱炎、无症状菌尿（妊娠期可选——但权衡利弊）、UTI预防（反复发作UTI的长期预防）。口服后约40%以原形经肾脏排出，尿中浓度高——远高于常见尿路病原体的MIC。对大肠埃希菌、腐生葡萄球菌、肠球菌属、肺炎克雷伯菌、变形杆菌属有效。【注意】对肾实质和前列腺组织穿透性差，不用于肾盂肾炎、肾脓肿、前列腺炎。','对呋喃妥因过敏者禁用。G6PD缺乏症患者禁用（溶血性贫血风险）。肾功能不全者禁用（CrCl < 30 mL/min——尿中浓度不足以发挥抗菌作用且毒副作用增加）。妊娠期晚期（≥38周）及哺乳期禁用（G6PD缺乏新生儿溶血风险）。1月龄以下新生儿禁用。肝病/周围神经病变者慎用。','【常见】胃肠道反应（恶心、呕吐、食欲减退——肠溶片可减轻，餐后服用可减少刺激），头痛。【偶见】皮疹、药物热、肺反应（急性肺炎样——发热、咳嗽、呼吸困难、嗜酸性粒细胞增多——可逆，停药后消退）。【严重】急性/慢性肺反应（罕见但严重——间质性肺炎、肺纤维化——长期使用>6个月风险增加——不可逆），周围神经病变（重者可致运动障碍），肝损伤（黄疸、肝细胞损伤），溶血性贫血（G6PD缺乏者），Stevens-Johnson综合征（罕见）。','【成人】急性膀胱炎：100mg bid 口服×5天（疗程不可过长）。预防用药（反复发作UTI）：50-100mg qd（睡前口服，长期使用需评估肺毒性风险）。【肾功能调整】CrCl ≥ 30 mL/min：常规剂量；CrCl < 30 mL/min：禁用。【儿童】≥1月龄：5-7mg/kg/天，分4次口服；预防：1-2mg/kg qd（最大不超过成人剂量）。','15-25℃干燥保存，避光、密封。','与抗酸剂（含三硅酸镁）合用降低吸收。与丙磺舒合用减少肾小管分泌，降低尿中浓度（降低疗效）。与喹诺酮类合用可能拮抗。与口服避孕药合用可能降低避孕效果。与抗胆碱能药合用延缓胃肠蠕动可增加吸收。禁止服用含有乙酰苯胺类成分的药物。','【非限制级】尿中浓度高，专用于泌尿道感染（不用于肾盂肾炎）。G6PD缺乏者禁用（溶血风险）。长期用药需监测肺毒性（肺纤维化）。肾功能不全禁用。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d171','盐酸小檗碱片','ysxbjp','Berberine Hydrochloride Tablets','消化系统用药','止泻药','处方药',null,'用于肠道感染（急性肠炎、细菌性痢疾、胃肠炎）——黄连素。对志贺菌属（痢疾杆菌）、大肠埃希菌、霍乱弧菌、弯曲杆菌属等肠道病原菌有抑菌作用。亦用于腹泻症状的对症治疗。临床也用于非感染性腹泻的辅助治疗。近年来研究发现具有降血糖、降血脂、抗心律失常等药理作用，但均属于非适应症超说明书应用。','对小檗碱过敏者禁用。溶血性贫血患者禁用（G6PD缺乏症者慎用）。妊娠期慎用（安全性数据不足）。葡萄糖-6-磷酸脱氢酶（G6PD）缺乏者慎用（可能诱发溶血）。','【常见】恶心、呕吐、腹泻、便秘、上腹部不适（胃肠道反应轻微）。【偶见】皮疹（荨麻疹样）。【严重】溶血性贫血（G6PD缺乏症患者罕见），过敏性休克（极罕见）。总体安全性良好，不良反应轻微。','【成人】0.1-0.3g tid 口服（每日3次）。肠道感染疗程3-7天。【儿童】>1岁：5-10mg/kg tid 口服。宜餐后服用以减少胃肠道刺激。','15-25℃干燥保存，避光、密封。','与华法林合用可能增强抗凝作用（监测INR，小檗碱为CYP450酶抑制剂，可影响华法林代谢）。与环孢素合用可能升高环孢素血药浓度。与降血糖药合用可能增强降糖效果（小檗碱有降糖作用）。与其他止泻药合用时需谨慎。与含鞣酸中药合用可降低吸收。','【消化系统用药】黄连素。肠道感染经典用药。安全性良好。G6PD缺乏者慎用。现代研究提示降糖降脂作用（非适应症）。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d172','甲硝唑片','jxxp','Metronidazole Tablets','抗微生物药','硝基咪唑类','处方药（非限制级）',null,'用于厌氧菌感染（口腔感染（牙周炎、冠周炎、牙槽脓肿）、腹腔感染（腹膜炎、肝脓肿）、妇科盆腔感染、脑脓肿、菌血症——厌氧菌感染一线药物）。滴虫病（阴道毛滴虫病、肠道滴虫病——口服可经性传播途径治疗，需夫妻同治）。阿米巴病（肠阿米巴病、肝阿米巴脓肿）。细菌性阴道病（厌氧菌相关的阴道菌群紊乱）。幽门螺杆菌根除（联合方案之一）。褥疮、糖尿病足等混合感染中的抗厌氧菌治疗。','对甲硝唑或硝基咪唑类过敏者禁用。妊娠期前三个月禁用（后续孕期权衡利弊）。哺乳期慎用（暂停哺乳24-48h）。血象异常者慎用。严重中枢神经系统疾病者慎用。','【常见】金属味觉（特征性口腔金属味），恶心、呕吐、腹泻、头痛、食欲减退。【偶见】皮疹、瘙痒、舌苔增厚、阴道念珠菌感染。【严重】双硫仑样反应（与酒精同服致面部潮红、头痛、恶心、呕吐、心动过速、呼吸困难——服用期间及停药后48h内严格禁酒），中枢神经系统毒性（大剂量/长疗程时出现——周围神经病变（肢体麻木、刺痛感——可逆）、共济失调、头晕、癫痫、脑病——需立即停药），粒细胞减少（长期大量使用需监测血常规）。','【成人】厌氧菌感染：500mg tid 口服×7-14天（或400mg tid）。滴虫病：2g 单剂口服（或250mg tid×7天，夫妻同治）。阿米巴病：500-750mg tid×7-10天。细菌性阴道病：500mg bid×7天。幽门螺杆菌根除：400mg bid×7-14天（联合方案）。【儿童】厌氧菌：7.5mg/kg tid。阿米巴病：35-50mg/kg/天分3次×10天。【肾功能调整】无需调整剂量。肝病严重者需减量。','15-25℃干燥保存，避光。','【禁酒】服用甲硝唑期间及停药后至少48小时内严格禁酒——双硫仑样反应（特征性药物酒精相互作用）。与华法林合用显著增强抗凝作用（抑制华法林代谢——需密切监测INR，降低华法林剂量）。与苯妥英/苯巴比妥合用可加速甲硝唑代谢（降低疗效）。与西咪替丁合用抑制甲硝唑代谢（增加毒性风险）。与锂盐合用可升高锂血浓度。与环孢素合用升高环孢素血浓度。与双硫仑合用可致精神障碍（避免联合）。','【非限制级】抗厌氧菌+抗滴虫+抗阿米巴经典药物。双硫仑样反应——服药期间及停药后48h禁酒。金属味觉。中枢神经毒性（大剂量/长程）。抑制华法林代谢。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d173','甲硝唑氯化钠注射液','jxxlhnzsy','Metronidazole and Sodium Chloride Injection','抗微生物药','硝基咪唑类','处方药（非限制级）',null,'用于厌氧菌感染的静脉给药治疗：腹腔感染（腹膜炎、肝脓肿、胆道感染）、妇科盆腔感染（附件炎、盆腔炎、子宫内膜炎）、脑脓肿、口腔颌面部感染、骨关节感染（伴厌氧菌混合感染）、败血症/菌血症。外科术后厌氧菌感染的预防和治疗。混合感染（需氧+厌氧）——常与氨基糖苷类或头孢菌素类联合。','对甲硝唑过敏者禁用。妊娠期前三个月禁用。哺乳期暂停哺乳。严重中枢神经系统疾病禁用。血象异常者慎用。','【常见】金属味觉（较口服轻），恶心、头痛、静脉炎/注射部位反应（输液部位疼痛、红斑）。【偶见】皮疹、白细胞减少。【严重】双硫仑样反应（禁酒：用药期间及停药后48h），中枢神经系统毒性（周围神经病变、癫痫、脑病——多见于大剂量/长疗程，需停药），Coombs试验假阳性，伪膜性肠炎（罕见）。','【成人】首剂负荷15mg/kg ivgtt，之后7.5mg/kg q6h ivgtt 或 500mg q6-8h ivgtt（常规500mg q8h）。输注时间≥60min（稀释成≤8mg/mL，通常500mg/100mL即5mg/mL）。疗程7-14天，根据感染反应调整。【肝功能调整】严重肝病（Child-Pugh C）需减量至1/3。【儿童】同成人体重剂量计算。','15-30℃保存，避光。不可冷冻。','【禁酒】同口服制剂。与华法林合用增强抗凝作用（抑制S-华法林代谢——需监测INR并调整华法林剂量）。与苯妥英合用升高苯妥英血浓度。与苯巴比妥合用降低甲硝唑浓度。与西咪替丁合用升高甲硝唑浓度（增加毒性）。与锂盐合用升高锂血浓度（监测血锂浓度）。','【非限制级】厌氧菌感染静脉给药。外科混合感染的联合治疗重要组分之一。禁酒（双硫仑反应）。抑制华法林代谢。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d174','替硝唑片','txxp','Tinidazole Tablets','抗微生物药','硝基咪唑类','处方药（非限制级）',null,'用于厌氧菌感染（腹腔感染、妇科感染（盆腔炎、子宫内膜炎、细菌性阴道病）、口腔感染（牙周炎、冠周炎、牙槽脓肿）、脑脓肿、术后感染）。滴虫病（阴道毛滴虫——单剂2g口服）。阿米巴病（肠阿米巴病、肝阿米巴脓肿）。细菌性阴道病。幽门螺杆菌根除（联合方案之一）。半衰期较甲硝唑长（T1/2约12-14h vs 甲硝唑6-8h），每日1-2次给药，给药频率低。','对替硝唑或硝基咪唑类过敏者禁用。妊娠期前三个月禁用。哺乳期暂停哺乳（暂停哺乳72h）。血液病患者或有血象异常者慎用。器质性神经系统疾病者禁用。','【常见】恶心、呕吐、食欲减退、口腔金属味（较甲硝唑轻），腹痛、腹泻。【偶见】皮疹、头痛、眩晕、乏力、嗜睡。【严重】双硫仑样反应（服药期间及停药后72h内禁酒——半衰期长，禁酒时间需长于甲硝唑），周围神经病变（肢体麻木、刺痛感——罕见，停药后可逆），白细胞减少（罕见，长期大量使用需监测血常规），癫痫（罕见）。','【成人】厌氧菌感染：2g qd 口服（首剂2g，之后1g qd或500mg bid）×5-14天。滴虫病：2g 单剂口服（夫妻同治）。阿米巴病：2g qd×3天。细菌性阴道病：2g qd×2天（或1g qd×5天）。幽门螺杆菌根除：500mg bid×7-14天（联合方案）。【肾功能调整】无需调整剂量。肝功能不全者慎用或减量。【儿童】推荐剂量参照甲硝唑（替硝唑在儿童中安全性数据有限，需谨慎）。','15-25℃干燥保存，避光、密封。','【禁酒】同甲硝唑，但禁酒时间需延长至停药后72h（半衰期更长）。与华法林合用增强抗凝作用（抑制S-华法林代谢——监测INR）。与苯妥英合用升高苯妥英血浓度。与西咪替丁合用可升高替硝唑血浓度。与口服避孕药合用可能降低避孕效果。','【非限制级】半衰期较甲硝唑长（每日1-2次给药）。双硫仑样反应（禁酒至停药后72h）。抗厌氧菌+滴虫+阿米巴。金属味觉较轻。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d175','氟康唑胶囊','fkzjn','Fluconazole Capsules','抗微生物药','抗真菌药','处方药（非限制级）',null,'用于念珠菌病（口咽部念珠菌病（鹅口疮）、食管念珠菌病、阴道念珠菌病、系统性念珠菌病（念珠菌血症、播散性念珠菌病）——皮肤黏膜念珠菌病首选之一）。隐球菌脑膜炎（HIV/AIDS患者初治和维持治疗——首选方案之一，常与两性霉素B联合用于初治）。播散性隐球菌病。球孢子菌病、组织胞浆菌病、副球孢子菌病（轻中度）。预防真菌感染（免疫抑制患者/移植受者的抗真菌预防）。三唑类抗真菌药。','对氟康唑或唑类抗真菌药过敏者禁用。妊娠期禁用（大剂量/长期使用有致畸风险——FDA D类，单剂量治疗阴道炎风险较低但仍需权衡）。哺乳期慎用。与特非那定、西沙必利、奎尼丁、匹莫齐特联合使用——禁用（QTc延长风险）。肝功能不全者慎用。','【常见】头痛、恶心、呕吐、腹泻、腹痛、皮疹。【偶见】肝酶升高（ALT/AST升高——需监测肝功能），脱发（可逆）。【严重】肝毒性（暴发性肝炎、肝坏死——罕见但严重，尤其合并基础肝病者，需监测肝功能，出现异常立即停药），QTc间期延长（尖端扭转性室速——发生率低于伊曲康唑和唑类衍生物，但仍需警惕），严重过敏反应（包括Stevens-Johnson综合征——艾滋病患者更多见），低钾血症（罕见）。','【成人】口咽念珠菌病：200mg qd 首剂，之后100mg qd×7-14天。食管念珠菌病：200-400mg qd×14-21天。阴道念珠菌病：150mg 单剂口服（一次用药）。系统性念珠菌病/念珠菌血症：400-800mg qd（首剂加倍）。隐球菌脑膜炎：400mg qd（首剂加倍）×8周→维持200mg qd（AIDS患者终身服用）。【肾功能调整】CrCl ≤ 50 mL/min：剂量减半或间隔延长一倍【儿童】3-12mg/kg qd（最大不超过成人剂量）。','15-25℃干燥保存。','与华法林合用增强抗凝作用（抑制CYP2C9代谢——监测INR）。与苯妥英合用升高苯妥英血药浓度。与磺脲类降糖药（格列本脲、格列吡嗪）合用增强降糖作用——监测血糖。与环孢素、他克莫司合用升高免疫抑制剂血药浓度（监测血药浓度，调整剂量）。与利福平合用缩短氟康唑半衰期（降低疗效）。与齐多夫定合用增加齐多夫定血药浓度。与阿托伐他汀等他汀类合用增加肌病和横纹肌溶解风险。','【非限制级】三唑类抗真菌药。念珠菌病/隐球菌病首选。肝毒性需监测肝功能。QT间期延长。与多种药物相互作用显著（CYP450抑制）。单剂150mg治疗阴道念珠菌病。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d176','注射用氟康唑','zsyfkz','Fluconazole Injection','抗微生物药','抗真菌药','处方药（非限制级）',null,'用于重症/系统性念珠菌感染的静脉给药治疗：念珠菌血症、播散性念珠菌病（肝脾念珠菌病、骨关节念珠菌病、眼内念珠菌病），腹腔/心内/脑膜等深部念珠菌感染。隐球菌脑膜炎（诱导期和维持期治疗）。免疫功能低下患者（中性粒细胞减少、移植受者、HIV/AIDS患者）的抗真菌治疗。口服生物利用度高（>90%），静脉给药常用于初始治疗或不能口服患者，之后可转换为口服序贯治疗。','对氟康唑过敏者禁用。妊娠期禁用（FDA D类）。哺乳期慎用。与特非那定、西沙必利、奎尼丁、匹莫齐特联合禁用。肝功能不全者慎用。','【常见】头痛、恶心、腹泻、腹痛、输液部位反应（静脉炎——静脉给药频率较高）。【偶见】肝酶升高、皮疹、脱发（可逆）。【严重】肝毒性（暴发性肝炎——罕见，需监测肝功能，一旦肝酶显著升高需停药），QTc间期延长，Stevens-Johnson综合征（罕见，艾滋病患者风险较高），低钾血症（罕见，大剂量时出现）。','【成人】系统性念珠菌感染：400mg qd ivgtt（首日可800mg负荷）。隐球菌脑膜炎：400mg qd ivgtt。输注速度≤10mL/min（200mg/100mL输注时间约30-60min）。【肾功能调整】CrCl ≤ 50 mL/min：剂量减半。【静脉→口服序贯】临床稳定后可转为同等剂量口服（200-400mg qd）。【儿童】3-12mg/kg qd ivgtt（最大不超过成人剂量）。','15-30℃保存，不可冷冻。','同口服氟康唑：与华法林、苯妥英、磺脲类降糖药、环孢素、他克莫司、他汀类、利福平等均有显著相互作用（氟康唑为CYP2C9/2C19/3A4抑制剂）。','【非限制级】重症念珠菌感染静脉给药。口服生物利用度高（>90%），可序贯治疗。肝毒性监测。多种药物相互作用。QT间期延长。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d177','注射用两性霉素B','zsyxmsb','Amphotericin B for Injection','抗微生物药','抗真菌药','处方药（特殊使用级）','高危','用于侵袭性真菌感染的最后防线治疗：侵袭性念珠菌病（包括耐氟康唑的念珠菌），侵袭性曲霉病，隐球菌脑膜炎（与氟胞嘧啶联合——诱导治疗），毛霉菌病（接合菌病——一线药物），组织胞浆菌病（重症），芽生菌病（重症），球孢子菌病（重症），镰刀菌病，暗色真菌感染，利什曼原虫病（非适应症但有效）。多烯类抗真菌药——与真菌细胞膜麦角固醇结合，增加膜通透性。','对两性霉素B过敏者禁用。严重肾功能不全者慎用（肾毒性极强——需权衡利弊，或选择脂质体剂型）。严重肝病者慎用。','【严重·肾毒性极强】肾毒性（剂量限制性毒性——几乎所有患者均出现不同程度的肾功能损害：血肌酐升高、低钾血症（肾小管排钾增加——需积极补钾）、低镁血症、肾小管酸中毒——发生率高且严重），输液相关反应（寒战、高热、头痛、恶心、呕吐、低血压——特征性输液反应，几乎每剂均会出现，预处理及减慢滴速可减轻），骨髓抑制（贫血——正细胞正色素性，肾功能下降继发性EPO减少）。【常见】食欲减退、体重下降、静脉炎（高渗刺激）。【偶见】肝毒性、心律失常（低钾相关）。【其他】听力下降、视力障碍（罕见）。','【成人】试验剂量（1mg ivgtt 30-60min观察反应）。治疗剂量：0.3-1.0mg/kg qd ivgtt（常规起始0.5mg/kg，逐渐加量至目标剂量，侵袭性真菌病0.5-1.0mg/kg，曲霉病0.8-1.0mg/kg，毛霉菌病1.0-1.5mg/kg）。输注时间≥4-6h（用5%葡萄糖稀释（不可用生理盐水——盐析沉淀），浓度≤0.1mg/mL）。【肾毒性管理】常规补充含钾溶液（40-60mEq/L），监测血钾/血镁。【总剂量限制】总累积剂量应个体化，按肾功能和疗效决定。','2-8℃冷藏保存，避光。稀释液需避光输注（光照可加速降解），稀释后24h内使用。','与其他肾毒性药物（氨基糖苷类、万古霉素、环孢素、他克莫司、膦甲酸）合用显著增加肾毒性——尽量避免或密切监测。与糖皮质激素合用加重低钾血症（需补钾）。与洋地黄类合用增加心律失常危险（低钾血症所致）。与骨骼肌松弛剂合用增强神经肌肉阻滞（低钾所致）。与氟胞嘧啶合用有协同抗真菌作用（隐球菌病标准联合方案），但可能增加肾毒性。','【特殊使用级·高危】侵袭性真菌感染最后防线。肾毒性极强（几乎100%患者出现）。输液相关反应需预处理。需用5%葡萄糖稀释（不能用生理盐水）。避光输注。脂质体制剂肾毒性降低。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d178','注射用两性霉素B脂质体','zsyxmsbzzt','Liposomal Amphotericin B for Injection','抗微生物药','抗真菌药','处方药（特殊使用级）','高危','用于侵袭性真菌感染——与两性霉素B去氧胆酸盐适应症相同，但肾毒性显著降低，可用于肾功能不全或既往常规两性霉素B不耐受患者。适用于侵袭性念珠菌病、侵袭性曲霉病（一线或挽救治疗）、隐球菌脑膜炎、毛霉菌病（接合菌病）、组织胞浆菌病、芽生菌病、镰刀菌病、利什曼原虫病（内脏利什曼病——FDA批准）。发热性中性粒细胞减少症的经验性抗真菌治疗。内脏利什曼病一线治疗。','对两性霉素B或脂质体成分过敏者禁用。严重肝病慎用（脂质体剂型需权衡利弊）。','【严重】肾毒性（较两性霉素B去氧胆酸盐显著降低——发生率约18-30% vs 80-90%，但血肌酐升高、低钾血症、低镁血症仍可能出现，需监测），输液相关反应（寒战、高热、背痛/胸腹痛（特征性反应，与脂质体相关输注反应——输注前预处理、减慢速度可减轻）。【常见】恶心、呕吐、头痛、低钾血症、低镁血症、贫血。【偶见】肝酶升高、皮疹、QTc间期延长（低钾相关）。【严重但罕见】过敏反应（支气管痉挛、面部水肿、低血压），心律失常。','【成人】侵袭性真菌感染：3-5mg/kg qd ivgtt（常规3mg/kg，曲霉病推荐3-5mg/kg，毛霉菌病5-10mg/kg）。输注时间≥2h（首剂需更缓慢，可延长至4-6h，逐渐缩短输注时间）。【肾功能调整】肾功能不全不需调整剂量（但需监测肾功能），肾毒性明显低于常规制剂。【儿童】同成人体重剂量（5mg/kg qd ivgtt）。【预处理】输注前30-60min给予抗组胺药、对乙酰氨基酚，必要时加用氢化可的松或哌替啶（预防寒战）。','2-8℃冷藏保存（不可冷冻）。复溶后2-8℃可保存24小时。','与其他肾毒性药物合用仍增加肾毒性风险（尽管风险低于常规制剂——仍需谨慎并监测肾功能）。与糖皮质激素合用加重低钾血症。与洋地黄类合用增加心律失常风险（低钾所致）。与氟胞嘧啶合用有协同作用。','【特殊使用级·高危】两性霉素B脂质体——肾毒性显著降低。侵袭性真菌感染最后防线（肾毒性更优选择）。输液相关反应（背痛）。肾功能不全适用。毛霉菌病大剂量方案。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d179','卡泊芬净注射液','kbfjzsy','Caspofungin Injection','抗微生物药','抗真菌药','处方药（特殊使用级）','高危','用于侵袭性念珠菌病（念珠菌血症、腹腔念珠菌病、食管念珠菌病、播散性念珠菌病——包括中性粒细胞减少患者）一线治疗。经验性治疗发热性中性粒细胞减少患者的疑似真菌感染。侵袭性曲霉病的挽救治疗（对其他抗真菌药无效或不耐受时——二线用药）。对耐氟康唑念珠菌（如C. krusei、C. glabrata）具有活性。棘白菌素类抗真菌药——抑制真菌细胞壁β-(1,3)-D-葡聚糖合成。','对卡泊芬净或棘白菌素类过敏者禁用。中度至重度肝功能不全（Child-Pugh B/C）需调整剂量。妊娠期慎用（FDA C类——动物研究显示胚胎毒性）。哺乳期慎用。','【常见】发热、寒战、头痛、恶心、腹泻、输液部位反应（静脉炎/红斑——与滴速和浓度相关）、肝酶升高（ALT/AST一过性升高——最常见实验室异常）。【偶见】皮疹、瘙痒、面部潮红、呕吐、腹痛、低钾血症、贫血。【严重】肝毒性（罕见但严重——暴发性肝炎、肝功能衰竭——需监测肝功能），严重过敏反应（包括Stevens-Johnson综合征——罕见），组织胺介导的输注反应（喘鸣、支气管痉挛、低血压——减慢输注速度或中断给药）。','【成人】首日负荷剂量：70mg ivgtt。维持剂量：50mg qd ivgtt。输注时间约60min（缓慢输注）。【肝功能调整】Child-Pugh B级：首日负荷剂量70mg，维持剂量35mg qd；Child-Pugh C级：安全性数据有限，建议35mg qd。【疗程】念珠菌血症：至少14天，末次阳性血培养后至少14天。食管念珠菌病：7-21天。【儿童】3月龄-17岁：首剂70mg/m²（最大70mg），维持50mg/m² qd（最大50mg）。','2-8℃冷藏保存。复溶后稀释液在2-8℃可保存24小时，室温下可保存24小时。','与环孢素合用可增加卡泊芬净AUC（约35%）和肝酶升高风险——需监测肝功能。与他克莫司合用可降低他克莫司血药浓度（监测他克莫司血药浓度并调整剂量）。与利福平合用诱导卡泊芬净代谢——需考虑增加至70mg qd（维持剂量）。与依非韦伦、奈韦拉平、苯妥英、地塞米松、卡马西平等肝酶诱导剂合用可降低卡泊芬净浓度（维持剂量可增加至70mg qd）。','【特殊使用级·高危】棘白菌素类。侵袭性念珠菌病一线治疗。肝损伤需调整剂量。曲霉病二线挽救治疗。输注反应需减慢滴速。与环孢素合用需监测肝酶。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d180','奥司他韦胶囊','astwjn','Oseltamivir Capsules','抗微生物药','抗病毒药','处方药（非限制级）',null,'用于甲型和乙型流行性感冒（流感）的治疗和预防。治疗：成人和≥2周龄的儿童急性、非复杂性流感的治疗——在流感症状出现48h内用药效果最佳（36h内效果最显著）。预防：成人和≥1岁儿童的流感暴露后预防（10天用药）和社区季节性流感预防（6周用药）。神经氨酸酶抑制剂——抑制流感病毒从感染细胞释放和传播。注意：对普通感冒无效。','对奥司他韦或任何辅料成分过敏者禁用。严重肾功能不全（CrCl < 10 mL/min）禁用（不推荐使用）。妊娠期及哺乳期可用（FDA C类——但妊娠流感的获益通常大于风险，是妊娠期流感首选药物）。','【常见】恶心（最常见，约10-14%——与食物同服可减轻）、呕吐（约5-8%——多见于儿童，首剂后48h内出现）、腹痛、腹泻、头痛。【偶见】咳嗽、失眠、眩晕、疲劳。【严重】严重皮肤过敏反应（Stevens-Johnson综合征、中毒性表皮坏死松解症——极罕见，但需立即停药就医），神经精神事件（幻觉、谵妄、异常行为、自伤——罕见，多见于日本青少年和儿童患者，机制未明，用药期间需密切观察患者行为变化，尤其儿童和青少年）。','【成人治疗】75mg bid 口服×5天。在症状出现48h内开始用药，首剂加倍无必要。【成人预防】75mg qd 口服×10天（暴露后预防）或×6周（社区季节性预防）。【肾功能调整】CrCl 30-60 mL/min：治疗：75mg bid×5天；预防：75mg qd。CrCl 10-30 mL/min：治疗：75mg qd×5天；预防：75mg qod或30mg qd。CrCl < 10 mL/min：不推荐。ESRD血液透析：透析后30mg，每周2次。【儿童治疗】≥2周龄：3mg/kg bid×5天；>1岁根据体重：≤15kg 30mg bid，>15-23kg 45mg bid，>23-40kg 60mg bid，>40kg 75mg bid。【服用时间】随餐服用可减轻胃肠道不适。','15-25℃干燥保存。','与丙磺舒合用可降低奥司他韦活性代谢物肾清除(约2倍)，增加血药浓度（临床意义有限，无需常规调整剂量）。与减毒活流感疫苗相互作用：服用奥司他韦前2周内或停药后48h内不应接种减毒活流感疫苗（可能降低疫苗效力）——灭活疫苗不受影响。奥司他韦与其他药物（华法林、对乙酰氨基酚、布洛芬等）无显著临床相互作用。与口服避孕药无相互作用。','【非限制级】甲型/乙型流感抗病毒药。48h内用药效果最佳（理想36h内）。神经精神事件警示（儿童/青少年需密切观察）。对普通感冒无效。妊娠期流感首选药物。') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d181','奥司他韦颗粒（儿童）','ASTWKL','Oseltamivir Granules','抗微生物药','抗病毒药','处方药（非限制级）',null,'用于成人和1岁及以上儿童的甲型和乙型流感治疗（发病36小时内使用最佳）；也可用于流感预防，适用于与流感患者密切接触的人群。','对奥司他韦或任何辅料过敏者禁用。严重肾功能不全（肌酐清除率<10ml/min）患者不推荐使用。','常见：恶心、呕吐（多见于儿童）、腹痛、头痛；偶见：支气管炎、失眠、头晕、疲劳；罕见：严重皮肤反应（Stevens-Johnson综合征）、肝功能异常、精神神经事件（幻觉、谵妄、自残行为，多见于儿童和青少年）。','治疗：成人及≥13岁青少年75mg bid×5d；1-12岁儿童：≤15kg 30mg bid，>15-23kg 45mg bid，>23-40kg 60mg bid，>40kg 75mg bid。预防：成人75mg qd，儿童减量，疗程7-10天。','密封，在干燥处（25℃以下）保存。配制后的混悬液冷藏（2-8℃）保存不超过24小时。','与减毒活流感疫苗合用可能降低疫苗有效性（使用本药前2周内或停药后48h内不建议接种减毒活疫苗）；与丙磺舒合用可使奥司他韦活性代谢物血药浓度升高约2倍（肾功能不全患者需调整剂量）。','【药品名称】通用名称：奥司他韦颗粒
【适应症】甲型和乙型流感治疗与预防
【用法用量】治疗5天疗程
【不良反应】胃肠道反应多见，精神神经事件需警惕
【禁忌】过敏者禁用
【注意事项】发病36h内用药效果最佳；肾功能不全需调整剂量
【特殊人群】儿童按体重精确给药') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d182','帕拉米韦注射液','PLMWZSY','Peramivir Injection','抗微生物药','抗病毒药','处方药（限制级）','高危','用于甲型和乙型流感的治疗，尤其适用于重症流感住院患者以及无法口服奥司他韦的患者。可单次静脉输注治疗无并发症流感。','对帕拉米韦过敏者禁用。严重肾功能不全（肌酐清除率<30ml/min）患者需调整剂量。','常见：腹泻、恶心、呕吐、中性粒细胞减少；偶见：头晕、头痛、失眠、肝功能异常（ALT/AST升高）；严重：过敏反应（过敏性休克）、精神神经症状（意识障碍、行为异常）、急性肾损伤。','成人及≥13岁青少年：重症流感300-600mg单次静脉滴注，根据病情可连用1-5天。儿童：按体重10mg/kg单次给药（最大600mg），滴注时间≥30分钟。肾功能不全需调整剂量。','遮光，密闭，在阴凉处（不超过20℃）保存。','与减毒活流感疫苗合用可能降低疫苗效果；尚无其他显著药物相互作用的临床报告。','【药品名称】通用名称：帕拉米韦注射液
【适应症】甲型和乙型流感治疗
【高危警示】本品为高危药品，限用于住院重症流感患者
【用法用量】单次静脉滴注300-600mg
【不良反应】腹泻、恶心、中性粒细胞减少
【禁忌】过敏者禁用
【注意事项】肾功能不全需调整剂量；给药期间应密切观察精神状态变化
【储存】遮光阴凉保存') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d183','利巴韦林片','LBWLP','Ribavirin Tablets','抗微生物药','抗病毒药','处方药（非限制级）',null,'广谱抗病毒药。用于呼吸道合胞病毒（RSV）引起的病毒性肺炎与支气管炎，以及皮肤疱疹病毒感染。与干扰素α联用治疗慢性丙型肝炎。','孕妇及可能怀孕的妇女禁用（FDA妊娠分级X级，有明确的致畸作用）。自身免疫性肝炎、严重肝功能不全、血红蛋白病（如地中海贫血）患者禁用。','常见：溶血性贫血（剂量依赖性，需监测血常规）、乏力、头痛、恶心；偶见：发热、失眠、食欲减退；严重：致畸（胎儿发育异常）、溶血性贫血加重（可致心功能恶化）、胰腺炎；罕见：抑郁、自杀行为。','治疗RSV感染：成人0.5-1g/d分2次口服。治疗丙肝：口服800-1200mg/d分2次，联合聚乙二醇干扰素。','密封，在干燥处保存。','与齐多夫定合用可增加贫血风险；与去羟肌苷合用可增加肝毒性、胰腺炎风险；与干扰素α合用可协同抗病毒（丙肝治疗方案）。','【药品名称】通用名称：利巴韦林片
【适应症】RSV感染、皮肤疱疹、慢性丙肝联合治疗
【警示】孕妇禁用——致畸性极强！使用期间及停药后6个月内男女均需严格避孕
【不良反应】溶血性贫血需监测血常规
【禁忌】孕妇、严重肝炎、血红蛋白病
【注意事项】治疗期间定期监测血常规和肝功能') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d184','恩替卡韦分散片','ETKWFSP','Entecavir Dispersible Tablets','抗微生物药','抗病毒药','处方药（非限制级）',null,'用于病毒复制活跃、血清ALT持续升高或有活动性病变的慢性成人乙型肝炎的治疗。核苷类似物，强效抑制HBV DNA复制。','对恩替卡韦过敏者禁用。不推荐用于HIV合并感染且未接受抗HIV治疗的患者（因其对HIV有微弱活性）。','常见：头痛、疲劳、头晕、恶心、ALT升高（治疗过程中的短暂波动）；偶见：腹泻、消化不良、失眠；严重：乳酸酸中毒（罕见但可致死，尤其是肝功能严重失代偿患者）、严重肝肿大伴脂肪变性、肾功能不全。','成人：0.5mg qd口服，空腹（餐前或餐后至少2小时）。拉米夫定耐药者：1mg qd。肾功能不全需调整给药间隔。','密封，在25℃以下干燥处保存。','与拉米夫定无交叉耐药（但对阿德福韦耐药者仍有效）。与肾排泄竞争性药物（如丙磺舒）合用可能增加恩替卡韦血药浓度。','【药品名称】通用名称：恩替卡韦分散片
【适应症】慢性乙型肝炎（一线治疗药物）
【特点】强效抗HBV、耐药屏障高
【用法用量】0.5mg qd空腹口服
【不良反应】ALT一过性升高、头痛
【禁忌】过敏者禁用
【注意事项】不宜突然停药（可致严重急性加重）；肾功能不全调整剂量
【警示】警惕乳酸酸中毒') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d185','富马酸替诺福韦二吡呋酯片','FMS TNWEBFZP','Tenofovir Disoproxil Fumarate Tablets','抗微生物药','抗病毒药','处方药（非限制级）',null,'用于慢性乙型肝炎（一线核苷类似物）和HIV-1感染的联合抗病毒治疗。与恩替卡韦同属慢乙肝一线药物。','对替诺福韦过敏者禁用。严重肾功能不全（肌酐清除率<30ml/min）不推荐使用。','常见：肾功能损害（近端肾小管损伤、Fanconi综合征、血清肌酐升高）、骨密度下降（骨质疏松风险增加）；偶见：恶心、腹泻、腹胀、头痛、脂肪分布异常；严重：乳酸酸中毒、急性肾衰竭、低磷性骨软化症。','成人及≥12岁儿童（≥35kg）：300mg qd口服，与食物同服可提高生物利用度。肾功能不全需调整给药间隔（CrCl 30-49ml/min：300mg q48h；CrCl 10-29ml/min：300mg q72-96h）。','密封，在25℃以下干燥处保存。','与肾毒性药物（氨基糖苷类、万古霉素、两性霉素B、NSAIDs）合用增加肾毒性风险；与地达诺新合用可增加地达诺新血药浓度（不推荐联合使用）；降低口服避孕药炔雌醇浓度。','【药品名称】通用名称：富马酸替诺福韦二吡呋酯片
【适应症】慢性乙型肝炎、HIV感染
【特征】慢乙肝一线药物，耐药屏障高
【肾毒性警示】可致肾功能损害和骨密度下降，需定期监测肾功能和血磷
【用法用量】300mg qd餐后口服
【不良反应】肾毒性、骨质疏松
【禁忌】过敏者禁用，严重肾损不推荐
【注意事项】定期监测血清肌酐、血磷、尿常规') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d186','盐酸缬更昔洛韦片','YS XGXLWP','Valganciclovir Hydrochloride Tablets','抗微生物药','抗病毒药','处方药（限制级）','高危','用于治疗免疫功能缺陷患者（包括艾滋病患者）的巨细胞病毒（CMV）视网膜炎；用于预防高危实体器官移植受者的CMV感染。为更昔洛韦的缬氨酸酯前药，口服生物利用度显著提高。','对本药或更昔洛韦过敏者禁用。中性粒细胞绝对计数<500/μL、血小板计数<25000/μL或血红蛋白<8g/dL时禁用（需先纠正血象）。','常见：中性粒细胞减少（发生率约30%）、贫血、血小板减少——骨髓抑制是主要剂量限制性毒性；偶见：发热、恶心、腹泻、食欲减退、头痛、视网膜脱离；严重：粒细胞缺乏症、再生障碍性贫血、急性肾功能衰竭、血小板减少性紫癜。','CMV视网膜炎治疗：成人900mg bid×21天，维持剂量900mg qd。CMV预防（移植后）：900mg qd。肾功能不全需根据CrCl调整剂量。','遮光，密封，在25℃以下干燥处保存。','与肾毒性药物合用增加肾毒性；与齐多夫定合用加重骨髓抑制（均引起粒细胞减少）；与丙磺舒合用可减少肾排泄；与伊马替尼、环磷酰胺等骨髓抑制剂合用增加血液毒性。','【药品名称】通用名称：盐酸缬更昔洛韦片
【适应症】CMV视网膜炎、移植后CMV预防
【高危警示】本品为高危药品
【不良反应】骨髓抑制（中性粒细胞减少最常见）——需严密监测血象
【用法用量】治疗900mg bid，维持900mg qd
【禁忌】严重血细胞减少者禁用
【注意事项】肾功能不全需调整剂量；服药期间避免驾驶（可致抽搐、眩晕）
【储存】遮光密封保存') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d187','阿苯达唑片','ABDZP','Albendazole Tablets','抗微生物药','抗寄生虫药','处方药（非限制级）',null,'广谱驱虫药。用于治疗蛔虫病、蛲虫病、钩虫病、鞭虫病、绦虫病、包虫病（棘球蚴病）、囊虫病（猪囊尾蚴病）、华支睾吸虫病、肺吸虫病、姜片虫病等。线虫、吸虫、绦虫均有作用。','孕妇、哺乳期妇女、2岁以下幼儿禁用（有致畸和胚胎毒性）。有蛋白尿、化脓性皮炎以及各种急性疾病者禁用。囊虫病合并癫痫者慎用。','常见：恶心、呕吐、腹痛、腹泻、头痛、眩晕；偶见：肝功能异常（ALT/AST升高）、脱发、白细胞减少；严重：肝损伤（长期大剂量使用）、骨髓抑制（罕见）、过敏反应（皮疹、荨麻疹）；囊虫病治疗时可因虫体死亡引起颅内压升高。','蛔虫/蛲虫/钩虫/鞭虫：成人400mg顿服（驱蛲虫需2周后重复一次）。绦虫病：400mg qd×3d。包虫病：每日10-15mg/kg分2次口服，疗程30天，需多个疗程。囊虫病：每日15-20mg/kg分2次，疗程8-30天。','密封，在25℃以下干燥处保存。','与地塞米松合用可增加阿苯达唑血药浓度；与普拉嗪（吡喹酮）合用治疗囊虫病有协同作用；与脂肪餐同服可提高吸收率。','【药品名称】通用名称：阿苯达唑片
【适应症】广谱驱虫药——蛔虫、蛲虫、钩虫、鞭虫、绦虫、包虫、囊虫
【特点】苯并咪唑类，抑制虫体微管蛋白合成
【用法用量】多数肠道线虫400mg顿服
【不良反应】胃肠道反应，肝毒性需监测
【禁忌】孕妇禁用（致畸性）
【注意事项】治疗囊虫病需同时使用糖皮质激素减轻炎症反应') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d188','甲苯咪唑片','JBMZP','Mebendazole Tablets','抗微生物药','抗寄生虫药','处方药（非限制级）',null,'广谱驱虫药。用于蛔虫病、蛲虫病、钩虫病、鞭虫病、绦虫病的治疗。作用机制为抑制虫体微管蛋白聚合，阻断葡萄糖摄取，导致虫体能源耗竭死亡。','孕妇禁用（FDA妊娠分级C级，动物实验有致畸性）。2岁以下幼儿不推荐使用。对本品过敏者禁用。','常见：腹部不适、恶心、呕吐、腹泻、头晕（发生率较低，因本品口服吸收少）；偶见：皮疹、荨麻疹、转氨酶升高；严重：粒细胞缺乏症（罕见）、严重皮肤反应（多形性红斑）。','蛔虫/钩虫/鞭虫感染：成人200mg/d分2次口服×3d。蛲虫病：100mg顿服，2周后重复一次。','密封，在干燥处保存。','与西咪替丁合用可抑制甲苯咪唑代谢，增加血药浓度；与卡马西平、苯妥英钠合用加速代谢，降低疗效；与脂肪餐同服可提高吸收率。','【药品名称】通用名称：甲苯咪唑片
【适应症】蛔虫、蛲虫、钩虫、鞭虫、绦虫感染
【特点】广谱驱虫，抑制微管蛋白
【用法用量】多数感染200mg/d×3d
【不良反应】较轻（口服吸收少）
【禁忌】孕妇禁用
【注意事项】2岁以下幼儿不推荐') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d189','吡喹酮片','BKTP','Praziquantel Tablets','抗微生物药','抗寄生虫药','处方药（非限制级）',null,'血吸虫病首选治疗药物（对日本血吸虫、曼氏血吸虫、埃及血吸虫均有高效）。也用于治疗华支睾吸虫病、肺吸虫病、姜片虫病、绦虫病、囊虫病等各类吸虫和绦虫感染。','眼囊虫病（眼部虫体死亡引发炎症可致失明）患者禁用。对本药过敏者禁用。严重心、肝、肾功能不全者慎用。','常见：头晕、头痛、乏力、腹部不适、恶心、食欲减退（服药后数小时出现，多数可自行缓解）；偶见：发热、皮疹、瘙痒、ALT升高；严重：过敏性休克（罕见）、精神症状、颅内压升高（治疗囊虫病时）。','血吸虫病：成人40-60mg/kg，分2次（餐间）口服×1d。华支睾吸虫病：75mg/kg分3次×2d。绦虫病：10-20mg/kg顿服。囊虫病：每日30-50mg/kg分3次×4-6d。','遮光，密封，在干燥处保存。','与阿苯达唑合用治疗囊虫病有协同作用；与利福平合用可降低吡喹酮血药浓度；与氯喹、免疫抑制剂合用可影响疗效。','【药品名称】通用名称：吡喹酮片
【适应症】血吸虫病首选药、各类吸虫和绦虫感染
【特点】广谱抗吸虫/绦虫，口服吸收好
【用法用量】血吸虫40-60mg/kg顿服或分次
【不良反应】头晕、头痛多见，多为一过性
【禁忌】眼囊虫病禁用
【注意事项】治疗囊虫病需住院并使用糖皮质激素') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d190','伊维菌素片','YWJSP','Ivermectin Tablets','抗微生物药','抗寄生虫药','处方药（非限制级）',null,'用于治疗盘尾丝虫病（河盲症）、类圆线虫病、钩虫感染、蛔虫感染。也对疥疮、头虱、螨虫感染有效。2015年William C. Campbell和Satoshi Ōmura因发现伊维菌素获诺贝尔生理学或医学奖。','对本品过敏者禁用。严重肝肾功能不全者慎用。5岁以下儿童慎用。孕妇慎用（FDA妊娠分级C级）。','常见：头晕、瘙痒、关节痛、发热、皮疹、淋巴结肿大（多见于盘尾丝虫病患者服药后的Mazzotti反应——虫体死亡释放抗原所致）；偶见：恶心、呕吐、腹泻；严重：Stevens-Johnson综合征（罕见）、癫痫、低血压、严重体位性低血压。','类圆线虫病：成人200μg/kg顿服。盘尾丝虫病：150μg/kg顿服，每3-12个月重复。疥疮：200μg/kg顿服，2周后重复一次。','遮光，密封，在25℃以下干燥处保存。','与CYP3A4抑制剂（如酮康唑、伊曲康唑）合用可增加伊维菌素血药浓度；与苯巴比妥等肝酶诱导剂合用可能降低药效；与华法林等抗凝药合用需监测INR。','【药品名称】通用名称：伊维菌素片
【适应症】丝虫病、类圆线虫病、疥疮
【特点】诺贝尔奖药物——大环内酯类抗寄生虫药
【用法用量】多数顿服200μg/kg
【不良反应】Mazzotti反应（虫体死亡释放抗原）
【禁忌】过敏者禁用
【注意事项】盘尾丝虫病治疗中可能出现严重过敏反应') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d191','磷酸氯喹片','LSLKP','Chloroquine Phosphate Tablets','抗微生物药','抗寄生虫药','处方药（非限制级）',null,'用于疟疾的治疗（间日疟、三日疟及敏感的恶性疟），也用于疟疾的预防。还可用于阿米巴肝脓肿、系统性红斑狼疮等免疫性疾病（作为免疫抑制剂）。','对本药过敏者禁用。有视网膜病变或黄斑病变者禁用。有QT间期延长、房室传导阻滞等心脏疾病者禁用。严重肝病患者禁用。G-6-PD缺乏症患者慎用。','常见：恶心、呕吐、食欲减退、头痛、视觉模糊；偶见：皮肤瘙痒、皮疹、脱发、失眠；严重：QT间期延长→尖端扭转型室速→心源性猝死（最危险的心脏毒性！）、不可逆视网膜病变（长期使用蓄积剂量>100g时）、听力损伤、骨髓抑制、精神异常。','疟疾治疗：首剂1g（磷酸氯喹含氯喹碱基600mg），6小时后0.5g，第2-3天各0.5g。疟疾预防：成人每周500mg，旅行前1周开始至离开疫区后4周。','遮光，密封，在干燥处保存。','与心脏毒性药物（氟喹诺酮类、大环内酯类、抗精神病药等）合用增加QT延长风险；与西咪替丁合用可抑制氯喹代谢；与甲氟喹合用增加癫痫发作风险；抗酸剂可降低氯喹吸收。','【药品名称】通用名称：磷酸氯喹片
【适应症】疟疾治疗与预防
【警示】QT延长→心源性猝死风险！必须监测心电图
【不良反应】视网膜病变（不可逆，与累积剂量相关）、心脏毒性
【用法用量】三日疗程
【禁忌】QT延长、视网膜病变、G-6-PD缺乏
【注意事项】长期使用需定期行眼科检查') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d192','青蒿素栓/蒿甲醚注射液','QHSS/HMZZSY','Artemisinin Suppositories/Artemether Injection','抗微生物药','抗寄生虫药','处方药（非限制级）',null,'用于恶性疟（包括脑型疟）的治疗。青蒿素栓适用于无法口服的疟疾患者（尤其儿童）。蒿甲醚注射液用于重症疟疾（包括脑型疟）的抢救治疗。WHO推荐以青蒿素为基础的联合疗法（ACT）作为一线抗疟方案。','对青蒿素类过敏者禁用。妊娠早期（前三个月）慎用（动物实验有胚胎毒性）。','常见：发热、皮疹、瘙痒、恶心、呕吐；偶见：一过性网织红细胞计数降低、肝功能异常；严重：过敏反应（罕见）、神经毒性（动物实验中高剂量可出现，但在人类中不明确）。','青蒿素栓：直肠给药，成人首剂600mg，第4、24、48小时各600mg。蒿甲醚注射液：肌注，成人首剂160mg，第2-5天各80mg。重症疟疾：首剂160mg，之后24h和48h再各用80mg，随后口服ACT完成疗程。','青蒿素栓：遮光，在阴凉处（不超过20℃）保存；蒿甲醚注射液：遮光，密封保存，不宜冷冻。','与其他抗疟药（甲氟喹、奎宁）联用有协同或拮抗作用取决于配伍；与CYP3A4诱导剂/抑制剂合用可影响蒿甲醚代谢。','【药品名称】通用名称：青蒿素栓/蒿甲醚注射液
【适应症】恶性疟、脑型疟
【特征】WHO推荐ACT一线方案、中国科学家屠呦呦发现
【用法用量】三日疗程
【不良反应】轻度胃肠道反应
【禁忌】过敏者禁用
【注意事项】妊娠早期慎用；需联合另一种抗疟药以延缓耐药') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d193','乙胺嘧啶片','YAMDP','Pyrimethamine Tablets','抗微生物药','抗寄生虫药','处方药（非限制级）',null,'用于疟疾的预防（与磺胺多辛复方——防疟二号），以及弓形虫病的治疗（与磺胺嘧啶联用为金标准方案——两者协同抑制叶酸代谢）。','孕妇禁用（叶酸拮抗剂，有致畸风险——FDA妊娠分级C级）。哺乳期妇女禁用。叶酸缺乏性贫血患者禁用。','常见：恶心、呕吐、食欲减退，叶酸缺乏相关不良反应（巨幼细胞性贫血、粒细胞减少、血小板减少）；偶见：皮疹、过敏反应、头痛；严重：巨幼细胞性贫血（长期使用需补充叶酸）、骨髓抑制、肺嗜酸细胞浸润症。','疟疾预防：成人25mg每周一次（与磺胺多辛500mg联用）。弓形虫病：成人首剂200mg分2次口服，维持50-100mg/d×4-6周，同时联用磺胺嘧啶4-6g/d分4次口服，并需补充亚叶酸钙。','遮光，密封保存。','与甲氧苄啶（TMP）合用增加叶酸拮抗效应；与苯妥英钠合用可增加苯妥英毒性风险；与叶酸合用可拮抗本药抗寄生虫作用（但治疗弓形虫病时仍需补充亚叶酸钙）。','【药品名称】通用名称：乙胺嘧啶片
【适应症】疟疾预防、弓形虫病（与磺胺嘧啶联用）
【特点】二氢叶酸还原酶抑制剂
【用法用量】疟疾预防每周1次
【不良反应】叶酸缺乏——需补充亚叶酸钙
【禁忌】孕妇禁用
【注意事项】弓形虫病联合方案必须同时补充亚叶酸钙') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d194','双氢青蒿素哌喹片','SQQHSPKP','Dihydroartemisinin-Piperaquine Tablets','抗微生物药','抗寄生虫药','处方药（非限制级）',null,'用于各类疟疾（包括恶性疟、间日疟）的治疗。为WHO推荐ACT方案一线抗疟联合制剂——双氢青蒿素（速效杀灭疟原虫）+ 哌喹（长效清除残留虫体），可有效延缓耐药性产生。','对本药任何成分过敏者禁用。严重肝肾功能不全者禁用；心脏疾病（尤其是QT间期延长者）禁用（哌喹可延长QT间期）。','常见：恶心、呕吐、腹痛、头晕、头痛、偶见：皮疹、瘙痒、一过性ALT/AST升高；严重：QT间期延长（哌喹的心脏毒性——需监测心电图，尤其在女性患者中更显著）、过敏反应（罕见）。','成人：按双氢青蒿素计算，总剂量2.5mg/kg（或成人固定剂量方案：双氢青蒿素40mg+哌喹320mg），qd×3d，与食物同服可减少胃肠道反应。','遮光，密封，在干燥处保存。','与其他延长QT间期的药物（氟喹诺酮类、大环内酯类、抗精神病药、胺碘酮等）合用增加心律失常风险。与CYP3A4抑制剂合用可能增加哌喹血药浓度。','【药品名称】通用名称：双氢青蒿素哌喹片
【适应症】ACT方案一线抗疟联合制剂
【特点】速效+长效双机制抗疟
【用法用量】三日疗程qd
【不良反应】消化道反应、QT延长风险
【禁忌】QT延长、严重肝肾损伤
【注意事项】用药前后需监测心电图') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d195','左旋咪唑片','ZXMZP','Levamisole Tablets','抗微生物药','抗寄生虫药','处方药（非限制级）',null,'驱肠虫：用于蛔虫、钩虫、蛲虫感染。免疫调节：作为免疫调节剂辅助治疗类风湿关节炎、肾病综合征、恶性肿瘤放化疗后的免疫功能低下（刺激T淋巴细胞功能）。','对本药过敏者禁用。肝功能不全患者慎用。妊娠早期禁用。哺乳期妇女慎用。有粒细胞缺乏症病史者禁用。','常见：恶心、呕吐、腹痛、头晕、失眠；偶见：皮疹、荨麻疹、味觉异常、关节痛；严重：粒细胞缺乏症（主要严重不良反应，常发生在 HLA-B27 阳性患者——高加索人群风险最高）、剥脱性皮炎、肝功能损害、脑炎综合征。','驱蛔虫：成人1.5-2.5mg/kg睡前顿服。驱钩虫：1.5-2.5mg/kg qd×3d。免疫调节：每日2.5mg/kg，或每2周服药3天。','密封，在干燥处保存。','与四氯乙烯合用毒性增加；与抗凝药合用可增强抗凝效果（需监测INR）；与酒精合用可致双硫仑样反应。','【药品名称】通用名称：左旋咪唑片
【适应症】驱蛔虫/钩虫/蛲虫、免疫调节
【特点】兼具驱虫和免疫增强作用
【用法用量】驱虫睡前顿服，免疫调节小剂量
【不良反应】粒细胞缺乏症（HLA-B27相关）
【禁忌】过敏者、粒细胞缺乏病史者禁用
【注意事项】不宜与CYP诱导剂合用') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d196','甲硝唑栓（滴虫病）','JXZS','Metronidazole Suppositories','抗微生物药','抗寄生虫药','处方药（非限制级）',null,'用于滴虫性阴道炎的局部治疗。栓剂直接作用于阴道，可有效杀灭阴道毛滴虫，尤其适用于全身用药不耐受者或作为口服甲硝唑的辅助治疗。','对本药过敏者禁用。妊娠早期（前三个月）禁用。哺乳期妇女慎用（应暂停哺乳）。中枢神经系统疾病患者禁用。','常见：局部刺激感（烧灼感、瘙痒感加重）、阴道分泌物增多；偶见：局部红肿、皮疹；严重：因局部给药全身吸收极少，全身性不良反应（如周围神经病变、癫痫）罕见。','阴道给药：每晚睡前0.5g（1枚），置入阴道深部，连续7-10天为一疗程。可配合口服甲硝唑400mg bid×7d提高根治率。','遮光，密封，在阴凉处（不超过20℃）保存。','因局部给药吸收极少，全身性药物相互作用不明显。若与口服甲硝唑联用时，注意口服甲硝唑与酒精合用可致双硫仑样反应。','【药品名称】通用名称：甲硝唑栓
【适应症】滴虫性阴道炎
【特点】局部给药，全身吸收极少
【用法用量】每晚1枚×7-10天
【不良反应】局部刺激感
【禁忌】妊娠早期禁用
【注意事项】一般需配合口服甲硝唑治疗以根治') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d197','布洛芬缓释胶囊','BLFHSJN','Ibuprofen Sustained-Release Capsules','解热镇痛药','非甾体抗炎药','OTC',null,'用于缓解轻至中度的疼痛（关节痛、神经痛、肌肉痛、头痛、偏头痛、牙痛、痛经等），也用于普通感冒或流行性感冒引起的发热。缓释剂型12小时持续释药，药效平稳持久。','对本品或阿司匹林等其他NSAIDs过敏者禁用（交叉过敏）。活动性消化性溃疡或消化性溃疡出血史者禁用。严重肝肾功能不全、严重心衰患者禁用。妊娠后三个月禁用。','常见：胃肠道反应（恶心、呕吐、上腹不适、食欲减退，较阿司匹林轻）、偶见：头晕、头痛、耳鸣、皮疹、转氨酶升高；严重：消化道溃疡/出血、肾功能损害（急性间质性肾炎）、心血管血栓事件风险增加（长期大剂量使用）。','成人：0.3g q12h（12小时一次整粒吞服，不可咀嚼）。成人最大剂量不超过1.2g/d。','遮光，密封保存（25℃以下）。','与阿司匹林、其他NSAIDs合用增加溃疡和出血风险；与华法林等抗凝药合用增加出血风险；与呋塞米、ACEI类降压药合用可降低后者的降压效果；与锂剂合用可增加锂中毒风险。','【药品名称】通用名称：布洛芬缓释胶囊
【适应症】解热镇痛——轻中度疼痛
【特点】12小时缓释——药效平稳
【用法用量】0.3g q12h整粒吞服
【不良反应】较阿司匹林胃肠道反应轻
【禁忌】活动性溃疡、阿司匹林过敏、妊娠后期
【注意事项】不推荐长期使用；每日最大剂量1.2g') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d198','布洛芬颗粒（儿童）','BLFKL','Ibuprofen Granules for Children','解热镇痛药','非甾体抗炎药','OTC',null,'用于儿童普通感冒或流行性感冒引起的发热，以及儿童轻至中度疼痛（头痛、牙痛、肌肉痛、耳痛等）。颗粒剂型冲服方便，适合儿童用药。','对本品或阿司匹林等其他NSAIDs过敏者禁用。活动性消化性溃疡患儿禁用。严重肝肾功能不全或严重心衰患儿禁用。','常见：胃肠道反应（恶心、呕吐、上腹不适，较轻微）；偶见：皮疹、头晕、嗜睡；罕见：消化道出血、急性肾功能损伤、Stevens-Johnson综合征。','按体重5-10mg/kg/次，每6-8小时可重复给药，24小时不超过4次。参考体重剂量：5-8kg（3-11月）50mg/次；8-10.5kg（12-23月）75mg/次；10.5-16kg（2-3岁）100mg/次；16-21kg（4-5岁）150mg/次；21-27kg（6-8岁）200mg/次。','密封，在干燥处保存。','与其他NSAIDs合用增加溃疡和出血风险；与华法林合用增加出血风险；与呋塞米、ACEI类合用可降低后者的效果。','【药品名称】通用名称：布洛芬颗粒
【适应症】儿童发热、轻中度疼痛
【特点】儿童专用颗粒剂型
【用法用量】5-10mg/kg/次，6-8小时可重复
【不良反应】较安全，胃肠道反应轻微
【禁忌】过敏者、活动性溃疡禁用
【注意事项】每日不超过4次；需按体重精确计算剂量') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d199','对乙酰氨基酚片','DYXAJFP','Paracetamol Tablets','解热镇痛药','非甾体抗炎药','OTC',null,'用于普通感冒或流行性感冒引起的发热，以及轻至中度疼痛（头痛、牙痛、神经痛、肌肉痛、痛经）。有解热镇痛作用但无明显抗炎作用（与NSAIDs不同）。','严重肝肾功能不全者禁用。对本药过敏者禁用。G-6-PD缺乏症患者慎用。','常见：常规剂量下不良反应极少，偶见恶心、呕吐、皮疹；严重：肝毒性——过量（单次>10g或>150mg/kg）可致致死性肝坏死（为对乙酰氨基酚最主要的危险！）。罕见：Stevens-Johnson综合征、粒细胞缺乏症、血小板减少。','成人：0.3-0.6g/次，每4-6小时一次，24小时最大剂量2g（缓释剂型不超过1.5g/d）。退热一般连续使用不超过3天，镇痛不超过5天。','密封，在干燥处保存（25℃以下）。','与肝酶诱导剂（乙醇、巴比妥类、卡马西平、利福平）合用可增加肝毒性（因加速生成毒性代谢物N-乙酰苯醌亚胺）。与华法林合用可增强抗凝效应（长期大剂量使用）。','【药品名称】通用名称：对乙酰氨基酚片
【适应症】解热镇痛
【肝毒性警示】过量可致致死性肝坏死！！！成人单次≥10g可致严重肝中毒
【特点】无抗炎作用的解热镇痛药
【用法用量】0.3-0.6g/次，日最大剂量2g
【不良反应】安全范围宽，过量肝毒性为主
【禁忌】严重肝病、过敏者禁用
【注意事项】禁与含对乙酰氨基酚的其他复方感冒药同服') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d200','对乙酰氨基酚混悬液（儿童）','DYXAJFHXY','Paracetamol Suspension for Children','解热镇痛药','非甾体抗炎药','OTC',null,'用于儿童普通感冒或流行性感冒引起的发热，以及儿童轻至中度疼痛（头痛、牙痛、耳痛）。混悬液剂型口感好、剂量可调，适合儿童人群。','严重肝肾功能不全者禁用。对本药过敏者禁用。G-6-PD缺乏症患儿慎用。','常见：常规剂量下不良反应极少，偶见恶心、呕吐；严重：过量肝毒性（儿童单次>150mg/kg可致严重肝损伤）。罕见：严重皮肤反应、血液系统反应。','按体重10-15mg/kg/次，每4-6小时可重复给药，24小时不超过4次（不超过60mg/kg/d）。参考剂量（按160mg/5ml规格）：4-8kg（0.5-1岁）1.25-2.5ml；8-12kg（1-2岁）2.5-3.75ml；12-16kg（2-3岁）3.75-5ml；16-20kg（4-5岁）5-6.25ml。','遮光，密封，在阴凉处保存。开瓶后室温保存不超过1个月（部分产品需冷藏）。','与肝酶诱导剂合用增加肝毒性；与抗胆碱药合用可降低吸收速率。','【药品名称】通用名称：对乙酰氨基酚混悬液
【适应症】儿童发热、轻中度疼痛
【特点】儿童混悬液剂型，口感适宜
【用法用量】10-15mg/kg/次，4-6小时可重复
【肝毒性警示】过量损伤肝脏！需小心计算剂量
【禁忌】严重肝病禁用
【注意事项】使用前摇匀；避免与其他含对乙酰氨基酚的药物同服') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d201','盐酸克林霉素胶囊','YSKLMJN','Clindamycin Hydrochloride Capsules','抗微生物药','林可霉素类','处方药（非限制级）',null,'用于厌氧菌感染（腹腔感染、盆腔感染、肺脓肿、牙周炎等）及链球菌、葡萄球菌等G+菌引起的呼吸道感染、皮肤软组织感染、骨髓炎。尤其适用于厌氧菌和G+菌混合感染。','对克林霉素或林可霉素过敏者禁用。有伪膜性肠炎（抗生素相关性结肠炎）病史者禁用。','常见：胃肠道反应（恶心、呕吐、腹痛、腹泻——发生率约20%）；严重：伪膜性肠炎（艰难梭菌过度增殖——可致死，是克林霉素最值得关注的严重不良反应）；偶见：皮疹、荨麻疹、肝功能异常（ALT/AST升高）；罕见：粒细胞减少、血小板减少。','成人：0.15-0.3g qid口服，重症可增至0.45g qid。儿童：每日8-25mg/kg分3-4次口服。','密封，在干燥处保存。','与神经肌肉阻滞剂合用可增强神经肌肉阻滞效应（呼吸抑制风险）；与红霉素、氯霉素有拮抗作用（竞争50S核糖体亚基结合位点）；与华法林合用可增强抗凝作用。','【药品名称】通用名称：盐酸克林霉素胶囊
【适应症】厌氧菌感染、G+菌感染
【特点】厌氧菌首选药物之一
【用法用量】0.15-0.3g qid
【伪膜性肠炎警示】艰难梭菌相关性肠炎风险——一旦发生腹泻需立即停药
【不良反应】腹泻发生率较高
【禁忌】过敏者、伪膜性肠炎史禁用') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d202','克林霉素磷酸酯注射液','KLMSLSZZSY','Clindamycin Phosphate Injection','抗微生物药','林可霉素类','处方药（限制级）',null,'用于厌氧菌感染的重症治疗（腹腔感染、盆腔感染、败血症、坏死性筋膜炎、肺脓肿等），以及G+球菌（金黄色葡萄球菌、链球菌）引起的急重症感染。静脉给药可快速达到有效血药浓度。','对克林霉素或林可霉素过敏者禁用。伪膜性肠炎病史者禁用。新生儿不推荐使用（含苯甲醇辅料）。','常见：腹泻（伪膜性肠炎风险较高）、注射部位疼痛/静脉炎；偶见：恶心、呕吐、皮疹、肝功能异常；严重：伪膜性肠炎（艰难梭菌过度繁殖——可致脱水、中毒性巨结肠甚至死亡）、过敏反应（Stevens-Johnson综合征）、心电图异常（QT延长罕见）。','成人：0.6-1.2g/d分2-4次深部肌注或静脉滴注。重症：1.2-2.4g/d分2-4次静脉滴注。儿童：每日20-30mg/kg分2-4次给药。单次静脉滴注不超过1.2g，滴注速度<30mg/min。','遮光，密闭保存。','与神经肌肉阻滞剂（筒箭毒碱、泮库溴铵）合用可增强肌松作用（可引起呼吸肌麻痹）；与红霉素、氯霉素竞争50S亚基拮抗；与华法林合用增强抗凝效果。','【药品名称】通用名称：克林霉素磷酸酯注射液
【适应症】厌氧菌重症感染、G+球菌重症感染
【用法用量】0.6-2.4g/d分次静滴
【不良反应】伪膜性肠炎风险、注射部位静脉炎
【禁忌】过敏者、伪膜性肠炎史禁用
【注意事项】滴注速度不宜过快（<30mg/min）；密切观察腹泻等症状') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d203','盐酸林可霉素注射液','YSLKMZZSY','Lincomycin Hydrochloride Injection','抗微生物药','林可霉素类','处方药（非限制级）',null,'用于G+菌（链球菌、葡萄球菌）以及厌氧菌引起的感染，包括呼吸系统感染、骨髓炎、败血症、腹腔感染和盆腔感染。克林霉素为该类药物中的优化衍生物，疗效和安全谱更优。','对林可霉素过敏者禁用。新生儿禁用。有伪膜性肠炎病史者禁用。深部真菌感染者慎用。','常见：恶心、呕吐、腹泻（伪膜性肠炎风险——与克林霉素相似）、注射部位疼痛/静脉炎；偶见：皮疹、荨麻疹、肝功能异常、嗜酸性粒细胞增多；严重：伪膜性肠炎（艰难梭菌过度繁殖，可致死）、过敏反应（罕见，包括过敏性休克、血管神经性水肿）、听力减退。','成人：0.6g q8-12h 肌注或静滴。重症：0.6-1.8g/d分次给药。儿童：每日10-20mg/kg分次给药。静脉滴注前需充分稀释，速度宜缓。','遮光，密闭保存。','与神经肌肉阻滞剂合用增强肌松效应；与红霉素、氯霉素拮抗（竞争50S核糖体亚基）；与新斯的明合用可拮抗神经肌肉阻滞作用；与阿片类止痛药合用可增加呼吸抑制风险。','【药品名称】通用名称：盐酸林可霉素注射液
【适应症】G+菌感染、厌氧菌感染
【特点】克林霉素前体——克林霉素疗效更优
【用法用量】0.6g q8-12h
【不良反应】伪膜性肠炎风险
【禁忌】新生儿、伪膜性肠炎史禁用
【注意事项】静脉滴注需充分稀释，速度缓慢') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d204','克林霉素棕榈酸酯颗粒（儿童）','KLMSZLSZKL','Clindamycin Palmitate Granules for Children','抗微生物药','林可霉素类','处方药（非限制级）',null,'用于儿童G+菌和厌氧菌引起的感染，包括上呼吸道感染（链球菌性咽炎、扁桃体炎、中耳炎）、下呼吸道感染、皮肤软组织感染（脓疱疮、蜂窝织炎、脓皮病）、骨髓炎等。颗粒剂型适合儿童口服。','对克林霉素或林可霉素过敏者禁用。有伪膜性肠炎病史者禁用。新生儿禁用。','常见：腹泻（发生率高于其他儿童口服抗生素，伪膜性肠炎风险需高度警惕）、恶心、呕吐、腹痛；偶见：皮疹、肝功能异常；严重：伪膜性肠炎（艰难梭菌相关性腹泻——可致严重脱水和电解质紊乱），罕见：严重过敏反应、粒细胞缺乏。','儿童：每日8-25mg/kg分3-4次口服（按克林霉素碱基计算）。链球菌咽炎推荐剂量：每日20mg/kg分3次口服×10天。','密封，在干燥处保存。冲配后的混悬液冷藏（2-8℃）保存，7天内使用完毕。','与神经肌肉阻滞剂合用增强肌松作用；与红霉素、氯霉素有拮抗作用；与华法林合用增强抗凝效果。','【药品名称】通用名称：克林霉素棕榈酸酯颗粒
【适应症】儿童G+菌和厌氧菌感染
【特点】儿童专用口服颗粒剂型
【用法用量】8-25mg/kg/d分3-4次
【不良反应】腹泻发生率较高——警惕伪膜性肠炎
【禁忌】过敏者、新生儿禁用
【注意事项】混悬液需冷藏不超过7天') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d205','氯霉素注射液','LMSZSY','Chloramphenicol Injection','抗微生物药','氯霉素类','处方药（限制级）','高危','用于治疗伤寒和副伤寒（传统首选药）、细菌性脑膜炎（尤其是流感嗜血杆菌）、厌氧菌感染、立克次体病（斑疹伤寒、Q热）。因严重骨髓抑制风险，临床使用已大幅受限。','对本药过敏者禁用。新生儿和妊娠晚期孕妇禁用（灰婴综合征和骨髓抑制风险——FDA妊娠分级C级）。哺乳期妇女禁用。严重肝肾功能不全者慎用。','常见：恶心、呕吐、腹泻、口腔炎；严重：骨髓抑制——再生障碍性贫血（不可逆、致死性、发生率约1/25000-40000——即使短疗程或局部用药也可发生！），剂量相关的可逆性骨髓抑制（白细胞/血小板减少）；新生儿：灰婴综合征（循环衰竭、发绀、呼吸不规则——死亡率高达40%）。','成人：1-2g/d分2次静脉滴注。儿童：每日25-50mg/kg分2次给药。新生儿（仅在无替代用药时）：每日12.5-25mg/kg（需监测血药浓度，谷浓度<5μg/ml，峰浓度<20μg/ml）。','遮光，密闭，在阴凉处保存（避免冷冻）。','与肝酶诱导剂（苯巴比妥、利福平）合用可降低氯霉素血药浓度；与抗凝药合用增强抗凝效果；与磺脲类降糖药合用增强降糖作用；与环磷酰胺合用可减少环磷酰胺活性代谢物生成。','【药品名称】通用名称：氯霉素注射液
【适应症】伤寒/副伤寒、细菌性脑膜炎
【高危警示】本品为高危药品！
【致命不良反应】再生障碍性贫血（不可逆致死性）——仅限无替代用药时使用
【禁忌】新生儿禁用（灰婴综合征）
【用法用量】成人1-2g/d
【注意事项】用药期间每日监测血象；血药浓度监测至关重要') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d206','氯霉素滴眼液','LMSDYY','Chloramphenicol Eye Drops','抗微生物药','氯霉素类','OTC',null,'用于治疗敏感菌所致的细菌性结膜炎、角膜炎、眼睑炎、泪囊炎、睑腺炎（麦粒肿）等浅表眼部感染。外用局部给药，全身吸收极少。','对本药过敏者禁用。有氯霉素所致再生障碍性贫血病史者禁用。','常见：局部刺激（烧灼感、刺痛、流泪）；偶见：眼睑水肿、结膜充血、瘙痒；严重：再生障碍性贫血（外用滴眼液风险极低，但理论上有发生可能——历史上曾有极少数病例报告）。','滴眼：每次1-2滴，每2-4小时1次（重症可增加频率），滴入结膜囊内。疗程视病情而定，一般不超过5-7天。','遮光，密封，在阴凉处（不超过20℃）保存。开瓶后可使用4周。','局部用药全身吸收极少，几乎无全身性药物相互作用。与其他滴眼液同用时需间隔5-10分钟。','【药品名称】通用名称：氯霉素滴眼液
【适应症】细菌性结膜炎等浅表眼部感染
【特点】外用局部给药——全身吸收极少
【用法用量】每次1-2滴，2-4小时1次
【不良反应】局部刺激为主
【禁忌】过敏者禁用
【注意事项】开瓶后4周内使用；出现过敏症状应立即停药') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d207','甲砜霉素肠溶片','JFMSYRP','Thiamphenicol Enteric-Coated Tablets','抗微生物药','氯霉素类','处方药（限制级）',null,'用于敏感菌所致的呼吸系统感染（支气管炎、肺炎）、泌尿系统感染、伤寒及其他沙门氏菌属感染、肠道感染、淋病等。抗菌谱与氯霉素相似。','对本药过敏者禁用。孕妇禁用（虽然无氯霉素的灰婴综合征风险，但仍不建议使用）。哺乳期妇女慎用。严重肝肾功能不全者慎用。','常见：胃肠道反应（恶心、呕吐、腹痛、腹泻——肠溶片可减少胃部刺激）；偶见：皮疹、头晕、头痛；严重：骨髓抑制——可逆性粒细胞减少（发生率低于氯霉素，但仍有报告），再生障碍性贫血风险显著低于氯霉素；罕见：周围神经炎、视神经炎。','成人：0.5-1g/d分3-4次口服。重症：首剂1g后0.5g q6h。儿童：每日25-50mg/kg分3-4次口服。','遮光，密封，在干燥处保存。','与抗凝药合用增强抗凝效果；与甲氨蝶呤合用可增加后者毒性；与苯巴比妥合用可降低甲砜霉素血药浓度。','【药品名称】通用名称：甲砜霉素肠溶片
【适应症】呼吸/泌尿/肠道感染、伤寒
【特点】氯霉素衍生物——骨髓抑制轻于氯霉素
【用法用量】0.5-1g/d分3-4次
【不良反应】骨髓抑制风险低于氯霉素
【禁忌】孕妇禁用
【注意事项】肠溶片整片吞服不可咀嚼') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d208','注射用氨曲南','ZSYAQN','Aztreonam for Injection','抗微生物药','单环β-内酰胺类','处方药（限制级）',null,'用于G-菌引起的感染，尤其适用于对青霉素类和头孢菌素类过敏的患者。可用于下呼吸道感染（医院获得性肺炎）、腹腔感染、盆腔感染、尿路感染、皮肤软组织感染、败血症。对G+菌和厌氧菌无效（需联合甲硝唑或克林霉素覆盖混合感染）。','对本药过敏者禁用。虽与青霉素交叉过敏风险极低（<1%，因单环结构不同于青霉素和头孢菌素），但有青霉素过敏性休克史者仍需谨慎。','常见：注射部位反应（静脉炎、注射疼痛）、恶心、呕吐、腹泻（伪膜性肠炎罕见）；偶见：皮疹、荨麻疹、肝功能异常（ALT/AST升高）、嗜酸性粒细胞增多；严重：过敏反应（可致过敏性休克——但发生率极低）、艰难梭菌相关性肠炎（罕见）。','成人：1-2g q8-12h 静脉滴注。重症：2g q6h。中重度肾功能不全需调整剂量。儿童：每日90-120mg/kg分3-4次给药。','遮光，密闭保存。配制后溶液室温下可保存48小时，冷藏可保存7天。','与其他β-内酰胺类抗生素联用可有协同作用（如与甲硝唑联用覆盖G-厌氧菌混合感染）；与头孢西丁在体外有协同作用；与青霉素类无交叉过敏，但既往有青霉素过敏史者需观察。','【药品名称】通用名称：注射用氨曲南
【适应症】G-菌感染（青霉素过敏者安全）
【特点】单环β-内酰胺类——与青霉素无交叉过敏
【用法用量】1-2g q8-12h
【不良反应】注射部位反应、轻度胃肠道反应
【禁忌】过敏者禁用
【注意事项】对G+菌和厌氧菌无效——需联合用药') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d209','法罗培南钠片','FLPNNP','Faropenem Sodium Tablets','抗微生物药','青霉烯类','处方药（限制级）',null,'用于敏感菌引起的轻中度感染，包括呼吸道感染（咽炎、扁桃体炎、急性支气管炎、肺炎）、泌尿生殖系统感染、腹腔感染、皮肤软组织感染、牙周感染、中耳炎、鼻窦炎。口服青霉烯类抗生素，对G+菌、G-菌和厌氧菌均有广谱抗菌活性。','对本品或其他β-内酰胺类抗生素过敏者禁用。严重的肾功能不全（肌酐清除率<30ml/min）患者慎用。癫痫患者慎用。','常见：腹泻、恶心、呕吐、腹痛、软便（胃肠道反应发生率较高，约10%）；偶见：皮疹、瘙痒、头痛、头晕、肝功能异常（ALT/AST升高）；严重：过敏反应（过敏性休克）、艰难梭菌相关性腹泻/伪膜性肠炎、惊厥（肾功能不全患者风险增加）。','成人：一般感染150-200mg tid口服，重症可增至300mg tid。儿童：每日10-15mg/kg分3次口服。疗程一般为3-7天。','遮光，密封，在干燥处保存。','与丙磺舒合用可抑制肾小管分泌法罗培南，增加血药浓度；与NSAIDs合用可能增加神经系统毒性（癫痫风险）；与口服避孕药合用可能降低避孕效果。','【药品名称】通用名称：法罗培南钠片
【适应症】呼吸道、泌尿生殖、腹腔等感染
【特点】口服青霉烯类——广谱抗菌
【用法用量】150-200mg tid口服
【不良反应】胃肠道反应发生率较高
【禁忌】β-内酰胺类过敏者禁用
【注意事项】肾功能不全者需调整剂量') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d210','注射用头孢哌酮钠他唑巴坦钠','ZSYTFPNTZB TN','Cefoperazone Sodium and Tazobactam Sodium for Injection','抗微生物药','β-内酰胺酶抑制剂复方','处方药（特殊使用级）','高危','用于产β-内酰胺酶细菌所致的各种感染，包括医院获得性肺炎（HAP）、腹腔感染、败血症、盆腔感染、复杂性尿路感染、胆道感染、皮肤软组织感染。三代头孢头孢哌酮+β-内酰胺酶抑制剂他唑巴坦的复方制剂。','对头孢菌素类或β-内酰胺酶抑制剂过敏者禁用（交叉过敏）。有青霉素过敏性休克史者禁用。严重胆道梗阻者慎用（头孢哌酮主要经胆汁排泄）。','常见：腹泻、恶心、呕吐、注射部位静脉炎、皮疹；偶见：一过性ALT/AST升高、嗜酸性粒细胞增多、凝血功能异常（PT延长——头孢哌酮含NMTT侧链可致低凝血酶原血症）、伪膜性肠炎；严重：过敏反应（过敏性休克）、出血倾向（需补充维生素K）。','成人：2-4g/d（以头孢哌酮计），分2次静脉滴注。重症：8g/d分2次。儿童：每日40-80mg/kg分2-4次。肾功能不全者无需调整头孢哌酮剂量（主要经胆汁排泄），但他唑巴坦需调整。','遮光，密闭，在25℃以下保存。','与酒精合用可致双硫仑样反应（头孢哌酮含NMTT侧链——停药后5天内禁酒！）；与抗凝药（华法林）合用增加出血风险；与氨基糖苷类合用有协同作用但需监测肾毒性。','【药品名称】通用名称：注射用头孢哌酮钠他唑巴坦钠
【适应症】产酶菌引起的各类重症感染
【特殊使用级警示】本品为特殊使用级抗菌药物
【特点】三代头孢+β-内酰胺酶抑制剂复方
【双硫仑样反应警示】服药期间及停药5天内严禁饮酒
【凝血功能异常】需监测PT/INR并补充维生素K
【用法用量】2-4g/d分2次静滴
【禁忌】青霉素过敏性休克史者禁用') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d211','注射用达托霉素','ZSYDTMS','Daptomycin for Injection','抗微生物药','环脂肽类','处方药（特殊使用级）','高危','用于治疗金黄色葡萄球菌血流感染（菌血症）及右侧感染性心内膜炎，以及MRSA、VRE等耐药G+菌引起的复杂性皮肤软组织感染。独特的作用机制——钙依赖性结合细菌细胞膜形成离子通道。','对本药过敏者禁用。不可用于治疗肺炎（被肺表面活性物质灭活——禁用！）。肌酐清除率<30ml/min的患者需减少给药频率。','常见：腹泻、恶心、便秘、头痛、注射部位反应、皮疹；偶见：肝功能异常（ALT/AST升高）、肾功能损害、低血压、关节痛；严重：骨骼肌毒性——肌痛/肌无力/肌酸磷酸激酶（CK）升高（最值得警惕的不良反应！需定期监测CK）、嗜酸性粒细胞肺炎、过敏反应（包括速发过敏反应）、周围神经病变。','成人：菌血症/感染性心内膜炎6mg/kg qd静脉滴注（>30min）。皮肤软组织感染：4mg/kg qd。肾功能不全（CrCl<30ml/min）：q48h给药。','遮光，密闭，冷藏（2-8℃）保存。','与HMG-CoA还原酶抑制剂（他汀类）合用增加骨骼肌毒性风险（建议暂停他汀治疗）；与氨基糖苷类合用有协同作用但需监测肾毒性；与华法林合用需监测INR。','【药品名称】通用名称：注射用达托霉素
【适应症】MRSA/VRE菌血症、感染性心内膜炎、cSSTI
【特殊使用级警示】本品为特殊使用级抗菌药物——高危药品
【重要提示】不可用于治疗肺炎（被肺泡表面活性物质灭活）
【肌肉毒性警示】需每周监测CK——如CK升高>5倍ULN或伴肌痛需停药
【用法用量】4-6mg/kg qd
【禁忌】过敏者禁用；肺炎禁用') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d212','利福平胶囊','LFPJN','Rifampicin Capsules','抗微生物药','利福霉素类','处方药（限制级）',null,'结核病一线治疗（与其他抗结核药联合——从不单用！）。也用于麻风病（联合氨苯砜）、军团菌病、严重MRSA感染的联合治疗、布氏杆菌病（与四环素联用）。脑膜炎奈瑟菌带菌者的清除。','对本药过敏者禁用。严重肝功能不全者禁用。有黄疸病史者慎用。孕妇慎用（FDA妊娠分级C级）。与HIV蛋白酶抑制剂合用需谨慎（CYP3A4强诱导）。','常见：肝功能异常（ALT/AST升高——肝毒性！）、红色-橙色体液变色（尿液、汗液、泪液、痰液——无害但需提前告知患者）、胃肠道反应；偶见：皮疹、发热、流感样综合征（间歇给药时更常见）、血小板减少；严重：肝损伤（严重可致肝坏死——与异烟肼合用风险增高）、急性肾衰竭（罕见）。','结核病：成人450-600mg qd空腹（餐前1小时）口服，体重<50kg为450mg，≥50kg为600mg。儿童：每日10-20mg/kg qd。脑膜炎球菌带菌者：成人600mg qd×4d。','遮光，密封，在干燥处保存。','CYP3A4强诱导剂——影响极多药物代谢！可显著降低华法林、口服避孕药、糖皮质激素、磺脲类降糖药、洋地黄苷、奎尼丁、环孢素、HIV蛋白酶抑制剂等的作用。与异烟肼合用肝毒性增加。与食物同服可降低吸收率。','【药品名称】通用名称：利福平胶囊
【适应症】结核病一线治疗（联合用药）
【警示】CYP3A4强诱导剂——药物相互作用极多！！！
【特点】体液红色-橙色变色（无害，需提前告知患者）
【用法用量】450-600mg qd空腹
【不良反应】肝毒性（与异烟肼联用风险更高）
【禁忌】严重肝病禁用
【注意事项】绝不可单用（迅速耐药）；定期监测肝功能') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d213','利福喷汀胶囊','LFPTPN','Rifapentine Capsules','抗微生物药','利福霉素类','处方药（限制级）',null,'用于结核病的联合治疗（与异烟肼、吡嗪酰胺、乙胺丁醇等联用）。因半衰期长（约14-18小时），可每周1-2次给药——适用于间歇化疗方案和提高患者依从性。不适合用于HIV阳性结核病患者（耐药风险较高）。','对利福霉素类过敏者禁用。严重肝功能不全者禁用。有黄疸病史者慎用。孕妇慎用。','常见：肝功能异常（ALT/AST升高）、血小板减少、白细胞减少、皮疹、食欲减退；偶见：流感样综合征（发热、寒战、头痛、关节痛——间歇给药时更常见）、胃肠道反应、红色-橙色体液变色（尿液、汗液、泪液——无害）；严重：肝损伤、过敏性休克、血小板减少性紫癜。','结核病治疗：成人600mg（体重<50kg时450mg）每周1-2次口服，需空腹服用（餐前1小时或餐后2小时）。整个强化期（2个月）和巩固期配合其他抗结核药使用。','遮光，密封，在干燥处保存。','CYP3A4诱导剂（强于利福平但作用相似）——与利福平相似的药物相互作用谱，降低华法林、口服避孕药、环孢素等药物血药浓度；与食物同服可降低吸收程度。','【药品名称】通用名称：利福喷汀胶囊
【适应症】结核病联合治疗
【特点】长效利福霉素——每周1-2次给药
【用法用量】600mg每周1-2次空腹口服
【不良反应】与利福平类似但频率较低
【禁忌】严重肝病禁用
【注意事项】不可单用（迅速耐药）；定期监测肝功能') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d214','异烟肼片','YYJP','Isoniazid Tablets','抗微生物药','抗分枝杆菌药','处方药（非限制级）',null,'结核病一线首选药物（与利福平、乙胺丁醇、吡嗪酰胺联用）。对细胞内外的结核分枝杆菌均有杀菌作用（是唯一能杀死细胞内结核菌的一线药物）。也用于结核菌素阳性者的预防性治疗。','对本药过敏者禁用。严重肝功能不全者禁用。有急性肝病或严重肝损害病史者禁用。有药物性肝损伤史者慎用。精神疾病（尤其是癫痫）患者慎用。','常见：肝功能异常（ALT/AST升高——肝毒性）、周围神经炎（手足麻木、刺痛——由维生素B6缺乏所致）；偶见：皮疹、发热、关节痛、胃肠道反应；严重：肝损伤（可致死——联合利福平时风险更高）；罕见：粒细胞缺乏、再生障碍性贫血、精神症状（记忆障碍、幻觉）。','结核病治疗：成人5mg/kg qd（最大300mg）空腹口服。结核预防：成人300mg qd×6-9个月。儿童：每日10-15mg/kg（最大300mg）。用药期间需补充维生素B6 25-50mg/d以预防周围神经炎。','遮光，密封，在干燥处保存。','与利福平合用增加肝毒性风险（但为结核标准联合方案）；与苯妥英钠合用可增加苯妥英血药浓度（CYP代谢抑制）；与卡马西平合用可增加毒性；与酒精合用肝毒性显著增加；与食物同服可降低吸收率。','【药品名称】通用名称：异烟肼片
【适应症】结核病一线治疗
【特点】唯一能杀死细胞内结核菌的一线药物
【用法用量】5mg/kg qd（最大300mg）
【不良反应】周围神经炎——需补充维生素B6
【肝毒性警示】联合利福平时肝毒性风险升高
【禁忌】严重肝病禁用
【注意事项】用药期间避免饮酒；定期监测肝功能') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d215','盐酸乙胺丁醇片','YSYADCP','Ethambutol Hydrochloride Tablets','抗微生物药','抗分枝杆菌药','处方药（非限制级）',null,'结核病一线治疗药物（与异烟肼、利福平、吡嗪酰胺联用）。抑制结核分枝杆菌的阿拉伯糖基转移酶，干扰细胞壁合成。对繁殖期结核菌有杀菌作用。','对本药过敏者禁用。有视神经炎病史者禁用。13岁以下儿童不推荐使用（因难以监测视野变化）。严重肾功能不全者慎用（需调整剂量）。','常见：球后视神经炎（剂量相关的主要毒性——表现：视力下降、色觉异常（红绿色辨异常）、视野缩小——发生率随剂量增大，15mg/kg时约1%，25mg/kg时约5%）；偶见：胃肠道不适（恶心、呕吐）、头痛、皮疹、高尿酸血症（引起关节痛——利福平可降低尿酸水平以抵消此效应）；严重：视神经萎缩（不可逆——需及早发现停药）。','结核病：成人15-25mg/kg qd空腹口服（常用剂量为体重50-60kg者0.75-1.0g/d）。肾功能不全需根据CrCl调整给药频率。','遮光，密封，在干燥处保存。','与抗酸药（含氢氧化铝）合用可降低吸收（需间隔2小时）；与酒精合用可影响疗效并增加肝毒性；与利福平合用有协同作用。','【药品名称】通用名称：盐酸乙胺丁醇片
【适应症】结核病一线治疗
【视神经毒性警示】主要毒性——每月检查视力和色觉！如有异常需立即停药
【用法用量】15-25mg/kg qd
【不良反应】球后视神经炎（与剂量相关）、高尿酸血症
【禁忌】视神经炎病史者、13岁以下儿童
【注意事项】治疗期间每月行眼科检查') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d216','吡嗪酰胺片','PZXAP','Pyrazinamide Tablets','抗微生物药','抗分枝杆菌药','处方药（非限制级）',null,'结核病一线治疗药物（与异烟肼、利福平、乙胺丁醇联用）。在酸性环境（巨噬细胞吞噬体）中对结核分枝杆菌有独特的杀菌活性，可杀死吞噬细胞内的结核菌。2个月强化期治疗的必需组分。','对本药过敏者禁用。严重肝病或肝功能不全者禁用。急性痛风患者禁用（因可引起高尿酸血症）。','常见：肝功能异常（ALT/AST升高——肝毒性突出，是本品最严重的不良反应）、关节痛（由高尿酸血症所致——主要影响大脚趾、踝和膝关节）、恶心、呕吐、食欲减退；偶见：皮疹、发热、痛风发作、光敏反应；严重：严重肝损伤（甚至肝坏死，多发生在已有肝病或大剂量使用时）、痛风性肾病。','结核治疗（强化期2个月）：成人每日20-25mg/kg（不超过2g/d）空腹口服。儿童：每日15-30mg/kg（不超过2g/d）。','遮光，密封，在干燥处保存。','与利福平合用增加肝毒性风险（但为标准化疗方案）；与丙磺舒合用可降低肾小管对尿酸的排泄，加重高尿酸血症；与异烟肼合用有协同作用；与食物同服可减轻胃肠道刺激。','【药品名称】通用名称：吡嗪酰胺片
【适应症】结核病一线治疗（强化期必需药物）
【特点】酸性环境中杀菌——杀灭巨噬细胞内结核菌
【肝毒性警示】肝毒性突出——定期监测肝功能
【高尿酸血症】可引起关节痛——监测血清尿酸
【用法用量】20-25mg/kg qd
【禁忌】严重肝病、急性痛风禁用') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d217','利福平异烟肼吡嗪酰胺复方片','LFPYYJPZXAF','Rifampicin-Isoniazid-Pyrazinamide Combination Tablets','抗微生物药','抗分枝杆菌药','处方药（非限制级）',null,'用于结核病初始治疗的强化期（前2个月），为三联固定剂量复合制剂（FDC），包含利福平、异烟肼和吡嗪酰胺。FDC可简化用药方案、减少漏服和剂量错误，提高患者依从性。WHO强烈推荐优先使用抗结核FDC制剂。','对利福平、异烟肼或吡嗪酰胺中任何成分过敏者禁用。严重肝病或急性肝病者禁用。急性痛风患者禁用。严重肾功能不全者慎用。','参见各单药的【不良反应】：利福平——肝毒性、体液红色染色、流感样综合征；异烟肼——肝毒性、周围神经炎（需补充维生素B6）；吡嗪酰胺——肝毒性、高尿酸血症/关节痛。三者联用时肝毒性风险叠加——用药期间需严密监测肝功能。','根据体重组给药方案：30-37kg：利福平300mg+异烟肼200mg+吡嗪酰胺1250mg；38-54kg：利福平450mg+异烟肼300mg+吡嗪酰胺1500mg；55-70kg：利福平600mg+异烟肼400mg+吡嗪酰胺2000mg。每日空腹（餐前1小时）口服，强化期2个月。','遮光，密封，在25℃以下干燥处保存。','参见利福平（CYP3A4强诱导剂——影响极多药物！）、异烟肼（CYP抑制——增加苯妥英、卡马西平的血药浓度）和吡嗪酰胺（高尿酸血症——与利尿剂合用加重）的各相关相互作用。','【药品名称】通用名称：利福平异烟肼吡嗪酰胺复方片
【适应症】结核病强化期治疗（前2个月）
【特点】三联固定剂量复合制剂（FDC）——WHO推荐
【肝毒性叠加警示】三种药物均有肝毒性——强化监测肝功能
【用法用量】空腹按体重组给药
【注意事项】需同时补充维生素B6预防异烟肼周围神经炎；服药期间体重尿/泪液/汗液呈红色（无害）') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d218','对氨基水杨酸异烟肼片','DAJSYSYJP','Isoniazid Aminosalicylate Tablets','抗微生物药','抗分枝杆菌药','处方药（限制级）',null,'用于耐药结核病的二线治疗（尤其适用于对一线抗结核药耐药或不耐受的患者）。异烟肼与对氨基水杨酸的化学结合物，可延缓异烟肼代谢、延长有效血药浓度维持时间，并可能降低异烟肼的乙酰化速率。','对本药中任何成分过敏者禁用。严重肾功能不全者禁用。严重肝功能不全者禁用。癫痫患者慎用。','常见：胃肠道反应（恶心、呕吐、腹痛、腹泻——发生率高于单独使用异烟肼）、肝功能异常、周围神经炎；偶见：甲状腺功能减退（长期使用）、关节痛、皮疹；严重：肝损伤（联合方案中肝毒性风险较高）、粒细胞减少、血小板减少、视神经炎。','成人：每日10-20mg/kg（按异烟肼计），分1-2次口服。常用剂量为300-600mg/d。需联合其他抗结核药物（至少3-4种敏感药联合使用）。','遮光，密封，在干燥处保存。','与苯妥英钠合用可增加苯妥英血药浓度（异烟肼抑制CYP代谢）；与华法林合用增强抗凝效果；与甲状腺素合用需调整甲功药物剂量；与食物同服可减轻胃肠道刺激。','【药品名称】通用名称：对氨基水杨酸异烟肼片
【适应症】耐药结核病二线治疗
【特点】异烟肼与对氨基水杨酸的化学结合物——延缓异烟肼代谢
【用法用量】10-20mg/kg/d
【不良反应】胃肠道反应、周围神经炎
【禁忌】严重肝/肾损伤禁用
【注意事项】需联合其他抗结核药；需补充维生素B6；定期监测肝功能') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d219','注射用拉氧头孢钠','ZSYLYTPN','Latamoxef Sodium for Injection','抗微生物药','头霉素类','处方药（限制级）','高危','用于G-菌（包括产ESBL的肠杆菌科细菌）和厌氧菌引起的各类重症感染，包括呼吸系统感染、腹腔感染、盆腔感染、胰腺炎、胆道感染、败血症、腹膜炎、复杂尿路感染等。属于氧头孢烯类，结构与头孢菌素类似但抗菌谱更广（覆盖厌氧菌）。','对本品过敏者禁用（与头孢菌素有交叉过敏风险）。有青霉素过敏性休克史者禁用。有出血倾向者慎用。','常见：注射部位静脉炎、恶心、腹泻；偶见：皮疹、荨麻疹、肝功能异常；严重：凝血功能异常——出血倾向（含NMTT侧链，可致低凝血酶原血症，需补充维生素K）、伪膜性肠炎、过敏反应（过敏性休克）。','成人：1-2g/d分2次静脉滴注。重症：4g/d分2-4次。儿童：每日40-80mg/kg分2-4次。','遮光，密闭，在25℃以下保存。','与酒精合用可致双硫仑样反应（NMTT侧链——停药后5天内禁酒）；与抗凝药（华法林、肝素）合用增加出血风险；与氨基糖苷类合用有协同作用但需监测肾毒性；与利尿剂合用增加肾毒性。','【药品名称】通用名称：注射用拉氧头孢钠
【适应症】G-菌和厌氧菌重症感染
【高危警示】本品为高危药品——含NMTT侧链
【出血风险警示】可致低凝血酶原血症——需补充维生素K、监测凝血功能
【双硫仑样反应】服药期间及停药5天内禁酒
【特点】氧头孢烯类——广谱覆盖G-菌+厌氧菌
【用法用量】1-2g/d
【禁忌】青霉素过敏性休克史者禁用') on conflict (id) do nothing;
insert into drugs(id,name,py,en,category,subcategory,type,tag,indications,contraindications,adverse,dosage,storage,interactions,label) values('d220','注射用奎奴普丁/达福普汀','ZSYKNPDDFPT','Quinupristin/Dalfopristin for Injection','抗微生物药','链阳菌素类','处方药（特殊使用级）','高危','用于耐万古霉素的粪肠球菌（VRE）引起的感染以及MRSA、耐大环内酯类肺炎链球菌引起的复杂皮肤软组织感染（cSSTI）。两种链阳菌素（奎奴普丁+达福普汀=30:70）协同抑制细菌蛋白质合成（结合50S核糖体亚基的不同位点）。','对本药过敏者禁用。与CYP3A4底物药物合用需谨慎（奎奴普丁/达福普汀为CYP3A4抑制剂）。严重肝功能不全者慎用。','常见：静脉炎和注射部位疼痛（发生率较高——常需通过中心静脉导管给药）、恶心、呕吐、腹泻、关节痛/肌痛；偶见：皮疹、头痛、肝功能异常（胆红素升高）；严重：关节痛/肌痛（可致严重肌肉骨骼不适，是停药常见原因）、伪膜性肠炎、全血细胞减少（罕见）。','成人：7.5mg/kg q8h静脉滴注（>60分钟），经中心静脉导管给药因外周静脉刺激性大。肾功能不全者无需调整剂量。肝功能不全者需谨慎。','遮光，密闭，冷藏（2-8℃）保存。','CYP3A4抑制剂——可升高环孢素、咪达唑仑、硝苯地平、他克莫司等CYP3A4底物的血药浓度；与华法林合用需监测INR；与CYP3A4诱导剂合用可能降低奎奴普丁/达福普汀血药浓度。','【药品名称】通用名称：注射用奎奴普丁/达福普汀
【适应症】VRE（粪肠球菌）、MRSA、cSSTI
【特殊使用级警示】本品为特殊使用级抗菌药物——高危药品
【特点】两种链阳菌素协同作用——30:70联合制剂
【用法用量】7.5mg/kg q8h经中心静脉导管给药
【不良反应】注射部位静脉炎/疼痛常见；关节痛/肌痛为停药常见原因
【禁忌】过敏者禁用
【注意事项】CYP3A4抑制剂——注意药物相互作用') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds001','社区获得性肺炎','呼吸系统疾病','SQHDXFY','社区环境中感染的肺实质炎症。常见病原体：肺炎链球菌、流感嗜血杆菌、肺炎支原体等。','发热、咳嗽、咳痰、胸痛、呼吸困难。','胸部X线/CT显示浸润影 + 临床症状。','经验性抗感染治疗为主，根据CURB-65评分决定治疗场所。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds002','COPD','呼吸系统疾病','COPD','慢性阻塞性肺疾病，以持续气流受限为特征的常见呼吸系统疾病。主要病因：吸烟、空气污染。','慢性咳嗽、咳痰、进行性呼吸困难。','肺功能FEV1/FVC<0.7。','戒烟+支气管扩张剂（LABA/LAMA）+吸入激素（频繁急性加重者）。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds003','支气管哮喘','呼吸系统疾病','ZQGXC','以慢性气道炎症为特征的异质性疾病。特征：可变性气流受限。','反复发作性喘息、胸闷、咳嗽。','可变气流受限证据+典型症状。','按GINA阶梯方案，ICS为基础控制药物。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds004','高血压','心血管疾病','GXY','动脉血压持续升高的慢性疾病。诊断标准：非同日3次SBP≥140和/或DBP≥90mmHg。','多数无症状，部分头晕、头痛。','非同日多次测量血压升高。','生活方式干预+五大类降压药。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds005','心力衰竭','心血管疾病','XLSJ','各种心脏结构/功能异常导致心室充盈或射血能力受损的临床综合征。','呼吸困难、乏力、水肿。','BNP/NT-proBNP升高+心脏超声LVEF评估。','新四联：ARNI+β-blocker+MRA+SGLT2i。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds006','冠心病','心血管疾病','GXB','冠状动脉粥样硬化导致管腔狭窄或阻塞，心肌缺血缺氧。','胸痛（压榨性）、放射至左肩。','心电图+心肌酶+冠脉造影。','抗血小板+他汀+β-blocker±血运重建。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds007','胃溃疡','消化系统疾病','WKY','胃黏膜缺损深度超过黏膜肌层的慢性溃疡。Hp感染和NSAIDs为主要病因。','上腹痛（餐后加重）、反酸。','胃镜+病理+Hp检测。','根除Hp+PPI+胃黏膜保护剂。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds008','反流性食管炎','消化系统疾病','FLXSGY','胃内容物反流至食管引起的食管黏膜损伤。','烧心、反酸、胸骨后疼痛。','胃镜检查。','PPI为主，疗程4-8周。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds009','2型糖尿病','内分泌疾病','XTNB','胰岛素抵抗和/或分泌不足导致的慢性高血糖。','多饮、多尿、多食、体重减轻。','FBG≥7.0或OGTT 2h≥11.1或HbA1c≥6.5%。','二甲双胍为基础，逐步升级治疗。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds010','痛风','内分泌疾病','TF','嘌呤代谢紊乱致高尿酸血症，尿酸盐结晶沉积引起的关节炎。','急性关节炎（常首发第一跖趾关节）。','高尿酸血症+典型关节炎+关节液尿酸盐结晶。','急性期NSAIDs/秋水仙碱，缓解期降尿酸。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds011','甲亢','内分泌疾病','JK','甲状腺激素分泌过多。最常见：Graves病。','心悸、多汗、手抖、消瘦。','TSH↓ + FT3/FT4↑。','抗甲状腺药物±放射性碘或手术。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds012','癫痫','神经系统疾病','DX','大脑神经元异常同步放电导致的反复发作性疾病。','突发意识障碍、肢体抽搐等。','临床发作特点+脑电图。','抗癫痫药物，部分可手术。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds013','脑卒中','神经系统疾病','NZZ','急性脑血管病，分为缺血性（约80%）和出血性。','突发面部不对称、单侧肢体无力。','头颅CT/MRI。','溶栓/取栓+抗血小板+危险因素控制。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds014','肝硬化','消化系统疾病','GYH','慢性肝损伤导致肝纤维化和假小叶形成的终末期肝病。','乏力、黄疸、腹水、肝掌。','影像学+肝功能+肝弹性检测。','病因治疗+并发症管理+肝移植评估。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds015','尿路感染','泌尿系统疾病','NLGR','病原微生物侵入尿路上皮引起的炎症反应。','尿频、尿急、尿痛，可伴发热。','尿常规+尿培养。','抗生素（呋喃妥因/头孢类/喹诺酮类）。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds016','心房颤动','心血管疾病','XFCD','最常见的心律失常，心房失去有效收缩。','心悸、胸闷、头晕，部分无症状。','心电图+Holter。','抗凝（DOAC/华法林）+ 心率/节律控制（β阻滞剂/胺碘酮）。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds017','心肌梗死','心血管疾病','XJGS','冠状动脉急性闭塞导致心肌缺血坏死。','胸痛>20min、出汗、放射至左肩/下颌。','心电图ST段抬高+肌钙蛋白升高。','急诊PCI+双联抗血小板+他汀+β阻滞剂。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds018','高脂血症','心血管疾病','GZXZ','血液中脂质（胆固醇、甘油三酯）水平异常升高。','多数无症状。','TC≥5.2或LDL-C≥3.4或TG≥1.7。','他汀为基础，依折麦布/PCSK9i补充。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds019','肺结核','呼吸系统疾病','FJH','结核分枝杆菌引起的慢性传染病。','咳嗽≥2周、咯血、午后低热、盗汗、消瘦。','痰涂片/培养+胸部X线+PPD/IGRA。','2HRZE/4HR方案（异烟肼+利福平+吡嗪酰胺+乙胺丁醇）。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds020','肺栓塞','呼吸系统疾病','FSS','内源性或外源性栓子阻塞肺动脉。','突发呼吸困难、胸痛、咯血。','CTPA+D-二聚体。','抗凝（DOAC/低分子肝素→华法林），高危者溶栓。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds021','胰腺炎','消化系统疾病','YXY','胰腺的急性炎症反应。','持续性上腹痛、向背部放射、恶心呕吐。','血淀粉酶/脂肪酶≥3倍正常值+CT。','禁食+补液+镇痛+营养支持。胆源性者ERCP。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds022','炎症性肠病','消化系统疾病','YZXCB','包括克罗恩病和溃疡性结肠炎的慢性肠道炎症。','腹泻、腹痛、便血、体重下降。','结肠镜+病理。','5-ASA/激素/免疫抑制剂/生物制剂。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds023','甲减','内分泌疾病','JJ','甲状腺激素分泌不足。','乏力、怕冷、体重增加、便秘、记忆力减退。','TSH↑ + FT4↓。','左甲状腺素替代治疗（清晨空腹）。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds024','高尿酸血症','内分泌疾病','GNSXZ','嘌呤代谢异常致血尿酸>420μmol/L。','多数无症状，部分进展为痛风。','非同日2次空腹SUA>420。','生活干预（低嘌呤饮食+多饮水）+ 别嘌醇/非布司他/苯溴马隆。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds025','骨质疏松','内分泌疾病','GZSS','骨密度下降、骨微结构破坏。','疼痛、身高变矮、驼背、易骨折。','DXA骨密度T值≤-2.5。','钙+VD+双膦酸盐/地舒单抗/特立帕肽。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds026','帕金森病','神经系统疾病','PJSB','黑质多巴胺神经元变性死亡。','静止性震颤、肌强直、运动迟缓、姿势步态异常。','临床表现为主。','左旋多巴/多巴胺受体激动剂（普拉克索）/MAO-B抑制剂。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds027','偏头痛','神经系统疾病','PTT','反复发作的中重度搏动性头痛。','单侧搏动性头痛、畏光畏声、恶心。','临床诊断（至少5次发作符合标准）。','急性期：NSAIDs/曲普坦。预防：普萘洛尔/托吡酯/肉毒素。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds028','阿尔茨海默病','神经系统疾病','AECHMB','进行性认知功能障碍和行为损害。','近记忆减退→语言障碍→定向力障碍→人格改变。','认知量表+影像+排除其他原因。','胆碱酯酶抑制剂（多奈哌齐）+NMDA拮抗剂（美金刚）。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds029','慢性肾病','泌尿系统疾病','MXSB','肾脏结构或功能异常≥3个月。','早期无症状→乏力、水肿、高血压、贫血。','eGFR<60或蛋白尿≥3个月。','控制血压（ACEI/ARB）+控糖+SGLT2i+低蛋白饮食。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds030','肾结石','泌尿系统疾病','SJS','尿中晶体物质过饱和析出形成结石。','肾绞痛、血尿、恶心呕吐。','B超/CT。','<5mm保守排石（多饮水+α阻滞剂）；>10mm体外碎石/内镜取石。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds031','妊娠期高血压','妇产科疾病','RSQGXY','妊娠20周后出现的血压升高。','高血压±蛋白尿±水肿。','BP≥140/90mmHg（妊娠20周后）。','拉贝洛尔/硝苯地平/甲基多巴，硫酸镁防子痫。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds032','月经失调','妇产科疾病','YJSD','月经周期、经期或经量异常。','周期<21或>35天，经量过多/过少。','病史+妇科检查+激素六项+B超。','根据病因：激素调节/调经/手术治疗。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds033','青光眼','五官科疾病','QGY','眼压升高导致视神经损伤。','早期无症状→视野缺损→视力下降。','眼压测量+眼底检查+视野检查。','降眼压药（噻吗洛尔/拉坦前列素/布林佐胺）+手术。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds034','中耳炎','五官科疾病','ZEY','中耳黏膜的急性或慢性炎症。','耳痛、听力下降、耳闷胀感，小儿可伴发热。','耳镜检查鼓膜充血/穿孔。','抗生素（阿莫西林/头孢类）+对症止痛。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds035','湿疹','皮肤疾病','SZ','多种内外因素引起的表皮及真皮浅层炎症。','多形性皮损（红斑、丘疹、水疱）+剧烈瘙痒。','临床表现+排除接触性皮炎等。','保湿+外用激素/钙调磷酸酶抑制剂±口服抗组胺药。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds036','银屑病','皮肤疾病','YXB','以红斑鳞屑为特征的慢性炎症性皮肤病。','边界清楚的红斑+银白色鳞屑+点状出血。','临床表现+皮肤镜/病理。','外用激素/维生素D3衍生物+光疗+系统用药（MTX/环孢素/生物制剂）。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds037','胃癌','肿瘤疾病','WA','胃黏膜上皮细胞的恶性肿瘤。','上腹痛、食欲减退、消瘦、黑便。','胃镜+病理活检。','手术+化疗+靶向（HER2阳性者曲妥珠单抗）+免疫治疗。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds038','结直肠癌','肿瘤疾病','JZCA','结肠或直肠黏膜上皮的恶性肿瘤。','排便习惯改变、便血、腹痛、消瘦。','结肠镜+病理+CT分期。','手术+化疗（FOLFOX/FOLFIRI）±靶向（贝伐珠单抗/西妥昔单抗）。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds039','乳腺癌','肿瘤疾病','RXA','乳腺导管或小叶上皮的恶性肿瘤。','乳房无痛性肿块、皮肤凹陷/橘皮样变。','乳腺B超+钼靶+穿刺活检。','手术+化疗+放疗+内分泌治疗（ER/PR+）+靶向（HER2+）。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds040','缺铁性贫血','血液系统疾病','QTXPX','体内铁储备不足导致血红蛋白合成减少。','乏力、头晕、苍白、异食癖。','Hb↓+血清铁↓+铁蛋白↓。','口服铁剂（琥珀酸亚铁）+VC同服促吸收+病因治疗。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds041','大叶性肺炎','呼吸系统疾病','DY','肺炎链球菌等引起的肺大叶急性炎症。','寒战、高热、咳嗽、铁锈色痰、胸痛。','胸部X线大片实变影+血象升高。','青霉素类/头孢类抗感染+对症支持。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds042','稳定型心绞痛','心血管疾病','WD','冠状动脉固定狭窄导致心肌暂时缺血。','劳累后胸骨后压榨样痛，休息/硝酸甘油缓解。','心电图+冠脉CTA/造影。','抗血小板+β阻滞剂+他汀+硝酸酯类。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds043','风湿性心瓣膜病','心血管疾病','FS','风湿热导致心脏瓣膜永久性结构损害。','心悸、气短、心衰症状。','心脏超声。','预防风湿热复发（青霉素）+抗凝+瓣膜置换。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds044','感染性心内膜炎','心血管疾病','GR','病原微生物感染心内膜和瓣膜。','发热、心脏杂音、栓塞表现。','血培养+Duke标准+心脏超声。','长程杀菌性抗生素+必要时手术。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds045','支气管扩张症','呼吸系统疾病','ZQ','支气管壁破坏导致不可逆性扩张。','慢性咳嗽、大量脓痰、反复咯血。','高分辨率CT(HRCT)。','气道清洁+抗感染+止血+必要时手术。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds046','间质性肺病','呼吸系统疾病','JJ','肺泡壁和周围组织的弥漫性炎症和纤维化。','进行性呼吸困难、干咳、杵状指。','高分辨率CT+肺功能+肺活检。','激素/免疫抑制剂+抗纤维化+氧疗。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds047','胃食管反流病','消化系统疾病','WS','胃内容物反流入食管引起症状。','反酸、烧心、胸骨后烧灼感。','PPI试验性治疗+胃镜。','PPI标准剂量+促动力药+生活干预。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds048','功能性消化不良','消化系统疾病','GN','无器质性病变的持续性上消化道症状。','餐后饱胀、早饱、上腹痛。','胃镜排除器质性疾病。','促动力药±PPI+心理干预。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds049','胆囊炎','消化系统疾病','DN','胆囊的急性或慢性炎症。','右上腹痛、发热、Murphy征阳性。','B超+血象。','禁食+抗生素+止痛，必要时手术切除。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds050','胆石症','消化系统疾病','DS','胆道系统内形成结石。','右上腹痛、黄疸、发热。','B超/CT。','无症状观察+有症状腹腔镜胆囊切除。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds051','急性肾损伤','泌尿系统疾病','JX','短时间内肾功能急剧下降。','少尿、水肿、血肌酐升高。','血肌酐↑+尿量↓。','停肾毒性药物+补液+病因治疗+透析。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds052','肾病综合征','泌尿系统疾病','SB','大量蛋白尿导致低蛋白血症和水肿。','大量泡沫尿、水肿、高血脂。','尿蛋白>3.5g/d+血白蛋白<30g/L。','激素/免疫抑制剂+ACEI/ARB+利尿剂。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds053','前列腺增生','泌尿系统疾病','QL','前列腺良性增生导致尿道梗阻。','排尿困难、夜尿增多、尿线变细。','直肠指检+B超+PSA。','α阻滞剂+5α还原酶抑制剂±手术。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds054','甲状腺功能亢进','内分泌疾病','JZ','甲状腺激素分泌过多。','怕热、多汗、心悸、消瘦、手抖。','TSH↓+FT3/FT4↑。','甲巯咪唑/丙硫氧嘧啶+放射性碘+手术。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds055','库欣综合征','内分泌疾病','KX','长期糖皮质激素过多。','向心性肥胖、满月脸、紫纹、高血压。','深夜唾液皮质醇+小剂量地塞米松抑制试验。','手术切除病因+药物(酮康唑/美替拉酮)。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds056','代谢综合征','内分泌疾病','DX','多种代谢异常聚集的症候群。','腹型肥胖+高血压+高血糖+高血脂。','中心性肥胖+任意2项异常。','生活方式干预+全面控制各组分。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds057','癫痫','神经系统疾病','DX','大脑神经元异常放电导致反复发作。','意识丧失、四肢抽搐、口吐白沫。','临床发作+脑电图。','抗癫痫药（丙戊酸钠/卡马西平/左乙拉西坦）。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds058','脑出血','神经系统疾病','NC','脑实质内血管破裂出血。','突发剧烈头痛、呕吐、意识障碍。','头颅CT高密度影。','降压+止血+脱水降颅压±手术。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds059','重症肌无力','神经系统疾病','ZZ','神经肌肉接头传递障碍的自身免疫病。','波动性肌无力，晨轻暮重。','疲劳试验+新斯的明试验+抗体检测。','胆碱酯酶抑制剂+免疫抑制±胸腺切除。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds060','流行性感冒','感染性疾病','LX','流感病毒引起的急性呼吸道传染病。','突发高热、全身酸痛、乏力、干咳。','流感抗原检测+PCR。','奥司他韦/扎那米韦（48h内）+对症。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds061','带状疱疹','感染性疾病','DZ','水痘-带状疱疹病毒再激活。','沿神经分布的簇集水疱+剧痛。','临床表现。','阿昔洛韦/伐昔洛韦+镇痛+神经营养。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds062','泌尿系感染','感染性疾病','MN','泌尿系统各部位的感染性疾病。','尿频、尿急、尿痛、排尿困难。','尿常规+尿培养。','抗生素（呋喃妥因/头孢类/喹诺酮类）。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds063','感染性腹泻','感染性疾病','GR','病原微生物引起的腹泻。','腹泻、呕吐、腹痛、发热。','便常规+便培养。','补液+益生菌+必要时抗生素/蒙脱石。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds064','带状疱疹后遗神经痛','皮肤疾病','DZ','带状疱疹皮损愈合后持续神经痛。','烧灼样、针刺样持续性疼痛。','疱疹病史+神经体检。','加巴喷丁/普瑞巴林+利多卡因贴片+TCA。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds065','真菌性皮肤病','皮肤疾病','ZJ','皮肤癣菌和酵母菌感染。','环形红斑、脱屑、瘙痒。','真菌镜检+培养。','外用抗真菌药（克霉唑/特比萘芬）±口服。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds066','类风湿关节炎','风湿免疫疾病','LF','以滑膜炎为特征的慢性自身免疫病。','对称性小关节肿痛、晨僵>30min。','RF/抗CCP抗体+影像学。','DMARDs（甲氨蝶呤为基础）+生物制剂。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds067','系统性红斑狼疮','风湿免疫疾病','XT','多系统受累的自身免疫病。','面颊蝶形红斑、关节痛、多系统损害。','ANA+抗dsDNA抗体+临床表现。','激素+免疫抑制剂±生物制剂。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds068','强直性脊柱炎','风湿免疫疾病','QZ','以骶髂关节和脊柱附着点炎为主的慢性炎症。','炎性腰痛（休息加重、活动减轻）。','骶髂关节MRI/CT+HLA-B27。','NSAIDs+TNFi/IL-17i+康复锻炼。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds069','干燥综合征','风湿免疫疾病','GZ','以外分泌腺受损为特征的自身免疫病。','口干、眼干、反复腮腺肿大。','抗SSA/SSB抗体+唇腺活检。','人工泪液/唾液+羟氯喹±免疫抑制。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds070','肺癌','肿瘤疾病','FA','支气管黏膜上皮细胞的恶性肿瘤。','咳嗽、咯血、胸痛、消瘦。','胸部CT+支气管镜+病理。','手术+化疗（培美曲塞/紫杉醇）+靶向+免疫。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds071','肝癌','肿瘤疾病','GA','肝细胞或胆管细胞的恶性肿瘤。','肝区痛、黄疸、腹水、消瘦。','AFP+B超/CT/MRI+病理。','手术+TACE+靶向（索拉非尼/仑伐替尼）+免疫。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds072','前列腺癌','肿瘤疾病','QL','前列腺上皮细胞的恶性肿瘤。','排尿困难、血尿、晚期骨痛。','PSA+直肠指检+活检。','手术+内分泌治疗+放疗。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds073','再生障碍性贫血','血液系统疾病','ZS','骨髓造血功能衰竭综合征。','贫血、出血、感染。','全血细胞减少+骨髓增生低下。','免疫抑制治疗+造血刺激因子±干细胞移植。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds074','白血病','血液系统疾病','BX','造血干细胞的恶性克隆性疾病。','发热、贫血、出血、骨痛。','血象+骨髓穿刺+流式细胞术。','化疗±靶向治疗±干细胞移植。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds075','多囊卵巢综合征','妇产科疾病','DN','以排卵障碍和高雄激素为特征的内分泌紊乱。','月经稀发、多毛、痤疮、不孕。','月经异常+高雄激素血症+B超。','生活方式干预+二甲双胍+口服避孕药。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds076','子宫内膜异位症','妇产科疾病','ZG','子宫内膜异位种植于子宫外。','痛经、性交痛、不孕。','腹腔镜+病理。','NSAIDs+激素治疗±手术。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds077','宫颈癌','妇产科疾病','GJ','宫颈上皮细胞的恶性肿瘤。','接触性出血、异常阴道流血。','宫颈细胞学+HPV检测+阴道镜活检。','手术+放疗+化疗。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds078','勃起功能障碍','男科疾病','BQ','阴茎持续不能达到或维持充分勃起。','勃起困难。','病史+IIEF-5评分。','PDE5i（西地那非/他达拉非）+病因治疗。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds079','男性不育症','男科疾病','NX','婚后1年未避孕未能使配偶妊娠。','无自觉症状。','精液分析+激素检测。','病因治疗+辅助生殖技术。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds080','抑郁症','精神心理疾病','YY','持续情绪低落和兴趣减退的心境障碍。','情绪低落、兴趣丧失、自责、睡眠障碍≥2周。','ICD-10/DSM-5标准。','SSRI/SNRI+心理治疗。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds081','焦虑障碍','精神心理疾病','JL','过度担心和紧张的心理障碍。','过度担忧、紧张不安、心悸、失眠。','临床评估+HAMA量表。','SSRI/SNRI+CBT+苯二氮䓬类短期使用。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds082','失眠障碍','精神心理疾病','SM','持续入睡困难或睡眠维持困难。','入睡困难、易醒、早醒≥3次/周。','临床评估+睡眠日记。','CBT-I+必要时佐匹克隆/曲唑酮。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds083','白内障','眼科疾病','BN','晶状体透明度下降或混浊。','渐进性无痛性视力下降。','裂隙灯检查。','白内障超声乳化+人工晶体植入。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds084','糖尿病视网膜病变','眼科疾病','TN','糖尿病导致的视网膜微血管病变。','视物模糊、视野缺损。','眼底检查+荧光血管造影。','严格控糖+激光光凝±抗VEGF注射。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds085','过敏性鼻炎','耳鼻喉疾病','GM','特定过敏原引起的I型变态反应。','阵发性喷嚏、清水样涕、鼻痒、鼻塞。','症状+过敏原检测。','鼻用激素+口服抗组胺药+免疫治疗。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds086','慢性鼻窦炎','耳鼻喉疾病','MX','鼻窦黏膜持续超过12周的炎症。','鼻塞、脓涕、面部胀痛、嗅觉减退。','鼻内镜+CT。','鼻用激素+生理盐水冲洗±抗生素±手术。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds087','小儿肺炎','儿科疾病','XE','小儿肺实质急性炎症。','发热、咳嗽、气促、鼻翼煽动。','胸部X线+血象。','抗感染（青霉素/头孢/大环内酯）+对症。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds088','小儿腹泻','儿科疾病','XE','多种原因引起的小儿排便异常。','大便次数增多、性状改变。','便常规。','补液（ORS）+益生菌+蒙脱石±补锌。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds089','过敏性休克','急诊疾病','GM','严重速发型过敏反应导致的休克。','血压下降、呼吸困难、皮疹、意识障碍。','接触过敏原后快速出现的临床表现。','肾上腺素0.3-0.5mg im +补液+激素+抗组胺。') on conflict (id) do nothing;
insert into diseases(id,name,cat,py,desc,symptoms,diagnosis,treatment) values('ds090','脓毒症','急诊疾病','ND','感染引起失调的宿主反应导致器官功能障碍。','发热/低体温、心率加快、低血压。','SOFA评分≥2+感染证据。','1h内广谱抗生素+液体复苏+血管活性药。') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g001','中国高血压防治指南 2024','心血管系统','2024','ZGGXYFZZN','一、诊断标准
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
推荐五大类降压药：ACEI/ARB、CCB、利尿剂、β受体阻滞剂。初始治疗可单药或联合用药。联合方案推荐：ACEI/ARB + CCB + 利尿剂。',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g002','心力衰竭诊疗指南 2023','心血管系统','2023','XLSJZLZN','一、分类
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
尽早启动四联药物，逐步滴定至靶剂量。定期监测肾功能、电解质、血压、心率。',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g003','中国血脂管理指南 2023','心血管系统','2023','ZGXZGLZN','一、血脂检测
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
• 高甘油三酯可选用非诺贝特',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g004','抗血小板治疗中国专家共识','心血管系统','2022','KXXBZLZGZJGS','一、急性冠脉综合征（ACS）
• 双联抗血小板（DAPT）：阿司匹林+P2Y12抑制剂
• 稳定型冠心病：阿司匹林单药
• DAPT疗程：一般12个月，高出血风险缩短至3-6个月

二、药物选择
• 阿司匹林：负荷量300mg，维持量100mg qd
• 氯吡格雷：负荷量300-600mg，维持量75mg qd
• 替格瑞洛：负荷量180mg，维持量90mg bid

三、出血风险管理
• 评估CRUSADE评分
• 联合PPI降低消化道出血风险',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g005','社区获得性肺炎诊治指南','呼吸系统','2023','SQHDXFYZZZN','一、诊断标准
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
• ICU：抗假单胞菌β内酰胺+阿奇霉素或呼吸喹诺酮',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g006','COPD诊治指南 2024','呼吸系统','2024','COPDZZZN','一、诊断标准
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
• 急性加重：短效支扩剂+SABA/SAMA雾化，必要时全身糖皮质激素+抗生素

四、COPD筛查自评量表（总分>16分建议进一步检查）

年龄                 40~49岁: 0分  50~59岁: 3分  60~69岁: 7分  ≥70岁: 10分
吸烟量(包年)         0~14包年: 0分  15~30包年: 1分  ≥30包年: 2分
BMI(kg/m²)           <18.5: 7分  18.5~23.9: 4分  24~27.9: 1分  ≥28: 0分
无感冒时经常咳嗽？   是: 3分  否: 0分
平时感觉气促？       无: 0分  急行/爬坡时: 2分  平地行走时: 3分
使用煤炉柴草？       是: 1分  否: 0分
亲属有哮喘/慢支？    是: 2分  否: 0分',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g007','支气管哮喘防治指南','呼吸系统','2023','ZQGXCFZZN','一、诊断
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
• 危重：评估呼吸衰竭',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g008','消化性溃疡诊疗规范','消化系统','2022','XHXKYZLGF','一、病因
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
• 根除Hp后继续PPI至溃疡愈合',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g009','中国2型糖尿病防治指南','内分泌系统','2024','ZGXTNBFZZN','一、诊断标准
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
• 二联/三联/胰岛素逐步升级',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g010','痛风诊疗指南','内分泌系统','2023','TFZLZN','一、诊断
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
• 急性期不启动降尿酸治疗，已使用者不中断',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g011','质子泵抑制剂临床应用指南','消化系统','2024','ZZBYZJLCYYZN','一、常用PPI
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
• 长期使用者建议逐步减量：减量50%/周至停药，防反跳性胃酸高分泌',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g012','围手术期抗菌药物预防指南','抗感染','2024','WSSQKJYWYFZN','一、基本原则
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
• 不必要的联合用药',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g013','华法林抗凝治疗中国专家共识','血液系统','2024','HFLKNZLZGZJGS','一、适应证
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
• 高血栓风险：停华法林→低分子肝素桥接',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g014','慢性疼痛药物治疗指南','神经系统','2024','MXTTYWZLZN','一、WHO三阶梯止痛
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
• 骨转移痛：阿片类+NSAIDs+放疗',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g015','Hp根除治疗全国专家共识','消化系统','2024','HPGCZLQGZJGS','一、根除适应证
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
• 二线仍失败→药敏试验指导',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g016','骨质疏松诊疗指南','内分泌系统','2024','GZSSZLZN','一、诊断标准
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
• 每年复查骨密度',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g017','心房颤动抗凝治疗指南','心血管系统','2024','XFCDKNZLZN','一、卒中风险评估 CHA2DS2-VASc
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
• 颅内出血后：多学科评估是否重启抗凝',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g018','肾性贫血诊疗指南','血液系统','2024','SXPXZLZN','一、诊断标准
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
罗沙司他：起始70-100mg tiw（非透析）/ 100-120mg tiw（透析），根据Hb调整',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g019','化疗止吐指南','抗肿瘤','2024','HLZTZN','一、化疗致吐风险分级
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
甲氧氯普胺：10-20mg q6h（仅用于低致吐或补救）',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g020','糖皮质激素临床应用指导原则','内分泌系统','2024','TPZJSLCYYZDYZ','一、常用制剂与等效剂量
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
处理：减慢减量速度，回到上一有效剂量',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g021','碳青霉烯类抗菌药物临床应用专家共识','抗感染','2023','TQMXLKJYWLCYYZJGS','一、代表药物
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
• 疗程一般7-14天',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g022','喹诺酮类抗菌药物临床应用指导意见','抗感染','2023','KNTLKJYWLCYYZDYJ','一、分类
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
• 与华法林合用增强抗凝',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g023','β-内酰胺类抗菌药物皮肤试验指导原则','抗感染','2021','ΒNXALKJYWPFSYZDYZ','一、青霉素皮试
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
• 备好肾上腺素等急救药品和设备',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g024','中国心力衰竭诊断和治疗指南','心血管系统','2024','ZGXLSJZDHZLZN','一、分类与诊断
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
• CRT：LBBB QRS≥150ms + LVEF≤35%',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g025','抗血栓药物围手术期管理专家共识','血液系统','2020','KXSYWWSSQGLZJGS','一、抗血小板药
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
• 利伐沙班/阿哌沙班：andexanet alfa（如有）或PCC',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g026','卒中二级预防抗血小板治疗指南','神经系统','2024','ZZEJYFKXXBZLZN','一、缺血性卒中/TIA
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
• 戒烟、限酒、减重、运动',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g027','非酒精性脂肪性肝病诊疗指南','消化系统','2024','FJJXZFXGBZLZN','一、诊断标准
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
• UDCA：证据不足，不常规推荐',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g028','慢性乙型肝炎防治指南','消化系统','2024','MXYXGYFZZN','一、治疗指征
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
肝硬化：不轻易停药',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g029','维生素D及其类似物临床应用共识','内分泌系统','2024','WSSDJQLSWLCYYGS','一、维生素D检测
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
• 中毒表现：高钙血症、高钙尿症、肾钙化',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g030','静脉血栓栓塞症防治指南','呼吸系统','2024','JMXSSSZFZZN','一、VTE风险评估（Padua评分）
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
DVT（髂股静脉+症状<14天+低出血风险）：导管溶栓',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g031','直接口服抗凝药临床合理应用指南','血液系统','2024','ZJKFKNYLCHLYYZN','一、DOACs分类与特点
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
机械瓣（华法林唯一选择）、抗磷脂综合征、严重肾功能不全（CrCl<15）、妊娠哺乳',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g032','抗血小板药物临床应用中国专家共识','血液系统','2024','KXXBYWLCYYZGZJGS','一、常用抗血小板药
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
避免合用NSAIDs和糖皮质激素',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g033','口服降糖药物临床应用专家共识','内分泌系统','2024','KFJTYWLCYYZJGS','一、药物分类
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
磺脲类：格列喹酮可用于CKD（几乎不肾排泄）',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g034','化疗药物临床应用管理规范','抗肿瘤','2024','HLYWLCYYGLGF','一、细胞毒性化疗药
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
胃癌：SOX（替吉奥+奥沙利铂）/ XELOX（卡培他滨+奥沙利铂）',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g035','原发性肝癌诊疗指南（2026年版）','肿瘤','2026',null,'【筛查】高危人群（乙肝/丙肝/肝硬化/AFU异常）每6个月超声+AFP
【诊断】增强CT/MRI典型表现：动脉期强化+门脉期/延迟期洗脱
【分期】CNLC Ia-IV期，结合肝功能Child-Pugh
【治疗】早期：手术切除/消融/移植；中期：TACE；晚期：靶向（仑伐替尼/索拉非尼）+免疫（PD-1/PD-L1）
【随访】术后每3个月复查影像+AFP',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g036','中国淋巴瘤诊疗指南（2026版）','肿瘤','2026',null,'【分型】霍奇金淋巴瘤（HL）与非霍奇金淋巴瘤（NHL）
【诊断】淋巴结活检病理+免疫组化+流式+FISH
【分期】Ann Arbor分期 I-IV期，A/B症状
【治疗】DLBCL：R-CHOP方案；HL：ABVD方案；复发：CAR-T/移植
【随访】治疗结束后每3-6个月复查，持续2年',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g037','CSCO乳腺癌诊疗指南（2026版）','肿瘤','2026',null,'【筛查】40岁以上女性每1-2年乳腺X线+超声
【分型】Luminal A/B、HER2+、三阴性
【治疗】早期：手术+辅助治疗；晚期：化疗/靶向/内分泌/免疫
【HER2+】曲妥珠单抗+帕妥珠单抗双靶
【三阴性】PD-1抑制剂+化疗',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g038','肺癌常用标志物检测及临床应用专家共识（2026版）','肿瘤','2026',null,'【标志物】CEA、CYFRA21-1、NSE、ProGRP、SCC
【应用】辅助诊断、疗效评估、预后监测
【联合检测】小细胞肺癌：NSE+ProGRP；非小细胞：CEA+CYFRA21-1
【注意】标志物升高需结合影像，单一标志物特异性有限',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g039','靶向TROP2的ADC应用于非小细胞肺癌专家共识（2026版）','肿瘤','2026',null,'【药物】戈沙妥珠单抗（Sacituzumab govitecan）
【适应证】既往接受过含铂化疗和PD-1/PD-L1治疗的晚期NSCLC
【疗效】ORR约28%，mPFS约6个月
【不良反应】中性粒细胞减少、腹泻、贫血
【监测】每周期血常规，注意间质性肺病',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g040','中国肝细胞癌经动脉介入治疗临床实践指南（2026版）','肿瘤','2026',null,'【适应证】BCLC B期/CNLC IIb-IIIa期
【TACE】cTACE（碘油+化疗药）/DEB-TACE（载药微球）
【HAIC】FOLFOX方案肝动脉灌注化疗
【联合】TACE+靶向/免疫（T+A方案）
【禁忌】门静脉主干完全闭塞、严重肝衰竭',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g041','肿瘤化疗导致中性粒细胞减少诊治中国专家共识（2026版）','肿瘤','2026',null,'【分级】1级(1.5-2.0)、2级(1.0-1.5)、3级(0.5-1.0)、4级(<0.5)×10⁹/L
【预防】FN高风险：G-CSF一级预防
【治疗】FN：经验性抗感染+G-CSF
【抗生素】单药哌拉西林他唑巴坦或碳青霉烯类
【注意】4级中性粒细胞减少伴发热属急症',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g042','基于NGS的肿瘤全景变异检测探针设计专家共识（2026版）','肿瘤','2026',null,'【检测范围】点突变、插入缺失、拷贝数变异、重排、TMB、MSI
【样本】组织优先，血浆ctDNA补充
【报告】需包含变异分级（I-IV级）、临床意义、靶向药物推荐
【质控】测序深度≥500×，覆盖度≥99%
【注意】胚系变异需遗传咨询',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g043','CACA整体整合诊疗指南：老年肿瘤（2026版）','肿瘤','2026',null,'【评估】CGA老年综合评估：功能、认知、营养、心理、社会支持
【治疗】个体化，避免过度治疗
【化疗】根据CIRS-G评分调整剂量
【靶向/免疫】注意药物相互作用和器官功能
【支持】营养支持、疼痛管理、心理干预',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g044','CACA指南·血管保护（2026版）','肿瘤','2026',null,'【评估】化疗前血管条件评估
【通路】首选PICC/PORT，避免反复外周穿刺
【化疗药】发疱剂（蒽环类/长春碱类）需中心静脉
【并发症】静脉炎、渗出、血栓
【处理】外渗：立即停止、回抽、局部处理',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g045','中国老年患者医学营养治疗指南（2026版）','肿瘤','2026',null,'【筛查】NRS2002、MNA-SF
【评估】体重下降、BMI、白蛋白、前白蛋白
【目标】热量25-30kcal/kg/d，蛋白质1.2-1.5g/kg/d
【途径】口服优先，EN补充，PN禁忌
【监测】每周体重、每周营养指标',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g046','经皮冠状动脉介入治疗指南（2025）','心血管','2025',null,'【适应证】急性STEMI：直接PCI；NSTEMI：高危早期介入
【器械】DES为首选，生物可吸收支架特定人群
【抗栓】阿司匹林+P2Y12（替格瑞洛/普拉格雷）双联12个月
【并发症】无复流、慢血流、冠状动脉夹层
【随访】术后1、3、6、12个月复查',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g047','智能可穿戴设备在心血管领域应用的专家建议（2026）','心血管','2026',null,'【应用】心率/心律监测、血压监测、血氧监测
【房颤筛查】PPG技术，敏感性>95%
【诊断】需12导联心电图确认
【数据管理】AI辅助分析，医生终审
【注意】不能替代医疗级设备',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g048','QT间期延长的监测与风险评估专家共识（2026）','心血管','2026',null,'【测量】QTc（Bazett公式），正常<440ms（男）/<460ms（女）
【高危】QTc>500ms或较基线增加>60ms
【诱因】低钾、低镁、心动过缓、药物（抗心律失常/抗精神病/抗生素）
【监测】用药前基线、用药后2-4h、稳态时
【处理】停药、补钾补镁、临时起搏',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g049','复发性心包炎临床诊疗专家共识（2026）','心血管','2026',null,'【定义】首次心包炎后4-6周复发
【诊断】典型胸痛+心包摩擦音+心电图改变+心包积液
【治疗】NSAIDs+秋水仙碱一线，糖皮质激素二线
【难治】IL-1抑制剂（阿那白滞素）
【注意】心包缩窄需手术',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g050','成人运动康复心血管风险评估与防范专家共识（2026）','心血管','2026',null,'【评估】运动前心血管筛查，PAR-Q+问卷
【分层】低危、中危、高危
【运动处方】FITT原则（频率、强度、时间、类型）
【监测】心率、血压、Borg评分
【终止指征】胸痛、严重气短、心律失常',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g051','成人先天性心脏病相关肺动脉高压诊断与治疗指南（2026）','心血管','2026',null,'【诊断】右心导管：mPAP≥20mmHg，PAWP≤15mmHg，PVR>2WU
【分型】艾森曼格综合征、左向右分流、术后PAH
【治疗】靶向药物（ERA/PDE5i/前列环素）
【手术】纠正分流，术后持续PAH需长期靶向治疗
【随访】每3-6个月评估心功能和血流动力学',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g052','低镁血症诊断与治疗专家共识（2026）','心血管','2026',null,'【诊断】血镁<0.75mmol/L，症状性<0.5mmol/L
【病因】摄入不足、吸收障碍、丢失过多、药物（利尿剂/PPI）
【表现】手足搐搦、心律失常（尖端扭转型室速）、低钾低钙
【治疗】口服氧化镁/硫酸镁，严重静脉补充
【监测】补镁同时监测血镁、血钾、血钙',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g053','急性主动脉夹层合并灌注不良综合征诊断和治疗专家共识（2026版）','心血管','2026',null,'【分型】Stanford A/B型
【诊断】CTA金标准，D-二聚体显著升高
【灌注不良】肠系膜、肾、下肢、脊髓
【治疗】A型：急诊手术；B型：TEVAR+药物治疗
【灌注不良处理】开窗、支架、旁路',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g054','介入相关主动脉损伤的预防与处理策略专家共识（2026）','心血管','2026',null,'【预防】术前CT评估、合适器械选择、轻柔操作
【类型】夹层、破裂、壁内血肿
【处理】覆膜支架植入、外科手术
【监测】术后24-48h严密监测
【随访】术后1、3、6、12个月影像复查',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g055','女性心律失常诊治专家共识（2026）','心血管','2026',null,'【特点】激素影响（月经周期、妊娠、绝经）
【房颤】女性卒中风险更高，抗凝更积极
【室上速】妊娠期首选腺苷、维拉帕米
【长QT】女性更易发生，避免延长QT药物
【妊娠】射频消融妊娠中期相对安全',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g056','神经调控治疗癫痫临床指南（2026版）','神经','2026',null,'【方法】VNS（迷走神经刺激）、DBS（脑深部电刺激）、RNS（反应性神经刺激）
【适应证】药物难治性癫痫，不适合手术切除
【VNS】左侧迷走神经刺激，参数可调
【DBS】丘脑前核/中央中核刺激
【疗效】发作减少30-60%，需长期随访调整',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g057','慢性意识障碍患者综合康复和无创神经调控促醒治疗中国专家共识（2026）','神经','2026',null,'【评估】CRS-R量表、GCS、FOUR
【康复】多模态感觉刺激、体位管理、营养支持
【无创调控】rTMS、tDCS、外周神经刺激
【有创调控】SCS、DBS（筛选后）
【预后】病因、病程、年龄、影像综合评估',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g058','神经外科手术机器人辅助脑深部电刺激手术专家共识（2026版）','神经','2026',null,'【适应证】帕金森病、肌张力障碍、特发性震颤、癫痫
【优势】精准定位、减少误差、缩短手术时间
【流程】术前影像融合→机器人定位→术中电生理验证→植入电极
【精度】靶点误差<1mm
【术后】程控参数优化，长期随访',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g059','植入式脑机接口临床应用路径管理中国专家共识（2026版）','神经','2026',null,'【适应证】运动障碍（ALS、脊髓损伤）、癫痫、精神疾病
【评估】多学科团队（神经科、外科、伦理、心理）
【手术】皮层电极植入，术后信号校准
【训练】患者-设备交互训练，算法优化
【伦理】知情同意、数据隐私、长期随访',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g060','中国卒中患者社区-居家全周期体适能康复路径2026专家共识','神经','2026',null,'【评估】Fugl-Meyer、Barthel指数、6分钟步行
【分期】急性期、恢复期、维持期
【运动】有氧、抗阻、平衡、柔韧
【社区】家庭医生+康复治疗师+营养师团队
【居家】远程监测、智能设备辅助',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g061','急性缺血性卒中再灌注治疗医疗质量评价与改进专家建议（2026）','神经','2026',null,'【静脉溶栓】rt-PA 0.9mg/kg，时间窗4.5h
【机械取栓】前循环大血管闭塞，时间窗6-24h（影像筛选）
【质量指标】DNT<60min，DPT<90min
【改进】绿色通道优化、院前预警、多学科协作
【随访】90天mRS评估',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g062','高血压性脑出血重症管理专家共识（2026版）','神经','2026',null,'【血压管理】收缩压140-160mmHg，避免急剧下降
【颅内压】头高位30°、镇静、甘露醇/高渗盐水
【手术】血肿>30ml、脑疝、脑室铸型
【并发症】肺炎、DVT、消化道出血
【预后】GCS、血肿量、破入脑室、年龄',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g063','癫痫共病焦虑、抑郁诊治专家共识（2026版）','神经','2026',null,'【筛查】HADS、PHQ-9、GAD-7
【共病机制】癫痫放电、药物、心理社会因素
【治疗】SSRI/SNRI首选，注意与抗癫痫药相互作用
【药物】舍曲林、艾司西酞普兰相对安全
【注意】避免安非他酮（降低癫痫阈值）',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g064','视网膜中央动脉阻塞神经介入专家共识（2026版）','神经','2026',null,'【诊断】突发无痛视力下降，视网膜苍白水肿，樱桃红斑
【时间窗】治疗黄金时间<4.5h
【治疗】前房穿刺、降眼压、扩血管、吸氧
【介入】动脉内溶栓（超选眼动脉）
【预后】视力恢复与时间密切相关',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g065','中国慢性呼吸疾病呼吸康复指南（2026版）','呼吸','2026',null,'【评估】肺功能、6MWT、mMRC、CAT
【运动】有氧、抗阻、呼吸肌训练
【呼吸技术】缩唇呼吸、腹式呼吸、气道廓清
【氧疗】LTOT指征：PaO2≤55mmHg或SaO2≤88%
【随访】每3-6个月评估，调整方案',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g066','小气道病变与慢性气道疾病临床诊疗专家共识（2026年）','呼吸','2026',null,'【定义】内径<2mm气道病变
【检测】FEF25-75%、IOS、CT
【疾病】哮喘、COPD、支气管扩张
【治疗】ICS+LABA/LAMA，个体化
【随访】肺功能动态监测',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g067','免疫抑制宿主重症肺炎诊断与治疗专家共识（2026）','呼吸','2026',null,'【病原】细菌、真菌（曲霉/肺孢子菌）、病毒（CMV）、结核
【诊断】CT、BAL、NGS
【经验治疗】广谱抗生素+抗真菌覆盖
【G试验/GM试验】真菌筛查
【注意】免疫重建炎症综合征（IRIS）',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g068','成人原发性纤毛运动障碍诊治专家共识（2025年版）','呼吸','2025',null,'【诊断】鼻呼出气一氧化氮（nNO）降低、电镜、基因检测
【表现】内脏转位、慢性鼻窦炎、支气管扩张、不孕不育
【治疗】气道廓清、抗生素、手术（鼻窦炎/耳科）
【遗传】常染色体隐性遗传，基因检测确诊
【随访】多学科长期管理',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g069','GOLD 2026（慢阻肺全球倡议2026版报告）','呼吸','2026',null,'【诊断】吸入支气管扩张剂后FEV1/FVC<0.70
【评估】症状（mMRC/CAT）+急性加重史
【分组】A、B、E组
【治疗】LABA+LAMA双支扩为基础，E组加ICS
【急性加重】短效支扩+糖皮质激素+抗生素',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g070','消化道重建术后ERCP专家共识（2026版）','消化','2026',null,'【适应证】胆胰疾病、吻合口狭窄、胆管结石
【技术】经吻合口/经皮肝/小肠镜辅助
【困难】解剖结构改变、肠袢冗长
【并发症】穿孔、出血、胰腺炎
【设备】球囊辅助小肠镜、单气囊/双气囊',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g071','中国胆汁酸性腹泻临床管理专家共识（2026版）','消化','2026',null,'【诊断】SeHCAT<10%（7日保留率），或血清C4升高
【分型】回肠吸收不良型、肝脏合成过多型
【治疗】考来烯胺（胆汁酸螯合剂）一线
【替代】考来维仑、阿片类药物（洛哌丁胺）
【随访】症状评分、SeHCAT复查',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g072','中国成人短肠综合征诊疗专家共识（2026版）','消化','2026',null,'【定义】小肠长度<200cm或剩余<50%
【分期】急性期、适应期、稳定期
【营养】肠外营养→肠内营养过渡
【并发症】D-乳酸酸中毒、胆结石、肾结石
【手术】肠康复手术、小肠移植（难治性）',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g073','老年人消化不良的评估与处理中国专家共识（2026版）','消化','2026',null,'【评估】排除器质性病变（胃镜、影像）
【分型】餐后不适综合征、上腹痛综合征
【治疗】PPI、促动力药、消化酶
【注意】药物相互作用、多重用药
【随访】症状改善评估，必要时复查',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g074','老年人胆囊结石诊断和治疗专家共识（2026版）','消化','2026',null,'【诊断】超声首选，CT/MRI补充
【无症状】观察，不推荐预防性切除
【有症状】腹腔镜胆囊切除术
【并发症】急性胆囊炎、胆管炎、胰腺炎
【注意】老年人心肺功能评估，麻醉风险',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g075','儿童发热全程管理专家共识（2026版）','儿科','2026',null,'【定义】肛温≥38℃或腋温≥37.5℃
【评估】生命体征、意识、皮疹、脱水
【退热】对乙酰氨基酚/布洛芬，不推荐交替
【抗感染】明确细菌感染才用抗生素
【警示】热性惊厥、脓毒症、脑膜炎征象',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g076','抗流感病毒药物儿科合理应用专家共识（2026版）','儿科','2026',null,'【药物】奥司他韦（≥1岁）、玛巴洛沙韦（≥5岁）、扎那米韦（≥7岁）
【时机】发病48h内启动最佳
【剂量】按体重调整
【预防】暴露后预防，高危人群
【注意】警惕流感相关脑病、心肌炎',null) on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g077','新一代四环素类抗生素儿科应用临床实践指南（2026版）','儿科','2026','XYDSHKSSSJ','【概述】新一代四环素类（替加环素、奥玛环素、依拉环素）在儿科感染性疾病中的应用指导
【适应证】
· 复杂性腹腔感染（cIAI）
· 社区获得性细菌性肺炎（CABP）
· 急性细菌性皮肤和皮肤结构感染（ABSSSI）
· 耐药菌感染（CRE、CRAB、MRSA）
【儿童剂量】
· 替加环素：≥8岁，1.2mg/kg q12h（首剂加倍）
· 奥玛环素：≥12岁，100mg qd（口服/静脉）
· 依拉环素：≥18岁为主，儿童数据有限
【注意事项】
· 8岁以下儿童慎用（牙齿变色风险）
· 肝功能不全需调整剂量
· 监测凝血功能（替加环素可致低纤维蛋白原血症）
· 不推荐用于单纯性感染
【不良反应】恶心、呕吐、腹泻、肝酶升高、光敏反应','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g078','儿童白血病微小残留病监测与临床应用指南（2026）','儿科','2026','ETBXBWXCLBJC','【定义】微小残留病（MRD）指白血病诱导化疗后体内残存的少量白血病细胞
【检测方法】
· 多参数流式细胞术（MFC）：敏感性10⁻⁴
· 实时定量PCR（RQ-PCR）：敏感性10⁻⁴~10⁻⁵
· 二代测序（NGS）：敏感性10⁻⁵~10⁻⁶
【监测时机】
· 诱导治疗结束（Day 33）
· 巩固治疗前
· 维持治疗期间每3个月
· 移植前后
【临床意义】
· MRD<10⁻⁴：低危，标准治疗
· MRD 10⁻⁴~10⁻²：中危，强化治疗
· MRD≥10⁻²：高危，考虑移植或CAR-T
【预后分层】MRD是儿童ALL独立预后因素，优于形态学评估','https://www.chinapediatrics.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g079','儿童淋巴结肿大临床诊治专家共识（2026）','儿科','2026','ETLBJZDLCZZ','【定义】淋巴结直径>1cm（颈部>0.5cm）或较前明显增大
【病因分类】
· 感染性（80%）：细菌、病毒、结核、猫抓病
· 免疫性：川崎病、幼年特发性关节炎、SLE
· 肿瘤性：淋巴瘤、白血病、神经母细胞瘤
· 其他：组织细胞增生症、代谢性疾病
【评估流程】
1. 病史：持续时间、伴随症状、流行病学
2. 体检：部位、大小、质地、活动度、压痛、融合
3. 实验室：血常规、CRP、EBV/CMV抗体、结核筛查
4. 影像：超声（首选）、CT/MRI（深部或怀疑肿瘤）
【活检指征】
· 直径>2cm且持续增大>4周
· 质地硬、固定、融合
· 伴全身症状（发热、盗汗、体重下降）
· 超声提示结构异常（皮质增厚、门结构消失）
【治疗原则】病因治疗，避免盲目使用抗生素','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g080','儿童青少年1型糖尿病自我管理教育与支持专家共识（2026版）','儿科','2026','ETQSNXTNB','【教育目标】提高患儿及家庭的自我管理能力，改善血糖控制和生活质量
【核心内容】
· 血糖监测：每日≥4次（餐前+睡前），必要时加测夜间
· 胰岛素注射：基础-餐时方案，学会剂量调整
· 碳水化合物计数法：学会计算每餐碳水摄入量
· 低血糖识别与处理：15-15法则
· 运动管理：运动前中后血糖监测，调整胰岛素和饮食
·  sick day管理：生病期间的血糖监测和酮体检测
【教育对象】患儿、父母/监护人、学校老师/校医
【教育时机】诊断时、年度复查、血糖控制不佳、生活转变期（入学、青春期）
【心理支持】关注焦虑、抑郁、饮食障碍，必要时转诊心理科
【技术辅助】推荐CGM（动态血糖监测）和胰岛素泵的应用','https://www.diabetes.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g081','遗传性妇科肿瘤高风险人群管理指南（2026年版）','妇产科','2026','YCXFKZL','【高危人群】
· BRCA1/2突变携带者
· Lynch综合征（MMR基因突变）
· Li-Fraumeni综合征
· 家族史：一级亲属患卵巢癌/子宫内膜癌/乳腺癌
【筛查策略】
· BRCA突变：30-35岁起每6个月CA125+阴道超声
· Lynch综合征：20-25岁起每年子宫内膜活检
【预防性手术】
· RRSO（降低风险输卵管卵巢切除术）：BRCA1（35-40岁）、BRCA2（40-45岁）
· 预防性子宫切除术：Lynch综合征（完成生育后）
【遗传咨询】所有高危人群应接受专业遗传咨询和基因检测
【药物预防】OC可降低BRCA携带者卵巢癌风险50%','https://www.cog.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g082','辅助生殖技术静脉血栓栓塞症风险评估及预防中国专家共识（2026年版）','妇产科','2026','FZSZJSJMXS','【风险因素】
· 卵巢过度刺激综合征（OHSS）
· 高雌激素状态
· 多胎妊娠
· 既往VTE史
· 遗传性易栓症
【风险评估】
· 低危：无危险因素，常规活动
· 中危：1-2个危险因素，建议低分子肝素预防
· 高危：≥3个危险因素或既往VTE，强烈建议抗凝预防
【预防措施】
· 低分子肝素（LMWH）：依诺肝素40mg qd 或 那屈肝素0.4ml qd
· 开始时机：取卵后24h或胚胎移植后
· 持续时间：至妊娠12周或OHSS缓解后2周
【禁忌】活动性出血、严重血小板减少、未控制的高血压','https://www.csf.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g083','子宫颈上皮内瘤变2级（CIN2）管理中国专家共识（2026版）','妇产科','2026','ZGJSPBNLB','【定义】CIN2为中度宫颈上皮内瘤变，具有自然消退和进展为CIN3/癌的双重潜能
【管理策略】
· <25岁：观察随访（每6个月细胞学+HPV）
· ≥25岁：
  - 有生育需求：可选择观察或LEEP
  - 无生育需求：推荐LEEP或冷刀锥切
· 持续>2年：手术治疗
· 病变累及腺体：手术治疗
【随访】
· 术后6个月：HPV检测
· 术后12个月：细胞学+HPV联合检测
· 连续3次阴性：恢复常规筛查
【妊娠管理】妊娠期CIN2以观察为主，产后6-8周复查','https://www.cog.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g084','孕产妇血液管理专家共识（2026年指南，贫血管理）','妇产科','2026','YCFXYGL','【贫血定义】
· 妊娠早期：Hb<110g/L
· 妊娠中期：Hb<105g/L
· 妊娠晚期：Hb<110g/L
【病因】缺铁性贫血（90%）、叶酸/B12缺乏、地中海贫血、慢性病贫血
【筛查】所有孕妇首次产检筛查Hb、铁蛋白、MCV
【治疗】
· 轻中度（Hb 70-109g/L）：口服铁剂（琥珀酸亚铁 100-200mg bid）
· 重度（Hb<70g/L）或口服不耐受：静脉铁剂（蔗糖铁 200mg iv 每周）
· 极重度（Hb<60g/L）或症状明显：输注红细胞
【输血原则】
· 维持Hb>80g/L（有症状者>100g/L）
· 自体储血（条件允许时）
· 术中血液回收
【产后】继续补铁至少3个月，哺乳优先口服铁剂','https://www.cog.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g085','妊娠合并胸主动脉疾病诊断与治疗专家共识（2026）','妇产科','2026','RSHBXZMJ','【疾病类型】主动脉夹层、主动脉瘤、主动脉缩窄、马凡综合征相关主动脉病变
【诊断】
· 首选：MRI（无辐射，可评估全主动脉）
· CT血管造影（需权衡辐射风险）
· 经食道超声（术中监测）
【风险评估】
· 主动脉直径>4.5cm：高危
· 马凡综合征主动脉直径>4.0cm：高危
· 主动脉夹层：极高危
【治疗】
· 药物：β受体阻滞剂（拉贝洛尔首选）、严格控制血压<120/80mmHg
· 手术指征：主动脉直径>5.0cm或夹层
· 手术时机：尽可能延迟至胎儿可存活（≥28周）
· 分娩方式：剖宫产（多数情况）
【多学科团队】产科、心外科、麻醉科、新生儿科协作','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g086','中国宫颈机能不全诊断与治疗专家共识（2026修订版）','妇产科','2026','ZGGJJNQB','【诊断标准】
· 病史：≥1次无痛性中期妊娠流产（16-28周）
· 超声：宫颈长度<25mm，伴宫颈内口扩张
· 非孕期：Hegar 8号扩宫棒无阻力通过宫颈内口
【高危因素】
· 宫颈手术史（LEEP、锥切、多次人流）
· 子宫畸形
· 多胎妊娠
【治疗】
· 宫颈环扎术（McDonald或Shirodkar法）：
  - 择期环扎：孕12-14周
  - 应急环扎：孕16-24周发现宫颈缩短
  - 紧急环扎：宫口已扩张、胎囊未脱出
· 孕酮辅助：阴道用黄体酮
· 卧床休息：证据有限，不推荐常规绝对卧床
【禁忌】活动性出血、胎膜早破、宫内感染、胎儿畸形','https://www.cog.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g087','骨科手术部位感染创面预防与治疗的专家共识（2026版）','骨科','2026','GKSSBWGR','【定义】手术部位感染（SSI）指术后30天内（植入物术后1年内）发生的切口或深部组织感染
【预防措施】
· 术前：皮肤准备（氯己定沐浴）、鼻拭子MRSA筛查、血糖控制<10mmol/L
· 抗菌药物预防：
  - 头孢唑啉（1-2g iv，切皮前30-60min）
  - 手术>3h或失血>1500ml：追加一剂
  - 万古霉素（MRSA定植者）
· 术中：保温（体温>36℃）、控制出血、减少手术时间
· 术后：48h内停用预防性抗生素
【治疗】
· 浅表感染：清创+口服抗生素
· 深部/植入物感染：
  - 保留植入物：清创+长期抗生素（6-12周）
  - 移除植入物：清创+二期翻修
【高危因素】肥胖、糖尿病、免疫抑制、营养不良、吸烟','https://www.coa.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g088','膝骨关节炎阶梯治疗专家共识2026版','骨科','2026','XBGYJJT','【治疗阶梯】
第一阶梯（基础治疗）：
· 患者教育、体重管理、运动疗法（股四头肌锻炼）
· 物理治疗、辅助器具（拐杖、支具）
第二阶梯（药物治疗）：
· 外用NSAIDs（首选）
· 口服NSAIDs（COX-2选择性抑制剂优先）
· 关节腔注射：玻璃酸钠、糖皮质激素（每年≤3-4次）
第三阶梯（修复性治疗）：
· 关节镜清理（严格掌握适应证）
· 软骨修复术（微骨折、自体软骨移植）
· 截骨矫形术（HTO、DFO）
第四阶梯（重建治疗）：
· 单髁置换术（UKA）
· 全膝关节置换术（TKA）
【手术指征】疼痛严重影响生活、X线Kellgren-Lawrence III-IV级、保守治疗失败','https://www.coa.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g089','智能传感动态引导技术在骨科手术应用的专家共识（2026版）','骨科','2026','ZNCGDYJS','【技术概述】利用惯性测量单元（IMU）、光学追踪、电磁导航等传感器实时引导骨科手术操作
【应用领域】
· 脊柱手术：椎弓根螺钉置入导航
· 关节置换：下肢力线实时监测
· 创伤骨科：骨折复位角度控制
· 运动医学：ACL重建隧道定位
【优势】
· 提高置入精度（椎弓根螺钉破壁率<5%）
· 减少术中透视次数和辐射暴露
· 缩短手术时间
· 改善术后功能预后
【局限性】
· 学习曲线陡峭
· 设备成本高
· 软组织干扰影响精度
· 需与传统影像结合验证
【推荐】建议在具备条件的中心开展，术者需经过系统培训','https://www.coa.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g090','前交叉韧带过顶位重建技术中国专家共识（2025年版）','骨科','2025','QJCRDGDW','【技术定义】过顶位（Over-the-Top）重建指移植物经股骨外髁顶部骨隧道外绕过，不穿透髁间窝顶部
【适应证】
· 翻修手术（原骨隧道扩大）
· 骨骺未闭合青少年
· 髁间窝狭窄
· 多韧带损伤
【手术要点】
· 移植物选择：腘绳肌腱（四股）或髌腱
· 股骨侧：过顶位固定（悬吊钢板或螺钉）
· 胫骨侧：标准骨隧道，可挤压螺钉固定
· 等长点定位：膝关节屈伸时移植物张力变化<2mm
【康复】
· 术后0-2周：支具锁定伸直位，部分负重
· 术后2-6周：逐步增加活动度（0-90°→0-120°）
· 术后3个月：恢复慢跑
· 术后9-12个月：恢复竞技运动
【疗效】临床结果与传统经髁间窝重建相当，翻修率低','https://www.coa.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g091','骨质疏松性桡骨远端骨折中西医协同诊疗临床实践指南（2026版）','骨科','2026','GZSSXRG','【诊断】
· X线：桡骨远端骨皮质厚度<5mm提示骨质疏松
· DXA：T值≤-2.5确诊骨质疏松
· CT三维重建评估关节面塌陷和粉碎程度
【分型】AO/OTA分型指导治疗选择
【治疗】
· 西医：
  - 无移位：石膏固定4-6周
  - 移位：闭合复位+石膏/外固定架
  - 不稳定：切开复位内固定（掌侧钢板）
  - 严重粉碎：外固定架±克氏针
· 中医：
  - 早期（1-2周）：活血化瘀（桃红四物汤）
  - 中期（3-6周）：和营止痛、接骨续筋
  - 后期（7周后）：补益肝肾、强筋壮骨
【骨质疏松治疗】
· 钙剂+维生素D基础治疗
· 抗骨质疏松药物：阿仑膦酸钠、地舒单抗
· 骨折后尽早启动（2周内）','https://www.coa.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g092','中国老年2型糖尿病防治临床指南（2026年版）','内分泌','2026','ZGLNXTNB','【老年糖尿病特点】
· 症状不典型、并发症多、认知障碍风险高
· 低血糖感知能力下降
· 多重用药、药物相互作用多
【血糖目标】
· 健康老年人（合并症少）：HbA1c<7.5%
· 复杂/中度衰弱：HbA1c<8.0%
· 非常复杂/重度衰弱：HbA1c<8.5%，避免低血糖
【药物选择】
· 一线：二甲双胍（eGFR>30）
· 优选：SGLT2i（心肾保护）、GLP-1RA（减重、心血管获益）
· 慎用：磺脲类（低血糖风险）、TZD（心衰、骨折）
· 胰岛素：简化方案（基础胰岛素±1-2次餐时）
【综合管理】
· 血压<130/80mmHg
· LDL-C<1.8mmol/L（高危）
· 抗血小板（合并ASCVD）
· 跌倒预防、营养支持、认知评估','https://www.diabetes.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g093','2型糖尿病胰岛β细胞功能评估与保护临床专家共识（2026版）','内分泌','2026','XTNBYDXB','【评估方法】
· HOMA-β：空腹C肽/胰岛素计算，简便但粗略
· 精氨酸刺激试验：评估第一时相胰岛素分泌
· 葡萄糖耐量试验+C肽：评估整体β细胞功能
· 高葡萄糖钳夹：金标准，但操作复杂
【β细胞功能下降因素】
· 糖毒性、脂毒性
· 炎症、氧化应激
· 遗传易感性
· 病程延长
【保护策略】
· 早期强化降糖（解除糖毒性）
· 减重（≥10%体重恢复β细胞功能）
· GLP-1RA和SGLT2i（直接保护β细胞）
· 避免低血糖（反复低血糖损伤β细胞）
· 代谢手术（BMI≥32.5）
【监测】新诊断T2DM应评估β细胞功能，指导个体化治疗','https://www.diabetes.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g094','老年人群维生素D营养评估及补充中国专家共识（2026.03）','内分泌','2026','LNRQWSSD','【评估标准】
· 血清25(OH)D：
  - <20ng/ml（<50nmol/L）：缺乏
  - 20-30ng/ml（50-75nmol/L）：不足
  - >30ng/ml（>75nmol/L）：充足
【老年特点】
· 皮肤合成能力下降（70岁时仅为年轻人的25%）
· 肠道吸收减少
· 户外活动减少
· 肥胖（脂溶性维生素D储存在脂肪组织）
【补充方案】
· 普通老年人：维生素D3 800-1000IU/d
· 缺乏者：维生素D3 2000IU/d，8-12周后复查
· 严重缺乏：维生素D2 50000IU/周×6-8周
· 联合钙剂：元素钙1000-1200mg/d
【监测】补充3个月后复查25(OH)D，目标>30ng/ml
【安全性】维生素D3 4000IU/d以下安全，罕见高钙血症','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g095','痛风石损害程度分级和外科治疗的多学科专家共识（2025版）','内分泌','2025','TFSSHFJ','【痛风石分级】
· 0级：无可见痛风石
· 1级：痛风石直径<1cm，单发
· 2级：痛风石1-3cm，多发或影响功能
· 3级：痛风石>3cm，关节破坏或皮肤破溃
· 4级：广泛痛风石，关节毁损，功能障碍
【外科治疗指征】
· 3-4级痛风石
· 神经/血管压迫
· 皮肤破溃、感染
· 关节破坏需重建
· 影响日常生活
【手术时机】
· 血尿酸<300μmol/L且稳定≥3个月
· 急性炎症控制后≥2周
· 术前评估心肾功
【手术方式】
· 痛风石清除术
· 关节清理术
· 关节融合/置换术（严重毁损）
【术后管理】继续降尿酸治疗，目标<300μmol/L','https://www.rheumatology.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g096','发热待查诊治专家共识（2026版）','感染','2026','FRDCZL','【定义】发热待查（FUO）：体温>38.3℃持续≥3周，经1周完整检查仍未明确诊断
【分类】
· 经典FUO
· 院内FUO
· 免疫缺陷相关FUO
· 旅行相关FUO
【病因分布】
· 感染（30-40%）：结核、心内膜炎、腹腔脓肿、CMV/EBV
· 肿瘤（20-30%）：淋巴瘤、实体瘤
· 自身免疫病（15-20%）：成人Still病、血管炎、SLE
· 其他：药物热、伪装热、周期性发热综合征
【诊断流程】
1. 详细病史（旅行、动物接触、用药、家族史）
2. 系统体检（反复查体，注意皮肤、淋巴结、心脏杂音）
3. 基础检查：血常规、肝肾功能、炎症标志物、血培养×3
4. 影像：胸腹CT（首选）、PET-CT（怀疑肿瘤或隐匿感染）
5. 有创检查：骨髓穿刺、淋巴结活检、肝活检
【治疗原则】明确诊断前避免经验性使用广谱抗生素和糖皮质激素','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g097','腹腔感染常见耐药菌诊治与防控中国专家共识（2026版）','感染','2026','FQGRCKNYJ','【常见耐药菌】
· ESBL-肠杆菌科（大肠埃希菌、肺炎克雷伯菌）
· CRE（碳青霉烯耐药肠杆菌科）
· CRAB（碳青霉烯耐药鲍曼不动杆菌）
· MRSA
· VRE（万古霉素耐药肠球菌）
【经验性治疗】
· 轻中度、无耐药风险：哌拉西林他唑巴坦或头孢哌酮舒巴坦
· 重症或有耐药风险：美罗培南±万古霉素/利奈唑胺
· CRE：头孢他啶阿维巴坦、美罗培南韦博巴坦、替加环素
· CRAB：替加环素+头孢哌酮舒巴坦、多黏菌素
【感染源控制】
· 脓肿引流（经皮或手术）
· 坏死组织清创
· 拔除感染导管
· 消化道穿孔修补/造瘘
【防控措施】
· 抗菌药物管理（AMS）
· 接触隔离
· 手卫生
· 环境清洁消毒','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g098','抗病原体临床应用中国专家指南（2026版）','感染','2026','KBTWLCSJ','【指南范围】涵盖细菌、真菌、病毒、寄生虫等病原体的抗感染治疗原则
【核心原则】
· 明确病原：尽可能获取微生物学证据（培养、分子检测）
· 药敏指导：根据药敏结果调整用药
· 剂量优化：PK/PD导向的个体化给药
· 疗程适当：足疗程但不过度
【细菌】
· 革兰阳性菌：MRSA首选万古霉素/利奈唑胺；VRE首选利奈唑胺
· 革兰阴性菌：铜绿假单胞菌首选头孢他啶/哌拉西林他唑巴坦/碳青霉烯
· 厌氧菌：甲硝唑、哌拉西林他唑巴坦
【真菌】
· 念珠菌：氟康唑（非耐药）、棘白菌素类（重症/血流感染）
· 曲霉：伏立康唑、艾沙康唑、两性霉素B脂质体
· 隐球菌：两性霉素B+氟胞嘧啶诱导，氟康唑巩固
【病毒】
· CMV：更昔洛韦、缬更昔洛韦
· EBV：对症为主，重症用糖皮质激素
· 流感：奥司他韦、玛巴洛沙韦（48h内）','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g099','结核病宿主来源生物标志物的诊断应用专家共识（2026.01）','感染','2026','JHBZZLY','【背景】传统结核诊断（痰涂片、培养）灵敏度低，宿主来源生物标志物可辅助诊断和疗效评估
【标志物分类】
· 细胞因子：IFN-γ、IL-2、TNF-α（T-SPOT.TB、QuantiFERON）
· 代谢产物：脂阿拉伯甘露聚糖（LAM，尿液检测，HIV患者）
· 转录组特征：3基因、11基因签名（活动性结核vs潜伏感染）
· 蛋白质组：CRP、IP-10、ADA
· 代谢组：色氨酸代谢物、鞘脂类
【临床应用】
· 活动性结核诊断：IGRA（T-SPOT.TB）辅助诊断
· 潜伏感染筛查：QuantiFERON-TB Gold
· 疗效监测：痰培养转阴时间、炎症标志物下降
· 预后评估：基线高CRP/低白蛋白提示预后差
【局限性】
· 无法区分活动性与潜伏感染
· 免疫抑制患者假阴性
· 儿童数据有限','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g100','抗结核药治疗药物监测临床应用专家共识(2025年更新版)','感染','2025','KJHYZL','【TDM适应证】
· 治疗效果不佳（痰菌持续阳性）
· 怀疑耐药
· 肝肾功能不全
· 合并HIV感染
· 妊娠
· 药物不良反应
· 吸收不良（如短肠综合征）
【监测药物及目标浓度】
· 异烟肼（H）：Cmax 3-6μg/ml
· 利福平（R）：Cmax 8-24μg/ml
· 吡嗪酰胺（Z）：Cmax 20-50μg/ml
· 乙胺丁醇（E）：Cmax 2-6μg/ml
· 利奈唑胺：Cmin 2-8μg/ml（MDR-TB）
【采样时间】服药后2h（Cmax）和下次服药前（Cmin）
【剂量调整】根据血药浓度和临床反应个体化调整
【注意事项】
· 利福平是强CYP450诱导剂，影响多种药物浓度
· 异烟肼快乙酰化者血药浓度低
· 吡嗪酰胺高尿酸血症需监测','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g101','我国动脉炎性前部缺血性视神经病变诊断和治疗专家共识（2026）','眼科','2026','WGDMyxQBQ','【定义】动脉炎性前部缺血性视神经病变（AAION）指由巨细胞动脉炎（GCA）引起的视神经前部缺血性损伤
【诊断标准】
· 年龄>50岁
· 急性无痛性视力下降
· 视盘水肿（苍白性）
· ESR>50mm/h和/或CRP升高
· 颞动脉活检：血管壁炎症、巨细胞浸润（金标准）
【鉴别诊断】
· 非动脉炎性AION（NAION）：年轻、无全身症状、ESR正常
· 视神经炎：疼痛、眼球转动痛、MRI异常
· 视网膜中央动脉阻塞：樱桃红斑、视网膜苍白水肿
【治疗】
· 紧急：大剂量糖皮质激素
  - 甲泼尼龙500-1000mg iv qd × 3-5天
  - 随后泼尼松1mg/kg/d口服
· 维持：缓慢减量（持续6-12个月）
· 低剂量阿司匹林（预防对侧眼受累）
【预后】视力恢复有限，早期治疗可保护对侧眼
【随访】监测ESR/CRP指导激素减量，注意激素不良反应','https://www.cao.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g102','围手术期应用胃肠外直接凝血酶抑制剂的专家共识（2026）','药学护理','2026','WSSQYYYCW','【药物种类】
· 阿加曲班：静脉用，半衰期45min，肝代谢
· 比伐卢定：静脉用，半衰期25min，肾脏代谢
· 达比加群酯：口服，半衰期12-17h
【适应证】
· 肝素诱导的血小板减少症（HIT）
· PCI术中抗凝（比伐卢定）
· 房颤卒中预防（达比加群）
· 围手术期桥接（华法林患者需中断抗凝时）
【围手术期管理】
· 术前停药时间：
  - 阿加曲班：4-6h（肾功能正常）
  - 比伐卢定：2-3h
  - 达比加群：CrCl>80：1-2天；CrCl 50-80：2-3天；CrCl 30-50：3-5天
· 术后重启：止血充分后24-72h
【监测】
· APTT（阿加曲班、比伐卢定）
· 凝血酶时间（TT）
· 稀释凝血酶时间（dTT，达比加群）
· 抗Xa活性（不适用于直接凝血酶抑制剂）
【逆转】无特异性拮抗剂，严重出血用活性炭（口服药）、血液透析（达比加群）、PCC','https://www.cpa.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g103','骨科大手术患者静脉血栓栓塞症预防专家共识（2026）','药学护理','2026','GKDSSZJ','【高危手术】
· 全髋关节置换（THA）
· 全膝关节置换（TKA）
· 髋部骨折手术
【风险评估】Caprini评分≥5分为高危
【预防措施】
· 基础预防：早期活动、足背屈运动、弹力袜
· 药物预防：
  - LMWH（依诺肝素40mg qd）：术后6-12h开始
  - 磺达肝癸钠（2.5mg qd）：术后6-24h开始
  - 直接口服抗凝药（DOAC）：利伐沙班10mg qd（术后6-10h）
  - 华法林（INR 2-3）：起效慢，需桥接
· 机械预防：IPC（间歇充气加压装置）
【预防时长】
· THA/TKA：10-14天（住院+出院后）
· 髋部骨折：28-35天
【禁忌】活动性出血、未控制高血压、严重肝肾功能不全
【出血管理】发生出血事件时停用抗凝，局部止血，必要时逆转','https://www.coa.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g104','腔镜机器人手术体位安置专家共识（2026版）','腔镜机器人','2026','QJJQRSS','【体位原则】
· 充分暴露手术野
· 避免神经血管压迫
· 预防压力性损伤
· 便于机器人臂操作
【常见手术体位】
· 头低脚高位（Trendelenburg）：盆腔/下腹部手术
  - 角度15-30°
  - 肩托固定防止下滑
  - 注意眼压升高、呼吸功能影响
· 头高脚低位（Reverse Trendelenburg）：上腹部手术
· 侧卧位：肾/肾上腺手术
  - 腰桥抬高
  - 保护腋窝神经血管束
· 截石位：泌尿/妇科手术
  - 髋关节屈曲<90°
  - 避免腓总神经受压
【并发症预防】
· 臂丛神经损伤：上肢外展<90°
· 腓总神经损伤：腓骨头处加垫
· 眼损伤：闭合眼睑、保护角膜
· 压疮：骨突处加垫、定时评估
【团队协作】外科医生、麻醉医生、护士共同确认体位','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g105','机器人辅助胃癌手术助手职责专家共识（2026版）','腔镜机器人','2026','JQRFAWA','【概述】机器人胃癌手术中助手（ bedside assistant）的职责分工和操作规范
【助手角色】
· 第一助手（床旁助手）：
  - 器械更换、吸引、牵拉
  - 应急处理：出血控制、中转开腹
  - 标本取出
· 第二助手（控制台辅助）：
  - 协助主刀调整视角
  - 记录手术过程
  - 与麻醉、护理沟通
【核心职责】
· 术前：
  - 患者体位安置
  - 器械清点、机器人系统对接
  - 气腹建立（12-15mmHg）
· 术中：
  - 精准器械传递
  - 及时吸引保持术野清晰
  - 血管/组织牵拉暴露
  - 标本袋置入和取出
  - 出血时快速压迫、夹闭
· 术后：
  - 标本处理、送检
  - 器械清洗消毒
  - 记录手术细节
【应急处理】
· 大出血：
  - 立即压迫
  - 准备中转开腹
  - 通知血库备血
· 机器人故障：
  - 评估修复时间
  - >10分钟考虑中转
· 气腹相关并发症：皮下气肿、气胸','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g106','成人烧伤患者气道灌洗疗法专家共识（2026版）','其他','2026','CRSSHZQ','【概述】吸入性损伤和严重烧伤患者支气管肺泡灌洗（BAL）的适应证和操作规范
【适应证】
· 中重度吸入性损伤
· 烟雾吸入后肺不张
· 烧伤后肺部感染
· 烧伤后ARDS
· 痰液潴留、肺不张
【禁忌证】
· 严重低氧血症（PaO2/FiO2<100）
· 严重血流动力学不稳定
· 活动性大咯血
· 颅内高压
【操作要点】
· 灌洗液：温生理盐水（37°C）
· 每次灌入量：20-50mL
· 总量：100-200mL/侧
· 负压吸引：100-150mmHg
· 灌洗后体位引流
【药物应用】
· 局部抗生素：阿米卡星、头孢他啶
· 黏液溶解剂：乙酰半胱氨酸
· 表面活性物质：严重ARDS
· 肝素：纤维蛋白沉积
【监测】
· 生命体征
· SpO2
· 血气分析
· 灌洗液性状、量
【并发症】
· 低氧血症
· 支气管痉挛
· 出血
· 感染','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g107','中成药防治泛血管疾病及其靶器官损害的专家共识','其他','2026','ZCYFZXGJB','【概述】中成药在动脉粥样硬化性心血管疾病（ASCVD）及其靶器官损害中的辅助治疗
【泛血管疾病概念】
· 心、脑、肾、外周动脉等多血管床病变
· 共同病理基础：动脉粥样硬化
【推荐中成药】
· 活血化瘀类：
  - 复方丹参滴丸：冠心病心绞痛
  - 通心络胶囊：缺血性卒中
  - 银杏叶制剂：认知障碍、外周动脉病
· 益气活血类：
  - 麝香保心丸：冠心病、心力衰竭
  - 芪苈强心胶囊：慢性心衰
· 化痰通络类：
  - 华佗再造丸：卒中后遗症
· 补肾类：
  - 六味地黄丸：糖尿病肾病
【联合用药原则】
· 不替代西医标准治疗
· 注意药物相互作用
· 监测肝肾功能
· 个体化选择
【证据等级】
· 多数中成药证据等级较低
· 部分药物有RCT支持
· 需更多高质量研究','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g108','保湿剂在特应性皮炎管理中的合理应用专家共识（2026版）','其他','2026','BSJZTYXP','【概述】保湿剂（润肤剂）在AD基础治疗中的选择和使用规范
【作用机制】
· 修复皮肤屏障
· 减少经皮水分丢失（TEWL）
· 降低炎症介质
· 减少激素用量
【保湿剂类型】
· 封闭剂：凡士林、羊毛脂
· 吸湿剂：甘油、尿素、透明质酸
· 润肤剂：神经酰胺、胆固醇、脂肪酸
· 混合型：市售多数产品
【选择原则】
· 急性期（渗出）：乳剂/洗剂
· 亚急性期：霜剂
· 慢性期（干燥、苔藓化）：软膏
· 夏季/湿热：轻薄型
· 冬季/干燥：厚重型
【使用方法】
· 每日至少2次
· 沐浴后3分钟内涂抹（黄金时间）
· 顺着毛发生长方向涂抹
· 足量使用：儿童每周150-200g，成人250-500g
【联合治疗】
· 激素：先涂激素，再涂保湿剂
· 钙调神经磷酸酶抑制剂：同样顺序
【注意事项】
· 避免含香精、防腐剂产品
·  patch test：新产品的安全性
· 感染期：避免封闭性过强产品','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g109','肝细胞癌伴肺转移多学科诊治专家共识（2026版）','其他','2026','GXBAFZY','【概述】HCC伴肺转移的MDT诊疗策略
【诊断】
· 胸部CT：肺结节评估
· PET-CT：排除其他部位转移
· 肺穿刺活检：病理确诊
· 分子检测：指导靶向治疗
【分期评估】
· 肺转移数目：单发 vs 多发
· 肺外转移：骨、脑、肾上腺
· 肝功能：Child-Pugh分级
· ECOG评分
【治疗策略】
· 局部治疗：
  - 肺转移灶消融（射频/微波）
  - 肺转移灶放疗（SBRT）
  - 肺转移灶手术切除（严格选择）
· 系统治疗：
  - 一线：阿替利珠单抗+贝伐珠单抗
  - 二线：瑞戈非尼、阿帕替尼
  - 三线：卡博替尼、雷莫芦单抗
· 介入治疗：
  - TACE（肝原发灶控制）
  - HAIC
【MDT团队】
· 肝胆外科
· 肿瘤内科
· 介入放射科
· 胸外科
· 放疗科
· 影像科
· 病理科','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g110','阴道微生态评价临床检验与结果报告规范化专家共识（2026.02.28）','其他','2026','YDWSTPJ','【概述】阴道微生态检测的标准化方法和报告规范
【检测方法】
· 湿片镜检：
  - 清洁度、乳酸杆菌、白细胞
  - 线索细胞、滴虫、真菌
· Gram染色：Nugent评分
· 细菌培养：真菌、需氧菌
· 分子检测：
  - 16S rRNA基因测序
  - 荧光定量PCR
· 功能检测：
  - 唾液酸苷酶
  - 脯氨酸氨基肽酶
  - 过氧化氢
【Nugent评分】
· 0-3分：正常
· 4-6分：中间型
· 7-10分：细菌性阴道病
【AV评分】
· 需氧性阴道炎评估
· 乳杆菌分级+白细胞+背景菌群+炎症评分
【报告规范】
· 形态学：菌群密度、多样性、优势菌
· 功能学：pH、过氧化氢、唾液酸苷酶
· 炎症指标：白细胞、清洁度
· 病原学：滴虫、真菌、线索细胞
· 综合诊断：正常/BV/AV/VVC/TV/混合感染
【临床意义】
· 指导精准用药
· 评估治疗效果
· 预测复发风险','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g111','2026 ACC/AHA/AACVPR血脂异常管理指南','心血管','2026','ACC_AHA_XZYC','【概述】ACC/AHA/AACVPR等多学会联合发布的血脂异常管理指南更新版
【关键更新】
· 更早启动风险防控：建议更早识别高危人群
· LDL-C目标值更新：极高危<55mg/dL，高危<70mg/dL，中危<100mg/dL
· 新型降脂疗法纳入：
  - PCSK9抑制剂（依洛尤单抗、阿利西尤单抗）
  - siRNA药物（英克司兰）
  - 口服PCSK9抑制剂（MK-0616等）
· 脂蛋白(a)管理：Lp(a)>50mg/dL或≥105nmol/L为风险增强因素
· 他汀不耐受：推荐依折麦布+PCSK9抑制剂联合
【风险评估】
· 10年ASCVD风险计算
· 冠状动脉钙化评分（CAC）辅助决策
· 多基因风险评分（PRS）
【生活方式】
· 地中海饮食或DASH饮食
· 规律运动
· 戒烟限酒','https://www.acc.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g112','2026 ESC心力衰竭指南','心血管','2026','ESC_XLSJ','【概述】ESC年会发布的最新心力衰竭临床实践指南
【更新要点】
· HFrEF（射血分数降低型心衰）：
  - 新四联疗法：ARNI/ACEI+β受体阻滞剂+MRA+SGLT2i
  - SGLT2i（达格列净、恩格列净）地位提升为一线
· HFmrEF（射血分数轻度降低型心衰）：
  - 新增独立分类
  - 推荐SGLT2i、ARNI、MRA
· HFpEF（射血分数保留型心衰）：
  - SGLT2i为I类推荐
  - ARNI、MRA可考虑
· 器械治疗：
  - ICD：一级预防LVEF≤35%
  - CRT：QRS≥150ms（LBBB）
· 晚期心衰：心脏移植、左室辅助装置（LVAD）
【诊断流程】BNP/NT-proBNP + 超声心动图 + 病因评估','https://www.escardio.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g113','2026 ESC心血管疾病合并慢性肾脏病指南','心血管','2026','ESC_XZGSBMXS','【概述】ESC发布的CVD合并CKD综合管理指南
【核心内容】
· 心肾综合征分型：5型
· 药物治疗：
  - SGLT2i：心肾双保护（达格列净、恩格列净）
  - 非奈利酮：T2DM合并CKD（eGFR≥25）
  - ACEI/ARB：蛋白尿患者
  - 他汀类：ASCVD预防
· 血压管理：
  - 目标<130/80mmHg
  - ACEI/ARB为首选
· 贫血管理：
  - Hb<10g/dL考虑ESA
  - 铁剂补充
· 矿物质骨代谢：
  - 血磷控制
  - 维生素D补充
  - 拟钙剂（西那卡塞）
【监测】eGFR、尿白蛋白/肌酐比值（UACR）、电解质','https://www.escardio.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g114','2026 ESC心脏康复指南','心血管','2026','ESC_XZKF','【概述】ESC发布的心脏康复临床实践指南
【适应证】
· 冠心病（PCI/CABG后）
· 心力衰竭
· 心脏瓣膜病术后
· 心脏移植
· 外周动脉疾病
【核心内容】
· 运动处方：
  - 有氧运动：中等强度，30-60min，3-5次/周
  - 抗阻训练：每周2-3次
  - 呼吸训练
· 营养管理：地中海饮食模式
· 心理支持：焦虑、抑郁筛查
· 戒烟：尼古丁替代疗法
· 药物优化：
  - 他汀、抗血小板、β受体阻滞剂、ACEI/ARB
  - SGLT2i（心衰患者）
【分期】
· I期：住院期
· II期：门诊早期（2-12周）
· III期：社区维持期
【评估】6分钟步行试验、心肺运动试验（CPET）','https://www.escardio.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g115','2026 ESC心肌梗死指南','心血管','2026','ESC_XJGS','【概述】ESC发布的急性心肌梗死管理指南更新
【STEMI】
· 再灌注策略：
  - 直接PCI（首选，D2B时间<90min）
  - 溶栓（无法PCI时，D2N时间<30min）
· 抗栓治疗：
  - 阿司匹林+P2Y12抑制剂（替格瑞洛/普拉格雷）
  - 肝素/比伐卢定
· 支架选择：
  - 药物洗脱支架（DES）为首选
  - 生物可吸收支架（有限适应证）
【NSTEMI】
· 风险分层：GRACE评分
· 侵入性策略：
  - 极高危：2h内
  - 高危：24h内
  - 中危：72h内
· 抗血小板：双联抗血小板12个月
【二级预防】
· 他汀（高强度）
· ACEI/ARB
· β受体阻滞剂
· SGLT2i（合并T2DM/HF）','https://www.escardio.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g116','2026 ESC/EAS脂蛋白(a)指南','心血管','2026','ESC_EAS_LDBA','【概述】ESC/EAS联合发布的脂蛋白(a)管理指南
【关键推荐】
· Lp(a)确认为心血管风险增强因素
· 阈值：>50 mg/dL（≥105 nmol/L）
· 一生至少检测一次Lp(a)
· 高危人群（早发ASCVD家族史、FH）优先检测
【管理策略】
· 生活方式：标准心血管风险因素控制
· 药物治疗：
  - 他汀：不降低Lp(a)，但降低总体风险
  - PCSK9抑制剂：降低Lp(a)约25-30%
  - 新型药物：
    · Pelacarsen（反义寡核苷酸，降低80%）
    · Olpasiran（siRNA，降低95%）
· 尚无获批的特异性降Lp(a)药物
【特殊人群】
· 家族性高胆固醇血症
· 早发ASCVD
· 主动脉瓣狭窄（Lp(a)相关）','https://www.escardio.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g117','2026 AHA改善心血管健康饮食指南','心血管','2026','AHA_YSS','【概述】AHA发布的改善心血管健康的饮食科学声明
【核心建议】
· 调整能量摄入与消耗，保持健康体重
· 多吃蔬菜和水果（多样化、深颜色）
· 选择全谷物而非精制谷物
· 选择健康蛋白质来源：
  - 植物蛋白（豆类、坚果）
  - 鱼类和海鲜
  - 低脂乳制品
  - 限制红肉和加工肉类
· 使用液态植物油（橄榄油、菜籽油）
· 限制添加糖（<每日热量10%）
· 限制钠（<2300mg/d，理想<1500mg/d）
· 限制饮酒（男性≤2杯/日，女性≤1杯/日）
· 选择 minimally processed foods
【特殊考虑】
· 考虑食物获取、文化习惯
· 从生命早期开始培养健康饮食习惯','https://www.heart.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g118','NCCN中枢神经系统肿瘤指南（2026.V1）','肿瘤','2026','NCCN_ZSXS','【概述】NCCN发布的中枢神经系统肿瘤临床实践指南2026年第1版
【覆盖瘤种】
· 胶质瘤（WHO CNS5分类）
· 脑膜瘤
· 垂体腺瘤
· 髓母细胞瘤
· 原发性中枢神经系统淋巴瘤
· 脑转移瘤
【胶质瘤治疗】
· 胶质母细胞瘤（IDH野生型）：
  - 最大安全切除+放疗（60Gy）+替莫唑胺同步及辅助
  - 肿瘤电场治疗（TTFields）
  - MGMT甲基化：替莫唑胺获益更大
· 少突胶质细胞瘤（IDH突变+1p/19q共缺失）：
  - PCV方案（丙卡巴肼+洛莫司汀+长春新碱）
  - 放疗+PCV优于单纯放疗
【分子标志物】
· IDH突变、1p/19q、MGMT甲基化
· BRAF V600E、H3 K27M
· MMR/MSI状态','https://www.nccn.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g119','2026 NCS危重成人癫痫持续状态神经预后指南','神经','2026','NCS_DXCX','【概述】美国神经重症监护学会（NCS）发布的SE神经预后评估指南
【预后评估时机】
· 急性期（24-72h）：避免过早判断
· 亚急性期（1-2周）：综合评估
· 慢性期（>1月）：功能结局
【预后指标】
· 临床：GCS、瞳孔反射、癫痫发作控制时间
· 电生理：
  - EEG：背景节律、癫痫样放电、爆发抑制
  - 定量EEG（qEEG）：α变异、SR
· 影像：
  - MRI DWI：弥散受限范围
  - CT：脑水肿、出血
· 生物标志物：NSE、S100β
【不良预后因素】
· 难治性SE（>24h）
· 缺氧性脑病
· 广泛皮层弥散受限
· NSE>100μg/L
【治疗目标】尽早终止癫痫发作，保护脑功能','https://www.neurocriticalcare.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g120','2025 AASM成人阻塞性睡眠呼吸暂停住院评估管理指南','神经','2025','AASM_SMHX','【概述】美国睡眠医学会发布的成人OSA住院管理指南
【筛查】
· STOP-BANG问卷
· Epworth嗜睡量表
· 高危人群：肥胖、高血压、心律失常、心衰
【诊断】
· 多导睡眠图（PSG）：金标准
· 家庭睡眠呼吸监测（HSAT）：中高危患者
· AHI分级：
  - 轻度：5-15次/h
  - 中度：15-30次/h
  - 重度：>30次/h
【住院管理】
· 术前评估：
  - 高危患者术前CPAP治疗
  - 术后监护（PACU延长观察）
· 术后管理：
  - 避免镇静药物
  - 体位管理（半卧位）
  - 镇痛方案优化
【治疗】
· CPAP：一线治疗
· 口腔矫治器：轻中度
· 手术：UPPP、舌骨悬吊、减重手术','https://aasm.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g121','2025 ASPN外周神经刺激慢性疼痛神经系统疾病应用共识','神经','2025','ASPN_WZSJ','【概述】美国外周神经学会发布的外周神经刺激（PNS）应用共识
【适应证】
· 慢性疼痛：
  - 神经病理性疼痛（带状疱疹后神经痛、糖尿病周围神经痛）
  - 腰背痛
  - 复杂性区域疼痛综合征（CRPS）
· 神经系统疾病：
  - 偏头痛
  - 丛集性头痛
  - 三叉神经痛
【刺激靶点】
· 枕神经（偏头痛）
· 眶上/滑车上神经（面部疼痛）
· 腓总神经（下肢疼痛）
· 臂丛神经（上肢疼痛）
【技术类型】
· 传统PNS：经皮穿刺植入
· 高频PNS：10kHz
·  burst PNS
· 无导线PNS（微刺激器）
【疗效】
· 疼痛缓解>50%：60-70%患者
· 可减少阿片类药物用量','https://www.aspn.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g122','2025 ABN自身免疫性重症肌无力管理指南（更新版）','神经','2025','ABN_MGGL','【概述】英国神经病学学会发布的自身免疫性MG管理指南更新
【诊断】
· 临床表现：波动性肌无力（眼外肌、延髓肌、四肢肌）
· 抗体检测：
  - AChR-Ab（85%全身型）
  - MuSK-Ab（5-8%）
  - LRP4-Ab
  - 抗striational抗体
· 电生理：重复神经刺激、单纤维肌电图
· 胸腺影像：CT/MRI（所有AChR+患者）
【治疗】
· 症状治疗：吡啶斯的明
· 免疫抑制：
  - 糖皮质激素（泼尼松）
  - 硫唑嘌呤
  - 吗替麦考酚酯
  - 他克莫司
· 生物制剂：
  - 利妥昔单抗（MuSK-MG首选）
  - 依库珠单抗（难治性AChR-MG）
  - 艾加莫德（FcRn抑制剂）
  - 罗泽利昔珠单抗
· 胸腺切除：AChR+非胸腺瘤全身型
【危象管理】
· 血浆置换
· IVIG
· 机械通气支持','https://www.theabn.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g123','AA基于血液的生物标志物阿尔茨海默病诊断应用指南','神经','2026','AA_ADZD','【概述】阿尔茨海默病协会发布的血液生物标志物诊断应用指南
【标志物】
· Aβ42/40比值：降低提示淀粉样蛋白病理
· p-tau181：升高提示tau病理
· p-tau217：更高特异性，区分AD与其他痴呆
· p-tau231：早期标志物
· NfL：神经退行性变（非特异性）
· GFAP：星形胶质细胞活化
【临床应用】
· 筛查：认知正常高危人群
· 诊断：MCI/痴呆病因鉴别
· 监测：治疗效果评估
· 入组：临床试验筛选
【优势】
· 无创、低成本、可及性高
· 可重复监测
【局限性】
· 肾功能影响（NfL、GFAP）
· 年龄相关变化
· 共病影响
【标准流程】血液检测→异常者CSF/PET确认','https://www.alz.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g124','2025 RANO/EANO PET成像胶质瘤临床应用建议（更新版）','神经','2025','RANO_EANO_PET','【概述】RANO/EANO联合发布的胶质瘤PET成像临床应用更新建议
【PET示踪剂】
· 氨基酸PET：
  - ¹⁸F-FET（氟乙基酪氨酸）
  - ¹⁸F-DOPA
  - ¹¹C-MET（蛋氨酸）
· ¹⁸F-FDG：
  - 高级别胶质瘤
  - 鉴别肿瘤与坏死（假阴性率高）
【临床应用】
· 诊断：
  - 鉴别肿瘤与良性病变
  - 指导活检（最高代谢区）
· 治疗规划：
  - 放疗靶区勾画
  - 手术切除范围
· 疗效评估：
  - 假性进展 vs 真性进展
  - 免疫治疗后评估（假性进展常见）
· 预后：
  - TBR（肿瘤/背景比）
  - 动态FET PET（TAC曲线）
【标准】氨基酸PET TBRmax>1.6提示肿瘤','https://www.eano.eu/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g125','2026国际共识：Rasmussen综合征诊断和治疗','神经','2026','RASMUSSEN_ZL','【概述】国际抗癫痫联盟发布的Rasmussen脑炎诊断和治疗共识
【诊断标准】
· 必要条件：
  - 局灶性癫痫（药物难治性）
  - 单侧半球受累
  - 进行性神经功能缺损
· 支持条件：
  - MRI：单侧半球萎缩、T2/FLAIR高信号
  - EEG：单侧半球慢波、癫痫样放电
  - 脑活检：小胶质细胞结节、 perivascular lymphocytes
  - 抗GluR3抗体（少数阳性）
【分期】
· 急性期：频繁癫痫发作、快速进展
· 慢性期：稳定、偏瘫固定
【治疗】
· 免疫治疗（急性期）：
  - 糖皮质激素冲击
  - IVIG
  - 血浆置换
  - 利妥昔单抗
· 抗癫痫药物：
  - 通常难治
  - 拉考沙胺、吡仑帕奈可尝试
· 手术：
  - 半球切除术（功能性解剖性）
  - 时机：神经功能缺损固定后
【预后】早期手术可阻止进展，但遗留偏瘫','https://www.epilepsy.com/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g126','2026 AACE成人2型糖尿病管理流程共识','内分泌','2026','AACE_T2DM','【概述】美国临床内分泌医师学会发布的T2DM管理流程更新
【重大更新】
· 首次新增糖尿病分型：
  - 1型、2型、单基因糖尿病、妊娠糖尿病
  - 成人隐匿性自身免疫糖尿病（LADA）
· "先合并症、后血糖"用药决策：
  - 优先根据合并症选择药物
  - 再考虑降糖效果
【合并症导向用药】
· ASCVD：GLP-1RA（利拉鲁肽、司美格鲁肽）或SGLT2i
· 心力衰竭：SGLT2i（达格列净、恩格列净）
· CKD：SGLT2i、非奈利酮
· 肥胖：GLP-1RA、GIP/GLP-1双受体激动剂（替尔泊肽）
· NAFLD：GLP-1RA、吡格列酮
【血糖目标】
· 一般：HbA1c<7%
· 严格：<6.5%（年轻、无合并症）
· 宽松：<8%（老年、合并症多）
【新药物】
· 替尔泊肽（Tirzepatide）：GIP/GLP-1双受体激动剂
· 瑞他鲁肽（Retatrutide）：GLP-1/GIP/GCG三受体激动剂','https://www.aace.com/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g127','2025 JSH血压升高和高血压管理指南','心血管','2025','JSH_GXY','【概述】日本高血压学会发布的血压升高和高血压管理指南修订版
【诊断标准】
· 高血压：诊室血压≥140/90mmHg
· 正常高值：130-139/85-89mmHg
· 家庭血压：≥135/85mmHg
【风险评估】
· 心血管风险分层
· 靶器官损害评估
· 合并症筛查
【治疗目标】
· 一般：<130/80mmHg
· 老年（≥75岁）：<140/90mmHg
· 糖尿病/CKD：<130/80mmHg
【药物治疗】
· 一线：CCB、ARB、ACEI、利尿剂
· 联合：ARB+CCB（日本常用）
· 难治性高血压：加用螺内酯
· 新进展：
  - SGLT2i（合并糖尿病/心衰）
  - 内皮素受体拮抗剂（研究阶段）
【生活方式】
· 限盐（<6g/d）
· DASH饮食
· 运动
· 减重
· 限酒','https://www.jpn-heart.or.jp/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g128','2025 SOGC原发性痛经诊断与管理指南','妇产科','2025','SOGC_TJ','【概述】加拿大妇产科医师学会发布的原发性痛经管理指南更新
【定义】
· 无盆腔器质性病变的月经期疼痛
· 影响日常活动
【诊断】
· 病史：疼痛特点、持续时间、伴随症状
· 体检：排除器质性病变
· 辅助检查：
  - 超声（排除子宫内膜异位症、腺肌症）
  - 必要时MRI、腹腔镜
【鉴别诊断】
· 继发性痛经：
  - 子宫内膜异位症
  - 子宫腺肌症
  - 盆腔炎症
  - 子宫肌瘤
【治疗】
· 一线：NSAIDs
  - 布洛芬、萘普生、甲芬那酸
  - 月经来潮时或前1-2天开始
· 二线：激素治疗
  - 口服避孕药（COC）
  - LNG-IUS（曼月乐）
  - 连续使用（跳过安慰剂周）
· 非药物：
  - 热敷
  - TENS（经皮电刺激）
  - 运动
· 难治性：
  - GnRH激动剂
  - 手术（最后选择）','https://sogc.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g129','2026 Kleefstra综合征国际临床循证指南','其他','2026','KLEEFSTRA','【概述】Kleefstra综合征（KS）国际临床循证指南
【遗传学】
· 9q34.3微缺失或EHMT1突变
· 常染色体显性遗传
【临床表现】
· 智力障碍（中重度）
· 肌张力低下
· 特征性面容
· 自闭症谱系特征
· 睡眠障碍
· 肥胖（青少年期）
· 先天性心脏病
· 肾脏异常
【诊断】
· 临床怀疑→基因检测（CMA、WES）
· 确认EHMT1变异
【管理】
· 多学科团队：遗传科、神经科、发育行为科、心内科、肾内科
· 早期干预：
  - 物理治疗
  - 言语治疗
  - 作业治疗
· 行为管理：
  - 结构化环境
  - 行为分析（ABA）
· 药物：
  - 睡眠障碍：褪黑素
  - 行为问题：利培酮（谨慎）
  - 癫痫：抗癫痫药物
· 监测：
  - 年度心脏超声
  - 肾功能
  - 甲状腺功能
  - 视力听力','https://www.rarediseases.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g130','2026 21-羟化酶缺乏症临床管理指南','内分泌','2026','CAH_GL','【概述】先天性肾上腺皮质增生症（CAH）最常见类型的管理指南
【分型】
· 经典型（失盐型、单纯男性化型）
· 非经典型（迟发型）
【诊断】
· 新生儿筛查：17-OHP升高
· 确诊：
  - 血清17-OHP、雄烯二酮、睾酮
  - ACTH兴奋试验
  - CYP21A2基因检测
【治疗】
· 糖皮质激素替代：
  - 氢化可的松（儿童首选，不影响生长）
  - 泼尼松/地塞米松（成人）
  - 分次给药（模拟生理节律）
· 盐皮质激素（失盐型）：
  - 氟氢可的松
  - 钠补充（婴幼儿）
· 应激剂量：
  - 发热、手术、创伤时2-3倍
  - 危重时静脉氢化可的松
· 监测：
  - 17-OHP、雄烯二酮
  - 生长速度、骨龄
  - 血压、电解质
【手术】
· 女性外生殖器整形（争议）
· 时机：6-12月龄
【成人管理】
· 生育力保护
· 骨密度监测
· 代谢综合征筛查','https://www.endocrine.org/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g131','2026意大利法布里病神经学管理及结局指标共识','神经','2026','FABRY_BING','【概述】意大利神经学会发布的法布里病（Fabry disease）神经学管理共识
【神经表现】
· 周围神经：
  - 神经病理性疼痛（肢端烧灼痛）
  - 少汗/无汗
  - 胃肠道动力障碍
· 中枢神经：
  - 卒中/TIA（后循环为主）
  - 白质病变
  - 听力下降
  - 眩晕
【酶替代治疗（ERT）】
· 阿加糖酶α（Replagal）
· 阿加糖酶β（Fabrazyme）
· 起始时机：确诊后尽早
· 剂量：每2周静脉输注
【口服药物】
· Migalastat（Galafold）：可口服分子伴侣
· 适用：特定GLA突变（可折叠突变）
【监测指标】
· 血浆Lyso-Gb3
· 肾功能（eGFR、蛋白尿）
· 心脏（超声、MRI）
· 神经：
  - 疼痛评分
  - 听力测试
  - 脑MRI（白质病变）
  - 自主神经功能
【结局指标】
· 疼痛缓解
· 肾功能稳定
· 卒中预防
· 生活质量','https://www.sins.it/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g132','WHO GLP-1药物治疗肥胖症全球指南','内分泌','2026','WHO_GLP1_FP','【概述】世界卫生组织发布的GLP-1受体激动剂治疗肥胖症全球指南
【推荐】
· GLP-1RA可作为肥胖症药物治疗选择
· 适用人群：
  - BMI≥30 kg/m²
  - BMI≥27 kg/m²合并体重相关合并症
· 优先用于：
  - 生活方式干预失败
  - 合并T2DM、心血管疾病
【药物】
· 利拉鲁肽3.0mg（Saxenda）
· 司美格鲁肽2.4mg（Wegovy）
· 替尔泊肽（Zepbound）
【疗效】
· 平均减重10-20%
· 改善血糖、血压、血脂
· 降低心血管事件风险（SELECT研究）
【注意事项】
· 胃肠道不良反应（恶心、呕吐、腹泻）
· 甲状腺C细胞肿瘤风险（动物实验）
· 胰腺炎风险
·  gallbladder disease
· 停药后体重反弹
【全球可及性】
· 价格高昂限制低收入国家使用
· WHO呼吁降低价格、增加可及性
· 生物类似药开发
【联合策略】
· 饮食运动干预为基础
· 心理行为支持
· 代谢手术（BMI≥40或≥35合并症）','https://www.who.int/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g133','医疗机构人工智能应用与治理专家共识（2026版）','其他','2026','AI_YLJG','【概述】北京卫生法学会等40余家机构联合制定的AI医疗应用治理共识
【六大维度】
1. 准入评估：
   · AI产品注册审批
   · 临床验证要求
   · 伦理审查
2. 临床应用：
   · 辅助诊断（影像、病理）
   · 辅助治疗决策
   · 药物研发
   · 医院管理
3. 患者权益保障：
   · 知情同意
   · 隐私保护
   · 数据安全
   · 责任界定
4. 数据治理：
   · 数据质量
   · 数据标注
   · 数据共享
   · 去标识化
5. 风险管理：
   · 算法偏见
   · 误诊风险
   · 系统故障
   · 应急预案
6. 素养提升：
   · 医务人员AI培训
   · 患者教育
   · 公众科普
【核心原则】
· 以人为本
· 安全可控
· 公平公正
· 透明可解释','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g134','FUTURE-AI医疗保健可信赖可部署AI国际共识指南','其他','2026','FUTURE_AI','【概述】FUTURE-AI项目发布的医疗保健领域AI国际共识指南
【六大原则】
· Fair（公平）：
  - 避免算法偏见
  - 多样化训练数据
  - 不同人群性能一致
· Universal（普适）：
  - 跨机构、跨人群适用
  - 标准化接口
  - 互操作性
· Transferable（可迁移）：
  - 跨域泛化能力
  - 持续学习
  - 知识迁移
· Understandable（可理解）：
  - 可解释AI
  - 临床决策透明
  - 医生可理解输出
· Robust（稳健）：
  - 对抗攻击鲁棒性
  - 分布外数据检测
  - 不确定性量化
· Explainable（可解释）：
  - 模型决策依据
  - 特征重要性
  - 可视化解释
【部署流程】
· 开发→验证→注册→临床评估→监测
· 全生命周期管理
【监管建议】
· 建立AI医疗器械审批框架
· 上市后监测
· 不良事件报告','https://future-ai.eu/') on conflict (id) do nothing;
insert into guidelines(id,title,system,year,py,content,source_url) values('g135','中国器官移植人工智能辅助临床决策专家共识（2026版）','其他','2026','AI_QGYZ','【概述】中国器官移植领域AI辅助临床决策专家共识
【应用场景】
· 供体评估：
  - 供肝/供肾质量评估
  - 脂肪变性定量
  - 纤维化评分
· 受体匹配：
  - 免疫配型优化
  - 等待名单优先级
  - 地理分配
· 手术规划：
  - 血管重建方案
  - 3D可视化
  - 手术风险评估
· 术后管理：
  - 排斥反应早期预警
  - 药物浓度预测
  - 感染风险预测
  - 长期预后评估
【AI技术】
· 深度学习（影像分析）
· 机器学习（风险预测）
· 自然语言处理（病历分析）
· 知识图谱（决策支持）
【数据要求】
· 多中心、大样本
· 标准化数据格式
· 质量控制
· 隐私保护
【伦理原则】
· 公平分配
· 透明决策
· 人类最终决策权
· 患者知情同意','https://www.cma.org.cn/') on conflict (id) do nothing;
insert into laws(id,title,year,content,py) values('l001','处方管理办法','2007','处方管理办法（2007年卫生部令第53号），自2007年5月1日起施行，共8章。

【处方管理一般规定】处方标准由卫生部统一规定，处方内容分前记（患者信息）、正文（药品名/剂型/规格/数量/用法用量）、后记（医师/药师签名）。处方颜色：普通白色、急诊淡黄色、儿科淡绿色、麻精一淡红色、精二白色。

【处方权的获得】注册执业医师在执业地点取得处方权；执业助理医师在乡/镇/村医疗机构可独立执业。麻醉药品/第一类精神药品处方权需经培训考核合格。

【处方开具规范】根据诊疗规范开具，急诊处方≤3日用量、门诊普通≤7日、慢性病可延长并注明理由。处方当日有效，延期不超过3天。每张处方≤5种药品。

【处方的调剂】药师核发药品须严格"四查十对"：①查处方（对科别、姓名、年龄）；②查药品（对药名、剂型、规格、数量）；③查配伍禁忌（对药品性状、用法用量）；④查用药合理性（对临床诊断）。严重不合理用药应拒绝调剂。

【监督管理】医疗机构应建立处方点评制度，实施动态监测及超常预警。处方保存期限：普通/急诊/儿科1年，毒性/精二2年，麻醉/精一3年。',null) on conflict (id) do nothing;
insert into laws(id,title,year,content,py) values('l002','抗菌药物临床应用管理办法','2012','抗菌药物临床应用管理办法（2012年卫生部令第84号），自2012年8月1日起施行，共6章59条。

【分级管理制度】抗菌药物根据安全性、疗效、耐药性、价格等因素分为三级：
- 非限制使用级：经长期临床应用证明安全有效，耐药性影响小，价格相对较低
- 限制使用级：安全有效但对细菌耐药性影响较大，或价格相对较高
- 特殊使用级：具有明显或严重不良反应不宜随意使用，或需严格控制避免过快耐药，或临床资料较少，或价格昂贵

【处方权限管理】非限制使用级→初级及以上医师；限制使用级→中级及以上医师；特殊使用级→高级职称医师。特殊使用级不得在门诊使用，须经指定专业人员会诊同意。紧急情况可越级使用，24小时内补办手续。

【供应目录管理】同一通用名品种，注射剂型和口服剂型各≤2种。目录调整周期≥1年，原则上2年。新品种引进须抗菌药物工作组2/3以上及药事委员会2/3以上委员同意。

【细菌耐药预警】耐药率>30%通报预警；>40%慎重经验用药；>50%参照药敏结果选用；>75%暂停临床应用。

【技术支撑】二级以上医院须设感染性疾病科、配备临床药师、建立临床微生物室。',null) on conflict (id) do nothing;
insert into laws(id,title,year,content,py) values('l003','麻醉药品和精神药品管理条例','2005','麻醉药品和精神药品管理条例（国务院令第442号），2005年11月1日起施行，共9章89条。

【管制原则】国家对麻醉药品药用原植物及麻醉药品和精神药品实行管制。精神药品分第一类和第二类。未经许可任何单位/个人不得从事相关活动。

【种植与生产】国家根据需求确定总量，实行年度计划管理和定点生产制度。麻醉药品和第一类精神药品临床试验不得以健康人为受试对象。

【经营制度】实行定点经营。全国性批发企业可跨省批发；区域性批发企业在省内批发。必须送货到医疗机构，医疗机构不得自行提货。麻醉药品和第一类精神药品不得零售，第二类精神药品凭处方销售（禁止向未成年人销售）。处方保存2年。

【使用管理】医疗机构须取得麻醉药品/第一类精神药品购用印鉴卡。执业医师须经培训考核取得处方资格，不得为自己开具该处方。麻醉药品专用处方保存≥3年。癌症疼痛等危重患者有权申请用药。

【储存要求】专库/专柜（保险柜），双人双锁管理，监控报警联网。专用账册保存≥5年。

【法律责任】定点批发企业违规销售→货值2-5倍罚款并取消资格；执业医师违规开具→取消处方资格/吊销执业证书；致使药品流入非法渠道→追究刑事责任。',null) on conflict (id) do nothing;
insert into laws(id,title,year,content,py) values('l004','药品管理法','2019','中华人民共和国药品管理法（2019年8月26日修订），自2019年12月1日起施行，共12章155条。

【总则】立法目的：加强药品管理，保证药品质量，保障公众用药安全和合法权益，保护和促进公众健康。药品管理以人民健康为中心，坚持风险管理、全程管控、社会共治。核心制度：药品上市许可持有人制度、药品追溯制度、药物警戒制度。

【药品研制和注册】以临床价值为导向鼓励创新；遵守GLP/GCP规范；临床试验60个工作日内决定（逾期视为同意）；附条件批准用于严重危及生命且无有效治疗手段的疾病。

【药品上市许可持有人】持有人对药品全生命周期（非临床→临床→生产经营→上市后→不良反应监测）承担全程责任。可自行生产或委托生产（血液制品/麻精药品等不得委托）。境外持有人须指定中国境内企业法人承担连带责任。

【药品生产】须取得药品生产许可证，遵守GMP。按国家药品标准和核准工艺生产，记录完整准确不得编造。

【药品经营】须取得药品经营许可证。处方药与非处方药分类管理。网络销售：疫苗/血液制品/麻精毒放等特殊管理药品不得网售。第三方平台须备案并履行资质审核义务。

【医疗机构药事管理】配备依法资格认定的药师，遵循安全有效经济原则审核处方。医疗机构制剂须取得制剂许可证，不得在市场销售。

【药品上市后管理】持有人应制定风险管理计划，主动开展上市后研究。不良反应监测、召回制度、上市后评价。疗效不确切/不良反应大→注销注册证书。

【法律责任要点】
- 生产销售假药：货值15-30倍罚款，吊销许可证
- 生产销售劣药：货值10-20倍罚款
- 假劣药责任人：没收收入、处收入30%-3倍罚款、终身禁业
- 首负责任制：先行赔付后可追偿；价款10倍或损失3倍赔偿金（最低1000元）
- 从重处罚：以特殊管理药品冒充、以孕产妇儿童为主要对象的假劣药等',null) on conflict (id) do nothing;
insert into laws(id,title,year,content,py) values('l005','药品管理法实施条例','2026','中华人民共和国药品管理法实施条例（国务院令第828号），2025年12月31日国务院第76次常务会议修订通过，自2026年5月15日起施行。

【研制与注册】四种加快上市程序：突破性治疗药物、附条件批准、优先审评审批、特别审批。化学原料药与药品一并审评审批。药品注册证书有效期5年。

【数据保护与市场独占期】
- 含新型化学成份药品未披露试验数据：注册之日起≤6年保护
- 儿童用药品新品种/新剂型/新规格：≤2年市场独占期
- 罕见病治疗用药品：≤7年市场独占期（须履行供应承诺）

【药品上市许可持有人】应设立独立质量管理部门，配备质量受权人独立履行上市放行职责。应建立健全药物警戒体系。提供无障碍格式（语音/大字/盲文/电子）说明书，电子版与纸质版同等效力。

【药品生产】许可证有效期5年。血液制品/麻精药品等不得委托生产。中药配方颗粒不得使用购进饮片生产、不得委托生产，经营企业不得经营中药配方颗粒。

【药品经营】许可证有效期5年。零售企业应凭处方销售处方药。网络销售禁售清单：疫苗/血液制品/麻精毒放等。医师在网络诊疗中不得开具特殊管理药品处方。鼓励处方流转。

【医疗机构药事管理】同情用药：正在临床试验的药物可用于无法参加临床试验的同类患者。制剂许可证有效期5年，制剂注册证书3年。儿童用医疗机构制剂纳入常用制剂清单。

【法律责任】网络销售禁售药品：货值10-20倍罚款。履行进货检查验收义务+不知情→免予处罚。提供虚假资料→10年不受理+罚款50-500万元。',null) on conflict (id) do nothing;
insert into laws(id,title,year,content,py) values('l006','药品生产质量管理规范（GMP）','2011','药品生产质量管理规范（2010年修订，卫生部令第79号），自2011年3月1日起施行，共14章313条。

【质量管理体系】GMP是药品生产管理和质量控制的基本要求，旨在最大限度降低药品生产过程中的污染、交叉污染以及混淆、差错等风险，确保持续稳定生产出符合预定用途和注册要求的药品。企业应建立涵盖从原料采购到成品放行全过程的药品质量管理体系。

【机构与人员】企业应设立独立的质量管理部门，履行质量保证和质量控制职责。生产负责人和质量负责人不得互相兼任。质量受权人独立履行产品放行职责。直接接触药品人员每年体检。

【厂房与设施】厂房的选址、设计、布局应最大限度降低污染风险。洁净区按A/B/C/D四个级别划分，须定期监测悬浮粒子、微生物等指标。

【物料与产品】原辅料和包装材料须从合格供应商采购，按规定验收。药品须按规定条件储存。不合格物料/产品隔离管理。

【确认与验证】关键设施设备、生产工艺、清洁方法等须经过验证。变更后须重新确认/验证。

【文件管理】应建立覆盖全过程的文件系统，包括质量标准、生产工艺规程、批生产记录、批包装记录等。记录须及时、真实、完整、可追溯，不得涂改（改错须签名标注日期）。

【生产管理】严格按批准的工艺生产，每批产品须有批生产记录。防止生产过程中的污染和交叉污染（物理隔离、时间隔离、密闭系统等）。清场管理。

【质量控制】质量控制实验室应独立设置，具备相应检验能力。留样观察、持续稳定性考察。

【委托生产与委托检验】受托方须具备相应资质，签订书面合同明确各方责任。

【投诉与召回】建立药品投诉、召回管理制度，定期评估。',null) on conflict (id) do nothing;
insert into laws(id,title,year,content,py) values('l007','疫苗管理法','2019','中华人民共和国疫苗管理法（2019年6月29日通过），自2019年12月1日起施行，共11章100条。

【总则】国家对疫苗实行最严格的管理制度。坚持安全第一、风险管理、全程管控、科学监管、社会共治。实行免疫规划制度，居住在中国境内的居民依法享有接种免疫规划疫苗的权利和义务。

【疫苗研制和注册】鼓励疫苗创新，支持多联多价等新型疫苗研制。临床试验应审慎选择受试者。附条件批准用于重大公共卫生急需。

【疫苗生产和批签发】疫苗上市许可持有人应当具备疫苗生产能力，不得委托生产。国家对疫苗实行批签发制度（每批产品售前须经指定机构审核检验）。

【疫苗流通】疫苗实行统一采购和配送。疫苗储存运输全过程处于规定温度环境，实时监测并记录。疫苗生产企业直接配送至疾病预防控制机构，不得通过其他渠道配送。

【预防接种】接种单位须取得医疗机构执业许可证，具备符合条件的执业医师/护士。接种应遵守"三查七对一验证"原则。接种记录保存≥5年。

【异常反应监测和处理】建立疑似预防接种异常反应监测系统。预防接种异常反应实行补偿制度（全国统一基础保险+省级补充保险）。

【监督管理】实行全程信息化追溯。国家实行疫苗安全信息统一公布制度。建立疫苗责任强制保险制度。

【法律责任】生产销售假疫苗→货值15-50倍罚款+吊销许可证；劣疫苗→货值10-30倍罚款；责任人终身禁业+拘留；民事责任可请求支付价款10倍或损失3倍赔偿金。',null) on conflict (id) do nothing;
insert into laws(id,title,year,content,py) values('l008','药品经营质量管理规范（GSP）','2016','药品经营质量管理规范（2016年修正，国家食品药品监督管理总局令第28号），共4章186条。

【总则】GSP是药品经营管理和质量控制的基本准则。企业应在药品采购、储存、销售、运输等环节采取有效措施，保证药品质量。企业负责人是药品质量的主要责任人。

【质量管理体系】建立覆盖药品经营全过程的质量管理体系，设立质量领导组织和质量管理机构，配备质量负责人和质量管理员。制定质量管理体系文件（质量管理制度、部门职责、操作规程、记录凭证等）。

【人员管理】企业负责人应具有大学专科以上学历或中级以上专业技术职称。质量负责人应具有执业药师资格和3年以上药品经营质量管理工作经验。质量管理、验收、养护人员应具有药学或医学等相关专业学历。直接接触药品人员每年体检。

【采购管理】从合法企业采购药品，审核供货方资质（许可证、GMP/GSP证书、营业执照等）。采购时应索取发票，发票内容应与实际货物一致。首营企业/首营品种须经质量管理审核批准。

【收货与验收】按规定的程序和标准逐批验收，重点验收药品外观、标签、说明书、批准文号、批号、有效期等。冷藏药品须在冷库内验收。验收记录保存≥5年。

【储存与养护】药品应按温湿度要求储存于相应库房（常温10-30℃/阴凉≤20℃/冷库2-8℃）。实行色标管理：合格品绿色、不合格品红色、待验品黄色。有效期中止期管理，近效期预警。养护人员每日上下午各一次记录温湿度。

【销售与售后】药品出库应遵循"先产先出、近期先出"原则。销售记录保存≥5年。特殊管理药品按国家规定销售。建立退货管理制度和药品召回制度。',null) on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h001','营养素与食物来源','维生素A','WSSA','【功能】维持正常视觉功能、上皮组织完整性、免疫功能。
【食物来源】动物肝脏、鱼肝油、蛋黄、奶制品、胡萝卜、南瓜、菠菜。
【缺乏症状】夜盲症、干眼症、皮肤干燥角化、免疫力下降。
【过量风险】>10000IU/d长期：肝毒性、骨痛、皮肤干燥脱屑。
【对药物的影响】与异维A酸合用增加维生素A中毒风险。') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h002','营养素与食物来源','维生素B1（硫胺素）','WSSBLAS','【功能】碳水化合物代谢、神经系统功能维持。
【食物来源】糙米、全麦、瘦肉、豆类、花生。
【缺乏症状】脚气病（干性：周围神经炎；湿性：心衰）、Wernicke脑病。
【对药物的影响】长期使用利尿剂（呋塞米）可加速B1排泄。') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h003','营养素与食物来源','维生素B6','WSSB','【功能】氨基酸代谢、神经递质合成、血红蛋白合成。
【食物来源】鸡肉、鱼肉、土豆、香蕉、坚果。
【缺乏症状】皮炎、舌炎、周围神经炎、贫血。
【对药物的影响】异烟肼可导致B6缺乏，需同时补充B6（10-50mg/d）。左旋多巴与B6合用会降低药效。') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h004','营养素与食物来源','维生素B12','WSSB','【功能】DNA合成、红细胞成熟、神经系统髓鞘形成。
【食物来源】动物肝脏、肉类、鱼类、蛋类、奶制品。植物性食物几乎不含B12。
【缺乏症状】巨幼细胞性贫血、周围神经病变、脊髓亚急性联合变性。
【对药物的影响】二甲双胍长期使用可影响B12吸收，建议定期监测。PPI长期使用可降低B12吸收。') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h005','营养素与食物来源','维生素C','WSSC','【功能】抗氧化、胶原蛋白合成、促进铁吸收、增强免疫。
【食物来源】新鲜水果（猕猴桃、柑橘、草莓、鲜枣）、蔬菜（西兰花、辣椒、番茄）。
【缺乏症状】坏血病（牙龈出血、皮下出血、伤口愈合不良）。
【对药物的影响】大剂量VC可酸化尿液，影响酸性/碱性药物排泄。与铁剂同服可增加铁吸收。') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h006','营养素与食物来源','维生素D','WSSD','【功能】促进钙磷吸收、骨骼矿化、免疫调节。
【食物来源】深海鱼（三文鱼、沙丁鱼）、鱼肝油、蛋黄、强化奶制品、日晒合成。
【缺乏症状】佝偻病（儿童）、骨质疏松/骨软化（成人）。
【对药物的影响】糖皮质激素长期使用加速VD代谢，需补充VD+钙。苯妥英钠、卡马西平可加速VD代谢。') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h007','营养素与食物来源','维生素K','WSSK','【功能】凝血因子合成（Ⅱ、Ⅶ、Ⅸ、Ⅹ）、骨代谢。
【食物来源】绿叶蔬菜（菠菜、羽衣甘蓝、西兰花）、植物油、肝脏。
【缺乏症状】凝血障碍、出血倾向。
【对药物的影响】华法林通过拮抗VK发挥抗凝作用，需保持每日VK摄入稳定。大量摄入绿叶蔬菜可降低华法林效果。') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h008','营养素与食物来源','钙 Ca','GCA','【功能】骨骼牙齿构成、神经传导、肌肉收缩、凝血。
【食物来源】奶制品、豆制品、小鱼干、芝麻酱、绿叶蔬菜。成人推荐800-1000mg/d。
【对药物的影响】与四环素类、喹诺酮类、双膦酸盐同服影响吸收，需间隔2小时以上。噻嗪类利尿剂减少尿钙排泄。') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h009','营养素与食物来源','钾 K','JK','【功能】维持细胞内外渗透压、神经传导、肌肉收缩、酸碱平衡。
【食物来源】香蕉、土豆、番茄、橙子、豆类、蘑菇。
【缺乏症状】乏力、肌无力、心律失常。
【对药物的影响】利尿剂（呋塞米、氢氯噻嗪）可导致低钾；ACEI/ARB、保钾利尿剂可导致高钾。') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h010','营养素与食物来源','铁 Fe','TFE','【功能】血红蛋白和肌红蛋白的组成成分、氧气运输。
【食物来源】红肉、动物肝脏、动物血、菠菜、黑木耳。
【缺乏症状】缺铁性贫血（小细胞低色素性贫血）。
【对药物的影响】与四环素类、喹诺酮类、左旋多巴同服影响吸收，间隔2小时。与VC同服促进吸收。茶和咖啡中的鞣酸影响铁吸收。') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h011','药物与饮食相互作用','葡萄柚与药物','PTYYYW','葡萄柚（西柚）含有呋喃香豆素，强力抑制肠道CYP3A4酶，导致多种药物血药浓度升高。

【受影响药物】
• 他汀类：阿托伐他汀、辛伐他汀（风险最高）、洛伐他汀
• CCB类降压药：硝苯地平、非洛地平
• 抗心律失常：胺碘酮
• 免疫抑制剂：环孢素、他克莫司
• 抗焦虑：丁螺环酮

【建议】服药期间避免食用葡萄柚及其果汁。') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h012','药物与饮食相互作用','酒精与药物','JJYYW','【双硫仑样反应】头孢类（头孢哌酮、头孢曲松等）、甲硝唑、呋喃唑酮服药前后7天内禁酒。
【其他相互作用】
• 对乙酰氨基酚+酒精：增加肝毒性风险
• 华法林+急性大量饮酒：出血风险增加
• 降糖药+酒精：低血糖风险（尤其空腹饮酒）
• 镇静催眠药+酒精：呼吸抑制风险
• NSAIDs+酒精：消化道出血风险增加') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h013','药物与饮食相互作用','牛奶与药物','NNYYW','【不宜与牛奶同服的药物】
• 四环素类、喹诺酮类抗生素：钙离子螯合影响吸收
• 双膦酸盐（阿仑膦酸钠）：显著降低吸收
• 铁剂：钙影响铁吸收
• 甲状腺素（左甲状腺素钠）：降低吸收

【建议】以上药物与牛奶及奶制品间隔至少2小时服用。') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h014','药物与饮食相互作用','高钾食物与药物','GJSWYYW','服用以下药物时需控制高钾食物摄入：

【致高钾药物】ACEI（培哚普利等）、ARB（氯沙坦等）、保钾利尿剂（螺内酯）、他克莫司、NSAIDs

【高钾食物】香蕉、土豆、番茄、橙子、西瓜、豆类、菠菜

【建议】使用上述药物者定期监测血钾，避免大量摄入高钾食物。') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h015','药物与饮食相互作用','高蛋白饮食与药物','GDBYSYYW','高蛋白饮食对药物的影响：
• 左旋多巴：与氨基酸竞争转运，降低药效，需餐前30min服用
• 华法林：高蛋白饮食增加血清白蛋白，可能影响华法林蛋白结合率
• 丙磺舒：高蛋白饮食可能降低其促尿酸排泄效果
• 茶碱：高蛋白饮食加速茶碱代谢') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h016','药物服用时间','需空腹服用的药物','XKFFYDYW','空腹=餐前1小时或餐后2小时

• 甲状腺素（左甲状腺素钠）：清晨空腹，至少30min后进食
• 双膦酸盐（阿仑膦酸钠）：清晨空腹，大量水送服，保持直立30min
• 质子泵抑制剂（奥美拉唑等）：晨起空腹，餐前30-60min
• 青霉素类（阿莫西林等）：空腹吸收更好
• 利福平：空腹服用吸收最佳') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h017','药物服用时间','需随餐或餐后服用的药物','XSCHCHFYDYW','随餐=与食物同服或餐后立即服

• 二甲双胍：随餐或餐后服，减轻胃肠反应
• 阿司匹林、布洛芬等NSAIDs：餐后服减轻胃刺激
• 阿卡波糖：与第一口饭同嚼服
• 呋喃妥因：与食物同服增加吸收并减轻胃肠反应
• 铁剂：餐后服减轻胃肠刺激（但VC同服促吸收）
• 脂溶性维生素（A、D、E、K）：与含脂肪食物同服增加吸收') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h018','药物服用时间','需睡前服用的药物','XSQFYDYW','• 他汀类（辛伐他汀、普伐他汀等）：胆固醇夜间合成高峰，睡前服效果最佳
• 阿司匹林肠溶片：睡前服减少晨峰效应
• 孟鲁司特钠：睡前服（哮喘/鼻炎症状夜间加重）
• 镇静催眠药：睡前服用
• 钙剂：睡前服用可抑制夜间骨吸收') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h019','药物服用时间','服药与进食时间速查表','FYYJSSJSCB','【餐前30-60分钟】PPI（奥美拉唑等）、多潘立酮、格列美脲、格列吡嗪
【餐前即刻】阿卡波糖、伏格列波糖
【餐中】二甲双胍、消化酶制剂、奥利司他
【餐后】NSAIDs、铁剂、氯化钾、呋喃妥因
【空腹（餐前1h/餐后2h）】甲状腺素、双膦酸盐、青霉素类、利福平、异烟肼
【睡前】他汀类（短半衰期）、阿司匹林肠溶片、孟鲁司特') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h020','特殊人群用药','妊娠期用药分级','RSQYYFJ','FDA妊娠期用药分级：

A级：对照研究显示无风险（维生素、甲状腺素合理剂量）
B级：动物实验无风险，无人类数据（青霉素类、头孢类、对乙酰氨基酚）
C级：动物实验显示风险，无人类数据（多数降压药、糖皮质激素）
D级：有证据显示人类风险（苯妥英钠、卡马西平、华法林）
X级：禁用（异维A酸、沙利度胺、他汀类、利巴韦林）

⚠️ 具体用药请遵医嘱') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h021','特殊人群用药','哺乳期用药注意事项','BRQYYZYSX','【相对安全的药物】青霉素类、头孢类、对乙酰氨基酚、布洛芬
【慎用的药物】阿司匹林（Reye综合征风险）、四环素类（影响婴儿牙齿骨骼）
【禁用的药物】氯霉素（灰婴综合征）、磺胺类（核黄疸）、甲硝唑（暂停哺乳12-24h）

【原则】选择短半衰期药物，喂奶后立即服药。首次用药观察婴儿反应。') on conflict (id) do nothing;
insert into health_edu(id,cat,title,py,content) values('h022','特殊人群用药','老年人用药原则','LNRYYYZ','【Beers标准】老年人潜在不适当用药：
• 避免：苯二氮䓬类（增加跌倒/认知障碍风险）
• 避免：第一代抗组胺药（苯海拉明等，抗胆碱能副作用）
• 慎用：NSAIDs（消化道/肾毒性风险高）
• 慎用：PPI长期使用（骨质疏松、感染风险）

【原则】起始小剂量（通常成人量的1/2-2/3），缓慢滴定。精简用药，避免多重用药。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m001','服药时间',null,'ZJZXSN',null,'至少餐前30分钟服用，与钙剂、铁剂间隔≥4小时。不可与食物同服——食物显著减少吸收。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m002','服药时间',null,'ALLSN',null,'用一大杯白水（非矿泉水）送服，服药后保持上身直立≥30分钟。不可咀嚼或含服。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m003','服药时间',null,'PPIAMLZD',null,'早餐前30-60分钟服用效果最佳。不可与抗酸药同时服用。肠溶片/胶囊必须整粒吞服，不可压碎或咀嚼。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m004','服药时间',null,'TTLXFTTD',null,'胆固醇主要在夜间合成，短半衰期他汀（辛伐他汀、普伐他汀、氟伐他汀）睡前服效果更佳。阿托伐他汀/瑞舒伐他汀可在一天中任何时间服用。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m005','服用方法',null,'ASPLCRP',null,'必须整片吞服，不可压碎、咀嚼或掰开。肠溶衣保护胃黏膜。建议餐后服用以减少胃肠刺激。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m006','服用方法',null,'EJSG',null,'随餐或餐后立即服用可减轻恶心、腹泻等消化道反应。缓释片必须整片吞服。如漏服一剂，想起时尽快补服，但不可同时服用两剂。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m007','服用方法',null,'AKBT',null,'与第一口饭一起嚼碎服用。如果服药后发生低血糖，必须用葡萄糖（而不是蔗糖或普通食物）纠正——阿卡波糖会抑制蔗糖分解。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m008','服用方法',null,'XSGY',null,'心绞痛发作时立即舌下含服1片，不可吞服。5分钟后症状不缓解可重复1次，最多3次。坐位或半卧位含服以防体位性低血压。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m009','不良反应告知',null,'HFL',null,'必须按医嘱定期监测INR。注意任何异常出血：牙龈出血、皮肤瘀斑、黑便、血尿。外伤后止血时间可能延长。饮食中维生素K摄入量需保持稳定（绿叶蔬菜每日量基本不变）。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m010','不良反应告知',null,'ACEIPDPLD',null,'约5-20%患者出现干咳，多为刺激性、夜间加重。通常用药后1周至6个月内出现。如无法忍受，请告知医师更换为ARB类药物。不可擅自停药。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m011','不良反应告知',null,'ADT',null,'• 肺毒性：出现干咳、呼吸困难立即就医
• 皮肤：防晒！暴露部位可能变蓝灰色
• 眼：每6-12个月眼科检查
• 甲状腺：每3-6个月检查甲功
• 肝功能：定期监测肝酶') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m012','不良反应告知',null,'JADL',null,'服用MTX后24小时补充叶酸5mg，可显著减少口腔炎、恶心、肝酶升高等不良反应而不影响疗效。出现口腔溃疡、发热、异常出血立即就医。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m013','特殊人群',null,'RSQAQYY',null,'A级安全：左甲状腺素、叶酸
B级相对安全：青霉素类、头孢类、对乙酰氨基酚、胰岛素
C级权衡：多数降压药、SSRIs
D级有风险：华法林、苯妥英钠、卡马西平、锂盐
X级禁用：异维A酸、他汀类、利巴韦林、沙利度胺') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m014','特殊人群',null,'BRQAQYY',null,'• 安全：青霉素类、头孢类、对乙酰氨基酚、布洛芬、胰岛素
• 慎用：阿司匹林（Reye综合征风险）、四环素类（影响牙齿骨骼）
• 暂停哺乳：甲硝唑（12-24h后恢复）、放射性药物
• 原则：喂奶后立即服药，选择短半衰期药物') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m015','药物储存',null,'YDS',null,'未开封：2-8℃冷藏保存（冰箱冷藏室，不可冷冻！）。
开封后：室温（<25℃）保存，4周内用完。
避免阳光直射和剧烈震荡。
旅行时使用保温袋携带。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m016','药物储存',null,'XSGYP',null,'必须保存在原装棕色瓶中，密封避光。开封后3-6个月失效。随身携带时避免贴身放置（体温加速分解）。药物失效表现：舌下含服无麻刺感。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m017','药物储存',null,'YSJZJ',null,'多数双歧杆菌、乳杆菌制剂需2-8℃冷藏保存，避免高温和潮湿。服用时用<40℃温开水冲服，高温会杀死活菌。与抗生素间隔≥2小时服用。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m018','生活指导',null,'TTL',null,'服药期间避免食用葡萄柚（西柚）及其果汁。葡萄柚抑制CYP3A4，可导致他汀血药浓度升高数倍，增加肌病和肝损伤风险。普通柚子、橙子、柠檬无此影响。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m019','生活指导',null,'TBLJXZ',null,'服用头孢哌酮、头孢曲松、头孢孟多、甲硝唑、呋喃唑酮期间及停药后7天内严禁饮酒和含酒精制品。可能发生双硫仑样反应：面部潮红、头痛、恶心呕吐、心悸，严重者可休克。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m020','生活指导',null,'HFL',null,'• 保持每日绿叶蔬菜（菠菜、西兰花等）摄入量基本不变
• 避免大量摄入蔓越莓汁、银杏、大蒜提取物
• 饮酒需限量（急性大量饮酒增加出血风险）
• 补充任何维生素或中药前咨询医师') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m021','漏服处理',null,'KFBYY',null,'漏服<12小时：立即补服，下次按时服用。
漏服>12小时：立即补服漏掉的药片，继续按时服剩余药片，未来7天内加用屏障避孕法。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m022','漏服处理',null,'KSS',null,'发现漏服后立即补服。如果接近下次服药时间（<2小时），直接跳过漏服的剂量，按原时间服下一次。不可一次服用双倍剂量！') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m023','漏服处理',null,'HFL',null,'当天内发现漏服：立即补服。
次日才发现：跳过漏服的剂量，不可加倍。
连续漏服≥2天：立即联系医师，可能需要重新调整剂量。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m024','药物相互作用',null,'NSAIDSACEI',null,'布洛芬、双氯芬酸等NSAIDs可减弱ACEI/ARB的降压效果，并增加肾功能损害风险。如需长期合用，需密切监测血压和肾功能。对乙酰氨基酚无此相互作用。') on conflict (id) do nothing;
insert into med_edu(id,cat,drug,py,key,detail) values('m025','药物相互作用',null,'PPILBGL',null,'奥美拉唑、艾司奥美拉唑抑制CYP2C19酶，减少氯吡格雷活性代谢物生成。建议改用泮托拉唑、雷贝拉唑（影响较小），或直接使用替格瑞洛。') on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i001',null,'青霉素G钠','QMSGN','0.9%氯化钠','1万-4万U/mL','30-60min滴完','水溶液不稳定，需即配即用。不可与葡萄糖液配伍（pH<5.0降解加速）。与氨基糖苷类在同一容器中混合致效价降低。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i002',null,'头孢曲松钠','TBQSN','0.9%氯化钠或5%葡萄糖','20-40mg/mL','≥30min','含钙溶液（林格液、含钙营养液）配伍禁忌，可形成沉淀。新生儿禁止同时输注含钙溶液。与含乙醇药物有双硫仑风险。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i003',null,'头孢哌酮舒巴坦','TBPTSBT','0.9%氯化钠或5%葡萄糖','20-40mg/mL','30-60min','与含钙溶液禁忌。与氨基糖苷类、甲硝唑在体外配伍禁忌。含舒巴坦，对青霉素过敏者慎用。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i004',null,'哌拉西林他唑巴坦','PLXLTZBT','0.9%氯化钠或5%葡萄糖','40-80mg/mL','30min','与氨基糖苷类体外配伍禁忌（在同一容器内失活）。不可与碳酸氢钠溶液配伍。与阿昔洛韦配伍禁忌。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i005',null,'美罗培南','MLPN','0.9%氯化钠','1-20mg/mL','15-30min(推注) 30-60min(滴注)','与丙戊酸钠配伍禁忌（使其血药浓度下降60-100%）。与多种维生素、葡萄糖酸钙配伍后有沉淀。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i006',null,'万古霉素','WGMS','0.9%氯化钠或5%葡萄糖','≤5mg/mL','≥60min（过快致红人综合征）','不可与碱性溶液配伍。与肝素、氨茶碱、地塞米松等有多种配伍禁忌。单独输注通道。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i007',null,'左氧氟沙星注射液','ZYFSXZSY','0.9%氯化钠或5%葡萄糖','2-5mg/mL','≥60min(500mg)','避免与含金属离子（Ca²⁺、Mg²⁺、Fe²⁺等）的输液同时输注。与肝素、呋塞米、胰岛素配伍禁忌。遮光输注。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i008',null,'莫西沙星注射液','MXSXZSY','直接输注原液或稀释','1.6mg/mL','≥60min','与10%氯化钠、20%甘露醇、碳酸氢钠配伍禁忌。仅可与其他相容输液在同一管路输注。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i009',null,'甲硝唑注射液','JXZZSY','0.9%氯化钠或5%葡萄糖','1-5mg/mL','≥30min','与含乙醇溶液及药物禁忌。与氨苄西林、苯妥英钠体外配伍禁忌。输液袋需遮光。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i010',null,'阿奇霉素注射液','AQMSZSY','先用注射用水溶解','1-2mg/mL','≥60min(500mg) ≥3h(高浓度)','不可静脉推注。与含氯化钠高渗液配伍后产生沉淀。与大环内酯类、茶碱有相互作用。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i011',null,'奥美拉唑（注射用）','AMLZZSY','0.9%氯化钠（不可用葡萄糖）','0.4mg/mL','20-30min','用0.9%氯化钠溶解和稀释，不可使用葡萄糖液。即配即用，4h内使用。与多种药物配伍变色或沉淀。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i012',null,'氨茶碱注射液','ACJZSY','0.9%氯化钠或5%葡萄糖','1-2mg/mL','缓慢输注（过快致心律失常）','与维生素C、胰岛素、氢化可的松、氯丙嗪等多种药物配伍禁忌。pH<8时析出茶碱沉淀。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i013',null,'呋塞米注射液','FSMZSY','0.9%氯化钠（不可用葡萄糖）','1-2mg/mL','≤4mg/min','不可与酸性溶液（葡萄糖、维生素C等）混合。与多巴胺、多巴酚丁胺、庆大霉素等多种药物禁忌。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i014',null,'氯化钾注射液','LHJZSY','0.9%氯化钠或5%葡萄糖','≤0.3%(40mmol/L)','≤10-20mmol/h（外周）','绝对禁止直接静脉推注！高浓度需从中心静脉给药。与胰岛素合用需注意血糖变化。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i015',null,'葡萄糖酸钙注射液','PTTSGZSY','0.9%氯化钠或5%葡萄糖','0.5-1g/50-100mL','缓慢（≥10min）','与含磷酸盐、碳酸盐的溶液配伍禁忌（形成沉淀）。与头孢曲松禁忌。与洋地黄类合用禁。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i016',null,'胰岛素注射液','YDSZSY','0.9%氯化钠','0.1-1U/mL','根据血糖调整','单独输注通道。吸附于输液袋和管路（需预冲）。与多巴胺、多巴酚丁胺在同一容器中失活。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i017',null,'多巴胺注射液','DBAZSY','0.9%氯化钠或5%葡萄糖','0.8-3.2mg/mL','2-20μg/kg/min','碱性溶液中失活（不可与碳酸氢钠配伍）。与呋塞米直接混合后变色。遮光输注。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i018',null,'硝酸甘油注射液','XSGYZSY','0.9%氯化钠或5%葡萄糖','50-200μg/mL','10-200μg/min','吸附于PVC输液器（需用PE/玻璃输液器）。避光输注。与肝素在体外配伍禁忌。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i019',null,'甘露醇注射液','GLCZSY','原液20%直接使用','20%(125mL/250mL)','30-60min内输完','低温析出结晶时需加热溶解后使用。不可与其他药物混合在同一容器。心衰患者慎用。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i020',null,'丙泊酚注射液','BPFZSY','原液直接使用','10mg/mL','根据临床需要','单独输注通道。与其他药物配伍稳定性差。开启后12h内使用。含大豆油，过敏者禁用。',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i021',null,'四环素类 + 含金属离子药物',null,null,null,null,null,'含Ca/Mg/Al/Fe制剂、牛奶、抗酸药','形成不溶性螯合物，显著降低吸收。需间隔至少2小时服用。多西环素受影响较小。') on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i022',null,'喹诺酮类 + 含金属离子药物',null,null,null,null,null,'含Ca/Mg/Al/Fe制剂、硫糖铝、去铁酮','形成不溶性螯合物，生物利用度降低30-90%。需间隔至少2小时。') on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i023',null,'华法林 + 多种药物',null,null,null,null,null,'阿司匹林/NSAIDs、抗生素（头孢类、氟康唑、甲硝唑）、胺碘酮、甲状腺素','增强抗凝作用，出血风险显著增加。合并用药时需增加INR监测频率。含VK食物（绿叶蔬菜）需保持摄入量稳定。') on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i024',null,'PPI + 氯吡格雷',null,null,null,null,null,'奥美拉唑、艾司奥美拉唑','PPI抑制CYP2C19，降低氯吡格雷活性代谢物生成。建议使用泮托拉唑或雷贝拉唑作为替代。') on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i025',null,'他汀类 + CYP3A4抑制剂',null,null,null,null,null,'环孢素、克拉霉素、伊曲康唑、葡萄柚汁','他汀血药浓度显著升高，横纹肌溶解风险增加。辛伐他汀/阿托伐他汀需特别关注。瑞舒伐他汀/普伐他汀受影响较小。') on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i026',null,'ACEI/ARB + 保钾药',null,null,null,null,null,'螺内酯、氨苯蝶啶、补钾制剂','高钾血症风险。合用需监测血钾和肾功能。糖尿病患者风险更高。') on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i027',null,'甲氨蝶呤 + NSAIDs/磺胺',null,null,null,null,null,'布洛芬、萘普生、复方新诺明','竞争性抑制肾小管分泌，MTX清除减少，毒性增加（骨髓抑制、肝毒性）。MTX治疗期间避免合用。') on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i028',null,'地高辛 + 多种药物',null,null,null,null,null,'胺碘酮、维拉帕米、奎尼丁、低钾（利尿剂导致）','显著增加地高辛血药浓度和中毒风险（心律失常、视觉异常）。低钾、低镁加重地高辛毒性。') on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i029',null,'锂盐 + NSAIDs/利尿剂',null,null,null,null,null,'布洛芬、氢氯噻嗪','减少锂的肾排泄，血锂浓度显著升高，中毒风险增加。需密切监测血锂浓度。') on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i030',null,'避孕药 + 酶诱导剂',null,null,null,null,null,'卡马西平、苯妥英钠、利福平、圣约翰草','加速雌激素代谢，避孕失败风险显著增加。建议改用非激素避孕方式。') on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i031',null,'常用输液载体选择','CYSYZTXZ','一图速查',null,null,'【只能用0.9%氯化钠】奥美拉唑、泮托拉唑、呋塞米、两性霉素B、氨苄西林
【只能用5%葡萄糖】硝普钠、胺碘酮、普罗帕酮、盐酸氨溴索注射液
【两者均可】青霉素类、头孢类（除头孢曲松禁与含钙液）、喹诺酮类、万古霉素
【优先氯化钠】环丙沙星（避免与葡萄糖产生沉淀）',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i032',null,'输液速度控制','SYSDKZ','速度速查',null,null,'【慢速（≥60min）】万古霉素、左氧氟沙星500mg、阿奇霉素、莫西沙星（防红人综合征、QT延长）
【中速（30-60min）】头孢类、青霉素类、PPI
【快速（15-30min）】甘露醇（降颅压）、常规抗生素
【极慢（按mL/h计）】胰岛素、多巴胺、硝酸甘油（微量泵控制）
【绝对禁止】氯化钾、高浓度葡萄糖静脉推注',null,null) on conflict (id) do nothing;
insert into infusion_data(id,cat,drug,py,vehicle,conc,speed,note,interact,detail) values('i033',null,'配伍禁忌快速判断','PWJJKSPD','四步法',null,null,'① 检查pH：酸性药（VitC、胰岛素）不与碱性药（碳酸氢钠、氨茶碱）混
② 检查离子：含Ca²⁺液不与头孢曲松、磷酸盐混
③ 查表确认：同一容器中两种以上药物需查配伍禁忌表
④ 观察外观：配伍后观察30min有无变色、混浊、沉淀',null,null) on conflict (id) do nothing;

-- 更新统计
select setval(pg_get_serial_sequence('guide_systems', 'id'), (select max(id) from guide_systems));

commit;
