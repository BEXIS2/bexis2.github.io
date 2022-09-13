	<script context="module">

		export let bibsFiles;
		export const load = async ({ fetch }) => {
			let  pathAPI=`/api/biblio.json`;
			

			const response = await fetch(pathAPI)
			if(response.ok){
				bibsFiles = await response.json()
				return {
					bibsFiles
					}
				}
			return {
				bibsFiles
			}
		}
	</script>

	<script>
		import Publication from '$lib/components/Publication.svelte';
		import { onMount } from 'svelte';
		
		let jsonList = [];
		onMount(async () => {
			jsonList=bibsFiles;
		});
		
		$: selectedPubs=jsonList;
	</script>
	
	<svelte:head>
		<title>Publications</title>
	</svelte:head>
	
	{#if selectedPubs}
	<ol>
		{#each selectedPubs as pub}
			<!-- content here -->
			
				<Publication {...pub} />
			
		{/each}
	</ol>
	{:else}
		<b>...loading</b>
	{/if}
	