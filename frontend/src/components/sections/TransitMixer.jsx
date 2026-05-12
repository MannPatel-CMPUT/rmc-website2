import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { COMPANY } from "../../lib/company";

/**
 * Pseudo-3D photoreal transit mixer.
 * - Real side-view truck photo as the base
 * - Perfect RMC logo "painted" on the drum with cylindrical curvature
 *   and a slow horizontal slide to simulate drum rotation
 * - Wheels spin via overlaid CSS rotating discs
 * - Mouse parallax tilt gives a subtle 3D feel
 * - Drive-in entry: slides in from right with motion blur + dust burst
 */
const DRUM = {
  // Calibrated to the source side-view photo (drum location in the image)
  left: 48,   // %
  top: 22,    // %
  width: 46,  // %
  height: 50, // %
};

// Approx wheel hub centers in source photo (in %)
const WHEELS = [
  { left: 23.5, top: 75, size: 13 }, // front
  { left: 60, top: 75, size: 13 },   // rear-front
  { left: 73, top: 75, size: 13 },   // rear-rear
];

const TransitMixer = () => {
  const wrapRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };
  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, x: 600 }}
      animate={{ opacity: [0, 1, 1, 1], x: [600, 600, -20, 0] }}
      transition={{
        duration: 2.4,
        times: [0, 0.05, 0.85, 1],
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4,
      }}
      className="relative w-full max-w-[680px] aspect-[4/3] select-none"
      data-testid="transit-mixer-animation"
      style={{ perspective: 1400 }}
      aria-hidden
    >
      {/* Glow */}
      <div
        className="absolute -inset-10"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(209,195,154,0.22) 0%, rgba(209,195,154,0) 65%)",
          filter: "blur(30px)",
        }}
      />

      {/* 3D-tilt container */}
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* Idle bounce */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -3, 0, 2, 0] }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.6,
          }}
          className="relative w-full h-full"
        >
          {/* Inner photo card */}
          <div className="relative w-full h-full overflow-hidden rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.55)]">
            {/* Base truck photo */}
            <motion.img
              src={COMPANY.assets.truckSide}
              alt="Perfect RMC transit mixer"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{
                filter:
                  "blur(8px) contrast(1.05) saturate(0.9) brightness(0.85)",
              }}
              animate={{
                filter: [
                  "blur(8px) contrast(1.05) saturate(0.9) brightness(0.85)",
                  "blur(8px) contrast(1.05) saturate(0.9) brightness(0.85)",
                  "blur(0px) contrast(1.05) saturate(0.9) brightness(0.85)",
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

            {/* Sky → dark gradient to match hero */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.4) 22%, rgba(5,5,5,0) 50%, rgba(5,5,5,0.2) 80%, rgba(5,5,5,0.85) 100%)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 50%, rgba(0,0,0,0) 30%, rgba(5,5,5,0.6) 90%)",
              }}
            />

            {/* === DRUM LOGO DECAL === */}
            <div
              className="absolute pointer-events-none"
              style={{
                left: `${DRUM.left}%`,
                top: `${DRUM.top}%`,
                width: `${DRUM.width}%`,
                height: `${DRUM.height}%`,
                // Fade edges so logo "wraps" around the cylinder
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
                // The drum has a slight tilt; rotate the decal layer to match
                transform: "rotate(-2deg)",
              }}
            >
              {/* Cylindrical perspective */}
              <div
                className="relative w-full h-full"
                style={{ perspective: 800 }}
              >
                {/* Logo "ring" that slides — gives the illusion of drum rotating */}
                <motion.div
                  className="absolute inset-0 flex items-center"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2.6,
                  }}
                  style={{
                    width: "200%",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="relative flex-shrink-0 flex items-center justify-center"
                      style={{
                        width: "16.6667%",
                        height: "100%",
                      }}
                    >
                      <div
                        className="relative aspect-square"
                        style={{
                          width: "60%",
                          // Cylindrical curvature illusion
                          transform: "rotateY(-6deg) scaleY(1.03)",
                          transformStyle: "preserve-3d",
                          filter:
                            "drop-shadow(0 2px 3px rgba(0,0,0,0.2)) saturate(1.05) contrast(1.05)",
                        }}
                      >
                        <img
                          src={COMPANY.assets.logo}
                          alt=""
                          className="w-full h-full object-contain"
                          style={{
                            mixBlendMode: "multiply",
                            opacity: 0.92,
                          }}
                          draggable={false}
                        />
                        {/* tiny tonal shadow under decal to fake paint depth */}
                        <div
                          className="absolute inset-0 rounded-full pointer-events-none"
                          style={{
                            background:
                              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.14), rgba(0,0,0,0) 55%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.14), rgba(0,0,0,0) 60%)",
                            mixBlendMode: "overlay",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Cylinder lighting overlay on drum: highlights + shadow seams */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 25%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.18) 100%)",
                    mixBlendMode: "soft-light",
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.18) 100%)",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
            </div>

            {/* === Spinning wheels (overlay rotating discs over actual wheel positions) === */}
            {WHEELS.map((w, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${w.left}%`,
                  top: `${w.top}%`,
                  width: `${w.size}%`,
                  aspectRatio: "1 / 1",
                  transform: "translate(-50%, -50%)",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-65">
                  <defs>
                    <radialGradient id={`wheel-${i}`} cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3f3f3f" />
                      <stop offset="60%" stopColor="#0a0a0a" />
                      <stop offset="100%" stopColor="#000" />
                    </radialGradient>
                  </defs>
                  {[0, 30, 60, 90, 120, 150].map((deg) => (
                    <line
                      key={deg}
                      x1="50"
                      y1="50"
                      x2={50 + 40 * Math.cos((deg * Math.PI) / 180)}
                      y2={50 + 40 * Math.sin((deg * Math.PI) / 180)}
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="3"
                    />
                  ))}
                </svg>
              </motion.div>
            ))}

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

            {/* Bottom info bar */}
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 z-10">
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
            <span className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-[#d1c39a]/70 z-10" />
            <span className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-[#d1c39a]/70 z-10" />
            <span className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-[#d1c39a]/70 z-10" />
            <span className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-[#d1c39a]/70 z-10" />
          </div>
        </motion.div>
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
