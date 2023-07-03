<script>
    import GameDisplay from "../GameDisplay.svelte"

    export const limit = 3;
    const game_data_url = new URL(
        `/games/recent_games/?limit=${limit}&format=json`,
        import.meta.env.PUBLIC_API_URL
    );
    const game_data = (async () => {
        const data = await fetch(game_data_url.href);
        return await data.json();
    })();
</script>

{#await game_data}
    <div class="dash-message">
        <span class="loading loading-infinity text-accent loading-lg" /> Loading
        game data
    </div>
{:then games}
    <div class="flex flex-col gap-4">
        {#each games as game}
            <GameDisplay game={game} mode="dashboard" />
        {/each}
    </div>
{:catch}
    <div
        class="dash-message"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            class="w-5 h-5 fill-error"
        >
            <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
            />
        </svg>
        Error retrieving game data
    </div>
{/await}

<style>
    .dash-message {
        @apply w-full flex justify-center items-center font-semibold text-center gap-2;
    }
</style>