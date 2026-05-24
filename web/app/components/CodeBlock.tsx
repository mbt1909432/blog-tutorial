"use client";

import { useState } from "react";
import { IconCopy, IconCheck } from "../icons";

export function CodeBlock({
  filename,
  children,
}: {
  filename: string;
  children: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const pre = document.getElementById(`code-${filename}`);
    if (pre) {
      navigator.clipboard.writeText(pre.textContent || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="bg-[#1e1e1e] rounded-[10px] my-5 overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.12)]">
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-xs text-white/45">{filename}</span>
        </div>
        <button
          onClick={handleCopy}
          className="font-mono text-[11px] text-white/35 bg-white/[0.06] border border-white/10 px-2.5 py-0.5 rounded cursor-pointer hover:text-white/70 hover:bg-white/10 transition-all flex items-center gap-1"
        >
          {copied ? (
            <><IconCheck size={14} className="!text-green-400" /> Copied!</>
          ) : (
            <><IconCopy size={14} className="text-white/50" /> Copy</>
          )}
        </button>
      </div>
      <div className="code-body px-5 py-[18px] overflow-x-auto">
        <pre
          id={`code-${filename}`}
          className="font-mono text-[13px] leading-[1.7] text-[#d4d4d4] whitespace-pre m-0"
        >
          {children}
        </pre>
      </div>
    </div>
  );
}
