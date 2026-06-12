-- ═══ 修复脚本：重命名保留关键字列 ═══
-- 如果已经运行过 01-schema.sql，运行这个脚本修复列名
-- 如果还没运行 schema，请直接使用修改后的 01-schema.sql

-- 修复 diseases 表：desc → description
alter table diseases rename column "desc" to description;

-- 修复 med_edu 表：key → key_point
alter table med_edu rename column "key" to key_point;
