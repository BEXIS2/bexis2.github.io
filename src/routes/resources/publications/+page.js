import bibtexParse from 'bibtex-parse';
import bibData from '$lib/bibtext.bib?raw';
//	export let bibsFiles;
/** @type {import('./$types').PageLoad} */
export async function load() {
	let allBibContent = bibtexParse.entries(bibData);

	let sortedJsonList = allBibContent.sort((a, b) => {
		return new Date(b.DATE) - new Date(a.DATE);
	});
	return {
		body: sortedJsonList
	};
}
