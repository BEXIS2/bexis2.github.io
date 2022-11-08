/** @type {import('./$types').PageLoad} */
export async function load() {
	const url = `https://raw.githubusercontent.com/BEXIS2/Documents/master/System/modules_overview.md`;
	const response = await fetch(url);

	console.log('load releases');

	return {
		status: response.status,
		modules: await response.text()
	};
}
