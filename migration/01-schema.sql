-- ═══════════════════════════════════════════
-- 药学知识指南 — Supabase Schema v1
-- ═══════════════════════════════════════════

-- 0. 扩展
create extension if not exists "pgcrypto";

-- 1. 药品分类
create table drug_categories (
  id text primary key,
  name text not null,
  subs text[] not null default '{}',
  sort_order integer default 0
);

-- 2. 疾病分类
create table disease_categories (
  id text primary key,
  name text not null,
  subs text[] not null default '{}',
  sort_order integer default 0
);

-- 3. 指南系统分类
create table guide_systems (
  id serial primary key,
  system text not null unique,
  icon text not null default '📋',
  sort_order integer default 0
);

-- 4. 药品
create table drugs (
  id text primary key,
  name text not null,
  py text,
  en text,
  category text,
  subcategory text,
  type text default '处方药',
  tag text,
  indications text,
  contraindications text,
  adverse text,
  dosage text,
  storage text,
  interactions text,
  label text,
  is_custom boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index idx_drugs_name on drugs using gin(to_tsvector('simple', coalesce(name,'')));
create index idx_drugs_category on drugs(category);

-- 5. 疾病
create table diseases (
  id text primary key,
  name text not null,
  cat text,
  py text,
  desc text,
  symptoms text,
  diagnosis text,
  treatment text,
  is_custom boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index idx_diseases_name on diseases using gin(to_tsvector('simple', coalesce(name,'')));

-- 6. 指南
create table guidelines (
  id text primary key,
  title text not null,
  system text,
  year text,
  py text,
  content text,
  source_url text,
  is_custom boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index idx_guidelines_title on guidelines using gin(to_tsvector('simple', coalesce(title,'')));

-- 7. 法规 (有全文内容，无 source_url)
create table laws (
  id text primary key,
  title text not null,
  year text,
  content text,
  py text,
  is_custom boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 8. 科普教育
create table health_edu (
  id text primary key,
  cat text,
  title text not null,
  py text,
  content text,
  is_custom boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 9. 用药教育
create table med_edu (
  id text primary key,
  cat text,
  drug text not null,
  py text,
  key text not null,
  detail text,
  is_custom boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 10. 输液配伍
create table infusion_data (
  id text primary key,
  cat text,
  drug text not null,
  py text,
  vehicle text,
  conc text,
  speed text,
  note text,
  interact text,
  detail text,
  is_custom boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 11. 用户资料（与 Supabase Auth 关联）
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  nickname text,
  role text not null default 'user' check (role in ('user', 'editor', 'admin')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 12. 用户备注
create table notes (
  id uuid default gen_random_uuid() primary key,
  user_id uuid not null references profiles(id) on delete cascade,
  item_id text not null,
  item_type text not null,
  content text not null default '',
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(user_id, item_id)
);
create index idx_notes_user on notes(user_id);

-- 13. 用户收藏
create table favorites (
  id uuid default gen_random_uuid() primary key,
  user_id uuid not null references profiles(id) on delete cascade,
  item_id text not null,
  item_type text not null,
  created_at timestamptz default now(),
  unique(user_id, item_id)
);
create index idx_favs_user on favorites(user_id);

-- 14. 近期浏览
create table recent_views (
  id uuid default gen_random_uuid() primary key,
  user_id uuid not null references profiles(id) on delete cascade,
  item_id text not null,
  item_type text not null,
  viewed_at timestamptz default now()
);
create index idx_recent_user on recent_views(user_id);

-- 15. 编辑日志
create table edit_logs (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id),
  username text,
  type text not null,
  name text not null,
  action text not null,
  created_at timestamptz default now()
);

-- ═══ RLS 策略 ═══

-- 数据表：所有人可读，仅 editor/admin 可写
alter table drugs enable row level security;
alter table diseases enable row level security;
alter table guidelines enable row level security;
alter table laws enable row level security;
alter table health_edu enable row level security;
alter table med_edu enable row level security;
alter table infusion_data enable row level security;
alter table drug_categories enable row level security;
alter table disease_categories enable row level security;
alter table guide_systems enable row level security;

create policy "drugs_read_all" on drugs for select using (true);
create policy "drugs_write_editor" on drugs for insert with check (
  exists(select 1 from profiles where id = auth.uid() and role in ('editor','admin'))
);
create policy "drugs_update_editor" on drugs for update using (
  exists(select 1 from profiles where id = auth.uid() and role in ('editor','admin'))
);

-- 对所有数据表应用相同策略（简化写法用 data_read_all + data_write_editor）
do $$
declare
  tables text[] := array['diseases','guidelines','laws','health_edu','med_edu','infusion_data','drug_categories','disease_categories','guide_systems'];
  t text;
begin
  foreach t in array tables
  loop
    execute format('create policy %I on %I for select using (true)', t||'_read_all', t);
    execute format('create policy %I on %I for insert with check (exists(select 1 from profiles where id = auth.uid() and role in (''editor'',''admin'')))', t||'_write_editor', t);
    execute format('create policy %I on %I for update using (exists(select 1 from profiles where id = auth.uid() and role in (''editor'',''admin'')))', t||'_update_editor', t);
  end loop;
end;
$$;

-- profiles：本人可读写自己的，admin 可读写所有
alter table profiles enable row level security;
create policy "profiles_read_self" on profiles for select using (auth.uid() = id);
create policy "profiles_write_admin" on profiles for insert with check (
  exists(select 1 from profiles where id = auth.uid() and role = 'admin')
);
create policy "profiles_update_self" on profiles for update using (
  auth.uid() = id or exists(select 1 from profiles where id = auth.uid() and role = 'admin')
);

-- notes：本人可读写自己的
alter table notes enable row level security;
create policy "notes_self" on notes for all using (auth.uid() = user_id);

-- favorites：本人可读写自己的
alter table favorites enable row level security;
create policy "favs_self" on favorites for all using (auth.uid() = user_id);

-- recent_views：本人可读写自己的
alter table recent_views enable row level security;
create policy "recent_self" on recent_views for all using (auth.uid() = user_id);

-- edit_logs：editor/admin 可读写
alter table edit_logs enable row level security;
create policy "logs_read_editor" on edit_logs for select using (
  exists(select 1 from profiles where id = auth.uid() and role in ('editor','admin'))
);
create policy "logs_write_editor" on edit_logs for insert with check (
  exists(select 1 from profiles where id = auth.uid() and role in ('editor','admin'))
);

-- ═══ 默认分类种子数据 ═══

insert into drug_categories(id,name,subs,sort_order) values
  ('antimicrobial','抗微生物药',array['抗生素','抗病毒药','抗真菌药'],1),
  ('oncology','抗肿瘤药',array['化疗药','靶向药','免疫治疗药','辅助用药'],2),
  ('cardiovascular','心血管系统用药',array['降压药','调脂药','抗心律失常药','抗心衰药'],3),
  ('digestive','消化系统用药',array['抗酸药','胃黏膜保护剂','止吐药','止泻药'],4),
  ('nervous','神经系统用药',array['镇静催眠药','抗抑郁药','抗帕金森药','抗癫痫药'],5),
  ('respiratory','呼吸系统用药',array['平喘药','镇咳药','祛痰药','抗组胺药','COPD用药'],6),
  ('endocrine','内分泌系统用药',array['降糖药','甲状腺用药','激素类'],7),
  ('analgesic','解热镇痛药',array['非甾体抗炎药','阿片类','抗痛风药'],8),
  ('dermatology','皮肤科用药',array['抗过敏药','激素类外用药','抗真菌外用药','维A酸类'],9),
  ('urology','男科/泌尿科用药',array['前列腺用药','勃起功能障碍药','利尿剂'],10),
  ('gynecology','妇产科用药',array['激素类','抗感染药','子宫收缩药','避孕药'],11),
  ('ent','五官科用药',array['眼科用药','耳鼻喉用药'],12),
  ('nutrition','营养支持药',array['维生素类','电解质','肠内营养','肠外营养'],13),
  ('hematology','血液系统用药',array['抗凝药','止血药','抗贫血药'],14);

insert into disease_categories(id,name,subs,sort_order) values
  ('resp_disease','呼吸系统疾病',array['社区获得性肺炎','COPD','支气管哮喘','大叶性肺炎','肺栓塞','肺结核','支气管扩张症','间质性肺病'],1),
  ('cardio_disease','心血管疾病',array['高血压','心力衰竭','冠心病','心房颤动','心肌梗死','高脂血症','稳定型心绞痛','风湿性心瓣膜病','感染性心内膜炎'],2),
  ('digest_disease','消化系统疾病',array['胃溃疡','反流性食管炎','胰腺炎','炎症性肠病','胃食管反流病','功能性消化不良','胆囊炎','胆石症'],3),
  ('endo_disease','内分泌疾病',array['2型糖尿病','痛风','甲亢','甲减','高尿酸血症','骨质疏松','甲状腺功能亢进','库欣综合征','代谢综合征'],4),
  ('nerv_disease','神经系统疾病',array['癫痫','脑卒中','帕金森病','偏头痛','阿尔茨海默病','脑出血','重症肌无力'],5),
  ('renal_disease','泌尿系统疾病',array['尿路感染','慢性肾病','肾结石','急性肾损伤','肾病综合征','前列腺增生'],6),
  ('obgyn_disease','妇产科疾病',array['妊娠期高血压','月经失调','多囊卵巢综合征','子宫内膜异位症','宫颈癌'],7),
  ('ent_disease','五官科疾病',array['青光眼','中耳炎'],8),
  ('derm_disease','皮肤疾病',array['湿疹','银屑病','带状疱疹后遗神经痛','真菌性皮肤病'],9),
  ('onco_disease','肿瘤疾病',array['胃癌','结直肠癌','乳腺癌','肺癌','肝癌','前列腺癌'],10),
  ('hem_disease','血液系统疾病',array['缺铁性贫血','再生障碍性贫血','白血病'],11),
  ('male_disease','男科疾病',array['勃起功能障碍','男性不育症'],12),
  ('psych_disease','精神心理疾病',array['抑郁症'],13),
  ('rheum_disease','风湿免疫疾病',array['类风湿关节炎','系统性红斑狼疮','强直性脊柱炎','干燥综合征'],14),
  ('infec_disease','感染性疾病',array['流行性感冒','带状疱疹','泌尿系感染','感染性腹泻'],15);

insert into guide_systems(system,icon,sort_order) values
  ('心血管系统','❤️',1),('呼吸系统','🫁',2),('消化系统',null,3),('神经','🧠',4),
  ('肿瘤','🎗️',5),('内分泌','🩸',6),('儿科','👶',7),('妇产科','🤰',8),
  ('骨科','🦴',9),('感染','🦠',10),('眼科','👁️',11),('药学','💊',12),
  ('腔镜机器人','🤖',13),('血液','🩸',14),('其他','📑',15);
