/** @type {import('./$types').PageLoad} */
export async function load() {
	const url = 'https://api.github.com/repos/BEXIS2/Core/releases';
	const response = await fetch(url);

	console.log('load releases');

	return {
		status: response.status,
		bexis2releases: await response.json()
	};
}
