<script>
  // export let name;
  // import StoryCard from "./StoryCard.svelte";
</script>

<div class="flex items-center justify-between">
  <div
    on:click={() => (window.location.href = "/")}
    class="text-3xl font-bold text-primary cursor-pointer"
  >
    Countify
  </div>

  <div class="dropdown dropdown-end">
    <label tabindex="0" class="avatar hover:scale-75 transition-all">
      <div class="rounded-full w-14 h-14">
        <img
          src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
        />
      </div>
    </label>
    <ul
      tabindex="0"
      class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
    >
      <li><a href="/#/add">Contribute</a></li>
      <li><a herf="/#/profile">Profile</a></li>
    </ul>
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
