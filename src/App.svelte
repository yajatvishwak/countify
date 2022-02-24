<script>
  // import ContributorCard from "./components/ContributorCard.svelte";

  // import NavBar from "./components/NavBar.svelte";

  // import RecentActivity from "./components/RecentActivity.svelte";

  // import Stats from "./components/Stats.svelte";

  // import CompletionBar from "./components/CompletionBar.svelte";

  // import RecentCard from "./RecentCard.svelte";
  // import Heading from "./components/Heading.svelte";
  // import BoundingBox from "./components/BoundingBox.svelte";
  // import NumberInput from "./components/NumberInput.svelte";
  import Home from "./pages/Home.svelte";
  import Router from "svelte-spa-router";
  import routes from "./router";
  //import AddContribution from "./pages/AddContribution.svelte";

  // export let name;
  // import StoryCard from "./StoryCard.svelte";
</script>

<section class="h-full w-screen ">
  <Router {routes} />
</section>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
