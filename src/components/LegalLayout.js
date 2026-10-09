import Reveal from "./Reveal";

export default function LegalLayout({ eyebrow = "Legal", title, updated, children }) {
  return (
    <section className="px-4 pb-20 pt-10">
      <div className="mx-auto max-w-[760px]">
        <Reveal>
          <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">{eyebrow}</span>
          <h1 className="text-[clamp(2rem,4.4vw,3rem)] font-extrabold tracking-tight text-white">{title}</h1>
          {updated && <p className="mt-3 text-[0.9rem] text-text-3">{updated}</p>}
        </Reveal>
        <Reveal delay={0.08} className="prose mt-10">
          {children}
        </Reveal>
      </div>
    </section>
  );
}
