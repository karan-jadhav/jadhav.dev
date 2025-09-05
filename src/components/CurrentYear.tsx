"use client";

export default function CurrentYear({
  prefix,
  suffix,
}: {
  prefix?: string;
  suffix?: string;
}) {
  const year = new Date().getFullYear();
  return (
    <span suppressHydrationWarning>
      {prefix}
      {year}
      {suffix}
    </span>
  );
}
