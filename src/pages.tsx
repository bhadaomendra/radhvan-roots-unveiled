import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

// Tell RootShell (src/routes/__root.tsx) that we are mounting inside #root,
// not hydrating a whole document.
(window as unknown as { __STATIC_PAGES__?: boolean }).__STATIC_PAGES__ = true;

const router = getRouter();

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
