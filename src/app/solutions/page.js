import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import SectionHead from "@/components/SectionHead";
import PricingCards from "@/components/PricingCards";
import RoiCalculator from "@/components/RoiCalculator";

export const metadata = {
  title: "Solutions & Pricing",
  description: "Flexible service packages for creators, startups, businesses, and enterprises. Custom solutions available on request.",
};

const LAYERS = [
  {
    tag: "Layer 01 · Projects",
    title: "One-Time Development",
    desc: "Fixed-scope custom software, business websites, and technical builds with full IP and code transfer.",
    items: ["Custom business & corporate websites", "Full-stack web apps & SaaS MVPs", "Custom REST APIs & database schemas", "Cloud hosting & server deployment"],
    cta: { label: "Explore Web Projects →", href: "/services/website-development" },
  },
  {
    tag: "Layer 02 · Setup & Automation",
    title: "WhatsApp & Telegram Automation",
    desc: "Turnkey onboarding on the official Meta WhatsApp Business Platform and custom Telegram bot & MTProto cluster provisioning.",
    items: ["WhatsApp Business Cloud API & verification", "Custom Telegram bot development & MTProto", "AI chatbot knowledge training & prompt tuning", "CRM & payment gateway webhook routing"],
    accent: true,
    cta: { label: "WhatsApp →", href: "/services/whatsapp-automation" },
    cta2: { label: "Telegram →", href: "/services/telegram-automation" },
  },
  {
    tag: "Layer 03 · Recurring SaaS",
    title: "Continuous Automation & SaaS",
    desc: "Predictable monthly subscriptions powering your WhatsApp CRM, live chatbots, server maintenance, and support.",
    items: ["Multi-agent shared team inbox", "24/7 AI chatbot hosting & uptime", "Ongoing workflow optimization", "Cloud infrastructure maintenance"],
    cta: { label: "View SaaS Subscriptions →", href: "#pricing" },
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">
              Service Packages
            </span>
            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">
              Flexible <span className="grad-text">solutions</span> for every stage
            </h1>
            <p className="mx-auto mt-6 max-w-[620px] text-[1.05rem] text-text-2">
              No one-size-fits-all pricing. Choose a starting package or request a fully custom quote tailored to your goals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THREE LAYERS */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            eyebrow="Engagement Models"
            title={<>Three Clear <span className="grad-text">Commercial Layers</span></>}
            desc="Whether you need a one-time build, an automated setup, or a recurring SaaS platform — our engagement models are clear, scalable, and transparent."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {LAYERS.map((l, i) => (
              <Reveal key={l.title} delay={i * 0.08}>
                <GlassCard className={`flex h-full flex-col rounded-3xl border p-7 ${l.accent ? "border-wa-green/30" : "border-white/10"}`}>
                  <span className={`inline-block w-fit rounded-full px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider ${l.accent ? "bg-wa-green/10 text-mint" : "bg-white/5 text-silver-blue"}`}>
                    {l.tag}
                  </span>
                  <h3 className="mt-4 text-xl text-white">{l.title}</h3>
                  <p className="mt-3 text-[0.9rem] text-text-2">{l.desc}</p>
                  <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                    {l.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-[0.85rem] text-text-2">
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0 text-mint">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-2">
                    <Button href={l.cta.href} variant="ghost" className="flex-1 text-center">{l.cta.label}</Button>
                    {l.cta2 && <Button href={l.cta2.href} variant="ghost" className="flex-1 text-center text-tg-blue border-tg-blue/40">{l.cta2.label}</Button>}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-4 pb-24">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            eyebrow="WhatsApp Platform Pricing"
            title={<>XDY WhatsApp SaaS <span className="grad-text">Subscription Plans</span></>}
            desc="Scale your customer communications with structured SaaS plans designed for small businesses up to high-volume enterprises."
          />
          <PricingCards />

          <Reveal className="mt-10 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0 text-silver-blue">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-[0.88rem] text-text-2">
              <b className="text-white">Clear Cost Separation:</b> Your XDY WhatsApp SaaS subscription covers our software tools, CRM platform, AI chatbots, and maintenance. Meta&apos;s official per-conversation messaging charges (Marketing, Utility, Authentication, Service) are billed directly through your Meta Business Manager payment method according to official Meta rates.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <RoiCalculator />
          </Reveal>
        </div>
      </section>

      {/* CUSTOM CTA */}
      <section className="px-4 pb-8">
        <Reveal className="mx-auto max-w-[1240px]">
          <GlassCard className="rounded-3xl px-8 py-14 text-center">
            <h2 className="mx-auto max-w-2xl text-[clamp(1.7rem,3.2vw,2.4rem)] text-white">
              Need something <span className="grad-text">fully custom?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1rem] text-text-2">
              If none of the pre-set tiers fit your operational architecture, request a bespoke consultation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <Button href="/request-a-quote">Request a Quote</Button>
              <Button href="/book-a-consultation" variant="ghost">Book a Consultation</Button>
            </div>
          </GlassCard>
        </Reveal>
      </section>
    </>
  );
}
