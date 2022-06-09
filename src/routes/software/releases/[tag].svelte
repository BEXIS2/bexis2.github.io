<script context="module">
 /** @type {import('./__types/[slug]').Load} */
 export async function load({params}) {
   const url = 'https://api.github.com/repos/BEXIS2/Core/releases';
   const response = await fetch(url);

   console.log("load releases");

   return {
     status: response.status,
     props: {
      ...params,
      bexis2releases: response.ok && (await response.json())
     }
   };
 }
</script>


<script>

import { TabContent, TabPane, Spinner } from 'sveltestrap';
import Release from '$lib/components/Release.svelte';

export let tag="";
export let bexis2releases="";

</script>


<svelte:head>
	<title>Releases</title>
</svelte:head>

{#await bexis2releases}
	<p>...waiting</p>
{:then releases}

{#if tag}
  <div class="content">
    <TabContent vertical pills>
      {#if releases}
        <!-- content here -->
          {#each releases as release, i}
            <!-- content here -->
              <TabPane tabId="{release.id}" tab="{release.tag_name}" active={tag==="latest"?i===0:release.tag_name===tag}>
                <Release {...release} > </Release>
              </TabPane>
          {/each}
      {/if}
    </TabContent>
  </div>
{:else}
<div style="width:100%; text-align:center">
  <Spinner color="primary"/>
</div>
{/if}

{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

