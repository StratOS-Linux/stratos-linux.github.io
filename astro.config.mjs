// --js-ts--
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightKbd from "starlight-kbd";

// https://astro.build/config
export default defineConfig({
  site: "https://stratos-linux.org",
  base: "",
  plugins: [starlightImageZoom()],
  integrations: [
    starlight({
      plugins: [
        starlightImageZoom(),
        starlightKbd({
          globalPicker: false,
          types: [{ id: "linux", label: "Linux", default: true }],
        }),
      ],
      title: "StratOS Linux",
      customCss: process.env.NO_GRADIENTS
        ? ["./src/styles/_global.css"]
        : ["./src/styles/landing.css", "./src/styles/_global.css"],
      // customCss: [ '@fontsource-variable/jetbrains-mono/400.css', '@fontsource-variable/jetbrains-mono/600.css' ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/StratOS-Linux",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/DVaXRCnCet",
        },
        {
          icon: "mastodon",
          label: "Mastodon",
          href: "https://fosstodon.org/@StratOS",
        },
        {
          icon: "x.com",
          label: "X (Formerly known as Twitter)",
          href: "https://twitter.com/StratOS_Linux",
        },
      ],
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
          label: "Configuration",
          autogenerate: { directory: "configuration" },
        },
      ],
    }),
  ],
});
