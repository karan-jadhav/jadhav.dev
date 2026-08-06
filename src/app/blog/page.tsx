import { ManualHeader } from "@/components/ManualHeader";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";

export const dynamic = "force-static";

const description =
  "Benchmark-driven notes on databases, Python, distributed systems, vector search, and performance.";

export const metadata: Metadata = {
  title: "Backend Engineering Blog",
  description,
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
    <div className="manual-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ManualHeader />

      <main className="manual-document">
        <div className="manual-titlebar" aria-hidden="true">
          <span>NOTES(7)</span>
          <span>Karan&apos;s Manual</span>
          <span>NOTES(7)</span>
        </div>
        <p className="manual-command">ls -lt ~/notes</p>

        <header className="manual-section notes-intro">
          <span className="manual-section__label">Name</span>
          <div className="manual-section__body notes-name">
            <h1>
              field notes <span>— the things I measured</span>
            </h1>
            <p>{description}</p>
            <div className="notes-count">
              {posts.length} published {posts.length === 1 ? "entry" : "entries"}
            </div>
          </div>
        </header>

        <section className="manual-section" aria-labelledby="archive-heading">
          <h2 className="manual-section__label" id="archive-heading">
            Archive
          </h2>
          <div className="manual-section__body notes-index">
            {posts.length === 0 ? (
              <p className="notes-empty">No notes found.</p>
            ) : (
              posts.map((post) => (
                <article className="notes-entry" key={post.slug}>
                  <Link href={post.url} className="notes-entry__link">
                    <time className="notes-entry__date" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </time>
                    <div>
                      <ViewTransition
                        name={`blog-title-${post.slug.replaceAll("/", "-")}`}
                      >
                        <h2>{post.title}</h2>
                      </ViewTransition>
                      <ViewTransition
                        name={`blog-description-${post.slug.replaceAll("/", "-")}`}
                        share="text-morph"
                        default="none"
                      >
                        <p className="notes-entry__description">
                          {post.description}
                        </p>
                      </ViewTransition>
                    </div>
                    <div className="notes-entry__meta">
                      <span>{post.readingTime} min read</span>
                      {post.tags && post.tags.length > 0 && (
                        <div className="notes-entry__tags" aria-label="Tags">
                          {post.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </article>
              ))
            )}
          </div>
        </section>

        <section className="manual-section" aria-labelledby="author-heading">
          <h2 className="manual-section__label" id="author-heading">
            Author
          </h2>
          <div className="manual-section__body manual-copy">
            <p>
              Written by <Link href="/">Karan Jadhav</Link>, a backend engineer
              interested in databases, distributed processing, and finding the
              real bottleneck. Questions or corrections are welcome at{" "}
              <a href="mailto:karan@jadhav.dev">karan@jadhav.dev</a>.
            </p>
          </div>
        </section>

        <footer className="manual-footer">
          <span>NOTES(7)</span>
          <span>August 2026</span>
          <span>NOTES(7)</span>
        </footer>
      </main>
    </div>
  );
}
