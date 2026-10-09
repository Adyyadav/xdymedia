import Reveal from "@/components/Reveal";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata = {
  title: "Portfolio",
  description: "Case studies and client results across social media, branding, design, automation, SEO, marketing, and Web3.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="px-4 pb-10 pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">Our Work</span>
            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">
              Selected <span className="grad-text">case studies</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[560px] text-[1.05rem] text-text-2">
              Real projects, real results. Filter by category to see how we&apos;ve helped brands grow.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-[1240px]">
          <PortfolioGrid />
        </div>
      </section>

      <section className="px-4 pb-8">
        <Reveal className="mx-auto max-w-[1000px] flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0 text-silver-blue">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-[0.88rem] text-text-2">
            <b className="text-white">Note on results:</b> We only display genuine client results with permission. Outcomes vary and depend on platform, account status, and applicable policies.
          </p>
        </Reveal>
      </section>
    </>
  );
}
