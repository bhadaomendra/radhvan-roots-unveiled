import { createFileRoute } from "@tanstack/react-router";
import { CordycepsHealthBenefitsPage } from "@/components/site/GuidePages";

const BASE_URL = "https://radhvanorigins.com";
const TITLE = "Cordyceps health benefits: what the research says — Radhvan Origins";
const DESC =
  "A plain-language overview of Cordyceps research areas: cancer cell studies, mood and stress, blood pressure, skin health and arthritis. Includes medical disclaimers.";

export const Route = createFileRoute("/cordyceps-health-benefits")({
  component: CordycepsHealthBenefitsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${BASE_URL}/cordyceps-health-benefits` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/cordyceps-health-benefits` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Cordyceps health benefits: what the research says",
          description: DESC,
          author: { "@type": "Organization", name: "Radhvan Origins" },
          publisher: { "@type": "Organization", name: "Radhvan Origins" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE_URL}/cordyceps-health-benefits`,
          },
        }),
      },
    ],
  }),
});
