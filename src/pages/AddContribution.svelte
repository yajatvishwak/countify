<script>
    import BoundingBox from "../components/BoundingBox.svelte";
    import Heading from "../components/Heading.svelte";
    import NavBar from "../components/NavBar.svelte";
    import NumberInput from "../components/NumberInput.svelte";
</script>

<BoundingBox>
    <NavBar />
    <Heading>Add your Contribution</Heading>
    <form class="w-full">
        <NumberInput />
    </form>
</BoundingBox>
