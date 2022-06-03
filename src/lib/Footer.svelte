<script>
	import { base } from '$app/paths';
	import {Row, Col} from 'sveltestrap'
</script>



<footer>
	<div>
		<hr />
		<Row>
			<Col xs=4>
				<a href="https://www.fusion.uni-jena.de/">FUSION: Heinz-Nixdorf Endowed Chair for Distributed Information Systems</a>
				<br/>
				<a href="https://www.uni-jena.de/">Friedrich Schiller University of Jena</a>
				<br/>
				<br/>
				<span>@2022 BEXIS2</span> <a href={base + '/imprint'}>Imprint</a>
			</Col>
			<Col>
				<div class="text-end">
					<img src="{base + '/images/dfg_logo_schriftzug_gray.png'}" alt="dfg_logo" width="300px"/>
				</div>
			</Col>
		</Row>
	
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		font-size: x-small;
	}

	footer a {
		color: gray;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
