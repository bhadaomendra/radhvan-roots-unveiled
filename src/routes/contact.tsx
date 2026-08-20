import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/Layout";
import { ContactCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <div className="py-20 lg:py-28">
        <ContactCTA />
      </div>
    </PageShell>
  );
}
