import React from "react";
import { motion } from "framer-motion";
import { COMPANY } from "../../lib/company";

// Real brand logos via Google's favicon API (sz=128).
// Falls back to text mark if image fails to load.
const clientLogos = [
  { name: "Schneider Electric", domain: "schneider-electric.com" },
  { name: "GE Vernova", domain: "gevernova.com" },
  { name: "Larsen & Toubro", domain: "larsentoubro.com" },
  {
    name: "Voltas",
    domain: "voltas.com",
    customLogo:
      "https://customer-assets.emergentagent.com/job_delivery-concrete/artifacts/tr83qvd9_images%20%281%29.png",
  },
  { name: "MG Motor India", domain: "mgmotor.co.in" },
  {
    name: "Polycab",
    domain: "polycab.com",
    customLogo:
      "https://customer-assets.emergentagent.com/job_delivery-concrete/artifacts/ipuezrqt_download%20%282%29.png",
  },
  {
    name: "Apollo Tyres",
    domain: "apollotyres.com",
    customLogo:
      "https://customer-assets.emergentagent.com/job_delivery-concrete/artifacts/javmiv7q_apollo-tyres-logo.png",
  },
  { name: "Cadila Pharma", domain: "cadilapharma.com" },
  {
    name: "Banco Products",
    domain: "bancoindia.com",
    customLogo:
      "https://customer-assets.emergentagent.com/job_delivery-concrete/artifacts/mz8vow2q_images%20%282%29.png",
  },
  {
    name: "Lafarge",
    domain: "lafarge.com",
    customLogo:
      "https://customer-assets.emergentagent.com/job_delivery-concrete/artifacts/58wh72oi_images.png",
  },
];

const ClientLogo = ({ name, domain, customLogo, idx }) => {
  const [errored, setErrored] = React.useState(false);
  // Use uploaded high-res logo if provided, else Google's favicon API.
  const src =
    customLogo || `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (idx % 5) * 0.05 }}
      className="bg-[#0a0a0a] h-32 flex flex-col items-center justify-center gap-3 px-6 text-center hover:bg-[#101010] transition-colors group"
      data-testid={`client-logo-${idx}`}
      title={name}
    >
      {!errored && (
        <img
          src={src}
          alt={name}
          loading="lazy"
          onError={() => setErrored(true)}
          className={
            customLogo
              ? "max-h-12 max-w-[120px] object-contain opacity-90 group-hover:opacity-100 transition-all duration-500"
              : "w-10 h-10 object-contain opacity-70 group-hover:opacity-100 transition-all duration-500"
          }
        />
      )}
      <span className="font-display text-xs md:text-sm uppercase tracking-[0.15em] text-white/55 group-hover:text-[#d1c39a] transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

const Clients = () => {
  const marqueeNames = COMPANY.clients;
  return (
    <section
      className="relative py-20 md:py-28 bg-[#050505] overflow-hidden border-y border-white/5"
      data-testid="clients-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-[#d1c39a]" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-[#d1c39a] font-semibold">
                Trusted By
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-[0.95]">
              Brands that don't compromise on{" "}
              <span className="text-[#d1c39a]">concrete</span>.
            </h2>
          </div>
          <p className="text-white/50 text-sm md:text-base max-w-xs">
            Multinationals, pharmaceuticals, infrastructure contractors and
            developers — all pour with Perfect RMC.
          </p>
        </motion.div>
      </div>

      {/* Real brand logos grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {clientLogos.map((c, i) => (
            <ClientLogo key={c.name} {...c} idx={i} />
          ))}
        </div>
      </div>

      {/* Marquee of remaining names */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="flex marquee-track whitespace-nowrap py-2">
          {[...marqueeNames, ...marqueeNames].map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-12 px-8 font-display text-xl md:text-2xl uppercase tracking-tight text-white/55 hover:text-white transition-colors"
            >
              {c}
              <span className="w-1.5 h-1.5 bg-[#d1c39a] rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
