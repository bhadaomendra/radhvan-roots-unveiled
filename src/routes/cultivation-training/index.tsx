import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, RelatedLinks } from "@/components/site/Layout";
import { Process, ContactCTA } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { IconFlask, IconWave, IconLeafShield } from "@/components/site/icons";

import lab from "@/assets/cultivation-room.jpg";

const BASE_URL = "https://radhvanorigins.com";
const TITLE = "Cultivation & Training | Professional Cordyceps Growing Techniques";
const DESC = "Learn the six-stage professional cultivation process for Cordyceps militaris. Training and guidance for your cultivation journey.";

export const Route = createFileRoute("/cultivation-training/")({
  component: CultivationTrainingPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/cultivation-training` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/cultivation-training` }],
  }),
});

function CultivationTrainingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Cultivation"
        title={<>Precision, Control & <span className="italic text-ember">Practical Knowledge</span></>}
        description="We move Cordyceps cultivation from a biological mystery to a disciplined lab process. Understanding the environment is the first step to success."
        image={lab}
        imageAlt="Cultivation lab room"
      />

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:py-20">
          <Reveal>
            <blockquote className="mt-4">
              <p lang="hi" className="font-display text-[clamp(1.2rem,2.5vw,1.8rem)] leading-relaxed text-bark">
                “उगाना सिर्फ एक प्रक्रिया नहीं, धैर्य और समझ का अभ्यास है।”
              </p>
              <footer className="mt-4 text-xs font-medium tracking-wide text-muted-foreground italic opacity-80">
                “Cultivation is not just a process; it is an exercise in patience and understanding.”
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>
      
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.05] text-bark">
              The Radhvan <span className="italic text-ember">Approach</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Cultivation is not just about growing; it's about maintaining environmental consistency and absolute sterility. Our process is designed to be practical, understandable, and repeatable.
            </p>
            <div className="mt-10 space-y-6">
              {[
                { icon: IconFlask, title: "Sterile Techniques", text: "Absolute contamination awareness at every step of inoculation." },
                { icon: IconWave, title: "Environmental Control", text: "Precise management of light, temperature, and humidity." },
                { icon: IconLeafShield, title: "Process Discipline", text: "Strict adherence to protocols from substrate prep to harvest." },
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
              <h2 className="font-display text-3xl text-bark">Cultivation Steps</h2>
              <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
                <li>• Substrate preparation (Plant-based nutrients)</li>
                <li>• Sterilization (Autoclave protocols)</li>
                <li>• Inoculation (Strain introduction)</li>
                <li>• Incubation (Mycelial run)</li>
                <li>• Fruiting (Inducing stroma growth)</li>
                <li>• Harvesting & Post-harvest handling</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <Process />

      <section className="bg-secondary/30 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow">Professional Training</p>
              <h2 className="mt-5 font-display text-4xl text-bark">Responsible Knowledge Sharing</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Radhvan Origins aims to make cultivation knowledge more practical and responsible. We offer guidance to help you understand the requirements and explore the possibilities before you scale.
              </p>
              <div className="mt-10">
                <a href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-forest px-8 py-3.5 text-xs font-bold tracking-[0.16em] text-accent-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5">
                  Inquire about training
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactCTA />

      <RelatedLinks 
        items={[
          { href: "/cordyceps-study", label: "Biology & Study", description: "Understand the organism." },
          { href: "/research-knowledge", label: "Evidence & Research", description: "Explore the bioactive properties." },
        ]} 
      />
    </PageShell>
  );
}

