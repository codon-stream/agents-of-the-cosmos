import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "/",
  output: "server",
  security: {
    checkOrigin: true,
  },
  integrations: [react(), tailwind()],
  experimental: {
    env: {
      schema: {
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
