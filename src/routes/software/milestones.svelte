<script context="module">
 /** @type {import('./__types/[slug]').Load} */
 export async function load() {
   const url = 'https://api.github.com/repos/BEXIS2/Core/milestones';
   const response = await fetch(url);

   console.log("load milestones");

   const milestones = response.ok && (await response.json())
   let x =milestones.filter(m=>m.due_on!=null);
   console.log(x);
   return {
     status: response.status,
     props: {
      milestones: x
     }
   };
 }
</script>


<script>

import Milestone from '$lib/components/Milestone.svelte';

export let milestones="";

</script>


<svelte:head>
	<title>Milestones</title>
</svelte:head>
{#await milestones}
	<p>...waiting</p>
{:then milestones}
  {#if milestones}
   {#each milestones as milestone}
      <Milestone {...milestone} > </Milestone> <br>
   {/each}
  {/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

