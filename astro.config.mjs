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
	    title: 'StratOS Documentation',
	    customCss: process.env.NO_GRADIENTS ? [	'./src/styles/_global.css'] : ['./src/styles/landing.css', 	'./src/styles/_global.css'],
	    // customCss: [
	    // 	       './src/styles/custom.css',
            // ],
	    social: {
		github: 'https://github.com/StratOS-Linux/StratOS-iso',
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
		  label: 'Master tutorial',
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
