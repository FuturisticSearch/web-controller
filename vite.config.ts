import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["./assets/img/*", "./assets/other/*"],
      manifest: {
        name: "MacroDroid WC",
        short_name: "MDWC",
        background_color: "#3e526d",
        description:
          "Single page app that serves as a remote control to trigger MacroDroid actions on remote Android devices connected to internet and running the MacroDroid app with ease.",
        icons: [
          {
            src: "./assets/img/favicon.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "./assets/img/favicon.svg",
            type: "image/svg+xml",
          },
        ],
        theme_color: "#3e526d",
      },
      workbox: {
        cleanupOutdatedCaches: true,
      },
    }),
  ],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    assetsInlineLimit: 0,
  },
  server: {
    open: "./index.html",
  },
  publicDir: "./assets/public",
});
