<script>
	import { Row, Col } from 'sveltestrap';
	import TechTalk from '$lib/components/TechTalk.svelte';

</script>

<svelte:head>
	<title>BEXIS2 Tech Talk Series</title>
</svelte:head>

<div class="content">
	<h2>Get Started with BEXIS2</h2>

	<p>Our introductory videos offer a quick and easy way to get started with the software.</p>

	<Row>
		<Col>
			<TechTalk
			title="BEXIS2 - Eine kostenlose, quelloffene Software unterstützt Forschende bei der Datenverwaltung"
			url="https://www.youtube.com/embed/tyqpHj5AGKY?si=9Ile0fIRN_2VlfKq"
			/>
		</Col>
		<Col>
			<TechTalk
				title="Bridging Data and People: BEXIS2 Through Two Lenses"
				url="https://www.youtube.com/embed/iYxLBBrwduk?si=H9VS7r5i2N0Smz0u"
				/>
			</Col>
			<!-- <Col>
			<TechTalk
				title="BEXIS2 - Funktionale Übersicht und Demo. 06.09.2024"
				url="https://www.youtube.com/embed/_tVMBIAekGw?si=5BQov5Td3F5BRlEg"
				/>
			</Col> -->
			<!-- <Col>
			<TechTalk
				title="BEXIS2 - Forschungsdatenmanagement in Verbundprojekten"
				url="https://www.youtube.com/embed/TtLm_1mf3LU?si=uS_dBWsoiLOhqIAN"
			/>
		</Col> -->

</Row>

	<h2>Deep Dives for Experts</h2>

	<p>
		The videos about the BEXIS2 architecture are a bit older, but they still provide a great technical overview of the software.
	</p>
	<p>The talks are available from the Digital Library Thuringia and on Youtube:</p>

	<Row>
		<Col>
			<TechTalk
				title="#8 Implementation Notes (13/01/2017)"
				url="https://www.youtube.com/embed/mIiCS9Jg9X4"
				slides="http://de.slideshare.net/javadch/2-the-conceptual-model"
			/>
		</Col>
		<Col>
			<TechTalk
				title="#7 Source Control and Release Management (28/10/2016)"
				url="https://www.youtube.com/embed/pEfUpovHY7A"
				slides="http://www.slideshare.net/javadch/7-source-control-and-release-management"
			/>
		</Col>
		<Col>
			<TechTalk
				title="#6 UI Structure and Web API (26/08/2016)"
				url="https://www.youtube.com/embed/om_Ebf36zM4"
				slides="http://de.slideshare.net/javadch/6-the-ui-structure-and-the-web-api"
			/>
		</Col>
		<Col>
			<TechTalk
				title="#5 The Extensibility of BEXIS2 (09/06/2016)"
				url="https://www.youtube.com/embed/sLTAmQLTSBA"
				slides="http://de.slideshare.net/JavadChamanara/5-bexis-extensibility"
			/>
		</Col>
		<Col>
			<TechTalk
				title="#4 The 3rd Party Libraries (28/04/2016)"
				url="https://www.youtube.com/embed/235Lf2WF-t0"
				slides="http://de.slideshare.net/javadch/2-the-conceptual-model"
			/>
		</Col>
		<Col>
			<TechTalk
				title="#3 The System Architecture (18/03/2016)"
				url="https://www.youtube.com/embed/txLIDgEn59M"
				slides="http://de.slideshare.net/javadch/3-the-system-architecture"
			/>
		</Col>
		<Col>
			<TechTalk
				title="#2 The Conceptual Model (29/01/2016)"
				url="https://www.youtube.com/embed/tqjJ56Pjp0I"
				slides="http://de.slideshare.net/javadch/3-the-system-architecture"
			/>
		</Col>
		<Col>
			<TechTalk
				title="#1 The Big Picture (16/12/2015)"
				url="https://www.youtube.com/embed/ANGAVoZHTII"
				slides="http://de.slideshare.net/javadch/3-the-system-architecture"
			/>
		</Col>
	</Row>
</div>
