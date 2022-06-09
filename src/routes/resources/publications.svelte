<script>

	import { Row, Col, TabContent, TabPane} from 'sveltestrap';

	import publications from '../../data/publications.json';
	import Publication from '$lib/components/Publication.svelte';

 	$:selectedPubs = publications;
 
	export let years=[];


</script>
	
	
	<svelte:head>
		<title>Publications</title>
	</svelte:head>

{#if selectedPubs}

	{#each selectedPubs as pub}
		<!-- content here -->
			<Publication {...pub}></Publication>
	{/each}
{:else}
 <b>...loading</b>
{/if}

	
