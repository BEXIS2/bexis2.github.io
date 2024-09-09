<script>
	import SvelteMarkdown from 'svelte-markdown';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Feature List</title>
</svelte:head>

<div><em>Note: this list is currently not further maintained. Please check our release note for the latest features.</em></div>

<div>
	<SvelteMarkdown source={data.doc} />
</div>

<style>
	tr {
		border: 1px solid gray;
	}
</style>
