import { useState } from "react";
import { Reveal } from "./Reveal";
import {
  IconStroma,
  IconMycelium,
  IconMolecule,
  IconFlask,
  IconLeafShield,
  IconSpore,
  IconWave,
  IconMountain,
  BrandLeaves,
} from "./icons";
import anatomy from "@/assets/anatomy-plate.jpg";
import lab from "@/assets/lab-cultivation.jpg";
import logo from "@/assets/radhvan-full-logo.png.asset.json";

function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
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

/* ---------------------------------------------------------------- What is */

export function WhatIsCordyceps() {
  return (
    <section id="what" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-24">
        <Reveal>
          <SectionHead
            eyebrow="Chapter one"
            title={
              <>
                What Cordyceps
                <span className="block italic text-ember">actually is</span>
              </>
            }
            intro="Cordyceps is a genus of ascomycete fungi that grows on insect hosts in the wild. The species used in modern nutrition, Cordyceps militaris, produces a bright orange fruiting body and is now grown entirely on sterile plant-based substrate."
          />
          <ul className="mt-10 space-y-6">
            {[
              [
                IconSpore,
                "Spore",
                "A microscopic ascospore lands and germinates — the entire organism starts here.",
              ],
              [
                IconMycelium,
                "Mycelium",
                "Thread-like hyphae colonise the substrate, forming a dense white network.",
              ],
              [
                IconStroma,
                "Stroma",
                "Under light and cool air the fungus raises orange clubs — the harvested part.",
              ],
            ].map(([Icon, title, body], i) => {
              const C = Icon as typeof IconSpore;
              return (
                <Reveal as="li" key={title as string} delay={i * 90}>
                  <div className="flex gap-5">
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-ember">
                      <C className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-bark">
                        {title as string}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {body as string}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <figure className="grain overflow-hidden rounded-sm border border-border bg-card">
            <img
              src={anatomy}
              alt="Naturalist plate showing Cordyceps militaris anatomy, cross-section and mycelial network"
              width={1200}
              height={1200}
              loading="lazy"
              className="w-full"
            />
            <figcaption className="border-t border-border px-6 py-4 text-xs tracking-wide text-muted-foreground">
              Plate I — Morphology of <em>C. militaris</em>: stroma, ascus detail,
              ascospores, mycelial mat. Original illustration for Radhvan Origins.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Why unique */

export function WhyUnique() {
  const items = [
    [
      IconMountain,
      "Born of extremes",
      "Wild relatives survive thin air and freezing soil above 3,000 m — conditions that shaped an unusual metabolism.",
    ],
    [
      IconMolecule,
      "A nucleoside signature",
      "It produces cordycepin, a rare 3′-deoxyadenosine that closely mirrors the body's own adenosine.",
    ],
    [
      IconWave,
      "Two organisms in one",
      "Insect-derived and plant-grown forms differ chemically, which is why cultivation method matters more than name.",
    ],
    [
      IconLeafShield,
      "Cultivable, not plundered",
      "Unlike wild Ophiocordyceps, C. militaris fruits in a lab — no ecosystem is stripped to supply it.",
    ],
  ];

  return (
    <section id="unique" className="border-y border-border bg-[#241708] py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-[color:var(--ember)]">Chapter two</p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.05] text-parchment">
            Why it stands apart from
            <span className="italic text-ember"> every other fungus</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-parchment/10 sm:grid-cols-2">
          {items.map(([Icon, title, body], i) => {
            const C = Icon as typeof IconMountain;
            return (
              <Reveal key={title as string} delay={i * 80}>
                <article className="group h-full bg-[#241708] p-8 transition-colors duration-500 hover:bg-[#2d1d0b] lg:p-11">
                  <C className="h-9 w-9 text-ember transition-transform duration-500 group-hover:-translate-y-1" />
                  <h3 className="mt-7 font-display text-xl text-parchment">
                    {title as string}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-parchment/60">
                    {body as string}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Compounds */

const COMPOUNDS = [
  {
    key: "cordycepin",
    name: "Cordycepin",
    formula: "C₁₀H₁₃N₅O₃",
    tag: "Nucleoside",
    body: "3′-deoxyadenosine, the molecule most associated with the genus. Structurally near-identical to adenosine, which is why it is the primary marker used to grade material.",
    marker: "Typical assay target: 0.3–1.2% by dry weight",
  },
  {
    key: "adenosine",
    name: "Adenosine",
    formula: "C₁₀H₁₃N₅O₄",
    tag: "Nucleoside",
    body: "A native signalling nucleoside also present in the fruiting body. Often measured alongside cordycepin as a paired quality index.",
    marker: "Reported in most authenticated C. militaris lots",
  },
  {
    key: "polysaccharides",
    name: "β-glucans",
    formula: "Polysaccharide",
    tag: "Structural",
    body: "Branched glucose polymers forming the cell wall. The fraction most studied for immune interaction across all medicinal fungi.",
    marker: "Extraction method strongly changes yield",
  },
  {
    key: "cordycepic",
    name: "Cordycepic acid",
    formula: "C₆H₁₄O₆",
    tag: "Sugar alcohol",
    body: "Chemically D-mannitol. Contributes to the hygroscopic character of extracts and is a simple authenticity check.",
    marker: "Common in traditional water decoctions",
  },
  {
    key: "ergosterol",
    name: "Ergosterol",
    formula: "C₂₈H₄₄O",
    tag: "Sterol",
    body: "The fungal analogue of cholesterol and a precursor to vitamin D₂ under UV exposure. A reliable fungal-biomass indicator.",
    marker: "Used to verify true fruiting body content",
  },
];

export function Compounds() {
  const [active, setActive] = useState(COMPOUNDS[0].key);
  const current = COMPOUNDS.find((c) => c.key === active)!;

  return (
    <section id="compounds" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
      <Reveal>
        <SectionHead
          eyebrow="Chapter three"
          title={
            <>
              The compounds
              <span className="italic text-ember"> worth naming</span>
            </>
          }
          intro="Select a compound to read its role. These are the constituents laboratories actually measure — not marketing language."
        />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <ul className="flex flex-col">
            {COMPOUNDS.map((c) => {
              const on = c.key === active;
              return (
                <li key={c.key}>
                  <button
                    onClick={() => setActive(c.key)}
                    className={`group flex w-full items-baseline justify-between gap-4 border-b border-border py-5 text-left transition-colors ${
                      on ? "text-ember" : "text-bark hover:text-ember"
                    }`}
                  >
                    <span className="font-display text-xl lg:text-2xl">{c.name}</span>
                    <span
                      className={`text-[0.65rem] tracking-[0.18em] uppercase transition-opacity ${
                        on ? "opacity-100" : "opacity-45 group-hover:opacity-80"
                      }`}
                    >
                      {c.tag}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <div key={current.key} className="grain h-full rounded-sm border border-border bg-card p-8 lg:p-12">
            <IconMolecule className="h-10 w-10 text-ember" />
            <p className="mt-8 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              {current.formula}
            </p>
            <h3 className="mt-2 font-display text-3xl text-bark">{current.name}</h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {current.body}
            </p>
            <p className="mt-8 border-t border-border pt-5 text-xs tracking-wide text-forest">
              {current.marker}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Evidence */

const EVIDENCE = [
  {
    area: "Exercise & oxygen use",
    strength: 3,
    body: "Small human trials have examined effects on VO₂ max and time-to-exhaustion, mostly in older or untrained adults, with modest and inconsistent results.",
  },
  {
    area: "Fatigue & perceived energy",
    strength: 3,
    body: "Reported in several short-duration randomised studies; subjective endpoints make effect sizes difficult to interpret.",
  },
  {
    area: "Immune signalling",
    strength: 2,
    body: "Largely cell-culture and animal work on β-glucan pathways. Human confirmation remains limited.",
  },
  {
    area: "Antioxidant activity",
    strength: 2,
    body: "Consistent in vitro capacity; translation to clinical outcomes is not established.",
  },
  {
    area: "Metabolic markers",
    strength: 1,
    body: "Preliminary preclinical signals only. Treat any claim in this area with scepticism.",
  },
];

export function Evidence() {
  return (
    <section id="evidence" className="border-y border-border bg-secondary/50 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHead
            eyebrow="Chapter four"
            title={
              <>
                What the evidence
                <span className="italic text-ember"> supports — and doesn't</span>
              </>
            }
            intro="We grade each research area by the weight of published human evidence. Filled marks indicate stronger study quality and replication, not proven benefit."
          />
        </Reveal>

        <div className="mt-14 overflow-hidden rounded-sm border border-border bg-card">
          {EVIDENCE.map((row, i) => (
            <Reveal key={row.area} delay={i * 70}>
              <div className="grid gap-4 border-b border-border p-7 last:border-0 md:grid-cols-[1fr_auto_1.4fr] md:items-center md:gap-10 lg:px-10">
                <h3 className="font-display text-xl text-bark">{row.area}</h3>
                <div
                  className="flex gap-1.5"
                  aria-label={`Evidence strength ${row.strength} of 5`}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className={`h-1.5 w-7 rounded-full ${
                        n <= row.strength ? "bg-ember" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {row.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 max-w-3xl border-l-2 border-ember pl-5 text-xs leading-relaxed text-muted-foreground">
            <strong className="text-bark">Scientific disclaimer.</strong> This page is
            educational. Nothing here is medical advice, and Cordyceps is not intended
            to diagnose, treat, cure or prevent any disease. Research is ongoing and
            many findings are preliminary. Consult a qualified healthcare professional
            before using any supplement, particularly if pregnant, nursing, taking
            medication or managing a health condition.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Process */

const STEPS = [
  ["01", "Strain selection", "Verified C. militaris cultures are maintained on slants and screened for vigour and cordycepin expression."],
  ["02", "Sterile substrate", "A plant-based nutrient medium is autoclaved, cooled and inoculated inside laminar flow."],
  ["03", "Colonisation", "Mycelium runs in darkness at controlled humidity until the substrate is fully white."],
  ["04", "Fruiting", "Light, cool air and gas exchange trigger the orange stroma over several weeks."],
  ["05", "Drying & milling", "Low-temperature drying preserves heat-sensitive constituents before uniform milling."],
  ["06", "Verification", "Each lot is checked for identity, moisture, marker content and contaminant limits."],
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-20">
        <Reveal>
          <figure className="grain overflow-hidden rounded-sm border border-border">
            <img
              src={lab}
              alt="Controlled cultivation room with jars of Cordyceps militaris under laboratory light"
              width={1408}
              height={1008}
              loading="lazy"
              className="w-full"
            />
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <SectionHead
              eyebrow="Chapter five"
              title={
                <>
                  From spore to
                  <span className="italic text-ember"> verified powder</span>
                </>
              }
              intro="Six controlled stages. Nothing wild-harvested, nothing rushed."
            />
          </Reveal>
          <ol className="mt-10">
            {STEPS.map(([n, title, body], i) => (
              <Reveal as="li" key={n} delay={i * 60}>
                <div className="flex gap-6 border-b border-border py-5 last:border-0">
                  <span className="font-mono text-xs text-ember">{n}</span>
                  <div>
                    <h3 className="font-display text-lg text-bark">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Research */

const RESEARCH = [
  {
    label: "Chemistry",
    title: "Cordycepin biosynthesis is genetically clustered",
    body: "Work on the C. militaris genome identified the gene cluster responsible for cordycepin, explaining why strain choice changes output far more than growing time.",
  },
  {
    label: "Cultivation",
    title: "Light and gas exchange drive fruiting",
    body: "Controlled-environment studies consistently show photoperiod and CO₂ level as the dominant levers for stroma formation and pigment intensity.",
  },
  {
    label: "Analysis",
    title: "HPLC remains the reference method",
    body: "Reverse-phase HPLC for cordycepin and adenosine is the accepted way to separate authentic fruiting body from mycelium-on-grain material.",
  },
  {
    label: "Open questions",
    title: "Human dosing is still unresolved",
    body: "Published trials vary widely in dose, extract type and duration, which is the main reason conclusions across studies conflict.",
  },
];

export function Research() {
  return (
    <section id="research" className="border-y border-border bg-[#2E3B11] py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-parchment/60">Chapter six</p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.05] text-parchment">
            Research
            <span className="italic text-ember"> highlights</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-parchment/65">
            Summaries of directions in the published literature, written in plain
            language. Nothing below should be read as a health claim.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {RESEARCH.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <article className="h-full rounded-sm border border-parchment/15 p-8 transition-colors duration-500 hover:border-ember/60 lg:p-10">
                <p className="eyebrow text-parchment/50">{r.label}</p>
                <h3 className="mt-4 font-display text-xl leading-snug text-parchment">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-parchment/60">{r.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ About */

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <Reveal>
          <img
            src={logo.url}
            alt="Radhvan Origins logo"
            width={200}
            height={200}
            loading="lazy"
            className="h-28 w-28 object-contain"
          />
          <SectionHead
            eyebrow="Chapter seven"
            title={
              <>
                About
                <span className="italic text-ember"> Radhvan Origins</span>
              </>
            }
          />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Radhvan Origins is a cultivation and education studio built around one
            organism at a time. We begin with Cordyceps militaris because it sits
            exactly where our interest lives — old traditional use, real modern
            chemistry, and a great deal of noise in between.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our commitment is unglamorous: grow it properly, measure it honestly, and
            explain it without exaggeration. <em>Welcome. Together.</em>
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-px overflow-hidden rounded-sm bg-border">
            {[
              [IconFlask, "Measured, not claimed", "Every statement we publish is tied to a method or a paper — or it is marked as unknown."],
              [IconLeafShield, "Cultivated, not extracted from the wild", "Lab fruiting keeps alpine ecosystems out of the supply chain."],
              [IconMycelium, "One organism, studied deeply", "We would rather understand a single species fully than list twenty."],
            ].map(([Icon, title, body]) => {
              const C = Icon as typeof IconFlask;
              return (
                <div key={title as string} className="bg-card p-8">
                  <C className="h-7 w-7 text-ember" />
                  <h3 className="mt-5 font-display text-lg text-bark">
                    {title as string}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {body as string}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Product */

const PRODUCTS = [
  ["Whole fruiting body", "Dried orange stroma, intact and gradeable by eye.", "In cultivation"],
  ["Fine milled powder", "Low-temperature dried and uniformly milled.", "In cultivation"],
  ["Dual-extract concentrate", "Water and ethanol fractions recombined.", "In development"],
  ["Daily capsule", "Single-ingredient, marker-verified dosing.", "In development"],
];

export function FutureRange() {
  return (
    <section className="border-y border-border bg-secondary/50 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHead
            eyebrow="Chapter eight"
            title={
              <>
                The range
                <span className="italic text-ember"> we are building</span>
              </>
            }
            intro="Nothing is on sale yet. This is what is growing and what follows it."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map(([name, body, status], i) => (
            <Reveal key={name} delay={i * 70}>
              <article className="grain flex h-full flex-col rounded-sm border border-border bg-card p-7 transition-transform duration-500 hover:-translate-y-1">
                <BrandLeaves className="h-8 w-12" />
                <h3 className="mt-6 font-display text-xl text-bark">{name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
                <span className="mt-6 inline-flex w-fit rounded-full border border-forest/30 px-3 py-1 text-[0.62rem] font-bold tracking-[0.16em] text-forest uppercase">
                  {status}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- FAQ */

const FAQS = [
  [
    "Is Cordyceps militaris the same as the wild caterpillar fungus?",
    "No. The wild Himalayan species is Ophiocordyceps sinensis. C. militaris is a related species that can be grown on plant substrate and produces a true fruiting body, which is why it is used in modern products.",
  ],
  [
    "Does it really grow on insects?",
    "In nature, yes — Cordyceps species parasitise insect larvae. Cultivated C. militaris for nutritional use is grown on sterile plant-based media, with no insect material involved.",
  ],
  [
    "What does 'fruiting body' mean and why does it matter?",
    "The fruiting body is the visible orange structure, distinct from the mycelium that grows underneath. Products made from mycelium grown on grain have a different composition, so the distinction changes what you are actually buying.",
  ],
  [
    "Is cordycepin content a reliable quality signal?",
    "It is the most useful single marker, but not the whole picture. Reputable material reports cordycepin alongside adenosine, moisture and contaminant testing from an accredited laboratory.",
  ],
  [
    "Are there people who should avoid it?",
    "Anyone pregnant or nursing, on immunosuppressants or anticoagulants, or preparing for surgery should speak with a clinician first. Fungal allergies are also a consideration.",
  ],
  [
    "When will Radhvan Origins products be available?",
    "We are still in the cultivation and verification phase. Joining the list is the only way to be notified when the first batch is released.",
  ],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-24 lg:py-36">
      <Reveal>
        <SectionHead
          eyebrow="Chapter nine"
          title={
            <>
              Questions,
              <span className="italic text-ember"> answered straight</span>
            </>
          }
          align="center"
        />
      </Reveal>

      <div className="mt-14">
        {FAQS.map(([q, a], i) => {
          const isOpen = open === i;
          return (
            <Reveal key={q} delay={i * 50}>
              <div className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={`font-display text-lg transition-colors lg:text-xl ${
                      isOpen ? "text-ember" : "text-bark"
                    }`}
                  >
                    {q}
                  </span>
                  <span
                    className={`mt-1 shrink-0 text-ember transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                      <path
                        d="M8 2v12M2 8h12"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 text-sm leading-relaxed text-muted-foreground">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------- Newsletter/Foot */

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section id="newsletter" className="border-t border-border bg-[#241708] py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <BrandLeaves className="mx-auto h-9 w-14" />
          <h2 className="mt-8 font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] text-parchment">
            Field notes from
            <span className="italic text-ember"> the growing room</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-parchment/60">
            One considered letter a month: cultivation progress, new research we found
            credible, and first access when the range opens.
          </p>

          {done ? (
            <p className="mt-10 font-display text-xl text-ember">
              You're on the list. Thank you.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.includes("@")) setDone(true);
              }}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="Email address"
                className="flex-1 rounded-full border border-parchment/20 bg-transparent px-6 py-3.5 text-sm text-parchment placeholder:text-parchment/35 focus:border-ember focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-ember px-7 py-3.5 text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
          )}
          <p className="mt-5 text-[0.68rem] tracking-wide text-parchment/35">
            No selling of data. Unsubscribe in one click.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1b1005] px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <img
            src={logo.url}
            alt=""
            width={36}
            height={36}
            loading="lazy"
            className="h-9 w-9 object-contain"
          />
          <span className="font-display text-sm text-parchment/80">
            Radhvan Origins — Welcome. Together.
          </span>
        </div>
        <p className="max-w-md text-[0.68rem] leading-relaxed text-parchment/35">
          Educational content only. Not medical advice. © {new Date().getFullYear()}{" "}
          Radhvan Origins.
        </p>
      </div>
    </footer>
  );
}
