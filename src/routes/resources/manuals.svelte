<script>
import manualsJson from '../../data/manuals.json';
import MarkdownViewer from '$lib/components/MarkdownViewer.svelte'

import { TabContent, TabPane } from 'sveltestrap';

</script>

<svelte:head>
	<title>Manuals</title>
</svelte:head>

<div class="content">
		<TabContent>
			{#if manualsJson}
				 <!-- content here -->
					{#each manualsJson as manual}
						 <!-- content here -->
							<TabPane tabId="{manual.title}" tab="{manual.title}">
									<MarkdownViewer {...manual} />
							</TabPane>
					{/each}
			{/if}
		</TabContent>
</div>
