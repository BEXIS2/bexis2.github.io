<script>
	import Publication from '$lib/components/Publication.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Publications</title>
</svelte:head>

{#if data}
	<ol>
		{#each data.body as pub}
			<Publication {...pub} />
		{/each}
	</ol>
{:else}
	<b>...loading</b>
{/if}
