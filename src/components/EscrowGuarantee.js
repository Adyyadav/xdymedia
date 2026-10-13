import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";

export default function EscrowGuarantee() {
  const pillars = [
    {
      title: "Milestone-Based Escrow Release",
      desc: "For high-ticket recovery cases and verification orders, payment remains securely locked in third-party escrow until official platform resolution is demonstrated.",
      tag: "In Integration",
    },
    {
      title: "Zero Credential Disclosure",
      desc: "No password, session token, or 2FA codes are ever requested. Everything is handled via external documentation, phone registry, or compliance records.",
      tag: "Standard Policy",
    },
    {
      title: "Transparent Verification & Dispute Neutrality",
      desc: "Clear deliverable proof criteria agreed upon before case commencement, ensuring mutual alignment for creators, agencies, and businesses.",
      tag: "Protocol Design",
    },
  ];

  return (
    <Reveal className="my-12">
      <GlassCard className="relative overflow-hidden rounded-3xl border border-web3-purple/30 bg-gradient-to-br from-web3-purple/10 via-white/[0.02] to-white/[0.05] p-7 sm:p-10">
        {/* Glow backdrop */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-web3-purple/20 blur-3xl" />

        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-web3-purple/40 bg-web3-purple/15 px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-widest text-[#d8b4fe]">
              <span className="h-2 w-2 rounded-full bg-[#c084fc] shadow-[0_0_8px_#c084fc]" />
              Coming Soon
            </div>
            <span className="font-mono text-[0.72rem] text-text-3">
              Institutional Trust Framework • Planned Q4 Rollout
            </span>
          </div>

          <div className="mt-5">
            <h3 className="text-[clamp(1.5rem,2.8vw,2rem)] font-extrabold text-white">
              Trust &amp; Escrow <span className="grad-text">Protected Guarantee</span>
            </h3>
            <p className="mt-3 max-w-2xl text-[0.96rem] leading-relaxed text-text-2">
              We are currently establishing an integrated third-party escrow framework for high-tier account recovery and platform verification engagements. Work with complete peace of mind knowing your funds are protected by milestone verification.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[0.65rem] font-semibold text-text-3">
                    {p.tag}
                  </span>
                </div>
                <h4 className="text-[0.94rem] font-semibold text-white">{p.title}</h4>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-text-2">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-[0.8rem] text-text-3">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-web3-purple">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Encrypted case handling &amp; confidentiality guaranteed across all cases today</span>
            </div>
            <span className="font-semibold text-silver-blue">
              Questions regarding deal structuring? Speak with our team.
            </span>
          </div>
        </div>
      </GlassCard>
    </Reveal>
  );
}
