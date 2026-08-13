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

const TITLE = "Radhvan Origins — The Cordyceps Study";
const DESC =
  "An educational study of Cordyceps militaris: its biology, key compounds, evidence-based research and lab cultivation, by Radhvan Origins.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Radhvan Origins",
          slogan: "Welcome. Together.",
          description: DESC,
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
