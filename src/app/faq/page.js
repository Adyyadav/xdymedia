import Link from "next/link";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about XDY Media services, account recovery, automation, SEO, pricing, and more.",
};

const GROUPS = [
  {
    title: "General",
    items: [
      {
        q: "What services does XDY Media offer?",
        a: "XDY Media is a Digital Growth & Automation Agency operating across three connected pillars: SOCIAL & PLATFORM (social media growth, Telegram operations, and legitimate account recovery support), AUTOMATION & AI (custom n8n workflows, API integrations, WhatsApp SaaS, and AI chatbots), and DIGITAL & GROWTH (custom websites, web software, SEO, and growth strategy).",
      },
      {
        q: "Who do you work with?",
        a: "We partner with businesses, startups, e-commerce brands, clinics, agencies, and high-growth creators looking to build resilient digital infrastructure and automate customer acquisition.",
      },
      {
        q: "How much do services cost?",
        a: (
          <>
            We offer three transparent revenue models: one-time project fees (for custom websites and software), implementation fees (for WhatsApp onboarding and CRM wiring), and monthly SaaS subscriptions (for continuous WhatsApp CRM and automation hosting). See our{" "}
            <Link href="/solutions" className="text-silver-blue underline underline-offset-2">Solutions &amp; Packages</Link> page for details.
          </>
        ),
      },
      {
        q: "Do you guarantee results?",
        a: "No. Results depend on the platform, account status, client requirements, eligibility, and applicable policies. We guarantee honest engineering, robust architecture, and transparent communication.",
      },
    ],
  },
  {
    title: "WhatsApp Automation & SaaS",
    items: [
      {
        q: "How does WhatsApp Business API differ from the free WhatsApp app?",
        a: "The standard WhatsApp app is restricted to single devices and manual messaging. The official WhatsApp Business Platform (Cloud API) allows multiple team agents to respond from a single number, connects with automated AI chatbots, processes webhooks, integrates with databases and CRMs, and delivers automated broadcast alerts.",
      },
      {
        q: "How are WhatsApp messaging charges handled?",
        a: "Charges are separated cleanly: XDY Media bills for the SaaS software platform, inbox tools, AI bots, and ongoing maintenance. Meta's official per-conversation messaging rates are billed directly through your own Meta Business Manager account with complete transparency.",
      },
      {
        q: "Can WhatsApp integrate with my website and CRM?",
        a: "Yes. In fact, our flagship offering is the Digital Business Automation Package, connecting your custom website directly to WhatsApp automation, lead qualification workflows, and CRM database synchronization.",
      },
    ],
  },
  {
    title: "n8n Automation & AI Workflows",
    items: [
      {
        q: "What does XDY Media's n8n automation service include?",
        a: "We engineer custom n8n workflows connecting your apps, REST APIs, databases, AI models, and communication platforms (WhatsApp, Telegram, Slack, Email). Capabilities span multi-step automation, real-time webhooks, AI agent development, CRM synchronization, self-hosted Docker deployments, and debugging existing broken workflows.",
      },
      {
        q: "Why choose self-hosted n8n over Zapier or Make?",
        a: "Self-hosted n8n operates inside your own private cloud or VPS, providing 100% data ownership and privacy compliance. Crucially, self-hosted instances do not charge per-task execution fees, eliminating the steep pricing penalties of proprietary automation tools as workflow volume scales.",
      },
      {
        q: "Can n8n connect with proprietary or internal tools without pre-built nodes?",
        a: "Yes. If your internal application or third-party service exposes a documented REST API, GraphQL endpoint, or webhook system, we engineer custom HTTP Request integrations, authentication handlers, and data transformation scripts in n8n.",
      },
      {
        q: "Do you offer self-hosting deployment and server management for n8n?",
        a: "Yes. We configure dedicated Linux VPS instances (Hetzner, AWS, DigitalOcean) with containerized Docker deployments, custom domains, automated SSL/TLS certificates, PostgreSQL queue databases, and automated backup routines.",
      },
      {
        q: "Can we hire XDY Media for a single integration rather than a full system?",
        a: "Yes. We support both targeted single-integration projects (such as wiring a specific CRM webhook or AI customer support bot) and full-scale operational automation architectures.",
      },
    ],
  },
  {
    title: "Telegram, Web3 & Community Automation",
    items: [
      {
        q: "How do XDY's custom Telegram bots differ from standard off-the-shelf bots?",
        a: "We build production-grade custom backend ecosystems (Python, FastAPI, Node.js, PostgreSQL, Redis) connected to Telegram's Bot API or MTProto protocol. Rather than rigid preset templates, our bots support custom databases, AI knowledge retrieval (RAG), cryptographic wallet verification, payment webhooks, and multi-account task queues.",
      },
      {
        q: "Can you build Telegram bots that process payments and monetize digital content?",
        a: "Yes. We engineer native Telegram Stars monetization for friction-free in-app digital product delivery, paid channel/group subscriptions, and content paywalls. We also integrate global fiat processors (Stripe, Razorpay) and cryptocurrency (USDT, TON) checkout with automated entitlement tracking.",
      },
      {
        q: "How does Web3 holder verification and token-gating work on Telegram?",
        a: "When a member joins your community portal, our verification bot challenges them to connect their wallet (MetaMask, Phantom, Tonkeeper) and sign a non-transactional verification proof. Our backend validates their NFT or token balances against the blockchain in real-time, grants the VIP Telegram role, and automatically revokes access if the assets are sold.",
      },
      {
        q: "What is Multi-Account MTProto Infrastructure?",
        a: "When operations require managing multiple channels, distributing scheduled content, or handling high-volume operational tasks beyond Bot API constraints, we build Telethon/MTProto client clusters with string session isolation, distributed Redis task queues, and automated flood-wait backoff algorithms.",
      },
      {
        q: "Can Telegram be unified with our website and WhatsApp?",
        a: "Yes! One of XDY Media's core specializations is unifying Website + WhatsApp + Telegram into one central backend and CRM layer. Inbound leads and community inquiries from all three channels route into a single operational brain with automated qualification and real-time team alerts.",
      },
      {
        q: "Can you handle our other platforms like Telegram while we focus on Instagram?",
        a: "Yes! While you focus on starting and growing your Instagram, we’re ready to handle your other platforms for you. Telegram is one of our primary specialisms — we handle Telegram Ads, channel management, audience growth, content posting, and overall channel optimization to help you achieve the best possible reach and turn that audience into paying subscribers.",
      },
      {
        q: "Can you also manage and monetize our Telegram subscription channel?",
        a: "Yes. We can handle your Telegram subscription channel so you can start monetizing your content directly through Telegram and build an additional revenue stream. From running Telegram Ads and managing channels to growing your audience and handling subscriptions, we manage the complete Telegram side of your business while you focus on creating and growing your brand.",
      },
    ],
  },
  {
    title: "Meta Business Suite Management",
    items: [
      {
        q: "What does Meta Business Suite Management include?",
        a: "We manage your Instagram and Facebook presence through a centralized Meta Business Suite workflow — covering account setup & integration, content calendar scheduling (Posts, Reels, Stories), DM and comment inbox management, reach & engagement analytics, and Meta Ads Manager integration.",
      },
      {
        q: "Can you manage multiple Instagram and Facebook accounts?",
        a: "Yes. We handle multi-account workflows, Business Portfolio assets, team permissions, and cross-account publishing across your Meta presence.",
      },
    ],
  },
  {
    title: "Website Development & Infrastructure",
    items: [
      {
        q: "Do I own the website source code and database?",
        a: "Yes, 100%. Upon project completion, all intellectual property, source code repositories, databases, and deployment configs are transferred directly to your organization. No proprietary lock-in.",
      },
      {
        q: "What technologies do you develop with?",
        a: "Our modern stack includes HTML5, CSS3, JavaScript, React / Next.js, Python, Flask, FastAPI, Node.js, PostgreSQL, MySQL, Redis, Docker, and Linux/AWS cloud infrastructure.",
      },
    ],
  },
  {
    title: "Account Recovery",
    items: [
      {
        q: "Can you guarantee my account will be recovered?",
        a: "No. Recovery is never guaranteed — final decisions belong to the relevant platform. We provide legitimate appeal assistance only, and we never bypass platform security.",
      },
      {
        q: "Do you need my password or login details?",
        a: "Never send passwords, 2FA codes, recovery codes, or API secrets through forms or chats. We only work with legitimate owners using authorized access.",
      },
    ],
  },
  {
    title: "Automation & Security",
    items: [
      {
        q: "How do you automate social media?",
        a: "Using official APIs, authorized integrations, and client-owned systems — never scraping, credential theft, or security circumvention.",
      },
      {
        q: "Is my data safe with you?",
        a: (
          <>
            Yes. We use HTTPS, encrypted storage, least-privilege access, and strict data retention controls. See our{" "}
            <Link href="/legal/privacy" className="text-silver-blue underline underline-offset-2">Privacy Policy</Link>.
          </>
        ),
      },
    ],
  },
  {
    title: "Process & Payments",
    items: [
      {
        q: "How do we get started?",
        a: (
          <>
            Submit your requirement via the <Link href="/start-a-project" className="text-silver-blue underline underline-offset-2">Start a Project</Link> form or <Link href="/book-a-consultation" className="text-silver-blue underline underline-offset-2">book a consultation</Link>. We&apos;ll analyze, propose, and begin execution.
          </>
        ),
      },
      {
        q: "What is your refund policy?",
        a: (
          <>
            See our <Link href="/legal/refunds" className="text-silver-blue underline underline-offset-2">Refund &amp; Cancellation Policy</Link> for full details. Digital services that have begun are generally non-refundable.
          </>
        ),
      },
    ],
  },
  {
    title: "Web3, Crypto & NFT Services",
    items: [
      {
        q: "What services do you provide for Web3, Crypto, and NFT projects?",
        a: "We specialize in 24/7 Discord and Telegram community management, moderation, anti-raid bot setups, Twitter/X growth, visual brand identity, NFT launch marketing collateral, and custom Web3 webhook automation.",
      },
      {
        q: "Do you provide investment or financial advice?",
        a: "No. We operate strictly as a technology, branding, and community management partner. We do not provide financial advice, promote token investments, or guarantee financial outcomes.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="px-4 pb-10 pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">FAQ</span>
            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">
              Frequently asked <span className="grad-text">questions</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[560px] text-[1.05rem] text-text-2">
              Answers to common questions about our services, process, and policies.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-[820px]">
          <FaqAccordion groups={GROUPS} />
        </div>
      </section>
    </>
  );
}
