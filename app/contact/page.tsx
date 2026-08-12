import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import { NAP } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact Us | Accounting & Consulting | Gorman Hardin CPA",
  description: "Get in touch with Gorman Hardin CPA & Consulting in Louisville, KY.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <h1 className="text-3xl font-semibold">Contact</h1>
          <p className="mt-3 text-ivory/75">Take the first step, we will take care of the rest.</p>
        </Container>
      </section>
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">
              Contact Us by Phone
            </p>
            <a href={`tel:${NAP.telephone}`} className="mt-1 block text-xl font-semibold text-navy">
              {NAP.telephoneDisplay}
            </a>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-gold">
              Email Us
            </p>
            <a href="mailto:info@gormanhardin.com" className="mt-1 block text-xl font-semibold text-navy">
              info@gormanhardin.com
            </a>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-navy">We&apos;d Love To Hear From You</h2>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
