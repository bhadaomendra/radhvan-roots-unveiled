import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, RelatedLinks, QuoteBlock } from "@/components/site/Layout";
import { Compounds, Evidence, Research } from "@/components/site/Sections";
import { Applications } from "@/components/site/SinensisSections";
import { Reveal } from "@/components/site/Reveal";
import { IconFlask, IconMolecule, IconLeafShield } from "@/components/site/icons";

import heroImage from "@/assets/hero-cordyceps.jpg";

const BASE_URL = "https://radhvanorigins.com";
const TITLE = "Research & Knowledge | Science-Backed Cordyceps Information";
const DESC = "Explore the bioactive compounds like Cordycepin and Adenosine, and learn about evidence-based health applications for Cordyceps.";

export const Route = createFileRoute("/research-knowledge/")({
  component: ResearchKnowledgePage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/research-knowledge` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${BASE_URL}/research-knowledge` },
      { rel: "prefetch", href: `${BASE_URL}/research-knowledge.html?v=${Date.now()}` }
    ],
  }),
});

function ResearchKnowledgePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Research"
        title={<>Science, Evidence & <span className="italic text-ember">Bioactive Compounds</span></>}
        description="We believe in evidence-based knowledge. Explore the chemistry and clinical research behind Cordyceps militaris."
        image={heroImage}
        imageAlt="Cordyceps study"
      />

      <QuoteBlock 
        hindi="“सवाल से शुरू हुई खोज, समझ में बदलती है और समझ ही आगे बढ़ने का रास्ता दिखाती है।”"
        english="“A search that begins with a question becomes understanding”"
        variant="page"
      />
      
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.05] text-bark">
              Our <span className="italic text-ember">Research Approach</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We value scientific evidence and continuous learning. Our goal is to document observations from the lab and interpret published research responsibly.
            </p>
            <div className="mt-10 space-y-8">
              {[
                { icon: IconFlask, title: "Lab Observations", text: "Careful documentation of environmental effects on bioactive expression." },
                { icon: IconMolecule, title: "Scientific Literature", text: "Analyzing peer-reviewed studies on nucleosides and polysaccharides." },
                { icon: IconLeafShield, title: "Responsible Interpretation", text: "Avoiding medical claims while highlighting areas of scientific interest." },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <item.icon className="h-6 w-6 shrink-0 text-ember" />
                  <div>
                    <h3 className="font-display text-lg text-bark">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-sm border border-border bg-card p-8 lg:p-12">
              <h2 className="font-display text-3xl text-bark">Learning from Experiments</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Research at Radhvan is an ongoing journey. Every cultivation cycle provides data that helps us refine our understanding of this complex organism.
              </p>
              <blockquote className="mt-8 border-l-2 border-ember pl-6 text-sm italic text-muted-foreground">
                "Information should be understood in the context of available scientific evidence. We prioritize clarity over sensationalism."
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      <Compounds />
      <Applications />
      <Evidence />
      <Research />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36 text-center">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">Scientific Integrity</p>
          <h2 className="mt-4 font-display text-3xl text-bark">Continuous documentation</h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            As we learn from our own experiments and new published studies, we update our knowledge base to reflect the most current scientific consensus.
          </p>
        </Reveal>
      </section>

      <RelatedLinks 
        items={[
          { href: "/cordyceps-study", label: "Biology & Morphology", description: "Understand the organism's foundation." },
          { href: "/cultivation-training", label: "Cultivation Process", description: "See how we apply the science." },
        ]} 
      />
    </PageShell>
  );
}
