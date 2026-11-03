// scripts/blog-entries.mjs
//
// The static build (vite.pages.config.ts) needs one real .html entry file per
// page. Pages written by hand have theirs checked in; blog articles are added
// from the admin panel, so their entry files are generated here from
// content/blog/*.md and are git-ignored.
//
//   blog.html            -> /blog
//   blog/<slug>.html     -> /blog/<slug>
//
// vite.pages.config.ts calls generateBlogEntries() while it loads, so both
// `bun run build` and a bare `vite build --config vite.pages.config.ts` pick up
// new posts automatically. Slug rules must match src/lib/blog.ts.

import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
export const BLOG_DIR = path.join(ROOT, "content", "blog");
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Parse "---\nyaml\n---\nbody" into { data, body }. */
export function parseFrontMatter(raw) {
  const m = raw.replace(/^﻿/, "").match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const data = parseYaml(m[1]);
  return { data: data && typeof data === "object" ? data : {}, body: m[2].trim() };
}

/** Every published (non-draft) post: [{ slug, file, data, body }]. */
export function readPublishedPosts() {
  if (!existsSync(BLOG_DIR)) return [];
  const seen = new Map();
  const posts = [];

  for (const file of readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort()) {
    const raw = readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, body } = parseFrontMatter(raw);
    if (data.draft === true) continue;

    const slug = String(data.slug ?? "").trim() || file.replace(/\.md$/, "");
    if (!SLUG_RE.test(slug)) {
      throw new Error(
        `content/blog/${file}: invalid slug "${slug}". Use lowercase letters, numbers and hyphens only.`,
      );
    }
    if (seen.has(slug)) {
      throw new Error(
        `Duplicate blog slug "${slug}" in content/blog/${seen.get(slug)} and ${file}`,
      );
    }
    seen.set(slug, file);
    posts.push({ slug, file, data, body });
  }
  return posts;
}

// The <title data-prerender> placeholder is replaced with the page's real title
// by scripts/prerender.mjs.
const TEMPLATE = `<!doctype html>
<html lang="en">
  <head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KGKT3H4T');</script>
    <!-- End Google Tag Manager -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title data-prerender>Radhvan Origins Blog</title>
    <link rel="icon" href="/favicon.png" type="image/png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Karla:wght@400;500;700&display=swap" />
  </head>
  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGKT3H4T"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div id="root"></div>
    <script type="module" src="/src/pages.tsx"></script>
  </body>
</html>
`;

/**
 * (Re)creates blog.html and blog/<slug>.html and returns the Rollup `input`
 * entries for them, e.g. { blog: "blog.html", "blog-my-post": "blog/my-post.html" }.
 */
export function generateBlogEntries() {
  rmSync(path.join(ROOT, "blog"), { recursive: true, force: true });
  rmSync(path.join(ROOT, "blog.html"), { force: true });

  writeFileSync(path.join(ROOT, "blog.html"), TEMPLATE);
  const input = { blog: "blog.html" };

  const posts = readPublishedPosts();
  if (posts.length) mkdirSync(path.join(ROOT, "blog"), { recursive: true });
  for (const { slug } of posts) {
    writeFileSync(path.join(ROOT, "blog", `${slug}.html`), TEMPLATE);
    input[`blog-${slug}`] = `blog/${slug}.html`;
  }
  return input;
}
