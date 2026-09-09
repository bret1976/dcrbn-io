import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { ALIGN_PAGE_WAYS, SEO } from "@/lib/copy";

export const metadata: Metadata = {
  title: SEO.alignment.title,
  description: SEO.alignment.description,
};

export default function AlignmentPage() {
  return (
    <ContentPage
      kicker="STRATEGIC ALIGNMENT"
      title="Align early with founders"
      em="building what comes next."
      intro={SEO.alignment.description}
      ctaTitle="Start the conversation"
      ctaHref="/apply"
    >
      <section className="home-band">
        <p>Ways to align</p>
        <div className="home-band__pills">
          {ALIGN_PAGE_WAYS.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </ContentPage>
  );
}
