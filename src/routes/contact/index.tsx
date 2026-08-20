import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/Layout";
import { ContactCTA, Newsletter } from "@/components/site/Sections";
import lab from "@/assets/cultivation-room.jpg";

const BASE_URL = "https://radhvanorigins.com";
const TITLE = "Contact Us | Connect with Radhvan Origins";
const DESC = "Connect with Radhvan Origins via Email or WhatsApp. Join our newsletter for cultivation updates and research insights.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/contact` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/contact` }],
  }),
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={<>Connect with <span className="italic text-ember">Radhvan Origins</span></>}
        description="Have questions about cultivation training or research? Reach out to us directly or join our community list."
        image={lab}
        imageAlt="Contact Radhvan"
      />
      <ContactCTA />
      <Newsletter />
    </PageShell>
  );
}
