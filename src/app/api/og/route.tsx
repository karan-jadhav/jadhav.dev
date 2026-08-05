import { SocialCard } from "@/components/SocialCard";
import { allPosts } from "contentlayer/generated";
import { ImageResponse } from "next/og";

const size = { width: 1200, height: 630 };

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const slug = searchParams.get("slug");
  const post = slug ? allPosts.find((entry) => entry.slug === slug) : undefined;

  let card = {
    eyebrow: "Backend Engineer",
    title: "Karan Jadhav",
    description:
      "Production Python services, distributed data platforms, and high-performance APIs.",
    labels: ["Python", "PostgreSQL", "Distributed systems", "AWS"],
  };

  if (type === "blog") {
    card = {
      eyebrow: "Engineering Notes",
      title: "Backend Engineering Blog",
      description:
        "Benchmark-driven notes on databases, Python, distributed systems, vector search, and performance.",
      labels: ["Benchmarks", "Data systems", "Performance"],
    };
  } else if (post) {
    card = {
      eyebrow: "Engineering Field Note",
      title: post.title,
      description: post.description,
      labels: post.tags,
    };
  }

  return new ImageResponse(
    <SocialCard
      eyebrow={card.eyebrow}
      title={card.title}
      description={card.description}
      labels={card.labels}
    />,
    {
      ...size,
      headers: {
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    },
  );
}
