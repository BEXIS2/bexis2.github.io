<script>
	import { Row, Col, Card, CardBody, Progress } from 'sveltestrap';
	import { base } from '$app/paths';

	export let id;
	export let title;
	export let description;
	export let creator;
	export let html_url;

	export let open_issues;
	export let closed_issues;

	export let updated_at;
	export let due_on;

	// progress
	var num = (closed_issues * 100) / (open_issues + closed_issues);
	let progress = num.toFixed(2);

	// date
	var now = new Date(); // Current date now.
	var last = new Date(updated_at); // Start of 2010.
	var d = (now - last) / 1000 / 60 / 60 / 24; // Difference in milliseconds.
	console.log(d.toFixed(0));
	console.log({ base });
</script>

<Card>
	<CardBody>
		<h1 {id}><a href={html_url} target="_blank">{title}</a></h1>

		<Row>
			<Col xs="5" sm="5" md="5"
				><h3>
					<img src={creator.avatar_url} style="width:20px" />
					<a href={creator.html_url}>{creator.login}</a>
				</h3></Col
			>
			<Col xs="7" sm="7" md="7">
				<div class="text-end">
					<div class="milestone-calendar">
						<img src="{base}/icons/calendar_month_FILL0_wght400_GRAD0_opsz24.svg" alt="calendar" />
						{due_on.split('T')[0]}
					</div>
					<div class="milestone-schedule">
						<img src="{base}/icons/schedule_FILL0_wght400_GRAD0_opsz24.svg" alt="schedule" />
						Latest update {d.toFixed(0)} days ago
					</div>
				</div>
			</Col>
		</Row>

		<hr />

		<p class="milestone-description">
			{@html description}
		</p>

		<Progress value={progress} />
		<div class="stats">
			<div class="stat">
				<span class="stat-value">{progress}%</span>
				<span class="stat-label">complete</span>
			</div>

			<div class="stat">
				<span class="stat-value">{closed_issues}</span>
				<span class="stat-label">closed</span>
			</div>

			<div class="stat">
				<span class="stat-value">{open_issues}</span>
				<span class="stat-label">open</span>
			</div>
		</div>
	</CardBody>
</Card>

<style>
	.stat {
		float: left;
		margin-right: 1em;
		margin-top: 0.5em;
	}
	.stat-value {
		font-weight: 500;
	}

	.milestone-description {
		white-space: pre-line;
	}
</style>
