// Single source of truth for navigation, footer, and the services catalog.
// Every page and component reads from here so content stays in sync site-wide.

export const SITE = {
  name: "Xdy Media",
  legalName: "XDY Media",
  tagline: "A technology-driven digital growth and automation agency.",
  email: "hello@xdymedia.com",
  phone: "+30 697 044 5764",
  handle: "@xdymedia",
  instagramUrl: "https://instagram.com/xdymedia",
  telegramUrl: "https://t.me/xdymedia",
  whatsappUrl: "https://wa.me/306970445764",
};

export const SERVICES = [
  // PILLAR 01 · SOCIAL & PLATFORM (tg-blue)
  {
    slug: "telegram-automation",
    title: "Telegram, Web3 & Bots",
    short: "Telegram Bots",
    desc: "Custom Telegram bots, MTProto multi-account clusters, Web3/NFT holder verification, token-gated groups, crypto payment bots, and community automation.",
    pillar: "social",
    accent: "tg-blue",
    count: "01",
    featured: true,
    ctaLabel: "Explore Telegram Hub",
  },
  {
    slug: "account-recovery",
    title: "Account Recovery Support",
    short: "Account Recovery",
    desc: "Legitimate, policy-compliant escalation and documentation assistance for disabled, compromised, or restricted accounts across every major platform.",
    pillar: "social",
    accent: "tg-blue",
    count: "02",
    featured: true,
    ctaLabel: "Get Account Support",
  },
  {
    slug: "platform-verification",
    title: "Meta & WhatsApp Verification",
    short: "Verification Concierge",
    desc: "Official Meta Blue Tick setup (Instagram & Facebook) and WhatsApp Official Business Account (Green Badge) verification assistance with fast turnaround.",
    pillar: "social",
    accent: "tg-blue",
    count: "03",
    featured: true,
    ctaLabel: "Get Verified",
  },
  {
    slug: "telegram-management",
    title: "Telegram Management & Growth",
    short: "Telegram Management",
    desc: "Complete Telegram management — channel management, Telegram Ads, audience growth, content posting, subscription channel management, and monetisation support.",
    pillar: "social",
    accent: "tg-blue",
    count: "04",
    featured: true,
    ctaLabel: "Explore Telegram Management",
  },
  {
    slug: "social-media",
    title: "Social Media Growth",
    short: "Social Growth",
    desc: "Multi-channel audience growth, content calendar planning, community engagement, and brand building on Instagram, YouTube, and X.",
    pillar: "social",
    accent: "tg-blue",
    count: "05",
    featured: false,
  },
  {
    slug: "meta-business-suite",
    title: "Meta Business Suite Management",
    short: "Meta Management",
    desc: "Professional Instagram and Facebook management through Meta Business Suite — content scheduling, inbox management, analytics, Meta Ads workflows, and account administration.",
    pillar: "social",
    accent: "tg-blue",
    count: "06",
    featured: false,
  },
  {
    slug: "content-marketing",
    title: "Content Marketing & Strategy",
    short: "Content Marketing",
    desc: "Editorial strategy, thought leadership articles, brand storytelling, conversion copywriting, and audience retention funnels.",
    pillar: "social",
    accent: "tg-blue",
    count: "07",
    featured: false,
  },

  // PILLAR 02 · AUTOMATION & AI (wa-green)
  {
    slug: "n8n-automation",
    title: "n8n Automation & AI Workflows",
    short: "n8n & AI Workflows",
    desc: "Custom n8n automation systems connecting your apps, APIs, databases, AI models, and business tools into intelligent automated workflows.",
    pillar: "automation",
    accent: "wa-green",
    count: "08",
    featured: true,
    ctaLabel: "Build My Automation",
  },
  {
    slug: "api-automation",
    title: "API Integration & Webhooks",
    short: "API Integration",
    desc: "Connect your business tools, CRMs, ERPs, payment gateways, and external databases with robust REST APIs and webhooks.",
    pillar: "automation",
    accent: "wa-green",
    count: "09",
    featured: true,
    ctaLabel: "Explore API Services",
  },
  {
    slug: "ai-automation",
    title: "AI Automation & Chatbots",
    short: "AI & Chatbots",
    desc: "AI-powered customer support, automated lead qualification, LLM knowledge retrieval, and predictive business workflows.",
    pillar: "automation",
    accent: "wa-green",
    count: "10",
    featured: true,
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation & SaaS",
    short: "WhatsApp SaaS",
    desc: "Official WhatsApp Business Platform setups, automated customer journeys, AI chatbots, and multi-agent shared team inboxes.",
    pillar: "automation",
    accent: "wa-green",
    count: "11",
    featured: false,
  },
  {
    slug: "crm-automation",
    title: "CRM & Lead Automation",
    short: "CRM & Lead Automation",
    desc: "Automate lead capture, CRM updates, follow-ups, and sales pipelines to turn inquiries into organized, actionable opportunities.",
    pillar: "automation",
    accent: "wa-green",
    count: "12",
    featured: false,
  },
  {
    slug: "business-process-automation",
    title: "Business Process Automation",
    short: "Business Process",
    desc: "Automate repetitive business operations by connecting your tools, data, teams, and workflows into one efficient system.",
    pillar: "automation",
    accent: "wa-green",
    count: "13",
    featured: false,
  },

  // PILLAR 03 · DIGITAL & GROWTH (web3-purple)
  {
    slug: "website-development",
    title: "Website Development",
    short: "Website Development",
    desc: "Custom business websites, corporate sites, high-converting landing pages, e-commerce engines, and secure cloud infrastructure built for speed.",
    pillar: "digital",
    accent: "web3-purple",
    count: "14",
    featured: true,
  },
  {
    slug: "seo",
    title: "SEO & Search Optimization",
    short: "SEO",
    desc: "Technical SEO audits, high-intent keyword targeting, on-page optimization, and authoritative search ranking strategies.",
    pillar: "digital",
    accent: "web3-purple",
    count: "15",
    featured: true,
  },
  {
    slug: "growth",
    title: "Growth Strategy & CRO",
    short: "Growth Strategy",
    desc: "Data-driven acquisition roadmaps, conversion rate optimization, sales funnels, performance analytics, and retention systems.",
    pillar: "digital",
    accent: "web3-purple",
    count: "16",
    featured: true,
  },
  {
    slug: "custom-software",
    title: "Custom Software & SaaS",
    short: "Custom Software",
    desc: "Bespoke web portals, client dashboards, subscription SaaS architectures, internal management tools, and custom CRMs.",
    pillar: "digital",
    accent: "web3-purple",
    count: "17",
    featured: false,
  },
  {
    slug: "creative",
    title: "Creative Studio & Branding",
    short: "Creative Studio",
    desc: "Brand visual identities, advertising creatives, campaign banners, social templates, and high-converting marketing collateral.",
    pillar: "digital",
    accent: "web3-purple",
    count: "18",
    featured: false,
  },
  {
    slug: "web3",
    title: "Web3, Crypto & NFTs",
    short: "Web3 & Crypto",
    desc: "Telegram, Discord & X community scaling, token-gated access, NFT holder verification, and crypto-native growth campaigns.",
    pillar: "digital",
    accent: "web3-purple",
    count: "19",
    featured: false,
  },
];

