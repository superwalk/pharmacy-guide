# 药学知识指南 — Supabase 迁移计划

## 概述
将现有 PWA 的数据层从 纯前端 + localStorage 迁移到 Supabase。
UI 代码基本不动，只替换数据访问层。

---

## 你需要手动做的（共 3 项）

### 1️⃣ 注册 Supabase 账号并创建项目
- 访问 https://supabase.com → Sign Up → 创建新项目
- 选 **Singapore** 或 **Tokyo** 节点（亚太区，国内延迟最低）
- 项目名称：`pharmacy-guide`
- 数据库密码：自己记住
- 创建完成后，进入项目 → **Project Settings → API**，找到：
  - `Project URL`（类似 `https://xxxxx.supabase.co`）
  - `anon public key`（一串 base64 字符串）
- 把这两个值发给我，我写到配置文件里

### 2️⃣ 在 Supabase SQL Editor 中运行建表语句
- 项目创建后，进入 **SQL Editor** → 点击 **New Query**
- 把我生成的 `01-schema.sql` 全部粘贴进去，点 **Run**
- 这会创建所有表、索引和权限规则

### 3️⃣ 导入数据
- 运行我生成的 `02-import.sql`（同样在 SQL Editor 中执行）
- 这会把所有 424 个 JSON 数据文件的内容导入到数据库

---

## 我来做的（全部自动完成）

| 内容 | 文件 |
|------|------|
| ✅ PostgreSQL Schema（8 张表 + 索引） | `migration/01-schema.sql` |
| ✅ Supabase RLS 权限策略 | 包含在 schema 中 |
| ✅ 数据导出脚本（从 JS 源码导出到 SQL） | 当前对话内执行 |
| ✅ 数据导入 SQL（种子数据） | `migration/02-import.sql` |
| ✅ 数据适配器（SupabaseAdapter.js） | `js/supabase-adapter.js`  |
| ✅ Auth 替换（保留现有 UI，后端换 Supabase Auth） | 修改 `js/auth.js` |
| ✅ 在线/离线双模式 | 适配器中内置 |

---

## 数据库表设计

```sql
drugs          -- 药品（100 条基础 + 自定义）
diseases       -- 疾病（90 条 + 自定义）
guidelines     -- 指南（148 条 + 自定义）
laws           -- 法规（8 条 + 自定义）
health_edu     -- 科普教育（22 条 + 自定义）
med_edu        -- 用药教育（25 条 + 自定义）
infusion_data  -- 输液配伍（33 条 + 自定义）
guide_systems  -- 指南系统分类
disease_categories -- 疾病分类
drug_categories    -- 药品分类
profiles       -- 用户扩展资料（昵称、角色）
notes          -- 用户备注
favorites      -- 用户收藏
edit_logs      -- 编辑日志
```

---

## 数据适配器架构

```
App.js / Admin.js
    ↓  调用统一接口
SupabaseAdapter.js
    ↓  在线时请求 Supabase，离线时 fallback localStorage
Supabase JS SDK
    ↓
PostgreSQL
```

适配器提供 `getDrugs()`, `saveDrug()`, `getUser()`, `saveNote()` 等函数，
保持和现有代码相同的签名，让 UI 层几乎不用改。

---

## 分步执行

按以下顺序执行，每完成一步验证通过后再下一步：

1. ✅ Phase 0: 创建 Schema SQL（我来）
2. ⏳ Phase 1: 你注册 Supabase + 发我密钥
3. ⏳ Phase 2: 运行 SQL 建表
4. ⏳ Phase 3: 导入数据
5. ⏳ Phase 4: 部署适配器
6. ⏳ Phase 5: 测试验证
