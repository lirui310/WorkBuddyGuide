import { defineConfig } from "vitepress";

import { siteSidebar } from "./sidebar";
import { configureMermaidMarkdown } from "./mermaid-markdown";
import { createPageDescription, createSeoHead } from "./seo";

const siteUrl = process.env.VITEPRESS_SITE_URL || "https://workbuddy.cuibo.com";

export default defineConfig({
  lang: "zh-CN",
  title: "重庆璀泊科技 · WorkBuddy 实战蓝皮书",
  titleTemplate: ":title · 重庆璀泊科技",
  description: "重庆璀泊科技有限公司企业级 AI Agent 实战指南：从岗位入门到智能工作系统。",
  outDir: "../dist",
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ["**/source.md"],
  sitemap: {
    hostname: siteUrl,
  },
  transformPageData: (pageData, { siteConfig }) => {
    return {
      description: createPageDescription(siteConfig.srcDir, pageData),
    };
  },
  transformHead: (context) => createSeoHead(siteUrl, context),
  head: [
    ["link", { rel: "icon", type: "image/jpeg", href: "/logo.jpg" }],
    ["meta", { name: "theme-color", content: "#0284c7" }],
    ["meta", { name: "author", content: "重庆璀泊科技有限公司" }],
    [
      "meta",
      {
        name: "keywords",
        content: "重庆璀泊科技有限公司,WorkBuddy,AI Agent,AI工作系统,企业实战,技能培训,智能体",
      },
    ],
  ],
  markdown: {
    config: configureMermaidMarkdown,
    image: {
      lazyLoading: true,
    },
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 2500,
    },
  },
  themeConfig: {
    siteTitle: "璀泊科技 · WorkBuddy 蓝皮书",
    logo: "/logo.jpg",
    nav: [
      { text: "首页", link: "/" },
      { text: "学习路线", link: "/reading-guide" },
      { text: "蓝皮书教程", link: "/bluebook/" },
      { text: "场景速查与模板", link: "/bluebook/附录/" },
      { text: "关于璀泊科技", link: "/about" },
    ],
    sidebar: siteSidebar,
    search: {
      provider: "local",
    },
    outline: {
      level: [2, 3],
      label: "本页目录",
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },
    footer: {
      message:
        '<div class="cb-footer-links"><span class="cb-footer-links-title">璀泊生态矩阵：</span><a href="https://www.cuibokeji.com" target="_blank" rel="noopener noreferrer">璀泊官网</a><span class="cb-footer-sep">·</span><a href="https://geo.cuibokeji.com" target="_blank" rel="noopener noreferrer">璀泊智搜</a><span class="cb-footer-sep">·</span><a href="https://miit.cuibokeji.com" target="_blank" rel="noopener noreferrer">璀泊人工智能证书</a><span class="cb-footer-sep">·</span><a href="https://www.edu.cuibokeji.com" target="_blank" rel="noopener noreferrer">璀泊Ai科学社</a></div><div class="cb-footer-tagline">重庆璀泊科技有限公司 · 企业级 AI 实践与技能赋能平台</div>',
      copyright: "Copyright © 2026 重庆璀泊科技有限公司 All Rights Reserved",
    },
  },
});
