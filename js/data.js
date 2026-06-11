// ═══ 药品分类 ═══
const DRUG_CATEGORIES = [
  { id:'antimicrobial', name:'抗微生物药', subs:['青霉素类','头孢一代','头孢二代','头孢三代','头孢四代','头孢五代','头霉素类','碳青霉烯类','青霉烯类','单环β-内酰胺类','β-内酰胺酶抑制剂复方','氨基糖苷类','大环内酯类','林可霉素类','四环素类','甘氨酰环素类','氯霉素类','糖肽类','多肽类','环脂肽类','噁唑烷酮类','喹诺酮类','磺胺类','硝基咪唑类','硝基呋喃类','磷霉素类','利福霉素类','抗分枝杆菌药','抗真菌药','抗病毒药','抗寄生虫药'] },
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
  { id:'ds090', name:'脓毒症', cat:'急诊疾病', py:'ND' },
  // ═══ 感染性疾病补充 ═══
  { id:'ds091', name:'医院获得性肺炎', cat:'感染性疾病', py:'YYHDXFY' },
  { id:'ds092', name:'呼吸机相关性肺炎', cat:'感染性疾病', py:'HXJXGXFY' },
  { id:'ds093', name:'感染性心内膜炎', cat:'感染性疾病', py:'GRXXNMY' },
  { id:'ds094', name:'化脓性脑膜炎', cat:'感染性疾病', py:'HNXMNMY' },
  { id:'ds095', name:'复杂性腹腔感染', cat:'感染性疾病', py:'FZQFKGR' },
  { id:'ds096', name:'导管相关性血流感染', cat:'感染性疾病', py:'DGXGXXLGR' },
  { id:'ds097', name:'复杂性尿路感染', cat:'感染性疾病', py:'FZXNLGR' },
  { id:'ds098', name:'皮肤软组织感染', cat:'感染性疾病', py:'PFRZZGR' },
  { id:'ds099', name:'骨关节感染', cat:'感染性疾病', py:'GGJGR' },
  { id:'ds100', name:'侵袭性真菌感染', cat:'感染性疾病', py:'QXZXJGR' },
  // ═══ 支原体/衣原体感染 ═══
  { id:'ds101', name:'支原体肺炎', cat:'感染性疾病', py:'ZXTFY' },
  { id:'ds102', name:'沙眼衣原体感染', cat:'感染性疾病', py:'SYYZTGR' },
  { id:'ds103', name:'肺炎衣原体感染', cat:'感染性疾病', py:'FYYZTGR' },
  { id:'ds104', name:'生殖道衣原体感染', cat:'感染性疾病', py:'SZDYZTGR' },
  { id:'ds105', name:'鹦鹉热', cat:'感染性疾病', py:'YW' },
  // ═══ 寄生虫病 ═══
  { id:'ds106', name:'蛔虫病', cat:'寄生虫病', py:'HCB' },
  { id:'ds107', name:'蛲虫病', cat:'寄生虫病', py:'NCB' },
  { id:'ds108', name:'钩虫病', cat:'寄生虫病', py:'GCB' },
  { id:'ds109', name:'绦虫病', cat:'寄生虫病', py:'TCB' },
  { id:'ds110', name:'包虫病', cat:'寄生虫病', py:'BCB' },
  { id:'ds111', name:'血吸虫病', cat:'寄生虫病', py:'XXCB' },
  { id:'ds112', name:'疟疾', cat:'寄生虫病', py:'NJ' },
  { id:'ds113', name:'恶性疟', cat:'寄生虫病', py:'ENJ' },
  { id:'ds114', name:'丝虫病', cat:'寄生虫病', py:'SCB' },
  { id:'ds115', name:'疥疮', cat:'寄生虫病', py:'JC' },
  { id:'ds116', name:'阿米巴病', cat:'寄生虫病', py:'AMBB' },
  { id:'ds117', name:'弓形虫病', cat:'寄生虫病', py:'GXCB' },
  { id:'ds118', name:'滴虫性阴道炎', cat:'寄生虫病', py:'DCXYDY' },
  // ═══ 其他感染性疾病 ═══
  { id:'ds119', name:'梅毒', cat:'感染性疾病', py:'MD' },
  { id:'ds120', name:'百日咳', cat:'感染性疾病', py:'BRK' },
  { id:'ds121', name:'军团菌病', cat:'感染性疾病', py:'JTJB' },
  { id:'ds122', name:'布鲁氏菌病', cat:'感染性疾病', py:'BLSJB' },
  { id:'ds123', name:'立克次体病', cat:'感染性疾病', py:'LKTTB' },
  { id:'ds124', name:'霍乱', cat:'感染性疾病', py:'HL' },
  { id:'ds125', name:'卡氏肺孢子菌肺炎', cat:'感染性疾病', py:'KFBZJFY' },
  { id:'ds126', name:'巨细胞病毒感染', cat:'感染性疾病', py:'JXBBBDGR' },
  { id:'ds127', name:'慢性乙型肝炎', cat:'感染性疾病', py:'MXYXGY' },
  { id:'ds128', name:'丙型肝炎', cat:'感染性疾病', py:'BXGY' }
];
const DISEASE_CATEGORIES = [
  { id:'resp_disease', name:'呼吸系统疾病', subs:['社区获得性肺炎','COPD','支气管哮喘','肺结核','大叶性肺炎','支气管扩张症','间质性肺病'] },
  { id:'cardio_disease', name:'心血管疾病', subs:['高血压','心力衰竭','冠心病','心房颤动','心肌梗死','稳定型心绞痛','风湿性心瓣膜病','感染性心内膜炎'] },
  { id:'digest_disease', name:'消化系统疾病', subs:['胃溃疡','反流性食管炎','肝硬化','胰腺炎','炎症性肠病','胃食管反流病','功能性消化不良','胆囊炎','胆石症'] },
  { id:'endo_disease', name:'内分泌疾病', subs:['2型糖尿病','高脂血症','甲亢','甲减','高尿酸血症','骨质疏松','甲状腺功能亢进','库欣综合征','代谢综合征'] },
  { id:'neuro_disease', name:'神经精神疾病', subs:['缺血性脑卒中','脑出血','帕金森病','阿尔茨海默病','偏头痛','癫痫','重症肌无力','抑郁症','焦虑障碍','失眠障碍'] },
  { id:'uro_disease', name:'泌尿生殖疾病', subs:['慢性肾病','肾结石','尿路感染','急性肾损伤','肾病综合征','前列腺增生','多囊卵巢综合征','子宫内膜异位症'] },
  { id:'infect_disease', name:'感染性疾病', subs:['肺结核','流行性感冒','带状疱疹','泌尿系感染','感染性腹泻','脓毒症','医院获得性肺炎','呼吸机相关性肺炎','感染性心内膜炎','化脓性脑膜炎','复杂性腹腔感染','导管相关性血流感染','复杂性尿路感染','皮肤软组织感染','骨关节感染','侵袭性真菌感染','支原体肺炎','沙眼衣原体感染','肺炎衣原体感染','生殖道衣原体感染','鹦鹉热','梅毒','百日咳','军团菌病','布鲁氏菌病','立克次体病','霍乱','卡氏肺孢子菌肺炎','巨细胞病毒感染','慢性乙型肝炎','丙型肝炎'] },
  { id:'derm_disease', name:'皮肤疾病', subs:['湿疹','银屑病','荨麻疹','带状疱疹后遗神经痛','真菌性皮肤病'] },
  { id:'rheum_disease', name:'风湿免疫疾病', subs:['类风湿关节炎','系统性红斑狼疮','强直性脊柱炎','干燥综合征'] },
  { id:'onco_disease', name:'肿瘤疾病', subs:['肺癌','肝癌','胃癌','结直肠癌','乳腺癌','前列腺癌','宫颈癌'] },
  { id:'heme_disease', name:'血液系统疾病', subs:['缺铁性贫血','再生障碍性贫血','白血病'] },
  { id:'ent_disease', name:'五官科疾病', subs:['青光眼','中耳炎','白内障','糖尿病视网膜病变','过敏性鼻炎','慢性鼻窦炎'] },
  { id:'gyn_disease', name:'妇产科疾病', subs:['月经失调','更年期综合征','多囊卵巢综合征','子宫内膜异位症'] },
  { id:'ped_disease', name:'儿科疾病', subs:['小儿肺炎','小儿腹泻'] },
  { id:'emerg_disease', name:'急诊疾病', subs:['过敏性休克','脓毒症'] },
  { id:'parasite_disease', name:'寄生虫病', subs:['蛔虫病','蛲虫病','钩虫病','绦虫病','包虫病','血吸虫病','疟疾','恶性疟','丝虫病','疥疮','阿米巴病','弓形虫病','滴虫性阴道炎'] },
];

