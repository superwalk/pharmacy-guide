-- ═══════════════════════════════════════════
-- 跨浏览器数据同步：messages + pending_edits + app_settings
-- ═══════════════════════════════════════════

-- 1. messages（站内信）
create table if not exists messages (
  id text primary key,
  sender text not null,
  recipient text not null,
  content text not null,
  msg_type text default 'admin',
  source_page text default '',
  created_at timestamptz default now()
);
alter table messages enable row level security;
drop policy if exists "messages_all" on messages;
create policy "messages_all" on messages for all using (true);

-- 2. pending_edits（待审核编辑）
create table if not exists pending_edits (
  id text,
  table_name text not null,
  edit_data text,
  content_type text,
  item_name text,
  editor_name text,
  submit_time text,
  ts bigint,
  created_at timestamptz default now()
);
alter table pending_edits enable row level security;
drop policy if exists "pending_edits_all" on pending_edits;
create policy "pending_edits_all" on pending_edits for all using (true);

-- 3. app_settings（更新日志 + 使用帮助）
create table if not exists app_settings (
  key text primary key,
  value text,
  updated_at timestamptz default now()
);
alter table app_settings enable row level security;
drop policy if exists "app_settings_all" on app_settings;
create policy "app_settings_all" on app_settings for all using (true);

-- 4. edit_logs（编辑记录）
create table if not exists edit_logs (
  id text primary key,
  time text,
  "user" text,
  type text,
  name text,
  action text,
  item_id text default '',
  created_at timestamptz default now()
);
alter table edit_logs enable row level security;
drop policy if exists "edit_logs_all" on edit_logs;
create policy "edit_logs_all" on edit_logs for all using (true);

-- 5. login_stats（登录统计）
create table if not exists login_stats (
  id text primary key,
  username text not null,
  login_date text not null,
  created_at timestamptz default now()
);
alter table login_stats enable row level security;
drop policy if exists "login_stats_all" on login_stats;
create policy "login_stats_all" on login_stats for all using (true);

-- 6. view_stats（浏览统计）
create table if not exists view_stats (
  id text primary key,
  content_id text not null,
  content_type text not null,
  content_name text,
  view_count integer default 1
);
alter table view_stats enable row level security;
drop policy if exists "view_stats_all" on view_stats;
create policy "view_stats_all" on view_stats for all using (true);

-- 7. 确保 anon 角色有权限
grant all on public.messages to anon;
grant all on public.pending_edits to anon;
grant all on public.app_settings to anon;
grant all on public.edit_logs to anon;
grant all on public.login_stats to anon;
grant all on public.view_stats to anon;

-- 8. 索引
create index if not exists idx_messages_recipient on messages(recipient);
create index if not exists idx_pending_edits_editor on pending_edits(editor_name);
create index if not exists idx_edit_logs_user on edit_logs("user");
create index if not exists idx_login_stats_date on login_stats(login_date);
create index if not exists idx_view_stats_count on view_stats(view_count desc);
