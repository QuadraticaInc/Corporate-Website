// Astro is configured using astro.config.mjs.
//This file is optional if you do not need to configure Astro, but you may wish to create it now.
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: netlify(),
});