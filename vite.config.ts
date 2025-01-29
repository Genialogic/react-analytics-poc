import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginRadar } from "vite-plugin-radar";
import dotenv from "dotenv";

dotenv.config();

const GA_MEASUREMENT_ID = process.env.VITE_GTAG_ID || "";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginRadar({
      analytics: {
        id: GA_MEASUREMENT_ID,
      },
    }),
  ],
});
