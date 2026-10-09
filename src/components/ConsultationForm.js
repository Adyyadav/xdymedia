"use client";

import { useState } from "react";

const CONSULTATION_TOPICS = [
  ["", "Select a consultation topic..."],
  ["onlyfans", "OnlyFans Growth, Chatting & Funnel Optimization"],
  ["telegram", "Telegram Bots, MTProto Architecture & Community Automation"],
  ["whatsapp", "WhatsApp Business API, CRM & Lead Automation"],
  ["web-arch", "Web App Architecture, Next.js & Cloud Infrastructure"],
  ["n8n-ai", "n8n Automation, LangChain & Autonomous AI Workflows"],
  ["recovery", "Account Recovery, Suspension Appeal & Risk Escalation"],
  ["omnichannel", "Omnichannel Growth Engine (Web + WA + Telegram)"],
  ["growth-audit", "Complete Digital Systems & Growth Audit"],
  ["other", "General Technical Strategy & Consultation"],
];

const TIME_WINDOWS = [
  ["", "Select preferred time window (UTC)..."],
  ["morning", "Morning: 09:00 - 12:00 UTC"],
  ["midday", "Mid-Day: 12:00 - 15:00 UTC"],
  ["afternoon", "Afternoon: 15:00 - 18:00 UTC"],
  ["evening", "Evening: 18:00 - 21:00 UTC"],
];

const PLATFORMS = [
  ["google-meet", "Google Meet (Link sent via email)"],
  ["zoom", "Zoom"],
  ["telegram", "Telegram Voice / Video Call"],
  ["whatsapp", "WhatsApp Voice / Video Call"],
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

export default function ConsultationForm() {
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
          Consultation request confirmed! We will review your topic and send a calendar invitation with meeting links within 4 hours.
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Name *" htmlFor="consult-name">
          <input id="consult-name" name="name" type="text" required placeholder="Alex Mercer" className={inputClass} />
        </Field>
        <Field label="Brand / Organization Name *" htmlFor="consult-company">
          <input id="consult-company" name="company" type="text" required placeholder="Brand or Agency Name" className={inputClass} />
        </Field>
        <Field label="Work Email *" htmlFor="consult-email">
          <input id="consult-email" name="email" type="email" required placeholder="alex@company.com" className={inputClass} />
        </Field>
        <Field label="Phone / WhatsApp *" htmlFor="consult-phone">
          <input id="consult-phone" name="phone" type="tel" required placeholder="+1 234 567 890" className={inputClass} />
        </Field>
        <Field label="Strategic Focus Area *" htmlFor="consult-topic">
          <select id="consult-topic" name="topic" required className={inputClass}>
            {CONSULTATION_TOPICS.map(([value, label]) => (
              <option key={value} value={value} className="bg-bg-2 text-white">{label}</option>
            ))}
          </select>
        </Field>
        <Field label="Preferred Meeting Platform *" htmlFor="consult-platform">
          <select id="consult-platform" name="platform" required className={inputClass}>
            {PLATFORMS.map(([value, label]) => (
              <option key={value} value={value} className="bg-bg-2 text-white">{label}</option>
            ))}
          </select>
        </Field>
        <Field label="Preferred Date *" htmlFor="consult-date">
          <input
            id="consult-date"
            name="date"
            type="date"
            required
            className={inputClass}
          />
        </Field>
        <Field label="Preferred Time Window *" htmlFor="consult-time">
          <select id="consult-time" name="time" required className={inputClass}>
            {TIME_WINDOWS.map(([value, label]) => (
              <option key={value} value={value} className="bg-bg-2 text-white">{label}</option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Current Website, Profile, or Channel URL (Optional)" htmlFor="consult-url">
            <input id="consult-url" name="url" type="url" placeholder="https://..." className={inputClass} />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="What specific bottlenecks or questions do you want to solve? *" htmlFor="consult-goals">
            <textarea
              id="consult-goals"
              name="goals"
              required
              rows={4}
              placeholder="Tell us about your current infrastructure, metrics, team setup, and the primary objectives you'd like to achieve during the consultation..."
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
        {status === "sending" ? "Booking Session…" : "Book Strategy Consultation"}
      </button>

      <p className="mt-4 text-[0.78rem] text-text-3">
        Sessions are typically 30–45 minutes in duration. By submitting, you agree to our{" "}
        <a href="/legal/privacy" className="text-silver-blue underline underline-offset-2">Privacy Policy</a>. All technical details shared remain strictly confidential.
      </p>
    </form>
  );
}
