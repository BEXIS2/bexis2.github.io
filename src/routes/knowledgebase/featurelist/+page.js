/** @type {import('./$types').PageLoad} */
export async function load() {
	const url = `https://raw.githubusercontent.com/BEXIS2/Documents/master/System/system%20functionalities.md`;
	const response = await fetch(url);

	return {
		status: response.status,
		doc: response.ok && (await response.text())
	};
}
