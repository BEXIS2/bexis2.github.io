<script>
	export let title;
	export let url;
	export let slides;
</script>

<div class="w-100">
<h3>{title}</h3>


<iframe  src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

{#if slides}

<p>Slides of this talk are available on <a href={slides}>SlideShare</a></p>

{/if}

</div>