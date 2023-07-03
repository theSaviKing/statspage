<script>
    // Define Props
    export let game = {}, mode;

    // Manipulate game object's timezone
    import moment from "moment-timezone";
    game.time = moment.utc(game.time).tz("America/Chicago", true);

    // Import TeamLogo component
    import TeamLogo from "./dashboard/TeamLogo.svelte";
</script>

{#if mode == "dashboard"}
<div class="p-4 bg-base-200 rounded-xl">
    <div id="game-title" class="text-center font-display">
        <p class="font-[750] uppercase">{game.home_team.short_name}</p>
        <p>vs.</p>
        <p class="font-[750] uppercase">{game.away_team.short_name}</p>
        <TeamLogo color={game.home_team.color} />
    </div>
</div>
{/if}

<!-- Inspiration: https://www.mnufc.com/ -->