import Link from "next/link";

export default function NotFound() {
  return (
    <main className="detail">
      <Link href="/" className="detail-brand" style={{ padding: "24px 4vw", display: "inline-block" }}>
        DCRBN
      </Link>
      <section className="detail-hero">
        <p>404 / SIGNAL LOST</p>
        <h1>
          This path
          <br />
          <em>doesn’t exist.</em>
        </h1>
        <Link href="/" className="button primary">
          Return home ↗
        </Link>
      </section>
    </main>
  );
}
