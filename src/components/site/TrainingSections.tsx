import { useState } from "react";
import { Reveal } from "./Reveal";
import lab from "@/assets/cultivation-room.jpg";

/* ------------------------------------------------------------- 1. HERO */

export function TrainingHero() {
  return (
    <section className="relative overflow-hidden bg-parchment py-24 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-parchment/80 via-parchment/60 to-parchment" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-ember">Practical & Theoretical Training</p>
          <h1 className="mt-6 font-display text-[clamp(2.3rem,5.5vw,4.5rem)] leading-[0.98] text-bark">
            Cordyceps Militaris Cultivation Training
          </h1>
          <p className="mt-4 font-display text-xl text-ember italic lg:text-2xl">
            Learn the Science. Understand the Process. Build Practical Confidence.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Radhvan Origins offers a structured 2-day Cordyceps militaris cultivation training program designed for individuals who want to understand the science and practical aspects of controlled Cordyceps cultivation.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground lg:text-base">
            The program combines one day of theoretical learning with one full day of practical training at our own facility and laboratory in Jaipur.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#inquire"
              className="inline-block rounded-full bg-ember px-8 py-4 text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Enquire About Training
            </a>
            <a
              href="#journey"
              className="inline-block rounded-full border border-bark/20 px-7 py-4 text-xs font-bold tracking-[0.16em] text-bark uppercase transition-colors duration-300 hover:border-ember hover:text-ember"
            >
              Explore 2-Day Journey
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------ 2. QUICK HIGHLIGHTS */

export function QuickHighlights() {
  const highlights = [
    { value: "2 Days", label: "Theory + Practical" },
    { value: "Jaipur", label: "Radhvan Facility & Lab" },
    { value: "10–12", label: "Participants per Batch" },
    { value: "Certificate", label: "Issued by Radhvan Origins" },
    { value: "Mainly Offline", label: "Online in Special Cases" },
  ];

  return (
    <section className="border-y border-border bg-card py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {highlights.map((h, i) => (
            <Reveal key={h.value} delay={i * 50}>
              <div className="rounded-sm border border-border/80 bg-background/50 p-6 text-center">
                <p className="font-display text-2xl text-ember font-semibold">{h.value}</p>
                <p className="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {h.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------- 3. BRAND PHILOSOPHY */

export function BrandPhilosophyQuote() {
  return (
    <section className="bg-[#241708] py-20 lg:py-28 text-parchment">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <div className="mx-auto h-12 w-px bg-ember/40 mb-8" />
          <p className="font-display text-2xl leading-snug sm:text-3xl text-parchment/90 font-light">
            “उगाना सिर्फ एक प्रक्रिया नहीं, धैर्य और समझ का अभ्यास है।”
          </p>
          <p className="mt-6 text-sm font-sans italic tracking-wide text-ember lg:text-base">
            “Cultivation is not just a process, it is a practice of patience and understanding.”
          </p>
          <div className="mx-auto h-12 w-px bg-ember/40 mt-8" />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------- 4. WHY LEARN CULTIVATION */

export function WhyLearnCultivation() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <p className="eyebrow text-ember">Foundational Understanding</p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight text-bark">
              Why Learn Cordyceps Cultivation?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Cordyceps militaris is a specialised medicinal mushroom that requires a controlled and carefully managed cultivation environment.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Successful cultivation is not simply about following a recipe. Our training focuses on helping participants understand interconnected cultivation stages rather than treating cultivation as a set of isolated steps.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-sm border border-border bg-card p-8 shadow-sm">
            <h3 className="font-display text-lg text-bark border-b border-border pb-4">
              A Holistic Understanding
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Cordyceps cultivation requires understanding the cultivation process, the different stages involved and how they work together.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Participants gain clarity on how each phase contributes to overall cultivation success.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------- 5. SOLE 2-DAY TRAINING SECTION */

export function TwoDayJourney() {
  const day1Points = [
    "Understanding Mushrooms",
    "Introduction to Cordyceps Militaris",
    "Cultivation Overview",
    "Uses & Applications",
    "Value & Cultivation Potential",
    "Understanding the Cultivation Journey",
    "Who Can Explore Cordyceps Cultivation",
  ];

  const day2Points = [
    "Understanding the Practical Cultivation Process",
    "Observing the Cultivation Environment",
    "Understanding Growth & Development",
    "Practical Exposure to Cultivation",
    "Harvest & Post-Harvest Understanding",
    "Questions, Discussion & Practical Guidance",
  ];

  return (
    <section id="journey" className="border-t border-border bg-parchment/40 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow text-ember">Curriculum Overview</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] text-bark">
              2-Day Cordyceps Cultivation Training
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              A clean, structured learning progression combining theory and practical exposure.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* DAY 1 */}
          <Reveal delay={100}>
            <div className="h-full rounded-sm border border-border bg-card p-8 shadow-sm flex flex-col justify-between lg:p-10">
              <div>
                <div className="inline-block rounded-full bg-ember/10 px-4 py-1.5 text-xs font-bold tracking-wider text-ember uppercase">
                  Day 01
                </div>
                <h3 className="mt-6 font-display text-2xl text-bark">
                  Understanding & Theory
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Building a strong foundational understanding of Cordyceps militaris and its cultivation principles.
                </p>
                <div className="mt-6 border-t border-border pt-5">
                  <ul className="space-y-2.5">
                    {day1Points.map((pt) => (
                      <li key={pt} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-ember shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 rounded-sm bg-ember/5 p-4 border-l-2 border-ember">
                <p className="text-xs font-medium text-bark italic">
                  “Understand why each stage matters — not simply what to do.”
                </p>
              </div>
            </div>
          </Reveal>

          {/* DAY 2 */}
          <Reveal delay={200}>
            <div className="h-full rounded-sm border border-border bg-card p-8 shadow-sm flex flex-col justify-between lg:p-10">
              <div>
                <div className="inline-block rounded-full bg-bark/10 px-4 py-1.5 text-xs font-bold tracking-wider text-bark uppercase">
                  Day 02
                </div>
                <h3 className="mt-6 font-display text-2xl text-bark">
                  Practical Learning
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Practical exposure to the cultivation process at the Radhvan Origins facility and laboratory in Jaipur.
                </p>
                <div className="mt-6 border-t border-border pt-5">
                  <ul className="space-y-2.5">
                    {day2Points.map((pt) => (
                      <li key={pt} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-bark/60 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 rounded-sm bg-parchment p-4 border-l-2 border-bark/40">
                <p className="text-xs text-muted-foreground">
                  Practical activities are conducted according to the training program and available batch schedule.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------- 6. USES & VALUE */

export function UsesAndValue() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="rounded-sm border border-border bg-card p-8 lg:p-14 shadow-sm">
        <Reveal>
          <p className="eyebrow text-ember">Educational Overview</p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bark">
            Uses, Applications & Cultivation Value
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Cordyceps militaris is a medicinal mushroom cultivated under controlled indoor conditions.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={60}>
            <div className="rounded-sm border border-border/80 bg-background/50 p-6">
              <h3 className="font-display text-lg text-bark">What Is Cordyceps Militaris?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                It is a species of medicinal mushroom that can be grown in clean, controlled cultivation facilities.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-sm border border-border/80 bg-background/50 p-6">
              <h3 className="font-display text-lg text-bark">Applications & Uses</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                It is widely explored across functional wellness, dietary supplements, and lifestyle product development.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="rounded-sm border border-border/80 bg-background/50 p-6 sm:col-span-2 lg:col-span-1">
              <h3 className="font-display text-lg text-bark">Why Explore Its Cultivation?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Learning controlled cultivation provides practical insight into Cordyceps cultivation.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------ 7. WHO IS THIS TRAINING FOR */

export function WhoIsThisTrainingFor() {
  const audiences = [
    { title: "Beginners", desc: "Start with the fundamentals." },
    { title: "Farmers", desc: "Explore Cordyceps cultivation." },
    { title: "Entrepreneurs", desc: "Understand the cultivation opportunity." },
    { title: "Students & Life-Science Learners", desc: "Gain practical exposure." },
    { title: "Existing Cultivators", desc: "Expand your understanding." },
    { title: "Professionals", desc: "Explore a new cultivation field." },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <Reveal>
        <p className="eyebrow text-ember">Participant Profile</p>
        <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,3rem)] text-bark">
          Who Is This Training For?
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map((a, i) => (
          <Reveal key={a.title} delay={i * 50}>
            <div className="rounded-sm border border-border bg-card p-6 shadow-xs">
              <h3 className="font-display text-lg text-bark">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------- 8. LEARN AT RADHVAN JAIPUR */

export function LearnAtRadhvanJaipur() {
  return (
    <section className="border-t border-border bg-parchment/30 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <figure className="overflow-hidden rounded-sm border border-border shadow-md">
              <img
                src={lab}
                alt="Radhvan Origins cultivation facility and laboratory in Jaipur"
                className="w-full object-cover"
              />
            </figure>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow text-ember">Real Controlled Environment</p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight text-bark">
              Learn at Radhvan Origins, <span style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>J</span>aipur
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              The training is conducted at the Radhvan Origins facility and laboratory in Jaipur, allowing participants to connect theoretical concepts with a real controlled cultivation environment.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Rather than learning the cultivation process only through written material, participants can observe how cultivation principles are applied within an actual working environment.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------ 9. FROM TRAINING TO SETUP */

export function FromTrainingToSetup() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="rounded-sm border border-border bg-card p-8 lg:p-14 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-ember">Facility Planning</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bark">
              From Training to Your Own Cultivation Setup
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Understanding cultivation is an important first step toward establishing your own controlled cultivation setup.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Radhvan Origins can also provide guidance related to setting up a Cordyceps cultivation facility, helping participants understand the considerations involved in developing a suitable cultivation environment.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Where required, further discussions can be arranged to understand the requirements of a participant's proposed location. Specific setup requirements and assistance can be discussed based on the individual project. A site visit can be discussed where appropriate and mutually agreed.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-sm bg-parchment p-8 text-center border border-border/70">
              <h3 className="font-display text-lg text-bark">Planning Your Setup?</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Discuss your location & cultivation project requirements with our team.
              </p>
              <a
                href="#inquire"
                className="mt-6 inline-block rounded-full bg-bark px-6 py-3 text-xs font-bold tracking-wider text-parchment uppercase transition-transform hover:-translate-y-0.5"
              >
                Discuss Your Cultivation Setup
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------ 10. GUIDANCE BEYOND TRAINING */

export function GuidanceBeyondTraining() {
  return (
    <section className="border-t border-border bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow text-ember">Post-Training Guidance</p>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,2.8rem)] text-bark">
            Guidance Beyond the Training
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Participants can contact the Radhvan Origins team for guidance and discussion after training, including questions related to their cultivation plans.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
            Where a participant is planning cultivation at their own location, requirements can also be discussed remotely or through a site visit, where appropriate and mutually agreed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------- 11. WHY CHOOSE RADHVAN */

export function WhyChooseRadhvan() {
  const pillars = [
    {
      title: "Two-Day Structured Program",
      desc: "One day dedicated to theory and one day focused on practical learning.",
    },
    {
      title: "Learn at an Actual Facility",
      desc: "Training takes place at the Radhvan Origins facility and laboratory in Jaipur.",
    },
    {
      title: "Science + Practical Understanding",
      desc: "The program connects cultivation principles with practical application.",
    },
    {
      title: "Complete Cultivation Perspective",
      desc: "Participants learn about the major stages of the cultivation cycle.",
    },
    {
      title: "Guidance for Your Own Setup",
      desc: "Participants can discuss their own cultivation requirements and proposed setup with the Radhvan team.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <Reveal>
        <p className="eyebrow text-ember">The Radhvan Advantage</p>
        <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,3rem)] text-bark">
          Why Choose Radhvan Origins?
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <div className="h-full rounded-sm border border-border bg-card p-8 shadow-xs">
              <span className="font-mono text-xs text-ember font-bold">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg text-bark">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------- 12. FAQ ACCORDION */

export function TrainingFAQAccordion() {
  const faqs = [
    {
      q: "1. I am completely new to Cordyceps. Where should I begin?",
      a: "The training starts with the fundamentals of Cordyceps militaris cultivation, so participants can first understand the cultivation framework before moving into the practical session.",
    },
    {
      q: "2. What makes the two days different from each other?",
      a: "The program is intentionally divided into two parts. Day 1 focuses on theory and cultivation understanding, while Day 2 focuses on practical learning at the Radhvan Origins facility and laboratory.",
    },
    {
      q: "3. Will I learn the complete Cordyceps cultivation process?",
      a: "Yes. The training provides an overall understanding of the major stages involved in Cordyceps cultivation, from the beginning of the cultivation process through harvesting and post-harvest understanding.",
    },
    {
      q: "4. Where is the practical training conducted?",
      a: "The training is conducted at the Radhvan Origins facility and laboratory in Jaipur.",
    },
    {
      q: "5. Can someone from outside Jaipur attend the training?",
      a: "Yes. The regular training format is primarily offline in Jaipur. Participants travelling from other locations can attend scheduled training batches at the Radhvan Origins facility.",
    },
    {
      q: "6. Is online training available?",
      a: "The program is primarily conducted offline. Online training may be considered in special cases depending on the circumstances and training requirements.",
    },
    {
      q: "7. Will I receive a certificate?",
      a: "Yes. Participants who complete the training receive a certificate issued by Radhvan Origins.",
    },
    {
      q: "8. How many participants are there in one batch?",
      a: "A typical training batch consists of approximately 10–12 participants.",
    },
    {
      q: "9. Can Radhvan help me plan my own Cordyceps cultivation setup?",
      a: "Yes. Radhvan Origins can discuss the requirements for establishing a cultivation setup based on the participant's individual project. Where appropriate, requirements for the participant's proposed location can also be discussed through calls, online discussions or a site visit.",
    },
    {
      q: "10. Is guidance available after completing the training?",
      a: "Yes. Participants can connect with the Radhvan team for guidance and discussion related to their cultivation plans. The nature of support can depend on the participant's specific requirements.",
    },
    {
      q: "11. Do I need to decide on my own cultivation setup before joining?",
      a: "No. You can first attend the training to understand the cultivation process and then discuss your own setup requirements with the Radhvan team.",
    },
    {
      q: "12. How much does the training cost?",
      a: "Training fees can vary based on the current program and batch. Contact Radhvan Origins for the current training fee and upcoming batch details.",
    },
    {
      q: "13. How can I register for the next training?",
      a: "Contact the Radhvan Origins team to check the upcoming batch, availability, training fee and registration process.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-4xl px-6 py-24 lg:px-10 lg:py-36">
      <Reveal>
        <div className="text-center">
          <p className="eyebrow text-ember">Questions Answered</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3rem)] text-bark">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Common questions about the Radhvan Origins Cordyceps cultivation training program.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <Reveal key={faq.q} delay={idx * 30}>
              <div className="rounded-sm border border-border bg-card transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-medium text-bark pr-4">
                    {faq.q}
                  </span>
                  <span className="text-ember font-mono text-lg shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-muted-foreground border-t border-border/40 mt-2 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={200}>
        <div className="mt-12 text-center">
          <a
            href="#inquire"
            className="inline-block rounded-full bg-bark px-8 py-3.5 text-xs font-bold tracking-wider text-parchment uppercase transition-transform hover:-translate-y-0.5"
          >
            Enquire About Training
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------- 13. FINAL CTA SECTION */

export function FinalCTASection() {
  return (
    <section id="inquire" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
      <Reveal>
        <div className="rounded-sm border border-border bg-card p-10 text-center lg:p-20 shadow-sm">
          <p className="eyebrow text-ember">Get Started Today</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.8rem)] text-bark">
            Start Your Cordyceps Cultivation <span style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>J</span>ourney
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Whether you are exploring Cordyceps cultivation for the first time, evaluating a cultivation opportunity, or planning your own controlled cultivation setup, the Radhvan Origins training program provides a structured introduction to the science and practical aspects of cultivation.
          </p>
          <p className="mt-6 font-display text-xl text-ember italic font-medium">
            Two days. One complete learning journey.
          </p>
          <p className="mt-2 text-sm text-bark/80 font-medium tracking-wide">
            Learn the science. Understand the process. Experience practical cultivation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <a
              href="mailto:info@radhvanorigins.com?subject=Inquiry%20for%20Cordyceps%20Cultivation%20Training"
              className="group flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-bark uppercase transition-colors hover:text-ember"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ember">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Email: info@radhvanorigins.com
            </a>
            <a
              href="https://wa.me/919950091528?text=Hello%20Radhvan%20Origins%2C%20I%20am%20interested%20in%20the%20Cordyceps%20Cultivation%20Training%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-bark uppercase transition-colors hover:text-ember"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ember">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M9.5 13c.5 1.5 2 2.5 4 2.5s3.5-1 4-2.5" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
