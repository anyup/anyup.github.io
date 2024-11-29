import{_ as i,c as a,I as n,aU as l,o as t,E as p}from"./chunks/framework.BTzRA3v_.js";const b=JSON.parse('{"title":"JavaScript 拷贝的艺术：玩转深拷贝和浅拷贝","description":"","frontmatter":{"title":"JavaScript 拷贝的艺术：玩转深拷贝和浅拷贝"},"headers":[],"relativePath":"zh/blog/front-end/玩转深拷贝和浅拷贝.md","filePath":"zh/blog/front-end/玩转深拷贝和浅拷贝.md","lastUpdated":1727083629000}'),h={name:"zh/blog/front-end/玩转深拷贝和浅拷贝.md"},e=l(`<h1 id="javascript-拷贝的艺术-玩转深拷贝和浅拷贝" tabindex="-1">JavaScript 拷贝的艺术：玩转深拷贝和浅拷贝 <a class="header-anchor" href="#javascript-拷贝的艺术-玩转深拷贝和浅拷贝" aria-label="Permalink to &quot;JavaScript 拷贝的艺术：玩转深拷贝和浅拷贝&quot;">​</a></h1><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c73e6d47d6d341c9907e6a9ac54c8974~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=603&amp;h=280&amp;s=86751&amp;e=png&amp;b=fae105" alt="image.png"></p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在实际的项目开发中，我们时刻都在使用数据拷贝功能，赋值、深拷贝和浅拷贝是前端开发中常见的概念，用于复制简单数据类型（字符串、数值、布尔值）和引用类型（对象、数组）。它们的主要区别在于拷贝的层级深度以及对原始数据的引用关系。</p><h2 id="一-初识拷贝" tabindex="-1">一. 初识拷贝 <a class="header-anchor" href="#一-初识拷贝" aria-label="Permalink to &quot;一. 初识拷贝&quot;">​</a></h2><h3 id="赋值" tabindex="-1">赋值 <a class="header-anchor" href="#赋值" aria-label="Permalink to &quot;赋值&quot;">​</a></h3><p>赋值是将一个变量的值赋给另一个变量，包括简单数据类型（如字符串、数值、布尔值）和引用类型（如对象、数组）。</p><p>严格意义上说，赋值并不属于拷贝，因为对于简单数据类型来说，只是将 a 变量的值赋给 b 变量。而对于对象或数组类型的数据，赋值操作也只是将它们的引用传递给了新的变量。</p><p>换句话说，当你将一个对象或数组赋值给另一个变量时，两个变量将指向同一个对象或数组，它们共享同一块内存空间。如果你修改其中一个变量所指向的对象或数组，另一个变量也会跟着改变。因此，赋值操作并不会创建一个新的独立副本，而是共享相同的引用。</p><p>如果你想创建一个完全独立的对象或数组副本，你需要使用深拷贝或浅拷贝的方式。 拷贝操作则是创建一个完全独立的副本，使得副本和原始对象或数组在内存中存在不同的存储空间。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;anyup&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b.sex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Male&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a对象&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, a)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b对象&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a是否等于b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b)</span></span></code></pre></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7347113a833d4808847a7cf551027134~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=671&amp;h=262&amp;s=46530&amp;e=png&amp;b=ffffff" alt="image.png"></p><h3 id="浅拷贝" tabindex="-1">浅拷贝 <a class="header-anchor" href="#浅拷贝" aria-label="Permalink to &quot;浅拷贝&quot;">​</a></h3><p><strong>浅拷贝</strong>是指创建一个新对象，新对象的属性值和原对象的属性值相同，但是它们共享同一个引用地址。换句话说，修改新对象的属性值会影响到原对象的属性值。浅拷贝适用于简单数据类型，如数字、字符串等不可变数据。</p><p>常见的浅拷贝方法有：</p><ul><li><code>Object.assign(target, source)</code></li><li><code>Spread Operator</code> 扩展运算符(...)</li><li><code>Array.slice()</code>和 <code>Array.concat()</code></li><li>使用第三方库（如 <code>lodash.clone</code>）</li></ul><h3 id="深拷贝" tabindex="-1">深拷贝 <a class="header-anchor" href="#深拷贝" aria-label="Permalink to &quot;深拷贝&quot;">​</a></h3><p><strong>深拷贝</strong>是指创建一个与原对象完全独立的新对象，它们互不影响。深拷贝适用于复杂数据类型，如对象、数组等可变数据，并且能够保留原始数据的结构和所有嵌套对象的引用关系。</p><p>常见的深拷贝方法有</p><ul><li><code>JSON.parse(JSON.stringify(object))</code></li><li>递归实现拷贝</li><li>使用第三方库（如 <code>lodash.cloneDeep</code>）</li></ul><p><strong>应用场景：</strong></p><ul><li>避免改变原始数据：在某些场景下，我们需要对数据进行修改，但是不希望影响到原始数据，这时可以使用浅拷贝。</li><li>保存数据状态：当需要保存某个对象或数组的状态，并在后续操作中使用不同版本的数据时，深拷贝非常有用。</li><li>处理嵌套结构：当数据结构中包含多层嵌套对象或数组时，深拷贝能够完整复制整个数据结构，保持引用关系。</li></ul><p><strong>需要注意的点：</strong> 深拷贝可能存在性能问题，因为拷贝的层级越深，复制的数据量就越大，可能会影响代码性能。因此，在选择使用深拷贝还是浅拷贝时，需要根据实际情况进行权衡和选择。</p><h3 id="深拷贝和浅拷贝的重要性" tabindex="-1">深拷贝和浅拷贝的重要性 <a class="header-anchor" href="#深拷贝和浅拷贝的重要性" aria-label="Permalink to &quot;深拷贝和浅拷贝的重要性&quot;">​</a></h3><p>深拷贝和浅拷贝在 <code>JavaScript</code> 开发中具有重要性，可以带来以下好处：</p><ol><li><p><strong>数据安全性</strong>：拷贝数据可以防止原始数据的意外改变。特别是多人协同开发或者在复杂数据处理的场景下，使用深拷贝和浅拷贝可以确保每个开发者都能够独立地操作数据，而不会相互干扰或冲突。</p></li><li><p><strong>状态保存</strong>：深拷贝和浅拷贝使得可以轻松地保存数据的不同版本或状态。在某些需要跟踪数据历史记录或回滚操作的场景中，深拷贝和浅拷贝允许我们在数据不同版本之间进行无缝切换，以便进一步处理或还原到之前的状态。</p></li><li><p><strong>减少内存占用</strong>：拷贝数据时，可以避免数据引用关系的共享，从而减少内存使用。在某些场景下，如果多个对象或数组使用同一份数据，可能会造成内存浪费。通过深拷贝或浅拷贝，我们可以创建新的数据副本，从而避免额外的内存占用。</p></li><li><p><strong>处理嵌套数据结构</strong>：<code>JavaScript</code> 中的对象和数组经常包含嵌套结构，即对象中嵌套了对象或数组，反之亦然。使用深拷贝和浅拷贝可以完整复制嵌套结构，保持原始数据的引用关系，并在处理和修改数据时不会对原始数据产生影响。</p></li></ol><p>总之，深拷贝和浅拷贝在 <code>JavaScript</code> 开发中具有重要性，能够保证数据的<strong>安全性</strong>、<strong>灵活处理数据状态</strong>、<strong>优化内存使用</strong>等。根据具体需求和场景，选择合适的拷贝方式可以帮助我们更好地处理数据和开发项目。</p><h2 id="二-深入浅拷贝" tabindex="-1">二. 深入浅拷贝 <a class="header-anchor" href="#二-深入浅拷贝" aria-label="Permalink to &quot;二. 深入浅拷贝&quot;">​</a></h2><h3 id="浅拷贝的定义和原理" tabindex="-1">浅拷贝的定义和原理 <a class="header-anchor" href="#浅拷贝的定义和原理" aria-label="Permalink to &quot;浅拷贝的定义和原理&quot;">​</a></h3><p><strong>定义</strong></p><p><code>JavaScript</code> 浅拷贝是指创建一个新对象或数组，新对象或数组的属性值和原对象或数组的属性值相同，但是它们共享同一个引用地址。也就是说，新对象或数组中的基本数据类型的属性是独立的，但是引类型的属性仍然指向原始对象或数组中的相引用。</p><p><strong>浅拷贝的原理</strong></p><p>通过复制源对象或数组的引用，将其赋值给新的变量。对于基本数据类型的属性，它们是不可变的，因此改变新对象或数组的属性值不会影响始对象或数组。但是对于引用类型的属性，它们的值是一个指向内存地址的引用，新对象或数组的引用类型属性和原始对象或数组的引用类型属性指向同一个地址。所以，修改新对象或数组中的引用类型属性会影响原始对象或数组中的属性。</p><p><strong>需要注意的点：</strong> 浅拷贝只能复制一层的属性。如果原始对象或数组的属性中包含了<strong>嵌套的</strong>对象或数组，则浅拷贝只会复制它们的引用。如果需要复制多层嵌套的对象或数组，并且保持独立性，需要使用深拷贝方式。</p><h3 id="常见的实现浅拷贝的几种方法" tabindex="-1">常见的实现浅拷贝的几种方法 <a class="header-anchor" href="#常见的实现浅拷贝的几种方法" aria-label="Permalink to &quot;常见的实现浅拷贝的几种方法&quot;">​</a></h3><p>在 <code>JavaScript</code> 中，可以使用以下几种方式手动实现浅拷贝：</p><p><strong>1. 使用 <code>Object.assign()</code>方法：</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> shallowCopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({}, obj)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>2. 使用扩展运算符<code>（Spread Operator）</code>：</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> shallowCopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>3. 使用循环遍历并赋值：</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> shallowCopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newObj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (obj.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasOwnProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      newObj[key] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj[key]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newObj</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>4. 使用 <code>Object.keys()</code>方法和 <code>Array.forEach()</code>方法遍历并赋值：</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> shallowCopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newObj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    newObj[key] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj[key]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newObj</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>以上的这些方法可以创建一个新的对象，并将原始对象的属性复制到新对象中。这样做可以确保新对象和原始对象不共享同一内存地址，当修改新对象时不会影响到原始对象。</p><p><strong>注意：</strong> 上述方法只能实现浅拷贝，如果原始对象中包含嵌套的对象或数组，则只会复制它们的引用，而不是进行递归的复制。如果需要实现深拷贝，应该使用其他方法，如递归遍历对象或数组并进行复制。</p><h3 id="浅拷贝的特点和限制" tabindex="-1">浅拷贝的特点和限制 <a class="header-anchor" href="#浅拷贝的特点和限制" aria-label="Permalink to &quot;浅拷贝的特点和限制&quot;">​</a></h3><p><strong>特点：</strong></p><ol><li>创建一个新的对象或数组，并将原始对象或数组的值复制到新对象或数组中。</li><li>复制的是对象或数组的第一层属性或元素，不会递归复制嵌套的对象或数组。</li><li>浅拷贝后的对象或数组与原始对象或数组共享同一级别的属性和元素，即修改其中一个对象或数组的值会影响到另一个对象或数组。</li></ol><p><strong>限制：</strong></p><ol><li>对于对象的浅拷贝，不能复制原型链上的属性和方法。</li><li>对于数组的浅拷贝，不能复制数组的特殊属性，如 <code>length</code> 属性。</li><li>如果原始对象或数组包含内置对象（如 <code>Date</code>、<code>RegExp</code> 等），浅拷贝只能复制其引用，而不是复制其具体值。</li><li>嵌套层级较深或有循环引用的对象或数组可能会导致无法正确进行浅拷贝。</li><li>某些特殊情况下的属性会被忽略，如不可枚举的属性、<code>Symbol</code> 类型的属性。</li></ol><h2 id="三-深入深拷贝" tabindex="-1">三. 深入深拷贝 <a class="header-anchor" href="#三-深入深拷贝" aria-label="Permalink to &quot;三. 深入深拷贝&quot;">​</a></h2><h3 id="深拷贝的定义和原理" tabindex="-1">深拷贝的定义和原理 <a class="header-anchor" href="#深拷贝的定义和原理" aria-label="Permalink to &quot;深拷贝的定义和原理&quot;">​</a></h3><p><strong>定义</strong></p><p><code>JavaScript</code> 深拷贝是指创建一个新的对象或数组，将原始对象或数组的所有层级的属性和元素都复制到新对象或数组中，包括嵌套的对象和数组。深拷贝后的新对象或数组与原始对象或数组完全独立，互不影响。</p><p><strong>原理</strong></p><p>实现深拷贝的原理是遍历原始对象或数组的每个属性或元素，如果是基本类型，则直接复制值；如果是对象或数组，则递归进行深拷贝。</p><p>基本的深拷贝算法可以使用递归来实现，通过递归遍历对象的属性或数组的元素，并对其进行深拷贝。通过递归地处理嵌套的对象和数组，确保所有层级的属性和元素都被正确复制到新的对象或数组中。</p><p><strong>需要注意的点：</strong> 深拷贝也有一些限制，如循环引用和处理不可枚举属性等。在实际使用中，可以根据需求使用成熟的深拷贝库或自行处理特定情况来实现更健壮的深拷贝。</p><h3 id="常见的实现深拷贝的几种方法" tabindex="-1">常见的实现深拷贝的几种方法 <a class="header-anchor" href="#常见的实现深拷贝的几种方法" aria-label="Permalink to &quot;常见的实现深拷贝的几种方法&quot;">​</a></h3><p><strong>1. 递归实现深拷贝：</strong></p><p>使用递归方法遍历对象或数组的每个属性或元素，对于基本类型直接复制，对于对象或数组递归深拷贝。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deepCopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;object&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果是基本类型或null，直接返回</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> copy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Array.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    copy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果是数组，创建一个空数组用于复制</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    obj.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      copy[index] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deepCopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 递归深拷贝每个元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    copy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果是对象，创建一个空对象用于复制</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      copy[key] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deepCopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj[key]) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 递归深拷贝每个属性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> copy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>2. JSON 序列化和反序列化：</strong></p><p>利用 <code>JSON.stringify</code> 将对象转换为字符串，再使用 <code>JSON.parse</code> 将字符串转换为新的对象，实现深拷贝。但该方法有一些限制，无法复制函数和循环引用对象。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deepCopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="深拷贝的特点和限制" tabindex="-1">深拷贝的特点和限制 <a class="header-anchor" href="#深拷贝的特点和限制" aria-label="Permalink to &quot;深拷贝的特点和限制&quot;">​</a></h3><p><strong>特点：</strong></p><ol><li><strong>完全独立性</strong>：深拷贝创建了一个全新的对象或数组，与原始对象或数组完全独立，互不影响。</li><li><strong>层级复制</strong>：深拷贝会递归复制对象或数组的所有层级，包括嵌套的对象和数组。</li><li><strong>数据一致性</strong>：深拷贝会保留原始对象或数组的所有属性和元素的值，确保复制后数据的一致性。</li></ol><p><strong>限制：</strong></p><ol><li><strong>性能开销</strong>：深拷贝可能会带来较大的性能开销，特别是对于复杂的对象或数组结构。递归遍历并复制每个属性或元素可能需要较长时间和消耗大量的计算资源。</li><li><strong>内存占用</strong>：深拷贝会占用额外的内存空间，尤其是当对象或数组结构很大时。如果需要深拷贝大型对象或数组，可能会对内存造成压力。</li><li><strong>循环引用</strong>：深拷贝可能会遇到循环引用的问题，即对象中存在互相引用的情况。在处理循环引用时，深拷贝可能会进入无限循环，导致栈溢出或代码崩溃。</li><li><strong>函数和原型方法</strong>：深拷贝不能复制函数和原型方法。JSON.stringify()和 JSON.parse()方法在进行深拷贝时会将函数序列化为 null，并丢失函数的功能。</li><li><strong>不可枚举属性</strong>：深拷贝可能会丢失对象的不可枚举属性。使用 Object.assign()或扩展运算符（...）进行深拷贝时，不可枚举属性不会被复制。</li></ol><h2 id="四-深拷贝-vs-浅拷贝" tabindex="-1">四. 深拷贝 vs 浅拷贝 <a class="header-anchor" href="#四-深拷贝-vs-浅拷贝" aria-label="Permalink to &quot;四. 深拷贝 vs 浅拷贝&quot;">​</a></h2><h3 id="区别和选择" tabindex="-1">区别和选择 <a class="header-anchor" href="#区别和选择" aria-label="Permalink to &quot;区别和选择&quot;">​</a></h3><p><strong>区别：</strong></p><ol><li>深拷贝：深拷贝创建了一个原始对象的完全独立副本，包括所有层级的属性和元素。对拷贝后的对象进行修改不会影响原始对象。</li><li>浅拷贝：浅拷贝创建了一个对原始对象的引用，拷贝后的对象与原始对象共享同一地址和内存。对拷贝后的对象进行修改可能会影响原始对象。</li></ol><p><strong>选择：</strong></p><ol><li><p>使用深拷贝的情况：</p><ul><li>需要创建原始对象的完全独立副本，在修改副本时不影响原始对象。</li><li>原始对象包含嵌套的对象或数组，需要完整复制整个层级的属性或元素。</li><li>对象中存在循环引用，需要处理循环引用的情况。</li><li>需要复制函数和原型方法。</li></ul></li><li><p>使用浅拷贝的情况：</p><ul><li>只需要复制原始对象的一层属性或元素，不需要递归复制整个层级。</li><li>原始对象很大，使用深拷贝可能会导致性能和内存占用问题。</li><li>对拷贝后的对象进行修改需要影响原始对象。</li></ul></li></ol><h3 id="性能比较" tabindex="-1">性能比较 <a class="header-anchor" href="#性能比较" aria-label="Permalink to &quot;性能比较&quot;">​</a></h3><p>在性能方面，一般情况下，浅拷贝的性能比深拷贝要更高效。这是因为浅拷贝只是复制了对象的引用或数组的引用，不会递归复制所有层级的属性或元素，所以执行速度相对较快。</p><p>相比之下，深拷贝需要递归遍历并复制对象的每个属性或元素，如果对象或数组的结较复杂、层级较深，或者数据量较大，深拷贝的性能会受到大的影响。特别是当原始对象中存在循环引用时，深拷贝容易陷入无限递归，进而导致性能问题，甚至导致代码崩溃。</p><p>因此，在对性能要求较高的场景下，如果不需要对对象的所有层级进行复制，可以选择使用浅拷贝方法。浅拷贝方法如 <code>Object.assign()</code>、扩展运算符<code>（...）</code>、<code>Array.prototype.slice()</code>等在大多数情况下都能满足需要。</p><p>不过，需要注意的是，深拷贝的性能缺点并不是普遍的，它主要取决于数据的大小、结构的复杂程度以及所选择的深拷贝方法的实现方式。对于小型、简单的对象或数组，深拷贝过程可能并不明显地影响性能。此外，一些专门优化过的深拷贝库，如 <code>lodash</code> 的 <code>cloneDeep</code> 方法，可以提供更好的性能。</p><p>因此，在实际使用中，需要根据具体的需求和数据特点，在性能和需求之间进行权衡和选择，找到最合适的拷贝方式。</p><h2 id="五-使用场景和注意事项" tabindex="-1">五. 使用场景和注意事项 <a class="header-anchor" href="#五-使用场景和注意事项" aria-label="Permalink to &quot;五. 使用场景和注意事项&quot;">​</a></h2><h3 id="不同场景的拷贝需求" tabindex="-1">不同场景的拷贝需求 <a class="header-anchor" href="#不同场景的拷贝需求" aria-label="Permalink to &quot;不同场景的拷贝需求&quot;">​</a></h3><p>在 <code>JavaScript</code> 中，不同场景可能有不同的拷贝需求。以下是几个常见的场景以及对应的拷贝需求：</p><ol><li><p><strong>修改原始数据</strong>：如果你需要在修改数据的同时保留原始数据的不变性，你通常会需要使用深拷贝。深拷贝会创建原始数据的完全独立副本，使得你可以自由地修改副本而不会影响到原始数据。</p></li><li><p><strong>传递数据给函数</strong>：当你将对象或数组作为参数传递给一个函数时，你通常希望函数内部的操作不会影响到原始数据。这时候你可以选择使用浅拷贝，将原始数据的引用传递给函数，确保函数内部只对副本进行操作。</p></li><li><p><strong>对象或数组的展开赋值</strong>：在 ES6 中，可以使用扩展运算符（...）来将一个对象或数组展开成一个新的对象或数组。这时候，你可能需要使用浅拷贝来创建新的对象或数组，以确保新对象或数组与原始数据没有引用关系。</p></li><li><p><strong>缓存数据</strong>：在一些情况下，你可能需要将某个对象或数组缓存起来以备后续使用，但又不希望后续对缓存数据的修改影响到原始数据。这时候你可以选择使用深拷贝，创建一个独立副本来作为缓存数据。</p></li></ol><p>需要根据具体的场景和需求来选择合适的拷贝方式，可以是深拷贝或浅拷贝，以满足数据操作的要求，并确保数据的一致性和完整性。</p><h3 id="避免循环引用问题" tabindex="-1">避免循环引用问题 <a class="header-anchor" href="#避免循环引用问题" aria-label="Permalink to &quot;避免循环引用问题&quot;">​</a></h3><p>要避免 <code>JavaScript</code> 中的循环引用问题，可以使用以下方法进行拷贝：</p><ol><li><p><strong>使用递归和缓存</strong>：在进行深拷贝时，可以通过递归遍历对象的属性或数组的元素，并使用缓存来跟踪已经拷贝过的对象。当遇到循环引用时，检查缓存中是否已经存在该对象的拷贝，如果存在则直接使用缓存的拷贝对象，避免无限递归。</p></li><li><p><strong>使用第三方库</strong>：许多第三方库（如 lodash、immer 等）已经为拷贝操作提供了专门优化的方法，可以处理循环引用问题。这些库通常会使用类似于上述的递归和缓存的方法来实现深拷贝，建议使用这些库来处理复杂的拷贝场景。</p></li><li><p><strong>手动处理循环引用</strong>：如果不想依赖第三方库，并且知道自己的数据结构和循环引用的位置，也可以手动处理循环引用问题。在拷贝过程中，设置一个标记来表示已经拷贝过的对象，并在遇到循环引用时，将属性或元素设置为之前拷贝的对象的引用。</p></li></ol><p>无论采用哪种方法，都需要谨慎处理循环引用问题，以确保拷贝过程的正确性和性能。如果数据结构非常复杂或循环引用较多，建议使用专门的拷贝库或借助第三方库来处理循环引用问题。</p><h3 id="避免拷贝过程中的副作用" tabindex="-1">避免拷贝过程中的副作用 <a class="header-anchor" href="#避免拷贝过程中的副作用" aria-label="Permalink to &quot;避免拷贝过程中的副作用&quot;">​</a></h3><p>在 <code>JavaScript</code> 中，避免拷贝过程中的副作用可以采取以下方法：</p><ol><li><p><strong>使用纯函数</strong>：确保拷贝过程中的函数没有副作用。纯函数是指函数的输出仅由输入决定，没有对外部状态的修改和影响。使用纯函数可以避免在拷贝过程中产生意外的副作用。</p></li><li><p><strong>使用不可变数据结构</strong>：在拷贝过程中，尽量使用不可变数据结构。不可变数据结构不允许在原始对象上进行修改操作，而是通过创建新的对象来实现更改。这样可以避免原始对象被不小心修改，导致副作用的产生。</p></li><li><p><strong>避免直接引用和修改外部状态</strong>：在拷贝过程中，避免直接引用和修改外部状态，即避免对全局变量、共享对象等进行修改。应该通过函数参数传递需要拷贝的数据，将拷贝的操作封装在函数内部，从而避免对外部状态造成意外的改变。</p></li><li><p><strong>使用浅拷贝而非深拷贝</strong>：在某些场景下，深拷贝可能会引入不必要的副作用，尤其是当对象或数组中包含大量的嵌套对象时。在这种情况下，可以考虑使用浅拷贝来避免不必要的开销和潜在的副作用。</p></li><li><p><strong>使用专门的拷贝库</strong>：许多第三方库（如 <code>lodash</code>、<code>immer</code> 等）提供了专门优化的拷贝方法，旨在避免副作用。这些库通常会采用不可变数据结构和纯函数的概念，并提供高效且安全的拷贝操作，可以减少副作用的风险。</p></li></ol><p>尽管以上方法可以减少副作用的发生，但仍需在编写代码时谨慎操作和评估拷贝过程中的可能副作用。理解数据的结构和操作，并熟悉相关的拷贝方法，有助于避免副作用的产生。</p><h2 id="六-总结" tabindex="-1">六. 总结 <a class="header-anchor" href="#六-总结" aria-label="Permalink to &quot;六. 总结&quot;">​</a></h2><h3 id="深拷贝和浅拷贝的优缺点" tabindex="-1">深拷贝和浅拷贝的优缺点 <a class="header-anchor" href="#深拷贝和浅拷贝的优缺点" aria-label="Permalink to &quot;深拷贝和浅拷贝的优缺点&quot;">​</a></h3><p>深拷贝和浅拷贝都是在 JavaScript 中用于复制对象或数组的方法，它们各自有一些优点和缺点：</p><table><thead><tr><th>拷贝方式</th><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>浅拷贝</td><td>1. 简单快速：浅拷贝只是复制引用，而不复制对象本身，因此执行速度更快。<br>2. 节省内存：由于只是复制引用，不会占用额外的内存空间。</td><td>1. 引用关系：如果原始对象或数组发生变化，拷贝后的对象或数组也会受到影响，这可能会导致副作用。<br>2. 嵌套对象或数组：浅拷贝只复制一层深度的对象或数组，如果遇到嵌套的对象或数组，仍然会存在引用关系。</td></tr><tr><td>深拷贝</td><td>1. 完全独立：深拷贝创建了完全独立的对象或数组，与原始对象没有任何引用关系。<br>2. 完整复制：深拷贝复制了对象或数组的所有层级，包括嵌套对象或数组。</td><td>1. 性能消耗：深拷贝会对原始对象或数组的每个元素进行递归遍历和复制，所以对于大型的嵌套结构，可能会消耗较多的时间和内存。<br>2. 循环引用问题：如果对象或数组存在循环引用的情况，深拷贝可能导致无限递归，需要额外的处理来解决循环引用问题。</td></tr></tbody></table><h3 id="实际项目中如何选择" tabindex="-1">实际项目中如何选择 <a class="header-anchor" href="#实际项目中如何选择" aria-label="Permalink to &quot;实际项目中如何选择&quot;">​</a></h3><p>在实际 <code>JavaScript</code> 项目中，开发者选择深拷贝和浅拷贝的方法应该基于具体的需求和场景。以下是一些常见的选择场景和建议：</p><ol><li><p><strong>对象属性的简单复制</strong>：如果只需要复制的属性，并且这些属性是原始值类型（如字符串、数字等），则可以使用浅拷贝。这样可以节省资源并保持简洁性。</p></li><li><p><strong>嵌套对象或数组的复制</strong>：如果需要复制一个对象或数组，并且它们包含嵌套的对象或数组，那么需要使用深拷贝。这样可以确保复制的对象是完全独立的，避免副作用。</p></li><li><p><strong>避免副作用和引用关系</strong>：如果在项目中有涉及对数据的修改且需要保证拷贝后的对象与原始对象无关联，那么应该使用深拷贝。这样可以避免对原始对象产生意外的副作用。</p></li><li><p><strong>循环引用问题</strong>：如果在对象或数组中存在循环引用的情况，使用深拷贝时需要注意解决循环引用问题。可以使用第三方库或手动编写代码来检测和处理循环引用，确保深拷贝的正确性和可靠性。</p></li></ol><p>总体而言，<strong>深拷贝</strong>提供了更强大的复制能力和完全独性，但也带来了性能消耗。<strong>浅拷贝</strong>简单快速，适用于简单的复制场景。根据具体情选择合适的拷贝方式，可以在项目开发中取得更好的效果。</p><h2 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-label="Permalink to &quot;参考文档&quot;">​</a></h2><p>如果是处理复杂的拷贝场景，建议使用专门的拷贝库：许多第三方库（如 <code>lodash</code> 等）提供了专门优化的拷贝方法，旨在避免副作用。这些库通常会采用不可变数据结构和纯函数的概念，并提供高效且安全的拷贝操作，可以减少副作用的风险。</p><ol><li><p><a href="https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy" target="_blank" rel="noreferrer">MDN - 深拷贝</a></p></li><li><p><a href="https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy" target="_blank" rel="noreferrer">MDN - 浅拷贝</a></p></li><li><p><a href="https://lodash.com/docs/4.17.15#cloneDeep" target="_blank" rel="noreferrer">Lodash - 深拷贝</a></p></li><li><p><a href="https://lodash.com/docs/4.17.15#clone" target="_blank" rel="noreferrer">Lodash - 浅拷贝</a></p></li><li><p><a href="https://jquery.com/" target="_blank" rel="noreferrer">jQuery</a>：提供的 <code>$.extend()</code> 方法可以进行浅拷贝，没有直接提供深拷贝的方法。</p></li></ol><h2 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h2><p>以上是在实际项目实践后的总结，其中的拷贝方法也是经常自己使用的方法，尽管许多第三方库实现的非常优秀，但是我们也应该理解深拷贝和前拷贝的实现原理和应用场景，理解出现某些问题后我们应该如何解决。希望本文能让你对拷贝有一个新的认识和收获。</p>`,109);function k(r,o,d,E,g,c){const s=p("ArticleFooter");return t(),a("div",null,[e,n(s,{link:"https://juejin.cn/post/7280746697847996479"})])}const F=i(h,[["render",k]]);export{b as __pageData,F as default};
