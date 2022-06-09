<script>
import manualsJson from '../../data/manuals.json';
import MarkdownViewer from '$lib/components/MarkdownView.svelte'

import { TabContent, TabPane, Spinner } from 'sveltestrap';

</script>

<svelte:head>
	<title>Manuals</title>
</svelte:head>

<div class="content">
	{#if manualsJson}
		<TabContent vertical pills>
		
				 <!-- content here -->
					{#each manualsJson as manual}
						 <!-- content here -->
							<TabPane tabId="{manual.title}" tab="{manual.title}">
									<MarkdownViewer {...manual} />
							</TabPane>
					{/each}
			
			</TabContent>
		{:else}
			<div style="width:100%; text-align:center">
				<Spinner color="primary"/>
		</div>
	{/if}
</div>

<style>
	.markdown-container{
		padding-top: 0px;
	}
</style>
