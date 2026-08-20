import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, RelatedLinks } from "@/components/site/Layout";
import { Process, ContactCTA } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { IconFlask, IconWave, IconLeafShield } from "@/components/site/icons";

import lab from "@/assets/cultivation-room.jpg";

const BASE_URL = "https://radhvanorigins.com";
const TITLE = "Cultivation & Training | Professional Cordyceps Growing Techniques";
const DESC = "Learn the six-stage professional cultivation process for Cordyceps militaris. Training and guidance for your cultivation journey.";

export const Route = createFileRoute("/cultivation-training/")({
  component: CultivationTrainingPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/cultivation-training` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/cultivation-training` }],
  }),
});

function CultivationTrainingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Cultivation"
        title={<>From Spore to <span className="italic text-ember">Verified Harvest</span></>}
        description="Our cultivation process is built on precision, sterility, and environmental control. We share the knowledge required to master this organism."
        image={lab}
        imageAlt="Radhvan cultivation room"
      />
      <Process />
      <RelatedLinks 
        items={[
          { href: "/cordyceps-study", label: "Biology", description: "Understand the organism you are growing." },
          { href: "/research-knowledge", label: "Evidence", description: "What the science says about the harvest." },
        ]}
      />
    </PageShell>
  );
}
