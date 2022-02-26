<script>
  import { onMount } from "svelte";
  import { push } from "svelte-spa-router";

  import { initProj, supabase } from "../supabaseClient";
  let username = "";
  onMount(() => {
    checkIfExists();
  });
  async function checkIfExists() {
    const user = supabase.auth.user();
    if (user === null) return push("/auth");
    console.log(user);
    let { data, error, status } = await supabase
      .from("profile")
      .select(`username`)
      .eq("uid", user.id)
      .single();
    //console.log("hro", data);
    //console.log(supabase.auth.user());
    if (data !== null) {
      initProj();

      push("/home");
    }
  }

  async function updateProfile() {
    try {
      const user = supabase.auth.user();
      const updates = {
        uid: user.id,
        username,
        avatar_url: "pfp/public/bro.png",
      };

      let { error } = await supabase.from("profile").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) throw error;
      initProj();
      window.location.href = "/#/home";
    } catch (error) {
      alert(error.message);
    }
  }
</script>

<form
  class=" w-full h-screen p-4 grid items-center"
  on:submit|preventDefault={updateProfile}
>
  <div class="flex justify-center items-center flex-col gap-5 w-full">
    <label for="" class="text-5xl text-indigo-500 font-bold">Countify</label>
    <label for="" class="text-3xl">Welcome aboard! 👋</label>
    <div class="flex flex-col gap-3">
      <input
        required
        type="text"
        bind:value={username}
        placeholder="username"
        class="p-4 border rounded w-full"
      />
      <label
        for="file"
        class="text-center p-5 rounded-lg border hover:bg-indigo-400 transition-all"
        >Upload a Picture!</label
      >
      <input type="file" id="file" hidden />
    </div>
    <button class="btn" type="submit">Let's goooooooooo</button>
  </div>
</form>
