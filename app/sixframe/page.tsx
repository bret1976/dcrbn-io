import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { CONTROLLED_COMPANIES, SEO } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";

const company = CONTROLLED_COMPANIES.find((c) => c.slug === "sixframe")!;

export const metadata: Metadata = pageMetadata(SEO.sixframe, "/sixframe");

export default function SixframePage() {
  return (
    <ContentPage
      kicker="VENTURE STUDIO"
      title="Sixframe:"
      em="AI Film Studio by DCRBN."
      intro={[company.oneLiner, company.role, company.proof]}
      ctaHref={company.website || "/venture-studio"}
      ctaTitle="Visit Sixframe"
    />
  );
}
