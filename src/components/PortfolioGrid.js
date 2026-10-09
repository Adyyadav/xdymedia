"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import GlassCard from "./GlassCard";
import { PORTFOLIO_ITEMS, PORTFOLIO_FILTERS } from "@/lib/portfolio-data";
import { accentFor } from "@/lib/accent";

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((i) => i.category === filter);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {PORTFOLIO_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-[0.8rem] font-semibold transition-colors ${
              filter === f ? "bg-white/12 text-white" : "glass text-text-2 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const a = accentFor(item.accent);
          return (
            <Reveal key={item.slug} delay={(i % 3) * 0.06}>
              <GlassCard className={`flex h-full flex-col rounded-2xl border p-6 ${item.featured ? `${a.border} ${a.glow}` : "border-white/10"}`}>
                <span className={`w-fit rounded-full px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide ${a.bg} ${a.text}`}>
                  {item.category}
                </span>
                <h3 className="mt-3 text-[1.02rem] text-white">{item.title}</h3>
                <p className="mt-2 flex-1 text-[0.86rem] text-text-2">{item.desc}</p>
                <Link href={item.href} className={`mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold ${a.text} hover:gap-2.5 transition-all`}>
                  {item.linkLabel || "View related service →"}
                </Link>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
