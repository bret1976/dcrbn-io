import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { NETWORK_VALUES, SEO } from "@/lib/copy";

export const metadata: Metadata = {
  title: SEO.network.title,
  description: SEO.network.description,
};

export default function NetworkPage() {
  return (
    <ContentPage
      active="/network"
      kicker="OUR NETWORK"
      title="A network built to accelerate"
      em="inspired founders."
      intro={[
        "Great solutions need great people around them. DCRBN brings together operators, advisors, strategists, creators, technologists, investors, and strategic partners who can help founders move faster.",
        "This network is not a logo wall. It is an active growth asset designed to support visibility, partnerships, paid pilots, customer access, capital readiness, and company-building execution.",
      ]}
    >
      <section className="home-band">
        <p>What the network unlocks</p>
        <div className="home-band__pills">
          {NETWORK_VALUES.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </ContentPage>
  );
}
