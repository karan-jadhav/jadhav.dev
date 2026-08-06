"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import Image from "next/image";
import Link from "next/link";

const components = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props}>{children}</h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props}>{children}</h3>
  ),
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 {...props}>{children}</h4>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props}>{children}</p>
  ),
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong {...props}>{children}</strong>
  ),
  em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em {...props}>{children}</em>
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
          {...props}
        >
          {children}
          <span aria-hidden="true"> ↗</span>
        </a>
      );
    }

    return (
      <Link href={href || "#"} {...props}>
        {children}
      </Link>
    );
  },
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props}>{children}</ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol {...props}>{children}</ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props}>{children}</li>
  ),
  blockquote: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote {...props}>{children}</blockquote>
  ),
  code: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement> & { "data-language"?: string }) => (
    <code {...props}>{children}</code>
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props}>{children}</pre>
  ),
  hr: () => <hr />,
  table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="article-table-wrap">
      <table {...props}>{children}</table>
    </div>
  ),
  thead: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead {...props}>{children}</thead>
  ),
  th: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th {...props}>{children}</th>
  ),
  td: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td {...props}>{children}</td>
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
    <figure>
      <Image
        src={src}
        alt={alt || ""}
        width={width || 800}
        height={height || 400}
        {...props}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  ),
  Callout: ({
    children,
    type = "info",
  }: {
    children: React.ReactNode;
    type?: "info" | "warning" | "error";
  }) => (
    <div className={`article-callout article-callout--${type}`}>{children}</div>
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  // eslint-disable-next-line react-hooks/static-components -- MDX code is compiled into a component by the content pipeline.
  return <Component components={components} />;
}
