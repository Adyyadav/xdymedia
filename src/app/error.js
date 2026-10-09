"use client";

import { useEffect } from "react";
import Link from "next/link";
import Button from "@/components/Button";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-[600px] text-center">
        <span className="grad-text block text-[clamp(3.2rem,10vw,5rem)] font-extrabold leading-none">500</span>
        <h1 className="mt-4 text-[clamp(1.5rem,3.6vw,2.2rem)] font-extrabold text-white">
          Something went wrong
        </h1>
        <p className="mx-auto mt-4 max-w-[440px] text-[1rem] text-text-2">
          An unexpected error occurred while loading this page. This has been logged — try again, or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <Button onClick={() => reset()}>Try Again</Button>
          <Link
            href="/"
            className="glass inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
