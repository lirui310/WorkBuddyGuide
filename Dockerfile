# ---- 构建阶段 ----
FROM node:22-alpine AS builder

WORKDIR /app

# 安装依赖
COPY package*.json ./
RUN npm ci

# 复制源码并构建
COPY . .
RUN npm run build

# ---- 运行阶段 (轻量 Nginx) ----
FROM nginx:alpine

# 复制 VitePress 构建出的静态文件到 Nginx 默认目录
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

# 注入支持 VitePress cleanUrls 路由的 Nginx 配置
RUN echo 'server { \
    listen 80; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri.html $uri/ /index.html; \
    } \
    location /assets/ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
