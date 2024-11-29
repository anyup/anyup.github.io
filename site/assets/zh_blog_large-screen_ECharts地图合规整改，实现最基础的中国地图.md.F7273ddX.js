import{_ as a,c as i,I as n,aU as t,o as h,E as p}from"./chunks/framework.CpXV_ol5.js";const u=JSON.parse('{"title":"分享ECharts地图合规整改经验，并实现一个最基础的中国地图","description":"","frontmatter":{"title":"分享ECharts地图合规整改经验，并实现一个最基础的中国地图"},"headers":[],"relativePath":"zh/blog/large-screen/ECharts地图合规整改，实现最基础的中国地图.md","filePath":"zh/blog/large-screen/ECharts地图合规整改，实现最基础的中国地图.md","lastUpdated":1725606759000}'),l={name:"zh/blog/large-screen/ECharts地图合规整改，实现最基础的中国地图.md"},e=t(`<h1 id="分享echarts地图合规整改经验-并实现一个最基础的中国地图" tabindex="-1">分享ECharts地图合规整改经验，并实现一个最基础的中国地图 <a class="header-anchor" href="#分享echarts地图合规整改经验-并实现一个最基础的中国地图" aria-label="Permalink to &quot;分享ECharts地图合规整改经验，并实现一个最基础的中国地图&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>早在 2019 年的时候，我们公司就使用 ECharts 的开发了许多的可视化大屏项目，其中主要用到的组件有：<strong>折线图</strong>、<strong>柱状图</strong>、<strong>饼图</strong>、<strong>坐标图</strong>、<strong>地图</strong>、<strong>线图</strong>等等，这些图表也是我们在使用 ECharts 开发大屏项目中最常使用的图表类型，因此掌握这些图表的开发技巧是必不可少的。</p><p>但是，项目近期暴露出来的一个问题，中国地图展示不合规，需要整改，避免涉及一些法务问题。如下所示：</p><p align="center"><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cb09d647fac546fbb796d0ff45588ab9~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=627&amp;h=420&amp;s=123543&amp;e=png&amp;b=050f31" alt="image.png"></p><p>以上的地图就是不规范的，可能不经常开发地图的不太容易察觉，因为 ECharts 的可视化社区里提供的 demo 展示基本上就是同样的效果。大部分 option 复制粘贴到自己项目中，修改一下就直接使用了，但是涉及到中国地图，我们就要注意了：需要修改为下面的效果才是正确的，必须要将将整个中国地图的领土边界范围描绘清楚！必须要将南海的领土边界描绘清楚。</p><p align="center"><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/21bdd88ebf8e467c856b737ba0f6082c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=593&amp;h=440&amp;s=94104&amp;e=png&amp;b=021021" alt="image.png"></p><blockquote><p>原则： 中国，一点都不能少</p></blockquote><p>因此本篇文章的主要目的是总结项目经验，解决了中国地图展示不合规的问题，并输出一些经验，说明如何利用 ECharts 按照一套标准化的流程开发一个合规的中国地图。</p><h2 id="echarts-简介" tabindex="-1">ECharts 简介 <a class="header-anchor" href="#echarts-简介" aria-label="Permalink to &quot;ECharts 简介&quot;">​</a></h2><p>ECharts 是一个基于 JavaScript 的开源可视化图表库，提供了丰富的图表类型和交互功能。其中，地图组件是 ECharts 中非常实用的一个功能，可以帮助我们快速搭建数字信息可视化页面。</p><p>其中，在这些可视化组件中，地图组件是 ECharts 的一大亮点，使得在数据可视化中展示地理信息变得简单而直观。 本文将重点介绍如何利用 ECharts 地图组件展示中国地图的开发方法，包括加载地图、自定义地图样式以及添加各种数据标记等操作。</p><h2 id="开发中国地图" tabindex="-1">开发中国地图 <a class="header-anchor" href="#开发中国地图" aria-label="Permalink to &quot;开发中国地图&quot;">​</a></h2><p>为了开发中国地图展示，我们需要以下基本的步骤进行开发：</p><h3 id="_1-获取-echarts" tabindex="-1">1. 获取 ECharts <a class="header-anchor" href="#_1-获取-echarts" aria-label="Permalink to &quot;1. 获取 ECharts&quot;">​</a></h3><p>在引入 ECharts 库之前，请确保你已经下载了最新版本的 ECharts，在项目中进行引入。 有以下几种引入方式</p><h4 id="从-github-获取" tabindex="-1">从 GitHub 获取 <a class="header-anchor" href="#从-github-获取" aria-label="Permalink to &quot;从 GitHub 获取&quot;">​</a></h4><p>在<a href="https://github.com/apache/echarts" target="_blank" rel="noreferrer">apache/echarts</a>  项目的  <a href="https://github.com/apache/echarts/releases" target="_blank" rel="noreferrer">release</a>  页面可以找到各个版本的链接。下载后导入本地项目中即可使用。</p><h4 id="从-npm-获取" tabindex="-1">从 npm 获取 <a class="header-anchor" href="#从-npm-获取" aria-label="Permalink to &quot;从 npm 获取&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> echarts</span></span></code></pre></div><h4 id="从-cdn-获取" tabindex="-1">从 CDN 获取 <a class="header-anchor" href="#从-cdn-获取" aria-label="Permalink to &quot;从 CDN 获取&quot;">​</a></h4><p>从第三方 CDN 网站 <a href="https://cdnjs.com/libraries/echarts" target="_blank" rel="noreferrer">cdnjs</a> 进行引入</p><h3 id="_2-获取-geojson" tabindex="-1">2. 获取 geoJson <a class="header-anchor" href="#_2-获取-geojson" aria-label="Permalink to &quot;2. 获取 geoJson&quot;">​</a></h3><p>为了展示中国地图，你还需要下载中国地图的 JSON 数据文件。你可以在 ECharts 的官方网站或 GitHub 上找到并下载这些文件。</p><blockquote><p>特别注意：由于在之前开发地图的时候，项目中大部分 echarts 组件都是基于可视化社区 Demo 的基础上进行开发的，链接如下：</p><p><a href="https://www.makeapie.cn/echarts" target="_blank" rel="noreferrer">ECharts 可视化社区</a></p><p>其实这里的地图展示相对来说已经过时了，地图加载的 JSON 也已经过时了，大家可以进行参考但是需要慎用生产。</p></blockquote><p>因此在以后的项目开发中，我们需要使用最新的 JSON 文件，那么我们需要在哪里进行获取呢？我们可以在一些其他网站获取最新的 geoJson，比如：通过<a href="https://datav.aliyun.com/portal/school/atlas/area_selector" target="_blank" rel="noreferrer">阿里云 DataV 数据可视化平台</a>也可以下载最新的 json 数据文件</p><p>如下图所示，选择数据版本后，点击页面上的下载按钮后即可以下载 json 文件</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dbc0e54a906f465c9e337ba8984b20f8~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1190&amp;h=678&amp;s=268279&amp;e=png&amp;b=f9f6f3" alt="image.png"></p><h3 id="_3-创建-html-页面并引入-echarts" tabindex="-1">3. 创建 HTML 页面并引入 ECharts <a class="header-anchor" href="#_3-创建-html-页面并引入-echarts" aria-label="Permalink to &quot;3. 创建 HTML 页面并引入 ECharts&quot;">​</a></h3><p>在 HTML 页面中创建一个容器元素，用于承载地图。然后，在页面头部或 scripts 部分引入 ECharts 库的 JavaScript 文件，确保可以正常使用 ECharts 的功能。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;viewport&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;中国地图&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- 主页面 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- jquery 库 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- echarts 库 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="_4-注册地图" tabindex="-1">4. 注册地图 <a class="header-anchor" href="#_4-注册地图" aria-label="Permalink to &quot;4. 注册地图&quot;">​</a></h3><p>在 JavaScript 中，通过 ECharts 的 <code>setOption</code> 方法来配置地图组件，并指定使用中国地图。示例代码如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 初始化 ECharts 实例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myChart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> echarts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echarts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">registerMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;china&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, json);</span></span></code></pre></div><p>以上代码中，我们首先初始化了一个 ECharts 实例，并指定了容器元素的 id。然后，通过 <code>setOption</code> 方法设置地图组件的相关配置，其中 <code>map</code> 属性指定了使用的地图类型为 &quot;china&quot;，即中国地图。</p><h3 id="_5-设置-option" tabindex="-1">5. 设置 option <a class="header-anchor" href="#_5-设置-option" aria-label="Permalink to &quot;5. 设置 option&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> option</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 地理坐标系组件用于地图的绘制</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  geo: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 使用 registerMap 注册的地图名称。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    map: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;china&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  series: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;map&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      map: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;china&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myChart.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setOption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(option, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7682d3251314d6c8924640be914de92~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=840&amp;h=719&amp;s=83648&amp;e=gif&amp;f=28&amp;b=fafafa" alt="record.gif"></p><h2 id="个性化设置" tabindex="-1">个性化设置 <a class="header-anchor" href="#个性化设置" aria-label="Permalink to &quot;个性化设置&quot;">​</a></h2><p>ECharts 提供了丰富的配置选项，可以自定义地图的样式。你可以设置地图的<strong>颜色</strong>、<strong>边框</strong>、<strong>选中样式</strong>等，以便更好地展示地理数据。</p><h3 id="_1-设置区域颜色" tabindex="-1">1. 设置区域颜色 <a class="header-anchor" href="#_1-设置区域颜色" aria-label="Permalink to &quot;1. 设置区域颜色&quot;">​</a></h3><p>通过 <code>itemStyle</code> 属性设置了地图区域的颜色和边界的颜色。<code>label</code> 属性用于设置地图标注的字体颜色。</p><p>如下面代码所示：设置区域颜色为绿色，省份边界描边的颜色为蓝色</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myChart.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setOption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  geo: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      show: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#666666&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 地图区域的多边形 图形样式。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    itemStyle: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 地图区域的颜色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      areaColor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#71d5a1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 绿色</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 图形的描边颜色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      borderColor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#2979ff&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 蓝色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0e4710849b8479cbd9ffd6f1af9b54d~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=780&amp;h=688&amp;s=80486&amp;e=png&amp;b=ffffff" alt="image.png"></p><h3 id="_2-设置鼠标指向样式" tabindex="-1">2. 设置鼠标指向样式 <a class="header-anchor" href="#_2-设置鼠标指向样式" aria-label="Permalink to &quot;2. 设置鼠标指向样式&quot;">​</a></h3><p>通过 <code>emphasis</code> 属性设置高亮状态下的多边形和标签样式，<code>label</code> 属性用于设置地图标注的字体颜色</p><p>如下面代码所示：设置高亮状态下区域颜色为黄色，省份边界描边的颜色为深黄色，高亮字体为黄色</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myChart.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setOption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  geo: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 设置高亮状态下的多边形和标签样式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    emphasis: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 设置区域样式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      itemStyle: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        areaColor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#ffff99&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 黄色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        borderColor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#f29100&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 描边颜色黄色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 设置字体</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      label: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fontSize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 16px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#f29100&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 黄色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/25c14969fe0e473f9ce5fb4670b22f28~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=879&amp;h=699&amp;s=151568&amp;e=gif&amp;f=37&amp;b=fefefe" alt="record.gif"></p><h3 id="_3-设置地图缩放及拖动支持" tabindex="-1">3. 设置地图缩放及拖动支持 <a class="header-anchor" href="#_3-设置地图缩放及拖动支持" aria-label="Permalink to &quot;3. 设置地图缩放及拖动支持&quot;">​</a></h3><p>通过 <code>roam</code> 属性设置为<code>true</code>，来开启鼠标缩放和平移漫游。也可以设置成 <code>scale</code> 或者 <code>move</code>单独开启某一种效果。</p><p>如下面代码所示：开启鼠标缩放和平移漫游</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myChart.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setOption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 地理坐标系组件用于地图的绘制</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  geo: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 是否开启鼠标缩放和平移漫游。默认不开启。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 如果只想要开启缩放或者平移，可以设置成 &#39;scale&#39; 或者 &#39;move&#39;。设置成 true 为都开启</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    roam: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/70ff9743dcfa4e5680e69332a38f296e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1139&amp;h=684&amp;s=502774&amp;e=gif&amp;f=33&amp;b=fefefe" alt="record.gif"></p><h3 id="_4-添加数据标记" tabindex="-1">4. 添加数据标记 <a class="header-anchor" href="#_4-添加数据标记" aria-label="Permalink to &quot;4. 添加数据标记&quot;">​</a></h3><p>在地理信息可视化中，常常需要在地图上添加数据标记，以突出显示特定的地理数据。ECharts 地图组件提供了多种方式来添加数据标记。</p><p>以下是一个简单的示例：通过定义<code>scatter</code>来定义点位</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myChart.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setOption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  series: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;map&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      map: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;china&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      geoIndex: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      roam: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scatter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      coordinateSystem: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;geo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      data: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;北京&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">116.4074</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">39.9042</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;上海&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">121.4737</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">31.2304</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;广州&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">113.2644</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23.1292</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 更多数据...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>通过上述代码，我们通过添加 <code>scatter</code> 类型的系列来实现数据标记。<code>coordinateSystem</code> 属性指定了使用地理坐标系进行定位。<code>data</code> 属性用于设置数据标记的位置，这里的数据以经纬度的形式表示。</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0cb0bbb7f38a46bd8829f2801d51514b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=801&amp;h=691&amp;s=82119&amp;e=png&amp;b=ffffff" alt="image.png"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>本篇文章简要介绍了使用 ECharts 地图组件展示中国地图数据的开发方法及开发流程。</p><p>从最基本的获取 ECharts 文件及 geoJson 到加载一个最简单的中国地图，再到自定义地图样式以及添加数据标记等操作。到这里，我们都应该了解了众多地图是如何开发渲染的，</p><p>当然，这只是最简单、最基础的开发地图的流程，ECharts 的配置项手册有大量的属性，提供给开发者来配置图表，通过合理运用 ECharts 的功能和配置选项，我们可以打造更加出色的中国地图展示效果。</p><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><p>以上所用的所有代码已经上传到GitHub，有需要的同学可以下载参考：</p><p><a href="https://github.com/anyup/juejin-up/tree/master/src/echarts" target="_blank" rel="noreferrer">获取 GitHub 源码</a></p><h2 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-label="Permalink to &quot;参考文档&quot;">​</a></h2><p><a href="https://www.makeapie.cn/echarts" target="_blank" rel="noreferrer">ECharts 可视化社区</a></p><p><a href="https://echarts.apache.org/zh/index.html" target="_blank" rel="noreferrer">ECharts 官方网站</a></p><p><a href="https://echarts.apache.org/zh/option.html#title" target="_blank" rel="noreferrer">ECharts 配置项手册</a></p><p><a href="https://echarts.apache.org/handbook/zh/basics/release-note/v5-upgrade-guide/" target="_blank" rel="noreferrer">ECharts 5 升级指南</a></p>`,73);function k(r,E,d,g,c,o){const s=p("ArticleFooter");return h(),i("div",null,[e,n(s,{link:"https://juejin.cn/post/7313742254144880676"})])}const m=a(l,[["render",k]]);export{u as __pageData,m as default};
