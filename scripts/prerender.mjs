// scripts/prerender.mjs
//
// Purpose: the static build (vite.pages.config.ts, used for GitHub Pages /
// cPanel FTP hosting) ships an EMPTY <div id="root"></div> for every page —
// content only appears after the browser downloads and runs the JS bundle.
// Crawlers that don't execute JS (most AI/LLM crawlers, and slower cases of
// Googlebot) see nothing.
//
// This script renders each route's real HTML on the server (using the same
// React components and router the site already uses) and bakes that HTML
// into the built .html files, replacing the empty <div id="root"></div>.
// The client bundle still loads afterwards and "hydrates" the page for
// interactivity — visitors see no difference, but crawlers now see full
// content immediately.
//
// Usage:
//   1. npx vite build --config vite.pages.config.ts   (creates dist/*.html)
//   2. node scripts/prerender.mjs                      (bakes content in)

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PassThrough } from "node:stream";
import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { RouterProvider, createMemoryHistory } from "@tanstack/react-router";
import { getRouter } from "../src/router.tsx";

// TanStack Router code-splits each route's component with React.lazy().
// The classic synchronous `renderToString` doesn't wait for those async
// chunks to resolve, so lazy-loaded pages rendered as empty/fallback markup.
// `renderToPipeableStream` + `onAllReady` waits for every Suspense boundary
// (including lazy route components) to finish before we read the output.
function renderNodeToString(node) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("render timed out")), 20000);
    const { pipe } = renderToPipeableStream(node, {
      onAllReady() {
        clearTimeout(timeout);
        const chunks = [];
        const sink = new PassThrough();
        sink.on("data", (chunk) => chunks.push(chunk));
        sink.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
        sink.on("error", reject);
        pipe(sink);
      },
      onShellError(err) {
        clearTimeout(timeout);
        reject(err);
      },
      onError(err) {
        // Non-fatal render warnings; the full page still resolves via onAllReady.
        console.warn("    (render warning)", err?.message ?? err);
      },
    });
  });
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, "..", "dist");

// route path -> built HTML file (must match vite.pages.config.ts `input`)
const ROUTES = {
  "/": "index.html",
  "/why-radhvan": "why-radhvan.html",
  "/cordyceps-study": "cordyceps-study.html",
  "/cultivation-training": "cultivation-training.html",
  "/research-knowledge": "research-knowledge.html",
  "/contact": "contact.html",
  "/cordyceps-vs-sinensis": "cordyceps-vs-sinensis.html",
  "/cordycepin": "cordycepin.html",
  "/cordyceps-health-benefits": "cordyceps-health-benefits.html",
  "/cordyceps-cultivation": "cordyceps-cultivation.html",
  "/cordyceps-faq": "cordyceps-faq.html",
};

async function renderRoute(routePath, attempt = 1) {
  try {
    const router = getRouter();
    router.update({ history: createMemoryHistory({ initialEntries: [routePath] }) });
    await router.load();
    return await finishRenderRoute(router);
  } catch (err) {
    // vite-node's dev module server occasionally races/closes mid-transform
    // ("ERR_CLOSED_SERVER") when several routes share a lazy chunk. It's
    // transient — retrying the same route almost always succeeds.
    if (attempt < 3 && String(err?.code ?? err?.message).includes("CLOSED_SERVER")) {
      await new Promise((r) => setTimeout(r, 300 * attempt));
      return renderRoute(routePath, attempt + 1);
    }
    throw err;
  }
}

