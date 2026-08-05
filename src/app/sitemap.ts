import { allPosts } from "contentlayer/generated";
import type { MetadataRoute } from "next";

const baseUrl = "https://jadhav.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts: MetadataRoute.Sitemap = allPosts
    .filter((post) => post.published && !post.noindex)
    .map((post) => ({
      url: `${baseUrl}${post.url}`,
      lastModified: post.updated ?? post.date,
    }));

  return [
    { url: baseUrl },
    { url: `${baseUrl}/blog` },
    ...posts,
  ];
}
