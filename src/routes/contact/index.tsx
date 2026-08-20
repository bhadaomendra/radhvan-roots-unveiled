import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/Layout";
import { ContactCTA, Newsletter } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";

const BASE_URL = "https://radhvanorigins.com";
const TITLE = "Contact Us | Connect with Radhvan Origins";
const DESC = "Connect with Radhvan Origins via Email or WhatsApp. Join our newsletter for cultivation updates and research insights.";

export const Route = createFileRoute("/contact/")({
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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-10 lg:pt-48 lg:pb-36">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Connect</p>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] text-bark">
              Let's start a <span className="italic text-ember">conversation</span>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground lg:max-w-md">
              Whether you have a technical question about Cordyceps biology or are interested in professional cultivation training, we invite you to reach out.
            </p>
            
            <div className="mt-12 space-y-8">
              <div>
                <h3 className="text-xs font-bold tracking-[0.16em] text-bark uppercase">General Inquiries</h3>
                <a href="mailto:info@radhvanorigins.com" className="mt-3 block text-xl text-ember hover:underline">
                  info@radhvanorigins.com
                </a>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-[0.16em] text-bark uppercase">Direct Connect</h3>
                <a href="https://wa.me/919950091528" target="_blank" rel="noopener noreferrer" className="mt-3 block text-xl text-ember hover:underline">
                  WhatsApp Support
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-sm border border-border bg-card p-8 lg:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <h2 className="font-display text-2xl text-bark">Message Sent</h2>
                  <p className="mt-4 text-muted-foreground">Thank you for reaching out. We will connect with you soon.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-xs font-bold tracking-[0.16em] text-ember uppercase">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="mt-2 w-full border-b border-border bg-transparent py-3 text-bark focus:border-ember focus:outline-none" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="mt-2 w-full border-b border-border bg-transparent py-3 text-bark focus:border-ember focus:outline-none" 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      required 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="mt-2 w-full border-b border-border bg-transparent py-3 text-bark focus:border-ember focus:outline-none" 
                    />
                  </div>
                  <button type="submit" className="w-full rounded-full bg-bark px-8 py-4 text-xs font-bold tracking-[0.16em] text-parchment uppercase transition-transform hover:-translate-y-0.5">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
      <Newsletter />
    </PageShell>
  );
}