// ═══ 药品数据 ═══
const DRUGS = [
  { id:'d001', name:'阿莫西林胶囊', py:'AMXLJN', category:'抗微生物药', subcategory:'青霉素类', type:'处方药', indications:'适用于敏感菌所致的呼吸道感染、泌尿生殖道感染、皮肤软组织感染、急性单纯性淋病、伤寒等。' },
  { id:'d002', name:'头孢克肟胶囊', py:'TBKWJN', category:'抗微生物药', subcategory:'头孢三代', type:'处方药', indications:'适用于敏感菌所致的呼吸道感染、泌尿道感染、胆道感染、中耳炎等。' },
  { id:'d003', name:'左氧氟沙星片', py:'ZYFSXP', category:'抗微生物药', subcategory:'喹诺酮类', type:'处方药', indications:'适用于敏感菌所致的社区获得性肺炎、复杂性尿路感染、慢性支气管炎急性发作等。' },
  { id:'d004', name:'硝苯地平控释片', py:'XBDPKSP', category:'心血管系统用药', subcategory:'降压药', type:'处方药', indications:'用于治疗高血压、心绞痛（慢性稳定性心绞痛及变异型心绞痛）。' },
  { id:'d005', name:'二甲双胍片', py:'EJSGP', category:'内分泌系统用药', subcategory:'降糖药', type:'处方药', indications:'用于单纯饮食控制不满意的2型糖尿病患者，尤其是肥胖和伴高胰岛素血症者。' },
  { id:'d006', name:'奥美拉唑肠溶片', py:'AMLZCRP', category:'消化系统用药', subcategory:'抗酸药', type:'处方药', indications:'用于胃溃疡、十二指肠溃疡、反流性食管炎、卓-艾综合征。' },
  { id:'d007', name:'阿司匹林肠溶片', py:'ASPLCRP', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'OTC', indications:'抑制血小板聚集，用于预防心脑血管疾病。也用于解热镇痛。' },
  { id:'d008', name:'氯雷他定片', py:'LLTDP', category:'呼吸系统用药', subcategory:'抗组胺药', type:'OTC', indications:'用于缓解过敏性鼻炎症状，如喷嚏、流涕、鼻痒及眼部症状。也用于慢性荨麻疹。' },
  { id:'d009', name:'阿托伐他汀钙片', py:'ATFTTGP', category:'心血管系统用药', subcategory:'调脂药', type:'处方药', indications:'用于高胆固醇血症和混合型高脂血症，降低心血管事件风险。' },
  { id:'d010', name:'氢氯噻嗪片', py:'QLSQP', category:'心血管系统用药', subcategory:'利尿剂', type:'处方药', indications:'用于水肿性疾病、高血压、尿崩症。' },
  { id:'d011', name:'头孢曲松钠', py:'TBQSN', category:'抗微生物药', subcategory:'头孢三代', type:'处方药', indications:'用于敏感菌所致的下呼吸道感染、泌尿道感染、腹腔感染、败血症、脑膜炎等。' },
  { id:'d012', name:'阿奇霉素片', py:'AQMSP', category:'抗微生物药', subcategory:'大环内酯类', type:'处方药', indications:'用于敏感菌所致的呼吸道感染、皮肤软组织感染、泌尿生殖道感染。' },
  { id:'d013', name:'莫西沙星片', py:'MXSXP', category:'抗微生物药', subcategory:'喹诺酮类', type:'处方药', indications:'用于敏感菌所致的社区获得性肺炎、慢性支气管炎急性发作、急性鼻窦炎。' },
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
  { id:'d031', name:'头孢呋辛酯片', py:'TBFXZP', category:'抗微生物药', subcategory:'头孢二代', type:'处方药', indications:'用于敏感菌所致的呼吸道、泌尿道、皮肤软组织感染等。手术预防用药。' },
  { id:'d032', name:'哌拉西林他唑巴坦', py:'PLXLTZBT', category:'抗微生物药', subcategory:'青霉素类', type:'处方药', indications:'中重度感染：腹腔感染、肺炎、败血症等。' },
  { id:'d033', name:'美罗培南', py:'MLPN', category:'抗微生物药', subcategory:'碳青霉烯类', type:'处方药（特殊使用级）', tag:'高危', indications:'多重耐药菌所致重症感染：腹腔感染、脑膜炎、败血症等。' },
  { id:'d034', name:'万古霉素', py:'WGMS', category:'抗微生物药', subcategory:'糖肽类', type:'处方药（特殊使用级）', tag:'高危', indications:'MRSA等耐药G+菌重症感染。艰难梭菌相关性腹泻（口服）。' },
  { id:'d035', name:'甲硝唑片', py:'JXZP', category:'抗微生物药', subcategory:'硝基咪唑类', type:'处方药', indications:'厌氧菌感染、滴虫病、阿米巴病。Hp根除方案组分。' },
  { id:'d036', name:'氟康唑胶囊', py:'FKZJN', category:'抗微生物药', subcategory:'抗真菌药', type:'处方药', indications:'念珠菌感染、隐球菌性脑膜炎。' },
  { id:'d037', name:'奥司他韦胶囊', py:'ASTWJN', category:'抗微生物药', subcategory:'抗病毒药', type:'处方药', indications:'用于成人和1岁以上儿童的甲型和乙型流感治疗及预防。症状出现48h内开始。' },
  { id:'d038', name:'恩替卡韦片', py:'ETKWP', category:'抗微生物药', subcategory:'抗病毒药', type:'处方药', indications:'慢性乙型肝炎。' },
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
  { id:'d089', name:'氟替卡松吸入气雾剂', py:'FTKSXRQWJ', category:'呼吸系统用药', subcategory:'COPD用药', type:'处方药', indications:'哮喘和COPD的抗炎维持治疗。' },
  // ═══ 抗生素扩充（d090起）═══
  { id:'d090', name:'阿莫西林颗粒', py:'AMXLKL', category:'抗微生物药', subcategory:'青霉素类', type:'处方药', indications:'用于敏感菌所致呼吸道/泌尿道/皮肤软组织感染。儿童口服剂型。' },
  { id:'d091', name:'阿莫西林克拉维酸钾片（复方）', py:'AMXLKLWJSNGP', category:'抗微生物药', subcategory:'青霉素类', type:'处方药', indications:'产β-内酰胺酶耐药菌株感染：中耳炎、鼻窦炎、下呼吸道感染、泌尿生殖道感染。' },
  { id:'d092', name:'阿莫西林克拉维酸钾干混悬剂（儿童复方）', py:'AMXLKLWJSGKHXJ', category:'抗微生物药', subcategory:'青霉素类', type:'处方药', indications:'儿童呼吸道/泌尿道感染，产酶耐药菌株。' },
  { id:'d093', name:'注射用阿莫西林钠克拉维酸钾（复方）', py:'ZSYAMXLNKLWJSJ', category:'抗微生物药', subcategory:'青霉素类', type:'处方药', indications:'中重度感染：社区获得性肺炎、复杂性腹腔感染、医院获得性肺炎。' },
  { id:'d094', name:'青霉素V钾片', py:'QMSVJP', category:'抗微生物药', subcategory:'青霉素类', type:'处方药', indications:'青霉素敏感菌株所致轻中度感染。耐酸口服给药。' },
  { id:'d095', name:'注射用苄星青霉素', py:'ZSYBXQMS', category:'抗微生物药', subcategory:'青霉素类', type:'处方药', indications:'梅毒、风湿热预防等需要长期低浓度青霉素的感染。肌肉注射。' },
  { id:'d096', name:'氨苄西林胶囊', py:'ABXLJN', category:'抗微生物药', subcategory:'青霉素类', type:'处方药', indications:'敏感菌所致呼吸道/泌尿道/胃肠道感染、脑膜炎、心内膜炎、败血症。' },
  { id:'d097', name:'头孢氨苄胶囊（一代）', py:'TBABJN', category:'抗微生物药', subcategory:'头孢一代', type:'处方药', indications:'敏感G+菌所致轻中度感染：咽炎、扁桃体炎、皮肤软组织感染。' },
  { id:'d098', name:'头孢拉定胶囊（一代）', py:'TBLDJN', category:'抗微生物药', subcategory:'头孢一代', type:'处方药', indications:'与头孢氨苄类似，对抗G+菌作用强于G-菌。' },
  { id:'d099', name:'头孢丙烯片（二代）', py:'TBBXP', category:'抗微生物药', subcategory:'头孢二代', type:'处方药', indications:'敏感菌所致呼吸道、鼻窦、皮肤软组织感染。口服二代头孢。' },
  { id:'d100', name:'注射用头孢替安（二代）', py:'ZSYTBTA', category:'抗微生物药', subcategory:'头孢二代', type:'处方药', indications:'G+菌及部分G-菌感染：肺炎、胆道感染、腹膜炎、术后感染。' },
  { id:'d101', name:'注射用头孢西丁（头霉素类）', py:'ZSYTBXD', category:'抗微生物药', subcategory:'头霉素类', type:'处方药', indications:'需氧/厌氧菌混合感染：腹盆腔感染、坏死性筋膜炎。手术预防用药。' },
  { id:'d102', name:'注射用头孢他啶（三代）', py:'ZSYTBTD', category:'抗微生物药', subcategory:'头孢三代', type:'处方药', indications:'铜绿假单胞菌及G-菌重症感染：脓毒症、肺炎、复杂性尿路感染。' },
  { id:'d103', name:'注射用头孢哌酮舒巴坦（三代复方）', py:'ZSYTBPTSBT', category:'抗微生物药', subcategory:'头孢三代', type:'处方药（特殊使用级）', tag:'高危', indications:'多重耐药G-菌感染：铜绿假单胞菌、鲍曼不动杆菌、肺炎克雷伯菌。' },
  { id:'d104', name:'头孢地尼胶囊（三代口服）', py:'TBDNJN', category:'抗微生物药', subcategory:'头孢三代', type:'处方药', indications:'敏感菌所致呼吸道/耳鼻喉/皮肤软组织感染。口服三代头孢。' },
  { id:'d105', name:'头孢泊肟酯片（三代口服）', py:'TBBWZP', category:'抗微生物药', subcategory:'头孢三代', type:'处方药', indications:'呼吸道感染/泌尿生殖道感染/皮肤软组织感染。口服三代头孢。' },
  { id:'d106', name:'注射用头孢吡肟（四代）', py:'ZSYTBBW', category:'抗微生物药', subcategory:'头孢四代', type:'处方药（特殊使用级）', tag:'高危', indications:'多重耐药菌重症感染：ESBL产酶菌、铜绿假单胞菌。中枢神经系统感染。' },
  { id:'d107', name:'注射用亚胺培南西司他丁（复方）', py:'ZSYAPNXSTD', category:'抗微生物药', subcategory:'碳青霉烯类', type:'处方药（特殊使用级）', tag:'高危', indications:'多重耐药菌所致重症感染的最后防线之一。ESBL/MRSA覆盖。' },
  { id:'d108', name:'注射用比阿培南', py:'ZSYBPN', category:'抗微生物药', subcategory:'碳青霉烯类', type:'处方药（特殊使用级）', tag:'高危', indications:'重症感染（腹腔/呼吸道/败血症/复杂性尿路）。碳青霉烯类。' },
  { id:'d109', name:'硫酸庆大霉素注射液', py:'LSQDMSZSY', category:'抗微生物药', subcategory:'氨基糖苷类', type:'处方药', tag:'高危', indications:'G-杆菌重症感染：败血症、腹腔/尿路/胆道感染。浓度依赖性杀菌。' },
  { id:'d110', name:'硫酸阿米卡星注射液', py:'LSAMKXZSY', category:'抗微生物药', subcategory:'氨基糖苷类', type:'处方药', tag:'高危', indications:'多重耐药G-杆菌感染。铜绿假单胞菌、鲍曼不动杆菌。TDM监测。' },
  { id:'d111', name:'阿奇霉素干混悬剂（儿童）', py:'AQMSGHXJ', category:'抗微生物药', subcategory:'大环内酯类', type:'处方药', indications:'儿童呼吸道/皮肤软组织感染。肺炎支原体、衣原体首选。口服混悬液。' },
  { id:'d112', name:'克拉霉素片', py:'KLMSP', category:'抗微生物药', subcategory:'大环内酯类', type:'处方药', indications:'呼吸道感染、Hp根除方案组分（含铋剂/PPI/阿莫西林）。' },
  { id:'d113', name:'注射用阿奇霉素', py:'ZSYAQMS', category:'抗微生物药', subcategory:'大环内酯类', type:'处方药', indications:'社区获得性肺炎、盆腔感染等需静脉给药的大环内酯类敏感菌感染。' },
  { id:'d114', name:'红霉素肠溶片', py:'HMSCRP', category:'抗微生物药', subcategory:'大环内酯类', type:'处方药', indications:'肺炎支原体/衣原体感染、军团菌病、百日咳。青霉素过敏替代。' },
  { id:'d115', name:'盐酸环丙沙星片', py:'YSHBSXP', category:'抗微生物药', subcategory:'喹诺酮类', type:'处方药', indications:'G-杆菌感染、铜绿假单胞菌感染、泌尿生殖道/肠道感染。口服吸收佳。' },
  { id:'d116', name:'左氧氟沙星氯化钠注射液', py:'ZYFSXLHNZSY', category:'抗微生物药', subcategory:'喹诺酮类', type:'处方药', tag:'高危', indications:'重症社区获得性肺炎、复杂性尿路感染/肾盂肾炎。静脉给药。' },
  { id:'d117', name:'盐酸多西环素片', py:'YSDXHSP', category:'抗微生物药', subcategory:'四环素类', type:'处方药', indications:'立克次体病、支原体肺炎、衣原体感染、霍乱。非典型病原体首选。' },
  { id:'d118', name:'盐酸米诺环素胶囊', py:'YSMNHSJN', category:'抗微生物药', subcategory:'四环素类', type:'处方药', indications:'痤疮、MRSA皮肤软组织感染、布鲁氏菌病。高脂溶性四环素类。' },
  { id:'d119', name:'注射用替加环素', py:'ZSYTJHS', category:'抗微生物药', subcategory:'甘氨酰环素类', type:'处方药（特殊使用级）', tag:'高危', indications:'MDR G+/G-菌及厌氧菌复合感染。复杂性腹腔/皮肤软组织感染。' },
  { id:'d120', name:'注射用替考拉宁', py:'ZSYKLN', category:'抗微生物药', subcategory:'糖肽类', type:'处方药（特殊使用级）', tag:'高危', indications:'MRSA/肠球菌等G+菌重症感染。不良反应较万古霉素少。' },
  { id:'d121', name:'注射用盐酸去甲万古霉素', py:'ZSYYSQJWGM', category:'抗微生物药', subcategory:'糖肽类', type:'处方药（特殊使用级）', tag:'高危', indications:'MRSA/肠球菌等耐药G+球菌重症感染。国产替代品种。' },
  { id:'d122', name:'利奈唑胺片/注射液', py:'LNZAPZSY', category:'抗微生物药', subcategory:'噁唑烷酮类', type:'处方药（特殊使用级）', tag:'高危', indications:'MRSA/VRE等耐药G+球菌感染。口服生物利用度近100%。' },
  { id:'d123', name:'复方磺胺甲噁唑片', py:'FFHAJJEP', category:'抗微生物药', subcategory:'磺胺类', type:'处方药', indications:'卡氏肺孢子菌肺炎（首选）、奴卡菌病、MRSA皮肤感染。' },
  { id:'d124', name:'奥硝唑片', py:'AXZP', category:'抗微生物药', subcategory:'硝基咪唑类', type:'处方药', indications:'厌氧菌感染、根尖周炎、牙周炎。甲硝唑替代，半衰期更长。' },
  { id:'d125', name:'伊曲康唑胶囊', py:'YQKZJN', category:'抗微生物药', subcategory:'抗真菌药', type:'处方药', indications:'侵袭性曲霉菌病、念珠菌病、组织胞浆菌病。口服三唑类抗真菌药。' },
  { id:'d126', name:'伏立康唑片', py:'FLKZP', category:'抗微生物药', subcategory:'抗真菌药', type:'处方药', tag:'高危', indications:'侵袭性曲霉菌病（首选）、念珠菌血症、镰刀菌病。TDM强烈推荐。' },
  { id:'d127', name:'注射用醋酸卡泊芬净', py:'ZSYCSKBFJ', category:'抗微生物药', subcategory:'抗真菌药', type:'处方药（特殊使用级）', tag:'高危', indications:'侵袭性念珠菌病、经验性抗真菌治疗、侵袭性曲霉菌病二线。' },
  { id:'d128', name:'盐酸特比萘芬片', py:'YSTBNFP', category:'抗微生物药', subcategory:'抗真菌药', type:'处方药', indications:'皮肤癣菌感染（甲癣、体癣、股癣）。对毛癣菌属活性极强。' },
  { id:'d129', name:'阿昔洛韦片', py:'AXLWP', category:'抗微生物药', subcategory:'抗病毒药', type:'处方药', indications:'单纯疱疹病毒感染（HSV-1/2）、带状疱疹、水痘。' },
  { id:'d130', name:'注射用更昔洛韦', py:'ZSYGXLW', category:'抗微生物药', subcategory:'抗病毒药', type:'处方药', tag:'高危', indications:'CMV感染（视网膜炎、肺炎、肠炎等）。器官移植和HIV患者。' },
  { id:'d131', name:'伐昔洛韦片', py:'FXLWP', category:'抗微生物药', subcategory:'抗病毒药', type:'处方药', indications:'带状疱疹、生殖器疱疹、复发性单纯疱疹。阿昔洛韦前药，生物利用度高。' },
  { id:'d132', name:'布洛芬混悬液（儿童）', py:'BLFHXY', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'OTC', indications:'儿童轻中度疼痛和发热。口服混悬液剂型，易分剂量。' },
  { id:'d133', name:'布洛芬片', py:'BLFP', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'OTC', indications:'成人轻中度疼痛和发热。速释剂型，起效快。' },
  { id:'d134', name:'布洛芬栓（儿童）', py:'BLFS', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'OTC', indications:'儿童发热。直肠给药，适用于呕吐或不能口服的患儿。' },

  // ═══ 青霉素类补充 ═══
  { id:'d135', name:'注射用青霉素钠', py:'ZSYQMSN', category:'抗微生物药', subcategory:'青霉素类', type:'处方药', indications:'敏感菌所致感染：肺炎、脑膜炎、心内膜炎、梅毒、败血症。非口服青霉素。' },
  { id:'d136', name:'注射用哌拉西林钠他唑巴坦钠（复方）', py:'ZSYPLXNTZLTNN', category:'抗微生物药', subcategory:'青霉素类', type:'处方药（限制级）', tag:'高危', indications:'产酶G-菌重症感染：铜绿假单胞菌、腹腔感染、医院获得性肺炎。ICU一线用药。' },
  { id:'d137', name:'注射用美洛西林钠', py:'ZSYMLXN', category:'抗微生物药', subcategory:'青霉素类', type:'处方药', indications:'铜绿假单胞菌等G-菌感染：泌尿道、呼吸道、胆道感染。酰脲类青霉素。' },
  { id:'d138', name:'阿莫西林胶囊', py:'AMXLJN', category:'抗微生物药', subcategory:'青霉素类', type:'处方药', indications:'敏感菌所致呼吸道/泌尿道/皮肤软组织感染。成人常用口服青霉素。' },
  { id:'d139', name:'阿莫西林克拉维酸钾分散片（儿童）', py:'AMXLKLWJSFSP', category:'抗微生物药', subcategory:'青霉素类', type:'处方药', indications:'儿童产酶耐药菌株感染。分散片剂型，可分散于水中服用。' },
  // ═══ 头孢一代补充 ═══
  { id:'d140', name:'注射用头孢唑林钠（一代）', py:'ZSYTBZLN', category:'抗微生物药', subcategory:'头孢一代', type:'处方药', indications:'手术预防用药金标准。G+菌感染：蜂窝织炎、肺炎、尿路感染、败血症。' },
  { id:'d141', name:'头孢羟氨苄片（一代）', py:'TBQABP', category:'抗微生物药', subcategory:'头孢一代', type:'处方药', indications:'敏感G+菌所致轻中度感染：咽炎、扁桃体炎、皮肤软组织感染。口服一代。' },
  // ═══ 头孢二代补充 ═══
  { id:'d142', name:'头孢呋辛钠注射液（二代）', py:'TFXNZSY', category:'抗微生物药', subcategory:'头孢二代', type:'处方药', indications:'手术预防用药、G+/G-菌感染：肺炎、腹腔感染、尿路感染。注射二代。' },
  { id:'d143', name:'头孢呋辛酯片（二代口服）', py:'TFXZP', category:'抗微生物药', subcategory:'头孢二代', type:'处方药', indications:'呼吸道/泌尿道/皮肤软组织感染。注射序贯口服治疗。' },
  { id:'d144', name:'头孢克洛干混悬剂（二代/儿童）', py:'TBKLGHXJ', category:'抗微生物药', subcategory:'头孢二代', type:'处方药', indications:'儿童呼吸道/耳鼻喉/泌尿道感染。口服二代，适合儿童服用。' },
  // ═══ 头孢三代补充 ═══
  { id:'d145', name:'注射用头孢曲松钠（三代）', py:'ZSYTBQSN', category:'抗微生物药', subcategory:'头孢三代', type:'处方药（限制级）', indications:'G-菌重症感染：脑膜炎、脓毒症、腹腔感染、手术预防。长半衰期三代头孢。' },
  { id:'d146', name:'注射用头孢噻肟钠（三代）', py:'ZSYTBSN', category:'抗微生物药', subcategory:'头孢三代', type:'处方药（限制级）', indications:'G-菌重症感染：脑膜炎、腹腔感染、败血症、下呼吸道感染。' },
  { id:'d147', name:'注射用头孢哌酮钠（三代）', py:'ZSYTBPN', category:'抗微生物药', subcategory:'头孢三代', type:'处方药（限制级）', indications:'G-菌感染及胆道感染为主。主要经胆汁排泄。注意凝血功能。' },
  // ═══ 头孢四代补充 ═══
  { id:'d148', name:'注射用盐酸头孢吡肟（四代）', py:'ZSYYSTBBW', category:'抗微生物药', subcategory:'头孢四代', type:'处方药（特殊使用级）', tag:'高危', indications:'ESBL产酶G-菌重症感染、中性粒细胞减少伴发热经验治疗。' },
  { id:'d149', name:'注射用头孢匹罗（四代）', py:'ZSYTBPL', category:'抗微生物药', subcategory:'头孢四代', type:'处方药（特殊使用级）', tag:'高危', indications:'多重耐药G-菌重症感染：脓毒症、肺炎。对肠杆菌科活性优于三代。' },
  // ═══ 头孢五代 ═══
  { id:'d150', name:'注射用头孢洛林酯（五代）', py:'ZSYTBLRZ', category:'抗微生物药', subcategory:'头孢五代', type:'处方药（特殊使用级）', tag:'高危', indications:'MRSA所致社区获得性肺炎和皮肤软组织感染。唯一抗MRSA头孢。' },
  { id:'d151', name:'注射用头孢洛林（五代）', py:'ZSYTBL', category:'抗微生物药', subcategory:'头孢五代', type:'处方药（特殊使用级）', tag:'高危', indications:'MRSA和MDR G-菌混合感染。CAP和cSSTI。五代头孢。' },
  // ═══ 碳青霉烯类补充 ═══
  { id:'d152', name:'注射用美罗培南', py:'ZSYMLPN', category:'抗微生物药', subcategory:'碳青霉烯类', type:'处方药（特殊使用级）', tag:'高危', indications:'多重耐药G-菌重症感染：脓毒症、脑膜炎、腹腔感染。中枢穿透优于亚胺培南。' },
  { id:'d153', name:'注射用厄他培南', py:'ZSYETPN', category:'抗微生物药', subcategory:'碳青霉烯类', type:'处方药（限制级）', indications:'社区获得性复杂感染：腹腔、皮肤软组织、泌尿生殖道感染。每日一次给药。' },
  // ═══ 氨基糖苷类补充 ═══
  { id:'d154', name:'硫酸妥布霉素注射液', py:'LSTBMSZSY', category:'抗微生物药', subcategory:'氨基糖苷类', type:'处方药', tag:'高危', indications:'铜绿假单胞菌感染：脓毒症、肺炎、腹腔感染。对铜绿活性优于庆大霉素。' },
  { id:'d155', name:'硫酸奈替米星注射液', py:'LSNTMXZSY', category:'抗微生物药', subcategory:'氨基糖苷类', type:'处方药', indications:'G-杆菌感染。耳肾毒性较庆大霉素低。TDM监测。' },
  // ═══ 大环内酯类补充 ═══
  { id:'d156', name:'阿奇霉素片', py:'AQMS', category:'抗微生物药', subcategory:'大环内酯类', type:'处方药', indications:'呼吸道感染、支原体肺炎、衣原体感染、性传播疾病。成人常用剂型。' },
  { id:'d157', name:'阿奇霉素注射液（儿童）', py:'AQMSZSY', category:'抗微生物药', subcategory:'大环内酯类', type:'处方药', indications:'儿童重症支原体肺炎静脉给药。大环内酯类首选抗支原体。' },
  { id:'d158', name:'罗红霉素胶囊', py:'LHMSJN', category:'抗微生物药', subcategory:'大环内酯类', type:'处方药', indications:'呼吸道/泌尿生殖道感染。支原体、衣原体感染。食物影响吸收小。' },
  // ═══ 喹诺酮类补充 ═══
  { id:'d159', name:'莫西沙星片', py:'MXSXP', category:'抗微生物药', subcategory:'喹诺酮类', type:'处方药（限制级）', indications:'社区获得性肺炎、急性鼻窦炎、皮肤软组织感染。呼吸喹诺酮。' },
  { id:'d160', name:'莫西沙星氯化钠注射液', py:'MXSXLHNZSY', category:'抗微生物药', subcategory:'喹诺酮类', type:'处方药（限制级）', tag:'高危', indications:'重症社区获得性肺炎、复杂腹腔感染。呼吸喹诺酮静脉给药。' },
  { id:'d161', name:'左氧氟沙星片', py:'ZYFSXP', category:'抗微生物药', subcategory:'喹诺酮类', type:'处方药', indications:'呼吸道/泌尿道感染、皮肤软组织感染。口服序贯治疗。' },
  { id:'d162', name:'盐酸环丙沙星注射液', py:'YSHBSXZSY', category:'抗微生物药', subcategory:'喹诺酮类', type:'处方药', tag:'高危', indications:'重症G-菌感染：铜绿假单胞菌、腹腔感染。抗铜绿活性最强喹诺酮。' },
  // ═══ 四环素类补充 ═══
  { id:'d163', name:'盐酸四环素片', py:'YSSSPP', category:'抗微生物药', subcategory:'四环素类', type:'处方药', indications:'立克次体病、支原体肺炎、衣原体感染、霍乱、鼠疫。经典四环素类。' },
  { id:'d164', name:'替加环素注射液（特殊级）', py:'TJHSZSY', category:'抗微生物药', subcategory:'甘氨酰环素类', type:'处方药（特殊使用级）', tag:'高危', indications:'MDR/XDR细菌所致复杂腹腔/皮肤软组织感染。甘氨酰环素类。' },
  // ═══ 糖肽类补充 ═══
  { id:'d165', name:'注射用盐酸万古霉素', py:'ZSYYSWGM', category:'抗微生物药', subcategory:'糖肽类', type:'处方药（特殊使用级）', tag:'高危', indications:'MRSA首选药物。伪膜性肠炎（口服）、严重G+菌感染。TDM必查。' },
  // ═══ 多肽类 ═══
  { id:'d166', name:'注射用硫酸多粘菌素B', py:'ZSYLSDJJB', category:'抗微生物药', subcategory:'多肽类', type:'处方药（特殊使用级）', tag:'高危', indications:'XDR革兰阴性菌感染最后防线：碳青霉烯耐药鲍曼不动杆菌、铜绿假单胞菌。' },
  { id:'d167', name:'硫酸粘菌素（多粘菌素E）注射液', py:'LSJJSZSY', category:'抗微生物药', subcategory:'多肽类', type:'处方药（特殊使用级）', tag:'高危', indications:'XDR G-菌感染：CRAB、CRPA、CRE。多肽类抗生素最后防线。' },
  // ═══ 其他抗生素 ═══
  { id:'d168', name:'注射用磷霉素钠', py:'ZSYLMSN', category:'抗微生物药', subcategory:'磷霉素类', type:'处方药', indications:'G+/G-菌感染：尿路感染、肠道感染、呼吸道感染。与其他抗生素无交叉耐药。' },
  { id:'d169', name:'磷霉素氨丁三醇散', py:'LMSADSJS', category:'抗微生物药', subcategory:'磷霉素类', type:'处方药', indications:'女性急性单纯性膀胱炎。单剂3g口服。磷霉素口服剂型。' },
  { id:'d170', name:'呋喃妥因肠溶片', py:'FNTYCRP', category:'抗微生物药', subcategory:'硝基呋喃类', type:'处方药', indications:'急慢性尿路感染。尿中浓度高，专用于泌尿道感染。' },
  { id:'d171', name:'盐酸小檗碱片', py:'YSXBJP', category:'消化系统用药', subcategory:'止泻药', type:'处方药', indications:'肠道感染：细菌性痢疾、胃肠炎。植物来源抗菌药。' },
  // ═══ 硝基咪唑类补充 ═══
  { id:'d172', name:'甲硝唑片', py:'JXZP', category:'抗微生物药', subcategory:'硝基咪唑类', type:'处方药', indications:'厌氧菌感染、滴虫病、阿米巴病、幽门螺杆菌根除方案组分。' },
  { id:'d173', name:'甲硝唑氯化钠注射液', py:'JXZLHNZSY', category:'抗微生物药', subcategory:'硝基咪唑类', type:'处方药', indications:'厌氧菌感染静脉给药：腹腔感染、盆腔感染、脑脓肿。' },
  { id:'d174', name:'替硝唑片', py:'TXZP', category:'抗微生物药', subcategory:'硝基咪唑类', type:'处方药', indications:'厌氧菌感染、滴虫病、阿米巴肝脓肿。半衰期较甲硝唑长。' },
  // ═══ 抗真菌药补充 ═══
  { id:'d175', name:'氟康唑胶囊', py:'FKZJN', category:'抗微生物药', subcategory:'抗真菌药', type:'处方药', indications:'念珠菌病（口咽/食管/阴道）、隐球菌脑膜炎。三唑类，口服吸收好。' },
  { id:'d176', name:'注射用氟康唑', py:'ZSYFKZ', category:'抗微生物药', subcategory:'抗真菌药', type:'处方药', indications:'重症念珠菌感染/隐球菌脑膜炎静脉给药。三唑类。' },
  { id:'d177', name:'注射用两性霉素B', py:'ZSYLBXBB', category:'抗微生物药', subcategory:'抗真菌药', type:'处方药（特殊使用级）', tag:'高危', indications:'侵袭性真菌感染最后防线：隐球菌脑膜炎、侵袭性曲霉菌病、毛霉菌病。' },
  { id:'d178', name:'注射用两性霉素B脂质体', py:'ZSYLBXBBTZT', category:'抗微生物药', subcategory:'抗真菌药', type:'处方药（特殊使用级）', tag:'高危', indications:'两性霉素B不耐受者或肾功能不全者的侵袭性真菌感染。肾毒性降低。' },
  { id:'d179', name:'卡泊芬净注射液', py:'KBFJZSY', category:'抗微生物药', subcategory:'抗真菌药', type:'处方药（特殊使用级）', tag:'高危', indications:'侵袭性念珠菌病、经验性抗真菌治疗。棘白菌素类。' },
  // ═══ 抗病毒药补充 ═══
  { id:'d180', name:'奥司他韦胶囊', py:'ASTWJN', category:'抗微生物药', subcategory:'抗病毒药', type:'处方药', indications:'甲型/乙型流感治疗和预防。神经氨酸酶抑制剂。48小时内用药最佳。' },
  { id:'d181', name:'奥司他韦颗粒（儿童）', py:'ASTWKL', category:'抗微生物药', subcategory:'抗病毒药', type:'处方药', indications:'儿童流感治疗和预防。颗粒剂型适合儿童分剂。' },
  { id:'d182', name:'帕拉米韦注射液', py:'PLMWZSY', category:'抗微生物药', subcategory:'抗病毒药', type:'处方药', tag:'高危', indications:'重症流感静脉给药。单次输注即可。神经氨酸酶抑制剂。' },
  { id:'d183', name:'利巴韦林片', py:'LBWLP', category:'抗微生物药', subcategory:'抗病毒药', type:'处方药', indications:'呼吸道合胞病毒感染、丙肝（联合干扰素）。广谱抗病毒。' },
  { id:'d184', name:'恩替卡韦分散片', py:'ETKWFSP', category:'抗微生物药', subcategory:'抗病毒药', type:'处方药', indications:'慢性乙型肝炎抗病毒治疗一线。核苷类似物。' },
  { id:'d185', name:'富马酸替诺福韦二吡呋酯片', py:'FMTNTFEZP', category:'抗微生物药', subcategory:'抗病毒药', type:'处方药', indications:'慢性乙型肝炎和HIV感染。核苷酸类似物。' },
  { id:'d186', name:'盐酸缬更昔洛韦片', py:'YSXGXLWP', category:'抗微生物药', subcategory:'抗病毒药', type:'处方药', tag:'高危', indications:'CMV感染：器官移植后CMV预防/治疗。更昔洛韦前药。' },
  // ═══ 抗寄生虫药 ═══
  { id:'d187', name:'阿苯达唑片', py:'ABDZP', category:'抗微生物药', subcategory:'抗寄生虫药', type:'处方药', indications:'蛔虫/蛲虫/钩虫/鞭虫/绦虫感染、包虫病、囊虫病。广谱驱虫药。' },
  { id:'d188', name:'甲苯咪唑片', py:'JBMDZP', category:'抗微生物药', subcategory:'抗寄生虫药', type:'处方药', indications:'蛔虫/蛲虫/钩虫/鞭虫/绦虫感染。抑制虫体微管。广谱驱虫。' },
  { id:'d189', name:'吡喹酮片', py:'BKTP', category:'抗微生物药', subcategory:'抗寄生虫药', type:'处方药', indications:'血吸虫病首选、绦虫病、囊虫病。吸虫和绦虫特效药。' },
  { id:'d190', name:'伊维菌素片', py:'YWJJP', category:'抗微生物药', subcategory:'抗寄生虫药', type:'处方药', indications:'丝虫病、疥疮、蠕形螨感染。广谱抗寄生虫。' },
  { id:'d191', name:'磷酸氯喹片', py:'LSKL', category:'抗微生物药', subcategory:'抗寄生虫药', type:'处方药', indications:'疟疾（间日疟/三日疟）治疗。红细胞内期裂殖体杀灭剂。' },
  { id:'d192', name:'青蒿素栓/蒿甲醚注射液', py:'QHSSZHJTJZSY', category:'抗微生物药', subcategory:'抗寄生虫药', type:'处方药', indications:'疟疾特别是恶性疟和脑型疟。速效抗疟药。WHO推荐青蒿素联合疗法。' },
  { id:'d193', name:'乙胺嘧啶片', py:'YAPDP', category:'抗微生物药', subcategory:'抗寄生虫药', type:'处方药', indications:'疟疾预防、弓形虫病（与磺胺嘧啶联用）。红细胞外期杀灭剂。' },
  { id:'d194', name:'双氢青蒿素哌喹片', py:'SQQHSQKP', category:'抗微生物药', subcategory:'抗寄生虫药', type:'处方药', indications:'疟疾治疗（ACT方案）。WHO推荐一线抗疟联合制剂。' },
  { id:'d195', name:'左旋咪唑片', py:'ZXMDZP', category:'抗微生物药', subcategory:'抗寄生虫药', type:'处方药', indications:'蛔虫/钩虫/蛲虫感染。免疫调节剂（低剂量）。' },
  { id:'d196', name:'甲硝唑栓（滴虫病）', py:'JXZS', category:'抗微生物药', subcategory:'抗寄生虫药', type:'处方药', indications:'滴虫性阴道炎。阴道局部给药。抗滴虫特效。' },
  // ═══ 布洛芬剂型补充 ═══
  { id:'d197', name:'布洛芬缓释胶囊', py:'BLFHSJN', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'OTC', indications:'成人轻中度疼痛和发热。缓释12小时，适合夜间及持续疼痛。' },
  { id:'d198', name:'布洛芬颗粒（儿童）', py:'BLFKL', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'OTC', indications:'儿童发热和轻中度疼痛。颗粒剂型冲服，分剂方便。' },
  { id:'d199', name:'对乙酰氨基酚片', py:'DYXABGP', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'OTC', indications:'发热和轻中度疼痛。非抗炎解热药，胃肠道安全性好。' },
  { id:'d200', name:'对乙酰氨基酚混悬液（儿童）', py:'DYXABGPHXY', category:'解热镇痛药', subcategory:'非甾体抗炎药', type:'OTC', indications:'儿童发热和疼痛。混悬液剂型适合儿童。与布洛芬交替使用。' },
  // ═══ 林可霉素类 ═══
  { id:'d201', name:'盐酸克林霉素胶囊', py:'YSKLMJN', category:'抗微生物药', subcategory:'林可霉素类', type:'处方药（非限制级）', indications:'厌氧菌感染、G+菌感染：腹腔感染、盆腔感染、皮肤软组织感染、牙周感染。青霉素过敏替代。' },
  { id:'d202', name:'克林霉素磷酸酯注射液', py:'KLMPLSZZSY', category:'抗微生物药', subcategory:'林可霉素类', type:'处方药（限制级）', indications:'厌氧菌和G+菌重症感染：腹腔感染、盆腔感染、脓胸、骨关节感染。静脉给药。' },
  { id:'d203', name:'盐酸林可霉素注射液', py:'YSLKMSZSY', category:'抗微生物药', subcategory:'林可霉素类', type:'处方药（非限制级）', indications:'G+菌及厌氧菌感染：呼吸道感染、皮肤软组织感染、骨髓炎。克林霉素前体。' },
  { id:'d204', name:'克林霉素棕榈酸酯颗粒（儿童）', py:'KLMSZLSJKL', category:'抗微生物药', subcategory:'林可霉素类', type:'处方药（非限制级）', indications:'儿童G+菌/厌氧菌感染：呼吸道/皮肤软组织/口腔感染。口服颗粒剂。' },
  // ═══ 氯霉素类 ═══
  { id:'d205', name:'氯霉素注射液', py:'LMSZSY', category:'抗微生物药', subcategory:'氯霉素类', type:'处方药（限制级）', tag:'高危', indications:'伤寒/副伤寒、细菌性脑膜炎（青霉素过敏者）、厌氧菌感染、立克次体病。广谱但骨髓抑制风险严格限制使用。' },
  { id:'d206', name:'氯霉素滴眼液', py:'LMSDYY', category:'抗微生物药', subcategory:'氯霉素类', type:'OTC', indications:'细菌性结膜炎、角膜炎、沙眼。外用剂型，全身吸收极少。' },
  { id:'d207', name:'甲砜霉素肠溶片', py:'JFMSCRP', category:'抗微生物药', subcategory:'氯霉素类', type:'处方药（限制级）', indications:'敏感菌所致呼吸道/泌尿道/肠道感染。氯霉素衍生物，骨髓抑制轻于氯霉素。' },
  // ═══ 单环β-内酰胺类 ═══
  { id:'d208', name:'注射用氨曲南', py:'ZSYAQN', category:'抗微生物药', subcategory:'单环β-内酰胺类', type:'处方药（限制级）', indications:'G-菌感染（尤其铜绿假单胞菌）：泌尿道感染、下呼吸道感染、腹腔感染。青霉素过敏者安全选择（无交叉过敏）。' },
  // ═══ 青霉烯类 ═══
  { id:'d209', name:'法罗培南钠片', py:'FLPNNP', category:'抗微生物药', subcategory:'青霉烯类', type:'处方药（限制级）', indications:'呼吸道/泌尿道/皮肤软组织感染。口服青霉烯类，对G+/G-/厌氧菌均有效。' },
  // ═══ β-内酰胺酶抑制剂复方 ═══
  { id:'d210', name:'注射用头孢哌酮钠他唑巴坦钠', py:'ZSYTBPNTZLTNN', category:'抗微生物药', subcategory:'β-内酰胺酶抑制剂复方', type:'处方药（特殊使用级）', tag:'高危', indications:'产酶G-菌重症感染：HAP、腹腔感染、脓毒症。三代头孢+他唑巴坦。' },
  // ═══ 环脂肽类 ═══
  { id:'d211', name:'注射用达托霉素', py:'ZSYDTMS', category:'抗微生物药', subcategory:'环脂肽类', type:'处方药（特殊使用级）', tag:'高危', indications:'MRSA/VRE所致皮肤软组织感染、菌血症、右心感染性心内膜炎。不可用于肺炎（被肺表面活性物质灭活）。' },
  // ═══ 利福霉素类 ═══
  { id:'d212', name:'利福平胶囊', py:'LFPJN', category:'抗微生物药', subcategory:'利福霉素类', type:'处方药（限制级）', indications:'结核病一线用药、麻风病、MRSA联合用药。CYP3A4强诱导剂。' },
  { id:'d213', name:'利福喷汀胶囊', py:'LFPTJN', category:'抗微生物药', subcategory:'利福霉素类', type:'处方药（限制级）', indications:'结核病间歇治疗。长效利福霉素衍生物，每周1-2次给药。' },
  // ═══ 抗分枝杆菌药 ═══
  { id:'d214', name:'异烟肼片', py:'YYJP', category:'抗微生物药', subcategory:'抗分枝杆菌药', type:'处方药（非限制级）', indications:'结核病一线用药。对繁殖期分枝杆菌杀菌力强。预防性用药。' },
  { id:'d215', name:'盐酸乙胺丁醇片', py:'YSYADP', category:'抗微生物药', subcategory:'抗分枝杆菌药', type:'处方药（非限制级）', indications:'结核病一线用药。对繁殖期分枝杆菌抑菌。视神经炎是主要毒性反应。' },
  { id:'d216', name:'吡嗪酰胺片', py:'BXAMP', category:'抗微生物药', subcategory:'抗分枝杆菌药', type:'处方药（非限制级）', indications:'结核病一线用药。对巨噬细胞内酸性环境中分枝杆菌杀菌。肝毒性突出。' },
  { id:'d217', name:'利福平异烟肼吡嗪酰胺复方片', py:'LFPYYJBXAMPFFP', category:'抗微生物药', subcategory:'抗分枝杆菌药', type:'处方药（非限制级）', indications:'结核病初治强化期：三联/四联方案的固定剂量复合制剂。提高依从性。' },
  { id:'d218', name:'对氨基水杨酸异烟肼片', py:'DAJSSSYYJP', category:'抗微生物药', subcategory:'抗分枝杆菌药', type:'处方药（限制级）', indications:'耐药结核病二线用药。对氨基水杨酸+异烟肼复方。延缓耐药。' },
  // ═══ 氧头孢烯类 ═══
  { id:'d219', name:'注射用拉氧头孢钠', py:'ZSYLYTBN', category:'抗微生物药', subcategory:'头霉素类', type:'处方药（限制级）', tag:'高危', indications:'G-菌及厌氧菌感染：腹腔感染、盆腔感染、脓毒症。氧头孢烯类，含NMTT侧链→出血风险。' },
  // ═══ 链阳菌素类 ═══
  { id:'d220', name:'注射用奎奴普丁/达福普汀', py:'ZSYKNPDDFPT', category:'抗微生物药', subcategory:'环脂肽类', type:'处方药（特殊使用级）', tag:'高危', indications:'VRE（万古霉素耐药粪肠球菌）感染。链阳菌素类复方。仅对粪肠球菌有效，对屎肠球菌无效。' }
];

