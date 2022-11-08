<script>
	import Milestone from '$lib/components/Milestone.svelte';

	export let data;
</script>

<svelte:head>
	<title>Milestones</title>
</svelte:head>

{#if data.milestones}
	{#each data.milestones as milestone}
		<Milestone {...milestone} /> <br />
	{/each}
{/if}
{#if data.error}
	<p style="color: red">{data.error.message}</p>
{:else}
	<p>...waiting</p>
{/if}
