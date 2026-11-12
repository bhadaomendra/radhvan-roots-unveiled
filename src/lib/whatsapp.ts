import { useLocation } from "@tanstack/react-router";

export const WHATSAPP_NUMBER = "919251191528";
const SITE_ORIGIN = "https://radhvanorigins.com";
const DEFAULT_INTRO = "Hello Radhvan Origins, I would like to know more about your work.";

/** "/cultivation-training" -> "Cultivation Training", "/" -> "Home" */
export function pageNameFromPath(pathname: string): string {
  const clean = pathname.split(/[?#]/)[0].replace(/^\/+|\/+$/g, "");
  if (!clean) return "Home";
  return clean
    .split("/")
    .map((seg) =>
      decodeURIComponent(seg)
        .split("-")
        .filter(Boolean)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
    )
    .join(" / ");
}

/**
 * Builds a wa.me link with an English message that also tells us which page
 * the visitor came from. `details` adds extra lines (e.g. form fields).
 */
export function buildWhatsAppUrl(opts: {
  pathname: string;
  intro?: string;
  details?: string[];
}): string {
  const path = opts.pathname.startsWith("/") ? opts.pathname : `/${opts.pathname}`;
  const lines = [opts.intro ?? DEFAULT_INTRO];
  if (opts.details?.length) lines.push("", ...opts.details);
  lines.push("", `Page: ${pageNameFromPath(path)}`, `Link: ${SITE_ORIGIN}${path}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Hook for buttons: returns a wa.me URL for the page the visitor is currently on. */
export function useWhatsAppUrl(intro?: string): string {
  const { pathname } = useLocation();
  return buildWhatsAppUrl({ pathname, intro });
}
