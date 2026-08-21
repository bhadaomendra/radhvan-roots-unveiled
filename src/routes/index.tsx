import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, Hero } from "@/components/site/Hero";
import { QuoteBlock, SectionPreview } from "@/components/site/Layout";
import {
  About,
  FutureRange,
  FAQ,
  Newsletter,
  ContactCTA,
  Footer,
} from "@/components/site/Sections";

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
        <QuoteBlock
          hindi="हर शुरुआत में एक संभावना छिपी होती है।"
          english="Every beginning hides a possibility."
          variant="home"
        />
        <SectionPreview
          eyebrow="Chapter one"
          title={
            <>
              What Cordyceps
              <span className="italic text-ember"> actually is</span>
            </>
          }
          intro="A genus of ascomycete fungi grown today on sterile plant-based substrate. Learn its lifecycle, how it compares to the wild Himalayan species, and what makes it different."
          to="/cordyceps-study"
          cta="Explore the study"
        />
        <SectionPreview
          eyebrow="Chapter two · five"
          title={
            <>
              How it's grown
              <span className="italic text-ember"> — and why it's unique</span>
            </>
          }
          intro="Six controlled stages, from spore to verified powder — no wild harvest, nothing rushed."
          to="/cultivation-training"
          cta="See the process"
          tone="dark"
        />
        <SectionPreview
          eyebrow="Chapter three · four · six"
          title={
            <>
              The compounds, the evidence
              <span className="italic text-ember"> and the research</span>
            </>
          }
          intro="Cordycepin, adenosine and β-glucans — with an honest, graded look at what human evidence actually supports so far."
          to="/research-knowledge"
          cta="View the research"
        />
        <About />
        <SectionPreview
          eyebrow="Chapter eight"
          title={
            <>
              Why <span className="italic text-ember">Radhvan?</span>
            </>
          }
          intro="From your first question to your first harvest — how we help you understand the journey, one step at a time."
          to="/why-radhvan"
          cta="Read our story"
          tone="dark"
        />
        <FutureRange />
        <FAQ />
        <Newsletter />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
