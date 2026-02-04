import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marco S.",
    text: "Bester Barbershop in Zürich! Immer ein perfekter Fade und super entspannte Atmosphäre. Kann ich nur empfehlen.",
    rating: 5,
  },
  {
    name: "Luca M.",
    text: "Schnell, professionell und immer top Ergebnis. Mein Go-To Coiffeur seit Jahren. Die Jungs wissen was sie tun.",
    rating: 5,
  },
  {
    name: "David K.",
    text: "Endlich ein Barber der weiss, was ein sauberer Skin Fade ist. Online Buchung macht alles noch einfacher.",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-charcoal-light" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Kundenstimmen
          </p>
          <h2 className="section-heading">
            Was unsere <span className="text-gold">Kunden</span> sagen
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 md:p-10 bg-card border border-border rounded-sm"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-gold/30 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 font-light leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="text-gold font-display text-lg">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
