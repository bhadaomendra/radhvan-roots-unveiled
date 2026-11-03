import { Link } from "@tanstack/react-router";
import { Breadcrumbs, CTABlock, FaqAccordion, PageHero, PageShell, Section } from "./Layout";
import { BrandLeaves } from "./icons";
import { Reveal } from "./Reveal";
import { formatDate, getPostBySlug, getPosts, getRelatedPosts, type BlogPost } from "@/lib/blog";

/* ------------------------------------------------------------ pieces */

function PostMeta({ post, className = "" }: { post: BlogPost; className?: string }) {
  return (
    <p
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.72rem] font-bold tracking-[0.14em] text-muted-foreground uppercase ${className}`}
    >
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{post.readingMinutes} min read</span>
    </p>
  );
}

function TagList({ tags }: { tags: string[] }) {
  if (!tags.length) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <li
          key={t}
          className="rounded-full border border-border bg-card px-3 py-1 text-[0.68rem] font-bold tracking-[0.12em] text-forest uppercase"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function PostCard({ post, delay = 0 }: { post: BlogPost; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card transition-transform duration-300 hover:-translate-y-1"
      >
        {post.cover ? (
          <img
            src={post.cover}
            alt={post.coverAlt}
            loading="lazy"
            decoding="async"
            className="aspect-[16/9] w-full object-cover"
          />
        ) : (
          <div className="flex aspect-[16/9] w-full items-center justify-center bg-secondary/60">
            <BrandLeaves className="h-10 w-16 opacity-70" />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          {post.tags[0] && <p className="eyebrow text-ember">{post.tags[0]}</p>}
          <h2 className="mt-3 font-display text-xl leading-snug text-bark group-hover:text-ember">
            {post.title}
          </h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <PostMeta post={post} className="mt-5" />
        </div>
      </Link>
    </Reveal>
  );
}

/* -------------------------------------------------------- blog index */

export function BlogIndexPage() {
  const posts = getPosts();
  return (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        title="Notes from the lab"
        description="Research notes, cultivation guides and practical learnings on Cordyceps militaris, written plainly and without overclaiming."
        crumbs={[{ label: "Blog" }]}
      />
      <Section className="!pt-4 lg:!pt-6">
        {posts.length === 0 ? (
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            Our first articles are on the way. In the meantime, the{" "}
            <Link to="/cordyceps-faq" className="text-ember underline underline-offset-4">
              Cordyceps FAQ
            </Link>{" "}
            answers the most common questions.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} delay={(i % 3) * 60} />
            ))}
          </div>
        )}
      </Section>
    </PageShell>
  );
}

/* --------------------------------------------------------- blog post */

export function BlogPostPage({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);
  if (!post) return <BlogPostNotFound />;

  const related = getRelatedPosts(post, 3);
  const showToc = post.headings.filter((h) => h.depth === 2).length >= 3;

  return (
    <PageShell>
      <article>
        <header className="relative overflow-hidden bg-parchment">
          <div className="absolute inset-0 bg-gradient-to-b from-parchment/80 via-parchment/60 to-parchment" />
          <div className="relative">
            <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: post.title }]} />
            <div className="mx-auto max-w-3xl px-4 pt-8 pb-12 sm:px-6 lg:px-8 lg:pt-10 lg:pb-16">
              <TagList tags={post.tags} />
              <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] text-bark">
                {post.title}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                {post.excerpt}
              </p>
              <p className="mt-6 text-sm text-bark/80">
                By <span className="font-bold">{post.author}</span>
              </p>
              <PostMeta post={post} className="mt-2" />
              {post.updated && (
                <p className="mt-2 text-xs text-muted-foreground">
                  Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </p>
              )}
            </div>
          </div>
        </header>

        {post.cover && (
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <img
              src={post.cover}
              alt={post.coverAlt}
              fetchPriority="high"
              decoding="async"
              className="aspect-[16/9] w-full rounded-sm border border-border object-cover"
            />
          </div>
        )}

        <div className="mx-auto max-w-3xl px-4 pt-8 pb-14 sm:px-6 lg:px-8 lg:pt-10 lg:pb-20">
          {showToc && (
            <nav
              aria-label="In this article"
              className="mb-12 rounded-sm border border-border bg-card p-6"
            >
              <p className="eyebrow text-ember">In this article</p>
              <ol className="mt-4 space-y-2 text-sm">
                {post.headings
                  .filter((h) => h.depth === 2)
                  .map((h) => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className="text-bark/80 transition-colors hover:text-ember"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
              </ol>
            </nav>
          )}

          <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.html }} />

          <p className="mt-14 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
            This article is for education and is not medical advice. Talk to a qualified
            professional before using any supplement.
          </p>
        </div>

        {post.faq.length > 0 && (
          <Section tone="muted">
            <div className="mx-auto max-w-3xl">
              <p className="eyebrow text-ember">FAQ</p>
              <h2 className="mt-5 mb-8 font-display text-3xl text-bark">
                Frequently asked questions
              </h2>
              <FaqAccordion items={post.faq} defaultOpen={null} />
            </div>
          </Section>
        )}
      </article>

      {related.length > 0 && (
        <Section>
          <div className="border-t border-border pt-14">
            <p className="eyebrow text-ember">Keep reading</p>
            <h2 className="mt-5 font-display text-2xl text-bark">More from the blog</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <PostCard key={p.slug} post={p} delay={i * 60} />
              ))}
            </div>
          </div>
        </Section>
      )}

      <CTABlock
        title="Have a question about Cordyceps cultivation?"
        body="Tell us what you are working on. We reply personally on WhatsApp and email."
        primary={{ to: "/contact", label: "Get in touch" }}
        secondary={{ to: "/cultivation-training", label: "See the training" }}
      />
    </PageShell>
  );
}

export function BlogPostNotFound() {
  return (
    <PageShell>
      <Section>
        <div className="mx-auto max-w-md pt-16 text-center">
          <h1 className="font-display text-4xl text-bark">Article not found</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            This article may have moved or is no longer published.
          </p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center rounded-full bg-ember px-7 py-3.5 text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase"
          >
            Back to the blog
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}
