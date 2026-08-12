import Container from "@/components/Container";
import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/content/reviews";
import { NAP } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Reviews - Gorman Hardin",
  description: "What clients say about working with Gorman Hardin CPA & Consulting.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <h1 className="text-3xl font-semibold">Reviews</h1>
          <a
            href={`tel:${NAP.telephone}`}
            className="mt-6 inline-block rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy-dark shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            Call Now
          </a>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
          <p className="mt-8 text-sm text-charcoal/60">
            See all of our reviews on Google.
          </p>
        </Container>
      </section>
    </>
  );
}
