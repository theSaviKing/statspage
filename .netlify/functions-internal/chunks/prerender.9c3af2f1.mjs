/* empty css                              */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from './astro.b8789f2a.mjs';
import 'html-escaper';
import { $ as $$Heading, a as $$Layout } from './pages/index.astro.3dc76823.mjs';

const $$Astro$2 = createAstro();
const $$GameDisplayHome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GameDisplayHome;
  const { game, home, away } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="px-4 py-6 rounded-xl bg-base-200 flex flex-col gap-4 justify-start">
    <div class="grid grid-cols-2">
        <p>hey</p>
        <p class="justify-self-end">hey</p>
    </div>
    <p class="font-bold text-2xl">${home.short_name} vs. ${away.short_name}</p>
    <div></div>
</div>`;
}, "/Users/tpaul/Documents/Coding/web/astro/frisbeestats/src/components/GameDisplayHome.astro");

const $$Astro$1 = createAstro();
const prerender$1 = true;
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const games = await fetch(`${"http://127.0.0.1:8000/"}/games/?format=json`).then((response) => response.json());
  const teams = await fetch(`${"http://127.0.0.1:8000/"}/teams/?format=json`).then((response) => response.json());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "Heading", $$Heading, { "page": "Dashboard" })}
    ${maybeRenderHead($$result2)}<main class="grid grid-cols-3 gap-4 divide-x-0">
        ${games.map(
    (game) => renderTemplate`${renderComponent($$result2, "Game", $$GameDisplayHome, { "game": game, "home": teams.find((team) => team.id === game.home_team), "away": teams.find((team) => team.id === game.away_team) })}`
  )}
    </main>
` })}`;
}, "/Users/tpaul/Documents/Coding/web/astro/frisbeestats/src/pages/dashboard.astro");

const $$file$1 = "/Users/tpaul/Documents/Coding/web/astro/frisbeestats/src/pages/dashboard.astro";
const $$url$1 = "/dashboard";

const dashboard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file$1,
    prerender: prerender$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const prerender = true;
const $$All = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$All;
  var url = await "http://127.0.0.1:8000/";
  const player_data = await fetch(`${url}/players/?format=json`).then(
    (response) => response.json()
  );
  return renderTemplate`${renderComponent($$result, "Base", Base, {}, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "Heading", $$Heading, { "header": "statistics", "page": "All Players" })}
    ${maybeRenderHead($$result2)}<div class="overflow-x-auto">
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                ${player_data.map(
    (item) => renderTemplate`<tr>
                            <th>${item.id}</th>
                            <th>${item.first_name}</th>
                            <th>${item.last_name}</th>
                        </tr>`
  )}
            </tbody>
        </table>
    </div>
` })}`;
}, "/Users/tpaul/Documents/Coding/web/astro/frisbeestats/src/pages/players/all.astro");

const $$file = "/Users/tpaul/Documents/Coding/web/astro/frisbeestats/src/pages/players/all.astro";
const $$url = "/players/all";

const all = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$All,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { all as a, dashboard as d };
