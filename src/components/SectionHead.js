import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, desc, center = true, className = "" }) {
  return (
    <Reveal
      className={`mx-auto mb-12 max-w-2xl ${center ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">
          {!center && <span className="h-[2px] w-6 rounded bg-gradient-to-r from-white to-silver-3" />}
          {eyebrow}
        </span>
      )}
      <h2 className="grad-text text-[clamp(1.9rem,3.6vw,2.8rem)]">{title}</h2>
      {desc && <p className="mt-4 text-[1.02rem] text-text-2">{desc}</p>}
    </Reveal>
  );
}
