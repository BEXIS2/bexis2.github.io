<script>

import {Row,Col} from 'sveltestrap'
import TechTalks from '$lib/components/TechTalk.svelte'
import TechTalk from '$lib/components/TechTalk.svelte'

</script>
<svelte:head>
	<title>BEXIS 2 Tech Talk Series</title>
</svelte:head>

<div class="content">

<h2>BEXIS 2 Tech Talk Series</h2>

<p>The idea of this series of talks is to gather the knowledge needed to develop the BEXIS 2 data management platform. So the talks are geared towards software engineers and developers.</p>
<p>The talks are available from the Digital Library Thuringia and on Youtube:</p>

<Row>
 <Col>
  <TechTalk 
  title = "#8 Implementation Notes (13/01/2017)"
  url = "https://www.youtube.com/embed/mIiCS9Jg9X4"
  slides = "http://de.slideshare.net/javadch/2-the-conceptual-model"
  />
 </Col>
 <Col>
  <TechTalk 
  title = "#7 Source Control and Release Management (28/10/2016)"
  url = "https://www.youtube.com/embed/pEfUpovHY7A"
  slides = "http://www.slideshare.net/javadch/7-source-control-and-release-management"
  />
 </Col>
 <Col>
  <TechTalk 
  title = "#6 UI Structure and Web API (26/08/2016)"
  url = "https://www.youtube.com/embed/om_Ebf36zM4"
  slides = "http://de.slideshare.net/javadch/6-the-ui-structure-and-the-web-api"
  />
 </Col>
 <Col>
  <TechTalk 
  title = "#5 The Extensibility of BEXIS 2 (09/06/2016)"
  url = "https://www.youtube.com/embed/sLTAmQLTSBA"
  slides = "http://de.slideshare.net/JavadChamanara/5-bexis-extensibility"
  />
 </Col>
 <Col>
  <TechTalk 
  title = "#4 The 3rd Party Libraries (28/04/2016)"
  url = "https://www.youtube.com/embed/235Lf2WF-t0"
  slides = "http://de.slideshare.net/javadch/2-the-conceptual-model"
  />
 </Col>
 <Col>
  <TechTalk 
  title = "#3 The System Architecture (18/03/2016)"
  url = "https://www.youtube.com/embed/txLIDgEn59M"
  slides = "http://de.slideshare.net/javadch/3-the-system-architecture"
  />
 </Col>
 <Col>
  <TechTalk 
  title = "#2 The Conceptual Model (29/01/2016)"
  url = "https://www.youtube.com/embed/tqjJ56Pjp0I"
  slides = "http://de.slideshare.net/javadch/3-the-system-architecture"
  />
 </Col>
 <Col>
  <TechTalk 
  title = "#1 The Big Picture (16/12/2015)"
  url = "https://www.youtube.com/embed/ANGAVoZHTII"
  slides = "http://de.slideshare.net/javadch/3-the-system-architecture"
  />
 </Col>
</Row>









</div>