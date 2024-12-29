<script>
    // Define Props
    export let game = {},
        mode;

    // Manipulate game object's timezone
    import moment from "moment-timezone";
    game.time = new Date(moment.utc(game.time).tz("America/Chicago", true));
    let season = game.game_type == "regular" ? "Regular Season" : "Playoffs";

    // Import TeamLogo component
    import TeamLogo from "./dashboard/TeamLogo.svelte";

    // Import chroma-js for color manipulation
    import chroma from "chroma-js";

    let ht = chroma(game.home_team.color);
    let at = chroma(game.away_team.color);
    let home_team_color = ht.luminance(
        ht.luminance() +
            (ht.luminance() < 0.25 ? 0.25 : ht.luminance() > 0.85 ? -0.2 : 0)
    );
    let away_team_color = at.luminance(
        at.luminance() +
            (ht.luminance() < 0.25 ? 0.25 : ht.luminance() > 0.85 ? -0.2 : 0)
    );
</script>

{#if mode == "dashboard"}
    <a
        href="#top"
        class="p-4 bg-base-200 rounded-md hover:shadow-lg hover:bg-base-300 space-y-2"
    >
        <p class="font-semibold">
            {game.time.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
            })}
        </p>
        <div class="text-sm space-y-4 flex flex-col">
            <div
                class="col-span-2 flex items-baseline border-b border-b-neutral/50 pb-2"
            >
                <p class="w-1/2">{season}</p>
                <p class="w-1/2 justify-end font-bold text-center">Final</p>
            </div>
            <div class="grid">
                <div class="flex" />
                <div class="flex" />
            </div>
        </div></a
    >
{/if}

<!-- Inspiration: https://www.mnufc.com/ -->
