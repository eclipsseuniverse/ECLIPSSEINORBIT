import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/legal/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — ECLIPSSE™ UNIVERSE" },
      { name: "description", content: "Política de privacidad y tratamiento de datos personales en ECLIPSSE™ UNIVERSE." },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/legal/privacidad" }],
  }),
  component: () => (
    <LegalLayout title="Política de privacidad">
      <p>
        En ECLIPSSE™ UNIVERSE tratamos tus datos personales con el máximo respeto y conforme al Reglamento (UE) 2016/679
        (RGPD) y a la Ley Orgánica 3/2018 de Protección de Datos.
      </p>
      <h2>Responsable</h2>
      <p>ECLIPSSE™ UNIVERSE — Sevilla, España · <a href="mailto:eclipssebrand@gmail.com">eclipssebrand@gmail.com</a></p>
      <h2>Datos que recogemos</h2>
      <p>
        Únicamente recogemos los datos que tú nos facilitas cuando contactas con nosotros vía WhatsApp, Instagram o
        email: nombre, datos de contacto y la información necesaria para gestionar tu pedido (talla, dirección de envío,
        forma de pago acordada).
      </p>
      <h2>Finalidad</h2>
      <p>
        Gestionar tu pedido o consulta, mantener la comunicación contigo y cumplir las obligaciones legales asociadas a
        la venta.
      </p>
      <h2>Base legal</h2>
      <p>
        Tu consentimiento al iniciar la conversación y la ejecución del contrato de compraventa o prestación del
        servicio de personalización.
      </p>
      <h2>Conservación</h2>
      <p>
        Conservamos los datos el tiempo necesario para gestionar el pedido y, en su caso, durante los plazos legales
        (facturación, garantías).
      </p>
      <h2>Destinatarios</h2>
      <p>
        No cedemos tus datos a terceros salvo a la empresa de mensajería para realizar el envío y a las obligaciones
        legales que correspondan.
      </p>
      <h2>Derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo
        a <a href="mailto:eclipssebrand@gmail.com">eclipssebrand@gmail.com</a>. También puedes reclamar ante la Agencia
        Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">aepd.es</a>).
      </p>
    </LegalLayout>
  ),
});
