import { createFileRoute } from "@tanstack/react-router";
import { PageShell, QuoteBlock } from "@/components/site/Layout";
import { Compounds, Evidence, Research } from "@/components/site/Sections";
import { Applications } from "@/components/site/SinensisSections";

const TITLE = "Cordyceps Research & Knowledge | Radhvan Origins";
const DESC =
  "Explore research, compounds, applications and scientific knowledge surrounding Cordyceps militaris and modern cultivation.";

export const Route = createFileRoute("/research-knowledge")({
  component: ResearchKnowledgePage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Cordyceps research, Cordyceps militaris research, Cordyceps science, fungal biotechnology, Cordyceps cultivation research, Cordyceps compounds" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://radhvanorigins.com/research-knowledge" },
      { property: "og:image", content: "https://radhvanorigins.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Cordyceps Research & Knowledge | Radhvan Origins" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://radhvanorigins.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://radhvanorigins.com/research-knowledge" }],
  }),
});

function ResearchKnowledgePage() {
  return (
    <PageShell>
      <QuoteBlock
        hindi="सीखा हुआ ज्ञान तब और बड़ा होता है, जब वह आगे बढ़ता है।"
        english="Learned knowledge grows even more when it is passed forward."
      />
      <Compounds />
      <Applications />
      <Evidence />
      <Research />
    </PageShell>
  );
}
