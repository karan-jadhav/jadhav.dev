interface SocialCardProps {
  eyebrow: string;
  title: string;
  description: string;
  labels?: string[];
}

export function SocialCard({
  eyebrow,
  title,
  description,
  labels = [],
}: SocialCardProps) {
  const titleSize = title.length > 58 ? 52 : title.length > 38 ? 60 : 68;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#030712",
        color: "#f8fafc",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 390,
          height: 390,
          display: "flex",
          borderRadius: 999,
          background: "#2563eb",
          opacity: 0.13,
          transform: "translate(120px, -165px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 72,
          bottom: 72,
          left: 72,
          width: 3,
          display: "flex",
          background: "#3b82f6",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 72,
          bottom: 72,
          width: 180,
          height: 1,
          display: "flex",
          background: "#1e3a8a",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px 66px 104px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#60a5fa",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <span>{eyebrow}</span>
          <span style={{ color: "#64748b", letterSpacing: "0.08em" }}>
            JADHAV.DEV
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              maxWidth: 990,
              display: "flex",
              fontSize: titleSize,
              lineHeight: 1.06,
              fontWeight: 700,
              letterSpacing: "-0.035em",
            }}
          >
            {title}
          </div>
          <div
            style={{
              maxWidth: 940,
              display: "flex",
              color: "#94a3b8",
              fontSize: 26,
              lineHeight: 1.35,
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            minHeight: 28,
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#64748b",
            fontSize: 16,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {labels.length > 0 ? labels.slice(0, 4).join("  /  ") : "Backend engineering"}
        </div>
      </div>
    </div>
  );
}
