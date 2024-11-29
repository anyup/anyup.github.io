import{_ as i,c as a,I as n,aU as p,o as e,E as l}from"./chunks/framework.BTzRA3v_.js";const F=JSON.parse('{"title":"一文讲透JavaScript闭包与立即执行函数表达式（IIFE）","description":"","frontmatter":{"title":"一文讲透JavaScript闭包与立即执行函数表达式（IIFE）"},"headers":[],"relativePath":"zh/blog/front-end/闭包与立即执行函数表达式IIFE.md","filePath":"zh/blog/front-end/闭包与立即执行函数表达式IIFE.md","lastUpdated":1727083629000}'),t={name:"zh/blog/front-end/闭包与立即执行函数表达式IIFE.md"},h=p(`<h1 id="闭包与立即执行函数表达式iife" tabindex="-1">闭包与立即执行函数表达式IIFE <a class="header-anchor" href="#闭包与立即执行函数表达式iife" aria-label="Permalink to &quot;闭包与立即执行函数表达式IIFE&quot;">​</a></h1><h2 id="引言" tabindex="-1">引言 <a class="header-anchor" href="#引言" aria-label="Permalink to &quot;引言&quot;">​</a></h2><p>闭包是一种函数的特性，用于捕获和保存其所在作用域的变量，而<code>IIFE</code>是一种用来创建函数作用域的模式。在<code>JavaScript</code>中，我们可以将闭包和<code>IIFE</code>结合使用，但它们并不是彼此依赖的概念。</p><p>虽然我们可以在<code>IIFE</code>中使用闭包，但是闭包并不依赖于<code>IIFE</code>的存在。闭包可以与任何函数一起使用，不管是普通函数还是<code>IIFE</code>。</p><p>关于闭包和<code>IIFE</code>，本文将分别讨论它们在<code>JavaScript</code>开发中的应用场景和好处。这样可以更清楚地理解它们的作用和关系，并有效地运用它们来提升代码质量和可维护性。</p><h2 id="一、深入闭包的理解" tabindex="-1">一、深入闭包的理解 <a class="header-anchor" href="#一、深入闭包的理解" aria-label="Permalink to &quot;一、深入闭包的理解&quot;">​</a></h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ed65334c44b494ebf4e86b54859d5e2~tplv-k3u1fbpfcp-watermark.image?" alt="2.png"></p><h3 id="_1-1、闭包的概念" tabindex="-1">1.1、闭包的概念 <a class="header-anchor" href="#_1-1、闭包的概念" aria-label="Permalink to &quot;1.1、闭包的概念&quot;">​</a></h3><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9bde9def77764033a8963c0353b53dac~tplv-k3u1fbpfcp-watermark.image?" alt="1.png"></p><p>闭包（<code>closure</code>）是指一个函数可以访问并操作其自身作用域以外的变量。换句话说，闭包是一种能够访问其父函数作用域中的变量的函数。</p><p>在<code>JavaScript</code>中，当一个函数内部定义了另一个函数，并且内部的函数引用了外部函数的变量时，就创建了一个闭包。内部函数可以访问外部函数的变量，即使外部函数已经执行完毕，这些变量仍然可以在内部函数中使用。</p><p>闭包的一个常见用途是创建私有变量。通过使用闭包，可以在函数内部定义一个变量，使其在外部无法访问。这样可以提供更好的封装和数据隐藏。</p><p>以下是一个简单的闭包示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> outerFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> outerVariable </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Hello&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> innerFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(outerVariable)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> innerFunction</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> closure </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> outerFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">closure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出：Hello</span></span></code></pre></div><p>在上面的例子中，<code>outerFunction</code>内部定义了<code>outerVariable</code>变量和<code>innerFunction</code>函数。<code>innerFunction</code>函数引用了<code>outerVariable</code>变量，并且作为一个闭包被返回出来。当我们调<code>closure</code>时，它保留了对<code>outerVariable</code>的引用，因此可以在执行时访问并打印出<code>Hello</code>。</p><h3 id="_1-2、闭包的特性" tabindex="-1">1.2、闭包的特性 <a class="header-anchor" href="#_1-2、闭包的特性" aria-label="Permalink to &quot;1.2、闭包的特性&quot;">​</a></h3><p><code>JavaScript</code>之所以有闭包，是因为它采用了词法作用域的函数定义方式。</p><p>闭包的存在有以下几个重要原因：</p><ol><li><p><strong>保护变量</strong>：闭包可以创建私有变量，通过将变量封装在函数内部，外部无法直接访问，从而实现信息隐藏和保护变量的安全性</p></li><li><p><strong>实现数据封装</strong>：闭包提供了一种封装数据的方式，在函数内部定义的变量只能在函数内部访问，外部无法修改或者获取，从而实现了数据私有化。</p></li><li><p><strong>延长变量的生命周期</strong>：当函数执行完毕后，其作用域中的变量通常会被销毁，但是闭包可以延长变量的生命周期。内部函数仍然可以引用外部函数中的量，因此这些变量不会被垃圾回收机制销毁，可以在内部函数中继续使用。</p></li><li><p><strong>创建回调和异步操作</strong>：闭包可以用于创建回调函数，通过将函数作为参数传递给其他函数，实现函数的延迟执行。</p></li></ol><p>总的来说，闭包在<code>JavaScript</code>中具有重要的作用，可以提供更强大的编程能力，实现数据封装、变量保护、延长变量生命周期等功能。</p><h4 id="构建函数工厂" tabindex="-1">构建函数工厂 <a class="header-anchor" href="#构建函数工厂" aria-label="Permalink to &quot;构建函数工厂&quot;">​</a></h4><p>比如有这么一个场景，如何去写一个<code>sum(1)(2) = 3</code>的函数？</p><p>分析一下，<code>（sum(1)）(2)</code>显然第一个括号执行之后仍然应该是个函数，然后再把第二个参数<code>2</code>传进去。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出结果为 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 问题，如果第一个数我们需要确定呢？</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> add1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> add2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出结果为 6</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出结果为 8</span></span></code></pre></div><p>我们可以将<code>sum</code>看作是一个函数工厂，你可以用这个工厂创建出你需要的各种函数。</p><h4 id="构建私有变量" tabindex="-1">构建私有变量 <a class="header-anchor" href="#构建私有变量" aria-label="Permalink to &quot;构建私有变量&quot;">​</a></h4><p>由于 ES6 之前的<code>JavaScript</code>是没有类的概念，我们用函数来模拟类。会一点<code>OOP</code>的应该都知道，有些类中的变量我们需要保护不被外界访问到，就有了私有变量的概念。</p><p>有种简单的创建类的方式如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function Person() {</span></span>
<span class="line"><span>      this.name = &#39;anyup1&#39;;</span></span>
<span class="line"><span>      this.getName = function(){</span></span>
<span class="line"><span>      return this.name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> var person = new Person();</span></span>
<span class="line"><span> person.getName(); // &#39;anyup1&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> person.name = &#39;anyup2&#39;;</span></span>
<span class="line"><span> person.getName(); // &#39;anyup2&#39;</span></span></code></pre></div><p>首先定义了一个<code>Person</code>的类构造器，实例化出一个<code>person</code>对象。但是可以直接被修改内部的变量 name，使得人的名字被修改了。我们当然不希望我们的名字被修改。</p><p>此处我们换种方式，将<code>name</code>设置为私有变量</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> function Person() {</span></span>
<span class="line"><span>    var name = &#39;anyup&#39;;</span></span>
<span class="line"><span>    this.getName = function(){</span></span>
<span class="line"><span>       return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> var me = new Person();</span></span>
<span class="line"><span> person.getName(); // &#39;anyup&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> person.name = &#39;anyup2&#39;; // 你仍然可以设置person.name属性，但是这个对象内部的name值是保持不变的。</span></span>
<span class="line"><span> person.getName(); // &#39;anyup&#39;</span></span></code></pre></div><p>分析一下，为什么说上述的是闭包呢？首先 getName 函数是包含在 Person 函数里面，但是看起来好像没有返回。我们来看下 me = new Person()做了什么，它其实是创建了一个对象，并且返回。也就是说 getName 是在此时返回的。然后 me.getName()就能使用了。</p><h4 id="变量不被回收" tabindex="-1">变量不被回收 <a class="header-anchor" href="#变量不被回收" aria-label="Permalink to &quot;变量不被回收&quot;">​</a></h4><p>由于<code>JavaScript</code>的垃圾回收机制，普通函数执行完之后，变量就会被直接回收。但是，闭包的方式可以让变量一直存在，不被回收。我们来看一个简单的计数器例子。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Counter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> counter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Counter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">counter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出 0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">counter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出 1</span></span></code></pre></div><p>正是由于这种变量不被回收的机制，这样我们就能实现每次执行<code>counter()</code>的时候<code>count</code>就会在原来的基础上增加 1。</p><h3 id="_1-3、闭包的副作用" tabindex="-1">1.3、闭包的副作用 <a class="header-anchor" href="#_1-3、闭包的副作用" aria-label="Permalink to &quot;1.3、闭包的副作用&quot;">​</a></h3><p>由于<code>JavaScript</code>闭包是指函数能够访问其外部函数范围内定义的变量，即使外部函数已经执行完毕。尽管闭包在某些情况下非常有用，但它也可能带来一些副作用。</p><p>以下是一些<code>JavaScript</code>闭包可能引发的副作用：</p><ol><li><p><strong>内存泄漏</strong>：由于闭包保持对外部变量的引用，这些变量可能会一直存在于内存中，即使它们已经不再需要。如果闭包过多或闭包引用的数据过大，可能会导致内泄漏，影响程序性能。</p></li><li><p><strong>变量生命周期延长</strong>：使用闭包可以使变量的生命周期超过它们通常在函数执行结束后被销毁的范围。这可能导致变量长时间占用内存空间，增加内存使用量。</p></li><li><p><strong>性能损失</strong>：闭包需要维护对外部变量的引用，当闭包被频繁调用时，会增加额外的性能开销。这是因为每个闭包都需要在内存中保存对外部变量的引用，而且包访问外部变量的速度相对较慢。</p></li></ol><p>出于以上原因，在编写代码时，应该谨慎使用闭包。确保确实需要使用闭包，并注意处理闭包带来的副作用。对于不再使用的闭包，及时释放相关资源，以避免内存泄漏。同时，尽量简化闭包的使用场景，以提高代码可读性和维护性。</p><p><strong>以下是一个简单的示例，说明闭包内存泄漏的风险：</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sayHi</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;say Hi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> me </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;me&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> you </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;you&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>上面的示例代码每创建一个对象，都有创建出一个相同的<code>sayHello</code>方法。这个方法并没有用到私有变量<code>name</code>，其实就根本不需要在<code>Person</code>内部去定义这样的一个闭包。更好的方式是将这个方法添加在<code>Person</code>的原型链上，如下图所示： <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bea5c6718c044cbfae2298faf12a3050~tplv-k3u1fbpfcp-watermark.image?" alt="4.png"></p><p><strong>优化后的代码如下所示：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> function Person(name ) {</span></span>
<span class="line"><span>    this.getName = function(){</span></span>
<span class="line"><span>       return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Person.prototype.sayHi = function(){</span></span>
<span class="line"><span>      alert(&quot;say Hi&quot;);</span></span>
<span class="line"><span> }</span></span></code></pre></div><h3 id="_1-4、闭包的经典场景" tabindex="-1">1.4、闭包的经典场景 <a class="header-anchor" href="#_1-4、闭包的经典场景" aria-label="Permalink to &quot;1.4、闭包的经典场景&quot;">​</a></h3><p>经典的<code>JavaScript</code>闭包应用场景中，使用闭包在<code>for</code>循环中是一个常见的例子。在循环中使用闭包可以避免变量共享和作用域问题，确保在异步操作中使用正确的值。</p><p>考虑以下示例，我们使用<code>for</code>循环创建了多个定时器，每隔一秒输出对应的数字：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }, i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>如果直接运行这段代码，你可能会期望在 1 秒后依次输出 1、2、3、4、5，但实际上输出的结果却是 6 个 6。</p><p>这是因为<code>setTimeout</code>的回调函数是在循环结束后才执行的，此时 i 已经变成了 6，所以无论定时器运行多长时间，都会输出 6。</p><p>要解决这个问题，可以利用闭包来创建一个新的作用域，捕获每次循环的变量值。我们可以通过立即执行函数表达式(IIFE)来创建闭包：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ;(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">j</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(j)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }, j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })(i)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在这个例子中，我们使用立即执行函数表达式将 i 的值传递给匿名函数的参数 j。每次循环时，都会创建一个新的作用域，保留了当前循环的变量值。</p><p>这样，每个<code>setTimeout</code>回调函数都捕获了对应的 j 值，从而实现了按照预期顺序输出 1、2、3、4、5。</p><p>通过使用闭包，我们解决了在<code>for</code>循环中使用异步操作所遇到的问题，确保了每次循环中的正确值被定时器回调函数所使用。这是一个非常常用的闭包应用场景。</p><h2 id="二、深入-iife-的理解" tabindex="-1">二、深入 IIFE 的理解 <a class="header-anchor" href="#二、深入-iife-的理解" aria-label="Permalink to &quot;二、深入 IIFE 的理解&quot;">​</a></h2><h3 id="_2-1、iife-的概念" tabindex="-1">2.1、IIFE 的概念 <a class="header-anchor" href="#_2-1、iife-的概念" aria-label="Permalink to &quot;2.1、IIFE 的概念&quot;">​</a></h3><p><code>IIFE</code>是立即执行函数表达式（<code>Immediately Invoked Function Expression</code>）的缩写。它是一种特殊的函数调用方式，也是一种用来创建函数作用域的模式。</p><p>在<code>JavaScrip</code>t 中，<code>IIFE</code>通过将函数用括号包裹，并在后面立即调用它来创建一个函数作用域。这样做的好处是可以在函数内部定义变量和函数，而不会对外部的全局作用域造成污染。</p><p><code>IIFE</code>的基本语法如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 在这里编写你的代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})()</span></span></code></pre></div><p>在上面的语法中，我们使用了一个匿名函数，并将其用括号包裹起来。紧接着，在括号的最后加上一对空括号，表示立即调这个函数。</p><h3 id="_2-2、iife-的特性" tabindex="-1">2.2、IIFE 的特性 <a class="header-anchor" href="#_2-2、iife-的特性" aria-label="Permalink to &quot;2.2、IIFE 的特性&quot;">​</a></h3><p><code>IIFE</code>的作用包括：</p><ol><li><strong>避免全局命名冲突</strong>：在<code>IIFE</code>内部定义的变量和函数都是在函数作用域内，不会与全局作用域中的变量冲突。</li><li><strong>创建闭包</strong>：<code>IIFE</code>能够捕获并保存外部作用域的变量，从而创建闭包，实现更复杂的编程技巧。</li><li><strong>封装代码</strong>：一些库和框架通过使用<code>IIFE</code>来封装其代码，以隐藏内部的实现细节，提供干净的接口。</li></ol><p>在模块化设计中，它是最经典的存在。如下所示：一个经典的<code>jQuery</code>插件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">window</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 具体代码写在这里</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})(jQuery, window, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="_2-3、iife-的经典场景" tabindex="-1">2.3、IIFE 的经典场景 <a class="header-anchor" href="#_2-3、iife-的经典场景" aria-label="Permalink to &quot;2.3、IIFE 的经典场景&quot;">​</a></h3><p><code>IIFE</code>在<code>for</code>循环中的应用是其中一个经典的场景。在传统的<code>for</code>循环中，由于<code>JavaScript</code>中只有函数作用域和全局作用域，没有块级作用域，所以在循环体内部定义的变量会被循环体外部的代码共享，可能导致意想不到的结果。</p><p>为了解决这个问题，我们可以使用 IIFE 来创建一个立即执行的函数作用域，并在其中定义循环体内部的变量，从而避免变量共享和污染全局作用域。以下是一个简单的示例：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ;(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">j</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(j)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })(i)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在上面的代码中，我们使用一个 IIFE 来创建一个函数作用域，并将循环变量<code>i</code>作为参数传入其中。在 IIFE 的内部，我们使用<code>j</code>来接收传入的参数<code>i</code>，这样就创建了一个函数作用域内部的变量<code>j</code>，它与外部的循环变量<code>i</code>是相互独立的。</p><p>在<code>IIFE</code>内部，我们通过<code>setTimeout</code>函数来模拟一个异步操作，将每个循环迭代的<code>j</code>的值输出到控制台。由于每个循环迭代都有一个独立的函数作用域和变量<code>j</code>，所以它们的值都可以被正确地输出。</p><p>这种使用<code>IIFE</code>的方式，在循环体内使用一个立即执行的函数作用域，可以有效避免循环变量共享和闭包问题。这在处理异步操作、事件处理等场景中非常有用。</p><p>需要注意的是，<code>ES6</code>引入了<code>let</code>和<code>const</code>关键字，它们具有块级作用域，可以直接在循环中定义新的变量，避免了使用 IIFE 的需求。所以，在使用较新版本的<code>JavaScript</code>时，可以优先考虑使用<code>let</code>或<code>const</code>来替代 IIFE 解决循环作用域的问题。</p><p>总结起来，<code>IIFE</code>在循环中的常见应用是创建函数作用域，避免循环变量的共享和污染全局作用域。它能够有效地解决传统<code>for</code>循环中的闭包问题，特别是在处理异步操作时非常实用。</p><h2 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h2><p>在本文中，我们详细解释了<code>JavaScript</code>闭包和立即执行函数表达式（<code>IIFE</code>）的概念、特点和用法。闭包是<code>JavaScript</code>中一个强大的特性，它可以让函数保留对其作用域外部变量的引，并且在函数执行完毕后仍然可以访问这些变量。使得我们可以创建私有变量、实现模块化和封装等功能。</p><p>然而，闭包也可能引发一些副作用，如内存泄漏和性能损失。因此，在使用闭包时，我们需要谨慎考虑其影响，并及时释放不再使用的闭包。</p><p>相对而言，<code>IIFE</code>是一种特殊的函数表达式，它可以立即执行并创建一个独立的作用。通过将代码封装在<code>IIFE</code>内部，我们防止污染全局命名空间，并且可以将变量和函数限定在私有作用域中。</p><p>在编写<code>JavaScript</code>代码时，了解闭包和<code>IIFE</code>的概念和用法，能够帮助我们更好地设计和组织代码结构，提高代码可维护性和可读性。</p>`,84);function k(d,r,c,o,E,g){const s=l("ArticleFooter");return e(),a("div",null,[h,n(s,{link:["juejin::https://juejin.cn/post/7269744082649677835","weixin:https://mp.weixin.qq.com/s/OOf9i_RFixvznm_wleR5_Q"]},null,8,["link"])])}const u=i(t,[["render",k]]);export{F as __pageData,u as default};
