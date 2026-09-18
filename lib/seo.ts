import type { Metadata } from "next";
import { SITE, absoluteUrl } from "@/lib/site";

export const PUBLIC_PATHS = [
  "/",
  "/about",
  "/contact",
  "/speed-to-scale",
  "/growth-cycle",
  "/focus-areas",
  "/advisory",
  "/venture-studio",
  "/sixframe",
  "/lotus-trader",
  "/social-automation",
  "/proof",
  "/network",
  "/apply",
  "/strategic-alignment",
  "/privacy",
  "/terms",
] as const;

export function pageMetadata(
  seo: { title: string; description: string },
  path: string,
): Metadata {
  const url = absoluteUrl(path);
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: url },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: SITE.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        description: SITE.positioning,
        telephone: SITE.phone,
        email: SITE.emails.apply,
        logo: `${SITE.url}/opengraph-image`,
        image: `${SITE.url}/opengraph-image`,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          postalCode: SITE.address.postal,
          addressCountry: SITE.address.country,
        },
        founder: [
          { "@type": "Person", name: "Majid Zafer", jobTitle: "CEO" },
          { "@type": "Person", name: "Cory Warfield", jobTitle: "Co-Founder" },
        ],
        areaServed: "Worldwide",
        knowsAbout: [
          "AI infrastructure",
          "blockchain",
          "quantum",
          "Speed to Scale",
          "venture studio",
          "founder advisory",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.positioning,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };
}
