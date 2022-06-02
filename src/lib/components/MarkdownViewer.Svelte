<script>

import {onMount} from 'svelte'
import SvelteMarkdown from 'svelte-markdown'
export let url="";

$:file = null;

onMount(()=>{
 load();
})

async function load()
{
  const response = await fetch(url);
  file = response.ok && (await response.text())
}

</script>

{#if file}
  <!-- content here -->
  <div class="markdown-container">
   <SvelteMarkdown source={file}  />
  </div>
{:else}
  <!-- else content here -->
  <b>...loading</b>
{/if}

<style>
 .markdown-container{
  padding-top: 2em;
 }
</style>
