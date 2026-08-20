import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, RelatedLinks } from "@/components/site/Layout";
import { WhatIsCordyceps, WhyUnique, Compounds } from "@/components/site/Sections";
import { Sinensis } from "@/components/site/SinensisSections";
import { Reveal } from "@/components/site/Reveal";
import { IconSpore, IconMycelium, IconMolecule } from "@/components/site/icons";

import anatomy from "@/assets/anatomy-plate.jpg";

const BASE_URL = "https://radhvanorigins.com";
const TITLE = "Cordyceps Study | Understanding Cordyceps Militaris & Sinensis";
const DESC = "A deep dive into the biology, morphology, and unique characteristics of Cordyceps fungi. Compare Militaris and Sinensis species.";

export const Route = createFileRoute("/cordyceps-study/")({
  component: CordycepsStudyPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/cordyceps-study` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/cordyceps-study` }],
  }),
});

function CordycepsStudyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Study"
        title={<>Biology, Morphology & <span className="italic text-ember">Classification</span></>}
        description="Cordyceps is a genus of ascomycete fungi that has fascinated naturalists for centuries. We break down the science behind the spire."
        image={anatomy}
        imageAlt="Cordyceps anatomy plate"
      />
      
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.05] text-bark">
              What is <span className="italic text-ember">Cordyceps militaris?</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Unlike its wild counterpart that grows on insects, Cordyceps militaris is a resilient species that can be successfully cultivated in controlled environments using plant-based substrates.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              It is characterized by its bright orange, club-shaped fruiting bodies (stroma) that emerge from the mycelial network.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: IconSpore, title: "Biological Origin", text: "Part of the Ascomycota phylum, known for sac-like structures that produce spores." },
              { icon: IconMycelium, title: "Growth Pattern", text: "Forms a dense network of hyphae that colonizes the substrate before fruiting." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="rounded-sm border border-border bg-card p-6">
                  <item.icon className="h-8 w-8 text-ember" />
                  <h3 className="mt-4 font-display text-lg text-bark">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhatIsCordyceps />

      <section className="bg-secondary/30 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Life Cycle</p>
              <h2 className="mt-5 font-display text-4xl text-bark">From spore to spire</h2>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
                The life cycle of C. militaris in a controlled environment mimics the natural process but ensures purity and consistency at every stage.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <WhyUnique />
      <Compounds />
      <Sinensis />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36 text-center">
        <Reveal>
          <h2 className="font-display text-3xl text-bark">Why controlled cultivation matters</h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Cultivation allows us to protect wild ecosystems while producing material with verified chemical signatures, free from environmental contaminants.
          </p>
        </Reveal>
      </section>

      <RelatedLinks 
        items={[
          { href: "/cultivation-training", label: "Learn the Process", description: "Practical cultivation knowledge." },
          { href: "/research-knowledge", label: "Read the Evidence", description: "Explore compounds and research." },
        ]} 
      />

    </PageShell>
  );
}

