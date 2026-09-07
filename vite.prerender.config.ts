import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Bundles scripts/prerender.mjs (and everything it imports) into a single
// plain Node file, so it can run with `node` directly — no live dev-server
// transform involved at runtime, which avoids vite-node's ERR_CLOSED_SERVER
// module race entirely.
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "scripts-dist",
    emptyOutDir: true,
    ssr: true,
    rollupOptions: {
      input: { prerender: "scripts/prerender.mjs" },
      output: { format: "es", entryFileNames: "[name].mjs" },
    },
    target: "node22",
  },
  ssr: {
    noExternal: true,
  },
});
