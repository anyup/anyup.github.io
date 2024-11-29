import{_ as e,c as a,I as l,aU as s,o as i,E as n}from"./chunks/framework.CpXV_ol5.js";const E=JSON.parse('{"title":"Loader - 加载图标","description":"","frontmatter":{"title":"Loader - 加载图标","pageClass":"demo-preview"},"headers":[],"relativePath":"zh/colorful-uni/components/loader.md","filePath":"zh/colorful-uni/components/loader.md","lastUpdated":1732605494000}'),r={name:"zh/colorful-uni/components/loader.md"},d=s(`<h1 id="loader-加载图标" tabindex="-1">Loader - 加载图标 <a class="header-anchor" href="#loader-加载图标" aria-label="Permalink to &quot;Loader - 加载图标&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">说明</p><p>此组件为一个小动画，目前用在组件的正在加载状态场景。</p></div><h2 id="平台差异说明" tabindex="-1">平台差异说明 <a class="header-anchor" href="#平台差异说明" aria-label="Permalink to &quot;平台差异说明&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr></tbody></table><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-loader</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;circle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-loader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">可选值</th></tr></thead><tbody><tr><td style="text-align:center;">mode</td><td style="text-align:center;">动画类型</td><td style="text-align:center;">String</td><td style="text-align:center;">circle</td><td style="text-align:center;">flower</td></tr><tr><td style="text-align:center;">color</td><td style="text-align:center;">动画颜色，只对mode=flower有效</td><td style="text-align:center;">String</td><td style="text-align:center;">#8f8d8e</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">size</td><td style="text-align:center;">图标大小</td><td style="text-align:center;">String/Number</td><td style="text-align:center;">34</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;">图标宽度，只对mode=circle有效</td><td style="text-align:center;">String</td><td style="text-align:center;">2px</td><td style="text-align:center;">-</td></tr></tbody></table>`,9);function o(h,c,p,g,k,y){const t=n("DemoPreview");return i(),a("div",null,[l(t,{url:"pages/components/loader"}),d])}const m=e(r,[["render",o]]);export{E as __pageData,m as default};
