<script>

import SvelteMarkdown from 'svelte-markdown'

export let name;
export let body;

</script>

<h2>{name}</h2>

<p>
 <SvelteMarkdown source={body} />
</p>

<style>
 h2{
  padding-top: 0;
 }
 
</style>