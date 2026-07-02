import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/legal/cookies")({
  head: () => ({
    meta: [
      { title: "Política de cookies — ECLIPSSE™ UNIVERSE" },
      { name: "description", content: "Información sobre el uso de cookies en el sitio de ECLIPSSE™ UNIVERSE." },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/legal/cookies" }],
  }),
  component: () => (
    <LegalLayout title="Política de cookies">
      <p>
        Este sitio web es informativo y <strong>no utiliza cookies de seguimiento, analítica ni publicidad de
        terceros</strong>. Únicamente pueden emplearse cookies técnicas estrictamente necesarias para el funcionamiento
        básico del sitio, exentas del deber de consentimiento.
      </p>
      <h2>¿Qué es una cookie?</h2>
      <p>
        Una cookie es un pequeño fichero que un sitio web descarga en tu dispositivo para almacenar y recuperar
        información sobre tu navegación.
      </p>
      <h2>Cookies utilizadas</h2>
      <p>
        Solo cookies técnicas necesarias para servir el sitio. Si en el futuro incorporáramos cookies analíticas o de
        terceros, se solicitaría tu consentimiento previo y se actualizaría esta política.
      </p>
      <h2>Cómo gestionar las cookies</h2>
      <p>
        Puedes configurar o eliminar las cookies desde los ajustes de tu navegador (Chrome, Safari, Firefox, Edge…).
      </p>
    </LegalLayout>
  ),
});
