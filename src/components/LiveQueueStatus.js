import Reveal from "@/components/Reveal";

export default function LiveQueueStatus() {
  const metrics = [
    { label: "Intake Queue", value: "Active & Processing", status: "online", detail: "Daily batches active" },
    { label: "WhatsApp Unban SLA", value: "0–24 Hours", status: "fast", detail: "Average resolution" },
    { label: "Instagram Integrity", value: "Fresh Cases Open", status: "open", detail: "Sub-1M & 1M+ tiers" },
    { label: "WhatsApp Green Badge", value: "0–4h Express", status: "fast", detail: "Phone number only" },
    { label: "Security Protocol", value: "Zero Passwords", status: "shield", detail: "100% policy-compliant" },
  ];

  return (
    <Reveal className="mb-10">
      <div className="glass-panel overflow-hidden rounded-2xl border border-white/10 p-4 sm:p-5">
        <div className="mb-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
            </span>
            <span className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-white">
              Live Intake &amp; SLA Telemetry
            </span>
          </div>
          <span className="font-mono text-[0.72rem] text-text-3">
            Updated in real-time • Standard &amp; Express review queues
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-white/15">
              <span className="block text-[0.7rem] uppercase tracking-wider text-text-3">{m.label}</span>
              <span className="mt-1 block text-[0.92rem] font-bold text-white">{m.value}</span>
              <span className="mt-0.5 block text-[0.68rem] text-text-2">{m.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
