import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/Layout";
import { ContactCTA } from "@/components/site/Sections";

const TITLE = "Contact Radhvan Origins | Cordyceps Research & Cultivation";
const DESC =
  "Get in touch with Radhvan Origins for questions about Cordyceps militaris research, cultivation training, or product availability.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://radhvanorigins.com/contact" },
      { property: "og:image", content: "https://radhvanorigins.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Contact Radhvan Origins" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://radhvanorigins.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://radhvanorigins.com/contact" }],
  }),
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
