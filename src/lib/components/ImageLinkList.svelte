<script>
	import ImageLink from './ImageLink.svelte';
	import { Row, Col } from 'sveltestrap';

	export let title;
	export let description;
	export let list;
</script>

<h2>{title}</h2>
<p>{description}</p>

{#if list}
	<Row>
		<!-- content here -->
		{#each list as item}
			<!-- content here -->
			<Col><ImageLink {...item} /></Col>
		{/each}
	</Row>
{/if}
