<script>

import team from '../../data/team.json'
import former from '../../data/formermembers.json'
import contributer from '../../data/contributer.json'
import People from '$lib/components/People.svelte';
import {Row, Col} from 'sveltestrap'

</script>

<h2>BEXIS2 Core Team</h2>

<Row>
{#if team}
  <!-- content here -->
  {#each team as member}
    <!-- content here -->
    <Col><People {...member} /></Col>
  {/each}
{/if}
</Row>

<br>
<hr>
<br>

<h2>Contributer</h2>

<Row>
{#if contributer}
  <!-- content here -->
  {#each contributer as con}
    <!-- content here -->
    <Col><People {...con} /></Col>
  {/each}
{/if}
</Row>

<br>
<hr>
<br>

<h2>Former Members</h2>

<Row>
{#if former}
  <!-- content here -->
  {#each former as member}
    <!-- content here -->
    <Col><People {...member} /></Col>
  {/each}
{/if}
</Row>