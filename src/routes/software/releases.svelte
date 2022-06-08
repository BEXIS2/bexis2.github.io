<script context="module">
 /** @type {import('./__types/[slug]').Load} */
 export async function load() {
   const url = 'https://api.github.com/repos/BEXIS2/Core/releases';
   const response = await fetch(url);

   console.log("load releases");

   return {
     status: response.status,
     props: {
       bexis2releases: response.ok && (await response.json())
     }
   };
 }
</script>


<script>
import { TabContent, TabPane } from 'sveltestrap';
import Release from '$lib/components/Release.svelte';

export let bexis2releases="";

</script>

<svelte:head>
	<title>Releases</title>
</svelte:head>

{#await bexis2releases}
	<p>...waiting</p>
{:then releases}

<div class="content">
  <TabContent vertical pills>
    {#if releases}
       <!-- content here -->
        {#each releases as release}
           <!-- content here -->
            <TabPane tabId="{release.id}" tab="{release.tag_name}">
              <Release {...release}> </Release>
            </TabPane>
        {/each}
    {/if}
  </TabContent>
</div>



{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

