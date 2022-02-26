<script>
  import Router from "svelte-spa-router";
  import routes from "./router";
</script>

<section class="h-full w-screen text-black">
  <Router {routes} />
</section>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
