import { motion } from "framer-motion";
 import { MapPin, Star } from "lucide-react";
 
 const MAPS_URL = "https://www.google.com/maps/place/Coiffeur+Styl/@47.3379193,8.5297084,61m/data=!3m1!1e3!4m10!1m2!2m1!1sCOiffeur+styl!3m6!1s0x479009c1dd7f9079:0x438677cbbf4b98de!8m2!3d47.3379724!4d8.5299051!15sCg1DT2lmZmV1ciBzdHlsWg8iDWNvaWZmZXVyIHN0eWySARJ1bmlzZXhfaGFpcmRyZXNzZXKaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUnljbkV0V1hGblJSQULgAQD6AQQIABA0!16s%2Fg%2F11j7y0nbb2";
 
 const openExternal = (url: string) => (e: React.MouseEvent) => {
   e.preventDefault();
   window.open(url, "_blank", "noopener,noreferrer");
 };
import heroImage from "@/assets/hero-barber.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Coiffeur Styl Barbershop"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gold tracking-[0.3em] uppercase text-sm md:text-base mb-6 font-body"
          >
            Coiffeur in Zürich Wollishofen
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] mb-6"
          >
            Frischer Schnitt.
            <br />
            <span className="text-gold">Sauberer Fade.</span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-foreground/80 font-light mb-10 max-w-xl"
          >
            Schnell. Sauber. Ohne Stress.
          </motion.p>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gold/90 font-display italic mb-10"
          >
            „Schöner gehen als kommen"
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
             <a
               href="/booking"
              className="btn-hero-primary text-base md:text-lg"
            >
              Termin buchen
            </a>
            <a
               href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
               onClick={openExternal(MAPS_URL)}
              className="btn-hero-secondary text-base md:text-lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Route
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-foreground/70"
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-gold fill-gold" />
              <span className="font-medium text-foreground">4.9 Google</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <span>223 Rezensionen</span>
            <span className="text-muted-foreground">•</span>
            <span>Top Lage</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
