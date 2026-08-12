import Link from "next/link";
import Container from "./Container";
import type { Post } from "@/content/posts";

// Minimal markdown-ish renderer: only handles the "## Heading" and
// "[label](/href)" patterns actually used in content/posts.ts -- not a
// general markdown parser, deliberately kept small since it only needs to
// cover the migrated content.
function renderParagraph(text: string, key: number) {
  if (text.startsWith("## ")) {
    return (
      <h2 key={key} className="mt-8 text-xl font-semibold text-navy">
        {text.slice(3)}
      </h2>
    );
  }
  const parts: React.ReactNode[] = [];
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = linkPattern.exec(text))) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <Link key={`l${i++}`} href={match[2]} className="text-navy underline hover:text-gold">
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  parts.push(text.slice(lastIndex));
  return (
    <p key={key} className="mt-4 text-charcoal/85 leading-relaxed">
      {parts}
    </p>
  );
}

export default function BlogPostLayout({ post }: { post: Post }) {
  return (
    <>
      <section className="border-b border-navy/10 bg-navy py-14 text-ivory">
        <Container>
          <Link href="/blog" className="text-sm text-gold hover:underline">
            ← Back to Blog
          </Link>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">{post.title}</h1>
          <p className="mt-3 text-sm text-ivory/60">
            {post.displayDate}
            {post.category !== "Uncategorized" && ` · ${post.category}`}
          </p>
        </Container>
      </section>
      <section className="py-14">
        <Container className="max-w-3xl">
          {post.body.map((p, i) => renderParagraph(p, i))}

          <div className="mt-12 rounded-lg border border-navy/10 bg-white p-6 sm:flex sm:items-center sm:justify-between">
            <p className="font-semibold text-navy">
              Have questions about your own books or tax planning?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-full bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-navy-dark sm:mt-0 sm:shrink-0"
            >
              Talk to Gorman Hardin
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
