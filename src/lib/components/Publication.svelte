<script>

 export let title=""
 export let authors=""
 export let source=""
 export let place=""
 export let date=""
 export let type=""
 export let abstract=""

 export let link;

 let expand=false;

</script>

{#if expand}
  <!-- content here -->
  <div class="publication-view" on:click={()=> expand = !expand}>

   <h2>{title}</h2>
   <i>{source}, {place}, {date}</i>
   
   <h3>{authors}</h3>

   <div class="abstract">{@html abstract}</div>
  
   <b>{type}</b> 
   {#if link != ""}
   : <a href="{link.url}">{link.name}</a>
   {/if}
   <br/>
   <br/>
  </div>
{:else}
  <!-- else content here -->
  <div class="publication-preview" on:click={()=> expand = !expand}>
   <h2>{title}</h2>
   <i>{source}, {place}, {date}</i>
   <div class="abstract preview">{@html abstract}</div>
  </div>
{/if}

<style>
 .publication-view,.publication-preview{
 
  border-bottom: 1px solid var(--text-color);
 }

 .publication-view:hover,.publication-preview:hover{
  border-bottom: 1px solid var(--accent-color);
 }

 h2:hover{
  color: var(--accent-color);
  cursor: pointer;
 }

.abstract
{
  margin: 1rem 0;

}

.preview
{
  /**Major Properties**/
  overflow:hidden;
  max-height: 4rem;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}

</style>


