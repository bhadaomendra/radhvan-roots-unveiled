import { createFileRoute } from "@tanstack/react-router";
import { PageShell, QuoteBlock } from "@/components/site/Layout";
import { WhyRadhvan, About } from "@/components/site/Sections";

const BASE_URL = "https://radhvanorigins.com";
const TITLE = "Why Radhvan Origins | Reliable Cordyceps Cultivation & Training";
const DESC = "Discover the emotional brand statement and philosophy of Radhvan Origins. Learn. Understand. Cultivate. Grow.";

export const Route = createFileRoute("/why-radhvan/")({
  component: WhyRadhvanPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/why-radhvan` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/why-radhvan` }],
  }),
});

function WhyRadhvanPage() {
  return (
    <PageShell>
      <QuoteBlock 
        hindi="“राधवन हमारे लिए सिर्फ एक नाम नहीं, एक एहसास है—एक शुरुआत, जो दिल से हुई है। हम इस सफर पर अपनी ऐसी पहचान बनाने निकले हैं, जिस पर आने वाला कल गर्व कर सके।”"
        english="“Radhvan is not just a name for us, it is a feeling—a beginning that comes from the heart. We have set out on this journey to create an identity that the future can be proud of.”"
      />
      <About />
      <WhyRadhvan />
    </PageShell>
  );
}
