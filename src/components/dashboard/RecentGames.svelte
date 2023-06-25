<script>
    export const limit = 3;
    var api_url = import.meta.env.PUBLIC_API_URL
    api_url = "https://api.sampleapis.com/coffee/hot"
    var game_data_url = `${api_url}/games/recent_games/?limit=${limit}&format=json`
    const game_data = (async () => {
        const data = await fetch(api_url)
        return await data.json()
    })()
</script>

{#await game_data}
<div class="stat animate-pulse bg-base-200">
    <div class="stat-value">Loading...</div>
</div>
{:then data}
<div>{data}</div>
{:catch error}
<div class="stat">
    <div>Sorry, there was an error:<br>{error}</div>
</div>
{/await}