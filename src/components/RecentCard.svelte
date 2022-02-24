<script>
    export let name;
</script>

<div
    class="p-10 bg-gray-100 rounded-xl gap-4 flex flex-col md:flex-row justify-center md:justify-start items-center"
>
    <div class="avatar">
        <div class=" rounded-full w-14 h-14">
            <img
                src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
            />
        </div>
    </div>
    <div class="text-center md:text-left">
        <div class="text-xl font-semibold">Yajat</div>
        <div class="flex gap-2 flex-col md:flex-row items-center">
            <div class="mt-2 md:mt-0">Monday Morning Run 🏃‍♂️</div>
            <div class="hidden md:flex">•</div>
            <div>15/3/22</div>
        </div>
    </div>
    <div class="md:ml-auto text-4xl text-green-500 font-bold">+3km</div>
</div>

<style lang="postcss" global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    @import url("https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap");
    * {
        font-family: "Space Mono", monospace !important;
    }
</style>
