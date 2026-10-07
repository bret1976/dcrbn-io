import type { NextConfig } from "next";

// Legacy URLs Google still knows from earlier sites on this domain
// (WordPress 2023-24, Wix 2024-25, the Sep 2026 interim build).
// 301 each one to the closest live page so Search Console stops reporting 404s.
const LEGACY_REDIRECTS: Array<[string, string]> = [
  // Sep 2026 interim build
  ["/vision", "/about"],
  ["/intelligence", "/focus-areas"],
  ["/growth", "/growth-cycle"],
  ["/method", "/growth-cycle"],
  ["/scale", "/speed-to-scale"],
  ["/accelerator", "/speed-to-scale"],
  ["/services", "/advisory"],
  ["/services/:path*", "/advisory"],
  ["/case-studies", "/proof"],
  ["/case-studies/:path*", "/proof"],
  ["/6frame-ai-studio", "/sixframe"],
  ["/insights", "/"],
  ["/assessment", "/apply"],
  // Wix
  ["/privacy-policy", "/privacy"],
  ["/pages-sitemap.xml", "/sitemap.xml"],
  // WordPress
  ["/author/:path*", "/about"],
  ["/tf_header_footer/:path*", "/"],
  ["/wp-sitemap.xml", "/sitemap.xml"],
  ["/:file(wp-sitemap-.+\\.xml)", "/sitemap.xml"],
  ["/sitemap_index.xml", "/sitemap.xml"],
  // Old icon paths
  ["/favicon.ico", "/icon"],
  ["/icon.png", "/icon"],
  // Broken external link: "www.dcrbn.io/   (https://web.archive.org/...)"
  ["/:junk(.*web\\.archive\\.org.*)", "/"],
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Do not send X-Robots-Tag: noindex. Public pages must remain crawlable.
  async redirects() {
    return LEGACY_REDIRECTS.map(([source, destination]) => ({
      source,
      destination,
      statusCode: 301 as const,
    }));
  },
};

export default nextConfig;
