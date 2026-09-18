import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import { SEO } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";
import { SITE, formatAddress } from "@/lib/site";

export const metadata: Metadata = pageMetadata(SEO.contact, "/contact");

export default function ContactPage() {
  return (
    <ContentPage
      active="/contact"
      kicker="CONTACT"
      title="Talk with"
      em="DCRBN."
      intro={[
        "DCRBN is a Las Vegas venture studio. Reach the studio about Speed to Scale, advisory work, or venture-studio collaboration for infrastructure companies in AI, blockchain, and quantum.",
        "Founders with traction can also apply directly.",
      ]}
      ctaTitle="Apply for Speed to Scale"
      ctaHref="/apply"
    >
      <section className="detail-sections">
        <article>
          <span>01</span>
          <h2>Studio</h2>
          <p>
            {SITE.legalName}
            <br />
            {formatAddress()}
            <br />
            {SITE.address.country}
          </p>
        </article>
        <article>
          <span>02</span>
          <h2>Phone</h2>
          <p>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
          </p>
        </article>
        <article>
          <span>03</span>
          <h2>Email</h2>
          <p>
            Studio and applications:{" "}
            <a href={`mailto:${SITE.emails.apply}`}>{SITE.emails.apply}</a>
            <br />
            Privacy: <a href={`mailto:${SITE.emails.privacy}`}>{SITE.emails.privacy}</a>
          </p>
        </article>
        <article>
          <span>04</span>
          <h2>Founders</h2>
          <p>
            If you are building infrastructure in AI, blockchain, or quantum and
            already have traction, start with an application.{" "}
            <Link href="/apply">Apply for Speed to Scale</Link>.
          </p>
        </article>
      </section>
    </ContentPage>
  );
}
