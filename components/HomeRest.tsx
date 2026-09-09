import Link from "next/link";
import {
  ADVISORY_CAPABILITIES,
  ALIGN_WAYS,
  CONSTRAINTS,
  CONTROLLED_COMPANIES,
  EXECUTION_PROOF,
  FOCUS_AREAS,
  GROWTH_LAYERS,
  NETWORK_VALUES,
  PHASES,
  PLACEHOLDER,
  TRACTION_SIGNALS,
  VENTURE_CAPABILITIES,
} from "@/lib/copy";
import { SITE } from "@/lib/site";
import { SiteFooter } from "@/components/SiteChrome";

const FAQ = [
  {
    q: "What is Speed to Scale?",
    a: "Speed to Scale is DCRBN’s growth platform for infrastructure founders. We identify the real constraint, deploy only the growth layers required to move it, and coordinate resources, relationships, systems, and operators toward the outcomes that accelerate the company’s next stage.",
  },
  {
    q: "Who does DCRBN back?",
    a: "We back infrastructure founders already in motion — especially across AI, blockchain, and quantum — with real traction signals such as paying customers, revenue, LOIs, pilots, IP, strong teams, or founder-market fit. We are not built for founders who only have an idea and want someone else to build it.",
  },
  {
    q: "What focus areas does DCRBN cover?",
    a: "DCRBN partners with founders building foundational systems across AI infrastructure, blockchain and Web3 infrastructure, quantum infrastructure, and adjacent frontiers such as defense, robotics, and media infrastructure.",
  },
  {
    q: "How does the Growth Cycle work?",
    a: "The Speed to Scale Growth Cycle moves through Diagnose, Design, Assemble, Execute, Amplify, and Evolve. DCRBN does not deploy every capability to every company — we activate the right layers at the right time.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE.url,
      description: SITE.positioning,
      telephone: SITE.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postal,
        addressCountry: SITE.address.country,
      },
      founder: [
        { "@type": "Person", name: "Majid Zafer", jobTitle: "CEO" },
        { "@type": "Person", name: "Cory Warfield", jobTitle: "Co-Founder" },
      ],
      areaServed: "Worldwide",
      knowsAbout: [
        "AI infrastructure",
        "blockchain",
        "quantum",
        "Speed to Scale",
        "force multiplier",
        "venture studio",
        "founder advisory",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.positioning,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

export default function HomeRest() {
  return (
    <div className="below">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="band band--mission" id="mission" aria-labelledby="mission-heading">
        <div className="band__rail">
          <p className="band__kicker">Why We Exist</p>
          <h2 id="mission-heading">
            Backing the infrastructure layer of{" "}
            <em>an abundant future.</em>
          </h2>
        </div>
        <div className="band__copy">
          <p>
            The next era of innovation will be built on new infrastructure:
            intelligent systems, decentralized networks, secure computation,
            quantum technologies, and tools that expand what humanity can create.
          </p>
          <p>
            DCRBN exists to be a force multiplier for founders building solutions
            that can help shape a future of abundance.
          </p>
        </div>
      </section>

      <section className="band" id="who-we-back" aria-labelledby="who-heading">
        <div className="band__intro">
          <p className="band__kicker">Who We Back</p>
          <h2 id="who-heading">
            Infrastructure founders with <em>real signals.</em>
          </h2>
          <p>
            We look beyond the idea. We look at the founder, the quality of the
            human, the vision, the problem being solved, the team assembled, and
            the evidence that the market is starting to respond.
          </p>
          <p>
            We are especially drawn to founders building infrastructure across AI,
            blockchain, and quantum — projects that can support new markets, new
            systems, and new ways for people and organizations to operate.
          </p>
          <p>
            We are not built for founders who simply have a good idea and want
            someone else to build their vision. We work with founders who are
            already moving and want the right ecosystem around them to go faster.
          </p>
        </div>
        <div className="signal-grid" aria-label="Traction signals">
          {TRACTION_SIGNALS.map((item) => (
            <div key={item} className="signal-chip">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="band band--dim" id="constraints" aria-labelledby="constraints-heading">
        <div className="band__intro band__intro--narrow">
          <p className="band__kicker">The Constraint</p>
          <h2 id="constraints-heading">
            Great founders still hit <em>growth constraints.</em>
          </h2>
          <p>
            Even strong founders stall when they lack the right visibility,
            strategy, infrastructure, partnerships, customers, paid pilots,
            capital readiness, or operator support.
          </p>
          <p>
            DCRBN brings the resources, relationships, and execution ecosystem
            that help inspired founders move faster.
          </p>
        </div>
        <div className="bento bento--constraints">
          {CONSTRAINTS.map((item) => (
            <article key={item} className="bento__cell bento__cell--tight">
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="band" id="growth-cycle" aria-labelledby="growth-heading">
        <div className="band__intro">
          <p className="band__kicker">Speed to Scale</p>
          <h2 id="growth-heading">
            The Speed to Scale <em>Growth Cycle.</em>
          </h2>
          <p>
            DCRBN identifies the real constraint, deploys only the layers required
            to move it, and coordinates resources, relationships, systems, and
            operators toward the outcomes that can accelerate the company’s next
            stage.
          </p>
          <p>
            DCRBN does not deploy every capability to every company. We identify
            the bottleneck and activate the right growth layers at the right time.
          </p>
          <div className="layer-row" aria-label="Growth layers">
            {GROWTH_LAYERS.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="phase-rail">
          {PHASES.map((phase, index) => (
            <article key={phase.name} className="phase-card">
              <span className="phase-card__n">{String(index + 1).padStart(2, "0")}</span>
              <h3>{phase.name}</h3>
              <p>{phase.body}</p>
            </article>
          ))}
        </div>
        <Link href="/growth-cycle" className="band__cta">
          See how the Growth Cycle works ↗
        </Link>
      </section>

      <section className="band band--dim" id="focus-areas" aria-labelledby="focus-heading">
        <div className="band__head-row">
          <div>
            <p className="band__kicker">Focus Areas</p>
            <h2 id="focus-heading">
              Infrastructure that can <em>move the world.</em>
            </h2>
            <p className="band__lede">
              DCRBN partners with founders building the foundational systems behind
              the next era of technology.
            </p>
          </div>
          <Link href="/focus-areas" className="band__cta band__cta--inline">
            Explore focus areas ↗
          </Link>
        </div>
        <div className="bento bento--focus">
          {FOCUS_AREAS.map((area, i) => (
            <article key={area.title} className={`bento__cell ${i === 0 ? "bento__cell--wide" : ""}`}>
              <h3>{area.title}</h3>
              <p>{area.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band" id="platform" aria-labelledby="platform-heading">
        <div className="band__intro band__intro--narrow">
          <p className="band__kicker">The Platform</p>
          <h2 id="platform-heading">
            Advisory when you need leverage. <em>Studio when you need to build.</em>
          </h2>
        </div>
        <div className="duo">
          <article className="duo__panel" id="advisory">
            <p className="band__kicker">Advisory &amp; Consulting</p>
            <h3>Applied strategic support for inspired founders.</h3>
            <p>
              DCRBN supports founders and companies with strategy, positioning,
              partnerships, capital readiness, growth architecture, and operator
              support. This is not passive advisory.
            </p>
            <ul className="cap-list">
              {ADVISORY_CAPABILITIES.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </li>
              ))}
            </ul>
            <Link href="/advisory" className="band__cta">
              Explore Advisory &amp; Consulting ↗
            </Link>
          </article>
          <article className="duo__panel duo__panel--accent" id="venture-studio">
            <p className="band__kicker">Venture Studio</p>
            <h3>We do not just advise. We help build.</h3>
            <p>
              DCRBN Venture Studio is the build side of the platform. We selectively
              partner with founders, products, and opportunities where DCRBN can
              help turn proven insight, workflow, technology, or market opportunity
              into a scalable business.
            </p>
            <div className="layer-row layer-row--compact">
              {VENTURE_CAPABILITIES.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="studio-cards">
              {CONTROLLED_COMPANIES.map((company) => (
                <Link key={company.slug} href={company.href} className="studio-card">
                  <strong>{company.name}</strong>
                  <span>{company.oneLiner}</span>
                </Link>
              ))}
            </div>
            <Link href="/venture-studio" className="band__cta">
              Visit the Venture Studio ↗
            </Link>
          </article>
        </div>
      </section>

      <section className="band band--dim" id="proof" aria-labelledby="proof-heading">
        <div className="band__head-row">
          <div>
            <p className="band__kicker">Proof</p>
            <h2 id="proof-heading">
              Proof across companies, portfolio, and <em>execution.</em>
            </h2>
            <p className="band__lede">
              DCRBN’s proof is organized by what we control, what we support, and
              what outcomes have been created or influenced through the platform.
            </p>
          </div>
          <Link href="/proof" className="band__cta band__cta--inline">
            See the proof structure ↗
          </Link>
        </div>
        <div className="bento bento--proof">
          {EXECUTION_PROOF.filter((item) => item.approvalStatus === "Approved").map(
            (item) => (
              <article key={item.title} className="bento__cell">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            )
          )}
        </div>
        <p className="band__note">{PLACEHOLDER} for portfolio / partner companies.</p>
      </section>

      <section className="band" id="network" aria-labelledby="network-heading">
        <div className="band__intro">
          <p className="band__kicker">Our Network</p>
          <h2 id="network-heading">
            A network built to accelerate <em>inspired founders.</em>
          </h2>
          <p>
            Great solutions need great people around them. DCRBN brings together
            operators, advisors, strategists, creators, technologists, investors,
            and strategic partners who can help founders move faster.
          </p>
          <p>
            This network is not a logo wall. It is an active growth asset designed
            to support visibility, partnerships, paid pilots, customer access,
            capital readiness, and company-building execution.
          </p>
        </div>
        <div className="bento bento--network">
          {NETWORK_VALUES.map((item) => (
            <article key={item} className="bento__cell bento__cell--tight">
              <h3>{item}</h3>
            </article>
          ))}
        </div>
        <Link href="/network" className="band__cta">
          Meet the DCRBN network ↗
        </Link>
      </section>

      <section className="band band--dim" id="partners" aria-labelledby="partners-heading">
        <div className="band__intro">
          <p className="band__kicker">Partners &amp; Investors</p>
          <h2 id="partners-heading">
            For partners and investors aligned with <em>purpose.</em>
          </h2>
          <p>
            DCRBN creates access to founders building infrastructure across AI,
            blockchain, and quantum. For strategic partners, advisors, and
            investors, the platform creates opportunities to align early with
            companies solving meaningful problems and building toward a future of
            abundance.
          </p>
        </div>
        <div className="bento bento--align">
          {ALIGN_WAYS.map((item) => (
            <article key={item} className="bento__cell bento__cell--tight">
              <h3>{item}</h3>
            </article>
          ))}
        </div>
        <Link href="/strategic-alignment" className="band__cta">
          Explore strategic alignment ↗
        </Link>
      </section>

      <section className="band band--origin" id="origin" aria-labelledby="origin-heading">
        <p className="band__kicker">Origin</p>
        <h2 id="origin-heading">Built to be a force multiplier.</h2>
        <p>
          DCRBN was founded by Majid Zafer and Cory Warfield around a simple
          operating idea: the golden rule, applied to company building. Treat
          people the way you want to be treated — and become a force multiplier
          for founders already building infrastructure that matters.
        </p>
        <Link href="/about" className="band__cta">
          About DCRBN ↗
        </Link>
      </section>

      <section className="band band--faq" id="faq" aria-labelledby="faq-heading">
        <div className="band__intro band__intro--narrow">
          <p className="band__kicker">FAQ</p>
          <h2 id="faq-heading">Questions founders and partners ask.</h2>
        </div>
        <div className="faq-list">
          {FAQ.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="close" id="apply" aria-labelledby="apply-heading">
        <p>Building Infrastructure That Inspires Us?</p>
        <h2 id="apply-heading">
          If you are a founder building in AI, blockchain, or quantum with
          traction, DCRBN may be the force multiplier around your next stage of
          growth.
        </h2>
        <Link href="/apply" className="button primary">
          Apply for Speed to Scale ↗
        </Link>
      </section>
      <SiteFooter />
    </div>
  );
}
