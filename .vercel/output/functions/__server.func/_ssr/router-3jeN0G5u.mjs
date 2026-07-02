import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as Logo } from "./Logo-CYDeAetG.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { t as Route$9 } from "./prendas._slug-Lxom66il.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-3jeN0G5u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BZYfIruM.css";
function CookieBanner() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			if (!localStorage.getItem("cookie_consent")) setVisible(true);
		} catch {}
	}, []);
	const accept = () => {
		localStorage.setItem("cookie_consent", "accepted");
		setVisible(false);
	};
	const reject = () => {
		localStorage.setItem("cookie_consent", "rejected");
		setVisible(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: visible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			y: 100,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		exit: {
			y: 100,
			opacity: 0
		},
		transition: {
			duration: .45,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "fixed bottom-0 left-0 right-0 z-50 border-t border-black/10 bg-white shadow-[0_-4px_24px_rgba(0,0,0,0.06)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between px-5 md:px-8 py-4 md:py-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xs uppercase tracking-[0.2em] mb-1",
				children: "Cookies"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground max-w-xl leading-relaxed",
				children: [
					"Usamos cookies propias para mejorar tu experiencia de navegación. Puedes aceptarlas o rechazarlas.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/legal/cookies",
						className: "underline underline-offset-2 hover:text-black transition-colors",
						children: "Política de cookies"
					}),
					"."
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: reject,
					className: "cursor-pointer px-5 py-2.5 text-[10px] uppercase tracking-widest border border-black/25 hover:border-black transition-colors",
					children: "Rechazar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: accept,
					className: "cursor-pointer px-5 py-2.5 text-[10px] uppercase tracking-widest bg-black text-white hover:bg-black/80 transition-colors",
					children: "Aceptar todo"
				})]
			})]
		})
	}) });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col items-center justify-center bg-white px-6 text-black",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-12 md:h-16" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-7xl md:text-9xl tracking-tight",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs uppercase tracking-[0.35em] text-muted-foreground",
				children: "Esta órbita no existe"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground max-w-sm text-center",
				children: "La página que buscas se ha perdido en el espacio. Vuelve al inicio y elige una experiencia."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-10 inline-block rounded-full border border-black bg-black text-white px-8 py-4 font-display text-[11px] uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-colors",
				children: "Volver al inicio"
			})
		]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-white px-4 text-black",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl",
					children: "Algo ha fallado"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Inténtalo de nuevo en unos segundos."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "mt-6 border border-black bg-black text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors",
					children: "Reintentar"
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "theme-color",
				content: "#ffffff"
			},
			{ title: "ECLIPSSE™ UNIVERSE | Por y para jóvenes" },
			{
				name: "description",
				content: "Marca de ropa y personalización por y para jóvenes. De Sevilla al mundo."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:site_name",
				content: "ECLIPSSE™ UNIVERSE"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: "ECLIPSSE™ UNIVERSE | Por y para jóvenes"
			},
			{
				property: "og:description",
				content: "Marca de ropa y personalización por y para jóvenes. De Sevilla al mundo."
			},
			{
				property: "og:url",
				content: "https://www.eclipssebrand.es/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "ECLIPSSE™ UNIVERSE | Por y para jóvenes"
			},
			{
				name: "twitter:description",
				content: "Marca de ropa y personalización por y para jóvenes. De Sevilla al mundo."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/images/favicon.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/images/favicon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=League+Spartan:wght@600;700;800;900&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "ECLIPSSE™ UNIVERSE",
				alternateName: "ECLIPSSEBRAND",
				slogan: "Por y para Jóvenes",
				description: "Marca de ropa y personalización por y para jóvenes. De Sevilla al mundo.",
				url: "https://www.eclipssebrand.es/",
				sameAs: ["https://www.instagram.com/eclipssebrand/"],
				address: {
					"@type": "PostalAddress",
					addressLocality: "Sevilla",
					addressCountry: "ES"
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "es",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieBanner, {})]
	});
}
var $$splitComponentImporter$7 = () => import("./personaliza-Bgc5SWEq.mjs");
var Route$7 = createFileRoute("/personaliza")({
	head: () => ({
		meta: [
			{ title: "Personaliza tu ropa | ECLIPSSE™ UNIVERSE" },
			{
				name: "description",
				content: "Personaliza prendas con ECLIPSSE™ UNIVERSE. Ropa y personalización por y para jóvenes. De Sevilla al mundo."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "Personaliza tu ropa | ECLIPSSE™ UNIVERSE"
			},
			{
				property: "og:description",
				content: "Personaliza prendas con ECLIPSSE™ UNIVERSE. Ropa y personalización por y para jóvenes. De Sevilla al mundo."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.eclipssebrand.es/personaliza"
			},
			{
				name: "twitter:title",
				content: "Personaliza tu ropa | ECLIPSSE™ UNIVERSE"
			},
			{
				name: "twitter:description",
				content: "Personaliza prendas con ECLIPSSE™ UNIVERSE. Ropa y personalización por y para jóvenes. De Sevilla al mundo."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.eclipssebrand.es/personaliza"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./eclipssebrand-DlNH20Uu.mjs");
var Route$6 = createFileRoute("/eclipssebrand")({
	head: () => ({
		meta: [
			{ title: "ECLIPSSEBRAND | ECLIPSSE™ UNIVERSE" },
			{
				name: "description",
				content: "Descubre las prendas y drops de ECLIPSSEBRAND. Marca de ropa por y para jóvenes. De Sevilla al mundo."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "ECLIPSSEBRAND | ECLIPSSE™ UNIVERSE"
			},
			{
				property: "og:description",
				content: "Descubre las prendas y drops de ECLIPSSEBRAND. Marca de ropa por y para jóvenes. De Sevilla al mundo."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.eclipssebrand.es/eclipssebrand"
			},
			{
				name: "twitter:title",
				content: "ECLIPSSEBRAND | ECLIPSSE™ UNIVERSE"
			},
			{
				name: "twitter:description",
				content: "Descubre las prendas y drops de ECLIPSSEBRAND. Marca de ropa por y para jóvenes. De Sevilla al mundo."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.eclipssebrand.es/eclipssebrand"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./routes-ChZFgDpH.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "ECLIPSSE™ UNIVERSE | Por y para jóvenes" },
			{
				name: "description",
				content: "Marca de ropa y personalización por y para jóvenes. De Sevilla al mundo."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "ECLIPSSE™ UNIVERSE | Por y para jóvenes"
			},
			{
				property: "og:description",
				content: "Marca de ropa y personalización por y para jóvenes. De Sevilla al mundo."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.eclipssebrand.es/"
			},
			{
				name: "twitter:title",
				content: "ECLIPSSE™ UNIVERSE | Por y para jóvenes"
			},
			{
				name: "twitter:description",
				content: "Marca de ropa y personalización por y para jóvenes. De Sevilla al mundo."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.eclipssebrand.es/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./legal.terminos-KCSeu6kx.mjs");
var Route$4 = createFileRoute("/legal/terminos")({
	head: () => ({
		meta: [
			{ title: "Términos y condiciones — ECLIPSSE™ UNIVERSE" },
			{
				name: "description",
				content: "Términos y condiciones de venta de ECLIPSSE™ UNIVERSE."
			},
			{
				name: "robots",
				content: "index,follow"
			}
		],
		links: [{
			rel: "canonical",
			href: "/legal/terminos"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./legal.privacidad-B-6jRhOa.mjs");
var Route$3 = createFileRoute("/legal/privacidad")({
	head: () => ({
		meta: [
			{ title: "Política de privacidad — ECLIPSSE™ UNIVERSE" },
			{
				name: "description",
				content: "Política de privacidad y tratamiento de datos personales en ECLIPSSE™ UNIVERSE."
			},
			{
				name: "robots",
				content: "index,follow"
			}
		],
		links: [{
			rel: "canonical",
			href: "/legal/privacidad"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./legal.devoluciones-9QnSAKKr.mjs");
var Route$2 = createFileRoute("/legal/devoluciones")({
	head: () => ({
		meta: [
			{ title: "Envíos y devoluciones — ECLIPSSE™ UNIVERSE" },
			{
				name: "description",
				content: "Condiciones de envío y devoluciones de ECLIPSSE™ UNIVERSE."
			},
			{
				name: "robots",
				content: "index,follow"
			}
		],
		links: [{
			rel: "canonical",
			href: "/legal/devoluciones"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./legal.cookies-CMYR12IX.mjs");
var Route$1 = createFileRoute("/legal/cookies")({
	head: () => ({
		meta: [
			{ title: "Política de cookies — ECLIPSSE™ UNIVERSE" },
			{
				name: "description",
				content: "Información sobre el uso de cookies en el sitio de ECLIPSSE™ UNIVERSE."
			},
			{
				name: "robots",
				content: "index,follow"
			}
		],
		links: [{
			rel: "canonical",
			href: "/legal/cookies"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./legal.aviso-legal-BkqLQpPK.mjs");
var Route = createFileRoute("/legal/aviso-legal")({
	head: () => ({
		meta: [
			{ title: "Aviso legal — ECLIPSSE™ UNIVERSE" },
			{
				name: "description",
				content: "Aviso legal e información del responsable de ECLIPSSE™ UNIVERSE."
			},
			{
				name: "robots",
				content: "index,follow"
			}
		],
		links: [{
			rel: "canonical",
			href: "/legal/aviso-legal"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var PersonalizaRoute = Route$7.update({
	id: "/personaliza",
	path: "/personaliza",
	getParentRoute: () => Route$8
});
var EclipssebrandRoute = Route$6.update({
	id: "/eclipssebrand",
	path: "/eclipssebrand",
	getParentRoute: () => Route$8
});
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var PrendasSlugRoute = Route$9.update({
	id: "/prendas/$slug",
	path: "/prendas/$slug",
	getParentRoute: () => Route$8
});
var LegalTerminosRoute = Route$4.update({
	id: "/legal/terminos",
	path: "/legal/terminos",
	getParentRoute: () => Route$8
});
var LegalPrivacidadRoute = Route$3.update({
	id: "/legal/privacidad",
	path: "/legal/privacidad",
	getParentRoute: () => Route$8
});
var LegalDevolucionesRoute = Route$2.update({
	id: "/legal/devoluciones",
	path: "/legal/devoluciones",
	getParentRoute: () => Route$8
});
var LegalCookiesRoute = Route$1.update({
	id: "/legal/cookies",
	path: "/legal/cookies",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute,
	EclipssebrandRoute,
	PersonalizaRoute,
	LegalAvisoLegalRoute: Route.update({
		id: "/legal/aviso-legal",
		path: "/legal/aviso-legal",
		getParentRoute: () => Route$8
	}),
	LegalCookiesRoute,
	LegalDevolucionesRoute,
	LegalPrivacidadRoute,
	LegalTerminosRoute,
	PrendasSlugRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
