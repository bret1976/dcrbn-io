import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import HomeRest from "@/components/HomeRest";
import { pageMetadata } from "@/lib/seo";
import { SEO } from "@/lib/copy";

export const metadata: Metadata = pageMetadata(SEO.home, "/");

export default function Page() {
  return (
    <main className="ian-home">
      <HomeHero />
      <HomeRest />
    </main>
  );
}
