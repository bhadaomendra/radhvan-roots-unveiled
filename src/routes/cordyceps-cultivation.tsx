import { createFileRoute } from "@tanstack/react-router";
import { CordycepsCultivationPage } from "@/components/site/GuidePages";

const BASE_URL = "https://radhvan-roots-unveiled.lovable.app";
const TITLE = "How Cordyceps militaris is cultivated in a lab — Radhvan Origins";
const DESC =
  "From strain selection to verified powder: six controlled stages of Cordyceps militaris cultivation. Lab-grown, traceable and wild-harvest-free.";

export const Route = createFileRoute("/cordyceps-cultivation")({
  component: CordycepsCultivationPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${BASE_URL}/cordyceps-cultivation` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/cordyceps-cultivation` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How Cordyceps militaris is cultivated in a lab",
          description: DESC,
          author: { "@type": "Organization", name: "Radhvan Origins" },
          publisher: { "@type": "Organization", name: "Radhvan Origins" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE_URL}/cordyceps-cultivation`,
          },
        }),
      },
    ],
  }),
});
