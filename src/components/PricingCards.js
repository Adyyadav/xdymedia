"use client";

import { useState } from "react";
import Link from "next/link";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import { PRICING_TIERS } from "@/lib/site-data";

export default function PricingCards() {
  const [period, setPeriod] = useState("monthly");
  const [currency, setCurrency] = useState("inr");

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div className="glass inline-flex rounded-xl p-1">
          {["monthly", "annual"].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-[0.82rem] font-semibold capitalize transition-colors ${
                period === p ? "bg-white/12 text-white" : "text-text-3 hover:text-text-2"
              }`}
            >
              {p} Billing
              {p === "annual" && (
                <span className="rounded-full bg-mint/15 px-1.5 py-0.5 text-[0.65rem] font-bold text-mint">Save 20%</span>
              )}
            </button>
          ))}
        </div>

        <div className="glass inline-flex rounded-xl p-1">
          {[
            { key: "inr", label: "₹ INR", note: "India" },
            { key: "usd", label: "$ USD", note: "International" },
          ].map((c) => (
            <button
              key={c.key}
              onClick={() => setCurrency(c.key)}
              className={`rounded-lg px-4 py-2 text-[0.82rem] font-semibold transition-colors ${
                currency === c.key ? "bg-white/12 text-white" : "text-text-3 hover:text-text-2"
              }`}
              title={c.note}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
        {PRICING_TIERS.map((tier, i) => {
          const price = tier[currency][period];
          return (
            <Reveal key={tier.plan} delay={(i % 4) * 0.06} className="h-full">
              <GlassCard
                strong={tier.featured}
                className={`relative flex h-full flex-col rounded-2xl border p-6 ${
                  tier.featured ? "border-white/25" : "border-white/10"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-br from-white via-silver-2 to-silver-3 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-black">
                    Popular
                  </span>
                )}
                <span className="text-[0.78rem] font-bold uppercase tracking-wide text-silver-blue">{tier.plan}</span>
                <h3 className="mt-1 text-[1.1rem] text-white">{tier.audience}</h3>
                <p className="mt-2 text-[0.85rem] text-text-2">{tier.desc}</p>
                <div className="mt-5 grad-text text-[2rem] font-extrabold">
                  {price}
                  {price !== "Custom" && <small className="text-[0.9rem] font-medium text-text-3"> / mo</small>}
                </div>
                <p className="mt-1 text-[0.74rem] text-text-3">
                  {price === "Custom"
                    ? tier.note || "Billed after initial setup."
                    : period === "annual"
                    ? `${tier[currency].annualTotal} billed annually`
                    : tier.note || "Billed after initial setup."}
                </p>
                <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[0.84rem] text-text-2">
                      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0 text-mint">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                    tier.featured
                      ? "bg-gradient-to-br from-white via-silver-2 to-silver-3 text-black hover:scale-[1.02]"
                      : "glass text-white hover:border-white/30"
                  }`}
                >
                  {tier.plan === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Link>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>

      {currency === "usd" && (
        <p className="mt-6 text-center text-[0.8rem] text-text-3">
          USD pricing shown above is placeholder — final international rates will be confirmed soon.
        </p>
      )}
    </div>
  );
}
