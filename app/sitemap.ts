import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { posts } from "@/content/posts";

const staticPaths = [
  "",
  "/about-us",
  "/full-service-accounting",
  "/payroll-services",
  "/tax-preparation",
  "/blog",
  "/reviews",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
  const postEntries = posts.map((post) => ({
    url: `${SITE_URL}/${post.slug}`,
    lastModified: new Date(post.date),
  }));
  return [...staticEntries, ...postEntries];
}
