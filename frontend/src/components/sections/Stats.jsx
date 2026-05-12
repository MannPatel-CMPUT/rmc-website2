import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { COMPANY } from "../../lib/company";

const stats = [
  { value: 13, suffix: "+", label: "Years Experience", sub: `Est. ${COMPANY.established}` },
  { value: 500, suffix: "+", label: "Projects Supplied", sub: "Across Gujarat" },
  { value: 24, suffix: "/7", label: "Delivery Support", sub: "Dispatch Desk" },
  { value: 100, suffix: "%", label: "Quality Tested", sub: "IS:4926 Compliant" },
];

const Counter = ({ to, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTs = performance.now();
    const tick = (ts) => {
      const p = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(start + (to - start) * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {val}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section
      className="relative py-24 md:py-32 bg-[#050505] overflow-hidden"
      data-testid="stats-section"
    >
      <div
        aria-hidden
        className="absolute inset-0 speed-lines opacity-30 pointer-events-none"
      />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] hero-spotlight opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-[#d1c39a]" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#d1c39a] font-semibold">
              By The Numbers
            </span>
            <span className="w-10 h-px bg-[#d1c39a]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight">
            Concrete that <span className="text-[#d1c39a]">delivers</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1f1f1f] border border-[#1f1f1f]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0a0a0a] p-8 md:p-12 group hover:bg-[#101010] transition-colors"
              data-testid={`stat-${i}`}
            >
              <div className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-none">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-6 h-px w-10 bg-[#d1c39a] group-hover:w-20 transition-all duration-500" />
              <div className="mt-6 font-display text-base uppercase tracking-[0.18em] text-white">
                {s.label}
              </div>
              <div className="mt-1 text-xs text-white/40 tracking-wider uppercase">
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
