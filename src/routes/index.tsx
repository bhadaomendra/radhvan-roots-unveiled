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
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">The Initiative</p>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] text-bark">
                Educational research and <span className="italic text-ember">lab-cultivation</span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground lg:text-xl">
                Radhvan Origins is focused on Cordyceps militaris, emphasizing a deep understanding of the organism, controlled cultivation, and evidence-based knowledge sharing.
              </p>
            </div>
          </Reveal>
        </section>
        
        <WhatIsCordyceps />
        
        <section className="bg-secondary/30 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <p className="eyebrow">Our Approach</p>
                <h2 className="mt-5 font-display text-4xl leading-[1.05] text-bark">
                  Why understanding the <span className="italic text-ember">organism matters</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Before growing, we study. Before claiming, we verify. Understanding the biological characteristics and the unique chemical signature of Cordyceps is the foundation of everything we do.
                </p>
                <div className="mt-10">
                  <a href="/cordyceps-study" className="group inline-flex items-center gap-2 text-sm font-bold tracking-[0.15em] text-bark uppercase transition-colors hover:text-ember">
                    Explore the study
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="rounded-sm border border-border bg-card p-8 lg:p-12">
                  <h3 className="font-display text-2xl text-bark">Lab-controlled cultivation</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Our initiative moves away from wild plundering toward precise, sterile, and plant-based cultivation methods that ensure purity and potency.
                  </p>
                  <div className="mt-8">
                    <a href="/cultivation-training" className="group inline-flex items-center gap-2 text-sm font-bold tracking-[0.15em] text-bark uppercase transition-colors hover:text-ember">
                      Learn the process
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Research />

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-bark lg:text-4xl">
              Building a future rooted in <span className="italic text-ember">vision</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              Radhvan is not just a name; it's a feeling—a beginning that comes from the heart.
            </p>
            <div className="mt-10">
              <a href="/why-radhvan" className="inline-flex items-center gap-2 border-b border-bark/30 pb-1 text-xs font-bold tracking-[0.16em] text-bark/80 uppercase transition-colors hover:border-ember hover:text-ember">
                Our Story & Philosophy
              </a>
            </div>
          </Reveal>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
