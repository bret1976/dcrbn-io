import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { GROWTH_LAYERS, PHASES, SEO } from "@/lib/copy";

export const metadata: Metadata = {
  title: SEO.speedToScale.title,
  description: SEO.speedToScale.description,
};

export default function SpeedToScalePage() {
  return (
    <ContentPage
      active="/speed-to-scale"
      kicker="SPEED TO SCALE"
      title="The Speed to Scale"
      em="growth platform."
      intro={[
        "Speed to Scale is DCRBN’s growth platform for infrastructure founders. We activate visibility, strategy, agentic infrastructure, product support, partnerships, revenue, funding, and scale resources around inspired founders.",
        "DCRBN does not deploy every capability to every company. We identify the bottleneck and activate the right growth layers at the right time.",
      ]}
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
        <p>Growth layers</p>
        <div className="home-band__pills">
          {GROWTH_LAYERS.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </ContentPage>
  );
}
