<script>
	import { base } from '$app/paths';
	import { Row, Col } from 'sveltestrap';
</script>

<footer>
	<div>
		<hr />
		<Row>
			<Col xs="3">
				<a href="https://www.fusion.uni-jena.de/"
					>FUSION: Heinz-Nixdorf Endowed Chair for Distributed Information Systems</a
				>
				<br />
				<a href="https://www.uni-jena.de/">Friedrich Schiller University of Jena</a>
				<br />
				<br />
				<span>@2024 BEXIS2</span> <a href={base + '/imprint'}>Imprint</a>
			</Col>
			<Col xs="1"></Col>
			<Col xs="8">
				<Row style="padding-bottom:10px">
					<Col xs="6">
						<div>
							<img src={base + '/images/dfg_logo_schriftzug_gray.png'} alt="dfg_logo" width="300px" />
						</div>
					</Col>
					<Col xs="6">
						<div class="text-end">		
							<img src={base + '/images/NFDI4Biodiversity.png'} alt="nfdi4bio_logo" width="300px" />
						</div>
					</Col>
				</Row>
				<div class="text-end">
					This work was supported by the German Research Foundation (DFG) within the project “Establishment of the National Research Data Infrastructure (NFDI)” in the consortium NFDI4Biodiversity (project number 442032008).
				</div>
			</Col>
			
		</Row>
	</div>
</footer>

<style>
	footer {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
		font-size: x-small;
	}

	footer a {
		/* color: gray; */
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
