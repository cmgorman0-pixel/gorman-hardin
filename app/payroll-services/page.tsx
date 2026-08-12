import Link from "next/link";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Payroll Processing & 1099 Management | Gorman Hardin CPA",
  description:
    "Comprehensive payroll services covering processing, tax withholding, benefits administration, direct deposit, compliance, and time tracking.",
  path: "/payroll-services",
});

const services = [
  {
    name: "Payroll Processing",
    description:
      "We manage every aspect of payroll processing, from calculating employee wages to distributing paychecks or direct deposits. Our system ensures that your payroll is processed accurately and on time, every pay period.",
  },
  {
    name: "Tax Withholding and Filing",
    description:
      "Accurate tax withholding is crucial to avoid penalties and stay compliant with federal, state, and local tax laws. We handle all aspects of tax withholding, including calculating and deducting the correct amounts from employee paychecks and filing payroll taxes on your behalf.",
  },
  {
    name: "Employee Benefits Administration",
    description:
      "Managing employee benefits can be complicated. We assist with the administration of employee benefits, including health insurance, retirement plans, and other perks. Our services ensure that benefit deductions are accurately processed and reported.",
  },
  {
    name: "Direct Deposit and Paycheck Distribution",
    description:
      "Offering direct deposit can enhance employee satisfaction by providing timely and convenient access to their wages. We manage direct deposit setups and ensure that paychecks are distributed accurately and promptly, whether electronically or through printed checks.",
  },
  {
    name: "Compliance Management",
    description:
      "Keeping up with changing payroll regulations can be challenging. Our team stays current with the latest laws and regulations to ensure your payroll practices remain compliant. We manage all necessary filings and reports, including W-2s and 1099s, to keep your business in good standing.",
  },
  {
    name: "Time and Attendance Tracking",
    description:
      "Accurate time and attendance tracking are essential for precise payroll processing. We offer solutions for tracking employee hours, including integration with time clock systems and software. This ensures that all hours worked are accurately recorded and paid.",
  },
];

export default function PayrollServicesPage() {
  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Payroll Services</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold">
            Streamlined Payroll Solutions for Your Business
          </h1>
          <p className="mt-5 max-w-2xl text-ivory/75">
            Managing payroll can be a complex and time-consuming task, but
            it&apos;s essential for keeping employees satisfied and ensuring
            compliance with labor laws. We offer comprehensive payroll
            services designed to simplify payroll processing, reduce
            errors, and ensure timely, accurate payments.
          </p>
          <p className="mt-4 max-w-2xl text-ivory/75">
            Our payroll solutions go beyond basic processing — we understand
            the unique challenges of managing a workforce that includes both
            traditional employees and 1099 contractors.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy-dark shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            Request Quote
          </Link>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            Expert guidance
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-navy">Personalized recommendations</h2>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            Flexibility is key. If you&apos;re already using QuickBooks,
            ADP, or another payroll system, our team can seamlessly
            integrate with your existing software to enhance efficiency
            without interrupting your established workflow. If you&apos;re
            exploring options, we&apos;ll provide personalized
            recommendations on payroll software that best fits your
            company&apos;s size, industry, and unique payroll needs.
          </p>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            By partnering with Gorman Hardin, you can focus on growing your
            business with confidence, knowing that every aspect of payroll
            is handled accurately, efficiently, and in full compliance with
            regulations.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <h2 className="text-2xl font-semibold text-navy">Our Comprehensive Payroll Services</h2>
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
