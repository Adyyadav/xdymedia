import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import SectionHead from "@/components/SectionHead";
import { SERVICES, MEGA_MENU } from "@/lib/site-data";
import { accentFor } from "@/lib/accent";
import Link from "next/link";

export const metadata = {
  title: "All Services",
  description: "Explore our complete spectrum of specialized digital services — website development, WhatsApp & Telegram automation, social growth, AI, SEO, and more.",
};

const PILLAR_TITLES = {
  "Social & Platform": "social",
  "Automation & AI": "automation",
  "Digital & Growth": "digital",
  "Pillar 01 · Social & Platform": "social",
  "Pillar 02 · Automation & AI": "automation",
  "Pillar 03 · Digital & Growth": "digital",
};

const ICONS = {
  "platform-verification": "M12 2l2.4 2.5 3.4-.6 1.4 3.1 3.2 1.3-.7 3.4 2.1 2.8-2.1 2.8.7 3.4-3.2 1.3-1.4 3.1-3.4-.6L12 22l-2.4-2.5-3.4.6-1.4-3.1-3.2-1.3.7-3.4L.2 9.5l2.1-2.8-.7-3.4 3.2-1.3 1.4-3.1 3.4.6L12 2zm-1.5 13.5l6-6-1.4-1.4-4.6 4.6-2.1-2.1-1.4 1.4 3.5 3.5z",
  "website-development": "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "whatsapp-automation": "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  "n8n-automation": "M4 4h4v4H4V4zm12 0h4v4h-4V4zM4 16h4v4H4v-4zm12 0h4v4h-4v-4zM8 6h8M6 8v8m12-8v8M8 18h8",
  "social-media": "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  "meta-business-suite": "M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z",
  "telegram-management": "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
  "telegram-automation": "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
  "ai-automation": "M13 10V3L4 14h7v7l9-11h-7z",
  "api-automation": "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  "account-recovery": "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  creative: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  seo: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  "content-marketing": "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
  growth: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  "custom-software": "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  web3: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  "crm-automation": "M17 20h2a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0014.586 3H7a2 2 0 00-2 2v3m6 14H5a2 2 0 01-2-2V9a2 2 0 012-2h2.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0116 13.414V18a2 2 0 01-2 2zm-5-5h.01M12 15h.01",
  "business-process-automation": "M4 5a1 1 0 000 2h1v1a2 2 0 002 2h8a2 2 0 002-2V7h1a1 1 0 100-2H4zm3 3V7h8v1H7zm-2 4h2a1 1 0 010 2H5a1 1 0 010-2zm0 4h2a1 1 0 010 2H5a1 1 0 010-2zm6-4h6a1 1 0 010 2h-6a1 1 0 010-2zm0 4h6a1 1 0 010 2h-6a1 1 0 010-2z",
};

const ARROW = (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function ServicesIndexPage() {
  return (
    <>
      <section className="px-4 pb-10 pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">
              Complete Service Catalog
            </span>
            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">
              All <span className="grad-text">Services</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[620px] text-[1.05rem] text-text-2">
              Every specialized capability we offer, organized across three connected pillars — social &amp; platform, automation &amp; AI, and digital &amp; growth.
            </p>
          </Reveal>
        </div>
      </section>

      {MEGA_MENU.map((pillar, pIdx) => (
        <section key={pillar.title} className="px-4 pb-20">
          <div className="mx-auto max-w-[1240px]">
            <SectionHead center={false} eyebrow={pillar.title} title={pillarHeading(pillar.pillarKey || PILLAR_TITLES[pillar.title])} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pillar.items.map((slug, i) => {
                const s = SERVICES.find((x) => x.slug === slug);
                if (!s) return null;
                const a = accentFor(s.accent);
                return (
                  <Reveal key={slug} delay={(i % 3) * 0.06}>
                    <GlassCard className={`relative h-full rounded-2xl border p-6 ${s.featured ? `${a.border} ${a.glow}` : "border-white/10"}`}>
                      <div className={`mb-4 grid h-11 w-11 place-items-center rounded-xl ${a.bg} ${a.text}`}>
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d={ICONS[s.slug]} />
                        </svg>
                      </div>
                      <h3 className="text-[1.05rem] text-white">
                        {s.title} {s.featured && <span className={a.text}>★</span>}
                      </h3>
                      <p className="mt-2.5 text-[0.87rem] text-text-2">{s.desc}</p>
                      <Link href={`/services/${s.slug}`} className={`mt-4 inline-flex items-center gap-1.5 text-[0.88rem] font-semibold ${a.text} hover:gap-2.5 transition-all`}>
                        {s.ctaLabel || "View details"} {s.featured && "★"} {ARROW}
                      </Link>
                    </GlassCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

function pillarHeading(kind) {
  if (kind === "social") return <>Social, Platform &amp; <span className="grad-text">Account Operations</span></>;
  if (kind === "automation") return <>Intelligent Automation &amp; <span className="grad-text">AI Systems</span></>;
  return <>Digital Presence &amp; <span className="grad-text">Growth Strategy</span></>;
}
