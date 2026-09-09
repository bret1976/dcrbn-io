import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { SEO } from "@/lib/copy";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: SEO.terms.title,
  description: SEO.terms.description,
};

export default function TermsPage() {
  return (
    <ContentPage
      kicker="LEGAL"
      title="Terms of service"
      intro={`The rules for using ${SITE.domain} and applying for Speed to Scale.`}
      ctaHref="/apply"
    >
      <section className="home-band">
        <p>01</p>
        <h2>Using this site</h2>
        <p className="home-band__intro">
          By using {SITE.domain} you agree to these terms. Applications are reviewed
          selectively. Submitting an application does not create an engagement.
        </p>
      </section>
    </ContentPage>
  );
}
