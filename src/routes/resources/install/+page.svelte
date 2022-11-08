<script>
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
</script>

<svelte:head>
	<title>Installation</title>
</svelte:head>

<div>
	<SvelteMarkdown source={data.doc} />
</div>

<style>
	td {
		text-align: left;
	}
</style>
