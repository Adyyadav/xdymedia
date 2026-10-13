"use client";

import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

const PLATFORMS = [
  { id: "instagram", name: "Instagram", icon: "📸" },
  { id: "whatsapp", name: "WhatsApp", icon: "💬" },
  { id: "meta", name: "Meta / Facebook", icon: "🏢" },
  { id: "telegram", name: "Telegram", icon: "✈️" },
];

const CASE_TYPES = {
  instagram: [
    { id: "integrity", label: "Integrity Suspension / Community Guidelines", tat: "24–72 Hours", feasibility: "High (Fresh Cases)", note: "Requires ban screen with notification code." },
    { id: "cyber", label: "Cybersecurity / Compromised / Hacked", tat: "24–48 Hours", feasibility: "High Feasibility", note: "Security appeal route with original registration proof." },
    { id: "blue_tick", label: "Meta Blue Tick Verification Request", tat: "24–48 Hours", feasibility: "Direct Submission", note: "No passwords required. Press & profile alignment." },
    { id: "impersonation", label: "Impersonator Removal / IP Infringement", tat: "12–24 Hours", feasibility: "Immediate", note: "Target fake profiles misrepresenting your brand." },
  ],
  whatsapp: [
    { id: "spam_ban", label: "Permanent Ban / Spam Flag Recovery", tat: "0–24 Hours", feasibility: "Expedited Queue", note: "Phone number pre-check. Average resolution < 24h." },
    { id: "business_ban", label: "WhatsApp Business API Restriction", tat: "12–36 Hours", feasibility: "High Feasibility", note: "Meta Business Manager entity clearance." },
    { id: "green_badge", label: "Official Green Badge (OBA Verification)", tat: "0–4 Hours", feasibility: "Fast-Track", note: "No login access needed. Active 30+ days." },
  ],
  meta: [
    { id: "ad_account", label: "Disabled Ads Account / Balance Freeze", tat: "24–48 Hours", feasibility: "Standard Escalation", note: "Payment profile & policy compliance review." },
    { id: "bm_restricted", label: "Business Manager (BM) Verification Block", tat: "24–72 Hours", feasibility: "High Feasibility", note: "Legal entity documentation submission." },
    { id: "page_unpublish", label: "Page Unpublish / Creator Profile Ban", tat: "24–48 Hours", feasibility: "High Feasibility", note: "Appeals through media support channels." },
  ],
  telegram: [
    { id: "tg_ban", label: "Account Deactivation / Number Limitation", tat: "12–48 Hours", feasibility: "Case by Case", note: "Direct carrier & MTProto policy review." },
    { id: "channel_mute", label: "Channel Copyright / Report Flag", tat: "24–48 Hours", feasibility: "Standard Review", note: "Rights owner authorization documentation." },
  ],
};

const ACCOUNT_TIERS = [
  { id: "personal", label: "Personal / Emerging", note: "Under 50k followers / Standard line" },
  { id: "creator", label: "Creator / Mid-Tier", note: "50k – 1M followers (Priority queue)" },
  { id: "vip", label: "Major Brand / Enterprise", note: "1M+ followers or corporate asset" },
];

const CASE_STATUSES = [
  { id: "fresh", label: "Fresh (Unappealed / First 48h)", boost: "Optimal Success Window" },
  { id: "rejected_once", label: "Previously Rejected Appeal (1x)", boost: "Requires Manual Escalation" },
  { id: "multiple_fails", label: "Multiple Failed In-App Appeals", boost: "Requires Document Re-Review" },
];

