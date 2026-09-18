import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { GoogleAds } from "@/components/GoogleAds";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { SEO } from "@/lib/copy";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SEO.home.title,
    template: "%s",
  },
  description: SEO.home.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName, url: SITE.url }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
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
    <html lang="en" className={`${dmSans.variable} ${GeistMono.variable}`}>
      <body className={`${dmSans.className} bg-black font-sans text-[#f4f4f4] antialiased`}>
        <JsonLd />
        <GoogleAds />
        {children}
      </body>
    </html>
  );
}
