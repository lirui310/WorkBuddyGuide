<p align="center">
  <img src="./assets/logo.jpg" alt="重庆璀泊科技有限公司" width="160">
</p>

<h1 align="center">重庆璀泊科技 · WorkBuddy 实战蓝皮书</h1>

<p align="center"><strong>企业级 AI Agent 实战指南：从单项任务提效，到构建部门智能工作系统</strong></p>

<p align="center">
  <a href="./docs/reading-guide.md">学习路线规划</a> ·
  <a href="./docs/bluebook/index.md">蓝皮书教程全集</a> ·
  <a href="./docs/bluebook/附录/index.md">常用模板与速查</a> ·
  <a href="./docs/about.md">关于璀泊科技</a>
</p>

> 本套《WorkBuddy 实战蓝皮书》是重庆璀泊科技有限公司针对企业级 AI Agent（智能体）与自动化工作系统实践沉淀的核心知识资产。公司内部用于员工技能实训与生产力跃迁；对外可作为智能化协作的样板成果，展示并赋能合作企业。

---

## 蓝皮书知识体系

全书共 28 章及附录，覆盖从软件入门到部门级多智能体协同的全生命周期：

| 模块 | 核心内容 | 学习目标 |
| :--- | :--- | :--- |
| **第一篇 · 使用手册** | 客户端下载安装、界面与工作区、首个任务、Skill 加载、专家团、连接器(飞书/微信)、API与自动化 | 跑通运行环境，掌握单点工具基础 |
| **第二篇 · 实战案例** | 办公三件套 (Word/Excel/PPT)、文件整理、远程控制、资讯提炼、知识库协同、会议分析、投资调研、视频生产 | 攻坚 10+ 类日常高频核心工作场景 |
| **第三篇 · 进阶系统** | 蒸馏封装专属 Skill、多 Agent 系统架构设计、自动化工作流高可靠性与容错 | 将个人成功经验升级为团队系统资产 |
| **第四篇 · 岗位落地** | 研发、财务、市场运营、HR 及管理岗位的定制化工作流与行业落地路线图 | 部门对号入座，实现全员 AI 化落地 |
| **附录 · 生产力工具** | 常用 Prompt 指令模板库、高频场景速查表 | 随查随用的桌面级生产力手册 |

---

## 推荐学习路径

- **新员工 / 初学者**：从 [第一篇·使用手册](./docs/bluebook/第一篇%20使用手册：先把%20WorkBuddy%20用起来/第%201%20章%20初识%20WorkBuddy/index.md) 开始，逐步完成环境搭建与首个任务。
- **业务攻坚 / 即学即用**：直接进入 [第二篇·实战案例](./docs/bluebook/第二篇%20案例篇：从一项任务到一支%20AI%20团队/index.md)，带着手头的真实问题跑通交付物。
- **部门负责人 / 架构搭建**：精读 [第三篇](./docs/bluebook/第三篇%20进阶篇：把案例变成自己的工作系统/index.md) 与 [第四篇](./docs/bluebook/第四篇%20岗位与行业落地/index.md)，设计本部门的数字员工网络与安全规范。

完整规划详见 [学习与阅读路线指南](./docs/reading-guide.md)。

---

## 本地阅读与开发

本项目基于 VitePress 搭建，环境要求 Node.js >= 20 < 25（推荐 Node.js 22）。

```bash
# 安装依赖
npm install

# 本地启动开发服务器
npm run dev

# 启动本地单元测试
npm run test

# 生产环境静态打包构建
npm run build

# 本地预览构建产物
npm run preview
```

---

## 服务器部署说明

运行 `npm run build` 后，系统将在 `docs/.vitepress/dist` 目录下生成完整的纯静态 Web 产物，可直接部署于任何静态 Web 服务器或容器中。

### 1. Nginx 部署参考

由于开启了 VitePress `cleanUrls: true`，请在 Nginx 中配置 `try_files`：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/cuibo-workbuddy/dist;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 2. Docker 容器化部署

在项目根目录下构建并运行纯静态 Nginx 镜像：

```bash
docker build -t cuibo-workbuddy .
docker run -d -p 8080:80 --name cuibo-workbuddy cuibo-workbuddy
```

---

## 目录结构

```text
WorkBuddyGuide
├─ assets/                         # 公司 Logo 及核心素材
├─ docs/
│  ├─ .vitepress/                  # VitePress 站点配置与主题
│  ├─ bluebook/                    # 28 章蓝皮书核心教材正文
│  │  ├─ 第一篇 使用手册：先把 WorkBuddy 用起来/
│  │  ├─ 第二篇 案例篇：从一项任务到一支 AI 团队/
│  │  ├─ 第三篇 进阶篇：把案例变成自己的工作系统/
│  │  ├─ 第四篇 岗位与行业落地/
│  │  └─ 附录/
│  ├─ public/                      # 站点静态资源 (Logo、图标等)
│  ├─ about.md                     # 关于重庆璀泊科技有限公司
│  ├─ index.md                     # 门户首页
│  └─ reading-guide.md             # 学习与阅读指南
├─ scripts/                        # 辅助同步脚本
├─ package.json                    # 工程依赖与构建脚本
└─ README.md                       # 项目说明
```

---

## 知识产权与版权声明

© 2026 重庆璀泊科技有限公司 All Rights Reserved.  
本知识库内容由重庆璀泊科技有限公司整理维护，用于内部赋能与合作交流。
