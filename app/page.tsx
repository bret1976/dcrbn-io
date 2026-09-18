import type { Metadata } from "next";
import { CinematicClose, CinematicEarth, CinematicHero } from "@/components/Cinematic";
import HomeRest from "@/components/HomeRest";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { pageMetadata } from "@/lib/seo";
import { SEO } from "@/lib/copy";

export const metadata: Metadata = pageMetadata(SEO.home, "/");

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:border focus:border-white/40 focus:bg-black focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="bg-black">
        <CinematicHero />
        <CinematicEarth />
        <HomeRest />
        <CinematicClose />
      </main>
      <SiteFooter />
    </>
  );
}
