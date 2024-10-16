import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "/",
  output: "server",
  security: {
    checkOrigin: true,
  },
  integrations: [tailwind()],
});
