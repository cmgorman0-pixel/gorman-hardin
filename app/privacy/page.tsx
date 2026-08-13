import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

const SECTIONS = [
  {
    title: "Information we collect",
    body: [
      "When you fill out our contact form, we collect your name, email address, phone number (optional), company name (optional), and whatever you write in the message field.",
      "Like nearly every website, we also collect some information automatically through Google Tag Manager: which pages you visit, how you got here, and general device and browser information. This is aggregate, not tied to your name unless you've also submitted the contact form.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "Contact form submissions are used for exactly one purpose: to respond to your inquiry. We don't use this information for anything else, and we don't sell it.",
      "Analytics data helps us understand which pages are actually useful, so we can improve the site -- it's not used to identify you individually.",
    ],
  },
  {
    title: "Third-party services we use",
    body: [
      `We use Resend to deliver email when you submit the contact form, and Google Tag Manager to understand site traffic. Neither service has any relationship with you beyond processing this specific data on ${SITE_NAME}'s behalf -- we don't share your contact information with advertisers or data brokers.`,
    ],
  },
  {
    title: "Cookies",
    body: [
      "Analytics cookies are only set if you accept the cookie banner shown on your first visit. You can change that choice at any time by clearing your browser's local storage for this site, or block cookies entirely through your browser's privacy settings.",
    ],
  },
  {
    title: "How long we keep your information",
    body: [
      "Contact form submissions are kept as long as needed to respond to your inquiry and for a reasonable period afterward for our own records, then deleted. If you'd like your information removed sooner, email us and we'll take care of it.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "You can ask us at any time what information we have about you, ask us to correct it, or ask us to delete it. Email us at the address below and we'll respond promptly.",
    ],
  },
  {
    title: "Security",
    body: [
      "We take reasonable steps to protect the information you share with us, including encrypting data in transit. That said, no method of transmission over the internet is completely secure, and we can't guarantee absolute security.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "If we materially change how we handle your information, we'll update this page and change the date below.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-16">
      <Container className="max-w-2xl">
        <h1 className="text-3xl font-semibold text-navy">Privacy Policy</h1>
        <p className="mt-2 text-xs text-charcoal/50">Last updated: August 2026</p>

        <div className="mt-8 space-y-8">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-navy">{section.title}</h2>
              <div className="mt-2 space-y-3">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-charcoal/70">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 className="text-lg font-semibold text-navy">Contact us</h2>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
              Questions about this policy, or want to access, correct, or
              delete your information? Reach out through our{" "}
              <Link href="/contact" className="font-semibold text-navy underline hover:text-gold">
                contact form
              </Link>{" "}
              or email us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-navy underline hover:text-gold">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>

        <p className="mt-10 text-xs leading-relaxed text-charcoal/50">
          This policy describes our general practices in plain language. It
          isn&apos;t a substitute for legal advice about your specific
          situation.
        </p>
      </Container>
    </section>
  );
}
