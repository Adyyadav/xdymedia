import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { OFM_SERVICES, OFM_ADVANTAGE } from "@/lib/site-data";
import Link from "next/link";

export const metadata = {
  title: "OnlyFans Management (OFM) | XDY Media",
  description:
    "Full-service OnlyFans Management — multi-platform traffic funnels, content & fan management, DM & PPV monetization, and analytics-driven growth for creators.",
};

const OFM_CYAN_GRADIENT = (
  <defs>
    <linearGradient id="ofmGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
      <stop stopColor="#00AFF0" />
      <stop offset="1" stopColor="#00D4FF" />
    </linearGradient>
    <linearGradient id="ofmLightGrad" x1="0" y1="0" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#00AFF0" />
      <stop offset="50%" stopColor="#00C6FF" />
      <stop offset="100%" stopColor="#00D4FF" />
    </linearGradient>
  </defs>
);

const CHECK = (
  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-[#00AFF0]/30 bg-[#00AFF0]/10 shadow-[0_0_12px_rgba(0,175,240,0.25)]">
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24" className="text-[#00C6FF]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

const REASONS = [
  { title: "Full-Funnel Ownership", desc: "We don't just post content — we own the entire path from cold traffic to paying subscriber to retained fan." },
  { title: "Trained Chat Teams", desc: "DM and conversion management handled by trained operators working from your brand voice and guidelines, not scripts on autopilot." },
  { title: "Transparent Reporting", desc: "Recurring analytics reviews on revenue, retention, and funnel performance — no black-box numbers." },
  { title: "Policy-Compliant Operations", desc: "Every service is built around each platform's terms of service. No bans-for-hire tactics, no shortcuts that put your account at risk." },
];

function CreatorProfileIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <circle cx="10" cy="8" r="3.6" stroke="url(#ofmGrad)" strokeWidth="1.8" />
      <path d="M3.5 19c0-3.038 2.91-5.5 6.5-5.5s6.5 2.462 6.5 5.5" stroke="url(#ofmGrad)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M19 8.2c-.6-.6-1.55-.6-2.15 0l-.35.35-.35-.35c-.6-.6-1.55-.6-2.15 0-.6.6-.6 1.55 0 2.15l2.5 2.5 2.5-2.5c.6-.6.6-1.55 0-2.15z" fill="url(#ofmGrad)" />
    </svg>
  );
}

export default function OnlyFansManagementPage() {
  return (
    <>
      {/* SVG GRADIENT DEFINITIONS */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        {OFM_CYAN_GRADIENT}
      </svg>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:pt-16">
        {/* Subtle radial cyan glow behind */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,175,240,0.18),transparent_65%)] blur-2xl" />

        <div className="relative mx-auto max-w-[920px] text-center">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#00AFF0]/30 bg-[#00AFF0]/10 px-4 py-2 text-[0.82rem] font-semibold text-[#00C6FF] shadow-[0_0_20px_rgba(0,175,240,0.2)]">
              <span className="h-2 w-2 rounded-full bg-[#00AFF0] shadow-[0_0_8px_#00AFF0]" />
              Flagship Creator Growth Service
            </div>

            <h1 className="text-[clamp(2.3rem,5.2vw,3.8rem)] font-extrabold tracking-tight text-white">
              Full-Service <span className="bg-gradient-to-r from-[#00AFF0] via-[#00C6FF] to-[#00D4FF] bg-clip-text text-transparent">OnlyFans</span> Management
            </h1>

            <p className="mx-auto mt-6 max-w-[640px] text-[1.08rem] leading-relaxed text-text-2">
              End-to-end creator account management — traffic funnels, content operations, fan engagement, and monetization — run by a dedicated team so you can focus on creating.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00AFF0] px-7 py-3.5 text-sm font-bold text-white shadow-[0_4px_24px_rgba(0,175,240,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00C6FF] hover:shadow-[0_8px_32px_rgba(0,198,255,0.5)]"
              >
                Start a Creator Consultation
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-[#00AFF0]/30 bg-[#00AFF0]/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#00AFF0]/60 hover:bg-[#00AFF0]/15"
              >
                See What&apos;s Included
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CORE ADVANTAGE FUNNEL */}
      <section className="relative px-4 pb-24">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            eyebrow="Our Core Advantage"
            title={<>One team, the <span className="bg-gradient-to-r from-[#00AFF0] to-[#00D4FF] bg-clip-text text-transparent">entire funnel</span></>}
            desc="Most creators juggle separate people for traffic, chatting, and content. We run it as one connected system, end to end."
          />

          <Reveal className="flex flex-wrap items-center justify-center gap-3.5">
            {OFM_ADVANTAGE.map((step, i) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="group relative overflow-hidden rounded-2xl border border-[#00AFF0]/20 bg-gradient-to-b from-white/[0.08] to-white/[0.02] px-5 py-4 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#00AFF0]/50 hover:shadow-[0_10px_30px_rgba(0,175,240,0.22)]">
                  <div className="text-[0.88rem] font-bold text-white transition-colors duration-200 group-hover:text-[#00C6FF]">
                    {step.label}
                  </div>
                  <div className="mt-1 text-[0.74rem] text-text-3">{step.note}</div>
                </div>
                {i < OFM_ADVANTAGE.length - 1 && (
                  <span className="text-lg font-bold text-[#00AFF0]/60">→</span>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 11 OFM SERVICES */}
      <section id="services" className="relative px-4 pb-24">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-[#00AFF0]/10 blur-3xl" />

        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            eyebrow="Full-Service Offering"
            title={<>Everything your <span className="bg-gradient-to-r from-[#00AFF0] to-[#00D4FF] bg-clip-text text-transparent">creator business</span> needs</>}
            desc="Eleven connected service areas, with our highest-impact priorities highlighted below."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OFM_SERVICES.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 0.06}>
                <div
                  className={`group relative h-full rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                    s.highlight
                      ? "border-[#00AFF0]/40 bg-gradient-to-br from-white/[0.10] via-white/[0.04] to-[#00AFF0]/[0.08] shadow-[0_0_35px_-8px_rgba(0,175,240,0.32)] hover:border-[#00AFF0]/70 hover:shadow-[0_16px_40px_-8px_rgba(0,175,240,0.4)]"
                      : "border-[#00AFF0]/20 bg-gradient-to-br from-white/[0.06] to-white/[0.02] hover:border-[#00AFF0]/45 hover:shadow-[0_12px_32px_-10px_rgba(0,175,240,0.22)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.8rem] font-bold text-[#00C6FF]">
                      {s.n}
                    </span>
                    {s.highlight ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-[#00AFF0]/40 bg-[#00AFF0]/15 px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-[#00C6FF]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00AFF0]" />
                        Priority
                      </span>
                    ) : (
                      <div className="opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                        <CreatorProfileIcon />
                      </div>
                    )}
                  </div>

                  <h3 className="mt-3 text-[1.1rem] font-bold text-white transition-colors duration-200 group-hover:text-[#00C6FF]">
                    {s.title}
                  </h3>

                  <p className="mt-2.5 text-[0.9rem] leading-relaxed text-text-2">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="relative px-4 pb-24">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            eyebrow="Why Work With Us?"
            title={<>Built for <span className="bg-gradient-to-r from-[#00AFF0] to-[#00D4FF] bg-clip-text text-transparent">creators who scale</span></>}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 0.08}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-[#00AFF0]/20 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#00AFF0]/45 hover:shadow-[0_12px_32px_rgba(0,175,240,0.2)]">
                  {CHECK}
                  <div>
                    <h3 className="text-[1.05rem] font-bold text-white transition-colors duration-200 group-hover:text-[#00C6FF]">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 text-[0.9rem] leading-relaxed text-text-2">{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative px-4 pb-24">
        <Reveal className="mx-auto max-w-[1240px]">
          <div className="relative overflow-hidden rounded-3xl border border-[#00AFF0]/30 bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-[#00AFF0]/[0.09] p-10 text-center backdrop-blur-xl sm:p-14">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-[#00AFF0]/20 blur-3xl" />

            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00AFF0]/30 bg-[#00AFF0]/10 px-3.5 py-1 text-[0.74rem] font-bold uppercase tracking-[0.16em] text-[#00C6FF]">
              Our Mission
            </span>
            <h2 className="mx-auto max-w-2xl text-[clamp(1.75rem,3.4vw,2.5rem)] font-extrabold text-white">
              Turn creator talent into a <span className="bg-gradient-to-r from-[#00AFF0] to-[#00D4FF] bg-clip-text text-transparent">sustainable, well-run business</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[1.02rem] leading-relaxed text-text-2">
              We handle the operational weight of running an OnlyFans business — funnels, chat, content, and analytics — so creators can stay focused on what actually grows their audience, on their terms and within every platform&apos;s rules.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-4 pb-12">
        <Reveal className="mx-auto max-w-[1240px]">
          <div className="relative overflow-hidden rounded-3xl border border-[#00AFF0]/35 bg-gradient-to-br from-white/[0.10] via-white/[0.04] to-[#00AFF0]/[0.10] px-8 py-16 text-center backdrop-blur-xl shadow-[0_0_50px_-15px_rgba(0,175,240,0.3)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,175,240,0.15),transparent_65%)]" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-[clamp(2rem,3.8vw,2.9rem)] font-extrabold text-white">
                Ready to grow your <span className="bg-gradient-to-r from-[#00AFF0] to-[#00D4FF] bg-clip-text text-transparent">creator business</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[1.05rem] text-text-2">
                Tell us about your current setup and goals — we&apos;ll walk you through how our team can take it from here.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#00AFF0] px-8 py-4 text-sm font-bold text-white shadow-[0_4px_24px_rgba(0,175,240,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00C6FF] hover:shadow-[0_8px_32px_rgba(0,198,255,0.5)]"
                >
                  Start a Creator Consultation
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

