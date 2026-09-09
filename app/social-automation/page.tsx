import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { CONTROLLED_COMPANIES, SEO } from "@/lib/copy";

const company = CONTROLLED_COMPANIES.find((c) => c.slug === "social-automation")!;

export const metadata: Metadata = {
  title: SEO.social.title,
  description: SEO.social.description,
};

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
