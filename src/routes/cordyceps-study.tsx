import { createFileRoute } from "@tanstack/react-router";
import { PageShell, QuoteBlock } from "@/components/site/Layout";
import { WhatIsCordyceps } from "@/components/site/Sections";
import { Sinensis } from "@/components/site/SinensisSections";

const TITLE = "What Is Cordyceps? | Cordyceps Militaris Explained";
const DESC =
  "Learn what Cordyceps is, how Cordyceps militaris differs from other species, and what modern research says about its cultivation and biology.";

export const Route = createFileRoute("/cordyceps-study")({
  component: CordycepsStudyPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "What is Cordyceps, Cordyceps militaris, Cordyceps sinensis, Cordyceps species, Cordyceps explained, Cordyceps biology" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://radhvanorigins.com/cordyceps-study" },
      { property: "og:image", content: "https://radhvanorigins.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "What Is Cordyceps? | Radhvan Origins" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://radhvanorigins.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://radhvanorigins.com/cordyceps-study" }],
  }),
});

function CordycepsStudyPage() {
  return (
    <PageShell>
      <QuoteBlock
        hindi="प्रकृति को समझना, उसकी गहराई को जानने की पहली सीढ़ी है।"
        english="Understanding nature is the first step to knowing its depth."
      />
      <WhatIsCordyceps />
      <Sinensis />
    </PageShell>
  );
}
