import type { Metadata } from "next";
import { ApplyForm } from "@/components/ApplyForm";
import ContentPage from "@/components/ContentPage";
import { GROWTH_LAYERS, SEO } from "@/lib/copy";

export const metadata: Metadata = {
  title: SEO.apply.title,
  description: SEO.apply.description,
};

export default function ApplyPage() {
  return (
    <ContentPage
      kicker="APPLY"
      title="Apply for Speed to Scale"
      intro="Tell us what you are building, why it matters, and how DCRBN can become a force multiplier around your next stage of growth. We work with founders who have traction, conviction, and the will to build."
      ctaHref="#apply-form"
      ctaTitle="Submit your application"
    >
      <section className="home-band">
        <p>Support options</p>
        <div className="home-band__pills">
          {GROWTH_LAYERS.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <ApplyForm />
      </section>
    </ContentPage>
  );
}
