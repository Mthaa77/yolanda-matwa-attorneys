"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * Thin gold scroll-progress bar fixed to the very top of the viewport.
 * Sits above the navbar (z-[55]) so it reads as a premium reading-progress cue.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[55] h-0.5 origin-left bg-gradient-to-r from-gold via-gold-light to-gold"
      aria-hidden="true"
    />
  );
}

/**
 * Back-to-top button. Appears after scrolling 700px.
 * Sits bottom-left so it never collides with the WhatsApp button (bottom-right).
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-navy-deep/90 text-gold backdrop-blur-sm shadow-premium transition-all hover:scale-105 hover:bg-navy-deep hover:text-gold-light sm:bottom-6 sm:left-6"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/**
 * Restrained loading screen — dark navy with a gold logo monogram fade.
 * Shows once per session (sessionStorage flag) per the build brief:
 * "keep restrained, this is a law firm, not a luxury brand launch."
 */
export function LoadingScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("yma_loaded") === "1";
    } catch {
      // sessionStorage unavailable — skip the screen silently
      return;
    }
    if (seen) return;

    try {
      sessionStorage.setItem("yma_loaded", "1");
    } catch {
      return;
    }

    // Defer state updates into callbacks (never synchronous in effect body)
    // so we don't trigger cascading renders per react-hooks lint rule.
    const showT = setTimeout(() => setShow(true), 0);
    const hideT = setTimeout(() => setShow(false), 1100);
    return () => {
      clearTimeout(showT);
      clearTimeout(hideT);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-deep"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-5"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-gold/30">
              <span className="font-display text-3xl font-bold text-gradient-gold">
                YM
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-display text-lg font-medium text-cream">
                Yolanda Matwa
              </span>
              <span className="text-[0.625rem] font-medium uppercase tracking-[0.28em] text-gold-light/70">
                Attorneys
              </span>
            </div>
            {/* loading line */}
            <div className="mt-2 h-px w-32 overflow-hidden bg-cream/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
                className="h-full w-1/2 bg-gold"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
