import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { ADVISORY_CAPABILITIES, SEO } from "@/lib/copy";

export const metadata: Metadata = {
  title: SEO.advisory.title,
  description: SEO.advisory.description,
};

export default function AdvisoryPage() {
  return (
    <ContentPage
      kicker="ADVISORY & CONSULTING"
      title="Applied strategic support"
      em="for inspired founders."
      intro={[
        "DCRBN supports founders and companies with strategy, positioning, partnerships, capital readiness, growth architecture, and operator support.",
        "This is not passive advisory. It is applied strategic support designed to help the company identify the right constraint, activate the right resources, and move toward the next stage of growth.",
      ]}
    >
      <section className="detail-sections">
        {ADVISORY_CAPABILITIES.map((item, index) => (
          <article key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </section>
    </ContentPage>
  );
}
