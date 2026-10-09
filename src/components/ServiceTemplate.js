import Reveal from "./Reveal";
import GlassCard from "./GlassCard";
import Button from "./Button";
import SectionHead from "./SectionHead";
import FlowDiagram from "./FlowDiagram";
import FaqAccordion from "./FaqAccordion";
import WhatsAppSimulator from "./WhatsAppSimulator";
import TelegramManagement from "./TelegramManagement";
import N8nWorkflowVisualizer from "./N8nWorkflowVisualizer";
import N8nServiceSelectorForm from "./N8nServiceSelectorForm";
import UseCasesGrid from "./UseCasesGrid";

// Data-driven service page: `hero` renders first, then each entry in
// `blocks` renders in order by `type`. This lets every service page — from
// a simple 6-card page to Telegram's 8-section flagship spread — be
// expressed as data instead of one-off JSX, so future edits stay in one file.
export default function ServiceTemplate({ hero, blocks = [] }) {
  return (
    <>
      <Hero hero={hero} />
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </>
  );
}

function Block({ block }) {
  switch (block.type) {
    case "notice":
      return <NoticeBand notice={block} />;
    case "overview":
      return <Overview overview={block} />;
    case "features":
      return <FeatureGrid features={block} />;
    case "flow":
      return <FlowSection flow={block} />;
    case "techStack":
      return <TechStack techStack={block} />;
    case "waSimulator":
      return <WaSimulatorSection block={block} />;
    case "telegramManagement":
      return <TelegramManagement id={block.id} />;
    case "n8nVisualizer":
      return <N8nWorkflowVisualizer block={block} />;
    case "n8nSelector":
      return <N8nServiceSelectorForm block={block} />;
    case "useCases":
      return <UseCasesGrid useCases={block} />;
    case "faq":
      return <FaqSection faq={block} />;
    case "cta":
      return <CtaBand cta={block} />;
    default:
      return null;
  }
}

function Hero({ hero }) {
  return (
    <section className="px-4 pb-10 pt-10">
      <div className="mx-auto max-w-[900px] text-center">
        <Reveal>
          <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">
            {hero.eyebrow}
          </span>
          <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">{hero.title}</h1>
          <p className="mx-auto mt-6 max-w-[620px] text-[1.05rem] text-text-2">{hero.subhead}</p>
          {(hero.ctaPrimary || hero.ctaSecondary) && (
            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              {hero.ctaPrimary && <Button href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Button>}
              {hero.ctaSecondary && <Button href={hero.ctaSecondary.href} variant="ghost">{hero.ctaSecondary.label}</Button>}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function NoticeBand({ notice }) {
  return (
    <section className="px-4 pb-4">
      <Reveal className="mx-auto flex max-w-[1000px] items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0 text-silver-blue">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-[0.88rem] text-text-2">
          <b className="text-white">{notice.title}</b> {notice.text}
        </p>
      </Reveal>
    </section>
  );
}

function Overview({ overview }) {
  const hasAside = Boolean(overview.stats);
  return (
    <section id={overview.id} className="px-4 py-16">
      <div className={`mx-auto grid max-w-[1100px] items-center gap-10 ${hasAside ? "lg:grid-cols-2" : "max-w-[760px] text-center"}`}>
        <Reveal>
          {overview.eyebrow && (
            <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">
              {overview.eyebrow}
            </span>
          )}
          <h2 className="text-[1.6rem] text-white">{overview.heading}</h2>
          {overview.paragraphs.map((p, i) => (
            <p key={i} className="mt-3.5 text-[0.94rem] text-text-2">{p}</p>
          ))}
        </Reveal>
        {overview.stats && (
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            {overview.stats.map((s) => (
              <GlassCard key={s.label} className="rounded-2xl p-6 text-center">
                <div className="grad-text font-mono text-[1.7rem] font-bold">{s.value}</div>
                <p className="mt-1 text-[0.83rem] text-text-2">{s.label}</p>
              </GlassCard>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}

function WaSimulatorSection({ block }) {
  return (
    <section className="px-4 pb-20">
      <div className="mx-auto max-w-[560px]">
        {block.heading && <SectionHead eyebrow={block.eyebrow} title={block.heading} desc={block.desc} />}
        <WhatsAppSimulator />
      </div>
    </section>
  );
}

function FeatureGrid({ features }) {
  const cols = features.items.length >= 5 ? "lg:grid-cols-3" : "lg:grid-cols-2";
  return (
    <section className="px-4 pb-20">
      <div className="mx-auto max-w-[1240px]">
        {features.heading && <SectionHead eyebrow={features.eyebrow} title={features.heading} desc={features.desc} />}
        <div className={`grid gap-5 sm:grid-cols-2 ${cols}`}>
          {features.items.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06}>
              <GlassCard className="h-full rounded-2xl p-6">
                <h3 className="text-[1rem] text-white">{f.title}</h3>
                <p className="mt-2.5 text-[0.87rem] text-text-2">{f.desc}</p>
                {f.bullets && (
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[0.8rem] text-text-3">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-3" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowSection({ flow }) {
  return (
    <section className="px-4 pb-20">
      <div className="mx-auto max-w-[1240px]">
        <SectionHead eyebrow={flow.eyebrow} title={flow.heading} desc={flow.desc} />
        <FlowDiagram nodes={flow.nodes} />
      </div>
    </section>
  );
}

function TechStack({ techStack }) {
  return (
    <section className="px-4 pb-20">
      <div className="mx-auto max-w-[1240px]">
        <SectionHead eyebrow={techStack.eyebrow || "Technology"} title={techStack.heading || "Our technology stack"} desc={techStack.desc} center={false} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.columns.map((col, i) => (
            <Reveal key={col.title} delay={(i % 4) * 0.06}>
              <GlassCard className="h-full rounded-2xl p-6">
                <h3 className="text-[0.95rem] text-white">{col.title}</h3>
                {col.desc && <p className="mt-2 text-[0.8rem] text-text-2">{col.desc}</p>}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {col.badges.map((b) => (
                    <span key={b} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.72rem] text-text-2">
                      {b}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection({ faq }) {
  return (
    <section className="px-4 pb-20">
      <div className="mx-auto max-w-[820px]">
        <SectionHead eyebrow="FAQ" title={faq.heading || "Common questions"} />
        <FaqAccordion groups={[{ title: "", items: faq.items }]} />
      </div>
    </section>
  );
}

function CtaBand({ cta }) {
  return (
    <section className="px-4 pb-8">
      <Reveal className="mx-auto max-w-[1240px]">
        <GlassCard className="rounded-3xl px-8 py-14 text-center">
          <h2 className="mx-auto max-w-2xl text-[clamp(1.7rem,3.2vw,2.4rem)] text-white">{cta.heading}</h2>
          {cta.desc && <p className="mx-auto mt-4 max-w-xl text-[1rem] text-text-2">{cta.desc}</p>}
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Button href={cta.primary.href}>{cta.primary.label}</Button>
            {cta.secondary && <Button href={cta.secondary.href} variant="ghost">{cta.secondary.label}</Button>}
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
