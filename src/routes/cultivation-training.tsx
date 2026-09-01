import { createFileRoute } from "@tanstack/react-router";
import { PageShell, QuoteBlock } from "@/components/site/Layout";
import { Process, WhyUnique } from "@/components/site/Sections";

const TITLE = "Best Cordyceps Cultivation Training in Jaipur & India | Radhvan Origins";
const DESC =
  "Looking for the best & most reliable Cordyceps cultivation training in Jaipur, Rajasthan & India? Radhvan Origins provides practical hands-on lab training, strain isolation, substrate preparation, and commercial business guidance.";
const KEYWORDS =
  "Best Cordyceps Training in Jaipur, Best Cordyceps Cultivation Training in Jaipur, Cordyceps Training in Jaipur, Cordyceps Cultivation Training in Jaipur, Reliable Cordyceps Training in Jaipur, Trusted Cordyceps Training in Jaipur, Practical Cordyceps Training in Jaipur, Best Cordyceps Training in India, Best Cordyceps Cultivation Training in India, Cordyceps Training in India, Cordyceps Cultivation Training in India, Reliable Cordyceps Training in India, Trusted Cordyceps Training Institute in India, Best Place to Learn Cordyceps Cultivation in India, Cordyceps Cultivation Business Training in India";

export const Route = createFileRoute("/cultivation-training")({
  component: CultivationTrainingPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: KEYWORDS },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://radhvanorigins.com/cultivation-training" },
      { property: "og:image", content: "https://radhvanorigins.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: TITLE },
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
          "@graph": [
            {
              "@type": "Course",
              name: "Best Cordyceps Cultivation & Business Training in Jaipur, India",
              description: DESC,
              provider: {
                "@type": "EducationalOrganization",
                name: "Radhvan Origins",
                url: "https://radhvanorigins.com/",
                address: {
                  "@type": "PostalAddress",
                  "addressLocality": "Jaipur",
                  "addressRegion": "Rajasthan",
                  "addressCountry": "IN"
                }
              },
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: ["Onsite", "Hands-on", "Practical"],
                location: "Jaipur, Rajasthan, India"
              }
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://radhvanorigins.com/" },
                { "@type": "ListItem", position: 2, name: "Cultivation & Training", item: "https://radhvanorigins.com/cultivation-training" }
              ]
            }
          ]
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
