"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStuck(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-2 border-white/10" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-white/80" />
      </div>
      <p className="mt-5 font-mono text-[0.82rem] tracking-wide text-text-3">Loading…</p>

      <div
        className={`mt-8 max-w-[380px] overflow-hidden transition-all duration-500 ${
          stuck ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[0.88rem] text-text-2">
          This is taking longer than expected — it might be a slow connection or the server catching up.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-white via-silver-2 to-silver-3 px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}
