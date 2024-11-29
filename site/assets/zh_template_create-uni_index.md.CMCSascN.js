import{_ as s,c as i,o as a,aU as e}from"./chunks/framework.CpXV_ol5.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"zh/template/create-uni/index.md","filePath":"zh/template/create-uni/index.md","lastUpdated":1732260483000}'),t={name:"zh/template/create-uni/index.md"},l=e('<p align="center"><img alt="logo" src="https://www.anyup.cn/static/anyup/images/logo-heart-transparent.png" width="120" style="margin-bottom:10px;"></p><h1 align="center">Colorful UniApp CLI</h1><h2 align="center"><sub>一个快速创建 uni-app 模板项目的 CLI 工具</sub></h2><h2 id="一-介绍" tabindex="-1">一. 介绍 <a class="header-anchor" href="#一-介绍" aria-label="Permalink to &quot;一. 介绍&quot;">​</a></h2><p><code>create-colorful-app</code> 是一个用于快速创建 <code>uniapp</code> 项目的轻量脚手架工具，它可以帮助你快速创建一个 <code>uni-app</code> 项目。</p><h2 id="二-快速使用" tabindex="-1">二. 快速使用 <a class="header-anchor" href="#二-快速使用" aria-label="Permalink to &quot;二. 快速使用&quot;">​</a></h2><h3 id="_1-使用-pnpm-create-命令快速创建项目" tabindex="-1">1. 使用 <code>pnpm create</code> 命令快速创建项目 <a class="header-anchor" href="#_1-使用-pnpm-create-命令快速创建项目" aria-label="Permalink to &quot;1. 使用 `pnpm create` 命令快速创建项目&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> colorful-app</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 问询方式创建项目</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> colorful-app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">项目名</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">称</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 默认会创建 base-template 模板</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> colorful-app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">项目名</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">称</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">模板</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 根据模板名称创建对应模板</span></span></code></pre></div><h3 id="_2-使用-npx-命令快速创建项目" tabindex="-1">2. 使用 <code>npx</code> 命令快速创建项目 <a class="header-anchor" href="#_2-使用-npx-命令快速创建项目" aria-label="Permalink to &quot;2. 使用 `npx` 命令快速创建项目&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create-colorful-app</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 问询方式创建项目</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create-colorful-app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">项目名</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">称</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 默认会创建 base-template 模板</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create-colorful-app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">项目名</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">称</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">模板</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 根据模板名称创建对应模板</span></span></code></pre></div><h3 id="_3-选择模板说明" tabindex="-1">3. 选择模板说明 <a class="header-anchor" href="#_3-选择模板说明" aria-label="Permalink to &quot;3. 选择模板说明&quot;">​</a></h3><p><code>create-colorful-app</code> 支持 <code>-t</code> 参数选择模板，目前有 <code>3</code> 个模板，为 <code>Vue 2</code> 模板分别是：</p><ul><li><p><code>base-template</code>：基础模板，包含 <code>template</code> 的基础功能</p></li><li><p><code>base-template-hbx</code>：<code>HBuilderX</code> 模板，包含 <code>template</code> 的基础功能</p></li><li><p><code>demo-hbx</code>：<code>HBuilderX</code> 模板，包含所有的 <code>demo</code> 示例功能</p></li></ul><blockquote><p>Vue 3 版本的模板还在开发中，敬请期待！</p></blockquote>',14),p=[l];function h(n,k,d,r,o,c){return a(),i("div",null,p)}const y=s(t,[["render",h]]);export{F as __pageData,y as default};