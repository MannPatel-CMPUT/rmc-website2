import React from "react";
import { motion } from "framer-motion";
import { FileDown, MapPin } from "lucide-react";
import { COMPANY } from "../../lib/company";

const AboutUs = () => {
  const { about, profilePdfPath, assets, region } = COMPANY;

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#0a0a0a] border-y border-white/5 scroll-mt-24"
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] max-h-[520px] overflow-hidden border border-white/10">
            <img
              src={assets.plantSilos || assets.plant}
              alt="Perfect RMC plant and silos"
              className="w-full h-full object-cover grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center gap-2 text-[#d1c39a] text-xs uppercase tracking-[0.25em] mb-2">
                <MapPin size={14} />
                {region}
              </div>
              <div className="font-display text-xl text-white uppercase tracking-tight">
                {COMPANY.fullName}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="lg:col-span-7 lg:pt-4"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[#d1c39a]" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#d1c39a] font-semibold">
              About us
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight leading-[0.95]">
            Built for{" "}
            <span className="text-[#d1c39a]">precision pours</span> at scale.
          </h2>
          <p className="mt-6 text-lg text-[#d1c39a]/90 font-medium leading-relaxed">
            {about.headline}
          </p>
          <div className="mt-6 space-y-4 text-white/60 text-base leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#1f1f1f] border border-[#1f1f1f]">
            {about.highlights.map((h) => (
              <div key={h.label} className="bg-[#050505] p-4 text-center sm:text-left">
                <div className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">
                  {h.label}
                </div>
                <div className="font-display text-sm md:text-base text-white uppercase tracking-wide">
                  {h.value}
                </div>
              </div>
            ))}
          </div>

          <a
            href={profilePdfPath}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 border border-[#d1c39a]/40 text-[#d1c39a] hover:bg-[#d1c39a]/10 font-bold uppercase tracking-wider text-xs px-5 py-3 transition-colors"
            data-testid="about-profile-pdf"
          >
            <FileDown size={16} />
            Company profile (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
