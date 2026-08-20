import { createFileRoute } from "@tanstack/react-router";
import { PageShell, QuoteBlock } from "@/components/site/Layout";
import { Compounds, Evidence, Research } from "@/components/site/Sections";
import { Applications } from "@/components/site/SinensisSections";

export const Route = createFileRoute("/research-knowledge")({
  component: ResearchKnowledgePage,
});

function ResearchKnowledgePage() {
  return (
    <PageShell>
      <QuoteBlock
        hindi="विज्ञान आधारित ज्ञान, कल्याण के लिए निर्देशित"
        english="Science-backed knowledge, guided by wellness"
      />
      <Compounds />
      <Applications />
      <Evidence />
      <Research />
    </PageShell>
  );
}
