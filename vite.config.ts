// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  css: {
    modules: false,
    // Add other CSS options if needed
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
