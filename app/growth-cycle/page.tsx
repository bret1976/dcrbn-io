import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { GROWTH_LAYERS, PHASES, SEO } from "@/lib/copy";

export const metadata: Metadata = {
  title: SEO.growthCycle.title,
  description: SEO.growthCycle.description,
};

export default function GrowthCyclePage() {
  return (
    <ContentPage
      active="/growth-cycle"
      kicker="GROWTH CYCLE"
      title="Identify the constraint."
      em="Activate the right layer."
      intro={SEO.growthCycle.description}
      ctaHref="/apply"
    >
      <section className="detail-sections">
        {PHASES.map((phase, index) => (
          <article key={phase.name}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{phase.name}</h2>
            <p>{phase.body}</p>
          </article>
        ))}
      </section>
      <section className="home-band">
        <p>Layers we can activate</p>
        <div className="home-band__pills">
          {GROWTH_LAYERS.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </ContentPage>
  );
}
