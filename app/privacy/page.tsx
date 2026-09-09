import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { SEO } from "@/lib/copy";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: SEO.privacy.title,
  description: SEO.privacy.description,
};

export default function PrivacyPage() {
  return (
    <ContentPage
      kicker="LEGAL"
      title="Privacy policy"
      intro="The only information we ask for is what we need to review your application for fit. We do not sell it."
      ctaHref="/apply"
    >
      <section className="home-band">
        <p>01</p>
        <h2>Who we are</h2>
        <p className="home-band__intro">
          This site is operated by {SITE.legalName}. We are a Speed to Scale platform
          for founders building infrastructure in AI, blockchain, and quantum.
        </p>
        <p className="home-band__intro">
          Contact: {SITE.emails.privacy}
        </p>
      </section>
    </ContentPage>
  );
}
