import { createFileRoute } from "@tanstack/react-router";
import { PageShell, QuoteBlock } from "@/components/site/Layout";
import { Process, WhyUnique } from "@/components/site/Sections";

export const Route = createFileRoute("/cultivation-training")({
  component: CultivationTrainingPage,
});

function CultivationTrainingPage() {
  return (
    <PageShell>
      <QuoteBlock
        hindi="उगाना सिर्फ एक प्रक्रिया नहीं, धैर्य और समझ का अभ्यास है।"
        english="Cultivation is not just a process, it is a practice of patience and understanding."
      />
      <WhyUnique />
      <Process />
    </PageShell>
  );
}
