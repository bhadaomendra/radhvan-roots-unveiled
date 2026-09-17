import { readFile } from "node:fs/promises";

const files = process.argv.slice(2);
if (files.length === 0) {
  files.push("cultivation-training.html", "dist/cultivation-training.html");
}

const coreTypes = [
  "Course",
  "CourseInstance",
  "EducationalOrganization",
  "Place",
  "WebPage",
  "BreadcrumbList",
];

function extractJsonLd(html) {
  return [...html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => JSON.parse(match[1]));
}

function entitiesFrom(blocks) {
  return blocks.flatMap((block) => (Array.isArray(block["@graph"]) ? block["@graph"] : [block]));
}

for (const file of files) {
  const html = await readFile(file, "utf8");
  const blocks = extractJsonLd(html);
  const entities = entitiesFrom(blocks);

  const requiredTypes = file.startsWith("dist/") ? [...coreTypes, "FAQPage"] : coreTypes;
  for (const type of requiredTypes) {
    if (!entities.some((entity) => entity["@type"] === type)) {
      throw new Error(`${file}: missing ${type} structured data`);
    }
  }

  const course = entities.find((entity) => entity["@type"] === "Course");
  if (!course?.name || !course?.description || !course?.provider?.["@id"] || !course?.hasCourseInstance?.["@id"]) {
    throw new Error(`${file}: Course is missing a required identity, provider, or instance reference`);
  }

  const breadcrumb = entities.find((entity) => entity["@type"] === "BreadcrumbList");
  const crumbs = breadcrumb?.itemListElement;
  if (!Array.isArray(crumbs) || crumbs.length !== 2 || crumbs[0]?.position !== 1 || crumbs[1]?.position !== 2) {
    throw new Error(`${file}: breadcrumb must contain Home and Cultivation Training in order`);
  }

  if (!html.includes('aria-label="Breadcrumb"') && file.startsWith("dist/")) {
    throw new Error(`${file}: JSON-LD breadcrumb is not backed by a visible breadcrumb`);
  }

  console.log(`✓ ${file}: course graph and breadcrumbs are valid`);
}