import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/Layout";
import {
  TrainingHero,
  QuickHighlights,
  BrandPhilosophyQuote,
  WhyLearnCultivation,
  TwoDayJourney,
  UsesAndValue,
  WhoIsThisTrainingFor,
  LearnAtRadhvanJaipur,
  FromTrainingToSetup,
  GuidanceBeyondTraining,
  WhyChooseRadhvan,
  TrainingFAQAccordion,
  FinalCTASection,
} from "@/components/site/TrainingSections";

const TITLE = "Cordyceps Militaris Cultivation Training in Jaipur | Radhvan Origins";
const DESC =
  "Learn Cordyceps militaris cultivation with Radhvan Origins in Jaipur through a 2-day theory and practical training program. Enquire about upcoming batches.";

const FAQS_SCHEMA = [
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

export const Route = createFileRoute("/cultivation-training")({
  component: CultivationTrainingPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "Cordyceps militaris cultivation training, Cordyceps training Jaipur, Cordyceps cultivation course India, Cordyceps farming training, Cordyceps lab training Jaipur",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://radhvanorigins.com/cultivation-training" },
      { property: "og:image", content: "https://radhvanorigins.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: TITLE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://radhvanorigins.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://radhvanorigins.com/cultivation-training" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Course",
              "name": "Cordyceps Militaris Cultivation Training",
              "description": DESC,
              "provider": {
                "@type": "EducationalOrganization",
                "name": "Radhvan Origins",
                "url": "https://radhvanorigins.com/",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Jaipur",
                  "addressRegion": "Rajasthan",
                  "addressCountry": "India"
                }
              },
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "Offline",
                "location": "Radhvan Origins Facility & Laboratory, Jaipur"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": FAQS_SCHEMA.map((item) => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.a,
                },
              })),
            },
          ],
        }),
      },
    ],
  }),
});

function CultivationTrainingPage() {
  return (
    <PageShell>
      <TrainingHero />
      <QuickHighlights />
      <BrandPhilosophyQuote />
      <WhyLearnCultivation />
      <TwoDayJourney />
      <UsesAndValue />
      <WhoIsThisTrainingFor />
      <LearnAtRadhvanJaipur />
      <FromTrainingToSetup />
      <GuidanceBeyondTraining />
      <WhyChooseRadhvan />
      <TrainingFAQAccordion />
      <FinalCTASection />
    </PageShell>
  );
}
