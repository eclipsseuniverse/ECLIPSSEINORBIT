import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-C7y3kWDb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LegalLayout-BNInzufm.js
var import_jsx_runtime = require_jsx_runtime();
function LegalLayout({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white text-black",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { current: "brand" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mx-auto max-w-3xl px-5 md:px-8 py-16 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => window.history.back(),
						className: "cursor-pointer text-[11px] uppercase tracking-[0.25em] hover:underline",
						children: "← Volver"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl md:text-6xl mt-6 mb-10 leading-tight",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed [&_h2]:font-display [&_h2]:text-black [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:pt-6 [&_h2]:pb-1 [&_strong]:text-black [&_a]:underline",
						children
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { LegalLayout as t };
