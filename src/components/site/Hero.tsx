import { useEffect, useState } from "react";
import logo from "@/assets/radhvan-new-logo.png";
import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-cordyceps.jpg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/why-radhvan", label: "Why Radhvan" },
  { to: "/cordyceps-study", label: "Cordyceps Study" },
  { to: "/cultivation-training", label: "Cultivation & Training" },
  { to: "/research-knowledge", label: "Research & Knowledge" },
  { to: "/contact", label: "Contact" },
] as const;

const GUIDES = [
  { to: "/cordyceps-study", label: "Study Cordyceps", description: "What Cordyceps actually is" },
  { to: "/cultivation-training", label: "Cultivation Process", description: "Our lab-controlled technique" },
  { to: "/research-knowledge", label: "Evidence & Compounds", description: "Bioactive properties explained" },
  { to: "/cordyceps-faq", label: "Knowledge Base (FAQ)", description: "Safety, usage, and science" },
] as const;

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
      className={`fixed inset-x-0 top-0 z-50 overflow-visible transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-background/70 backdrop-blur-[2px]"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 shrink-0 items-center">
          <img
            src={logo}
            alt="Radhvan — Rooted in values, Growing with Vision"
            width={1353}
            height={408}
            className="h-14 w-auto max-w-[190px] object-contain sm:h-16 sm:max-w-[220px] lg:h-20 lg:max-w-[250px] xl:h-24 xl:max-w-[300px]"
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-5 lg:flex xl:gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="whitespace-nowrap text-[0.72rem] font-bold tracking-[0.08em] text-muted-foreground uppercase transition-colors hover:text-ember xl:text-[0.78rem] xl:tracking-[0.1em]"
              activeProps={{ className: "text-ember" }}
            >
              {item.label}
            </Link>
          ))}

          <div className="relative shrink-0">
            <button
              onClick={() => setGuidesOpen((v) => !v)}
              aria-expanded={guidesOpen}
              className="flex items-center gap-1 whitespace-nowrap text-[0.72rem] font-bold tracking-[0.08em] text-muted-foreground uppercase transition-colors hover:text-ember xl:text-[0.78rem] xl:tracking-[0.1em]"
            >
              Resources
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={`transition-transform duration-200 ${guidesOpen ? "rotate-180" : ""}`}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
              </svg>
            </button>
            {guidesOpen && (
              <div className="absolute top-full right-0 mt-4 w-64 rounded-sm border border-border bg-background/95 p-2 shadow-xl backdrop-blur-xl">
                {GUIDES.map((g) => (
                  <Link key={g.to} to={g.to} onClick={() => setGuidesOpen(false)} className="block rounded-sm px-4 py-3 transition-colors hover:bg-accent">
                    <span className="block text-sm font-bold tracking-wide text-foreground uppercase">{g.label}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">{g.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          className="relative z-[60] flex shrink-0 items-center justify-center rounded-full border border-border bg-background p-2.5 shadow-md lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-background/98 backdrop-blur-2xl lg:hidden">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
              <img src={logo} alt="Radhvan" className="h-14 w-auto object-contain" />
            </Link>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="rounded-full border border-border bg-background p-2.5 shadow-sm">
              <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-8 sm:px-8 sm:py-10">
            <div className="flex flex-col gap-6">
              {NAV.map((item) => (
                <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="text-2xl font-display text-bark transition-colors hover:text-ember" activeProps={{ className: "text-ember" }}>
                  {item.label}
                </Link>
              ))}
              <div className="mt-8 border-t border-border pt-8">
                <p className="mb-4 text-[0.7rem] font-black tracking-[0.2em] text-ember uppercase">Resources</p>
                <div className="grid grid-cols-1 gap-4">
                  {GUIDES.map((g) => (
                    <Link key={g.to} to={g.to} onClick={() => setOpen(false)} className="text-lg font-display text-bark/70 hover:text-ember">
                      {g.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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
      <div className="absolute inset-0 bg-gradient-to-r from-parchment/95 via-parchment/70 to-parchment/10 lg:from-parchment/96 lg:via-parchment/58 lg:to-transparent" />

      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-7xl grid-cols-1 items-end gap-8 px-5 pt-28 pb-12 sm:px-6 sm:pb-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(260px,0.92fr)] lg:items-end lg:gap-10 lg:px-10 lg:pb-20">
        <div className="w-full max-w-3xl pb-2">
          <p className="eyebrow text-[color:var(--ember)]">Radhvan Origins · Cordyceps militaris</p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.7rem,6.2vw,5.25rem)] leading-[0.94] text-bark">
            Cordyceps militaris:
            <span className="block italic text-ember">a fungus that rewrote biology</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:mt-7 lg:text-lg">
            Cordyceps begins as a spore and ends as an orange spire. We study it, grow it under laboratory control, and explain it plainly — so you can decide what the evidence actually says.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 lg:mt-10">
            <Link to="/cordyceps-study" className="group inline-flex items-center gap-3 rounded-full bg-ember px-7 py-3.5 text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5">
              Begin the study
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link to="/research-knowledge" className="inline-flex items-center gap-2 border-b border-bark/30 pb-1 text-xs font-bold tracking-[0.16em] text-bark/80 uppercase transition-colors hover:border-ember hover:text-ember">
              Research highlights
            </Link>
          </div>

          <dl className="mt-12 grid max-w-4xl grid-cols-2 gap-x-5 gap-y-7 border-t border-bark/15 pt-6 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-6 lg:mt-14 lg:grid-cols-4 lg:gap-x-8 lg:pt-7">
            {[
              ["~750", "described Cordyceps species"],
              ["3,000 m", "traditional highland habitat"],
              ["1841", "genus first formally named"],
              ["100%", "lab-cultivated, no wild harvest"],
            ].map(([value, label]) => (
              <div key={label} className="min-w-0">
                <dt className="font-display text-2xl text-ember lg:text-3xl">{value}</dt>
                <dd className="mt-1 max-w-[10rem] text-[0.68rem] leading-snug tracking-wide text-muted-foreground uppercase">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div aria-hidden="true" className="hidden lg:block min-h-[32vh]" />
      </div>
    </section>
  );
}
