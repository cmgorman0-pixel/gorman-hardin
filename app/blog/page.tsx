import Link from "next/link";
import Container from "@/components/Container";
import { posts } from "@/content/posts";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Blog | Accounting, Tax & Business Tips | Gorman Hardin CPA",
  description:
    "Accounting, tax planning, and business tips from Gorman Hardin CPA & Consulting.",
  path: "/blog",
});

const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export default function BlogIndexPage() {
  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Gorman Hardin</p>
          <h1 className="mt-3 text-4xl font-semibold">Blog</h1>
          <p className="mt-3 max-w-xl text-ivory/75">
            Accounting, tax planning, and business tips for Louisville small business owners.
          </p>
        </Container>
      </section>
      <section className="py-16">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="rounded-lg border border-navy/10 bg-white p-6 transition-colors hover:border-navy/30"
            >
              <p className="text-xs text-charcoal/50">{post.displayDate}</p>
              <h2 className="mt-2 font-semibold text-navy">{post.title}</h2>
              <p className="mt-2 text-sm text-charcoal/70">{post.excerpt}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-navy">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </Container>
      </section>
    </>
  );
}
