import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  cacheDir: ".vite-cache",
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@animate-ui/react/primitives/avatar-group": fileURLToPath(
        new URL("./src/components/animate-ui/primitives/avatar-group.jsx", import.meta.url)
      ),
      "@animate-ui/react/primitives/base-ui/select": fileURLToPath(
        new URL("./src/components/animate-ui/primitives/base-ui/select.jsx", import.meta.url)
      ),
      "@animate-ui/react/primitives/base-ui/tabs": fileURLToPath(
        new URL("./src/components/animate-ui/primitives/base-ui/tabs.jsx", import.meta.url)
      ),
      "@animate-ui/react/primitives/effects/click": fileURLToPath(
        new URL("./src/components/animate-ui/primitives/effects/click.jsx", import.meta.url)
      ),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('motion') || id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
          }
        },
      },
    },
  },
});