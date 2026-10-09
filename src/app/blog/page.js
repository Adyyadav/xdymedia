import Link from "next/link";
import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";

export const metadata = {
  title: "Blog",
  description: "Insights on digital growth, social media, SEO, automation, and marketing from the XDY Media team.",
};

const POSTS = [
  {
    date: "SEP 06, 2026",
    tag: "AUTOMATION TECH",
    featured: true,
    title: "Scaling Telegram Ecosystems: Bot API vs. MTProto Multi-Account Clusters",
    excerpt: "Architectural breakdown of high-throughput Telegram automation, flood-wait handling, token gating, and Telegram Stars native checkout.",
    href: "/services/telegram-automation",
    linkLabel: "Read deep dive →",
  },
  {
    date: "SEP 01, 2026",
    title: "Building a social media strategy that actually works",
    excerpt: "Strategy first, tools second. How to build a growth plan that aligns with your goals.",
  },
  {
    date: "AUG 24, 2026",
    title: "Automation for creators: what to automate (and what not to)",
    excerpt: "A practical guide to workflow automation — done with official APIs and compliance.",
  },
  {
    date: "AUG 12, 2026",
    title: "Why sustainable SEO beats shortcuts every time",
    excerpt: "Ranking takes time — but it's the only way that lasts. Here's why.",
  },
  {
    date: "JUL 30, 2026",
    title: "Content calendars: the simple system for consistent posting",
    excerpt: "Consistency beats intensity. A framework for planning content that converts.",
  },
  {
    date: "JUL 18, 2026",
    title: "Designing a brand identity your audience remembers",
    excerpt: "From logo to social kit — the building blocks of a memorable brand.",
  },
  {
    date: "JUL 06, 2026",
    title: "Measuring what matters: analytics beyond likes",
    excerpt: "Engagement metrics that actually map to business outcomes.",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="px-4 pb-10 pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">Insights</span>
            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">
              Growth <span className="grad-text">insights &amp; guides</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[600px] text-[1.05rem] text-text-2">
              Practical advice on social media, SEO, automation, and digital marketing from our team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-[1100px] gap-5 sm:grid-cols-2">
          {POSTS.map((post, i) => {
            const card = (
              <GlassCard className={`h-full rounded-2xl p-6 ${post.featured ? "border-tg-blue/30 shadow-[0_0_30px_-10px_rgba(56,189,248,0.35)] sm:col-span-2" : "border-white/10"}`}>
                <div className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-wide text-text-3">
                  <span>{post.date}</span>
                  {post.tag && <span className="text-tg-blue">· {post.tag}</span>}
                </div>
                <h2 className="mt-2.5 text-[1.05rem] text-white">{post.title}</h2>
                <p className="mt-2 text-[0.87rem] text-text-2">{post.excerpt}</p>
                {post.href && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-tg-blue">
                    {post.linkLabel}
                  </span>
                )}
              </GlassCard>
            );
            return (
              <Reveal key={post.title} delay={(i % 2) * 0.08} className={post.featured ? "sm:col-span-2" : ""}>
                {post.href ? <Link href={post.href}>{card}</Link> : card}
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