// ═══ 指南数据 ═══
const GUIDELINES = [
  { id:'g001', title:'中国高血压防治指南 2024', system:'心血管系统', year:'2024' , py:'中国高血压防治指南 2024'},
  { id:'g002', title:'心力衰竭诊疗指南 2023', system:'心血管系统', year:'2023' , py:'心力衰竭诊疗指南 2023'},
  { id:'g003', title:'中国血脂管理指南 2023', system:'心血管系统', year:'2023' , py:'中国血脂管理指南 2023'},
  { id:'g004', title:'抗血小板治疗中国专家共识', system:'心血管系统', year:'2023' , py:'B'},
  { id:'g005', title:'社区获得性肺炎诊治指南', system:'呼吸系统', year:'2023' , py:'D'},
  { id:'g006', title:'COPD诊治指南 2024', system:'呼吸系统', year:'2024' , py:'COPD'},
  { id:'g007', title:'支气管哮喘防治指南', system:'呼吸系统', year:'2023' , py:'C'},
  { id:'g008', title:'消化性溃疡诊疗规范', system:'消化系统', year:'2023' , py:'消化性溃疡诊疗规范'},
  { id:'g009', title:'中国2型糖尿病防治指南', system:'内分泌系统', year:'2023' , py:'B'},
  { id:'g010', title:'痛风诊疗指南', system:'内分泌系统', year:'2023' , py:'痛风诊疗指南'},
  { id:'g011', title:'质子泵抑制剂临床应用指南', system:'消化系统', year:'2023' , py:'BC'},
  { id:'g012', title:'围手术期抗菌药物预防指南', system:'抗感染', year:'2023' , py:'围手术期抗菌药物预防指南'},
  { id:'g013', title:'华法林抗凝治疗中国专家共识', system:'血液系统', year:'2023' , py:'华法林抗凝治疗中国专家共识'},
  { id:'g014', title:'慢性疼痛药物治疗指南', system:'神经系统', year:'2023' , py:'慢性疼痛药物治疗指南'},
  { id:'g015', title:'Hp根除治疗全国专家共识', system:'消化系统', year:'2023' , py:'HPC'},
  { id:'g016', title:'骨质疏松诊疗指南', system:'内分泌系统', year:'2023' , py:'骨质疏松诊疗指南'},
  { id:'g017', title:'心房颤动抗凝治疗指南', system:'心血管系统', year:'2023' , py:'D'},
  { id:'g018', title:'肾性贫血诊疗指南', system:'血液系统', year:'2023' , py:'肾性贫血诊疗指南'},
  { id:'g019', title:'化疗止吐指南', system:'抗肿瘤', year:'2023' , py:'化疗止吐指南'},
  { id:'g020', title:'糖皮质激素临床应用指导原则', system:'内分泌系统', year:'2023' , py:'CD'},
  { id:'g021', title:'碳青霉烯类抗菌药物临床应用专家共识', system:'抗感染', year:'2023' , py:'C'},
  { id:'g022', title:'喹诺酮类抗菌药物临床应用指导意见', system:'抗感染', year:'2023' , py:'CD'},
  { id:'g023', title:'β-内酰胺类抗菌药物皮肤试验指导原则', system:'抗感染', year:'2023' , py:'AD'},
  { id:'g024', title:'中国心力衰竭诊断和治疗指南', system:'心血管系统', year:'2023' , py:'D'},
  { id:'g025', title:'抗血栓药物围手术期管理专家共识', system:'血液系统', year:'2023' , py:'抗血栓药物围手术期管理专家共识'},
  { id:'g026', title:'卒中二级预防抗血小板治疗指南', system:'神经系统', year:'2023' , py:'B'},
  { id:'g027', title:'非酒精性脂肪性肝病诊疗指南', system:'消化系统', year:'2023' , py:'B'},
  { id:'g028', title:'慢性乙型肝炎防治指南', system:'消化系统', year:'2023' , py:'慢性乙型肝炎防治指南'},
  { id:'g029', title:'维生素D及其类似物临床应用共识', system:'内分泌系统', year:'2023' , py:'DC'},
  { id:'g030', title:'静脉血栓栓塞症防治指南', system:'呼吸系统', year:'2023' , py:'静脉血栓栓塞症防治指南'},
  { id:'g031', title:'直接口服抗凝药临床合理应用指南', system:'血液系统', year:'2023' , py:'C'},
  { id:'g032', title:'抗血小板药物临床应用中国专家共识', system:'血液系统', year:'2023' , py:'BC'},
  { id:'g033', title:'口服降糖药物临床应用专家共识', system:'内分泌系统', year:'2023' , py:'C'},
  { id:'g034', title:'化疗药物临床应用管理规范', system:'抗肿瘤', year:'2023' , py:'C'},
  { id:'g035', title:'原发性肝癌诊疗指南（2026年版）', system:'肿瘤', year:'2026' , py:'AB'},
  { id:'g036', title:'中国淋巴瘤诊疗指南（2026版）', system:'肿瘤', year:'2026' , py:'BB'},
  { id:'g037', title:'CSCO乳腺癌诊疗指南（2026版）', system:'肿瘤', year:'2026' , py:'CSCOAB'},
  { id:'g038', title:'肺癌常用标志物检测及临床应用专家共识（2026版）', system:'肿瘤', year:'2026' , py:'ACBCCB'},
  { id:'g039', title:'靶向TROP2的ADC应用于非小细胞肺癌专家共识（2026版）', system:'肿瘤', year:'2026' , py:'TROPADCBAB'},
  { id:'g040', title:'中国肝细胞癌经动脉介入治疗临床实践指南（2026版）', system:'肿瘤', year:'2026' , py:'BADCB'},
  { id:'g041', title:'肿瘤化疗导致中性粒细胞减少诊治中国专家共识（2026版）', system:'肿瘤', year:'2026' , py:'DBB'},
  { id:'g042', title:'基于NGS的肿瘤全景变异检测探针设计专家共识（2026版）', system:'肿瘤', year:'2026' , py:'NGSBCB'},
  { id:'g043', title:'CACA整体整合诊疗指南：老年肿瘤（2026版）', system:'肿瘤', year:'2026' , py:'CACAB'},
  { id:'g044', title:'CACA指南·血管保护（2026版）', system:'肿瘤', year:'2026' , py:'CACABB'},
  { id:'g045', title:'中国老年患者医学营养治疗指南（2026版）', system:'肿瘤', year:'2026' , py:'B'},
  { id:'g046', title:'经皮冠状动脉介入治疗指南（2025）', system:'心血管', year:'2025' , py:'D'},
  { id:'g047', title:'智能可穿戴设备在心血管领域应用的专家建议（2026）', system:'心血管', year:'2026' , py:'CDB'},
  { id:'g048', title:'QT间期延长的监测与风险评估专家共识（2026）', system:'心血管', year:'2026' , py:'QTCC'},
  { id:'g049', title:'复发性心包炎临床诊疗专家共识（2026）', system:'心血管', year:'2026' , py:'BC'},
  { id:'g050', title:'成人运动康复心血管风险评估与防范专家共识（2026）', system:'心血管', year:'2026' , py:'CD'},
  { id:'g051', title:'成人先天性心脏病相关肺动脉高压诊断与治疗指南（2026）', system:'心血管', year:'2026' , py:'CBDD'},
  { id:'g052', title:'低镁血症诊断与治疗专家共识（2026）', system:'心血管', year:'2026' , py:'DD'},
  { id:'g053', title:'急性主动脉夹层合并灌注不良综合征诊断和治疗专家共识（2026版）', system:'心血管', year:'2026' , py:'DCBBDB'},
  { id:'g054', title:'介入相关主动脉损伤的预防与处理策略专家共识（2026）', system:'心血管', year:'2026' , py:'DCC'},
  { id:'g055', title:'女性心律失常诊治专家共识（2026）', system:'心血管', year:'2026' , py:'C'},
  { id:'g056', title:'神经调控治疗癫痫临床指南（2026版）', system:'神经', year:'2026' , py:'DCB'},
  { id:'g057', title:'慢性意识障碍患者综合康复和无创神经调控促醒治疗中国专家共识（2026）', system:'神经', year:'2026' , py:'ACDC'},
  { id:'g058', title:'神经外科手术机器人辅助脑深部电刺激手术专家共识（2026版）', system:'神经', year:'2026' , py:'BDCB'},
  { id:'g059', title:'植入式脑机接口临床应用路径管理中国专家共识（2026版）', system:'神经', year:'2026' , py:'CB'},
  { id:'g060', title:'中国卒中患者社区-居家全周期体适能康复路径2026专家共识', system:'神经', year:'2026' , py:'中国卒中患者社区-居家全周期体适能康复路径2026专家共识'},
  { id:'g061', title:'急性缺血性卒中再灌注治疗医疗质量评价与改进专家建议（2026）', system:'神经', year:'2026' , py:'急性缺血性卒中再灌注治疗医疗质量评价与改进专家建议（2026）'},
  { id:'g062', title:'高血压性脑出血重症管理专家共识（2026版）', system:'神经', year:'2026' , py:'CB'},
  { id:'g063', title:'癫痫共病焦虑、抑郁诊治专家共识（2026版）', system:'神经', year:'2026' , py:'BB'},
  { id:'g064', title:'视网膜中央动脉阻塞神经介入专家共识（2026版）', system:'神经', year:'2026' , py:'DB'},
  { id:'g065', title:'中国慢性呼吸疾病呼吸康复指南（2026版）', system:'呼吸', year:'2026' , py:'BB'},
  { id:'g066', title:'小气道病变与慢性气道疾病临床诊疗专家共识（2026年）', system:'呼吸', year:'2026' , py:'DBBDBC'},
  { id:'g067', title:'免疫抑制宿主重症肺炎诊断与治疗专家共识（2026）', system:'呼吸', year:'2026' , py:'D'},
  { id:'g068', title:'成人原发性纤毛运动障碍诊治专家共识（2025年版）', system:'呼吸', year:'2025' , py:'CDAB'},
  { id:'g069', title:'GOLD 2026（慢阻肺全球倡议2026版报告）', system:'呼吸', year:'2026' , py:'GOLDBB'},
  { id:'g070', title:'消化道重建术后ERCP专家共识（2026版）', system:'消化', year:'2026' , py:'DERCPB'},
  { id:'g071', title:'中国胆汁酸性腹泻临床管理专家共识（2026版）', system:'消化', year:'2026' , py:'DCB'},
  { id:'g072', title:'中国成人短肠综合征诊疗专家共识（2026版）', system:'消化', year:'2026' , py:'CDCB'},
  { id:'g073', title:'老年人消化不良的评估与处理中国专家共识（2026版）', system:'消化', year:'2026' , py:'BCB'},
  { id:'g074', title:'老年人胆囊结石诊断和治疗专家共识（2026版）', system:'消化', year:'2026' , py:'DDB'},
  { id:'g075', title:'儿童发热全程管理专家共识（2026版）', system:'儿科', year:'2026' , py:'CB'},
  { id:'g076', title:'抗流感病毒药物儿科合理应用专家共识（2026版）', system:'儿科', year:'2026' , py:'BDB'},
  { id:'g077', title:'新一代四环素类抗生素儿科应用临床实践指南（2026版）', system:'儿科', year:'2026' , py:'DCB'},
  { id:'g078', title:'儿童白血病微小残留病监测与临床应用指南（2026）', system:'儿科', year:'2026' , py:'BBCBCC'},
  { id:'g079', title:'儿童淋巴结肿大临床诊治专家共识（2026）', system:'儿科', year:'2026' , py:'BDC'},
  { id:'g080', title:'儿童青少年1型糖尿病自我管理教育与支持专家共识（2026版）', system:'儿科', year:'2026' , py:'BCB'},
  { id:'g081', title:'遗传性妇科肿瘤高风险人群管理指南（2026年版）', system:'妇产科', year:'2026' , py:'CB'},
  { id:'g082', title:'辅助生殖技术静脉血栓栓塞症风险评估及预防中国专家共识（2026年版）', system:'妇产科', year:'2026' , py:'B'},
  { id:'g083', title:'子宫颈上皮内瘤变2级（CIN2）管理中国专家共识（2026版）', system:'妇产科', year:'2026' , py:'BCINB'},
  { id:'g084', title:'孕产妇血液管理专家共识（2026年指南，贫血管理）', system:'妇产科', year:'2026' , py:'C'},
  { id:'g085', title:'妊娠合并胸主动脉疾病诊断与治疗专家共识（2026）', system:'妇产科', year:'2026' , py:'BDBD'},
  { id:'g086', title:'中国宫颈机能不全诊断与治疗专家共识（2026修订版）', system:'妇产科', year:'2026' , py:'BDDB'},
  { id:'g087', title:'骨科手术部位感染创面预防与治疗的专家共识（2026版）', system:'骨科', year:'2026' , py:'BCB'},
  { id:'g088', title:'膝骨关节炎阶梯治疗专家共识2026版', system:'骨科', year:'2026' , py:'B'},
  { id:'g089', title:'智能传感动态引导技术在骨科手术应用的专家共识（2026版）', system:'骨科', year:'2026' , py:'CDDB'},
  { id:'g090', title:'前交叉韧带过顶位重建技术中国专家共识（2025年版）', system:'骨科', year:'2025' , py:'CDDB'},
  { id:'g091', title:'骨质疏松性桡骨远端骨折中西医协同诊疗临床实践指南（2026版）', system:'骨科', year:'2026' , py:'DCB'},
  { id:'g092', title:'中国老年2型糖尿病防治临床指南（2026年版）', system:'内分泌', year:'2026' , py:'BCB'},
  { id:'g093', title:'2型糖尿病胰岛β细胞功能评估与保护临床专家共识（2026版）', system:'内分泌', year:'2026' , py:'BDBBCB'},
  { id:'g094', title:'老年人群维生素D营养评估及补充中国专家共识（2026.03）', system:'内分泌', year:'2026' , py:'DBC'},
  { id:'g095', title:'痛风石损害程度分级和外科治疗的多学科专家共识（2025版）', system:'内分泌', year:'2025' , py:'CDDB'},
  { id:'g096', title:'发热待查诊治专家共识（2026版）', system:'感染', year:'2026' , py:'DCB'},
  { id:'g097', title:'腹腔感染常见耐药菌诊治与防控中国专家共识（2026版）', system:'感染', year:'2026' , py:'CB'},
  { id:'g098', title:'抗病原体临床应用中国专家指南（2026版）', system:'感染', year:'2026' , py:'BCB'},
  { id:'g099', title:'结核病宿主来源生物标志物的诊断应用专家共识（2026.01）', system:'感染', year:'2026' , py:'BBD'},
  { id:'g100', title:'抗结核药治疗药物监测临床应用专家共识(2025年更新版)', system:'感染', year:'2025' , py:'CCB'},
  { id:'g101', title:'我国动脉炎性前部缺血性视神经病变诊断和治疗专家共识（2026）', system:'眼科', year:'2026' , py:'DBBBD'},
  { id:'g102', title:'围手术期应用胃肠外直接凝血酶抑制剂的专家共识（2026）', system:'药学', year:'2026' , py:'C'},
  { id:'g103', title:'骨科大手术患者静脉血栓栓塞症预防专家共识（2026）', system:'药学', year:'2026' , py:'D'},
  { id:'g104', title:'腔镜机器人手术体位安置专家共识（2026版）', system:'腔镜机器人', year:'2026' , py:'AB'},
  { id:'g105', title:'机器人辅助胃癌手术助手职责专家共识（2026版）', system:'腔镜机器人', year:'2026' , py:'AB'},
  { id:'g106', title:'成人烧伤患者气道灌洗疗法专家共识（2026版）', system:'其他', year:'2026' , py:'CDB'},
  { id:'g107', title:'中成药防治泛血管疾病及其靶器官损害的专家共识', system:'其他', year:'2026' , py:'CB'},
  { id:'g108', title:'保湿剂在特应性皮炎管理中的合理应用专家共识（2026版）', system:'其他', year:'2026' , py:'BB'},
  { id:'g109', title:'肝细胞癌伴肺转移多学科诊治专家共识（2026版）', system:'其他', year:'2026' , py:'BABDB'},
  { id:'g110', title:'阴道微生态评价临床检验与结果报告规范化专家共识（2026.02.28）', system:'其他', year:'2026' , py:'DCB'},
  { id:'g111', title:'2026 ACC/AHA/AACVPR血脂异常管理指南', system:'心血管', year:'2026' , py:'ACCAHAAACVPRC'},
  { id:'g112', title:'2026 ESC心力衰竭指南', system:'心血管', year:'2026' , py:'ESC'},
  { id:'g113', title:'2026 ESC心血管疾病合并慢性肾脏病指南', system:'心血管', year:'2026' , py:'ESCBBB'},
  { id:'g114', title:'2026 ESC心脏康复指南', system:'心血管', year:'2026' , py:'ESC'},
  { id:'g115', title:'2026 ESC心肌梗死指南', system:'心血管', year:'2026' , py:'ESC'},
  { id:'g116', title:'2026 ESC/EAS脂蛋白(a)指南', system:'心血管', year:'2026' , py:'ESCEASDBA'},
  { id:'g117', title:'2026 AHA改善心血管健康饮食指南', system:'心血管', year:'2026' , py:'AHA'},
  { id:'g118', title:'NCCN中枢神经系统肿瘤指南（2026.V1）', system:'肿瘤', year:'2026' , py:'NCCNV'},
  { id:'g119', title:'2026 NCS危重成人癫痫持续状态神经预后指南', system:'神经', year:'2026' , py:'NCSCC'},
  { id:'g120', title:'2025 AASM成人阻塞性睡眠呼吸暂停住院评估管理指南', system:'神经', year:'2025' , py:'AASMC'},
  { id:'g121', title:'2025 ASPN外周神经刺激慢性疼痛神经系统疾病应用共识', system:'神经', year:'2025' , py:'ASPNCB'},
  { id:'g122', title:'2025 ABN自身免疫性重症肌无力管理指南（更新版）', system:'神经', year:'2025' , py:'ABNB'},
  { id:'g123', title:'AA基于血液的生物标志物阿尔茨海默病诊断应用指南', system:'神经', year:'2026' , py:'AABABD'},
  { id:'g124', title:'2025 RANO/EANO PET成像胶质瘤临床应用建议（更新版）', system:'神经', year:'2025' , py:'RANOEANOPETCCB'},
  { id:'g125', title:'2026国际共识：Rasmussen综合征诊断和治疗', system:'神经', year:'2026' , py:'RASMUSSEND'},
  { id:'g126', title:'2026 AACE成人2型糖尿病管理流程共识', system:'内分泌', year:'2026' , py:'AACECBC'},
  { id:'g127', title:'2025 JSH血压升高和高血压管理指南', system:'心血管', year:'2025' , py:'JSH'},
  { id:'g128', title:'2025 SOGC原发性痛经诊断与管理指南', system:'妇产科', year:'2025' , py:'SOGCD'},
  { id:'g129', title:'2026 Kleefstra综合征国际临床循证指南', system:'其他', year:'2026' , py:'KLEEFSTRAC'},
  { id:'g130', title:'2026 21-羟化酶缺乏症临床管理指南', system:'内分泌', year:'2026' , py:'C'},
  { id:'g131', title:'2026意大利法布里病神经学管理及结局指标共识', system:'神经', year:'2026' , py:'DBBB'},
  { id:'g132', title:'WHO GLP-1药物治疗肥胖症全球指南', system:'内分泌', year:'2026' , py:'WHOGLP'},
  { id:'g133', title:'医疗机构人工智能应用与治理专家共识（2026版）', system:'其他', year:'2026' , py:'B'},
  { id:'g134', title:'FUTURE-AI医疗保健可信赖可部署AI国际共识指南', system:'其他', year:'2026' , py:'FUTUREAIBBAI'},
  { id:'g135', title:'中国器官移植人工智能辅助临床决策专家共识（2026版）', system:'其他', year:'2026' , py:'CCB'},
  // ═══ 2026年新增条目 ═══
  { id:'g136', title:'重组人粒细胞集落刺激因子临床应用管理中国专家共识（2026版）', system:'抗肿瘤', year:'2026' },
  { id:'g137', title:'肝损伤药物目录及合理用药专家共识', system:'药学', year:'2026' },
  { id:'g138', title:'中国多民族人群精准用药研究价值与策略专家共识', system:'药学', year:'2026' },
  { id:'g139', title:'低分子肝素临床应用中国专家共识', system:'血液系统', year:'2026' },
  { id:'g140', title:'2026版CSCO结直肠癌诊疗指南', system:'肿瘤', year:'2026' },
  { id:'g141', title:'2026版CSCO胃癌诊疗指南', system:'肿瘤', year:'2026' },
  { id:'g142', title:'2026版CSCO非小细胞肺癌诊疗指南', system:'肿瘤', year:'2026' },
  { id:'g143', title:'2026版CSCO黑色素瘤诊疗指南', system:'肿瘤', year:'2026' },
  { id:'g144', title:'2026版CSCO肿瘤化疗所致血小板减少症诊疗指南', system:'肿瘤', year:'2026' },
  { id:'g145', title:'肿瘤患者药学监护分级标准中国专家共识', system:'抗肿瘤', year:'2026' },
  { id:'g146', title:'2026 AHA/ACC心血管-肾脏-代谢综合征科学声明', system:'心血管', year:'2026' },
  { id:'g147', title:'中国支气管哮喘基层诊疗与管理指南（2026年）', system:'呼吸', year:'2026' },
  { id:'g148', title:'呼吸系统疾病床旁超声诊断与评估专家共识（2026版）', system:'呼吸', year:'2026' },
];

