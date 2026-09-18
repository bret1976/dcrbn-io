import Link from "next/link";
import { FOOTER, NAV, SITE } from "@/lib/site";

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="ian-home__header">
      <Link href="/" className="ian-home__brand" aria-label="DCRBN home">
        <span className="ian-home__brand-mark" />
        <span>DCRBN</span>
      </Link>
      <nav className="ian-home__nav" aria-label="DCRBN">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={active === item.href ? "is-active" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link href="/contact" className="ian-home__top-cta">
        Contact
      </Link>
    </header>
  );
}

export function DetailHeader({ active }: { active?: string }) {
  return (
    <header className="detail-header">
      <Link href="/" className="detail-brand">
        <i>D</i>DCRBN
      </Link>
      <nav className="detail-nav" aria-label="DCRBN">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={active === item.href ? "is-active" : ""}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link href="/contact" className="detail-contact">
        Contact ↗
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <Link href="/">DCRBN</Link>
          <p>
            Las Vegas venture studio. Speed to Scale for infrastructure companies
            in AI, blockchain, and quantum.
          </p>
        </div>
        <div className="site-footer__cols">
          <div>
            <p>Studio</p>
            {FOOTER.company.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <p>Platform</p>
            {FOOTER.platform.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <p>Start</p>
            {FOOTER.start.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            {FOOTER.legal.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>{SITE.legalName}</span>
        <span>Las Vegas, NV</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
