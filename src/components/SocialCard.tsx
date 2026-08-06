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
  const titleSize = title.length > 58 ? 48 : 60;
  const visibleLabels = labels.slice(0, 4);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#0d100e",
        color: "#ecefe9",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage:
            "linear-gradient(rgba(236, 239, 233, 0.035) 1px, transparent 1px)",
          backgroundSize: "100% 32px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 46,
          width: 1,
          display: "flex",
          background: "#2c342e",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 46,
          bottom: 0,
          width: 1,
          display: "flex",
          background: "#2c342e",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px 68px 44px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            paddingBottom: 16,
            borderBottom: "2px solid #ecefe9",
            color: "#82c997",
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>KARAN(1)</span>
          <span style={{ color: "#ecefe9" }}>PERSONAL MANUAL</span>
          <span style={{ color: "#82c997" }}>KARAN(1)</span>
        </div>

        <div
          style={{
            height: 350,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: 42,
            padding: "38px 0 30px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: 178,
              display: "flex",
              flexDirection: "column",
              alignSelf: "stretch",
              paddingTop: 10,
              color: "#e2ae6a",
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: "0.08em",
              lineHeight: 1.5,
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#717a72" }}>§</span>
            <span>{eyebrow}</span>
            <span
              style={{
                width: 28,
                height: 3,
                display: "flex",
                marginTop: 14,
                background: "#e2ae6a",
              }}
            />
          </div>
          <div
            style={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 20,
              paddingLeft: 32,
              borderLeft: "5px solid #82c997",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 820,
                display: "block",
                fontSize: titleSize,
                lineHeight: 1.04,
                fontWeight: 700,
                letterSpacing: "-0.045em",
              }}
            >
              {title}
            </div>
            <div
              style={{
                width: "100%",
                maxWidth: 790,
                display: "block",
                color: "#c8cec7",
                fontFamily: "serif",
                fontSize: 26,
                lineHeight: 1.42,
              }}
            >
              {description}
            </div>
          </div>
        </div>

        <div
          style={{
            minHeight: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            gap: 28,
            paddingTop: 16,
            borderTop: "1px solid #2c342e",
            color: "#82c997",
            fontSize: 16,
          }}
        >
          <div style={{ display: "flex", gap: 18 }}>
            {(visibleLabels.length > 0
              ? visibleLabels
              : ["Backend engineering"]
            ).map((label) => (
              <span key={label}>#{label.toLowerCase().replaceAll(" ", "-")}</span>
            ))}
          </div>
          <span style={{ color: "#a5ada5" }}>./jadhav.dev</span>
        </div>
      </div>
    </div>
  );
}
