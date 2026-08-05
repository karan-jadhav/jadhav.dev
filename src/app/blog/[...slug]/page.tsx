import { Mdx } from "@/components/mdx-components";
import { allPosts } from "contentlayer/generated";
import { ArrowLeft, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";

export const dynamic = "force-static";

interface PostPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.join("/");
  const post = allPosts.find((post) => post.slug === slug);

  if (!post || !post.published) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const title = post.seoTitle ?? post.title;
  const url = `https://jadhav.dev${post.url}`;
  const socialImage = `/api/og?slug=${encodeURIComponent(post.slug)}`;
  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = new Date(post.updated ?? post.date).toISOString();

  return {
    title,
    description: post.description,
    alternates: {
      canonical: post.url,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url,
      siteName: "Karan Jadhav",
      title: `${title} | Karan Jadhav`,
      description: post.description,
      publishedTime,
      modifiedTime,
      authors: ["Karan Jadhav"],
      tags: post.tags,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@IamKaranJadhav",
      title: `${title} | Karan Jadhav`,
      description: post.description,
      images: [
        {
          url: socialImage,
          alt: post.title,
        },
      ],
    },
    ...(post.noindex
      ? {
          robots: {
            index: false,
            follow: true,
            googleBot: {
              index: false,
              follow: true,
            },
          },
        }
      : {}),
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const postUrl = `https://jadhav.dev${post.url}`;
  const modifiedDate = post.updated ?? post.date;
  const relatedPosts = allPosts
    .filter(
      (candidate) =>
        candidate.published &&
        !candidate.noindex &&
        candidate.slug !== post.slug,
    )
    .map((candidate) => ({
      post: candidate,
      sharedTags: candidate.tags.filter((tag) => post.tags.includes(tag))
        .length,
    }))
    .filter(({ sharedTags }) => sharedTags > 0)
    .sort(
      (a, b) =>
        b.sharedTags - a.sharedTags ||
        new Date(b.post.date).getTime() - new Date(a.post.date).getTime(),
    )
    .slice(0, 3)
    .map(({ post: relatedPost }) => relatedPost);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${postUrl}#article`,
        url: postUrl,
        mainEntityOfPage: postUrl,
        headline: post.title,
        description: post.description,
        image: `https://jadhav.dev/api/og?slug=${encodeURIComponent(post.slug)}`,
        datePublished: post.date,
        dateModified: modifiedDate,
        inLanguage: "en",
        author: {
          "@type": "Person",
          "@id": "https://jadhav.dev/#person",
          name: "Karan Jadhav",
          url: "https://jadhav.dev",
        },
        isPartOf: {
          "@type": "Blog",
          "@id": "https://jadhav.dev/blog#blog",
          name: "Backend Engineering Blog | Karan Jadhav",
        },
        keywords: post.tags,
        articleSection: post.tags,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${postUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://jadhav.dev",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://jadhav.dev/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: postUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-gray-100 px-6 py-16 md:py-24">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: safe
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <article className="max-w-2xl mx-auto">
        {/* Navigation */}
        <nav aria-label="Breadcrumb" className="mb-12">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-700">
              /
            </li>
            <li>
              <Link
                href="/blog"
                className="transition-colors hover:text-gray-300"
              >
                Blog
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-700">
              /
            </li>
            <li
              aria-current="page"
              className="min-w-0 flex-1 truncate text-gray-400"
              title={post.title}
            >
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
            <span>
              By{" "}
              <Link
                href="/"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                Karan Jadhav
              </Link>
            </span>
            <span className="text-gray-700">·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.updated && post.updated !== post.date && (
              <>
                <span className="text-gray-700">·</span>
                <span>
                  Updated{" "}
                  <time dateTime={post.updated}>
                    {new Date(post.updated).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </span>
              </>
            )}
            <span className="text-gray-700">·</span>
            <span>{post.readingTime} min read</span>
          </div>

          <ViewTransition
            name={`blog-title-${post.slug.replaceAll("/", "-")}`}
          >
            <h1 className="text-2xl md:text-3xl font-medium text-white leading-snug tracking-tight mb-4">
              {post.title}
            </h1>
          </ViewTransition>

          <p className="text-gray-400 leading-relaxed">{post.description}</p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs text-gray-400 bg-white/4 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Divider */}
        <div className="w-12 h-px bg-gray-800 mb-12" />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <Mdx code={post.body.code} />
        </div>

        {relatedPosts.length > 0 && (
          <aside
            aria-labelledby="related-posts-heading"
            className="mt-20 border-t border-gray-800/50 pt-8"
          >
            <h2
              id="related-posts-heading"
              className="text-lg font-medium text-white"
            >
              Related posts
            </h2>
            <ul className="mt-5 space-y-3">
              {relatedPosts.map((relatedPost) => (
                <li key={relatedPost.slug}>
                  <Link
                    href={relatedPost.url}
                    className="group flex items-start justify-between gap-6 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <span>{relatedPost.title}</span>
                    <span className="shrink-0 text-gray-600 transition-colors group-hover:text-blue-400">
                      Read
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-800/50">
          <nav aria-label="Footer navigation">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All posts</span>
            </Link>
          </nav>

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
      </article>
    </main>
  );
}
