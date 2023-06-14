/* empty css                               */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderSlot, e as renderComponent, m as maybeRenderHead } from '../astro.b8789f2a.mjs';
import 'html-escaper';

const $$Astro$1 = createAstro();
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Base;
  const { title = "" } = Astro2.props;
  return renderTemplate`<head>
    <title>${title ? title + " | StatsPage" : "StatsPage"}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
${renderHead($$result)}</head>
<body class="p-4 container flex flex-col justify-center items-center w-full min-h-screen mx-auto">
    ${renderSlot($$result, $$slots["default"])}
</body>`;
}, "/Users/tpaul/Documents/Coding/web/astro/frisbeestats/src/layouts/Base.astro");

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div class="flex flex-col gap-6 text-center">
        <h1 class="font-black font-display text-primary text-3xl leading-loose">
            coming soon...
        </h1>
        <a href="/" class="btn btn-link btn-primary">back home</a>
    </div>
` })}`;
}, "/Users/tpaul/Documents/Coding/web/astro/frisbeestats/src/pages/dashboard.astro");

const $$file = "/Users/tpaul/Documents/Coding/web/astro/frisbeestats/src/pages/dashboard.astro";
const $$url = "/dashboard";

const dashboard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Base as $, dashboard as d };
