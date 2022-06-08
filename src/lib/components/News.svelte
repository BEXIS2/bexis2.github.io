<script>
 export let title;
 export let summary;
</script>

<h2>{title}</h2>

{#if summary}
  <!-- content here -->
  <p>{@html summary}</p>
{/if}


<hr>