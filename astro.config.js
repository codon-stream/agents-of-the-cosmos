import { defineConfig, envField } from "astro/config";

import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "/",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  security: {
    checkOrigin: true,
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  redirects: {
    "/home": "/",
  },
  experimental: {
    env: {
      schema: {
        APP_NAME: envField.string({
          context: "client",
          access: "public",
          default: "Astro",
        }),
        MAINTENANCE_MODE: envField.boolean({
          context: "server",
          access: "secret",
          default: false,
          optional: true,
        }),
        CHROME_PRIVACY_PRESERVING_PREFETCH_PROXY: envField.boolean({
          context: "server",
          access: "secret",
          default: false,
          optional: true,
        }),
      },
    },
  },
});
