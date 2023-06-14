/* empty css                               */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as addAttribute, F as Fragment } from '../astro.b8789f2a.mjs';
import 'html-escaper';
import { $ as $$Base } from './dashboard.astro.f44ec901.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$1 = createAstro();
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Heading;
  const { title = "StatsPage", header = "", footer = "", large = false } = Astro2.props;
  const titleClassList = "font-black font-display text-primary " + (large ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl");
  const otherClassList = "uppercase tracking-widest " + (large ? "text-xl" : "text-lg");
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col justify-center items-center gap-1">
    ${header == "" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}` : renderTemplate`<p${addAttribute(otherClassList, "class")}>${header}</p>`}
    <p${addAttribute(titleClassList, "class")}>${title}</p>
    ${footer == "" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}` : renderTemplate`<p${addAttribute(otherClassList, "class")}>${footer}</p>`}
</div>`;
}, "/Users/tpaul/Documents/Coding/web/astro/frisbeestats/src/components/Heading.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Home" }, { "default": ($$result2) => renderTemplate`
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

export { $$Index as default, $$file as file, $$url as url };
