<script>
  import NavBar from "../components/NavBar.svelte";

  import RecentActivity from "../components/RecentActivity.svelte";

  import Stats from "../components/Stats.svelte";

  import CompletionBar from "../components/CompletionBar.svelte";

  import Heading from "../components/Heading.svelte";
  import BoundingBox from "../components/BoundingBox.svelte";

  // export let name;
  // import StoryCard from "./StoryCard.svelte";
</script>

<BoundingBox>
  <NavBar />
  <Heading>Progress Update 🗓️</Heading>
  <CompletionBar />
  <Stats />
  <RecentActivity />

  <!-- <div class="my-10 text-xl">Walker Stories 📗</div>
    <div class="grid md:grid-cols-2 gap-5">
      <div class="md:hidden flex flex-col gap-5">
        <StoryCard type="image+text" />
        <StoryCard type="text" />
        <StoryCard />
      </div>
      <div class="hidden md:flex flex-col gap-5">
        <StoryCard type="image+text" />
        <StoryCard type="text" />
        <StoryCard />
      </div>
      <div class="hidden md:flex flex-col gap-5">
        <StoryCard type="image" />
        <StoryCard type="text" />
        <StoryCard type="image+text" />
      </div>
    </div> -->
</BoundingBox>
