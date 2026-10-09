import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import StartProjectForm from "@/components/StartProjectForm";
import { SITE } from "@/lib/site-data";

export const metadata = {
  title: "Start a Project",
  description: "Initiate your digital growth, automation, or custom software project with XDY Media.",
};

const STEPS = [
  { step: "01", title: "Technical Scoping", desc: "We review your requirements and draft an architectural scope & timeline within 24 hours." },
  { step: "02", title: "Milestone Roadmap", desc: "Transparent sprint deliverables and fixed milestones before code or marketing begins." },
  { step: "03", title: "Agile Execution", desc: "Weekly progress updates, staging previews, and real-time communication on Telegram/Slack." },
  { step: "04", title: "Deployment & Warranty", desc: "Seamless production launch backed by a 14-day defect-free guarantee and post-launch SLA." },
];

export default function StartProjectPage() {
  return (
    <>
      <section className="px-4 pb-10 pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">Project Initiation</span>
            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">
              Start your <span className="grad-text">project</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[620px] text-[1.05rem] text-text-2">
              Tell us about your objectives, scale, and timeline. Our engineering and growth leads will review your specs and deliver an actionable technical proposal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1.35fr_1fr] items-start">
          <Reveal>
            <GlassCard className="rounded-3xl p-7 sm:p-9">
              <div className="mb-6 border-b border-white/10 pb-5">
                <h2 className="text-xl font-bold text-white">Project Scope &amp; Specifications</h2>
                <p className="mt-1 text-sm text-text-3">Fill out the project details below to receive a formal implementation plan.</p>
              </div>
              <StartProjectForm />
            </GlassCard>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.08}>
              <GlassCard className="rounded-2xl p-6">
                <h2 className="text-[1.05rem] font-bold text-white">Our Execution Process</h2>
                <div className="mt-4 flex flex-col gap-4">
                  {STEPS.map((s) => (
                    <div key={s.step} className="flex items-start gap-3.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 font-mono text-[0.75rem] font-bold text-silver-blue">
                        {s.step}
                      </span>
                      <div>
                        <h3 className="text-[0.92rem] font-semibold text-white">{s.title}</h3>
                        <p className="mt-0.5 text-[0.8rem] text-text-3 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.14}>
              <GlassCard className="rounded-2xl border-silver-blue/20 p-6">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-silver-2">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </span>
                  <h3 className="text-[1.02rem] font-bold text-white">Client Assurance &amp; Security</h3>
                </div>
                <ul className="mt-3.5 flex flex-col gap-2 text-[0.84rem] text-text-2">
                  <li className="flex items-center gap-2">
                    <span className="text-mint">✓</span> Strict Mutual Non-Disclosure Agreement (NDA)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-mint">✓</span> Milestone-driven delivery with zero hidden charges
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-mint">✓</span> Direct dedicated technical project manager
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-mint">✓</span> Full source code &amp; IP ownership transferred to you
                  </li>
                </ul>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-text-3">
                <span>Prefer urgent messaging?</span>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-mint hover:underline"
                >
                  Direct WhatsApp Chat →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
