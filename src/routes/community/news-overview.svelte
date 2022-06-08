<script>
	import news from '../../data/news.json';
 // import News from '$lib/components/News.svelte'

	</script>

<svelte:head>
 <title>News</title>
</svelte:head>

{#if news}

{#each news as n}
	 <!-- content here -->
		<!-- <News {...n}></News> -->
{/each}

{/if}