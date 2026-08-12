import BlogPostLayout from "@/components/BlogPostLayout";
import { posts } from "@/content/posts";
import { pageMetadata } from "@/lib/metadata";

const post = posts.find((p) => p.slug === "diy-bookkeeping-mistakes")!;

export const metadata = pageMetadata({
  title: post.metaTitle,
  description: post.description,
  path: `/${post.slug}`,
});

export default function Page() {
  return <BlogPostLayout post={post} />;
}
