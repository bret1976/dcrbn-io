import Link from "next/link";
import { SiteHeader } from "@/components/SiteChrome";

export default function HomeHero() {
  return (
    <section className="ian-home__hero">
      <SiteHeader />
      <div className="ian-home__site">
        <section className="ian-home__content">
          <span className="ian-home__eyebrow">Las Vegas venture studio</span>
          <h1>Speed to Scale for AI, blockchain, and quantum.</h1>
          <p>
            DCRBN helps infrastructure companies already in motion assemble the
            resources, network, and operators to reach the next stage of growth.
          </p>
          <div className="ian-home__actions">
            <Link href="/apply" className="ian-home__button ian-home__button--primary">
              Apply
            </Link>
            <Link href="/about" className="ian-home__button ian-home__button--secondary">
              About DCRBN
            </Link>
            <Link href="/contact" className="ian-home__button ian-home__button--secondary">
              Contact
            </Link>
          </div>
        </section>
      </div>
      <a href="#mission" className="ian-home__scroll-cue">
        Scroll
      </a>
    </section>
  );
}
