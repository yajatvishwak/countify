<script>
  import NavBar from "../components/NavBar.svelte";
  import Heading from "../components/Heading.svelte";
  import BoundingBox from "../components/BoundingBox.svelte";
  import YourContributionCard from "../components/YourContributionCard.svelte";
  import { username, avatarURL } from "../session";

  import {
    getYourContribution,
    modifyProfile,
    supabase,
  } from "../supabaseClient";
  let uusername = "";
  import { nanoid } from "nanoid";
  import { onMount } from "svelte";
  let contributions = [];
  let loading = false;
  onMount(async () => {
    contributions = await getYourContribution();
    console.log(contributions);
  });
  let files;
  const supabaseStorageUrl = __api.env.SVELTE_APP_SUPABASE_STORAGE_URL;

  let previewImage = supabaseStorageUrl + "/" + $avatarURL;
  let timage = null;

  function onPreviewChange(e) {
    let image = e.target.files[0];
    timage = image;
    //console.log(image);
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      previewImage = e.target.result;
      //console.log(previewImage);
    };
  }

  async function saveChanges() {
    loading = true;
    let imageURL = "";
    if (timage !== null) {
      const { data, error } = await supabase.storage
        .from("pfp")
        .upload(
          `public/${
            timage.name.substring(0, timage.name.lastIndexOf(".")) +
            nanoid() +
            timage.name.substring(timage.name.lastIndexOf("."))
          }`,
          timage
        );
      //console.log(data);
      if (error) throw error;
      imageURL = data.Key;
    }
    let update = {};
    if (uusername !== "") {
      update["username"] = uusername;
    }
    if (imageURL != "") {
      update["avatar_url"] = imageURL;
    }
    modifyProfile(update);
    loading = false;
  }
</script>

<BoundingBox>
  <NavBar />
  <Heading>⚙️ Profile Settings</Heading>
  <form
    on:submit|preventDefault={saveChanges}
    class="flex flex-col justify-center items-center gap-10"
  >
    <div class="rounded-full border">
      <img src={previewImage} class="rounded-full h-52 w-52" alt="" />
    </div>
    <div>
      <input
        id="pfp"
        accept="image/png, image/gif, image/jpeg"
        hidden
        type="file"
        bind:files
        on:change={onPreviewChange}
        class=" "
      />
      <label class="w-full p-4 border rounded-xl" for="pfp"
        >Change Profile Picture</label
      >
    </div>
    <div class="w-full ">
      <label for="mt-3">Display Name</label>
      <input
        type="text"
        placeholder={$username}
        bind:value={uusername}
        class="w-full mt-1 p-4 rounded-lg border"
      />
    </div>
    <button type="submit" disabled={loading} class="btn -mt-2 mr-auto"
      >{loading ? "Loading..." : "Save"}</button
    >
  </form>
  <Heading>Your Contributions</Heading>
  <div class="flex flex-col gap-3">
    {#each contributions as item}
      <YourContributionCard
        username={item.username}
        date={item.date}
        title={item.title}
        distance={item.distance}
        avatar={item.avatar}
        rid={item.rid}
      />
    {/each}
  </div>
</BoundingBox>
