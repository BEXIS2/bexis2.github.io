<script>
	export let title;
	export let url;
	export let image = '';

	import { base } from '$app/paths';
</script>

<a href={url} target="_blank" {title}>
	<img src="{base}/images/{image}" alt={title} width="150px" />
</a>
