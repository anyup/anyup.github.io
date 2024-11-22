import{_ as s,c as i,I as e,aU as t,o as p,E as l}from"./chunks/framework.CpXV_ol5.js";const b=JSON.parse('{"title":"ECharts十万级+数据渲染性能优化方案","description":"","frontmatter":{"title":"ECharts十万级+数据渲染性能优化方案"},"headers":[],"relativePath":"zh/blog/large-screen/ECharts十万级+数据渲染性能优化方案.md","filePath":"zh/blog/large-screen/ECharts十万级+数据渲染性能优化方案.md","lastUpdated":1725427126000}'),n={name:"zh/blog/large-screen/ECharts十万级+数据渲染性能优化方案.md"},h=t(`<h1 id="echarts十万级-数据渲染性能优化方案" tabindex="-1">ECharts十万级+数据渲染性能优化方案 <a class="header-anchor" href="#echarts十万级-数据渲染性能优化方案" aria-label="Permalink to &quot;ECharts十万级+数据渲染性能优化方案&quot;">​</a></h1><h2 id="一-背景" tabindex="-1">一. 背景 <a class="header-anchor" href="#一-背景" aria-label="Permalink to &quot;一. 背景&quot;">​</a></h2><p>ECharts 作为一款功能强大的前端数据可视化库，为开发者提供了丰富多样的图表类型和灵活的配置选项，广泛应用于各行业的数据展示和分析中。在当今数字化的时代，数据量呈现爆炸性增长，大规模数据的可视化需求变得越来越迫切。</p><p>然而，当数据量达到十万级甚至更高级别时，ECharts 的渲染性能也面临挑战。传统的渲染方式可能会导致页面卡顿、加载时间过长等问题，影响用户体验。因此，针对 ECharts 渲染大规模数据时的性能问题，我们迫切需要探讨并实践适用的优化方案。</p><p>本篇文章将从实践出发，深入探讨 ECharts 渲染十万级数据的性能优化方案，通过实际案例和经验总结，探讨如何提升大规模数据可视化的渲染效率和用户体验。</p><p>通过本篇文章，我希望能够帮助大家更好地理解 ECharts 渲染十万级数据的性能挑战，并掌握实用的优化方法，从而实现更流畅、高效的大规模数据可视化展示。</p><h2 id="二-为什么要进行渲染优化" tabindex="-1">二. 为什么要进行渲染优化？ <a class="header-anchor" href="#二-为什么要进行渲染优化" aria-label="Permalink to &quot;二. 为什么要进行渲染优化？&quot;">​</a></h2><p>在我的一个实际项目中，有一个应用场景是：用户要通过时间范围选择框，查询最近半年的数据量，进而通过 ECharts 折线图一次性渲染大概十万+以上的数据量。可想而知，数据量大带来的用户体验效果会非常不好，如下图所示：</p><ul><li>接口请求回来的数据量大概有<strong>七万条数据</strong>，如下图所示：</li></ul><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02ce090acf4048f49b55256b2aee1a3f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=360&amp;h=224&amp;s=18225&amp;e=png&amp;b=f9f8f7" alt="Snipaste_2024-03-25_14-23-46.png"></p><ul><li>接口请求时间为 <strong>11 秒</strong>，数据包的大小为 <strong>3.6 MB</strong>，如下图所示：</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa05d87861194377aa05a6c0ca490b71~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=769&amp;h=216&amp;s=29515&amp;e=png&amp;b=f9f8f7" alt="Snipaste_2024-03-25_14-25-53.png"></p><ul><li>ECharts 最终渲染效果如下所示：</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56ea46a668b34696b1a857b7957744fc~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=800&amp;h=455&amp;s=393062&amp;e=gif&amp;f=87&amp;b=fefefe" alt="ECharts 大数据1.gif"></p><p>如上图所示的效果反应，用户体验效果非常不好，<strong>网络请求 10 秒以上</strong>，<strong>图表渲染至少要 5 秒以上</strong>，渲染成功后用户<strong>操作卡顿</strong>、<strong>延迟还特别严重</strong>。</p><p>但是这并不能说明 ECharts 图表渲染性能不好，而是有些时候 ECharts 有提供的方案，但是我们并没有按照官方策略去执行，去优化。图中面对的数据量才是十万级，相比较而言，在目前大数据的时代，百万级、千万级的数据量也会经常出现在我们的日常项目开发中，那么试想一下，如果还是以上这种方式渲染，我相信只有崩溃一条路可以走。</p><p>因此，在 ECharts 图表渲染这种场景下，面对庞大的数据量时，我们应该如何进行优化？提升用户体验呢？接下来我们就聊一下在实际项目中 ECharts 渲染海量数据的几个优化方案。</p><h2 id="三-方案-数据分段渲染" tabindex="-1">三. 方案：数据分段渲染 <a class="header-anchor" href="#三-方案-数据分段渲染" aria-label="Permalink to &quot;三. 方案：数据分段渲染&quot;">​</a></h2><h3 id="_1-方案简介" tabindex="-1">1. 方案简介 <a class="header-anchor" href="#_1-方案简介" aria-label="Permalink to &quot;1. 方案简介&quot;">​</a></h3><p>随着数据量的增加，直接一次性加载所有数据可能导致页面性能下降和用户体验变差，因此考虑将数据分段加载也是一种常见的性能优化方案。</p><p>ECharts <code>dataZoom</code> 组件常用于区域缩放，从而让用户能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响。为了能让 ECharts 避免一次性渲染的数据量过大，因此可以考虑使用 <code>dataZoom</code> 的区域缩放属性实现首次渲染 ECharts 图表时就进行区域渲染，减少整体渲染带来的性能消耗。</p><h3 id="_2-实现步骤" tabindex="-1">2. 实现步骤 <a class="header-anchor" href="#_2-实现步骤" aria-label="Permalink to &quot;2. 实现步骤&quot;">​</a></h3><p>dataZoom 组件提供了几个属性，利用这几个属性可以控制图表渲染时的性能问题，如下所示：</p><ul><li><p><code>start</code>: 数据窗口范围的起始百分比。范围是：0 ~ 100。表示 0% ~ 100%。</p></li><li><p><code>end</code>: 数据窗口范围的结束百分比。范围是：0 ~ 100。</p></li><li><p><code>minSpan</code>: 用于限制窗口大小的最小值（百分比值），取值范围是 0 ~ 100。</p></li><li><p><code>maxSpan</code>: 用于限制窗口大小的最大值（百分比值），取值范围是 0 ~ 100。</p></li></ul><p>具体方案是使用 <code>start</code> 和 <code>end</code> 控制 ECharts 图表初次渲染时滑块所处的位置以及数据窗口范围，使用 <code>minSpan</code> 和 <code>maxSpan</code> 用于限制窗口大小的最小值和最大值，最终限制的图表的可视区域显示范围，如下代码所示：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> option </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  dataZoom: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;slider&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      xAxisIndex: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      start: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      end: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      minSpan: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      maxSpan: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>以上代码表示 ECharts 图表初始化时，数据窗口从 x 轴 <code>0 ~ 1%</code> 范围内显示，最大的窗口显示范围为 <code>10%</code></p><h3 id="_3-实际效果" tabindex="-1">3. 实际效果 <a class="header-anchor" href="#_3-实际效果" aria-label="Permalink to &quot;3. 实际效果&quot;">​</a></h3><p>通过配置 <code>dataZoom</code> 区域缩放组件，实现数据分段加载的实现方案，可以有效降低页面加载时间，减少资源占用，提升用户体验。大幅度减少一次性加载大数据量带来的性能压力，实现更加流畅的大规模数据可视化展示。</p><p>最终实现效果图如下图所示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc7f44cbf05b4f17b0c6b085147b3129~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=800&amp;h=460&amp;s=1443623&amp;e=gif&amp;f=121&amp;b=fefefe" alt="ECharts 大数据2.gif"></p><h3 id="_4-优缺点" tabindex="-1">4. 优缺点 <a class="header-anchor" href="#_4-优缺点" aria-label="Permalink to &quot;4. 优缺点&quot;">​</a></h3><p>以上的这种方案，优缺点很明显，如下几点总结：</p><h4 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h4><p>可以很好的解决 ECharts 首次进行大数据量渲染造成的卡顿体验问题，不需要额外的数据处理，只需要通过简单的配置 <code>dataZoom</code> 缩放组件就可以实现</p><h4 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h4><ul><li><p>无法进行全局概览数据，只能分段查看数据</p></li><li><p>可能需要根据数据量动态的配置属性值，start、end、minSpan 和 maxSpan</p></li></ul><h2 id="四-方案-降采样策略" tabindex="-1">四. 方案：降采样策略 <a class="header-anchor" href="#四-方案-降采样策略" aria-label="Permalink to &quot;四. 方案：降采样策略&quot;">​</a></h2><h3 id="_1-方案简介-1" tabindex="-1">1. 方案简介 <a class="header-anchor" href="#_1-方案简介-1" aria-label="Permalink to &quot;1. 方案简介&quot;">​</a></h3><p>ECharts 还提供了另一种提高渲染性能的方式，那就是降采样策略 <code>series-line.sampling</code>，通过配置<code>sampling</code>采样参数可以告诉 ECharts 按照哪一种采样策略，可以有效的优化图表的绘制效率。</p><p>折线图在数据量远大于像素点时候的降采样策略，开启后可以有效的优化图表的绘制效率，默认关闭，也就是全部绘制不过滤数据点。</p><h3 id="_2-实现步骤-1" tabindex="-1">2. 实现步骤 <a class="header-anchor" href="#_2-实现步骤-1" aria-label="Permalink to &quot;2. 实现步骤&quot;">​</a></h3><p><code>sampling</code> 属性提供了几个可选值，配置不同的值可以有效的优化图表的绘制效率，如下所示：</p><p><code>sampling</code> 的可选值有以下几个：</p><ul><li><code>lttb</code>: 采用 <code>Largest-Triangle-Three-Bucket</code> 算法，可以最大程度保证采样后线条的趋势，形状和极值。</li><li><code>average</code>: 取过滤点的平均值</li><li><code>min</code>: 取过滤点的最小值</li><li><code>max</code>: 取过滤点的最大值</li><li><code>minmax</code>: 取过滤点绝对值的最大极值 (从 v5.5.0 开始支持)</li><li><code>sum</code>: 取过滤点的和</li></ul><p>具体方案是配置 <code>series</code> 的 <code>sampling</code>，最终表示使用的是 ECharts 的哪一种采样策略，ECharts 内部机制实现优化策略：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> option </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  series: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;line&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sampling: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lttb&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 最大程度保证采样后线条的趋势，形状和极值。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>以上代码表示使用 &#39;lttb&#39; 降采样策略，实现降低性能消耗的效果。</p><h3 id="_3-实际效果-1" tabindex="-1">3. 实际效果 <a class="header-anchor" href="#_3-实际效果-1" aria-label="Permalink to &quot;3. 实际效果&quot;">​</a></h3><p>通过配置 <code>series</code> 的 <code>sampling</code> 为 <code>lttb</code> 模式，对比之前的曲线，可以最大程度保证采样后线条的趋势，形状和极值，如下图所示：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d391417b17d34c3e843851ae57bbad13~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=907&amp;h=848&amp;s=102174&amp;e=png&amp;b=ffffff" alt="image.png"></p><p>对比之前的效果，可以说是体验效果有质的飞跃，最终实现效果图如下图所示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a6d74c6d6a6482bbfb49911485e8d34~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=800&amp;h=831&amp;s=1388782&amp;e=gif&amp;f=98&amp;b=fefefe" alt="ECharts 大数据3.gif"></p><h3 id="_4-优缺点-1" tabindex="-1">4. 优缺点 <a class="header-anchor" href="#_4-优缺点-1" aria-label="Permalink to &quot;4. 优缺点&quot;">​</a></h3><h4 id="优点-1" tabindex="-1">优点 <a class="header-anchor" href="#优点-1" aria-label="Permalink to &quot;优点&quot;">​</a></h4><ul><li>使用简单，ECharts 内部降采样算法，效果显著</li><li>可以完整的将曲线趋势展示出来，和原曲线基本一致</li></ul><h4 id="缺点-1" tabindex="-1">缺点 <a class="header-anchor" href="#缺点-1" aria-label="Permalink to &quot;缺点&quot;">​</a></h4><ul><li>并不是展示的所有点，会删除一些无用的点，保证渲染性能</li><li>最大程度保证采样后线条的趋势，形状和极值，但是某些情况下，极值有偏差，测试中发现</li></ul><p>说明：本项目只使用了 <code>lttb</code> 和 <code>minmax</code> 这两种采样策略，相对比来说 <code>lttb</code> 有更流程的性能体验，但是测试中发现在一些情况下，极值出现偏差，也就是最大值最小值显示失误，但是使用 <code>minmax</code> 正常，原因未排查，如下图所示：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/40cf813dbfb04a08b8db1b800c2ceea2~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=837&amp;h=850&amp;s=97998&amp;e=png&amp;b=fefefe" alt="image.png"></p><blockquote><p>其他的降采样策略并不适合本项目，因此没有进行详细测试，感兴趣的同学可以按需进行研究！</p></blockquote><h2 id="五-其他拓展" tabindex="-1">五. 其他拓展 <a class="header-anchor" href="#五-其他拓展" aria-label="Permalink to &quot;五. 其他拓展&quot;">​</a></h2><h3 id="_1-服务器提速" tabindex="-1">1. 服务器提速 <a class="header-anchor" href="#_1-服务器提速" aria-label="Permalink to &quot;1. 服务器提速&quot;">​</a></h3><ul><li><p>优化数据结构，精简数据返回字段，降低数据包大小</p></li><li><p>开启 gzip 压缩，加快海量数据下载速度</p></li></ul><h3 id="_2-数据处理" tabindex="-1">2. 数据处理 <a class="header-anchor" href="#_2-数据处理" aria-label="Permalink to &quot;2. 数据处理&quot;">​</a></h3><ul><li><p>数据聚合：对于特别密集的数据点，使用聚合算法在源头对数据降采样，进行数据聚合，减少渲染的数据点数量。</p></li><li><p>数据过滤：数据中存在一些无关的信息或数据噪音，服务端对数据进行过滤，只需要保留有用的数据即可，剔除无效的数据。</p></li></ul><h2 id="六-总结" tabindex="-1">六. 总结 <a class="header-anchor" href="#六-总结" aria-label="Permalink to &quot;六. 总结&quot;">​</a></h2><p>在本篇文章中，我主要介绍了在实际项目开发中，我遇到的 ECharts 渲染十万级+数据的性能优化方案，由此作为文章总结分享出来，主要想和大家交流一下如何解决在海量数据可视化中面临的性能挑战。</p><p>在实际应用中，通过<strong>数据分段渲染</strong>和<strong>官方降采样</strong>的实现方案，可以看到在优化渲染海量数据时，它们是有效的策略之一。除了以上介绍的方式外，其实还可以结合<strong>数据聚合处理</strong>、<strong>延迟渲染</strong>、<strong>硬件加速</strong>、<strong>Web Worker</strong> 等多种优化手段，综合运用以实现更高效的海量数据可视化展示。</p><p>渲染十万级+的数据量是一个挑战性的任务，但通过合理的优化方案和技巧，可以提升页面性能，改善用户体验，实现数据可视化的更好展示效果。</p><p>本篇文章是在实际项目中的一些实践以及思考，对于 ECharts 海量数据的渲染性能优化，还有更多的可能性，也还有更多优秀的实现方案。如果你有更好的实现方案，欢迎分享交流。</p><h2 id="资源文档" tabindex="-1">资源文档 <a class="header-anchor" href="#资源文档" aria-label="Permalink to &quot;资源文档&quot;">​</a></h2><ul><li><p><a href="https://echarts.apache.org/zh/option.html#dataZoom" target="_blank" rel="noreferrer">ECharts dataZoom 配置文档</a></p></li><li><p><a href="https://echarts.apache.org/zh/option.html#series-line.sampling" target="_blank" rel="noreferrer">ECharts series-line.sampling 降采样</a></p></li><li><p><a href="https://echarts.apache.org/zh/api.html#echartsInstance.appendData" target="_blank" rel="noreferrer">ECharts 分片加载数据和增量渲染</a></p></li></ul>`,73);function r(o,c,d,k,E,g){const a=l("ArticleFooter");return p(),i("div",null,[h,e(a,{link:"https://juejin.cn/post/7350152569756680227"})])}const u=s(n,[["render",r]]);export{b as __pageData,u as default};
