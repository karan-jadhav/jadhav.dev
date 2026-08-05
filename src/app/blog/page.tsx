import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { ViewTransition } from "react";

export const dynamic = "force-static";

const description =
  "Benchmark-driven notes on databases, Python, distributed systems, vector search, and performance.";

export const metadata: Metadata = {
  title: "Backend Engineering Blog",
  description:
    "Benchmark-driven notes on databases, Python, distributed systems, vector search, and performance.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/blog",
    siteName: "Karan Jadhav",
    title: "Backend Engineering Blog | Karan Jadhav",
    description,
    images: [
      {
        url: "/api/og?type=blog",
        width: 1200,
        height: 630,
        alt: "Karan Jadhav's backend engineering blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@IamKaranJadhav",
    title: "Backend Engineering Blog | Karan Jadhav",
    description,
    images: [
      {
        url: "/api/og?type=blog",
        alt: "Karan Jadhav's backend engineering blog",
      },
    ],
  },
};

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published && !post.noindex)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://jadhav.dev/blog#blog",
    url: "https://jadhav.dev/blog",
    name: "Backend Engineering Blog | Karan Jadhav",
    description,
    inLanguage: "en",
    author: {
      "@type": "Person",
      "@id": "https://jadhav.dev/#person",
      name: "Karan Jadhav",
      url: "https://jadhav.dev",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://jadhav.dev${post.url}`,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
    })),
  };

  return (
    <main className="min-h-screen bg-black text-gray-100 px-6 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <nav aria-label="Primary">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </nav>
          <h1 className="text-3xl font-light tracking-tight text-white mb-3">
            Blog
          </h1>
          <p className="text-zinc-500 text-sm">
            Benchmark-driven notes on databases, Python, distributed systems,
            vector search, and performance.
          </p>
        </header>

        {/* Posts */}
        {posts.length === 0 ? (
          <p className="text-zinc-600 text-sm">No posts yet.</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={post.url}
                  className="group block p-5 -mx-5 rounded-xl hover:bg-zinc-900/50 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span className="text-zinc-700">·</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                  <ViewTransition
                    name={`blog-title-${post.slug.replaceAll("/", "-")}`}
                  >
                    <h2 className="text-lg text-zinc-100 group-hover:text-white transition-colors mb-2">
                      {post.title}
                    </h2>
                  </ViewTransition>
                  <ViewTransition
                    name={`blog-description-${post.slug.replaceAll("/", "-")}`}
                    share="text-morph"
                    default="none"
                  >
                    <p className="text-sm text-zinc-500 leading-relaxed mb-3">
                      {post.description}
                    </p>
                  </ViewTransition>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs text-zinc-500 bg-zinc-800/50 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-4 border-t border-gray-800">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>
              Open to high-impact collaborations, consulting, and OSS, drop me a
              line{" "}
              <a
                href="mailto:karan@jadhav.dev"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
              >
                karan@jadhav.dev
              </a>
            </span>
          </p>
        </footer>
      </div>
    </main>
  );
}
