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
        hindi="प्रकृति के रहस्यों को उजागर करना, एक समय में एक बीजाणु"
        english="Unveiling nature's secrets, one spore at a time"
      />
      <WhatIsCordyceps />
      <Sinensis />
    </PageShell>
  );
}
