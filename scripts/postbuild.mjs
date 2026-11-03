// scripts/postbuild.mjs
//
// Runs after prerender, on the finished dist/ folder:
//   1. Applies the on-page SEO settings edited in the admin panel
//      (content/seo/pages.json) to each page's <head>.
//   2. Rebuilds dist/sitemap.xml with every published blog post.
//   3. Writes dist/rss.xml for the blog.
//   4. Copies dist/blog.html to dist/blog/index.html so /blog/ also works on
//      hosts that do not apply the .htaccess rewrite rules.

import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readPublishedPosts } from "./blog-entries.mjs";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const SITE = "https://radhvanorigins.com";
const SITE_NAME = "Radhvan Origins";

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/* ------------------------------------------------------------- SEO apply */

function fileForPath(routePath) {
  return routePath === "/" ? "index.html" : `${routePath.replace(/^\//, "")}.html`;
}

function removeTags(html, pattern) {
  return html.replace(pattern, "");
}

const metaByName = (name) =>
  new RegExp(`[ \\t]*<meta\\b[^>]*\\bname=["']${name}["'][^>]*>[ \\t]*\\n?`, "gi");
const metaByProp = (prop) =>
  new RegExp(`[ \\t]*<meta\\b[^>]*\\bproperty=["']${prop}["'][^>]*>[ \\t]*\\n?`, "gi");
const canonicalLink = /[ \t]*<link\b[^>]*\brel=["']canonical["'][^>]*>[ \t]*\n?/gi;

/**
 * Sets the SEO tags of one built page. Every tag that is touched is first
 * removed everywhere in the file (templates and route head() can both emit it)
 * and then written exactly once, so crawlers never see duplicates.
 */
function applySeo(html, page) {
  const tags = [];
  let out = html;

  const setName = (name, value) => {
    out = removeTags(out, metaByName(name));
    tags.push(`<meta name="${name}" content="${esc(value)}" />`);
  };
  const setProp = (prop, value) => {
    out = removeTags(out, metaByProp(prop));
    tags.push(`<meta property="${prop}" content="${esc(value)}" />`);
  };

  const title = page.title?.trim();
  const description = page.description?.trim();
  const keywords = page.keywords?.trim();
  const ogImage = page.ogImage?.trim();
  const canonical = page.canonical?.trim();

  if (title) {
    if (/<title[^>]*>[\s\S]*?<\/title>/i.test(out)) {
      out = out.replace(/<title[^>]*>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`);
    } else {
      tags.push(`<title>${esc(title)}</title>`);
    }
    setProp("og:title", title);
    setName("twitter:title", title);
  }
  if (description) {
    setName("description", description);
    setProp("og:description", description);
    setName("twitter:description", description);
  }
  if (keywords) setName("keywords", keywords);
  if (ogImage) {
    setProp("og:image", ogImage);
    setName("twitter:image", ogImage);
  }
  if (canonical) {
    out = removeTags(out, canonicalLink);
    tags.push(`<link rel="canonical" href="${esc(canonical)}" />`);
    setProp("og:url", canonical);
    setName("twitter:url", canonical);
  }
  if (page.noindex === true) {
    setName("robots", "noindex, follow");
  }

  if (!tags.length) return out;
  return out.replace("</head>", `    ${tags.join("\n    ")}\n  </head>`);
}

async function applyPageSeo() {
  const seoPath = path.join(ROOT, "content", "seo", "pages.json");
  if (!existsSync(seoPath)) return new Set();

  const { pages = [] } = JSON.parse(await readFile(seoPath, "utf8"));
  const noindex = new Set();
  console.log(`Applying SEO settings to ${pages.length} pages ...`);

  for (const page of pages) {
    if (!page?.path) continue;
    const file = path.join(DIST, fileForPath(page.path));
    if (!existsSync(file)) {
      console.warn(`  ! no built file for ${page.path}, skipped`);
      continue;
    }
    const html = await readFile(file, "utf8");
    await writeFile(file, applySeo(html, page), "utf8");
    if (page.noindex === true) noindex.add(page.path);
    console.log(`  ✓ ${page.path}`);
  }
  return noindex;
}

/* ------------------------------------------------- sitemap, rss, blog index */

const isoDate = (v) => {
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
};

async function writeSitemap(noindexPaths) {
  const sitemapPath = path.join(DIST, "sitemap.xml");
  const existing = existsSync(sitemapPath) ? await readFile(sitemapPath, "utf8") : "";
  const blocks = [...existing.matchAll(/<url>[\s\S]*?<\/url>/g)].map((m) => m[0]);

  const locOf = (block) => block.match(/<loc>(.*?)<\/loc>/)?.[1] ?? "";
  const byLoc = new Map(blocks.map((b) => [locOf(b), `  ${b}`]));

  const add = (loc, lastmod, changefreq, priority) => {
    byLoc.set(
      loc,
      [
        "  <url>",
        `    <loc>${loc}</loc>`,
        lastmod ? `    <lastmod>${lastmod.slice(0, 10)}</lastmod>` : null,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n"),
    );
  };

  const posts = readPublishedPosts().filter((p) => p.data.noindex !== true);
  const newest = posts
    .map((p) => isoDate(p.data.updated ?? p.data.date))
    .filter(Boolean)
    .sort()
    .pop();
  add(`${SITE}/blog`, newest, "weekly", "0.8");
  for (const p of posts) {
    add(`${SITE}/blog/${p.slug}`, isoDate(p.data.updated ?? p.data.date), "monthly", "0.7");
  }

  for (const loc of [...byLoc.keys()]) {
    const route = loc.replace(SITE, "") || "/";
    if (noindexPaths.has(route)) byLoc.delete(loc);
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...byLoc.values(),
    "</urlset>",
    "",
  ].join("\n");
  await writeFile(sitemapPath, xml, "utf8");
  console.log(`✓ sitemap.xml (${byLoc.size} URLs)`);
}

async function writeRss() {
  const posts = readPublishedPosts()
    .filter((p) => p.data.noindex !== true)
    .map((p) => ({ ...p, date: isoDate(p.data.date) ?? new Date(0).toISOString() }))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 30);

  const items = posts.map((p) => {
    const url = `${SITE}/blog/${p.slug}`;
    const excerpt = String(p.data.excerpt ?? "").trim();
    return [
      "    <item>",
      `      <title>${esc(p.data.title ?? p.slug)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <pubDate>${new Date(p.date).toUTCString()}</pubDate>`,
      excerpt ? `      <description>${esc(excerpt)}</description>` : null,
      "    </item>",
    ]
      .filter(Boolean)
      .join("\n");
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    "  <channel>",
    `    <title>${SITE_NAME} Blog</title>`,
    `    <link>${SITE}/blog</link>`,
    "    <description>Research notes, cultivation guides and lab learnings on Cordyceps militaris.</description>",
    "    <language>en</language>",
    ...items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");
  await writeFile(path.join(DIST, "rss.xml"), xml, "utf8");
  console.log(`✓ rss.xml (${items.length} posts)`);
}

async function copyBlogIndex() {
  const src = path.join(DIST, "blog.html");
  if (!existsSync(src)) return;
  await mkdir(path.join(DIST, "blog"), { recursive: true });
  await copyFile(src, path.join(DIST, "blog", "index.html"));
}

/* ------------------------------------------------------------------ main */

const noindex = await applyPageSeo();
await writeSitemap(noindex);
await writeRss();
await copyBlogIndex();
console.log("Post-build done.");
