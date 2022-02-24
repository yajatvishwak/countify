<script>
  import RecentCard from "./RecentCard.svelte";
  // export let name;
  // import StoryCard from "./StoryCard.svelte";
</script>

<div class="my-10 text-xl font-bold">
  Recent Activites🏃‍♀️🏃‍♂️ <div class="badge mx-2 badge-secondary">NEW</div>
</div>

<div class="flex flex-col gap-5">
  <RecentCard />
  <RecentCard />
  <RecentCard />
  <RecentCard />
  <RecentCard />
</div>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @import url("https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap");
  * {
    font-family: "Space Mono", monospace !important;
  }
</style>
