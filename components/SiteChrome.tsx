import Link from "next/link";

export const NAV = [
  { href: "/speed-to-scale", label: "Speed to Scale" },
  { href: "/growth-cycle", label: "Growth Cycle" },
  { href: "/focus-areas", label: "Focus Areas" },
  { href: "/proof", label: "Proof" },
  { href: "/network", label: "Network" },
] as const;

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
      <Link href="/apply" className="ian-home__top-cta">
        Apply
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
      <Link href="/apply" className="detail-contact">
        Apply ↗
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="detail-footer">
      <Link href="/">DCRBN</Link>
      <span>SPEED TO SCALE FOR AI, BLOCKCHAIN, AND QUANTUM FOUNDERS</span>
      <span>© 2026</span>
    </footer>
  );
}