async function finishRenderRoute(router) {
  const fullDoc = await renderNodeToString(React.createElement(RouterProvider, { router }));

  // The root route also defines a `shellComponent` (a full <html> document,
  // used by TanStack Start's real SSR pipeline). RouterProvider renders that
  // shell too, so `fullDoc` is a whole document, not a fragment. We only
  // want what belongs inside our existing static file's <body>, so pull out
  // the inner <body>...</body> content and drop the duplicate GTM noscript
  // tag (the static file already has its own).
  const bodyMatch = fullDoc.match(/<body[^>]*>([\s\S]*)<\/body>/);
  const inner = bodyMatch ? bodyMatch[1] : fullDoc;
  const bodyHtml = inner.replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/, "").trim();

  // Pull the per-route <head> extras (meta description, OG/Twitter tags,
  // canonical, JSON-LD schema, etc). The static template already has its
  // own charset/viewport/GTM script/title/stylesheet — we only want the
  // tags this route *adds*, so filter those base tags out before merging.
  const headMatch = fullDoc.match(/<head[^>]*>([\s\S]*?)<\/head>/);
  const headInner = headMatch ? headMatch[1] : "";
  const headExtras = headInner
    .split(/(?=<(?:meta|link|title|script)\b)/g)
    .filter((tag) => tag.trim())
    .filter((tag) => {
      const t = tag.toLowerCase();
      return !(
        t.includes('charset=') ||
        t.includes('name="viewport"') ||
        t.includes("<title>") ||
        t.includes("gtm.js") ||
        t.includes('rel="preload"') ||
        t.includes('rel="preconnect"') ||
        t.includes('rel="icon"') ||
        t.includes('href="https://fonts.googleapis.com/css2') ||
        t.includes('href="/src/styles.css"')
      );
    })
    .join("\n    ");

  return { bodyHtml, headExtras };
}

async function bakeFile(fileName, { bodyHtml, headExtras }) {
  const filePath = path.join(DIST_DIR, fileName);
  let source;
  try {
    source = await readFile(filePath, "utf8");
  } catch {
    console.warn(`  ! skipped (not found in dist/): ${fileName}`);
    return;
  }

  if (!source.includes('<div id="root"></div>')) {
    console.warn(`  ! could not find empty root div in ${fileName} — skipping`);
    return;
  }

  let updated = source.replace(
    '<div id="root"></div>',
    `<div id="root">${bodyHtml}</div>`,
  );

  if (headExtras && updated.includes("</head>")) {
    // Some static templates already hardcode their own (correct) canonical
    // link — don't add a second one on top of it.
    const extras = updated.includes('rel="canonical"')
      ? headExtras.replace(/<link rel="canonical"[^>]*\/?>\n?\s*/, "")
      : headExtras;
    updated = updated.replace("</head>", `    ${extras}\n  </head>`);
  }

  await writeFile(filePath, updated, "utf8");
  console.log(
    `  ✓ baked ${fileName} (${(bodyHtml.length / 1024).toFixed(1)} KB body, ` +
      `${(headExtras.length / 1024).toFixed(1)} KB head extras)`,
  );
}

async function main() {
  // Several routes share a lazy-loaded chunk (GuidePages.tsx). Importing it
  // once up front avoids vite-node re-transforming/invalidating the same
  // module mid-request on every subsequent route render in this loop.
  // The very first module transform in a cold vite-node process can race
  // and throw ERR_CLOSED_SERVER — retry a few times before giving up.
  for (let attempt = 1; ; attempt++) {
    try {
      await import("../src/components/site/GuidePages.tsx");
      break;
    } catch (err) {
      if (attempt >= 5 || !String(err?.code ?? err?.message).includes("CLOSED_SERVER")) {
        throw err;
      }
      await new Promise((r) => setTimeout(r, 400 * attempt));
    }
  }

  console.log(`Prerendering ${Object.keys(ROUTES).length} routes into dist/ ...\n`);
  for (const [routePath, fileName] of Object.entries(ROUTES)) {
    try {
      const rendered = await renderRoute(routePath);
      await bakeFile(fileName, rendered);
    } catch (err) {
      console.error(`  ✗ FAILED for ${routePath} (${fileName}):`, err.message);
    }
  }
  console.log("\nDone. Review dist/ and upload it to your host.");
}

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION:", err);
  process.exitCode = 1;
});
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
  process.exitCode = 1;
});

main().catch((err) => {
  console.error("main() FAILED:", err);
  process.exitCode = 1;
});
