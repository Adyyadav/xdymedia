// Content for /services/[slug] pages, keyed by slug. account-recovery has
// its own hand-built page (src/app/services/account-recovery) and isn't
// listed here. Each entry: { metaDescription, hero, blocks[] } consumed by
// <ServiceTemplate>. Keeping this as data (not JSX) means every service
// page stays structurally consistent and easy to edit in one place.

export const SERVICE_CONTENT = {
  "platform-verification": {
    metaDescription:
      "Official Meta Blue Tick verification (Instagram & Facebook) and WhatsApp Official Business Account (Green Badge) verification concierge. Fast turnaround, zero login credentials required.",
    hero: {
      eyebrow: "Official Platform Verification ★",
      title: (
        <>
          Meta &amp; WhatsApp{" "}
          <span className="bg-gradient-to-r from-[#0095F6] via-[#38bdf8] to-[#0095F6] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(0,149,246,0.4)]">
            Verification Concierge
          </span>
        </>
      ),
      subhead:
        "Fast-track your verified status on Instagram, Facebook, and WhatsApp. We assist public figures, creators, executives, and growing brands in securing official Blue and Green badges through legitimate compliance pathways — with zero login credentials required.",
      ctaPrimary: { label: "Apply for Verification", href: "/contact" },
      ctaSecondary: { label: "Explore Requirements", href: "#capabilities" },
    },
    blocks: [
      {
        type: "notice",
        title: "Zero Password & Credential Disclosure.",
        text: "We never request passwords, login access, or SMS codes. Verification submissions are handled exclusively through verified business manager entities, official press compliance, and platform media support channels.",
      },
      {
        type: "overview",
        eyebrow: "Digital Trust & Conversion",
        heading: "Verified status is your competitive advantage.",
        paragraphs: [
          "In modern social commerce and digital communication, official verification badges are more than status symbols — they are high-trust conversion catalysts. Accounts with official verification experience up to 400% higher message response rates, enhanced algorithmic visibility, and complete protection against brand impersonation.",
          "XDY Media offers dedicated concierge support for Meta Verified, Notable Public Figure Blue Ticks, and WhatsApp Official Business Account (OBA) Green Badges, reviewing your entity eligibility and documentation before submission.",
        ],
        stats: [
          { value: "0–4h", label: "WhatsApp OBA avg turnaround" },
          { value: "0 Passwords", label: "Zero-credential security policy" },
          { value: "24–48h", label: "Meta verification window" },
        ],
      },
      {
        type: "features",
        eyebrow: "Verification Spectrum",
        heading: <>Comprehensive Verification <span className="grad-text">Capabilities</span></>,
        desc: "From creator blue checks to enterprise green tick badge setups, we navigate platform requirements end-to-end.",
        items: [
          {
            title: "Instagram Blue Tick Verification",
            desc: "Profile restructuring, notable press documentation, and official submission for public figures, creators, founders, and enterprises.",
            bullets: ["Notable figure & media criteria audit", "Meta Verified for Business setup", "Anti-impersonation profile lock", "Express submission windows"],
          },
          {
            title: "WhatsApp Official Business Account (Green Badge)",
            desc: "Display your verified business name instead of an unknown phone number. Builds instantaneous trust for automated marketing and customer support.",
            bullets: ["Phone number only required (no login access needed)", "Account must be active for 30+ days", "Average processing turnaround: 30 mins to 4 hours", "Meta Business Manager entity sync"],
          },
          {
            title: "Facebook Page & Profile Verification",
            desc: "Official verification for corporate parent pages, regional brand branches, executive profiles, and public organization portals.",
            bullets: ["Legal entity documentation audit", "Official domain verification & Business Manager integration"],
          },
          {
            title: "Media Press & Notability Architecture",
            desc: "For accounts applying for Notable/Legacy verification, we assist in organizing genuine media press coverage, editorial mentions, and Google Knowledge Panels.",
            bullets: ["Editorial press index review", "Search knowledge panel alignment"],
          },
          {
            title: "Verified Handle & Name Updates",
            desc: "Update your verified username, legal business name, or display title without risking badge revocation or account flag triggers.",
            bullets: ["Safe change protocol compliance", "Direct escalation support"],
          },
          {
            title: "Impersonator & Counterfeit Removal",
            desc: "Protect your verified brand against malicious clone channels, scam bots, and fake profiles targeting your audience.",
            bullets: ["Priority trademark & copyright reporting", "Fast-track impersonation takedown"],
          },
        ],
      },
      {
        type: "flow",
        eyebrow: "Official 4-Stage Protocol",
        heading: "How Verification Is Handled",
        desc: "A structured, secure, policy-compliant process built to minimize delays and maximize success rates.",
        nodes: ["1. Account Pre-Check", "2. Documentation Assembly", "3. Official Meta / WhatsApp Submission", "4. Verified Badge Issuance ✔️"],
      },
      {
        type: "techStack",
        heading: "Supported Platforms & Official Channels",
        desc: "We operate directly within established platform compliance infrastructure.",
        columns: [
          { title: "Meta Ecosystem", badges: ["Instagram Profiles", "Instagram Professional Accounts", "Facebook Pages", "Facebook Executive Profiles", "Meta Business Suite"] },
          { title: "WhatsApp Cloud Platform", badges: ["WhatsApp Business API", "Official Business Account (OBA)", "Legacy Green Badge", "Cloud API Verification"] },
          { title: "Security & Safeguards", badges: ["Zero Login Disclosure", "Escrow Settlement Supported", "Platform Policy Compliant", "Direct Documentation Escalation"] },
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Do I need to give you my Instagram or WhatsApp password?", a: "No, never. We operate under a strict zero-credential policy. We never request passwords, two-factor authentication codes, or session tokens. Everything is executed via official business verification documents and authorized platform channels." },
          { q: "What are the requirements for the WhatsApp Green Tick badge?", a: "The business phone number must be linked to an official WhatsApp Business API account, the business entity must be verified in Meta Business Manager, and the account should have active message history (typically 30+ days old). Turnaround times average 30 minutes to 4 hours during active intake sessions." },
          { q: "How long does the Meta Blue Tick process take?", a: "Standard review turnaround is 24 to 48 hours from the time documentation is submitted. When express batch windows are active, turnaround can be completed within a few hours." },
          { q: "What happens if an account was previously rejected for verification?", a: "Previous rejections are common if documentation was incomplete or profile formatting didn't meet Meta criteria. We perform a pre-check audit to address discrepancies before re-submitting." },
          { q: "Can personal creators and executives get verified?", a: "Yes. Both individual public figures (founders, creators, athletes, artists) and registered corporate brands are eligible under distinct official criteria." },
        ],
      },
      {
        type: "cta",
        heading: <>Ready to verify your <span className="grad-text">digital presence</span>?</>,
        desc: "Contact our team for a fast pre-check eligibility review. We'll examine your account status and provide turnaround and documentation guidance within hours.",
        primary: { label: "Start Verification Pre-Check", href: "/contact" },
        secondary: { label: "WhatsApp Concierge", href: "https://wa.me/306970445764" },
      },
    ],
  },
  "website-development": {
    metaDescription:
      "Custom business websites, web applications, e-commerce, APIs, and cloud infrastructure engineered for speed, conversions, and scalable growth.",
    hero: {
      eyebrow: "Full-Stack Digital Infrastructure",
      title: <>Custom Website Development &amp; <span className="grad-text">Digital Infrastructure</span></>,
      subhead:
        "We architect high-performance business websites, web applications, secure APIs, and resilient cloud hosting designed to capture leads, drive conversions, and scale effortlessly.",
      ctaPrimary: { label: "Start Your Project", href: "/contact" },
      ctaSecondary: { label: "View Offerings", href: "#offerings" },
    },
    blocks: [
      {
        type: "notice",
        title: "Full-Stack Architecture.",
        text: "We don't just assemble visual templates. We engineer full-stack digital infrastructure — from database schema and custom backend APIs to front-end performance, automated backups, and WhatsApp integrations.",
      },
      {
        type: "overview",
        eyebrow: "Production-Grade Engineering",
        heading: "Your website is your primary business asset. Build it right.",
        paragraphs: [
          "In modern business, a website cannot merely be an online brochure. It is the central hub of your operations — capturing inquiries, processing payments, feeding into your CRM, and triggering automated workflows across channels like WhatsApp and email.",
          "At XDY Media, we build fast, accessible, secure, and search-optimized web applications and corporate websites tailored to your unique commercial objectives.",
        ],
        stats: [
          { value: "100/100", label: "Lighthouse performance target" },
          { value: "3–5 wks", label: "Typical corporate site timeline" },
        ],
      },
      {
        type: "features",
        eyebrow: "Website Capabilities",
        heading: <>What XDY Media <span className="grad-text">builds</span></>,
        desc: "From high-converting landing pages to complex SaaS portals and automated e-commerce architectures.",
        items: [
          { title: "Business & Corporate Websites", desc: "Polished, brand-aligned web presences engineered to establish market authority, communicate value propositions, and turn visitors into qualified inquiries.", bullets: ["Corporate & company headquarters", "Agency & studio portfolio showcases", "High-converting campaign landing pages", "Startup & venture launch sites"] },
          { title: "Custom E-commerce Systems", desc: "Frictionless digital storefronts built for maximum transaction velocity, automated payment processing, inventory reconciliation, and instant customer notifications.", bullets: ["Dynamic product catalogues & filtering", "Payment gateway integrations", "Order tracking & customer accounts", "WhatsApp order confirmation hooks"] },
          { title: "Web Applications & Dashboards", desc: "Interactive web applications designed to streamline internal operations, power client collaboration, or deliver subscription SaaS functionality to end users.", bullets: ["Client portals & customer dashboards", "SaaS MVPs & subscription platforms", "Automated booking & scheduling engines"] },
          { title: "Backend & API Development", desc: "Robust server architectures and RESTful APIs connecting your front-end seamlessly to databases, third-party software, payment processors, and automation pipelines.", bullets: ["Secure REST API design & microservices", "JWT / OAuth authentication systems", "Real-time event streaming & queueing"] },
          { title: "Cloud Deployment & DevOps", desc: "Enterprise-grade server setup ensuring maximum speed, continuous availability, bulletproof security, and automated backup disaster recovery.", bullets: ["VPS & Cloud provisioning (AWS, Linux)", "Automated SSL certificates & hardening", "Containerized deployment using Docker"] },
          { title: "Speed & SEO Architecture", desc: "Every website we construct is tuned for instantaneous load times and structured data compliance, maximizing organic search discoverability and conversion rates.", bullets: ["Sub-second Core Web Vitals optimization", "Semantic HTML5 & Schema markup", "WCAG accessibility standards"] },
        ],
      },
      {
        type: "techStack",
        heading: "Modern, scalable technologies",
        desc: "We choose stable, proven, open-source technologies that guarantee longevity, speed, and complete client code ownership without proprietary vendor lock-in.",
        columns: [
          { title: "Frontend Engineering", desc: "Clean, accessible, ultra-responsive interfaces.", badges: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS"] },
          { title: "Backend & APIs", desc: "Fast, secure microservices at scale.", badges: ["Python", "FastAPI", "Flask", "Node.js", "REST APIs", "Webhooks"] },
          { title: "Databases & Infrastructure", desc: "Reliable storage, caching, containerized servers.", badges: ["PostgreSQL", "MySQL", "Redis", "Docker", "Linux (Ubuntu)", "AWS / Cloud VPS"] },
        ],
      },
      {
        type: "flow",
        eyebrow: "The Connected Offering",
        heading: <>Website + WhatsApp: <span className="grad-text">The Complete System</span></>,
        desc: "Traditional websites lose over 95% of traffic to low-completion contact forms. Wire your site directly into WhatsApp automation and your visitors can start a chat, get an automated quote, or book an appointment in seconds — with a 98% open rate.",
        nodes: ["🌐 Web Traffic", "💻 XDY Business Website", "💬 Instant WhatsApp Opt-In", "🤖 WhatsApp CRM Automation", "💰 Converted Customer"],
      },
      {
        type: "faq",
        items: [
          { q: "Do I own the website code and assets after completion?", a: "Yes, 100%. Upon final project delivery and settlement, complete intellectual property, source code, database dumps, and deployment configurations belong entirely to your company. We never lock clients into closed proprietary website builders." },
          { q: "Can you deploy on our own hosting or cloud accounts?", a: "Absolutely. We deploy directly to your preferred infrastructure — AWS, DigitalOcean, Hetzner, Vercel, or a traditional Linux VPS — and configure automated CI/CD deployment pipelines through GitHub." },
          { q: "How long does a custom business website project take?", a: "Focused landing pages take approximately 7–14 days; full-featured corporate websites take 3–5 weeks; complex web applications and e-commerce platforms typically require 6–10 weeks with milestone-based staging reviews." },
          { q: "Do you handle website maintenance and updates?", a: "Yes — ongoing infrastructure maintenance, security patches, automated backups, performance audits, and content updates under flexible monthly retainers." },
        ],
      },
      {
        type: "cta",
        heading: <>Ready to build your <span className="grad-text">digital infrastructure</span>?</>,
        desc: "Let's architect a custom website engineered to scale your brand and automate your commercial operations.",
        primary: { label: "Start Your Project", href: "/start-a-project" },
        secondary: { label: "View Pricing Packages", href: "/solutions" },
      },
    ],
  },

  "whatsapp-automation": {
    metaDescription:
      "Turn WhatsApp into your business automation engine. Official WhatsApp Business Platform integrations, AI chatbots, shared team inbox CRM, and workflow automation.",
    hero: {
      eyebrow: "Official WhatsApp Business Platform",
      title: <>Turn WhatsApp Into Your <span className="grad-text">Business Automation Engine</span></>,
      subhead: "Automate customer conversations, lead qualification, transactional notifications, and team workflows using the official WhatsApp Business Platform & Cloud API.",
      ctaPrimary: { label: "Deploy WhatsApp SaaS", href: "/contact" },
      ctaSecondary: { label: "Explore Features", href: "#features" },
    },
    blocks: [
      {
        type: "notice",
        title: "Official Cloud API & Meta Compliant.",
        text: "We build exclusively on the official Meta WhatsApp Business Platform. No unofficial scraping, no risky modified WhatsApp clients, and zero threat of phone number bans.",
      },
      {
        type: "overview",
        eyebrow: "Enterprise Automation",
        heading: "More than an API — a complete revenue engine.",
        paragraphs: [
          "Most agencies merely advertise \"WhatsApp API access.\" At XDY Media, we build end-to-end WhatsApp Business Automation & SaaS Solutions that connect directly into your sales pipelines, websites, databases, and customer support desks.",
          "From automated onboarding and dynamic e-commerce updates to multi-agent shared inboxes and AI chatbot triage, we replace hours of manual messaging with instant, 24/7 digital systems.",
        ],
        stats: [
          { value: "98%", label: "Open rate" },
          { value: "<2s", label: "Response time" },
        ],
      },
      {
        type: "waSimulator",
        eyebrow: "See It In Action",
        heading: <>Try the <span className="grad-text">live simulator</span></>,
        desc: "Tap an option below to see exactly what a customer experiences — instant automated replies, interactive menus, and real-time webhook events.",
      },
      {
        type: "features",
        eyebrow: "Core WhatsApp Services",
        heading: <>Engineered for scale, speed &amp; <span className="grad-text">conversion</span></>,
        desc: "Everything your company needs to deploy a world-class WhatsApp presence without managing infrastructure complexity.",
        items: [
          { title: "WhatsApp Business API Setup", desc: "End-to-end Meta Business Manager configuration, official phone number registration, Cloud API verification, and backend webhook provisioning." },
          { title: "Conversational Automation", desc: "Automate inbound inquiries with intuitive decision trees, keyword triggers, welcome sequences, and routing logic." },
          { title: "Rule-Based & AI Chatbots", desc: "Deploy intelligent chatbots powered by LLMs and your business knowledge base to answer FAQs, qualify intent, and handle support." },
          { title: "XDY WhatsApp CRM", desc: "A collaborative shared team inbox for multiple agents to respond from one verified number, with tags, notes, and deal stages." },
          { title: "WhatsApp Lead Generation", desc: "Turn website visitors and ad clicks into qualified leads — click-to-WhatsApp ads auto-qualify before routing hot leads to sales." },
          { title: "Transactional Notifications", desc: "Guaranteed-deliverability order confirmations, shipping tracking, appointment alerts, payment receipts, and OTPs." },
          { title: "Interactive Message Templates", desc: "Meta pre-approved templates with dynamic placeholders, media headers, quick replies, and call-to-action buttons." },
          { title: "Marketing & Re-engagement", desc: "Segmented broadcast campaigns, launches, offers, and automated abandoned-cart recovery flows." },
          { title: "E-commerce & Cart Sync", desc: "Bridge your store with WhatsApp — order milestones, catalog browsing, and reorder links in the chat thread." },
          { title: "Appointment & Booking Engines", desc: "Slot selection, confirmation, calendar sync, and automated reminders that eliminate no-shows." },
          { title: "Custom API & Webhook Engineering", desc: "Dedicated Python/Node.js microservices processing inbound webhook events and dispatching API responses." },
          { title: "Analytics & Performance Metrics", desc: "Delivery, open & reply rates, lead conversion attribution, and agent response time / SLA monitoring." },
        ],
      },
      {
        type: "flow",
        eyebrow: "Engineering Architecture",
        heading: "The High-Velocity Lead Qualification Flow",
        desc: "From first touchpoint to closed deal in under 60 seconds.",
        nodes: ["🌐 Website/Ads", "⚡ Inbound Lead", "🤖 Automation & AI", "💬 WhatsApp Triage", "📊 CRM Sync", "👤 Sales Rep Close"],
      },
      {
        type: "features",
        heading: <>Rule-Based vs <span className="grad-text">AI / LLM</span> Chatbot Engines</>,
        items: [
          { title: "Engine 01 · Rule-Based Interactive", desc: "Best for structured menus, product catalogues, and button-driven triage.", bullets: ["Zero latency (under 300ms execution)", "Predictable flows for ordering & FAQ", "Zero risk of AI hallucinations"] },
          { title: "Engine 02 · AI & LLM Knowledge", desc: "Understands nuanced conversational intent, searches your documentation, and replies naturally.", bullets: ["Custom RAG (Retrieval-Augmented Generation)", "Autonomous lead qualification", "Automatic escalation to human agent"] },
        ],
      },
      {
        type: "features",
        eyebrow: "Built For Your Industry",
        heading: "Industry solutions",
        items: [
          { title: "E-commerce", desc: "Order alerts, shipping tracking, abandoned-cart recovery, and catalog exploration." },
          { title: "Real Estate", desc: "Automated buyer qualification, brochure dispatch, and site-visit scheduling." },
          { title: "Healthcare & Clinics", desc: "Appointment booking, reminder alerts, report availability pings." },
          { title: "Education & EdTech", desc: "Course inquiries, fee reminders, counselor routing, webinar registration." },
          { title: "Hospitality & Salons", desc: "Bookings, confirmation alerts, menu discovery, automated feedback." },
          { title: "Financial Services", desc: "KYC alerts, payment confirmations, loan eligibility calculators." },
        ],
      },
      {
        type: "faq",
        items: [
          { q: "What's the difference between the WhatsApp Business App and the Business Platform / API?", a: "The standard app is designed for single-phone, manual messaging. The official WhatsApp Business Platform (Cloud API) supports multi-agent shared inboxes, custom AI chatbots, backend webhooks, unlimited broadcast campaigns, and automated enterprise integrations." },
          { q: "How does pricing work between your SaaS and Meta's messaging charges?", a: "Two distinct components: (1) XDY Media's software subscription covering platform, CRM tools, AI bots, and maintenance; and (2) Meta's official conversation charges, billed directly to your Meta Business Manager." },
          { q: "Can we get the official Green Tick verification badge?", a: "Yes — we guide eligible businesses through Meta's Official Business Account application, ensuring all technical prerequisites and compliance criteria are satisfied. Meta makes the final issuance decision." },
          { q: "What is the 24-hour customer service window?", a: "When a customer messages you, a 24-hour session opens for free-form responses. Once it lapses, outreach requires pre-approved Meta message templates." },
          { q: "Can we connect WhatsApp with our existing CRM or database?", a: "Yes — custom API connectors and webhook listeners sync contacts, conversation history, and leads with HubSpot, Salesforce, Zoho, Google Sheets, or your own database." },
        ],
      },
      {
        type: "cta",
        heading: <>Ready to automate your <span className="grad-text">WhatsApp operations</span>?</>,
        desc: "Book a free consultation and discover how XDY Media can turn WhatsApp into your highest-converting sales and support channel.",
        primary: { label: "Book a Consultation", href: "/book-a-consultation" },
        secondary: { label: "Combine with a Website", href: "/services/website-development" },
      },
    ],
  },

  "telegram-automation": {
    metaDescription:
      "Custom Telegram bot development, Web3/NFT community automation, multi-account MTProto infrastructure, payment bots, and enterprise Telegram automation.",
    hero: {
      eyebrow: "Core Engineering Pillar ★",
      title: <>Telegram, Web3 &amp; <span className="grad-text">Community Automation</span></>,
      subhead: "Build, automate, and scale your Telegram ecosystem. We don't just integrate existing tools — we build custom systems, automation workflows, and backend infrastructure designed around your exact requirements.",
      ctaPrimary: { label: "Engineer Your Telegram System", href: "/contact" },
      ctaSecondary: { label: "Explore Architecture", href: "#architecture" },
    },
    blocks: [
      {
        type: "notice",
        title: "Battle-Tested Production Experience.",
        text: "Our team has already developed and deployed custom Telegram bots, automation engines, account-management systems, payment workflows, and Web3 community solutions — at both the Bot/Application layer and the Backend Automation/MTProto layer.",
      },
      {
        type: "overview",
        eyebrow: "Event-Driven System Design",
        heading: "We build systems, not just bots.",
        paragraphs: [
          "A basic Telegram bot might simply respond to predefined commands. XDY Media engineers a complete production ecosystem: Bot + Backend + Database + API + Automation + Dashboard + AI + Payments + Analytics.",
          "Our systems are designed around scalable, asynchronous, event-driven automation — when a user interacts, a token transaction occurs, or a payment succeeds, the event is processed across our message queue, business logic, AI models, and databases in sub-second latency.",
        ],
      },
      {
        type: "flow",
        heading: "Event-Driven Automation Architecture",
        nodes: ["User / Chain Event", "Telegram Bot API", "Secure Webhook", "XDY Backend Engine", "Business Logic + AI + DB", "Automated Delivery"],
      },
      {
        type: "features",
        eyebrow: "Custom Engineering",
        heading: "Telegram Bot Development",
        desc: "We engineer custom Telegram bots for businesses, communities, creators, Web3 projects, and automated services — from simple automations to complete Telegram-based business platforms.",
        items: [
          { title: "Custom Core Bots & Commands", desc: "Custom command systems, inline search bots, interactive menus, nested workflows, and automated onboarding." },
          { title: "Customer Support & Lead Gen", desc: "Intelligent triage, lead qualification, ticketing, and seamless human agent handoff in a shared inbox." },
          { title: "Admin Automation & Moderation", desc: "Automated moderation, keyword violation traps, anti-raid shields, warnings, mutes, and ban workflows." },
          { title: "Payments & Subscription Bots", desc: "Built-in payment initiation, transaction verification, recurring subscriptions, and member access gating." },
          { title: "Content Delivery & Notifications", desc: "Queue-based content distribution, scheduled broadcasts, and priority-dispatched alerts across channels." },
          { title: "Viral Growth, Giveaways & Contests", desc: "Referral tracking, contest point trackers, giveaway selection engines, and viral onboarding loops." },
        ],
      },
      {
        type: "flow",
        eyebrow: "Web3 Community Infrastructure",
        heading: "Token-Gated Community Verification Flow",
        desc: "XDY Media has a primary focus on Web3, crypto, and NFT communities, where Telegram is the central operational platform — connected to smart contracts, blockchain nodes, and project databases.",
        nodes: ["Community User Joins", "Telegram Bot Handshake", "Wallet Verification", "Blockchain Balance Check", "Eligibility Pass", "Private VIP Group"],
      },
      {
        type: "features",
        heading: "Web3 & NFT Telegram Solutions",
        items: [
          { title: "NFT Collection Bots", desc: "Real-time mint notifications, sales tracker alerts, marketplace sweeps, and floor price telemetry.", bullets: ["Marketplace API integrations (OpenSea, Magic Eden, Blur)"] },
          { title: "Holder Verification & Gated Groups", desc: "Cryptographic wallet signature verification and dynamic token balance monitoring for private Alpha groups.", bullets: ["Automatic role revoking on sale", "Whitelist & tiered access tiers"] },
          { title: "Web3 Community Security", desc: "Anti-phishing detection, raid shields, verification captchas, and scam link suppression.", bullets: ["24/7 multilingual holder FAQ assistance"] },
        ],
      },
      {
        type: "flow",
        eyebrow: "Native Monetization",
        heading: "Telegram Payment Bots & Digital Commerce",
        desc: "Convert your Telegram channel or group into a direct revenue engine, built natively on Telegram Stars plus fiat and crypto gateways.",
        nodes: ["Customer Selects Tier", "Bot Generates Invoice", "Payment Gateway", "Verification Hook", "DB & CRM Entitlement", "Auto Delivery"],
      },
      {
        type: "features",
        eyebrow: "Advanced Backend Engineering",
        heading: "Multi-Account Telegram Infrastructure",
        desc: "For legitimate operations requiring multi-account orchestration, high-frequency task distribution, or MTProto client protocols.",
        items: [
          { title: "Session Management", desc: "Secure string session isolation, persistent storage, and automatic session recovery." },
          { title: "Flood-Wait Handling", desc: "Intelligent backoff algorithms that gracefully handle Telegram API rate limits without dropping tasks." },
          { title: "Distributed Task Scheduler", desc: "Asynchronous queues via Redis/Celery distributing publishing tasks across assigned nodes." },
          { title: "Live Health & Telemetry", desc: "Real-time status monitoring, activity logging, and automated failure alerts." },
        ],
      },
      {
        type: "features",
        eyebrow: "Intelligent Automations",
        heading: "AI Intelligence & CRM Synchronization",
        items: [
          { title: "AI-Powered Telegram Bots", desc: "Conversational LLM models grounded in your business documentation for 24/7 intelligent answering.", bullets: ["Retrieval-Augmented Generation (RAG)"] },
          { title: "Content & Channel Publishing", desc: "Automated editorial workflows across public and private channels with priority queues and scheduled drops." },
          { title: "Telegram + CRM Workflows", desc: "Telegram becomes a front-end lead pipeline feeding directly into HubSpot, Salesforce, Notion, or custom databases." },
        ],
      },
      {
        type: "techStack",
        heading: "Our Telegram technology stack",
        desc: "Production-grade frameworks, resilient protocols, and cloud infrastructure engineered for zero downtime.",
        columns: [
          { title: "Telegram Layer", badges: ["Bot API v7.0+", "Telethon (MTProto)", "Pyrogram / TDLib", "Custom Webhooks"] },
          { title: "Backend Engine", badges: ["Python / FastAPI", "Node.js / Express", "Asyncio", "REST & GraphQL"] },
          { title: "Data & Queue", badges: ["PostgreSQL / MySQL", "Redis", "Celery", "Supabase / MongoDB"] },
          { title: "Cloud & DevOps", badges: ["Linux VPS", "Docker", "Systemd", "Prometheus & Grafana"] },
        ],
      },
      {
        type: "features",
        eyebrow: "Targeted Solutions",
        heading: "Tailored for every client profile",
        items: [
          { title: "Web3 & NFT Projects", desc: "Token-gated groups, wallet verification, mint notifications, whale sales bots, 24/7 security moderation." },
          { title: "Commercial Businesses", desc: "Customer support bots, CRM sync, instant lead qualification, payment bots, team alert dispatching." },
          { title: "Creators & Communities", desc: "Premium VIP channels, subscription paywalls, Telegram Stars content delivery, automated onboarding." },
          { title: "Agencies", desc: "White-label Telegram automation, client bot fleet management, multi-tenant SaaS dashboards." },
          { title: "Startups & SaaS", desc: "Rapid MVP bot prototyping, interactive Mini Apps, custom backend infrastructure." },
          { title: "Enterprise Platforms", desc: "Dedicated high-throughput VPS servers, multi-account MTProto orchestration, custom SLAs." },
        ],
      },
      { type: "telegramManagement", id: "management" },
      {
        type: "cta",
        heading: <>Build. Automate. <span className="grad-text">Scale.</span></>,
        desc: "Whether you need a custom bot, an automated Web3 community system, or an entire Telegram SaaS platform, XDY Media designs and develops the underlying technology.",
        primary: { label: "Start a Telegram Project", href: "/start-a-project" },
        secondary: { label: "Explore Web3 Services", href: "/services/web3" },
      },
    ],
  },

  "social-media": {
    metaDescription: "Social media management, strategy, content planning, community management, and analytics for Instagram, YouTube, TikTok, X, and more.",
    hero: {
      eyebrow: "Social Media Services",
      title: <>Social Media <span className="grad-text">Management &amp; Growth</span></>,
      subhead: "We build, manage, and grow your social presence with data-driven strategy, consistent content, and genuine community engagement.",
      ctaPrimary: { label: "Get a Growth Plan", href: "/contact" },
    },
    blocks: [
      {
        type: "notice",
        title: "Our promise:",
        text: "We focus on authentic, policy-compliant growth. We never use fake engagement, bots, or manipulative tactics. Growth results vary based on content, platform algorithms, and audience.",
      },
      {
        type: "overview",
        heading: "Full-service social media, done properly",
        paragraphs: [
          "Our team manages your social channels end-to-end — from strategy and content to community engagement and reporting. We work across Instagram, Facebook, X/Twitter, Telegram, YouTube, and TikTok where legally and platform-permitted.",
          "Every engagement is grounded in audience research and performance data, so your presence grows authentically and sustainably.",
        ],
      },
      {
        type: "features",
        heading: "What we deliver",
        items: [
          { title: "Social Media Management", desc: "Dedicated management for Instagram, Facebook, X/Twitter, Telegram, YouTube, and TikTok (where permitted)." },
          { title: "Strategy & Planning", desc: "Social media strategy, content planning, scheduling, and audience research tailored to your brand." },
          { title: "Community & Engagement", desc: "Engagement and community management, responding to your audience and building real connections." },
          { title: "Profile Optimization", desc: "Bio, highlights, branding, and profile optimization to make a strong first impression." },
          { title: "Audits & Analysis", desc: "Social media audits, competitor analysis, campaign management, and detailed analytics reporting." },
          { title: "Campaigns & Growth", desc: "Campaign management and sustainable growth strategy built on real performance data." },
        ],
      },
      {
        type: "cta",
        heading: <>Ready to grow your <span className="grad-text">social presence</span>?</>,
        desc: "Get a tailored social media plan for your brand — free consultation.",
        primary: { label: "Start a Project", href: "/start-a-project" },
      },
    ],
  },

  web3: {
    metaDescription: "Web3 social media management, NFT and Discord community management, Web3 branding, creative design, and API automation for Web3 projects.",
    hero: {
      eyebrow: "Web3 & Crypto Ecosystem",
      title: <>Web3 Brand, Community &amp; <span className="grad-text">Telegram Automation</span></>,
      subhead: "We engineer token-gated community infrastructure, custom Telegram & Discord bots, wallet verification systems, and brand growth for Web3, NFT, and cryptocurrency projects.",
      ctaPrimary: { label: "Discuss Web3 Project", href: "/contact" },
      ctaSecondary: { label: "Explore Telegram & Web3 Bots", href: "/services/telegram-automation" },
    },
    blocks: [
      {
        type: "notice",
        title: "Institutional Clarity:",
        text: "XDY Media provides specialized technology infrastructure, community management systems, and creative branding. We do not provide financial advice, promote speculative investments, or guarantee token valuations.",
      },
      {
        type: "overview",
        eyebrow: "Community Engineering",
        heading: "Web3 communities that scale with automated trust.",
        paragraphs: [
          "In Web3, your community is your operational foundation. We build 24/7 engaged ecosystems across Telegram and Discord, establish anti-raid protection, verify on-chain holder status, and craft memorable visual branding.",
          "From whitelist distribution bots to dynamic Discord role assignments based on live token balances, our automation handles repetitive operations while keeping founders in full control.",
        ],
      },
      {
        type: "flow",
        heading: "Token-Gated Community Access Flow",
        desc: "How our custom Telegram and Discord bots verify wallet balances cryptographically to protect your exclusive Alpha channels.",
        nodes: ["Member Joins", "Verification Bot Challenge", "Blockchain Query", "Eligibility Engine", "VIP Access Granted"],
      },
      {
        type: "features",
        items: [
          { title: "Telegram & Discord Ops", desc: "24/7 moderation shifts, scam protection, automated welcome sequences, and holder role management." },
          { title: "Web3 Brand Identity", desc: "Visual branding, 3D assets, token logos, pitch decks, and cohesive editorial guidelines for crypto brands." },
          { title: "NFT & Token Bot Systems", desc: "Real-time mint alerts, secondary sales trackers, floor price monitoring, and automated holder giveaways." },
          { title: "Anti-Raid & Anti-Phishing", desc: "Automated verification captchas, phishing link suppression, and 24/7 security shields." },
          { title: "Blockchain API Integrations", desc: "Integrations with Etherscan, Solscan, OpenSea, DexScreener, CoinGecko, and custom smart contract listeners." },
        ],
      },
      {
        type: "cta",
        heading: <>Building a <span className="grad-text">Web3 or NFT</span> project?</>,
        desc: "Let's engineer your community operations, security bots, and brand identity.",
        primary: { label: "Start a Project", href: "/start-a-project" },
      },
    ],
  },

  "ai-automation": {
    metaDescription: "AI-powered customer support, automated lead qualification, LLM knowledge retrieval, and predictive business workflows.",
    hero: {
      eyebrow: "AI Automation & Chatbots",
      title: <>AI That Actually Runs Your <span className="grad-text">Business Workflows</span></>,
      subhead: "We deploy AI chatbots and automation grounded in your own business data — for customer support, lead qualification, and internal workflows — layered on top of the channels you already use.",
      ctaPrimary: { label: "Start an AI Project", href: "/contact" },
    },
    blocks: [
      {
        type: "notice",
        title: "Grounded, not generic.",
        text: "Our AI deployments use Retrieval-Augmented Generation (RAG) against your own documentation and product data, with automatic escalation to a human agent when a query needs one.",
      },
      {
        type: "overview",
        heading: "AI that answers correctly, or hands off cleanly.",
        paragraphs: [
          "Off-the-shelf AI chatbots hallucinate and frustrate customers. We build AI automation grounded in your actual business knowledge base, deployed across WhatsApp, Telegram, and your website — with clear escalation paths to your team when the AI reaches its limits.",
        ],
      },
      {
        type: "features",
        heading: "What we build",
        items: [
          { title: "AI Customer Support", desc: "Context-aware chatbots that answer product and policy questions using your own documentation." },
          { title: "Automated Lead Qualification", desc: "AI-driven intent classification that routes high-value leads to your sales team instantly." },
          { title: "LLM Knowledge Retrieval", desc: "Retrieval-Augmented Generation (RAG) pipelines grounded in your product catalogue or FAQs." },
          { title: "Predictive Workflows", desc: "AI-assisted routing, tagging, and prioritization layered on top of your existing CRM and inbox." },
          { title: "Human Handoff Design", desc: "Clear, reliable escalation triggers so AI never leaves a customer stuck without a human option." },
        ],
      },
      {
        type: "cta",
        heading: <>Ready to put <span className="grad-text">AI to work</span>?</>,
        desc: "Tell us about your support volume and workflows — we'll design an AI layer that fits.",
        primary: { label: "Start a Project", href: "/start-a-project" },
        secondary: { label: "See WhatsApp AI Chatbots", href: "/services/whatsapp-automation" },
      },
    ],
  },

  "api-automation": {
    metaDescription: "Custom automation workflows, API integrations, Telegram bots, webhooks, and dashboards using official APIs and authorized methods.",
    hero: {
      eyebrow: "API Automation & Integration",
      title: <>Custom <span className="grad-text">Automation &amp; Integration</span> Solutions</>,
      subhead: "We build reliable automation systems using official APIs, authorized integrations, and client-owned infrastructure — no scraping, no shortcuts.",
      ctaPrimary: { label: "Automate a Process", href: "/contact" },
    },
    blocks: [
      {
        type: "notice",
        title: "Built properly.",
        text: "All automation uses official APIs, authorized integrations, and client-owned systems with proper authentication. We do not scrape credentials, harvest session tokens, or bypass rate limits.",
      },
      {
        type: "overview",
        heading: "Automate the work that doesn't need your time",
        paragraphs: [
          "From social media scheduling and content workflows to CRM syncs, payment integrations, and custom dashboards — we build automation that saves you hours every day, designed around your workflow, your tools, and your compliance requirements.",
        ],
      },
      {
        type: "features",
        heading: "What we build",
        items: [
          { title: "REST API Integration", desc: "Connect your tools and platforms with custom REST API integrations." },
          { title: "API Development", desc: "Custom API development for your specific use case and requirements." },
          { title: "Automation Workflows", desc: "End-to-end custom automation workflows for repetitive business processes." },
          { title: "Telegram Bot Development", desc: "Custom Telegram bots for notifications, moderation, customer support, and more." },
          { title: "Webhook Integrations", desc: "Real-time webhook integrations to connect your tools and receive instant updates." },
          { title: "Dashboard Development", desc: "Custom monitoring dashboards to track your automation, data, and project status." },
        ],
      },
      {
        type: "cta",
        heading: <>Have a process you'd like to <span className="grad-text">automate</span>?</>,
        desc: "Tell us about it and we'll design a solution.",
        primary: { label: "Start a Project", href: "/start-a-project" },
      },
    ],
  },

  creative: {
    metaDescription: "Logo design, brand identity, social media creatives, thumbnails, ads, banners, flyers, and complete visual design services.",
    hero: {
      eyebrow: "Creative Studio",
      title: <>Design That <span className="grad-text">Stands Out</span></>,
      subhead: "From logos and brand identity to social media creatives and campaign design — we craft visuals that capture attention and communicate your story.",
      ctaPrimary: { label: "Start a Design Project", href: "/contact" },
    },
    blocks: [
      {
        type: "overview",
        heading: "Visual identity for modern brands",
        paragraphs: [
          "Our creative team delivers professional design across every format — digital, print, social, and presentation. Every project is built around your brand's unique personality and audience.",
        ],
      },
      {
        type: "features",
        heading: "Our creative offerings",
        items: [
          { title: "Logo Design", desc: "A distinctive mark built to work across every size and surface." },
          { title: "Brand Identity", desc: "Visual guidelines, color systems, and typography that keep your brand consistent." },
          { title: "Social Media Posts", desc: "On-brand post templates designed for engagement." },
          { title: "Instagram Stories", desc: "Story and Reel cover templates built for the format." },
          { title: "YouTube Thumbnails", desc: "High-click-through thumbnails tailored to your channel." },
          { title: "Banners & Ads", desc: "Campaign banners and ad creatives across platforms." },
          { title: "Flyers & Brochures", desc: "Print-ready flyers and brochures for offline marketing." },
          { title: "Presentation Design", desc: "Pitch decks and presentations that look as good as the idea." },
          { title: "Marketing Creatives", desc: "Full creative suites for product launches and campaigns." },
        ],
      },
      {
        type: "cta",
        heading: <>Need creative design for your <span className="grad-text">brand</span>?</>,
        desc: "Share your vision and we'll bring it to life.",
        primary: { label: "Start a Project", href: "/start-a-project" },
      },
    ],
  },

  seo: {
    metaDescription: "Sustainable, policy-compliant SEO services: technical, on-page, off-page, local SEO, keyword research, audits, and content optimization.",
    hero: {
      eyebrow: "SEO & Search Optimization",
      title: <>Sustainable <span className="grad-text">Search Visibility</span></>,
      subhead: "Policy-compliant, long-term SEO strategies. We optimize your site to be found by the right people — without black-hat tactics or ranking guarantees.",
      ctaPrimary: { label: "Get a Free SEO Audit", href: "/contact" },
    },
    blocks: [
      {
        type: "notice",
        title: "No shortcuts.",
        text: "We do not promise guaranteed rankings. Google's policy-violating practices — including spam links, cloaking, and manipulative schemes — can result in lower rankings or removal from Search. We build sustainable visibility.",
      },
      {
        type: "overview",
        heading: "SEO that works with search engines, not against them",
        paragraphs: [
          "Our approach is rooted in technical excellence, quality content, and genuine authority building. We optimize your site for both users and search engines, following Google's guidelines and best practices.",
        ],
        stats: [
          { value: "+40%", label: "Average organic traffic increase" },
          { value: "3–6 mo", label: "To see sustainable results" },
        ],
      },
      {
        type: "features",
        heading: "Complete SEO services",
        items: [
          { title: "Technical SEO", desc: "Site structure, crawl optimization, indexing, speed, and Core Web Vitals." },
          { title: "On-page SEO", desc: "Content optimization, metadata, internal linking, and structured data." },
          { title: "Keyword Research", desc: "Deep keyword and competitor research to identify real opportunities." },
          { title: "SEO Audits", desc: "Full-site audits covering technical health, content, and competitive landscape." },
          { title: "Local SEO", desc: "Local business optimization, Google Business Profile, and local citations." },
          { title: "Analytics & Reporting", desc: "Search Console, analytics setup, and transparent monthly reporting." },
        ],
      },
      {
        type: "cta",
        heading: <>Want to improve your <span className="grad-text">search visibility</span>?</>,
        desc: "Start with a free SEO audit — we'll identify your biggest opportunities.",
        primary: { label: "Get a Free Audit", href: "/contact" },
      },
    ],
  },

  "content-marketing": {
    metaDescription: "Content strategy, copywriting, caption writing, content calendars, brand storytelling, and campaign planning services.",
    hero: {
      eyebrow: "Content & Marketing",
      title: <>Content That <span className="grad-text">Connects</span></>,
      subhead: "Strategy-driven content, compelling copywriting, and campaign planning that tells your brand's story and drives meaningful engagement.",
      ctaPrimary: { label: "Start a Content Plan", href: "/contact" },
    },
    blocks: [
      {
        type: "overview",
        heading: "Storytelling that builds brands",
        paragraphs: [
          "Great content does more than fill a feed — it builds trust, communicates value, and turns audiences into communities. We craft content strategies that align with your goals and resonate with your audience, built on audience research, competitor analysis, and performance data, then continuously optimized.",
        ],
      },
      {
        type: "features",
        heading: "What we deliver",
        items: [
          { title: "Content Strategy", desc: "Comprehensive content planning aligned with your brand goals." },
          { title: "Copywriting & Captions", desc: "Compelling copy and captions that engage and convert." },
          { title: "Content Calendars", desc: "Structured publishing calendars to keep your content consistent." },
          { title: "Short-form Strategy", desc: "Reels, Shorts, and TikTok strategy for maximum reach." },
          { title: "Video Content Strategy", desc: "Video-first strategies for YouTube and social platforms." },
          { title: "Campaign Planning", desc: "End-to-end campaign planning and brand storytelling." },
          { title: "Community Growth", desc: "Community building and creator/influencer marketing." },
          { title: "Marketing Consultation", desc: "Expert guidance on your overall marketing approach." },
        ],
      },
      {
        type: "cta",
        heading: <>Tell your story <span className="grad-text">better</span></>,
        desc: "Let's create content that your audience will remember.",
        primary: { label: "Start a Project", href: "/start-a-project" },
      },
    ],
  },

  growth: {
    metaDescription: "Brand growth strategy, audience development, lead generation, conversion optimization, campaign strategy, and community building.",
    hero: {
      eyebrow: "Growth Solutions",
      title: <>Grow With <span className="grad-text">Intention</span></>,
      subhead: "Strategy-led growth services that build real audiences, generate leads, and convert attention into results.",
      ctaPrimary: { label: "Build a Growth Plan", href: "/contact" },
    },
    blocks: [
      {
        type: "overview",
        heading: "Beyond vanity metrics",
        paragraphs: [
          "Growth isn't about numbers that look good — it's about audiences that matter, leads that convert, and communities that last. We build growth systems around your actual business goals.",
        ],
      },
      {
        type: "features",
        heading: "Growth solutions we offer",
        items: [
          { title: "Brand Growth Strategy", desc: "Comprehensive growth strategy tailored to your market and goals." },
          { title: "Audience Development", desc: "Build and nurture audiences that genuinely care about your brand." },
          { title: "Lead Generation", desc: "Systems and campaigns that attract and capture qualified leads." },
          { title: "Conversion Optimization", desc: "Turn more of your audience into customers and clients." },
          { title: "Campaign Strategy", desc: "Data-driven campaign planning and execution for maximum impact." },
          { title: "Community Building", desc: "Create engaged communities around your brand on every platform." },
          { title: "Competitor Intelligence", desc: "Understand your competitive landscape and find opportunities." },
          { title: "Analytics & Tracking", desc: "Performance tracking and reporting to keep growth on course." },
        ],
      },
      {
        type: "cta",
        heading: <>Ready to <span className="grad-text">grow</span>?</>,
        desc: "Let's build a growth plan tailored to your brand.",
        primary: { label: "Start a Project", href: "/start-a-project" },
      },
    ],
  },

  "custom-software": {
    metaDescription: "Bespoke web portals, client dashboards, subscription SaaS architectures, internal management tools, and custom CRMs.",
    hero: {
      eyebrow: "Custom Software & SaaS",
      title: <>Software Built Around <span className="grad-text">How You Actually Work</span></>,
      subhead: "Bespoke web portals, client dashboards, subscription SaaS architectures, internal management tools, and custom CRMs — engineered on the same full-stack foundation as our websites.",
      ctaPrimary: { label: "Scope a Software Project", href: "/contact" },
    },
    blocks: [
      {
        type: "overview",
        heading: "When off-the-shelf software doesn't fit",
        paragraphs: [
          "Generic SaaS tools force your business to adapt to their workflow. We build custom software around yours — client portals, internal dashboards, and subscription platforms with full source code ownership on delivery, using the same production-grade stack (React/Next.js, Python/Node.js, PostgreSQL, Docker) as our website engineering.",
        ],
      },
      {
        type: "features",
        heading: "What we build",
        items: [
          { title: "Client Portals & Dashboards", desc: "Secure, branded portals where your clients track projects, orders, and documents." },
          { title: "Subscription SaaS Platforms", desc: "Multi-tenant SaaS architectures with billing, role permissions, and usage tracking." },
          { title: "Internal Management Tools", desc: "Purpose-built internal tools that replace spreadsheets and manual processes." },
          { title: "Custom CRMs", desc: "CRM systems tailored to your exact sales pipeline and reporting needs." },
          { title: "Admin & Ops Panels", desc: "Role-based admin panels for managing users, content, and operations at scale." },
        ],
      },
      {
        type: "cta",
        heading: <>Have a process worth <span className="grad-text">building software</span> for?</>,
        desc: "Tell us how your team works today and we'll scope what a custom system would look like.",
        primary: { label: "Start a Project", href: "/start-a-project" },
        secondary: { label: "See Website Development", href: "/services/website-development" },
      },
    ],
  },

  "meta-business-suite": {
    metaDescription:
      "Professional Instagram and Facebook management through Meta Business Suite. We handle content scheduling, inbox management, analytics, Meta Ads workflows, and account administration — so you can focus on your brand.",
    hero: {
      eyebrow: "Social Media Management & Automation",
      title: <>Meta Business Suite <span className="grad-text">Management</span></>,
      subhead:
        "Let our team handle your day-to-day Instagram and Facebook operations from a centralised Meta Business Suite workflow — content scheduling, audience communication, analytics, advertising workflows, and account administration, all managed for you.",
      ctaPrimary: { label: "Get Started", href: "/contact" },
      ctaSecondary: { label: "See What We Handle", href: "#capabilities" },
    },
    blocks: [
      {
        type: "notice",
        title: "Honest by default.",
        text: "We do not guarantee specific reach, engagement, follower growth, ad performance, or revenue results. Social media outcomes depend on many factors outside any agency's direct control. What we guarantee is professional, consistent, policy-compliant management of your Meta presence.",
      },
      {
        type: "overview",
        eyebrow: "Centralised Meta Operations",
        heading: "Your Instagram & Facebook — fully managed, one workflow.",
        paragraphs: [
          "Managing Instagram and Facebook professionally means more than posting content. It means staying on top of your inbox, monitoring performance, running your ad campaigns, keeping your account healthy, and making sure every part of your Meta presence works together — consistently, every day.",
          "XDY Media provides complete Meta Business Suite management for businesses, creators, and brands. We operate from a centralised workflow that covers your content, your audience, your analytics, your advertising, and your account administration — so you get a professionally managed Meta presence without having to run it yourself.",
        ],
        stats: [
          { value: "2-in-1", label: "Instagram & Facebook managed together" },
          { value: "1 team", label: "Handling your full Meta workflow" },
        ],
      },
      {
        type: "features",
        id: "capabilities",
        eyebrow: "What We Handle",
        heading: <><span className="grad-text">Everything</span> inside your Meta Business Suite</>,
        desc: "A complete managed service covering every layer of your Instagram and Facebook operations.",
        items: [
          {
            title: "Account Setup & Configuration",
            desc: "We handle Meta Business Suite setup, Facebook Page and Instagram account integration, Business Portfolio configuration, and initial account structure so everything is connected and running correctly from day one.",
            bullets: [
              "Meta Business Suite setup and configuration",
              "Facebook Page and Instagram account integration",
              "Business Portfolio and asset organisation",
              "Team member access and permission management",
            ],
          },
          {
            title: "Content Publishing & Scheduling",
            desc: "We manage your full content calendar across Instagram and Facebook — planning, scheduling, and publishing posts, Reels, and Stories consistently so your audience always has something to engage with.",
            bullets: [
              "Posts, Reels, and Stories management",
              "Content calendar planning and scheduling",
              "Cross-platform publishing across Instagram & Facebook",
              "Consistent publishing cadence management",
            ],
          },
          {
            title: "Inbox & Community Management",
            desc: "We handle your Instagram and Facebook inbox — responding to DMs, managing comments, and handling customer enquiries — so your audience always gets a timely, professional response.",
            bullets: [
              "Instagram and Facebook inbox management",
              "DM and comment management",
              "Customer enquiry handling",
              "Meta notifications management",
            ],
          },
          {
            title: "Analytics & Performance Reporting",
            desc: "We track how your content and accounts are performing — reach, impressions, and engagement data — and deliver clear, regular reports so you understand exactly what is working.",
            bullets: [
              "Audience and engagement insights",
              "Reach, impressions, and content-performance analytics",
              "Account and content performance reporting",
              "Data-informed content and strategy adjustments",
            ],
          },
          {
            title: "Meta Ads Manager Integration",
            desc: "We integrate with your Meta Ads Manager to support campaign management workflows — setting up, monitoring, and reporting on your Facebook and Instagram ad activity as part of your overall Meta operations.",
            bullets: [
              "Meta Ads Manager integration and campaign management",
              "Ad workflow coordination alongside organic content",
              "Campaign performance monitoring and reporting",
            ],
          },
          {
            title: "Multi-Account & Automation Support",
            desc: "Whether you manage multiple Instagram or Facebook accounts, or want to take advantage of scheduling and workflow automation where Meta supports it, we handle the operational complexity for you.",
            bullets: [
              "Multiple Instagram and Facebook account management",
              "Workflow and social-media automation where supported",
              "Meta Business Suite troubleshooting and account-management assistance",
            ],
          },
        ],
      },
      {
        type: "flow",
        eyebrow: "How It Works",
        heading: <><span className="grad-text">One centralised workflow</span> for your entire Meta presence</>,
        desc: "From content creation to publishing, community management, and performance reporting — all handled through a single, organised Meta Business Suite workflow managed by our team.",
        nodes: [
          "📅 Content Calendar",
          "📲 Publishing & Scheduling",
          "💬 Inbox & Community",
          "📊 Analytics & Reporting",
          "📣 Ads & Campaign Support",
          "🔧 Account Administration",
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "Do you manage both Instagram and Facebook together?",
            a: "Yes. We manage your Instagram and Facebook presence through Meta Business Suite as a unified workflow — content, inbox, analytics, ads support, and account administration across both platforms.",
          },
          {
            q: "Can you handle our Meta Ads campaigns?",
            a: "We provide Meta Ads Manager integration and campaign management support as part of our Meta management service. This covers campaign setup, monitoring, and reporting. Actual ad spend is managed through your own Meta Business account.",
          },
          {
            q: "Will you manage our DMs and comments?",
            a: "Yes. Inbox management — including DMs, comments, and customer enquiries — is a core part of what we handle. Your audience gets professional, timely responses as part of the service.",
          },
          {
            q: "Do you guarantee follower growth or engagement rates?",
            a: "No. We do not make guarantees on follower numbers, reach, engagement rates, or any specific performance outcomes. Social media results depend on many factors including content quality, platform algorithms, audience behaviour, and market conditions. What we provide is consistent, professional management of your Meta presence.",
          },
          {
            q: "Can you manage multiple Instagram or Facebook accounts?",
            a: "Yes. We support multiple Instagram and Facebook account management as part of the service, coordinated through Meta Business Suite.",
          },
        ],
      },
      {
        type: "cta",
        heading: <>Ready to hand off your <span className="grad-text">Meta operations</span>?</>,
        desc: "Let our team manage your Instagram and Facebook day-to-day — content, inbox, analytics, ads support, and everything in between.",
        primary: { label: "Get Started", href: "/contact" },
        secondary: { label: "See All Social Services", href: "/services/social-media" },
      },
    ],
  },

  "telegram-management": {
    metaDescription:
      "Complete Telegram management and growth services — channel management, Telegram Ads, audience growth, content posting, subscription channel management, and full monetisation support.",
    hero: {
      eyebrow: "Social Media Management & Automation",
      title: <>Complete Telegram <span className="grad-text">Management & Growth</span></>,
      subhead:
        "We handle your Telegram channels end-to-end — ads, content, audience growth, channel optimisation, subscription management, and monetisation — while you focus on building your brand.",
      ctaPrimary: { label: "Start Telegram Management", href: "/contact" },
      ctaSecondary: { label: "What We Handle", href: "#what-we-handle" },
    },
    blocks: [
      {
        type: "notice",
        title: "Realistic about results.",
        text: "We work hard to help you reach the right audience and achieve the best possible performance. Growth and monetisation results depend on your content, niche, audience, and market — we do not guarantee specific subscriber numbers, revenue figures, or ad performance outcomes.",
      },
      {
        type: "overview",
        eyebrow: "Telegram is one of our specialisms",
        heading: "Your Telegram, fully managed. You focus on your brand.",
        paragraphs: [
          "While you focus on starting and growing your Instagram — or any other platform — we are ready to handle your Telegram for you. Telegram is one of the platforms we specialise in, and our goal is to help you reach the right audience and turn that audience into paying subscribers.",
          "From running Telegram Ads and managing your channels to growing your audience, handling subscriptions, and monetising your content, we can manage the complete Telegram side of your business. You create and grow your brand. We handle the Telegram operations.",
        ],
        stats: [
          { value: "Full", label: "Channel management & operations" },
          { value: "End-to-end", label: "From ads to monetisation" },
        ],
      },
      {
        type: "features",
        id: "what-we-handle",
        eyebrow: "Complete Telegram Management",
        heading: <>Everything we handle on <span className="grad-text">your behalf</span></>,
        desc: "A full-service Telegram management offering — from channel setup and content to ads, growth, and monetisation.",
        items: [
          {
            title: "Channel Management",
            desc: "We handle the day-to-day management of your Telegram channel — content posting, scheduling, channel optimisation, and keeping your presence active and consistent so your audience has a reason to stay.",
            bullets: [
              "Content posting and publishing management",
              "Channel setup and profile optimisation",
              "Posting schedule and content calendar",
              "Channel settings and administration",
            ],
          },
          {
            title: "Telegram Ads",
            desc: "We manage your Telegram Ads campaigns — from setup and targeting to monitoring and optimisation — to help you reach new audiences and grow your channel with the right people.",
            bullets: [
              "Telegram Ads campaign setup and management",
              "Audience targeting and ad configuration",
              "Campaign monitoring and performance review",
              "Ad spend coordination through your Telegram Ads account",
            ],
          },
          {
            title: "Audience Growth",
            desc: "We focus on growing your Telegram audience with the right people for your niche. Using a combination of Telegram Ads, promotion strategies, and channel optimisation, we work to steadily build your subscriber base.",
            bullets: [
              "Audience growth strategy and execution",
              "Channel promotion and visibility improvement",
              "Subscriber acquisition through ads and organic methods",
              "Niche audience targeting",
            ],
          },
          {
            title: "Subscription Channel Management",
            desc: "We can manage your Telegram subscription channel — handling access, subscriber management, and the operational side of running a paid community — so you can start monetising your content directly through Telegram.",
            bullets: [
              "Subscription channel setup and management",
              "Subscriber access and payment coordination",
              "Paid community operations",
              "Subscriber retention and engagement support",
            ],
          },
          {
            title: "Content Strategy & Monetisation",
            desc: "With the right audience, the right promotion, the right content strategy, and the right subscription system, Telegram can potentially become a significant source of revenue. We help you build all four — and manage them ongoing.",
            bullets: [
              "Content strategy aligned with your niche and audience",
              "Monetisation setup and subscription system management",
              "Ongoing content management and posting",
              "Revenue stream development through subscriptions",
            ],
          },
          {
            title: "Overall Channel Optimisation",
            desc: "We continuously work to improve your channel performance — refining content, improving reach, and helping you achieve the best possible results from your Telegram presence.",
            bullets: [
              "Ongoing channel performance review and optimisation",
              "Content and posting strategy refinement",
              "Reach and engagement improvement",
              "Regular performance reporting",
            ],
          },
        ],
      },
      {
        type: "flow",
        eyebrow: "How It Works",
        heading: <>From <span className="grad-text">setup to monetisation</span> — we handle everything</>,
        desc: "We manage the complete Telegram operation so you can focus on your content and brand.",
        nodes: [
          "📢 Channel Setup",
          "📣 Telegram Ads",
          "👥 Audience Growth",
          "📝 Content Management",
          "💎 Subscription Channel",
          "💰 Monetisation",
        ],
      },
      {
        type: "features",
        eyebrow: "Why Telegram",
        heading: <>A platform worth <span className="grad-text">taking seriously</span></>,
        items: [
          {
            title: "Direct Audience Access",
            desc: "Telegram gives you a direct line to your audience — no algorithm filtering your posts. Every subscriber you build is a real, direct connection.",
          },
          {
            title: "Subscription Monetisation",
            desc: "Telegram's native subscription system lets you monetise your content directly on the platform. With the right audience and strategy, this can become a meaningful additional revenue stream.",
          },
          {
            title: "Telegram Ads Reach",
            desc: "Telegram Ads let you reach highly targeted audiences across the platform's massive user base — an effective way to grow your channel with people genuinely interested in your niche.",
          },
          {
            title: "Pairs With Any Platform",
            desc: "Telegram works alongside your Instagram, YouTube, or any other platform. While you grow your main presence, we manage your Telegram — turning your audience into paying subscribers on another channel.",
          },
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "Do you manage Telegram Ads as well?",
            a: "Yes. We handle Telegram Ads campaign setup, targeting, and management as part of our Telegram management service. Ad spend runs through your Telegram Ads account.",
          },
          {
            q: "Can you manage a subscription channel?",
            a: "Yes. We can manage your Telegram subscription channel — handling access, subscriber management, and the operational side of running a paid Telegram community.",
          },
          {
            q: "Do you guarantee subscriber growth or revenue?",
            a: "No. We do not make guarantees on subscriber numbers, growth rates, or revenue figures. Results depend on your content, niche, market, and many factors outside our direct control. We focus on applying the right strategies and managing your Telegram professionally to give you the best possible chance of success.",
          },
          {
            q: "Can you manage Telegram alongside my other platforms?",
            a: "Absolutely. Many of our clients focus on Instagram or another primary platform while we handle their Telegram operations in parallel. We are set up to manage Telegram as a dedicated managed channel alongside whatever else you are working on.",
          },
          {
            q: "What does content management include?",
            a: "We handle content posting, scheduling, and ongoing channel management. Content strategy is developed in collaboration with you based on your niche, audience, and goals.",
          },
        ],
      },
      {
        type: "cta",
        heading: <>Ready to let us handle your <span className="grad-text">Telegram</span>?</>,
        desc: "From Telegram Ads and channel management to audience growth, subscriptions, and monetisation — we run the complete Telegram side of your business while you focus on your brand.",
        primary: { label: "Start Telegram Management", href: "/start-a-project" },
        secondary: { label: "Explore Telegram Automation & Bots", href: "/services/telegram-automation" },
      },
    ],
  },

  "n8n-automation": {
    metaDescription:
      "Custom n8n automation systems connecting your apps, APIs, databases, AI models, and business tools into intelligent automated workflows. Official APIs, self-hosted deployment, and custom AI agents.",
    hero: {
      eyebrow: "n8n Automation & AI Workflows",
      title: <>Automate Your Business <span className="grad-text">With n8n</span></>,
      subhead:
        "Connect your APIs, apps, databases and AI tools into intelligent workflows built around your business.",
      ctaPrimary: { label: "Build My Automation", href: "#inquiry" },
      ctaSecondary: { label: "Discuss Your Workflow", href: "#workflow" },
    },
    blocks: [
      {
        type: "notice",
        title: "Production-Grade Automation Architecture.",
        text: "XDY Media builds custom n8n automation systems that connect your apps, APIs, databases, AI models, communication platforms, and business tools into intelligent automated workflows. No fragile web scrapers, no insecure shortcuts — only authorized APIs, secure webhooks, and client-controlled cloud or on-premise environments.",
      },
      {
        type: "overview",
        eyebrow: "Unified System Orchestration",
        heading: "Automate repetitive operations, integrate disconnected platforms, and deploy intelligent AI agents.",
        paragraphs: [
          "Modern businesses run on dozens of SaaS tools, databases, communication channels, and AI models that don't talk to each other. Manual data re-entry, delayed lead routing, and fragmented notifications create hidden operational drag that slows company momentum.",
          "XDY Media engineers custom n8n automation systems designed around your exact operational logic. From single-endpoint webhook processors to enterprise multi-step AI agents and self-hosted n8n clusters, we connect your entire digital stack into a unified automated engine.",
        ],
        stats: [
          { value: "100%", label: "Official API & webhook compliance" },
          { value: "0 / mo", label: "Per-step cloud tax (self-hosted)" },
        ],
      },
      {
        type: "n8nVisualizer",
        eyebrow: "Visual Workflow Architecture",
        heading: <>From Trigger to Action: <span className="grad-text">How n8n Automates Work</span></>,
        desc: "A clear look at how XDY Media architects resilient, event-driven workflows that eliminate manual operational bottlenecks.",
      },
      {
        type: "features",
        eyebrow: "Pillar 01 · Core Workflows & Integration",
        heading: <>Core n8n, API &amp; <span className="grad-text">Webhook Engineering</span></>,
        desc: "From basic multi-step triggers to mission-critical API orchestration and real-time webhook listeners.",
        items: [
          {
            title: "1. n8n Workflow Automation",
            desc: "We design and build custom n8n workflows tailored to your specific business processes, ensuring reliable execution and complete visibility.",
            bullets: [
              "Custom workflow development & multi-step automation",
              "Scheduled workflows (cron triggers) & event-based runs",
              "Conditional workflow logic with IF/Switch branching",
              "Loops, batch processing & complex data transformation",
              "Workflow optimization, structured error handling & retries",
              "Audit logging, execution monitoring & reusable sub-workflows",
            ],
          },
          {
            title: "2. API Automation & Integration",
            desc: "Connect different applications and platforms through authenticated APIs, keeping data synchronized across your tools without human intervention.",
            bullets: [
              "REST API integrations & advanced HTTP requests",
              "API-to-API automation & JSON payload normalization",
              "API key, Bearer token & OAuth 2.0 authentication",
              "Bi-directional data synchronization & custom API flows",
              "Third-party service integration & multi-platform orchestration",
              "Architecture: App/API → n8n → Process Data → DB → API → Alert",
            ],
          },
          {
            title: "3. Webhook Automation",
            desc: "Build real-time event-driven automation using webhooks so actions trigger instantly the millisecond an event occurs.",
            bullets: [
              "Incoming webhook endpoint provisioning & signature validation",
              "Outgoing webhooks & event-driven trigger dispatch",
              "Form-to-API automation & payment event webhooks (Stripe / Razorpay)",
              "CRM webhook integration & real-time data ingestion",
              "Telegram and Discord community webhook workflows",
            ],
          },
        ],
      },
      {
        type: "features",
        eyebrow: "Pillar 02 · AI Automation & Agents",
        heading: <>Intelligent AI Workflows &amp; <span className="grad-text">Agent Systems</span></>,
        desc: "Combine n8n's workflow engine with modern LLMs and tool-calling agents to automate nuanced cognitive tasks.",
        items: [
          {
            title: "4. AI Automation",
            desc: "Build AI-powered workflows using n8n and modern AI APIs (OpenAI, Anthropic Claude, open weights) grounded in your business data.",
            bullets: [
              "AI workflow automation & custom LLM integrations",
              "AI-powered customer support triage & ticket routing",
              "Automated content, document & email parsing",
              "AI lead qualification, intent classification & summarization",
              "Structured JSON schema outputs & AI + API composite flows",
            ],
          },
          {
            title: "5. AI Agent Development",
            desc: "Build autonomous AI agents capable of reasoning, selecting tools, querying databases, and executing actions in external business systems.",
            bullets: [
              "Tool-enabled & function-calling AI agents in n8n",
              "API-connected & live database-connected agents",
              "Telegram and WhatsApp conversational business agents",
              "Multi-step agents with session memory & RAG knowledge lookup",
              "Human approval checkpoints for high-stakes actions",
              "Architecture: User → AI Agent → n8n → APIs/DB → AI Response → User",
            ],
          },
        ],
      },
      {
        type: "features",
        eyebrow: "Pillar 03 · Channels & Data Connectors",
        heading: <>Multi-Channel &amp; <span className="grad-text">Data Synchronisation</span></>,
        desc: "Wire your communications, sales pipelines, and databases directly into automated n8n pipelines.",
        items: [
          {
            title: "6. CRM & Lead Automation",
            desc: "Automate inbound lead collection, AI scoring, CRM synchronization, and sales notification pipelines with zero latency.",
            bullets: [
              "Multi-source lead capture & automated data enrichment",
              "AI lead qualification & score-based routing",
              "CRM synchronization (HubSpot, Salesforce, Pipedrive, custom SQL)",
              "Automated email follow-up sequencing & Google Sheets backup",
              "Architecture: Form → n8n → Validation → AI Scoring → CRM → Follow-up",
            ],
          },
          {
            title: "7. Telegram Automation",
            desc: "Integrate n8n with Telegram bot infrastructure. Seamlessly cross-references our dedicated Telegram Bot Development and Community Hub.",
            bullets: [
              "Telegram bot workflows & Telegram Bot API integrations",
              "Automated channel & group broadcasting queues",
              "Community workflow automation, role gates & payment checks",
              "Telegram-to-CRM & Telegram-to-database ingestion",
              "Admin moderation automation & scheduled editorial drops",
            ],
          },
          {
            title: "8. WhatsApp Automation",
            desc: "Connect n8n with official WhatsApp Business solutions, linking naturally with XDY Media's WhatsApp Platform & SaaS engine.",
            bullets: [
              "WhatsApp Business Platform & Cloud API workflows",
              "Customer inquiry triage & multi-agent shared inbox routing",
              "Automated transactional notifications & lead capture",
              "AI-assisted responses grounded in your business FAQs",
              "Database synchronization & webhook event processing",
            ],
          },
          {
            title: "9. Email Automation",
            desc: "Automate incoming and outgoing email workflows, routing attachments, and syncing customer interactions directly into your CRM.",
            bullets: [
              "Automated multi-step email workflows & lead follow-ups",
              "Transactional notification systems & customer receipts",
              "AI-powered email classification & key data extraction",
              "Email-to-CRM synchronization with Gmail & Outlook APIs",
            ],
          },
          {
            title: "10. Database Automation",
            desc: "Build reliable data pipelines connecting APIs, frontend apps, and modern relational or document databases.",
            bullets: [
              "PostgreSQL, MySQL, Supabase, Redis & Google Sheets",
              "API → n8n → PostgreSQL real-time record insertion",
              "Webhook → n8n → Database → CRM synchronization",
              "Database Change Event → n8n → API → Team Notification",
            ],
          },
          {
            title: "11. Social Media Workflow Automation",
            desc: "Compliant social automation that complements our social media services — built strictly on official, permitted platform APIs.",
            bullets: [
              "Content approval & editorial calendar pipelines",
              "Permitted scheduling integrations & cross-platform alerts",
              "Analytics data collection & performance aggregation",
              "Inbound message routing & customer lead collection",
            ],
          },
        ],
      },
      {
        type: "features",
        eyebrow: "Pillar 04 · Operations & Infrastructure",
        heading: <>Enterprise Operations, <span className="grad-text">Deployment &amp; Support</span></>,
        desc: "From custom node engineering to private self-hosting on your own VPS and debugging broken workflows.",
        items: [
          {
            title: "12. Business Process Automation",
            desc: "Eliminate repetitive manual tasks with tailored end-to-end automations engineered for operational precision.",
            bullets: [
              "Data entry automation & spreadsheet reconciliation",
              "Customer and partner onboarding workflows",
              "Internal team notifications & operational KPI alerts",
              "Automated report generation & document format processing",
              "Automated task creation in ClickUp, Asana, and Notion",
            ],
          },
          {
            title: "13. Custom n8n Integration Development",
            desc: "No native integration? If the platform provides a suitable API or webhook interface, XDY Media can build a custom n8n integration around it.",
            bullets: [
              "Bespoke HTTP Request node configurations",
              "Custom authentication workflows & token refresh loops",
              "Custom JavaScript/Python transformation nodes",
              "Proprietary ERP, internal software & legacy system bridges",
            ],
          },
          {
            title: "14. n8n Deployment & Self-Hosting",
            desc: "Production server infrastructure for clients who want total data privacy and zero cloud execution limits.",
            bullets: [
              "n8n installation & Docker containerized deployment",
              "Dedicated Linux VPS provisioning (AWS, Hetzner, DigitalOcean)",
              "Custom domain routing, automated HTTPS/SSL & environment variables",
              "PostgreSQL database configuration, queue mode & backup strategy",
              "Version upgrade assistance & migration from Zapier/Make",
              "Transparent note: No uptime guarantee without explicit SLA agreement",
            ],
          },
          {
            title: "15. Existing Workflow Fixes & Optimization",
            desc: "Diagnose, repair, and optimize preexisting n8n systems that are failing, hitting rate limits, or losing data.",
            bullets: [
              "Workflow debugging & broken node diagnosis",
              "API authentication & expired token fixes",
              "Webhook troubleshooting & missing payload resolution",
              "Execution restructuring for high-concurrency performance",
              "Error-handling overhauls & automated retry dead-letter queues",
            ],
          },
        ],
      },
      {
        type: "useCases",
        eyebrow: "Targeted Applications",
        heading: <>Tailored for <span className="grad-text">Every Organization</span></>,
        desc: "Discover how agencies, creators, e-commerce storefronts, SaaS ventures, and operational teams deploy n8n.",
      },
      {
        type: "flow",
        eyebrow: "The Integrated Stack",
        heading: <>One Connected Architecture: <span className="grad-text">The Complete System</span></>,
        desc: "Clients can hire XDY Media for a single targeted integration or for an end-to-end automation architecture connecting web development, messaging channels, and internal databases.",
        nodes: [
          "🌐 Web Development",
          "⚡ API Integration",
          "⚙️ n8n Automation Engine",
          "🤖 AI Workflows & Agents",
          "📱 Telegram & WhatsApp",
          "📈 Social & CRM Systems",
        ],
      },
      {
        type: "techStack",
        eyebrow: "Engineering Foundations",
        heading: "Our automation and AI stack",
        desc: "Proven open-source tools, resilient protocols, and official developer APIs designed for stability.",
        columns: [
          {
            title: "Workflow Engine",
            desc: "High-throughput node orchestration.",
            badges: ["n8n Self-Hosted", "n8n Cloud", "Docker Compose", "Webhooks", "Cron Triggers", "JSON Schema"],
          },
          {
            title: "AI & Models",
            desc: "Intelligent cognitive automation.",
            badges: ["OpenAI GPT", "Anthropic Claude", "LangChain", "Tool Calling", "RAG Embeddings", "Vector DBs"],
          },
          {
            title: "Databases & Storage",
            desc: "Persistent state and audit trails.",
            badges: ["PostgreSQL", "Supabase", "MySQL", "Redis Queues", "Google Sheets", "S3 Storage"],
          },
          {
            title: "Integrations & APIs",
            desc: "Official platform connectors.",
            badges: ["REST APIs", "OAuth 2.0", "WhatsApp Cloud API", "Telegram Bot API", "HubSpot", "Stripe"],
          },
        ],
      },
      {
        type: "n8nSelector",
        heading: <>Configure Your <span className="grad-text">Automation Scope</span></>,
      },
      {
        type: "faq",
        items: [
          {
            q: "How does n8n compare to Zapier or Make?",
            a: "n8n offers several critical advantages: (1) It can be self-hosted on your own private cloud/VPS, giving you 100% data privacy and compliance. (2) Self-hosted n8n has no per-task or per-step pricing penalties, saving thousands as volume scales. (3) It allows full custom JavaScript, Python, complex branching, and native AI Agent nodes.",
          },
          {
            q: "Can you deploy n8n on our own servers or cloud accounts?",
            a: "Yes. We regularly deploy n8n using Docker Compose on client-owned Linux VPS environments (Hetzner, AWS, DigitalOcean), complete with custom domains, automated SSL, PostgreSQL queue databases, and automated backup routines.",
          },
          {
            q: "What if one of our apps or tools does not have a native n8n node?",
            a: "If the platform provides a documented REST API, GraphQL endpoint, or webhook system, we build a custom integration using n8n's advanced HTTP Request node, custom authentication handlers, and data transformation scripts.",
          },
          {
            q: "Can n8n connect with WhatsApp and Telegram?",
            a: "Yes. In fact, cross-channel communication is an XDY Media flagship specialty. We build bi-directional workflows connecting WhatsApp Business Cloud API and Telegram bots directly into your CRM, database, and internal notification channels.",
          },
          {
            q: "Do you offer support and fixes for existing broken n8n workflows?",
            a: "Yes. If you have an existing n8n instance with failing nodes, authentication errors, rate limiting, or outdated workflows, our engineers audit, debug, optimize, and repair your setup under one-time or retainer engagements.",
          },
          {
            q: "Do you guarantee 100% uptime for automation workflows?",
            a: "We do not claim guaranteed 100% uptime unless a formal enterprise SLA agreement is in place. External APIs, platform rate limits, and network connectivity are outside any single party's direct control. However, we engineer resilient architectures featuring automatic retries, dead-letter error handling, execution logging, and failover notifications to maximize availability.",
          },
          {
            q: "Can we hire XDY Media for a single integration instead of a whole system?",
            a: "Absolutely. You can hire us for an individual API integration, a single AI webhook flow, or a comprehensive end-to-end automation architecture connecting your entire company.",
          },
        ],
      },
      {
        type: "cta",
        heading: <>Ready to automate your operations <span className="grad-text">with n8n</span>?</>,
        desc: "From individual API connectors to enterprise AI workflow orchestration — let's architect your automation engine.",
        primary: { label: "Build My Automation", href: "#inquiry" },
        secondary: { label: "Schedule a Consultation", href: "/book-a-consultation" },
      },
    ],
  },

  "crm-automation": {
    metaDescription:
      "Automated CRM and lead management systems that capture, qualify, route and follow up on leads through websites, WhatsApp, Telegram, email, and your CRM — powered by n8n and custom APIs.",
    hero: {
      eyebrow: "CRM & Lead Automation",
      title: <>Capture, Qualify & Close Leads <span className="grad-text">Automatically</span></>,
      subhead:
        "Build automated systems that capture every lead, update your CRM instantly, send timely follow-ups, and move prospects through your sales pipeline — without manual effort.",
      ctaPrimary: { label: "Automate My CRM", href: "/contact" },
      ctaSecondary: { label: "See How It Works", href: "#offerings" },
    },
    blocks: [
      {
        type: "notice",
        title: "No More Missed Leads or Manual Data Entry.",
        text: "XDY Media builds automated CRM and lead management systems that connect your website, forms, social platforms, WhatsApp, Telegram, email, and CRM tools into seamless sales workflows. Every lead gets captured, organized, qualified, and followed up — automatically.",
      },
      {
        type: "overview",
        eyebrow: "Intelligent Lead Operations",
        heading: "Turn every inquiry into an organized, tracked sales opportunity.",
        paragraphs: [
          "Businesses lose revenue not because they lack leads, but because leads fall through the cracks — unanswered inquiries, delayed follow-ups, CRM records not updated, and sales teams notified too late. Manual processes cannot keep pace with modern lead volume.",
          "XDY Media engineers automated CRM and lead workflows using n8n, REST APIs, and custom webhook pipelines. We connect your lead sources — website forms, WhatsApp, Telegram, social ads, and landing pages — to your CRM, communication channels, and sales team in real time.",
        ],
        stats: [
          { value: "<2s", label: "Lead capture to CRM sync latency" },
          { value: "100%", label: "Leads tracked, zero manual entry" },
        ],
      },
      {
        type: "features",
        eyebrow: "CRM Automation Capabilities",
        heading: <>What XDY Media <span className="grad-text">builds for you</span></>,
        desc: "From basic lead capture webhooks to full AI-assisted pipeline automation across your CRM and communication stack.",
        items: [
          {
            title: "Automated Lead Capture",
            desc: "Capture leads from every source — website forms, landing pages, WhatsApp, Telegram, Facebook Lead Ads, and third-party APIs — and sync them to your CRM instantly.",
            bullets: [
              "Website & landing page form webhooks",
              "WhatsApp & Telegram lead intake flows",
              "Facebook & Instagram Lead Ad sync",
              "Custom intake form API connectors",
            ],
          },
          {
            title: "Lead Qualification & Routing",
            desc: "Automatically score and qualify incoming leads based on criteria like budget, location, service type, and intent signals — then route them to the right sales team member.",
            bullets: [
              "Rule-based lead scoring and tiering",
              "AI-assisted qualification questions",
              "Team routing by region, product, or load",
              "Instant sales team notifications",
            ],
          },
          {
            title: "CRM Integration & Sync",
            desc: "Keep your CRM records always up-to-date with bi-directional data sync. New leads, stage changes, and activity logs flow automatically between your tools.",
            bullets: [
              "HubSpot, Salesforce, Zoho CRM integration",
              "Google Sheets & Airtable sync",
              "Custom CRM API connectors",
              "Deduplication and data enrichment",
            ],
          },
          {
            title: "Automated Follow-Up Sequences",
            desc: "Send timely, personalized follow-ups via WhatsApp, email, or Telegram triggered by lead stage changes, inactivity, or specific events — without any manual sending.",
            bullets: [
              "WhatsApp follow-up message sequences",
              "Automated email drip campaigns",
              "Telegram notification triggers",
              "Time-delay and condition-based flows",
            ],
          },
          {
            title: "Sales Pipeline Automation",
            desc: "Automate deal stage progressions, task creation, and team reminders based on lead activity, so your pipeline stays clean and your team stays on top of every opportunity.",
            bullets: [
              "Deal stage auto-progression rules",
              "Task & reminder creation triggers",
              "Pipeline health alerts and reports",
              "Lost lead re-engagement flows",
            ],
          },
          {
            title: "Sales Team Notifications",
            desc: "Instantly alert the right sales team members the moment a high-value lead arrives or a deal changes stage — via WhatsApp, Telegram, Slack, or email.",
            bullets: [
              "Real-time WhatsApp & Telegram alerts",
              "Slack & email notification pipelines",
              "Escalation flows for hot leads",
              "Daily summary digests for managers",
            ],
          },
        ],
      },
      {
        type: "techStack",
        heading: "Tools & platforms we integrate",
        desc: "We work with the CRMs, communication channels, and automation platforms your business already uses — no vendor lock-in.",
        columns: [
          { title: "CRMs & Data", desc: "Keep records clean and synchronized.", badges: ["HubSpot", "Salesforce", "Zoho CRM", "Airtable", "Google Sheets", "Notion"] },
          { title: "Communication Channels", desc: "Reach leads where they are.", badges: ["WhatsApp Business API", "Telegram Bot API", "Email (SMTP/SendGrid)", "Slack", "Gmail"] },
          { title: "Automation Infrastructure", desc: "The engine powering your workflows.", badges: ["n8n", "REST APIs", "Webhooks", "Make (Integromat)", "Custom Scripts"] },
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Which CRMs do you integrate with?", a: "We integrate with HubSpot, Salesforce, Zoho CRM, Pipedrive, Airtable, Google Sheets, Notion, and any CRM that provides an API or webhook endpoint. If you use a custom-built CRM, we can connect to it via REST API." },
          { q: "Can you connect our website lead forms to our WhatsApp and CRM at the same time?", a: "Yes. A single form submission can simultaneously create a CRM contact, send an automated WhatsApp message to the lead, notify your sales team on Telegram or Slack, and trigger a follow-up email sequence — all within seconds." },
          { q: "Do you build the automation on top of our existing CRM or replace it?", a: "We build automation on top of whatever CRM you already use. We don't replace existing systems — we make them smarter and more connected through automated workflows." },
          { q: "How long does it take to set up a CRM automation system?", a: "A focused lead capture + CRM sync + follow-up flow typically takes 1–2 weeks. More complex multi-step pipelines with AI qualification and multi-channel follow-ups take 2–4 weeks." },
        ],
      },
      {
        type: "cta",
        heading: <>Ready to automate your <span className="grad-text">sales pipeline</span>?</>,
        desc: "From lead capture to CRM sync to automated follow-ups — let's build a system that never misses an opportunity.",
        primary: { label: "Automate My CRM", href: "/contact" },
        secondary: { label: "Schedule a Consultation", href: "/book-a-consultation" },
      },
    ],
  },

  "business-process-automation": {
    metaDescription:
      "Automate repetitive business operations by connecting your applications, databases, spreadsheets, communication platforms, and internal tools into intelligent workflows powered by n8n and custom APIs.",
    hero: {
      eyebrow: "Business Process Automation",
      title: <>Eliminate Repetitive Work with <span className="grad-text">Smart Automation</span></>,
      subhead:
        "Connect your apps, data, teams, and workflows into one efficient automated system — so your people can focus on work that matters.",
      ctaPrimary: { label: "Automate My Business", href: "/contact" },
      ctaSecondary: { label: "See What We Automate", href: "#offerings" },
    },
    blocks: [
      {
        type: "notice",
        title: "Repetitive Tasks Kill Productivity. Automation Fixes That.",
        text: "XDY Media engineers intelligent business process automation systems that connect your existing applications, databases, communication tools, and internal workflows — eliminating manual repetition, reducing human error, and accelerating your operations across every department.",
      },
      {
        type: "overview",
        eyebrow: "End-to-End Operations Automation",
        heading: "Automate the work that slows your team down every day.",
        paragraphs: [
          "Every business has operational drag — repetitive data entry, manual report generation, delayed notifications, disconnected systems that require human bridges. These inefficiencies compound over time, scaling poorly and consuming hours that should go toward growth.",
          "XDY Media maps your existing business processes, identifies automation opportunities, and engineers n8n-powered workflow systems that handle the repetitive work end-to-end. From form processing and document generation to cross-platform data sync and internal notifications, we automate what drains your team.",
        ],
        stats: [
          { value: "80%+", label: "Reduction in manual operational tasks" },
          { value: "24/7", label: "Automated workflows running continuously" },
        ],
      },
      {
        type: "features",
        eyebrow: "Business Automation Capabilities",
        heading: <>What XDY Media <span className="grad-text">automates for you</span></>,
        desc: "From simple task automation to cross-department operational workflows spanning your entire tool stack.",
        items: [
          {
            title: "Repetitive Task Automation",
            desc: "Identify and eliminate high-frequency manual tasks — data transfers, copy-pasting between tools, status updates, and routine report generation — through automated n8n workflows.",
            bullets: [
              "Automated data entry and transfer",
              "Recurring report generation",
              "Scheduled status updates and pings",
              "File organization and archiving workflows",
            ],
          },
          {
            title: "Form & Data Processing",
            desc: "Automatically collect, validate, transform, and route form submissions, survey responses, and inbound data — feeding structured records into your databases and tools without human intervention.",
            bullets: [
              "Form webhook processors",
              "Data validation and transformation",
              "Multi-destination data routing",
              "Google Forms, Typeform & custom integrations",
            ],
          },
          {
            title: "Automated Notifications & Alerts",
            desc: "Keep every team member and stakeholder informed automatically — triggered by events, thresholds, schedules, or real-time data changes — across WhatsApp, Telegram, Slack, and email.",
            bullets: [
              "Event-triggered team notifications",
              "Threshold and anomaly alerts",
              "Scheduled digest reports",
              "Cross-platform multi-channel alerts",
            ],
          },
          {
            title: "Document & Reporting Workflows",
            desc: "Automatically generate, populate, and distribute reports, invoices, contracts, and business documents from your live data — on schedule or triggered by specific events.",
            bullets: [
              "Automated invoice and contract generation",
              "Scheduled PDF report creation",
              "Google Docs & Sheets auto-population",
              "Document distribution via email or Telegram",
            ],
          },
          {
            title: "Database Synchronization",
            desc: "Keep your databases, CRMs, spreadsheets, and SaaS tools in perfect sync automatically — eliminating data silos and ensuring every team works from a single source of truth.",
            bullets: [
              "Bi-directional database sync workflows",
              "Google Sheets ↔ database pipelines",
              "CRM and ERP data bridges",
              "Scheduled reconciliation jobs",
            ],
          },
          {
            title: "Cross-Platform Workflow Integration",
            desc: "Bridge disconnected business tools and platforms into unified operational workflows — connecting project management, communication, billing, support, and data systems.",
            bullets: [
              "Slack / Telegram ↔ project tool bridges",
              "Billing and accounting system hooks",
              "Support ticket automation flows",
              "AI-assisted decision routing",
            ],
          },
        ],
      },
      {
        type: "techStack",
        heading: "Tools & platforms we automate",
        desc: "We integrate with the tools your business already uses — no replacements, no disruption, just smarter connections between them.",
        columns: [
          { title: "Productivity & Data", desc: "The tools your team works in every day.", badges: ["Google Workspace", "Notion", "Airtable", "ClickUp", "Asana", "Monday.com"] },
          { title: "Communication & Alerts", desc: "Notify the right people at the right time.", badges: ["WhatsApp API", "Telegram", "Slack", "Email (SMTP)", "Discord"] },
          { title: "Automation Infrastructure", desc: "The engine connecting your entire stack.", badges: ["n8n", "REST APIs", "Webhooks", "PostgreSQL", "MySQL", "Custom Scripts"] },
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Which business processes are best suited for automation?", a: "Any process that is high-frequency, rule-based, and currently involves manual data handling is a strong automation candidate. Common examples include lead routing, order notifications, invoice generation, report distribution, form processing, and internal team alerts." },
          { q: "Do you need to replace our existing software to implement automation?", a: "No. We build automation on top of your existing tools — connecting them through APIs and webhooks rather than replacing them. Your team keeps working in the same software while we eliminate the manual bridges between systems." },
          { q: "Can you automate processes that span multiple departments?", a: "Yes. We specialize in cross-department workflow automation — connecting sales, operations, finance, marketing, and support into unified automated pipelines that move data and trigger actions across your entire organization." },
          { q: "How long does a business process automation project take?", a: "A focused single-process automation (e.g., form processing to CRM to notification) typically takes 1–2 weeks. Multi-department, cross-platform automation systems take 3–6 weeks depending on complexity and the number of integrations required." },
        ],
      },
      {
        type: "cta",
        heading: <>Ready to automate your <span className="grad-text">business operations</span>?</>,
        desc: "From single task automation to full cross-department workflow systems — let's eliminate the repetitive work slowing your team down.",
        primary: { label: "Automate My Business", href: "/contact" },
        secondary: { label: "Schedule a Consultation", href: "/book-a-consultation" },
      },
    ],
  },
};

export function getServiceContent(slug) {
  return SERVICE_CONTENT[slug];
}
