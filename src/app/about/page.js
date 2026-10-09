import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import SectionHead from "@/components/SectionHead";

export const metadata = {
  title: "About Us",
  description: "XDY Media is a technology-driven digital growth and automation agency helping brands, creators, and businesses grow online.",
};

const STATS = [
  ["100+", "Clients served"],
  ["300+", "Projects delivered"],
  ["12+", "Service categories"],
  ["24/7", "Automation running"],
];

const VALUES = [
  { title: "Integrity", desc: "No fake engagement, no black-hat tactics, no guaranteed promises. We work within platform policies — always.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { title: "Technology", desc: "Automation, APIs, and data drive everything we do. We build systems that scale with your brand.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { title: "Transparency", desc: "Clear reporting, honest communication, and realistic expectations at every step.", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
  { title: "Security", desc: "Least-privilege access, encrypted data, and strict handling of credentials. Your security is non-negotiable.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pb-10 pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">About XDY Media</span>
            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">
              Technology-driven growth, <span className="grad-text">done honestly</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[620px] text-[1.05rem] text-text-2">
              We&apos;re a digital growth and automation agency helping creators, influencers, businesses, startups, agencies, and online brands build and scale their presence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-xl text-white">Who we are</h2>
            <p className="mt-4 text-[0.95rem] text-text-2">
              XDY Media is a <b className="text-white">Digital Growth &amp; Automation Agency</b> engineered for modern commerce. We bridge software engineering, intelligent messaging automation, and creative media into unified digital systems that grow your business.
            </p>
            <p className="mt-3 text-[0.95rem] text-text-2">
              Our work centers around three connected pillars: <b className="text-white">SOCIAL &amp; PLATFORM</b> (strategic platform operations, Telegram management &amp; bots, and legitimate account support), <b className="text-white">AUTOMATION &amp; AI</b> (custom n8n automation, API integrations, official WhatsApp Business Platform, and AI chatbots), and <b className="text-white">DIGITAL &amp; GROWTH</b> (custom websites, web apps, technical SEO, and data-driven growth strategy).
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-3.5">
            {STATS.map(([n, l]) => (
              <GlassCard key={l} className="rounded-2xl p-6 text-center">
                <div className="grad-text font-mono text-[1.9rem] font-bold">{n}</div>
                <p className="mt-1 text-[0.85rem] text-text-2">{l}</p>
              </GlassCard>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead eyebrow="Our Values" title="What we stand for" />
          <div className="grid gap-5 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.08}>
                <GlassCard className="flex h-full items-start gap-4 rounded-2xl p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-silver-2">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[1rem] text-white">{v.title}</h3>
                    <p className="mt-1.5 text-[0.87rem] text-text-2">{v.desc}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8">
        <Reveal className="mx-auto max-w-[1240px]">
          <GlassCard className="rounded-3xl px-8 py-14 text-center">
            <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] text-white">Let&apos;s work together</h2>
            <p className="mx-auto mt-4 max-w-xl text-[1rem] text-text-2">Tell us about your brand and goals — we&apos;ll show you what&apos;s possible.</p>
            <div className="mt-8">
              <Button href="/contact">Get in Touch</Button>
            </div>
          </GlassCard>
        </Reveal>
      </section>
    </>
  );
}
