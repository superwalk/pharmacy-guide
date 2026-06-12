-- ═══════════════════════════════════════════
-- 密码哈希 + 收藏/备注跨浏览器同步
-- ═══════════════════════════════════════════

-- 1. profiles 表添加 pw_hashed 列
alter table profiles add column if not exists pw_hashed boolean default false;

-- 2. 创建 user_sync_data 表（解决收藏/备注列名不匹配问题）
-- 前端 trySync 发送 {username, content_id, list|note|data}
-- 原表 favorites/notes 用 user_id (uuid)，字段对不上
-- 改用用户名（text）为主键，简单可靠
create table if not exists user_sync_data (
  username text not null,
  data_type text not null,    -- 'favorites' 或 'notes'
  content_id text not null,
  data_value text,            -- 收藏列表 / 备注内容 的 JSON
  updated_at timestamptz default now(),
  unique(username, data_type, content_id)
);
alter table user_sync_data enable row level security;
drop policy if exists "user_sync_data_all" on user_sync_data;
create policy "user_sync_data_all" on user_sync_data for all using (true);

grant all on public.user_sync_data to anon;

-- 3. 索引
create index if not exists idx_user_sync_data_username on user_sync_data(username);
create index if not exists idx_user_sync_data_type on user_sync_data(data_type);
