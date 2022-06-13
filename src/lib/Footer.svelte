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
				<span>@2022 BEXIS 2</span> <a href={base + '/imprint'}>Imprint</a>
			</Col>
			<Col xs=4>
			</Col>
			<Col xs=4>
				<div class="text-end">
					<img src="{base + '/images/dfg_logo_schriftzug_gray.png'}" alt="dfg_logo" width="300px"/>
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
