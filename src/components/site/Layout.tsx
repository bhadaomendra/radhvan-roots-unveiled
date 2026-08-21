import { ReactNode, useState } from "react";
import { Reveal } from "./Reveal";
import { SiteNav } from "./Hero";
import { Link } from "@tanstack/react-router";
import { Newsletter, Footer } from "./Sections";
import { BrandLeaves } from "./icons";

/* ----------------------------------------------------------- Page shell */

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background">
      <SiteNav variant="page" />
      <main>{children}</main>
      <Newsletter />
      <Footer />
    </div>
  );
}

/* ---------------------------------------------------------- Breadcrumbs */

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pt-28 lg:px-10 lg:pt-32">
      <ol className="flex flex-wrap items-center gap-2 text-[0.68rem] font-bold tracking-[0.14em] text-muted-foreground uppercase">
        <li>
          <Link to="/" className="transition-colors hover:text-ember">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-border">
              /
            </span>
            {item.to && i < items.length - 1 ? (
              <Link to={item.to} className="transition-colors hover:text-ember">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ember">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------- Page hero */

export function PageHero({
  eyebrow,
  title,
  description,
  intro,
  image,
  imageAlt,
  crumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-parchment">
      {image && (
        <img
          src={image}
          alt={imageAlt ?? ""}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-parchment/80 via-parchment/60 to-parchment" />
      <div className="relative">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <div
          className={`mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28 ${
            crumbs ? "pt-8 lg:pt-10" : "pt-28 lg:pt-36"
          }`}
        >
          <p className="eyebrow text-ember">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95] text-bark">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            {description}
          </p>
          {intro && (
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Section */

export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
  as = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
}) {
  const Tag = as;
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className="mt-5 font-display text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.05] text-bark">
        {title}
      </Tag>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>
      )}
    </div>
  );
}

export function Section({
  id,
  children,
  tone = "plain",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: "plain" | "muted";
  className?: string;
}) {
  if (tone === "muted") {
    return (
      <section
        id={id}
        className={`border-y border-border bg-secondary/50 py-20 lg:py-28 ${className}`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">{children}</div>
      </section>
    );
  }
  return (
    <section
      id={id}
      className={`mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28 ${className}`}
    >
      {children}
    </section>
  );
}

/* ---------------------------------------------------------- Quote block */

export function QuoteBlock({ 
  hindi, 
  english,
  variant = "page" 
}: { 
  hindi: string; 
  english: string;
  variant?: "home" | "page";
}) {
  return (
    <section className={`quote-highlight ${variant === "page" ? "pt-24 lg:pt-28" : "pt-4 lg:pt-6"}`}>
      <div className="mx-auto max-w-4xl px-6 py-3 lg:py-4 text-center">
        <Reveal>
          <div className="quote-dialog mx-auto max-w-2xl">
            <BrandLeaves className="mx-auto h-5 w-8 opacity-60" />
            <blockquote className="mt-4">
              <p
                lang="hi"
                className="font-display italic text-[clamp(1.1rem,2.5vw,1.6rem)] leading-relaxed text-ember"
              >
                {hindi}
              </p>
              <footer className="mt-3 text-[0.8rem] lg:text-[0.85rem] leading-relaxed text-muted-foreground italic font-sans">
                {english}
              </footer>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Prose blocks */

export function ProseBlocks({
  items,
}: {
  items: { title: string; body: string | string[] }[];
}) {
  return (
    <div className="space-y-px overflow-hidden rounded-sm bg-border">
      {items.map((item) => (
        <div key={item.title} className="bg-card p-8">
          <h3 className="font-display text-lg text-bark">{item.title}</h3>
          {(Array.isArray(item.body) ? item.body : [item.body]).map((p) => (
            <p key={p} className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export function CardGrid({
  items,
  columns = 3,
}: {
  items: { title: string; body: string; to?: string; cta?: string }[];
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-6 ${cols}`}>
      {items.map((item, i) => {
        const inner = (
          <>
            <BrandLeaves className="h-8 w-12" />
            <h3 className="mt-6 font-display text-xl text-bark">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {item.body}
            </p>
            {item.to && (
              <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.16em] text-ember uppercase">
                {item.cta ?? "Explore"} <span aria-hidden="true">→</span>
              </span>
            )}
          </>
        );
        return (
          <Reveal key={item.title} delay={i * 70}>
            {item.to ? (
              <Link
                to={item.to}
                className="grain flex h-full flex-col rounded-sm border border-border bg-card p-7 transition-transform duration-500 hover:-translate-y-1"
              >
                {inner}
              </Link>
            ) : (
              <article className="grain flex h-full flex-col rounded-sm border border-border bg-card p-7">
                {inner}
              </article>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------ CTA block */

export function CTABlock({
  eyebrow = "Next step",
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: ReactNode;
  body: string;
  primary: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <Section>
      <Reveal>
        <div className="rounded-sm border border-border bg-card p-10 text-center lg:p-16">
          <SectionHead align="center" eyebrow={eyebrow} title={title} />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {body}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to={primary.to}
              className="inline-flex items-center gap-3 rounded-full bg-ember px-7 py-3.5 text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
            >
              {primary.label}
            </Link>
            {secondary && (
              <Link
                to={secondary.to}
                className="inline-flex items-center gap-2 border-b border-bark/30 pb-1 text-xs font-bold tracking-[0.16em] text-bark/80 uppercase transition-colors hover:border-ember hover:text-ember"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* --------------------------------------------------------- FAQ accordion */

export function FaqAccordion({
  items,
  defaultOpen = 0,
}: {
  items: { q: string; a: string }[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.q} delay={i * 40}>
            <div className="border-b border-border">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span
                  className={`font-display text-lg transition-colors lg:text-xl ${
                    isOpen ? "text-ember" : "text-bark"
                  }`}
                >
                  {item.q}
                </span>
                <span
                  className={`mt-1 shrink-0 text-ember transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                    <path
                      d="M8 2v12M2 8h12"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className="grid transition-all duration-500 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-7 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------ Related links */

export function RelatedLinks({
  items,
}: {
  items: { to: string; label: string; description: string }[];
}) {
  return (
    <Section>
      <div className="border-t border-border pt-14">
        <p className="eyebrow text-ember">Keep exploring</p>
        <h2 className="mt-5 font-display text-2xl text-bark">Related pages</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group rounded-sm border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="font-display text-lg text-bark group-hover:text-ember">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
