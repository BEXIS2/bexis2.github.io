<script>

import {onMount} from 'svelte'

import {
    Col,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle 
   } from 'sveltestrap';

export let title;
export let description;
export let icon="";

let iconpath = ""

onMount(() => {
  iconpath = "../../static/icons/"+icon
});

</script>

<Card class="mb-3" >
 <CardHeader>
   <CardTitle><img src="{"../../static/icons/"+icon}" alt="{icon}">{title}</CardTitle>
 </CardHeader>
 <CardBody>
   <CardText>
     {description}
   </CardText>
 </CardBody>
</Card>

<style>
  img{
    width: 2em;
  }
</style>