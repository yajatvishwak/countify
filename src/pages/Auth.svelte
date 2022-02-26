<script>
  import { onMount } from "svelte";

  import { supabase } from "../supabaseClient";

  let email = "";
  let checked = false;
  onMount(() => {
    const user = supabase.auth.user();
    if (user !== null) window.location.href = "/#/home";
  });
  let loading = false;
  async function login() {
    loading = true;
    const { user, error } = await supabase.auth.signIn({
      email: email,
    });

    checked = true;
    loading = false;
    console.log(user);
  }
</script>

<input type="checkbox" {checked} id="my-modal11" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Authentication Email Sent</h3>
    <p class="py-4">
      Please follow the instructions in your email to login/signup. Thank you!
    </p>
    <div class="modal-action">
      <label
        on:click={() => window.location.reload()}
        for="my-modal11"
        class="btn">Coooool</label
      >
    </div>
  </div>
</div>
<section class="h-screen w-screen bg-zinc-200 grid lg:grid-cols-5">
  <div class="col-span-2 lg:bg-white p-10 pt-20 h-full flex flex-col">
    <div class="text-3xl font-bold text-primary">Countify</div>
    <div class="text-xl font-bold max-w-sm mt-4 text-black">
      Reach Monthly Distance Goals Together
    </div>
    <div class="mt-auto">
      <div class="form-control">
        <label class="label">
          <span class="label-text text-black">Email</span>
        </label>
        <input
          bind:value={email}
          type="text"
          placeholder="superawesome@temp.com"
          class="input input-bordered rounded-lg"
        />
        {#if loading}
          <div class="text-center">loading</div>
        {:else}
          <button
            disabled={loading}
            on:click={login}
            class="btn btn-primary  mt-5 rounded-lg"
            >Take me to my dashboard</button
          >
        {/if}
      </div>
    </div>
  </div>
</section>
