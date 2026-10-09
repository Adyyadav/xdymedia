"use client";

import { useState } from "react";
import GlassCard from "./GlassCard";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const EXAMPLES = [
  {
    id: "lead",
    name: "Lead Automation",
    badge: "Sales & CRM",
    desc: "Ingest website leads, qualify intent via AI, sync directly with CRM, trigger automated email nurturing, and dispatch instant Slack/Telegram rep alerts.",
    steps: [
      { role: "Trigger", title: "Website Lead", note: "Form submit / Webhook" },
      { role: "n8n Flow", title: "Data Normalize", note: "Format & validate payload" },
      { role: "AI Layer", title: "AI Qualification", note: "Enrich & score intent" },
      { role: "Storage", title: "CRM Sync", note: "HubSpot / Salesforce / DB" },
      { role: "Outreach", title: "Auto Follow-up", note: "Personalized email queue" },
      { role: "Action", title: "Sales Alert", note: "Instant Telegram/Slack ping" },
    ],
  },
  {
    id: "support",
    name: "AI Support",
    badge: "Customer Care",
    desc: "Process inbound customer inquiries 24/7. n8n orchestrates AI agent knowledge lookup against docs, generates contextual answers, or routes to human triage.",
    steps: [
      { role: "Trigger", title: "Customer Message", note: "WhatsApp / Web / Email" },
      { role: "n8n Flow", title: "Session Manager", note: "Fetch user history & auth" },
      { role: "AI Layer", title: "AI Agent & RAG", note: "Grounded knowledge search" },
      { role: "Logic", title: "Confidence Check", note: "Auto-reply or escalate" },
      { role: "Action", title: "Instant Reply", note: "Return answer via channel" },
    ],
  },
  {
    id: "api",
    name: "API Integration",
    badge: "System Sync",
    desc: "Connect two previously disconnected software platforms. Fetch data from Platform A via authenticated REST API, transform schema, and push to Platform B.",
    steps: [
      { role: "Trigger", title: "Platform A Event", note: "Webhook or Cron Poll" },
      { role: "Auth", title: "OAuth / Bearer", note: "Secure token exchange" },
      { role: "n8n Flow", title: "Transform JSON", note: "Schema mapping & filter" },
      { role: "Target", title: "Platform B API", note: "REST POST/PATCH request" },
      { role: "Feedback", title: "Log & Audit", note: "Database audit trail" },
    ],
  },
  {
    id: "telegram",
    name: "Telegram Hub",
    badge: "Community & Bots",
    desc: "Capture Telegram channel, group, or bot commands, run backend verification, process payments via webhooks, and dispatch automated broadcasts.",
    steps: [
      { role: "Trigger", title: "Telegram Event", note: "Bot command or join request" },
      { role: "n8n Flow", title: "Webhook Handler", note: "Validate payload integrity" },
      { role: "AI / DB", title: "Database & AI", note: "Query PostgreSQL / Supabase" },
      { role: "Entitlement", title: "Access Gate", note: "Role or subscription verify" },
      { role: "Action", title: "Channel Dispatch", note: "Automated response / alert" },
    ],
  },
  {
    id: "reporting",
    name: "Business Reporting",
    badge: "Operations",
    desc: "Aggregate operational metrics from billing, ad platforms, and databases every morning. Format executive summaries and post to team dashboard channels.",
    steps: [
      { role: "Trigger", title: "Scheduled Cron", note: "Daily 08:00 UTC trigger" },
      { role: "Ingestion", title: "Multi-API Fetch", note: "Stripe + Meta Ads + DB" },
      { role: "n8n Flow", title: "Data Aggregation", note: "Calculate KPIs & deltas" },
      { role: "AI Layer", title: "AI Summary", note: "Highlight key anomalies" },
      { role: "Action", title: "Team Notification", note: "Dispatch to Slack / Email" },
    ],
  },
];

