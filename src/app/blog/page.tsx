import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "Blog | Karan Jadhav",
  description:
    "Thoughts on software engineering, distributed systems, and technology.",
};

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="min-h-screen bg-black text-gray-100 px-6 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <h1 className="text-3xl font-light tracking-tight text-white mb-3">
            Blog
          </h1>
          <p className="text-zinc-500 text-sm">
            Thoughts on engineering and technology.
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
                    <time>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span className="text-zinc-700">·</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                  <h2 className="text-lg text-zinc-100 group-hover:text-white transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-3">
                    {post.description}
                  </p>
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
      </div>
    </div>
  );
}
