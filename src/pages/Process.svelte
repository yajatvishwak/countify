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
        avatar_url: "pfp/public/bro.jpg",
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

<form on:submit|preventDefault={updateProfile}>
  <input type="text" bind:value={username} placeholder="username" />
  <input type="file" />
  <button type="submit">submit</button>
</form>
