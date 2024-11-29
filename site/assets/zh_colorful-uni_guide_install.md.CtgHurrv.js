import{_ as e,c as s,o as a,aU as o}from"./chunks/framework.CpXV_ol5.js";const _=JSON.parse('{"title":"安装","description":"","frontmatter":{"title":"安装"},"headers":[],"relativePath":"zh/colorful-uni/guide/install.md","filePath":"zh/colorful-uni/guide/install.md","lastUpdated":1732258151000}'),n={name:"zh/colorful-uni/guide/install.md"},l=o(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><h2 id="关于安装" tabindex="-1">关于安装 <a class="header-anchor" href="#关于安装" aria-label="Permalink to &quot;关于安装&quot;">​</a></h2><p><code>colorful-uni</code> 提供了 <code>uni_modules</code> 和 <code>npm</code> 两种安装方式，按需选择。</p><ul><li><p>使用 <code>uni_modules</code> 安装无需额外配置，即插即用，但是每次更新组件库需要处理代码差异（如果您有改动源码）。</p></li><li><p>使用 <code>npm</code> 安装需要额外配置，更新组件库时无需处理代码差异。</p></li></ul><div class="tip custom-block"><p class="custom-block-title">说明</p><ol><li><code>Hbuilder X 2.5.5</code> 及以上版本才支持使用 <code>easycom</code> 模式，本组件库同样支持，关于 UI 组件库部分，不用页面单独引入即可使用</li><li>请确保您下载的 <code>Hbuilder X</code> 为 APP 开发版，而非标准版，并且在“<strong>工具-插件安装</strong>”中安装了“<strong>scss/sass 编译</strong>”插件</li><li>如果您使用的是 <code>Vue Cli</code> 初始化项目，需要安装 <code>node-sass</code> 和 <code>sass-loader</code></li></ol></div><h2 id="npm-安装" tabindex="-1">npm 安装 <a class="header-anchor" href="#npm-安装" aria-label="Permalink to &quot;npm 安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> colorful-uni</span></span></code></pre></div><h2 id="uni-modules-安装" tabindex="-1">uni_modules 安装 <a class="header-anchor" href="#uni-modules-安装" aria-label="Permalink to &quot;uni_modules 安装&quot;">​</a></h2><p><code>colorful-uni</code> 支持 <code>uni_modules</code> 规范，已经上架到 uni-app 的插件市场。</p><p>在 uni-app 插件市场选择使用 HBuilderX 导入，或者选择手动在 <code>src</code> 目录下创建 <code>uni_modules</code> 文件夹并将 <code>colorful-uni</code> 解压到 <code>uni_modules</code> 中，结构如下:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>├── uni_modules                  # uni_modules</span></span>
<span class="line"><span>├── ├──  colorful-uni            # 组件目录</span></span>
<span class="line"><span>├── └── └──  components          # 组件</span></span>
<span class="line"><span>├── └── └──  core                # 工具</span></span>
<span class="line"><span>├── └── └──  css                 # 样式</span></span>
<span class="line"><span>└── └── └──  index.js            # 统一入口</span></span></code></pre></div><p><a href="https://ext.dcloud.net.cn/plugin?name=colorful-uni" target="_blank" rel="noreferrer">插件市场下载地址</a></p>`,12),i=[l];function c(d,t,p,u,r,h){return a(),s("div",null,i)}const g=e(n,[["render",c]]);export{_ as __pageData,g as default};