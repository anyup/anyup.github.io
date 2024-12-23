import{_ as s,c as a,I as i,aU as e,o as n,E as r}from"./chunks/framework.CpXV_ol5.js";const D=JSON.parse('{"title":"前端性能优化 ｜ CDN缓存","description":"","frontmatter":{"title":"前端性能优化 ｜ CDN缓存"},"headers":[],"relativePath":"zh/blog/front-end/前端性能优化-CDN缓存.md","filePath":"zh/blog/front-end/前端性能优化-CDN缓存.md","lastUpdated":1727083629000}'),l={name:"zh/blog/front-end/前端性能优化-CDN缓存.md"},o=e('<h1 id="前端性能优化-cdn缓存" tabindex="-1">前端性能优化 ｜ CDN缓存 <a class="header-anchor" href="#前端性能优化-cdn缓存" aria-label="Permalink to &quot;前端性能优化 ｜ CDN缓存&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>CDN（Content Delivery Network）是一种分布式的网络架构，通过在全球各地部署节点服务器来快速传输和分发网络内容。CDN的主要目标是提供快速、可靠的内容传输，以提升用户体验。</p><p>本文主要从以下方面讲解CDN</p><ul><li>什么是CDN</li><li>CDN的作用</li><li>CDN的原理</li><li>CDN的使用场景</li></ul><h2 id="一、什么是-cdn" tabindex="-1">一、什么是 CDN <a class="header-anchor" href="#一、什么是-cdn" aria-label="Permalink to &quot;一、什么是 CDN&quot;">​</a></h2><h3 id="_1-cdn-的概念" tabindex="-1">1. CDN 的概念 <a class="header-anchor" href="#_1-cdn-的概念" aria-label="Permalink to &quot;1. CDN 的概念&quot;">​</a></h3><p>CDN是内容分发网络（Content Delivery Network）的缩写，是一种通过在全球各地分布的服务器上存储和传输网络资源（如 HTML 页面、图片、视频、应用程序等）的技术架构。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa90159c5b4d4526bc56e72103f7041b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=778&amp;h=433&amp;e=png&amp;b=fefefe" alt="image.png"></p><h3 id="_2-cdn-系统的构成" tabindex="-1">2. CDN 系统的构成 <a class="header-anchor" href="#_2-cdn-系统的构成" aria-label="Permalink to &quot;2. CDN 系统的构成&quot;">​</a></h3><ol><li><p><strong>原始服务器（Origin Server）</strong>：也称为源服务器，是存储网站内容（如HTML、CSS、JavaScript、图片、视频等）的主要服务器。</p></li><li><p><strong>节点服务器（Edge Servers）</strong>：也称为边缘服务器或CDN节点，分布在全球各个地理位置。</p></li><li><p><strong>节点选择器/调度器（Node Selector/Load Balancer）</strong>：是CDN系统的核心组件之一，用于选择与用户最接近的节点服务器。</p></li><li><p><strong>缓存（Cache）</strong>：CDN节点服务器上的缓存用于存储网站内容的副本。当用户请求访问网站的内容时，CDN节点会先检查自己的缓存中是否存在所需内容的副本。</p></li><li><p><strong>内容传输网络（Content Delivery Network）</strong>：CDN网络是由一系列节点服务器组成的分布式网络，这些节点服务器相互连接，以实现内容的快速传输和访问。</p></li><li><p><strong>内容管理系统（Content Management System）</strong>：部分CDN系统还提供内容管理系统，用于帮助网站管理员管理和控制网站内容的分发、缓存和更新等操作。</p></li></ol><p>这些组件共同协作，构成了一个完整的CDN系统，以提供快速、高效和可靠的内容分发服务。</p><h2 id="二、cdn-的作用" tabindex="-1">二、CDN 的作用 <a class="header-anchor" href="#二、cdn-的作用" aria-label="Permalink to &quot;二、CDN 的作用&quot;">​</a></h2><p>CDN一般会用来<strong>托管Web资源</strong> (包括文本、图片和脚本等)，<strong>可供下载的资源</strong>(媒体文件、软件、文档等)，<strong>应用程序 (门户网站）</strong> 等 。</p><ul><li><p><strong>加速网站访问</strong>：通过将网站的动态内容缓存在离用户最近的节点服务器上，实现就近访问，减少内容传输的距离和网络延迟。大幅提高网站的访问速度，加快加载，提升用户体验。</p></li><li><p><strong>节约网络带宽</strong>：将网站的静态资源缓存在多个节点服务器上，当用户访网站时，大部分的资源可以从离用户较近的节点服务器上获取，少了对原始服务器的访问。减轻了源服务器的负载压力，节约了网络带宽的使用，提高了整体的网络效率。</p></li><li><p><strong>提高网站的可用性和稳定性</strong>：通过分布在全球各地的节点服务器，在原始服务器发生故障或服务不可用时，可以自动切换到其他可用的节点服务器，确保网站内容的可持续提供。这种容灾备份机制可以提高网站的可用性和稳定性，减少中断的风险。</p></li><li><p><strong>抵御网络攻击</strong>：由于CDN节点分布广泛，网络流量可以在多个节点服务器上进行均衡分散，有效减轻了源服务器的负载和DDoS攻击带来的影响。CDN还可以使用如防火墙、入侵检测系统等一些安全机制和防御措施，保护网站免受恶意攻击。</p></li><li><p><strong>提供高质量的视频内容传输</strong>：通过将视频内容缓存在离用户最近的节点服务器上，CDN可以提供更快速、稳定的视频播放体验，避免视频卡顿、加载缓慢等问题。</p></li></ul><p>综上所述，CDN的作用是提供快速、可靠的内容分发服务，加速网站访问、节省网络带宽、提高可用性和稳定性，抵御网络攻击，提供高质量的视频内容传输，从而改善用户体验，提升网站的性能和效果。</p><h2 id="三、cdn-的原理" tabindex="-1">三、CDN 的原理 <a class="header-anchor" href="#三、cdn-的原理" aria-label="Permalink to &quot;三、CDN 的原理&quot;">​</a></h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0210f18763c04bf0a90148970d6cc7ea~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1328&amp;h=610&amp;e=png&amp;b=fefefe" alt="image.png"></p><p>以用户访问浏览器某网址（www.example.com） 时为例，CDN的加速流程通常包括以下几个步骤：</p><ol><li><p><strong>域名解析</strong>：当用户在浏览器中输入网址并按下回车键后，浏览器会向本地DNS服务器发送域名解析，本地DNS服务器会返回CDN的负载均衡器的地址。</p></li><li><p><strong>负载均衡</strong>：浏览器根据负载均衡器的<strong>IP地址</strong>，向CDN负载均衡器发送请求。载均衡器的作用是选择一个最合适的CDN节点服务器来响应用户的请求。</p></li><li><p><strong>缓存判断</strong>：<strong>CDN节点服务器</strong>收到用户的请求后，会先判断请求资源是否缓存在其本地服务器上。如果有，则直接返回缓的资源，这样可以大大提高响应速度和节省带宽消耗。如果没有缓存的资源，则进入下一步。</p></li><li><p><strong>源服务器回源</strong>：当节点服务器没有缓存所需的资源时，会向源服务器发送请求，获取资源的原始本。源服务器可以是网站的服务器、视频流媒体的视频源服务器等，根据不同的业务需求而定。</p></li><li><p><strong>传输加速</strong>：源服务器将请求资源发送给节点服务器后，节点服务器会将资源按照<strong>缓存策略</strong>进行存储，并将资源回传给用户的浏览器。由于CDN节点服务器通常位于离<strong>用户更近</strong>的一方，因此<strong>传输时间较短</strong>，用户可以更快地获取请求的资源。</p></li><li><p><strong>动态内容回源</strong>：对于一些动态生成的内容或需要实时更新的资源（如用户个人信息、实时天气数据等），CDN节点服务器需要及时<strong>回源</strong>更新这些内容，以保证数据的实时性和准确性。</p></li></ol><p>总的来说，CDN加速流程包括<strong>域名解析</strong>、<strong>负载均衡</strong>、<strong>缓存判断</strong>、<strong>源服务器回源</strong>、<strong>传输加速</strong>和<strong>动态内容回源</strong>等步骤。通过减少访问迟、节省带宽消耗和提供更好的用户体验，CDN可以提供快速、稳定和可靠的内容分发服务。</p><h2 id="四、cdn-的使用场景" tabindex="-1">四、CDN 的使用场景 <a class="header-anchor" href="#四、cdn-的使用场景" aria-label="Permalink to &quot;四、CDN 的使用场景&quot;">​</a></h2><p>前端使用CDN可以使网站或应用的静态资源（如样式表、JavaScript文件、字体、图像等）从离用户更近的节点服务器加载，从而提高网页加载速度和用户体验。以下是前端使用CDN的几个常见实例：</p><h3 id="_1-加载公共库和框架" tabindex="-1">1. 加载公共库和框架 <a class="header-anchor" href="#_1-加载公共库和框架" aria-label="Permalink to &quot;1. 加载公共库和框架&quot;">​</a></h3><p>许多前端开发者使用公共库和框架来加速开发和提供更好的用户体。常见的如jQuery、React、Vue.js等。通过使用CDN加载这些公库，可以将它们缓存在CDN的节点服务器上，提供更快速的加载和传输，无需在本地部署维护这些库的副本。</p><p>例如，使用CDN jQuery库：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.jsdelivr/npm/jquery@3.60/dist/jquery.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="_2-加载图标字体" tabindex="-1">2. 加载图标字体 <a class="header-anchor" href="#_2-加载图标字体" aria-label="Permalink to &quot;2. 加载图标字体&quot;">​</a></h3><p>图标字通常用于网站的图标展示，如Font Awesome、Bootstrap等使用CDN加载这些图标字体，可以减少字体的加载时间和带宽消耗。例如，使用CDN加载Font图标字体：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylesheet&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/font-awesome5.15.4/css/all.min.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h3 id="_3-加载样式" tabindex="-1">3. 加载样式 <a class="header-anchor" href="#_3-加载样式" aria-label="Permalink to &quot;3. 加载样式&quot;">​</a></h3><p>使用CDN加载常用的样式表文件，如Normalize.css、Bootstrap等，可以降低式表文件的加载时间和提高页的兼容性。例如，使用CDN加载Normalize样式表：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylesheet&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/normalize@8.0.1/normalize.min.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h3 id="_4-加载javascript库和件" tabindex="-1">4. 加载JavaScript库和件 <a class="header-anchor" href="#_4-加载javascript库和件" aria-label="Permalink to &quot;4. 加载JavaScript库和件&quot;">​</a></h3><p>如果网站或应用使用了一些常见的JavaScript库和插件，如Moment.js、Swiper等，可以使用CDN加载它们，避免自行下载和部署这些文件。例如使用CDN加载Moment.js：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;://cdn.jsdelivr.net/npm/moment@2.29.1/moment.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="_5-加载图片cdn" tabindex="-1">5. 加载图片CDN <a class="header-anchor" href="#_5-加载图片cdn" aria-label="Permalink to &quot;5. 加载图片CDN&quot;">​</a></h3><p>我们打开稀土掘金网站，随便打开一篇文章，我们可以很多图片都是从 <strong>CDN 服务器</strong>上请求来的，这极大的提高了图片的响应速度。</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee1e9881006347b0b72e27c914157739~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1119&amp;h=514&amp;e=png&amp;b=fdfdfd" alt="image.png"></p><h2 id="五、常用的前端-cdn-库" tabindex="-1">五、常用的前端 CDN 库 <a class="header-anchor" href="#五、常用的前端-cdn-库" aria-label="Permalink to &quot;五、常用的前端 CDN 库&quot;">​</a></h2><table><thead><tr><th>名称</th><th>优势</th><th>官网</th></tr></thead><tbody><tr><td>jsDelivr</td><td>基于 MaxCDN 的一个免费开源的 CDN 解决方案</td><td><a href="http://www.jsdelivr.com/" target="_blank" rel="noreferrer"> http://www.jsdelivr.com </a></td></tr><tr><td>unpkg</td><td>一个快速、全球性的内容分发网络(CDN)，专门用于托管npm上的所有内容。格式：unpkg.com/:package@:version/:file</td><td><a href="https://unpkg.com/" target="_blank" rel="noreferrer"> https://unpkg.com/ </a></td></tr><tr><td>CDNJS</td><td>提供非常完整的 JavaScript 库</td><td><a href="http://www.cdnjs.com/" target="_blank" rel="noreferrer"> http://www.cdnjs.com </a></td></tr><tr><td>BootCDN</td><td>目前前端开源的项目几乎都涵盖了，支持http和https</td><td><a href="http://www.bootcdn.cn/" target="_blank" rel="noreferrer"> http://www.bootcdn.cn </a></td></tr><tr><td>Staticfile CDN</td><td>基于 CDN 加速由七牛云提供包括 JS、CSS、image 和 swf 等静态文件的，支持http和https</td><td><a href="https://www.staticfile.org/" target="_blank" rel="noreferrer"> https://www.staticfile.org </a></td></tr><tr><td>jQuery CDN</td><td>一个只有 jQuery 的 CDN</td><td><a href="http://code.jquery.com/" target="_blank" rel="noreferrer"> http://code.jquery.com </a></td></tr><tr><td>百度云资源站</td><td>基于百度云的资源站，各种开发语言的 SDK 均可以免费下载</td><td><a href="https://cloud.baidu.com/doc/Developer/index.html" target="_blank" rel="noreferrer"> https://cloud.baidu.com/doc/Developer/index.html </a></td></tr></tbody></table><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>CDN主要用于在全球范围内加速静态内容、动态内容和流媒体的传输。通过在各地部署节点服务器，将内容缓存到离用户更近的服务器上，从而提供更快速、可靠和高效的内容传输。</p><p>CDN缓存在前端性能优化中的主要用于<strong>加速静态资源加载</strong>、<strong>减轻服务器负载</strong>，以及<strong>缓解网络拥塞</strong>等方面。合理利用CDN缓存，能够大幅提升网页性能，提高用户体验。</p>',44);function p(h,d,c,g,k,C){const t=r("ArticleFooter");return n(),a("div",null,[o,i(t,{link:["juejin::https://juejin.cn/post/7358289840267870262","weixin::https://mp.weixin.qq.com/s/mh-WfE951CMAomf2lyeRfg"]},null,8,["link"])])}const u=s(l,[["render",p]]);export{D as __pageData,u as default};
