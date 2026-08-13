import { Reveal } from "./Reveal";
import {
  IconMolecule,
  IconLeafShield,
  IconMountain,
  IconWave,
  IconFlask,
  IconSpore,
  IconDoctor,
} from "./icons";
import sinensisWild from "@/assets/sinensis-wild.jpg";
import sinensisHabitat from "@/assets/sinensis-habitat.jpg";
import comparison from "@/assets/sinensis-vs-militaris.jpg";

function Head({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.05] text-bark">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>
      )}
    </div>
  );
}

/* ------------------------------------------------ Sinensis vs Militaris */

const COMPARE = [
  {
    label: "Origin",
    sinensis: "Wild only — parasitises ghost moth larvae in Himalayan soil.",
    militaris: "Cultivated on a sterile plant-based substrate, no insect host.",
  },
  {
    label: "Habitat",
    sinensis: "Alpine meadows roughly 3,000–5,000 m across the Himalaya and Tibetan plateau.",
    militaris: "Controlled cultivation rooms with regulated light, humidity and air exchange.",
  },
  {
    label: "Appearance",
    sinensis: "Brown caterpillar body with a single dark, slender club emerging from the head.",
    militaris: "Bright orange fingered fruiting bodies growing in dense clusters.",
  },
  {
    label: "Cordycepin",
    sinensis: "Low to trace in most authenticated wild specimens.",
    militaris: "Consistently higher and measurable, which is why it is graded by assay.",
  },
  {
    label: "Supply",
    sinensis: "Scarce, expensive and under conservation pressure from over-harvesting.",
    militaris: "Reproducible, traceable and harvested without touching wild populations.",
  },
];

