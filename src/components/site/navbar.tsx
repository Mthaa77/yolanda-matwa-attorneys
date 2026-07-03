"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, FIRM } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-cream/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(176,141,69,0.15),0_8px_30px_-12px_rgba(15,31,56,0.12)]"
            : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <button
            onClick={() => handleNav("#home")}
            className="group flex items-center gap-3"
            aria-label="Go to top"
          >
            <Logo
              className={cn(
                "h-11 w-11 transition-colors",
                scrolled ? "text-navy-deep" : "text-cream",
              )}
            />
            <span className="hidden flex-col items-start leading-none sm:flex">
              <span
                className={cn(
                  "font-display text-lg font-bold tracking-tight transition-colors",
                  scrolled ? "text-navy-deep" : "text-cream",
                )}
              >
                Yolanda Matwa
              </span>
              <span
                className={cn(
                  "text-[0.625rem] font-medium uppercase tracking-[0.28em] transition-colors",
                  scrolled ? "text-gold" : "text-gold-light",
                )}
              >
                Attorneys
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const active = activeSection === id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors",
                    scrolled
                      ? active
                        ? "text-navy-deep"
                        : "text-muted-foreground hover:text-navy-deep"
                      : active
                        ? "text-cream"
                        : "text-cream/70 hover:text-cream",
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-4 -bottom-0.5 h-px bg-gold"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${FIRM.phoneIntl}`}
              className={cn(
                "hidden items-center gap-2 text-sm font-medium transition-colors xl:flex",
                scrolled
                  ? "text-navy-deep hover:text-gold"
                  : "text-cream/80 hover:text-cream",
              )}
            >
              <Phone className="h-4 w-4" />
              {FIRM.phone}
            </a>
            <button
              onClick={() => handleNav("#contact")}
              className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-gold-glow transition-all hover:bg-gold-light hover:shadow-lg sm:flex"
            >
              Book a Consultation
            </button>
            <button
              onClick={() => setOpen(true)}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
                scrolled
                  ? "text-navy-deep hover:bg-navy/5"
                  : "text-cream hover:bg-cream/10",
              )}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-navy-deep lg:hidden"
          >
            <div className="flex h-20 items-center justify-between px-5 sm:px-8">
              <Logo className="h-11 w-11 text-cream" />
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-cream hover:bg-cream/10"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-1 px-6 pt-8">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  onClick={() => handleNav(link.href)}
                  className="border-b border-cream/10 py-4 text-left font-display text-2xl font-medium text-cream/90 transition-colors hover:text-gold-light"
                >
                  <span className="mr-3 text-sm text-gold/60">
                    0{i + 1}
                  </span>
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + NAV_LINKS.length * 0.07, duration: 0.4 }}
                onClick={() => handleNav("#contact")}
                className="mt-8 rounded-full bg-gold px-6 py-4 text-center font-semibold text-navy-deep"
              >
                Book a Consultation
              </motion.button>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                href={`tel:${FIRM.phoneIntl}`}
                className="mt-6 flex items-center justify-center gap-2 text-sm text-cream/60"
              >
                <Phone className="h-4 w-4" />
                {FIRM.phone}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
