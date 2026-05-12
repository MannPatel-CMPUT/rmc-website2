import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { COMPANY, whatsappLink } from "../../lib/company";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 bg-[#050505] border-y border-white/5 scroll-mt-24"
      data-testid="faq-section"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[#d1c39a]" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#d1c39a] font-semibold">
              General questions
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight leading-[0.95]">
            Questions <span className="text-[#d1c39a]">clients ask</span>
          </h2>
          <p className="mt-5 text-white/55 text-base leading-relaxed">
            Quick answers about coverage, grades, booking and quality. For
            project-specific advice,{" "}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="text-[#d1c39a] hover:underline"
            >
              message us on WhatsApp
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full border border-white/10 bg-[#0a0a0a] px-4 md:px-6"
          >
            {COMPANY.faqs.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-white/10"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline py-5 text-sm md:text-base font-display uppercase tracking-wide hover:text-[#d1c39a] data-[state=open]:text-[#d1c39a] [&>svg]:text-[#d1c39a]/70">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 text-sm md:text-base leading-relaxed pb-5 pr-2">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
