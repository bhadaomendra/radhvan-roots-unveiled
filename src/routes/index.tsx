import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, Hero } from "@/components/site/Hero";
import {
  WhatIsCordyceps,
  WhyUnique,
  Compounds,
  Evidence,
  Process,
  Research,
  About,
  FutureRange,
  FAQ,
  Newsletter,
  Footer,
} from "@/components/site/Sections";
import { Sinensis, Applications } from "@/components/site/SinensisSections";

const BASE_URL = "https://radhvan-roots-unveiled.lovable.app";
const TITLE = "Radhvan Origins — The Cordyceps Study";
const DESC =
  "Cordyceps militaris: benefits, research, key compounds (cordycepin, adenosine), lab cultivation, and the difference from Cordyceps sinensis. An educational study by Radhvan Origins.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Radhvan Origins",
          url: `${BASE_URL}/`,
          description: DESC,
          publisher: {
            "@type": "Organization",
            name: "Radhvan Origins",
            slogan: "Welcome. Together.",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="bg-background">
      <SiteNav />
      <main>
        <Hero />
        <WhatIsCordyceps />
        <WhyUnique />
        <Sinensis />
        <Compounds />
        <Applications />
        <Evidence />
        <Process />
        <Research />
        <About />
        <FutureRange />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
