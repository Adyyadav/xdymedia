import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import ConsultationForm from "@/components/ConsultationForm";
import { SITE } from "@/lib/site-data";

export const metadata = {
  title: "Book a Consultation",
  description: "Schedule a dedicated 1-on-1 technical and digital growth consultation with XDY Media senior specialists.",
};

const HIGHLIGHTS = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    ),
    title: "45-Minute Focused Deep Dive",
    desc: "An intensive session with our senior engineers and growth leads, tailored directly to your business challenges.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
    ),
    title: "Live Diagnostics & Architecture Review",
    desc: "We analyze your current bots, CRM pipelines, ad flows, or codebases to pinpoint bottlenecks.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
    ),
    title: "Post-Call Execution Blueprint",
    desc: "Receive a written summary report with prioritized action items and system architecture recommendations.",
  },
];

export default function BookConsultationPage() {
  return (
    <>
      <section className="px-4 pb-10 pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">1-on-1 Advisory</span>
            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">
              Book a <span className="grad-text">Consultation</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[620px] text-[1.05rem] text-text-2">
              Schedule a dedicated technical and growth advisory call. We diagnose your operational roadblocks, evaluate tech stacks, and map high-ROI solutions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1.35fr_1fr] items-start">
          <Reveal>
            <GlassCard className="rounded-3xl p-7 sm:p-9">
              <div className="mb-6 border-b border-white/10 pb-5">
                <h2 className="text-xl font-bold text-white">Schedule Your Session</h2>
                <p className="mt-1 text-sm text-text-3">Select your topic and preferred time slot to confirm your meeting.</p>
              </div>
              <ConsultationForm />
            </GlassCard>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.08}>
              <GlassCard className="rounded-2xl p-6">
                <h2 className="text-[1.05rem] font-bold text-white">What You Can Expect</h2>
                <div className="mt-4 flex flex-col gap-4">
                  {HIGHLIGHTS.map((h, i) => (
                    <div key={i} className="flex items-start gap-3.5">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 text-silver-blue">
                        {h.icon}
                      </span>
                      <div>
                        <h3 className="text-[0.92rem] font-semibold text-white">{h.title}</h3>
                        <p className="mt-0.5 text-[0.8rem] text-text-3 leading-relaxed">{h.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.14}>
              <GlassCard className="rounded-2xl border-tg-blue/20 p-6">
                <h3 className="text-[1.02rem] font-bold text-white">Consultation Guarantee</h3>
                <p className="mt-2 text-[0.84rem] text-text-2 leading-relaxed">
                  Every session is strictly strategic and consultative. We never push generic sales pitches — you walk away with actionable insights and clear architectural blueprints.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-text-3">
                  <span className="h-2 w-2 rounded-full bg-wa-green animate-pulse" />
                  <span>Calendar confirmations typically sent within 4 hours.</span>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-text-3">
                <span>Need urgent assistance today?</span>
                <a
                  href={SITE.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-tg-blue hover:underline"
                >
                  Direct Telegram Message →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
