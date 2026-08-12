import Link from "next/link";
import Container from "./Container";
import { CONTACT_EMAIL, NAP, SERVICE_LINKS, SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy-dark text-ivory/70">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-serif text-base font-semibold text-ivory">
            {SITE_NAME}
          </p>
          <p className="mt-2 text-sm">
            Accounting, tax strategy, and advisory for owner-led businesses
            based in Louisville, Kentucky.
          </p>
        </div>

        <div className="flex flex-wrap gap-10 text-sm">
          <div className="flex flex-col gap-2">
            <span className="mb-1 font-semibold text-ivory">Company</span>
            <Link href="/about-us" className="hover:text-ivory">
              About
            </Link>
            <Link href="/blog" className="hover:text-ivory">
              Blog
            </Link>
            <Link href="/reviews" className="hover:text-ivory">
              Reviews
            </Link>
            <Link href="/contact" className="hover:text-ivory">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="mb-1 font-semibold text-ivory">Services</span>
            {SERVICE_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-ivory">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="mb-1 font-semibold text-ivory">Contact</span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ivory">
              {CONTACT_EMAIL}
            </a>
            <a href={`tel:${NAP.telephone}`} className="hover:text-ivory">
              {NAP.telephoneDisplay}
            </a>
            <span>{NAP.addressLocality}, {NAP.addressRegion}</span>
          </div>
        </div>
      </Container>
      <Container className="border-t border-ivory/10 py-4 text-xs">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </Container>
    </footer>
  );
}
