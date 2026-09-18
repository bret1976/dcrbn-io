import Link from "next/link";
import { DetailHeader, SiteFooter } from "@/components/SiteChrome";

export default function NotFound() {
  return (
    <main className="detail">
      <DetailHeader />
      <section className="detail-hero">
        <p>404</p>
        <h1>
          This page
          <br />
          <em>isn’t here.</em>
        </h1>
        <div className="detail-intro">
          The link may be outdated. Continue to the studio homepage, about page,
          or contact DCRBN.
        </div>
        <div className="ian-home__actions" style={{ marginTop: 36 }}>
          <Link href="/" className="button primary">
            Home ↗
          </Link>
          <Link href="/about" className="ian-home__button ian-home__button--secondary">
            About
          </Link>
          <Link href="/contact" className="ian-home__button ian-home__button--secondary">
            Contact
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
