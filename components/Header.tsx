"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import MobileNav from "./MobileNav";
import { NAV_LINKS, SERVICE_LINKS, NAP } from "@/lib/site";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-navy/10 bg-ivory/95 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Gorman Hardin" width={160} height={46} className="h-10 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/full-service-accounting"
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-navy"
            >
              Services
            </Link>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-64 rounded-md border border-navy/10 bg-white py-2 shadow-lg">
                {SERVICE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-charcoal hover:bg-navy/5"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${NAP.telephone}`}
            className="hidden text-sm font-medium text-charcoal/70 hover:text-navy sm:block"
          >
            {NAP.telephoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-navy px-3 py-2 text-sm font-semibold text-ivory transition-colors hover:bg-navy-dark sm:px-4"
          >
            Contact Us
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
