import type { Review } from "@/components/ReviewCard";

// Real reviews with full text, ported from the live site's Google Reviews.
// Names-only entries on the old /reviews page (Hunter Drenth, Austin Tibbs,
// etc.) come from a live Google Reviews widget without full quote text
// available server-side -- once this is live, swap this static list for an
// embedded live Google Reviews widget so new reviews show up automatically
// instead of needing a code change each time.
export const reviews: Review[] = [
  {
    name: "David Bohn",
    quote:
      "They provided exceptional service and insightful solutions tailored to our needs! Their professionalism, clear communication, and ongoing support made a significant impact. Highly recommend for any business seeking expert consulting.",
  },
  {
    name: "Marc Denham",
    quote:
      "You can't ask for better guys to work with. Charlie and Phil are great guys all around, both professional and personable.",
  },
  {
    name: "Harrison Ramsey",
    quote: "This is a very well ran company, detailed and professional.",
  },
  {
    name: "Hunter Drenth",
    quote: "Staff super helpful and friendly.",
  },
];
