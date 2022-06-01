<script>

import { base } from '$app/paths';

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


</script>

<Card class="mb-3" >
 <CardHeader>
    <CardTitle>
     {#if icon!=""}<img src="{base+"/icons/"+icon}" alt="{icon}">{/if}
     {title}
    </CardTitle>
 </CardHeader>
 <CardBody>
   <CardText>
     <slot>
     {description}
    </slot>
   </CardText>
 </CardBody>
</Card>

<style>
  img{
    width: 2em;
  }
</style>