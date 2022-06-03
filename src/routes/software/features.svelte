<script>

	import {Row, Col} from 'sveltestrap';
	import Card from '$lib/components/Card.svelte';
	import endUserFeaturesJson from '../../data/end_user_features.json';
	import adminFeaturesJson from '../../data/admin_features.json';

	</script>
	
	
	<svelte:head>
		<title>Features</title>
	</svelte:head>
	
	
	 <h2>Features</h2>

		<p>BEXIS 2 is a free and open source software (LGPL 3.0) supporting researchers in managing their data throughout the entire data life cycle from data collection, 
			documentation, processing, analyzing, to sharing and publishing research data.</p>

		<p>BEXIS 2 is a modular scalable platform suitable for working groups and collaborative project consortia with up to several hundred researchers. 
			It has been designed to meet the requirements of researchers in the field of biodiversity, but it is generic enough to serve other communities as well.</p>
		
		<h2>End User Features</h2>
		<Row>
			{#if endUserFeaturesJson}
					<!-- content here -->
					{#each endUserFeaturesJson as feature}
							<!-- content here -->
							<Col xs=4>
								<Card {...feature}></Card>
							</Col>
					{/each}
			{:else}
			<b>not loaded</b>		
			{/if}
			</Row>
	
		<h2>System Admin / Data Manager Features</h2>

		<Row>
			{#if adminFeaturesJson}
					<!-- content here -->
					{#each adminFeaturesJson as feature}
							<!-- content here -->
							<Col xs=4>
								<Card {...feature}></Card>
							</Col>
					{/each}
			{:else}
			<b>not loaded</b>		
			{/if}
			</Row>


	<style>
	
	img{
		margin-bottom: 20px;
	}
	a{
		font-weight: bold;
	}
	
	</style>
	