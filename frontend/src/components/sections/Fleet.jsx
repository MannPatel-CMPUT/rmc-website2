import React from "react";
import { motion } from "framer-motion";
import { Gauge, Truck, FlaskConical, Factory, Zap } from "lucide-react";
import { COMPANY } from "../../lib/company";

const specs = [
  { icon: Factory, label: "Batching Plant", value: "30 Cum/hr", sub: "Simem Make" },
  { icon: Gauge, label: "Concrete Pumps", value: "3 Units", sub: "60 Cum/hr each" },
  { icon: Truck, label: "Transit Mixers", value: "9 Units", sub: "7.0 Cum capacity" },
  { icon: FlaskConical, label: "In-House Lab", value: "QA/QC", sub: "Digital cube test" },
  { icon: Zap, label: "Power Backup", value: "125 KVA", sub: "Greaves generator" },
];

const Fleet = () => {
  return (
    <section
      className="relative py-24 md:py-32 bg-[#050505] overflow-hidden"
      data-testid="fleet-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 order-2 lg:order-1"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[#d1c39a]" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#d1c39a] font-semibold">
              The Fleet & Plant
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight leading-[0.95]">
            Heavy iron.
            <br />
            <span className="text-[#d1c39a]">Precision output.</span>
          </h2>
          <p className="mt-6 text-white/60 text-base md:text-lg leading-relaxed">
            Industrial-scale equipment, calibrated and lab-backed — engineered
            to deliver pourable concrete exactly when and where it's needed.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px bg-[#1f1f1f] border border-[#1f1f1f]">
            {specs.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="bg-[#0a0a0a] p-5 hover:bg-[#111] transition-colors"
                  data-testid={`spec-${i}`}
                >
                  <Icon size={18} className="text-[#d1c39a] mb-3" />
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-1">
                    {s.label}
                  </div>
                  <div className="font-display text-xl text-white uppercase">
                    {s.value}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">{s.sub}</div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 order-1 lg:order-2 relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={COMPANY.assets.truck}
              alt="Perfect RMC transit mixer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
            <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-[#d1c39a]/40">
              <span className="w-2 h-2 bg-[#d1c39a] rounded-full animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-white">
                Live Fleet
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="font-display text-[10px] tracking-[0.4em] text-[#d1c39a] uppercase mb-1">
                  Transit Mixer
                </div>
                <div className="font-display text-2xl text-white uppercase">
                  TATA · 7 Cum
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/50">
                  Capacity
                </div>
                <div className="font-display text-3xl text-white">9 Trucks</div>
              </div>
            </div>
          </div>

          {/* Secondary plant image */}
          <div className="absolute -bottom-12 -left-6 lg:-left-12 w-40 h-40 lg:w-56 lg:h-56 overflow-hidden border-4 border-[#050505] shadow-2xl hidden md:block">
            <img
              src={COMPANY.assets.plant2}
              alt="Batching plant"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Fleet;
