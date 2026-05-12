import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";
import { COMPANY } from "../../lib/company";

const items = [
  {
    src: COMPANY.assets.gate,
    title: "Plant Entrance · Jarod",
    tag: "Welcome",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square md:aspect-auto",
  },
  {
    src: COMPANY.assets.truck,
    title: "Transit Mixer · TATA",
    tag: "Fleet · 7 Cum",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: COMPANY.assets.plantSilos,
    title: "Cement Silos",
    tag: "300 MT Storage",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: COMPANY.assets.plantPump,
    title: "Concrete Pump Operation",
    tag: "60 Cum/hr",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: COMPANY.assets.plant,
    title: "Batching Plant · Simem",
    tag: "30 Cum/hr",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: COMPANY.assets.entrance,
    title: "Site Approach",
    tag: "Drive-In Bay",
    span: "md:col-span-2",
    aspect: "aspect-[2/1] md:aspect-[2/1]",
  },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section
      className="relative py-24 md:py-32 bg-[#0a0a0a] border-y border-white/5"
      data-testid="gallery-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#d1c39a]" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-[#d1c39a] font-semibold">
                On The Ground
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              Plant, fleet
              <br />
              <span className="text-[#d1c39a]">& site work.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/55 text-base leading-relaxed">
            Inside the Jarod plant and out on Gujarat's job sites — where every
            cubic meter is batched, dispatched and poured.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((it, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => setLightbox(it)}
              className={`group relative overflow-hidden ${it.aspect} ${it.span} text-left`}
              data-testid={`gallery-item-${i}`}
              aria-label={`Open ${it.title}`}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute top-4 right-4 w-9 h-9 border border-white/30 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand size={14} className="text-white" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-[10px] tracking-[0.35em] uppercase text-[#d1c39a] mb-1">
                  {it.tag}
                </div>
                <div className="font-display text-lg md:text-xl uppercase tracking-tight text-white">
                  {it.title}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
            data-testid="gallery-lightbox"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-12 h-12 border border-white/20 bg-black/60 flex items-center justify-center text-white hover:bg-[#d1c39a] hover:text-[#050505] transition-colors"
              aria-label="Close"
              data-testid="lightbox-close"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={lightbox.src}
              alt={lightbox.title}
              className="max-w-[92vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <div className="text-[10px] tracking-[0.35em] uppercase text-[#d1c39a] mb-1">
                {lightbox.tag}
              </div>
              <div className="font-display text-xl uppercase text-white">
                {lightbox.title}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
