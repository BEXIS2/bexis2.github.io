<script>
	import jobs from '../../../data/jobs.json';
	import Job from '$lib/components/Job.svelte';
</script>

<h1>Jobs</h1>

{#if jobs}
	<!-- content here -->
	{#each jobs as job}
		<!-- content here -->
		<Job {...job} />
	{/each}
{/if}
