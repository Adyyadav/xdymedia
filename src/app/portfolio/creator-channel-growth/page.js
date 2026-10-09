import Link from "next/link";
import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

export const metadata = {
  title: "Case Study — Creator Channel Growth",
  description: "A detailed case study showing client objective, strategy, implementation, and results.",
};

const META = [
  ["Client", "Creator brand (anon.)"],
  ["Services", "Social Media Management"],
  ["Timeline", "6 months"],
  ["Objective", "Growth + consistency"],
];

const SECTIONS = [
  { title: "The Problem", body: "The client had an engaged audience but inconsistent posting, unclear content direction, and no growth system. Engagement was plateauing and time was being spent on manual, repetitive tasks." },
  { title: "Our Strategy", body: "We built a content strategy around audience research and competitor analysis, introduced a structured content calendar, optimized the profile, and set up scheduling and reporting workflows." },
  { title: "Implementation", body: "Content planning, scheduling, community engagement, and monthly analytics reporting. All work was done with client-owned accounts and proper access — no shortcuts, no fake engagement." },
  { title: "Results & Timeline", body: "Over 6 months, the client saw improved engagement consistency and content output. Results varied month to month and depended on platform algorithms and content performance." },
];

export default function CaseStudyPage() {
  return (
    <>
      <section className="px-4 pb-10 pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">Social Media</span>
            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">
              Creator channel growth &amp; <span className="grad-text">management</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[600px] text-[1.05rem] text-text-2">
              How we helped a creator brand grow and manage their presence across Instagram and YouTube.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-16">
        <Reveal className="mx-auto grid max-w-[900px] grid-cols-2 gap-4 sm:grid-cols-4">
          {META.map(([label, value]) => (
            <GlassCard key={label} className="rounded-xl p-4 text-center">
              <small className="block text-[0.68rem] uppercase tracking-wide text-text-3">{label}</small>
              <b className="mt-1 block text-[0.88rem] text-white">{value}</b>
            </GlassCard>
          ))}
        </Reveal>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto flex max-w-[820px] flex-col gap-6">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08}>
              <GlassCard className="rounded-2xl p-7">
                <h2 className="text-[1.1rem] text-white">{s.title}</h2>
                <p className="mt-3 text-[0.92rem] text-text-2">{s.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16">
        <Reveal className="mx-auto max-w-[820px] flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0 text-silver-blue">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-[0.88rem] text-text-2">
            <b className="text-white">Honest reporting:</b> We share genuine outcomes only. Every case study is published with client permission, and metrics depend on platform, account status, and applicable policies.
          </p>
        </Reveal>
      </section>

      <section className="px-4 pb-8">
        <Reveal className="mx-auto max-w-[1240px]">
          <GlassCard className="rounded-3xl px-8 py-14 text-center">
            <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] text-white">Ready to write your success story?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[1rem] text-text-2">Let&apos;s talk about your goals.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <Button href="/start-a-project">Start a Project</Button>
              <Button href="/portfolio" variant="ghost">Back to Portfolio</Button>
            </div>
          </GlassCard>
        </Reveal>
      </section>
    </>
  );
}
