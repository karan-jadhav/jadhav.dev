import { Mdx } from "@/components/mdx-components";
import { ManualHeader } from "@/components/ManualHeader";
import { allPosts } from "contentlayer/generated";
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

  const publishedLabel = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const modifiedLabel = new Date(modifiedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="manual-site">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: safe
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ManualHeader />

      <main className="article-document">
        <div className="manual-titlebar" aria-hidden="true">
          <span>NOTE(7)</span>
          <span>Karan&apos;s Manual</span>
          <span>NOTE(7)</span>
        </div>

        <nav aria-label="Breadcrumb" className="article-breadcrumb">
          <ol>
            <li>
              <Link href="/">~</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog">notes</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{post.slug.split("/").at(-1)}</li>
          </ol>
        </nav>

        <article>
          <header className="article-header">
            <div className="article-header__kind">Technical note</div>
            <ViewTransition
              name={`blog-title-${post.slug.replaceAll("/", "-")}`}
            >
              <h1 className="article-title">{post.title}</h1>
            </ViewTransition>
            <ViewTransition
              name={`blog-description-${post.slug.replaceAll("/", "-")}`}
              share="text-morph"
              default="none"
            >
              <p className="article-description">{post.description}</p>
            </ViewTransition>
            <div className="article-byline">
              <span>
                by <strong>Karan Jadhav</strong>
              </span>
              <time dateTime={post.date}>
                published <strong>{publishedLabel}</strong>
              </time>
              {post.updated && post.updated !== post.date && (
                <time dateTime={post.updated}>
                  updated <strong>{modifiedLabel}</strong>
                </time>
              )}
              <span>
                <strong>{post.readingTime} min read</strong>
              </span>
            </div>
          </header>

          <div className="article-layout">
            <aside className="article-aside" aria-label="Article information">
              <p>
                <strong>File</strong>
                {post.slug.split("/").at(-1)}.md
              </p>
              <p>
                <strong>Last modified</strong>
                <time dateTime={modifiedDate}>{modifiedLabel}</time>
              </p>
              <div>
                <strong>Tags</strong>
                <div className="article-tags">
                  {post.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </aside>

            <div className="article-body">
              <Mdx code={post.body.code} />
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <aside className="article-related" aria-labelledby="related-heading">
              <h2 id="related-heading">See also</h2>
              <ul>
                {relatedPosts.map((relatedPost) => (
                  <li key={relatedPost.slug}>
                    <Link href={relatedPost.url}>
                      <span>{relatedPost.title}</span>
                      <span>read({relatedPost.readingTime}m) →</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </article>

        <footer className="article-footer">
          <Link href="/blog">← notes(7)</Link>
          <span>
            Questions or corrections?{" "}
            <a href="mailto:karan@jadhav.dev">karan@jadhav.dev</a>
          </span>
        </footer>
      </main>
    </div>
  );
}
