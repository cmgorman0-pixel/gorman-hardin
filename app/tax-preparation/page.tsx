import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Expert Tax Preparation Services in Louisville | Gorman Hardin CPA",
  description:
    "Comprehensive tax preparation for small businesses and individuals — federal, state, corporate, partnership, estate, and trust filings.",
  path: "/tax-preparation",
});

const services = [
  {
    name: "Small Business Tax Preparation",
    description:
      "Preparing taxes for a small business requires thorough knowledge of tax laws and careful attention to detail. We handle all aspects of small business tax preparation, including the preparation and filing of federal, state, and local tax returns.",
  },
  {
    name: "Individual Tax Return Preparation",
    description:
      "We provide comprehensive individual tax return preparation services, ensuring accuracy and maximizing your deductions and credits.",
  },
  {
    name: "Corporate Tax Preparation",
    description:
      "Corporate tax preparation involves complex calculations and adherence to strict regulations. We manage the preparation and filing of corporate tax returns, ensuring compliance and optimization of your tax position.",
  },
  {
    name: "Partnership and LLC Tax Preparation",
    description:
      "Partnerships and LLCs have unique tax filing requirements. We specialize in preparing tax returns for these entities, ensuring accurate reporting and helping you navigate pass-through taxation.",
  },
  {
    name: "Tax Planning and Strategy",
    description:
      "Effective tax planning can significantly reduce your tax liability and improve your financial health. We work with you year-round to develop and implement tax strategies aligned with your financial goals.",
  },
  {
    name: "Tax Compliance and Regulatory Filing",
    description:
      "Staying compliant with tax laws and regulations is crucial for avoiding penalties and audits. We handle all aspects of tax compliance, including filing required regulatory reports.",
  },
];

export default function TaxPreparationPage() {
  return (
    <>
      <PageHero
        image="/hero-louisville-b.jpg"
        imageAlt="Louisville, Kentucky riverfront"
        kicker="Tax Preparation"
        title="Expert Tax Preparation"
        cta={{ href: "/contact", label: "Contact Today" }}
      >
        <p className="mt-5 max-w-2xl text-ivory/80">
          Navigating the complexities of tax laws and regulations can be
          daunting, but proper tax preparation is essential for minimizing
          your tax liability and ensuring compliance. Our experienced
          CPAs are dedicated to providing accurate, timely, and
          personalized tax solutions.
        </p>
      </PageHero>

      <section className="py-16">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Reduce Risk</p>
          <h2 className="mt-2 text-2xl font-semibold text-navy">IRS Compliance</h2>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            We offer specialized support to help you accurately issue 1099s
            for all qualifying payments, ensuring compliance with IRS
            regulations. Our comprehensive 1099 services cover everything
            from managing deadlines to preparing and filing forms for both
            contractors and vendors.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <h2 className="text-2xl font-semibold text-navy">Our Comprehensive Tax Preparation Services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="rounded-lg border border-navy/10 bg-ivory p-6">
                <h3 className="font-semibold text-navy">{service.name}</h3>
                <p className="mt-2 text-sm text-charcoal/75">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Facing an IRS</p>
          <h2 className="mt-2 text-2xl font-semibold text-navy">IRS Audit Representation</h2>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            Facing an IRS audit can be stressful and time-consuming. We
            offer professional IRS audit representation, managing all
            communications and negotiations with the IRS on your behalf.
          </p>
          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-gold">
            Specialized knowledge
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-navy">Estate and Trust Tax Preparation</h2>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            Estate and trust tax preparation requires specialized knowledge
            and expertise. We assist with the preparation and filing of
            estate and trust tax returns, ensuring compliance and optimal
            tax outcomes.
          </p>
        </Container>
      </section>

      <WhyChooseUs />

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
