import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Box, Cylinder, Send } from "lucide-react";
import { whatsappLink } from "../../lib/company";

const parseM = (v) => {
  const n = parseFloat(String(v).replace(/,/g, "").trim());
  return Number.isFinite(n) && n > 0 ? n : 0;
};

const VolumeCalculator = () => {
  const [mode, setMode] = useState("slab");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [diameter, setDiameter] = useState("");
  const [height, setHeight] = useState("");
  const [wastagePct, setWastagePct] = useState("5");

  const [quoteName, setQuoteName] = useState("");
  const [quoteVolume, setQuoteVolume] = useState("");
  const [quotePhone, setQuotePhone] = useState("");
  const [quoteLocation, setQuoteLocation] = useState("");
  const [quotePourDate, setQuotePourDate] = useState("");
  const [quoteAdditional, setQuoteAdditional] = useState("");

  const { base, withWastage } = useMemo(() => {
    let baseVol = 0;
    if (mode === "slab") {
      baseVol = parseM(length) * parseM(width) * parseM(depth);
    } else {
      const d = parseM(diameter);
      const h = parseM(height);
      const r = d / 2;
      baseVol = Math.PI * r * r * h;
    }
    const w = Math.min(Math.max(parseFloat(wastagePct) || 0, 0), 50);
    const adjusted = baseVol * (1 + w / 100);
    return { base: baseVol, withWastage: adjusted };
  }, [mode, length, width, depth, diameter, height, wastagePct]);

  const fmt = (n) =>
    n > 0 ? n.toLocaleString(undefined, { maximumFractionDigits: 2 }) : "—";

  const scrollToQuote = () => {
    document.getElementById("quote-request")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const useCalculatorVolume = () => {
    if (withWastage > 0) {
      setQuoteVolume(
        withWastage.toLocaleString(undefined, { maximumFractionDigits: 2 })
      );
    }
    scrollToQuote();
  };

  const buildQuoteMessage = () => {
    const lines = [
      "Hi Perfect RMC,",
      "",
      "I would like a quote for ready-mix concrete.",
      "",
      quoteName.trim() ? `Name: ${quoteName.trim()}` : null,
      quoteVolume.trim() ? `Volume (approx.): ${quoteVolume.trim()} m³` : null,
      quotePhone.trim() ? `Phone: ${quotePhone.trim()}` : null,
      quoteLocation.trim() ? `Location: ${quoteLocation.trim()}` : null,
      quotePourDate.trim() ? `Pour / delivery date: ${quotePourDate.trim()}` : null,
      quoteAdditional.trim()
        ? `Additional information:\n${quoteAdditional.trim()}`
        : null,
    ].filter(Boolean);

    return lines.join("\n");
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    if (!quotePhone.trim()) return;
    const url = whatsappLink(buildQuoteMessage());
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const canSubmit = quotePhone.trim().length > 0;

  return (
    <section
      id="calculator"
      className="relative py-24 md:py-32 bg-[#050505] border-y border-white/5 overflow-hidden"
      data-testid="volume-calculator-section"
    >
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl mb-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[#d1c39a]" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#d1c39a] font-semibold">
              Planning Tool
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight leading-[0.95]">
            Concrete <span className="text-[#d1c39a]">volume</span> calculator
          </h2>
          <p className="mt-5 text-white/55 text-base md:text-lg max-w-xl leading-relaxed">
            Enter dimensions in metres. For slabs use length, width and
            thickness; for circular columns or piles use diameter and height.
            Add a wastage allowance before you order.
          </p>
          <div className="mt-8">
            <a
              href="#quote-request"
              className="inline-flex items-center justify-center bg-[#d1c39a] hover:bg-[#e5d9b6] text-[#050505] font-bold uppercase tracking-wider text-xs px-8 py-3 transition-colors"
              data-testid="calc-scroll-to-quote"
            >
              Get quote
            </a>
            <p className="mt-3 text-xs text-white/40 max-w-md">
              Jumps to the quote form below. Add your details and submit to send
              the request on WhatsApp.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 p-6 md:p-8"
          >
            <div className="flex gap-2 mb-8">
              <button
                type="button"
                onClick={() => setMode("slab")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors ${
                  mode === "slab"
                    ? "bg-[#d1c39a] text-[#050505]"
                    : "bg-white/5 text-white/60 hover:text-white"
                }`}
                data-testid="calc-mode-slab"
              >
                <Box size={16} />
                Slab / footing
              </button>
              <button
                type="button"
                onClick={() => setMode("cylinder")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors ${
                  mode === "cylinder"
                    ? "bg-[#d1c39a] text-[#050505]"
                    : "bg-white/5 text-white/60 hover:text-white"
                }`}
                data-testid="calc-mode-cylinder"
              >
                <Cylinder size={16} />
                Column / pile
              </button>
            </div>

            {mode === "slab" ? (
              <div className="grid sm:grid-cols-3 gap-4">
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/45 block mb-2">
                    Length (m)
                  </span>
                  <input
                    inputMode="decimal"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="w-full bg-[#050505] border border-white/15 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d1c39a]/60"
                    placeholder="0"
                    data-testid="calc-length"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/45 block mb-2">
                    Width (m)
                  </span>
                  <input
                    inputMode="decimal"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-full bg-[#050505] border border-white/15 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d1c39a]/60"
                    placeholder="0"
                    data-testid="calc-width"
                  />
                </label>
                <label className="block sm:col-span-3 md:col-span-1">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/45 block mb-2">
                    Thickness (m)
                  </span>
                  <input
                    inputMode="decimal"
                    value={depth}
                    onChange={(e) => setDepth(e.target.value)}
                    className="w-full bg-[#050505] border border-white/15 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d1c39a]/60"
                    placeholder="0"
                    data-testid="calc-depth"
                  />
                </label>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/45 block mb-2">
                    Diameter (m)
                  </span>
                  <input
                    inputMode="decimal"
                    value={diameter}
                    onChange={(e) => setDiameter(e.target.value)}
                    className="w-full bg-[#050505] border border-white/15 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d1c39a]/60"
                    placeholder="0"
                    data-testid="calc-diameter"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/45 block mb-2">
                    Height (m)
                  </span>
                  <input
                    inputMode="decimal"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full bg-[#050505] border border-white/15 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d1c39a]/60"
                    placeholder="0"
                    data-testid="calc-height"
                  />
                </label>
              </div>
            )}

            <label className="block mt-6 max-w-xs">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/45 block mb-2">
                Wastage (%)
              </span>
              <input
                inputMode="decimal"
                value={wastagePct}
                onChange={(e) => setWastagePct(e.target.value)}
                className="w-full bg-[#050505] border border-white/15 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d1c39a]/60"
                placeholder="5"
                data-testid="calc-wastage"
              />
            </label>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:col-span-5 bg-[#0a0a0a] border border-[#d1c39a]/25 p-6 md:p-8 flex flex-col"
          >
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#d1c39a] mb-4">
              Estimated quantity
            </div>
            <div className="font-display text-4xl md:text-5xl text-white tracking-tight">
              {fmt(base)}{" "}
              <span className="text-lg md:text-xl text-white/40 font-body tracking-normal">
                m³
              </span>
            </div>
            <div className="text-sm text-white/50 mt-2">Net volume (no wastage)</div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="font-display text-2xl md:text-3xl text-[#d1c39a] tracking-tight">
                {fmt(withWastage)}{" "}
                <span className="text-sm text-[#d1c39a]/60 font-body">m³</span>
              </div>
              <div className="text-sm text-white/50 mt-2">
                Including {wastagePct || "0"}% wastage — typical for ordering
              </div>
            </div>

            {withWastage > 0 && (
              <button
                type="button"
                onClick={useCalculatorVolume}
                className="mt-6 text-left text-[11px] uppercase tracking-[0.2em] text-[#d1c39a] hover:text-[#e5d9b6] underline underline-offset-4"
                data-testid="calc-use-volume-in-quote"
              >
                Use this volume in quote form →
              </button>
            )}

            <p className="text-xs text-white/35 mt-6 leading-relaxed">
              Indicative only. Site losses, formwork, pump line and slab
              irregularities can change actual demand. Our team will confirm
              truck loads and grade with you before the pour.
            </p>
          </motion.div>
        </div>

        <motion.div
          id="quote-request"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-14 md:mt-16 scroll-mt-28 bg-[#0a0a0a] border border-white/10 p-6 md:p-8"
          data-testid="calc-get-quote-section"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-[#d1c39a]" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#d1c39a] font-semibold">
              Request a quote
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-white uppercase tracking-tight">
            Ready-mix concrete quote
          </h3>
          <p className="mt-2 text-white/50 text-sm max-w-xl">
            Enter your details and submit. We will open WhatsApp with your quote
            request so you can send it to us in one tap.
          </p>

          <form
            onSubmit={handleQuoteSubmit}
            className="mt-8 grid sm:grid-cols-2 gap-4"
          >
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/45 block mb-2">
                Name
              </span>
              <input
                value={quoteName}
                onChange={(e) => setQuoteName(e.target.value)}
                className="w-full bg-[#050505] border border-white/15 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d1c39a]/60"
                placeholder="Your name"
                autoComplete="name"
                data-testid="quote-name"
              />
            </label>
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/45 block mb-2">
                Volume (m³)
              </span>
              <input
                inputMode="decimal"
                value={quoteVolume}
                onChange={(e) => setQuoteVolume(e.target.value)}
                className="w-full bg-[#050505] border border-white/15 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d1c39a]/60"
                placeholder="e.g. 12.5"
                data-testid="quote-volume"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/45 block mb-2">
                Phone number <span className="text-[#d1c39a]/80">*</span>
              </span>
              <input
                inputMode="tel"
                required
                value={quotePhone}
                onChange={(e) => setQuotePhone(e.target.value)}
                className="w-full bg-[#050505] border border-white/15 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d1c39a]/60"
                placeholder="+91 …"
                autoComplete="tel"
                data-testid="quote-phone"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/45 block mb-2">
                Location
              </span>
              <input
                value={quoteLocation}
                onChange={(e) => setQuoteLocation(e.target.value)}
                className="w-full bg-[#050505] border border-white/15 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d1c39a]/60"
                placeholder="Site address or area"
                autoComplete="street-address"
                data-testid="quote-location"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/45 block mb-2">
                Pour date
              </span>
              <input
                value={quotePourDate}
                onChange={(e) => setQuotePourDate(e.target.value)}
                className="w-full bg-[#050505] border border-white/15 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d1c39a]/60"
                placeholder="e.g. 20 June, next week"
                data-testid="quote-pour-date"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/45 block mb-2">
                Additional information{" "}
                <span className="normal-case tracking-normal text-white/35">
                  (optional)
                </span>
              </span>
              <textarea
                value={quoteAdditional}
                onChange={(e) => setQuoteAdditional(e.target.value)}
                rows={4}
                className="w-full bg-[#050505] border border-white/15 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d1c39a]/60 resize-y min-h-[100px]"
                placeholder="Grade (e.g. M25), pump required, timing constraints, project type…"
                data-testid="quote-additional"
              />
            </label>

            <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
              <button
                type="submit"
                disabled={!canSubmit}
                className={`inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-xs px-8 py-3 transition-colors ${
                  canSubmit
                    ? "bg-[#d1c39a] hover:bg-[#e5d9b6] text-[#050505]"
                    : "bg-white/10 text-white/40 cursor-not-allowed"
                }`}
                data-testid="quote-submit"
              >
                <Send size={16} />
                Submit
              </button>
              <span className="text-xs text-white/35">
                Phone is required. Submit opens WhatsApp with your quote message.
              </span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default VolumeCalculator;
