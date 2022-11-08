<script>
	export let title;
	export let url;
	export let slides;
</script>

<h3>{title}</h3>

<iframe
	src={url}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
/>

<p>Slides of this talk are available on <a href={slides}>SlideShare</a></p>
