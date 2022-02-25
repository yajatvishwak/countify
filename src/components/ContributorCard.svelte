<script>
  export let type = -1;
  export let name = "";
  export let kms = "";
  const supabaseStorageUrl = __api.env.SVELTE_APP_SUPABASE_STORAGE_URL;

  export let img = "";
</script>

<div class="relative">
  {#if type === 1 || type === 2 || type === 3}
    <div class="absolute right-10 ">
      <div
        class={`h-16 ${
          type === 1
            ? "bg-orange-200"
            : type === 2
            ? "bg-gray-400"
            : "bg-amber-700"
        } rounded-br-lg rounded-bl-lg w-10 flex justify-center items-center text-3xl`}
      >
        {type === 1 ? "🥇" : type === 2 ? "🥈" : "🥉"}
      </div>
    </div>
  {/if}

  <div
    class="shadow-xl border bg-white rounded-xl flex justify-center items-center p-4 gap-5 flex-col"
  >
    <div class="avatar mt-5">
      <div class="w-24 rounded-full">
        <img src={supabaseStorageUrl + "/" + img} />
      </div>
    </div>
    <div class="text-center flex flex-col items-center gap-2 my-5 ">
      <div class="text-xl font-bold">{name}</div>
      <div class="text-4xl text-violet-500 font-bold">{kms} KM</div>
    </div>
  </div>
</div>
