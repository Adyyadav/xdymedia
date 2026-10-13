"use client";

import { useState } from "react";

const QUOTE_SERVICES = [
  ["", "Select service for quote..."],
  ["web-dev", "Website Development & Web Applications"],
  ["whatsapp-saas", "WhatsApp Automation & SaaS Infrastructure"],
  ["telegram-auto", "Telegram Management, Bots & Automation"],
  ["ofm", "OnlyFans Management (OFM) & Creator Scaling"],
  ["n8n-ai", "n8n Automation & Custom AI Workflows"],
  ["unified-engine", "Unified Digital Engine (Website + WhatsApp + Telegram)"],
  ["custom-software", "Custom Software, APIs & Client Portals"],
  ["account-recovery", "Account Recovery & Platform Escalation"],
  ["platform-verification", "Meta & WhatsApp Verification Concierge"],
  ["seo-growth", "SEO, Content & Audience Growth Strategy"],
  ["multi", "Multi-Service / Custom Package"],
];

const COMPLEXITY_TIERS = [
  ["", "Select project scale & complexity..."],
  ["starter", "Starter / MVP / Single Workflow or Landing Page"],
  ["growth", "Growth Tier / Multi-Page App & Automated Workflows"],
  ["enterprise", "Enterprise / High-Volume Architecture & Multi-API Integration"],
  ["retainer", "Monthly Dedicated Management Retainer"],
];

const BUDGET_RANGES = [
  ["", "Select target budget allocation..."],
  ["under-1.5k", "Under $1,500"],
  ["1.5k-3.5k", "$1,500 - $3,500"],
  ["3.5k-7.5k", "$3,500 - $7,500"],
  ["7.5k-15k", "$7,500 - $15,000"],
  ["15k-plus", "$15,000+ (Enterprise)"],
];

const DEADLINE_OPTIONS = [
  ["", "Select required completion window..."],
  ["urgent", "Rush Delivery (< 2 Weeks)"],
  ["1-month", "Within 1 Month"],
  ["2-3-months", "2 to 3 Months"],
  ["flexible", "Flexible / Milestone Phased"],
];

const DELIVERY_FORMATS = [
  ["pdf-email", "Formal Itemized PDF Proposal via Email"],
  ["whatsapp", "Executive Summary via WhatsApp + Call"],
  ["telegram", "Executive Summary via Telegram"],
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-text-3 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.07]";

function Field({ label, htmlFor, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-[0.82rem] font-medium text-text-2">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function QuoteForm() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      e.target.reset();
    }, 1000);
  }

  return (
    <form onSubmit={handleSubmit}>
      {status === "sent" && (
        <div className="mb-5 rounded-xl border border-mint/30 bg-wa-green/10 px-4 py-3 text-[0.88rem] text-mint">
          Quote request received! Our solution architects will prepare an itemized cost estimate and timeline breakdown within 24 business hours.
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Name *" htmlFor="quote-name">
          <input id="quote-name" name="name" type="text" required placeholder="Elena Rostova" className={inputClass} />
        </Field>
        <Field label="Company / Brand Name *" htmlFor="quote-company">
          <input id="quote-company" name="company" type="text" required placeholder="Organization Name" className={inputClass} />
        </Field>
        <Field label="Business Email *" htmlFor="quote-email">
          <input id="quote-email" name="email" type="email" required placeholder="elena@brand.com" className={inputClass} />
        </Field>
        <Field label="Phone / WhatsApp *" htmlFor="quote-phone">
          <input id="quote-phone" name="phone" type="tel" required placeholder="+1 234 567 890" className={inputClass} />
        </Field>
        <Field label="Service Required *" htmlFor="quote-service">
          <select id="quote-service" name="service" required className={inputClass}>
            {QUOTE_SERVICES.map(([value, label]) => (
              <option key={value} value={value} className="bg-bg-2 text-white">{label}</option>
            ))}
          </select>
        </Field>
        <Field label="Scale & Complexity *" htmlFor="quote-complexity">
          <select id="quote-complexity" name="complexity" required className={inputClass}>
            {COMPLEXITY_TIERS.map(([value, label]) => (
              <option key={value} value={value} className="bg-bg-2 text-white">{label}</option>
            ))}
          </select>
        </Field>
        <Field label="Budget Allocation *" htmlFor="quote-budget">
          <select id="quote-budget" name="budget" required className={inputClass}>
            {BUDGET_RANGES.map(([value, label]) => (
              <option key={value} value={value} className="bg-bg-2 text-white">{label}</option>
            ))}
          </select>
        </Field>
        <Field label="Required Completion Window *" htmlFor="quote-deadline">
          <select id="quote-deadline" name="deadline" required className={inputClass}>
            {DEADLINE_OPTIONS.map(([value, label]) => (
              <option key={value} value={value} className="bg-bg-2 text-white">{label}</option>
            ))}
          </select>
        </Field>
        <Field label="Target Metrics / Volume (Optional)" htmlFor="quote-metrics">
          <input id="quote-metrics" name="metrics" type="text" placeholder="e.g. 50k users, 5k msgs/day, 12 pages" className={inputClass} />
        </Field>
        <Field label="Preferred Quote Format *" htmlFor="quote-delivery">
          <select id="quote-delivery" name="deliveryFormat" required className={inputClass}>
            {DELIVERY_FORMATS.map(([value, label]) => (
              <option key={value} value={value} className="bg-bg-2 text-white">{label}</option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Detailed Scope & Deliverables Required *" htmlFor="quote-details">
            <textarea
              id="quote-details"
              name="details"
              required
              rows={5}
              placeholder="List specific features, existing systems/APIs to integrate, deliverables needed, and any non-functional requirements for an accurate estimate..."
              className={inputClass}
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-xl bg-gradient-to-br from-white via-silver-2 to-silver-3 px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.01] disabled:opacity-70"
      >
        {status === "sending" ? "Calculating Estimate…" : "Request Itemized Quote"}
      </button>

      <p className="mt-4 text-[0.78rem] text-text-3">
        Our proposals are valid for 30 calendar days. By submitting, you agree to our{" "}
        <a href="/legal/privacy" className="text-silver-blue underline underline-offset-2">Privacy Policy</a> and{" "}
        <a href="/legal/terms" className="text-silver-blue underline underline-offset-2">Terms of Service</a>.
      </p>
    </form>
  );
}
