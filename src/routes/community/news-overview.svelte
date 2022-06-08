<script>
	import newsJson from '../../data/news.json';
 import News from '$lib/components/News.svelte'

	</script>

<svelte:head>
 <title>News</title>
</svelte:head>

{#if newsJson}

{#each newsJson as n}
	 <!-- content here -->
		<News {...n}></News>
{/each}

{/if}