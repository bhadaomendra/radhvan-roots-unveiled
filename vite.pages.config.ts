import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// A static-only build used by GitHub Pages. The main Vite config remains
// unchanged for Lovable's TanStack Start runtime.
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
