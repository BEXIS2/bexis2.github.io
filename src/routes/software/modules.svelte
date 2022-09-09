<script context="module">
 /** @type {import('./__types/[slug]').Load} */
 export async function load() {
   const url = `https://raw.githubusercontent.com/BEXIS2/Documents/master/System/modules_overview.md`;
   const response = await fetch(url);

   console.log("load releases");

   return {
     status: response.status,
     props: {
      modules: response.ok && (await response.text())
     }
   };
 }
</script>

<script>
import SvelteMarkdown from 'svelte-markdown'

export let modules="";

</script>

<svelte:head>
	<title>Modules</title>
</svelte:head>

<div>
<SvelteMarkdown source={modules}  />
</div>

