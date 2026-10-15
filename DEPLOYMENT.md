# 极简部署指南 · 重庆璀泊科技 WorkBuddy 蓝皮书

本项目为**100% 纯静态现代化知识库（基于 VitePress）**：
- **完全不依赖任何数据库**（如 MySQL、Redis、SQLite、MongoDB 等全部不需要）；
- **完全不依赖外部接口**；
- **编译后即为一套标准的静态文件（HTML + CSS + JS + 图片）**，放上去就能直接跑。

---

## 方式一：一键打包为 zip，传到服务器解压即可（最省心、零门槛）

### 1. 本地执行一键打包
```bash
npm run bundle
```
执行后会在根目录生成一个 **`dist.zip`** 压缩包。

### 2. 上传到服务器并解压
无论你的服务器使用的是 **宝塔面板**、**1Panel**、**Nginx**、**Apache** 还是 **Caddy**：
1. 新建一个静态网站。
2. 将 `dist.zip` 上传到网站根目录并解压（把 `dist` 文件夹内的所有内容放在网站根目录下）。
3. 如果使用 Nginx，在网站配置中加入这一行（支持无后缀路由）：
   ```nginx
   location / {
       try_files $uri $uri.html $uri/ /index.html;
   }
   ```
4. 立即生效，打开浏览器直接访问！

---

## 方式二：使用项目内置的高性能 HTTP 静态服务（无需安装 Nginx）

项目中已经内置了一个**纯原生、零外部依赖的生产级 Node.js 静态服务脚本**（位于 `scripts/serve.mjs`），支持自动 Gzip 压缩与路由解析。

如果你的服务器上有 Node.js 环境：
```bash
# 1. 编译
npm run build

# 2. 直接启动（默认 8080 端口）
npm run serve

# 也可以自定义端口启动，例如 80 端口：
node scripts/serve.mjs 80
```

如果需要后台长期运行，推荐使用 **PM2**：
```bash
# 安装 pm2（若未安装）
npm install -g pm2

# 后台启动服务
pm2 start scripts/serve.mjs --name "cuibo-workbuddy" -- 8080

# 开机自启
pm2 save
pm2 startup
```

---

## 方式三：Docker 容器化部署（一行命令跑起来）

根目录已提供优化过的 [Dockerfile](file:///Users/lirui/Desktop/code/WorkBuddyGuide/Dockerfile)，不需要安装任何环境：

```bash
# 1. 构建镜像
docker build -t cuibo-workbuddy .

# 2. 启动容器（映射到 8080 端口，可按需修改）
docker run -d -p 8080:80 --name cuibo-workbuddy --restart always cuibo-workbuddy
```

访问 `http://<服务器IP>:8080` 即可直接使用。

---

## 架构特性与安全说明

1. **绝对离线可用**：所有字体、像素图标、Mermaid 渲染引擎、图片灯箱均打包在产物内部，完全不依赖公网第三方 CDN。
2. **极高承载能力**：纯静态资源由 Web 服务器直接发送（或经由 Gzip 传输），1 核 1G 内存的入门级服务器也能轻松支撑企业全员及外部客户的高并发访问。
3. **数据隐私合规**：不采集任何用户设备信息，不打点任何外部平台，完全符合企业内网数据安全规范。
