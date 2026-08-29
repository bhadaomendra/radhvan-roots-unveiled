import { createFileRoute } from "@tanstack/react-router";
import { PageShell, QuoteBlock } from "@/components/site/Layout";
import { Process, WhyUnique } from "@/components/site/Sections";

const TITLE = "Cordyceps Cultivation Training | Radhvan Origins";
const DESC =
  "Learn Cordyceps militaris cultivation through practical training, controlled growing methods and research-based cultivation knowledge from Radhvan Origins.";

export const Route = createFileRoute("/cultivation-training")({
  component: CultivationTrainingPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Cordyceps cultivation training, Cordyceps militaris training, Cordyceps training India, Cordyceps cultivation course, Cordyceps farming training, commercial Cordyceps cultivation" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://radhvanorigins.com/cultivation-training" },
      { property: "og:image", content: "https://radhvanorigins.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Cordyceps Cultivation Training | Radhvan Origins" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://radhvanorigins.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://radhvanorigins.com/cultivation-training" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: TITLE,
          description: DESC,
          provider: {
            "@type": "Organization",
            name: "Radhvan Origins",
            sameAs: "https://radhvanorigins.com/",
          },
        }),
      },
    ],
  }),
});

function CultivationTrainingPage() {
  return (
    <PageShell>
      <QuoteBlock
        hindi="उगाना सिर्फ एक प्रक्रिया नहीं, धैर्य और समझ का अभ्यास है।"
        english="Cultivation is not just a process, it is a practice of patience and understanding."
      />
      <WhyUnique />
      <Process />
    </PageShell>
  );
}
