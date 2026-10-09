"use client";

import { useEffect } from "react";
import "./globals.css";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-text antialiased">
        <section className="flex min-h-screen items-center justify-center px-4 py-20">
          <div className="mx-auto max-w-[560px] text-center">
            <span className="grad-text block text-[clamp(3.2rem,10vw,5rem)] font-extrabold leading-none">!</span>
            <h1 className="mt-4 text-[clamp(1.5rem,3.6vw,2.2rem)] font-extrabold text-white">
              The site hit a critical error
            </h1>
            <p className="mx-auto mt-4 max-w-[420px] text-[1rem] text-text-2">
              Something went wrong at the core of the page and it couldn&apos;t recover on its own. Reloading usually fixes this.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <button
                onClick={() => reset()}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-white via-silver-2 to-silver-3 px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
              >
                Try Again
              </button>
              <a
                href="/"
                className="glass inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
