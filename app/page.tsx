import Link from "next/link";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import ReviewCard, { Stars } from "@/components/ReviewCard";
import { reviews } from "@/content/reviews";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Small Business Tax Planning in Louisville | Gorman Hardin CPA",
  description:
    "Tax planning for Louisville small business owners who want fewer surprises, cleaner financials, and better decisions year-round.",
  path: "/",
});

const homeServices = [
  {
    name: "Accounting & Bookkeeping",
    description:
      "Accurate monthly financials, organized records, and reporting that gives you a clearer view of where the business stands.",
  },
  {
    name: "Tax Strategy & Preparation",
    description:
      "Year-round tax planning and preparation designed to reduce surprises and help you make decisions before tax time.",
  },
  {
    name: "Advisory & Growth Support",
    description:
      "Practical guidance around cash flow, pricing, hiring, profitability, process improvement, and the decisions that shape your next stage of growth.",
  },
  {
    name: "Entity & Financial Structure",
    description:
      "Support with S-Corp planning, owner compensation, business structure, and financial setup as your company grows and becomes more complex.",
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        image="/hero-louisville.jpg"
        imageAlt="Louisville, Kentucky skyline at dusk"
        kicker="Welcome to Gorman Hardin"
        title="Accounting, Tax Strategy & Advisory for Growing Businesses"
        cta={{ href: "/contact", label: "Contact Now" }}
      >
        <p className="mt-6 max-w-xl text-lg text-ivory/80">
          Based in Louisville, we help owner-led businesses across Kentucky
          and beyond maintain accurate financials, plan ahead for taxes,
          and make better decisions with confidence.
        </p>
        <div className="mt-7 flex items-center gap-3">
          <span className="text-xl font-bold text-gold">5.0</span>
          <Stars />
        </div>
      </PageHero>

      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-navy">
            For Owners Who Have Outgrown Guesswork
          </h2>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            We work with business owners who are growing, getting organized,
            or trying to make better decisions with their numbers.
          </p>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            Whether you are managing cash flow, planning for taxes, hiring,
            pricing jobs, expanding, or simply trying to understand where the
            business stands, accurate financials are the foundation.
          </p>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            We commonly support contractors, service businesses, healthcare
            practices, real estate businesses, professional service firms,
            startups, and other owner-led companies.
          </p>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            The common thread is simple: you want clarity, direction, and
            confidence in the decisions you are making.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-navy">
            Know Where You Stand. Know Where You&apos;re Going.
          </h2>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            Accurate financials are only the starting point. The bigger
            question is what those numbers are telling you — and what
            decisions need to be made next.
          </p>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            We help business owners get clear on where they stand, where
            they want to go, and what may be holding them back. From tax
            planning and cash flow to pricing, hiring, and growth decisions,
            the goal is to create clarity, reduce surprises, and give you
            more confidence in the path forward.
          </p>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            With firsthand experience growing and managing businesses, we
            understand the ownership side of the equation. Growth always
            involves risk, but better numbers and better planning help turn
            that risk into calculated action.
          </p>
          <Link
            href="/full-service-accounting"
            className="mt-6 inline-block rounded-full bg-navy px-8 py-4 text-sm font-semibold text-ivory shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-navy-dark"
          >
            Request Services
          </Link>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-semibold text-navy">
            Support Built Around Better Decisions
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {homeServices.map((service) => (
              <div key={service.name} className="rounded-lg border border-navy/10 bg-white p-6">
                <h3 className="font-semibold text-navy">{service.name}</h3>
                <p className="mt-2 text-sm text-charcoal/75">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <h2 className="text-2xl font-semibold text-navy">What Clients Say</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
          <Link href="/reviews" className="mt-6 inline-block text-sm font-semibold text-navy hover:underline">
            Read More →
          </Link>
        </Container>
      </section>

      <section id="bottom-page-contact" className="py-16">
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
