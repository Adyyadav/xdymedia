"use client";

import { useState } from "react";
import GlassCard from "./GlassCard";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const SELECTOR_OPTIONS = [
  { id: "n8n", label: "n8n Automation", category: "Core" },
  { id: "api", label: "API Integration", category: "Integration" },
  { id: "ai-auto", label: "AI Automation", category: "AI" },
  { id: "ai-agent", label: "AI Agent", category: "AI" },
  { id: "webhook", label: "Webhook Automation", category: "Integration" },
  { id: "crm", label: "CRM Automation", category: "Sales" },
  { id: "telegram", label: "Telegram Automation", category: "Channels" },
  { id: "whatsapp", label: "WhatsApp Automation", category: "Channels" },
  { id: "email", label: "Email Automation", category: "Communication" },
  { id: "database", label: "Database Automation", category: "Data" },
  { id: "bpa", label: "Business Process Automation", category: "Operations" },
  { id: "deploy", label: "n8n Deployment", category: "Infrastructure" },
  { id: "fix", label: "Existing Workflow Fix", category: "Maintenance" },
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-text-3 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.07]";

export default function N8nServiceSelectorForm({ block }) {
  const [selectedServices, setSelectedServices] = useState([
    "n8n Automation",
    "API Integration",
  ]);

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    apps: "",
    apis: "",
    expectedWorkflow: "",
    volume: "1,000 – 10,000 / month",
    existingSetup: "No",
    needSelfHosting: "Not sure",
    additionalNotes: "",
  });

  const [status, setStatus] = useState("idle");

  function toggleService(label) {
    if (selectedServices.includes(label)) {
      if (selectedServices.length === 1) return; // keep at least one
      setSelectedServices(selectedServices.filter((s) => s !== label));
    } else {
      setSelectedServices([...selectedServices, label]);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function generateSummary() {
    if (selectedServices.length === 0) return "Select capabilities above to generate your customized automation scope.";
    const list = selectedServices.join(" + ");
    return `Scope includes: [${list}]. Architecture connecting client systems, automated data handling, and reliable production deployment.`;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
    }, 1200);
  }

  return (
    <section id="inquiry" className="px-4 pb-20">
      <div className="mx-auto max-w-[1100px]">
        <SectionHead
          eyebrow="Interactive Project Builder"
          title={block?.heading || <>Configure Your <span className="grad-text">Automation Architecture</span></>}
          desc="Select the capabilities your business needs. We'll generate an integrated scope and our engineering team will review your workflow requirements."
        />

        {/* 1. Multi-Select Service Selector */}
        <Reveal>
          <GlassCard className="rounded-3xl p-6 sm:p-8 mb-8 border-white/15">
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-white">1. Select Target Capabilities</h3>
                <p className="text-xs text-text-3">Click to select all modules required for your system.</p>
              </div>
              <span className="text-xs text-silver-blue font-mono">
                {selectedServices.length} Selected
              </span>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {SELECTOR_OPTIONS.map((opt) => {
                const isSelected = selectedServices.includes(opt.label);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleService(opt.label)}
                    className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-white text-black shadow-[0_4px_16px_rgba(255,255,255,0.2)]"
                        : "border border-white/10 bg-white/5 text-text-2 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <span className="text-xs font-bold">✓</span>}
                  </button>
                );
              })}
            </div>

            {/* Live Summary Generator */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
              <span className="text-[0.68rem] font-bold uppercase tracking-wider text-silver-blue block mb-1">
                Generated Inquiry Summary
              </span>
              <p className="text-xs text-text-2 font-mono leading-relaxed">
                {generateSummary()}
              </p>
            </div>
          </GlassCard>
        </Reveal>

        {/* 2. Automation Inquiry Form */}
        <Reveal delay={0.1}>
          <GlassCard className="rounded-3xl p-6 sm:p-10 border-white/15">
            <h3 className="text-lg font-bold text-white mb-2">2. Workflow &amp; System Details</h3>
            <p className="text-xs text-text-3 mb-6">
              Provide as much detail as you have. Non-technical inquiries are completely welcome.
            </p>

            {status === "sent" ? (
              <div className="rounded-2xl border border-mint/30 bg-wa-green/10 p-6 text-center">
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-mint/20 text-mint text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-base font-bold text-white">Inquiry Received</h4>
                <p className="mt-2 text-xs text-mint max-w-md mx-auto">
                  Thank you! Our automation architects will review your workflow parameters and follow up within 24 hours with an architecture roadmap.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-5 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs text-white hover:bg-white/10"
                >
                  Configure Another Workflow
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-text-2">
                      Your Name <span className="text-silver-blue">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="business" className="text-xs font-medium text-text-2">
                      Business or Project Name <span className="text-silver-blue">*</span>
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      required
                      placeholder="e.g. Acme Corp / Creator Studio"
                      value={formData.business}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="apps" className="text-xs font-medium text-text-2">
                    Apps &amp; Platforms Involved
                  </label>
                  <input
                    id="apps"
                    name="apps"
                    type="text"
                    placeholder="e.g. HubSpot, Shopify, PostgreSQL, Telegram, WhatsApp, Gmail, Stripe"
                    value={formData.apps}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="apis" className="text-xs font-medium text-text-2">
                      APIs Available (if known)
                    </label>
                    <input
                      id="apis"
                      name="apis"
                      type="text"
                      placeholder="e.g. REST API, GraphQL, Webhooks, or Not sure"
                      value={formData.apis}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="volume" className="text-xs font-medium text-text-2">
                      Approximate Workflow Volume
                    </label>
                    <select
                      id="volume"
                      name="volume"
                      value={formData.volume}
                      onChange={handleInputChange}
                      className={inputClass}
                    >
                      <option value="Under 1,000 / month">Under 1,000 runs / month</option>
                      <option value="1,000 – 10,000 / month">1,000 – 10,000 runs / month</option>
                      <option value="10,000 – 100,000 / month">10,000 – 100,000 runs / month</option>
                      <option value="High Volume / Enterprise">High Volume / Enterprise (100k+)</option>
                    </select>
                  </div>
                </div>

                {/* Setup & Hosting Toggles */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-medium text-text-2">Existing n8n Setup?</span>
                    <div className="flex gap-3">
                      {["No", "Yes"].map((val) => (
                        <label key={val} className="flex items-center gap-2 text-xs text-text-2 cursor-pointer">
                          <input
                            type="radio"
                            name="existingSetup"
                            value={val}
                            checked={formData.existingSetup === val}
                            onChange={handleInputChange}
                            className="accent-white"
                          />
                          {val}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-medium text-text-2">Need Self-Hosting &amp; Server Deployment?</span>
                    <div className="flex gap-4">
                      {["Yes", "No", "Not sure"].map((val) => (
                        <label key={val} className="flex items-center gap-2 text-xs text-text-2 cursor-pointer">
                          <input
                            type="radio"
                            name="needSelfHosting"
                            value={val}
                            checked={formData.needSelfHosting === val}
                            onChange={handleInputChange}
                            className="accent-white"
                          />
                          {val}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="expectedWorkflow" className="text-xs font-medium text-text-2">
                    Expected Workflow &amp; Goals <span className="text-silver-blue">*</span>
                  </label>
                  <textarea
                    id="expectedWorkflow"
                    name="expectedWorkflow"
                    required
                    rows={3}
                    placeholder="Describe what you want automated — e.g. When a lead fills out our form, qualify with AI, insert into PostgreSQL, and alert the sales team via Telegram."
                    value={formData.expectedWorkflow}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="additionalNotes" className="text-xs font-medium text-text-2">
                    Additional Requirements or Constraints (Optional)
                  </label>
                  <input
                    id="additionalNotes"
                    name="additionalNotes"
                    type="text"
                    placeholder="e.g. Needs to be deployed on our own Hetzner VPS with Docker and SSL"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-white via-silver-2 to-silver-3 px-8 py-3.5 text-sm font-semibold text-black shadow-[0_8px_24px_-8px_rgba(255,255,255,0.3)] transition-transform hover:scale-[1.02] disabled:opacity-50"
                  >
                    {status === "sending" ? "Submitting Scope..." : "Submit Automation Inquiry →"}
                  </button>
                  <p className="mt-2.5 text-[0.72rem] text-text-3">
                    We engineer policy-compliant systems using official APIs. Never shared with third parties.
                  </p>
                </div>
              </form>
            )}
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
