import{_ as i,c as s,o as a,aU as p}from"./chunks/framework.CpXV_ol5.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"zh/blog/uni-app/uniapp迁移.md","filePath":"zh/blog/uni-app/uniapp迁移.md","lastUpdated":null}'),e={name:"zh/blog/uni-app/uniapp迁移.md"},n=p(`<p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/2ed3ce2e6825433194fff205723ba0be~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1733301954&amp;x-orig-sign=5YnvJ1KjIzfVQ8XB%2Bl82mzzH7eQ%3D" alt="image.png"></p><p>近期文章推荐：</p><p><a href="https://juejin.cn/post/7441094982979747880" target="_blank" rel="noreferrer">微信公众号 h5 网页授权开发，附源码</a></p><p><a href="https://juejin.cn/post/7439972983945904137" target="_blank" rel="noreferrer">uni-app 蓝牙连接 API 流程最佳实践</a></p><h2 id="一-前言" tabindex="-1">一. 前言 <a class="header-anchor" href="#一-前言" aria-label="Permalink to &quot;一. 前言&quot;">​</a></h2><p>终于，一直在维护的多个 uni-app 项目逐步在迁移了！忍受了长时间的 <code>Hbuilder X</code> 开发工具，终于放弃了它，我现在终于可以使用 <code>VSCode</code> 开发 <code>uni-app</code> 项目了!</p><p>并不是说 <code>Hbuilder X</code> 不好，只是我适应不了，谁让我先遇到的是 <code>VSCode</code> 呢！</p><p>在之前的多个 <code>uni-app</code> 项目开发中，我使用的是 <code>Hbuilder X</code> 开发工具创建的，大部分是基于 <code>Hbuilder X</code> + <code>Vue2</code> + <code>uView 1.0</code> 来构建开发的，项目开发完成部署后，也一直没有机会升级。所以我的开发流程是：使用 <code>VSCode</code> 开发，然后使用 <code>Hbuilder X</code> 运行、打包、发布等等，是否有很多的人是这么使用的？</p><p>但是最近，在使用 <code>HBuilder X</code> 运行项目的过程中，出现了一个问题：长时间运行 <code>HBuilder X</code> 崩溃，导致电脑应用频繁崩溃，打开任何应用都会崩溃，只有电脑重启才会解决问题。起初我不知道是否为 <code>HBuilder X</code> 工具的问题，但是后来发现我只要不运行 HBuilder X 就没有问题。</p><p>因此，综上所述，我决定将之前的 <code>uni-app</code> 项目慢慢的全部转换为 <code>Vue CLI</code> 项目，以便更好地利用 <code>VSCode</code> 开发工具的优势。</p><p>在我将一个 <code>uni-app</code> 项目转换为 <code>Vue CLI</code> 项目的过程中，总结了一些经验和技巧，希望能对大家有所帮助。</p><p>同时在迁移的同时，也衍生出一个脚手架 <a href="https://www.npmjs.com/package/create-colorful-app" target="_blank" rel="noreferrer">create-colorful-app</a> ，它可以帮助你快速初始化一个 uni-app 项目，包含使用以下 uni-app 相关技术栈：</p><ul><li><p><a href="https://v2.cn.vuejs.org/" target="_blank" rel="noreferrer">Vue 2</a></p></li><li><p><a href="https://v1.uviewui.com/components/intro.html" target="_blank" rel="noreferrer">uView 1.x UI 组件库</a></p></li><li><p><a href="https://www.anyup.cn/site/zh/colorful-uni/guide/introduce.html" target="_blank" rel="noreferrer">colorful-uni 工具库</a></p></li></ul><p>目前 <code>create-colorful-app</code> cli 仅支持 Vue2 项目的模板创建，后续会支持更多的项目，比如：uni-app、Vue2、Vue3、Angular、React 等等。</p><p>所以，如果你要迁移你的 uni-app 项目或重新开始一个新的 uni-app 项目，或许本文可以给你一下思路，我总结了以下几个重要的步骤：</p><ol><li>初始化 <code>uni-app</code> 项目模板</li><li>迁移源代码：<code>src</code> 目录</li><li>配置文件调整：<code>main.js</code>、<code>vue.config.js</code></li><li>依赖项管理：<code>package.json</code></li><li>测试运行：h5、微信小程序、APP</li></ol><p>接下来我们按照步骤开始吧！</p><h2 id="二-初始化项目模板" tabindex="-1">二. 初始化项目模板 <a class="header-anchor" href="#二-初始化项目模板" aria-label="Permalink to &quot;二. 初始化项目模板&quot;">​</a></h2><p>以基于 Vue2 版本的 uni-app 项目为例，可以通过以下两个方式快速初始化一个 Vue CLI 项目：</p><h3 id="_1-使用脚手架-create-colorful-app" tabindex="-1">1. 使用脚手架 create-colorful-app <a class="header-anchor" href="#_1-使用脚手架-create-colorful-app" aria-label="Permalink to &quot;1. 使用脚手架 create-colorful-app&quot;">​</a></h3><p>如果你要初始化一个全新的 uni-app Vue2 项目，建议使用 <code>create-colorful-app</code> 脚手架，内置快速开发的工具库 <code>colorful-uni</code>，以帮助你简洁高效的开发应用：</p><p><a href="https://www.npmjs.com/package/create-colorful-app" target="_blank" rel="noreferrer">create-colorful-app</a> 是一个用于快速创建 uniapp 项目的轻量脚手架工具，它可以帮助你快速创建一个 uni-app 项目。</p><p>通过以下两种命令方式快速创建：</p><p>第一种，用 <code>pnpm create</code> 命令快速创建项目</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> colorful-app</span></span></code></pre></div><p>第二种，使用 <code>npx</code> 命令快速创建项目</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create-colorful-app</span></span></code></pre></div><blockquote><p>注意：创建的项目默认使用了自研的开源工具库 <code>colorful-uni</code> 来快速实现一些功能，如果不想使用该工具库，也可以在项目中自行移除即可。</p></blockquote><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/30f21567cfec4dae9bad7c6dd363ceea~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1733301954&amp;x-orig-sign=Ai1mxeB8HMpiZFCKAmLSbx8MvoU%3D" alt="image.png"></p><p>成功后会按需生成以下项目：</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/393106552e064d7a8539baf0503a95bf~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1733301954&amp;x-orig-sign=uGAqrgylS%2BkVJX6w2iB5P9p0cE8%3D" alt="image.png"></p><p>创建的项目有以下几个主要目录：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               # 静态资源文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  # 主要源代码目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  api</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # 网络请求目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  components</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 组件目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  config</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 环境配置目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  pages</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">           # 页面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  static</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 静态资源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> store</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # Vuex模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> App.vue</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 应用的入口文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.js</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 主入口文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manifest.json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 应用配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pages.json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # 应用路由配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uni.promisify.adaptor.js</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 适配器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uni.scss</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # 全局的 SCSS 变量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # 项目依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postcss.config.js</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # PostCSS 配置文件</span></span></code></pre></div><h3 id="_2-使用-vue-脚手架-vue-cli" tabindex="-1">2. 使用 Vue 脚手架 Vue CLI <a class="header-anchor" href="#_2-使用-vue-脚手架-vue-cli" aria-label="Permalink to &quot;2. 使用 Vue 脚手架 Vue CLI&quot;">​</a></h3><p>当然，也可以通过 Vue CLI 的方式创建一个新的项目来作为基础模板。如果你还没有安装 Vue CLI，可以通过 npm 安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue/cli</span></span></code></pre></div><p>然后，使用 Vue CLI 创建一个新的项目：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dcloudio/uni-preset-vue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-project</span></span></code></pre></div><p>如果你使用 Vue CLI 方式创建项目，详细可以查看 uni-app 官方文档：<a href="https://uniapp.dcloud.net.cn/quickstart-cli.html" target="_blank" rel="noreferrer">通过 vue-cli 命令行创建 uni-app 应用</a></p><h2 id="三-迁移源代码" tabindex="-1">三. 迁移源代码 <a class="header-anchor" href="#三-迁移源代码" aria-label="Permalink to &quot;三. 迁移源代码&quot;">​</a></h2><p>一般的，源代码迁移主要是将 HBuilderX 版本的 uni-app 项目中的源代码复制到新创建的 CLI 项目的相应目录中。</p><p>通常情况下，我们主要需要关注 <code>src</code> 目录，因为大部分的代码都会迁移到 <code>src</code> 目录。</p><p>主要会有以下文件目录和文件直接迁移到 src 目录下：</p><p><strong>目录类</strong>：</p><ul><li>api 请求类目录</li><li>assets 资源目录</li><li>components 组件目录</li><li>config 配置目录</li><li>pages 页面目录</li><li>static 静态资源目录</li><li>store 状态管理目录</li></ul><p><strong>文件类</strong>：</p><ul><li>App.vue 应用入口文件</li><li>main.js 主入口文件</li><li>manifest.json 应用配置文件</li><li>pages.json 应用路由配置文件</li><li>uni.scss 全局的 SCSS 变量</li></ul><p><strong>如下图所示，变更前和变更后的目录文件对比</strong>：</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/5254df79004b487ba037d19d5e533cb3~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1733301954&amp;x-orig-sign=%2FOf2dnB3lZKYiRxHDotJyHK6NIg%3D" alt="image.png"></p><p>将以上文件迁移到 src 目录下后，主要关注一些配置文件的调整和依赖项的管理是否需要调整，我们继续向下看。</p><h2 id="四-配置文件调整" tabindex="-1">四. 配置文件调整 <a class="header-anchor" href="#四-配置文件调整" aria-label="Permalink to &quot;四. 配置文件调整&quot;">​</a></h2><p>配置文件调整主要涉及以下几个文件：</p><ul><li>manifest.json：应用配置文件</li><li>uni.scss：全局的样式 scss 变量</li><li>main.js：应用入口文件</li><li>App.vue：主入口文件</li><li>vue.config.js：Vue配置文件，如果你shi yo</li></ul><p>检查并调整以上主要配置文件，确保应用的入口点正确配置，主要包括一些路径导入和声明。</p><h2 id="五-依赖项管理" tabindex="-1">五. 依赖项管理 <a class="header-anchor" href="#五-依赖项管理" aria-label="Permalink to &quot;五. 依赖项管理&quot;">​</a></h2><p>检查 <code>package.json</code> 文件，确保所有必要的依赖项都已添加到新的 CLI 项目中，主要包括任何第三方库和一些必要插件。</p><p>一般为：</p><ul><li>Vue 的相关依赖</li><li>@dcloudio、uni-app 的项目依赖</li><li>scss 项目依赖：node-sass、sass-loader 等</li><li>第三方组件库</li></ul><p>由于 <code>HBuilderX</code> 开发工具可能已经全局装了一下必要的依赖项，并没有体现在 <code>package.json</code> 中，所以之前我们的 <code>package.json</code> 文件的声明的依赖项比较少：</p><p><code>HBuilderX</code> 开发工具全局装的插件项如下：</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/79f4dc1f5cf041449ad741ce7e8380cb~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1733301954&amp;x-orig-sign=lOOAMg0h5vyeo1S5E902gn9wAiU%3D" alt="image.png"></p><p><code>package.json</code> 整体变更前后对比图如下：</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/27ce0ef8eaec4686a2aca21e3dd2f1ad~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1733301954&amp;x-orig-sign=xysBNFvkIYieFF0oBUI8BbOBMlE%3D" alt="image.png"></p><p>变更完成之后，可以像执行 Vue 项目中的命令一样执行 uni-app 项目，其实就是一个引入 uni-app 依赖的 Vue 项目。</p><p>使用 npm 或 yarn 安装成功这些依赖项：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># npm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者 yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span></span></code></pre></div><h2 id="六-测试运行项目" tabindex="-1">六. 测试运行项目 <a class="header-anchor" href="#六-测试运行项目" aria-label="Permalink to &quot;六. 测试运行项目&quot;">​</a></h2><p>在完成上述步骤后，尝试运行新的 Vue CLI 项目，看看是否有任何错误或警告。首先，我们不可能一次改动就成功，可以根据报错信息来更加精确的修改，这是验证转换是否成功的重要步骤。</p><p>使用以下命令运行或打包项目，platform 代表支持的平台：h5、mp-weixin、app-plus 等。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认启动 h5 浏览器预览</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev:platform</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev:platform</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 打包</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认启动 h5 浏览器预览</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:platform</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:platform</span></span></code></pre></div><h3 id="_1-测试-h5-运行" tabindex="-1">1. 测试 H5 运行 <a class="header-anchor" href="#_1-测试-h5-运行" aria-label="Permalink to &quot;1. 测试 H5 运行&quot;">​</a></h3><p>h5 是最常见的调试平台，方便且快捷，所以我们先测试一下 h5 运行。如果 h5 平台的运行和打包没有问题了，那么其他平台也不会有大问题。运行以下命令可以进行调试 h5:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 打包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/bbbc9ed8e6c4447c8e7438ceab11fb4e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1733301954&amp;x-orig-sign=S7IhUtNk2Zq%2FtxRilmDSKQ8wlFM%3D" alt="image.png"></p><h3 id="_2-测试小程序运行" tabindex="-1">2. 测试小程序运行 <a class="header-anchor" href="#_2-测试小程序运行" aria-label="Permalink to &quot;2. 测试小程序运行&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev:mp-weixin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 打包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:mp-weixin</span></span></code></pre></div><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d79a49158dea44daae2ab20755d0e0cb~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1733301954&amp;x-orig-sign=JTC2eoq2jKtwWFO6hvwYdZZB%2BD0%3D" alt="Snipaste2024-11-2713-56-27.png"></p><p>使用以上命令会在 <code>dist/dev</code> 或 <code>dist/build</code> 目录下生成对应的 <code>mp-weixin</code> 目录，使用微信开发者工具导入运行即可。</p><h3 id="_3-测试-app-运行" tabindex="-1">3. 测试 APP 运行 <a class="header-anchor" href="#_3-测试-app-运行" aria-label="Permalink to &quot;3. 测试 APP 运行&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev:app-plus</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 打包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:app-plus</span></span></code></pre></div><p>通过以上的更改，运行命令调试、打包发布等流程，经过测试发现，均没有问题。</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/b6bdbd4c64124224a96511e5db023be3~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1733301954&amp;x-orig-sign=NplaOsrNO8Qz4s5z7d1LrCxFACc%3D" alt="image.png"></p><p>APP 打包运行最终还是离不开使用 HBuilderX 工具，所以如果你是选择云打包，还是需要使用 HBuilderX。但如果你是使用本地打包，完全就可以自主控制了。</p><p>关于 APP 打包，之前有一篇文章介绍，感兴趣的可以跳转阅读：<a href="https://juejin.cn/post/7296317316206411787" target="_blank" rel="noreferrer">【超详细】从 0 到 1 打包你的 uni-app 应用：安卓篇打包指南</a></p><p><strong>小提示</strong>：</p><p>通过 CLI 的方式运行到 APP 平台，可以通过以下方式进行：</p><p><strong>导入</strong>：打开 HBuilderX，选择 <strong>导入项目</strong>，选择 <code>dist/dev/app-plus</code> 文件夹即可。</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/131bbd1e1125469a9eff504e0ecd421e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1733301954&amp;x-orig-sign=F0OKq4h%2FK%2Fw%2FJ6Ia4r60wJPsWxw%3D" alt="Snipaste2024-11-2713-42-22.png"></p><p><strong>运行</strong>：通过 <code>yarn dev:app-plus</code> 会在 <code>dist/dev</code> 目录下生成资源文件，然后打开 HBuilderX，导入刚刚生成的 <code>dist/dev/app-plus</code> 文件夹，选择 <strong>运行 -&gt; 运行到手机或模拟器 -&gt; 运行到 Android/iOS App 基座</strong> 即可。</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/bf09e1f238e64e638055cb5785647324~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1733301954&amp;x-orig-sign=Mx2TLiV7u0aXIo4CCFV1T%2BG22qg%3D" alt="Snipaste2024-11-2713-43-20.png"></p><p><strong>打包</strong>：通过 <code>yarn build:app-plus</code> 会在 <code>dist/build</code> 目录下生成资源文件，然后打开 HBuilderX，导入刚刚生成的 <code>dist/build/app-plus</code> 文件夹，选择 <strong>发行 -&gt; 原生 APP -&gt; 云打包</strong> 即可。</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d169f159dc744b5dbfad26789ae86b30~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1733301954&amp;x-orig-sign=RRLR6h911DE4Sxq%2F8v4c4aER4M4%3D" alt="Snipaste2024-11-2713-42-59.png"></p><h2 id="六-总结" tabindex="-1">六. 总结 <a class="header-anchor" href="#六-总结" aria-label="Permalink to &quot;六. 总结&quot;">​</a></h2><p>本篇文章主要介绍了如何将 uni-app 正在开发的项目迁移到 VSCode，并使用 CLI 命令进行调试、打包和发布。主要步骤如下：</p><ul><li><p><strong>初始化 uni-app 项目模板</strong>：使用 <code>Vue CLI</code> 或 <code>create-colorful-app</code> 脚手架初始化项目。</p></li><li><p><strong>迁移代码</strong>：将 uni-app 项目的代码从 HBuilderX 迁移到 src 目录中。</p></li><li><p><strong>配置环境变量</strong>：查看是否有配置文件的调整，以便能够正确运行 uni-app 项目。</p></li><li><p><strong>安装依赖</strong>：安装 uni-app 项目所需的依赖，包括 <code>@dcloudio</code> 和 <code>Vue</code> 的依赖和其他必要的依赖，主要是第三方插件和组件库。</p></li><li><p><strong>运行调试</strong>：使用 <code>yarn dev:platform</code> 命令运行 uni-app 项目，并进行调试。</p></li><li><p><strong>打包发布</strong>：使用 <code>yarn build:platform</code> 命令打包 uni-app 项目，并进行发布。</p></li></ul><p>通过以上步骤正确的执行，我们就可以方便地在 VSCode 中进行 uni-app 项目的开发、调试和发布了。</p><p>终于舒服了，uni-app 老项目也可以使用 VSCode 愉快的开发了！</p><h2 id="文档链接" tabindex="-1">文档链接 <a class="header-anchor" href="#文档链接" aria-label="Permalink to &quot;文档链接&quot;">​</a></h2><p><a href="https://uniapp.dcloud.net.cn/quickstart-cli.html" target="_blank" rel="noreferrer">vue-cli 创建 uni-app 应用</a></p><p><a href="https://www.npmjs.com/package/create-colorful-app" target="_blank" rel="noreferrer">create-colorful-app 脚手架创建 uni-app 应用</a></p><p><a href="https://www.anyup.cn/" target="_blank" rel="noreferrer">colorful-uni 开发文档</a></p><p><a href="https://v1.uviewui.com/" target="_blank" rel="noreferrer">uView UI 组件文档</a></p>`,102),l=[n];function t(h,d,o,r,k,c){return a(),s("div",null,l)}const y=i(e,[["render",t]]);export{u as __pageData,y as default};
