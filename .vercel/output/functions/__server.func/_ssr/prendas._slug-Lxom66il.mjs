import { t as getProduct } from "./products-CaIqum4E.mjs";
import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prendas._slug-Lxom66il.js
var $$splitNotFoundComponentImporter = () => import("./prendas._slug-OamuL5BT.mjs");
var $$splitComponentImporter = () => import("./prendas._slug-Bm5hxQWP.mjs");
var Route = createFileRoute("/prendas/$slug")({
	head: ({ params }) => {
		const p = getProduct(params.slug);
		return {
			meta: [
				{ title: p ? `${p.name} — ECLIPSSE™ UNIVERSE` : "Prenda | ECLIPSSE™ UNIVERSE" },
				{
					name: "description",
					content: p?.description ?? "Prenda ECLIPSSE™ UNIVERSE"
				},
				...p ? [{
					property: "og:image",
					content: p.front
				}] : [],
				{
					property: "og:url",
					content: `/prendas/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/prendas/${params.slug}`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	loader: ({ params }) => {
		const p = getProduct(params.slug);
		if (!p) throw notFound();
		return { product: p };
	}
});
//#endregion
export { Route as t };
