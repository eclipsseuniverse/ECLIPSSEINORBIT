import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Logo } from "./Logo";

export function SiteHeader({ current }: { current: "brand" | "custom" }) {
  const other = current === "brand" ? "custom" : "brand";
  const otherLabel = other === "brand" ? "ECLIPSSEBRAND" : "PERSONALIZA";
  const otherTo = other === "brand" ? "/eclipssebrand" : "/personaliza";
  const homeTo = current === "brand" ? "/eclipssebrand" : "/personaliza";
  const navigate = useNavigate();
  const location = useRouterState({ select: (s) => s.location.pathname });

  const handleInicio = () => {
    if (location === homeTo) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate({ to: homeTo }).then(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 shrink-0">
          <Link to="/" className="flex items-center" aria-label="Inicio ECLIPSSE">
            <Logo className="h-6" />
          </Link>
          <button
            onClick={handleInicio}
            className="font-display text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-black hover:opacity-60 transition-opacity"
          >
            INICIO
          </button>
        </div>

        <nav className="flex items-center gap-2 md:gap-4">
          <Link
            to={otherTo}
            className="font-display text-[10px] md:text-[11px] uppercase tracking-[0.2em] rounded-full border border-black px-3.5 py-2 md:px-5 md:py-2.5 hover:bg-black hover:text-white transition-colors"
          >
            ↔ {otherLabel}
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
