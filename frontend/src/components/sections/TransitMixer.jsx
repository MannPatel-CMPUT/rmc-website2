import React from "react";
import { motion } from "framer-motion";
import { COMPANY } from "../../lib/company";

/**
 * Side-view transit mixer (concrete truck) with a continuously spinning drum.
 * The Perfect RMC logo sits at the visual center of the drum and rotates with it.
 * Built with inline SVG + Tailwind + Framer Motion. No external libs needed.
 */
const TransitMixer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[560px] aspect-[16/9] select-none pointer-events-none"
      data-testid="transit-mixer-animation"
      aria-hidden
    >
      {/* Soft glow behind truck */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(209,195,154,0.18) 0%, rgba(209,195,154,0) 60%)",
          filter: "blur(20px)",
        }}
      />

      {/* Subtle idle bounce */}
      <motion.div
        animate={{ y: [0, -3, 0, 2, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-full"
      >
        <svg
          viewBox="0 0 600 340"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]"
        >
          <defs>
            {/* Drum gradient */}
            <linearGradient id="drum-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8dcb5" />
              <stop offset="40%" stopColor="#d1c39a" />
              <stop offset="100%" stopColor="#8a7d5a" />
            </linearGradient>
            <linearGradient id="cab-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a2a2a" />
              <stop offset="100%" stopColor="#0e0e0e" />
            </linearGradient>
            <linearGradient id="chassis-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
            <linearGradient id="window-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9bb8c9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3a4a55" stopOpacity="0.8" />
            </linearGradient>
            {/* Drum stripe pattern - rotates to enhance spin perception */}
            <pattern
              id="drum-stripes"
              x="0"
              y="0"
              width="22"
              height="22"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(20)"
            >
              <rect width="22" height="22" fill="url(#drum-grad)" />
              <path
                d="M0 0 L22 0"
                stroke="rgba(0,0,0,0.18)"
                strokeWidth="1.5"
              />
              <path
                d="M0 11 L22 11"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.8"
              />
            </pattern>

            <clipPath id="drum-clip">
              <ellipse cx="370" cy="160" rx="170" ry="78" />
            </clipPath>
          </defs>

          {/* === Road shadow === */}
          <ellipse
            cx="300"
            cy="295"
            rx="240"
            ry="10"
            fill="rgba(0,0,0,0.55)"
            filter="blur(6px)"
          />

          {/* === Chassis === */}
          <rect
            x="80"
            y="225"
            width="460"
            height="22"
            rx="4"
            fill="url(#chassis-grad)"
            stroke="#3f3f3f"
            strokeWidth="0.5"
          />
          {/* chassis rivets */}
          {[120, 180, 240, 300, 360, 420, 480].map((x) => (
            <circle key={x} cx={x} cy="236" r="1.5" fill="#d1c39a" opacity="0.5" />
          ))}

          {/* === Cab (truck head) === */}
          <g>
            {/* Body */}
            <path
              d="M80 225 L80 150 Q80 140 90 140 L150 140 Q165 140 170 155 L185 200 L185 225 Z"
              fill="url(#cab-grad)"
              stroke="#3f3f3f"
              strokeWidth="1"
            />
            {/* Window */}
            <path
              d="M95 150 L150 150 Q160 150 162 158 L172 188 L95 188 Z"
              fill="url(#window-grad)"
            />
            {/* Window divider */}
            <line x1="130" y1="150" x2="138" y2="188" stroke="#0e0e0e" strokeWidth="1.5" />
            {/* Door handle */}
            <rect x="100" y="200" width="15" height="2" rx="1" fill="#d1c39a" opacity="0.7" />
            {/* Headlight */}
            <circle cx="86" cy="200" r="4" fill="#fffbe6" />
            <circle cx="86" cy="200" r="2" fill="#fff" />
            {/* Bumper */}
            <rect x="78" y="215" width="14" height="10" rx="1" fill="#3f3f3f" />
            {/* Mirror */}
            <rect x="78" y="155" width="6" height="14" rx="1" fill="#1a1a1a" />
            <line x1="84" y1="160" x2="92" y2="158" stroke="#1a1a1a" strokeWidth="1.5" />
          </g>

          {/* === Inlet chute (top) === */}
          <g>
            <path
              d="M255 95 L255 130 L285 145 L295 145 L290 100 Z"
              fill="#1a1a1a"
              stroke="#3f3f3f"
              strokeWidth="1"
            />
            <ellipse cx="272" cy="95" rx="22" ry="6" fill="#0a0a0a" stroke="#d1c39a" strokeWidth="1" />
            <ellipse cx="272" cy="95" rx="18" ry="4" fill="#050505" />
          </g>

          {/* === Drum support frame === */}
          <line x1="220" y1="225" x2="220" y2="160" stroke="#3f3f3f" strokeWidth="3" />
          <line x1="540" y1="225" x2="540" y2="180" stroke="#3f3f3f" strokeWidth="3" />

          {/* === DRUM (rotates) === */}
          <g
            style={{
              transformOrigin: "370px 160px",
              animation: "drum-spin 8s linear infinite",
            }}
          >
            {/* Cylinder body using stripe pattern that gives illusion of rotation */}
            <ellipse
              cx="370"
              cy="160"
              rx="170"
              ry="78"
              fill="url(#drum-stripes)"
              stroke="#5a5037"
              strokeWidth="1.5"
            />
            {/* Outer rim shadow */}
            <ellipse
              cx="370"
              cy="160"
              rx="170"
              ry="78"
              fill="none"
              stroke="rgba(0,0,0,0.35)"
              strokeWidth="3"
            />
            {/* Highlight */}
            <ellipse
              cx="370"
              cy="135"
              rx="155"
              ry="20"
              fill="rgba(255,255,255,0.18)"
              clipPath="url(#drum-clip)"
            />
            {/* Reinforcement rings */}
            <ellipse
              cx="270"
              cy="160"
              rx="14"
              ry="70"
              fill="none"
              stroke="rgba(0,0,0,0.45)"
              strokeWidth="2"
            />
            <ellipse
              cx="470"
              cy="160"
              rx="14"
              ry="68"
              fill="none"
              stroke="rgba(0,0,0,0.45)"
              strokeWidth="2"
            />
            {/* Spiral fin lines for spin feel */}
            <path
              d="M220 160 Q310 100 520 160"
              fill="none"
              stroke="rgba(0,0,0,0.25)"
              strokeWidth="2"
            />
            <path
              d="M220 160 Q310 220 520 160"
              fill="none"
              stroke="rgba(0,0,0,0.18)"
              strokeWidth="2"
            />

            {/* Logo center mount (counter-rotates so logo stays upright) */}
            <g
              style={{
                transformOrigin: "370px 160px",
                animation: "drum-spin-reverse 8s linear infinite",
              }}
            >
              <circle
                cx="370"
                cy="160"
                r="46"
                fill="#ffffff"
                stroke="#d1c39a"
                strokeWidth="3"
              />
              <circle
                cx="370"
                cy="160"
                r="46"
                fill="none"
                stroke="rgba(0,0,0,0.25)"
                strokeWidth="1"
              />
              {/* The logo image */}
              <image
                href={COMPANY.assets.logo}
                x="328"
                y="118"
                width="84"
                height="84"
                preserveAspectRatio="xMidYMid slice"
                clipPath="circle(42px at 42px 42px)"
                style={{ clipPath: "circle(42px at 42px 42px)" }}
              />
            </g>
          </g>

          {/* === Outlet chute (back) === */}
          <g>
            <path
              d="M535 175 L575 200 L590 225 L555 225 L530 200 Z"
              fill="#1a1a1a"
              stroke="#3f3f3f"
              strokeWidth="1"
            />
            <line x1="540" y1="195" x2="580" y2="215" stroke="#d1c39a" strokeWidth="1" opacity="0.5" />
          </g>

          {/* === Wheels === */}
          {[
            { cx: 140, r: 28 },
            { cx: 330, r: 30 },
            { cx: 395, r: 30 },
            { cx: 480, r: 30 },
          ].map((w, i) => (
            <g
              key={i}
              style={{
                transformOrigin: `${w.cx}px 260px`,
                animation: "wheel-spin 1.6s linear infinite",
              }}
            >
              <circle cx={w.cx} cy="260" r={w.r} fill="#0a0a0a" stroke="#2a2a2a" strokeWidth="1.5" />
              <circle cx={w.cx} cy="260" r={w.r - 8} fill="#1a1a1a" />
              <circle cx={w.cx} cy="260" r="6" fill="#3f3f3f" />
              {/* spokes */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <line
                  key={deg}
                  x1={w.cx}
                  y1="260"
                  x2={w.cx + (w.r - 10) * Math.cos((deg * Math.PI) / 180)}
                  y2={260 + (w.r - 10) * Math.sin((deg * Math.PI) / 180)}
                  stroke="#2a2a2a"
                  strokeWidth="1.5"
                />
              ))}
            </g>
          ))}

          {/* === Brand stripe on chassis === */}
          <rect x="220" y="232" width="280" height="8" fill="#d1c39a" opacity="0.85" />
          <text
            x="360"
            y="239"
            textAnchor="middle"
            fontFamily="Oswald, sans-serif"
            fontSize="8"
            fontWeight="700"
            fill="#050505"
            letterSpacing="2"
          >
            PERFECT RMC · JAROD · VADODARA
          </text>
        </svg>
      </motion.div>

      {/* Floating speed lines behind truck */}
      <div className="absolute inset-y-0 right-0 w-2/3 pointer-events-none overflow-hidden opacity-50">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#d1c39a]/40 to-transparent"
            style={{
              top: `${30 + i * 18}%`,
              width: "60%",
            }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 2 + i * 0.6,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes drum-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes drum-spin-reverse {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes wheel-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </motion.div>
  );
};

export default TransitMixer;
