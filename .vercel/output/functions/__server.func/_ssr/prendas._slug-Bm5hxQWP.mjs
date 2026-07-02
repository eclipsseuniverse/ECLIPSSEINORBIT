import { o as __toESM } from "../_runtime.mjs";
import { n as products } from "./products-CaIqum4E.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-C7y3kWDb.mjs";
import { n as Marquee, t as ContactCTA } from "./ContactCTA-ombLqjxh.mjs";
import { t as Route } from "./prendas._slug-Lxom66il.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prendas._slug-Bm5hxQWP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WHATSAPP_URL = "https://wa.me/message/P5FFTHYMWKNRA1";
var SIZE_GUIDE = [
	{
		talla: "S",
		pecho: 53,
		largo: 69,
		manga: 24
	},
	{
		talla: "M",
		pecho: 57,
		largo: 73,
		manga: 25
	},
	{
		talla: "L",
		pecho: 60,
		largo: 75,
		manga: 26
	},
	{
		talla: "XL",
		pecho: 64,
		largo: 77,
		manga: 27
	}
];
function ProductPage() {
	const { product } = Route.useLoaderData();
	const [active, setActive] = (0, import_react.useState)(0);
	const [direction, setDirection] = (0, import_react.useState)(0);
	const [size, setSize] = (0, import_react.useState)(product.sizes[0]);
	const [sizeGuideOpen, setSizeGuideOpen] = (0, import_react.useState)(false);
	const sizeGuideRef = (0, import_react.useRef)(null);
	const images = product.images;
	const isCamiseta = product.category === "Camiseta";
	(0, import_react.useEffect)(() => {
		setActive(0);
		setDirection(0);
	}, [product.slug]);
	const goTo = (index) => {
		setDirection(index > active ? 1 : -1);
		setActive(index);
	};
	const openSizeGuide = () => {
		setSizeGuideOpen(true);
		setTimeout(() => {
			sizeGuideRef.current?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 50);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white text-black",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, { text: "POR Y PARA JÓVENES" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { current: "brand" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-16 grid md:grid-cols-2 gap-10 md:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/5] bg-muted overflow-hidden select-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						custom: direction,
						mode: "popLayout",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							src: images[active],
							alt: product.name,
							custom: direction,
							variants: {
								enter: (dir) => ({
									x: dir > 0 ? "100%" : "-100%",
									opacity: 0
								}),
								center: {
									x: 0,
									opacity: 1
								},
								exit: (dir) => ({
									x: dir > 0 ? "-100%" : "100%",
									opacity: 0
								})
							},
							initial: "enter",
							animate: "center",
							exit: "exit",
							transition: {
								duration: .3,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "absolute inset-0 w-full h-full object-cover",
							decoding: "async",
							draggable: false
						}, active)
					}), images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 pointer-events-none",
						children: images.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === active ? "bg-white" : "bg-white/50"}` }, i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-4 gap-3",
					children: images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => goTo(i),
						className: `cursor-pointer aspect-square overflow-hidden border-2 transition-colors ${active === i ? "border-black" : "border-transparent"}`,
						"aria-label": `Imagen ${i + 1}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: "",
							loading: "lazy",
							decoding: "async",
							className: "w-full h-full object-cover"
						})
					}, i))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/eclipssebrand",
						className: "text-[11px] uppercase tracking-[0.25em] hover:underline",
						children: "← Volver a DROP 008"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[10px] uppercase tracking-[0.4em] text-muted-foreground",
						children: product.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4 mt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl md:text-6xl leading-tight",
								children: product.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-2xl",
								children: product.price
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shrink-0 mt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-block rotate-[-8deg] border-2 border-black rounded-sm px-2.5 py-1.5 font-display text-[9px] uppercase tracking-[0.2em] leading-tight bg-white shadow-sm",
								style: {
									textAlign: "center",
									minWidth: "76px"
								},
								children: [
									"Unidades",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"limitadas"
								]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.25em] mb-3",
								children: "Talla"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: product.sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSize(s),
									"aria-pressed": size === s,
									className: `cursor-pointer min-w-[52px] min-h-[44px] px-4 py-3 text-sm rounded-full border transition-colors ${size === s ? "bg-black text-white border-black" : "border-black hover:bg-black hover:text-white"}`,
									children: s
								}, s))
							}),
							isCamiseta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: openSizeGuide,
								className: "cursor-pointer mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground underline underline-offset-4 hover:text-black transition-colors",
								children: "Guía de tallas"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: WHATSAPP_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-10 inline-block w-full md:w-auto text-center rounded-full border border-black bg-black text-white px-10 py-4 font-display text-[11px] uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-colors",
						children: "Compra por WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground",
						children: "Te atendemos directamente por WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 border-t border-border pt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg mb-3",
							children: "Descripción"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed",
							children: product.description
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 border-t border-border pt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg mb-3",
							children: "Detalles"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "text-sm text-muted-foreground leading-relaxed space-y-1",
							children: product.details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", d] }, d))
						})]
					}),
					isCamiseta && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: sizeGuideRef,
						className: "mt-8 border-t border-border pt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setSizeGuideOpen((v) => !v),
							className: "cursor-pointer w-full flex items-center justify-between gap-4 text-left",
							"aria-expanded": sizeGuideOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg",
								children: "Guía de tallas"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-xl transition-transform duration-300 ${sizeGuideOpen ? "rotate-45" : ""}`,
								"aria-hidden": "true",
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: false,
							animate: {
								height: sizeGuideOpen ? "auto" : 0,
								opacity: sizeGuideOpen ? 1 : 0
							},
							transition: {
								duration: .35,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full text-sm border-collapse",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-border",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "text-left py-2 pr-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-normal" }), SIZE_GUIDE.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-2 px-3 text-[10px] uppercase tracking-[0.2em] font-display font-semibold text-center",
												children: r.talla
											}, r.talla))]
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
											className: "divide-y divide-border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-3 pr-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap",
													children: "Ancho pecho"
												}), SIZE_GUIDE.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-3 px-3 text-center text-sm tabular-nums",
													children: r.pecho
												}, r.talla))] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-3 pr-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap",
													children: "Largo frontal"
												}), SIZE_GUIDE.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-3 px-3 text-center text-sm tabular-nums",
													children: r.largo
												}, r.talla))] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-3 pr-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap",
													children: "Manga"
												}), SIZE_GUIDE.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-3 px-3 text-center text-sm tabular-nums",
													children: r.manga
												}, r.talla))] })
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-[10px] text-muted-foreground",
										children: "Medidas en cm. Tolerancia de producción ±5%."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-[10px] text-muted-foreground",
										children: [
											"Corte ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-black",
												children: "oversize"
											}),
											" — si dudas entre tallas, elige la menor."
										]
									})
								]
							})
						})]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 md:px-8 py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl md:text-3xl mb-8",
						children: "También del DROP 008"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-5",
						children: products.filter((p) => p.slug !== product.slug).slice(0, 4).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/prendas/$slug",
							params: { slug: p.slug },
							className: "group block text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/5] bg-muted overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.front,
									alt: p.name,
									loading: "lazy",
									decoding: "async",
									className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-col items-center gap-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: p.price
								})]
							})]
						}, p.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ProductPage as component };
