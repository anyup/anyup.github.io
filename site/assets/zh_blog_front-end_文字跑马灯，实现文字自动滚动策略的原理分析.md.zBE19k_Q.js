import{_ as i,c as a,I as n,aU as l,o as t,E as h}from"./chunks/framework.BTzRA3v_.js";const F=JSON.parse('{"title":"文字跑马灯：实现文字自动滚动策略的原理分析","description":"","frontmatter":{"title":"文字跑马灯：实现文字自动滚动策略的原理分析"},"headers":[],"relativePath":"zh/blog/front-end/文字跑马灯，实现文字自动滚动策略的原理分析.md","filePath":"zh/blog/front-end/文字跑马灯，实现文字自动滚动策略的原理分析.md","lastUpdated":1727083629000}'),e={name:"zh/blog/front-end/文字跑马灯，实现文字自动滚动策略的原理分析.md"},p=l(`<h1 id="文字跑马灯-实现文字自动滚动策略的原理分析" tabindex="-1">文字跑马灯：实现文字自动滚动策略的原理分析 <a class="header-anchor" href="#文字跑马灯-实现文字自动滚动策略的原理分析" aria-label="Permalink to &quot;文字跑马灯：实现文字自动滚动策略的原理分析&quot;">​</a></h1><h2 id="一-背景" tabindex="-1">一. 背景 <a class="header-anchor" href="#一-背景" aria-label="Permalink to &quot;一. 背景&quot;">​</a></h2><p>在前端开发中，不少网站和应用都会运用到动态效果来吸引用户的注意，并提升用户体验。文字跑马灯是一种常见的动态效果，通过文字不断滚动来展示内容，吸引用户的注意力。</p><p>最近的一个项目就需要实现文字跑马灯效果，来向用户展示一些公告信息。具体需求是：当文本超出页面宽度时，需要文字滚动，否则不进行滚动。</p><p>其实，在 HTML 元素中，<code>&lt;marquee&gt;</code> 元素是原生的文字滚动组件，遗憾的是不支持自动判断文字宽度是否超出页面，而且该元素<strong>已弃用</strong>，官方已不再建议使用了。</p><p>因此，本篇文章通过简单的思路及原理分析，来实现文字跑马灯效果，轻松实现文字的自动按需滚动。</p><h2 id="二-marquee-元素" tabindex="-1">二. Marquee 元素 <a class="header-anchor" href="#二-marquee-元素" aria-label="Permalink to &quot;二. Marquee 元素&quot;">​</a></h2><p>在进行自己实现文字跑马灯效果之前，我们先来看一下 HTML 元素中的<code>&lt;marquee&gt;</code> 元素。</p><p>HTML marquee 元素（<code>&lt;marquee&gt;</code>）用来插入一段滚动的文字，可以使用它的属性控制当文本超出容器时实现文字滚动效果。</p><blockquote><p>注意： <code>&lt;marquee&gt;</code> 元素已经过时，官方建议不要再使用。可能一些浏览器仍然支持它，或许不久从相关的 web 标准中移除，请尽量不要使用该特性，因为可能该特性随时可能无法正常工作</p></blockquote><p>虽然已经移除，我们可以学习一下<code>&lt;marquee&gt;</code>的滚动 API，借鉴一下来拓展一下思路：</p><p>简单说几个重点的 API：</p><ul><li>behavior：文本在 marquee 元素内如何滚动。 scroll，slide 和 alternate。默认值为 scroll。</li><li>bgcolor：颜色名称或十六进制值设置背景颜色。</li><li>scrollamount：每次滚动时移动的长度，单位：像素。默认值为 6。</li><li>direction：文本滚动的方向。可选值有 left, right, up and down。默认值为 left。</li><li>loop：文本滚动的次数。如果未指定值，默认值为 −1，表示 marquee 将连续滚动。</li><li>width：宽度，单位：像素或百分比值。</li><li>height：高度，单位同上。</li></ul><p>遗憾的是，我查看了它的所有 API，发现它并不支持自动判断文字宽度的操作。下面我以一个简单的例子使用 <code>marquee</code> 实现滚动效果：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">marquee</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> behavior</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scroll&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> direction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;left&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;200&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bgcolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;red&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; This text will scroll from right to left &lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">marquee</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>通过以上简单的代码，<code>marquee</code>版的文字滚动就实现了，如下所示：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/849355c53cd24c9e9f90b97f605e657f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=683&amp;h=101&amp;s=142537&amp;e=gif&amp;f=83&amp;b=ffffff" alt="文字跑马灯1.gif"></p><p>由于<code>&lt;marquee&gt;</code>元素已被官方弃用，同时也不支持配置动态滚动，更多详细内容文档参考：<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/marquee" target="_blank" rel="noreferrer">marquee MDN 文档</a></p><p>因此，接下来我们自己实现一个文字跑马灯效果。</p><h2 id="三-如何实现文字滚动的分析" tabindex="-1">三. 如何实现文字滚动的分析 <a class="header-anchor" href="#三-如何实现文字滚动的分析" aria-label="Permalink to &quot;三. 如何实现文字滚动的分析&quot;">​</a></h2><p><strong>需求分析</strong>：实现一款文字跑马灯效果，同时需要自动判断文本内容的宽度，如果超出容器宽度，则进行文本滚动显示；否则文本不进行滚动。</p><p><strong>思路分析</strong>：</p><ul><li><p>判断容器的宽度和文字内容的宽度，当文字宽度大于容器宽度时，文字滚动；当文字宽度小于容器宽度时，文字不滚动。</p></li><li><p>实现滚动动画，当文字超出容器时，文字由左向右的进行循环滚动。</p></li></ul><p>因此实现这个组件的的重点就是以上思路分析中的要点，接下来我们看一下如何实现？</p><h3 id="_1-第一步-判断文字是否超出容器" tabindex="-1">1. 第一步：判断文字是否超出容器 <a class="header-anchor" href="#_1-第一步-判断文字是否超出容器" aria-label="Permalink to &quot;1. 第一步：判断文字是否超出容器&quot;">​</a></h3><p>判断文字是否超出容器，具体操作为，判断文字的内容宽度 &gt; 容器的宽度？而获取这两个元素的宽度可以通过以下这两个 API 来获取：</p><ul><li><p>获取文字的宽度：<code>el.getBoundingClientRect().width</code>。</p></li><li><p>获取容器的宽度：<code>el.clientWidth</code>。</p></li><li><p>当 <code>el.getBoundingClientRect().width &gt; el.clientWidth</code>，则需要滚动。</p></li></ul><p>说明：<code>el.getBoundingClientRect().width</code> 和 <code>el.clientWidth</code> 是用来获取元素宽度的两种属性，它们之间有一些区别，理解好这两个区别就成功了一半。</p><h4 id="_1-el-getboundingclientrect-width" tabindex="-1">① <code>el.getBoundingClientRect().width</code> <a class="header-anchor" href="#_1-el-getboundingclientrect-width" aria-label="Permalink to &quot;① \`el.getBoundingClientRect().width\`&quot;">​</a></h4><p><code>el.getBoundingClientRect()</code> 获取的是 DOM 元素相对于窗口的坐标集合，集合中有多个属性，其中的 <code>width</code> 属性就是相对于视口的元素的宽度。</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ba18d4650404b1ca3440bbd4e85b3b5~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=866&amp;h=665&amp;s=72956&amp;e=png&amp;b=ffffff" alt="Snipaste_2024-03-18_18-34-50.png"></p><ul><li><p>通过调用元素的 <code>getBoundingClientRect()</code> 方法来获取元素相对于视口的位置信息，并返回一个包含元素位置、尺寸等属性的 DOMRect 对象。</p></li><li><p><code>width</code> 属性表示元素的宽度，包括元素的内容、内边距和边框，但不包括外边距。它会计算元素的实际宽度，包括可能存在的滚动条。</p></li><li><p>因为 <code>width</code> 属性是相对于视口的，所以当页面发生滚动时，元素的位置和尺寸可能会发生改变。</p></li></ul><h4 id="_2-el-clientwidth" tabindex="-1">② <code>el.clientWidth</code> <a class="header-anchor" href="#_2-el-clientwidth" aria-label="Permalink to &quot;② \`el.clientWidth\`&quot;">​</a></h4><p>获取元素可视部分的宽度通过  <code>el.clientWidth</code>  这个  <code>API</code>  来获取，如下图所示浏览器常用高度的示意图，从图中，很清晰的可以看到<code>clientWidth</code>指示。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2baf796e508a4977baed3a5bda1b342b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=736&amp;h=665&amp;s=234920&amp;e=png&amp;b=fefefe" alt="Snipaste_2024-03-18_18-34-18.png"></p><ul><li><p>通过调用元素的 <code>clientWidth</code> 方法用来获取元素的内容宽度，包括内边距，但是不包括边框和外边距。</p></li><li><p><code>clientWidth</code> 通常用来获取元素可视部分的宽度，即不包括滚动条和隐藏部分的宽度。</p></li><li><p><code>clientWidth</code> 不会受到页面滚动的影响，它表示的是元素在不考虑滚动的情况下的宽度。</p></li></ul><p>综上所述，<code>el.getBoundingClientRect().width</code> 返回的是元素相对于视口的位置和尺寸信息中的宽度，包含了内边距和边框，并可能受到滚动的影响；而 <code>el.clientWidth</code> 获取的是元素内容部分的宽度，不包括内边距和边框，也不受滚动的影响。</p><p>因此根据具体的需求，获取文字的宽度使用的是<code>el.getBoundingClientRect().width</code>，而获取容器的宽度使用的是<code>el.clientWidth</code>。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;marquee-container&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;marquee-text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;这是一段需要滚动显示的文本内容～&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="_2-第二步-滚动的动画实现" tabindex="-1">2. 第二步：滚动的动画实现 <a class="header-anchor" href="#_2-第二步-滚动的动画实现" aria-label="Permalink to &quot;2. 第二步：滚动的动画实现&quot;">​</a></h3><p>要实现文字从左到右依次滚动的效果，关键在于下面两点：</p><ul><li><p>设置父级容器的样式，当文字超出时，藏超出容器宽度的部分</p></li><li><p>动画 <code>animation</code> 的实现，通过 <code>@keyframes</code> 实现一个从左到右滚动的动画效果</p></li></ul><p>示例代码如下所示：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scroll-container&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scroll-text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;这里是需要滚动的文本内容&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .scroll-container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    overflow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hidden</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .scroll-text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    white-space</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nowrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    animation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: scrollRight </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> linear</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> infinite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @keyframes</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> scrollRight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    0%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">translateX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">translateX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>在上面的 CSS 样式中：</p><ul><li><p><code>scroll-container</code> 元素设置了 <code>overflow: hidden;</code>，用来隐藏超出容器宽度的部分。</p></li><li><p><code>scroll-text</code> 元素使用 <code>white-space: nowrap;</code> 来防止文字换行，<code>display: inline-block;</code> 让文本水平排列。</p></li><li><p><code>animation</code> 属性定义了一个名为 <code>scrollRight</code> 的动画，持续时间为 5 秒，线性匀速运动，无限循环。</p></li><li><p><code>@keyframes</code> 定义了一个从左到右滚动的动画效果：从初始位置（<code>translateX(0)</code>）到 <code>-100%</code> 的水平偏移，实现文字从左到右滚动。</p></li></ul><p>在必要时，也可以使用 JavaScript 控制动画的开始、暂停和重新开始。例如，可以通过 JavaScript 动态添加或移除动画类名来控制滚动效果的启停。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> scrollText</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.scroll-text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 暂停滚动</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pauseScroll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  scrollText.style.animationPlayState </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;paused&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 重新开始滚动</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resumeScroll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  scrollText.style.animationPlayState </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;running&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>通过上述代码的编写，即可实现文字从左到右依次滚动的效果。当页面加载时，文字将开始滚动；在需要暂停或重新开始时，可通过 JavaScript 来实现相应的操作。</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24b0016247ed4552a7d034ca9ee46a51~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=746&amp;h=202&amp;s=179350&amp;e=gif&amp;f=62&amp;b=ffffff" alt="文字跑马灯3.gif"></p><h2 id="四-完整示例分析" tabindex="-1">四. 完整示例分析 <a class="header-anchor" href="#四-完整示例分析" aria-label="Permalink to &quot;四. 完整示例分析&quot;">​</a></h2><h3 id="_1-基本实现原理分析" tabindex="-1">1. 基本实现原理分析 <a class="header-anchor" href="#_1-基本实现原理分析" aria-label="Permalink to &quot;1. 基本实现原理分析&quot;">​</a></h3><ol><li>首先通过 JavaScript 获取文本容器和文本内容元素。</li><li>判断文本内容的宽度是否超出容器的宽度，如果超出则添加滚动样式，否则移除滚动样式。</li><li>CSS 样式定义了一个 <code>marquee</code> 动画，使文本内容在容器内水平滚动显示。动画从右侧向左侧滚动，持续时间为 5 秒，速度线性，无限循环。</li><li>添加 <code>white-space: nowrap;</code> 样式确保文本内容不换行，实现水平滚动效果。</li><li>使用 <code>overflow: hidden;</code> 样式来隐藏超出容器的文本内容，实现跑马灯效果。</li></ol><h3 id="_2-html-结构" tabindex="-1">2. HTML 结构 <a class="header-anchor" href="#_2-html-结构" aria-label="Permalink to &quot;2. HTML 结构&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;marquee-container&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;marquee-text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;这是一段需要滚动显示的文本内容～&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="_3-css-样式" tabindex="-1">3. CSS 样式 <a class="header-anchor" href="#_3-css-样式" aria-label="Permalink to &quot;3. CSS 样式&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.marquee-container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 容器宽度 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  overflow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hidden</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 内容超出时隐藏 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.marquee-text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  white-space</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nowrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 内容不换行 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.marquee-text-animation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  animation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: marquee </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> linear</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> infinite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 滚动动画，时间可根据需要调整 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@keyframes</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> marquee</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  0%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">translateX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">translateX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_4-javascript-实现" tabindex="-1">4. JavaScript 实现 <a class="header-anchor" href="#_4-javascript-实现" aria-label="Permalink to &quot;4. JavaScript 实现&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取文本容器和文本内容元素</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> container</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.marquee-container&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.marquee-text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 判断文本内容是否超出容器宽度</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (text.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBoundingClientRect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> container.clientWidth) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  text.classList.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;marquee-text-animation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 添加滚动样式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  text.classList.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remove</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;marquee-text-animation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 移除滚动样式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>通过以上实现原理和示例代码，可以实现一个简单的文字跑马灯组件，具体的演示效果如下图所示，同时你也可以根据实际需要对样式和滚动效果进行调整。</p><p>当文本内容宽度未超出容器宽度时，文本内容保持静态显示即可。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5fc6dafb5144cdf8ac341a1e0232543~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=725&amp;h=232&amp;s=17612&amp;e=png&amp;b=ffffff" alt="Snipaste_2024-03-19_10-00-57.png"></p><p>当文本内容宽度超出容器宽度时，文本会自动滚动显示；</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ce3c757b21944988ab9b62b22780434~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=746&amp;h=202&amp;s=99032&amp;e=gif&amp;f=44&amp;b=fefefe" alt="文字跑马灯2.gif"></p><p>码上掘金演示效果如下：</p><p><a href="https://code.juejin.cn/pen/7347897013637218354" target="_blank" rel="noreferrer">jcode</a></p><h2 id="五-总结" tabindex="-1">五. 总结 <a class="header-anchor" href="#五-总结" aria-label="Permalink to &quot;五. 总结&quot;">​</a></h2><p>在本文中，我们详细分析了如何实现文字跑马灯效果，通过判断文字内容是否超出容器，进而实现自动滚动的功能，为网站添加了一个引人注目的动画效果。下面我来进行总结一下，实现文字滚动效果有以下几个要点：</p><ul><li><p>判断文字的宽度是否超出：使用<code>el.getBoundingClientRect().width</code> API 获取文字的宽度，使用 <code>el.clientWidth</code> API 获取容器的宽度，当 <code>el.getBoundingClientRect().width &gt; el.clientWidth</code>，触发文字滚动。</p></li><li><p>实现文字滚动动画：使用 <code>transform</code> 动画实现文字滚动效果。</p></li></ul><p>文字跑马灯作为一种常见的动画效果，可以吸引用户的注意力。当然，本文只是在实现方式及实现原理上进行详细分析，你可以在了解这些之后对其进行更加具体的改造，比如动画效果、文字背景、上下滚动、操作暂停等等。</p><p>希望通过本文的学习，可以让你对文字跑马灯有了更深入的理解！</p>`,71);function k(d,r,E,c,o,g){const s=h("ArticleFooter");return t(),a("div",null,[p,n(s,{link:"https://juejin.cn/post/7347911052171051044"})])}const u=i(e,[["render",k]]);export{F as __pageData,u as default};
