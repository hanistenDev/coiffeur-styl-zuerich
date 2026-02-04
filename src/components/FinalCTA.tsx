import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const BOOKING_URL = "#"; // Replace with Fresha or Appointme link

  return (
    <section
      id="booking"
      ref={ref}
      className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light via-background to-background" />

      {/* Gold glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-gold tracking-[0.3em] uppercase text-sm mb-6"
        >
          Bereit für deinen neuen Look?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold mb-6"
        >
          Jetzt <span className="text-gold">Termin</span> buchen
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto"
        >
          Buche online in wenigen Sekunden – wir freuen uns auf dich.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={BOOKING_URL}
            className="btn-hero-primary text-lg md:text-xl px-12 py-5"
          >
            Termin buchen
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
