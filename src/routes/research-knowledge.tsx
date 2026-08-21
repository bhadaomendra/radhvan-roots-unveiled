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
        hindi="सीखा हुआ ज्ञान तब और बड़ा होता है, जब वह आगे बढ़ता है।"
        english="Learned knowledge grows even more when it is passed forward."
      />
      <Compounds />
      <Applications />
      <Evidence />
      <Research />
    </PageShell>
  );
}
