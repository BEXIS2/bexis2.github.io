<script>
	import Release from '$lib/components/Release.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Releases</title>
</svelte:head>

{#if data.bexis2releases}
	{#each data.bexis2releases as release}
		<Release {...release} /> <br />
	{/each}
{/if}
{#if data.error}
	<p style="color: red">{data.error.message}</p>
{:else}
	<p>...waiting</p>
{/if}
