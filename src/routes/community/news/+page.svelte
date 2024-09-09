<script>
	import newsJson from '../../../data/news.json';
	import News from '$lib/components/News.svelte';
	import { Row, Col, Card } from 'sveltestrap';

	let result = newsJson
		.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
		.reverse();
</script>

<svelte:head>
	<title>News</title>
</svelte:head>

<Row>
	{#if result}
		{#each result as news}
			<Col xs="12">
				<News {...news} />
			</Col>
		{/each}
	{:else}
		<Col xs="12">Nothing to show...</Col>
	{/if}
</Row>
