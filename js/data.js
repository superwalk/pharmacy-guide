// ═══ 药品分类 ═══
const DRUG_CATEGORIES = [
  { id:'antimicrobial', name:'抗微生物药', subs:['抗生素','抗病毒药','抗真菌药'] },
  { id:'oncology', name:'抗肿瘤药', subs:['化疗药','靶向药','免疫治疗药','辅助用药'] },
  { id:'cardiovascular', name:'心血管系统用药', subs:['降压药','调脂药','抗心律失常药','抗心衰药'] },
  { id:'digestive', name:'消化系统用药', subs:['抗酸药','胃黏膜保护剂','止吐药','止泻药'] },
  { id:'nervous', name:'神经系统用药', subs:['镇静催眠药','抗抑郁药','抗帕金森药','抗癫痫药'] },
  { id:'respiratory', name:'呼吸系统用药', subs:['平喘药','镇咳药','祛痰药','抗组胺药','COPD用药'] },
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
  { id:'ds001', name:'社区获得性肺炎', cat:'呼吸系统疾病', py:'SQHDXFY' },
  { id:'ds002', name:'COPD', cat:'呼吸系统疾病', py:'COPD' },
  { id:'ds003', name:'支气管哮喘', cat:'呼吸系统疾病', py:'ZQGXC' },
  { id:'ds004', name:'高血压', cat:'心血管疾病', py:'GXY' },
  { id:'ds005', name:'心力衰竭', cat:'心血管疾病', py:'XLSJ' },
  { id:'ds006', name:'冠心病', cat:'心血管疾病', py:'GXB' },
  { id:'ds007', name:'胃溃疡', cat:'消化系统疾病', py:'WKY' },
  { id:'ds008', name:'反流性食管炎', cat:'消化系统疾病', py:'FLXSGY' },
  { id:'ds009', name:'2型糖尿病', cat:'内分泌疾病', py:'XTNB' },
  { id:'ds010', name:'痛风', cat:'内分泌疾病', py:'TF' },
  { id:'ds011', name:'甲亢', cat:'内分泌疾病', py:'JK' },
  { id:'ds012', name:'癫痫', cat:'神经系统疾病', py:'DX' },
  { id:'ds013', name:'脑卒中', cat:'神经系统疾病', py:'NZZ' },
  { id:'ds014', name:'肝硬化', cat:'消化系统疾病', py:'GYH' },
  { id:'ds015', name:'尿路感染', cat:'泌尿系统疾病', py:'NLGR' },
  { id:'ds016', name:'心房颤动', cat:'心血管疾病', py:'XFCD' },
  { id:'ds017', name:'心肌梗死', cat:'心血管疾病', py:'XJGS' },
  { id:'ds018', name:'高脂血症', cat:'心血管疾病', py:'GZXZ' },
  { id:'ds019', name:'肺结核', cat:'呼吸系统疾病', py:'FJH' },
  { id:'ds020', name:'肺栓塞', cat:'呼吸系统疾病', py:'FSS' },
  { id:'ds021', name:'胰腺炎', cat:'消化系统疾病', py:'YXY' },
  { id:'ds022', name:'炎症性肠病', cat:'消化系统疾病', py:'YZXCB' },
  { id:'ds023', name:'甲减', cat:'内分泌疾病', py:'JJ' },
  { id:'ds024', name:'高尿酸血症', cat:'内分泌疾病', py:'GNSXZ' },
  { id:'ds025', name:'骨质疏松', cat:'内分泌疾病', py:'GZSS' },
  { id:'ds026', name:'帕金森病', cat:'神经系统疾病', py:'PJSB' },
  { id:'ds027', name:'偏头痛', cat:'神经系统疾病', py:'PTT' },
  { id:'ds028', name:'阿尔茨海默病', cat:'神经系统疾病', py:'AECHMB' },
  { id:'ds029', name:'慢性肾病', cat:'泌尿系统疾病', py:'MXSB' },
  { id:'ds030', name:'肾结石', cat:'泌尿系统疾病', py:'SJS' },
  { id:'ds031', name:'妊娠期高血压', cat:'妇产科疾病', py:'RSQGXY' },
  { id:'ds032', name:'月经失调', cat:'妇产科疾病', py:'YJSD' },
  { id:'ds033', name:'青光眼', cat:'五官科疾病', py:'QGY' },
  { id:'ds034', name:'中耳炎', cat:'五官科疾病', py:'ZEY' },
  { id:'ds035', name:'湿疹', cat:'皮肤疾病', py:'SZ' },
  { id:'ds036', name:'银屑病', cat:'皮肤疾病', py:'YXB' },
  { id:'ds037', name:'胃癌', cat:'肿瘤疾病', py:'WA' },
  { id:'ds038', name:'结直肠癌', cat:'肿瘤疾病', py:'JZCA' },
  { id:'ds039', name:'乳腺癌', cat:'肿瘤疾病', py:'RXA' },
  { id:'ds040', name:'缺铁性贫血', cat:'血液系统疾病', py:'QTXPX' },
  { id:'ds041', name:'大叶性肺炎', cat:'呼吸系统疾病', py:'DY' },
  { id:'ds042', name:'稳定型心绞痛', cat:'心血管疾病', py:'WD' },
  { id:'ds043', name:'风湿性心瓣膜病', cat:'心血管疾病', py:'FS' },
  { id:'ds044', name:'感染性心内膜炎', cat:'心血管疾病', py:'GR' },
  { id:'ds045', name:'支气管扩张症', cat:'呼吸系统疾病', py:'ZQ' },
  { id:'ds046', name:'间质性肺病', cat:'呼吸系统疾病', py:'JJ' },
  { id:'ds047', name:'胃食管反流病', cat:'消化系统疾病', py:'WS' },
  { id:'ds048', name:'功能性消化不良', cat:'消化系统疾病', py:'GN' },
  { id:'ds049', name:'胆囊炎', cat:'消化系统疾病', py:'DN' },
  { id:'ds050', name:'胆石症', cat:'消化系统疾病', py:'DS' },
  { id:'ds051', name:'急性肾损伤', cat:'泌尿系统疾病', py:'JX' },
  { id:'ds052', name:'肾病综合征', cat:'泌尿系统疾病', py:'SB' },
  { id:'ds053', name:'前列腺增生', cat:'泌尿系统疾病', py:'QL' },
  { id:'ds054', name:'甲状腺功能亢进', cat:'内分泌疾病', py:'JZ' },
  { id:'ds055', name:'库欣综合征', cat:'内分泌疾病', py:'KX' },
  { id:'ds056', name:'代谢综合征', cat:'内分泌疾病', py:'DX' },
  { id:'ds057', name:'癫痫', cat:'神经系统疾病', py:'DX' },
  { id:'ds058', name:'脑出血', cat:'神经系统疾病', py:'NC' },
  { id:'ds059', name:'重症肌无力', cat:'神经系统疾病', py:'ZZ' },
  { id:'ds060', name:'流行性感冒', cat:'感染性疾病', py:'LX' },
  { id:'ds061', name:'带状疱疹', cat:'感染性疾病', py:'DZ' },
  { id:'ds062', name:'泌尿系感染', cat:'感染性疾病', py:'MN' },
  { id:'ds063', name:'感染性腹泻', cat:'感染性疾病', py:'GR' },
  { id:'ds064', name:'带状疱疹后遗神经痛', cat:'皮肤疾病', py:'DZ' },
  { id:'ds065', name:'真菌性皮肤病', cat:'皮肤疾病', py:'ZJ' },
  { id:'ds066', name:'类风湿关节炎', cat:'风湿免疫疾病', py:'LF' },
  { id:'ds067', name:'系统性红斑狼疮', cat:'风湿免疫疾病', py:'XT' },
  { id:'ds068', name:'强直性脊柱炎', cat:'风湿免疫疾病', py:'QZ' },
  { id:'ds069', name:'干燥综合征', cat:'风湿免疫疾病', py:'GZ' },
  { id:'ds070', name:'肺癌', cat:'肿瘤疾病', py:'FA' },
  { id:'ds071', name:'肝癌', cat:'肿瘤疾病', py:'GA' },
  { id:'ds072', name:'前列腺癌', cat:'肿瘤疾病', py:'QL' },
  { id:'ds073', name:'再生障碍性贫血', cat:'血液系统疾病', py:'ZS' },
  { id:'ds074', name:'白血病', cat:'血液系统疾病', py:'BX' },
  { id:'ds075', name:'多囊卵巢综合征', cat:'妇产科疾病', py:'DN' },
  { id:'ds076', name:'子宫内膜异位症', cat:'妇产科疾病', py:'ZG' },
  { id:'ds077', name:'宫颈癌', cat:'妇产科疾病', py:'GJ' },
  { id:'ds078', name:'勃起功能障碍', cat:'男科疾病', py:'BQ' },
  { id:'ds079', name:'男性不育症', cat:'男科疾病', py:'NX' },
  { id:'ds080', name:'抑郁症', cat:'精神心理疾病', py:'YY' },
  { id:'ds081', name:'焦虑障碍', cat:'精神心理疾病', py:'JL' },
  { id:'ds082', name:'失眠障碍', cat:'精神心理疾病', py:'SM' },
  { id:'ds083', name:'白内障', cat:'眼科疾病', py:'BN' },
  { id:'ds084', name:'糖尿病视网膜病变', cat:'眼科疾病', py:'TN' },
  { id:'ds085', name:'过敏性鼻炎', cat:'耳鼻喉疾病', py:'GM' },
  { id:'ds086', name:'慢性鼻窦炎', cat:'耳鼻喉疾病', py:'MX' },
  { id:'ds087', name:'小儿肺炎', cat:'儿科疾病', py:'XE' },
  { id:'ds088', name:'小儿腹泻', cat:'儿科疾病', py:'XE' },
  { id:'ds089', name:'过敏性休克', cat:'急诊疾病', py:'GM' },
  { id:'ds090', name:'脓毒症', cat:'急诊疾病', py:'ND' }
];
const DISEASE_CATEGORIES = [
  { id:'resp_disease', name:'呼吸系统疾病', subs:['社区获得性肺炎','COPD','支气管哮喘','肺结核','大叶性肺炎','支气管扩张症','间质性肺病'] },
  { id:'cardio_disease', name:'心血管疾病', subs:['高血压','心力衰竭','冠心病','心房颤动','心肌梗死','稳定型心绞痛','风湿性心瓣膜病','感染性心内膜炎'] },
  { id:'digest_disease', name:'消化系统疾病', subs:['胃溃疡','反流性食管炎','肝硬化','胰腺炎','炎症性肠病','胃食管反流病','功能性消化不良','胆囊炎','胆石症'] },
  { id:'endo_disease', name:'内分泌疾病', subs:['2型糖尿病','高脂血症','甲亢','甲减','高尿酸血症','骨质疏松','甲状腺功能亢进','库欣综合征','代谢综合征'] },
  { id:'neuro_disease', name:'神经精神疾病', subs:['缺血性脑卒中','脑出血','帕金森病','阿尔茨海默病','偏头痛','癫痫','重症肌无力','抑郁症','焦虑障碍','失眠障碍'] },
  { id:'uro_disease', name:'泌尿生殖疾病', subs:['慢性肾病','肾结石','尿路感染','急性肾损伤','肾病综合征','前列腺增生','多囊卵巢综合征','子宫内膜异位症'] },
  { id:'infect_disease', name:'感染性疾病', subs:['肺结核','流行性感冒','带状疱疹','泌尿系感染','感染性腹泻','脓毒症'] },
  { id:'derm_disease', name:'皮肤疾病', subs:['湿疹','银屑病','荨麻疹','带状疱疹后遗神经痛','真菌性皮肤病'] },
  { id:'rheum_disease', name:'风湿免疫疾病', subs:['类风湿关节炎','系统性红斑狼疮','强直性脊柱炎','干燥综合征'] },
  { id:'onco_disease', name:'肿瘤疾病', subs:['肺癌','肝癌','胃癌','结直肠癌','乳腺癌','前列腺癌','宫颈癌'] },
  { id:'heme_disease', name:'血液系统疾病', subs:['缺铁性贫血','再生障碍性贫血','白血病'] },
  { id:'ent_disease', name:'五官科疾病', subs:['青光眼','中耳炎','白内障','糖尿病视网膜病变','过敏性鼻炎','慢性鼻窦炎'] },
  { id:'gyn_disease', name:'妇产科疾病', subs:['月经失调','更年期综合征','多囊卵巢综合征','子宫内膜异位症'] },
  { id:'ped_disease', name:'儿科疾病', subs:['小儿肺炎','小儿腹泻'] },
  { id:'emerg_disease', name:'急诊疾病', subs:['过敏性休克','脓毒症'] },
];

