"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Phone, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { FIRM, NAV_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((link) => link.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
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
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -42, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <nav
          className={cn(
            "relative mx-auto flex max-w-7xl items-center justify-between rounded-[1.35rem] border px-3 py-2.5 transition-all duration-500 sm:px-4",
            scrolled
              ? "border-navy/10 bg-cream/[0.9] shadow-[0_1px_0_rgba(176,141,69,0.2),0_18px_46px_-20px_rgba(15,31,56,0.3)] backdrop-blur-2xl"
              : "border-cream/15 bg-navy-deep/22 shadow-[0_10px_34px_-24px_rgba(0,0,0,0.65)] backdrop-blur-xl",
          )}
        >
          <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />

          <button
            type="button"
            onClick={() => handleNav("#home")}
            className="group relative z-10 flex items-center gap-3 rounded-xl pr-2 text-left"
            aria-label="Go to top"
          >
            <span className="relative">
              <span className="absolute -inset-1.5 rounded-full bg-gold/15 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
              <span
                className={cn(
                  "relative block h-11 w-11 overflow-hidden rounded-full border p-0.5 transition-all duration-300",
                  scrolled ? "border-gold/35 bg-white" : "border-cream/25 bg-cream/10",
                )}
              >
                <Image
                  src="/images/logo.png"
                  alt="Yolanda Matwa Attorneys logo"
                  width={44}
                  height={44}
                  className="h-full w-full rounded-full object-cover"
                />
              </span>
            </span>
            <span className="hidden flex-col items-start leading-none sm:flex">
              <span
                className={cn(
                  "font-display text-[1.02rem] font-bold tracking-tight transition-colors",
                  scrolled ? "text-navy-deep" : "text-cream",
                )}
              >
                Yolanda Matwa
              </span>
              <span
                className={cn(
                  "mt-1 text-[0.57rem] font-bold uppercase tracking-[0.27em] transition-colors",
                  scrolled ? "text-gold" : "text-gold-light",
                )}
              >
                Attorneys
              </span>
            </span>
          </button>

          <div
            className={cn(
              "absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border p-1 lg:flex",
              scrolled ? "border-navy/10 bg-navy/[0.035]" : "border-cream/15 bg-cream/[0.06]",
            )}
          >
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const active = activeSection === id;

              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[0.78rem] font-semibold transition-colors xl:px-4",
                    scrolled
                      ? active
                        ? "text-navy-deep"
                        : "text-navy/65 hover:text-navy-deep"
                      : active
                        ? "text-cream"
                        : "text-cream/68 hover:text-cream",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className={cn(
                        "absolute inset-0 -z-10 rounded-full border shadow-sm",
                        scrolled
                          ? "border-gold/25 bg-white shadow-[0_4px_13px_-8px_rgba(15,31,56,0.35)]"
                          : "border-cream/15 bg-cream/10",
                      )}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="relative z-10 flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${FIRM.phoneIntl}`}
              className={cn(
                "hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors 2xl:flex",
                scrolled ? "text-navy-deep hover:bg-navy/5 hover:text-gold" : "text-cream/82 hover:bg-cream/10 hover:text-cream",
              )}
            >
              <Phone className="h-3.5 w-3.5" />
              {FIRM.phone}
            </a>
            <button
              type="button"
              onClick={() => handleNav("#contact")}
              className="group hidden items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-bold text-navy-deep shadow-[0_9px_18px_-10px_rgba(176,141,69,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-gold-glow sm:flex"
            >
              <span className="hidden xl:inline">Book a Consultation</span>
              <span className="xl:hidden">Enquire</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 lg:hidden",
                scrolled
                  ? "border-navy/10 bg-white text-navy-deep hover:border-gold/40 hover:text-gold"
                  : "border-cream/20 bg-cream/[0.07] text-cream hover:border-gold/45 hover:text-gold-light",
              )}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-[60] overflow-hidden bg-navy-deep lg:hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_95%_5%,rgba(176,141,69,0.26),transparent_25%),radial-gradient(circle_at_0%_100%,rgba(30,61,114,0.7),transparent_40%)]" />
            <div className="pointer-events-none absolute inset-4 border border-gold/12" />
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex min-h-full flex-col px-5 pb-8 pt-5 sm:px-8"
            >
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleNav("#home")}
                  className="flex items-center gap-3 text-left"
                  aria-label="Go to top"
                >
                  <span className="h-11 w-11 overflow-hidden rounded-full border border-cream/20 bg-cream/10 p-0.5">
                    <Image
                      src="/images/logo.png"
                      alt="Yolanda Matwa Attorneys logo"
                      width={44}
                      height={44}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-bold text-cream">Yolanda Matwa</span>
                    <span className="block text-[0.56rem] font-bold uppercase tracking-[0.25em] text-gold-light">Attorneys</span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-cream/20 bg-cream/[0.07] text-cream transition-colors hover:border-gold/45 hover:text-gold-light"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-16">
                <div className="mb-5 flex items-center gap-3">
                  <Sparkles className="h-3.5 w-3.5 text-gold" />
                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-gold-light/80">Navigate the practice</span>
                </div>
                <div className="border-y border-cream/12">
                  {NAV_LINKS.map((link, index) => {
                    const active = activeSection === link.href.replace("#", "");
                    return (
                      <motion.button
                        key={link.href}
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + index * 0.065, duration: 0.45 }}
                        type="button"
                        onClick={() => handleNav(link.href)}
                        className={cn(
                          "group flex w-full items-center justify-between border-b border-cream/10 py-5 text-left last:border-b-0",
                          active ? "text-gold-light" : "text-cream/88 hover:text-gold-light",
                        )}
                      >
                        <span className="flex items-center gap-4">
                          <span className="text-[0.68rem] font-bold tracking-[0.16em] text-gold/65">0{index + 1}</span>
                          <span className="font-display text-2xl font-medium">{link.label}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 opacity-45 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-auto pt-10">
                <button
                  type="button"
                  onClick={() => handleNav("#contact")}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold text-navy-deep shadow-gold-glow transition-transform hover:-translate-y-0.5"
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <a
                  href={`tel:${FIRM.phoneIntl}`}
                  className="mt-6 flex items-center justify-center gap-2 text-sm text-cream/62"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  {FIRM.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
