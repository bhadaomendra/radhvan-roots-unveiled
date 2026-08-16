import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// A static-only build used by GitHub Pages / cPanel FTP. The main Vite config
// remains unchanged for Lovable's TanStack Start runtime.
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        "cordyceps-vs-sinensis": "cordyceps-vs-sinensis.html",
        cordycepin: "cordycepin.html",
        "cordyceps-health-benefits": "cordyceps-health-benefits.html",
        "cordyceps-cultivation": "cordyceps-cultivation.html",
        "cordyceps-faq": "cordyceps-faq.html",
      },
    },
  },
});
