<script>
	export let title;
	export let description;
	export let deadline;
	export let external;
	export let contact;
</script>

<h2>{title}</h2>

<div>
	{@html description}
</div>

{#if deadline}
	<div>Deadline : {deadline}</div>
{/if}

{#if contact}
	<div>{contact.name} : {contact.email}</div>
{/if}

{#if external}
	<div>More information <a href={external}>here</a></div>
{/if}