export function Sinensis() {
  return (
    <section id="sinensis" className="border-y border-border bg-secondary/40 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Head
            eyebrow="Field notes"
            title={
              <>
                The wild cousin:
                <span className="italic text-ember"> Cordyceps sinensis</span>
              </>
            }
            intro="Also called Ophiocordyceps sinensis, yarsagumba or keeda jadi — the caterpillar fungus that made the genus famous. It is a different species from the one we cultivate, and the difference matters."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <figure className="grain overflow-hidden rounded-sm border border-border">
              <img
                src={sinensisWild}
                alt="Wild Cordyceps sinensis specimens — caterpillar bodies with dark fungal clubs on mossy highland soil"
                width={1600}
                height={1104}
                loading="lazy"
                className="aspect-[16/11] w-full object-cover"
              />
              <figcaption className="border-t border-border bg-card px-6 py-4 text-xs leading-relaxed text-muted-foreground">
                Wild-form morphology: the fungus consumes the larva and pushes a single
                stalk above the soil.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={90}>
            <figure className="grain overflow-hidden rounded-sm border border-border">
              <img
                src={sinensisHabitat}
                alt="Cordyceps sinensis emerging from alpine turf with snow-dusted Himalayan ridges behind"
                width={1600}
                height={1104}
                loading="lazy"
                className="aspect-[16/11] w-full object-cover"
              />
              <figcaption className="border-t border-border bg-card px-6 py-4 text-xs leading-relaxed text-muted-foreground">
                Native habitat: cold, thin-aired highland meadows where the season lasts
                only a few weeks.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal>
          <figure className="grain mt-6 overflow-hidden rounded-sm border border-border">
            <img
              src={comparison}
              alt="Comparison plate: orange Cordyceps militaris cluster beside dried wild Cordyceps sinensis specimens"
              width={1600}
              height={1008}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
            <figcaption className="border-t border-border bg-card px-6 py-4 text-xs leading-relaxed text-muted-foreground">
              Left: <em>C. militaris</em>, lab-cultivated. Right: wild <em>C. sinensis</em>.
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-14 overflow-hidden rounded-sm border border-border bg-card">
          <div className="hidden grid-cols-[0.8fr_1.1fr_1.1fr] gap-8 border-b border-border px-7 py-4 text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase md:grid lg:px-10">
            <span>Aspect</span>
            <span>C. sinensis (wild)</span>
            <span className="text-ember">C. militaris (ours)</span>
          </div>
          {COMPARE.map((row, i) => (
            <Reveal key={row.label} delay={i * 60}>
              <div className="grid gap-3 border-b border-border px-7 py-6 last:border-0 md:grid-cols-[0.8fr_1.1fr_1.1fr] md:gap-8 lg:px-10">
                <h3 className="font-display text-lg text-bark">{row.label}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {row.sinensis}
                </p>
                <p className="text-sm leading-relaxed text-bark/80">{row.militaris}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 max-w-3xl border-l-2 border-forest pl-5 text-xs leading-relaxed text-muted-foreground">
            <strong className="text-bark">Why we cultivate militaris.</strong> Wild
            sinensis cannot be farmed, is frequently adulterated in the market and is
            ecologically fragile. <em>C. militaris</em> gives the same key nucleosides in
            a verifiable, repeatable and cruelty-free form.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Applications */

const AREAS = [
  {
    Icon: IconMolecule,
    title: "Cell-growth research",
    marker: "Preclinical",
    body: "Cordycepin is studied in laboratory and animal models for how it interferes with RNA synthesis in rapidly dividing cells. It is an active area of oncology research — not a treatment, and no human therapy is approved.",
  },
  {
    Icon: IconWave,
    title: "Mood, stress & sleep",
    marker: "Early human data",
    body: "Adenosine is a natural calming signal in the nervous system. Adaptogen-style studies look at stress resilience, low mood and sleep quality, mostly small and short-term so far.",
  },
  {
    Icon: IconSpore,
    title: "Circulation & blood pressure",
    marker: "Mixed / preliminary",
    body: "Adenosine pathways relax blood vessels, so animal work has examined blood-flow and blood-pressure effects. Human evidence is thin, and anyone on cardiac or blood-pressure medication should speak to a doctor first.",
  },
  {
    Icon: IconLeafShield,
    title: "Skin: acne & anti-ageing",
    marker: "In vitro / topical",
    body: "Cordycepin extracts are tested for antioxidant activity, calming of inflammatory pathways linked to acne, and collagen-supporting effects in skin-cell cultures used in cosmetic research.",
  },
  {
    Icon: IconMountain,
    title: "Joint comfort in older adults",
    marker: "Animal models",
    body: "Arthritis models have looked at cordycepin's effect on inflammatory mediators in joint tissue. Findings are encouraging in animals but not yet confirmed in controlled human trials.",
  },
  {
    Icon: IconFlask,
    title: "Standardisation",
    marker: "Quality first",
    body: "Every claim above depends on how much cordycepin and adenosine the material actually contains — which is why we assay each lot rather than describe benefits.",
  },
];

export function Applications() {
  return (
    <section id="applications" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
      <Reveal>
        <Head
          eyebrow="Research directions"
          title={
            <>
              Where cordycepin and adenosine
              <span className="italic text-ember"> are being studied</span>
            </>
          }
          intro="These two nucleosides drive most of the scientific interest in Cordyceps. Below is an honest map of the fields they appear in, with the stage of evidence stated up front."
        />
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {AREAS.map(({ Icon, title, marker, body }, i) => (
          <Reveal key={title} delay={i * 60}>
            <article className="grain h-full bg-card p-8 lg:p-10">
              <Icon className="h-9 w-9 text-ember" />
              <p className="mt-7 text-[0.62rem] tracking-[0.2em] text-forest uppercase">
                {marker}
              </p>
              <h3 className="mt-2 font-display text-2xl text-bark">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 max-w-3xl border-l-2 border-ember pl-5 text-xs leading-relaxed text-muted-foreground">
          <strong className="text-bark">Important.</strong> Cordyceps is a food-grade
          fungus, not a medicine. Nothing on this page treats, cures or prevents cancer,
          depression, hypertension, arthritis or any skin condition. Research is
          preliminary and largely preclinical. Always consult a qualified healthcare
          professional before use.
        </p>
      </Reveal>
    </section>
  );
}
