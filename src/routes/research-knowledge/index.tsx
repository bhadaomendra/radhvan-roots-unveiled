import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, RelatedLinks } from "@/components/site/Layout";
import { Compounds, Evidence, Research } from "@/components/site/Sections";
import { Applications } from "@/components/site/SinensisSections";
import heroImage from "@/assets/hero-cordyceps.jpg";

const BASE_URL = "https://radhvanorigins.com";
const TITLE = "Research & Knowledge | Science-Backed Cordyceps Information";
const DESC = "Explore the bioactive compounds like Cordycepin and Adenosine, and learn about evidence-based health applications for Cordyceps.";

export const Route = createFileRoute("/research-knowledge/")({
  component: ResearchKnowledgePage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/research-knowledge` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/research-knowledge` }],
  }),
});

function ResearchKnowledgePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Research"
        title={<>Bioactive Compounds & <span className="italic text-ember">Clinical Evidence</span></>}
        description="We focus on what can be measured. From HPLC marker verification to human clinical trial summaries."
        image={heroImage}
        imageAlt="Cordyceps study"
      />
      <Compounds />
      <Applications />
      <Evidence />
      <Research />
      <RelatedLinks 
        items={[
          { href: "/cordyceps-faq", label: "FAQ", description: "Common questions about the science." },
          { href: "/cultivation-training", label: "Cultivation", description: "How to maximize compound expression." },
        ]}
      />
    </PageShell>
  );
}
