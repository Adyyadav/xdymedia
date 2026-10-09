"use client";

import { useState } from "react";
import GlassCard from "./GlassCard";
import Sparkline from "./Sparkline";

const TABS = [
  {
    key: "wa",
    label: "💬 WhatsApp Bot",
    title: "Meta Cloud API Gateway",
    status: "ONLINE",
    statusColor: "text-mint",
    chips: ["Bot Active: 24/7", "Multi-Agent Inbox", "CRM Hook Sync"],
    lines: [
      ["[POST] /webhook/meta/v19.0", "200 OK", "text-mint"],
      ["→ Incoming Inbound Query", '"Book Consultation"', "text-text-3"],
      ["→ AI Intent Classified", "High Intent / ₹50k+", "text-tg-blue"],
      ["⚡ Dispatch to Team Inbox", "142ms Latency", "text-text-3"],
    ],
    foot: ["Conversational SaaS — Multi-Tenant", "Auto-failover active"],
  },
  {
    key: "cloud",
    label: "💻 Cloud Engine",
    title: "Edge Infrastructure & Core Vitals",
    status: "OPTIMIZED",
    statusColor: "text-tg-blue",
    chips: ["99.98% Uptime", "Global CDN Edge", "PostgreSQL Replica"],
    lines: [
      ["⚡ Lighthouse Performance", "99 / 100 Score", "text-mint"],
      ["⚡ First Contentful Paint", "0.42s", "text-text-3"],
      ["🔒 SSL / TLS Encryption", "Automated Renewal", "text-mint"],
      ["📦 CI/CD Deployment", "Branch: main · Healthy", "text-text-3"],
    ],
    foot: ["Digital Infrastructure — Scaled", "Zero downtime deploys"],
  },
  {
    key: "growth",
    label: "📈 Growth & Web3",
    title: "Social & Web3 Community Pulse",
    status: "ENGAGED",
    statusColor: "text-web3-purple",
    chips: ["Discord Guard Active", "Telegram Shield", "Organic Viral Reach"],
    lines: [
      ["⚡ Telegram Community", "+4,820 Members/mo", "text-mint"],
      ["⚡ Discord Engagement Rate", "28.4% Weekly Active", "text-tg-blue"],
      ["🛡️ Anti-Scam Bot Defense", "99.7% Auto-Blocked", "text-recovery-red"],
      ["🚀 Token & NFT Campaign", "Whitelist Phase 2", "text-text-3"],
    ],
    foot: ["Web3, Crypto & Social — Accelerated", "Real-time sentiment"],
  },
];

export default function HeroHud() {
  const [active, setActive] = useState("wa");
  const tab = TABS.find((t) => t.key === active);

  return (
    <GlassCard strong className="relative rounded-[28px] p-5 sm:p-6">
      <div className="mb-4 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`rounded-lg px-3 py-1.5 text-[0.78rem] font-semibold transition-colors ${
              active === t.key ? "bg-white/12 text-white" : "text-text-3 hover:text-text-2"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-white">{tab.title}</span>
        <span className={`font-mono text-[0.7rem] font-bold tracking-wider ${tab.statusColor}`}>{tab.status}</span>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {tab.chips.map((c) => (
          <span key={c} className="glass flex items-center gap-2 rounded-lg px-3 py-1.5 text-[0.78rem] text-text-2">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" style={{ animation: "pulseDot 2s infinite" }} />
            {c}
          </span>
        ))}
      </div>

      <div className="rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-[0.76rem] leading-loose">
        {tab.lines.map(([label, tag, color], i) => (
          <div key={i} className="flex items-center justify-between gap-3 text-text-2">
            <span>{label}</span>
            <span className={color}>{tag}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-[0.78rem] text-text-3">
        <span>
          <b className="text-white">{tab.foot[0].split(" — ")[0]}</b> — {tab.foot[0].split(" — ")[1]}
        </span>
        <span>{tab.foot[1]}</span>
      </div>

      <Sparkline className="mt-4" />
    </GlassCard>
  );
}
