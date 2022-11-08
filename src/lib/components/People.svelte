<script>
	import { base } from '$app/paths';

	export let name;
	export let position;
	export let address;
	export let phone;
	export let mail;
	export let image;
</script>

<div class="card" style="width: 18rem;">
	<img src="{base}/images/people/{image}" class="card-img-top" alt="..." />
	<div class="card-body">
		<h5 class="card-title">{name}</h5>
		<hr />
		<div class="position">{position}</div>
		<p class="card-text">
			{#if address}
				{address.name}<br />
				{address.street}<br />
				{address.postcode}, {address.city}<br />
			{/if}
		</p>
		<p class="card-text">{mail} <br /> {phone}</p>
	</div>
</div>

<style>
	.card {
		margin-top: 1rem;
	}
	.position {
		padding: 0 0 1rem 0;
		font-weight: 500;
	}
</style>
