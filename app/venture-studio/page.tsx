import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import { CONTROLLED_COMPANIES, SEO, VENTURE_CAPABILITIES } from "@/lib/copy";

export const metadata: Metadata = {
  title: SEO.ventureStudio.title,
  description: SEO.ventureStudio.description,
};

export default function VentureStudioPage() {
  return (
    <ContentPage
      kicker="VENTURE STUDIO"
      title="We do not just advise."
      em="We help build."
      intro="DCRBN Venture Studio is the build side of the platform. We selectively partner with founders, products, and opportunities where DCRBN can help turn proven insight, workflow, technology, or market opportunity into a scalable business."
    >
      <section className="home-band">
        <p>How we build</p>
        <div className="home-band__pills">
          {VENTURE_CAPABILITIES.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
      <section className="detail-sections">
        {CONTROLLED_COMPANIES.map((company, index) => (
          <article key={company.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>
              <Link href={company.href}>{company.name}</Link>
            </h2>
            <p>{company.oneLiner}</p>
          </article>
        ))}
      </section>
    </ContentPage>
  );
}
