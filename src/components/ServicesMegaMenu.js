"use client";

import { useState } from "react";
import Link from "next/link";
import { MEGA_MENU, getService } from "@/lib/site-data";
import { accentFor } from "@/lib/accent";

export default function ServicesMegaMenu({ href, label, active }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setExpanded(false);
  };

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={handleClose}>
      <Link
        href={href}
        className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-text-2 transition-colors hover:text-white ${
          active ? "text-white" : ""
        }`}
      >
        {label}
        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {/* Hit-area bridge starts flush against the trigger */}
      <div className={`absolute left-1/2 top-full w-[730px] -translate-x-1/2 pt-2.5 ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <MegaMenuPanel
          open={open}
          expanded={expanded}
          onToggleExpand={() => setExpanded((v) => !v)}
        />
      </div>
    </div>
  );
}

function MegaMenuPanel({ open, expanded, onToggleExpand }) {
  return (
    <div className={`glass-panel rounded-2xl p-6 transition-all duration-200 ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
      {/* Column Titles (pinned cleanly at top without Pillar 1/2/3) */}
      <div className="mb-2.5 grid grid-cols-3 gap-6">
        {MEGA_MENU.map((col) => {
          const a = accentFor(col.accent);
          const cleanTitle = col.title.replace(/^Pillar\s*\d+\s*[·—–-]\s*/i, "").trim();
          return (
            <div key={col.title} className="flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-text-3">
              {col.accent && <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />}
              <span>{cleanTitle}</span>
            </div>
          );
        })}
      </div>

      {/* Items Container: displays exactly top 3 services fully, slide down / scrollable for remaining services */}
      <div className="relative">
        <div
          className={`grid grid-cols-3 gap-6 overflow-y-auto transition-[max-height] duration-300 ease-in-out mega-menu-scroll pr-1 ${
            expanded ? "max-h-[460px]" : "max-h-[228px]"
          }`}
        >
          {MEGA_MENU.map((col) => (
            <div key={col.title} className="flex flex-col gap-1">
              {col.items.map((slug) => (
                <MegaMenuItem key={slug} slug={slug} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer bar with Slide Down toggle + View all services */}
      <div className="mt-3.5 flex items-center justify-between border-t border-white/10 pt-3">
        <button
          type="button"
          onClick={onToggleExpand}
          className="group inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[0.74rem] font-medium text-silver-blue transition-all hover:border-white/25 hover:bg-white/10 hover:text-white"
        >
          <span>{expanded ? "Slide up to top 3 services" : "Slide down to see rest of services (9)"}</span>
          <svg
            width="11"
            height="11"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            viewBox="0 0 24 24"
            className={`transition-transform duration-200 ${expanded ? "rotate-180 text-white" : "group-hover:translate-y-0.5"}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <Link href="/services" className="text-sm font-semibold text-white underline underline-offset-4 hover:text-silver">
          View All Services →
        </Link>
      </div>
    </div>
  );
}

function MegaMenuItem({ slug }) {
  const svc = getService(slug);
  if (!svc) return null;
  const a = accentFor(svc.accent);
  return (
    <Link
      href={`/services/${slug}`}
      className={`group rounded-lg px-2.5 py-2 transition-all ${
        svc.featured
          ? `border ${a.border} ${a.bg} hover:border-white/30`
          : "border border-transparent hover:bg-white/5"
      }`}
    >
      <span className={`block text-[0.84rem] font-semibold leading-snug ${svc.featured ? a.text : "text-white/90 group-hover:text-white"}`}>
        {svc.short}
        {svc.featured && <span className={`ml-1 ${a.text}`}>★</span>}
      </span>
      <span className="mt-0.5 block text-[0.73rem] leading-snug text-text-3">{svc.desc.slice(0, 46)}…</span>
    </Link>
  );
}
