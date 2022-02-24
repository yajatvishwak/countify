<script>
    import ContributorCard from "../components/ContributorCard.svelte";

    import NavBar from "../components/NavBar.svelte";
    import Heading from "../components/Heading.svelte";
    import BoundingBox from "../components/BoundingBox.svelte";

    // export let name;
    // import StoryCard from "./StoryCard.svelte";
</script>

<BoundingBox>
    <NavBar />
    <Heading>Contributors</Heading>
    <div class="my-10 gap-5 grid md:grid-cols-2">
        <ContributorCard />
        <ContributorCard />
        <ContributorCard />
        <ContributorCard />
    </div>
</BoundingBox>
