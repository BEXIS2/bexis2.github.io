<script>

	import { Row, Col} from 'sveltestrap';

	import publications from '../../data/publications.json';
	import Publication from '$lib/components/Publication.svelte';


 let selected = "";


	</script>
	
	
	<svelte:head>
		<title>Publications</title>
	</svelte:head>
		<Row>
			{#if publications}
					<!-- content here -->
					{#each publications as publication}
							<!-- content here -->
							<Col xs=12>
        <Publication {...publication} ></Publication>
        <hr>
							</Col>
					{/each}
			{:else}
			<b>not loaded</b>		
			{/if}
	</Row>
