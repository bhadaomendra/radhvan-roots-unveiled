import { ReactNode } from "react";
import { SiteNav } from "./Hero";
import { Newsletter, Footer, Compounds, Process, FAQ, ContactCTA } from "./Sections";
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
      <Newsletter />
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

function GuidePage({
  path,
  eyebrow,
  title,
  description,
  intro,
  image,
  imageAlt,
  children,
}: {
  path: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  intro?: string;
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
      image={heroImage}
      imageAlt="Botanical study of Cordyceps militaris fruiting bodies"
    >
      <FAQ />
    </GuidePage>
  );
}
