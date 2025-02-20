import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import vercel from '@astrojs/vercel/serverless';
import react from "@astrojs/react";
import partytown from '@astrojs/partytown';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sh1mmer.t3rm1n4l.dev",
  output: "server",
  adapter: process.env.CF_PAGES === '1' ? cloudflare() : vercel({
    webAnalytics: {
      enabled: true,
    }
  }),
  integrations: [react(), partytown(), sitemap()]
 });