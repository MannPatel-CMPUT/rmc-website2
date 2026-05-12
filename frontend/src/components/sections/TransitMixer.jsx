import React from "react";
import { motion } from "framer-motion";
import { COMPANY } from "../../lib/company";

/**
 * Photoreal transit mixer: uses Perfect RMC's actual truck photo with
 * a rotating company-logo medallion overlaid on the drum center.
 * Drum visual center sits at ~38% left, 36% top in the source photo.
 */
const TransitMixer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 600 }}
      animate={{
        opacity: [0, 1, 1, 1],
        x: [600, 600, -20, 0],
      }}
      transition={{
        duration: 2.4,
        times: [0, 0.05, 0.85, 1],
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4,
      }}
      className="relative w-full max-w-[640px] aspect-[4/3] select-none"
      data-testid="transit-mixer-animation"
      aria-hidden
    >
      {/* Soft beige glow behind */}
      <div
        className="absolute -inset-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(209,195,154,0.22) 0%, rgba(209,195,154,0) 65%)",
          filter: "blur(30px)",
        }}
      />

      {/* Truck idle bounce (after drive-in settles) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -4, 0, 3, 0] }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.6,
        }}
        className="relative w-full h-full"
      >
        {/* Real truck photo */}
        <div className="relative w-full h-full overflow-hidden rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.55)]">
          <motion.img
            src={COMPANY.assets.truck}
            alt="Perfect RMC TATA transit mixer"
            className="w-full h-full object-cover"
            initial={{
              filter:
                "blur(8px) contrast(1.08) saturate(0.85) brightness(0.95)",
            }}
            animate={{
              filter: [
                "blur(8px) contrast(1.08) saturate(0.85) brightness(0.95)",
                "blur(8px) contrast(1.08) saturate(0.85) brightness(0.95)",
                "blur(0px) contrast(1.08) saturate(0.85) brightness(0.95)",
              ],
            }}
            transition={{
              duration: 2.4,
              times: [0, 0.78, 1],
              delay: 0.4,
              ease: "easeOut",
            }}
            draggable={false}
          />

          {/* Wheel-spin ground streaks (only during drive-in) */}
          <motion.div
            className="absolute left-0 right-0 bottom-[8%] h-[18%] pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.9, 0.9, 0] }}
            transition={{
              duration: 2.4,
              times: [0, 0.06, 0.75, 0.95],
              delay: 0.4,
            }}
          >
            {Array.from({ length: 7 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute h-[3px] rounded-full"
                style={{
                  top: `${15 + i * 12}%`,
                  width: "55%",
                  background:
                    "linear-gradient(to right, transparent 0%, rgba(209,195,154,0.85) 50%, transparent 100%)",
                  filter: "blur(1px)",
                }}
                initial={{ x: "120%" }}
                animate={{ x: "-180%" }}
                transition={{
                  duration: 0.45 + (i % 3) * 0.1,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.4 + i * 0.05,
                }}
              />
            ))}
          </motion.div>

          {/* Cinematic gradient — darken edges to integrate with the dark hero bg */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 40% 45%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 35%, rgba(5,5,5,0.55) 75%, rgba(5,5,5,0.85) 100%)",
            }}
          />
          {/* Top/bottom fade */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0) 25%, rgba(5,5,5,0) 70%, rgba(5,5,5,0.85) 100%)",
            }}
          />
          {/* Subtle warm beige tint */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40"
            style={{
              background:
                "linear-gradient(135deg, rgba(209,195,154,0.3) 0%, rgba(0,0,0,0) 50%, rgba(209,195,154,0.15) 100%)",
            }}
          />

          {/* Rotating logo medallion on the drum */}
          <div
            className="absolute"
            style={{
              left: "38%",
              top: "36%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* outer pulsing halo */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(209,195,154,0.55) 0%, rgba(209,195,154,0) 70%)",
                width: "180px",
                height: "180px",
                left: "-30px",
                top: "-30px",
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* spinning logo disc */}
            <motion.div
              className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.6)] ring-4 ring-[#d1c39a]/80"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <img
                src={COMPANY.assets.logo}
                alt="Perfect RMC"
                className="w-full h-full object-contain rounded-full p-2"
                draggable={false}
              />
              {/* tick markers around the rim for "drum rotating" feel */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
              >
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x1 = 50 + 47 * Math.cos(angle);
                  const y1 = 50 + 47 * Math.sin(angle);
                  const x2 = 50 + 50 * Math.cos(angle);
                  const y2 = 50 + 50 * Math.sin(angle);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#050505"
                      strokeWidth="1.2"
                    />
                  );
                })}
              </svg>
            </motion.div>
          </div>

          {/* Bottom info bar */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
            <div className="px-3 py-2 bg-black/65 backdrop-blur-md border border-[#d1c39a]/30">
              <div className="font-display text-[9px] tracking-[0.35em] uppercase text-[#d1c39a] leading-none">
                Live Fleet
              </div>
              <div className="font-display text-sm md:text-base uppercase text-white tracking-tight mt-1 leading-none">
                TATA · 7 Cum
              </div>
            </div>
            <div className="px-3 py-2 bg-black/65 backdrop-blur-md border border-white/10 text-right">
              <div className="font-display text-[9px] tracking-[0.35em] uppercase text-white/50 leading-none">
                Drum
              </div>
              <div className="font-display text-sm md:text-base uppercase text-white tracking-tight mt-1 leading-none flex items-center gap-2 justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d1c39a] animate-pulse" />
                Rotating
              </div>
            </div>
          </div>

          {/* Corner brackets */}
          <span className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-[#d1c39a]/70" />
          <span className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-[#d1c39a]/70" />
          <span className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-[#d1c39a]/70" />
          <span className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-[#d1c39a]/70" />
        </div>
      </motion.div>

      {/* Dust burst on arrival */}
      <motion.div
        className="absolute -bottom-6 left-0 right-1/4 h-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.9, 0] }}
        transition={{
          duration: 2,
          times: [0, 0.85, 0.92, 1],
          delay: 0.4,
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[#d1c39a]"
            style={{
              width: 4 + (i % 4) * 3,
              height: 4 + (i % 4) * 3,
              left: `${5 + i * 7}%`,
              bottom: 0,
              filter: "blur(2px)",
              opacity: 0.5,
            }}
            initial={{ y: 0, scale: 0.3, opacity: 0 }}
            animate={{
              y: [-5, -40 - (i % 5) * 8],
              x: [(i % 2 === 0 ? -1 : 1) * 5, (i % 2 === 0 ? -1 : 1) * 40],
              scale: [0.3, 1.6],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 1.4,
              delay: 2.05 + i * 0.04,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>

      {/* Diagonal speed lines streaking past */}
      <div className="absolute inset-y-0 -right-10 -left-10 pointer-events-none overflow-hidden opacity-60">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#d1c39a]/50 to-transparent"
            style={{
              top: `${20 + i * 18}%`,
              width: "70%",
            }}
            animate={{ x: ["-110%", "200%"] }}
            transition={{
              duration: 2.2 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TransitMixer;
