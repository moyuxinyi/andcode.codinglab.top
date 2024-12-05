import{_ as t,c as a,a0 as s,o}from"./chunks/framework.CmIoOw1s.js";const i="/git_flow.png",u=JSON.parse('{"title":"Git 工作流程","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"contents/git_conventions.md","filePath":"contents/git_conventions.md"}'),r={name:"contents/git_conventions.md"};function l(p,e,c,n,d,m){return o(),a("div",null,e[0]||(e[0]=[s('<h1 id="git-工作流程" tabindex="-1">Git 工作流程 <a class="header-anchor" href="#git-工作流程" aria-label="Permalink to &quot;Git 工作流程&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>网上有许多不同的 Git 工作流方案，但是实际上它们大多数也都从Gitflow逐步演化而来。所以本文将介绍的 Git 工作流当然也是基于Gitflow的，但也是我结合过去几年的工作经验总结与优化后的实践。</p><details class="details custom-block"><summary>Gitflow相关文章</summary><p>Git之GitFlow工作流: <a href="https://blog.csdn.net/sunyctf/article/details/130587970" target="_blank" rel="noreferrer">https://blog.csdn.net/sunyctf/article/details/130587970</a></p><p>使用 git-flow 自动化你的 git 分支工作流程: <a href="https://jeffkreeftmeijer.com/git-flow/" target="_blank" rel="noreferrer">https://jeffkreeftmeijer.com/git-flow/</a></p></details><h2 id="为什么要规范git工作流" tabindex="-1">为什么要规范Git工作流？ <a class="header-anchor" href="#为什么要规范git工作流" aria-label="Permalink to &quot;为什么要规范Git工作流？&quot;">​</a></h2><p>规范 Git 工作流的主要目的是提高团队协作的效率，避免多人合作时候发生分支合并冲突，以及代码库的可维护性。具体原因包括：</p><p><em><strong>1.减少冲突</strong></em></p><p>规范的 Git 工作流能帮助团队成员明确地了解如何进行代码提交、分支管理等操作，避免多人同时修改同一部分代码导致冲突。通过分支管理策略，每个人的工作在各自的分支上进行，减少了对主分支的干扰，降低冲突风险。</p><p><em><strong>2.提升协作效率</strong></em></p><p>有了明确的分支策略和合并流程，团队成员可以平行开发，减少对他人工作的依赖。各自的功能开发可以在独立的分支上进行，不会干扰到其他人，开发和发布周期更加高效。</p><p><em><strong>3.应对紧急修复</strong></em></p><p>在规范的工作流下，紧急修复Bug分支（也叫Hotfix/补丁分支）可以在独立的分支上进行，快速处理线上问题，不会影响其他功能开发，同时保证修复后的代码可以安全地合并回主分支。</p><p>总结来说，规范 Git 工作流是为了保障团队开发过程中代码的质量、协作效率和项目可维护性，减少混乱，确保代码库的稳定性和清晰性。</p><h2 id="分支管理" tabindex="-1">分支管理 <a class="header-anchor" href="#分支管理" aria-label="Permalink to &quot;分支管理&quot;">​</a></h2><h3 id="主分支" tabindex="-1">主分支 <a class="header-anchor" href="#主分支" aria-label="Permalink to &quot;主分支&quot;">​</a></h3><p>也叫生产分支，该分支意指保存已发布的稳定代码，任何代码合并到主分支都应经过严格测试。</p><p><strong>1.分支命名规则</strong></p><p><code>main</code>或者<code>master</code></p><p><strong>2.作用</strong></p><p>主分支版本发布时，一般由已经经过严格测试的开发分支或者严格测试后的bug分支进行合并而更新的，开发分支和bug分支一般都是从主分支上切出去的。</p><div class="danger custom-block"><p class="custom-block-title">重要提示</p><p>任何时间，任何时候都不能直接修改主分支的代码。</p></div><h3 id="发布分支" tabindex="-1">发布分支 <a class="header-anchor" href="#发布分支" aria-label="Permalink to &quot;发布分支&quot;">​</a></h3><p>该分支的第一次创建应该是由第一个版本的开发分支派生而来。</p><p><strong>1.分支命名规则</strong></p><p><code>release</code></p><p><strong>2.作用</strong></p><p>用于发布前的准备和修正，也就是发布前的提测阶段，会以release分支代码为基准提测。一般由开发分支合并更新</p><div class="danger custom-block"><p class="custom-block-title">重要提示</p><p>任何时间，任何时候严禁将release合并至主分支。因为release主要就是用来测试开发分支的，假如当有两个版本的开发分支dev_1和dev_2都已经开发好了并且合并在了release分支里也发起了测试，此时dev_1你测试好了并合并到了主分支，那dev_2怎么办？</p></div><h3 id="开发分支" tabindex="-1">开发分支 <a class="header-anchor" href="#开发分支" aria-label="Permalink to &quot;开发分支&quot;">​</a></h3><p>一般开发的新版本时，开发分支都是基于主分支下创建的</p><p><strong>1.分支命名规则</strong></p><p>针对中小型项目的开发分支命名规则为：<code>pre_(master/main)_项目版本号_dev</code>，pre是<code>preliminary（准备阶段）</code>的缩写，表示该分支为合并到主分支之前的过渡分支。</p><div class="tip custom-block"><p class="custom-block-title">大型项目</p><p>一般项目比较大的时候，项目可能会产生多个大型模块和多个产品经理，每个大模块都有自己的版本号，所以这里可以进行区分：<code>pre_(master/main)_模块名_版本号</code></p></div><p><strong>2.作用</strong> 保存由功能分支完成的最新的开发代码，功能完成后，合并到该分支。优点就是可以基于该分支创建多个功能分支提供给团队里的其他成员一起共同协作。</p><div class="warning custom-block"><p class="custom-block-title">警告提示</p><p>这个分支一般由主分支切出，该分支始终保持最新完成以及bug修复后的代码。因为一旦在release分支上测试完成，是要合并到主分支的。</p></div><h4 id="功能分支" tabindex="-1">功能分支 <a class="header-anchor" href="#功能分支" aria-label="Permalink to &quot;功能分支&quot;">​</a></h4><p>具体的功能开发，从开发分支上创建而来</p><p><strong>1.分支命名规则</strong></p><p><code>pre_master_模块名_版本号_功能名_开发者姓名简写</code></p><p><strong>2.作用</strong> 主要是用来开发一个新的功能，一旦开发完成，我们合并回开发分支，然后提交合并请求到 release 分支进行提测，当有bug时再切回到该分支修改，完成后再合并再测试。</p><h3 id="bug-hotfix-分支" tabindex="-1">Bug/Hotfix 分支 <a class="header-anchor" href="#bug-hotfix-分支" aria-label="Permalink to &quot;Bug/Hotfix 分支&quot;">​</a></h3><p>修改bug，从主分支上创建而来。</p><p><strong>1.分支命名规则</strong></p><p><code>(master/main)_bugfix_模块名/功能名_开发者姓名简写</code></p><p>⭐️ <code>bugfix</code> 就是漏洞修复的意思。bug和Hotfix的结合名称。</p><p><strong>2.作用</strong></p><p>当我们在生产环境发现新的Bug时候，我们需要基于主分支创建一个bug分支，然后在bug分支上修复bug，完成后经测试再合并至主分支重新发版</p><div class="warning custom-block"><p class="custom-block-title">合并提示</p><p>当完成这一套流程时，也不要忘记将bug分支修改的commit遴选出来合并至合适的开发分支。</p><p>详细解释： 假设main分支上已经发布了1.0版本，现在你还有一个2.0版本的开发分支在做迭代，然后线上的1.0版本出现了bug，你在bug分支修改完以后合并到了主分支上，但是你自己切出来的2.0开发分支依然还存在这个旧bug，为了解决这个问题就应该将修改的commit遴选出来合并到现在的2.0开发分支上。</p><p>但是切记不要将bug分支直接合并到开发分支。</p></div><h2 id="git工作流程图" tabindex="-1">Git工作流程图 <a class="header-anchor" href="#git工作流程图" aria-label="Permalink to &quot;Git工作流程图&quot;">​</a></h2><p><img src="'+i+`" alt="git_flow"></p><h2 id="提交规范" tabindex="-1">提交规范 <a class="header-anchor" href="#提交规范" aria-label="Permalink to &quot;提交规范&quot;">​</a></h2><p>在代码提交时，统一的提交规范能够提高团队协作效率，帮助快速定位和追踪问题，形成可读的提交记录历史。请遵循以下标准：</p><p><em><strong>1.Commit 信息格式</strong></em></p><p>使用 type(scope): subject 结构进行提交，类型和作用域用来明确提交的内容和范围。 例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>feat: 添加了什么功能</span></span>
<span class="line"><span>fix: 解决了什么bug</span></span></code></pre></div><p><em><strong>2.常见提交类型</strong></em></p><ul><li>✨ feat: 新功能</li><li>🐞 fix: 修复 Bug</li><li>📃 docs: 文档修改</li><li>🎨 style: 代码格式化调整（无逻辑修改）</li><li>🦄 refactor: 重构代码（非新增功能或修复）</li><li>✅ test: 添加或修改测试</li><li>🔧 build: 修改构建流程、依赖等</li><li>🚀 perf: 性能优化</li><li>⏪ revert: 回滚提交</li></ul><details class="details custom-block"><summary>Commit Type 参考内容</summary><p>参考文章：<a href="https://gitee.com/help/articles/4231#article-header2" target="_blank" rel="noreferrer">https://gitee.com/help/articles/4231#article-header2</a></p></details><div class="tip custom-block"><p class="custom-block-title">建议</p><p>提交信息简明扼要，内容最好限制在 50 个字符以内。</p><p>每次提交应该解决一个问题或功能。</p></div><h2 id="请求合并" tabindex="-1">请求合并 <a class="header-anchor" href="#请求合并" aria-label="Permalink to &quot;请求合并&quot;">​</a></h2><p>分支合并的时候应该严格按照Git工作流来进行，其中有可能会产生分支合并冲突的问题。比如<code>pre_master_xx_dev</code>请求合并至master时发生了冲突。那这种情况下应该怎么做？</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p><em><strong>第一步</strong></em></p><p>从master分支切出一个分支命名为 <code>conflict_源分支名_merge_目标分支名</code></p><p>命名示例 <code>conflict_master_merge_pre_master_xx_dev</code></p><p><em><strong>第二步</strong></em></p><p>在新创建的 conflict 分支中，拉取并合并 pre_master_xx_dev 分支，并解决好冲突以后，再将该分支合并至主分支。</p><p><em><strong>第三步</strong></em></p><p>一旦合并完成并确认无误，就删除 conflict 分支，确保持分支结构简洁。</p></div><div class="danger custom-block"><p class="custom-block-title">重要提示</p><p>严禁将<code>pre_master_xx_dev</code>分支作为源分支拉取master分支的代码处理合并冲突。这会导致<code>pre_master_xx_dev</code>分支上出现其他版本的代码。</p></div><h2 id="版本控制" tabindex="-1">版本控制 <a class="header-anchor" href="#版本控制" aria-label="Permalink to &quot;版本控制&quot;">​</a></h2><p>在版本控制中，大小版本号通常采用语义化版本号（Semantic Versioning）的方式来命名，通常遵循 Major.Minor.Patch 的格式，即 主版本号.次版本号.补丁版本号。这个结构有助于开发者和用户清楚地了解每个版本的变化性质和影响。</p><p><strong>版本号结构</strong></p><ul><li><strong>主版本号（Major）</strong></li></ul><p>表示重大变更，不向后兼容的更新。例如，添加了新的功能或对现有功能进行了较大的重构，可能会导致旧版本的代码无法正常运行。</p><ul><li><strong>次版本号（Minor）</strong></li></ul><p>表示向后兼容的新增功能。例如，添加了新的功能或特性，但不会影响现有功能的运行。</p><ul><li><strong>补丁版本号（Patch）</strong></li></ul><p>表示向后兼容的 bug 修复。通常用于修复发现的问题，而不会对功能做出重大调整。</p><details class="details custom-block"><summary>其他标记</summary><p><em><strong>先行版本号（Pre-release）</strong></em></p><p>表示这个版本是一个不稳定的版本，尚未正式发布。例如：<code>1.0.0-alpha</code> 或 <code>1.0.0-beta</code>。</p><p><em><strong>版本标签（Build Metadata）</strong></em></p><p>表示构建信息，一般用于标识某个构建或修订版。例如：<code>1.0.0+build20</code></p></details><details class="details custom-block"><summary>大版本号是否应向后兼容？</summary><p>关于大版本号（Major Version）是否向后兼容，确实应当根据项目的实际要求来决定。按照 语义化版本控制（Semantic Versioning）的标准，大版本号的变化通常意味着不兼容的 API 变化，也就是项目或库的接口发生了与之前版本不兼容的更改。</p><p>然而，在实际项目中，是否严格遵守这个规则，取决于团队和项目的具体情况。有些项目在发布大版本时可能会进行较为全面的改动，而另一些项目，即使发布了大版本，也可能选择在一定程度上保持向后兼容，以减少对已有用户的影响。</p></details><div class="tip custom-block"><p class="custom-block-title">Git Tag标签</p><p>在主分支发布新版本时，务必遵循规范创建版本 Tag 标签，以确保版本管理的清晰和可追溯性。</p></div><details class="details custom-block"><summary>参考文章</summary><p>语义化版本控制的权威参考：<a href="https://semver.org/" target="_blank" rel="noreferrer">https://semver.org/</a></p></details><h2 id="其他注意事项" tabindex="-1">其他注意事项 <a class="header-anchor" href="#其他注意事项" aria-label="Permalink to &quot;其他注意事项&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">代码提交频率</p><p>保持频繁的代码提交，避免一次性提交大量代码，这样子方便追踪问题。</p><p>遵循 “小步提交，大步合并” 的原则。</p></div><div class="danger custom-block"><p class="custom-block-title">保持代码库干净</p><p>严禁提交未经测试或有问题的代码，任何时间都不应将有问题的代码直接合并至 master 分支。</p></div><div class="warning custom-block"><p class="custom-block-title">分支清理</p><p>功能分支或 Bug 分支合并后应及时删除，以保持仓库整洁。</p></div>`,80)]))}const h=t(r,[["render",l]]);export{u as __pageData,h as default};