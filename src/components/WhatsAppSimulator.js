"use client";

import { useState } from "react";
import GlassCard from "./GlassCard";

const RESPONSES = {
  web: {
    title: "1. Website Development",
    heading: "🌐 Website & Digital Infrastructure",
    intro: "We engineer high-performance business websites, e-commerce platforms, and web applications with custom APIs, database schemas, and automated cloud deployments.",
    bullets: ["Stack: Node.js, Python, Next.js, PostgreSQL", "Cloud: Docker, VPS, AWS, Cloudflare CDN"],
    actions: [
      { text: "View Website Services →", href: "/services/website-development" },
      { text: "Request a Proposal →", href: "/contact" },
    ],
    webhook: "Lead tagged [Service: Web Infrastructure]. Project qualification checklist dispatched to CRM.",
  },
  wa: {
    title: "2. WhatsApp Automation",
    heading: "🤖 WhatsApp Automation & SaaS Engine",
    intro: "Official Meta Cloud API integration. Automate lead qualification, customer support triage with AI bots, shared multi-agent team inboxes, and dynamic e-commerce order/payment triggers.",
    bullets: ["Meta Cloud API (100% compliant, 0 bans)", "Webhook latency: < 400ms", "Multi-tenant isolated databases"],
    actions: [
      { text: "View SaaS Plans →", href: "/solutions#pricing" },
      { text: "Book a Demo →", href: "/contact" },
    ],
    webhook: "24-hr session window active. Multi-tenant message queue processed in 180ms.",
  },
  pricing: {
    title: "3. Pricing & Packages",
    heading: "💳 Recurring SaaS & Setup Tiers",
    bullets: [
      "Starter: ₹1,499/mo (1,000 active convs, rule engine)",
      "Business: ₹3,499/mo (5,000 convs + AI agent)",
      "Pro: ₹6,999/mo (15,000 convs + team inbox)",
      "Websites: Custom project milestones + cloud hosting",
    ],
    actions: [
      { text: "Explore All Packages →", href: "/solutions" },
      { text: "Get Custom Quote →", href: "/contact" },
    ],
    webhook: "Pricing sheet viewed. CRM lead engagement score updated (+15 pts).",
  },
  human: {
    title: "4. Speak With an Agent",
    heading: "👤 Live Specialist Handoff",
    intro: "Routing you to an XDY automation engineer right now. Our shared team inbox has notified the on-duty solutions team.",
    bullets: ["Estimated response time: < 15 mins"],
    actions: [{ text: "Schedule Strategy Call →", href: "/contact" }],
    webhook: "Conversation escalated from Bot to Agent [Team: Engineering]. Slack & WhatsApp team alert triggered.",
  },
};

const SCENARIOS = [
  { key: "web", label: "🌐 Website Query" },
  { key: "wa", label: "🤖 WhatsApp Query" },
  { key: "pricing", label: "💳 Pricing Sheet" },
  { key: "human", label: "👤 Human Escalation" },
];

function now() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function InBubble({ children, className = "" }) {
  return <div className={`max-w-[88%] rounded-2xl rounded-bl-sm bg-white/8 px-3.5 py-2.5 text-[0.82rem] text-text-2 ${className}`}>{children}</div>;
}

function OutBubble({ children }) {
  return (
    <div className="ml-auto max-w-[92%] rounded-2xl rounded-br-sm bg-wa-green/15 px-3.5 py-2.5 text-[0.82rem] text-white">
      {children}
    </div>
  );
}

