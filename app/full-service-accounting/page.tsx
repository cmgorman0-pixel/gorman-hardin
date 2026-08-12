import Link from "next/link";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import WhyChooseUs from "@/components/WhyChooseUs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Full-Service Accounting in Louisville | Gorman Hardin CPA",
  description:
    "Bookkeeping, tax planning, consulting, payroll, entity setup, and compliance — built around one principle: bookkeeping and tax strategy should work together.",
  path: "/full-service-accounting",
});

const categories = [
  {
    name: "Bookkeeping Services",
    tagline: "(tax-ready foundation)",
    items: [
      {
        name: "Day-to-Day Transaction Recording",
        description:
          "Accurate daily recording of sales, purchases, receipts, and payments to keep your financial data current, dependable, and tax-ready.",
      },
      {
        name: "Account Reconciliation",
        description:
          "Routine reconciliation of bank, credit card, and other accounts to ensure accuracy, reduce errors, and maintain clean, tax-ready books.",
      },
      {
        name: "Accounts Payable & Receivable Management",
        description:
          "Organized invoicing, vendor payments, and collections to optimize cash flow while keeping everything aligned for tax planning.",
      },
      {
        name: "General Ledger Maintenance",
        description:
          "Clean and organized ledgers that tie all financial activity together, giving you reliable, tax-ready records at any time.",
      },
      {
        name: "Financial Reporting",
        description:
          "Clear balance sheets, income statements, and cash flow reports that provide insight into business performance and tax position.",
      },
    ],
  },
  {
    name: "Tax",
    tagline: "(planning + preparation)",
    items: [
      {
        name: "Tax Planning",
        description:
          "Year-round tax planning that identifies opportunities to reduce liabilities, improve cash flow, and keep your business ahead of surprises.",
      },
      {
        name: "Tax Preparation",
        description:
          "Accurate and compliant federal and state tax filings made simple with books that are kept tax-ready throughout the year.",
      },
      {
        name: "Business Entity Strategy",
        description:
          "Guidance on S-Corp salary vs. distributions and other entity decisions to optimize tax savings and protect your business.",
      },
      {
        name: "Year-Round Guidance",
        description:
          "Ongoing CPA support to help you make proactive tax decisions, not just react in April.",
      },
    ],
  },
  {
    name: "Consulting Services",
    tagline: "(straight-forward, safe)",
    items: [
      {
        name: "Cash Flow Management",
        description:
          "Strategies to improve collections, manage payables, and maintain healthy cash flow so your business runs smoothly.",
      },
      {
        name: "Process Improvement",
        description:
          "Identifying inefficiencies in financial systems and recommending solutions that save time, reduce errors, and increase profitability.",
      },
      {
        name: "Budgeting & Forecasting",
        description:
          "Building realistic budgets and financial forecasts that align with your business goals and proactive tax planning.",
      },
      {
        name: "Financial Planning & Analysis",
        description:
          "Budgeting, forecasting, and financial modeling tailored to your business goals, with insights tied directly to tax strategy.",
      },
      {
        name: "Business Advisory",
        description:
          "Practical, results-driven advice from experienced business owners and CPAs who understand both the challenges and opportunities of running a company.",
      },
    ],
  },
  {
    name: "Payroll",
    tagline: "(compliance + strategy)",
    items: [
      {
        name: "Payroll Setup & Processing",
        description:
          "Simple, accurate payroll through our ADP partnership, including employee setup, direct deposits, and pay runs every cycle.",
      },
      {
        name: "Tax Withholding & Compliance",
        description:
          "Payroll tax withholdings and filings handled for you, keeping your business fully compliant with IRS and state requirements.",
      },
      {
        name: "Year-End Reporting",
        description:
          "Preparation and delivery of W-2s and 1099s, ensuring employees and contractors receive accurate year-end tax forms on time.",
      },
      {
        name: "Integrated Payroll & Tax Strategy",
        description:
          "Payroll decisions impact your tax position — we align payroll with bookkeeping and tax planning for smarter outcomes.",
      },
    ],
  },
  {
    name: "Business Formation & Entity Setup",
    tagline: "(LLC, S-Corp, C-Corp guidance)",
    items: [
      {
        name: "Entity Selection & Setup",
        description:
          "Guidance on choosing the right structure — LLC, S-Corp, or C-Corp — to optimize tax savings and protect your business.",
      },
      {
        name: "Federal & State Registration",
        description:
          "Assistance with EIN applications, state registrations, and required filings to get your business set up correctly from the start.",
      },
      {
        name: "S-Corp Strategy",
        description:
          "Specialized planning around salary vs. distributions and other S-Corp advantages that can reduce your overall tax burden.",
      },
      {
        name: "Ongoing Compliance Support",
        description:
          "Ensure annual reports, renewals, and filings are completed accurately to keep your business in good standing.",
      },
    ],
  },
  {
    name: "Compliance & Advisory Support",
    tagline: "(IRS, sales tax, etc.)",
    items: [
      {
        name: "IRS & State Compliance",
        description:
          "Ongoing support to keep your business compliant with IRS and state requirements, reducing risk and avoiding penalties.",
      },
      {
        name: "Sales Tax Support",
        description:
          "Setup, tracking, and filing for sales tax to ensure accuracy and timely reporting across jurisdictions.",
      },
      {
        name: "Audit-Ready Recordkeeping",
        description:
          "We maintain organized, accurate records so you're prepared if the IRS or state ever comes knocking.",
      },
      {
        name: "Quarterly Check-Ins",
        description:
          "Regular touchpoints to review financials, answer questions, and keep your books aligned with tax strategy throughout the year.",
      },
    ],
  },
];

