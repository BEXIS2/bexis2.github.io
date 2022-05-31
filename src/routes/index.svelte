<script>

import { Container, Row, Col} from 'sveltestrap';
import Card from '../components/card.svelte'
import { faBars, faPlay, faDownload } from '@fortawesome/free-solid-svg-icons'
</script>


<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="content">
<Container>

 <img src="../../static/images/Bexis_Home_Header.gif" alt="banner" width="100%"/>
 <img src="../../static/icons/bookmarks_FILL0_wght400_GRAD0_opsz48.svg" alt="banner" width="100%"/>

 <Row>
  <Col xs=4>
   <Card title="Feature" icon={faBars}>
    BEXIS 2 supports a broad range of data structures, data types and more. Take a look at all <a href="/features">BEXIS 2 features</a>.
   </Card>
  </Col>
  <Col xs=4>
   <Card title="Demo" icon={faPlay} >
    Get familiar with BEXIS 2 environment and try out its useful features. <a href="https://demo.bexis2.uni-jena.de/" target="_blank">See the latest version in action!</a>
   </Card>
  </Col>
  <Col xs=4>
   <Card title="Latest Releases" icon={faDownload}>
    Manage your research data now. BEXIS is easy to run and simple to maintain. Download the latest version of BEXIS 2.
   </Card>
  </Col>
 </Row>
 

</Container>
</div>

<style>

img{
 margin-bottom: 20px;
}
a{
 font-weight: bold;
}

</style>
