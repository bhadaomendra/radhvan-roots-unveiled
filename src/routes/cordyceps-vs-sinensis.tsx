import { createFileRoute } from "@tanstack/react-router";
import { CordycepsVsSinensisPage } from "@/components/site/GuidePages";

const BASE_URL = "https://radhvan-roots-unveiled.lovable.app";
const TITLE = "Cordyceps militaris vs Cordyceps sinensis — Radhvan Origins";
const DESC =
  "Learn the difference between wild Cordyceps sinensis (yarsagumba) and lab-grown Cordyceps militaris: origin, habitat, appearance, cordycepin content and sustainability.";

export const Route = createFileRoute("/cordyceps-vs-sinensis")({
  component: CordycepsVsSinensisPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${BASE_URL}/cordyceps-vs-sinensis` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/cordyceps-vs-sinensis` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Cordyceps militaris vs Cordyceps sinensis",
          description: DESC,
          author: { "@type": "Organization", name: "Radhvan Origins" },
          publisher: { "@type": "Organization", name: "Radhvan Origins" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE_URL}/cordyceps-vs-sinensis`,
          },
        }),
      },
    ],
  }),
});
