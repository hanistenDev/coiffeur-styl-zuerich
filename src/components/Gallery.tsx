 import { motion, useInView } from "framer-motion";
 import { useRef, useState } from "react";
 import { X } from "lucide-react";
 import gallery1 from "@/assets/gallery-1.png";
 import gallery2 from "@/assets/gallery-2.png";
 import gallery3 from "@/assets/gallery-3.png";
 import gallery4 from "@/assets/gallery-4.png";
 import gallery5 from "@/assets/gallery-5.png";
 import gallery6 from "@/assets/gallery-6.png";
 
 const images = [
   { src: gallery1, alt: "Fade & Bartpflege" },
   { src: gallery2, alt: "Klassischer Schnitt" },
   { src: gallery3, alt: "Professionelles Styling" },
   { src: gallery4, alt: "Lockenfade" },
   { src: gallery5, alt: "Skin Fade" },
   { src: gallery6, alt: "Slick Back Style" },
 ];
 
 const Gallery = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
   const [lightboxImage, setLightboxImage] = useState<string | null>(null);
 
   const openLightbox = (src: string) => {
     setLightboxImage(src);
     document.body.style.overflow = "hidden";
   };
 
   const closeLightbox = () => {
     setLightboxImage(null);
     document.body.style.overflow = "";
   };
 
   return (
     <>
       <section id="gallery" className="section-padding bg-background" ref={ref}>
         <div className="max-w-7xl mx-auto">
           {/* Section Header */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.7 }}
             className="text-center mb-12 md:mb-16"
           >
             <p className="text-gold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">
               Unsere Arbeit
             </p>
             <h2 className="section-heading">
               Die <span className="text-gold">Galerie</span>
             </h2>
           </motion.div>
 
           {/* Image Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 md:gap-6">
             {images.map((image, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 animate={isInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.6, delay: index * 0.1 }}
                 className="relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer group"
                 onClick={() => openLightbox(image.src)}
               >
                 <img
                   src={image.src}
                   alt={image.alt}
                   className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                 />
                 {/* Subtle hover overlay */}
                 <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300" />
                 {/* Hover shadow effect via pseudo-element simulation */}
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[inset_0_0_30px_rgba(0,0,0,0.3)]" />
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Lightbox */}
       {lightboxImage && (
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.3 }}
           className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 md:p-8"
           onClick={closeLightbox}
         >
           <button
             onClick={closeLightbox}
             className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-card border border-gold/30 text-gold hover:bg-gold hover:text-background transition-colors duration-300"
             aria-label="Schliessen"
           >
             <X className="w-6 h-6" />
           </button>
           <motion.img
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.3 }}
             src={lightboxImage}
             alt="Galerie Bild"
             className="max-w-full max-h-[85vh] object-contain rounded-sm"
             onClick={(e) => e.stopPropagation()}
           />
         </motion.div>
       )}
     </>
   );
 };
 
 export default Gallery;
