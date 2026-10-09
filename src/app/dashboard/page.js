import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import PortalRequestForm from "@/components/PortalRequestForm";

export const metadata = {
  title: "Client Portal",
  description: "XDY Media client portal — track projects, milestones, reports, invoices, and support tickets.",
};

const FEATURES = [
  "Secure client login",
  "Orders & active projects",
  "Service & API status",
  "Project milestones",
  "Support tickets",
  "Documents & deliverables",
  "Invoices & payment status",
  "Reports & analytics",
  "Team communication & notifications",
];

export default function DashboardPage() {
  return (
    <>
      <section className="px-4 pb-10 pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">Client Portal</span>
            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">
              Client <span className="grad-text">portal</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[560px] text-[1.05rem] text-text-2">
              Track your projects, milestones, reports, and invoices in one secure place.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mb-10 flex items-start gap-3 rounded-2xl border border-tg-blue/25 bg-tg-blue/5 p-5">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0 text-tg-blue">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <p className="text-[0.88rem] text-text-2">
              <b className="text-white">Security notice:</b> Client credentials, API keys, access tokens, and other authentication secrets are never exposed through this portal. Access uses secure authentication and least-privilege permissions.
            </p>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-xl text-white">What&apos;s inside</h2>
              <ul className="mt-5 flex flex-col gap-2.5">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.9rem] text-text-2">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0 text-mint">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <GlassCard className="rounded-2xl p-7">
                <h3 className="text-[1.05rem] text-white">Portal access</h3>
                <PortalRequestForm />
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
