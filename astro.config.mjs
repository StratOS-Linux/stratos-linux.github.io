// -*-js-ts-*-
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
    site:  'https://stratos-linux.github.io/docs',
    plugins: [starlightImageZoom()],
    integrations: [
	starlight({
	    plugins: [starlightImageZoom()],
	    title: 'StratOS Linux',
	    customCss: process.env.NO_GRADIENTS ? [	'./src/styles/_global.css'] : ['./src/styles/landing.css', 	'./src/styles/_global.css'],
	    // customCss: [
	    // 	       './src/styles/custom.css',
            // ],
	    social: {
			github: 'https://github.com/StratOS-Linux/',
			discord: 'https://discord.gg/NRU5GppP',
			mastodon: 'https://fosstodon.org/@StratOS',
			'x.com': 'https://twitter.com/StratOS_Linux'
	    },
	    sidebar: [
		// {
		//     label: 'Guides',
		//     items: [
		// 	// Each item here is one entry in the navigation menu.
		// 	{ label: 'Example Guide', link: '/guides/example/' },
		//     ],
		// },
		{
		  label: 'Getting Started',
		  autogenerate: { directory: 'guides' }, 
		},
		{
		    label: 'Tools',
		    autogenerate: { directory: 'tools' },
		},
		{
		    label: 'Strata',
		    autogenerate: { directory: 'strata' },
		},
	    ],
	}),
    ],
});
