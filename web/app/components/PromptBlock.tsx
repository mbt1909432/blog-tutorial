"use client";

export function PromptBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-lg border-2 border-accent-purple/30 bg-gradient-to-r from-accent-purple-bg to-transparent overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 bg-accent-purple/8 border-b border-accent-purple/15">
        <span className="text-sm font-semibold text-accent-purple flex items-center gap-1.5">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
          你对 Claude Code 说
        </span>
      </div>
      <div className="px-5 py-4">
        <div className="text-[15px] leading-relaxed text-foreground font-medium">
          {children}
        </div>
      </div>
    </div>
  );
}

export function ActionBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-lg border border-accent-green/25 bg-gradient-to-r from-accent-green-bg/60 to-transparent overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 bg-accent-green/8 border-b border-accent-green/15">
        <span className="text-sm font-semibold text-accent-green flex items-center gap-1.5">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
          Claude Code 自动执行
        </span>
      </div>
      <div className="px-5 py-4">
        {children}
      </div>
    </div>
  );
}

export function ResultBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-lg border border-accent-blue/25 bg-accent-blue-bg/40 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 bg-accent-blue/8 border-b border-accent-blue/15">
        <span className="text-sm font-semibold text-accent-blue flex items-center gap-1.5">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
          结果
        </span>
      </div>
      <div className="px-5 py-4 text-sm text-secondary leading-relaxed">
        {children}
      </div>
    </div>
  );
}
