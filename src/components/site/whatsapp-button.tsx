"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { FIRM } from "@/lib/site-data";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 print:hidden sm:bottom-6 sm:right-6"
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
        >
          <AnimatePresence>
            {expanded && (
              <motion.span
                initial={{ opacity: 0, x: 10, width: 0 }}
                animate={{ opacity: 1, x: 0, width: "auto" }}
                exit={{ opacity: 0, x: 10, width: 0 }}
                transition={{ duration: 0.25 }}
                className="hidden overflow-hidden whitespace-nowrap rounded-full bg-navy-deep px-4 py-2 text-sm font-medium text-cream shadow-premium sm:block"
              >
                Chat with us
              </motion.span>
            )}
          </AnimatePresence>
          <a
            href={`https://wa.me/${FIRM.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-14 w-14 items-center justify-center rounded-full bg-sage text-white shadow-premium transition-all hover:scale-105 hover:bg-sage/90"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
            {/* ping ring */}
            <span className="absolute -z-10 h-14 w-14 animate-ping rounded-full bg-sage/30" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
