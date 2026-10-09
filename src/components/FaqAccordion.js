"use client";

import { useState } from "react";
import Link from "next/link";
import GlassCard from "./GlassCard";

function FaqItem({ q, a, open, onToggle }) {
  return (
    <GlassCard className="overflow-hidden rounded-xl border-white/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[0.94rem] font-semibold text-white"
      >
        {q}
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className={`shrink-0 text-text-3 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div className={`grid transition-all duration-200 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="px-5 pb-4 text-[0.88rem] text-text-2">{a}</div>
        </div>
      </div>
    </GlassCard>
  );
}

export default function FaqAccordion({ groups }) {
  const [openKey, setOpenKey] = useState(null);

  return (
    <div className="flex flex-col gap-10">
      {groups.map((group, gi) => (
        <div key={group.title || gi}>
          {group.title && <h3 className="mb-4 text-[1.05rem] text-white">{group.title}</h3>}
          <div className="flex flex-col gap-3">
            {group.items.map((item, i) => {
              const key = `${group.title}-${i}`;
              return (
                <FaqItem
                  key={key}
                  q={item.q}
                  a={item.a}
                  open={openKey === key}
                  onToggle={() => setOpenKey(openKey === key ? null : key)}
                />
              );
            })}
          </div>
        </div>
      ))}

      <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0 text-silver-blue">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-[0.88rem] text-text-2">
          Didn&apos;t find your answer?{" "}
          <Link href="/contact" className="font-semibold text-silver-blue underline underline-offset-2">
            Contact us
          </Link>{" "}
          — we&apos;re happy to help.
        </p>
      </div>
    </div>
  );
}
