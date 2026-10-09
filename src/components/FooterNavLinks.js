"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Client-side footer link list that highlights the active page.
 * Accepts an array of { href, label } objects.
 */
export default function FooterNavLinks({ links }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2">
      {links.map((l) => {
        const isActive = pathname === l.href;
        return (
          <Link
            key={`${l.href}-${l.label}`}
            href={l.href}
            className={`text-sm transition-colors hover:text-white ${
              isActive ? "text-white font-semibold" : "text-text-3"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </div>
  );
}
