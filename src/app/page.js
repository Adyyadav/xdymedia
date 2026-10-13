import Link from "next/link";
import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import SectionHead from "@/components/SectionHead";
import HeroHud from "@/components/HeroHud";
import { SERVICES } from "@/lib/site-data";
import { accentFor } from "@/lib/accent";

const CHECK = (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const ARROW = (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const PILLARS = [
  {
    tag: "Pillar 01 · Social & Platform",
    accent: "tg-blue",
    title: "Social Platforms, Telegram & Operations",
    desc: "Channel growth, custom Telegram bots & MTProto automation, Meta management, creative campaigns, and authorized platform recovery support.",
    points: [
      "Telegram Bot Engineering & Community Systems",
      "Telegram Channel Operations & Ads Scaling",
      "Social Growth & Meta Business Suite Management",
      "Content Strategy, Copywriting & Visual Identity",
      "Authorized Account Recovery & Platform Escalation",
    ],
    links: [
      { slug: "telegram-automation", label: "Telegram Bots ★" },
      { slug: "account-recovery", label: "Account Recovery ★" },
      { slug: "telegram-management", label: "Telegram Management ★" },
      { slug: "social-media", label: "Social Growth" },
    ],
  },
  {
    tag: "Pillar 02 · Automation & AI",
    accent: "wa-green",
    title: "n8n Workflows, APIs & AI Systems",
    desc: "Enterprise workflow engineering connecting your apps, databases, AI models, and communication channels with n8n, webhooks, and WhatsApp SaaS.",
    points: [
      "Custom n8n Automation Workflows & Integrations",
      "Robust REST API Development & Webhook Pipelines",
      "AI Knowledge Chatbots & Predictive Business Flows",
      "Official WhatsApp Business Platform & Team Inboxes",
      "Multi-Tenant SaaS Architecture & Process Automation",
    ],
    links: [
      { slug: "n8n-automation", label: "n8n & AI Workflows ★" },
      { slug: "api-automation", label: "API Integration ★" },
      { slug: "ai-automation", label: "AI & Chatbots ★" },
      { slug: "whatsapp-automation", label: "WhatsApp SaaS" },
    ],
  },
  {
    tag: "Pillar 03 · Digital & Growth",
    accent: "web3-purple",
    title: "Website Development & Growth Strategy",
    desc: "High-performance business websites, technical SEO dominance, data-driven CRO roadmaps, custom software, and Web3 community scaling.",
    points: [
      "High-Speed Business Websites & Conversion Landing Pages",
      "Technical SEO Audits & High-Intent Search Ranking",
      "Data-Driven Growth Strategies & Conversion Optimization",
      "Custom Software, Portals & Dedicated Web Tools",
      "Creative Studio Branding & Web3 Community Ecosystems",
    ],
    links: [
      { slug: "website-development", label: "Website Development ★" },
      { slug: "seo", label: "SEO ★" },
      { slug: "growth", label: "Growth Strategy ★" },
      { slug: "custom-software", label: "Custom Software" },
    ],
  },
];

const PILLAR_CARD_THEMES = {
  bluetick: {
    featuredCard:
      "border-[#0095F6]/50 bg-gradient-to-br from-white/[0.12] via-white/[0.04] to-[#0095F6]/[0.12] shadow-[0_0_35px_-6px_rgba(0,149,246,0.45)] hover:border-[#0095F6]/80 hover:shadow-[0_16px_40px_-6px_rgba(0,149,246,0.55)]",
    normalCard:
      "border-[#0095F6]/30 bg-gradient-to-br from-white/[0.06] to-white/[0.02] hover:border-[#0095F6]/55 hover:shadow-[0_12px_32px_-10px_rgba(0,149,246,0.3)]",
    countText: "text-[#0095F6]",
    titleHover: "group-hover:text-[#0095F6]",
    badgeBorder: "border-[#0095F6]/50",
    badgeBg: "bg-[#0095F6]/15",
    badgeText: "text-[#0095F6]",
    badgeDot: "bg-[#0095F6] shadow-[0_0_8px_#0095F6]",
    iconBox: "border-[#0095F6]/40 bg-[#0095F6]/15 text-[#0095F6] shadow-[0_0_12px_rgba(0,149,246,0.3)]",
    linkText: "text-[#0095F6]",
  },
  // 1 to 6: Blue theme (tg-blue, same as Pillar 1)
  "tg-blue": {
    featuredCard:
      "border-tg-blue/40 bg-gradient-to-br from-white/[0.10] via-white/[0.04] to-tg-blue/[0.08] shadow-[0_0_35px_-8px_rgba(56,189,248,0.32)] hover:border-tg-blue/70 hover:shadow-[0_16px_40px_-8px_rgba(56,189,248,0.42)]",
    normalCard:
      "border-tg-blue/20 bg-gradient-to-br from-white/[0.06] to-white/[0.02] hover:border-tg-blue/45 hover:shadow-[0_12px_32px_-10px_rgba(56,189,248,0.22)]",
    countText: "text-tg-blue",
    titleHover: "group-hover:text-tg-blue",
    badgeBorder: "border-tg-blue/40",
    badgeBg: "bg-tg-blue/15",
    badgeText: "text-tg-blue",
    badgeDot: "bg-tg-blue",
    iconBox: "border-tg-blue/30 bg-tg-blue/10 text-tg-blue",
    linkText: "text-tg-blue",
  },
  // 7 to 12: Green theme (wa-green / mint, same as Pillar 2)
  "wa-green": {
    featuredCard:
      "border-wa-green/40 bg-gradient-to-br from-white/[0.10] via-white/[0.04] to-wa-green/[0.08] shadow-[0_0_35px_-8px_rgba(37,211,102,0.32)] hover:border-wa-green/70 hover:shadow-[0_16px_40px_-8px_rgba(37,211,102,0.42)]",
    normalCard:
      "border-wa-green/20 bg-gradient-to-br from-white/[0.06] to-white/[0.02] hover:border-wa-green/45 hover:shadow-[0_12px_32px_-10px_rgba(37,211,102,0.22)]",
    countText: "text-mint",
    titleHover: "group-hover:text-mint",
    badgeBorder: "border-wa-green/40",
    badgeBg: "bg-wa-green/15",
    badgeText: "text-mint",
    badgeDot: "bg-wa-green",
    iconBox: "border-wa-green/30 bg-wa-green/10 text-mint",
    linkText: "text-mint",
  },
  // 13 to 18: Purple theme (web3-purple, same as Pillar 3)
  "web3-purple": {
    featuredCard:
      "border-web3-purple/40 bg-gradient-to-br from-white/[0.10] via-white/[0.04] to-web3-purple/[0.08] shadow-[0_0_35px_-8px_rgba(192,132,252,0.32)] hover:border-web3-purple/70 hover:shadow-[0_16px_40px_-8px_rgba(192,132,252,0.42)]",
    normalCard:
      "border-web3-purple/20 bg-gradient-to-br from-white/[0.06] to-white/[0.02] hover:border-web3-purple/45 hover:shadow-[0_12px_32px_-10px_rgba(192,132,252,0.22)]",
    countText: "text-web3-purple",
    titleHover: "group-hover:text-web3-purple",
    badgeBorder: "border-web3-purple/40",
    badgeBg: "bg-web3-purple/15",
    badgeText: "text-web3-purple",
    badgeDot: "bg-web3-purple",
    iconBox: "border-web3-purple/30 bg-web3-purple/10 text-web3-purple",
    linkText: "text-web3-purple",
  },
};

const FLOW = ["👤 CUSTOMER", "💻 WEBSITE CAPTURE", "💬 WHATSAPP SAAS", "✈️ TELEGRAM BOTS", "📊 CENTRAL CRM", "⚡ SALES CLOSED"];

const STEPS = [
  { title: "Submit Your Requirement", desc: "Tell us about your project, goals, and challenges. Fill out a brief form or book a consultation." },
  { title: "Consultation & Analysis", desc: "We review your requirements, analyze your current position, and identify opportunities for growth." },
  { title: "Strategy & Proposal", desc: "We craft a tailored strategy with clear deliverables, timelines, and pricing — no surprises." },
  { title: "Execution", desc: "Our team executes the plan with precision, keeping you updated at every milestone." },
  { title: "Reporting & Optimization", desc: "We track performance, report results, and continuously optimize for better outcomes.", wide: true },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-24 pt-10 sm:pt-16">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="glass mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[0.82rem] text-text-2">
              <span className="h-2 w-2 rounded-full bg-silver-blue" style={{ boxShadow: "0 0 0 4px rgba(168,180,192,0.15)" }} />
              Digital Systems &amp; Automation Engine
            </div>
            <h1 className="text-[clamp(2.4rem,5.4vw,4rem)] font-extrabold tracking-tight text-white">
              We Build Digital Systems That <span className="grad-text">Automate Your Business</span>.
            </h1>
            <p className="mt-6 max-w-[540px] text-[1.1rem] text-text-2">
              Websites, WhatsApp automation, API integrations, AI solutions, social media services, and custom digital infrastructure for modern businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button href="/start-a-project">Start a Project</Button>
              <Button href="/services" variant="ghost">Explore Services</Button>
            </div>
            <div className="mt-11 grid max-w-[480px] grid-cols-3 gap-4">
              {[["100+", "Clients served"], ["300+", "Systems deployed"], ["98%", "Automation efficiency"]].map(([n, l]) => (
                <div key={l}>
                  <b className="grad-text block text-[1.7rem]">{n}</b>
                  <span className="text-[0.85rem] text-text-3">{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <HeroHud />
            <div className="glass absolute -left-6 -bottom-8 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex" style={{ animation: "floatUp 5s ease-in-out infinite" }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-silver-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <div>
                <small className="block text-[0.7rem] text-text-3">Custom Web &amp; API</small>
                <b className="text-sm text-white">99.9% Uptime</b>
              </div>
            </div>
            <div className="glass absolute -right-4 -top-6 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex" style={{ animation: "floatUp 6s ease-in-out infinite 1s" }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-mint">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div>
                <small className="block text-[0.7rem] text-text-3">WhatsApp SaaS</small>
                <b className="text-sm text-white">&lt; 2s Instant Reply</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="px-4 pb-20">
        <div className="glass mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 rounded-2xl px-8 py-6">
          <span className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-text-3">Trusted by</span>
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm font-semibold text-text-3">
            {["CreatorHub", "BrandFlow", "StartupX", "GrowLab", "VentureOne", "ScaleUp"].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* OFM FLAGSHIP PROMO */}
      <section className="relative px-4 pb-24">
        <Reveal className="mx-auto max-w-[1240px]">
          <div className="group relative overflow-hidden rounded-3xl border border-[#00AFF0]/25 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-[#00AFF0]/[0.08] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00AFF0]/50 hover:shadow-[0_16px_48px_-12px_rgba(0,175,240,0.35)] sm:p-12">
            {/* Subtle radial cyan glow behind */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#00AFF0]/15 blur-3xl transition-opacity duration-300 group-hover:bg-[#00AFF0]/25" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#00D4FF]/10 blur-3xl" />

            <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#00AFF0]/30 bg-[#00AFF0]/10 px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-wider text-[#00C6FF]">
                    <span className="h-2 w-2 rounded-full bg-[#00AFF0] shadow-[0_0_8px_#00AFF0]" />
                    Flagship Creator Growth
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-center gap-3.5 lg:justify-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#00AFF0]/30 bg-[#00AFF0]/10 shadow-[0_0_20px_rgba(0,175,240,0.25)] transition-transform duration-300 group-hover:scale-105">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="ofmHomeGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00AFF0" />
                          <stop offset="1" stopColor="#00D4FF" />
                        </linearGradient>
                      </defs>
                      <circle cx="10" cy="8" r="3.6" stroke="url(#ofmHomeGrad)" strokeWidth="1.8" />
                      <path d="M3.5 19c0-3.038 2.91-5.5 6.5-5.5s6.5 2.462 6.5 5.5" stroke="url(#ofmHomeGrad)" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M19 8.2c-.6-.6-1.55-.6-2.15 0l-.35.35-.35-.35c-.6-.6-1.55-.6-2.15 0-.6.6-.6 1.55 0 2.15l2.5 2.5 2.5-2.5c.6-.6.6-1.55 0-2.15z" fill="url(#ofmHomeGrad)" />
                    </svg>
                  </div>
                  <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-white">
                    Full-Service <span className="bg-gradient-to-r from-[#00AFF0] to-[#00D4FF] bg-clip-text text-transparent">OnlyFans</span> Management
                  </h2>
                </div>

                <p className="mt-3 max-w-xl text-[0.96rem] leading-relaxed text-text-2">
                  Traffic funnels, content operations, fan management, and DM &amp; PPV monetization — run end to end by a dedicated team so creators can focus on creating.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/onlyfans-management"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#00AFF0] px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(0,175,240,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00C6FF] hover:shadow-[0_6px_28px_rgba(0,198,255,0.5)]"
                >
                  Explore OFM Services
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PILLARS */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            eyebrow="Strategic Architecture"
            title={<>Our Three Connected <span className="grad-text">Growth Pillars</span></>}
            desc="Rather than fragmented agency services, XDY Media delivers a unified technology ecosystem spanning digital infrastructure, business automation, and creative social growth."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {PILLARS.map((p, i) => {
              const a = accentFor(p.accent);
              return (
                <Reveal key={p.title} delay={i * 0.08}>
                  <GlassCard className={`h-full rounded-3xl p-7 ${a.border} border`}>
                    <span className={`inline-block rounded-full px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider ${a.bg} ${a.text}`}>
                      {p.tag}
                    </span>
                    <h3 className="mt-4 text-xl text-white">{p.title}</h3>
                    <p className="mt-3 text-[0.92rem] text-text-2">{p.desc}</p>
                    <ul className="mt-5 flex flex-col gap-2.5">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-[0.86rem] text-text-2">
                          <span className={a.text}>{CHECK}</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {p.links.map((l) => (
                        <Link key={l.slug} href={`/services/${l.slug}`} className={`inline-flex items-center gap-1.5 text-[0.86rem] font-semibold ${a.text} hover:opacity-80`}>
                          {l.label} {ARROW}
                        </Link>
                      ))}
                    </div>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            eyebrow="Complete Service Catalog"
            title={<>All 19 Core <span className="grad-text">Digital Capabilities</span></>}
            desc="Explore our complete spectrum of specialized digital services designed to automate operations, build infrastructure, and scale modern businesses."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              // platform-verification uses distinct bluetick theme
              // 1 to 7 (index 0-6): Blue theme (tg-blue)
              // 8 to 13 (index 7-12): Green theme (wa-green)
              // 14 to 19 (index 13-18): Purple theme (web3-purple)
              const themeKey =
                s.accent === "bluetick" || s.slug === "platform-verification"
                  ? "bluetick"
                  : i < 7
                  ? "tg-blue"
                  : i < 13
                  ? "wa-green"
                  : "web3-purple";
              const theme = PILLAR_CARD_THEMES[themeKey] || PILLAR_CARD_THEMES["tg-blue"];
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.07}>
                  <div
                    className={`group relative flex h-full flex-col justify-between rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                      s.featured ? theme.featuredCard : theme.normalCard
                    }`}
                  >
                    <div>
                      {/* Top row: Count + Priority Badge + Icon */}
                      <div className="flex items-center justify-between">
                        <span className={`font-mono text-[0.8rem] font-bold ${theme.countText}`}>
                          {s.count}
                        </span>
                        <div className="flex items-center gap-2">
                          {s.featured && (
                            <span className={`inline-flex items-center gap-1 rounded-full border ${theme.badgeBorder} ${theme.badgeBg} px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider ${theme.badgeText}`}>
                              <span className={`h-1.5 w-1.5 rounded-full ${theme.badgeDot}`} />
                              Priority
                            </span>
                          )}
                          <div className={`grid h-8 w-8 place-items-center rounded-xl border ${theme.iconBox} transition-transform duration-300 group-hover:scale-105`}>
                            <ServiceIcon slug={s.slug} />
                          </div>
                        </div>
                      </div>

                      {/* Title with hover color */}
                      <h3 className={`mt-3.5 text-[1.1rem] font-bold text-white transition-colors duration-200 ${theme.titleHover}`}>
                        {s.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2.5 text-[0.88rem] leading-relaxed text-text-2">
                        {s.desc}
                      </p>
                    </div>

                    {/* Link */}
                    <Link
                      href={`/services/${s.slug}`}
                      className={`mt-4 inline-flex items-center gap-1.5 text-[0.88rem] font-semibold ${theme.linkText} transition-all duration-200 hover:gap-2.5`}
                    >
                      {s.ctaLabel || "View details"}{s.featured && " ★"} {ARROW}
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FLAGSHIP FLOW */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            eyebrow="Flagship Multi-Channel Engine"
            title={<>Website + WhatsApp + Telegram: <span className="grad-text">Digital Automation Engine</span></>}
            desc="Why buy disconnected services? We build a unified commercial flywheel where your website captures buyers, WhatsApp and Telegram engage them instantly, and your centralized CRM closes the loop."
          />

          <Reveal className="mb-14 flex flex-wrap items-center justify-center gap-3">
            {FLOW.map((node, i) => (
              <div key={node} className="flex items-center gap-3">
                <div
                  className={`glass rounded-xl px-4 py-3 text-[0.82rem] font-semibold ${
                    node.includes("WHATSAPP") ? "border-wa-green/40 text-mint" : node.includes("TELEGRAM") ? "border-tg-blue/40 text-tg-blue" : node.includes("SALES") ? "border-white/30 text-white" : "text-text-2"
                  }`}
                >
                  {node}
                </div>
                {i < FLOW.length - 1 && <span className="text-text-3">→</span>}
              </div>
            ))}
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <GlassCard className="flex h-full flex-col justify-between rounded-3xl p-8">
                <div>
                  <span className="inline-block rounded-full bg-white/5 px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-silver-blue">Connected Flow</span>
                  <h3 className="mt-4 text-xl text-white">How the system operates</h3>
                  <ul className="mt-5 flex flex-col gap-3 text-[0.9rem] text-text-2">
                    <li><b className="text-white">The Website</b> captures high-intent traffic with modern UX, fast load speeds, and integrated inquiry triggers.</li>
                    <li><b className="text-white">WhatsApp SaaS</b> immediately engages buyers in &lt; 2 seconds with an interactive menu and shared team inboxes.</li>
                    <li><b className="text-white">Telegram Ecosystem</b> automates Web3 communities, crypto token-gating, payment bots, and broadcast channels.</li>
                    <li><b className="text-white">The CRM &amp; AI Brain</b> records customer requirements, purchase history, and automated qualification scores.</li>
                    <li><b className="text-white">The Sales Team</b> receives instant push notifications to close qualified opportunities without manual lag.</li>
                  </ul>
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/solutions">View Automation Package</Button>
                  <Button href="/services/telegram-automation" variant="ghost" className="border-tg-blue/40 text-tg-blue">Explore Telegram Hub</Button>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.1}>
              <GlassCard strong className="flex h-full flex-col justify-between rounded-3xl border-wa-green/25 p-8">
                <div>
                  <span className="inline-block rounded-full bg-wa-green/10 px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-mint">SaaS Architecture</span>
                  <h3 className="mt-4 text-xl text-white">XDY Multi-Tenant SaaS Platform</h3>
                  <p className="mt-3 text-[0.9rem] text-text-2">Deploy our proprietary all-in-one WhatsApp CRM &amp; Automation Platform with full logical isolation for every business branch or client account.</p>
                  <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-[0.78rem] leading-relaxed text-text-2">
                    <div>XDY WhatsApp SaaS Platform</div>
                    <div className="text-mint">&nbsp;&nbsp;├── Business A (Isolated DB · Agents · Webhooks)</div>
                    <div className="text-tg-blue">&nbsp;&nbsp;└── Business B (Isolated DB · Agents · Webhooks)</div>
                  </div>
                </div>
                <div className="mt-7">
                  <Button href="/services/whatsapp-automation" variant="ghost" className="border-wa-green/40 text-mint">Explore WhatsApp CRM →</Button>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            eyebrow="How It Works"
            title={<>From idea to <span className="grad-text">execution</span></>}
            desc="Our proven 5-step process ensures every project is delivered with clarity, strategy, and measurable results."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.08} className={s.wide ? "sm:col-span-2 sm:mx-auto sm:max-w-[50%] sm:w-full" : ""}>
                <GlassCard className="h-full rounded-2xl p-6">
                  <span className="grad-text font-mono text-2xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-[1.05rem] text-white">{s.title}</h3>
                  <p className="mt-2 text-[0.88rem] text-text-2">{s.desc}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-8">
        <Reveal className="mx-auto max-w-[1240px]">
          <GlassCard strong className="rounded-3xl px-8 py-16 text-center">
            <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,3.6vw,2.8rem)] text-white">
              Ready to grow your <span className="grad-text">digital presence</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1.02rem] text-text-2">
              Let&apos;s build something great together. Book a free consultation and discover how we can help you scale.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <Button href="/start-a-project">Start Your Project</Button>
              <Button href="/process" variant="ghost">See Our Process</Button>
            </div>
          </GlassCard>
        </Reveal>
      </section>
    </>
  );
}

function ServiceIcon({ slug }) {
  const paths = {
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
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[slug] || paths["website-development"]} />
    </svg>
  );
}
