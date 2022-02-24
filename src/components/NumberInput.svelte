<script>
    let dist = 0.0;
    import greetingTime from "greeting-time";
    let message = [
        "how much track did you cover today?",
        "woah next usain bolt only bro you are",
        "wowowowowowoowow",
        "im jealous of you",
    ];
    let timebro = "";
    if (greetingTime(new Date()) === "Good afternoon") {
        timebro = "Afternoon";
    } else if (greetingTime(new Date()) === "Good evening") {
        timebro = "Evening";
    } else {
        timebro = "Morning";
    }
    let daybro = Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
        new Date()
    );
    let title = daybro + " " + timebro + " Run🏃‍♀️";

    let selectedMessage = 0;
    function plus() {
        dist = (parseFloat(dist) + 0.1).toFixed(1);
        selectedMessage = getRandomNumberBetween(1, message.length - 1);
        console.log(typeof dist);
    }
    function minus() {
        if (dist > 0) {
            dist = (parseFloat(dist) - 0.1).toFixed(1);
        }

        console.log(typeof dist);
    }
    function getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
</script>

<form class="flex justify-center items-center flex-col gap-10">
    <div class="w-full">
        <label for="">Title Your Run</label>
        <input
            type="text"
            class="w-full p-4 border mt-2 rounded-lg"
            placeholder=""
            bind:value={title}
        />
    </div>
    <div class="flex flex-col md:flex-row gap-9 ">
        <div
            on:click={plus}
            class="p-4 bg-slate-500 hover:bg-indigo-500 transition-all  px-10 rounded-lg flex items-center justify-center text-gray-50"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                />
            </svg>
        </div>

        <div
            class="p-4 font-bold flex-1 bg-gray-100  rounded-lg text-6xl py-20 flex items-center justify-center "
        >
            <input
                type="text"
                pattern="^(\d+(\.\d+)?)$"
                bind:value={dist}
                class="text-center w-full bg-inherit outline-none"
            />
        </div>

        <div
            on:click={minus}
            class="p-4  bg-slate-500  hover:bg-indigo-500 transition-all px-10 rounded-lg flex items-center justify-center text-gray-50"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                />
            </svg>
        </div>
    </div>
    <div class="flex items-center gap-10 mt-10 ml-auto">
        <div class="text-center">{message[selectedMessage]}</div>
        <div class="btn ">contribute!</div>
    </div>
</form>
