import{_ as i,c as a,I as n,aU as h,o as l,E as t}from"./chunks/framework.BTzRA3v_.js";const F=JSON.parse('{"title":"JS设计模式之“分即是合” - 建造者模式","description":"","frontmatter":{"title":"JS设计模式之“分即是合” - 建造者模式"},"headers":[],"relativePath":"zh/blog/design-pattern/创建型-建造者模式.md","filePath":"zh/blog/design-pattern/创建型-建造者模式.md","lastUpdated":1727083629000}'),p={name:"zh/blog/design-pattern/创建型-建造者模式.md"},k=h(`<h1 id="创建型-建造者模式" tabindex="-1">创建型 - 建造者模式 <a class="header-anchor" href="#创建型-建造者模式" aria-label="Permalink to &quot;创建型 - 建造者模式&quot;">​</a></h1><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1fc6a57398194dd99aa7d7f4776c708f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1336&amp;h=644&amp;s=167461&amp;e=png&amp;b=128383" alt="image.png"></p><h2 id="引言" tabindex="-1">引言 <a class="header-anchor" href="#引言" aria-label="Permalink to &quot;引言&quot;">​</a></h2><p>当我们在进行软件编程时，常常会遇到需要创建复杂对象的情况。这些对象可能有多个属性，属性之间存在依赖关系，或需要按照特定的骤来创建。在这种情况下，使用<strong>建造者模式</strong>（<code>Builder Pattern</code>）可以提供一种活的方式来构建对象，避免对象构建过程的复杂性。</p><blockquote><p>“分即是合” - 将对象的创建过程与其表示<strong>相互分离</strong>，但允许我们<strong>连续地构建对象</strong>，<strong>逐步设置其属性</strong>，然后获取<strong>最终的构建结果</strong>。</p></blockquote><h2 id="一-什么是建造者模式" tabindex="-1">一. 什么是建造者模式 <a class="header-anchor" href="#一-什么是建造者模式" aria-label="Permalink to &quot;一. 什么是建造者模式&quot;">​</a></h2><p>建造者模式（<code>Builder Pattern</code>）是一种创建型设计模式，旨在将对象的创建过程与其表示<strong>相互分离</strong>。它允许我们<strong>连续地构建对象</strong>，<strong>逐步设置其属性</strong>，然后获取<strong>最终的构建结果</strong>。使用建造者模式，我们可以按照自己的需求构建对象，而不必关心对象的创建过程和内部细节。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/94260d329e58440abe8d6c203d8b4e2c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=904&amp;h=590&amp;s=68342&amp;e=png&amp;b=fefefe" alt="fileOf7174.png"></p><p>建造者模式通常包含以下几个角色：</p><ol><li><code>Director</code>（导演）：负责定义构建过程的顺序和逻辑，控制对象的创建过程。</li><li><code>Builder</code>（建造者）：负责实际构建复杂对象的接口，定义了创建对象的每个步骤。</li><li><code>ConcreteBuilder</code>（具体建造者）：实现 Builder 接口，实际进行对象的构建。</li><li><code>Product</code>（产品）：表示最终构建完成的对象。</li></ol><h2 id="二-深入建造者模式的神奇之处" tabindex="-1">二. 深入建造者模式的神奇之处 <a class="header-anchor" href="#二-深入建造者模式的神奇之处" aria-label="Permalink to &quot;二. 深入建造者模式的神奇之处&quot;">​</a></h2><h3 id="案例场景一" tabindex="-1">案例场景一 <a class="header-anchor" href="#案例场景一" aria-label="Permalink to &quot;案例场景一&quot;">​</a></h3><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/85c0959719224db3b9711484fad2dfac~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=890&amp;h=556&amp;s=320921&amp;e=png&amp;b=fdfdfd" alt="fileOf7174.png"></p><p align="center">骑士对象</p><p>让我们通过一个简单的例子来说明建造者模式。假设我们正在开发一个游戏，需要构建一种特殊类型的角色：<strong>骑士</strong>。骑士有许多属性，包括<strong>名字</strong>、<strong>等级</strong>、<strong>武器</strong>、<strong>盔甲</strong>等。为了构建骑士对象，我们可以使用建造者模式。</p><p>首先，我们定义一个角色类，用于表示骑士对象：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Knight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">weapon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">armor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.level </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> level</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.weapon </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> weapon</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.armor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> armor</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}, \${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">level</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}, weapon: \${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">weapon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}, armor: \${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">armor</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>然后，我们定义一个骑士建造者类，用于逐步构建骑士对象：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> KnightBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.level </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.weapon </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.armor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 名称</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 等级</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setLevel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.level </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> level</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 武器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setWeapon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">weapon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.weapon </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> weapon</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 盔甲</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setArmor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">armor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.armor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> armor</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 构造骑士</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Knight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.level, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.weapon, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.armor)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在这个例子，我们定义了一个<code>KnightBuilder</code>类它包含了与骑士对象相关的各种属性我们可以使用该建造者类逐步设置这些属性，终通过调用 build 方法来获取建完成的骑士对象。</p><p>接下来，让我们使用建造者模式来构建一个骑士对象：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> knight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> KnightBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Arthur&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setLevel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setWeapon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Excalibur&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setArmor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Plate&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(knight.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span></code></pre></div><p>在这个例子中，我们首先创建了一个 <code>KnightBuilder</code> 实例，并逐步设置了骑士对象的各个属性。最后，通过调用 <code>build</code> 方法，我们获取到了构建完成的骑士对象并打印出来。输出结果为：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Arthur, Level </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">weapon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Excalibur, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">armor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Plate</span></span></code></pre></div><p><strong>总结：</strong></p><p>正如我们所看到的，通过建造者模式，我们可以在不污染对象类的情况下，方便地构建出具有各种属性的骑士对象。</p><h3 id="案例场景二" tabindex="-1">案例场景二 <a class="header-anchor" href="#案例场景二" aria-label="Permalink to &quot;案例场景二&quot;">​</a></h3><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43e0c72d4f7f4d809b982c6dbd254d36~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=887&amp;h=527&amp;s=332274&amp;e=png&amp;b=fbfbfb" alt="fileOf7174.png"></p><p align="center">汽车对象</p><p>让我们继续通过一个汽车示例来加深对建造者式的使用。假设我们正在构建一个汽车对象，并且汽车具有一些复杂的属性。下面是一个简化的汽车建造者实现：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Car</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.brand </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.engine </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CarBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.car </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Car</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 品牌</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setBrand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">brand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.car.brand </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> brand</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 颜色</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.car.color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> color</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 引擎</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setEngine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">engine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.car.engine </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> engine</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.car</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建汽车对象示例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> car</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CarBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setBrand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Tesla&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Red&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setEngine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Electric&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(car)</span></span></code></pre></div><p>在上面的示例中，我们有一个 <code>Car</code> 类表示汽车对象，包含了 <code>brand</code>，<code>color</code> 和 <code>engine</code> 等属性。然后，我们创建了一个 <code>CarBuilder</code> 类，用于逐步构建 <code>Car</code> 对象。<code>CarBuilder</code> 类中的各方法用于设置 <code>Car</code> 对象各个属性，并且每个方法都返回 <code>CarBuilder</code> 实例，以便可以进行链式调用。最后，通过调用 <code>build</code> 方法来返回最终 <code>Car</code> 对象。</p><p>以上的例子均展示了建造者模式的基本用法，我们可以根据实际情况，将建造者模式扩展到更复杂的情况，例如构建具有更多属性和复杂构建过程的对象。</p><h2 id="三-为什么要使用建造者模式" tabindex="-1">三. 为什么要使用建造者模式 <a class="header-anchor" href="#三-为什么要使用建造者模式" aria-label="Permalink to &quot;三. 为什么要使用建造者模式&quot;">​</a></h2><p>通过以上的实例我们可以总结使用建造者模式的优点：</p><ol><li><strong>灵活性高</strong>：建造者模式允许逐步构建<strong>复杂对象</strong>，并且可以根据需求自由选择和配置对象的属性，而不需要关心对象的创建过程和内部细节。</li><li><strong>代码可读性好</strong>：通过将对象的构建过程封装在建造者类中，代码更加<strong>清晰直观</strong>。建造者模式提供了一种结构化的方式来创建对象，使得代码易于<strong>理解和维护</strong>。</li><li><strong>创建不可变对象</strong>：通过将对象的属性设置为<strong>私有</strong>，并提供相应的 getter 方法，可以确保对象在<strong>创建后不会被修改</strong>，增加对象的安全性和封装性。</li><li><strong>代码复用性高</strong>：可以将复杂对象构建的逻辑封装在建造者类中，以便在同一场景下复用。</li></ol><p>当然，任何一件事物并不是只有优点没有缺点，当然建造者模式也是有一定的缺点的。</p><ol><li><strong>增加代码量</strong>：引入建造者模式会增加一些额外的类和方法，这可能导致代码量的增加。有时候，如果只需要简单的对象，使用建造者模式可能会过于繁琐。</li><li><strong>对象构建过程不够灵活</strong>：建造者模式在创建对象时要按照一定的顺序和一系列步骤。这可能会限制构建过程的灵活性，不够适应某些特殊情况。</li><li><strong>可能存在建造者类过多</strong>：当对象有很多属性时，可能需要创建多个建造者类来构建对象。这可能会导致建造者类的增加，给代码的维护和理解带来一定的复杂性。</li></ol><p><strong>总结：</strong></p><p>建造者模式适用于<strong>构建复杂的场景</strong>，特别当对象有多个属性、属性之有依赖关系或需要按照特定的顺序构建时。某些情况下，对象比较简单，使用建者模式可能会显得过于复杂和冗余。因此使用建造者模式需要权衡利弊，选择适合的设计模式。</p><h2 id="四-建造者模式和工厂模式的对比" tabindex="-1">四. 建造者模式和工厂模式的对比 <a class="header-anchor" href="#四-建造者模式和工厂模式的对比" aria-label="Permalink to &quot;四. 建造者模式和工厂模式的对比&quot;">​</a></h2><p>JavaScript 中的建造者模式和工厂模式在创建对象上有一些不同之处，下面是总结的一些对比。</p><h3 id="对比方式" tabindex="-1">对比方式 <a class="header-anchor" href="#对比方式" aria-label="Permalink to &quot;对比方式&quot;">​</a></h3><table><thead><tr><th>对比方式</th><th>建造者模式</th><th>工厂模式</th></tr></thead><tbody><tr><td>目的和使用场景</td><td>主要用于创建具有复杂属性和构建过程的对象。它可以逐步构建对象，并提供灵活的方法来设置对象的各个属性。适用于构建过程复杂，有多个步骤和可变参数的对象。</td><td>主要用于根据不同的条件或参数创建不同类型的对象。它提供统一的接口来创建对象，只需要知道该接口而不用心具体的实现细节。</td></tr><tr><td>使用方式</td><td>通过连续调用建造者类的方法来逐步构建对象最后通过获取构建结果的方法来获取最终的对象。</td><td>通过调用工厂类的方法，传入相应参数或条件，工厂类根据传入的参数条件来创建相应的对象，并返回给客户端。</td></tr><tr><td>灵活性</td><td>允许在构建对象时自由配置属性，并且可以选择性地属性。根据设置特定的属性，可以不设置某些属性适用于对象属性较多且有可选项的场景。</td><td>工厂模式的创建逻辑相对固定，只需要传入相应的参数或条件，工厂类根据这些参数或条件来创建相应的对象。适用于对象创建不涉及复杂的逻辑判断，只是根据条件返回不同类型的对象。</td></tr><tr><td>代码复用</td><td>可以将构建对象的逻辑封装在建造者中，可以不同的场景下复用相同的构建逻辑。</td><td>将对象创建的逻辑封装在工厂中，可以根据不同的或参数创建不同的，从而实现代码的复用。</td></tr></tbody></table><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>综上所述，工厂模式和建造者模式都是用于创建对象的设计模式，他们在使用方式和灵活性上有一定的不同之处：</p><ul><li><p><strong>工厂模式</strong>适用于创建不同类型的对象，根据条件或参数返回相应的对象，工厂模式主要关注对象的创建过程。</p></li><li><p><strong>建造者模式</strong>适用于创建具有复杂属性和构建过程的对象，建造者模式主要关注对象属性的设置和构建流程的控制。</p></li></ul><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>通过本文，我们了解到了<code>JavaScript</code>建造者模式的详细使用方式，最后我们在总结一下什么情况下我们会考虑使用建造者模式：</p><ol><li><p><strong>对象拥有复杂的属性</strong>：如果要创建的对象具有很多属性，而且这些属性之间存在一定的依赖关系或可选项，使用建造者模式可以提供更灵活的方式来构建对象，避免创建过程的复杂性。</p></li><li><p><strong>构建过程具有多个步骤</strong>：如果对象的构建过程包含多个步骤，并且这些步骤可能因为不同的需求或条件而变化，使用建造者模式可以将构建过程分解为多个方法，并在其中逐步构建对象。</p></li><li><p><strong>需要创建不可变对象</strong>：建造者模式可以通过将对象的属性设置为私有，并提供相应的 <code>getter</code> 方法，从而创建不可变对象。这样做可以保证对象的属性在创建后不会被修改，提高了对象的安全性和封装性。</p></li><li><p><strong>需要代码的可读性和可维护性</strong>：使用建造者模式，可以将对象的构建过程、属性设置的逻辑都封装在建造者类中，这样可以使得代码更加清晰直观，易于理解和维护。</p></li><li><p><strong>需要复用相同的构建逻辑</strong>：如果有多个场景需要使用相同的构建逻辑创建对象，可以将该构建逻辑抽象为一个建造者类，以便在不同的场景下复用同一份代码。</p></li></ol><p>建造者模式适合用于构建具有复杂属性、多步骤构建过程、可配置性要求高的对象，并且需要提高代码的可读性和可维护性的情况下。通过使用建造者模式，可以简化对象的构建过程，有效地管理对象的属性和属性设置的逻辑。</p>`,51);function e(r,E,d,g,o,c){const s=t("ArticleFooter");return l(),a("div",null,[k,n(s,{link:"https://juejin.cn/post/7276716177120084029"})])}const C=i(p,[["render",e]]);export{F as __pageData,C as default};
