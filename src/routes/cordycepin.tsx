import { createFileRoute } from "@tanstack/react-router";
import { CordycepinPage } from "@/components/site/GuidePages";

const BASE_URL = "https://radhvanorigins.com";
const TITLE = "Cordycepin: the nucleoside behind Cordyceps — Radhvan Origins";
const DESC =
  "Cordycepin (3′-deoxyadenosine) is the key molecule in Cordyceps militaris research. Discover why it is the main quality marker and where the science is heading.";

export const Route = createFileRoute("/cordycepin/")({
  component: CordycepinPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${BASE_URL}/cordycepin` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/cordycepin` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Cordycepin: the nucleoside behind Cordyceps",
          description: DESC,
          author: { "@type": "Organization", name: "Radhvan Origins" },
          publisher: { "@type": "Organization", name: "Radhvan Origins" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE_URL}/cordycepin`,
          },
        }),
      },
    ],
  }),
});
