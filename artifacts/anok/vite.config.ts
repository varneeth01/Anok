import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// ✅ Environment
const port = Number(process.env.PORT) || 3000;
const isDev = process.env.NODE_ENV !== "production";

export default defineConfig(async () => ({
  // ✅ VERY IMPORTANT → fixes /anok/ path issue
  base: "/",

  plugins: [
    react(),
    tailwindcss(),

    // ✅ Only in development
    ...(isDev ? [runtimeErrorOverlay()] : []),

    ...(isDev && process.env.REPL_ID !== undefined
      ? [
          (await import("@replit/vite-plugin-cartographer")).cartographer({
            root: path.resolve(__dirname, ".."),
          }),
          (await import("@replit/vite-plugin-dev-banner")).devBanner(),
        ]
      : []),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },

  // ✅ Root of your app
  root: path.resolve(__dirname),

  build: {
    // ✅ CRITICAL FIX → no more dist/public
    outDir: path.resolve(__dirname, "dist"),

    emptyOutDir: true,

    // ✅ Better production optimization
    sourcemap: false,
    minify: "esbuild",

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
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
