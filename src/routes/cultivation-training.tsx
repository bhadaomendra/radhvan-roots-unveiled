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
        hindi="प्रयोगशाला से जीवन तक: शुद्धता की खेती"
        english="From Lab to Life: Cultivating Purity"
      />
      <WhyUnique />
      <Process />
    </PageShell>
  );
}
