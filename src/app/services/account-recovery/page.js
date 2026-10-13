import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import SectionHead from "@/components/SectionHead";
import LiveQueueStatus from "@/components/LiveQueueStatus";
import RecoveryTriage from "@/components/RecoveryTriage";
import RecentResolutionsLog from "@/components/RecentResolutionsLog";
import EscrowGuarantee from "@/components/EscrowGuarantee";
import { RECOVERY_PLATFORMS } from "@/lib/site-data";

export const metadata = {
  title: "Account Recovery & Support",
  description: "Flagship account recovery, WhatsApp unban, and appeal assistance for suspended, disabled, or restricted accounts across Instagram, WhatsApp, Facebook Ads, Telegram, and more.",
};

const EXPANDED_SERVICES = [
  {
    title: "WhatsApp Ban & Spam Flag Recovery",
    desc: "Rapid escalation assistance for WhatsApp permanent bans, spam flags, and business API account suspensions with fast turnaround.",
    tag: "Priority Queue",
  },
  {
    title: "Instagram Integrity & Cyber Appeals",
    desc: "Assistance with community guidelines violations, cybersecurity/compromised lockouts, and false-positive account suspensions.",
    tag: "Fresh & High-Tier",
  },
  {
    title: "Meta Ads & Business Manager Support",
    desc: "Documentation preparation and official review escalation for restricted Business Managers, disabled ad accounts, and fan pages.",
    tag: "Corporate Assets",
  },
  {
    title: "Disabled Account Formal Appeals",
    desc: "Structured appeals aligned with official platform policy documentation, legal identity clearance, and direct support submissions.",
    tag: "Full Documentation",
  },
  {
    title: "Restricted Features & Account Blocks",
    desc: "Support resolving feature restrictions, temporary action blocks, messaging suspensions, and visibility flags.",
    tag: "Feature Blocks",
  },
  {
    title: "Account Security Audit & Hardening",
    desc: "Post-recovery account security review, two-factor authentication configuration, and prevention protocols against future lockouts.",
    tag: "Security Hardening",
  },
];

export default function AccountRecoveryPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-4 pb-10 pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <div className="glass mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[0.82rem] text-text-2">
              <span className="h-2 w-2 rounded-full bg-recovery-red" style={{ boxShadow: "0 0 0 4px rgba(252,165,165,0.15)" }} />
              Flagship Recovery &amp; Support Hub
            </div>
            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">
              Account Recovery &amp; <span className="grad-text">Appeal Concierge</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[620px] text-[1.05rem] text-text-2">
              Legitimate escalation support for suspended, disabled, or restricted accounts — across Instagram, WhatsApp, Facebook, Telegram, and more. Zero password disclosure.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-2.5">
            {RECOVERY_PLATFORMS.map((p) => (
              <span key={p} className="glass rounded-full border-recovery-red/25 px-4 py-1.5 text-[0.82rem] font-medium text-white">
                {p}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* LIVE SLA & QUEUE TELEMETRY */}
      <section className="px-4">
        <div className="mx-auto max-w-[1240px]">
          <LiveQueueStatus />
        </div>
      </section>

      {/* INTERACTIVE TRIAGE EVALUATOR */}
      <section className="px-4 pb-20">
        <RecoveryTriage />
      </section>

      {/* POLICY & COMPLIANCE CALLOUT */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mb-12 flex items-start gap-3 rounded-2xl border border-warn/30 bg-warn/5 p-5">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0 text-warn">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <p className="text-[0.88rem] text-text-2">
              <b className="text-white">Important Notice:</b> We provide legitimate policy-support and appeal assistance. We do <b className="text-white">not</b> bypass security systems, compromise accounts, impersonate platform staff, or guarantee restoration. Final determination remains with the respective platform.
            </p>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-xl text-white">How we help clients recover assets</h2>
              <p className="mt-4 text-[0.92rem] text-text-2">
                When your revenue-generating account or verified channel is suddenly suspended or restricted, navigating impersonal automated forms can cost weeks of lost business. We analyze the violation flag, structure compliant documentation, and route through established escalation procedures.
              </p>
              <p className="mt-3 text-[0.92rem] text-text-2">
                Our assistance is designed exclusively for verified account owners or authorized business representatives.
              </p>
              <div className="mt-7">
                <Button href="/contact">Speak With a Specialist</Button>
              </div>
            </Reveal>

            <div className="flex flex-col gap-4">
              <Reveal delay={0.08}>
                <GlassCard className="rounded-2xl p-6">
                  <h3 className="text-[1rem] text-white">Zero Password Disclosure</h3>
                  <p className="mt-2 text-[0.87rem] text-text-2">We never ask for account passwords, SMS 2FA codes, or login sessions. Everything is reviewed and appealed via official registry documents and public endpoints.</p>
                </GlassCard>
              </Reveal>
              <Reveal delay={0.14}>
                <GlassCard className="rounded-2xl p-6">
                  <h3 className="text-[1rem] text-white">Policy-Compliant Framework</h3>
                  <p className="mt-2 text-[0.87rem] text-text-2">We work strictly within community standards and terms of service, maximizing reinstatement odds through clean factual documentation.</p>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* EXPANDED SERVICES SPECTRUM */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead eyebrow="Capabilities" title="Our recovery & support capabilities" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXPANDED_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <GlassCard className="flex h-full flex-col justify-between rounded-2xl p-6">
                  <div>
                    <span className="inline-block rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[0.68rem] font-semibold text-silver-blue">
                      {s.tag}
                    </span>
                    <h3 className="mt-3 text-[1.02rem] text-white">{s.title}</h3>
                    <p className="mt-2 text-[0.87rem] text-text-2">{s.desc}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT CASE RESOLUTIONS LOG */}
      <section className="px-4">
        <RecentResolutionsLog />
      </section>

      {/* TRUST & ESCROW GUARANTEE (COMING SOON) */}
      <section className="px-4">
        <div className="mx-auto max-w-[1240px]">
          <EscrowGuarantee />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12">
        <Reveal className="mx-auto max-w-[1240px]">
          <GlassCard className="rounded-3xl px-8 py-14 text-center">
            <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] text-white">Need immediate help with your account?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[1rem] text-text-2">
              Run the pre-check assessment above or contact our team directly for an expedited review.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact">Submit Case Now</Button>
              <Button href="https://wa.me/306970445764" variant="ghost">Instant WhatsApp Chat</Button>
            </div>
          </GlassCard>
        </Reveal>
      </section>
    </>
  );
}
