import{_ as i,c as a,I as n,aU as t,o as e,E as p}from"./chunks/framework.CpXV_ol5.js";const m=JSON.parse('{"title":"前端性能优化 ｜ 图片懒加载","description":"","frontmatter":{"title":"前端性能优化 ｜ 图片懒加载"},"headers":[],"relativePath":"zh/blog/front-end/前端性能优化-图片懒加载.md","filePath":"zh/blog/front-end/前端性能优化-图片懒加载.md","lastUpdated":1727083629000}'),l={name:"zh/blog/front-end/前端性能优化-图片懒加载.md"},h=t(`<h1 id="前端性能优化-图片懒加载" tabindex="-1">前端性能优化 ｜ 图片懒加载 <a class="header-anchor" href="#前端性能优化-图片懒加载" aria-label="Permalink to &quot;前端性能优化 ｜ 图片懒加载&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><strong>图片懒加载</strong>是一种前端优化策略，通过<strong>延迟加载</strong>网页中的图片，只在图片进入可视区域时才进行加载，从而提升网页加载性能和用户体验。随着网页应用日益复杂和图片内容的增加，图片加载已经成为影响网页性能的重要因素之一。而图片懒加载则能够有效地解决这个问题。</p><p>传统的图片加载方式是在页面加载完成后一次性加载所有图片资源，这样会造成页面加载时间过长，带宽消耗过大，影响用户体验。尤其是在移动设备上，带宽和网络速度有限的情况下，加载大量图片会更加明显地影响用户的体验。而图片懒加载则打破了这种传统的加载方式，仅加载可见区域的图片，大大减少了初始页面的加载时间和带宽消耗。</p><p>在本篇文章中，我们将深入探讨图片懒加载的原理、实现方式以及相关的技巧和注意事项。希望通过本文的阅读，你能够理解图片懒加载的重要性，并且能够在实际的项目中运用它来提升网页性能，提供更好的用户体验。</p><h3 id="为什么要进行图片懒加载" tabindex="-1">为什么要进行图片懒加载？ <a class="header-anchor" href="#为什么要进行图片懒加载" aria-label="Permalink to &quot;为什么要进行图片懒加载？&quot;">​</a></h3><p>我们先来看一下某网站首页渲染时，打开浏览器控制台我们能看到的图片加载信息。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a5c6d73631bf40058d8e1caa781eb059~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1274&amp;h=711&amp;e=png&amp;b=fbfbfb" alt="fileOf7174.png"></p><p>如图所示，网页中如果包含大量的图片，会极大的增加页面的下载时间和带宽消耗，造成了不友好的用户体验。通过图片懒加载，可以延迟加载页面上未出现在可视区域内的图片，只有当用户滚动到图片位置附近时才开始加载，从而减少了初始页面的加载时间，提升了网页的加载速度。</p><p><strong>优势：</strong> 懒加载的优势就在于提高网站的性能。懒加载可以减少页面需要加载的资源数目，从而减少页面的整体大小。这样相当于减少了页面的加载时间，从而提高了用户的体验。其次，懒加载可以降低网站的带宽消耗，特别是对于移动设备等网络环境比较差的情况下，非常有利。懒加载可以降低服务器的负载，提高网站的可靠性。</p><h3 id="本文主要从以下几个方面来探讨" tabindex="-1">本文主要从以下几个方面来探讨 <a class="header-anchor" href="#本文主要从以下几个方面来探讨" aria-label="Permalink to &quot;本文主要从以下几个方面来探讨&quot;">​</a></h3><blockquote><p>一、懒加载的概念</p><p>二、图片懒加载的原理</p><p>三、图片懒加载的实现方案</p><p>四、懒加载和预加载的区别</p></blockquote><h2 id="一、初识懒加载" tabindex="-1">一、初识懒加载 <a class="header-anchor" href="#一、初识懒加载" aria-label="Permalink to &quot;一、初识懒加载&quot;">​</a></h2><h3 id="_1、懒加载的概念" tabindex="-1">1、懒加载的概念 <a class="header-anchor" href="#_1、懒加载的概念" aria-label="Permalink to &quot;1、懒加载的概念&quot;">​</a></h3><p><strong>概念：</strong> 懒加载（<code>Lazy loading</code>），也被称为延迟加载，是一种优化网页性能的技术。它是指在网页加载过程中，将页面中的某些资源（如图片、视频、音频等）推迟加载，只有当用户需要访问到这些资源时才去加载。这样可以减少页面的初始加载时间，提高用户体验。</p><p><strong>原理：</strong> 懒加载的原理是通过监听用户的浏览行为，当用户滚动到可视区域内时，再进行资源的加载。这样可以避免一次性加载过多的资源，从而减少页面的加载时间和带宽消耗。</p><p><strong>主要使用场景：</strong> 懒加载适用于图片较多，页面列表较长(长列表)的场景中。</p><h3 id="_2、懒加载的优点" tabindex="-1">2、懒加载的优点 <a class="header-anchor" href="#_2、懒加载的优点" aria-label="Permalink to &quot;2、懒加载的优点&quot;">​</a></h3><ul><li><strong>减少首页加载时间</strong>：初始页面只加载必要的内容，而不需要等待所有资源都加载完成。</li><li><strong>提高用户体验</strong>：页面加载更快，用户可以更快地交互和浏览内容。</li><li><strong>节约带宽消耗</strong>：只加载用户需要的内容，减少不必要的带宽消耗。</li></ul><p>需要注意的是，懒加载并非适用于所有场景。对于一些重要的资源（如主要内容、重要的功能组件等），应当优先加载，以确保用户能够尽快访问到核心内容。而对于一些非必要资源（如底部的图片、辅助功能组件等），可以采用懒加载的方式。</p><h2 id="二、图片懒加载的实现原理" tabindex="-1">二、图片懒加载的实现原理 <a class="header-anchor" href="#二、图片懒加载的实现原理" aria-label="Permalink to &quot;二、图片懒加载的实现原理&quot;">​</a></h2><h3 id="_1、图片懒加载的概念" tabindex="-1">1、图片懒加载的概念 <a class="header-anchor" href="#_1、图片懒加载的概念" aria-label="Permalink to &quot;1、图片懒加载的概念&quot;">​</a></h3><p>图片懒加载是一种常见的网页性能优化技术，它可以延迟加载页面中的图片，只在用户需要时才加载显示，而不是一次性加载所有的图片资源。这可以减少初始页面的加载时间和带宽占用，提升用户的浏览体验。</p><h3 id="_2、图片懒加载的实现原理" tabindex="-1">2、图片懒加载的实现原理 <a class="header-anchor" href="#_2、图片懒加载的实现原理" aria-label="Permalink to &quot;2、图片懒加载的实现原理&quot;">​</a></h3><p>图片懒加载的实现原理通常是通过 JavaScript 监听页面的滚动事件，当用户滚动到特定位置时，判断图片是否进入了可视区域。如果图片进入了可区域，则动态创建 img 元素并将图片资源的地址赋值给 img 元素的 src 属性，触发浏览器加载图片。这样可以减少初始页面的加载时间和带宽占用。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ea7ec718f74454ab0b4d988be01bc0b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1056&amp;h=861&amp;e=png&amp;b=fefefe" alt="fileOf7174.png"></p><p>从图中我们还可以看出，图片懒加载的实现原理的核心主要有两个</p><ul><li>1、判断图片是否已经进入可视区域范围内</li><li>2、图片进入可视区域后触发加载图片</li></ul><p>因此解决上述两个核心点也就实现了图片的懒加载，那么如何解决上述两个问题呢？</p><h2 id="三、图片懒加载的实现方案" tabindex="-1">三、图片懒加载的实现方案 <a class="header-anchor" href="#三、图片懒加载的实现方案" aria-label="Permalink to &quot;三、图片懒加载的实现方案&quot;">​</a></h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/61d3f7eb09134adb83a323823bf58848~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=786&amp;h=737&amp;e=png&amp;b=fefefe" alt="fileOf7174.png"></p><p>围绕上述引出的问题，实现图片懒加载也就是解决两个核心点</p><h3 id="问题一-如何判断图片是否已经进入可视区域范围内" tabindex="-1">问题一：如何判断图片是否已经进入可视区域范围内？ <a class="header-anchor" href="#问题一-如何判断图片是否已经进入可视区域范围内" aria-label="Permalink to &quot;问题一：如何判断图片是否已经进入可视区域范围内？&quot;">​</a></h3><h4 id="方案一-获取元素的相对浏览器可是区域的位置-getboundingclientrect" tabindex="-1">方案一：获取元素的相对浏览器可是区域的位置：<code>getBoundingClientRect()</code> <a class="header-anchor" href="#方案一-获取元素的相对浏览器可是区域的位置-getboundingclientrect" aria-label="Permalink to &quot;方案一：获取元素的相对浏览器可是区域的位置：\`getBoundingClientRect()\`&quot;">​</a></h4><p>这个方案首先需要获取两个高度：浏览器窗口高度（可视区域高度）和元素距离浏览器窗口顶部的高度</p><p><strong>（1）获取浏览器窗口高度（可视区域高度）</strong></p><p>浏览器窗口高度通过 <code>document.documentElement.clientHeight</code> 这个 <code>API</code> 来获取，如下图所示浏览器常用高度的示意图，从图中，很清晰的可以看到<code>clientHeight</code>的高度</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f103d8b567b4b63b18f35493c64aed1~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=950&amp;h=856&amp;e=png&amp;b=ffffff" alt="fileOf7174.png"></p><p><strong>（2）获取元素距离浏览器窗口顶部的高度</strong></p><p>获取元素距离可视区域顶部的高度需要通过<code>getBoundingClientRect()</code> API 来实现，<code>getBoundingClientRect()</code> 获取的是 DOM 元素相对于窗口的坐标集合，集合中有多个属性，其中的 <code>top</code> 属性就是当前元素元素距离窗口可视区域顶部的距离，如下图所示</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cfbfdce047124867a8ddd573c940888b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1396&amp;h=1072&amp;e=png&amp;b=ffffff" alt="fileOf7174.png"></p><p>通过这两个高度判断的方法，实现方案也就有了，通过监听并计算 <strong>当前可视区域的高度 - 元素距离可视区域顶部的高度</strong> ，当这个高度差大于 0 时说明图片已经进入可视区域，此时可以开始加载图片。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a894e58c52ee447f978cc64f756b7fc6~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=896&amp;h=648&amp;s=31014&amp;e=png&amp;b=fefefe" alt="image.png"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/798ad738d475408cb93a7670bde68c29~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=823&amp;h=521&amp;s=33030&amp;e=png&amp;b=ffffff" alt="image.png"></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取所有图片标签</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> imgs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementsByTagName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;img&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取可视区域的高度</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> viewHight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.documentElement.clientHeight</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 统计当前加载到了哪张照片，避免每一次都从第一张照片开始检查</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lazyload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> imgs.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> imgs[i]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 可视区域高度减去元素顶部距离可视区域顶部的高度，如果差值大于 0 说明元素展示</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> distance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> viewHight </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBoundingClientRect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().top</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (distance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 展示真实图片</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      item.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;data-src&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 监听 scroll 事件，实际项目中需要进行**节流优化**</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;scroll&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, lazyload, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lazyload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p><strong>注意：</strong> 以上代码只为说明图片懒加载的实现思路，应该明白这样会存在较大的性能问题，因为  <code>scroll</code>  事件会在很短的时间内触发很多次，会严重影响页面性能，为了提高网页性能，因此需要一个节流函数来控制函数的多次触发，在一段时间内只执行一次回调。如何实现节流函数，详见<a href="https://juejin.cn/post/7270532002733228068" target="_blank" rel="noreferrer">前端性能优化 ｜ 防抖与节流</a></p><h4 id="方案二-异步观察目标元素-intersection-observer" tabindex="-1">方案二：异步观察目标元素：<code>Intersection Observer</code> <a class="header-anchor" href="#方案二-异步观察目标元素-intersection-observer" aria-label="Permalink to &quot;方案二：异步观察目标元素：\`Intersection Observer\`&quot;">​</a></h4><p><code>Intersection Observer</code>（交叉观察器）是一个现代的 JavaScript API，用于监测页面上元素与视口（可见区域）之间的交叉状态。它可以轻松地实现一些与元素可见性相关的功能，如图片懒加载、无限滚动、响应式布局等。</p><p><code>Intersection Observer</code> API 的核心概念是观察器（<code>Observer</code>）和目标元素（<code>Target</code>）。观察器用于监听目标元素与视口之间的交叉信息，并在交叉状态发生变化时执行相应的回调函数。</p><p>使用 <code>Intersection Observer</code> API 的步骤：</p><ol><li><p>创建观察器实例： 使用 <code>new IntersectionObserver(callback, options)</code> 创建一个观察器实例。<code>callback</code> 是一个回调函数，用于处理交叉状态的变化；<code>options</code> 是观察器的配置参数，可以设置用于判断交叉状态的阈值、根节点等。</p></li><li><p>指定目标元素： 使用观察器实例的 <code>observe(target)</code> 方法，将要观察的目标元素添加进观察器。目标元素可以是单个元素，也可以是一个节点列表。</p></li><li><p>处理交叉状态变化： 当被观察的目标元素与视口发生交叉状态变化时，观察器会执行指定的回调函数。回调函数会接收一个参数，即包含交叉信息的观察器实例数组（一般只有一个实例）。通过这些交叉信息，可以获取目标元素与视口之间的交叉比例、交叉区域的位置等。</p></li><li><p>解除观察： 使用观察器实例的 <code>unobserve(target)</code> 方法，可以取消对特定目标元素的观察。当不再需要观察某个元素或者页面销毁时，应及时解除观察，以避免资源的浪费。</p></li></ol><p><code>Intersection Observer</code> API 的优势在于它可以提供更好的性能和效率，减少了手动监听滚动事件并计算元素位置的复杂性。它使用浏览器原生的算法来判断交叉状态，能够在性能友好的情况下，准确、高效地处理元素的可见性变化。</p><p>总而言之，<code>Intersection Observe</code>r API 可以简化元素可见性的监测工作，让开发者可以更方便地实现一些与元素可见性相关的功能，提升用户体验。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/04379e120ee94995a503625eb6aadac6~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1012&amp;h=853&amp;e=png&amp;b=fefdfd" alt="fileOf7174.png"></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> io</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IntersectionObserver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">entries</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  entries.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 当前元素可见时</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (item.isIntersecting) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      item.target.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item.target.dataset.src </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 替换 src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      io.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unobserve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item.target) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 停止观察当前元素，避免不可见时再次调用 callback 函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> imgs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelectorAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;[data-src]&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 监听所有图片元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">imgs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  io.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">observe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h3 id="问题二-图片进入可视区域后触发加载图片" tabindex="-1">问题二：图片进入可视区域后触发加载图片 <a class="header-anchor" href="#问题二-图片进入可视区域后触发加载图片" aria-label="Permalink to &quot;问题二：图片进入可视区域后触发加载图片&quot;">​</a></h3><p>对于这个问题，实现思路也很简单，需要用到 <code>DOM</code> 元素的 <code>dataset</code> 属性，所有以 <code>data-</code> 开头的属性都可以用做自定义属性，所以我们可以定义一个 <code>data-src</code> 属性存放需要加载的图片链接，<code>src</code> 属性使用 <code>loading</code> 占位图片，当需要加载图片的时候，把 <code>src</code> 的链接更换为 <code>data-src</code> 的链接即可</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> data-src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;需要加载的图片链接&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;图片占位loading图片地址&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="四、懒加载和预加载" tabindex="-1">四、懒加载和预加载 <a class="header-anchor" href="#四、懒加载和预加载" aria-label="Permalink to &quot;四、懒加载和预加载&quot;">​</a></h2><p>懒加载和预加载是两种优化网页性能的技术，它们在资源加载的时机和方式上有所不同。</p><p>这两种方式都是提高网页性能的方式，两者主要区别是一个是提前加载，一个是迟缓甚至不加载。懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。</p><p>懒加载（<code>Lazy loading</code>）是将某些资源在需要时再进行加载。在网页加载过程中，只加载当前可视区域内的内容，当用户滚动页面或者进行特定操作时，再加载进入视野的内容。这可以减少初始页面的加载时间，提高用户体验。懒加载常用于图片等大型文件的加载，帮助减少页面的加载压力。</p><p>预加载（<code>Preloading</code>）则是在网页加载时提前加载将来会用到的资源。通过在网页中声明关键资源，浏览器会在页面加载完成后开始提前加载这些资源，即使用户尚未进行相关操作。这样可以在用户需要时即可获取到已经加载好的资源，提高访问速度和响应时间。预加载常用于网页中的重要组件、CSS 样式文件、JavaScript 脚本等。</p><p>懒加载和预加载都是通过对资源加载时机进行调整，以提高页面性能和用户体验。懒加载将资源的加载延迟到需要的时候，避免了一次性加载大量资源造成的性能问题；而预加载则是提前加载资源，确保用户在需要时能够快速获取到所需的内容。两者可以结合使用，根据具体场景和需求来选择合适的优化策略。</p><blockquote><p>注：本文不对预加载做过多的讲解</p></blockquote><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>为提高网站加载性能，图片懒加载是必要的；</p><p>图片懒加载的核心点包括以下几个方面：</p><ol><li><p><strong>监听滚动事件</strong>：通过监听用户的滚动事件，判断页面上的图片是否进入了可视区域。一旦图片进入可视区域，就触发加载操作。</p></li><li><p><strong>设置占位符</strong>：在页面加载时，可以先为图片设置一个占位符，通常是一个占位图或者是图片的尺寸占位。这样可以保持页面的布局稳定，避免因图片加载导致页面抖动。</p></li><li><p><strong>动态加载图片</strong>：当图片进入可视区域时，通过 JavaScript 动态创建 img 元素，并将图片的真实地址赋值给该元素的 src 属性。这会触发浏览器加载图片资源。</p></li><li><p><strong>懒加载优化</strong>：为了更好地优化懒加载效果，可以考虑延迟加载图片的时间，即不是在图片完全进入可视区域时立即加载，而是延迟一小段时间，以避免过于频繁地触发加载操作。</p></li><li><p><strong>处理异常和兼容性</strong>：在实现图片懒加载时需要注意处理异常情况，比如图片加载失败、图片资源无法访问等情况。此外，考虑到不同浏览器和设备的兼容性，可使用现有的第三方库或框架，以便更方便地实现图片懒加载功能。</p></li></ol><p>通过以上核心点的实施，可以达到优化网页加载性能、减轻服务器负载以及提升用户体验的目的。</p>`,70);function k(r,d,o,c,g,E){const s=p("ArticleFooter");return e(),a("div",null,[h,n(s,{link:["juejin::https://juejin.cn/post/7271639532469747769","weixin::https://mp.weixin.qq.com/s/TwSMCGmbZlsYSKhN-ayBtA"]},null,8,["link"])])}const b=i(l,[["render",k]]);export{m as __pageData,b as default};
