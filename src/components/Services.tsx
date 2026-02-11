import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Clock, Sparkles, Droplets, Eye } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Haarschnitt",
    price: "CHF 30",
    duration: "30 Min.",
  },
  {
    icon: Scissors,
    title: "Haarschnitt + Bart",
    price: "CHF 50",
    duration: "40 Min.",
  },
  {
    icon: Sparkles,
    title: "Haarschnitt + Bart + Waschen",
    price: "CHF 55",
    duration: "50 Min.",
  },
  {
    icon: Scissors,
    title: "Bart",
    price: "CHF 20",
    duration: "10 Min.",
  },
  {
    icon: Eye,
    title: "Augenbrauen",
    price: "CHF 10",
    duration: "10 Min.",
  },
  {
    icon: Droplets,
    title: "Wax Ohr & Nase",
    price: "CHF 20",
    duration: "10 Min.",
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
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >
          <p className="text-gold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">
            Was wir bieten
          </p>
          <h2 className="section-heading">
            Unsere <span className="text-gold">Services</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 md:p-8 bg-card border border-border hover:border-gold/30 transition-all duration-500 rounded-sm"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center mb-5 border border-gold/30 rounded-sm group-hover:bg-gold/10 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl md:text-2xl font-medium mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Price & Duration */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                <p className="text-gold font-display text-xl font-semibold">
                  {service.price}
                </p>
                <p className="text-muted-foreground text-sm flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gold/70" />
                  {service.duration}
                </p>
              </div>

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
