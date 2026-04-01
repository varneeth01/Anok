import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// ✅ Safe PORT handling
const port = Number(process.env.PORT) || 3000;

// ✅ Safe BASE_PATH handling
const basePath = process.env.BASE_PATH || "/";

// ✅ Detect environment
const isDev = process.env.NODE_ENV !== "production";

export default defineConfig(async () => ({
  base: basePath,

  plugins: [
    react(),
    tailwindcss(),

    // ❌ Only load this in dev (not needed in production build)
    ...(isDev ? [runtimeErrorOverlay()] : []),

    // ✅ Replit plugins only in dev
    ...(isDev && process.env.REPL_ID !== undefined
      ? [
          (await import("@replit/vite-plugin-cartographer")).cartographer({
            root: path.resolve(import.meta.dirname, ".."),
          }),
          (await import("@replit/vite-plugin-dev-banner")).devBanner(),
        ]
      : []),
  ],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(
        import.meta.dirname,
        "..",
        "..",
        "attached_assets"
      ),
    },
    dedupe: ["react", "react-dom"],
  },

  root: path.resolve(import.meta.dirname),

  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },

  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },

  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
}));
