#!/usr/bin/env node
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const rootDist = path.resolve(__dirname, "../dist");
const docsDist = path.resolve(__dirname, "../docs/.vitepress/dist");
const distDir = fs.existsSync(rootDist) ? rootDist : docsDist;

const PORT = Number(process.env.PORT || process.argv[2] || 8080);
const HOST = process.env.HOST || "0.0.0.0";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

function resolveFilePath(reqUrl) {
  let decodedPath = "";
  try {
    decodedPath = decodeURIComponent(new URL(reqUrl, "http://localhost").pathname);
  } catch {
    return null;
  }

  // Prevent path traversal
  const safePath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  let fullPath = path.join(distDir, safePath);

  // 1. Direct file
  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
    return fullPath;
  }

  // 2. Directory with index.html
  const indexPath = path.join(fullPath, "index.html");
  if (fs.existsSync(indexPath) && fs.statSync(indexPath).isFile()) {
    return indexPath;
  }

  // 3. Clean URL (.html suffix)
  const htmlPath = `${fullPath}.html`;
  if (fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
    return htmlPath;
  }

  // 4. Fallback 404
  const notFoundPath = path.join(distDir, "404.html");
  if (fs.existsSync(notFoundPath)) {
    return notFoundPath;
  }

  return null;
}

const server = http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { "Content-Type": "text/plain" });
    return res.end("Method Not Allowed");
  }

  const filePath = resolveFilePath(req.url);

  if (!filePath) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("404 Not Found");
  }

  const is404 = filePath.endsWith("404.html") && !req.url.includes("404");
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";
  const stat = fs.statSync(filePath);

  const headers = {
    "Content-Type": contentType,
    "X-Content-Type-Options": "nosniff",
  };

  // Cache static assets with hash
  if (req.url.startsWith("/assets/")) {
    headers["Cache-Control"] = "public, max-age=31536000, immutable";
  } else {
    headers["Cache-Control"] = "no-cache";
  }

  const acceptEncoding = req.headers["accept-encoding"] || "";
  const statusCode = is404 ? 404 : 200;

  if (req.method === "HEAD") {
    headers["Content-Length"] = stat.size;
    res.writeHead(statusCode, headers);
    return res.end();
  }

  // Gzip compressible text/html/css/js
  const shouldCompress = /text|javascript|json|xml/.test(contentType);

  if (shouldCompress && acceptEncoding.includes("gzip")) {
    headers["Content-Encoding"] = "gzip";
    res.writeHead(statusCode, headers);
    const rawStream = fs.createReadStream(filePath);
    const gzip = zlib.createGzip();
    rawStream.pipe(gzip).pipe(res);
  } else {
    headers["Content-Length"] = stat.size;
    res.writeHead(statusCode, headers);
    fs.createReadStream(filePath).pipe(res);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 重庆璀泊科技 · WorkBuddy 实战蓝皮书 服务已成功启动!`);
  console.log(`📡 本地访问地址: http://127.0.0.1:${PORT}`);
  if (HOST === "0.0.0.0") {
    console.log(`🌐 局域网/公网访问: http://<你的服务器IP>:${PORT}`);
  }
  console.log(`📂 站点根目录: ${distDir}`);
  console.log(`💡 按 Ctrl + C 即可停止服务`);
  console.log(`======================================================\n`);
});
