import { getUnsplashPhoto } from "@/lib/unsplash";

// Server component: fetches at build time, falls back to a plain gradient
// panel (no broken image, no layout shift) if UNSPLASH_ACCESS_KEY isn't set
// or no match is found. Every rendered photo carries its required alt text
// and a visible photographer credit, per Unsplash's API license terms.
export default async function SectionPhoto({
  query,
  alt,
  className = "",
}: {
  query: string;
  alt: string;
  className?: string;
}) {
  const photo = await getUnsplashPhoto(query, alt);

  if (!photo) {
    return (
      <div
        className={`rounded-lg bg-gradient-to-br from-navy to-navy-light ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <figure className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.url}
        alt={photo.alt}
        className="h-full w-full rounded-lg object-cover"
      />
      <figcaption className="mt-1 text-[11px] text-charcoal/40">
        Photo by{" "}
        <a href={photo.photographerUrl} className="hover:text-charcoal/70">
          {photo.photographerName}
        </a>{" "}
        on Unsplash
      </figcaption>
    </figure>
  );
}
