import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import QuoteForm from "@/components/QuoteForm";
import { SITE } from "@/lib/site-data";

export const metadata = {
  title: "Request a Quote",
  description: "Request an itemized, transparent cost estimate and proposal from XDY Media.",
};

const BENEFITS = [
  {
    title: "100% Itemized Breakdown",
    desc: "Every quote itemizes infrastructure costs, developer sprints, and third-party API tiers so you know exactly where every dollar goes.",
  },
  {
    title: "Fixed Milestone Guarantees",
    desc: "No unpredictable hourly charges or runaway invoices. Fixed milestone billing ensures budget predictability.",
  },
  {
    title: "Built-In Post-Launch SLA",
    desc: "Every fixed-price project includes 14 days of dedicated warranty bug fixing and performance monitoring post-handover.",
  },
];

export default function RequestQuotePage() {
  return (
    <>
      <section className="px-4 pb-10 pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">Transparent Pricing</span>
            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">
              Request a <span className="grad-text">Custom Quote</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[620px] text-[1.05rem] text-text-2">
              Receive a detailed, transparent, and itemized cost estimate tailored specifically to your deliverables, scale, and timeline.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1.35fr_1fr] items-start">
          <Reveal>
            <GlassCard className="rounded-3xl p-7 sm:p-9">
              <div className="mb-6 border-b border-white/10 pb-5">
                <h2 className="text-xl font-bold text-white">Project Estimation Details</h2>
                <p className="mt-1 text-sm text-text-3">Specify your scope and deliverables below to receive an itemized proposal.</p>
              </div>
              <QuoteForm />
            </GlassCard>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.08}>
              <GlassCard className="rounded-2xl p-6">
                <h2 className="text-[1.05rem] font-bold text-white">Our Quotation Standards</h2>
                <div className="mt-4 flex flex-col gap-4">
                  {BENEFITS.map((b, i) => (
                    <div key={i} className="flex items-start gap-3.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-wa-green/10 text-mint text-xs font-bold">
                        ✓
                      </span>
                      <div>
                        <h3 className="text-[0.92rem] font-semibold text-white">{b.title}</h3>
                        <p className="mt-0.5 text-[0.8rem] text-text-3 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.14}>
              <GlassCard className="rounded-2xl border-white/15 p-6">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-silver-2">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </span>
                  <h3 className="text-[1.02rem] font-bold text-white">24-Hour Turnaround</h3>
                </div>
                <p className="mt-3 text-[0.84rem] text-text-2 leading-relaxed">
                  Our solution architects review your requirements and calculate system overhead, API costs, and sprint milestones, delivering a comprehensive RFP or PDF proposal within 24 business hours.
                </p>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-text-3">
                <span>Looking for immediate estimation?</span>
                <a
                  href="/solutions"
                  className="font-semibold text-silver-blue hover:underline"
                >
                  View Solution Packages →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
