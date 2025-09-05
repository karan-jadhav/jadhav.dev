"use client";

export default function YearsSince({
  startYear,
  label,
}: {
  startYear: number;
  label?: string;
}) {
  const now = new Date();

  const fullYears = Math.max(0, now.getFullYear() - startYear);
  return (
    <span
      suppressHydrationWarning
      title={label ?? `${fullYears} years`}
      aria-label={label ?? `${fullYears} ${fullYears === 1 ? "year" : "years"}`}
    >
      {fullYears} {fullYears === 1 ? "year" : "years"}
    </span>
  );
}
