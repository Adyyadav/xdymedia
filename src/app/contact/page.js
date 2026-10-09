import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site-data";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with the XDY Media team for general inquiries, support, partnerships, or questions.",
};

const CHANNELS = [
  {
    label: "Email",
    handle: SITE.email,
    href: `mailto:${SITE.email}`,
    accent: "silver",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    ),
  },
  {
    label: "WhatsApp",
    handle: SITE.phone,
    href: SITE.whatsappUrl,
    accent: "wa-green",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
    ),
  },
  {
    label: "Telegram",
    handle: SITE.handle,
    href: SITE.telegramUrl,
    accent: "tg-blue",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
    ),
  },
  {
    label: "Instagram",
    handle: SITE.handle,
    href: SITE.instagramUrl,
    accent: "silver",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="px-4 pb-10 pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-silver-blue">Get in Touch</span>
            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-tight text-white">
              Contact <span className="grad-text">Us</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[560px] text-[1.05rem] text-text-2">
              Have questions, feedback, or a partnership proposal? Reach out to our team and we&apos;ll get back to you within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1.3fr_1fr] items-start">
          <Reveal>
            <GlassCard className="rounded-3xl p-7 sm:p-9">
              <div className="mb-6 border-b border-white/10 pb-5">
                <h2 className="text-xl font-bold text-white">Send Us a Direct Message</h2>
                <p className="mt-1 text-sm text-text-3">Fill out the form below and our support team will respond promptly.</p>
              </div>
              <ContactForm />
            </GlassCard>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.08}>
              <GlassCard className="rounded-2xl p-6">
                <h2 className="text-[1.05rem] text-white">Direct Communication Channels</h2>
                <div className="mt-4 flex flex-col gap-3">
                  {CHANNELS.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="glass flex items-center gap-3 rounded-xl p-3.5 transition-colors hover:border-white/25"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/5 text-silver-2">{c.icon}</span>
                      <span>
                        <small className="block text-[0.7rem] uppercase tracking-wide text-text-3">{c.label}</small>
                        <b className="text-[0.92rem] text-white">{c.handle}</b>
                      </span>
                    </a>
                  ))}
                </div>
                <p className="mt-4 text-[0.8rem] text-text-3">
                  Our direct support team operates 7 days a week across all channels.
                </p>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.14}>
              <GlassCard className="rounded-2xl border-wa-green/25 p-6">
                <div className="flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-wa-green/10 text-mint">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </span>
                  <h2 className="text-[1.02rem] text-white">Instant WhatsApp Assistant</h2>
                </div>
                <p className="mt-3 text-[0.87rem] text-text-2">
                  Message us on WhatsApp and our official Business API-powered assistant will route your enquiry instantly — with a real team member following up within 24 hours.
                </p>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0 text-text-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01" />
                </svg>
                <p className="text-[0.8rem] text-text-3">
                  We never request passwords, 2FA codes, or recovery keys through any contact channel.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
