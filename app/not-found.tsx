import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function NotFound() {
  return (
    <main className="bg-black text-white">
      <SiteHeader />
      <section className="mx-auto max-w-[1400px] px-5 pt-[calc(7rem+env(safe-area-inset-top))] pb-24 md:px-12">
        <p className="text-[11px] tracking-[0.28em] text-white/45 uppercase">404</p>
        <h1 className="mt-6 max-w-[12ch] text-[clamp(3rem,8vw,6rem)] leading-[0.9] font-extralight tracking-[-0.04em]">
          This path doesn’t exist.
        </h1>
        <Link href="/" className="mt-10 inline-flex border border-white/25 px-6 py-3 text-[14px] font-light no-underline hover:border-white/60">
          Return home →
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
