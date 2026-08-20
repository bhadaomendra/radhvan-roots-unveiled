import { useEffect, useState } from "react";
import logo from "@/assets/radhvan-new-logo.png";
import heroImage from "@/assets/hero-cordyceps.jpg";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/why-radhvan", label: "Why Radhvan" },
  { href: "/cordyceps-study", label: "Cordyceps Study" },
  { href: "/cultivation-training", label: "Cultivation & Training" },
  { href: "/research-knowledge", label: "Research & Knowledge" },
  { href: "/contact", label: "Contact" },
];

const GUIDES = [
  {
    href: "/cordyceps-study",
    label: "Study Cordyceps",
    description: "What Cordyceps actually is",
  },
  {
    href: "/cultivation-training",
    label: "Cultivation Process",
    description: "Our lab-controlled technique",
  },
  {
    href: "/research-knowledge",
    label: "Evidence & Compounds",
    description: "Bioactive properties explained",
  },
  {
    href: "/cordyceps-faq",
    label: "Knowledge Base (FAQ)",
    description: "Safety, usage, and science",
  },
];

export function SiteNav({ variant = "home" }: { variant?: "home" | "page" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 lg:px-10">
        <a
          href="/"
          className="flex min-w-0 items-center"
        >
          <img
            src={logo}
            alt="Radhvan — Rooted in values, Growing with Vision"
            width={1353}
            height={408}
            className="h-16 w-auto object-contain sm:h-20 lg:h-24"
          />
        </a>

        <nav className="hidden items-center gap-4 xl:gap-7 lg:flex">
            NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.8rem] font-bold tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-ember"
              >
                {item.label}
              </a>
            ))

          <div className="relative">
            <button
              onClick={() => setGuidesOpen((v) => !v)}
              aria-expanded={guidesOpen}
              className="flex items-center gap-1 text-[0.8rem] font-bold tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-ember"
            >
              Resources
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                aria-hidden="true"
                className={`transition-transform duration-200 ${
                  guidesOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </button>
            {guidesOpen && (
              <div className="absolute top-full right-0 mt-4 w-64 rounded-sm border border-border bg-background/95 p-2 shadow-xl backdrop-blur-xl">
                {GUIDES.map((g) => (
                  <a
                    key={g.href}
                    href={g.href}
                    onClick={() => setGuidesOpen(false)}
                    className="block rounded-sm px-4 py-3 transition-colors hover:bg-accent"
                  >
                    <span className="block text-sm font-bold tracking-wide text-foreground uppercase">
                      {g.label}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                      {g.description}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="/contact#newsletter"
            className="shrink-0 whitespace-nowrap rounded-full bg-forest px-4 py-2.5 text-[0.75rem] font-bold tracking-[0.1em] text-accent-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 sm:px-6 sm:py-3 sm:text-[0.8rem] sm:tracking-[0.12em]"
          >
            Join the list
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="shrink-0 rounded-full border border-border p-2.5 lg:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path
                d={open ? "M3 3l10 10M13 3L3 13" : "M2 4h12M2 8h12M2 12h12"}
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-[0.8rem] font-bold tracking-[0.1em] text-muted-foreground uppercase"
              >
                {item.label}
              </a>
            ))

            <div className="border-b border-border/60 py-4">
              <p className="text-[0.7rem] font-black tracking-[0.2em] text-ember uppercase">
                Resources
              </p>
              <div className="mt-4 flex flex-col gap-4">
                {GUIDES.map((g) => (
                  <a
                    key={g.href}
                    href={g.href}
                    onClick={() => setOpen(false)}
                    className="text-[0.8rem] font-bold tracking-[0.1em] text-muted-foreground transition-colors hover:text-ember uppercase"
                  >
                    {g.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/contact#newsletter"
              onClick={() => setOpen(false)}
              className="py-4 text-[0.8rem] font-bold tracking-[0.1em] text-muted-foreground uppercase"
            >
              Join the list
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-parchment">
      <img
        src={heroImage}
        alt="Botanical study of Cordyceps militaris fruiting bodies"
        width={1600}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ transform: `translate3d(0, ${offset * 0.18}px, 0) scale(1.08)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-parchment/55 via-parchment/25 to-parchment" />
      <div className="absolute inset-0 bg-gradient-to-r from-parchment/92 via-parchment/45 to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pt-32 pb-16 lg:px-10 lg:pb-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-[color:var(--ember)]">
            Radhvan Origins · Cordyceps militaris
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.25rem)] leading-[0.95] text-bark">
            Cordyceps militaris:
            <span className="block italic text-ember">a fungus that rewrote biology</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Cordyceps begins as a spore and ends as an orange spire. We study it, grow
            it under laboratory control, and explain it plainly — so you can decide
            what the evidence actually says.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/cordyceps-study"
              className="group inline-flex items-center gap-3 rounded-full bg-ember px-7 py-3.5 text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
            >
              Begin the study
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/research-knowledge"
              className="inline-flex items-center gap-2 border-b border-bark/30 pb-1 text-xs font-bold tracking-[0.16em] text-bark/80 uppercase transition-colors hover:border-ember hover:text-ember"
            >
              Research highlights
            </a>
          </div>
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 border-t border-bark/15 pt-8 sm:grid-cols-4">
          {[
            ["~750", "described Cordyceps species"],
            ["3,000 m", "traditional highland habitat"],
            ["1841", "genus first formally named"],
            ["100%", "lab-cultivated, no wild harvest"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="font-display text-2xl text-ember lg:text-3xl">{value}</dt>
              <dd className="mt-1 text-[0.72rem] leading-snug tracking-wide text-muted-foreground uppercase">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
