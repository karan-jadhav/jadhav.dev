"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const components = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-2xl font-medium text-zinc-100 tracking-tight mt-10 mb-4 first:mt-0"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-xl font-medium text-zinc-100 tracking-tight mt-12 mb-4 pb-3 border-b border-zinc-800/60"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-lg font-medium text-zinc-100 tracking-tight mt-10 mb-3"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-base font-medium text-zinc-200 mt-8 mb-2" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-zinc-400 leading-relaxed mb-6" {...props}>
      {children}
    </p>
  ),
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-zinc-200 font-medium" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em className="text-zinc-300" {...props}>
      {children}
    </em>
  ),
  a: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal =
      href?.startsWith("http://") || href?.startsWith("https://");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 border-b border-zinc-600 text-zinc-200 no-underline transition-colors hover:border-zinc-400"
          {...props}
        >
          {children}
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
        </a>
      );
    }
    return (
      <Link
        href={href || "#"}
        className="border-b border-zinc-600 text-zinc-200 no-underline transition-colors hover:border-zinc-400"
        {...props}
      >
        {children}
      </Link>
    );
  },
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="space-y-2 mb-6 text-zinc-400" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal list-outside pl-5 space-y-2 mb-6 text-zinc-400 marker:text-zinc-600"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="pl-1 leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-2 border-zinc-700 pl-5 my-8 text-zinc-400 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement> & { "data-language"?: string }) => {
    const isInline =
      !props.className?.includes("language-") && !props["data-language"];
    if (isInline) {
      return (
        <code
          className="bg-zinc-800/80 text-zinc-200 px-1.5 py-0.5 rounded-md text-[0.875em] font-mono"
          {...props}
        >
          {children}
        </code>
      );
    }
    return <code {...props}>{children}</code>;
  },
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="border border-zinc-800/70 rounded-lg overflow-x-auto my-7 text-sm"
      {...props}
    >
      {children}
    </pre>
  ),
  hr: () => <hr className="border-zinc-800/60 my-14" />,
  table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-8 rounded-lg border border-zinc-800/60">
      <table className="w-full text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-zinc-900/50" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="text-left text-zinc-300 font-medium px-4 py-3" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="px-4 py-3 text-zinc-400 border-t border-zinc-800/40"
      {...props}
    >
      {children}
    </td>
  ),
  Image: ({
    src,
    alt,
    width,
    height,
    ...props
  }: React.ComponentProps<typeof Image>) => (
    <Image
      src={src}
      alt={alt || ""}
      width={width || 800}
      height={height || 400}
      className="rounded-xl border border-zinc-800/60 my-8"
      {...props}
    />
  ),
  Figure: ({
    caption,
    src,
    alt,
    width,
    height,
    ...props
  }: React.ComponentProps<typeof Image> & { caption: React.ReactNode }) => (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt || ""}
        width={width || 800}
        height={height || 400}
        className="rounded-xl border border-zinc-800/60"
        {...props}
      />
      <figcaption className="mt-3 text-sm leading-relaxed text-zinc-500">
        {caption}
      </figcaption>
    </figure>
  ),
  Callout: ({
    children,
    type = "info",
  }: {
    children: React.ReactNode;
    type?: "info" | "warning" | "error";
  }) => {
    const styles = {
      info: "bg-zinc-800/30 border-zinc-700 text-zinc-300",
      warning: "bg-amber-500/5 border-amber-500/30 text-amber-200/90",
      error: "bg-red-500/5 border-red-500/30 text-red-200/90",
    };
    return (
      <div className={`border-l-2 px-4 py-3 my-8 rounded-r-lg ${styles[type]}`}>
        {children}
      </div>
    );
  },
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
