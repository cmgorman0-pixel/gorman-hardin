export type Review = { name: string; quote: string };

export function Stars() {
  return (
    <div className="flex gap-0.5 text-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1l2.6 6.2 6.7.5-5.1 4.4 1.6 6.6L10 15.8 4.2 18.7l1.6-6.6L.7 7.7l6.7-.5L10 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-lg border border-navy/10 bg-white p-6">
      <Stars />
      <p className="mt-3 text-sm text-charcoal/85">&ldquo;{review.quote}&rdquo;</p>
      <p className="mt-3 text-sm font-semibold text-navy">{review.name}</p>
    </div>
  );
}
