import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { CONTROLLED_COMPANIES, SEO } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";

const company = CONTROLLED_COMPANIES.find((c) => c.slug === "social-automation")!;

export const metadata: Metadata = pageMetadata(SEO.social, "/social-automation");

export default function SocialPage() {
  return (
    <ContentPage
      kicker="VENTURE STUDIO"
      title="Viral Growth OS"
      em="for founders and operators."
      intro={[company.oneLiner, company.role, company.proof]}
      ctaHref={company.website || "/venture-studio"}
      ctaTitle="Open Viral Growth OS"
    />
  );
}
