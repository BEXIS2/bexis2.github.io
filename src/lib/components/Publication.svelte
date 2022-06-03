<script>

 export let title=""
 export let authors=""
 export let source=""
 export let place=""
 export let date=""
 export let type=""
 export let abstract=""

 let expand=false;

</script>

{#if expand}
  <!-- content here -->
  <div class="publication-view" on:click={()=> expand = !expand}>

   <h2>{title}</h2>
   <h3>{authors}</h3>
   <b>{source}</b>
   <p>{abstract}</p>
  
  </div>
{:else}
  <!-- else content here -->
  <div class="publication-preview" on:click={()=> expand = !expand}>
   <h2>{title}</h2>
   <i>{source}, {place}, {date}</i>
  </div>
{/if}

<style>
 .publication-view,.publication-preview{
  cursor: pointer;
  
 }

 h2:hover{
  color: var(--accent-color);
 }
</style>


