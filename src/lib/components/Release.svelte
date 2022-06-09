<script>

import { base } from '$app/paths';
import SvelteMarkdown from 'svelte-markdown'
import {Row,Col} from 'sveltestrap'

export let name;
export let body;
export let author;
export let tag_name;
export let html_url;
export let published_at;
export let assets;


</script>

<h1><a href="{html_url}" target="_blank">{name}</a></h1>

<Row>
 <Col xs=4><h3><img src={author.avatar_url} style="width:20px"/>  <a href={author.html_url}>{author.login}</a> </h3></Col>
 <Col xs=2><a href={html_url} target="_blank"><img src="{base+"/icons/label_black_24dp.svg"}" alt="label"> {tag_name}</a></Col>
 <Col xs=6 >
 <div class="text-end" >{published_at}</div></Col>
</Row>


<hr>

<p>
 <SvelteMarkdown source={body} />
</p>

<hr>
<h2>Assets</h2>
{#each assets as asset}
  <!-- content here -->
  <div>
   <h3><a href={asset.browser_download_url}>{asset.name}</a></h3>
  </div>
{/each}

<style>
 h2{
  padding-top: 0;
 }
</style>