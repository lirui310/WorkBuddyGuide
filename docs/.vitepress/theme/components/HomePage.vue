<script setup lang="ts">
// Modern Corporate Knowledge Portal Homepage for 重庆璀泊科技有限公司
</script>

<template>
  <main class="cb-home">
    <!-- Ambient Glow Background -->
    <div class="cb-ambient-glow" aria-hidden="true">
      <div class="cb-glow-circle cb-glow-1"></div>
      <div class="cb-glow-circle cb-glow-2"></div>
      <div class="cb-glow-circle cb-glow-3"></div>
    </div>

    <!-- Hero Section -->
    <section class="cb-hero" aria-labelledby="cb-hero-title">
      <div class="cb-hero__content">
        <div class="cb-badge">
          <span class="cb-badge__dot"></span>
          <span>重庆璀泊科技有限公司 · 企业级 AI 知识资产</span>
        </div>

        <h1 id="cb-hero-title" class="cb-hero__title">
          WorkBuddy 实战蓝皮书
          <span class="cb-hero__gradient-text">从单项提效到智能体团队</span>
        </h1>

        <p class="cb-hero__desc">
          聚焦企业真实业务落地。全书共 28 章，覆盖办公三件套、文件管理、会议提炼、知识库协同、专属 Skill 封装与多 Agent 架构，帮助企业全员构建高可靠的 AI 数字员工工作系统。
        </p>

        <div class="cb-hero__actions">
          <a class="cb-btn cb-btn--primary" href="/bluebook/">
            <span>立即开始学习</span>
            <svg class="cb-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
          <a class="cb-btn cb-btn--secondary" href="/reading-guide">
            <svg class="cb-icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            <span>学习路线规划</span>
          </a>
          <a class="cb-btn cb-btn--ghost" href="/about">关于璀泊科技 &rarr;</a>
        </div>

        <div class="cb-hero__quick-meta">
          <span><b>28</b> 个系统章节</span>
          <span class="cb-sep">&bull;</span>
          <span><b>4</b> 大落地模块</span>
          <span class="cb-sep">&bull;</span>
          <span><b>100%</b> 业务实战导向</span>
          <span class="cb-sep">&bull;</span>
          <span>全员离线可用</span>
        </div>
      </div>

      <div class="cb-hero__visual">
        <div class="cb-hub-card">
          <div class="cb-hub-card__header">
            <div class="cb-hub-card__brand">
              <img src="/logo.jpg" alt="重庆璀泊科技有限公司 Logo" class="cb-hub-card__logo" />
              <div class="cb-hub-card__brand-text">
                <strong>重庆璀泊科技有限公司</strong>
                <small>CHONGQING CUIBO TECHNOLOGY</small>
              </div>
            </div>
            <span class="cb-status-pill">
              <span class="cb-status-pill__dot"></span> 企业知识库
            </span>
          </div>

          <div class="cb-hub-card__body">
            <div class="cb-hub-feature">
              <div class="cb-hub-feature__icon cb-hub-feature__icon--blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div class="cb-hub-feature__info">
                <span>技能即战力</span>
                <p>从日常 Office 到代码与数据，上手即用</p>
              </div>
            </div>

            <div class="cb-hub-feature">
              <div class="cb-hub-feature__icon cb-hub-feature__icon--green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div class="cb-hub-feature__info">
                <span>资产沉淀池</span>
                <p>将高阶经验封装为部门共享的 Skill</p>
              </div>
            </div>

            <div class="cb-hub-feature">
              <div class="cb-hub-feature__icon cb-hub-feature__icon--orange">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div class="cb-hub-feature__info">
                <span>多智能体协作</span>
                <p>构建可自我纠错、多工种协同的 AI 团队</p>
              </div>
            </div>
          </div>

          <div class="cb-hub-card__footer">
            <span class="cb-hub-tag">对内人才实训</span>
            <span class="cb-hub-tag">对外合作示范</span>
            <span class="cb-hub-tag">纯静态零依赖</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Grid Section -->
    <section class="cb-section cb-values" aria-labelledby="cb-values-title">
      <div class="cb-section__header">
        <span class="cb-section__tag">CORE VALUES</span>
        <h2 id="cb-values-title">企业级 AI 落地的四大支柱</h2>
        <p>打破“只问答不干活”的玩具局限，将 AI 深度嵌入业务流程与生产系统</p>
      </div>

      <div class="cb-value-grid">
        <div class="cb-value-card">
          <div class="cb-value-card__icon cb-value-card__icon--blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3>真实任务驱动</h3>
          <p>不讲虚幻算法，以真实交付为标准。带你跑通 Word 格式化、Excel 自动化报表、PPT 提炼及远程运维。</p>
        </div>

        <div class="cb-value-card">
          <div class="cb-value-card__icon cb-value-card__icon--green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3>部门全员覆盖</h3>
          <p>研发、财务、市场、运营、HR 分岗定制路线。让每个职能部门都能对号入座，拥有专属的智能化工作流。</p>
        </div>

        <div class="cb-value-card">
          <div class="cb-value-card__icon cb-value-card__icon--orange">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
          </div>
          <h3>经验资产固化</h3>
          <p>员工优秀经验不再流失。通过知识蒸馏技术，将专家经验与操作步骤打包封装为团队可复用的专属 Skill 库。</p>
        </div>

        <div class="cb-value-card">
          <div class="cb-value-card__icon cb-value-card__icon--purple">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h3>开放生态赋能</h3>
          <p>对外作为璀泊科技数字化转型的实战成果样板，全面赋能生态合作企业，携手探索 AI 时代的效率高地。</p>
        </div>
      </div>
    </section>

    <!-- Learning Paths Section -->
    <section class="cb-section cb-pathways" aria-labelledby="cb-pathways-title">
      <div class="cb-section__header">
        <span class="cb-section__tag">STRUCTURED ROADMAP</span>
        <h2 id="cb-pathways-title">四段递进式学习路径</h2>
        <p>由浅入深，从个人单点工具使用，稳步迈向团队级多智能体协同系统</p>
      </div>

      <div class="cb-path-grid">
        <a class="cb-path-card" href="/bluebook/第一篇%20使用手册：先把%20WorkBuddy%20用起来/">
          <div class="cb-path-card__badge">PART 01</div>
          <div class="cb-path-card__header">
            <h3>使用手册：先把 WorkBuddy 用起来</h3>
            <span class="cb-path-card__ch">第 01 — 11 章</span>
          </div>
          <p>环境安装、主界面认识、首个任务交付、加载实用 Skill、接入飞书与微信连接器、API 自动化起步。</p>
          <div class="cb-path-card__tags">
            <span>零基础新手</span>
            <span>工具安装</span>
            <span>环境打通</span>
          </div>
          <span class="cb-path-card__link">阅读本篇 &rarr;</span>
        </a>

        <a class="cb-path-card" href="/bluebook/第二篇%20案例篇：从一项任务到一支%20AI%20团队/">
          <div class="cb-path-card__badge">PART 02</div>
          <div class="cb-path-card__header">
            <h3>实战案例：从单项任务到 AI 团队</h3>
            <span class="cb-path-card__ch">第 12 — 22 章</span>
          </div>
          <p>办公三件套 (Word/Excel/PPT)、桌面整理、电脑远程控制、资讯提炼、知识库协同、会议纪要、投资分析与视频生产。</p>
          <div class="cb-path-card__tags">
            <span>11 真实案例</span>
            <span>业务痛点</span>
            <span>立竿见影</span>
          </div>
          <span class="cb-path-card__link">阅读本篇 &rarr;</span>
        </a>

        <a class="cb-path-card" href="/bluebook/第三篇%20进阶篇：把案例变成自己的工作系统/">
          <div class="cb-path-card__badge">PART 03</div>
          <div class="cb-path-card__header">
            <h3>进阶篇：把经验沉淀为工作系统</h3>
            <span class="cb-path-card__ch">第 23 — 26 章</span>
          </div>
          <p>将业务书籍与实操视频蒸馏为可执行 Skill、多 Agent 系统协同设计、自动化工作流的可靠性与容错体系。</p>
          <div class="cb-path-card__tags">
            <span>Skill 封装</span>
            <span>多智能体</span>
            <span>高可靠性</span>
          </div>
          <span class="cb-path-card__link">阅读本篇 &rarr;</span>
        </a>

        <a class="cb-path-card" href="/bluebook/第四篇%20岗位与行业落地/">
          <div class="cb-path-card__badge">PART 04</div>
          <div class="cb-path-card__header">
            <h3>岗位与行业：全员协同落地</h3>
            <span class="cb-path-card__ch">第 27 — 28 章</span>
          </div>
          <p>不同岗位的进阶路线图，从通用能力迁移到行业定制工作流，组织级推行与安全权限规范。</p>
          <div class="cb-path-card__tags">
            <span>岗位定制</span>
            <span>组织落地</span>
            <span>行业工作流</span>
          </div>
          <span class="cb-path-card__link">阅读本篇 &rarr;</span>
        </a>
      </div>
    </section>

    <!-- Quick Scenarios Matrix -->
    <section class="cb-section cb-scenarios" aria-labelledby="cb-scenarios-title">
      <div class="cb-section__header">
        <span class="cb-section__tag">QUICK ACCESS</span>
        <h2 id="cb-scenarios-title">高频业务场景极速直达</h2>
        <p>带着你手头的实际问题进入，无需通读全书，立刻跑通一个能验收的高质量交付物</p>
      </div>

      <div class="cb-scenario-grid">
        <a class="cb-scenario-card" href="/bluebook/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2011%20章%20办公三件套：Word、Excel、PPT/">
          <div class="cb-scenario-card__icon cb-scenario-card__icon--blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div class="cb-scenario-card__text">
            <strong>办公文档排版与处理</strong>
            <span>Word 样式自动化 · Excel 数据清洗 · PPT 结构生成</span>
          </div>
        </a>

        <a class="cb-scenario-card" href="/bluebook/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2012%20章%20从整理桌面文件这些小事做起/">
          <div class="cb-scenario-card__icon cb-scenario-card__icon--green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </div>
          <div class="cb-scenario-card__text">
            <strong>本地文件与远程协同</strong>
            <span>桌面批量分类 · 模糊意图查找 · 远程控制电脑执行</span>
          </div>
        </a>

        <a class="cb-scenario-card" href="/bluebook/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2015%20章%20资讯整合：把信息流变成每日通知/">
          <div class="cb-scenario-card__icon cb-scenario-card__icon--amber">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <div class="cb-scenario-card__text">
            <strong>行业资讯与企业知识库</strong>
            <span>多源信息流聚合 · 每日晨报推送 · 微信/ima 知识复用</span>
          </div>
        </a>

        <a class="cb-scenario-card" href="/bluebook/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2018%20章%20把投资分析变成你的日常/">
          <div class="cb-scenario-card__icon cb-scenario-card__icon--purple">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <div class="cb-scenario-card__text">
            <strong>专业研报与商业分析</strong>
            <span>财报智能提炼 · 行业竞品追踪 · 商业数据多维诊断</span>
          </div>
        </a>

        <a class="cb-scenario-card" href="/bluebook/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2019%20章%20一句话召唤%20AI%20视频团队/">
          <div class="cb-scenario-card__icon cb-scenario-card__icon--rose">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="cb-scenario-card__text">
            <strong>多模态与内容增长矩阵</strong>
            <span>视频分镜脚本生成 · 自媒体排版发布 · GEO 引擎优化</span>
          </div>
        </a>

        <a class="cb-scenario-card" href="/bluebook/第三篇%20进阶篇：把案例变成自己的工作系统/第%2024%20章%20如何进行多%20Agent%20系统设计/">
          <div class="cb-scenario-card__icon cb-scenario-card__icon--cyan">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <div class="cb-scenario-card__text">
            <strong>系统级智能体架构设计</strong>
            <span>将视频与书籍蒸馏为 Skill · 多 Agent 拓扑编排 · 容错与回退</span>
          </div>
        </a>
      </div>
    </section>

    <!-- Enterprise Evolution Framework -->
    <section class="cb-section cb-framework" aria-labelledby="cb-framework-title">
      <div class="cb-section__header">
        <span class="cb-section__tag">AI EVOLUTION</span>
        <h2 id="cb-framework-title">从单次成功，到企业级工作系统</h2>
        <p>璀泊科技倡导的不仅是个人的工具效率，更是把每一次有价值的交付沉淀为团队标准资产</p>
      </div>

      <div class="cb-steps-flow">
        <div class="cb-step">
          <div class="cb-step__number">01</div>
          <div class="cb-step__title">TASK 业务攻坚</div>
          <p>以真实业务问题为起点，完成一次可验收的高质量任务交付</p>
        </div>

        <div class="cb-step-arrow">&rarr;</div>

        <div class="cb-step">
          <div class="cb-step__number">02</div>
          <div class="cb-step__title">CASE 案例复盘</div>
          <p>整理输入条件、执行提示词、权限边界与安全校验，形成标准化 Case</p>
        </div>

        <div class="cb-step-arrow">&rarr;</div>

        <div class="cb-step">
          <div class="cb-step__number">03</div>
          <div class="cb-step__title">SKILL 资产沉淀</div>
          <p>将重复出现的流程提炼封装为团队可执行的 Skill 与自动化脚本</p>
        </div>

        <div class="cb-step-arrow">&rarr;</div>

        <div class="cb-step">
          <div class="cb-step__number">04</div>
          <div class="cb-step__title">AI TEAM 智能协同</div>
          <p>组合多个专业 Skill，搭建各司其职、互相校对的企业级数字员工团队</p>
        </div>
      </div>
    </section>

    <!-- Bottom CTA Banner -->
    <section class="cb-bottom-cta">
      <div class="cb-bottom-cta__inner">
        <h2>立足璀泊科技，让 AI 真正转化为企业新质生产力</h2>
        <p>本蓝皮书面向公司全员开放学习，并作为璀泊科技对外赋能合作企业的智能化实践范本。</p>
        <div class="cb-bottom-cta__actions">
          <a class="cb-btn cb-btn--primary" href="/bluebook/附录/附录%20A%20常用指令模板/">查阅常用指令模板</a>
          <a class="cb-btn cb-btn--light" href="/bluebook/附录/附录%20B%20场景速查表/">业务场景速查表</a>
          <a class="cb-btn cb-btn--ghost-light" href="/about">了解璀泊科技</a>
        </div>

        <div class="cb-bottom-ecosystem">
          <span class="cb-bottom-ecosystem__label">璀泊科技生态矩阵</span>
          <div class="cb-bottom-ecosystem__links">
            <a href="https://www.cuibokeji.com" target="_blank" rel="noopener noreferrer" class="cb-eco-link">
              <span>璀泊官网</span>
              <svg class="cb-eco-link__icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
              </svg>
            </a>
            <a href="https://geo.cuibokeji.com" target="_blank" rel="noopener noreferrer" class="cb-eco-link">
              <span>璀泊智搜</span>
              <svg class="cb-eco-link__icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
              </svg>
            </a>
            <a href="https://miit.cuibokeji.com" target="_blank" rel="noopener noreferrer" class="cb-eco-link">
              <span>璀泊人工智能证书</span>
              <svg class="cb-eco-link__icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
              </svg>
            </a>
            <a href="https://www.edu.cuibokeji.com" target="_blank" rel="noopener noreferrer" class="cb-eco-link">
              <span>璀泊Ai科学社</span>
              <svg class="cb-eco-link__icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
