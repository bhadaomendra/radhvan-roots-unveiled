import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, RelatedLinks } from "@/components/site/Layout";
import { WhatIsCordyceps, WhyUnique } from "@/components/site/Sections";
import { Sinensis } from "@/components/site/SinensisSections";
import anatomy from "@/assets/anatomy-plate.jpg";

const BASE_URL = "https://radhvanorigins.com";
const TITLE = "Cordyceps Study | Understanding Cordyceps Militaris & Sinensis";
const DESC = "A deep dive into the biology, morphology, and unique characteristics of Cordyceps fungi. Compare Militaris and Sinensis species.";

export const Route = createFileRoute("/cordyceps-study")({
  component: CordycepsStudyPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/cordyceps-study` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/cordyceps-study` }],
  }),
});

function CordycepsStudyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Study"
        title={<>Biology, Morphology & <span className="italic text-ember">Classification</span></>}
        description="Cordyceps is a genus of ascomycete fungi that has fascinated naturalists for centuries. We break down the science behind the spire."
        image={anatomy}
        imageAlt="Cordyceps anatomy plate"
      />
      <WhatIsCordyceps />
      <WhyUnique />
      <Sinensis />
      <RelatedLinks 
        items={[
          { href: "/cultivation-training", label: "Cultivation", description: "Learn how we grow it in the lab." },
          { href: "/research-knowledge", label: "Research", description: "Explore the bioactive compounds." },
        ]}
      />
    </PageShell>
  );
}
