import { o as __toESM } from "../_runtime.mjs";
import { n as products } from "./products-CaIqum4E.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-C7y3kWDb.mjs";
import { n as Marquee, t as ContactCTA } from "./ContactCTA-ombLqjxh.mjs";
import { t as WhatsAppButton } from "./WhatsAppButton-CXCZo6el.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/eclipssebrand-DlNH20Uu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TARGET = /* @__PURE__ */ new Date("2026-09-01T00:00:00");
function getTimeLeft() {
	const diff = TARGET.getTime() - Date.now();
	if (diff <= 0) return {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	};
	return {
		days: Math.floor(diff / 864e5),
		hours: Math.floor(diff % 864e5 / 36e5),
		minutes: Math.floor(diff % 36e5 / 6e4),
		seconds: Math.floor(diff % 6e4 / 1e3)
	};
}
function Digit({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-2 md:gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-5xl md:text-7xl lg:text-8xl tabular-nums leading-none tracking-tight",
			suppressHydrationWarning: true,
			children: String(value).padStart(2, "0")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[9px] md:text-[10px] uppercase tracking-[0.35em] text-muted-foreground",
			children: label
		})]
	});
}
function DropCountdown() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [time, setTime] = (0, import_react.useState)({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	(0, import_react.useEffect)(() => {
		setMounted(true);
		setTime(getTimeLeft());
		const id = setInterval(() => setTime(getTimeLeft()), 1e3);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border bg-white text-black",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "mx-auto max-w-4xl px-5 md:px-8 py-20 md:py-32 text-center",
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
				duration: .75,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[9px] uppercase tracking-[0.45em] text-muted-foreground mb-10",
					children: "En órbita..."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-center gap-6 md:gap-14",
					style: {
						opacity: mounted ? 1 : 0,
						transition: "opacity 0.3s"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Digit, {
							value: time.days,
							label: "días"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-4xl md:text-6xl text-black/20 self-start mt-1",
							"aria-hidden": "true",
							children: ":"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Digit, {
							value: time.hours,
							label: "horas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-4xl md:text-6xl text-black/20 self-start mt-1",
							"aria-hidden": "true",
							children: ":"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Digit, {
							value: time.minutes,
							label: "min"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-4xl md:text-6xl text-black/20 self-start mt-1",
							"aria-hidden": "true",
							children: ":"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Digit, {
							value: time.seconds,
							label: "seg"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm mx-auto",
					children: "El tiempo que queda para el fin del verano."
				})
			]
		})
	});
}
var hero_drop_jpeg_asset_default = {
	version: 1,
	asset_id: "be553e0f-6cf7-48ab-ba0f-cc7e426215c0",
	project_id: "71c1152a-defc-455f-93d2-777344db72ff",
	url: "/images/hero_drop.jpeg",
	r2_key: "a/v1/71c1152a-defc-455f-93d2-777344db72ff/be553e0f-6cf7-48ab-ba0f-cc7e426215c0/hero_drop.jpeg",
	original_filename: "hero_drop.jpeg",
	size: 430929,
	content_type: "image/jpeg",
	created_at: "2026-06-18T19:37:45Z"
};
var historia = [
	{
		t: "DROP 001 — SUPERNOVA DROP",
		d: "Nuestro primer lanzamiento oficial. Una camiseta oversize en dos colores, con el lema \"Don't Stop Shining\". Más de 50 unidades vendidas en formato PRE-ORDER. El inicio de todo."
	},
	{
		t: "DROP 003 — YOUTH HOODIE",
		d: "Una sudadera llamada \"YOUTH HOODIE\" para el invierno, con la mejor calidad posible y representando nuestra marca por y para jóvenes. Venta mediante PRE-ORDER."
	},
	{
		t: "DROP 005 — De SVQ al mundo | Fulness of joy",
		d: "Nuestro primer lanzamiento con stock. Dos diseños de camisetas blancas para la primavera. De Sevilla al mundo."
	},
	{
		t: "Verano 2025 — Tres Drops",
		d: "SUMMER DROP 006: camiseta para el verano en blanco, celeste y amarillo, corte oversize y 100% algodón. DROP 002 / SUPERNOVA 1.0: segunda edición de la camiseta del SUPERNOVA DROP 001, blanca, oversize, 100% algodón. DROP 004: camiseta blanca con diseño en rojo y negro, corte oversize y 100% algodón, \"Creadores del futuro\"."
	},
	{
		t: "DROP 007 — ECLIPSSEBRAND × ANDEX",
		d: "La crewneck en dos colores sacada en nuestro primer invierno oficial. Una sudadera sin capucha de unidades limitadas en colaboración con Andex Cáncer Infantil Sevilla, en la que el 75% del beneficio obtenido fue donado a la asociación."
	},
	{
		t: "DROP 008 — IN ORBIT",
		d: "Colección para el Verano de 2026 de 5 camisetas oversize perfectas para disfrutar de la playa y una gorra vintage de alta calidad. Make in Orbit."
	}
];
var faqs = [{
	q: "Cómo comprar",
	a: "A través de Instagram DM o WhatsApp. Te respondemos lo antes posible y te orientamos en todo el proceso de compra."
}, {
	q: "Historia",
	a: "Nuestra marca trabaja mediante DROPS: lanzamientos de un número limitado de prendas, disponibles solo durante un periodo concreto o hasta agotar existencias. Cada DROP es único. Una vez se agota el stock, no vuelve a estar disponible."
}];
function BrandPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white text-black",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, { text: "POR Y PARA JÓVENES" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { current: "brand" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative h-[72vh] min-h-[480px] overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: hero_drop_jpeg_asset_default.url,
					alt: "ECLIPSSE™ UNIVERSE — DROP 008",
					initial: { scale: 1.08 },
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
					className: "absolute inset-0 w-full h-full object-cover",
					loading: "eager",
					fetchPriority: "high",
					decoding: "async"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "coleccion",
				className: "mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						duration: .6,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "flex items-end justify-between mb-10 md:mb-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl md:text-6xl",
						children: "DROP 008"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block",
						children: [products.length, " piezas"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-6 gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16",
					children: products.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: ["md:col-span-2", i === 3 ? "md:col-start-2" : ""].join(" ").trim(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
							...p,
							index: i
						})
					}, p.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-white flex justify-center",
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
						src: "/images/drop008-banner.png",
						alt: "ECLIPSSE™ IN ORBIT — DROP 008",
						className: "w-full h-full object-cover",
						loading: "lazy",
						decoding: "async"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "sobre-nosotros",
				className: "border-t border-border bg-black text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
								children: "Sobre nosotros"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-6xl leading-none mb-10",
								children: "Sobre Nosotros"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
								delay: .15,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "space-y-5 text-sm md:text-base opacity-90 leading-relaxed",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Somos una marca de ropa nacida en 2024 en Sevilla (España), fundada por un grupo de amigos jugadores de rugby. Bajo el lema \"por y para jóvenes\", nuestro objetivo es ofrecer productos únicos, con la mejor calidad posible y con un estilo que conecte con nuestra generación. Apostamos por un modelo responsable y local, buscando siempre cuidar el medioambiente." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl md:text-2xl opacity-100",
									children: "DE SEVILLA AL MUNDO"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl md:text-3xl pt-6",
									children: "Nuestro Objetivo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Somos una marca de ropa hecha con una visión clara: destacar entre las marcas ya establecidas. Ofrecer productos con estilo, calidad y actitud con precios asequibles y sin perder la conexión con quienes somos: una generación que es constante, piensa diferente y quiere dejar huella. Buscamos inspirar a otros jóvenes a apostar por sus ideas y construir algo propio, como hacemos nosotros. Queremos diferenciarnos de otras marcas y usar este proyecto para algo más que vender. Tener una identidad, una historia y una misión, por ejemplo ayudando a personas que lo necesiten o creando productos únicos." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl md:text-3xl pt-6",
									children: "Por y para jóvenes"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 -mx-5 md:-mx-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex overflow-x-auto gap-3 px-5 md:px-8 pb-2 snap-x snap-mandatory",
								style: {
									scrollbarWidth: "none",
									msOverflowStyle: "none"
								},
								children: [
									{
										src: "/images/gallery-1.png",
										alt: "ECLIPSSE™ — Calle"
									},
									{
										src: "/images/gallery-2.png",
										alt: "ECLIPSSE™ — DROP 007 Andex"
									},
									{
										src: "/images/gallery-3.png",
										alt: "ECLIPSSE™ — Summer Drop"
									},
									{
										src: "/images/gallery-4.png",
										alt: "ECLIPSSE™ — Supernova Drop 001"
									},
									{
										src: "/images/gallery-5.png",
										alt: "ECLIPSSE™ — DROP 006"
									}
								].map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										opacity: 0,
										x: 24
									},
									whileInView: {
										opacity: 1,
										x: 0
									},
									viewport: {
										once: true,
										margin: "-40px"
									},
									transition: {
										duration: .55,
										delay: i * .07
									},
									className: "flex-none snap-start w-[72vw] md:w-[36vw] lg:w-[26vw] aspect-[4/5] overflow-hidden bg-white/5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: img.src,
										alt: img.alt,
										className: "w-full h-full object-cover grayscale",
										loading: "lazy",
										decoding: "async"
									})
								}, img.src))
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "mas",
				className: "border-t border-border bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-5 md:px-8 pt-20 md:pt-28 pb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4",
							children: "Información"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl md:text-6xl mb-10 md:mb-14",
							children: "Información"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-black/15 border-y border-black/15",
						children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqItem, {
							q: f.q,
							a: f.a,
							historia: f.q === "Historia" ? historia : void 0
						}, f.q))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: { opacity: 0 },
					whileInView: { opacity: 1 },
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
					className: "relative w-full aspect-[16/7] md:aspect-[21/9] overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/instagram-banner.png",
						alt: "ECLIPSSE™ UNIVERSE",
						className: "w-full h-full object-cover grayscale",
						loading: "lazy",
						decoding: "async"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.instagram.com/eclipssebrand/p/DX42pjMDHmh/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "font-display text-[11px] uppercase tracking-[0.35em] text-white border border-white/70 px-8 py-4 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer",
							children: "Instagram"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropCountdown, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
		]
	});
}
function FaqItem({ q, a, historia }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const contentRef = (0, import_react.useRef)(null);
	const [height, setHeight] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!contentRef.current) return;
		setHeight(open ? contentRef.current.scrollHeight : 0);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-5 md:py-7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen((v) => !v),
			className: "w-full flex items-center justify-between gap-6 text-left",
			"aria-expanded": open,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl md:text-3xl",
				children: q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `text-2xl transition-transform duration-300 ${open ? "rotate-45" : ""}`,
				"aria-hidden": "true",
				children: "+"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			animate: {
				height,
				opacity: open ? 1 : 0
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
			style: { height: 0 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: contentRef,
				className: "pt-5 text-sm md:text-base text-muted-foreground leading-relaxed",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: a }), historia && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-5",
					children: historia.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-black/15 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-base md:text-lg text-black",
							children: h.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed mt-1",
							children: h.d
						})]
					}, h.t))
				})]
			})
		})]
	});
}
function ProductCard({ slug, name, price, front, back, index }) {
	const [hover, setHover] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
			margin: "-50px"
		},
		transition: {
			duration: .6,
			delay: index % 3 * .06,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/prendas/$slug",
			params: { slug },
			onMouseEnter: () => setHover(true),
			onMouseLeave: () => setHover(false),
			className: "group block text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[4/5] overflow-hidden bg-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: front,
					alt: name,
					loading: "lazy",
					decoding: "async",
					className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hover ? "opacity-0" : "opacity-100"}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: back,
					alt: "",
					"aria-hidden": "true",
					loading: "lazy",
					decoding: "async",
					className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hover ? "opacity-100" : "opacity-0"}`
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-col items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-sm md:text-base tracking-tight text-center px-1",
					children: name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs md:text-sm tabular-nums text-muted-foreground",
					children: price
				})]
			})]
		})
	});
}
//#endregion
export { BrandPage as component };
