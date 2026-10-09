"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/site-data";
import ServicesMegaMenu from "./ServicesMegaMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className={`glass w-full max-w-[1240px] rounded-2xl transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)]" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-5">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image src="/logo.jpg" alt="Xdy Media" width={32} height={32} className="rounded-lg" />
            <span className="text-[1.05rem] font-bold tracking-tight text-white">Xdy Media</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.hasMega ? (
                <ServicesMegaMenu
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={pathname.startsWith("/services")}
                />
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium text-text-2 transition-colors hover:text-white ${
                    pathname === link.href ? "text-white" : ""
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/start-a-project"
              className="hidden sm:inline-flex items-center rounded-xl bg-gradient-to-br from-white via-silver-2 to-silver-3 px-4 py-2 text-sm font-semibold text-black shadow-[0_8px_24px_-8px_rgba(255,255,255,0.3)] transition-transform hover:scale-[1.03]"
            >
              Start a Project
            </Link>
            <button
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="glass grid h-10 w-10 place-items-center rounded-xl lg:hidden"
            >
              <div className="flex flex-col gap-[5px]">
                <span className={`h-[2px] w-5 bg-white transition-transform ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`h-[2px] w-5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`h-[2px] w-5 bg-white transition-transform ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div className={`glass-panel lg:hidden overflow-hidden rounded-b-2xl transition-[max-height] duration-300 ${mobileOpen ? "max-h-[70vh]" : "max-h-0"}`}>
          <div className="flex flex-col gap-1 border-t border-white/10 px-4 py-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-2 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/start-a-project"
              className="mt-2 rounded-xl bg-gradient-to-br from-white via-silver-2 to-silver-3 px-4 py-2.5 text-center text-sm font-semibold text-black"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
