"use client";

import { useState } from "react";

export function ToggleBlock({
  icon,
  title,
  children,
  defaultOpen = false,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`border border-border rounded-lg my-4 overflow-hidden transition-shadow hover:shadow-sm ${open ? "" : ""}`}
    >
      <div
        className="flex items-center gap-2 px-[18px] py-3.5 cursor-pointer select-none transition-colors hover:bg-bg-hover text-sm font-medium"
        onClick={() => setOpen(!open)}
      >
        <svg
          className={`w-3.5 h-3.5 shrink-0 text-secondary transition-transform ${open ? "rotate-90" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
        {icon}
        {title}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[2000px] px-[18px] pb-[18px]" : "max-h-0"}`}
      >
        {children}
      </div>
    </div>
  );
}
