"use client";

import GlassCard from "./GlassCard";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const DEFAULT_CASES = [
  {
    title: "Agencies & Studios",
    desc: "Automate client onboarding, multi-channel reporting, task assignment in ClickUp/Asana, and client deliverables sync without manual coordination.",
    badge: "Operations",
  },
  {
    title: "Creators & Media",
    desc: "Coordinate content calendars, auto-publish cross-platform notifications, track sponsor leads, and sync subscriber milestones into private communities.",
    badge: "Audience",
  },
  {
    title: "E-commerce Brands",
    desc: "Process multi-channel order webhooks, sync inventory across stores and warehouses, send real-time WhatsApp delivery updates, and trigger abandoned cart re-engagement.",
    badge: "Commerce",
  },
  {
    title: "SaaS & Tech Startups",
    desc: "Connect user signups to billing (Stripe), provision accounts via webhooks, ingest usage logs, and trigger automated Slack alerts on high-intent user activity.",
    badge: "Product",
  },
  {
    title: "Communities (Telegram / Discord)",
    desc: "Automate member role gates, token or wallet balance checks, anti-raid notification dispatch, and community broadcast queues across public and private tiers.",
    badge: "Community",
  },
  {
    title: "Marketing Teams",
    desc: "Collect ad campaign metrics across Meta and Google, enrich inbound lead lists, sync webinar attendees, and automate newsletter editorial triggers.",
    badge: "Acquisition",
  },
  {
    title: "Sales Teams",
    desc: "Zero-latency lead routing, AI-driven qualification, CRM deal updates in HubSpot or Salesforce, and instant calendar booking notification loops.",
    badge: "Revenue",
  },
  {
    title: "Customer Support Desks",
    desc: "Tier-1 AI inquiry triage, automated ticket routing, knowledge base search, and seamless escalation to human team inboxes with full conversation context.",
    badge: "Support",
  },
  {
    title: "Internal Operations",
    desc: "Eliminate repetitive spreadsheet data entry, automate document approvals, sync invoices with accounting software, and schedule recurring operational alerts.",
    badge: "Efficiency",
  },
  {
    title: "Web3 & Crypto Projects",
    desc: "Listen to blockchain smart contract events, trigger automated Discord/Telegram announcement bots, verify holders cryptographically, and track secondary market sales.",
    badge: "Web3",
  },
];

export default function UseCasesGrid({ useCases }) {
  const items = useCases?.items || DEFAULT_CASES;

  return (
    <section className="px-4 pb-20">
      <div className="mx-auto max-w-[1240px]">
        <SectionHead
          eyebrow={useCases?.eyebrow || "Industries & Use Cases"}
          title={useCases?.heading || <>Engineered for <span className="grad-text">Every Growth Model</span></>}
          desc={useCases?.desc || "Whether you operate a creator brand, an e-commerce storefront, or an enterprise SaaS platform, n8n automation fits cleanly into your workflow."}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map((item, idx) => (
            <Reveal key={item.title} delay={(idx % 5) * 0.05}>
              <GlassCard className="h-full rounded-2xl p-5 border-white/10 flex flex-col justify-between hover:border-white/25 transition-colors">
                <div>
                  <div className="mb-2.5 flex items-center justify-between">
                    <span className="text-[0.68rem] font-bold uppercase tracking-wider text-silver-blue font-mono">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-[0.95rem] font-bold text-white">{item.title}</h4>
                  <p className="mt-2 text-[0.8rem] text-text-2 leading-relaxed">{item.desc}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
