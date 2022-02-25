<script>
    import { supabase } from "../supabaseClient";

    let email = "";
    async function login() {
        const { user, error } = await supabase.auth.signIn({
            email: email,
        });
        console.log(user);
    }
</script>

<section class="h-screen w-screen bg-zinc-50 grid lg:grid-cols-5">
    <div class="col-span-2 lg:bg-white p-10 pt-20 h-full flex flex-col">
        <div class="text-3xl font-bold text-primary">Countify</div>
        <div class="text-xl font-bold max-w-sm mt-4">
            Reach Monthly Distance Goals Together
        </div>
        <div class="mt-auto">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Email</span>
                </label>
                <input
                    bind:value={email}
                    type="text"
                    placeholder="superawesome@temp.com"
                    class="input input-bordered rounded-lg"
                />

                <button
                    on:click={login}
                    class="btn btn-primary  mt-5 rounded-lg"
                    >Take me to my dashboard</button
                >
            </div>
        </div>
    </div>
</section>
