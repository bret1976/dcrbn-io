import type { MetadataRoute } from "next";
import { PUBLIC_PATHS } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_PATHS.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/about" || path === "/contact" ? 0.8 : 0.6,
  }));
}
