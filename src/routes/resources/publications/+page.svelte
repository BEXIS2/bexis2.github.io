<script>
	import Publication from '$lib/components/Publication.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Publications</title>
</svelte:head>

<h1>Publications</h1>

{#if data}

		{#each data.body as pub}
			<Publication {...pub} />
		{/each}

{:else}
	<b>...loading</b>
{/if}
