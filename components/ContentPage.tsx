import Link from "next/link";
import { DetailHeader, SiteFooter } from "@/components/SiteChrome";

export default function ContentPage({
  active,
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
    <main className="detail">
      <DetailHeader active={active} />
      <section className="detail-hero">
        <p>{kicker}</p>
        <h1>
          {title}
          {em ? (
            <>
              <br />
              <em>{em}</em>
            </>
          ) : null}
        </h1>
        {paragraphs.map((p) => (
          <div className="detail-intro" key={p.slice(0, 24)}>
            {p}
          </div>
        ))}
      </section>
      {children}
      <section className="detail-cta">
        <p>NEXT / MOVE</p>
        <h2>{ctaTitle}</h2>
        <Link href={ctaHref} className="button primary">
          Start the conversation ↗
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
