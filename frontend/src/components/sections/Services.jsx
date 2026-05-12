import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Beaker,
  Building2,
  Home,
  ShieldCheck,
  Boxes,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { COMPANY } from "../../lib/company";

const iconById = {
  readymix: Boxes,
  delivery: Truck,
  mixdesign: Beaker,
  quality: ShieldCheck,
  residential: Home,
  commercial: Building2,
};

const Services = () => {
  const [openId, setOpenId] = useState(null);
  const services = COMPANY.services;
  const n = String(services.length).padStart(2, "0");

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-[#050505]"
      data-testid="services-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#d1c39a]" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-[#d1c39a] font-semibold">
                Services · 01 / {n}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              Built for every
              <br />
              <span className="text-[#d1c39a]">pour, every grade.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-base md:text-lg leading-relaxed">
            From small residential slabs to large industrial floors — Perfect
            RMC delivers consistent, lab-tested concrete that arrives ready to
            place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1f1f1f]">
          {services.map((s, i) => {
            const Icon = iconById[s.id] || Boxes;
            const expanded = openId === s.id;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="group relative bg-[#0a0a0a] hover:bg-[#121212] p-10 transition-colors duration-500 overflow-hidden"
                data-testid={`service-card-${i}`}
              >
                <span className="absolute right-6 top-6 font-display text-6xl text-white/[0.04] group-hover:text-[#d1c39a]/10 transition-colors">
                  0{i + 1}
                </span>

                <div className="relative">
                  <div className="w-12 h-12 border border-[#d1c39a]/30 flex items-center justify-center mb-8 group-hover:bg-[#d1c39a] group-hover:border-[#d1c39a] transition-all duration-500">
                    <Icon
                      size={22}
                      className="text-[#d1c39a] group-hover:text-[#050505] transition-colors"
                    />
                  </div>

                  <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-3">
                    {s.tag}
                  </div>
                  <h3 className="font-display text-2xl text-white uppercase tracking-tight mb-4">
                    {s.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {s.desc}
                  </p>

                  <button
                    type="button"
                    onClick={() => setOpenId(expanded ? null : s.id)}
                    aria-expanded={expanded}
                    className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#d1c39a] hover:text-[#e5d9b6] transition-colors"
                    data-testid={`service-learn-more-${s.id}`}
                  >
                    Learn more
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 pt-4 border-t border-white/10 text-white/55 text-xs leading-relaxed">
                          {s.learnMore}
                        </p>
                        <a
                          href={COMPANY.profilePdfPath}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#d1c39a]/80 hover:text-[#d1c39a]"
                        >
                          Company profile (PDF)
                          <ArrowUpRight size={12} />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
