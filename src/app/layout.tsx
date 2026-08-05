import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jadhav.dev"),
  title: {
    default: "Karan Jadhav | Backend Engineer",
    template: "%s | Karan Jadhav",
  },
  description:
    "Backend engineer with 5+ years building production Python services, distributed geospatial data platforms, and high-performance APIs on AWS.",
  applicationName: "Karan Jadhav",
  authors: [{ name: "Karan Jadhav", url: "/" }],
  creator: "Karan Jadhav",
  publisher: "Karan Jadhav",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Karan Jadhav",
    title: "Karan Jadhav | Backend Engineer",
    description:
      "Backend engineer with 5+ years building production Python services, distributed geospatial data platforms, and high-performance APIs on AWS.",
    images: [
      {
        url: "/api/og?type=profile",
        width: 1200,
        height: 630,
        alt: "Karan Jadhav, Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@IamKaranJadhav",
    title: "Karan Jadhav | Backend Engineer",
    description:
      "Backend engineer with 5+ years building production Python services, distributed geospatial data platforms, and high-performance APIs on AWS.",
    images: [
      {
        url: "/api/og?type=profile",
        alt: "Karan Jadhav, Backend Engineer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
