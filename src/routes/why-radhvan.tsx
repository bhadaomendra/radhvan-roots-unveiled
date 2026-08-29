import { createFileRoute } from "@tanstack/react-router";
import { PageShell, QuoteBlock } from "@/components/site/Layout";
import { WhyRadhvan } from "@/components/site/Sections";

const TITLE = "Why Radhvan Origins | Our Approach to Cordyceps";
const DESC =
  "Discover the thinking behind Radhvan Origins and our approach to Cordyceps research, cultivation education, scientific learning and responsible knowledge sharing.";

export const Route = createFileRoute("/why-radhvan")({
  component: WhyRadhvanPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Why Radhvan Origins, Radhvan Origins, Cordyceps research, Cordyceps cultivation education, scientific cultivation, Cordyceps education" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://radhvanorigins.com/why-radhvan" },
      { property: "og:image", content: "https://radhvanorigins.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Why Radhvan Origins" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://radhvanorigins.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://radhvanorigins.com/why-radhvan" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: TITLE,
          description: DESC,
          mainEntity: {
            "@type": "EducationalOrganization",
            name: "Radhvan Origins",
            url: "https://radhvanorigins.com/",
            logo: "https://radhvanorigins.com/favicon.png",
          },
        }),
      },
    ],
  }),
});

function WhyRadhvanPage() {
  return (
    <PageShell>
      <QuoteBlock
        hindi="राधवन हमारे लिए सिर्फ एक नाम नहीं, एक एहसास है—एक शुरुआत, जो दिल से हुई है। हम इस सफर पर अपनी ऐसी पहचान बनाने निकले हैं, जिस पर आने वाला कल गर्व कर सके।"
        english="Radhvan is not just a name for us, it is a feeling—a beginning that started from the heart. We have set out to create an identity on this journey that the future can be proud of."
      />
      <WhyRadhvan />
    </PageShell>
  );
}
