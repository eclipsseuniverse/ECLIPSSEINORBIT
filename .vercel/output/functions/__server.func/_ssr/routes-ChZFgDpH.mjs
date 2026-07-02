import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Logo } from "./Logo-CYDeAetG.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ChZFgDpH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Landing() {
	const navigate = useNavigate();
	const [going, setGoing] = (0, import_react.useState)(null);
	const go = (to) => {
		if (going) return;
		setGoing(to);
		setTimeout(() => {
			navigate({ to: to === "brand" ? "/eclipssebrand" : "/personaliza" });
		}, 680);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-[100svh] overflow-hidden bg-white text-black flex flex-col items-center px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: going && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				transition: {
					duration: .25,
					ease: "easeOut"
				},
				className: "fixed inset-0 z-50 flex items-center justify-center bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: { rotate: 360 },
					transition: {
						duration: .8,
						ease: "linear",
						repeat: Infinity
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-14 md:h-20" })
				})
			}, "transition") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					y: -16,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				transition: {
					duration: .6,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "pt-10 md:pt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-14 md:h-20" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 w-full flex flex-col items-center justify-center gap-0 max-w-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						delay: .2
					},
					className: "mb-6 font-display text-[11px] uppercase tracking-[0.35em] text-muted-foreground",
					children: "Elige tu experiencia"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full flex flex-col gap-4 md:gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceButton, {
						label: "ECLIPSSEBRAND",
						delay: .3,
						onClick: () => go("brand"),
						dimmed: going === "custom",
						selected: going === "brand"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceButton, {
						label: "PERSONALIZA",
						delay: .42,
						onClick: () => go("custom"),
						dimmed: going === "brand",
						selected: going === "custom"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					duration: .7,
					delay: .7
				},
				className: "font-display text-[10px] uppercase tracking-[0.4em] text-muted-foreground pb-8",
				children: "Por y para jóvenes"
			})
		]
	});
}
function ChoiceButton({ label, delay, onClick, dimmed, selected }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		type: "button",
		onClick,
		initial: {
			y: 20,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: dimmed ? .15 : 1,
			scale: selected ? 1.03 : 1
		},
		transition: {
			duration: .6,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		whileHover: { y: -3 },
		whileTap: { scale: .97 },
		className: "float-anim relative w-full cursor-pointer",
		"aria-label": `Entrar en ${label}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `block w-full rounded-full border border-black px-8 py-4 md:py-5 font-display text-base md:text-lg tracking-[0.12em] text-center transition-colors duration-300 ${selected ? "bg-black text-white" : "bg-white text-black hover:bg-black hover:text-white"}`,
			children: label
		})
	});
}
//#endregion
export { Landing as component };
