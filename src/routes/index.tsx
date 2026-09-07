import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, Hero } from "@/components/site/Hero";
import { SectionPreview, QuoteBlock } from "@/components/site/Layout";
import { ContactCTA, Footer } from "@/components/site/Sections";

const TITLE = "Radhvan Origins | Cordyceps Research & Cultivation";
const DESC =
  "Radhvan Origins explores Cordyceps militaris through research, cultivation education and practical knowledge, with a focus on responsible and traceable cultivation.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Radhvan Origins, Cordyceps militaris, Cordyceps research, Cordyceps cultivation, Cordyceps India, lab grown cordyceps, fungal biotechnology" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://radhvanorigins.com/" },
      { property: "og:image", content: "https://radhvanorigins.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Radhvan Origins | Cordyceps Research & Cultivation" },
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
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "addressCountry": "IN"
              },
              "areaServed": ["Jaipur", "Rajasthan", "India", "Worldwide"],
              "sameAs": [
                "https://www.instagram.com/radhvanorigins",
                "https://www.linkedin.com/company/radhvanorigins",
                "https://en.wikipedia.org/wiki/Cordyceps_militaris"
              ],
              "knowsAbout": [
                "Cordyceps militaris",
                "Cordyceps Training in Jaipur",
                "Best Cordyceps Training in Jaipur",
                "Cordyceps Cultivation Jaipur Rajasthan",
                "Cordyceps Farming India",
                "Fungal Biotechnology",
                "Cordycepin & Adenosine Content",
                "Laboratory Mushroom Growth",
                "Mycology Research & Spawn Lab"
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://radhvanorigins.com/#website",
              "name": "Radhvan Origins",
              "alternateName": ["Radhvan", "Radhvan Origins Studio", "Radhvan Jaipur"],
              "url": "https://radhvanorigins.com",
              "publisher": {
                "@id": "https://radhvanorigins.com/#organization"
              }
            },
            {
              "@type": "Course",
              "name": "Cordyceps Militaris Cultivation & Research Training in Jaipur",
              "description": "Practical training, research-based knowledge and guidance for your cultivation journey in Jaipur, Rajasthan.",
              "provider": {
                "@id": "https://radhvanorigins.com/#organization"
              }
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
        <QuoteBlock
          variant="home"
          hindi="हर शुरुआत में एक संभावना छिपी होती है।"
          english="Every beginning hides a possibility."
        />
        <SectionPreview
          eyebrow="Our story"
          title="Why Radhvan"
          intro="Radhvan is more than a name — it is a beginning from the heart. Discover the philosophy, values and purpose behind our Cordyceps journey."
          to="/why-radhvan"
          cta="Discover our story"
        />
        <SectionPreview
          eyebrow="The species"
          title="What is Cordyceps?"
          intro="Cordyceps militaris is a remarkable fungus with a fascinating biology. Learn how it differs from wild Cordyceps sinensis and why cultivation matters."
          to="/cordyceps-study"
          cta="Study Cordyceps"
          tone="dark"
        />
        <SectionPreview
          eyebrow="Hands-on learning"
          title="Cultivation & Training"
          intro="Practical, research-based training for your cultivation journey — from substrate preparation to fruiting body development, taught step by step."
          to="/cultivation-training"
          cta="Explore training"
        />
        <SectionPreview
          eyebrow="Evidence & knowledge"
          title="Research & Knowledge"
          intro="Evidence-based insight into cordycepin, adenosine and the documented applications of Cordyceps militaris across health and wellbeing research."
          to="/research-knowledge"
          cta="Read the research"
          tone="dark"
        />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
