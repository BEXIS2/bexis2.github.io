/** @type {import('./$types').PageLoad} */
export async function load() {
	const url = 'https://api.github.com/repos/BEXIS2/Core/milestones';
	const response = await fetch(url);

	console.log('load milestones');

	const milestones = response.ok && (await response.json());
	let x = milestones.filter((m) => m.due_on != null);
	console.log(x);

	return {
		status: response.status,
		milestones: x
	};
}
