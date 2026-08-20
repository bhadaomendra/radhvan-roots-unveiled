import { createFileRoute } from "@tanstack/react-router";
import { PageShell, QuoteBlock } from "@/components/site/Layout";
import { WhyRadhvan } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";


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
    links: [
      { rel: "canonical", href: `${BASE_URL}/why-radhvan` },
      { rel: "prefetch", href: `${BASE_URL}/why-radhvan.html?v=${Date.now()}` }
    ],
  }),
});

function WhyRadhvanPage() {
  return (
    <PageShell>
      <QuoteBlock 
        hindi="“राधवन हमारे लिए सिर्फ एक नाम नहीं, एक एहसास है—एक शुरुआत, जो दिल से हुई है। हम इस सफर पर अपनी ऐसी पहचान बनाने निकले हैं, जिस पर आने वाला कल गर्व कर सके।”"
        english="“Radhvan is not just a name for us, it is a feeling—a beginning that comes from the heart. We have set out on this journey to create an identity that the future can be proud of.”"
      />
      
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-bark">
              Why we <span className="italic text-ember">started</span>
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>Radhvan Origins was born out of curiosity and a deep-seated desire to explore the intersection of traditional wisdom and modern science.</p>
              <p>We realized that while Cordyceps is a subject of immense interest, the information available is often either overly clinical or purely promotional. We wanted to build a bridge—a place where learning comes before scaling, and research dictates claims.</p>
            </div>
          </Reveal>
          
          <div className="space-y-12">
            <Reveal delay={100}>
              <h3 className="font-display text-2xl text-bark">What we believe</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We believe in transparency. In showing the process as it is—the challenges of cultivation, the nuance of scientific studies, and the patience required to grow a quality organism.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <h3 className="font-display text-2xl text-bark">Learning before scaling</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our approach is rooted in the philosophy of "understand first." We have spent significant time in the lab, observing growth cycles and refining environmental controls before ever thinking about commercial production.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#2E3B11] py-24 lg:py-36 text-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <Reveal>
            <p className="eyebrow text-parchment/60">Our Direction</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-parchment">
              Responsible cultivation & <span className="italic text-ember">long-term vision</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-parchment/70">
              We are not just building a lab; we are cultivating a community of informed growers and researchers. Our vision is to set a standard for quality and integrity in the world of Cordyceps militaris.
            </p>
          </Reveal>
        </div>
      </section>
      
      <WhyRadhvan />
    </PageShell>
  );
}
