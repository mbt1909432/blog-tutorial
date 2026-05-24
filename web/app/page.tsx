import { ClientEffects } from "./components/ClientEffects";
import { CodeBlock } from "./components/CodeBlock";
import { Callout } from "./components/Callout";
import { ToggleBlock } from "./components/ToggleBlock";
import {
  IconZap, IconFileText, IconGlobe, IconRocket, IconBookOpen,
  IconKey, IconWrench, IconTerminal, IconPackage, IconGitBranch,
  IconBot, IconClipboard, IconFlame, IconPenLine, IconRefresh,
  IconLightbulb, IconCheck, IconCheckCircle, IconSparkles,
  IconLink, IconSettings, IconHeart, IconFolder, IconFile,
  IconLock, IconPalette, IconBarChart, IconSearch, IconMessage,
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
      <nav
        id="nav-bar"
        className="sticky top-0 bg-white/85 backdrop-blur-xl border-b border-border z-[999] transition-shadow"
      >
        <div className="max-w-[780px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="font-[family-name:var(--font-display)] text-sm font-semibold text-foreground tracking-tight flex items-center gap-2">
            <span className="nav-dot w-2 h-2 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple" />
            Vercel Blog Tutorial
          </div>
          <div className="flex gap-1.5 max-sm:hidden">
            {["Prep", "CLI", "Skills", "Project", "Deploy", "Content", "Advanced"].map((t) => (
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
          <div className="fade-down inline-flex items-center gap-1.5 text-xs font-medium text-accent-blue bg-accent-blue-bg px-3.5 py-[5px] rounded-full mb-6 tracking-wide">
            <IconZap size={14} /> 零基础友好 &middot; 免费部署 &middot; 15 分钟搞定
          </div>
          <h1 className="fade-down fade-down-1 font-[family-name:var(--font-display)] text-[42px] font-bold leading-tight mb-4 tracking-tight">
            Vercel + Git<br />
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">个人博客搭建全指南</span>
          </h1>
          <p className="fade-down fade-down-2 text-[17px] text-secondary leading-relaxed max-w-[520px] mx-auto mb-8">
            从零开始，用 Git 管理内容、Vercel 自动部署，打造属于你的个人博客。无需服务器，完全免费。
          </p>
          <div className="fade-down fade-down-3 flex items-center justify-center gap-5 text-[13px] text-secondary max-sm:flex-col max-sm:gap-2">
            <span className="flex items-center gap-1.5"><IconFileText size={16} /> 预计阅读 15 min</span>
            <span className="flex items-center gap-1.5"><IconGlobe size={16} /> 支持自定义域名</span>
            <span className="flex items-center gap-1.5"><IconRocket size={16} /> 自动 CI/CD</span>
          </div>
        </header>

        {/* TOC */}
        <div className="fade-down fade-down-4 bg-bg-secondary border border-border rounded-[10px] px-7 py-6 mb-12">
          <div className="font-[family-name:var(--font-display)] text-sm font-semibold text-foreground mb-3.5 flex items-center gap-2">
            <IconBookOpen size={18} /> 目录导航
          </div>
          <ol className="list-none m-0 p-0 space-y-0.5 [&_a]:flex [&_a]:items-center [&_a]:gap-2.5 [&_a]:text-sm [&_a]:text-secondary [&_a]:no-underline [&_a]:px-2.5 [&_a]:py-1.5 [&_a]:rounded-md [&_a]:transition-colors [&_a]:hover:bg-bg-hover [&_a]:hover:text-foreground">
            {[
              ["#prepare", "准备工作 — 账号 / CLI / Skills 全览"],
              ["#cli-tools", "CLI 工具安装与用途", true],
              ["#skills", "推荐 Skills（AI 辅助）", true],
              ["#project", "创建项目 — 搭建博客框架"],
              ["#project-structure", "项目结构说明", true],
              ["#deploy", "部署上线 — 连接 Vercel"],
              ["#content", "写文章 — Git 工作流"],
              ["#domain", "绑定域名 — 个性化访问"],
              ["#advanced", "进阶优化 — 主题 / 性能 / SEO"],
              ["#faq", "常见问题 FAQ"],
            ].map(([href, text, sub], i) => (
              <li key={String(href)} className={sub ? "pl-14" : ""}>
                <a href={String(href)}>
                  {!sub && (
                    <span className="font-mono text-[11px] font-medium text-accent-blue bg-accent-blue-bg px-[7px] py-0.5 rounded min-w-[28px] text-center">
                      {String(i + 1 - (sub ? 0 : 0)).padStart(2, "0")}
                    </span>
                  )}
                  {text}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Section 1: 准备工作 */}
        <section className="section-reveal mb-14" id="prepare">
          <SectionNum n="01" />
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight mb-2 tracking-tight">准备工作</h2>
          <p className="text-[15px] text-secondary mb-6">搭建前需要注册账号、安装 CLI 工具和配置 AI 辅助 Skills，大约 10 分钟。</p>

          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
            <H3Icon><IconKey /></H3Icon> 需要注册的账号
          </h3>
          <div className="grid gap-3 my-5">
            <StepCard n={1} title="GitHub 账号" desc="代码托管平台，存放博客源码、触发自动部署 → github.com" />
            <StepCard n={2} title="Vercel 账号" desc="建议直接用 GitHub 登录，免去绑定步骤 → vercel.com" />
            <StepCard n={3} title="域名（可选）" desc="自定义博客地址，推荐 Cloudflare / Namesilo / 阿里云" />
          </div>

          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
            <H3Icon><IconWrench /></H3Icon> 本地工具安装
          </h3>

          <CodeBlock filename="Terminal — 配置 Git">
            <span className="comment"># 配置 Git 用户名和邮箱</span>{"\n"}
            <span className="keyword">git</span> config --global user.name <span className="string">"你的名字"</span>{"\n"}
            <span className="keyword">git</span> config --global user.email <span className="string">"your@email.com"</span>{"\n\n"}
            <span className="comment"># 验证安装</span>{"\n"}
            <span className="keyword">git</span> --version{"\n"}
            <span className="keyword">node</span> --version
          </CodeBlock>

          {/* CLI Tools */}
          <div id="cli-tools">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
              <H3Icon><IconTerminal /></H3Icon> CLI 工具安装与用途
            </h3>
            <p className="text-[15.5px] leading-relaxed mb-4">以下命令行工具是整个工作流的核心，每个都有明确用途：</p>

            <ToggleBlock icon={<><IconWrench size={16} /></>} title="Git CLI — 版本控制核心" defaultOpen>
              <p className="text-sm text-secondary leading-relaxed mb-3"><strong className="text-foreground">用途：</strong>管理代码版本、提交文章、推送到 GitHub 触发自动部署。</p>
              <CodeBlock filename="git-commands">
                <span className="comment"># 核心命令</span>{"\n"}
                <span className="keyword">git</span> init                    <span className="comment"># 初始化仓库</span>{"\n"}
                <span className="keyword">git</span> add .                    <span className="comment"># 暂存所有更改</span>{"\n"}
                <span className="keyword">git</span> commit -m <span className="string">"msg"</span>          <span className="comment"># 提交到本地</span>{"\n"}
                <span className="keyword">git</span> push origin main         <span className="comment"># 推送 → 触发 Vercel 自动部署</span>
              </CodeBlock>
            </ToggleBlock>

            <ToggleBlock icon={<><IconZap size={16} /></>} title="Vercel CLI — 部署与本地预览">
              <p className="text-sm text-secondary leading-relaxed mb-3"><strong className="text-foreground">用途：</strong>本地预览生产构建、手动部署、管理环境变量、查看部署日志。</p>
              <CodeBlock filename="vercel-cli">
                <span className="comment"># 安装</span>{"\n"}
                <span className="keyword">npm</span> i -g vercel{"\n\n"}
                <span className="comment"># 核心命令</span>{"\n"}
                <span className="keyword">vercel</span>                     <span className="comment"># 部署到 Vercel（交互式）</span>{"\n"}
                <span className="keyword">vercel</span> dev                  <span className="comment"># 本地模拟 Vercel 环境</span>{"\n"}
                <span className="keyword">vercel</span> env pull             <span className="comment"># 拉取远程环境变量到本地</span>
              </CodeBlock>
            </ToggleBlock>

            <ToggleBlock icon={<><IconPackage size={16} /></>} title="npm / npx — 包管理">
              <p className="text-sm text-secondary leading-relaxed mb-3"><strong className="text-foreground">用途：</strong>安装项目依赖、运行开发服务器、执行脚手架命令。随 Node.js 一起安装。</p>
              <CodeBlock filename="npm-commands">
                <span className="keyword">npm</span> install                  <span className="comment"># 安装项目依赖</span>{"\n"}
                <span className="keyword">npm</span> run dev                  <span className="comment"># 启动本地开发服务器 (localhost:3000)</span>{"\n"}
                <span className="keyword">npx</span> create-next-app@latest   <span className="comment"># 用最新版创建 Next.js 项目</span>
              </CodeBlock>
            </ToggleBlock>

            <ToggleBlock icon={<><IconGitBranch size={16} /></>} title="GitHub CLI (gh) — GitHub 操作（可选）">
              <p className="text-sm text-secondary leading-relaxed mb-3"><strong className="text-foreground">用途：</strong>命令行直接操作 GitHub：创建仓库、PR、Issue，不用打开浏览器。</p>
              <CodeBlock filename="gh-cli">
                <span className="comment"># 安装</span>{"\n"}
                <span className="keyword">winget</span> install GitHub.cli{"\n\n"}
                <span className="comment"># 核心命令</span>{"\n"}
                <span className="keyword">gh</span> auth login                <span className="comment"># 登录 GitHub</span>{"\n"}
                <span className="keyword">gh</span> repo create my-blog --public  <span className="comment"># 命令行创建仓库</span>{"\n"}
                <span className="keyword">gh</span> pr create                 <span className="comment"># 创建 Pull Request</span>
              </CodeBlock>
            </ToggleBlock>
          </div>

          {/* Skills */}
          <div id="skills">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
              <H3Icon><IconBot /></H3Icon> 推荐 Skills（AI 辅助开发）
            </h3>

            <div className="bg-bg-secondary border border-border rounded-[10px] px-6 py-5 my-5 space-y-2.5">
              {[
                ["必装", "accent-blue", "accent-blue-bg", "frontend-design", "生成高质量前端界面代码，避免 AI 生成千篇一律的设计。博客主题定制必备。"],
                ["必装", "accent-blue", "accent-blue-bg", "vercel-react-best-practices", "57 条 Vercel 官方 React/Next.js 性能优化规则。确保博客 Lighthouse 90+ 分。"],
                ["推荐", "accent-green", "accent-green-bg", "tailwind-design-system", "Tailwind CSS v4 设计系统，博客样式管理更规范。"],
                ["推荐", "accent-green", "accent-green-bg", "responsive-design", "响应式布局最佳实践，确保博客在手机/平板/PC 都好看。"],
                ["推荐", "accent-green", "accent-green-bg", "seo-audit", "SEO 审计工具，检查博客的搜索引擎优化质量。"],
                ["可选", "accent-orange", "accent-orange-bg", "shadcn/ui", "精美 UI 组件库，博客交互组件（搜索、暗黑模式切换等）直接复用。"],
                ["可选", "accent-orange", "accent-orange-bg", "react-testing", "React 组件测试，确保博客功能（文章列表、搜索等）正常工作。"],
              ].map(([badge, color, bg, name, desc]) => (
                <div key={name} className="flex gap-2.5 items-start py-1.5 border-b border-border last:border-b-0">
                  <span className={`shrink-0 bg-${bg} text-${color} px-2.5 py-0.5 rounded text-xs font-semibold`}>{badge}</span>
                  <div>
                    <strong className="text-[13.5px]">{name}</strong>
                    <br /><span className="text-secondary text-[13px]">{desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <Callout variant="purple" icon={<IconBot size={18} />}>
              <strong>Skills 使用场景：</strong>让 AI 用 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">frontend-design</code> 生成博客首页布局 → 用 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">tailwind-design-system</code> 统一样式 → 用 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">seo-audit</code> 检查 SEO。全链路 AI 辅助！
            </Callout>

            <Callout variant="green" icon={<IconSparkles size={18} />}>
              <strong>你不需要手动输入任何命令！</strong>本教程中展示的所有 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">git</code>、<code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">gh</code>、<code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">vercel</code>、<code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">npm</code> 命令都是由 Claude Code 自动执行的。你只需要用自然语言描述需求（比如 "帮我创建项目并部署到 Vercel"），Claude Code 就会自动运行这些命令、创建文件、完成部署。这就是 AI 驱动开发的流程。
            </Callout>
          </div>

          {/* Tool overview */}
          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-8 mb-3 flex items-center gap-2">
            <H3Icon><IconClipboard /></H3Icon> 工具总览
          </h3>
          <div className="bg-bg-secondary border border-border rounded-[10px] px-6 py-5 my-5 font-mono text-[13px] leading-9">
            <div className="grid grid-cols-[120px_1fr_160px] border-b-2 border-border pb-2 mb-1 font-sans font-semibold text-xs text-secondary">
              <span>工具</span><span>用途</span><span>安装方式</span>
            </div>
            {[
              ["Git CLI", "版本控制、代码推送触发部署", "git-scm.com"],
              ["Vercel CLI", "本地预览、手动部署、环境变量管理", "npm i -g vercel"],
              ["Node.js/npm", "运行 Next.js、安装依赖、开发服务器", "nodejs.org"],
              ["GitHub CLI", "命令行操作仓库、PR（可选）", "winget install GitHub.cli"],
              ["Skills", "AI 辅助开发（前端设计、性能优化等）", "Claude Code 内置"],
            ].map(([tool, usage, install]) => (
              <div key={tool} className="grid grid-cols-[120px_1fr_160px] border-b border-border last:border-b-0">
                <strong className="font-sans">{tool}</strong>
                <span className="font-sans text-secondary">{usage}</span>
                <span className="text-secondary">{install}</span>
              </div>
            ))}
          </div>

          <Callout variant="blue" icon={<IconLightbulb size={18} />}>
            <strong>提示：</strong>Vercel 免费额度足够个人博客使用，每月 100GB 带宽、无限次部署。完全够用！
          </Callout>
        </section>

        <hr className="border-none h-px bg-border my-12" />

        {/* Section 2: 创建项目 */}
        <section className="section-reveal mb-14" id="project">
          <SectionNum n="02" />
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight mb-2 tracking-tight">创建项目</h2>
          <p className="text-[15px] text-secondary mb-6">推荐使用 Next.js 作为博客框架，Vercel 对其有最佳支持。</p>

          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
            <H3Icon><IconRocket /></H3Icon> 快速初始化
          </h3>
          <CodeBlock filename="Terminal">
            <span className="comment"># 方案 A: 使用 Next.js 官方博客模板（推荐新手）</span>{"\n"}
            <span className="keyword">npx</span> create-next-app@latest my-blog \{"\n"}
            {"  "}--typescript --tailwind --app{"\n\n"}
            <span className="comment"># 方案 B: 使用 Vercel 博客模板（一键部署）</span>{"\n"}
            <span className="comment"># 访问 github.com/vercel/next.js/tree/canary/examples/blog-starter</span>{"\n\n"}
            <span className="comment"># 进入项目并运行</span>{"\n"}
            <span className="keyword">cd</span> my-blog{"\n"}
            <span className="keyword">npm</span> run dev
          </CodeBlock>

          <Callout variant="green" icon={<IconCheckCircle size={18} />}>
            执行 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">npm run dev</code> 后访问 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">localhost:3000</code> 即可预览博客。
          </Callout>

          <div id="project-structure">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
              <H3Icon><IconFolder /></H3Icon> 项目结构说明
            </h3>
            <div className="bg-bg-secondary border border-border rounded-[10px] px-6 py-5 my-5 font-mono text-[13px] leading-[1.85]">
              <span className="file-folder flex items-center gap-1"><IconFolder size={16} /> my-blog/</span>
              <span className="file-folder flex items-center gap-1 pl-6"><IconFolder size={16} /> app/ <span className="file-desc">— 页面路由 (App Router)</span></span>
              <span className="file-file flex items-center gap-1 pl-12"><IconFile size={14} /> page.tsx <span className="file-desc">— 首页</span></span>
              <span className="file-file flex items-center gap-1 pl-12"><IconFile size={14} /> layout.tsx <span className="file-desc">— 全局布局</span></span>
              <span className="file-folder flex items-center gap-1 pl-12"><IconFolder size={16} /> blog/</span>
              <span className="pl-6"><span className="file-file flex items-center gap-1"><IconFile size={14} /> page.tsx <span className="file-desc">— 博客列表页</span></span></span>
              <span className="pl-6"><span className="file-folder flex items-center gap-1"><IconFolder size={16} /> content/ <span className="file-desc">— Markdown 文章</span></span></span>
              <span className="pl-6"><span className="file-folder flex items-center gap-1"><IconFolder size={16} /> components/ <span className="file-desc">— 可复用组件</span></span></span>
              <span className="pl-6"><span className="file-folder flex items-center gap-1"><IconFolder size={16} /> public/ <span className="file-desc">— 静态资源 (图片等)</span></span></span>
            </div>
          </div>
        </section>

        <hr className="border-none h-px bg-border my-12" />

        {/* Section 3: 部署上线 */}
        <section className="section-reveal mb-14" id="deploy">
          <SectionNum n="03" />
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight mb-2 tracking-tight">部署上线</h2>
          <p className="text-[15px] text-secondary mb-6">两种部署方式：Vercel 自动部署（推荐）或 GitHub Pages 静态托管。</p>

          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
            <H3Icon><IconFlame /></H3Icon> Step 1: 创建仓库并推送
          </h3>
          <p className="text-[15.5px] leading-relaxed mb-4">用 <code className="font-mono text-xs bg-[#f7f6f3] text-accent-red px-1.5 py-0.5 rounded font-medium">gh</code> CLI 一条命令创建远程仓库，免去手动去网页操作：</p>

          <CodeBlock filename="Terminal — gh CLI 全流程">
            <span className="comment"># 1. 初始化本地仓库</span>{"\n"}
            <span className="keyword">git</span> init{"\n"}
            <span className="keyword">git</span> add .{"\n"}
            <span className="keyword">git</span> commit -m <span className="string">"init: first commit"</span>{"\n\n"}
            <span className="comment"># 2. 用 gh CLI 直接创建 GitHub 公开仓库（不用开浏览器）</span>{"\n"}
            <span className="keyword">gh</span> repo create my-blog --public --description <span className="string">"我的个人博客"</span>{"\n\n"}
            <span className="comment"># 3. 推送到 GitHub</span>{"\n"}
            <span className="keyword">git</span> branch -M main{"\n"}
            <span className="keyword">git</span> remote add origin https://github.com/用户名/my-blog.git{"\n"}
            <span className="keyword">git</span> push -u origin main
          </CodeBlock>

          <Callout variant="blue" icon={<IconLightbulb size={18} />}>
            <strong>gh 的优势：</strong>一条命令完成创建仓库 + 设置 remote + 推送。也可以用 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">gh repo create --source=. --push</code> 一步到位。
          </Callout>

          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
            <H3Icon><IconZap /></H3Icon> Step 2A: Vercel 部署（推荐）
          </h3>
          <div className="grid gap-3 my-5">
            <StepCard n={1} title="登录 Vercel Dashboard" desc="打开 vercel.com 并用 GitHub 登录" />
            <StepCard n={2} title='点击 "Add New" → "Project"' desc="选择 Import Git Repository" />
            <StepCard n={3} title="选择你的 my-blog 仓库" desc="Vercel 会自动检测 Next.js 框架，直接点 Deploy" />
            <StepCard n={4} title="等待部署完成" desc="约 1~2 分钟，你会获得一个 xxx.vercel.app 地址" />
          </div>

          <Callout variant="purple" icon={<IconSparkles size={18} />}>
            <strong>自动部署：</strong>之后每次 <code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">git push</code>，Vercel 会自动检测并重新部署，无需手动操作！这就是 CI/CD 的魅力。
          </Callout>

          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
            <H3Icon><IconGitBranch /></H3Icon> Step 2B: GitHub Pages 部署（纯静态）
          </h3>
          <CodeBlock filename="Terminal — GitHub Pages">
            <span className="comment"># 用 gh CLI 一键开启 GitHub Pages</span>{"\n"}
            <span className="keyword">gh</span> api repos/{"{owner}"}/{"{repo}"}/pages \{"\n"}
            {"  "}-X POST -f build_type=workflow{"\n\n"}
            <span className="comment"># 或在仓库 Settings → Pages → Source 选 main 分支</span>{"\n"}
            <span className="comment"># 访问地址: https://用户名.github.io/my-blog/</span>
          </CodeBlock>

          {/* Comparison */}
          <div className="bg-bg-secondary border border-border rounded-[10px] px-6 py-5 my-5 font-mono text-[13px] leading-9">
            <div className="grid grid-cols-2 border-b-2 border-border pb-2 mb-1 font-sans font-semibold text-xs text-secondary">
              <span>Vercel</span><span>GitHub Pages</span>
            </div>
            {[
              ["支持 SSR / ISR / API", "仅静态文件"],
              ["自动 HTTPS + CDN", "自动 HTTPS + CDN"],
              ["每次 push 自动部署", "每次 push 自动部署"],
              ["预览部署（每个 PR）", "无预览"],
            ].map(([a, b], i) => (
              <div key={i} className="grid grid-cols-2 border-b border-border last:border-b-0">
                <span className="font-sans">{a}</span><span className="font-sans">{b}</span>
              </div>
            ))}
            <div className="grid grid-cols-2 font-sans font-semibold">
              <span className="text-accent-green">推荐：Next.js 项目</span>
              <span className="text-accent-green">推荐：纯静态博客</span>
            </div>
          </div>
        </section>

        <hr className="border-none h-px bg-border my-12" />

        {/* Section 4: 写文章 */}
        <section className="section-reveal mb-14" id="content">
          <SectionNum n="04" />
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight mb-2 tracking-tight">写文章 — Git 工作流</h2>
          <p className="text-[15px] text-secondary mb-6">用 Markdown 写作，Git 管理版本，推送即发布。</p>

          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
            <H3Icon><IconPenLine /></H3Icon> 创建一篇文章
          </h3>

          <CodeBlock filename="content/my-first-post.md">
            <span className="tag">---</span>{"\n"}
            <span className="prop">title</span>: <span className="string">"我的第一篇博客"</span>{"\n"}
            <span className="prop">date</span>: <span className="string">"2025-01-15"</span>{"\n"}
            <span className="prop">excerpt</span>: <span className="string">"这是摘要内容"</span>{"\n"}
            <span className="prop">tags</span>: [<span className="string">"随笔"</span>, <span className="string">"技术"</span>]{"\n"}
            <span className="tag">---</span>{"\n\n"}
            <span className="comment">## Hello World</span>{"\n\n"}
            这是我的第一篇文章，使用 Markdown 编写。
          </CodeBlock>

          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3 flex items-center gap-2">
            <H3Icon><IconRefresh /></H3Icon> Git 发布流程
          </h3>

          <CodeBlock filename="Terminal — 每次发布文章">
            <span className="comment"># 1. 写完文章后，添加到暂存区</span>{"\n"}
            <span className="keyword">git</span> add content/my-first-post.md{"\n\n"}
            <span className="comment"># 2. 提交</span>{"\n"}
            <span className="keyword">git</span> commit -m <span className="string">"post: 添加第一篇博客文章"</span>{"\n\n"}
            <span className="comment"># 3. 推送 → Vercel 自动部署！</span>{"\n"}
            <span className="keyword">git</span> push origin main
          </CodeBlock>

          <Callout variant="orange" icon={<IconLightbulb size={18} />}>
            <strong>提交规范：</strong>建议使用约定式提交：<code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">post:</code> 新文章、<code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">fix:</code> 修复、<code className="font-mono text-xs bg-accent-red-bg text-accent-red px-1.5 py-0.5 rounded font-medium">feat:</code> 新功能。
          </Callout>

          <ToggleBlock icon={<><IconFileText size={16} /></>} title="高级工作流：草稿分支 + PR 预览">
            <p className="text-sm text-secondary leading-relaxed mb-3">对于重要的文章，可以先创建草稿分支，写完再通过 Pull Request 合并。Vercel 会为每个 PR 自动生成预览链接。</p>
            <CodeBlock filename="draft-workflow">
              <span className="comment"># 创建草稿分支</span>{"\n"}
              <span className="keyword">git</span> checkout -b draft/my-article{"\n\n"}
              <span className="comment"># 写完后推送并创建 PR</span>{"\n"}
              <span className="keyword">git</span> push origin draft/my-article{"\n"}
              <span className="comment"># 在 GitHub 上创建 Pull Request</span>{"\n"}
              <span className="comment"># Vercel 会自动生成预览 URL</span>
            </CodeBlock>
          </ToggleBlock>
        </section>

        <hr className="border-none h-px bg-border my-12" />

        {/* Section 5: 域名 */}
        <section className="section-reveal mb-14" id="domain">
          <SectionNum n="05" />
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight mb-2 tracking-tight">绑定自定义域名</h2>
          <p className="text-[15px] text-secondary mb-6">让你的博客拥有专属域名，如 blog.yourname.com。</p>
          <div className="grid gap-3 my-5">
            <StepCard n={1} title="购买域名" desc="推荐 Namesilo / Cloudflare / 阿里云，一般 .com 域名年费 ≈ ¥50-70" />
            <StepCard n={2} title="Vercel 添加域名" desc="Settings → Domains → 输入你的域名" />
            <StepCard n={3} title="配置 DNS 解析" desc="在域名商后台添加 CNAME 记录指向 cname.vercel-dns.com" />
            <StepCard n={4} title="等待生效" desc="DNS 传播需要几分钟到几小时，Vercel 自动配置 HTTPS 证书" />
          </div>
          <Callout variant="green" icon={<IconLock size={18} />}>
            <strong>HTTPS 免费自动配置：</strong>Vercel 会自动为你的域名签发 SSL 证书，无需额外操作。
          </Callout>
        </section>

        <hr className="border-none h-px bg-border my-12" />

        {/* Section 6: 进阶 */}
        <section className="section-reveal mb-14" id="advanced">
          <SectionNum n="06" />
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight mb-2 tracking-tight">进阶优化</h2>
          <p className="text-[15px] text-secondary mb-6">让你的博客更快、更好看、更容易被搜索到。</p>

          <ToggleBlock icon={<><IconPalette size={16} /></>} title="主题美化">
            <p className="text-sm text-secondary leading-relaxed mb-2">推荐几款优秀的 Next.js 博客主题：</p>
            <ul className="list-disc pl-5 text-sm text-secondary leading-8">
              <li><strong>Tailwind Blog</strong> — Tailwind CSS 官方博客模板</li>
              <li><strong>Nextra</strong> — 基于 MDX 的文档/博客框架</li>
              <li><strong>Lumen</strong> — 极简风格，Notion-like</li>
            </ul>
          </ToggleBlock>

          <ToggleBlock icon={<><IconBarChart size={16} /></>} title="性能优化 (Core Web Vitals)">
            <ul className="list-none my-4 space-y-1">
              {[
                "使用 next/image 自动优化图片",
                "开启 ISR（增量静态生成），兼顾速度与更新",
                "字体用 next/font 加载，避免 CLS",
                "代码分割：动态 import 重型组件",
                "用 Lighthouse 跑分，目标 90+",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 py-1.5 text-sm leading-relaxed">
                  <span className="check-box shrink-0 w-4 h-4 border-2 border-border rounded mt-1 cursor-pointer" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </ToggleBlock>

          <ToggleBlock icon={<><IconSearch size={16} /></>} title="SEO 优化">
            <CodeBlock filename="app/blog/[slug]/page.tsx">
              <span className="keyword">export</span> <span className="keyword">async</span> <span className="function">function</span> <span className="function">generateMetadata</span>({"{"} <span className="variable">params</span> {"}"}) {"{"}{"\n"}
              {"  "}<span className="keyword">const</span> <span className="variable">post</span> = <span className="keyword">await</span> <span className="function">getPost</span>(<span className="variable">params</span>.<span className="prop">slug</span>);{"\n\n"}
              {"  "}<span className="keyword">return</span> {"{"}{"\n"}
              {"    "}<span className="prop">title</span>: <span className="variable">post</span>.<span className="prop">title</span>,{"\n"}
              {"    "}<span className="prop">description</span>: <span className="variable">post</span>.<span className="prop">excerpt</span>,{"\n"}
              {"    "}<span className="prop">openGraph</span>: {"{"}{"\n"}
              {"      "}<span className="prop">title</span>: <span className="variable">post</span>.<span className="prop">title</span>,{"\n"}
              {"      "}<span className="prop">description</span>: <span className="variable">post</span>.<span className="prop">excerpt</span>,{"\n"}
              {"      "}<span className="prop">type</span>: <span className="string">{"'article'"}</span>,{"\n"}
              {"    "},{"}"},{"\n"}
              {"  "},{"}"};{"\n"}
              {"}"}
            </CodeBlock>
          </ToggleBlock>

          <ToggleBlock icon={<><IconMessage size={16} /></>} title="评论系统">
            <p className="text-sm text-secondary leading-relaxed mb-2">推荐免费方案：</p>
            <ul className="list-disc pl-5 text-sm text-secondary leading-8">
              <li><strong>Giscus</strong> — 基于 GitHub Discussions，免费无广告</li>
              <li><strong>Utterances</strong> — 基于 GitHub Issues，轻量</li>
              <li><strong>Disqus</strong> — 老牌方案（有广告）</li>
            </ul>
          </ToggleBlock>
        </section>

        <hr className="border-none h-px bg-border my-12" />

        {/* Section 7: FAQ */}
        <section className="section-reveal mb-14" id="faq">
          <SectionNum n="07" />
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight mb-2 tracking-tight">常见问题 FAQ</h2>
          <p className="text-[15px] text-secondary mb-6">新手最常遇到的问题，点击展开查看解答。</p>

          <ToggleBlock icon={<></>} title="Vercel 免费版有什么限制？">
            <p className="text-sm text-secondary leading-relaxed">免费额度：每月 100GB 带宽、无限次部署、Serverless 函数 10秒超时。个人博客完全够用，日均几千访问量没有问题。</p>
          </ToggleBlock>

          <ToggleBlock icon={<></>} title="推送后多久能看到更新？">
            <p className="text-sm text-secondary leading-relaxed">通常 30 秒 ~ 2 分钟。Vercel 检测到 push 后会自动触发构建和部署。如果文章较多，构建时间会长一些。</p>
          </ToggleBlock>

          <ToggleBlock icon={<></>} title="不想用 Next.js，有其他选择吗？">
            <p className="text-sm text-secondary leading-relaxed">可以！Vercel 支持多种框架：Astro（推荐静态博客）、Hugo、Hexo、Gatsby、甚至纯 HTML。Astro 特别适合博客，默认零 JS 输出。</p>
          </ToggleBlock>

          <ToggleBlock icon={<></>} title="部署失败了怎么办？">
            <p className="text-sm text-secondary leading-relaxed">在 Vercel Dashboard → Deployments 中查看构建日志，常见原因：依赖安装失败（检查 package.json）、语法错误、环境变量缺失。</p>
          </ToggleBlock>
        </section>

        <hr className="border-none h-px bg-border my-12" />

        {/* Summary */}
        <section className="section-reveal mb-14" id="summary">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple mb-3">
            <IconCheck size={16} className="text-white [&>svg]:stroke-white" />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-tight mb-2 tracking-tight">完整工作流总结</h2>
          <p className="text-[15px] text-secondary mb-6">一图看懂从写作到上线的全流程。</p>

          <div className="bg-[#1e1e1e] rounded-[10px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.12)]">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/[0.08]">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-xs text-white/45">Workflow</span>
            </div>
            <div className="px-5 py-5">
              <pre className="font-[family-name:var(--font-display)] text-sm text-[#dcdcaa] text-center whitespace-pre m-0 leading-relaxed">
                <span className="flex items-center justify-center gap-2"><IconPenLine size={16} className="[&>svg]:stroke-[#dcdcaa]" /> 写 Markdown</span>
                {"     "}→     {"\n"}
                <span className="flex items-center justify-center gap-2"><IconGitBranch size={16} className="[&>svg]:stroke-[#dcdcaa]" /> git push</span>
                {"     "}→     {"\n"}
                <span className="flex items-center justify-center gap-2"><IconGlobe size={16} className="[&>svg]:stroke-[#dcdcaa]" /> Vercel 自动部署</span>
              </pre>
            </div>
          </div>

          {/* Bookmark Cards */}
          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mt-7 mb-3.5 flex items-center gap-2">
            <IconBookOpen size={18} /> 推荐资源
          </h3>

          {([
            ["Vercel 官方文档", "部署、域名、框架配置的权威参考", "vercel.com/docs", IconZap, "stroke-accent-blue"],
            ["Next.js 文档", "App Router、静态生成、图片优化等核心功能", "nextjs.org/docs", IconSettings, "stroke-accent-purple"],
            ["Next.js Blog Starter", "官方博客模板，一键部署到 Vercel", "github.com/vercel/next.js", IconFileText, "stroke-accent-green"],
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
            Made with <IconHeart size={16} className="text-accent-red" /> using Vercel + Git
          </p>
          <p className="text-xs text-secondary mt-1.5">本教程基于 Next.js + Vercel 免费方案 &middot; 2025</p>
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
