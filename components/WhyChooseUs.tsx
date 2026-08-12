import Container from "./Container";

const points = [
  {
    name: "Expertise",
    description:
      "Our team of Certified Public Accountants (CPAs) brings a wealth of experience and knowledge to manage your accounting needs efficiently.",
  },
  {
    name: "Accuracy",
    description:
      "We prioritize accuracy and attention to detail in all our accounting processes, ensuring reliable financial information.",
  },
  {
    name: "Compliance",
    description:
      "We stay current with the latest regulations and standards to ensure your business remains compliant at all times.",
  },
  {
    name: "Personalized service",
    description:
      "We build long-term relationships with our clients, offering personalized service and availability whenever you need us.",
  },
  {
    name: "Technology-Driven",
    description:
      "We leverage advanced accounting software and technology to streamline processes and enhance accuracy.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">
          Consulting Solutions
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-navy">
          Why Choose Gorman Hardin for Your Accounting Needs?
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {points.map((point) => (
            <div key={point.name}>
              <h3 className="font-semibold text-navy">{point.name}</h3>
              <p className="mt-2 text-sm text-charcoal/75">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
