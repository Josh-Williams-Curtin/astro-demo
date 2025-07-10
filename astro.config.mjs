// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://Josh-Williams-Curtin.github.io",
  base: "/astro-demo",
  integrations: [preact()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
});
