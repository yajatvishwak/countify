<script>
  export let covered = 0;
  export let percentageLeft = 0;
  export let contributors = 0;
</script>

<div class="mt-10 ">
  <div class="w-full grid-flow-row lg:grid-flow-col shadow stats">
    <div class="stat place-items-center place-content-center">
      <div class="stat-title">Total Distance Covered</div>
      <div class="stat-value">{covered} KM</div>
      <!-- <div class="stat-desc">Woah 👀🤯</div> -->
    </div>
    <div
      on:click={() => (window.location.href = "/#/contributors")}
      class="stat cursor-pointer place-items-center place-content-center"
    >
      <div class="stat-title">Contributors</div>
      <div class="stat-value text-green-500">{contributors}</div>
      <!-- <div class="stat-desc text-green-500">we are not alone ✊</div> -->
    </div>
    <div class="stat place-items-center place-content-center">
      <div class="stat-title">Percentage Left</div>
      <div class="stat-value text-red-500">{percentageLeft.toFixed(1)} %</div>
      <!-- <div class="stat-desc text-red-500">almost half way there</div> -->
    </div>
  </div>
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
