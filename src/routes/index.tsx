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

const TITLE = "Radhvan Origins — Scientific Cordyceps Militaris Cultivation & Research";
const DESC =
  "Discover evidence-based research, chemical compounds (Cordycepin, Adenosine), and laboratory growth of Cordyceps militaris by Radhvan Origins.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Cordyceps militaris, Cordyceps cultivation, lab grown cordyceps, cordycepin research, cordyceps vs cordyceps sinensis, fungal biotechnology, Radhvan Origins" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://radhvanorigins.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://radhvanorigins.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Radhvan Origins",
          url: "https://radhvanorigins.com",
          logo: "https://radhvanorigins.com/favicon.png",
          description: DESC,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Radhvan Origins",
          url: "https://radhvanorigins.com",
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
