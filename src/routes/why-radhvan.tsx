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
        hindi="राधवन हमारे लिए सिर्फ एक नाम नहीं, एक एहसास है—एक शुरुआत, जो दिल से हुई है। हम इस सफर पर अपनी ऐसी पहचान बनाने निकले हैं, जिस पर आने वाला कल गर्व कर सके।"
        english="Radhvan is not just a name for us, it is a feeling—a beginning that started from the heart. We have set out to create an identity on this journey that the future can be proud of."
      />
      <WhyRadhvan />
    </PageShell>
  );
}
