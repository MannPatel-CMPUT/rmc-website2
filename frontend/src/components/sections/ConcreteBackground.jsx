import React from "react";
import { motion } from "framer-motion";

/**
 * Concrete in Motion — premium animated hero background.
 * Layered:
 *  L1: dark base
 *  L2: slow drifting blurred concrete blobs (warm beige + slate)
 *  L3: diagonal speed lines
 *  L4: floating dust particles
 *  L5: radial spotlight behind heading
 *  L6: grain noise overlay
 */
const ConcreteBackground = () => {
  // deterministic particles
  const particles = Array.from({ length: 22 }).map((_, i) => ({
    id: i,
    left: (i * 47) % 100,
    top: (i * 73) % 100,
    size: 1 + ((i * 13) % 4),
    delay: (i % 10) * 0.4,
    duration: 14 + ((i * 7) % 10),
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" data-testid="concrete-bg">
      {/* L1 — base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* L2 — slow drifting concrete blobs */}
      <motion.div
        aria-hidden
        className="concrete-blob absolute"
        style={{
          width: 620,
          height: 620,
          left: "-10%",
          top: "10%",
          background:
            "radial-gradient(circle, rgba(209,195,154,0.22) 0%, rgba(209,195,154,0) 70%)",
        }}
        animate={{ x: [0, 80, -20, 0], y: [0, -60, 40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="concrete-blob absolute"
        style={{
          width: 720,
          height: 720,
          right: "-12%",
          bottom: "-10%",
          background:
            "radial-gradient(circle, rgba(180,180,180,0.18) 0%, rgba(180,180,180,0) 70%)",
        }}
        animate={{ x: [0, -90, 30, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="concrete-blob absolute"
        style={{
          width: 460,
          height: 460,
          left: "40%",
          top: "-15%",
          background:
            "radial-gradient(circle, rgba(140,130,100,0.16) 0%, rgba(140,130,100,0) 70%)",
        }}
        animate={{ x: [0, 60, -40, 0], y: [0, 80, -20, 0] }}
        transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Wet concrete flow gradient sheet */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(80,72,55,0.18) 0%, rgba(20,20,20,0) 35%, rgba(60,55,45,0.14) 60%, rgba(10,10,10,0) 100%)",
          mixBlendMode: "screen",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      {/* L3 — diagonal speed lines */}
      <div className="absolute inset-0 speed-lines opacity-60" />

      {/* L4 — dust particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          aria-hidden
          className="absolute rounded-full bg-[#d1c39a]/40"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            filter: "blur(0.5px)",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, -10, 0],
            opacity: [0.1, 0.7, 0.2, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* L5 — central spotlight */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] hero-spotlight"
      />

      {/* L6 — grain & vignette */}
      <div className="absolute inset-0 grain-texture opacity-50" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 85%, rgba(0,0,0,0.85) 100%)",
        }}
      />
    </div>
  );
};

export default ConcreteBackground;
