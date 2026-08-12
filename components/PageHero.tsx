import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

// Shared full-bleed photo hero used on every page's top section --
// centralizing this means the optimized-image treatment (real srcset via
// next/image, not a raw CSS background-image) and the overlay/typography
// styling only need to be right in one place.
export default function PageHero({
  image,
  imageAlt,
  kicker,
  title,
  children,
  cta,
}: {
  image: string;
  imageAlt: string;
  kicker: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden bg-navy-dark py-24 text-ivory sm:py-32">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/40" />
      <Container className="relative">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">{kicker}</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        {children}
        {cta && (
          <Link
            href={cta.href}
            className="mt-9 inline-block rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy-dark shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            {cta.label}
          </Link>
        )}
      </Container>
    </section>
  );
}
