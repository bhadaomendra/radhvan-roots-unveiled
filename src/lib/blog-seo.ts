/**
 * <head> builders for the blog routes (title, meta, canonical, JSON-LD).
 * Everything an editor can control from the admin panel flows through here.
 */
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  getPosts,
  jsonLd,
  postUrl,
  type BlogPost,
} from "./blog";

type Meta = Record<string, string>;

export const BLOG_TITLE = "Cordyceps Blog: research notes & cultivation guides | Radhvan Origins";
export const BLOG_DESC =
  "Research notes, cultivation guides and lab learnings on Cordyceps militaris from Radhvan Origins, written plainly and without overclaiming.";

const PUBLISHER = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon-512x512.png` },
};

export function postHead(post: BlogPost) {
  const url = post.canonical ? absoluteUrl(post.canonical) : postUrl(post);
  const title = post.seoTitle ?? `${post.title} | ${SITE_NAME}`;
  const description = post.metaDescription ?? post.excerpt;
  const image = post.cover ? absoluteUrl(post.cover) : DEFAULT_OG_IMAGE;
  // Falls back to the post's tags, otherwise the site-wide keywords apply.
  const keywords = post.keywords ?? (post.tags.length ? post.tags.join(", ") : undefined);

  const meta: Meta[] = [
    { title },
    { name: "description", content: description },
    ...(keywords ? [{ name: "keywords", content: keywords }] : []),
    ...(post.noindex ? [{ name: "robots", content: "noindex, follow" }] : []),
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:type", content: "article" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: post.coverAlt },
    { property: "article:published_time", content: post.date },
    ...(post.updated ? [{ property: "article:modified_time", content: post.updated }] : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: post.title,
      description,
      image,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      wordCount: post.wordCount,
      ...(post.tags.length ? { keywords: post.tags.join(", ") } : {}),
      author:
        post.author === SITE_NAME
          ? { "@type": "Organization", name: SITE_NAME, url: SITE_URL }
          : { "@type": "Person", name: post.author },
      publisher: PUBLISHER,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  if (post.faq.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLd({ "@context": "https://schema.org", "@graph": graph }),
      },
    ],
  };
}

export function blogIndexHead() {
  const url = `${SITE_URL}/blog`;
  const posts = getPosts();

  const meta: Meta[] = [
    { title: BLOG_TITLE },
    { name: "description", content: BLOG_DESC },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: BLOG_TITLE },
    { property: "og:description", content: BLOG_DESC },
    { property: "og:image", content: DEFAULT_OG_IMAGE },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: BLOG_TITLE },
    { name: "twitter:description", content: BLOG_DESC },
    { name: "twitter:image", content: DEFAULT_OG_IMAGE },
  ];

  const graph = [
    {
      "@type": "Blog",
      "@id": `${url}#blog`,
      name: `${SITE_NAME} Blog`,
      description: BLOG_DESC,
      url,
      publisher: PUBLISHER,
      blogPost: posts.slice(0, 20).map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: postUrl(p),
        datePublished: p.date,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: url },
      ],
    },
  ];

  return {
    meta,
    links: [
      { rel: "canonical", href: url },
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: `${SITE_NAME} Blog`,
        href: `${SITE_URL}/rss.xml`,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLd({ "@context": "https://schema.org", "@graph": graph }),
      },
    ],
  };
}
