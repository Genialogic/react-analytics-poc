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
      analytics: [
        {
          id: GA_MEASUREMENT_ID,
          config: {
            cookie_domain: ".netlify.app",
            cookie_expires: 63072000, // 2 anos
            cookie_flags: "SameSite=None; Secure",
            send_page_view: true,
            allow_google_signals: true,
            allow_ad_personalization_signals: true,
          },
        },
      ],
    }),
  ],
});
