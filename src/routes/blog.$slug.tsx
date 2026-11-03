import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostNotFound, BlogPostPage } from "@/components/site/BlogPages";
import { getPostBySlug } from "@/lib/blog";
import { postHead } from "@/lib/blog-seo";

export const Route = createFileRoute("/blog/$slug")({
  // Only the slug travels through loader data; the post itself is read from
  // the in-memory content bundle so the page is not serialised twice.
  loader: ({ params }) => {
    if (!getPostBySlug(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    const post = loaderData ? getPostBySlug(loaderData.slug) : undefined;
    return post ? postHead(post) : {};
  },
  component: BlogPostRoute,
  notFoundComponent: BlogPostNotFound,
});

function BlogPostRoute() {
  const { slug } = Route.useParams();
  return <BlogPostPage slug={slug} />;
}
