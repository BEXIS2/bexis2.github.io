import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
		//	fallback: '200.html',
			fallback: null,
			prsecompress: false,
			// ssr: false,
			strict: false,
		}),
		paths: {
			//base: process.env.NODE_ENV === 'production' ? '/bexis2-github-io' : '' ///bexis2-github-io/
			//base: process.env.NODE_ENV === 'production' ? '' : ''
		},
		trailingSlash: 'always',

		// Build throws error for all links pointing to the backend. Therefor we need to exclude for checking the link during build.
		prerender: {
			handleHttpError: ({ status, path, referrer, referenceType }) => {
				if (path.startsWith('/backend/') || path.startsWith('/images/') || path == '/') {
					//do nothing as it links to backend
				} else {
					throw new Error(
						path +
							' Missing link.' +
							`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`
					);
				}
				console.warn(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
			}
		}
	}
};
