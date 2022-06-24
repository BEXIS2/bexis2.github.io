<script>
	import newsJson from '../../data/news.json';
 	import News from '$lib/components/News.svelte'
	import {Row, Col, Card} from 'sveltestrap';
</script>

<svelte:head>
 <title>News</title>
</svelte:head>

<Row>
	{#if newsJson}

		{#each newsJson as news}
				<Col xs=12>
					<News {...news}></News>
				</Col>
		{/each}

	{:else}

	<Col xs=12>
		Nothing to show...
	</Col>

	{/if}
</Row>