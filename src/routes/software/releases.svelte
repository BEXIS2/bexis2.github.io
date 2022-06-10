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

import Release from '$lib/components/Release.svelte';

export let bexis2releases="";

</script>


<svelte:head>
	<title>Releases</title>
</svelte:head>



{#await bexis2releases}
	<p>...waiting</p>
{:then releases}
  {#if releases}
   {#each releases as release}
      <Release {...release} > </Release> <br>
   {/each}
  {/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

