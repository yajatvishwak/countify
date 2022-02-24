<script>
    export let type = "image+text";
</script>

{#if type === "image+text"}
    <div class="card  shadow-lg ">
        <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                Top image
                <div class="badge mx-2 badge-secondary">NEW</div>
            </h2>
            <p>
                Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
                Sit sit necessitatibus veritatis sed molestiae voluptates
                incidunt iure sapiente.
            </p>
            <div class="card-actions">
                <button class="btn btn-primary">More info</button>
            </div>
        </div>
    </div>
{/if}

{#if type === "image"}
    <div class=" shadow-xl relative w-full rounded-xl ">
        <img
            class="w-full rounded-xl"
            src="https://picsum.photos/id/1005/400/250"
        />

        <div
            class="avatar bottom-5 rounded-xl bg-black text-white bg-opacity-50  flex items-center left-5 p-2  absolute"
        >
            <div class="rounded-full w-10 h-10 ">
                <img
                    src="http://daisyui.com/tailwind-css-component-profile-1@40w.png"
                />
            </div>
            <div class="px-4">this is name</div>
        </div>
    </div>
{/if}

{#if type === "text"}
    <div class="card shadow-xl border-2">
        <div class="card-body">
            <h2 class="card-title">no border with shadow</h2>
            <p>Rerum reiciendis beatae tenetur excepturi</p>
        </div>
    </div>
{/if}
