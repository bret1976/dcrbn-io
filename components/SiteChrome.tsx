"use client";

import Link from "next/link";
import { useState } from "react";
import { FOOTER, SITE } from "@/lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/speed-to-scale", label: "Speed to Scale" },
  { href: "/growth-cycle", label: "Growth Cycle" },
  { href: "/focus-areas", label: "Focus Areas" },
  { href: "/proof", label: "Proof" },
  { href: "/network", label: "Our Network" },
] as const;

function Mark() {
  return (
    <span
      aria-hidden
      className="inline-block h-4 w-4 rotate-45 rounded-[3px] bg-gradient-to-br from-blue-mid to-blue-lt shadow-[0_0_14px_rgba(47,134,255,.6)]"
    />
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent pt-[env(safe-area-inset-top)] transition duration-300">
      <div className="mx-auto flex h-[64px] max-w-[1400px] items-center justify-between gap-5 px-5 md:h-[72px] md:px-12">
        <Link href="/" className="inline-flex items-center gap-[11px] no-underline" aria-label="DCRBN home">
          <Mark />
          <span className="text-[15px] font-light tracking-[0.18em] text-white">DCRBN</span>
        </Link>
        <nav className="hidden items-center gap-[clamp(16px,1.8vw,28px)] lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-[0.2em] text-white/60 uppercase no-underline transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/apply"
            className="hidden border border-white/25 px-5 py-2 text-[11px] tracking-[0.2em] text-white uppercase no-underline transition hover:border-white/60 sm:inline-flex"
          >
            Apply for Speed to Scale
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Open menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-5 bg-white" />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-white/10 bg-black px-5 py-4 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-[12px] tracking-[0.2em] text-white/70 uppercase"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="block py-3 text-[12px] tracking-[0.2em] text-white/70 uppercase">
            Contact
          </Link>
        </nav>
      ) : null}
    </header>
  );
}

export function DetailHeader({ active }: { active?: string }) {
  return <SiteHeader />;
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-12 md:px-12 md:py-20">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 no-underline">
            <Mark />
            <span className="text-[15px] font-light tracking-[0.18em] text-white">DCRBN</span>
          </Link>
          <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed font-light text-white/55">
            DCRBN is a Speed to Scale platform for founders building infrastructure in AI, blockchain,
            and quantum.
          </p>
          <p className="mt-4 text-[14px] leading-relaxed font-light text-white/40">
            {SITE.address.street}
            <br />
            {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
            <br />
            {SITE.address.country}
          </p>
          <a href={SITE.phoneHref} className="mt-3 inline-block text-[14px] font-light text-white/70 no-underline hover:text-white">
            {SITE.phone}
          </a>
        </div>
        <div>
          <h2 className="mb-4 text-[11px] tracking-[0.28em] text-white/45 uppercase">Platform</h2>
          <ul className="space-y-3">
            {FOOTER.platform.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center text-[14.5px] font-light text-white/60 no-underline hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-[11px] tracking-[0.28em] text-white/45 uppercase">Company</h2>
          <ul className="space-y-3">
            {FOOTER.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center text-[14.5px] font-light text-white/60 no-underline hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-[11px] tracking-[0.28em] text-white/45 uppercase">Start</h2>
          <ul className="space-y-3">
            {FOOTER.start.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center text-[14.5px] font-light text-white/60 no-underline hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <h2 className="mb-4 text-[11px] tracking-[0.28em] text-white/45 uppercase">Legal</h2>
            <ul className="space-y-3">
              {FOOTER.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-10 items-center text-[14.5px] font-light text-white/60 no-underline hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-6 text-[12px] tracking-[0.08em] text-white/40 sm:flex-row sm:items-center sm:justify-between md:px-12">
          <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <Link href="/apply" className="text-white/60 no-underline hover:text-white">
            Apply for Speed to Scale →
          </Link>
        </div>
      </div>
    </footer>
  );
}
