<script>

import team from '../../data/team.json'
import People from '$lib/components/People.svelte';
import {Row, Col} from 'sveltestrap'

</script>

<h2>People</h2>

<h3>BEXIS2 Core Team</h3>

<Row>
{#if team}
  <!-- content here -->
  {#each team as member}
    <!-- content here -->
    <Col><People {...member} /></Col>
  {/each}
{/if}
</Row>