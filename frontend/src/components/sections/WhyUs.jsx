import React from "react";
import { motion } from "framer-motion";
import { Clock, Award, Wrench, Truck, FlaskConical, Users } from "lucide-react";
import { COMPANY } from "../../lib/company";

const points = [
  {
    icon: Clock,
    title: "On-Time, Every Time",
    body: "Site delays cost lakhs. Our dispatch desk schedules slots, tracks trucks and arrives in the agreed window.",
  },
  {
    icon: Award,
    title: "Lab-Verified Quality",
    body: "Every batch tested for slump, strength and gradation. Material certificates supplied with delivery.",
  },
  {
    icon: Wrench,
    title: "Professional Service",
    body: "Site visit, mix advisory, pump coordination — handled by people who have poured for L&T, Schneider & GE.",
  },
  {
    icon: Truck,
    title: "Fast Delivery Fleet",
    body: "9 transit mixers, 3 concrete pumps, 24/7 dispatch — built to keep your slab schedule moving.",
  },
];

const WhyUs = () => {
  return (
    <section
      id="why"
      className="relative py-24 md:py-32 bg-[#0a0a0a] border-y border-white/5"
      data-testid="why-us-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={COMPANY.assets.plant}
              alt="Perfect RMC batching plant"
              className="w-full h-full object-cover grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-black/30" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="font-display text-[10px] tracking-[0.4em] text-[#d1c39a] uppercase mb-2">
                Our Plant
              </div>
              <div className="font-display text-2xl text-white uppercase tracking-tight">
                Jarod, Vadodara
              </div>
              <div className="text-white/60 text-sm mt-1">
                {COMPANY.plant.batching}
              </div>
            </div>
            <div className="absolute top-6 right-6 flex flex-col gap-1.5 items-end">
              <div className="px-3 py-1.5 bg-[#d1c39a] text-[#050505] text-[10px] font-bold uppercase tracking-[0.2em]">
                IS:4926
              </div>
              <a
                href={
                  COMPANY.certifications.find((c) => c.pdfPath)?.pdfPath ?? "#"
                }
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-[#050505]/90 border border-[#d1c39a]/40 text-[#d1c39a] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#d1c39a] hover:text-[#050505] transition-colors"
                data-testid="why-cert-iso9001"
              >
                ISO 9001
              </a>
            </div>
          </div>

          {/* Floating spec card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-10 -right-4 lg:-right-10 bg-[#050505] border border-[#d1c39a]/30 p-6 max-w-[240px] shadow-2xl"
          >
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#d1c39a] mb-3">
              Plant Capacity
            </div>
            <div className="font-display text-3xl text-white">300 MT</div>
            <div className="text-xs text-white/50 mt-1">
              Cement silos · 3 × 100 MT
            </div>
          </motion.div>
        </motion.div>

        {/* Right: content */}
        <div className="lg:col-span-7 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#d1c39a]" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-[#d1c39a] font-semibold">
                Why Perfect RMC
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight leading-[0.95]">
              The most trusted
              <br />
              <span className="text-[#d1c39a]">pour partner</span> in Waghodia.
            </h2>
            <p className="mt-6 text-white/60 text-base md:text-lg max-w-xl leading-relaxed">
              Since {COMPANY.established}, Perfect RMC has been the only plant
              in Jarod serving Waghodia and surrounding regions — chosen by
              India's biggest names for one reason: we don't miss a pour.
            </p>
          </motion.div>

          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-[#1f1f1f]">
            {points.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#0a0a0a] p-6 hover:bg-[#111] transition-colors group"
                  data-testid={`why-point-${i}`}
                >
                  <Icon
                    size={22}
                    className="text-[#d1c39a] mb-4 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="font-display text-base uppercase tracking-wider text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {p.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
