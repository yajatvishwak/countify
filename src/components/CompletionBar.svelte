<script>
  export let total = 0;
  export let covered = 0;
</script>

<div class="text-2xl">
  <div class="p-6 ">
    <div class="flex justify-between items-center">
      <div>{covered}km</div>
      <div>{total}km</div>
    </div>
    <progress class="progress" value={covered} max={total}>45%</progress>
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
