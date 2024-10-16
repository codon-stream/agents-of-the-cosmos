import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: "/",
  output: "server",
  security: {
    checkOrigin: true,
  },
});
