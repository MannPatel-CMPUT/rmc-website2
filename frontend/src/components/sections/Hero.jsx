import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import ConcreteBackground from "./ConcreteBackground";
import TransitMixer from "./TransitMixer";
import { COMPANY, whatsappLink } from "../../lib/company";

const Hero = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
      data-testid="hero-section"
    >
      <ConcreteBackground />

      {/* Side label */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-10 -rotate-90 origin-left">
        <span className="font-display tracking-[0.5em] text-[10px] text-white/40 uppercase">
          Concrete · In · Motion
        </span>
      </div>
      <div className="hidden xl:block absolute right-6 top-1/2 -translate-y-1/2 z-10 w-[46%] max-w-[620px]">
        <TransitMixer />
        <div className="text-right mt-4 pr-4">
          <div className="font-display text-[10px] tracking-[0.4em] text-[#d1c39a] uppercase">
            Est. {COMPANY.established} · IS:4926
          </div>
        </div>
      </div>

      <motion.div
        style={{ y: yParallax, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-10 h-px bg-[#d1c39a]" />
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#d1c39a] font-semibold">
            {COMPANY.region}
          </span>
        </motion.div>

        <h1
          className="font-display text-white uppercase leading-[0.92] tracking-tight max-w-5xl xl:max-w-[640px] 2xl:max-w-[760px]"
          data-testid="hero-headline"
        >
          {["Reliable", "Ready-Mix", "Concrete For", "Every Project."].map(
            (line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              >
                {line.includes("Concrete") ? (
                  <>
                    {line.split("Concrete")[0]}
                    <span className="text-[#d1c39a]">Concrete</span>
                    {line.split("Concrete")[1]}
                  </>
                ) : (
                  line
                )}
              </motion.span>
            )
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-10 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed"
          data-testid="hero-subheadline"
        >
          On-time delivery, consistent quality, and trusted concrete solutions
          for builders, contractors, and developers. Engineered mixes, batched
          fresh, dispatched on schedule.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-[#d1c39a] hover:bg-[#e5d9b6] text-[#050505] font-bold uppercase tracking-[0.18em] text-sm px-8 py-5 transition-all"
            data-testid="hero-whatsapp-cta"
          >
            Get Quote on WhatsApp
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-3 border-2 border-white/20 hover:border-[#d1c39a] text-white font-bold uppercase tracking-[0.18em] text-sm px-8 py-5 transition-colors"
            data-testid="hero-view-services-cta"
          >
            View Services
            <span className="w-2 h-2 bg-[#d1c39a] rounded-full group-hover:scale-150 transition-transform" />
          </a>
        </motion.div>

        {/* Quick contact strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 flex flex-wrap items-center gap-8 text-xs uppercase tracking-[0.25em] text-white/50"
        >
          <a
            href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
            data-testid="hero-phone-link"
          >
            <Phone size={14} className="text-[#d1c39a]" />
            {COMPANY.phones[0]}
          </a>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <span>10+ Yrs · 500+ Projects · 24/7 Dispatch</span>
        </motion.div>
      </motion.div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/5 bg-black/30 backdrop-blur-sm overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap py-3">
          {Array.from({ length: 2 }).map((_, k) => (
            <div
              key={k}
              className="flex items-center gap-12 font-display tracking-[0.4em] text-xs uppercase text-white/30 pr-12"
            >
              {[
                "M15 · M20 · M25",
                "M30 · M35 · M40",
                "Custom Mix Design",
                "On-Time Delivery",
                "Quality Tested",
                "Pan India Service",
                "Site Pumping",
                "Residential · Commercial · Infrastructure",
              ].map((t, i) => (
                <span key={i} className="flex items-center gap-12">
                  {t}
                  <span className="w-1.5 h-1.5 bg-[#d1c39a] rounded-full" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
