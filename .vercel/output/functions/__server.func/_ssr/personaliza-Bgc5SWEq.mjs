import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Logo } from "./Logo-CYDeAetG.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-C7y3kWDb.mjs";
import { n as Marquee, t as ContactCTA } from "./ContactCTA-ombLqjxh.mjs";
import { t as WhatsAppButton } from "./WhatsAppButton-CXCZo6el.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/personaliza-Bgc5SWEq.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		n: "01",
		t: "Cuéntanos tu idea",
		d: "Mándanos tu concepto, referencias y cantidades. Te asesoramos sin compromiso."
	},
	{
		n: "02",
		t: "Diseño y prueba",
		d: "Nuestro estudio prepara el arte final y una visualización digital antes de imprimir."
	},
	{
		n: "03",
		t: "Producción",
		d: "Imprimimos en serigrafía, DTF o bordado sobre prendas heavy cotton de primera calidad."
	},
	{
		n: "04",
		t: "Entrega",
		d: "Recibe tu pedido en 7–14 días en toda España. Packaging neutro disponible."
	}
];
var services = [
	{
		t: "Serigrafía",
		d: "Acabado profesional, colores planos y máxima durabilidad. Ideal para tiradas medianas y grandes."
	},
	{
		t: "DTF",
		d: "Detalle fotográfico, full color y diseños complejos. Perfecto para pequeñas cantidades."
	},
	{
		t: "Bordado",
		d: "Textura premium para logos, gorras y prendas corporativas."
	},
	{
		t: "Diseño gráfico",
		d: "Si no tienes diseño, lo creamos contigo. De la idea al artwork final."
	}
];
function CustomPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white text-black",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, { text: "TÚ NOS DAS LA IDEA, NOSOTROS LA CREAMOS" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { current: "custom" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 md:px-8 pt-20 md:pt-32 pb-20 md:pb-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								y: 20,
								opacity: 0
							},
							animate: {
								y: 0,
								opacity: 1
							},
							transition: { duration: .6 },
							className: "text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-6",
							children: "Personalizados · ECLIPSSE™ UNIVERSE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								y: 40,
								opacity: 0
							},
							animate: {
								y: 0,
								opacity: 1
							},
							transition: {
								duration: .8,
								delay: .1,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "font-display text-5xl md:text-[8rem] leading-[0.9] tracking-tight",
							children: [
								"Tu idea,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"nuestra",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"órbita."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								duration: .7,
								delay: .3
							},
							className: "mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed",
							children: "En ECLIPSSE™ UNIVERSE creemos que cada idea merece convertirse en algo real. Ofrecemos productos personalizados, tanto para pedidos pequeños como para proyectos más grandes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
							href: "#contacto",
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								duration: .7,
								delay: .5
							},
							className: "mt-10 inline-block rounded-full border border-black px-8 py-4 font-display text-[11px] uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-colors",
							children: "Pedir presupuesto →"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					"aria-hidden": true,
					initial: { opacity: 0 },
					animate: {
						opacity: .05,
						rotate: 360
					},
					transition: {
						opacity: { duration: 2 },
						rotate: {
							duration: 80,
							repeat: Infinity,
							ease: "linear"
						}
					},
					className: "pointer-events-none absolute -right-40 -bottom-40 w-[600px] h-[600px] hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "w-full h-full" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative h-[72vh] min-h-[420px] overflow-hidden border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: "/images/personaliza-hero-wide.png",
					alt: "ECLIPSSE™ UNIVERSE — Personaliza",
					initial: { scale: 1.06 },
					animate: { scale: 1 },
					transition: {
						duration: 2,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "absolute inset-0 w-full h-full object-cover grayscale",
					loading: "eager",
					decoding: "async"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-black text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 28
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .7,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.4em] opacity-60 mb-4",
							children: "01 · Pedidos pequeños"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl md:text-6xl leading-none mb-10",
							children: "1 a 3 unidades"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .7,
							delay: .12,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "space-y-5 text-sm md:text-base opacity-90 leading-relaxed",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Si lo que buscas es una unidad única o pocas unidades, estás en el lugar correcto. Productos personalizables como:" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-disc list-inside space-y-1 opacity-90",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Camisetas personalizadas" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sudaderas personalizadas" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tazas personalizadas" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Otros productos seleccionados" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl pt-6",
								children: "¿Cómo funciona?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
								className: "list-decimal list-inside space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Elige el producto que quieras personalizar." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Prepara tu diseño." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Finaliza tu pedido normalmente." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mándanos tus diseños contactando con nosotros." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Nosotros nos encargamos de ajustar el diseño, producir el producto y enviarlo a tu casa." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl pt-6",
								children: "A tu gusto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-disc list-inside space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Usa tu propio diseño." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Elige si va en el frontal, trasera…" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Crea una prenda única, hecha especialmente para ti." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "opacity-70 text-xs uppercase tracking-[0.2em] pt-4",
								children: "Importante: los productos personalizados se fabrican bajo pedido. No se admiten devoluciones salvo defecto de fabricación."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 28
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .7,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4",
							children: "02 · Pedidos grandes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl md:text-6xl mb-10",
							children: "Más de 3 unidades"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .7,
							delay: .12,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Si lo que quieres es:" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-disc list-inside space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Hacer ropa personalizada para una marca, grupo…" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Pedidos de más de 3 unidades." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Algo más complejo (packaging, calidades concretas, asesoramiento)." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Producción más profesional y a mayor escala." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-black text-xl",
								children: "Trabajamos contigo de forma totalmente personalizada."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl pt-6 text-black",
								children: "Trabajos a medida"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-disc list-inside space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Asesoramiento directo." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Creación del producto desde cero." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Producción ajustada a tu proyecto." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mejores opciones de calidad y acabado." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Presupuesto personalizado." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl pt-6 text-black",
								children: "Cuéntanos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-disc list-inside space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Qué producto quieres." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cantidad aproximada." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tipo de diseño." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Idea o proyecto que tienes en mente." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Te responderemos con la mejor opción posible para tu caso." })
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border flex justify-center bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scale: 1.02
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: 1,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "w-full max-w-[540px] aspect-[4/5] overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/sudaderas-grupos.png",
						alt: "ECLIPSSE™ UNIVERSE — Sudaderas para grupos",
						className: "w-full h-full object-cover",
						loading: "lazy",
						decoding: "async"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
						initial: {
							opacity: 0,
							y: 24
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .65,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "font-display text-4xl md:text-6xl mb-14",
						children: "Cómo trabajamos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-4 gap-8 md:gap-10",
						children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 24
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-50px"
							},
							transition: {
								duration: .6,
								delay: i * .08
							},
							className: "border-t border-black pt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-3xl",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl mt-3 mb-2",
									children: s.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground leading-relaxed",
									children: s.d
								})
							]
						}, s.n))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-black text-white border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.4em] opacity-60 mb-4",
							children: "Servicios"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl md:text-6xl mb-14",
							children: "Técnicas y acabados"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid md:grid-cols-2 gap-10 md:gap-16",
							children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 24
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: {
									once: true,
									margin: "-50px"
								},
								transition: {
									duration: .6,
									delay: i * .08
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl mb-2",
									children: s.t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm md:text-base opacity-80 leading-relaxed",
									children: s.d
								})]
							}, s.t))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
		]
	});
}
//#endregion
export { CustomPage as component };
