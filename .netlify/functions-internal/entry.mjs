import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import { g as deserializeManifest } from './chunks/astro.b8789f2a.mjs';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.cb609033.mjs');
const _page1  = () => import('./chunks/dashboard@_@astro.a4fef65d.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/dashboard.astro", _page1]]);const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.70b0079d.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.70b0079d.css"}],"routeData":{"route":"/dashboard","type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/tpaul/Documents/Coding/web/astro/frisbeestats/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["/Users/tpaul/Documents/Coding/web/astro/frisbeestats/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(s,c,i)=>{let o=async()=>{await(await s())()},n=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){n.disconnect(),o();break}});for(let e=0;e<i.children.length;e++){let t=i.children[e];n.observe(t)}};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/index.astro":"chunks/pages/index.astro.f505537d.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.cb609033.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"chunks/dashboard@_@astro.a4fef65d.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/dm-sans-latin-400-normal.7164a212.woff2","/_astro/dm-sans-latin-ext-400-normal.83c62f43.woff2","/_astro/dm-serif-display-latin-400-normal.73e3044b.woff2","/_astro/dm-serif-display-latin-ext-400-normal.5489f2b1.woff2","/_astro/inter-cyrillic-400-normal.e9493683.woff2","/_astro/inter-cyrillic-ext-400-normal.f7666a51.woff2","/_astro/inter-greek-ext-400-normal.d3e30cde.woff2","/_astro/inter-greek-400-normal.2f2d421a.woff2","/_astro/inter-latin-ext-400-normal.64a98f58.woff2","/_astro/dm-mono-latin-ext-400-normal.e18063bb.woff2","/_astro/inter-latin-400-normal.0364d368.woff2","/_astro/dm-mono-latin-400-normal.8b22f1d6.woff2","/_astro/dm-sans-latin-ext-400-normal.8aab14c3.woff","/_astro/dm-sans-latin-400-normal.239ba118.woff","/_astro/dm-serif-display-latin-ext-400-normal.0470e768.woff","/_astro/dm-serif-display-latin-400-normal.56294562.woff","/_astro/inter-cyrillic-ext-400-normal.f83f176b.woff","/_astro/inter-cyrillic-400-normal.3a27cac9.woff","/_astro/inter-greek-ext-400-normal.37983db3.woff","/_astro/inter-greek-400-normal.f8bb5355.woff","/_astro/inter-vietnamese-400-normal.5779ad5e.woff","/_astro/dm-mono-latin-ext-400-normal.c972e2c6.woff","/_astro/inter-latin-ext-400-normal.495669c6.woff","/_astro/inter-latin-400-normal.e3982e96.woff","/_astro/dm-mono-latin-400-normal.4cb0fb9b.woff","/_astro/dashboard.70b0079d.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/mstile-144x144.png","/mstile-150x150.png","/mstile-310x150.png","/mstile-310x310.png","/mstile-70x70.png","/safari-pinned-tab.svg","/site.webmanifest","/fonts/Syne-Bold.woff","/fonts/Syne-Bold.woff2","/fonts/Syne-ExtraBold.woff","/fonts/Syne-ExtraBold.woff2","/fonts/Syne-Medium.woff","/fonts/Syne-Medium.woff2","/fonts/Syne-Regular.woff","/fonts/Syne-Regular.woff2","/fonts/Syne-SemiBold.woff","/fonts/Syne-SemiBold.woff2"]}), {
	pageMap,
	renderers,
	undefined
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
