"use client";

import { useState } from "react";
import Link from "next/link";
import GlassCard from "./GlassCard";

function recommendedPlan(convs) {
  if (convs <= 1000) return "Starter Plan";
  if (convs <= 5000) return "Business Plan";
  if (convs <= 15000) return "Pro SaaS Plan";
  return "Enterprise Tier";
}

export default function RoiCalculator() {
  const [convs, setConvs] = useState(3500);
  const hoursSaved = Math.round(convs * 0.18);
  const plan = recommendedPlan(convs);

  return (
    <GlassCard className="rounded-3xl p-7 sm:p-9">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="mb-1 inline-block text-[0.72rem] font-bold uppercase tracking-[0.14em] text-mint">
            Interactive Estimator
          </span>
          <h3 className="text-[1.2rem] text-white">Calculate Your Team&apos;s Automation ROI</h3>
        </div>
        <div className="grad-text font-mono text-[1.3rem] font-bold">{convs.toLocaleString()} convs</div>
      </div>

      <p className="mt-3 text-[0.88rem] text-text-2">
        Adjust your anticipated monthly inbound customer conversations to calculate estimated manual hours saved and recommended deployment tier:
      </p>

      <input
        type="range"
        min={500}
        max={30000}
        step={500}
        value={convs}
        onChange={(e) => setConvs(Number(e.target.value))}
        className="mt-6 w-full accent-white"
      />
      <div className="mt-1.5 flex justify-between font-mono text-[0.7rem] text-text-3">
        <span>500 convs/mo</span>
        <span>10,000</span>
        <span>20,000</span>
        <span>30,000+ convs/mo</span>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
          <b className="block text-[1.3rem] text-white">{hoursSaved.toLocaleString()} hrs</b>
          <span className="mt-1 block text-[0.72rem] text-text-3">Manual Support Hours Saved/Mo</span>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
          <b className="block text-[1.3rem] text-mint">&lt; 2.1s</b>
          <span className="mt-1 block text-[0.72rem] text-text-3">Avg First Response Time</span>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
          <b className="block text-[1.3rem] text-tg-blue">24 / 7</b>
          <span className="mt-1 block text-[0.72rem] text-text-3">Lead Capture &amp; Triage</span>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
          <b className="block text-[1.3rem] text-warn">{plan}</b>
          <span className="mt-1 block text-[0.72rem] text-text-3">Recommended Architecture</span>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-white via-silver-2 to-silver-3 px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
        >
          Deploy This Architecture →
        </Link>
      </div>
    </GlassCard>
  );
}
