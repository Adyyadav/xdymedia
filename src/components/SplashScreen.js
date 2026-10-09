"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SPLASH_KEY } from "@/lib/splash";

const MIN_MS = 1700;
const MAX_MS = 4500;

export default function SplashScreen() {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("xdy-splash")) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let done = false;
    let hideTimer;

    function finish() {
      if (done) return;
      done = true;
      setLeaving(true);
      hideTimer = setTimeout(() => {
        root.classList.remove("xdy-splash");
        try {
          sessionStorage.setItem(SPLASH_KEY, "1");
        } catch {}
      }, 650);
    }

    function whenReady() {
      const wait = Math.max(0, (reduced ? 400 : MIN_MS) - (performance.now() - start));
      setTimeout(finish, wait);
    }

    if (document.readyState === "complete") whenReady();
    else window.addEventListener("load", whenReady, { once: true });
    const cap = setTimeout(finish, MAX_MS);

    return () => {
      clearTimeout(cap);
      clearTimeout(hideTimer);
      window.removeEventListener("load", whenReady);
    };
  }, []);

  return (
    <div id="xdy-splash" className={leaving ? "is-leaving" : ""} role="status" aria-label="Loading Xdy Media">
      <div className="xdy-splash-glow" aria-hidden />
      <div className="xdy-splash-inner">
        <div className="xdy-splash-logo">
          <span className="xdy-splash-ring" aria-hidden />
          <span className="xdy-splash-ring xdy-splash-ring-2" aria-hidden />
          <Image src="/logo.jpg" alt="" width={84} height={84} priority className="xdy-splash-img" />
        </div>
        <div className="xdy-splash-name">Xdy Media</div>
        <div className="xdy-splash-tag">Digital Growth &amp; Automation</div>
        <div className="xdy-splash-bar" aria-hidden>
          <i />
        </div>
      </div>
    </div>
  );
}
