import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { Cta } from "@/components/Cta";

export default function ContentPage({
  kicker,
  title,
  em,
  intro,
  children,
  ctaTitle = "Apply for Speed to Scale",
  ctaHref = "/apply",
}: {
  active?: string;
  kicker: string;
  title: string;
  em?: string;
  intro: string | string[];
  children?: React.ReactNode;
  ctaTitle?: string;
  ctaHref?: string;
}) {
  const paragraphs = Array.isArray(intro) ? intro : [intro];
  return (
    <main className="bg-black text-[#f4f4f4]">
      <SiteHeader />
      <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-[calc(6.5rem+env(safe-area-inset-top))] md:px-12 md:pb-24 md:pt-40">
        <p className="text-[11px] tracking-[0.28em] text-white/55 uppercase">{kicker}</p>
        <h1 className="mt-6 max-w-[16ch] text-[clamp(2.6rem,8vw,6.2rem)] leading-[0.9] font-extralight tracking-[-0.04em] text-white">
          {title}
          {em ? (
            <>
              <br />
              <em className="font-extralight not-italic text-white/70">{em}</em>
            </>
          ) : null}
        </h1>
        {paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="mt-6 max-w-[46rem] text-[16px] leading-relaxed font-light text-white/62">
            {p}
          </p>
        ))}
      </section>
      {children}
      <section className="border-t border-white/10 px-5 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[11px] tracking-[0.28em] text-white/45 uppercase">Next / Move</p>
          <h2 className="mt-6 max-w-[16ch] text-[clamp(2rem,5vw,4.4rem)] leading-[1.02] font-extralight tracking-[-0.035em]">
            {ctaTitle}
          </h2>
          {ctaHref.startsWith("http") ? (
            <a href={ctaHref} className="mt-8 inline-flex min-h-11 items-center justify-center border border-white/25 px-6 py-3 text-[14px] font-light text-white no-underline hover:border-white/60" rel="noopener noreferrer">
              Start the conversation →
            </a>
          ) : (
            <Cta href={ctaHref} className="mt-8">
              Start the conversation →
            </Cta>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

export function DetailSections({
  items,
}: {
  items: { n?: string; title: React.ReactNode; body: React.ReactNode }[];
}) {
  return (
    <section className="border-t border-white/10 px-5 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-[1400px] divide-y divide-white/12">
        {items.map((item, index) => (
          <article key={index} className="grid gap-4 py-8 md:grid-cols-[4.5rem_1fr_1.2fr] md:gap-12">
            <span className="font-mono text-[11px] tracking-[0.28em] text-white/35">
              {item.n || String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="text-[clamp(1.4rem,2.4vw,2rem)] font-extralight tracking-[-0.03em] text-white">{item.title}</h2>
            <div className="text-[15px] leading-relaxed font-light text-white/62">{item.body}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PillRow({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <section className="border-t border-white/10 px-5 py-12 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-[11px] tracking-[0.28em] text-white/45 uppercase">{label}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {items.map((item) => (
            <span key={item} className="border border-white/15 px-4 py-2 text-[13px] font-light text-white/70">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
