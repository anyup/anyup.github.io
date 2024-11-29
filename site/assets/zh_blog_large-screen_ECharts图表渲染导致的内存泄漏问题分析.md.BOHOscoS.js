import{_ as s,c as i,I as t,aU as e,o as h,E as p}from"./chunks/framework.BTzRA3v_.js";const u=JSON.parse('{"title":"分析ECharts图表渲染导致的内存泄漏问题-附解决方案","description":"","frontmatter":{"title":"分析ECharts图表渲染导致的内存泄漏问题-附解决方案"},"headers":[],"relativePath":"zh/blog/large-screen/ECharts图表渲染导致的内存泄漏问题分析.md","filePath":"zh/blog/large-screen/ECharts图表渲染导致的内存泄漏问题分析.md","lastUpdated":1725606759000}'),l={name:"zh/blog/large-screen/ECharts图表渲染导致的内存泄漏问题分析.md"},n=e(`<h1 id="分析echarts图表渲染导致的内存泄漏问题-附解决方案" tabindex="-1">分析ECharts图表渲染导致的内存泄漏问题-附解决方案 <a class="header-anchor" href="#分析echarts图表渲染导致的内存泄漏问题-附解决方案" aria-label="Permalink to &quot;分析ECharts图表渲染导致的内存泄漏问题-附解决方案&quot;">​</a></h1><h2 id="一-引言" tabindex="-1">一. 引言 <a class="header-anchor" href="#一-引言" aria-label="Permalink to &quot;一. 引言&quot;">​</a></h2><p>在今年某个可视化大屏项目中，出现了一个问题。项目在运行一段时间后，页面出现了崩溃，而且是大概运行几天之后，因为大屏项目是部署到客户现场大屏，长时间运行不关闭。报错问题如下图所示：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7407fec200374e93b5f765211d43f9c1~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2492&amp;h=1232&amp;s=912581&amp;e=png&amp;b=030916" alt="image.png"></p><p>由于这个大屏页面是使用 ECharts 图表渲染的，整个页面就一个渲染地图的功能，没有多少耗费内存的操作。而 ECharts 作为一款强大的数据可视化库，被广泛应用于各种项目中，因此 ECharts 的稳定性也是经过广大开发者验证的，不会出现明显的 bug 问题。</p><p>然而，我们也知道，如果页面随着图表数量的增加和动态更新的需求，我们必然会考虑 ECharts 图表渲染导致的内存泄漏问题。因此，上面的问题我们按照这个猜想来往下走，认为 ECharts 图表渲染导致了内存泄漏，那么 ECharts 的什么操作会导致内存泄漏、甚至到页面崩溃呢？</p><p>本文将深入分析这一问题，并提供解决方案。</p><h2 id="二-问题背景" tabindex="-1">二. 问题背景 <a class="header-anchor" href="#二-问题背景" aria-label="Permalink to &quot;二. 问题背景&quot;">​</a></h2><h3 id="猜测原因" tabindex="-1">猜测原因 <a class="header-anchor" href="#猜测原因" aria-label="Permalink to &quot;猜测原因&quot;">​</a></h3><p>当我们使用 ECharts 来渲染大量图表时，会发现页面的内存占用不断增加，最终导致页面卡顿甚至崩溃。这是由于 ECharts 在图表渲染过程中产生的内存泄漏导致的。</p><p>而奇怪的是，自己在本地中测试的时候，从未有过崩溃的现象？但是在客户现场就出现了这种问题。</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b97920fc2c304b2f86aae4244d46ec64~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1964&amp;h=852&amp;s=53613&amp;e=png&amp;b=ffffff" alt="Snipaste_2023-10-21_13-49-57.png"></p><h3 id="内存占用检测" tabindex="-1">内存占用检测 <a class="header-anchor" href="#内存占用检测" aria-label="Permalink to &quot;内存占用检测&quot;">​</a></h3><p>为了能够实时监测网站运行过程中，我们在 Chrome 浏览器打开了内存性能分析，便于实时查看内存占用情况，发现运行内存占用并不是太大，我们监测过一段时间后发现，确实内存有时在稳定的增加，但是这点内存占用还不至于导致系统崩溃。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc0c86c1980b4a109652a9d063d3b0a8~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2714&amp;h=1368&amp;s=905933&amp;e=png&amp;b=ffffff" alt="image.png"></p><h3 id="内存泄漏原因分析" tabindex="-1">内存泄漏原因分析 <a class="header-anchor" href="#内存泄漏原因分析" aria-label="Permalink to &quot;内存泄漏原因分析&quot;">​</a></h3><ul><li><p><strong>嵌套事件绑定</strong>：在 ECharts 图表中，每个图表都会绑定各种交互事件。如果我们正确地解绑这些事件，则会导致事件监听器无法垃圾回收，从而造成内存泄漏。</p></li><li><p><strong>大量的图表实例</strong>：如果我们在动态更新图表的过程中，每次都创建新的图表实例而不销毁旧的实例，就会导致内存占用不断增加。</p></li><li><p><strong>定时器未清理</strong>：如果我们在更新图表的过程中使用了定时器来控制刷新频率，但未能正确清理这些定时器，就可能导致内存泄漏。</p></li></ul><h2 id="三-第一轮解决方案" tabindex="-1">三. 第一轮解决方案 <a class="header-anchor" href="#三-第一轮解决方案" aria-label="Permalink to &quot;三. 第一轮解决方案&quot;">​</a></h2><p>因为可视化大屏项目代码不是我直接写的，我当时只不过是被临时抽过去提过几个建议而已，所以并没有深入的研读项目代码，所以这一轮解决方案可以定义为是在浪费时间，不过也并不是一点经验没有，一起来看一下吧。</p><h3 id="初步解决" tabindex="-1">初步解决 <a class="header-anchor" href="#初步解决" aria-label="Permalink to &quot;初步解决&quot;">​</a></h3><p>为了解决 ECharts 图表渲染导致的内存泄漏问题，我们采取以下措施：</p><ul><li><p>在绑定事件监听器时，要确保正确解绑，可以使用 ECharts 提供的<code>off</code>方法来取消事件定。</p></li><li><p>在图表组件销毁之前，务必使用 <code>dispose</code> 函数销毁图表实例，以确保释放内存。</p></li><li><p>在动态更新图表时，尽量复用现有的图表实例，而不是每次都创建新的实例。可以使用 ECharts 提供的<code>setOption</code>方法来更新图表数据和配置。</p></li><li><p>如果使用了定时器来控制图表的刷新频率，必须在组件销毁前清定时器，可以使用<code>clearInterval</code>或<code>clearTimeout</code>来停止定时器。</p></li><li><p>正确管理图表组件的生命周期，尽量避免不必要的渲染和更新操作。</p></li></ul><h3 id="初步验证" tabindex="-1">初步验证 <a class="header-anchor" href="#初步验证" aria-label="Permalink to &quot;初步验证&quot;">​</a></h3><p>按照以上的初步解决方案，我们对流程进行了初步优化，主要进行了事件监听器的绑定与解绑优化、销毁定时器、<code>dispose</code> 函数销毁图表实例等操作。</p><p>等这些优化操作完成后，我们又部署到自己的系统进行初步验证，发现内存占用确实变的小了，但是等到运行长时间来看，内存还是有上升的趋势。因此我断定，没有找到根本原因解决。</p><p>果然，运行了大概有五天的时间，浏览器还是顶不住了，系统再一次不工作了。</p><h2 id="四-第二轮解决方案" tabindex="-1">四. 第二轮解决方案 <a class="header-anchor" href="#四-第二轮解决方案" aria-label="Permalink to &quot;四. 第二轮解决方案&quot;">​</a></h2><h3 id="可能原因" tabindex="-1">可能原因 <a class="header-anchor" href="#可能原因" aria-label="Permalink to &quot;可能原因&quot;">​</a></h3><p>由于这个大屏项目是其他同事开发的，具体的代码我并不太清楚。因此，先前只是提供了一些建设性的建议，没想到同事修改完成后还是没有解决了根本问题。所以可能必须要完全读懂项目的代码才能找到根本原因。</p><p>果然，看了几遍代码后发现了一些端倪，页面部署上之后是不会再进行操作了，数据会自动定时刷新，地图数据也会自动刷新，因此，问题就出现在这了。</p><h3 id="猜想" tabindex="-1">猜想 <a class="header-anchor" href="#猜想" aria-label="Permalink to &quot;猜想&quot;">​</a></h3><p>多次调用 echarts.init，项目中这一段代码写的确实有问题，写了个定时器，每次刷新数据时，都需要调用 echarts init，并且销毁时 clear 和 dispose 方法使用不当造成，定时器循环重绘 ECharts 图表导致内存一直升高，最终导致了浏览器崩溃。</p><h3 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><p>通过 echarts init 方法创建 ECharts 实例，如果代码没有做优化，echarts 实例就会越来越多，占用大量内存，有以下两种方法可以避免这种情况：</p><p>第一种：使用 echarts init 之前先判断是否存在实例</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> chart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> echarts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstanceByDom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dom));</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (chart </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  chart </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> echarts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dom));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>第二种：如果 ECharts 存在，先 dispose 销毁后，再调用 init</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> chart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> echarts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstanceByDom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dom));</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (chart) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  echarts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dispose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(chart);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">chart </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> echarts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dom));</span></span></code></pre></div><h3 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-label="Permalink to &quot;验证&quot;">​</a></h3><p>使用上述的代码进行优化，再结合第一轮的代码优化后。系统又重新部署了，监测系统内存状态，初始的内存占用大小和之前的相差不大。不过观察一段时间后，内存没有持续升高的趋势，还算比较稳定。又这样运行了大概有一周左右，发现内存占用仍然稳定，系统也没有出现过崩溃的问题。因此可以断定，应该是优化好了。</p><h2 id="五-总结" tabindex="-1">五. 总结 <a class="header-anchor" href="#五-总结" aria-label="Permalink to &quot;五. 总结&quot;">​</a></h2><p>ECharts 图表渲染导致的内存泄漏问题是我们在使用 ECharts 时经常遇到的挑战之一。</p><p>在 ECharts 做图表开发时，避免内存泄漏的几点操作主要有以下几个方面：</p><ul><li><p>多次调用 echarts.init 会导致内存泄漏，应当在恰当时机销毁已经存在的 ECharts 实例，使用 clear() 和 dispose() 手动清理，区别在于：</p><ul><li>clear()不会销毁实例，只是重新绘制图形，</li><li>dispose()会销毁实例，需要重新构建 ECharts 对象</li></ul></li><li><p>在动态更新图表时，尽量复用现有的图表实例，而不是每次都创建新的实例。可以使用 ECharts 提供的<code>setOption</code>方法来更新图表数据和配置。</p></li><li><p>在绑定事件监听器时，要确保正确解绑，可以使用 ECharts 提供的<code>off</code>方法来取消事件。</p></li></ul><p>通过深入分析内存泄漏的原因，并采取相应的解决方案，我们可以有效地解决这一问题，确保应用的稳定性和性能。</p>`,45);function r(o,d,k,c,E,g){const a=p("ArticleFooter");return h(),i("div",null,[n,t(a,{link:"https://juejin.cn/post/7292298037204271158"})])}const b=s(l,[["render",r]]);export{u as __pageData,b as default};
