import Reveal from "./Reveal";
import GlassCard from "./GlassCard";
import Button from "./Button";
import Sparkline from "./Sparkline";

const ICON = {
  ads: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
  channel: "M4 6h16M4 12h16M4 18h10",
  growth: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  sub: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  content: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
};

const FUNNEL = [
  { label: "Telegram Ads", note: "Targeted promotion", icon: "ads" },
  { label: "Your Channel", note: "Managed & optimized", icon: "channel" },
  { label: "Right Audience", note: "Relevant reach", icon: "growth" },
  { label: "Paying Subscribers", note: "Subscription channel", icon: "sub" },
  { label: "Revenue Stream", note: "Monetized content", icon: "content" },
];

const SERVICES = [
  {
    icon: "ads",
    title: "Telegram Ads",
    desc: "Campaigns built to put your channel in front of the right people.",
    points: ["Campaign setup & management", "Audience targeting", "Performance tracking"],
  },
  {
    icon: "channel",
    title: "Channel Management",
    desc: "We run your channels day to day so they stay active and polished.",
    points: ["Content posting & scheduling", "Channel optimization", "Community upkeep"],
  },
  {
    icon: "growth",
    title: "Audience Growth",
    desc: "Promotion and strategy aimed at relevant reach, not vanity numbers.",
    points: ["Cross-platform promotion", "Growth strategy", "Reach optimization"],
  },
  {
    icon: "sub",
    title: "Subscription Channels",
    desc: "Launch and manage a paid Telegram channel as an extra revenue stream.",
    points: ["Paid channel setup", "Subscription handling", "Member management"],
  },
  {
    icon: "content",
    title: "Content Monetization",
    desc: "The right audience, promotion, and content strategy working together.",
    points: ["Content strategy", "Promotion planning", "Subscriber conversion"],
  },
];

const HIGHLIGHTS = [
  "You grow Instagram — we handle Telegram",
  "Ads to subscriptions, one team",
  "A new revenue stream for your content",
];

function Icon({ name, className = "" }) {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d={ICON[name]} />
    </svg>
  );
}

export default function TelegramManagement({ id }) {
  return (
    <section id={id} className="relative px-4 pb-24 pt-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[420px] max-w-[1100px] opacity-60"
        style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(56,189,248,0.14), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-[1240px]">
        {/* Heading */}
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-tg-blue/30 bg-tg-blue/10 px-3.5 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-tg-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-tg-blue" style={{ animation: "pulseDot 2s infinite" }} />
            Telegram Management &amp; Growth
          </span>
          <h2 className="grad-text text-[clamp(1.9rem,3.8vw,3rem)]">
            We run the complete <span className="text-tg-blue" style={{ WebkitTextFillColor: "currentColor" }}>Telegram</span> side of your business
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[1.02rem] text-text-2">
            From ads to subscriptions, we handle your Telegram so you can focus on creating and growing your brand.
          </p>
        </Reveal>

        {/* Pitch + channel visual */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <GlassCard className="flex h-full flex-col justify-between rounded-3xl border-tg-blue/25 p-8 sm:p-10">
              <div>
                <h3 className="text-[1.5rem] leading-snug text-white">
                  Reach the right audience. Turn it into <span className="text-tg-blue">paying subscribers.</span>
                </h3>
                <p className="mt-3 text-[0.95rem] text-text-2">
                  Telegram is one of the platforms we specialize in, with the best possible reach and success rate as the goal.
                </p>
                <ul className="mt-6 flex flex-col gap-3.5">
                  {HIGHLIGHTS.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-[0.95rem] text-white">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-tg-blue/15 text-tg-blue">
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact">Get Telegram Growth Help</Button>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard strong className="relative h-full rounded-3xl p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-tg-blue to-[#0088cc] text-black">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3L18.6 19.6c-.2 1-.9 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.8-8c.4-.3-.1-.5-.6-.2L6.5 13.4 1.9 12c-1-.3-1-1 .2-1.5L20.2 3.5c.8-.3 1.6.2 1.7.8z" /></svg>
                  </div>
                  <div>
                    <div className="text-[0.95rem] font-semibold text-white">Your Channel</div>
                    <div className="text-[0.75rem] text-text-3">Managed by XDY Media</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/10 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-mint">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint" style={{ animation: "pulseDot 2s infinite" }} />
                  Live
                </span>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="mb-3 flex items-center justify-between text-[0.75rem] text-text-3">
                  <span>Audience growth</span>
                  <span className="font-mono text-tg-blue">Illustrative</span>
                </div>
                <Sparkline />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-[0.78rem]">
                {[
                  ["Telegram Ads", "Campaign active"],
                  ["Content posting", "Scheduled"],
                  ["Subscription channel", "Enabled"],
                  ["Optimization", "Ongoing"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3">
                    <div className="text-text-3">{k}</div>
                    <div className="mt-0.5 font-semibold text-white">{v}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>

        {/* Funnel */}
        <Reveal className="mt-14">
          <div className="mb-6 text-center text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">
            How it turns into revenue
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {FUNNEL.map((step, i) => (
              <div key={step.label} className="relative">
                <GlassCard className="flex h-full flex-col items-center rounded-2xl px-4 py-5 text-center">
                  <span className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-tg-blue/10 text-tg-blue">
                    <Icon name={step.icon} />
                  </span>
                  <span className="font-mono text-[0.68rem] text-text-3">0{i + 1}</span>
                  <span className="mt-0.5 text-[0.92rem] font-semibold text-white">{step.label}</span>
                  <span className="mt-1 text-[0.75rem] text-text-3">{step.note}</span>
                </GlassCard>
                {i < FUNNEL.length - 1 && (
                  <span className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-tg-blue lg:block">→</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Services */}
        <div className="mt-16">
          <Reveal className="mb-8 text-center">
            <h3 className="text-[1.5rem] text-white">What we manage for you</h3>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.title}
                delay={(i % 3) * 0.06}
                className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
              >
                <GlassCard className="group h-full rounded-2xl border border-white/10 p-6 transition-colors hover:border-tg-blue/40">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-tg-blue/10 text-tg-blue transition-transform group-hover:scale-110">
                      <Icon name={s.icon} />
                    </span>
                    <h4 className="text-[1.05rem] text-white">{s.title}</h4>
                  </div>
                  <p className="mt-4 text-[0.88rem] text-text-2">{s.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li key={p} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.72rem] text-text-2">
                        {p}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-[0.78rem] text-text-3">
          Results depend on the platform, audience, and content. We do not guarantee specific subscriber or revenue outcomes.
        </p>
      </div>
    </section>
  );
}
