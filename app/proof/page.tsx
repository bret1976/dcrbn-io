import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import { CONTROLLED_COMPANIES, EXECUTION_PROOF, SEO } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(SEO.proof, "/proof");

export default function ProofPage() {
  return (
    <ContentPage
      active="/proof"
      kicker="PROOF"
      title="What we control, support,"
      em="and influence."
      intro="DCRBN’s proof is organized by what we control, what we support, and what outcomes have been created or influenced through the platform."
    >
      <section className="detail-sections">
        <article>
          <span>01</span>
          <h2>DCRBN-Controlled Companies</h2>
          <p>
            Companies where DCRBN has controlling equity, build responsibility, or
            company-creation involvement.
          </p>
        </article>
        {CONTROLLED_COMPANIES.map((company) => (
          <article key={company.slug}>
            <span>—</span>
            <h2>
              <Link href={company.href}>{company.name}</Link>
            </h2>
            <p>{company.oneLiner}</p>
          </article>
        ))}
        <article>
          <span>02</span>
          <h2>Portfolio / Partner Companies</h2>
          <p>
            Companies DCRBN helps build, advise, scale, or support, but does not
            necessarily control. Named partner companies are listed here when both
            DCRBN and the company approve a public mention.
          </p>
        </article>
        {EXECUTION_PROOF.filter((item) => item.approvalStatus === "Approved").map((item, index) => (
          <article key={item.title}>
            <span>{String(index + 3).padStart(2, "0")}</span>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </section>
    </ContentPage>
  );
}
