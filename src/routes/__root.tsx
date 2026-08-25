import { createRootRouteWithContext, Outlet, HeadContent, Scripts, ScrollRestoration } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import appCss from "../styles.css?url";

function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <h1 className="font-display text-5xl text-primary mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-6">The page you are looking for does not exist.</p>
        <a href="/" className="text-accent underline underline-offset-4">Return home</a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Radhvan Origins | Cordyceps Research & Cultivation" },
      { name: "description", content: "Radhvan Origins explores Cordyceps militaris through research, cultivation education and practical knowledge, with a focus on responsible and traceable cultivation." },
      { name: "author", content: "Radhvan Origins" },
      { name: "keywords", content: "Radhvan Origins, Cordyceps militaris, Cordyceps research, Cordyceps cultivation, Cordyceps India, lab grown cordyceps, fungal biotechnology" },
      { name: "google-site-verification", content: "TOeuUC9K53wc-Yi2ceu98o_IP7JI0imwygi-ZtiSlqI" },
      { property: "og:site_name", content: "Radhvan Origins" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://radhvanorigins.com/" },
      { property: "og:title", content: "Radhvan Origins | Cordyceps Research & Cultivation" },
      { property: "og:description", content: "Radhvan Origins explores Cordyceps militaris through research, cultivation education and practical knowledge, with a focus on responsible and traceable cultivation." },
      { property: "og:image", content: "https://radhvanorigins.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Radhvan Origins | Cordyceps Research & Cultivation" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Radhvan Origins | Cordyceps Research & Cultivation" },
      { name: "twitter:description", content: "Radhvan Origins explores Cordyceps militaris through research, cultivation education and practical knowledge, with a focus on responsible and traceable cultivation." },
      { name: "twitter:image", content: "https://radhvanorigins.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://radhvanorigins.com/" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Karla:wght@400;500;700&display=swap",
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <Outlet />
      <ScrollRestoration />
      <Scripts />
    </>
  );
}
