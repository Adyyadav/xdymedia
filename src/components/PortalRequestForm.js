"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-text-3 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.07]";

export default function PortalRequestForm() {
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
    <form onSubmit={handleSubmit} className="mt-5">
      {status === "sent" && (
        <div className="mb-4 rounded-xl border border-mint/30 bg-wa-green/10 px-4 py-3 text-[0.85rem] text-mint">
          Access request received. We&apos;ll send login details to your email.
        </div>
      )}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="pemail" className="text-[0.82rem] font-medium text-text-2">Email *</label>
          <input id="pemail" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="pproject" className="text-[0.82rem] font-medium text-text-2">Project / Order Ref (optional)</label>
          <input id="pproject" name="project" type="text" placeholder="e.g. PRJ-0001" className={inputClass} />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-xl bg-gradient-to-br from-white via-silver-2 to-silver-3 px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.01] disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Request Access"}
      </button>
      <p className="mt-4 text-[0.78rem] text-text-3">
        Never share passwords or 2FA codes through this form. Portal access is granted only to verified clients.
      </p>
    </form>
  );
}
