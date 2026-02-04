import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, MapPin, Calendar, CreditCard } from "lucide-react";

const trustItems = [
  {
    icon: Star,
    value: "4.9",
    label: "Google Bewertung",
  },
  {
    icon: MapPin,
    value: "223",
    label: "Rezensionen",
  },
  {
    icon: Calendar,
    value: "Online",
    label: "Termin buchen",
  },
  {
    icon: CreditCard,
    value: "Online",
    label: "Zahlung möglich",
  },
];

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-20 bg-charcoal-light border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
            Zürich Wollishofen
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-medium">
            Warum <span className="text-gold">Coiffeur Styl</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-sm bg-background/50 border border-border hover:border-gold/30 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-4">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <p className="font-display text-2xl md:text-3xl text-gold font-semibold mb-1">
                {item.value}
              </p>
              <p className="text-muted-foreground text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
