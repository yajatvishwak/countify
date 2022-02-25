<script>
  import ContributorCard from "../components/ContributorCard.svelte";

  import NavBar from "../components/NavBar.svelte";
  import Heading from "../components/Heading.svelte";
  import BoundingBox from "../components/BoundingBox.svelte";
  import { onMount } from "svelte";
  import { getContributorsList } from "../supabaseClient";
  let contributors;
  let loading = true;
  onMount(async () => {
    contributors = await getContributorsList();
    loading = false;
  });
  // export let name;
  // import StoryCard from "./StoryCard.svelte";
</script>

{#if loading}
  loading...
{:else}
  <BoundingBox>
    <NavBar />
    <Heading>Contributors</Heading>
    <div class="my-10 gap-5 grid md:grid-cols-2">
      {#each contributors as c, i}
        <ContributorCard
          name={c.username}
          kms={c.totalDistance}
          img={c.avatar}
          type={i === 0 ? 1 : i === 1 ? 2 : i === 3 ? 3 : -1}
        />
      {/each}
    </div>
  </BoundingBox>
{/if}
