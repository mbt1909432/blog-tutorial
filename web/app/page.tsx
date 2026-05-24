import { ClientEffects } from "./components/ClientEffects";
import { CodeBlock } from "./components/CodeBlock";
import { Callout } from "./components/Callout";
import { ToggleBlock } from "./components/ToggleBlock";
import { PromptBlock, ActionBlock, ResultBlock } from "./components/PromptBlock";
import {
  IconZap, IconFileText, IconGlobe, IconRocket, IconBookOpen,
  IconKey, IconWrench, IconTerminal, IconPackage, IconGitBranch,
  IconBot, IconClipboard, IconFlame, IconPenLine, IconRefresh,
  IconLightbulb, IconCheck, IconCheckCircle, IconSparkles,
  IconLink, IconSettings, IconHeart, IconFolder, IconFile,
  IconLock, IconPalette, IconBarChart, IconSearch, IconMessage, IconAlertTriangle,
} from "./icons";

function SectionNum({ n }: { n: string }) {
  return (
    <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple text-white font-mono text-[13px] font-semibold mb-3">
      {n}
    </div>
  );
}

function H3Icon({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center [&_svg]:w-[18px] [&_svg]:h-[18px]">{children}</span>;
}

function StepCard({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3.5 px-5 py-[18px] border border-border rounded-lg transition-all hover:border-accent-blue hover:shadow-[0_2px_12px_rgba(35,131,226,0.08)] hover:-translate-y-px cursor-default">
      <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-bg-secondary rounded-[7px] font-mono text-xs font-semibold text-accent-blue">
        {n}
      </div>
      <div className="text-sm leading-relaxed">
        <strong className="block mb-0.5 text-foreground">{title}</strong>
        <span className="text-secondary">{desc}</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ClientEffects />
      <div className="progress-bar" id="progress-bar" />

      {/* Nav */}
      <nav id="nav-bar" className="sticky top-0 bg-white/85 backdrop-blur-xl border-b border-border z-[999] transition-shadow">
        <div className="max-w-[780px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="font-[family-name:var(--font-display)] text-sm font-semibold text-foreground tracking-tight flex items-center gap-2">
            <span className="nav-dot w-2 h-2 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple" />
            Claude Code 博客搭建指南
          </div>
          <div className="flex gap-1.5 max-sm:hidden">
            {["Start", "Project", "Deploy", "Write", "Domain", "Advanced"].map((t) => (
              <a key={t} href={`#${t.toLowerCase()}`} className="text-[13px] text-secondary no-underline px-2.5 py-1 rounded-md hover:bg-bg-hover hover:text-foreground transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-[780px] mx-auto px-6">
        {/* Hero */}
        <header className="pt-20 pb-16 text-center relative">
          <div className="hero-glow absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" />
          <div className="fade-down inline-flex items-center gap-1.5 text-xs font-medium text-accent-purple bg-accent-purple-bg px-3.5 py-[5px] rounded-full mb-6 tracking-wide">
            <IconBot size={14} /> 用自然语言驱动 &middot; AI 自动执行 &middot; 15 分钟搞定
          </div>
          <h1 className="fade-down fade-down-1 font-[family-name:var(--font-display)] text-[42px] font-bold leading-tight mb-4 tracking-tight">
            Claude Code 搭建<br />
            <span className="bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">个人博客全指南</span>
          </h1>
          <p className="fade-down fade-down-2 text-[17px] text-secondary leading-relaxed max-w-[520px] mx-auto mb-8">
            你不需要会命令行。只需要用自然语言告诉 Claude Code 你要做什么，它会自动帮你创建项目、写代码、部署上线。
          </p>
          <div className="fade-down fade-down-3 flex items-center justify-center gap-5 text-[13px] text-secondary max-sm:flex-col max-sm:gap-2">
            <span className="flex items-center gap-1.5"><IconBot size={16} /> 自然语言驱动</span>
            <span className="flex items-center gap-1.5"><IconGlobe size={16} /> 免费部署到 Vercel</span>
            <span className="flex items-center gap-1.5"><IconRocket size={16} /> 推送即上线</span>
          </div>
        </header>

        {/* TOC */}
        <div className="fade-down fade-down-4 bg-bg-secondary border border-border rounded-[10px] px-7 py-6 mb-12">
          <div className="font-[family-name:var(--font-display)] text-sm font-semibold text-foreground mb-3.5 flex items-center gap-2">
            <IconBookOpen size={18} /> 目录导航
          </div>
          <ol className="list-none m-0 p-0 space-y-0.5 [&_a]:flex [&_a]:items-center [&_a]:gap-2.5 [&_a]:text-sm [&_a]:text-secondary [&_a]:no-underline [&_a]:px-2.5 [&_a]:py-1.5 [&_a]:rounded-md [&_a]:transition-colors [&_a]:hover:bg-bg-hover [&_a]:hover:text-foreground">
            {[
              ["#start", "启动 — 安装 CC + 登录 + 装 Skills"],
              ["#project", "创建项目 — 一句话生成博客"],
              ["#deploy", "部署上线 — 推送 GitHub + Vercel"],
              ["#write", "写文章 — 说一句就发布"],
              ["#domain", "绑定域名 — 个性化访问"],
              ["#advanced", "进阶 — 美化 / 性能 / SEO"],
              ["#faq", "常见问题 FAQ"],
            ].map(([href, text], i) => (
              <li key={String(href)}>
                <a href={String(href)}>
                  <span className="font-mono text-[11px] font-medium text-accent-purple bg-accent-purple-bg px-[7px] py-0.5 rounded min-w-[28px] text-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {text}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Section 1: 启动 ── */}
        <section className="section-reveal mb-14" id="start">
          <SectionNum n="01" />
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight mb-2 tracking-tight">启动</h2>
          <p className="text-[15px] text-secondary mb-6">安装 Claude Code，配置智谱 GLM API，登录 GitHub 和 Vercel。之后所有操作都在 Claude Code 里用自然语言完成。</p>

          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
            <H3Icon><IconWrench /></H3Icon> 安装 Claude Code
          </h3>

          <ActionBlock>
            <CodeBlock filename="Terminal — 安装 Claude Code">
              <span className="comment"># 需要先装好 Node.js（v18+）</span>{"\n"}
              <span className="keyword">npm</span> install -g @anthropic-ai/claude-code{"\n\n"}
              <span className="comment"># 进入你的工作目录</span>{"\n"}
              <span className="keyword">cd</span> ~/projects{"\n"}
              <span className="keyword">claude</span>
            </CodeBlock>
          </ActionBlock>

          <ResultBlock>
            <strong>Claude Code 交互式终端启动</strong>。你会看到一个 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">&gt;</code> 提示符，之后所有操作都在这里用自然语言完成。
          </ResultBlock>

          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
            <H3Icon><IconKey /></H3Icon> 配置智谱 GLM API
          </h3>
          <p className="text-[15px] text-secondary leading-relaxed mb-4">
            Claude Code 默认使用 Anthropic 的 API，国内用户推荐使用智谱 GLM 编码套餐，速度更快且无需海外信用卡。配置方法参考 <a href="https://docs.bigmodel.cn/cn/guide/develop/claude" target="_blank" rel="noopener" className="text-accent-blue font-semibold no-underline hover:underline">智谱官方文档</a>。
          </p>

          <PromptBlock>
            让 Claude Code 帮你配置智谱 API：&ldquo;帮我配置 Claude Code 使用智谱 GLM API，我的 API Key 是 xxx&rdquo;
          </PromptBlock>

          <ActionBlock>
            <p className="text-sm text-secondary leading-relaxed mb-3">Claude Code 会自动修改配置文件，将默认模型指向智谱 GLM。</p>
            <CodeBlock filename="~/.claude/settings.json — 自动生成">
              {"{"}{"\n"}
              {"  "}<span className="string">"env"</span>: {"{"}{"\n"}
              {"    "}<span className="string">"ANTHROPIC_BASE_URL"</span>: <span className="string">"https://open.bigmodel.cn/api/paas/v4"</span>,{"\n"}
              {"    "}<span className="string">"ANTHROPIC_API_KEY"</span>: <span className="string">"你的智谱 API Key"</span>,{"\n"}
              {"    "}<span className="string">"ANTHROPIC_DEFAULT_SONNET_MODEL"</span>: <span className="string">"glm-4.7"</span>,{"\n"}
              {"    "}<span className="string">"ANTHROPIC_DEFAULT_HAIKU_MODEL"</span>: <span className="string">"glm-4.5-air"</span>,{"\n"}
              {"    "}<span className="string">"ANTHROPIC_DEFAULT_OPUS_MODEL"</span>: <span className="string">"glm-4.7"</span>{"\n"}
              {"  "}{"}"}{"\n"}
              {"}"}
            </CodeBlock>
          </ActionBlock>

          <ResultBlock>
            <strong>配置完成！</strong>重启 Claude Code 后即可使用智谱 GLM 模型。GLM 编码套餐性价比很高，适合学生和新手。
          </ResultBlock>

          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
            <H3Icon><IconKey /></H3Icon> 登录服务（只需一次）
          </h3>
          <p className="text-[15px] text-secondary mb-4">在开始开发前，你需要手动完成以下登录（只需一次）：</p>

          <div className="grid gap-3 my-5">
            <StepCard n={1} title="GitHub 登录" desc="终端运行 gh auth login，按提示用浏览器授权" />
            <StepCard n={2} title="Vercel 登录" desc="终端运行 vercel login，按提示用浏览器授权" />
          </div>

          <Callout variant="green" icon={<IconCheckCircle size={18} />}>
            登录完成后，之后所有操作都不需要再手动输入命令了。直接用自然语言告诉 Claude Code 你要做什么。
          </Callout>

          {/* 安装 Skills */}
          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-9 mb-3 flex items-center gap-2">
            <H3Icon><IconBot /></H3Icon> 安装 Skills（核心步骤）
          </h3>
          <p className="text-[15px] text-secondary leading-relaxed mb-4">
            Skills 是 Claude Code 的能力插件，装上之后 AI 就会按照专业规范来写代码。所有 Skills 都在 <a href="https://skill.sh" target="_blank" rel="noopener" className="text-accent-blue font-semibold no-underline hover:underline">skill.sh</a> 上，通过 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">/find-skills</code> 命令搜索和安装。
          </p>

          <PromptBlock>
            &ldquo;/find-skills&rdquo; 然后输入关键词搜索，比如 &ldquo;frontend design&rdquo;
          </PromptBlock>

          <ActionBlock>
            <p className="text-sm text-secondary leading-relaxed mb-3">Claude Code 会自动连接 skill.sh 搜索，展示匹配结果，你选择后自动安装。</p>
            <CodeBlock filename="Claude Code 交互流程">
              <span className="comment"># 你输入:</span>{"\n"}
              /find-skills{"\n\n"}
              <span className="comment"># CC 会问你想搜什么:</span>{"\n"}
              What kind of skills are you looking for?{"\n"}
              <span className="string">&gt; frontend design</span>{"\n\n"}
              <span className="comment"># CC 展示搜索结果，你选择要装的:</span>{"\n"}
              ✓ Installed: frontend-design{"\n"}
              ✓ Installed: vercel-react-best-practices{"\n"}
              ✓ Installed: tailwind-design-system
            </CodeBlock>
          </ActionBlock>

          <ResultBlock>
            <strong>Skills 安装完成！</strong> 之后的开发中，Claude Code 会自动使用这些 Skills 的规范来写代码。
          </ResultBlock>

          <h3 className="font-[family-name:var(--font-display)] text-[15px] font-semibold mt-5 mb-3 text-secondary">博客项目推荐安装的 Skills</h3>

          <div className="bg-bg-secondary border border-border rounded-[10px] px-6 py-4 my-4 space-y-3">
            {[
              ["必装", "accent-purple", "accent-purple-bg", "frontend-design", "生成高质量前端界面，避免千篇一律的 AI 设计"],
              ["必装", "accent-purple", "accent-purple-bg", "vercel-react-best-practices", "Vercel 官方 57 条 React/Next.js 性能优化规则"],
              ["推荐", "accent-blue", "accent-blue-bg", "tailwind-design-system", "Tailwind CSS v4 设计系统，样式更规范"],
              ["推荐", "accent-blue", "accent-blue-bg", "seo-audit", "SEO 审计，检查搜索引擎优化质量"],
              ["可选", "accent-green", "accent-green-bg", "shadcn/ui", "精美 UI 组件库，搜索框、暗黑模式切换等"],
            ].map(([badge, color, bg, name, desc]) => (
              <div key={name} className="flex items-start gap-2.5 text-sm">
                <span className={`shrink-0 bg-${bg} text-${color} px-2 py-0.5 rounded text-xs font-semibold`}>{badge}</span>
                <div className="leading-relaxed">
                  <strong className="text-foreground">{name}</strong>
                  <span className="text-secondary"> — {desc}</span>
                </div>
              </div>
            ))}
          </div>

          <Callout variant="purple" icon={<IconBot size={18} />}>
            <strong>Skill 是什么？</strong>你可以理解为 &ldquo;给 AI 装专业技能包&rdquo;。比如装了 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">frontend-design</code>，Claude Code 写前端代码时就会自动遵循专业设计规范，不会生成千篇一律的模板风格。更多 Skills 可以在 <a href="https://skill.sh" target="_blank" rel="noopener" className="text-accent-purple font-semibold no-underline hover:underline">skill.sh</a> 浏览。
          </Callout>
        </section>

        <hr className="border-none h-px bg-border my-12" />

        {/* ── Section 2: 创建项目 ── */}
        <section className="section-reveal mb-14" id="project">
          <SectionNum n="02" />
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight mb-2 tracking-tight">创建项目</h2>
          <p className="text-[15px] text-secondary mb-6">一句话让 Claude Code 帮你搭建完整的 Next.js 博客项目。</p>

          <PromptBlock>
            &ldquo;帮我用 Next.js + TypeScript + Tailwind 创建一个博客项目，名字叫 my-blog&rdquo;
          </PromptBlock>

          <ActionBlock>
            <p className="text-sm text-secondary leading-relaxed mb-3">Claude Code 会自动执行以下命令：</p>
            <CodeBlock filename="Claude Code 自动执行">
              <span className="keyword">npx</span> create-next-app@latest my-blog \{"\n"}
              {"  "}--typescript --tailwind --app --eslint{"\n\n"}
              <span className="keyword">cd</span> my-blog{"\n"}
              <span className="keyword">npm</span> run dev
            </CodeBlock>
          </ActionBlock>

          <ResultBlock>
            <strong>项目创建成功！</strong> Claude Code 自动生成了完整的 Next.js 项目结构。你可以在浏览器打开 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">localhost:3000</code> 预览效果。
          </ResultBlock>

          {/* 项目结构 */}
          <ToggleBlock icon={<><IconFolder size={16} /></>} title="查看项目结构">
            <div className="bg-bg-secondary border border-border rounded-[10px] px-6 py-5 my-3 font-mono text-[13px] leading-[1.85]">
              <span className="file-folder flex items-center gap-1"><IconFolder size={16} /> my-blog/</span>
              <span className="file-folder flex items-center gap-1 pl-6"><IconFolder size={16} /> app/ <span className="file-desc">— 页面路由 (App Router)</span></span>
              <span className="file-file flex items-center gap-1 pl-12"><IconFile size={14} /> page.tsx <span className="file-desc">— 首页</span></span>
              <span className="file-file flex items-center gap-1 pl-12"><IconFile size={14} /> layout.tsx <span className="file-desc">— 全局布局</span></span>
              <span className="pl-6"><span className="file-folder flex items-center gap-1"><IconFolder size={16} /> blog/ <span className="file-desc">— 博客路由</span></span></span>
              <span className="pl-6"><span className="file-folder flex items-center gap-1"><IconFolder size={16} /> content/ <span className="file-desc">— Markdown 文章</span></span></span>
              <span className="pl-6"><span className="file-folder flex items-center gap-1"><IconFolder size={16} /> public/ <span className="file-desc">— 图片等静态资源</span></span></span>
            </div>
          </ToggleBlock>

          {/* 继续定制 */}
          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
            <H3Icon><IconPalette /></H3Icon> 定制博客样式
          </h3>

          <PromptBlock>
            &ldquo;帮我设计一个 Notion 风格的博客首页，要有文章列表、标签筛选、深色模式支持&rdquo;
          </PromptBlock>

          <ActionBlock>
            <p className="text-sm text-secondary leading-relaxed mb-3">Claude Code 会自动：</p>
            <ul className="list-disc pl-5 text-sm text-secondary space-y-1.5 leading-relaxed">
              <li>安装并使用 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">frontend-design</code> Skill 生成高质量界面</li>
              <li>创建博客首页、文章列表、标签组件</li>
              <li>配置 Tailwind CSS 设计系统</li>
              <li>实现深色模式切换</li>
              <li>直接修改文件，无需你手动编辑</li>
            </ul>
          </ActionBlock>

          <ResultBlock>
            <strong>博客界面生成完成。</strong> 刷新 localhost:3000 就能看到新的博客界面。不满意可以继续说 &ldquo;把配色改成蓝白主题&rdquo;，Claude Code 会直接修改。
          </ResultBlock>
        </section>

        <hr className="border-none h-px bg-border my-12" />

        {/* ── Section 3: 部署上线 ── */}
        <section className="section-reveal mb-14" id="deploy">
          <SectionNum n="03" />
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight mb-2 tracking-tight">部署上线</h2>
          <p className="text-[15px] text-secondary mb-6">一句话完成：创建 GitHub 仓库 + 推送代码 + 部署到 Vercel。</p>

          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
            <H3Icon><IconGitBranch /></H3Icon> 推送到 GitHub
          </h3>

          <PromptBlock>
            &ldquo;把这个项目推送到 GitHub，创建一个公开仓库叫 my-blog&rdquo;
          </PromptBlock>

          <ActionBlock>
            <p className="text-sm text-secondary leading-relaxed mb-3">Claude Code 会自动依次执行：</p>
            <CodeBlock filename="Claude Code 自动执行">
              <span className="comment"># 1. 初始化 Git 仓库</span>{"\n"}
              <span className="keyword">git</span> init{"\n"}
              <span className="keyword">git</span> add .{"\n"}
              <span className="keyword">git</span> commit -m <span className="string">"init: first commit"</span>{"\n\n"}
              <span className="comment"># 2. 用 gh CLI 创建远程仓库（不用开浏览器）</span>{"\n"}
              <span className="keyword">gh</span> repo create my-blog --public \{"\n"}
              {"  "}--description <span className="string">"我的个人博客"</span>{"\n\n"}
              <span className="comment"># 3. 推送代码</span>{"\n"}
              <span className="keyword">git</span> branch -M main{"\n"}
              <span className="keyword">git</span> push -u origin main
            </CodeBlock>
          </ActionBlock>

          <ResultBlock>
            <strong>代码已推送到 GitHub！</strong> 仓库地址：<code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">github.com/你的用户名/my-blog</code>。全程你没输入任何 git 命令。
          </ResultBlock>

          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
            <H3Icon><IconZap /></H3Icon> 部署到 Vercel
          </h3>

          <PromptBlock>
            &ldquo;把这个项目部署到 Vercel&rdquo;
          </PromptBlock>

          <ActionBlock>
            <p className="text-sm text-secondary leading-relaxed mb-3">Claude Code 会自动执行：</p>
            <CodeBlock filename="Claude Code 自动执行">
              <span className="comment"># 安装 Vercel CLI（如果没装过）</span>{"\n"}
              <span className="keyword">npm</span> i -g vercel{"\n\n"}
              <span className="comment"># 一键部署</span>{"\n"}
              <span className="keyword">vercel</span> --yes
            </CodeBlock>
          </ActionBlock>

          <ResultBlock>
            <strong>部署成功！</strong> 约 1~2 分钟后你会得到一个在线地址，如 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">my-blog-xxx.vercel.app</code>。全世界都能访问你的博客了！
          </ResultBlock>

          <Callout variant="green" icon={<IconCheckCircle size={18} />}>
            <strong>开启自动部署：</strong>去 Vercel 后台 → 项目 Settings → Git → 连接你的 GitHub 仓库，之后每次 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">git push</code> Vercel 就会自动重新部署，无需手动操作。
          </Callout>

          <Callout variant="orange" icon={<IconAlertTriangle size={18} />}>
            <strong>git push 后没自动部署？</strong>说明你用的是 CLI 部署（<code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">vercel --prod</code>），还没在 Vercel 后台连接 GitHub 仓库。两种解决方式：
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li><strong>方式一（推荐）：</strong>去 Vercel 后台连接 GitHub 仓库，开启 Git 集成。如果项目在子目录（如 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">web/</code>），记得在 Settings 里把 Root Directory 设为 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">web</code></li>
              <li><strong>方式二：</strong>每次推送后手动告诉 Claude Code &ldquo;重新部署到 Vercel&rdquo;，它会执行 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">vercel --prod</code></li>
            </ul>
          </Callout>
        </section>

        <hr className="border-none h-px bg-border my-12" />

        {/* ── Section 4: 写文章 ── */}
        <section className="section-reveal mb-14" id="write">
          <SectionNum n="04" />
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight mb-2 tracking-tight">写文章</h2>
          <p className="text-[15px] text-secondary mb-6">告诉 Claude Code 你想写什么，它帮你创建 Markdown 文件并发布。</p>

          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
            <H3Icon><IconPenLine /></H3Icon> 创建并发布一篇文章
          </h3>

          <PromptBlock>
            &ldquo;帮我写一篇关于我学习前端开发的博客文章，标题叫&ensp;前端之路&ensp;，加上标签，然后推送到 GitHub&rdquo;
          </PromptBlock>

          <ActionBlock>
            <p className="text-sm text-secondary leading-relaxed mb-3">Claude Code 会自动：</p>
            <ul className="list-disc pl-5 text-sm text-secondary space-y-1.5 leading-relaxed">
              <li>在 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">content/</code> 目录创建 Markdown 文件</li>
              <li>自动生成 frontmatter（标题、日期、标签、摘要）</li>
              <li>写好文章正文内容</li>
              <li>执行 git add、git commit、git push 一键发布</li>
            </ul>
            <div className="mt-3">
              <CodeBlock filename="Claude Code 自动创建 content/前端之路.md">
                <span className="tag">---</span>{"\n"}
                <span className="prop">title</span>: <span className="string">"前端之路"</span>{"\n"}
                <span className="prop">date</span>: <span className="string">"2025-01-15"</span>{"\n"}
                <span className="prop">tags</span>: [<span className="string">"前端"</span>, <span className="string">"学习笔记"</span>]{"\n"}
                <span className="prop">excerpt</span>: <span className="string">"记录我从零开始学习前端开发的旅程"</span>{"\n"}
                <span className="tag">---</span>{"\n\n"}
                <span className="comment">## 为什么选择前端</span>{"\n\n"}
                前端开发是离用户最近的技术领域...
              </CodeBlock>
            </div>
          </ActionBlock>

          <ResultBlock>
            <strong>文章已发布！</strong> Vercel 检测到 push 后自动重新部署，约 30 秒后你的新文章就上线了。全程你只说了一句话。
          </ResultBlock>

          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
            <H3Icon><IconRefresh /></H3Icon> 日常发布工作流
          </h3>

          <div className="bg-bg-secondary border border-border rounded-[10px] px-6 py-5 my-5">
            {[
              ["写新文章", "&ldquo;帮我写一篇关于 XXX 的博客&rdquo; → CC 创建 .md + push → 自动上线"],
              ["修改文章", "&ldquo;把&ensp;前端之路&ensp;那篇的第二段改一下，加入 React 的内容&rdquo; → CC 修改 + push"],
              ["删除文章", "&ldquo;删除&ensp;测试文章&ensp;那篇&rdquo; → CC 删除文件 + push"],
              ["批量操作", "&ldquo;把所有文章的日期格式统一改成 YYYY-MM-DD&rdquo; → CC 批量修改 + push"],
            ].map(([action, desc], i) => (
              <div key={i} className="flex items-start gap-3 py-3 border-b border-border last:border-b-0">
                <span className="shrink-0 bg-accent-blue-bg text-accent-blue px-2.5 py-0.5 rounded text-xs font-semibold">{action}</span>
                <span className="text-[13px] text-secondary leading-relaxed">{desc}</span>
              </div>
            ))}
          </div>

          <ToggleBlock icon={<><IconGitBranch size={16} /></>} title="高级：草稿分支 + PR 预览">
            <PromptBlock>
              &ldquo;我想写一篇重要的技术文章，先放到草稿分支，写完再合并到 main&rdquo;
            </PromptBlock>
            <p className="text-sm text-secondary leading-relaxed mt-3">
              Claude Code 会创建 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">draft/xxx</code> 分支、推送、并在 GitHub 创建 Pull Request。Vercel 会为每个 PR 自动生成预览链接，你可以在合并前预览效果。
            </p>
          </ToggleBlock>
        </section>

        <hr className="border-none h-px bg-border my-12" />

        {/* ── Section 5: 域名 ── */}
        <section className="section-reveal mb-14" id="domain">
          <SectionNum n="05" />
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight mb-2 tracking-tight">绑定自定义域名</h2>
          <p className="text-[15px] text-secondary mb-6">有域名的话，一句话让 Claude Code 帮你配置。</p>

          <PromptBlock>
            &ldquo;帮我把 blog.mydomain.com 绑定到这个 Vercel 项目&rdquo;
          </PromptBlock>

          <ActionBlock>
            <p className="text-sm text-secondary leading-relaxed mb-3">Claude Code 会告诉你需要做什么：</p>
            <ul className="list-disc pl-5 text-sm text-secondary space-y-1.5 leading-relaxed">
              <li>在域名商后台添加 CNAME 记录：<code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">blog → cname.vercel-dns.com</code></li>
              <li>在 Vercel 项目 Settings → Domains 添加你的域名</li>
              <li>如果需要，还会帮你配置 DNS 验证</li>
            </ul>
          </ActionBlock>

          <ResultBlock>
            <strong>域名绑定完成！</strong> DNS 生效后（几分钟到几小时），访问 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">blog.mydomain.com</code> 就是你的博客。HTTPS 证书自动配置。
          </ResultBlock>
        </section>

        <hr className="border-none h-px bg-border my-12" />

        {/* ── Section 6: 进阶 ── */}
        <section className="section-reveal mb-14" id="advanced">
          <SectionNum n="06" />
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight mb-2 tracking-tight">进阶优化</h2>
          <p className="text-[15px] text-secondary mb-6">继续用自然语言让 Claude Code 优化你的博客。</p>

          <div className="bg-bg-secondary border border-border rounded-[10px] px-6 py-5 my-5 space-y-4">
            {[
              ["美化主题", "&ldquo;帮我把博客主题改成暗色系科技风，参考 Linear 的设计&rdquo;"],
              ["添加评论", "&ldquo;帮我集成 Giscus 评论系统，基于 GitHub Discussions&rdquo;"],
              ["SEO 优化", "&ldquo;帮我给每篇文章加上 Open Graph 元数据，优化 SEO&rdquo;"],
              ["性能优化", "&ldquo;帮我优化 Core Web Vitals 评分，图片用 next/image 懒加载&rdquo;"],
              ["添加搜索", "&ldquo;帮我加一个文章搜索功能，支持标题和内容模糊匹配&rdquo;"],
              ["RSS 订阅", "&ldquo;帮我生成 RSS feed，路径是 /feed.xml&rdquo;"],
              ["统计分析", "&ldquo;帮我集成 Vercel Analytics 看访问数据&rdquo;"],
            ].map(([action, prompt], i) => (
              <div key={i} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="shrink-0 bg-accent-blue-bg text-accent-blue px-2.5 py-0.5 rounded text-xs font-semibold">{action}</span>
                </div>
                <div className="text-[13.5px] text-accent-purple font-medium pl-1">{prompt}</div>
              </div>
            ))}
          </div>

          <Callout variant="blue" icon={<IconLightbulb size={18} />}>
            <strong>技巧：</strong>你可以在一个 prompt 里组合多个需求，比如 &ldquo;帮我美化主题、加评论系统、优化 SEO，然后推送到 GitHub&rdquo;。Claude Code 会依次完成所有任务。
          </Callout>
        </section>

        <hr className="border-none h-px bg-border my-12" />

        {/* ── Section 7: FAQ ── */}
        <section className="section-reveal mb-14" id="faq">
          <SectionNum n="07" />
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight mb-2 tracking-tight">常见问题 FAQ</h2>

          <ToggleBlock icon={<></>} title="我完全不会编程，能用这个教程吗？">
            <p className="text-sm text-secondary leading-relaxed">能！这正是 Claude Code 的价值所在。你只需要会说话、会描述需求。所有的命令、代码、配置都由 Claude Code 自动完成。</p>
          </ToggleBlock>

          <ToggleBlock icon={<></>} title="Vercel 免费版有什么限制？">
            <p className="text-sm text-secondary leading-relaxed">每月 100GB 带宽、无限次部署。个人博客完全够用，日均几千访问量没问题。</p>
          </ToggleBlock>

          <ToggleBlock icon={<></>} title="推送后多久能看到更新？">
            <p className="text-sm text-secondary leading-relaxed">通常 30 秒 ~ 2 分钟。Vercel 检测到 push 后自动触发构建和部署。</p>
          </ToggleBlock>

          <ToggleBlock icon={<></>} title="Claude Code 会自动执行危险操作吗？">
            <p className="text-sm text-secondary leading-relaxed">不会。涉及删除、覆盖等操作时，Claude Code 会先确认。你也可以随时拒绝它的操作建议。</p>
          </ToggleBlock>

          <ToggleBlock icon={<></>} title="不想用 Next.js，有其他选择吗？">
            <p className="text-sm text-secondary leading-relaxed">直接说 &ldquo;用 Astro 帮我创建博客&rdquo; 或 &ldquo;用纯 HTML 写一个博客&rdquo;。Claude Code 支持任何技术栈。</p>
          </ToggleBlock>
        </section>

        <hr className="border-none h-px bg-border my-12" />

        {/* ── Summary ── */}
        <section className="section-reveal mb-14" id="summary">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple mb-3">
            <IconCheck size={16} className="text-white [&>svg]:stroke-white" />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight mb-2 tracking-tight">完整工作流总结</h2>
          <p className="text-[15px] text-secondary mb-6">整个过程你只需要说 5 句话。</p>

          <div className="space-y-4 my-6">
            {[
              ["01", "ac-purple-bg", "ac-purple", "&ldquo;帮我创建一个 Next.js 博客项目&rdquo;"],
              ["02", "ac-purple-bg", "ac-purple", "&ldquo;设计一个 Notion 风格的博客首页&rdquo;"],
              ["03", "ac-purple-bg", "ac-purple", "&ldquo;推送到 GitHub 并部署到 Vercel&rdquo;"],
              ["04", "ac-purple-bg", "ac-purple", "&ldquo;帮我写一篇关于 XXX 的博客文章&rdquo;"],
              ["05", "ac-purple-bg", "ac-purple", "&ldquo;推送到 GitHub&rdquo; → 自动上线！"],
            ].map(([num, , , text], i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 flex items-center justify-center bg-accent-purple-bg text-accent-purple rounded-lg font-mono text-sm font-semibold">
                  {num}
                </span>
                <div className="text-[15px] text-accent-purple font-medium pt-1 leading-relaxed">
                  {text}
                </div>
              </div>
            ))}
          </div>

          {/* Bookmark Cards */}
          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-10 mb-3.5 flex items-center gap-2">
            <IconBookOpen size={18} /> 推荐资源
          </h3>

          {([
            ["Claude Code 文档", "学习更多 Claude Code 用法和技巧", "docs.anthropic.com/en/docs/claude-code", IconTerminal, "stroke-accent-purple"],
            ["Vercel 官方文档", "部署、域名、框架配置的权威参考", "vercel.com/docs", IconZap, "stroke-accent-blue"],
            ["Next.js 文档", "App Router、静态生成、图片优化等", "nextjs.org/docs", IconSettings, "stroke-accent-green"],
          ] as const).map(([title, desc, url, Icon, color], i) => (
            <a key={i} href="#" className="flex border border-border rounded-lg overflow-hidden no-underline text-foreground transition-all hover:border-accent-blue hover:shadow-[0_2px_12px_rgba(35,131,226,0.08)] hover:-translate-y-px my-5">
              <div className="px-5 py-4 flex-1">
                <div className="text-sm font-semibold mb-1">{String(title)}</div>
                <div className="text-[13px] text-secondary leading-relaxed">{String(desc)}</div>
                <div className="text-xs text-secondary mt-2 flex items-center gap-1"><IconLink size={14} /> {String(url)}</div>
              </div>
              <div className="w-40 bg-gradient-to-br from-accent-blue-bg to-accent-purple-bg hidden sm:flex items-center justify-center">
                <Icon size={36} className={String(color)} />
              </div>
            </a>
          ))}
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-border mt-6">
          <p className="text-[13px] text-secondary flex items-center justify-center gap-1">
            Made with <IconHeart size={16} className="text-accent-red" /> using Claude Code + Vercel
          </p>
          <p className="text-xs text-secondary mt-1.5">本教程由 Claude Code 自动生成 &middot; 2025</p>
          <a
            href="https://web-mauve-five-17.vercel.app"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 mt-2 px-4 py-1.5 rounded-lg bg-accent-blue-bg text-accent-blue text-[13px] font-semibold no-underline"
          >
            <IconGlobe size={16} /> 在线预览 web-mauve-five-17.vercel.app
          </a>
        </footer>
      </div>
    </>
  );
}
