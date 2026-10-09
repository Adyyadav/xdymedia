"use client";

import { useState } from "react";

const INQUIRY_TOPICS = [
  ["", "Select a topic..."],
  ["general", "General Inquiry"],
  ["partnership", "Partnership & Business Development"],
  ["support", "Technical Support & Client Assistance"],
  ["media", "Press & Media Inquiries"],
  ["feedback", "Feedback & Suggestions"],
  ["other", "Other Question / Need"],
];

const CONTACT_PREFERENCES = [
  ["email", "Email"],
  ["whatsapp", "WhatsApp"],
  ["telegram", "Telegram"],
  ["phone", "Phone Call"],
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

export default function ContactForm() {
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
          Thank you for reaching out! We&apos;ve received your message and our team will get back to you within 24 hours.
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Name *" htmlFor="name">
          <input id="name" name="name" type="text" required placeholder="John Doe" className={inputClass} />
        </Field>
        <Field label="Email Address *" htmlFor="email">
          <input id="email" name="email" type="email" required placeholder="john@example.com" className={inputClass} />
        </Field>
        <Field label="Phone / WhatsApp (Optional)" htmlFor="phone">
          <input id="phone" name="phone" type="tel" placeholder="+1 234 567 890" className={inputClass} />
        </Field>
        <Field label="Topic / Inquiring About *" htmlFor="topic">
          <select id="topic" name="topic" required className={inputClass}>
            {INQUIRY_TOPICS.map(([value, label]) => (
              <option key={value} value={value} className="bg-bg-2 text-white">{label}</option>
            ))}
          </select>
        </Field>
        <Field label="Preferred Reply Method" htmlFor="contactPref">
          <select id="contactPref" name="contactPref" className={inputClass}>
            {CONTACT_PREFERENCES.map(([value, label]) => (
              <option key={value} value={value} className="bg-bg-2 text-white">{label}</option>
            ))}
          </select>
        </Field>
        <Field label="Telegram / Social Handle" htmlFor="handle">
          <input id="handle" name="handle" type="text" placeholder="@yourhandle (optional)" className={inputClass} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Your Message *" htmlFor="message">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="How can we help you? Tell us about your inquiry, question, or proposal..."
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
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      <p className="mt-4 text-[0.78rem] text-text-3">
        By submitting, you agree to our{" "}
        <a href="/legal/privacy" className="text-silver-blue underline underline-offset-2">Privacy Policy</a> and{" "}
        <a href="/legal/terms" className="text-silver-blue underline underline-offset-2">Terms of Service</a>. We never request passwords, 2FA codes, or recovery keys through this form.
      </p>
    </form>
  );
}
