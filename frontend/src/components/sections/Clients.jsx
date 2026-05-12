import React from "react";
import { motion } from "framer-motion";
import { COMPANY } from "../../lib/company";

const Clients = () => {
  const list = COMPANY.clients;
  return (
    <section
      className="relative py-20 md:py-28 bg-[#050505] overflow-hidden border-y border-white/5"
      data-testid="clients-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-[#d1c39a]" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-[#d1c39a] font-semibold">
                Trusted By
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-[0.95]">
              Brands that don't compromise on <span className="text-[#d1c39a]">concrete</span>.
            </h2>
          </div>
          <p className="text-white/50 text-sm md:text-base max-w-xs">
            Multinationals, pharmaceuticals, infrastructure contractors and
            developers — all pour with Perfect RMC.
          </p>
        </motion.div>
      </div>

      {/* Marquee row 1 */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="flex marquee-track whitespace-nowrap py-6">
          {[...list, ...list].map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-12 px-8 font-display text-2xl md:text-3xl uppercase tracking-tight text-white/70 hover:text-white transition-colors"
            >
              {c}
              <span className="w-1.5 h-1.5 bg-[#d1c39a] rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Logos grid (text-only marks for now) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {list.slice(0, 10).map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
              className="bg-[#0a0a0a] h-24 flex items-center justify-center px-4 text-center text-white/55 text-sm font-display uppercase tracking-wider hover:text-[#d1c39a] hover:bg-[#101010] transition-colors"
              data-testid={`client-logo-${i}`}
            >
              {c}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
