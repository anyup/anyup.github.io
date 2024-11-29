import{_ as e,c as o,I as i,aU as t,o as n,E as p}from"./chunks/framework.BTzRA3v_.js";const g=JSON.parse('{"title":"突发！如何应对微信小程序与公众号下发统一消息接口调整","description":"","frontmatter":{"title":"突发！如何应对微信小程序与公众号下发统一消息接口调整"},"headers":[],"relativePath":"zh/blog/front-end/微信公众号，微信小程序与公众号下发统一消息接口调整.md","filePath":"zh/blog/front-end/微信公众号，微信小程序与公众号下发统一消息接口调整.md","lastUpdated":1727083629000}'),r={name:"zh/blog/front-end/微信公众号，微信小程序与公众号下发统一消息接口调整.md"},l=t('<h1 id="突发-如何应对微信小程序与公众号下发统一消息接口调整" tabindex="-1">突发！如何应对微信小程序与公众号下发统一消息接口调整 <a class="header-anchor" href="#突发-如何应对微信小程序与公众号下发统一消息接口调整" aria-label="Permalink to &quot;突发！如何应对微信小程序与公众号下发统一消息接口调整&quot;">​</a></h1><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2cb9c0e315b745a0b39c1008ad2f1d81~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=894&amp;h=382&amp;s=77633&amp;e=png&amp;b=fff7f6" alt="image.png"></p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>国庆节前夕，被同事突然 Q 到：“<strong>咱们的公众号消息推送是不是要修改？</strong>”，我一脸茫然，紧接着，他直接甩给我一个链接，我打开后一看。一瞬间快乐的心情完全被打乱了。</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b6718df0efd64a94886c4f4623e42f85~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1736&amp;h=802&amp;s=615476&amp;e=png&amp;b=feedeb" alt="image.png"></p><p>但是，不要慌，没什么大不了的，大不了国庆节三倍工资加班干完，哈哈哈...</p><p>这是一件什么事情呢，看下图：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ace5661e91fe4cfa85f32250d7dd3574~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2286&amp;h=892&amp;s=249290&amp;e=png&amp;b=ffffff" alt="image.png"></p><p>意思就是说：之前使用“<strong>微信公众号下发统一消息接口</strong>”的服务不让你用了，你需要换一种方式来实现它，微信官方还给出了适配指引！</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe9fb2ec414a4b9e9266768932a28228~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1932&amp;h=912&amp;s=135217&amp;e=png&amp;b=ffffff" alt="image.png"></p><p>看到这里，我只想说，wechat，你可以，仗势欺人是不？你考虑广大开发者了吗？你考虑广大的用户体验了吗？还声称是为了优化多个同一功能接口对开发者造成困扰？你这是专门给广大开发者造成困扰！</p><h2 id="进入正题" tabindex="-1">进入正题 <a class="header-anchor" href="#进入正题" aria-label="Permalink to &quot;进入正题&quot;">​</a></h2><p>以上也就是发发牢骚，我们毕竟是渺小的开发者，三言两语击不起几个浪花，懒得理我们。</p><p>牢骚发完，我们是不是该考虑一下如何适配了？毕竟国庆节还真不想加班！（内心深处：8 天假呢，可怎么耍啊？）</p><h3 id="时间线" tabindex="-1">时间线 <a class="header-anchor" href="#时间线" aria-label="Permalink to &quot;时间线&quot;">​</a></h3><p>微信团队是<strong>8 月 22 日</strong>发出的消息，说在<strong>9 月 20 日</strong>起将不能使用该功能，但是我发现的时候已经是<strong>9 月 25 日</strong>了，但是我们的推送消息依然可以使用（有点奇怪），说明还没有完全切换，可能考虑到我们的用户量比较大的原因？算了，不管这个了。</p><h3 id="如何做" tabindex="-1">如何做 <a class="header-anchor" href="#如何做" aria-label="Permalink to &quot;如何做&quot;">​</a></h3><p>紧接着，我仔细的研读了一下微信的这个文档，思考了一番，无非就是两种方案：</p><ol><li>彻底改正</li><li>还能救一下</li></ol><h2 id="方案一-彻底改正" tabindex="-1">方案一：彻底改正？ <a class="header-anchor" href="#方案一-彻底改正" aria-label="Permalink to &quot;方案一：彻底改正？&quot;">​</a></h2><p>其实我是倾向于彻底改正的，因为这样是最保险的方式，因为它是标准的推送功能。那就是标准化使用公众号模版消息接口，下面是重要的步骤：</p><ol><li>重新写个微信公众号 h5 页面，授权获取 jscode，再来换取公众号 openid。</li><li>使用 openid 按照文档下发微信公众号模版消息。</li></ol><h2 id="方案二-还能救一下" tabindex="-1">方案二：还能救一下？ <a class="header-anchor" href="#方案二-还能救一下" aria-label="Permalink to &quot;方案二：还能救一下？&quot;">​</a></h2><p>这种方案其实就是一个不想改的方案，虽然有自己的好处，但是不好的地方太大了，稍后再说，先说一下步骤：</p><h3 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h3><ol><li>必须有一个微信开放平台（需要收费，记得是 300 元？感觉就是为了 money）。</li><li>小程序与公众号同一主体。</li><li>小程序和公众号和微信开放平台关联。</li></ol><h3 id="实现步骤" tabindex="-1">实现步骤 <a class="header-anchor" href="#实现步骤" aria-label="Permalink to &quot;实现步骤&quot;">​</a></h3><p>准备好以上的工作后，可以进行曲折的适配工作了</p><ol><li>由于小程序和公众号都关联了微信开放平台，我们再次使用小程序微信登录时会多返回一个 unionid，通过这个 unionid 做关联。</li><li>获取微信公众号的关注列表，可以批量拿到关注人的 openid。</li><li>使用小程序 openid 通过 unionid 拿到对应的公众号的 openid，确认是同一个人。</li><li>使用公众号 openid 按照文档下发微信公众号模版消息。</li></ol><p>唉，真费劲，翻来覆去的最终还是拿到公众号 openid 下发模版消息，这方式真是够曲折的！！！</p><blockquote><p><strong>唯一性说明</strong>：</p><p>同一个用户，在同主体的小程序和公众号下，会有各自的 openid ，不相同，不能混用。</p><p>同一个用户，在同主体的小程序、公众号等下面只有 1 个 unionid，有多个 公众号 openid 和多个小程序 openid 。 unionid 是同主体应用下唯一身份证，可以查询对应的公众号 openid 和小程序 openid。因此，unionid 的覆盖率是最高的。</p><p><strong>当用户关注公众号</strong>，浏览公众号下面 H5 时，可以同时获取 unionid、公众号 openid。而浏览小程序时，可以同时获取小程序 unionid、openid。不管哪种操作都能拿到 unionid。</p><p><strong>在单个小程序或公众号里</strong>，openid 是唯一的。当同一个小程序主体下有多个小程序时，每个小程序有自己的 openid，因此需要 unionid 进行唯一身份标识，即：unionid 是同个主体下不同小程序的用户唯一标识。</p></blockquote><h2 id="着手实现" tabindex="-1">着手实现 <a class="header-anchor" href="#着手实现" aria-label="Permalink to &quot;着手实现&quot;">​</a></h2><p>以上两种方案都给整的明白的，那就开始着手实现吧！</p><p>虽然上述方案是有了，但是有一个问题，两种都有它各自的优缺点！</p><h3 id="彻底改正的方案" tabindex="-1">彻底改正的方案 <a class="header-anchor" href="#彻底改正的方案" aria-label="Permalink to &quot;彻底改正的方案&quot;">​</a></h3><ol><li>费时费力，几天时间完不成，前后端需重写，测试需要重测，bug 不可预测。</li><li>就算完成了，需要用户重新绑定，谈何用户体验？</li></ol><h3 id="还能救一下方案" tabindex="-1">还能救一下方案 <a class="header-anchor" href="#还能救一下方案" aria-label="Permalink to &quot;还能救一下方案&quot;">​</a></h3><ol><li>前端不用重写，后端需要改造，工作量不大，可以完成？</li><li>还是需要用户重新绑定，也无用户体验。</li><li>其实就是野路子，实现不标准，后面肯定需要重构。</li></ol><p>等等，我有一个更好的方式，可以让你安稳的度过中秋国庆双节假期！</p><h3 id="完美度过假期的方案" tabindex="-1">完美度过假期的方案 <a class="header-anchor" href="#完美度过假期的方案" aria-label="Permalink to &quot;完美度过假期的方案&quot;">​</a></h3><p>哈哈哈，这方案我喜欢！</p><p>把所有微信通知的修改为其他可用的通知方式，能保证让用户收到不就可以了？当然我们是改用的短信通知。</p><p>毕竟这个方案是保证能让<strong>开发者不用开发</strong>、<strong>测试不用测试</strong>、<strong>用户不用重新绑定</strong>的临时度过假期的方案，很开心！</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4787164c236b45c4aadf0a233a886c4f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=756&amp;h=723&amp;s=139530&amp;e=png&amp;b=fefefe" alt="image.png"></p><h2 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h2><p>以上就是双节前夕发生的一些趣味事情，那么接下来我会将两种方式的具体实现都会和大家探讨一下，敬请期待！</p><p>对于微信平台<strong>8 月 22 日</strong>发布的“小程序与公众号下发统一消息接口调整通知”，你是怎么看的？可以评论区“<strong>发泄</strong>”一下。如果你有更好的方案，欢迎联系我，我们共同探讨一下。</p><h3 id="彻底改正的方案已经出炉" tabindex="-1">彻底改正的方案已经出炉 <a class="header-anchor" href="#彻底改正的方案已经出炉" aria-label="Permalink to &quot;彻底改正的方案已经出炉&quot;">​</a></h3><p><a href="https://juejin.cn/post/7291133720903516219" target="_blank" rel="noreferrer">「应对微信调整」从零到一快速实现一个微信公众号授权项目</a></p><h3 id="微信官方公告" tabindex="-1">微信官方公告 <a class="header-anchor" href="#微信官方公告" aria-label="Permalink to &quot;微信官方公告&quot;">​</a></h3><p><a href="https://developers.weixin.qq.com/community/develop/doc/000ae8d6348af08e7030bc2546bc01" target="_blank" rel="noreferrer">微信公告链接：https://developers.weixin.qq.com</a></p>',51);function s(d,h,c,f,m,b){const a=p("ArticleFooter");return n(),o("div",null,[l,i(a,{link:"https://juejin.cn/post/7289339087289778217"})])}const _=e(r,[["render",s]]);export{g as __pageData,_ as default};
