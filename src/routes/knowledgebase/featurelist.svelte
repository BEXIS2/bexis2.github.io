<script context="module">
 /** @type {import('./__types/[slug]').Load} */
 export async function load() {
   const url = `https://raw.githubusercontent.com/BEXIS2/Documents/master/System/system%20functionalities.md`;
   const response = await fetch(url);

   return {
     status: response.status,
     props: {
      doc: response.ok && (await response.text())
     }
   };
 }
</script>

<script>
import SvelteMarkdown from 'svelte-markdown'

export let doc="";

</script>

<svelte:head>
	<title>Feature List</title>
</svelte:head>

<div>
<SvelteMarkdown source={doc}  />
</div>

<style>
 tr{
  border: 1px solid gray;
 }
</style>