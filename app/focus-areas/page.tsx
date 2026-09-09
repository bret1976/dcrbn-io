import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { FOCUS_AREAS, SEO } from "@/lib/copy";

export const metadata: Metadata = {
  title: SEO.focusAreas.title,
  description: SEO.focusAreas.description,
};

export default function FocusAreasPage() {
  return (
    <ContentPage
      active="/focus-areas"
      kicker="FOCUS AREAS"
      title="Infrastructure that can"
      em="move the world."
      intro="DCRBN partners with founders building the foundational systems behind the next era of technology."
    >
      <section className="detail-sections">
        {FOCUS_AREAS.map((area, index) => (
          <article key={area.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{area.title}</h2>
            <p>{area.body}</p>
          </article>
        ))}
      </section>
    </ContentPage>
  );
}
