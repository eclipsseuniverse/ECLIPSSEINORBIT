import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Logo } from "./Logo-CYDeAetG.mjs";
import { _ as useNavigate, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteFooter-C7y3kWDb.js
var import_jsx_runtime = require_jsx_runtime();
function SiteHeader({ current }) {
	const other = current === "brand" ? "custom" : "brand";
	const otherLabel = other === "brand" ? "ECLIPSSEBRAND" : "PERSONALIZA";
	const otherTo = other === "brand" ? "/eclipssebrand" : "/personaliza";
	const homeTo = current === "brand" ? "/eclipssebrand" : "/personaliza";
	const navigate = useNavigate();
	const location = useRouterState({ select: (s) => s.location.pathname });
	const handleInicio = () => {
		if (location === homeTo) window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		else navigate({ to: homeTo }).then(() => {
			window.scrollTo({
				top: 0,
				behavior: "instant"
			});
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -16,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .5,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center",
					"aria-label": "Inicio ECLIPSSE",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleInicio,
					className: "font-display text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-black hover:opacity-60 transition-opacity",
					children: "INICIO"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex items-center gap-2 md:gap-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: otherTo,
					className: "font-display text-[10px] md:text-[11px] uppercase tracking-[0.2em] rounded-full border border-black px-3.5 py-2 md:px-5 md:py-2.5 hover:bg-black hover:text-white transition-colors",
					children: ["↔ ", otherLabel]
				})
			})]
		})
	});
}
var links = [
	{
		to: "/legal/aviso-legal",
		label: "Aviso legal"
	},
	{
		to: "/legal/privacidad",
		label: "Privacidad"
	},
	{
		to: "/legal/cookies",
		label: "Cookies"
	},
	{
		to: "/legal/terminos",
		label: "Términos"
	},
	{
		to: "/legal/devoluciones",
		label: "Envíos y devoluciones"
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-white/10 bg-black",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8 py-10 flex flex-col gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Enlaces legales",
				className: "flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: "text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors",
					children: l.label
				}, l.to))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["© ECLIPSSE™ UNIVERSE ", (/* @__PURE__ */ new Date()).getFullYear()] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sevilla, España · Por y para jóvenes" })]
			})]
		})
	});
}
//#endregion
export { SiteHeader as n, SiteFooter as t };
