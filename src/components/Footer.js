import Link from "next/link";
import Image from "next/image";
import { SITE, FOOTER_SERVICES, FOOTER_COMPANY, FOOTER_RESOURCES, FOOTER_LEGAL, getService } from "@/lib/site-data";
import FooterNavLinks from "@/components/FooterNavLinks";

export default function Footer() {
  return (
    <footer className="mt-24 px-3 pb-6 sm:px-4">
      <div className="glass mx-auto max-w-[1240px] rounded-3xl p-8 sm:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.jpg" alt="Xdy Media" width={30} height={30} className="rounded-lg" />
              <span className="font-bold text-white">Xdy Media</span>
            </Link>
            <p className="mt-3 text-sm text-text-3">{SITE.tagline}</p>
            <div className="mt-4 flex flex-col gap-1.5 text-sm text-text-3">
              <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a>
            </div>
            <div className="mt-4 flex gap-3">
              <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="glass grid h-9 w-9 place-items-center rounded-lg text-text-2 hover:text-white transition-colors">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>
                </svg>
              </a>
              <a href={SITE.telegramUrl} target="_blank" rel="noopener noreferrer" aria-label="Telegram"
                className="glass grid h-9 w-9 place-items-center rounded-lg text-text-2 hover:text-tg-blue transition-colors">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </a>
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="glass grid h-9 w-9 place-items-center rounded-lg text-text-2 hover:text-mint transition-colors">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Services</h4>
            <div className="flex flex-col gap-2">
              {FOOTER_SERVICES.map((slug) => {
                const svc = getService(slug);
                if (!svc) return null;
                return (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="text-sm text-text-3 transition-colors hover:text-white"
                  >
                    {svc.short}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Company</h4>
            <FooterNavLinks links={FOOTER_COMPANY} />
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Resources</h4>
            <FooterNavLinks links={FOOTER_RESOURCES} />
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Support</h4>
            <FooterNavLinks links={[
              { href: "/start-a-project", label: "Start a Project" },
              { href: "/book-a-consultation", label: "Book a Consultation" },
              { href: "/request-a-quote", label: "Request a Quote" },
            ]} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-text-3">© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_LEGAL.map((l) => (
              <Link key={l.href} href={l.href} className="text-xs text-text-3 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
