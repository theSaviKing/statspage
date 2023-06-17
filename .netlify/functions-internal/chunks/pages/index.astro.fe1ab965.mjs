/* empty css                               */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderSlot, m as maybeRenderHead, e as renderComponent, f as addAttribute, F as Fragment } from '../astro.b8789f2a.mjs';
import 'html-escaper';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "" } = Astro2.props;
  return renderTemplate`<head>
    <title>${title ? title + " | StatsPage" : "StatsPage: Stat Tracker for Ultimate Frisbee"}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
${renderHead($$result)}</head>
<body class="px-4 py-6 container flex flex-col justify-center items-center w-full min-h-screen mx-auto">
    ${renderSlot($$result, $$slots["default"])}
</body>`;
}, "/Users/tpaul/Documents/Coding/web/astro/frisbeestats/src/layouts/Layout.astro");

const $$Astro$1 = createAstro();
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Heading;
  const { title = "StatsPage", header = "", footer = "", large = false, page = "" } = Astro2.props;
  const otherClassList = "uppercase tracking-widest " + (large ? "text-xl" : "text-lg");
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col justify-center items-center gap-1 select-none astro-U4QOYRKZ">
    ${header == "" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-U4QOYRKZ" })}` : renderTemplate`<p${addAttribute(otherClassList + " astro-U4QOYRKZ", "class")}>${header}</p>`}
    <a href="/" id="title"${addAttribute([["font-black", "font-display", "text-primary", { "text-4xl md:text-5xl": large }, { "text-3xl md:text-4xl": !large }, "relative"], "astro-U4QOYRKZ"], "class:list")}>
        ${title}
        <span class="astro-U4QOYRKZ"></span>
    </a>
    ${footer == "" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-U4QOYRKZ" })}` : renderTemplate`<p${addAttribute(otherClassList + " astro-U4QOYRKZ", "class")}>${footer}</p>`}
    ${page == "" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-U4QOYRKZ" })}` : renderTemplate`<p${addAttribute([["font-black", "font-display", "text-inherit", { "text-5xl md:text-6xl": large }, { "text-3xl md:text-4xl": !large }, "mb-10", "mt-2"], "astro-U4QOYRKZ"], "class:list")}>${page}<span class="title-underline astro-U4QOYRKZ"></span></p>`}
</div>`;
}, "/Users/tpaul/Documents/Coding/web/astro/frisbeestats/src/components/Heading.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<main class="flex flex-col justify-center items-center gap-6">
        ${renderComponent($$result2, "Heading", $$Heading, {})}
        <div class="text-4xl font-bold">
            <p>Track your game.</p>
            <p class="text-primary">Elevate your play.</p>
        </div>
        <div class="gap gap-4 md:flex">
            <a href="dashboard" class="btn btn-primary">start tracking</a>
            <button class="btn" onclick="confirm_admin.showModal()">admin</button>
        </div>
    </main>
    <dialog id="confirm_admin" class="modal" data-theme="umary">
        <form method="dialog" class="modal-box flex flex-col gap-2">
            <p class="font-black font-display text-error text-xl">WARNING!</p>
            <p>You are attempting to access the admin site. If you do not have credentials for the site, you will not be able to get in.</p>
            <div class="modal-action w-full grid grid-cols-2">
                <button class="btn btn-primary btn-block">nevermind</button>
                <button class="btn btn-blc">i understand</button>
            </div>
        </form>
    </dialog>
` })}`;
}, "/Users/tpaul/Documents/Coding/web/astro/frisbeestats/src/pages/index.astro");

const $$file = "/Users/tpaul/Documents/Coding/web/astro/frisbeestats/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Heading as $, $$Layout as a, index as i };
