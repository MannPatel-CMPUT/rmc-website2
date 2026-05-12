import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { COMPANY, whatsappLink } from "../../lib/company";

const WhatsAppCTA = () => {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#050505] overflow-hidden"
      data-testid="whatsapp-cta-section"
    >
      {/* Concrete texture bg */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -right-40 w-[700px] h-[700px] concrete-blob"
        style={{
          background:
            "radial-gradient(circle, rgba(209,195,154,0.18) 0%, rgba(209,195,154,0) 70%)",
        }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] concrete-blob"
        style={{
          background:
            "radial-gradient(circle, rgba(160,160,160,0.12) 0%, rgba(160,160,160,0) 70%)",
        }}
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <div aria-hidden className="absolute inset-0 speed-lines opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-[#d1c39a]/20 bg-gradient-to-br from-[#0e0e0e] to-[#050505] p-10 md:p-16 lg:p-20 relative overflow-hidden"
        >
          {/* corner marks */}
          <span className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-[#d1c39a]" />
          <span className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-[#d1c39a]" />
          <span className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-[#d1c39a]" />
          <span className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-[#d1c39a]" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-[#d1c39a]" />
                <span className="text-[11px] tracking-[0.35em] uppercase text-[#d1c39a] font-semibold">
                  Talk to Dispatch
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
                Need concrete <br />
                <span className="text-[#d1c39a]">this week?</span>
              </h2>
              <p className="mt-6 text-white/65 text-base md:text-lg leading-relaxed max-w-xl">
                Send your site details on WhatsApp — volume, grade, location,
                pour date. We'll confirm the mix and schedule a truck within
                hours.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-[#d1c39a] hover:bg-[#e5d9b6] text-[#050505] font-bold uppercase tracking-[0.18em] text-sm px-8 py-5 transition-all"
                  data-testid="cta-whatsapp-primary"
                >
                  <MessageCircle size={18} />
                  Message on WhatsApp
                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>
                <a
                  href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/20 hover:border-[#d1c39a] text-white font-bold uppercase tracking-[0.18em] text-sm px-8 py-5 transition-colors"
                  data-testid="cta-call"
                >
                  <Phone size={16} />
                  Call Dispatch
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-[#d1c39a]/15 lg:pl-12">
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
                    WhatsApp
                  </div>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-2xl text-white hover:text-[#d1c39a] transition-colors"
                    data-testid="cta-whatsapp-number"
                  >
                    {COMPANY.whatsappDisplay}
                  </a>
                </div>
                <div className="h-px bg-[#d1c39a]/15" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
                    Call Lines
                  </div>
                  <div className="space-y-1">
                    {COMPANY.phones.slice(1).map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/\s/g, "")}`}
                        className="block font-display text-lg text-white/80 hover:text-white transition-colors"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="h-px bg-[#d1c39a]/15" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
                    Hours
                  </div>
                  <div className="text-white/75 text-sm">
                    {COMPANY.hours.weekdays}
                  </div>
                  <div className="text-white/45 text-xs mt-1">
                    {COMPANY.hours.sunday}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
