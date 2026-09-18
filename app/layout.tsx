import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GoogleAds } from "@/components/GoogleAds";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { SEO } from "@/lib/copy";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SEO.home.title,
    template: "%s",
  },
  description: SEO.home.description,
  keywords: [
    "DCRBN",
    "Las Vegas venture studio",
    "Speed to Scale",
    "AI infrastructure",
    "blockchain infrastructure",
    "quantum infrastructure",
    "founder advisory",
    "venture studio",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: SEO.home.title,
    description: SEO.home.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.home.title,
    description: SEO.home.description,
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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={`${GeistSans.className} ${GeistMono.className}`}>
        <JsonLd />
        <GoogleAds />
        {children}
      </body>
    </html>
  );
}
