import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

export const metadata = {
  title: "Page Not Found",
};

const QUICK_LINKS = [
  { href: "/services", label: "All Services", desc: "Browse the full capability catalog." },
  { href: "/solutions", label: "Pricing", desc: "Plans, packages, and the ROI calculator." },
  { href: "/contact", label: "Contact", desc: "Start a project or ask a question." },
];

export default function NotFound() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-[720px] text-center">
        <span className="grad-text block text-[clamp(4rem,14vw,7rem)] font-extrabold leading-none">404</span>
        <h1 className="mt-4 text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold text-white">
          Lost in the automation pipeline
        </h1>
        <p className="mx-auto mt-4 max-w-[480px] text-[1rem] text-text-2">
          The page you&apos;re looking for doesn&apos;t exist, moved, or the link is out of date.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="ghost">Contact Us</Button>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {QUICK_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              <GlassCard className="h-full rounded-2xl p-5 text-left">
                <span className="text-[0.92rem] font-semibold text-white">{l.label}</span>
                <p className="mt-1.5 text-[0.8rem] text-text-2">{l.desc}</p>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
