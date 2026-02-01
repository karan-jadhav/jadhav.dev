import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Mdx } from "@/components/mdx-components";

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

export async function generateMetadata({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Karan Jadhav`,
    description: post.description,
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

  return (
    <div className="min-h-screen bg-black text-gray-100 px-6 py-16 md:py-24">
      <article className="max-w-2xl mx-auto">
        {/* Navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-12"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Blog</span>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
            <time>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-gray-700">·</span>
            <span>{post.readingTime} min read</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-medium text-white leading-snug tracking-tight mb-4">
            {post.title}
          </h1>

          <p className="text-gray-400 leading-relaxed">{post.description}</p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs text-gray-400 bg-white/[0.04] rounded-full"
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

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-800/50">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All posts</span>
          </Link>
        </footer>
      </article>
    </div>
  );
}
