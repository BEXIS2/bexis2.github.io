<script context="module">
 /** @type {import('./__types/[slug]').Load} */
 export async function load() {
   const url = `https://raw.githubusercontent.com/BEXIS2/Documents/master/Guides/Installation/installation.md`;
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
	<title>Installation</title>
</svelte:head>

<div>
<SvelteMarkdown source={doc}  />
</div>
<style>
 td{
  text-align: left;
 }
</style>
