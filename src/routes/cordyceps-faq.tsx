import { createFileRoute } from "@tanstack/react-router";
import { CordycepsFAQPage } from "@/components/site/GuidePages";

const BASE_URL = "https://radhvanorigins.com";
const TITLE = "Cordyceps FAQ: common questions answered — Radhvan Origins";
const DESC =
  "Honest answers about Cordyceps militaris, Cordyceps sinensis, cordycepin, quality markers, safety, cultivation and when Radhvan Origins products will be available.";

export const Route = createFileRoute("/cordyceps-faq")({
  component: CordycepsFAQPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${BASE_URL}/cordyceps-faq` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/cordyceps-faq` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is Cordyceps militaris the same as the wild caterpillar fungus?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The wild Himalayan species is Ophiocordyceps sinensis. C. militaris is a related species that can be grown on plant substrate and produces a true fruiting body.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Cordyceps really grow on insects?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In nature, yes. Cultivated C. militaris for nutritional use is grown on sterile plant-based media, with no insect material involved.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What does fruiting body mean and why does it matter?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The fruiting body is the visible orange structure, distinct from the mycelium. Products made from mycelium grown on grain have a different composition.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is cordycepin content a reliable quality signal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It is the most useful single marker, but not the whole picture. Reputable material reports cordycepin alongside adenosine, moisture and contaminant testing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are there people who should avoid Cordyceps?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Anyone pregnant or nursing, on immunosuppressants or anticoagulants, or preparing for surgery should speak with a clinician first. Fungal allergies are also a consideration.",
                  },
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Cordyceps FAQ", item: `${BASE_URL}/cordyceps-faq` }
              ]
            }
          ]
        }),
      },
    ],
  }),
});
