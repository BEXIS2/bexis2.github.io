<script>
  export let author;
  export let date;
  export let title;
  export let content;
  export let summary;
</script>

<h2>{title}</h2>

{#if summary}
  <!-- content here -->
  <p>{@html summary}</p>
{/if}


<hr>