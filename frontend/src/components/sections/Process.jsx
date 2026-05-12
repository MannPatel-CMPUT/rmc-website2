import React from "react";
import { motion } from "framer-motion";
import { FileText, Beaker, Cog, Truck, MapPin } from "lucide-react";

const steps = [
  {
    icon: FileText,
    n: "01",
    title: "Request Quote",
    desc: "Share volume, grade, site location & pour date.",
  },
  {
    icon: Beaker,
    n: "02",
    title: "Confirm Mix",
    desc: "Mix design verified by our QA team. Slump & strength agreed.",
  },
  {
    icon: Cog,
    n: "03",
    title: "Batch Production",
    desc: "Fresh batched at 30 Cum/hr Simem plant. Materials tested.",
  },
  {
    icon: Truck,
    n: "04",
    title: "Dispatch Truck",
    desc: "Transit mixer dispatched — live tracking on call.",
  },
  {
    icon: MapPin,
    n: "05",
    title: "Site Delivery",
    desc: "On-time pour with pump support if required.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 bg-[#0a0a0a] border-y border-white/5 overflow-hidden"
      data-testid="process-section"
    >
      {/* faint grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[#d1c39a]" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#d1c39a] font-semibold">
              The Process
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
            From quote to <span className="text-[#d1c39a]">cured slab</span>.
          </h2>
          <p className="mt-6 text-white/60 text-lg max-w-xl">
            Five steps. Zero confusion. The Perfect RMC delivery cycle is built
            for site managers who can't afford delays.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          <div className="absolute left-[10%] right-[10%] top-[34px] dotted-line" />
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
                data-testid={`process-step-${i}`}
              >
                <div className="relative w-[68px] h-[68px] rounded-full bg-[#0a0a0a] border-2 border-[#d1c39a] flex items-center justify-center z-10 mb-6 group hover:bg-[#d1c39a] transition-colors duration-500">
                  <Icon
                    size={26}
                    className="text-[#d1c39a] group-hover:text-[#050505] transition-colors"
                  />
                </div>
                <div className="font-display text-xs tracking-[0.4em] text-[#d1c39a] mb-2">
                  STEP {s.n}
                </div>
                <h3 className="font-display text-xl uppercase text-white mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed max-w-[180px]">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/tablet vertical */}
        <div className="lg:hidden flex flex-col gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-6 items-start"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[#d1c39a] bg-[#0a0a0a] flex items-center justify-center">
                    <Icon size={22} className="text-[#d1c39a]" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-[#d1c39a]/30 my-3 min-h-[40px]" />
                  )}
                </div>
                <div className="pt-2">
                  <div className="font-display text-[10px] tracking-[0.4em] text-[#d1c39a] mb-1">
                    STEP {s.n}
                  </div>
                  <h3 className="font-display text-xl uppercase text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-white/55 text-sm">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
