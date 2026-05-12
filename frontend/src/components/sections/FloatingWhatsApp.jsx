import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#quote-request"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 group"
          data-testid="floating-whatsapp"
          aria-label="Go to quote form"
        >
          <span className="absolute inset-0 rounded-full bg-[#d1c39a] animate-ping opacity-30" />
          <span className="relative flex items-center gap-3 bg-[#d1c39a] hover:bg-[#e5d9b6] text-[#050505] font-bold uppercase tracking-wider text-xs px-5 py-4 rounded-full shadow-2xl transition-colors">
            <MessageCircle size={18} />
            <span className="hidden sm:inline">Quote</span>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;
