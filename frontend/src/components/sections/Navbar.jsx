import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { COMPANY, whatsappLink } from "../../lib/company";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Calculator", href: "#calculator" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
      data-testid="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 group"
          data-testid="logo-link"
        >
          <div className="w-10 h-10 bg-white rounded-full p-0.5 flex items-center justify-center overflow-hidden ring-1 ring-[#d1c39a]/40">
            <img
              src={COMPANY.assets.logo}
              alt="Perfect RMC"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-widest text-white uppercase">
              {COMPANY.name}
            </div>
            <div className="text-[10px] tracking-[0.3em] text-[#d1c39a] uppercase">
              Ready-Mix Concrete
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm uppercase tracking-[0.18em] text-white/80 hover:text-white font-medium"
              data-testid={`nav-${l.label.toLowerCase().replace(" ", "-")}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#quote-request"
            className="bg-[#d1c39a] hover:bg-[#e5d9b6] text-[#050505] font-bold uppercase tracking-wider text-xs px-5 py-3 transition-colors"
            data-testid="navbar-get-quote-form"
          >
            Get Quote
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-[#050505] border-t border-white/5 px-6 py-8 flex flex-col gap-5 z-40 overflow-y-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 uppercase tracking-widest text-sm"
              data-testid={`mobile-nav-${l.label.toLowerCase().replace(" ", "-")}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quote-request"
            onClick={() => setOpen(false)}
            className="bg-[#d1c39a] text-[#050505] font-bold uppercase tracking-wider text-xs px-5 py-3 text-center"
            data-testid="mobile-get-quote-form"
          >
            Get Quote
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="text-center text-white/70 uppercase tracking-widest text-xs border border-white/20 py-3 hover:border-[#d1c39a]/50 hover:text-white transition-colors"
            data-testid="mobile-whatsapp-cta"
          >
            Message on WhatsApp
          </a>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
