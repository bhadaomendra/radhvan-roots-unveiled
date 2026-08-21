import { createFileRoute } from "@tanstack/react-router";
import { PageShell, QuoteBlock } from "@/components/site/Layout";
import { WhatIsCordyceps } from "@/components/site/Sections";
import { Sinensis } from "@/components/site/SinensisSections";

export const Route = createFileRoute("/cordyceps-study")({
  component: CordycepsStudyPage,
});

function CordycepsStudyPage() {
  return (
    <PageShell>
      <QuoteBlock
        hindi="प्रकृति को समझना, उसकी गहराई को जानने की पहली सीढ़ी है।"
        english="Understanding nature is the first step to knowing its depth."
      />
      <WhatIsCordyceps />
      <Sinensis />
    </PageShell>
  );
}
