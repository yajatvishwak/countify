<script>
  import { push } from "svelte-spa-router";

  import { avatarURL } from "../session";
  import { supabase } from "../supabaseClient";

  // export let name;
  const supabaseStorageUrl = __api.env.SVELTE_APP_SUPABASE_STORAGE_URL;
  // import StoryCard from "./StoryCard.svelte";
  //console.log($avatarURL);
</script>

<div class="flex items-center justify-between">
  <div
    on:click={() => (window.location.href = "/#/home")}
    class="text-3xl font-bold text-primary cursor-pointer"
  >
    Countify
  </div>

  <div class="dropdown dropdown-end">
    <label tabindex="0" class="avatar hover:scale-75 transition-all">
      <div class="rounded-full border shadow-md w-14 h-14">
        <img class="" src={supabaseStorageUrl + "/" + $avatarURL} />
      </div>
    </label>
    <ul
      tabindex="0"
      class="p-2 shadow menu dropdown-content rounded-box w-52 bg-white text-black"
    >
      <li><a href="/#/add">Contribute</a></li>
      <li><a href="/#/profile">Profile</a></li>
      <li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
          on:click={async () => {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            push("/auth");
          }}>Logout</a
        >
      </li>
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
