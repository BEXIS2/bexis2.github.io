// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	ssr: {
		//noExternal: Object.keys(pkg.dependencies || {})
		//noExternal : ['@popperjs']
	},
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['static']
		}
	}
};

export default config;
