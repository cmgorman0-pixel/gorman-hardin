"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SERVICE_LINKS } from "@/lib/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center rounded-md border border-navy/20 text-navy"
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
          <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 z-20 border-b border-navy/10 bg-ivory shadow-lg">
          <nav className="flex flex-col gap-1 px-4 py-4">
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-navy/50">
              Services
            </span>
            {SERVICE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-charcoal hover:bg-navy/5"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 border-t border-navy/10" />
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-charcoal hover:bg-navy/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
