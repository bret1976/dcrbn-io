import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { CONTROLLED_COMPANIES, SEO } from "@/lib/copy";

const company = CONTROLLED_COMPANIES.find((c) => c.slug === "lotus-trader")!;

export const metadata: Metadata = {
  title: SEO.lotus.title,
  description: SEO.lotus.description,
};

export default function LotusPage() {
  return (
    <ContentPage
      kicker="VENTURE STUDIO"
      title="Lotus Trader"
      em="DCRBN-controlled company."
      intro={[company.oneLiner, company.role, company.proof]}
      ctaHref="/venture-studio"
      ctaTitle="Venture Studio"
    />
  );
}
