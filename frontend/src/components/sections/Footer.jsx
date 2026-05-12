import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { COMPANY, whatsappLink } from "../../lib/company";

const Footer = () => {
  return (
    <footer
      className="relative bg-[#030303] border-t border-white/5 pt-20 pb-10"
      data-testid="footer-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-white rounded-full p-1 overflow-hidden">
                <img
                  src={COMPANY.assets.logo}
                  alt="Perfect RMC"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-display text-xl text-white uppercase tracking-widest">
                  {COMPANY.name}
                </div>
                <div className="text-[10px] tracking-[0.3em] text-[#d1c39a] uppercase">
                  Ready-Mix Concrete
                </div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-sm">
              Since {COMPANY.established}, Perfect RMC has been the trusted
              ready-mix concrete partner for builders, contractors, and
              industrial leaders across Vadodara, Waghodia, Halol and beyond.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 border border-[#d1c39a]/30">
              <span className="w-1.5 h-1.5 bg-[#d1c39a] rounded-full" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#d1c39a]">
                {COMPANY.certification}
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="font-display text-[10px] tracking-[0.4em] text-[#d1c39a] uppercase mb-5">
              Contact
            </div>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#d1c39a] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  {COMPANY.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="block hover:text-white transition-colors"
                      data-testid={`footer-phone-${p}`}
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#d1c39a] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  {COMPANY.emails.map((e) => (
                    <a
                      key={e}
                      href={`mailto:${e}`}
                      className="block hover:text-white transition-colors break-all"
                      data-testid={`footer-email-${e}`}
                    >
                      {e}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-[#d1c39a] mt-1 flex-shrink-0" />
                <div>
                  <div>{COMPANY.hours.weekdays}</div>
                  <div className="text-white/40 text-xs mt-0.5">
                    {COMPANY.hours.sunday}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="md:col-span-4">
            <div className="font-display text-[10px] tracking-[0.4em] text-[#d1c39a] uppercase mb-5">
              Plant Address
            </div>
            <div className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
              <MapPin size={15} className="text-[#d1c39a] mt-1 flex-shrink-0" />
              <div>
                <div>{COMPANY.address.line1}</div>
                <div>{COMPANY.address.line2}</div>
                <div>{COMPANY.address.line3}</div>
              </div>
            </div>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-6 items-center gap-2 bg-[#d1c39a] hover:bg-[#e5d9b6] text-[#050505] font-bold uppercase tracking-wider text-xs px-5 py-3 transition-colors"
              data-testid="footer-whatsapp-cta"
            >
              Get Quote on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved.
          </div>
          <div className="text-[10px] tracking-[0.35em] uppercase text-white/30">
            Concrete · In · Motion
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
