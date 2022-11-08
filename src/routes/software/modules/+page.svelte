<script>
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
</script>

<svelte:head>
	<title>Modules</title>
</svelte:head>

<div>
	<SvelteMarkdown source={data.modules} />
</div>