export default function WhatsAppSimulator() {
  const [thread, setThread] = useState([]);
  const [busy, setBusy] = useState(false);

  function handleChoice(key) {
    if (busy) return;
    const res = RESPONSES[key];
    const time = now();
    setBusy(true);
    setThread((t) => [...t, { kind: "user", title: res.title, time }, { kind: "typing" }]);

    setTimeout(() => {
      setThread((t) => [
        ...t.filter((b) => b.kind !== "typing"),
        { kind: "bot", res, time: now() },
        { kind: "webhook", text: res.webhook },
      ]);
      setBusy(false);
    }, 600);
  }

  function handleReset() {
    setThread([]);
    setBusy(false);
  }

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="text-[0.72rem] font-semibold text-text-3">Test Live:</span>
        {SCENARIOS.map((s) => (
          <button
            key={s.key}
            onClick={() => handleChoice(s.key)}
            disabled={busy}
            className="glass rounded-full px-3 py-1.5 text-[0.72rem] font-medium text-text-2 transition-colors hover:text-white disabled:opacity-50"
          >
            {s.label}
          </button>
        ))}
      </div>

      <GlassCard strong className="rounded-[28px] p-0">
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-white via-silver-2 to-silver-3 text-[0.7rem] font-bold text-black">
            XDY
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-black/40 bg-mint" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[0.9rem] font-semibold text-white">
              XDY Business Engine
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-tg-blue">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div className="text-[0.72rem] text-mint">Automated Assistant · Online</div>
          </div>
          {thread.length > 0 && (
            <button onClick={handleReset} className="ml-auto text-[0.72rem] font-medium text-text-3 hover:text-white">
              ↺ Reset
            </button>
          )}
        </div>

        <div className="flex flex-col gap-3 p-5">
          <InBubble>
            Hi, I want to learn more about your services!
            <div className="mt-1 text-[0.68rem] text-text-3">10:42 AM</div>
          </InBubble>

          <OutBubble>
            <span className="mb-1 inline-block rounded bg-black/20 px-1.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wide text-mint">
              Instant Automation
            </span>
            <div>
              Hello! 👋 Welcome to <b>XDY Media</b>.<br />How can our digital systems assist you today?
            </div>
            <div className="mt-2.5 flex flex-col gap-1.5">
              {SCENARIOS.map((s) => (
                <button
                  key={s.key}
                  onClick={() => handleChoice(s.key)}
                  disabled={busy}
                  className="rounded-lg border border-white/15 bg-black/15 px-3 py-2 text-left text-[0.78rem] font-medium text-white transition-colors hover:bg-black/25 disabled:opacity-50"
                >
                  {s.key === "web" && "1. Website Development →"}
                  {s.key === "wa" && "2. WhatsApp Automation →"}
                  {s.key === "pricing" && "3. Pricing & Packages →"}
                  {s.key === "human" && "4. Speak With an Agent 👤"}
                </button>
              ))}
            </div>
            <div className="mt-1.5 text-[0.68rem] text-white/70">10:42 AM ✓✓</div>
          </OutBubble>

          <InBubble className="border border-dashed border-wa-green/40 bg-wa-green/10 text-[0.76rem] text-mint">
            ⚡ <b>Webhook Event:</b> Option selected delivered to XDY API server. CRM lead updated &amp; sales rep alerted in 420ms.
          </InBubble>

          {thread.map((b, i) => {
            if (b.kind === "user") {
              return (
                <InBubble key={i}>
                  {b.title}
                  <div className="mt-1 text-[0.68rem] text-text-3">{b.time}</div>
                </InBubble>
              );
            }
            if (b.kind === "typing") {
              return (
                <OutBubble key={i}>
                  <div className="flex gap-1 py-1">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/70"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </OutBubble>
              );
            }
            if (b.kind === "bot") {
              return (
                <OutBubble key={i}>
                  <span className="mb-1 inline-block rounded bg-black/20 px-1.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wide text-mint">
                    Instant Automation
                  </span>
                  <div className="font-semibold">{b.res.heading}</div>
                  {b.res.intro && <p className="mt-1.5">{b.res.intro}</p>}
                  {b.res.bullets && (
                    <ul className="mt-1.5 flex flex-col gap-0.5">
                      {b.res.bullets.map((bl) => (
                        <li key={bl}>• {bl}</li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-2.5 flex flex-col gap-1.5">
                    {b.res.actions.map((a) => (
                      <a
                        key={a.text}
                        href={a.href}
                        className="rounded-lg border border-white/15 bg-black/15 px-3 py-2 text-[0.78rem] font-medium text-white transition-colors hover:bg-black/25"
                      >
                        {a.text}
                      </a>
                    ))}
                  </div>
                  <div className="mt-1.5 text-[0.68rem] text-white/70">{b.time} ✓✓</div>
                </OutBubble>
              );
            }
            return (
              <InBubble key={i} className="border border-dashed border-wa-green/40 bg-wa-green/10 text-[0.76rem] text-mint">
                ⚡ <b>Webhook Event:</b> {b.text}
              </InBubble>
            );
          })}
        </div>
      </GlassCard>
    </div>
  );
}
