<script>
	import newsJson from '../data/news.json';
	import { Row, Col } from 'sveltestrap';
	import Card from '$lib/components/Card.svelte';
	import { base } from '$app/paths';

	let result = newsJson
		.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
		.reverse();
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<img src={base + '/images/Bexis_Home_Header.gif'} alt="banner" width="100%" />

<Row>
	<Col xs="12" sm="6" md="4">
		<Card title="Feature">
			BEXIS 2 supports a broad range of data structures, data types and more. Take a look at all <a
				href={base + '/software/features'}>BEXIS 2 features</a
			>.
		</Card>
	</Col>
	<Col xs="12" sm="6" md="4">
		<Card title="Demo">
			Get familiar with BEXIS 2 environment and try out its useful features. <a
				href="https://demo.bexis2.uni-jena.de/"
				target="_blank">See the latest version in action!</a
			>
		</Card>
	</Col>
	<Col xs="12" sm="6" md="4">
		<Card title="Latest Releases">
			Manage your research data now. BEXIS is easy to run and simple to maintain. <a
				href="{base}/software/releases"
				>Download the latest version
			</a> of BEXIS 2.
		</Card>
	</Col>
	<Col xs="12" sm="12" md="12">
		<Card title="News">
			{#if newsJson}
				{#each result as news, i}
					{#if i < 3}
						<div><a href="{base}/community/news/#{news.id}">[{news.date}] {news.title}</a></div>
					{/if}
				{/each}
			{:else}
				<p>Nothing to show...</p>
			{/if}
		</Card>
	</Col>
</Row>

<style>
	img {
		margin-bottom: 20px;
	}
</style>
