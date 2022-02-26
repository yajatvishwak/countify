<script>
  import { deleteContribution } from "../supabaseClient";

  export let username = "";
  export let date = "";
  export let title = "";
  export let distance = "";
  export let rid = "";
  export let avatar = "";
  let checked = false;
  const supabaseStorageUrl = __api.env.SVELTE_APP_SUPABASE_STORAGE_URL;

  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = date.getFullYear();
  let ddate = mm + "/" + dd + "/" + yyyy;
</script>

<input type="checkbox" {checked} id="my-modal1" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Run Record Deleted!</h3>
    <p class="py-4">
      If you have done this by mistake, No worries, Add the same contribution
      back in the contribute section
    </p>
    <div class="modal-action">
      <label
        on:click={() => window.location.reload()}
        for="my-modal1"
        class="btn">Coooool</label
      >
    </div>
  </div>
</div>

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
  <div
    class="md:ml-auto text-4xl text-green-500 font-bold flex items-center gap-5"
  >
    <div>{distance} Km</div>
    <div
      on:click={() => {
        if (deleteContribution(rid)) {
          checked = true;
        }
      }}
      class="text-black hover:text-red-500 transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </div>
  </div>
</div>