export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug);
}

// Platforms covered by the flagship Account Recovery service.
export const RECOVERY_PLATFORMS = [
  "Instagram",
  "Snapchat",
  "Facebook Ads Accounts",
  "Telegram",
  "TikTok",
  "WhatsApp",
  "& other major platforms",
];

// Pricing tiers for /solutions — INR carries the real published rates;
// USD is a placeholder until the client finalizes international pricing.
export const PRICING_TIERS = [
  {
    plan: "Starter",
    audience: "Small Businesses",
    desc: "For emerging brands getting started with automated WhatsApp customer support.",
    inr: { monthly: "₹1,499", annual: "₹1,199", annualTotal: "₹14,388" },
    usd: { monthly: "$XXX", annual: "$XXX", annualTotal: "$XXXX" },
    features: [
      "Official WhatsApp API integration",
      "Basic shared team inbox (1-2 users)",
      "Customer contact management",
      "Standard message templates",
      "Basic automated welcome sequence",
      "Email support",
    ],
  },
  {
    plan: "Business",
    audience: "Growing Companies",
    desc: "For scaling businesses needing CRM integration, multiple agents, and analytics.",
    accent: "wa-green",
    inr: { monthly: "₹3,499", annual: "₹2,799", annualTotal: "₹33,588" },
    usd: { monthly: "$XXX", annual: "$XXX", annualTotal: "$XXXX" },
    features: [
      "Everything in Starter",
      "Multi-agent routing (up to 5 agents)",
      "XDY WhatsApp CRM with tags & notes",
      "Automated lead management",
      "Decision tree automation flows",
      "Delivery & response analytics",
    ],
  },
  {
    plan: "Pro",
    audience: "Agencies & E-commerce",
    desc: "For high-velocity operations demanding AI chatbots and automated transactions.",
    featured: true,
    inr: { monthly: "₹6,999", annual: "₹5,599", annualTotal: "₹67,188" },
    usd: { monthly: "$XXXX", annual: "$XXXX", annualTotal: "$XXXXX" },
    features: [
      "Everything in Business",
      "Custom AI / LLM knowledge chatbot",
      "Advanced webhook & API access",
      "Shopify / WooCommerce sync",
      "Multiple phone number support",
      "Advanced sales attribution tracking",
    ],
  },
  {
    plan: "Enterprise",
    audience: "Large Organizations",
    desc: "For enterprises requiring custom infrastructure, custom integrations, and dedicated SLAs.",
    inr: { monthly: "Custom", annual: "Custom" },
    usd: { monthly: "Custom", annual: "Custom" },
    note: "Tailored commercial proposal.",
    features: [
      "Everything in Pro",
      "Dedicated cloud server infrastructure",
      "Custom ERP & database integrations",
      "Advanced role-based permissions",
      "Dedicated account manager & SLA",
      "Bespoke workflow engineering",
    ],
  },
];

