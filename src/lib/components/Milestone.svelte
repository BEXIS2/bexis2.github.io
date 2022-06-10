<script>


import {Row,Col, Card, CardBody, Progress} from 'sveltestrap'

export let id;
export let title;
export let description;
export let creator;
export let html_url;

export let open_issues;
export let closed_issues;

var num = (closed_issues*100)/(open_issues+closed_issues)
let progress = num.toFixed(2);

</script>

<Card>
<CardBody>
<h1 {id}><a href="{html_url}" target="_blank">{title}</a></h1>

<Row>
 <Col xs=2><h3><img src={creator.avatar_url} style="width:20px"/>  <a href={creator.html_url}>{creator.login}</a> </h3></Col>
 <Col xs=8></Col>
 <Col xs=2>
  <!-- {#if published_at}
    <div class="text-end" >{published_at.split('T')[0]}</div>
  {/if} -->
</Col>
</Row>


<hr>

<p class="milestone-description">
 {@html description}
</p>


<Progress value={progress}></Progress>
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
  .stat{
    float:left;
    margin-right: 1em;
    margin-top: 0.5em;
  }
  .stat-value{
    font-weight: 500;
  }

  .milestone-description
  {
    white-space: pre-line
  }
</style>