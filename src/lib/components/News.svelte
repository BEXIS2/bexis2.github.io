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

  export let id;
  export let author;
  export let date;
  export let title;
  export let content;
</script>

<Card class="mb-3" id="{id}">
  <CardHeader>
     <CardTitle>
      <a href="#{id}">{title}</a>
     </CardTitle>
  </CardHeader>
  <CardBody>
    {@html content}
  </CardBody>
  <CardFooter>
    <div class="text-end">
      at {date} by {author}
    </div>
  </CardFooter>
 </Card>