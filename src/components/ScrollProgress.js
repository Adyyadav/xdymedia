"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? Math.min((window.scrollY / h) * 100, 100) : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[70] h-[3px] w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-tg-blue via-silver to-web3-purple transition-[width] duration-150"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
