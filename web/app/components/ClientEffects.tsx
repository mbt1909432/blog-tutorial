"use client";

import { useEffect } from "react";

export function ClientEffects() {
  useEffect(() => {
    // Progress bar
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
      const bar = document.getElementById("progress-bar");
      if (bar) bar.style.width = pct + "%";

      const nav = document.getElementById("nav-bar");
      if (nav) nav.classList.toggle("shadow-[0_1px_12px_rgba(0,0,0,0.06)]", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".section-reveal").forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
