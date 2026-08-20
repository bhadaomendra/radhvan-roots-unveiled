import { createFileRoute } from "@tanstack/react-router";
import { PageShell, QuoteBlock } from "@/components/site/Layout";
import { WhyRadhvan } from "@/components/site/Sections";

export const Route = createFileRoute("/why-radhvan")({
  component: WhyRadhvanPage,
});

function WhyRadhvanPage() {
  return (
    <PageShell>
      <QuoteBlock
        hindi="मूल्यों में निहित, दृष्टि के साथ बढ़ रहा है"
        english="Rooted in values, Growing with Vision"
      />
      <WhyRadhvan />
    </PageShell>
  );
}
