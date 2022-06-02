<script>

import { Row, Col} from 'sveltestrap';
import Card from '$lib/components/Card.svelte'
import { base } from '$app/paths';
</script>


<svelte:head>
	<title>Home</title>
</svelte:head>

<img src="{base +'/images/Bexis_Home_Header.gif'}" alt="banner" width="100%"/>

<Row>
 <Col xs=4>
  <Card title="Feature">
   BEXIS 2 supports a broad range of data structures, data types and more. Take a look at all <a href="{base+'/software/features'}">BEXIS 2 features</a>.
  </Card>
 </Col>
 <Col xs=4>
  <Card title="Demo">
   Get familiar with BEXIS 2 environment and try out its useful features. <a href="https://demo.bexis2.uni-jena.de/" target="_blank">See the latest version in action!</a>
  </Card>
 </Col>
 <Col xs=4>
  <Card title="Latest Releases">
   Manage your research data now. BEXIS is easy to run and simple to maintain. Download the latest version of BEXIS 2.
  </Card>
 </Col>
</Row>


<style>

img{
 margin-bottom: 20px;
}


</style>