// ═══ 法规数据 ═══
const LAWS = [
  { id:'l001', title:'处方管理办法', year:'2007', content:'规定了处方的开具、调配、保管等相关要求...' , py:'CB'},
  { id:'l002', title:'抗菌药物临床应用管理办法', year:'2012', content:'抗菌药物分级管理制度（非限制使用级、限制使用级、特殊使用级）...' , py:'CB'},
  { id:'l003', title:'麻醉药品和精神药品管理条例', year:'2005', content:'麻精药品的种植、生产、经营、使用、储存、运输管理规定...' , py:'麻醉药品和精神药品管理条例'},
  { id:'l004', title:'药品管理法', year:'2019', content:'药品研制、生产、经营、使用和监督管理的基本法律...' , py:'药品管理法'},
];

// ═══ 输液与配伍禁忌 ═══
const INFUSION_DATA = [
  { id:'i001', drug:'青霉素G钠', py:'QMSGN', cat:'输液配伍禁忌' },
  { id:'i002', drug:'头孢曲松钠', py:'TBQSN', cat:'输液配伍禁忌' },
  { id:'i003', drug:'头孢哌酮舒巴坦', py:'TBPTSBT', cat:'输液配伍禁忌' },
  { id:'i004', drug:'哌拉西林他唑巴坦', py:'PLXLTZBT', cat:'输液配伍禁忌' },
  { id:'i005', drug:'美罗培南', py:'MLPN', cat:'输液配伍禁忌' },
  { id:'i006', drug:'万古霉素', py:'WGMS', cat:'输液配伍禁忌' },
  { id:'i007', drug:'左氧氟沙星注射液', py:'ZYFSXZSY', cat:'输液配伍禁忌' },
  { id:'i008', drug:'莫西沙星注射液', py:'MXSXZSY', cat:'输液配伍禁忌' },
  { id:'i009', drug:'甲硝唑注射液', py:'JXZZSY', cat:'输液配伍禁忌' },
  { id:'i010', drug:'阿奇霉素注射液', py:'AQMSZSY', cat:'输液配伍禁忌' },
  { id:'i011', drug:'奥美拉唑（注射用）', py:'AMLZZSY', cat:'输液配伍禁忌' },
  { id:'i012', drug:'氨茶碱注射液', py:'ACJZSY', cat:'输液配伍禁忌' },
  { id:'i013', drug:'呋塞米注射液', py:'FSMZSY', cat:'输液配伍禁忌' },
  { id:'i014', drug:'氯化钾注射液', py:'LHJZSY', cat:'输液配伍禁忌' },
  { id:'i015', drug:'葡萄糖酸钙注射液', py:'PTTSGZSY', cat:'输液配伍禁忌' },
  { id:'i016', drug:'胰岛素注射液', py:'YDSZSY', cat:'输液配伍禁忌' },
  { id:'i017', drug:'多巴胺注射液', py:'DBAZSY', cat:'输液配伍禁忌' },
  { id:'i018', drug:'硝酸甘油注射液', py:'XSGYZSY', cat:'输液配伍禁忌' },
  { id:'i019', drug:'甘露醇注射液', py:'GLCZSY', cat:'输液配伍禁忌' },
  { id:'i020', drug:'丙泊酚注射液', py:'BPFZSY', cat:'输液配伍禁忌' },
  { id:'i021', drug:'四环素类 + 含金属离子药物' , py:'四环素类 + 含金属离子药物', cat:'口服配伍禁忌'},
  { id:'i022', drug:'喹诺酮类 + 含金属离子药物' , py:'喹诺酮类 + 含金属离子药物', cat:'口服配伍禁忌'},
  { id:'i023', drug:'华法林 + 多种药物' , py:'D', cat:'口服配伍禁忌'},
  { id:'i024', drug:'PPI + 氯吡格雷' , py:'PPI', cat:'口服配伍禁忌'},
  { id:'i025', drug:'他汀类 + CYP3A4抑制剂' , py:'CYPA', cat:'口服配伍禁忌'},
  { id:'i026', drug:'ACEI/ARB + 保钾药' , py:'ACEIARBB', cat:'口服配伍禁忌'},
  { id:'i027', drug:'甲氨蝶呤 + NSAIDs/磺胺' , py:'ADNSAIDSA', cat:'口服配伍禁忌'},
  { id:'i028', drug:'地高辛 + 多种药物' , py:'DD', cat:'口服配伍禁忌'},
  { id:'i029', drug:'锂盐 + NSAIDs/利尿剂' , py:'NSAIDS', cat:'口服配伍禁忌'},
  { id:'i030', drug:'避孕药 + 酶诱导剂' , py:'BD', cat:'口服配伍禁忌'},
  { id:'i031', drug:'常用输液载体选择', py:'CYSYZTXZ', cat:'输液通用原则' },
  { id:'i032', drug:'输液速度控制', py:'SYSDKZ', cat:'输液通用原则' },
  { id:'i033', drug:'配伍禁忌快速判断', py:'PWJJKSPD', cat:'输液通用原则' }
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
  { system:'肿瘤', icon:'🎗️', items:GUIDELINES.filter(g=>g.system==='肿瘤') },
  { system:'心血管', icon:'❤️', items:GUIDELINES.filter(g=>g.system==='心血管') },
  { system:'神经', icon:'🧠', items:GUIDELINES.filter(g=>g.system==='神经') },
  { system:'呼吸', icon:'🫁', items:GUIDELINES.filter(g=>g.system==='呼吸') },
  { system:'消化', icon:'🫄', items:GUIDELINES.filter(g=>g.system==='消化') },
  { system:'儿科', icon:'👶', items:GUIDELINES.filter(g=>g.system==='儿科') },
  { system:'妇产科', icon:'🤰', items:GUIDELINES.filter(g=>g.system==='妇产科') },
  { system:'骨科', icon:'🦴', items:GUIDELINES.filter(g=>g.system==='骨科') },
  { system:'内分泌', icon:'🩸', items:GUIDELINES.filter(g=>g.system==='内分泌') },
  { system:'感染', icon:'🦠', items:GUIDELINES.filter(g=>g.system==='感染') },
  { system:'眼科', icon:'👁️', items:GUIDELINES.filter(g=>g.system==='眼科') },
  { system:'药学', icon:'💊', items:GUIDELINES.filter(g=>g.system==='药学') },
  { system:'腔镜机器人', icon:'🤖', items:GUIDELINES.filter(g=>g.system==='腔镜机器人') },
  { system:'心血管系统', icon:'❤️', items:GUIDELINES.filter(g=>g.system==='心血管系统') },
  { system:'呼吸系统', icon:'🫁', items:GUIDELINES.filter(g=>g.system==='呼吸系统') },
  { system:'消化系统', icon:'🫄', items:GUIDELINES.filter(g=>g.system==='消化系统') },
  { system:'内分泌系统', icon:'🩸', items:GUIDELINES.filter(g=>g.system==='内分泌系统') },
  { system:'抗感染', icon:'🦠', items:GUIDELINES.filter(g=>g.system==='抗感染') },
  { system:'神经系统', icon:'🧠', items:GUIDELINES.filter(g=>g.system==='神经系统') },
  { system:'血液系统', icon:'🩸', items:GUIDELINES.filter(g=>g.system==='血液系统') },
  { system:'抗肿瘤', icon:'🎗️', items:GUIDELINES.filter(g=>g.system==='抗肿瘤') },
  { system:'法律法规', icon:'📋', items:LAWS },
  { system:'其他', icon:'📑', items:GUIDELINES.filter(g=>g.system==='其他') },
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
  { id:'crcl', name:'肌酐清除率 CrCl', cat:'肾功' },
  { id:'egfr', name:'eGFR 估算', cat:'肾功' },
  { id:'childpugh', name:'Child-Pugh 评分', cat:'肝功' },
  { id:'warfarin', name:'INR 与华法林调整', cat:'抗凝' },
  { id:'equivalent', name:'等效剂量换算', cat:'剂量换算' },
  { id:'steady', name:'稳态浓度与负荷剂量', cat:'TDM' },
  { id:'infusion', name:'输液速度与泵速', cat:'输液' },
  { id:'dilution', name:'浓度稀释计算', cat:'调配' },
  { id:'skin', name:'皮试液配置', cat:'调配' },
  { id:'grandma', name:'医嘱标准化换算', cat:'调配' },
  { id:'ageformula', name:'儿童年龄公式', cat:'儿科' },
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
- 勾选"记住密码"可永不过期免登录

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
- 勾选"记住密码"可永不过期免登录

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
