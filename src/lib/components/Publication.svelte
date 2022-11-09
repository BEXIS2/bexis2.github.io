<script>
	import Cite from './Cite.svelte';

	export let TITLE = '';
	export let AUTHORS = '';
	export let SOURCE = '';
	export let PLACE = '';
	export let DATE = '';
	export let YEAR = '';
	export let TYPE = '';
	export let ABSTRACT = '';
	export let URL = '';
	export let NAME = '';
	export let key = '';

	let expand = false;

	let citeText =
		'@' +
		TYPE.replace(' ', '').toLowerCase() +
		'{' +
		key +
		',' +
		'<br>&nbsp title:' +
		TITLE +
		',' +
		'<br>&nbsp author:' +
		AUTHORS +
		',' +
		'<br>&nbsp source:' +
		SOURCE +
		',' +
		'<br>&nbsp place:' +
		PLACE +
		',' +
		'<br>&nbsp date:' +
		DATE +
		',' +
		'<br>&nbsp year:' +
		YEAR +
		',' +
		'<br>&nbsp type:' +
		TYPE +
		',' +
		'<br>&nbsp abstract:' +
		ABSTRACT +
		'<br>}';
</script>

{#if expand}
	<!-- content here -->
	<div class="publication-view" on:click={() => (expand = !expand)}>
		<h2>{TITLE}</h2>
		<h3>{AUTHORS}</h3>
		<!--<Cite {citeText} />-->
		<i>{SOURCE}, {PLACE}, {DATE}</i>
		<div class="abstract">{@html ABSTRACT}</div>
		<b>{TYPE}</b>
		{#if URL != ''}
			: <a href={URL} target="blank">{NAME}</a>
		{/if}

		<br />
		<br />
	</div>
{:else}
	<!-- else content here -->
	<div class="publication-preview" on:click={() => (expand = !expand)}>
		<h2>{TITLE}</h2>
		<h3>{AUTHORS}</h3>
		<!--<Cite {citeText} />-->
		<i>{SOURCE}, {PLACE}, {DATE}</i>
		<div class="abstract preview">{@html ABSTRACT}</div>
	</div>
{/if}

<style>
	.publication-view,
	.publication-preview {
		border-bottom: 1px solid var(--text-color);
	}

	.publication-view:hover,
	.publication-preview:hover {
		border-bottom: 1px solid var(--accent-color);
	}

	h2:hover {
		color: var(--accent-color);
		cursor: pointer;
	}

	.abstract {
		margin: 1rem 0;
	}

	.preview {
		/**Major Properties**/
		overflow: hidden;
		max-height: 4rem;
		-webkit-box-orient: vertical;
		display: block;
		display: -webkit-box;
		overflow: hidden !important;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
	}
</style>