const faqItems = [
  {
    question: "What software do you use?",
    answer:
      "We use QuickBooks Online and ADP for most clients, but we're flexible with your current setup. This ensures your books and payroll are integrated with tax planning for a seamless process.",
  },
  {
    question: "Can you help if I'm behind on bookkeeping?",
    answer:
      "Yes — we specialize in cleanup projects. More importantly, we don't just catch you up, we align your books so they're tax-ready moving forward.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No long-term contracts. We work month-to-month, earning your trust by delivering accurate books, proactive tax planning, and clear results.",
  },
  {
    question: "Can you work with businesses outside of Louisville?",
    answer:
      "Yes — while we're based in Louisville, we serve businesses across Kentucky and beyond through cloud-based bookkeeping and tax planning.",
  },
  {
    question: "Do you work with startups or newly formed businesses?",
    answer:
      "Absolutely. We often help with entity selection (LLC, S-Corp, etc.), setup, and bookkeeping systems so you start off on the right foot with tax planning in mind.",
  },
  {
    question: "How do you price your accounting services?",
    answer:
      "We price based on transaction volume and level of CPA involvement. Every client has monthly bookkeeping supported by ongoing tax strategy, so you know exactly what to expect.",
  },
  {
    question: "How is your approach different from a traditional bookkeeper or CPA?",
    answer:
      "Many firms separate bookkeeping from tax planning. We combine the two so your books are always tax-ready and your strategy is built in year-round.",
  },
];

export default function FullServiceAccountingPage() {
  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            Small Business Accounting &amp; Tax Planning · Louisville, KY
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold">
            Strategy through bookkeeping + Tax
          </h1>
          <p className="mt-5 max-w-2xl text-ivory/75">
            Running a business is hard enough — your accounting should be
            more than just recordkeeping. At Gorman Hardin, our services are
            built around one core principle: bookkeeping and tax strategy
            should work together.
          </p>
          <p className="mt-4 max-w-2xl text-ivory/75">
            When your books are managed through a tax lens, every month
            becomes an opportunity to plan ahead. That means fewer
            surprises, smarter decisions, and real savings at year-end.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy-dark shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            Request Services
          </Link>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-semibold text-navy">Full-Service Accounting</h2>
          <div className="mt-8 space-y-12">
            {categories.map((category) => (
              <div key={category.name}>
                <h3 className="text-lg font-semibold text-navy">
                  {category.name}{" "}
                  <span className="font-normal text-charcoal/50">{category.tagline}</span>
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <div key={item.name} className="rounded-lg border border-navy/10 bg-white p-5">
                      <p className="font-semibold text-charcoal">{item.name}</p>
                      <p className="mt-1 text-sm text-charcoal/70">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUs />

      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-navy">Frequently Asked Questions</h2>
          <div className="mt-8">
            <Faq items={faqItems} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
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
