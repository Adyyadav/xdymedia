"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  ["", "Select a primary service..."],
  ["onlyfans-management", "OnlyFans Management (OFM) & Creator Growth"],
  ["telegram", "Telegram, Web3 & Community Automation"],
  ["whatsapp", "WhatsApp Automation & SaaS Solutions"],
  ["n8n", "n8n Automation & Custom AI Workflows"],
  ["web", "Website Development & Web Applications"],
  ["omnichannel", "Website + WhatsApp + Telegram: Unified Digital Engine"],
  ["web3", "Web3, Crypto & NFT Community Growth"],
  ["api", "API Automation & System Integration"],
  ["ai", "AI Automation & Intelligent Chatbots"],
  ["social", "Social Media Management & Audience Growth"],
  ["seo", "SEO & Search Engine Authority"],
  ["creative", "Creative Studio & Visual Design"],
  ["recovery", "Account Recovery & Support Escalation"],
  ["content", "Content Marketing & Copywriting"],
  ["growth", "Growth Strategy & Performance Advisory"],
  ["custom", "Custom Software & Client Portals"],
  ["multiple", "Multiple Services / Full Solution Package"],
];

const BUDGET_OPTIONS = [
  ["", "Select an estimated budget..."],
  ["under-1k", "Under $1,000"],
  ["1k-2.5k", "$1,000 - $2,500"],
  ["2.5k-5k", "$2,500 - $5,000"],
  ["5k-10k", "$5,000 - $10,000"],
  ["10k-plus", "$10,000+"],
];

const TIMELINE_OPTIONS = [
  ["", "Select desired timeline..."],
  ["urgent", "Urgent (< 2 weeks)"],
  ["month", "2 - 4 Weeks"],
  ["quarter", "1 - 2 Months"],
  ["flexible", "Flexible / Ongoing engagement"],
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

export default function StartProjectForm() {
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
          Thank you! We&apos;ve received your project requirements. Our engineering &amp; strategy leads will evaluate your scope and send a customized proposal within 24 hours.
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Name *" htmlFor="proj-name">
          <input id="proj-name" name="name" type="text" required placeholder="John Doe" className={inputClass} />
        </Field>
        <Field label="Business / Brand Name *" htmlFor="proj-brand">
          <input id="proj-brand" name="brand" type="text" required placeholder="Acme Corp or Creator Brand" className={inputClass} />
        </Field>
        <Field label="Work Email *" htmlFor="proj-email">
          <input id="proj-email" name="email" type="email" required placeholder="john@example.com" className={inputClass} />
        </Field>
        <Field label="Phone / WhatsApp *" htmlFor="proj-phone">
          <input id="proj-phone" name="phone" type="tel" required placeholder="+1 234 567 890" className={inputClass} />
        </Field>
        <Field label="Primary Service Required *" htmlFor="proj-service">
          <select id="proj-service" name="service" required className={inputClass}>
            {SERVICE_OPTIONS.map(([value, label]) => (
              <option key={value} value={value} className="bg-bg-2 text-white">{label}</option>
            ))}
          </select>
        </Field>
        <Field label="Budget Range *" htmlFor="proj-budget">
          <select id="proj-budget" name="budget" required className={inputClass}>
            {BUDGET_OPTIONS.map(([value, label]) => (
              <option key={value} value={value} className="bg-bg-2 text-white">{label}</option>
            ))}
          </select>
        </Field>
        <Field label="Target Launch Date / Timeline *" htmlFor="proj-timeline">
          <select id="proj-timeline" name="timeline" required className={inputClass}>
            {TIMELINE_OPTIONS.map(([value, label]) => (
              <option key={value} value={value} className="bg-bg-2 text-white">{label}</option>
            ))}
          </select>
        </Field>
        <Field label="Existing Website or Profile Links" htmlFor="proj-links">
          <input id="proj-links" name="links" type="text" placeholder="https://yourwebsite.com, @handle" className={inputClass} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Project Scope & Detailed Goals *" htmlFor="proj-description">
            <textarea
              id="proj-description"
              name="description"
              required
              rows={5}
              placeholder="Tell us about the project goals, target audience, specific features, integrations, and challenges you need us to solve..."
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
        {status === "sending" ? "Submitting Requirements…" : "Submit Project Scope"}
      </button>

      <p className="mt-4 text-[0.78rem] text-text-3">
        By submitting, you agree to our{" "}
        <a href="/legal/privacy" className="text-silver-blue underline underline-offset-2">Privacy Policy</a> and{" "}
        <a href="/legal/terms" className="text-silver-blue underline underline-offset-2">Terms of Service</a>. We execute strict Mutual Non-Disclosure Agreements (NDAs) on all client engagements.
      </p>
    </form>
  );
}
