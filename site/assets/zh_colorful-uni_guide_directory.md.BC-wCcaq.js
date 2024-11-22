import{_ as s,c as n,o as a,aU as p}from"./chunks/framework.CpXV_ol5.js";const _=JSON.parse('{"title":"目录结构","description":"","frontmatter":{"title":"目录结构"},"headers":[],"relativePath":"zh/colorful-uni/guide/directory.md","filePath":"zh/colorful-uni/guide/directory.md","lastUpdated":1732258151000}'),e={name:"zh/colorful-uni/guide/directory.md"},l=p(`<h1 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h1><h2 id="uni-app-项目目录结构" tabindex="-1">uni-app 项目目录结构 <a class="header-anchor" href="#uni-app-项目目录结构" aria-label="Permalink to &quot;uni-app 项目目录结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>├── api                    # 所有请求</span></span>
<span class="line"><span>├── assets                 # 主题 字体等静态资源</span></span>
<span class="line"><span>├── common                 # 全局通用工具类</span></span>
<span class="line"><span>├── components             # 全局公用组件</span></span>
<span class="line"><span>├── constant               # 全局公用常量</span></span>
<span class="line"><span>├── i18n                   # 国际化 i18n language</span></span>
<span class="line"><span>├── mixins                 # 全局混入</span></span>
<span class="line"><span>├── models                 # 公共实体类</span></span>
<span class="line"><span>├── nativeplugins          # 原生插件</span></span>
<span class="line"><span>├── node_modules           # node包管理</span></span>
<span class="line"><span>├── pages                  # views 所有页面</span></span>
<span class="line"><span>├── ├──  index             # 视图模块名</span></span>
<span class="line"><span>├── └── └──  index.vue     # 模块入口页面</span></span>
<span class="line"><span>├── static                 # 存放应用引用静态资源（如图片、视频等）的目录</span></span>
<span class="line"><span>├── store                  # 全局 store管理</span></span>
<span class="line"><span>├── unpackage              # 打包存放目录，app资源配置目录</span></span>
<span class="line"><span>├── wxcomponents           # 小程序组件的目录</span></span>
<span class="line"><span>├── App.vue                # 入口页面，应用配置，配置App全局样式以及监听</span></span>
<span class="line"><span>├── main.js                # 入口文件 加载组件 初始化等</span></span>
<span class="line"><span>├── manifest.json          # 配置应用名称、appid、logo、版本等打包信息</span></span>
<span class="line"><span>├── package.json           # package.json</span></span>
<span class="line"><span>└── pages.json             # 配置页面路由、导航条、选项卡等页面类信息</span></span></code></pre></div><h2 id="colorful-uni-目录结构" tabindex="-1">colorful-uni 目录结构 <a class="header-anchor" href="#colorful-uni-目录结构" aria-label="Permalink to &quot;colorful-uni 目录结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>├── src                  # 源代码</span></span>
<span class="line"><span>├── ├──  components      # 组件</span></span>
<span class="line"><span>├── ├──  core            # 工具</span></span>
<span class="line"><span>├── ├──  css             # 样式</span></span>
<span class="line"><span>├── └── store            # vuex</span></span>
<span class="line"><span>├── index.js             # 模块输出</span></span>
<span class="line"><span>├── index.css            # 样式输出</span></span>
<span class="line"><span>├── theme.scss           # 主题样式输出</span></span>
<span class="line"><span>└── u.theme.scss         # uview主题样式关联</span></span></code></pre></div><hr>`,6),i=[l];function c(o,t,r,d,u,h){return a(),n("div",null,i)}const g=s(e,[["render",c]]);export{_ as __pageData,g as default};
