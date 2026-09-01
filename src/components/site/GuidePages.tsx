import { ReactNode } from "react";
import { SiteNav } from "./Hero";
import { Footer, Compounds, Process, FAQ, ContactCTA } from "./Sections";
import { Link } from "@tanstack/react-router";
import { Sinensis, Applications } from "./SinensisSections";

import heroImage from "@/assets/hero-cordyceps.jpg";
import sinensisComparison from "@/assets/sinensis-vs-militaris.jpg";
import anatomyImage from "@/assets/anatomy-plate.jpg";
import labImage from "@/assets/cultivation-room.jpg";

const GUIDES = [
  {
    to: "/cordyceps-vs-sinensis",
    label: "vs Sinensis",
    description: "Wild vs cultivated species",
  },
  {
    to: "/cordycepin",
    label: "Cordycepin",
    description: "The nucleoside behind the research",
  },
  {
    to: "/cordyceps-health-benefits",
    label: "Health benefits",
    description: "What the studies actually say",
  },
  {
    to: "/cordyceps-cultivation",
    label: "Cultivation",
    description: "Lab-grown, not wild-harvested",
  },
  {
    to: "/cordyceps-faq",
    label: "FAQ",
    description: "Common questions answered",
  },
] as const;

function PageShell({
  children,
  variant = "page",
}: {
  children: ReactNode;
  variant?: "home" | "page";
}) {
  return (
    <div className="bg-background">
      <SiteNav variant={variant} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function GuideHero({
  eyebrow,
  title,
  description,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-parchment">
      {image && (
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-parchment/80 via-parchment/60 to-parchment" />
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <p className="eyebrow text-ember">{eyebrow}</p>
        <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95] text-bark">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
          {description}
        </p>
        {intro && (
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

function RelatedGuides({ current }: { current: string }) {
  const items = GUIDES.filter((g) => g.to !== current);
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="border-t border-border pt-14">
        <p className="eyebrow text-ember">Keep reading</p>
        <h2 className="mt-5 font-display text-2xl text-bark">Related guides</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((g) => (
            <Link
              key={g.to}
              to={g.to}
              className="group rounded-sm border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="font-display text-lg text-bark group-hover:text-ember">
                {g.label}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{g.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function DirectAnswerCallout({ text }: { text: string }) {
  return (
    <div className="direct-answer-summary mx-auto max-w-7xl px-6 pt-8 lg:px-10">
      <div className="rounded-sm border border-ember/30 bg-card p-6 shadow-sm lg:p-8">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-ember"></span>
          <p className="text-[0.68rem] font-bold tracking-[0.2em] text-ember uppercase">
            Quick Answer / Summary
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-bark/90 lg:text-base font-medium">
          {text}
        </p>
      </div>
    </div>
  );
}

function GuidePage({
  path,
  eyebrow,
  title,
  description,
  intro,
  directAnswer,
  image,
  imageAlt,
  children,
}: {
  path: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  intro?: string;
  directAnswer?: string;
  image?: string;
  imageAlt?: string;
  children: ReactNode;
}) {
  return (
    <PageShell variant="page">
      <GuideHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        intro={intro}
        image={image}
        imageAlt={imageAlt}
      />
      {directAnswer && <DirectAnswerCallout text={directAnswer} />}
      {children}
      <RelatedGuides current={path} />
    </PageShell>
  );
}

export function CordycepsVsSinensisPage() {
  return (
    <GuidePage
      path="/cordyceps-vs-sinensis"
      eyebrow="Field guide"
      title={
        <>
          Cordyceps militaris vs{" "}
          <span className="italic text-ember">Cordyceps sinensis</span>
        </>
      }
      description="Wild yarsagumba and lab-grown Cordyceps militaris share a genus, but not the same chemistry, sourcing or ecological impact."
      intro="Both are called Cordyceps, yet their species differ in origin, cordycepin content, and how they reach the market. This guide explains why we cultivate C. militaris."
      directAnswer="Cordyceps militaris and wild Cordyceps sinensis (yarsagumba) belong to the same genus but differ in origin, chemistry, and sustainability. C. militaris is cultivated in sterile lab conditions on plant-based substrates, yielding higher, standardized levels of cordycepin without harming high-altitude wild ecosystems."
      image={sinensisComparison}
      imageAlt="Comparison plate showing orange Cordyceps militaris beside dried wild Cordyceps sinensis"
    >
      <Sinensis />
    </GuidePage>
  );
}

export function CordycepinPage() {
  return (
    <GuidePage
      path="/cordycepin"
      eyebrow="Molecule"
      title={
        <>
          Cordycepin: the nucleoside behind{" "}
          <span className="italic text-ember">Cordyceps</span>
        </>
      }
      description="Cordycepin (3′-deoxyadenosine) is the most studied compound in Cordyceps militaris. Learn why it is used as a quality marker and where research is heading."
      intro="Structurally close to adenosine, cordycepin appears in cell-growth, mood, circulation, skin and joint studies. Its content is measured, not assumed."
      directAnswer="Cordycepin (3′-deoxyadenosine) is a natural purine nucleoside analogue found in high concentrations in Cordyceps militaris. It serves as the primary scientific quality marker because of its active role in cellular growth regulation, inflammation, and metabolic research, quantified via HPLC testing."
      image={anatomyImage}
      imageAlt="Botanical anatomy plate of Cordyceps militaris showing stroma, ascus and spore detail"
    >
      <Compounds />
    </GuidePage>
  );
}

export function CordycepsHealthBenefitsPage() {
  return (
    <GuidePage
      path="/cordyceps-health-benefits"
      eyebrow="Research directions"
      title={
        <>
          Cordyceps health benefits:{" "}
          <span className="italic text-ember">what the research says</span>
        </>
      }
      description="A plain-language overview of Cordyceps research: cancer cell studies, mood and stress, blood pressure, skin health, and joint comfort."
      intro="Cordyceps is a food-grade fungus, not a medicine. The evidence is mostly preclinical or early human. Always consult a doctor before use."
      directAnswer="Scientific interest in Cordyceps militaris centers on cordycepin and adenosine nucleosides. Preclinical and early clinical research investigates applications in cellular health, circulation, mood resilience, and topical antioxidant protection. Cordyceps is a food-grade fungus, and material quality depends on laboratory compound verification."
      image={heroImage}
      imageAlt="Botanical study of Cordyceps militaris fruiting bodies"
    >
      <Applications />
    </GuidePage>
  );
}

export function CordycepsCultivationPage() {
  return (
    <GuidePage
      path="/cordyceps-cultivation"
      eyebrow="Process"
      title={
        <>
          How Cordyceps militaris is{" "}
          <span className="italic text-ember">cultivated in a lab</span>
        </>
      }
      description="From verified strain to dried fruiting body: six controlled stages that make Cordyceps militaris reproducible, traceable and wild-harvest-free."
      intro="Lab cultivation replaces alpine harvesting with sterile substrate, controlled light, and verified drying. No insects, no fragile ecosystems."
      directAnswer="Cordyceps militaris lab cultivation involves six sterile stages: parent strain culture, liquid spawn propagation, substrate formulation (organic grains), sterile inoculation under laminar airflow, dark incubational colonization, and photo-induced fruiting under regulated light, temperature, and humidity."
      image={labImage}
      imageAlt="Radhvan Origins cultivation room with Cordyceps militaris jars under controlled light"
    >
      <Process />
    </GuidePage>
  );
}

export function CordycepsFAQPage() {
  return (
    <GuidePage
      path="/cordyceps-faq"
      eyebrow="Questions"
      title={
        <>
          Cordyceps FAQ:{" "}
          <span className="italic text-ember">common questions answered</span>
        </>
      }
      description="Answers to frequently asked questions about Cordyceps militaris, cordycepin, Cordyceps sinensis, safety, cultivation and product availability."
      intro="Quick, honest answers about species, fruiting bodies, quality markers, who should avoid it, and when Radhvan Origins products will be available."
      directAnswer="Cordyceps militaris is a lab-cultivated functional fungus grown on sterile plant-based media. It produces a true fruiting body rich in cordycepin and adenosine. It differs from wild caterpillar-dependent Cordyceps sinensis and requires no wild insect material."
      image={heroImage}
      imageAlt="Botanical study of Cordyceps militaris fruiting bodies"
    >
      <FAQ />
    </GuidePage>
  );
}
