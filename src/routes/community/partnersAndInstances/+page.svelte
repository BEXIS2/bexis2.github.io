<script>
	import instancesJson from '../../../data/instances.json';
	import partnersJson from '../../../data/partners.json';
	import projectsJson from '../../../data/projects.json';

	import ImageLinkList from '$lib/components/ImageLinkList.svelte';

	instancesJson.sort(function (a, b) {
		return a.title.localeCompare(b.title);
	});

	projectsJson.sort(function (a, b) {
		return a.title.localeCompare(b.title);
	});
</script>

<svelte:head>
	<title>Partners & Instances</title>
</svelte:head>

<h1>Partners & Instances</h1>

<ImageLinkList
	title="BEXIS2 Partners"
	description="The following organisation are part of the BEXIS2 core project."
	list={partnersJson}
/>

<ImageLinkList
	title="Contributing Projects"
	description="The core project closely collaborates with the following projects. The kind of contribution may include: collecting and providing user requirement, perform testing, usability studies, training, or developing modules and specific components."
	list={projectsJson}
/>

<ImageLinkList title="Instances" description="" list={instancesJson} />
