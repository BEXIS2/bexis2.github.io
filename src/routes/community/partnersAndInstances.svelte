<script>
	import instancesJson from '../../data/instances.json';
 import partnersJson from '../../data/partners.json';
 import projectsJson from '../../data/projects.json';

 import ImageLinkList from '$lib/components/imageLinkList.svelte'

	</script>

<svelte:head>
 <title>Partners & Instances</title>
</svelte:head>

<ImageLinkList 
 title = "BEXIS ++ Partners"
 description = "The following organisation are part of the BExIS++ core project."
 list={partnersJson}
 />

<ImageLinkList 
title = "Contributing Projects"
description = "The core project closely collaborates with the following projects. The kind of contribution may include: collecting and providing user requirement, perform testing, usability studies, training, or developing modules and specific components."
list={projectsJson}
/>

<ImageLinkList 
title = "Instances"
description = ""
list={instancesJson}
/>