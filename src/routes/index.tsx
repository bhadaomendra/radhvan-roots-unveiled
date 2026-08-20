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
  WhyRadhvan,
  FutureRange,
  FAQ,
  Newsletter,
  ContactCTA,
  Footer,
} from "@/components/site/Sections";
import { Sinensis, Applications } from "@/components/site/SinensisSections";

const BASE_URL = "https://radhvanorigins.com";
const TITLE = "Radhvan Origins | Reliable Cordyceps Cultivation & Training";
const DESC =
  "Learn Cordyceps cultivation through practical training, research-based knowledge and guidance for your cultivation journey.";

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
      { name: "keywords", content: "Cordyceps, Cordyceps Militaris, Cordycepin, Adenosine, Medicinal Mushrooms, Radhvan Origins, Health Benefits, Sinensis vs Militaris" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Radhvan Origins",
          url: BASE_URL,
          logo: `${BASE_URL}/favicon.png`,
          description: DESC,
          sameAs: [
            "https://www.instagram.com/radhvanorigins",
            // Add other social links if available
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-9910565537",
            email: "info@radhvanorigins.com",
            contactType: "customer service"
          }
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Radhvan Origins",
          url: BASE_URL,
          potentialAction: {
            "@type": "SearchAction",
            target: `${BASE_URL}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        }),
      }
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
        <WhyRadhvan />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
