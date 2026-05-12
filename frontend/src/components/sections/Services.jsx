import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Beaker,
  Building2,
  Home,
  ShieldCheck,
  Boxes,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Boxes,
    title: "Ready-Mix Concrete",
    desc: "Engineered concrete mixes M15 through M40, batched fresh at our Simem plant to IS:4926 standards.",
    tag: "Core Service",
  },
  {
    icon: Truck,
    title: "On-Time Site Delivery",
    desc: "Nine transit mixers, three concrete pumps. Dispatched on schedule across Jarod, Waghodia, Vadodara & Halol.",
    tag: "Logistics",
  },
  {
    icon: Beaker,
    title: "Custom Mix Design",
    desc: "Application-specific designs for slabs, columns, foundations and pumpable mixes — tested and certified.",
    tag: "Engineered",
  },
  {
    icon: ShieldCheck,
    title: "Quality Testing",
    desc: "In-house QA/QC lab. Digital cube test, slump, aggregate, sieve and material certification on every pour.",
    tag: "Assured",
  },
  {
    icon: Home,
    title: "Residential Projects",
    desc: "Villa foundations, structural slabs and high-rise pours for builders and developers.",
    tag: "Residential",
  },
  {
    icon: Building2,
    title: "Commercial & Industrial",
    desc: "Factories, pharmaceuticals, warehouses and infrastructure — trusted by Schneider, GE Vernova, L&T.",
    tag: "Commercial",
  },
];

const Services = () => {
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
                Services · 01 / 06
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
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="group relative bg-[#0a0a0a] hover:bg-[#121212] p-10 transition-colors duration-500 overflow-hidden"
                data-testid={`service-card-${i}`}
              >
                {/* number watermark */}
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
                  <p className="text-white/60 text-sm leading-relaxed mb-8">
                    {s.desc}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#d1c39a] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                    Learn more
                    <ArrowUpRight size={14} />
                  </div>
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
