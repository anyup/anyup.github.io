import{_ as i,c as a,o as s,aU as e}from"./chunks/framework.BTzRA3v_.js";const b=JSON.parse('{"title":"Git 删除已推送的提交记录","description":"","frontmatter":{"title":"Git 删除已推送的提交记录"},"headers":[],"relativePath":"zh/blog/tools/Git删除已推送的提交记录.md","filePath":"zh/blog/tools/Git删除已推送的提交记录.md","lastUpdated":1732257280000}'),t={name:"zh/blog/tools/Git删除已推送的提交记录.md"},p=e('<h1 id="git-删除已推送的提交记录" tabindex="-1">Git 删除已推送的提交记录 <a class="header-anchor" href="#git-删除已推送的提交记录" aria-label="Permalink to &quot;Git 删除已推送的提交记录&quot;">​</a></h1><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/61be231d518e48d7934a65c7579b945b~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1732861912&amp;x-orig-sign=7JospY6wrWHgcfY71e8Kjg8Wc6k%3D" alt="Snipaste2024-11-2116-55-53.png"></p><p>问题：如何在 <code>Git</code> 中删除已推送（<code>push</code>）的提交记录，因为我从来没这么操作过，所以关于如何实现，问了我身边的几个同事，他们都说实现不了。</p><p>从发现问题以来，如何解决真是令我头疼的事情，我一度想要重新建库。而现在解决问题后，我觉得真简单，还挺好玩的。那么问题来了，我为什么会有删除提交记录这个想法？且听我细细道来！</p><h2 id="一-背景" tabindex="-1">一. 背景 <a class="header-anchor" href="#一-背景" aria-label="Permalink to &quot;一. 背景&quot;">​</a></h2><p>经常在 <code>Github</code> 和 <code>Gitee</code> 中做开源项目的人应该了解，<code>Gitee</code> 有一个“<strong>仓库镜像管理功能</strong>”，目的是支持在 <code>Gitee</code> 与其他代码托管平台（如 <code>Github</code>） 实现仓库数据的⾃动同步，包括代码提交、分⽀和标签。我主要是因为懒得在两个平台分别管理，所以我使用了这个功能，提交代码到 <code>Gitee</code>，再由“<strong>仓库镜像管理功能</strong>”同步到 <code>Github</code>。</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/89a16161b3d94153985e688b65aa930c~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1732861912&amp;x-orig-sign=tV2aP6YYQiJLedjbnBkJjKDrwyY%3D" alt="image.png"></p><p>该功能在配置好之后，使用正常，所以最近一直没看提交记录。然而就在昨天查看 <code>Github</code> 仓库代码时发现，好多代码没有同步成功。所以我立即登录 <code>Gitee</code> 查看，发现确实是有好长时间同步失败了，原因大致提示我有大文件同步失败导致最终同步任务失败！</p><p>我确实是最近上传了一个大文件，179MB 左右，因此我进行如下的操作测试：</p><p>我立即删除了大文件，重新提交到 <code>Gitee</code>，然后再次通过“<strong>仓库镜像管理功能</strong>”手动同步，发现还是同样的原因，同步失败！</p><blockquote><p>我陷入了沉思，这是为什么呢？明明都已经删除大文件，竟然还是提示有大文件？</p></blockquote><p>后来我想了一下，这是因为，同步功能会包括所有的 <code>push</code> 记录，虽然现在最新的结果是删除了，但是由于提交记录，在某一个分支节点，仍然会存在提交记录，同时也会存在大文件！</p><blockquote><p>我又开始了我的探索之旅，现在的我有很多疑问？</p></blockquote><p>最终我又想到，如果我把这条提交记录给抹除掉（删除已推送（push）的提交记录），那么会不会同步成功呢？不到最后一刻，我还是对其持怀疑态度的。</p><p>最终实现方案是：我开始了我的探索，研究如何 “<strong>删除已推送的 Git 提交记录</strong>” ？幸运的是方案是可行的。因此，最终也解决了我 <code>Gitee</code> 的仓库同步问题！</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/0939019dcb6f4eeca9ef497475d8a108~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1732861912&amp;x-orig-sign=d2Q4Lb%2FZjz6I1DDO0KnzsBLZpwI%3D" alt="image.png"></p><p>本篇文章记录方案，以增长经验，同时帮助遇到同样问题的小伙伴们。接下来我将介绍使用 <code>git rebase</code> 命令来实现这一目标。</p><h2 id="二-使用-git-rebase" tabindex="-1">二. 使用 <code>git rebase</code> <a class="header-anchor" href="#二-使用-git-rebase" aria-label="Permalink to &quot;二. 使用 `git rebase`&quot;">​</a></h2><p><code>git rebase</code> 命令可以将一个分支的更改应用到另一个分支上，同时保持线性的提交历史。通过交互式 rebase，你可以删除特定的提交。</p><p><strong>步骤如下：</strong></p><h3 id="_1-切换到要修改的分支" tabindex="-1">1. 切换到要修改的分支 <a class="header-anchor" href="#_1-切换到要修改的分支" aria-label="Permalink to &quot;1. 切换到要修改的分支&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">branch-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="_2-找到提交哈希值" tabindex="-1">2. 找到提交哈希值 <a class="header-anchor" href="#_2-找到提交哈希值" aria-label="Permalink to &quot;2. 找到提交哈希值&quot;">​</a></h3><p>可以通过 <code>VSCode</code> 工具或在代码托管平台上查看，也可以通过 <code>Git</code> 命令进行查看：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --pretty=oneline</span></span></code></pre></div><p><code>--pretty=oneline</code>：表示以单行的形式显示每个提交，并且显示完整的 40 个字符的哈希值。</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/595bb26240d140f98047f22134f39a5e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1732861912&amp;x-orig-sign=u5qFMgVB4saT50XuemcX1h3djAw%3D" alt="image.png"></p><h3 id="_3-启动交互式-rebase" tabindex="-1">3. 启动交互式 rebase <a class="header-anchor" href="#_3-启动交互式-rebase" aria-label="Permalink to &quot;3. 启动交互式 rebase&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~N</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">commit-has</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">commit-has</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">^</span></span></code></pre></div><p>其中:</p><ul><li><p><code>N</code> 是你想要修改的最近的提交数量。这将打开一个文本编辑器，列出这些提交。</p></li><li><p><code>commit-hash</code> 是你想要修改的提交的哈希值，这将从该提交开始应用 rebase，不包含该提交。</p></li><li><p><code>^</code> 是一个特殊字符，表示是否包含该提交。如果你想要从当前提交开始应用 rebase，你可以使用 <code>git rebase -i &lt;commit-hash&gt;^</code>。</p></li></ul><h3 id="_4-编辑提交列表" tabindex="-1">4. 编辑提交列表 <a class="header-anchor" href="#_4-编辑提交列表" aria-label="Permalink to &quot;4. 编辑提交列表&quot;">​</a></h3><p>把要删除的 <code>commit</code> 的行前面的 <code>pick</code> 改为 <code>drop</code>，或者直接删除这一行也可以。</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/c867569ac22243a4b0262988bba2db4d~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1732861912&amp;x-orig-sign=4J%2FoIElumqtZ6tmfNLBnuHVCEsw%3D" alt="image.png"></p><p>如下列几个关键字含义：</p><ul><li><p><code>pick</code>：保留该提交</p></li><li><p><code>reword</code>：修改该提交的提交信息</p></li><li><p><code>edit</code>：在该提交之后停止，以便进一步修改</p></li><li><p><code>squash</code>：将该提交与前一个提交合并</p></li><li><p><code>fixup</code>：将该提交与前一个提交合并，但不保留提交信息</p></li><li><p><code>exec</code>：执行指定的 shell 命令</p></li><li><p><code>drop</code>：删除该提交</p></li></ul><h3 id="_5-保存并关闭编辑器" tabindex="-1">5. 保存并关闭编辑器 <a class="header-anchor" href="#_5-保存并关闭编辑器" aria-label="Permalink to &quot;5. 保存并关闭编辑器&quot;">​</a></h3><p>保存并退出编辑器(按 esc，然后输入 :wq 后按回车键)，Git 将按照你的指令执行 rebase 操作，重新应用剩余的 commits</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/839ec77af1d642b19c398c8396c4b26a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1732861912&amp;x-orig-sign=l2J0h0IDUo%2BCtpEcl3xpzrlNREc%3D" alt="image.png"></p><p>如果你改动的关联代码很少，换句话说，你提交完这个记录后，后续的代码都没有再对相关文件进行操作，那么你是幸运的，可以完美的删除该提交，但是如果后续 Git 提交产生关联代码较多，那么你可能都需要对其处理，还是具体情况具体分析吧</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/e9c9a54edff34b5193806eab31fc1f0e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1732861912&amp;x-orig-sign=7VqE%2FG69ufVf00neb2sUe6Cqzbk%3D" alt="image.png"></p><h3 id="_6-强制推送更改到远程仓库" tabindex="-1">6. 强制推送更改到远程仓库 <a class="header-anchor" href="#_6-强制推送更改到远程仓库" aria-label="Permalink to &quot;6. 强制推送更改到远程仓库&quot;">​</a></h3><p>最重要的一步，如果上述都执行的很顺利，那么你可以强制推送更改到远程仓库，神奇的是，你会发现，你提交的操作记录确实被删除了。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span></code></pre></div><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/b869c39adc764022b89e51e6659241c7~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1732861912&amp;x-orig-sign=1z57mwjSeszhwts3QYph4tzQxO8%3D" alt="image.png"></p><p>最终结果是：提交记录的确被删除了</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/eeae6b58601a4e288b71a26a32f5053f~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgYW55dXA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIzMDU3NjQ3MjU4OTk3NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1732861912&amp;x-orig-sign=yiaWv88ySXscOLIryMe6qRZClXQ%3D" alt="image.png"></p><h2 id="三-其他方式" tabindex="-1">三. 其他方式 <a class="header-anchor" href="#三-其他方式" aria-label="Permalink to &quot;三. 其他方式&quot;">​</a></h2><p>网上一搜，还有其他的方式，但是我未曾尝试过，感兴趣的可以尝试一下另外的方式：</p><h3 id="方法一-使用-git-reset" tabindex="-1">方法一： 使用 <code>git reset</code> <a class="header-anchor" href="#方法一-使用-git-reset" aria-label="Permalink to &quot;方法一： 使用 `git reset`&quot;">​</a></h3><p><code>git reset</code> 命令可以将当前分支的指针移动到指定的提交，并可选择性地保留或丢弃工作目录中的更改。如果提交已经被推送到远程仓库，你可能需要强制推送更改。</p><p><strong>步骤如下：</strong></p><h4 id="_1-切换到要修改的分支-1" tabindex="-1"><strong>1. 切换到要修改的分支</strong> <a class="header-anchor" href="#_1-切换到要修改的分支-1" aria-label="Permalink to &quot;**1. 切换到要修改的分支**&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">branch-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h4 id="_2-执行重置操作" tabindex="-1"><strong>2. 执行重置操作</strong> <a class="header-anchor" href="#_2-执行重置操作" aria-label="Permalink to &quot;**2. 执行重置操作**&quot;">​</a></h4><ul><li><p>如果你想保留更改但不保留提交历史，可以使用混合重置：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --mixed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~N</span></span></code></pre></div><p>其中 <code>N</code> 是你要回退的提交数量。</p></li><li><p>如果你希望完全删除这些更改，可以使用硬重置：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~N</span></span></code></pre></div></li></ul><blockquote><p>注意：硬重置会丢失未提交的更改，请谨慎使用。</p></blockquote><h4 id="_3-强制推送更改到远程仓库" tabindex="-1"><strong>3. 强制推送更改到远程仓库</strong> <a class="header-anchor" href="#_3-强制推送更改到远程仓库" aria-label="Permalink to &quot;**3. 强制推送更改到远程仓库**&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span></code></pre></div><p>强制推送会覆盖远程仓库上的分支，因此请确保团队中的其他成员了解这一操作，以避免造成不必要的混乱。</p><h3 id="方法二-使用-git-revert" tabindex="-1">方法二：使用 <code>git revert</code> <a class="header-anchor" href="#方法二-使用-git-revert" aria-label="Permalink to &quot;方法二：使用 `git revert`&quot;">​</a></h3><p><code>git revert</code> 命令会创建一个新的提交来撤销指定的提交，而不会改变现有的提交历史。这种方法更为安全，因为它不会重写历史记录。</p><p><strong>步骤如下：</strong></p><h4 id="_1-找到要撤销的提交哈希值" tabindex="-1">1. <strong>找到要撤销的提交哈希值</strong> <a class="header-anchor" href="#_1-找到要撤销的提交哈希值" aria-label="Permalink to &quot;1. **找到要撤销的提交哈希值**&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --pretty=oneline</span></span></code></pre></div><h4 id="_2-执行回滚操作" tabindex="-1">2. <strong>执行回滚操作</strong> <a class="header-anchor" href="#_2-执行回滚操作" aria-label="Permalink to &quot;2. **执行回滚操作**&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> revert</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">commit-has</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>这将创建一个新的提交，该提交的效果是撤销指定提交所做的更改。</p><h4 id="_3-推送新的提交到远程仓库" tabindex="-1">3. <strong>推送新的提交到远程仓库</strong> <a class="header-anchor" href="#_3-推送新的提交到远程仓库" aria-label="Permalink to &quot;3. **推送新的提交到远程仓库**&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">branch-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="四-注意事项" tabindex="-1">四. 注意事项 <a class="header-anchor" href="#四-注意事项" aria-label="Permalink to &quot;四. 注意事项&quot;">​</a></h2><ul><li><p><strong>备份分支</strong>：在执行上述任何操作之前，强烈建议先创建一个备份分支或标签，以防万一需要恢复原始状态。</p></li><li><p><strong>团队沟通</strong>：在多人协作的项目中，确保在进行重大更改前通知到团队相关成员。</p></li><li><p><strong>敏感信息</strong>：对于包含敏感信息的提交，即使删除了提交记录，这些信息也可能已经通过其他途径泄露出去。因此，在处理这类情况时，还需要采取额外的安全措施，如更改密码或密钥等等。</p></li></ul><h2 id="五-总结" tabindex="-1">五. 总结 <a class="header-anchor" href="#五-总结" aria-label="Permalink to &quot;五. 总结&quot;">​</a></h2><p>在使用 <code>Git</code> 进行版本控制时，有时可能会遇到需要删除已经推送到远程仓库的提交记录的情况。这可能是由于提交中包含了敏感信息，或者只是为了清理项目的历史记录。</p><p>通过以上介绍的方法，相信可以根据实际情况选择最适合的方式来删除或撤销已推送的提交记录。无论采用哪种方法，都应谨慎行事，强烈建议重新创建一个测试分支来验证操作，以避免对整体项目或其他开发者的代码产生负面影响。</p><p>使用 <code>git reset</code> 可以快速删除提交，但会重写历史记录；使用 <code>git revert</code> 则更为安全，但会增加新的提交；使用 <code>git rebase</code> 可以灵活地编辑提交历史，但同样需要注意操作过程中的潜在问题。</p>',76),h=[p];function o(l,n,d,r,c,k){return s(),a("div",null,h)}const y=i(t,[["render",o]]);export{b as __pageData,y as default};
