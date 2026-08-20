/**
 * Safe dataLayer helpers for the existing GTM container (GTM-KGKT3H4T).
 * No GA4 / Clarity scripts are created here — events are only pushed to
 * window.dataLayer so GTM tags can consume them.
 */

type DataLayerEvent = Record<string, unknown> & { event: string };

function getDataLayer(): unknown[] | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { dataLayer?: unknown[] };
  if (!Array.isArray(w.dataLayer)) w.dataLayer = [];
  return w.dataLayer!;
}

export function pageContext() {
  if (typeof window === "undefined") return { page_path: "", page_title: "" };
  return {
    page_path: window.location.pathname + window.location.search,
    page_title: document.title,
  };
}

export function pushEvent(event: string, params: Record<string, unknown> = {}) {
  try {
    const dl = getDataLayer();
    if (!dl) return;
    const payload: DataLayerEvent = { event, ...pageContext(), ...params };
    dl.push(payload);
  } catch {
    /* never break the UI for analytics */
  }
}

const TRAINING_KEYWORDS = [
  "enquire",
  "join training",
  "training",
  "book",
  "enroll",
  "enrol",
  "learn more",
];

const CTA_KEYWORDS = [
  "contact",
  "get in touch",
  "subscribe",
  "join the list",
  "explore",
  "start",
  "download",
  "read",
  "view",
];

function textOf(el: Element): string {
  return (
    (el.getAttribute("aria-label") || el.textContent || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 100)
  );
}

function isExternal(url: string): boolean {
  try {
    const u = new URL(url, window.location.href);
    return u.protocol.startsWith("http") && u.host !== window.location.host;
  } catch {
    return false;
  }
}

function handleClick(e: MouseEvent) {
  const target = e.target as Element | null;
  if (!target || typeof target.closest !== "function") return;
  const el = target.closest("a, button") as HTMLAnchorElement | HTMLButtonElement | null;
  if (!el) return;

  const text = textOf(el);
  const href = el instanceof HTMLAnchorElement ? el.getAttribute("href") || "" : "";
  const lower = (text + " " + href).toLowerCase();

  // 1. WhatsApp
  if (/wa\.me|api\.whatsapp\.com|whatsapp/.test(lower)) {
    pushEvent("whatsapp_click", { link_url: href, button_text: text });
    return;
  }

  // 2. Phone
  if (href.startsWith("tel:")) {
    pushEvent("phone_click", {
      phone_number: href.replace("tel:", ""),
      button_text: text,
    });
    return;
  }

  const lowerText = text.toLowerCase();

  // 3. Training CTA
  if (lowerText && TRAINING_KEYWORDS.some((k) => lowerText.includes(k))) {
    pushEvent("training_cta_click", {
      button_text: text,
      destination_url: href || undefined,
    });
    return;
  }

  // 4. External links
  if (href && isExternal(href)) {
    pushEvent("external_link_click", { link_url: href, link_text: text });
    return;
  }

  // 5. Meaningful business CTAs (buttons / mailto / primary actions)
  const isAction =
    el.tagName === "BUTTON" || href.startsWith("mailto:") || Boolean(href);
  if (isAction && lowerText && CTA_KEYWORDS.some((k) => lowerText.includes(k))) {
    pushEvent("cta_click", {
      button_text: text,
      destination_url: href || undefined,
    });
  }
}

const MILESTONES = [50, 75, 90] as const;
let fired = new Set<number>();
let scrollQueued = false;

function checkScroll() {
  scrollQueued = false;
  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - window.innerHeight;
  if (scrollable <= 0) return;
  const percent = ((window.scrollY || doc.scrollTop) / scrollable) * 100;
  for (const m of MILESTONES) {
    if (percent >= m && !fired.has(m)) {
      fired.add(m);
      pushEvent("scroll_depth", { percent_scrolled: m });
    }
  }
}

function onScroll() {
  if (scrollQueued) return;
  scrollQueued = true;
  window.requestAnimationFrame(checkScroll);
}

export function resetScrollDepth() {
  fired = new Set<number>();
  scrollQueued = false;
}

let initialised = false;

/** Idempotent: safe to call on every mount / SPA navigation. */
export function initDataLayerTracking(): () => void {
  if (typeof window === "undefined") return () => {};
  getDataLayer();
  if (initialised) return () => {};
  initialised = true;
  document.addEventListener("click", handleClick, true);
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => {
    document.removeEventListener("click", handleClick, true);
    window.removeEventListener("scroll", onScroll);
    initialised = false;
  };
}
