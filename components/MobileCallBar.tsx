import { NAP } from "@/lib/site";

// One-tap call/contact bar pinned to the bottom of the viewport on phones
// only. Local-service search traffic (e.g. "accountant near me") skews
// mobile and converts heavily on click-to-call -- the old site had no
// mobile phone number at all in the header, and neither of the two
// competitor sites checked during this build have a persistent mobile CTA.
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex border-t border-navy/10 bg-white shadow-[0_-2px_12px_rgba(0,0,0,0.08)] sm:hidden">
      <a
        href={`tel:${NAP.telephone}`}
        className="flex flex-1 items-center justify-center gap-2 border-r border-navy/10 py-3 text-sm font-semibold text-navy"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call Now
      </a>
      <a
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 bg-navy py-3 text-sm font-semibold text-ivory"
      >
        Contact Us
      </a>
    </div>
  );
}
