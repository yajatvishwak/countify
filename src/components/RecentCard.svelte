<script>
  export let username;
  export let date;
  export let title = "";
  export let distance = "";
  export let avatar = "";

  const supabaseStorageUrl = __api.env.SVELTE_APP_SUPABASE_STORAGE_URL;

  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = date.getFullYear();
  let ddate = mm + "/" + dd + "/" + yyyy;
</script>

<div
  class="p-10 text-black bg-gray-100 rounded-xl gap-4 flex flex-col md:flex-row justify-center md:justify-start items-center"
>
  <div class="avatar">
    <div class=" rounded-full w-14 h-14">
      <img src={supabaseStorageUrl + "/" + avatar} />
    </div>
  </div>
  <div class="text-center md:text-left">
    <div class="text-xl font-semibold">{username}</div>
    <div class="flex gap-2 flex-col md:flex-row items-center">
      <div class="mt-2 md:mt-0">{title}</div>
      <div class="hidden md:flex">•</div>
      <div>{ddate}</div>
    </div>
  </div>
  <div class="md:ml-auto text-4xl text-green-500 font-bold">
    + {distance}km
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
