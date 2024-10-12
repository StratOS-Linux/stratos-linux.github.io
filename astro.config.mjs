// --js-ts--
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  site: "https://stratos-linux.org",
  base: "",
  plugins: [starlightImageZoom()],
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      title: "StratOS Linux",
      customCss: process.env.NO_GRADIENTS
        ? ["./src/styles/_global.css"]
        : ["./src/styles/landing.css", "./src/styles/_global.css"],
      // customCss: [ '@fontsource-variable/jetbrains-mono/400.css', '@fontsource-variable/jetbrains-mono/600.css' ],
      social: {
        github: "https://github.com/StratOS-Linux/StratOS-iso",
        discord: "https://discord.gg/DVaXRCnCet",
        mastodon: "https://fosstodon.org/@StratOS",
        "x.com": "https://twitter.com/StratOS_Linux",
      },
      sidebar: [
        // {
        //     label: 'Guides',
        //     items: [
        // 	// Each item here is one entry in the navigation menu.
        // 	{ label: 'Example Guide', link: '/guides/example/' },
        //     ],
        // },
        // {
        //   // label: "Master tutorial",
        //   // autogenerate: { directory: "guides" },
        //   slug: "guides/index",
        // },
        {
          label: "Getting Started",
          autogenerate: { directory: "intro" },
        },
        {
          label: "Tools",
          autogenerate: { directory: "tools" },
        },
        {
          label: "Strata",
          autogenerate: { directory: "strata" },
        },
      ],
    }),
  ],
});