export default function RecoveryTriage() {
  const [platform, setPlatform] = useState("instagram");
  const [caseType, setCaseType] = useState("integrity");
  const [tier, setTier] = useState("creator");
  const [status, setStatus] = useState("fresh");
  const [identifier, setIdentifier] = useState("");
  const [details, setDetails] = useState("");

  const currentCases = CASE_TYPES[platform] || [];
  const selectedCase = currentCases.find((c) => c.id === caseType) || currentCases[0];

  const buildWhatsAppPayload = () => {
    const text = `Hello XDY Media,%0A%0AI would like to submit a case for pre-check:%0A• Platform: ${platform.toUpperCase()}%0A• Case Type: ${selectedCase?.label || caseType}%0A• Tier: ${tier}%0A• History: ${status}%0A• Account: ${identifier || "Not specified"}%0A• Details: ${details || "None provided"}%0A%0APlease evaluate estimated turnaround and requirements.`;
    return `https://wa.me/306970445764?text=${text}`;
  };

  return (
    <div className="mx-auto max-w-[1240px]">
      <GlassCard className="rounded-3xl border border-white/10 p-6 sm:p-10 backdrop-blur-2xl">
        <div className="mb-8 border-b border-white/10 pb-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-tg-blue/30 bg-tg-blue/10 px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-wider text-tg-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-tg-blue" />
            Interactive Pre-Check
          </div>
          <h2 className="mt-3 text-[clamp(1.5rem,2.8vw,2.2rem)] font-extrabold text-white">
            Case Intake &amp; <span className="grad-text">Eligibility Triage</span>
          </h2>
          <p className="mt-2 text-[0.92rem] text-text-2">
            Select your platform and case details for immediate turnaround estimates, required documents, and priority queue routing.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Controls Column */}
          <div className="space-y-6 lg:col-span-7">
            {/* 1. Platform Selector */}
            <div>
              <label className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-text-3">
                1. Select Platform
              </label>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {PLATFORMS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      setPlatform(p.id);
                      setCaseType(CASE_TYPES[p.id][0].id);
                    }}
                    className={`flex items-center justify-center gap-2 rounded-xl border p-3 text-[0.84rem] font-semibold transition-all ${
                      platform === p.id
                        ? "border-tg-blue bg-tg-blue/15 text-white shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                        : "border-white/10 bg-white/[0.02] text-text-2 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <span>{p.icon}</span>
                    <span>{p.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Case Type */}
            <div>
              <label className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-text-3">
                2. Case / Service Type
              </label>
              <div className="space-y-2">
                {currentCases.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCaseType(c.id)}
                    className={`w-full rounded-xl border p-3.5 text-left transition-all ${
                      caseType === c.id
                        ? "border-white/30 bg-white/[0.08] shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[0.88rem] font-semibold text-white">{c.label}</span>
                      <span className="font-mono text-[0.72rem] text-silver-blue">{c.tat}</span>
                    </div>
                    <p className="mt-1 text-[0.78rem] text-text-3">{c.note}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Account Tier & Appeal History */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-text-3">
                  3. Account Scale / Size
                </label>
                <div className="space-y-2">
                  {ACCOUNT_TIERS.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTier(t.id)}
                      className={`w-full rounded-xl border p-2.5 text-left transition-all ${
                        tier === t.id
                          ? "border-tg-blue/60 bg-tg-blue/10 text-white"
                          : "border-white/10 bg-white/[0.02] text-text-2 hover:border-white/20"
                      }`}
                    >
                      <div className="text-[0.82rem] font-semibold">{t.label}</div>
                      <div className="text-[0.7rem] text-text-3">{t.note}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-text-3">
                  4. Current Appeal Status
                </label>
                <div className="space-y-2">
                  {CASE_STATUSES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setStatus(s.id)}
                      className={`w-full rounded-xl border p-2.5 text-left transition-all ${
                        status === s.id
                          ? "border-mint/60 bg-mint/10 text-white"
                          : "border-white/10 bg-white/[0.02] text-text-2 hover:border-white/20"
                      }`}
                    >
                      <div className="text-[0.82rem] font-semibold">{s.label}</div>
                      <div className="text-[0.7rem] text-mint">{s.boost}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. Inputs */}
            <div>
              <label htmlFor="triage-target" className="mb-2 block text-xs font-bold uppercase tracking-wider text-text-3">
                5. Username or Phone Number (Optional)
              </label>
              <input
                id="triage-target"
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="@username, corporate page, or +1234567890"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-text-3 transition-colors focus:border-white/30 focus:outline-none"
              />
            </div>
          </div>

          {/* Instant Evaluation Card Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-xl">
              <span className="text-[0.7rem] font-bold uppercase tracking-widest text-silver-blue">
                Pre-Check Assessment
              </span>
              <h3 className="mt-1 text-lg font-bold text-white">Case Evaluation Brief</h3>

              <div className="mt-5 space-y-3.5 border-b border-white/10 pb-5 text-[0.85rem]">
                <div className="flex justify-between">
                  <span className="text-text-3">Platform:</span>
                  <span className="font-semibold text-white capitalize">{platform}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-3">Feasibility:</span>
                  <span className="font-semibold text-mint">{selectedCase?.feasibility}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-3">Estimated TAT:</span>
                  <span className="font-mono font-bold text-silver-blue">{selectedCase?.tat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-3">Credential Risk:</span>
                  <span className="font-semibold text-white">0% (No Passwords Required)</span>
                </div>
              </div>

              {/* Requirements Checklist */}
              <div className="mt-5">
                <span className="block text-xs font-bold uppercase tracking-wider text-text-3">
                  Required Intake Checklist
                </span>
                <ul className="mt-2.5 space-y-2 text-[0.8rem] text-text-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                    Screenshot of platform notice / suspension screen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                    Exact account handle or registered phone number
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                    Indication of previous appeals (if any)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                    Zero password disclosure policy honored
                  </li>
                </ul>
              </div>

              {/* Actions */}
              <div className="mt-7 flex flex-col gap-2.5">
                <a
                  href={buildWhatsAppPayload()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-wa-green px-5 py-3 text-center text-sm font-bold text-white shadow-[0_4px_20px_rgba(37,211,102,0.3)] transition-all hover:bg-[#20ba5a] hover:shadow-[0_6px_25px_rgba(37,211,102,0.45)]"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.82 2.791.82 3.181 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.806-5.768-5.806zm0 10.354c-.933 0-1.745-.27-2.457-.75l-.176-.11-1.631.428.435-1.59-.117-.184c-.544-.863-.833-1.666-.832-2.382 0-2.523 2.053-4.576 4.576-4.576 2.524 0 4.577 2.053 4.577 4.576 0 2.523-2.053 4.588-4.372 4.588z"/>
                  </svg>
                  <span>Submit to Priority WhatsApp Queue</span>
                </a>

                <Button href={`/contact?platform=${platform}&case=${caseType}`} variant="ghost" className="w-full text-center">
                  Submit via Web Portal
                </Button>
              </div>

              <span className="mt-3 block text-center text-[0.7rem] text-text-3">
                Review conducted within official policy compliance frameworks.
              </span>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