// ═══ 药品数据 ═══
const DRUGS = [
  { id:'d001', name:'阿莫西林胶囊', py:'AMXLJN', category:'抗生素', subcategory:'抗生素', type:'处方药', indications:'适用于敏感菌所致的呼吸道感染、泌尿生殖道感染、皮肤软组织感染、急性单纯性淋病、伤寒等。' },
  { id:'d002', name:'头孢克肟胶囊', py:'TBKWJN', category:'抗生素', subcategory:'抗生素', type:'处方药', indications:'适用于敏感菌所致的呼吸道感染、泌尿道感染、胆道感染、中耳炎等。' },
  { id:'d003', name:'左氧氟沙星片', py:'ZYFSXP', category:'抗生素', subcategory:'抗生素', type:'处方药', indications:'适用于敏感菌所致的社区获得性肺炎、复杂性尿路感染、慢性支气管炎急性发作等。' },
  { id:'d004', name:'硝苯地平控释片', py:'XBDPKSP', category:'心血管系统用药', subcategory:'降压药', type:'处方药', indications:'用于治疗高血压、心绞痛（慢性稳定性心绞痛及变异型心绞痛）。' },
  { id:'d005', name:'二甲双胍片', py:'EJSGP', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药', indications:'用于单纯饮食控制不满意的2型糖尿病患者，尤其是肥胖和伴高胰岛素血症者。' },
  { id:'d006', name:'奥美拉唑肠溶片', py:'AMLZCRP', category:'消化系统用药', subcategory:'抗酸药', type:'处方药', indications:'用于胃溃疡、十二指肠溃疡、反流性食管炎、卓-艾综合征。' },
  { id:'d007', name:'阿司匹林肠溶片', py:'ASPLCRP', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'OTC', indications:'抑制血小板聚集，用于预防心脑血管疾病。也用于解热镇痛。' },
  { id:'d008', name:'氯雷他定片', py:'LLTDP', category:'呼吸系统用药', subcategory:'抗组胺药', type:'OTC', indications:'用于缓解过敏性鼻炎症状，如喷嚏、流涕、鼻痒及眼部症状。也用于慢性荨麻疹。' },
  { id:'d009', name:'阿托伐他汀钙片', py:'ATFTTGP', category:'心血管系统用药', subcategory:'调脂药', type:'处方药', indications:'用于高胆固醇血症和混合型高脂血症，降低心血管事件风险。' },
  { id:'d010', name:'氢氯噻嗪片', py:'QLSQP', category:'心血管系统用药', subcategory:'利尿剂', type:'处方药', indications:'用于水肿性疾病、高血压、尿崩症。' },
  { id:'d011', name:'头孢曲松钠', py:'TBQSN', category:'抗生素', subcategory:'抗生素', type:'处方药', indications:'用于敏感菌所致的下呼吸道感染、泌尿道感染、腹腔感染、败血症、脑膜炎等。' },
  { id:'d012', name:'阿奇霉素片', py:'AQMSP', category:'抗生素', subcategory:'抗生素', type:'处方药', indications:'用于敏感菌所致的呼吸道感染、皮肤软组织感染、泌尿生殖道感染。' },
  { id:'d013', name:'莫西沙星片', py:'MXSXP', category:'抗生素', subcategory:'抗生素', type:'处方药', indications:'用于敏感菌所致的社区获得性肺炎、慢性支气管炎急性发作、急性鼻窦炎。' },
  { id:'d014', name:'布洛芬缓释胶囊', py:'BLFHSJN', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'OTC', indications:'用于缓解轻中度疼痛、关节痛、头痛、牙痛、痛经；也用于退热。' },
  { id:'d015', name:'氯沙坦钾片', py:'LSTJP', category:'心血管系统用药', subcategory:'降压药', type:'处方药', indications:'用于治疗原发性高血压。尤其适用于合并糖尿病肾病的高血压患者。' },
  { id:'d016', name:'氨氯地平片', py:'ALDPP', category:'心血管系统用药', subcategory:'降压药', type:'处方药', indications:'用于治疗高血压和稳定性心绞痛。' },
  { id:'d017', name:'美托洛尔缓释片', py:'MTLEHSP', category:'心血管系统用药', subcategory:'降压药', type:'处方药', indications:'用于高血压、心绞痛、慢性心力衰竭（NYHA Ⅱ-Ⅲ级）。' },
  { id:'d018', name:'沙库巴曲缬沙坦片', py:'SKBQXSTP', category:'心血管系统用药', subcategory:'抗心衰药', type:'处方药', indications:'用于射血分数降低的慢性心力衰竭（NYHA Ⅱ-Ⅳ级）。' },
  { id:'d019', name:'非布司他片', py:'FBSTP', category:'解热镇痛药', subcategory:'抗痛风药', type:'处方药', indications:'用于痛风患者高尿酸血症的长期治疗（不推荐用于无临床症状的高尿酸血症）。' },
  { id:'d020', name:'胰岛素注射液（短效）', py:'YDSZSYDX', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药', tag:'高危', indications:'用于1型糖尿病、2型糖尿病口服药控制不佳、糖尿病急症（酮症酸中毒）。' },
  { id:'d021', name:'达格列净片', py:'DGLJP', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药', indications:'用于2型糖尿病、射血分数降低的心衰、慢性肾病（eGFR≥25）。' },
  { id:'d022', name:'氯吡格雷片', py:'LBGLP', category:'血液系统用药', subcategory:'抗凝药', type:'处方药', indications:'用于预防动脉粥样硬化血栓形成事件：ACS、PCI术后、缺血性卒中。' },
  { id:'d023', name:'利伐沙班片', py:'LFSBP', category:'血液系统用药', subcategory:'抗凝药', type:'处方药', indications:'用于非瓣膜性房颤卒中预防、DVT/PE治疗和预防。' },
  { id:'d024', name:'孟鲁司特钠片', py:'MLSTNP', category:'呼吸系统用药', subcategory:'平喘药', type:'处方药', indications:'用于哮喘的预防和长期治疗（包括阿司匹林敏感性哮喘）、过敏性鼻炎。' },
  { id:'d025', name:'甲泼尼龙片', py:'JPNLP', category:'内分泌系统用药', subcategory:'激素类', type:'处方药', indications:'用于过敏性疾病、自身免疫性疾病、炎症性疾病、器官移植排斥反应等。' },
  { id:'d026', name:'甲钴胺片', py:'JGAP', category:'营养支持药', subcategory:'维生素类', type:'OTC', indications:'用于周围神经病变、巨幼细胞性贫血。' },
  { id:'d027', name:'碳酸钙D3片', py:'TSGDP', category:'营养支持药', subcategory:'电解质', type:'OTC', indications:'用于预防和治疗钙缺乏症、骨质疏松的辅助治疗。' },
  { id:'d028', name:'铝碳酸镁咀嚼片', py:'LTSMJJP', category:'消化系统用药', subcategory:'胃黏膜保护剂', type:'OTC', indications:'用于胃酸过多引起的胃痛、胃灼热、反酸、饱胀等。' },
  { id:'d029', name:'氯硝西泮片', py:'LXXPP', category:'神经系统用药', subcategory:'镇静催眠药', type:'处方药（精二）', tag:'精二', indications:'用于癫痫和惊恐障碍。' },
  { id:'d030', name:'氨溴索片', py:'AXSP', category:'呼吸系统用药', subcategory:'祛痰药', type:'OTC', indications:'用于急慢性呼吸道疾病引起的痰液黏稠、咳痰困难。' },
  { id:'d031', name:'头孢呋辛酯片', py:'TBFXZP', category:'抗生素', subcategory:'抗生素', type:'处方药', indications:'用于敏感菌所致的呼吸道、泌尿道、皮肤软组织感染等。手术预防用药。' },
  { id:'d032', name:'哌拉西林他唑巴坦', py:'PLXLTZBT', category:'抗生素', subcategory:'抗生素', type:'处方药', indications:'中重度感染：腹腔感染、肺炎、败血症等。' },
  { id:'d033', name:'美罗培南', py:'MLPN', category:'抗生素', subcategory:'抗生素', type:'处方药（特殊使用级）', tag:'高危', indications:'多重耐药菌所致重症感染：腹腔感染、脑膜炎、败血症等。' },
  { id:'d034', name:'万古霉素', py:'WGMS', category:'抗生素', subcategory:'抗生素', type:'处方药（特殊使用级）', tag:'高危', indications:'MRSA等耐药G+菌重症感染。艰难梭菌相关性腹泻（口服）。' },
  { id:'d035', name:'甲硝唑片', py:'JXZP', category:'抗生素', subcategory:'抗生素', type:'处方药', indications:'厌氧菌感染、滴虫病、阿米巴病。Hp根除方案组分。' },
  { id:'d036', name:'氟康唑胶囊', py:'FKZJN', category:'抗生素', subcategory:'抗真菌药', type:'处方药', indications:'念珠菌感染、隐球菌性脑膜炎。' },
  { id:'d037', name:'奥司他韦胶囊', py:'ASTWJN', category:'抗生素', subcategory:'抗病毒药', type:'处方药', indications:'用于成人和1岁以上儿童的甲型和乙型流感治疗及预防。症状出现48h内开始。' },
  { id:'d038', name:'恩替卡韦片', py:'ETKWP', category:'抗生素', subcategory:'抗病毒药', type:'处方药', indications:'慢性乙型肝炎。' },
  { id:'d039', name:'厄贝沙坦片', py:'EBSTP', category:'心血管系统用药', subcategory:'降压药', type:'处方药', indications:'原发性高血压。合并高血压的2型糖尿病肾病。' },
  { id:'d040', name:'比索洛尔片', py:'BSLEP', category:'心血管系统用药', subcategory:'降压药', type:'处方药', indications:'高血压、冠心病、慢性心力衰竭。' },
  { id:'d041', name:'硝苯地平片', py:'XBDPP', category:'心血管系统用药', subcategory:'降压药', type:'处方药', indications:'高血压、心绞痛。' },
  { id:'d042', name:'螺内酯片', py:'LNZP', category:'心血管系统用药', subcategory:'利尿剂', type:'处方药', indications:'心力衰竭、高血压、原醛症。' },
  { id:'d043', name:'呋塞米片', py:'FSMP', category:'心血管系统用药', subcategory:'利尿剂', type:'处方药', indications:'水肿性疾病（心衰、肾衰、肝硬化）、高血压。' },
  { id:'d044', name:'华法林钠片', py:'HFLNP', category:'血液系统用药', subcategory:'抗凝药', type:'处方药', tag:'高危', indications:'房颤卒中预防、DVT/PE治疗和预防、心脏瓣膜置换术后。' },
  { id:'d045', name:'艾司奥美拉唑肠溶片', py:'ASAMLZCRP', category:'消化系统用药', subcategory:'抗酸药', type:'处方药', indications:'消化性溃疡、反流性食管炎、根除Hp、NSAIDs相关溃疡预防。' },
  { id:'d046', name:'多潘立酮片', py:'DPLTP', category:'消化系统用药', subcategory:'止吐药', type:'处方药', indications:'胃排空延缓、胃食管反流引起的恶心呕吐。' },
  { id:'d047', name:'蒙脱石散', py:'MTSS', category:'消化系统用药', subcategory:'止泻药', type:'OTC', indications:'成人及儿童急慢性腹泻。' },
  { id:'d048', name:'瑞舒伐他汀钙片', py:'RSFTTGP', category:'心血管系统用药', subcategory:'调脂药', type:'处方药', indications:'高胆固醇血症和混合型高脂血症。' },
  { id:'d049', name:'格列美脲片', py:'GLMNP', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药', indications:'用于饮食和运动控制不满意的2型糖尿病。' },
  { id:'d050', name:'阿卡波糖片', py:'AKBTP', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药', indications:'用于2型糖尿病（降低餐后血糖）。' },
  { id:'d051', name:'胰岛素（甘精胰岛素）', py:'YDSGJYDS', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药', tag:'高危', indications:'1型/2型糖尿病的基础胰岛素治疗。' },
  { id:'d052', name:'甲氨蝶呤片', py:'JADLP', category:'抗肿瘤药', subcategory:'化疗药', type:'处方药', tag:'毒', indications:'类风湿关节炎、银屑病、滋养细胞肿瘤、急性白血病。' },
  { id:'d053', name:'来氟米特片', py:'LFMTP', category:'抗肿瘤药', subcategory:'免疫治疗药', type:'处方药', indications:'类风湿关节炎、狼疮性肾炎。' },
  { id:'d054', name:'羟氯喹片', py:'QLKP', category:'抗肿瘤药', subcategory:'免疫治疗药', type:'处方药', indications:'类风湿关节炎、系统性红斑狼疮、光敏性疾病。' },
  { id:'d055', name:'别嘌醇片', py:'BPCP', category:'解热镇痛药', subcategory:'抗痛风药', type:'处方药', tag:'毒', indications:'慢性高尿酸血症、痛风石、尿酸性肾病。' },
  { id:'d056', name:'苯溴马隆片', py:'BXMLP', category:'解热镇痛药', subcategory:'抗痛风药', type:'处方药', indications:'原发性高尿酸血症。' },
  { id:'d057', name:'普瑞巴林胶囊', py:'PRBLJN', category:'神经系统用药', subcategory:'抗癫痫药', type:'处方药（精二）', tag:'精二', indications:'带状疱疹后神经痛、纤维肌痛、癫痫辅助治疗。' },
  { id:'d058', name:'卡马西平片', py:'KMXPP', category:'神经系统用药', subcategory:'抗癫痫药', type:'处方药', indications:'癫痫（部分性发作）、三叉神经痛。' },
  { id:'d059', name:'左乙拉西坦片', py:'ZYLXTP', category:'神经系统用药', subcategory:'抗癫痫药', type:'处方药', indications:'部分性发作的添加治疗。' },
  { id:'d060', name:'舍曲林片', py:'SQLP', category:'神经系统用药', subcategory:'抗抑郁药', type:'处方药', indications:'抑郁症、强迫症、社交焦虑障碍、创伤后应激障碍。' },
  { id:'d061', name:'氯化钾缓释片', py:'LHJHSP', category:'营养支持药', subcategory:'电解质', type:'处方药', tag:'高危', indications:'各种原因引起的低钾血症的预防和治疗。' },
  { id:'d062', name:'琥珀酸亚铁片', py:'HPSYTP', category:'血液系统用药', subcategory:'抗贫血药', type:'OTC', indications:'缺铁性贫血的预防和治疗。' },
  { id:'d063', name:'叶酸片', py:'YSP', category:'血液系统用药', subcategory:'抗贫血药', type:'OTC', indications:'巨幼细胞性贫血、妊娠期叶酸缺乏的预防（0.4mg qd）。MTX治疗时的补充。' },
  { id:'d064', name:'左甲状腺素钠片', py:'ZJZXSNP', category:'内分泌系统用药', subcategory:'甲状腺用药', type:'处方药', indications:'甲减的替代治疗。TSH抑制治疗（甲状腺癌术后）。' },
  { id:'d065', name:'地高辛片', py:'DGXP', category:'心血管系统用药', subcategory:'抗心律失常药', type:'处方药', tag:'高危', indications:'心力衰竭（尤其合并快速房颤）、房颤/房扑的心室率控制。' },
  { id:'d066', name:'胺碘酮片', py:'ADTP', category:'心血管系统用药', subcategory:'抗心律失常药', type:'处方药', tag:'高危', indications:'房颤复律及窦律维持、室性心律失常。' },
  { id:'d067', name:'阿仑膦酸钠片', py:'ALLSNP', category:'内分泌系统用药', subcategory:'激素类', type:'处方药', indications:'骨质疏松症。' },
  { id:'d068', name:'坦索罗辛缓释胶囊', py:'TSLXHSJN', category:'男科/泌尿科用药', subcategory:'前列腺用药', type:'处方药', indications:'前列腺增生所致的排尿障碍。' },
  { id:'d069', name:'非那雄胺片', py:'FNXAP', category:'男科/泌尿科用药', subcategory:'前列腺用药', type:'处方药', indications:'前列腺增生、男性雄激素性脱发。' },
  { id:'d070', name:'黄体酮胶囊', py:'HTTJN', category:'妇产科用药', subcategory:'激素类', type:'处方药', indications:'先兆流产、习惯性流产、月经失调。' },
  { id:'d071', name:'泼尼松片', py:'PNSP', category:'内分泌系统用药', subcategory:'激素类', type:'处方药', indications:'过敏性疾病、自身免疫性疾病、炎症性疾病、淋巴系统肿瘤。' },
  { id:'d072', name:'氯苯那敏片', py:'LBNMP', category:'呼吸系统用药', subcategory:'抗组胺药', type:'OTC', indications:'过敏性鼻炎、荨麻疹等过敏性疾病。' },
  { id:'d073', name:'吸入用布地奈德混悬液', py:'XRYBDNDHXY', category:'呼吸系统用药', subcategory:'平喘药', type:'处方药', indications:'支气管哮喘。' },
  { id:'d074', name:'异丙托溴铵吸入剂', py:'YBTXAXRJ', category:'呼吸系统用药', subcategory:'平喘药', type:'处方药', indications:'COPD的支气管扩张治疗。' },
  { id:'d075', name:'乳果糖口服液', py:'RGTKFY', category:'消化系统用药', subcategory:'止泻药', type:'OTC', indications:'慢性功能性便秘。肝性脑病的辅助治疗。' },
  { id:'d076', name:'柳氮磺吡啶肠溶片', py:'LDHBDCRP', category:'消化系统用药', subcategory:'止泻药', type:'处方药', indications:'溃疡性结肠炎、克罗恩病、类风湿关节炎。' },
  { id:'d077', name:'美沙拉秦肠溶片', py:'MSLQCRP', category:'消化系统用药', subcategory:'止泻药', type:'处方药', indications:'溃疡性结肠炎、克罗恩病。' },
  { id:'d078', name:'西地那非片', py:'XDNFP', category:'男科/泌尿科用药', subcategory:'勃起功能障碍药', type:'处方药', indications:'勃起功能障碍、肺动脉高压。' },
  { id:'d079', name:'曲马多缓释片', py:'QMDHSP', category:'解热镇痛药', subcategory:'阿片类', type:'处方药（精二）', tag:'精二', indications:'中度至重度疼痛。' },
  { id:'d080', name:'塞来昔布胶囊', py:'SLXBJN', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'处方药', indications:'骨关节炎、类风湿关节炎的疼痛和炎症。' },
  { id:'d081', name:'阿托品眼用凝胶', py:'ATPYYNJ', category:'五官科用药', subcategory:'眼科用药', type:'处方药', indications:'散瞳验光、虹膜睫状体炎。' },
  { id:'d082', name:'左氧氟沙星滴眼液', py:'ZYFSXDYY', category:'五官科用药', subcategory:'眼科用药', type:'处方药', indications:'细菌性结膜炎、角膜炎。' },
  { id:'d083', name:'糠酸莫米松鼻喷雾剂', py:'KSMMSBPWJ', category:'五官科用药', subcategory:'耳鼻喉用药', type:'处方药', indications:'过敏性鼻炎。' },
  { id:'d084', name:'开塞露', py:'KSL', category:'消化系统用药', subcategory:'止泻药', type:'OTC', indications:'偶发性便秘。' },
  { id:'d085', name:'噻托溴铵粉吸入剂', py:'STXAFXRJ', category:'呼吸系统用药', subcategory:'COPD用药', type:'处方药', indications:'COPD的维持治疗。' },
  { id:'d086', name:'沙美特罗替卡松吸入剂', py:'SMTLTKSRXJ', category:'呼吸系统用药', subcategory:'COPD用药', type:'处方药', indications:'哮喘和COPD的维持治疗。' },
  { id:'d087', name:'沙丁胺醇气雾剂', py:'SDACQWJ', category:'呼吸系统用药', subcategory:'COPD用药', type:'处方药', indications:'支气管哮喘、COPD急性症状缓解。' },
  { id:'d088', name:'乙酰半胱氨酸泡腾片', py:'YXBGASPT', category:'呼吸系统用药', subcategory:'祛痰药', type:'OTC', indications:'痰液黏稠引起的咳痰困难。' },
  { id:'d089', name:'氟替卡松吸入气雾剂', py:'FTKSXRQWJ', category:'呼吸系统用药', subcategory:'COPD用药', type:'处方药', indications:'哮喘和COPD的抗炎维持治疗。' }
];

// ═══ 指南数据 ═══
const GUIDELINES = [
  { id:'g001', title:'中国高血压防治指南 2024', system:'心血管系统', year:'2024', py:'ZGGXYFZZN' },
  { id:'g002', title:'心力衰竭诊疗指南 2023', system:'心血管系统', year:'2023', py:'XLSJZLZN' },
  { id:'g003', title:'中国血脂管理指南 2023', system:'心血管系统', year:'2023', py:'ZGXZGLZN' },
  { id:'g004', title:'抗血小板治疗中国专家共识', system:'心血管系统', year:'2022', py:'KXXBZLZGZJGS' },
  { id:'g005', title:'社区获得性肺炎诊治指南', system:'呼吸系统', year:'2023', py:'SQHDXFYZZZN' },
  { id:'g006', title:'COPD诊治指南 2024', system:'呼吸系统', year:'2024', py:'COPDZZZN' },
  { id:'g007', title:'支气管哮喘防治指南', system:'呼吸系统', year:'2023', py:'ZQGXCFZZN' },
  { id:'g008', title:'消化性溃疡诊疗规范', system:'消化系统', year:'2022', py:'XHXKYZLGF' },
  { id:'g009', title:'中国2型糖尿病防治指南', system:'内分泌系统', year:'2024', py:'ZGXTNBFZZN' },
  { id:'g010', title:'痛风诊疗指南', system:'内分泌系统', year:'2023', py:'TFZLZN' },
  { id:'g011', title:'质子泵抑制剂临床应用指南', system:'消化系统', year:'2024', py:'ZZBYZJLCYYZN' },
  { id:'g012', title:'围手术期抗菌药物预防指南', system:'抗感染', year:'2024', py:'WSSQKJYWYFZN' },
  { id:'g013', title:'华法林抗凝治疗中国专家共识', system:'血液系统', year:'2024', py:'HFLKNZLZGZJGS' },
  { id:'g014', title:'慢性疼痛药物治疗指南', system:'神经系统', year:'2024', py:'MXTTYWZLZN' },
  { id:'g015', title:'Hp根除治疗全国专家共识', system:'消化系统', year:'2024', py:'HPGCZLQGZJGS' },
  { id:'g016', title:'骨质疏松诊疗指南', system:'内分泌系统', year:'2024', py:'GZSSZLZN' },
  { id:'g017', title:'心房颤动抗凝治疗指南', system:'心血管系统', year:'2024', py:'XFCDKNZLZN' },
  { id:'g018', title:'肾性贫血诊疗指南', system:'血液系统', year:'2024', py:'SXPXZLZN' },
  { id:'g019', title:'化疗止吐指南', system:'抗肿瘤', year:'2024', py:'HLZTZN' },
  { id:'g020', title:'糖皮质激素临床应用指导原则', system:'内分泌系统', year:'2024', py:'TPZJSLCYYZDYZ' },
  { id:'g021', title:'碳青霉烯类抗菌药物临床应用专家共识', system:'抗感染', year:'2023', py:'TQMXLKJYWLCYYZJGS' },
  { id:'g022', title:'喹诺酮类抗菌药物临床应用指导意见', system:'抗感染', year:'2023', py:'KNTLKJYWLCYYZDYJ' },
  { id:'g023', title:'β-内酰胺类抗菌药物皮肤试验指导原则', system:'抗感染', year:'2021', py:'ΒNXALKJYWPFSYZDYZ' },
  { id:'g024', title:'中国心力衰竭诊断和治疗指南', system:'心血管系统', year:'2024', py:'ZGXLSJZDHZLZN' },
  { id:'g025', title:'抗血栓药物围手术期管理专家共识', system:'血液系统', year:'2020', py:'KXSYWWSSQGLZJGS' },
  { id:'g026', title:'卒中二级预防抗血小板治疗指南', system:'神经系统', year:'2024', py:'ZZEJYFKXXBZLZN' },
  { id:'g027', title:'非酒精性脂肪性肝病诊疗指南', system:'消化系统', year:'2024', py:'FJJXZFXGBZLZN' },
  { id:'g028', title:'慢性乙型肝炎防治指南', system:'消化系统', year:'2024', py:'MXYXGYFZZN' },
  { id:'g029', title:'维生素D及其类似物临床应用共识', system:'内分泌系统', year:'2024', py:'WSSDJQLSWLCYYGS' },
  { id:'g030', title:'静脉血栓栓塞症防治指南', system:'呼吸系统', year:'2024', py:'JMXSSSZFZZN' },
  { id:'g031', title:'直接口服抗凝药临床合理应用指南', system:'血液系统', year:'2024', py:'ZJKFKNYLCHLYYZN' },
  { id:'g032', title:'抗血小板药物临床应用中国专家共识', system:'血液系统', year:'2024', py:'KXXBYWLCYYZGZJGS' },
  { id:'g033', title:'口服降糖药物临床应用专家共识', system:'内分泌系统', year:'2024', py:'KFJTYWLCYYZJGS' },
  { id:'g034', title:'化疗药物临床应用管理规范', system:'抗肿瘤', year:'2024', py:'HLYWLCYYGLGF' }
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
  { id:'i001', drug:'青霉素G钠', py:'QMSGN' },
  { id:'i002', drug:'头孢曲松钠', py:'TBQSN' },
  { id:'i003', drug:'头孢哌酮舒巴坦', py:'TBPTSBT' },
  { id:'i004', drug:'哌拉西林他唑巴坦', py:'PLXLTZBT' },
  { id:'i005', drug:'美罗培南', py:'MLPN' },
  { id:'i006', drug:'万古霉素', py:'WGMS' },
  { id:'i007', drug:'左氧氟沙星注射液', py:'ZYFSXZSY' },
  { id:'i008', drug:'莫西沙星注射液', py:'MXSXZSY' },
  { id:'i009', drug:'甲硝唑注射液', py:'JXZZSY' },
  { id:'i010', drug:'阿奇霉素注射液', py:'AQMSZSY' },
  { id:'i011', drug:'奥美拉唑（注射用）', py:'AMLZZSY' },
  { id:'i012', drug:'氨茶碱注射液', py:'ACJZSY' },
  { id:'i013', drug:'呋塞米注射液', py:'FSMZSY' },
  { id:'i014', drug:'氯化钾注射液', py:'LHJZSY' },
  { id:'i015', drug:'葡萄糖酸钙注射液', py:'PTTSGZSY' },
  { id:'i016', drug:'胰岛素注射液', py:'YDSZSY' },
  { id:'i017', drug:'多巴胺注射液', py:'DBAZSY' },
  { id:'i018', drug:'硝酸甘油注射液', py:'XSGYZSY' },
  { id:'i019', drug:'甘露醇注射液', py:'GLCZSY' },
  { id:'i020', drug:'丙泊酚注射液', py:'BPFZSY' },
  { id:'i021', drug:'四环素类 + 含金属离子药物' },
  { id:'i022', drug:'喹诺酮类 + 含金属离子药物' },
  { id:'i023', drug:'华法林 + 多种药物' },
  { id:'i024', drug:'PPI + 氯吡格雷' },
  { id:'i025', drug:'他汀类 + CYP3A4抑制剂' },
  { id:'i026', drug:'ACEI/ARB + 保钾药' },
  { id:'i027', drug:'甲氨蝶呤 + NSAIDs/磺胺' },
  { id:'i028', drug:'地高辛 + 多种药物' },
  { id:'i029', drug:'锂盐 + NSAIDs/利尿剂' },
  { id:'i030', drug:'避孕药 + 酶诱导剂' },
  { id:'i031', drug:'常用输液载体选择', py:'CYSYZTXZ' },
  { id:'i032', drug:'输液速度控制', py:'SYSDKZ' },
  { id:'i033', drug:'配伍禁忌快速判断', py:'PWJJKSPD' }
];

// ═══ 科普教育数据 ═══
const HEALTH_EDU = [
  { id:'h001', cat:'营养素与食物来源', py:'WSSA', title:'维生素A' },
  { id:'h002', cat:'营养素与食物来源', py:'WSSBLAS', title:'维生素B1（硫胺素）' },
  { id:'h003', cat:'营养素与食物来源', py:'WSSB', title:'维生素B6' },
  { id:'h004', cat:'营养素与食物来源', py:'WSSB', title:'维生素B12' },
  { id:'h005', cat:'营养素与食物来源', py:'WSSC', title:'维生素C' },
  { id:'h006', cat:'营养素与食物来源', py:'WSSD', title:'维生素D' },
  { id:'h007', cat:'营养素与食物来源', py:'WSSK', title:'维生素K' },
  { id:'h008', cat:'营养素与食物来源', py:'GCA', title:'钙 Ca' },
  { id:'h009', cat:'营养素与食物来源', py:'JK', title:'钾 K' },
  { id:'h010', cat:'营养素与食物来源', py:'TFE', title:'铁 Fe' },
  { id:'h011', cat:'药物与饮食相互作用', py:'PTYYYW', title:'葡萄柚与药物' },
  { id:'h012', cat:'药物与饮食相互作用', py:'JJYYW', title:'酒精与药物' },
  { id:'h013', cat:'药物与饮食相互作用', py:'NNYYW', title:'牛奶与药物' },
  { id:'h014', cat:'药物与饮食相互作用', py:'GJSWYYW', title:'高钾食物与药物' },
  { id:'h015', cat:'药物与饮食相互作用', py:'GDBYSYYW', title:'高蛋白饮食与药物' },
  { id:'h016', cat:'药物服用时间', py:'XKFFYDYW', title:'需空腹服用的药物' },
  { id:'h017', cat:'药物服用时间', py:'XSCHCHFYDYW', title:'需随餐或餐后服用的药物' },
  { id:'h018', cat:'药物服用时间', py:'XSQFYDYW', title:'需睡前服用的药物' },
  { id:'h019', cat:'药物服用时间', py:'FYYJSSJSCB', title:'服药与进食时间速查表' },
  { id:'h020', cat:'特殊人群用药', py:'RSQYYFJ', title:'妊娠期用药分级' },
  { id:'h021', cat:'特殊人群用药', py:'BRQYYZYSX', title:'哺乳期用药注意事项' },
  { id:'h022', cat:'特殊人群用药', py:'LNRYYYZ', title:'老年人用药原则' }
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

// ═══ 用药教育 ═══
const MED_EDU = [
  { id:'m001', cat:'服药时间', py:'ZJZXSN', drug:'左甲状腺素钠', key:'清晨空腹' },
  { id:'m002', cat:'服药时间', py:'ALLSN', drug:'阿仑膦酸钠', key:'清晨空腹' },
  { id:'m003', cat:'服药时间', py:'PPIAMLZD', drug:'PPI（奥美拉唑等）', key:'晨起空腹' },
  { id:'m004', cat:'服药时间', py:'TTLXFTTD', drug:'他汀类（辛伐他汀等）', key:'睡前' },
  { id:'m005', cat:'服用方法', py:'ASPLCRP', drug:'阿司匹林肠溶片', key:'整片吞服' },
  { id:'m006', cat:'服用方法', py:'EJSG', drug:'二甲双胍', key:'随餐或餐后' },
  { id:'m007', cat:'服用方法', py:'AKBT', drug:'阿卡波糖', key:'与第一口饭同服' },
  { id:'m008', cat:'服用方法', py:'XSGY', drug:'硝酸甘油', key:'舌下含服' },
  { id:'m009', cat:'不良反应告知', py:'HFL', drug:'华法林', key:'出血监测' },
  { id:'m010', cat:'不良反应告知', py:'ACEIPDPLD', drug:'ACEI（培哚普利等）', key:'干咳' },
  { id:'m011', cat:'不良反应告知', py:'ADT', drug:'胺碘酮', key:'多系统' },
  { id:'m012', cat:'不良反应告知', py:'JADL', drug:'甲氨蝶呤', key:'补充叶酸' },
  { id:'m013', cat:'特殊人群', py:'RSQAQYY', drug:'妊娠期安全用药', key:'分级速查' },
  { id:'m014', cat:'特殊人群', py:'BRQAQYY', drug:'哺乳期安全用药', key:'相对安全' },
  { id:'m015', cat:'药物储存', py:'YDS', drug:'胰岛素', key:'冷藏≠冷冻' },
  { id:'m016', cat:'药物储存', py:'XSGYP', drug:'硝酸甘油片', key:'避光密封' },
  { id:'m017', cat:'药物储存', py:'YSJZJ', drug:'益生菌制剂', key:'冷藏' },
  { id:'m018', cat:'生活指导', py:'TTL', drug:'他汀类', key:'避免葡萄柚' },
  { id:'m019', cat:'生活指导', py:'TBLJXZ', drug:'头孢类/甲硝唑', key:'禁酒7天' },
  { id:'m020', cat:'生活指导', py:'HFL', drug:'华法林', key:'饮食稳定' },
  { id:'m021', cat:'漏服处理', py:'KFBYY', drug:'口服避孕药', key:'12h内补服' },
  { id:'m022', cat:'漏服处理', py:'KSS', drug:'抗生素', key:'尽快补服' },
  { id:'m023', cat:'漏服处理', py:'HFL', drug:'华法林', key:'当日补服' },
  { id:'m024', cat:'药物相互作用', py:'NSAIDSACEI', drug:'NSAIDs + ACEI', key:'降压效果减弱' },
  { id:'m025', cat:'药物相互作用', py:'PPILBGL', drug:'PPI + 氯吡格雷', key:'抗血小板减弱' }
];

// ═══ 计算工具元数据 ═══
const CALC_TOOLS = [
  { id:'weight', name:'儿童体重估算', cat:'体重' },
  { id:'bsa', name:'体表面积 BSA', cat:'体表面积' },
  { id:'potency', name:'抗生素效价单位换算', cat:'剂量换算' },
  { id:'abx-renal', name:'抗生素肾功剂量调整', cat:'剂量调整' },
  { id:'ddd', name:'抗生素 DDD 计算', cat:'DDD' },
  { id:'ped', name:'儿科用量计算', cat:'剂量计算' },
  { id:'surgery', name:'手术切口分类', cat:'手术' },
  { id:'lab', name:'化验指标参考值', cat:'检验' },
];

const USER_GUIDE = `
# 药学知识指南 — 使用手册

## 一、登录与账号
- 使用系统分配的账号密码登录
- 登录后可修改昵称和密码
- 勾选"记住密码"可15天内免登录

## 二、首页
- 🔍 搜索框：输入药品名/疾病名/指南关键词，按回车搜索。支持多关键词（空格分隔）、拼音首字母、不区分大小写
- 📱 卡片入口：药品分类、疾病分类、指南法规、药品对比、用药教育、科普教育、输液配伍、计算工具、我的收藏

## 三、分类检索（药品·疾病）
- 药品分类标签：按14大类浏览（抗微生物、抗肿瘤、心血管、消化、神经、呼吸、内分泌、解热镇痛、皮肤科、男科/泌尿、妇产科、五官科、营养支持、血液系统）
- 疾病分类标签：90种疾病详情（含定义、症状、诊断、治疗原则+关联药品+关联指南）
- 分类可折叠，支持搜索

## 四、指南法规（34条）
- 按8大系统分组，每组可折叠
- 每条指南包含完整临床内容（分级、流程、方案、剂量）
- 支持全文搜索，部分指南含原始PDF全文

## 五、药品详情与对比
- 完整药品信息（适应症/禁忌/不良反应/用法用量/储存/相互作用/说明书）
- 个人备注功能（仅自己可见）
- 🧺 **对比篮**：这是本系统特色功能
  - 在首页点击「药品对比」进入
  - 在药品详情页点击「加入对比」或直接在对比页面搜索添加
  - 最多可加入 **5 种药品**，在对比篮中同时勾选后点击「开始对比」
  - 对比结果以表格形式并排展示 7 个项目：作用机制、适应证、不良反应、禁忌、用法用量、相互作用、特殊人群
  - 对比完成后点击「清空对比篮」可移除所有药品

## 六、计算工具
- 儿童体重估算、体表面积BSA
- 抗生素效价换算（万单位↔mg）
- 抗生素肾功剂量调整（CrCl指导）
- 抗生素DDD/AUD计算（WHO标准）
- 儿科用量计算、手术切口分类查询
- 化验指标参考值（11大类50+项）

## 七、用药教育（25条）
服药时间/服用方法/不良反应告知/特殊人群/药物储存/生活指导/漏服处理/药物相互作用

## 八、科普教育（22条）
营养素与食物来源/药物与饮食相互作用/药物服用时间/特殊人群用药

## 九、输液配伍（33条）
20种注射药配伍禁忌+10组口服配伍禁忌+输液通用原则

## 十、我的
- 昵称修改、密码修改
- 我的收藏（药品/指南均可收藏，支持备注）
- 编辑记录（自己的操作日志）
- 使用帮助、免责声明

---
© 2026 药学知识指南 · 仅供参考，不构成用药建议
`;

const ADMIN_GUIDE = `
# 药学知识指南 — 管理员手册

## 一、账号管理
- 管理员账号由系统管理员单独设定
- 编辑账号拥有内容增删改权限
- 普通用户为只读权限
- 所有账号初始密码随机生成，首次登录后建议修改
- 勾选"记住密码"可15天内免登录

## 二、内容管理（我的 → 内容管理）
管理员和编辑可增删改以下内容：
- 💊 药品管理 — 新增/编辑/删除药品信息
- 📋 指南管理 — 管理指南和法规条目
- 📖 科普管理 — 编辑科普教育内容
- 💉 配伍管理 — 编辑输液配伍数据
- 🦠 疾病管理 — 编辑疾病详情
- 自定义内容保存在本地，刷新后生效

## 三、编辑与审批
- 在任何药品/指南/疾病/科普详情页，管理员和编辑可见"编辑"按钮
- 点击编辑直接进入修改表单
- 所有编辑操作自动记录在"我的 → 编辑记录"中

## 四、药品对比（特色功能）
- 在首页点击「药品对比」进入对比页面
- 在药品详情页点击「加入对比」或直接在对比页面搜索添加药品
- 🧺 **对比篮**：最多可加入 **5 种药品**，勾选后点击「开始对比」
- 对比结果以表格形式并排展示 7 个项目：作用机制、适应证、不良反应、禁忌、用法用量、相互作用、特殊人群
- 对比完成后点击「清空对比篮」移除

## 五、数据维护
- 内置数据通过 GitHub 更新，刷新页面即可获取最新版本
- 自定义数据由各管理员独立维护
- 建议定期检查内容准确性

---
© 2026 药学知识指南 · 仅供内部参考
`;
