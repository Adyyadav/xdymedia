import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import SectionHead from "@/components/SectionHead";
import { RECOVERY_PLATFORMS } from "@/lib/site-data";

export const metadata = {
  title: "Account Recovery & Support",
  description: "Flagship account recovery and appeal assistance for suspended, disabled, or restricted accounts across Instagram, Snapchat, Facebook Ads, Telegram, TikTok, WhatsApp, and more.",
};

const SERVICES = [
  { title: "Suspended Account Appeal", desc: "Assistance with preparing and submitting suspension appeals to the relevant platform." },
  { title: "Disabled Account Appeal", desc: "Guidance for disabled accounts, including documentation preparation and policy review." },
  { title: "Restricted Account Support", desc: "Help understanding and resolving account restrictions, limitations, or feature blocks." },
  { title: "Login & Recovery Help", desc: "Guidance on account-access troubleshooting and recovery options available through the platform." },
  { title: "Appeal Documentation", desc: "Assistance preparing appeal documentation, policy review, and platform support escalation guidance." },
  { title: "Account Security Review", desc: "Review of account security settings and recommendations to reduce future risk." },
];

export default function AccountRecoveryPage() {
  return (
    <>
      <section className="px-4 pb-10 pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <div className="glass mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[0.82rem] text-text-2">
              <span className="h-2 w-2 rounded-full bg-recovery-red" style={{ boxShadow: "0 0 0 4px rgba(252,165,165,0.15)" }} />
              Flagship Service
            </div>
            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">
              Account Recovery & <span className="grad-text">Appeal Assistance</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[620px] text-[1.05rem] text-text-2">
              Legitimate support for suspended, disabled, or restricted accounts — across every major platform. We guide you through official appeal processes: no shortcuts, no security bypassing.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-2.5">
            {RECOVERY_PLATFORMS.map((p) => (
              <span key={p} className="glass rounded-full border-recovery-red/25 px-4 py-1.5 text-[0.82rem] font-medium text-white">
                {p}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mb-12 flex items-start gap-3 rounded-2xl border border-warn/30 bg-warn/5 p-5">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0 text-warn">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <p className="text-[0.88rem] text-text-2">
              <b className="text-white">Important:</b> We provide legitimate account-support and appeal assistance. We do <b className="text-white">not</b> bypass platform security systems, compromise accounts, impersonate platform representatives, or guarantee restoration. Final decisions belong to the relevant platform.
            </p>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-xl text-white">How we help</h2>
              <p className="mt-4 text-[0.92rem] text-text-2">
                When your account is suspended, disabled, or restricted, navigating platform appeal processes can be stressful. We help you prepare and submit a proper appeal, review platform policies, and guide you through the process — across Instagram, Snapchat, Facebook Ads accounts, Telegram, TikTok, WhatsApp, and more.
              </p>
              <p className="mt-3 text-[0.92rem] text-text-2">
                Our assistance is designed for legitimate account owners or authorized representatives only.
              </p>
              <div className="mt-7">
                <Button href="/contact">Get Help</Button>
              </div>
            </Reveal>
            <div className="flex flex-col gap-4">
              <Reveal delay={0.08}>
                <GlassCard className="rounded-2xl p-6">
                  <h3 className="text-[1rem] text-white">We do not guarantee recovery</h3>
                  <p className="mt-2 text-[0.87rem] text-text-2">No agency can guarantee an account will be restored. Platform decisions are final and depend on the specific case, policies, and circumstances.</p>
                </GlassCard>
              </Reveal>
              <Reveal delay={0.14}>
                <GlassCard className="rounded-2xl p-6">
                  <h3 className="text-[1rem] text-white">Legitimate process only</h3>
                  <p className="mt-2 text-[0.87rem] text-text-2">We work within platform policies. We do not bypass security controls, obtain unauthorized access, or impersonate anyone.</p>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead eyebrow="Services" title="Our recovery assistance services" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <GlassCard className="h-full rounded-2xl p-6">
                  <h3 className="text-[1rem] text-white">{s.title}</h3>
                  <p className="mt-2 text-[0.87rem] text-text-2">{s.desc}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8">
        <Reveal className="mx-auto max-w-[1240px]">
          <GlassCard className="rounded-3xl px-8 py-14 text-center">
            <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] text-white">Need help with your account?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[1rem] text-text-2">Contact us. We&apos;ll review your situation and let you know how we can help.</p>
            <div className="mt-8">
              <Button href="/contact">Get Help Now</Button>
            </div>
          </GlassCard>
        </Reveal>
      </section>
    </>
  );
}
