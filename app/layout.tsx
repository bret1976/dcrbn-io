import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dcrbn.io"),
  title: {
    default: "DCRBN | Speed to Scale for AI, Blockchain, and Quantum Founders",
    template: "%s",
  },
  description:
    "DCRBN is a Speed to Scale platform for founders building infrastructure in AI, blockchain, and quantum. We bring resources, network, visibility, agentic infrastructure, partnerships, advisory support, venture studio capabilities, and capital readiness to accelerate founder growth.",
  keywords: [
    "AI",
    "blockchain",
    "quantum",
    "Speed to Scale",
    "force multiplier",
    "infrastructure founders",
    "AI infrastructure",
    "Web3 infrastructure",
    "quantum infrastructure",
    "venture studio",
    "founder advisory",
    "capital readiness",
    "growth platform",
  ],
  alternates: {
    canonical: "https://www.dcrbn.io",
  },
  openGraph: {
    title: "DCRBN | Speed to Scale for AI, Blockchain, and Quantum Founders",
    description:
      "DCRBN is a Speed to Scale platform for founders building infrastructure in AI, blockchain, and quantum.",
    url: "https://www.dcrbn.io",
    siteName: "DCRBN",
    images: [
      {
        url: "https://www.dcrbn.io/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DCRBN — Speed to Scale for AI, blockchain, and quantum founders",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DCRBN | Speed to Scale",
    description:
      "DCRBN is a Speed to Scale platform for founders building infrastructure in AI, blockchain, and quantum.",
    images: ["https://www.dcrbn.io/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className={`${GeistSans.className} ${GeistMono.className}`}>
        {children}
      </body>
    </html>
  );
}
