import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Gorman Hardin CPA | Small Business Tax Planning Experts",
  description:
    "We started Gorman Hardin CPA & Consulting because small business owners deserved more than basic bookkeeping or an accountant who only shows up at tax time.",
  path: "/about-us",
});

const values = [
  {
    name: "Accuracy",
    description: "Clean books and reliable reporting so you always know where you stand.",
  },
  {
    name: "Strategy",
    description: "Proactive planning that ties bookkeeping and taxes together, reducing surprises and saving money.",
  },
  {
    name: "Clarity",
    description: "Simple processes and clear communication, giving you confidence to focus on your business.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            More than Accountants
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold">
            Advisors for Small Business Owners
          </h1>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy-dark shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            Contact Today
          </Link>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr,1.4fr] lg:items-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-auto lg:h-full">
            <Image
              src="/accountants-talking.jpg"
              alt="Gorman Hardin accountants reviewing financial records together"
              fill
              className="object-cover"
            />
          </div>
          <div>
          <h2 className="text-2xl font-semibold text-navy">From Experience to Strategy</h2>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            We started Gorman Hardin CPA &amp; Consulting because we saw how
            often small business owners were left choosing between basic
            bookkeeping or an accountant who only showed up at tax time. Our
            paths were different — one built a career in public accounting
            and controller roles, the other spent years starting and
            managing businesses, learning firsthand the challenges of
            keeping finances organized while trying to grow.
          </p>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            That mix of backgrounds gives us a balanced perspective. We
            understand both the technical side of accounting and the
            day-to-day realities of running a business. Together, we combine
            process, clarity, and strategy to keep your books accurate, your
            taxes planned for, and your systems working the way they
            should — so you can focus on moving your business forward with
            confidence.
          </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <h2 className="text-2xl font-semibold text-navy">Our Values</h2>
          <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-gold">
            Accuracy. Strategy. Clarity.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="rounded-lg border border-navy/10 bg-ivory p-6">
                <h3 className="font-semibold text-navy">{value.name}</h3>
                <p className="mt-2 text-sm text-charcoal/75">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-xl">
          <h2 className="text-2xl font-semibold text-navy">We&apos;d Love To Hear From You</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
