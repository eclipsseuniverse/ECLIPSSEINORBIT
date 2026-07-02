import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/legal/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones — ECLIPSSE™ UNIVERSE" },
      { name: "description", content: "Términos y condiciones de venta de ECLIPSSE™ UNIVERSE." },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/legal/terminos" }],
  }),
  component: () => (
    <LegalLayout title="Términos y condiciones">
      <h2>Información general</h2>
      <p>
        Las presentes condiciones regulan la venta y prestación de servicios de ECLIPSSE™ UNIVERSE, marca con domicilio
        en Sevilla (España). Realizar un pedido implica la aceptación de estas condiciones.
      </p>
      <h2>Productos y precios</h2>
      <p>
        Los precios indicados están expresados en euros (€) e incluyen los impuestos aplicables. Los gastos de envío se
        comunican antes de confirmar el pedido. ECLIPSSE™ UNIVERSE se reserva el derecho a modificar precios sin previo
        aviso, respetando siempre los pedidos ya confirmados.
      </p>
      <h2>Pedidos y pago</h2>
      <p>
        Los pedidos se formalizan a través de WhatsApp o Instagram. El pago se acuerda con el cliente (transferencia,
        Bizum u otros medios) y se confirma antes de la producción o envío.
      </p>
      <h2>Disponibilidad</h2>
      <p>
        Trabajamos por <strong>DROPS</strong> con unidades limitadas. Una vez agotado el stock de un DROP, el producto
        no vuelve a estar disponible.
      </p>
      <h2>Envíos</h2>
      <p>
        Los envíos se realizan a toda España. El plazo estimado de entrega es de 3 a 10 días laborables tras la
        confirmación del pago, salvo en pedidos personalizados (ver sección correspondiente).
      </p>
      <h2>Productos personalizados</h2>
      <p>
        Los productos personalizados se fabrican bajo pedido. No se admiten devoluciones salvo defecto de fabricación,
        de acuerdo con la legislación vigente.
      </p>
      <h2>Atención al cliente</h2>
      <p>
        Para cualquier consulta: <a href="mailto:eclipssebrand@gmail.com">eclipssebrand@gmail.com</a> o por WhatsApp /
        Instagram.
      </p>
      <h2>Legislación</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española. Los consumidores pueden acudir a la plataforma
        europea de resolución de litigios en línea:{" "}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>.
      </p>
    </LegalLayout>
  ),
});
