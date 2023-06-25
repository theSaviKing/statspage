<script>
    export const limit = 3;
    const game_data_url = new URL(
        `/games/recent_games/?limit=${limit}&format=json`,
        import.meta.env.PUBLIC_API_URL
    );
    const game_data = (async () => {
        const data = await fetch(game_data_url.href);
        return await data.json();
    })();
    const team_data_url = new URL(
        `/teams/?format=json`,
        import.meta.env.PUBLIC_API_URL
    );
    const team_data = (async () => {
        const data = await fetch(team_data_url.href);
        return await data.json();
    })();
</script>

{#await team_data}
    <div class="bg-base-200 p-6 rounded-xl animate-pulse">
        Loading team data...
    </div>
{:then team_data}
    {#await game_data}
        <div class="p-6 bg-base-200 rounded-xl animate-pulse">
            Loading game data...
        </div>
    {:then games}
        <div class="flex flex-col gap-4">
            {#each games as game}
                <div class="stat bg-base-200 rounded-xl">
                    <div class="stat-value">
                        {team_data.find((team) => team.id === game.home_team)
                            .short_name} vs. {team_data.find(
                            (team) => team.id === game.away_team
                        ).short_name}
                    </div>
                </div>
            {/each}
        </div>
    {:catch error}
        <div class="stat">
            <div>Sorry, there was an error:<br />{error}</div>
        </div>
    {/await}
{:catch error}
    <div class="stat bg-base-200 rounded-xl">
        Sorry, there was an error loading team data:<br />
        {error}
    </div>
{/await}
