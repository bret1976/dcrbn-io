import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { PHASES, SEO, TEAM } from "@/lib/copy";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: SEO.about.title,
  description: SEO.about.description,
};

export default function AboutPage() {
  return (
    <ContentPage
      kicker="ABOUT"
      title="Built to be a"
      em="force multiplier."
      intro={[
        "DCRBN exists to support solutions that can help shape a future of abundance. We work with founders and companies building meaningful infrastructure across AI, blockchain, quantum, and adjacent frontiers.",
        "We believe inspired founders need more than advice. They need resources, network, strategy, visibility, partnerships, capital readiness, and people willing to help execute.",
        SITE.brandLine,
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
        <p>The People</p>
        <h2>
          The people behind <em>DCRBN.</em>
        </h2>
        <div className="team-grid">
          {TEAM.map((person) => (
            <article className="team-card" key={person.name}>
              {person.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={person.photo} alt={`${person.name}, ${person.title}`} />
              ) : (
                <div className="role">Photo not published</div>
              )}
              <h3>{person.name}</h3>
              <p className="role">{person.title}</p>
              <p>{person.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </ContentPage>
  );
}
