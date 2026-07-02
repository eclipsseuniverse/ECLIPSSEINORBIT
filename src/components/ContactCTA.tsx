import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/message/P5FFTHYMWKNRA1";
const INSTAGRAM_URL = "https://www.instagram.com/eclipssebrand/";
const TIKTOK_URL = "https://tiktok.com/@eclipssebrand";
const EMAIL = "eclipssebrand@gmail.com";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"/>
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function ContactCTA() {
  return (
    <section id="contacto" className="border-t border-border bg-white">
      <motion.div
        className="mx-auto max-w-lg px-5 md:px-8 py-20 md:py-28 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={itemVariants} className="font-display text-5xl md:text-7xl leading-[0.95]">
          Escríbenos.
        </motion.h2>

        <motion.a
          variants={itemVariants}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block w-full rounded-full border border-black bg-black text-white px-10 py-4 font-display text-[11px] uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-colors"
        >
          Compra por WhatsApp
        </motion.a>

        <motion.p variants={itemVariants} className="mt-10 font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
          También por:
        </motion.p>

        <motion.div variants={itemVariants} className="mt-4 flex flex-col gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full rounded-full border border-black px-5 py-3 font-display text-[11px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors"
          >
            <InstagramIcon />
            Instagram
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full rounded-full border border-black px-5 py-3 font-display text-[11px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors"
          >
            <TikTokIcon />
            TikTok
          </a>
        </motion.div>

        <motion.p variants={itemVariants} className="mt-5 text-sm text-muted-foreground">
          <a href={`mailto:${EMAIL}`} className="hover:text-black transition-colors underline underline-offset-4">
            {EMAIL}
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}
