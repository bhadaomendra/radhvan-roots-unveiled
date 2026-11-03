import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/components/site/BlogPages";
import { blogIndexHead } from "@/lib/blog-seo";

export const Route = createFileRoute("/blog/")({
  component: BlogIndexPage,
  head: () => blogIndexHead(),
});
