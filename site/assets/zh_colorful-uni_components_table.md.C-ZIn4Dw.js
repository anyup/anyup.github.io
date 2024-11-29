import{_ as s,c as i,I as a,aU as e,o as l,E as n}from"./chunks/framework.CpXV_ol5.js";const x=JSON.parse('{"title":"Table - 表格","description":"","frontmatter":{"title":"Table - 表格","pageClass":"demo-preview"},"headers":[],"relativePath":"zh/colorful-uni/components/table.md","filePath":"zh/colorful-uni/components/table.md","lastUpdated":1732605494000}'),h={name:"zh/colorful-uni/components/table.md"},r=e(`<h1 id="table-表格" tabindex="-1">Table - 表格 <a class="header-anchor" href="#table-表格" aria-label="Permalink to &quot;Table - 表格&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">说明</p><p>此组件为表格组件，一般用于展示大量结构化数据的场景</p></div><h2 id="平台差异说明" tabindex="-1">平台差异说明 <a class="header-anchor" href="#平台差异说明" aria-label="Permalink to &quot;平台差异说明&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr></tbody></table><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-table</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10rpx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-tr</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fixed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-th</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;姓名&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-th</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-th</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;性别&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-th</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-th</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sort&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onSort&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;年龄&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-th</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-th</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;居住地&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-th</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-tr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-tr</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(value, key) in 3&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;张三&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;男&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;18&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;北京&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-tr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">col-table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	    sort: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;desc&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h2 id="table-props" tabindex="-1">Table Props <a class="header-anchor" href="#table-props" aria-label="Permalink to &quot;Table Props&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">可选值</th></tr></thead><tbody><tr><td style="text-align:center;">border-color</td><td style="text-align:center;">表格边框的颜色</td><td style="text-align:center;">String</td><td style="text-align:center;">#e4e7ed</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">bg-color</td><td style="text-align:center;">表格的背景颜色</td><td style="text-align:center;">String</td><td style="text-align:center;">#ffffff</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">align</td><td style="text-align:center;">单元格的内容对齐方式，作用类似css的text-align</td><td style="text-align:center;">center</td><td style="text-align:center;">left / right</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">padding</td><td style="text-align:center;">单元格的内边距，同css的padding写法</td><td style="text-align:center;">String</td><td style="text-align:center;">10rpx 0</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">font-size</td><td style="text-align:center;">单元格字体大小，单位rpx</td><td style="text-align:center;">String / Number</td><td style="text-align:center;">28</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">color</td><td style="text-align:center;">单元格字体颜色</td><td style="text-align:center;">String</td><td style="text-align:center;">#606266</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">th-style</td><td style="text-align:center;">th单元格的样式，对象形式(将th所需参数放在table组件，是为了避免每一个th组件要写一遍)</td><td style="text-align:center;">Object</td><td style="text-align:center;">{}</td><td style="text-align:center;">-</td></tr></tbody></table><h2 id="th-props" tabindex="-1">Th Props <a class="header-anchor" href="#th-props" aria-label="Permalink to &quot;Th Props&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">可选值</th></tr></thead><tbody><tr><td style="text-align:center;">sort</td><td style="text-align:center;">排序显示</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:center;">asc/desc/none</td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;">标题单元格宽度百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比，单元格宽度默认为均分tr的长度</td><td style="text-align:center;">String / Number</td><td style="text-align:center;">auto</td><td style="text-align:center;">-</td></tr></tbody></table><h2 id="td-props" tabindex="-1">Td Props <a class="header-anchor" href="#td-props" aria-label="Permalink to &quot;Td Props&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">可选值</th></tr></thead><tbody><tr><td style="text-align:center;">width</td><td style="text-align:center;">单元格宽度百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比，单元格宽度默认为均分tr的长度</td><td style="text-align:center;">String / Number</td><td style="text-align:center;">auto</td><td style="text-align:center;">-</td></tr></tbody></table><h3 id="th-events" tabindex="-1">Th Events <a class="header-anchor" href="#th-events" aria-label="Permalink to &quot;Th Events&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">说明</th><th style="text-align:center;">回调</th></tr></thead><tbody><tr><td style="text-align:center;">click</td><td style="text-align:center;">th点击事件，用户排序</td><td style="text-align:center;">Handler</td></tr></tbody></table>`,15);function p(k,d,E,g,c,y){const t=n("DemoPreview");return l(),i("div",null,[a(t,{url:"pages/components/table"}),r])}const b=s(h,[["render",p]]);export{x as __pageData,b as default};