const MASTER_PIPELINE = [
  { step: "01", label: "Trigger", desc: "Webhook, Schedule, or Event", tag: "Inbound" },
  { step: "02", label: "n8n Engine", desc: "Orchestrate & Route Logic", tag: "Workflow" },
  { step: "03", label: "Transform", desc: "Clean, Map & Filter Data", tag: "Processing" },
  { step: "04", label: "AI / Logic", desc: "LLMs, Agents & Decision Rules", tag: "Intelligence" },
  { step: "05", label: "APIs & DB", desc: "Sync CRM, SQL & Cloud Tools", tag: "Integration" },
  { step: "06", label: "Action", desc: "Automated Alert, Email or Task", tag: "Execution" },
];

export default function N8nWorkflowVisualizer({ block }) {
  const [activeTab, setActiveTab] = useState(0);
  const currentExample = EXAMPLES[activeTab];

  return (
    <section id="workflow" className="px-4 pb-20">
      <div className="mx-auto max-w-[1240px]">
        <SectionHead
          eyebrow={block?.eyebrow || "Visual Workflow Architecture"}
          title={block?.heading || <>From Trigger to Action: <span className="grad-text">How n8n Automates Work</span></>}
          desc={block?.desc || "A clear look at how XDY Media architects resilient, event-driven workflows that eliminate manual operational bottlenecks."}
        />

        {/* Master Pipeline Diagram */}
        <Reveal>
          <div className="mb-12 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">
                Core Execution Architecture
              </span>
              <span className="rounded-full border border-mint/30 bg-wa-green/10 px-3 py-1 text-[0.72rem] font-semibold text-mint">
                Zero Fragile Scraping · 100% Official APIs
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {MASTER_PIPELINE.map((node, i) => (
                <div key={node.step} className="relative flex flex-col">
                  <GlassCard className="flex h-full flex-col justify-between rounded-2xl p-4 text-center">
                    <div>
                      <div className="mb-2 flex items-center justify-between text-[0.68rem] text-text-3">
                        <span className="font-mono font-bold text-silver-blue">{node.step}</span>
                        <span className="rounded bg-white/5 px-1.5 py-0.5 text-[0.65rem]">{node.tag}</span>
                      </div>
                      <div className="text-[0.92rem] font-bold text-white">{node.label}</div>
                      <p className="mt-1 text-[0.72rem] text-text-3">{node.desc}</p>
                    </div>
                  </GlassCard>
                  {i < MASTER_PIPELINE.length - 1 && (
                    <div className="hidden lg:absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[0.8rem] text-silver-blue/40 pointer-events-none">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Practical Example Workflows Interactive Tabs */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6">
              <div>
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">
                  Interactive Examples
                </span>
                <h3 className="mt-1 text-[1.25rem] font-bold text-white">
                  Real-World Automation Blueprints
                </h3>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2">
                {EXAMPLES.map((ex, idx) => (
                  <button
                    key={ex.id}
                    onClick={() => setActiveTab(idx)}
                    className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                      activeTab === idx
                        ? "bg-white text-black shadow-[0_4px_16px_rgba(255,255,255,0.2)]"
                        : "border border-white/10 bg-white/5 text-text-2 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {ex.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Example Display */}
            <div className="pt-6">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white">{currentExample.name}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[0.7rem] text-silver-blue">
                      {currentExample.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-text-2">{currentExample.desc}</p>
                </div>
              </div>

              {/* Node Sequence */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-4">
                {currentExample.steps.map((s, idx) => (
                  <div key={s.title} className="flex items-center gap-2 sm:gap-3">
                    <GlassCard className="min-w-[140px] max-w-[170px] rounded-2xl p-3.5 text-center border-white/15 bg-white/[0.06]">
                      <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-silver-blue">
                        {s.role}
                      </span>
                      <div className="mt-1 text-xs font-bold text-white">{s.title}</div>
                      <div className="mt-1 text-[0.68rem] text-text-3">{s.note}</div>
                    </GlassCard>
                    {idx < currentExample.steps.length - 1 && (
                      <span className="text-base font-bold text-silver-blue">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
