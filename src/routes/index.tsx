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
      { name: "keywords", content: "Radhvan, Radhvan Origins, Cordyceps militaris, Cordyceps cultivation, lab grown cordyceps, cordycepin research, cordyceps vs cordyceps sinensis, fungal biotechnology, Cordyceps training India" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://radhvanorigins.com/" },
      { property: "og:image", content: "https://radhvanorigins.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Radhvan Origins — Scientific Cordyceps Militaris Cultivation & Research" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://radhvanorigins.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://radhvanorigins.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "EducationalOrganization",
              "@id": "https://radhvanorigins.com/#organization",
              "name": "Radhvan Origins",
              "alternateName": ["Radhvan", "Radhvan Origins Studio"],
              "url": "https://radhvanorigins.com",
              "logo": "https://radhvanorigins.com/og-image.png",
              "image": "https://radhvanorigins.com/og-image.png",
              "description": DESC,
              "sameAs": [
                "https://www.instagram.com/radhvanorigins",
                "https://www.linkedin.com/company/radhvanorigins"
              ],
              "knowsAbout": [
                "Cordyceps militaris",
                "Fungal Biotechnology",
                "Cordycepin Extraction",
                "Mycology Research"
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://radhvanorigins.com/#website",
              "name": "Radhvan Origins",
              "alternateName": ["Radhvan", "Radhvan Origins Studio"],
              "url": "https://radhvanorigins.com",
              "publisher": {
                "@id": "https://radhvanorigins.com/#organization"
              }
            },
            {
              "@type": "Course",
              "name": "Scientific Cordyceps Militaris Cultivation & Research Training",
              "description": "Practical training, research-based knowledge and guidance for your cultivation journey.",
              "provider": {
                "@id": "https://radhvanorigins.com/#organization"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is Cordyceps militaris the same as the wild caterpillar fungus?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. The wild Himalayan species is Ophiocordyceps sinensis. C. militaris is a related species that can be grown on plant substrate and produces a true fruiting body, which is why it is used in modern products."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does it really grow on insects?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In nature, yes — Cordyceps species parasitise insect larvae. Cultivated C. militaris for nutritional use is grown on sterile plant-based media, with no insect material involved."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does 'fruiting body' mean and why does it matter?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The fruiting body is the visible orange structure, distinct from the mycelium that grows underneath. Products made from mycelium grown on grain have a different composition, so the distinction changes what you are actually buying."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is cordycepin content a reliable quality signal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is the most useful single marker, but not the whole picture. Reputable material reports cordycepin alongside adenosine, moisture and contaminant testing from an accredited laboratory."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are there people who should avoid it?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Anyone pregnant or nursing, on immunosuppressants or anticoagulants, or preparing for surgery should speak with a clinician first. Fungal allergies are also a consideration."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When will Radhvan Origins products be available?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We are still in the cultivation and verification phase. Joining the list is the only way to be notified when the first batch is released."
                  }
                }
              ]
            }
          ]
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
