import{_ as s,c as e,I as i,aU as a,o as n,E as l}from"./chunks/framework.CpXV_ol5.js";const u=JSON.parse('{"title":"Button - 按钮","description":"","frontmatter":{"title":"Button - 按钮","pageClass":"demo-preview"},"headers":[],"relativePath":"zh/colorful-uni/components/button.md","filePath":"zh/colorful-uni/components/button.md","lastUpdated":1732258151000}'),h={name:"zh/colorful-uni/components/button.md"},d=a(`<h1 id="button-按钮" tabindex="-1">Button - 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button - 按钮&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">说明</p><ol><li>此组件与uView button 组件基本一致，由此拓展而来，详细参考<a href="https://www.uviewui.com/components/button.html" target="_blank" rel="noreferrer">uView</a></li><li>此组件扩展了uView button 的部分功能</li></ol></div><h2 id="平台差异说明" tabindex="-1">平台差异说明 <a class="header-anchor" href="#平台差异说明" aria-label="Permalink to &quot;平台差异说明&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr></tbody></table><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">au-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;medium&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> palin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">au-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="如何自定义按钮的主题" tabindex="-1">如何自定义按钮的主题 <a class="header-anchor" href="#如何自定义按钮的主题" aria-label="Permalink to &quot;如何自定义按钮的主题&quot;">​</a></h2><p><strong>1.在uni.scss添加主题颜色变量</strong></p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 金色*/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$is-type-gold</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#dcb170</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$is-type-gold-light</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#f8f0e5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$is-type-gold-disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#e0c9a5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$is-type-gold-dark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#cea973</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p><strong>2.组件生效，依据项目UI可以以此单独封装Button</strong></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">au-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :custom-types</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[&#39;gold&#39;]&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gold&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;自定义按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">au-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scss&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;colorful-uni/css/mixin.scss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  $type: gold;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  $color: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#ffffff;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  $</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">is-type-gold</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  $light: $</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">is-type-gold-light</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  $disabled: $</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">is-type-gold-disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  $dark: $</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">is-type-gold-dark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $i from 1 through length($type) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    @include</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> add-btn-theme(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      nth($type, $i),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      nth($color, $i),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      nth($main, $i),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      nth($light, $i),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      nth($disabled, $i),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      nth($dark, $i)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">可选值</th></tr></thead><tbody><tr><td style="text-align:center;">type</td><td style="text-align:center;">按钮主题类型</td><td style="text-align:center;">String</td><td style="text-align:center;">default</td><td style="text-align:center;">primary / success / info/ warning / error</td></tr><tr><td style="text-align:center;">size</td><td style="text-align:center;">按钮大小</td><td style="text-align:center;">String</td><td style="text-align:center;">default</td><td style="text-align:center;">medium / mini</td></tr><tr><td style="text-align:center;">shape</td><td style="text-align:center;">按钮外观形状</td><td style="text-align:center;">String</td><td style="text-align:center;">square</td><td style="text-align:center;">circle</td></tr><tr><td style="text-align:center;">plain</td><td style="text-align:center;">按钮是否镂空</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">hollow</td><td style="text-align:center;">按钮是否完全镂空，背景色透明</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;">是否禁用</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">hair-line</td><td style="text-align:center;">是否显示按钮的细边框</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">loading</td><td style="text-align:center;">按钮名称前是否带loading图标</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">form-type</td><td style="text-align:center;">用于 <code>&lt;form&gt;</code> 组件，点击分别会触发 <code>&lt;form&gt;</code> 组件的 submit/reset 事件</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:center;">submit / reset</td></tr><tr><td style="text-align:center;">open-type</td><td style="text-align:center;">开放能力</td><td style="text-align:center;">String</td><td style="text-align:center;">请参考uni-app方文档</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">hover-class</td><td style="text-align:center;">指定按钮按下去的样式类。当 hover-class=&quot;none&quot; 时，没有点击态效果</td><td style="text-align:center;">String</td><td style="text-align:center;">button-hover</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">throttle-time</td><td style="text-align:center;">节流的时间间隔，单位ms</td><td style="text-align:center;">String</td><td style="text-align:center;">Number</td><td style="text-align:center;">500</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">说明</th><th style="text-align:center;">回调</th></tr></thead><tbody><tr><td style="text-align:center;">click</td><td style="text-align:center;">按钮点击，请勿使用@tap点击事件，微信小程序无效，返回值为点击事件及参数</td><td style="text-align:center;">Handler</td></tr><tr><td style="text-align:center;">getphonenumber</td><td style="text-align:center;">open-type=&quot;getPhoneNumber&quot;时有效</td><td style="text-align:center;">Handler</td></tr><tr><td style="text-align:center;">getuserinfo</td><td style="text-align:center;">用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo</td><td style="text-align:center;">Handler</td></tr><tr><td style="text-align:center;">error</td><td style="text-align:center;">当使用开放能力时，发生错误的回调</td><td style="text-align:center;">Handler</td></tr><tr><td style="text-align:center;">opensetting</td><td style="text-align:center;">在打开授权设置页并关闭后回调</td><td style="text-align:center;">Handler</td></tr><tr><td style="text-align:center;">launchapp</td><td style="text-align:center;">打开 APP 成功的回调</td><td style="text-align:center;">Handler</td></tr></tbody></table>`,16);function r(p,k,g,E,c,y){const t=l("DemoPreview");return n(),e("div",null,[i(t,{url:"pages/components/button"}),d])}const x=s(h,[["render",r]]);export{u as __pageData,x as default};
