-- ═══ 修复：删除 profiles 对 auth.users 的外键依赖 ═══
-- 让 profiles 表独立存在，老用户不需要在 auth.users 中有记录

-- 1. 先删除外键约束
alter table profiles drop constraint if exists profiles_id_fkey;

-- 2. 现在可以重新运行 04-user-migration.sql 的 INSERT 部分了
-- 或者直接运行下面的插入（如果表结构已改但数据没插入成功）

-- 3. 重新执行插入（注意：如果之前已插入部分数据会冲突，用 on conflict 忽略）
-- 你需要重新运行 04-user-migration.sql 中的 INSERT 语句
