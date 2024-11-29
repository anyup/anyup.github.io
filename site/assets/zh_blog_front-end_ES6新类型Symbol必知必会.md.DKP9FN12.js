import{_ as i,c as a,I as l,aU as n,o as h,E as t}from"./chunks/framework.CpXV_ol5.js";const b=JSON.parse('{"title":"一文了解 ES6 中独一无二的 Symbol 类型","description":"","frontmatter":{"title":"一文了解 ES6 中独一无二的 Symbol 类型"},"headers":[],"relativePath":"zh/blog/front-end/ES6新类型Symbol必知必会.md","filePath":"zh/blog/front-end/ES6新类型Symbol必知必会.md","lastUpdated":1727083629000}'),e={name:"zh/blog/front-end/ES6新类型Symbol必知必会.md"},p=n(`<h1 id="一文了解-es6-中独一无二的-symbol-类型" tabindex="-1">一文了解 ES6 中独一无二的 Symbol 类型 <a class="header-anchor" href="#一文了解-es6-中独一无二的-symbol-类型" aria-label="Permalink to &quot;一文了解 ES6 中独一无二的 Symbol 类型&quot;">​</a></h1><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1a70f48cda34f44856522d188be571d~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=800&amp;h=500&amp;s=141459&amp;e=png&amp;b=f9de55" alt="fileOf7174.png"></p><h2 id="一-symbol-的概念" tabindex="-1">一. Symbol 的概念 <a class="header-anchor" href="#一-symbol-的概念" aria-label="Permalink to &quot;一. Symbol 的概念&quot;">​</a></h2><p><code>Symbol</code> 是 <code>JavaScript</code> 中的一种新的基本数据类型，引入自 <code>ECMAScript 6</code>（ES6）标准。它是一种不可变且唯一的数据类型，可以用来创建独一无二的键（key）。</p><p>Symbol 的创建方式是通过调用全局的 <code>Symbol()</code> 函数来生成。每个通过 <code>Symbol()</code> 创建的 Symbol 值都是独一无二的，即使它们的描述符相同也不相等。</p><p>Symbol 主要用于对象属性的唯一性标识。在对象中，Symbol 可以作为属性名，用来定义对象的非字符串类型的属性。由于每个 Symbol 都是唯一的，因此可以确保属性名的唯一性，避免属性名冲突的问题。</p><p>Symbol 还有一些内置的属性，比如 <code>Symbol.iterator</code>、<code>Symbol.hasInstance</code> 等，在某些情况下可以用来自定义对象的行为。</p><p>总而言之，<code>Symbol</code> 是 <code>JavaScript</code> 中一种用于创建独一无二键的基本数据类型，可用于定义对象的非字符串属性名，解决属性名冲突的问题。</p><h2 id="二-symbol-的使用方式" tabindex="-1">二. Symbol 的使用方式 <a class="header-anchor" href="#二-symbol-的使用方式" aria-label="Permalink to &quot;二. Symbol 的使用方式&quot;">​</a></h2><p><code>Symbol</code> 的使用可以通过以下几个步骤进行：</p><h4 id="_1-创建-symbol" tabindex="-1">1. 创建 Symbol： <a class="header-anchor" href="#_1-创建-symbol" aria-label="Permalink to &quot;1. 创建 Symbol：&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mySymbol</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><h4 id="_2-使用-symbol-作为对象属性名" tabindex="-1">2. 使用 Symbol 作为对象属性名： <a class="header-anchor" href="#_2-使用-symbol-作为对象属性名" aria-label="Permalink to &quot;2. 使用 Symbol 作为对象属性名：&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mySymbol</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj[mySymbol] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Symbol属性&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj[mySymbol]) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出：Symbol属性</span></span></code></pre></div><h4 id="_3-symbol-的描述符" tabindex="-1">3. Symbol 的描述符： <a class="header-anchor" href="#_3-symbol-的描述符" aria-label="Permalink to &quot;3. Symbol 的描述符：&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mySymbol</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;描述符&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mySymbol.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出：Symbol(描述符)</span></span></code></pre></div><h4 id="_4-symbol-的内置属性" tabindex="-1">4. Symbol 的内置属性： <a class="header-anchor" href="#_4-symbol-的内置属性" aria-label="Permalink to &quot;4. Symbol 的内置属性：&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mySymbol</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Symbol.iterator</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> iterator</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr[mySymbol]()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(iterator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出：{ value: 1, done: false }</span></span></code></pre></div><p>需要注意的是，<code>Symbol</code> 作为属性名时，无法使用点运算符 <strong>（.）</strong> 而必须使用方括号 <strong>（[]）</strong> 来访问。</p><p><code>Symbol</code> 的主要作用是确保属性名的唯一性，避免属性名冲突的问题，以及在某些情况下可以自定义对象的行为。例如，可以使用 <code>Symbol.iterator</code> 创建一个自定义迭代器，通过遍历符号属性来处理对象的迭代。</p><p>除了以上示例，<code>Symbol</code> 还可以与其他 <code>JavaScript</code> 特性如迭代器、生成器、反射等一起使用，提供更强大的编程能力。</p><h2 id="三-symbol-的使用场景" tabindex="-1">三. Symbol 的使用场景 <a class="header-anchor" href="#三-symbol-的使用场景" aria-label="Permalink to &quot;三. Symbol 的使用场景&quot;">​</a></h2><p><code>Symbol</code>的使用场景有很多，尤其用于创建独一无二键的基本数据类型，解决属性名冲突时使用。下面列举几个常见的例子：</p><h4 id="_1-属性名冲突解决-使用-symbol-作为对象属性名-可以确保属性名的唯一性-避免属性名冲突的问题。" tabindex="-1">1. 属性名冲突解决：使用 Symbol 作为对象属性名，可以确保属性名的唯一性，避免属性名冲突的问题。 <a class="header-anchor" href="#_1-属性名冲突解决-使用-symbol-作为对象属性名-可以确保属性名的唯一性-避免属性名冲突的问题。" aria-label="Permalink to &quot;1. 属性名冲突解决：使用 Symbol 作为对象属性名，可以确保属性名的唯一性，避免属性名冲突的问题。&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;age&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> person</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [name]: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;John&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [age]: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(person[name]) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出：John</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(person[age]) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出：30</span></span></code></pre></div><h4 id="_2-迭代器和可迭代对象-通过使用内置的-symbol-iterator-属性-可以为对象创建自定义的迭代器-实现可迭代对象的遍历。" tabindex="-1">2. 迭代器和可迭代对象：通过使用内置的 Symbol.iterator 属性，可以为对象创建自定义的迭代器，实现可迭代对象的遍历。 <a class="header-anchor" href="#_2-迭代器和可迭代对象-通过使用内置的-symbol-iterator-属性-可以为对象创建自定义的迭代器-实现可迭代对象的遍历。" aria-label="Permalink to &quot;2. 迭代器和可迭代对象：通过使用内置的 Symbol.iterator 属性，可以为对象创建自定义的迭代器，实现可迭代对象的遍历。&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myIterable</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myIterable[Symbol.iterator] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  yield</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  yield</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  yield</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myIterable) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出：1 2 3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="_3-隐藏属性-使用-symbol-作为属性名-可以隐藏属性-使其不容易被意外访问到。" tabindex="-1">3. 隐藏属性：使用 Symbol 作为属性名，可以隐藏属性，使其不容易被意外访问到。 <a class="header-anchor" href="#_3-隐藏属性-使用-symbol-作为属性名-可以隐藏属性-使其不容易被意外访问到。" aria-label="Permalink to &quot;3. 隐藏属性：使用 Symbol 作为属性名，可以隐藏属性，使其不容易被意外访问到。&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> secretKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;secretKey&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [secretKey]: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abcdefg&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj[secretKey]) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出：abcdefg</span></span></code></pre></div><h4 id="_4-自定义对象的行为-通过自定义-symbol-属性-可以自定义对象的一些行为-如迭代器、比较、字符串转换等。" tabindex="-1">4. 自定义对象的行为：通过自定义 Symbol 属性，可以自定义对象的一些行为，如迭代器、比较、字符串转换等。 <a class="header-anchor" href="#_4-自定义对象的行为-通过自定义-symbol-属性-可以自定义对象的一些行为-如迭代器、比较、字符串转换等。" aria-label="Permalink to &quot;4. 自定义对象的行为：通过自定义 Symbol 属性，可以自定义对象的一些行为，如迭代器、比较、字符串转换等。&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> comparator</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;comparator&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [comparator](</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">other</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.name.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> person1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;John&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> person2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Jane&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(person1[comparator](person2)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出：-1</span></span></code></pre></div><p>这些只是 <code>Symbol</code> 的一些常见使用场景，<code>Symbol</code> 还可以与其他 <code>JavaScript</code> 特性相结合，扩展出更丰富的应用场景。</p><h2 id="四-总结" tabindex="-1">四.总结 <a class="header-anchor" href="#四-总结" aria-label="Permalink to &quot;四.总结&quot;">​</a></h2><h3 id="使用-symbol-具有以下的优势" tabindex="-1">使用 Symbol 具有以下的优势： <a class="header-anchor" href="#使用-symbol-具有以下的优势" aria-label="Permalink to &quot;使用 Symbol 具有以下的优势：&quot;">​</a></h3><h4 id="_1-属性名的唯一性" tabindex="-1">1. 属性名的唯一性： <a class="header-anchor" href="#_1-属性名的唯一性" aria-label="Permalink to &quot;1. 属性名的唯一性：&quot;">​</a></h4><p><code>Symbol</code> 可以确保属性名的唯一性，避免属性名冲突的问题。即使多个 <code>Symbol</code> 值使用相同的描述符，它们依然是不同的属性名。</p><h4 id="_2-防止属性被意外访问" tabindex="-1">2. 防止属性被意外访问： <a class="header-anchor" href="#_2-防止属性被意外访问" aria-label="Permalink to &quot;2. 防止属性被意外访问：&quot;">​</a></h4><p>使用 <code>Symbol</code> 作为属性名，可以隐藏属性，使其不容易被意外访问到。这有助于在对象中定义私有属性或内部使用的属性。</p><h4 id="_3-扩展对象的功能" tabindex="-1">3. 扩展对象的功能： <a class="header-anchor" href="#_3-扩展对象的功能" aria-label="Permalink to &quot;3. 扩展对象的功能：&quot;">​</a></h4><p>通过自定义 <code>Symbol</code> 属性，可以为对象添加自定义行为，如迭代器、比较器等。这样，我们可以更灵活地扩展对象的功能，使其具备更多特定的行为。</p><h4 id="_4-安全性提升" tabindex="-1">4. 安全性提升： <a class="header-anchor" href="#_4-安全性提升" aria-label="Permalink to &quot;4. 安全性提升：&quot;">​</a></h4><p>Symbol 的属性名不会被常规的属性遍历方法（如 <code>for...in</code> 循环）访问到，可以在一定程度上提升对象的安全性，防止属性被意外修改。</p><h3 id="使用-symbol-的缺点" tabindex="-1">使用 Symbol 的缺点： <a class="header-anchor" href="#使用-symbol-的缺点" aria-label="Permalink to &quot;使用 Symbol 的缺点：&quot;">​</a></h3><h4 id="_1-无法遍历" tabindex="-1">1. 无法遍历： <a class="header-anchor" href="#_1-无法遍历" aria-label="Permalink to &quot;1. 无法遍历：&quot;">​</a></h4><p><code>Symbol</code> 作为属性名时，无法通过常规的属性遍历方法（如 <code>for...in</code> 循环）获取到。如果需要遍历对象的属性，就不能使用 <code>Symbol</code> 作为属性名。</p><h4 id="_2-内存泄漏" tabindex="-1">2. 内存泄漏： <a class="header-anchor" href="#_2-内存泄漏" aria-label="Permalink to &quot;2. 内存泄漏：&quot;">​</a></h4><p>由于 <code>Symbol</code> 创建的属性是唯一的，一旦创建后就无法被销毁或被垃圾回收机制回收。如果大量使用 <code>Symbol</code> 创建属性，可能会造成内存泄漏的问题。</p><h4 id="_3-可调试性差" tabindex="-1">3. 可调试性差： <a class="header-anchor" href="#_3-可调试性差" aria-label="Permalink to &quot;3. 可调试性差：&quot;">​</a></h4><p><code>Symbol</code> 属性名在控制台输出时，没有明确的标识，不容易调试和查看对象的具体属性。</p><h4 id="_4-不可序列化" tabindex="-1">4. 不可序列化： <a class="header-anchor" href="#_4-不可序列化" aria-label="Permalink to &quot;4. 不可序列化：&quot;">​</a></h4><p><code>Symbol</code> 值不能被 <code>JSON.stringify()</code> 序列化，也不能作为对象的键值传递给其他线程或进程。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>通过学习<code>Symbol</code>，我们了解到虽然 <code>Symbol</code> 有一些缺点，但在合适的场景下，其独特的特性和优势仍然使其成为一个有价值的选择。为了充分利用 <code>Symbol</code>，需要在实际应用中权衡其优缺点，根据需求进行合理使用。</p>`,53);function k(o,r,d,y,c,E){const s=t("ArticleFooter");return h(),a("div",null,[p,l(s,{link:["juejin::https://juejin.cn/post/7272658960301637668","weixin::https://mp.weixin.qq.com/s/VtoYRv2AkJjAw-79mzcj5Q"]},null,8,["link"])])}const m=i(e,[["render",k]]);export{b as __pageData,m as default};
