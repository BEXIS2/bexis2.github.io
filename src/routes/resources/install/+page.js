/** @type {import('./$types').PageLoad} */
export async function load() {
	const url = `https://raw.githubusercontent.com/BEXIS2/Documents/master/Guides/Installation/installation.md`;
	const response = await fetch(url);

	return {
		status: response.status,
		doc: await response.text()
	};
}
