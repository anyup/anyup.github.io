import{_ as e,c as a,I as l,aU as i,o as n,E as s}from"./chunks/framework.BTzRA3v_.js";const E=JSON.parse('{"title":"Loading - 加载框","description":"","frontmatter":{"title":"Loading - 加载框","pageClass":"demo-preview"},"headers":[],"relativePath":"zh/colorful-uni/components/loading.md","filePath":"zh/colorful-uni/components/loading.md","lastUpdated":1732605494000}'),d={name:"zh/colorful-uni/components/loading.md"},r=i(`<h1 id="loading-加载框" tabindex="-1">Loading - 加载框 <a class="header-anchor" href="#loading-加载框" aria-label="Permalink to &quot;Loading - 加载框&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">说明</p><p>此组件为弹窗加载提示，比如请求loading等</p></div><h2 id="平台差异说明" tabindex="-1">平台差异说明 <a class="header-anchor" href="#平台差异说明" aria-label="Permalink to &quot;平台差异说明&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr></tbody></table><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-loading</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-loading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">可选值</th></tr></thead><tbody><tr><td style="text-align:center;">show</td><td style="text-align:center;">是否显示</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">text</td><td style="text-align:center;">加载文案</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:center;">加载中</td></tr><tr><td style="text-align:center;">direction</td><td style="text-align:center;">展示方向</td><td style="text-align:center;">String</td><td style="text-align:center;">vertical</td><td style="text-align:center;">horizontal</td></tr><tr><td style="text-align:center;">duration</td><td style="text-align:center;">显示时间</td><td style="text-align:center;">Number</td><td style="text-align:center;">0(一直显示)</td><td style="text-align:center;">毫秒数</td></tr><tr><td style="text-align:center;">cancel-time</td><td style="text-align:center;">可取消时间(点击空白区域可取消loading时间)</td><td style="text-align:center;">Number</td><td style="text-align:center;">10000</td><td style="text-align:center;">-</td></tr></tbody></table>`,9);function o(h,c,p,g,y,k){const t=s("DemoPreview");return n(),a("div",null,[l(t,{url:"pages/components/loading"}),r])}const u=e(d,[["render",o]]);export{E as __pageData,u as default};