// Full-service OnlyFans Management (OFM) offering — a flagship content
// pillar alongside the core digital-agency services. `highlight: true`
// marks the items the client asked to emphasize (#1,2,3,4,5,6,7,9); the
// exact priority ORDER the client intends is still unconfirmed (their note
// on it was garbled), so items stay in the original numbered order for now
// — reorder here, in one place, once that's clarified.
export const OFM_SERVICES = [
  { n: "01", title: "Multi-Platform Traffic Funnels", desc: "Coordinated acquisition funnels across Reddit, X, TikTok, Instagram, and other traffic sources, engineered to route interest toward paid subscriptions.", highlight: true },
  { n: "02", title: "Maximum Reach Strategy", desc: "Platform-specific posting cadence, hashtag/SEO strategy, and algorithm-aware content pacing to maximize organic discovery.", highlight: true },
  { n: "03", title: "OnlyFans Account Management", desc: "Full account operations — profile optimization, pricing strategy, bundles, promotions, and day-to-day platform administration.", highlight: true },
  { n: "04", title: "Content Management", desc: "Content calendar planning, upload scheduling, PPV packaging, and organization of your media library for consistent output.", highlight: true },
  { n: "05", title: "Fan & Subscriber Management", desc: "Subscriber segmentation, retention campaigns, re-engagement flows, and relationship tracking to reduce churn.", highlight: true },
  { n: "06", title: "DM & Conversion Management", desc: "Trained chat teams handling inbound messages under your brand voice, focused on engagement and conversion — never on autopilot.", highlight: true },
  { n: "07", title: "PPV & Monetization", desc: "Pay-per-view campaign strategy, bundle pricing, upsell sequencing, and revenue-per-fan optimization.", highlight: true },
  { n: "08", title: "Social Media Management", desc: "Cross-platform brand presence management that feeds your funnel — Instagram, X, TikTok, and Reddit content operations." },
  { n: "09", title: "Telegram & Community Management", desc: "Dedicated Telegram channel/group management, broadcast automation, and community moderation to deepen fan loyalty.", highlight: true },
  { n: "10", title: "Automation & Technology", desc: "CRM tooling, automated drip campaigns, and workflow automation layered on top of your creator operation." },
  { n: "11", title: "Analytics & Optimization", desc: "Revenue, retention, and funnel analytics reviewed on a recurring cadence to continuously optimize performance." },
];

export const OFM_ADVANTAGE = [
  { label: "Multi-Platform Traffic", note: "Reddit · X · TikTok · Instagram" },
  { label: "Funnel Capture", note: "Optimized profile & landing flow" },
  { label: "Fan Engagement", note: "Trained DM & conversion team" },
  { label: "PPV & Monetization", note: "Bundles, upsells, pricing strategy" },
  { label: "Retention & Analytics", note: "Recurring revenue optimization" },
];

// Mega-menu grouping (pillar order + which services show in the nav dropdown)
export const MEGA_MENU = [
  {
    title: "Social & Platform",
    pillarKey: "social",
    accent: "tg-blue",
    items: [
      "platform-verification",
      "telegram-automation",
      "account-recovery",
      "telegram-management",
      "social-media",
      "meta-business-suite",
      "content-marketing",
    ],
  },
  {
    title: "Automation & AI",
    pillarKey: "automation",
    accent: "wa-green",
    items: [
      "n8n-automation",
      "api-automation",
      "ai-automation",
      "whatsapp-automation",
      "crm-automation",
      "business-process-automation",
    ],
  },
  {
    title: "Digital & Growth",
    pillarKey: "digital",
    accent: "web3-purple",
    items: [
      "website-development",
      "seo",
      "growth",
      "custom-software",
      "creative",
      "web3",
    ],
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasMega: true },
  { href: "/onlyfans-management", label: "OFM" },
  { href: "/solutions", label: "Solutions" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_SERVICES = [
  "platform-verification",
  "website-development",
  "whatsapp-automation",
  "n8n-automation",
  "telegram-automation",
  "telegram-management",
  "social-media",
  "meta-business-suite",
  "api-automation",
  "creative",
  "seo",
];

export const FOOTER_COMPANY = [
  { href: "/about", label: "About Us" },
  { href: "/onlyfans-management", label: "OFM Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Process" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_RESOURCES = [
  { href: "/faq", label: "FAQ" },
  { href: "/solutions", label: "Pricing" },
  { href: "/dashboard", label: "Client Portal" },
];

export const FOOTER_LEGAL = [
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/refunds", label: "Refund Policy" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
];
