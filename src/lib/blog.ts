/**
 * Blog data layer.
 *
 * Posts live in /content/blog/*.md (YAML front matter + Markdown body) and are
 * edited from the admin panel at /admin. Vite bundles them at build time with
 * import.meta.glob, so this module works in every build the project has: the
 * static pages build, the prerender script and Lovable's TanStack Start runtime.
 */
import { Marked } from "marked";
import { parse as parseYaml } from "yaml";

export const SITE_URL = "https://radhvanorigins.com";
export const SITE_NAME = "Radhvan Origins";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export type FaqItem = { q: string; a: string };
export type Heading = { id: string; text: string; depth: number };

export type BlogPost = {
  slug: string;
  title: string;
  /** ISO date string (publish date). */
  date: string;
  /** ISO date string of the last meaningful update, if any. */
  updated?: string;
  author: string;
  excerpt: string;
  cover?: string;
  coverAlt: string;
  tags: string[];
  /** On-page SEO controls. Empty values fall back to sensible defaults. */
  seoTitle?: string;
  metaDescription?: string;
  keywords?: string;
  canonical?: string;
  noindex: boolean;
  faq: FaqItem[];
  body: string;
  html: string;
  headings: Heading[];
  readingMinutes: number;
  wordCount: number;
};

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const rawFiles = import.meta.glob("/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

/* ----------------------------------------------------------- helpers */

function splitFrontMatter(raw: string): { data: Record<string, unknown>; body: string } {
  const match = raw.replace(/^\uFEFF/, "").match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const parsed = parseYaml(match[1]);
  return {
    data: parsed && typeof parsed === "object" ? (parsed as Record<string, unknown>) : {},
    body: match[2].trim(),
  };
}

function str(value: unknown): string | undefined {
  if (value === null || value === undefined) return undefined;
  const s = (value instanceof Date ? value.toISOString() : String(value)).trim();
  return s ? s : undefined;
}

export function slugify(text: string): string {
  return (
    text
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section"
  );
}

export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`~|-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ------------------------------------------------------- markdown render */

function renderMarkdown(body: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];
  const used = new Map<string, number>();

  const md = new Marked({ gfm: true, breaks: false });
  md.use({
    renderer: {
      // The post title is the page's only <h1>, so "# Heading" in the body is
      // demoted to <h2>.
      heading({ tokens, depth, text }) {
        const level = depth === 1 ? 2 : depth;
        let id = slugify(text);
        const n = used.get(id) ?? 0;
        used.set(id, n + 1);
        if (n > 0) id = `${id}-${n + 1}`;
        if (level <= 3) headings.push({ id, text, depth: level });
        return `<h${level} id="${id}">${this.parser.parseInline(tokens)}</h${level}>\n`;
      },
      link({ href, title, tokens }) {
        const external = /^https?:\/\//i.test(href) && !href.startsWith(SITE_URL);
        const attrs = [
          `href="${escapeHtml(href)}"`,
          title ? `title="${escapeHtml(title)}"` : "",
          external ? 'rel="noopener noreferrer" target="_blank"' : "",
        ]
          .filter(Boolean)
          .join(" ");
        return `<a ${attrs}>${this.parser.parseInline(tokens)}</a>`;
      },
      image({ href, title, text }) {
        return `<img src="${escapeHtml(href)}" alt="${escapeHtml(text)}"${
          title ? ` title="${escapeHtml(title)}"` : ""
        } loading="lazy" decoding="async" />`;
      },
      table({ header, rows }) {
        const cell = (c: (typeof header)[number], tag: "th" | "td") =>
          `<${tag}${c.align ? ` style="text-align:${c.align}"` : ""}>${this.parser.parseInline(c.tokens)}</${tag}>`;
        const head = `<thead><tr>${header.map((c) => cell(c, "th")).join("")}</tr></thead>`;
        const bodyRows = rows
          .map((r) => `<tr>${r.map((c) => cell(c, "td")).join("")}</tr>`)
          .join("");
        // Wrapper lets wide tables scroll sideways on phones.
        return `<div class="table-wrap"><table>${head}<tbody>${bodyRows}</tbody></table></div>\n`;
      },
    },
  });

  return { html: md.parse(body) as string, headings };
}

/* ----------------------------------------------------------- load posts */

function buildPost(path: string, raw: string): BlogPost {
  const fileSlug = path.split("/").pop()!.replace(/\.md$/, "");
  const { data, body } = splitFrontMatter(raw);

  const slug = str(data.slug) ?? fileSlug;
  if (!SLUG_RE.test(slug)) {
    throw new Error(
      `Blog post ${path}: invalid slug "${slug}". Use lowercase letters, numbers and hyphens only.`,
    );
  }

  const title = str(data.title) ?? slug;
  const { html, headings } = renderMarkdown(body);
  const plain = stripMarkdown(body);
  const wordCount = plain ? plain.split(/\s+/).length : 0;
  const excerpt = str(data.excerpt) ?? (plain.length > 160 ? `${plain.slice(0, 157)}...` : plain);

  const faqRaw = Array.isArray(data.faq) ? data.faq : [];
  const faq: FaqItem[] = faqRaw
    .map((item) => {
      const o = (item ?? {}) as Record<string, unknown>;
      return { q: str(o.q) ?? str(o.question) ?? "", a: str(o.a) ?? str(o.answer) ?? "" };
    })
    .filter((f) => f.q && f.a);

  const tags = Array.isArray(data.tags)
    ? data.tags.map((t) => str(t)).filter((t): t is string => Boolean(t))
    : [];

  return {
    slug,
    title,
    date: str(data.date) ?? new Date(0).toISOString(),
    updated: str(data.updated),
    author: str(data.author) ?? SITE_NAME,
    excerpt,
    cover: str(data.cover),
    coverAlt: str(data.coverAlt) ?? title,
    tags,
    seoTitle: str(data.seoTitle),
    metaDescription: str(data.metaDescription),
    keywords: str(data.keywords),
    canonical: str(data.canonical),
    noindex: data.noindex === true,
    faq,
    body,
    html,
    headings,
    readingMinutes: Math.max(1, Math.round(wordCount / 200)),
    wordCount,
  };
}

let cache: BlogPost[] | null = null;

/** All published posts (drafts excluded), newest first. */
export function getPosts(): BlogPost[] {
  if (cache) return cache;

  const posts: BlogPost[] = [];
  const seen = new Map<string, string>();

  for (const [path, raw] of Object.entries(rawFiles)) {
    const { data } = splitFrontMatter(raw);
    if (data.draft === true) continue;

    const post = buildPost(path, raw);
    const clash = seen.get(post.slug);
    if (clash) {
      throw new Error(`Duplicate blog slug "${post.slug}" in ${clash} and ${path}`);
    }
    seen.set(post.slug, path);
    posts.push(post);
  }

  posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  cache = posts;
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getPosts().find((p) => p.slug === slug);
}

/** Up to `limit` other posts, preferring ones that share a tag. */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const others = getPosts().filter((p) => p.slug !== post.slug);
  const score = (p: BlogPost) => p.tags.filter((t) => post.tags.includes(t)).length;
  return others
    .map((p, i) => ({ p, s: score(p), i }))
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .slice(0, limit)
    .map((x) => x.p);
}

/* -------------------------------------------------------- SEO helpers */

export function postPath(post: Pick<BlogPost, "slug">): string {
  return `/blog/${post.slug}`;
}

export function postUrl(post: Pick<BlogPost, "slug">): string {
  return `${SITE_URL}${postPath(post)}`;
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}

/** JSON.stringify that is safe to place inside a <script> tag. */
export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
