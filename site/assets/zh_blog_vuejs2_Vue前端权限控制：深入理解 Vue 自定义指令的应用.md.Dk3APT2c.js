import{_ as i,c as a,I as n,aU as l,o as p,E as h}from"./chunks/framework.BTzRA3v_.js";const F=JSON.parse('{"title":"实现细粒度的前端权限控制：深入理解 Vue 自定义指令的应用","description":"","frontmatter":{"title":"实现细粒度的前端权限控制：深入理解 Vue 自定义指令的应用"},"headers":[],"relativePath":"zh/blog/vuejs2/Vue前端权限控制：深入理解 Vue 自定义指令的应用.md","filePath":"zh/blog/vuejs2/Vue前端权限控制：深入理解 Vue 自定义指令的应用.md","lastUpdated":1727083629000}'),t={name:"zh/blog/vuejs2/Vue前端权限控制：深入理解 Vue 自定义指令的应用.md"},k=l(`<h1 id="实现细粒度的前端权限控制-深入理解-vue-自定义指令的应用" tabindex="-1">实现细粒度的前端权限控制：深入理解 Vue 自定义指令的应用 <a class="header-anchor" href="#实现细粒度的前端权限控制-深入理解-vue-自定义指令的应用" aria-label="Permalink to &quot;实现细粒度的前端权限控制：深入理解 Vue 自定义指令的应用&quot;">​</a></h1><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2af6fef1ad1743908889ee08ffa4ad2d~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1280&amp;h=540&amp;s=135147&amp;e=png&amp;b=69c181" alt="image.png"></p><h2 id="一-引言" tabindex="-1">一. 引言 <a class="header-anchor" href="#一-引言" aria-label="Permalink to &quot;一. 引言&quot;">​</a></h2><p>Vue.js 提供了一种简单、灵活的方式来创建交互式的用户界面。在 Vue.js 中，指令是一种特殊的属性，可以附加到 HTML 元素上以执行一些操作。我们可以使用自定义指令来实现各种功能，比如：权限控制、自动聚焦、拖动指令等等。</p><p>权限控制是 Web 应用程序中的一个重要问题，尤其是<strong>细粒度</strong>的前端权限控制，比如不同的用户拥有不同的操作权限，确保只有经过身份验证的用户才能访问或操作受保护的资源。通过使用自定义指令，我们可以方便地实现权限控制功能。在本篇文章中，我们将介绍如何使用 Vue.js 实现自定义权限指令，并且利用它实现细粒度的前端权限控制。</p><p>本篇文章将涵盖以下问题：</p><ul><li>什么是自定义指令</li><li>如何快速创建自定义指令</li><li>了解指令的生命周期</li><li>自定义指令的两种方式</li><li>如何在 Vue.js 中使用自定义指令实现权限控制</li></ul><h2 id="二-什么是自定义指令" tabindex="-1">二. 什么是自定义指令 <a class="header-anchor" href="#二-什么是自定义指令" aria-label="Permalink to &quot;二. 什么是自定义指令&quot;">​</a></h2><p>自定义指令是 Vue.js 框架提供的一项强大功能，它允许开发者根据自己的需求，定义全局或局部指令，以便在 DOM 元素上添加特定的行为和功能。自定义指令的主要作用是扩展 Vue.js 框架的能力，以满足特定的业务需求。</p><p>除了 Vue 内置的一系列指令 (比如 v-model 或 v-show) 之外，Vue 还允许你注册自定义的指令 (Custom Directives)。</p><p>自定义指令可以用来操作 DOM，不仅可用于定义任何的 DOM 操作，并且是可复用的。</p><h3 id="如何快速创建自定义指令" tabindex="-1">如何快速创建自定义指令 <a class="header-anchor" href="#如何快速创建自定义指令" aria-label="Permalink to &quot;如何快速创建自定义指令&quot;">​</a></h3><p>以定义一个最简单的自定义指令为例，需要执行以下步骤：</p><ol><li>定义一个具有 <code>bind</code> 和 <code>update</code> 函数的对象。</li><li>在 Vue 实例或全局范围内使用 <code>Vue.directive()</code> 方法将指令注册为全局指令。</li><li>在模板中使用自定义指令。</li></ol><p>下面是一个简单的自定义指令示例：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">directive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;focus&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    el.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">focus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    el.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">blur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>在这个例子中，我们创建了一个名为 <code>focus</code> 的自定义指令。当元素被绑定时，它会调用 <code>focus()</code> 方法，使元素获得焦点。当元素被更新时，它会调用 <code>blur()</code> 方法，使元素失去焦点。</p><h2 id="三-自定义指令的两种类型" tabindex="-1">三. 自定义指令的两种类型 <a class="header-anchor" href="#三-自定义指令的两种类型" aria-label="Permalink to &quot;三. 自定义指令的两种类型&quot;">​</a></h2><p>Vue 自定义指令可以分为全局指令和局部指令两种类型。全局自定义指令和局部自定义指令。全局自定义指令可以在整个应用程序中使用，而局部自定义指令只能在特定的 Vue 实例或组件中使用。</p><ol><li>全局指令：全局指令是在 Vue 实例化之前就被注册为全局可用的指令。通过在 Vue 实例化之前使用 Vue.directive() 方法全局注册指令。全局指令在任何组件中都可以使用，不需要显式地导入或声明。</li></ol><p>示例：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 全局注册自定义指令</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">directive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;custom&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">binding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 指令绑定时的逻辑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><ol start="2"><li>局部指令：局部指令是在组件中局部定义和使用的指令。它只在定义了该指令的组件内部才可以使用。</li></ol><p>示例：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-custom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;这是一个局部指令&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  directives: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    custom: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">binding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 指令绑定时的逻辑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>在这个示例中，<code>v-custom</code> 是一个局部指令，只能在当前组件内部使用。它通过在组件的 <code>directives</code> 选项中注册指令，并提供相应的指令钩子函数，实现了局部指令的功能。</p><p>全局指令和局部指令可以根据实际需求选择使用，全局指令适用于在多个组件中普遍使用的指令，而局部指令适用于在特定组件中使用的指令。</p><h2 id="四-自定义指令的生命周期" tabindex="-1">四. 自定义指令的生命周期 <a class="header-anchor" href="#四-自定义指令的生命周期" aria-label="Permalink to &quot;四. 自定义指令的生命周期&quot;">​</a></h2><p>首先，要实现自定义指令，首先需要理解一个指令从创建到消亡的过程，它的生命周期包括五个阶段，如下所示：</p><ol><li><strong>bind</strong>：只调用一次，指令第一次绑定到元素时调用。可以在这里进行一些初始化操作。</li><li><strong>inserted</strong>：被绑定的元素插入父节点时调用。可以在这里进行一些操作，比如获取元素的子节点等。</li><li><strong>update</strong>：当指令所在的组件实例化完成后，和刚创建时相比，会触发该钩子函数。可以在这里进行一些更新操作，比如获取元素的子节点等。</li><li><strong>componentUpdated</strong>：被绑定的元素所在的组件渲染完成之后调用。可以在这里进行一些操作，比如获取元素的子节点等。</li><li><strong>unbind</strong>：指令解绑时调用。可以在这里进行一些清理操作。</li></ol><p>下面是一个简单的示例代码：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-custom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;这是一个自定义指令&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    directives: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      custom: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">binding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">vnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bind&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, el, binding, vnode)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        inserted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">binding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">vnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;inserted&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, el, binding, vnode)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">binding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">vnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;update&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, el, binding, vnode)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        componentUpdated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">binding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">vnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;componentUpdated&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, el, binding, vnode)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        unbind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">binding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">vnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;unbind&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, el, binding, vnode)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>在这个示例中，我们定义了一个名为 <code>v-custom</code> 的自定义指令，并在其中实现了五个生命周期钩子函数。在模板中使用这个指令时，每次绑定、插入、更新、组件更新和解绑都会打印相应的日志信息。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62c760c17b864fe1a17934a41869c565~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2226&amp;h=454&amp;s=207497&amp;e=png&amp;b=fefefe" alt="image.png"></p><h2 id="五-自定义指令实现权限控制" tabindex="-1">五. 自定义指令实现权限控制 <a class="header-anchor" href="#五-自定义指令实现权限控制" aria-label="Permalink to &quot;五. 自定义指令实现权限控制&quot;">​</a></h2><h3 id="_1-定义权限指令" tabindex="-1">1. 定义权限指令 <a class="header-anchor" href="#_1-定义权限指令" aria-label="Permalink to &quot;1. 定义权限指令&quot;">​</a></h3><p>首先，我们需要定义一个自定义指令。在 Vue.js 中，指令是带有 v- 前缀的特殊属性，用于向元素添加特定的行为。我们可以使用 directive 方法来定义一个自定义指令：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">directive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hasPermission&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  inserted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">binding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 获取需要检查的权限名称</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> permissionName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> binding.value</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 判断当前用户是否拥有该权限</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">checkPermission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(permissionName)) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 如果用户没有该权限，则将其隐藏或移除元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ;(el.parentNode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> el.parentNode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (el.style.display </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;none&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 如果用户拥有该权限，则显示元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>上述代码中，我们定义了一个名为 hasPermission 的自定义指令，当该指令被插入到元素中时，会通过 <code>inserted</code> 钩子函数来执行相应的逻辑。在以上的代码中，我们通过 <code>checkPermission</code> 方法来判断当前用户是否拥有指定的权限。如果用户没有该权限，则将其隐藏；如果用户拥有该权限，则显示元素。</p><blockquote><p>注意：隐藏和移除元素虽然在展示上我们看不到有任何不同，但其实之间有质的差别。类似于 <code>v-if</code> 和 <code>v-show</code>，隐藏其实是控制的 <code>display</code> 样式，赋值为 none 或 block。而移除则直接是移除的 dom 元素，页面上将不存在这个元素。因此，对于权限控制来说，移除具有比较高的安全性！</p></blockquote><ul><li>使用 el.parentNode.removeChild 移除元素的效果</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77350b8babc341b1abc8e718e11ea96f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1221&amp;h=440&amp;s=657531&amp;e=gif&amp;f=57&amp;b=fdfcfc" alt="record-2.gif"></p><ul><li>使用 el.style.display = &quot;none&quot; 隐藏元素的效果</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/524ceff22a8e41328bbba80b27b20192~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1221&amp;h=440&amp;s=827536&amp;e=gif&amp;f=54&amp;b=fdfcfc" alt="record-3.gif"></p><h3 id="_2-实现-checkpermission-方法" tabindex="-1">2. 实现 checkPermission 方法 <a class="header-anchor" href="#_2-实现-checkpermission-方法" aria-label="Permalink to &quot;2. 实现 checkPermission 方法&quot;">​</a></h3><p>接下来，我们需要实现 <code>checkPermission</code> 方法，该方法用于检查当前用户是否拥有指定的权限。在这个方法中，我们可以从服务器端获取用户的权限列表，或者从本地存储中获取已存储的权限列表。这里我们假设已经从服务器端获取并存储了用户的权限列表，并将其存储在了 <code>localStorage</code> 中。具体实现如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> checkPermission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">permissionName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 获取当前登录用户的权限列表（假设已经从服务器获取并存储在了 localStorage 中）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> userPermissions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;userPermissions&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 判断用户是否拥有指定的权限</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userPermissions.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">indexOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(permissionName) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>上述代码中，我们首先从 <code>localStorage</code> 中获取已存储的用户权限列表 <code>userPermissions</code>。然后，我们使用 <code>indexOf</code> 方法来判断当前用户是否拥有指定的权限。如果该用户拥有该权限，则返回 <code>true</code>；否则返回 <code>false</code>。</p><h3 id="_3-使用权限指令" tabindex="-1">3. 使用权限指令 <a class="header-anchor" href="#_3-使用权限指令" aria-label="Permalink to &quot;3. 使用权限指令&quot;">​</a></h3><p>最后，我们可以在需要添加权限控制的元素的 <code>v-hasPermission</code> 属性上绑定需要检查的权限名称。例如：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-hasPermission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&#39;edit&#39;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;编辑按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-hasPermission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&#39;delete&#39;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;删除按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>以上代码中，我们在需要添加编辑权限控制的编辑按钮上使用了 <code>v-hasPermission</code> 属性，并将其绑定到了 <code>edit</code> 这个权限名称上。这样，当用户点击该按钮时，就会触发 <code>hasPermission</code> 钩子函数，从而判断其是否有编辑权限。如果有权限，则显示按钮；否则隐藏按钮。</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7ffd6b522144893a5aeccaf547e9701~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=815&amp;h=298&amp;s=64027&amp;e=gif&amp;f=43&amp;b=fefefe" alt="record-1.gif"></p><h2 id="六-总结" tabindex="-1">六. 总结 <a class="header-anchor" href="#六-总结" aria-label="Permalink to &quot;六. 总结&quot;">​</a></h2><p>本文介绍了 Vue.js 中自定义指令的实现方法。通过自定义指令，我们可以控制 DOM 元素的显示和隐藏、修改元素属性等操作，从而实现更加灵活的交互效果。</p><p>通过使用自定义指令实现权限控制，我们可以更好地控制页面元素的显示和隐藏，从而提供更好的用户体验。此外，我们还可以使用自定义指令来验证用户输入的数据是否符合要求，以确保应用程序的安全性和可靠性。</p><p>在实现自定义指令时，我们需要遵循以下步骤：</p><p><strong>1. 定义一个具有钩子函数的对象，该对象包含了指令的各种行为和逻辑。</strong></p><p><strong>2. 在 Vue 实例或组件中注册该指令。</strong></p><p><strong>3. 在 HTML 中使用该指令。</strong></p><p>需要注意的是，在使用自定义指令时，我们需要确保在 Vue 实例或组件中传递了正确的上下文（context），以便能够正确地获取到权限列表等信息。同时，我们也需要在指令对象中定义相应的钩子函数，以实现不同的行为和逻辑。</p><p>总之，Vue.js 自定义指令是一个非常强大的功能，可以帮助我们快速构建出高效、安全和可靠的 Web 应用程序。其次通过自定义指令我们可以实现更多复杂的功能，而本篇文章所讲的权限指令属于项目中最常见且比较容易实现的，因此接下来需要我们探索去实现更多的其他指令！</p>`,62);function e(E,d,r,g,c,o){const s=h("ArticleFooter");return p(),a("div",null,[k,n(s,{link:"https://juejin.cn/post/7299354844447653942"})])}const u=i(t,[["render",e]]);export{F as __pageData,u as default};
