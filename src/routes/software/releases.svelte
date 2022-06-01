<script context="module">
 /** @type {import('./__types/[slug]').Load} */
 export async function load() {
   const url = `https://api.github.com/repos/BEXIS2/Core/releases`;
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
import { Row,Col, ListGroup, ListGroupItem } from 'sveltestrap';
import Release from '../../components/Release.svelte';

export let bexis2releases="";

export let selected = bexis2releases[0];

function onClickHandler(e)
{
 console.log(e);

 selected = bexis2releases.filter(r=>r.id == e)[0]
 console.log(selected);
}


</script>

<svelte:head>
	<title>Releases</title>
</svelte:head>

{#await bexis2releases}
	<p>...waiting</p>
{:then releases}

<Row>
 <Col xs=2>
  <ListGroup>
   {#each releases as release}
     <ListGroupItem tag="Button" active={release.id==selected.id}  on:click={()=>onClickHandler(release.id)}> <span id={release.id}>{release.name}</span> </ListGroupItem>
   {/each}
 </ListGroup>
 </Col>
 <Col>
 <Release {...selected}> </Release>

 </Col>
</Row>

{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

