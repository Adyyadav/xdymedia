import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";

const RECENT_RESOLUTIONS = [
  {
    type: "Verification",
    badge: "Meta Blue Tick",
    target: "Instagram Public Figure (@******)",
    tier: "Notable Creator (420k followers)",
    tat: "18 Hours",
    status: "Badge Issued ✔️",
    note: "Zero login access needed. Notable press alignment.",
  },
  {
    type: "Recovery",
    badge: "WhatsApp Business",
    target: "Enterprise Support Number (+1 312...)",
    tier: "Permanent Spam Ban",
    tat: "6 Hours",
    status: "Restored & Active ✔️",
    note: "Policy documentation appeal accepted on first pass.",
  },
  {
    type: "Verification",
    badge: "WhatsApp OBA",
    target: "E-Commerce Brand Support (+91 98...)",
    tier: "Official Green Badge",
    tat: "1.5 Hours",
    status: "Verified ✔️",
    note: "Meta Business Manager entity sync & direct approval.",
  },
  {
    type: "Recovery",
    badge: "Instagram Integrity",
    target: "Brand Account (@b******)",
    tier: "Community Guidelines Suspension",
    tat: "32 Hours",
    status: "Reinstated ✔️",
    note: "Sub-1M tier fresh case escalated successfully.",
  },
  {
    type: "Recovery",
    badge: "Meta Business Manager",
    target: "Agency Ads Manager",
    tier: "Restricted Advertising Assets",
    tat: "48 Hours",
    status: "Unrestricted ✔️",
    note: "Documentation review & identity clearance completed.",
  },
];

export default function RecentResolutionsLog() {
  return (
    <Reveal className="mb-14">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-silver-blue">
              Verified Delivery Log
            </span>
            <h3 className="mt-1 text-xl font-bold text-white">
              Recent Case <span className="grad-text">Resolutions &amp; Issuances</span>
            </h3>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/5 px-3 py-1 text-[0.75rem] font-semibold text-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            Anonymized for client privacy
          </div>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {RECENT_RESOLUTIONS.map((r, i) => (
            <GlassCard key={i} className="flex flex-col justify-between rounded-2xl border border-white/10 p-5">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[0.7rem] font-medium text-silver-2">
                    {r.type}
                  </span>
                  <span className="font-mono text-[0.75rem] font-bold text-mint">
                    {r.status}
                  </span>
                </div>

                <div className="mt-3">
                  <h4 className="text-[0.98rem] font-semibold text-white">{r.badge}</h4>
                  <p className="font-mono text-[0.78rem] text-text-3">{r.target}</p>
                </div>

                <div className="mt-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-[0.76rem] text-text-2">
                  <div className="flex justify-between">
                    <span className="text-text-3">Case Type:</span>
                    <span className="font-medium text-white">{r.tier}</span>
                  </div>
                  <div className="mt-1 flex justify-between">
                    <span className="text-text-3">Turnaround:</span>
                    <span className="font-mono font-bold text-silver-blue">{r.tat}</span>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-[0.73rem] text-text-3 italic">
                {r.note}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
