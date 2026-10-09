import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

export const metadata = {
  title: "Process",
  description: "Our 5-step process: submit your requirement, consultation, strategy, execution, and reporting & optimization.",
};

const STEPS = [
  { title: "Submit Your Requirement", desc: "Tell us about your project, goals, and challenges through our contact form or a consultation booking." },
  { title: "Consultation & Analysis", desc: "We review your requirements, analyze your current position, and identify opportunities for growth." },
  { title: "Strategy & Proposal", desc: "You receive a tailored strategy with clear deliverables, timelines, and transparent pricing." },
  { title: "Execution", desc: "Our team executes with precision — keeping you updated at every milestone along the way." },
  { title: "Reporting & Optimization", desc: "We track performance, deliver clear reports, and continuously optimize to improve outcomes.", wide: true },
];

export default function ProcessPage() {
  return (
    <>
      <section className="px-4 pb-10 pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">How We Work</span>
            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">
              Our <span className="grad-text">5-step process</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[560px] text-[1.05rem] text-text-2">
              A transparent, structured approach from first contact to measurable results.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-[1000px] gap-5 sm:grid-cols-2">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08} className={s.wide ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[70%]" : ""}>
              <GlassCard className="h-full rounded-2xl p-7">
                <span className="grad-text font-mono text-2xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-[1.1rem] text-white">{s.title}</h3>
                <p className="mt-2.5 text-[0.9rem] text-text-2">{s.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 pb-8">
        <Reveal className="mx-auto max-w-[1240px]">
          <GlassCard className="rounded-3xl px-8 py-14 text-center">
            <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] text-white">Start your project today</h2>
            <p className="mx-auto mt-4 max-w-xl text-[1rem] text-text-2">Step one is simple — tell us what you need.</p>
            <div className="mt-8">
              <Button href="/start-a-project">Start Your Project</Button>
            </div>
          </GlassCard>
        </Reveal>
      </section>
    </>
  );
}
