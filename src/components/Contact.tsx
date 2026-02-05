import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Instagram, ExternalLink } from "lucide-react";

// Short link for mobile-friendly route access
const MAPS_SHORT_URL = "https://maps.app.goo.gl/9r2xNvhnCHRex2g86";
const INSTAGRAM_URL = "https://www.instagram.com/coiffeur.styl/";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      lines: ["Albisstrasse 110", "8038 Zürich Wollishofen"],
    },
    {
      icon: Phone,
      title: "Kontakt",
      lines: ["044 482 02 91"],
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      lines: ["Mo – Fr: 09:00 – 19:00", "Sa: 08:00 – 18:00"],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Besuche uns
          </p>
          <h2 className="section-heading">
            Standort & <span className="text-gold">Kontakt</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Map Static Card - Links to Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-sm overflow-hidden border border-border bg-card"
          >
            <a
              href={MAPS_SHORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full relative group"
            >
              {/* Static map background with styling */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-muted to-card" />
              
              {/* Map pin and address display */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-full border-2 border-gold/40 flex items-center justify-center mb-6 group-hover:border-gold transition-colors duration-300">
                  <MapPin className="w-10 h-10 text-gold" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">Coiffeur Styl</h3>
                <p className="text-foreground/70 mb-1">Albisstrasse 110</p>
                <p className="text-foreground/70 mb-6">8038 Zürich Wollishofen</p>
                <div className="flex items-center gap-2 text-gold group-hover:text-gold/80 transition-colors">
                  <span className="font-medium">Auf Google Maps öffnen</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <div className="absolute inset-0 pointer-events-none border border-gold/20 rounded-sm" />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-10">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="w-14 h-14 flex items-center justify-center border border-gold/30 rounded-sm flex-shrink-0">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-gold mb-2">{item.title}</h3>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-foreground/80 font-light">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Route Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="pt-4"
              >
                <a
                  href={MAPS_SHORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-gold/30 rounded-sm text-gold hover:bg-gold hover:text-background transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Route anzeigen</span>
                </a>
              </motion.div>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="pt-6"
              >
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-foreground/70 hover:text-gold transition-colors duration-300"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="font-light">@coiffeur.styl</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
