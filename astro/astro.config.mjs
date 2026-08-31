// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    // Icon sets are resolved at build time and inlined into the HTML, so no
    // request leaves the browser at runtime. Replaces pymdownx.emoji, which
    // was wired directly into Material's Python code.
    icon({ include: { mdi: ['*'], 'fa6-brands': ['*'], 'fa6-solid': ['*'] } }),
  ],
});
