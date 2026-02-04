import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Sparkles, CircleUser } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Haarschnitt",
    description:
      "Klassischer Herrenschnitt mit modernem Finish. Inklusive Waschen und Styling.",
    price: "ab CHF 45",
  },
  {
    icon: Sparkles,
    title: "Fade & Style",
    description:
      "Präzise Fade-Technik vom Skin Fade bis Mid Fade. Dein individueller Look.",
    price: "ab CHF 55",
  },
  {
    icon: CircleUser,
    title: "Bartpflege",
    description:
      "Professionelles Bart-Trimming und Konturierung. Heisses Handtuch inklusive.",
    price: "ab CHF 35",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-charcoal-light" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Was wir bieten
          </p>
          <h2 className="section-heading">
            Unsere <span className="text-gold">Services</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 md:p-10 bg-card border border-border hover:border-gold/30 transition-all duration-500 rounded-sm"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center mb-6 border border-gold/30 rounded-sm group-hover:bg-gold/10 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl md:text-3xl font-medium mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Price */}
              <p className="text-gold font-display text-xl">
                {service.price}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-dark group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
