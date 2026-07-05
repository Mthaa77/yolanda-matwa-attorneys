"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail, MapPin, Phone, Scale } from "lucide-react";
import { FIRM } from "@/lib/site-data";
import Image from "next/image";

export function FinalCTA() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const contactChoices = [
    { icon: Phone, label: "Call the practice", value: FIRM.phone, href: `tel:${FIRM.phoneIntl}` },
    { icon: Mail, label: "Send an enquiry", value: FIRM.email, href: `mailto:${FIRM.email}` },
    { icon: MapPin, label: "Visit the office", value: "Menlyn Maine, Pretoria East", href: FIRM.mapsLink },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <div className="absolute inset-0">
        <Image
          src="/images/legal-scene.jpg"
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover opacity-[0.17]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(15,31,56,0.98)_0%,rgba(15,31,56,0.94)_46%,rgba(15,31,56,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_16%,rgba(0,56,168,0.24),transparent_28%),radial-gradient(circle_at_8%_80%,rgba(0,122,51,0.14),transparent_28%),radial-gradient(circle_at_76%_88%,rgba(176,141,69,0.16),transparent_26%)]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#000000_0%,#ffb81c_16%,#007a33_38%,#ffffff_56%,#de3831_76%,#0038a8_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="pointer-events-none absolute left-8 top-8 hidden h-14 w-14 border-l-2 border-t-2 border-gold/40 lg:block" />
      <div className="pointer-events-none absolute bottom-8 right-8 hidden h-14 w-14 border-b-2 border-r-2 border-gold/40 lg:block" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,1fr)_25rem] lg:items-center lg:gap-20 lg:px-12 lg:py-32">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 rounded-full border border-gold/25 bg-white/[0.06] px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.22em] text-gold-light backdrop-blur-sm"
          >
            <Scale className="h-3.5 w-3.5" />
            Start with a conversation
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,5.4vw,5rem)] font-bold leading-[1.01] tracking-tight text-cream text-balance"
          >
            The right legal move starts with <span className="italic text-gradient-gold">a clear first conversation.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-cream/72 sm:text-lg"
          >
            Whether you need to protect a property decision, resolve an estate, formalise an agreement or simply understand your options, the next step does not have to feel complicated.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold px-8 py-4 text-sm font-bold text-navy-deep shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_20px_36px_-14px_rgba(176,141,69,0.78)]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Book a Consultation</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href={`tel:${FIRM.phoneIntl}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:bg-white/[0.08]"
            >
              <Phone className="h-4 w-4 text-gold-light" />
              {FIRM.phone}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative [perspective:1200px]"
        >
          <div className="absolute -inset-7 rounded-[2.5rem] bg-gold/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.8rem] border border-gold/30 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-5 shadow-[0_32px_80px_-36px_rgba(0,0,0,0.88)] backdrop-blur-xl sm:p-6">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),transparent_38%,rgba(176,141,69,0.12))]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,#ffb81c_0%,#007a33_38%,#ffffff_56%,#de3831_76%,#0038a8_100%)]" />

            <div className="relative">
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/35 bg-gold/10 text-gold-light shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                  <FileText className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-[0.61rem] font-bold uppercase tracking-[0.15em] text-cream/65">
                  Your next step
                </span>
              </div>

              <div className="mt-8 rounded-[1.2rem] border border-white/10 bg-navy-deep/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <p className="text-[0.63rem] font-bold uppercase tracking-[0.19em] text-gold-light/80">A matter, handled properly</p>
                <p className="mt-3 font-display text-2xl font-bold leading-tight text-cream">Tell us what is happening. We&apos;ll help you see the path forward.</p>
                <div className="mt-5 h-px bg-gradient-to-r from-gold/60 via-gold/15 to-transparent" />
                <p className="mt-5 text-sm leading-relaxed text-cream/65">A responsive first conversation can bring calm, structure and direction to an important decision.</p>
              </div>

              <div className="mt-5 space-y-3">
                {contactChoices.map((choice, index) => {
                  const Icon = choice.icon;
                  return (
                    <a
                      key={choice.label}
                      href={choice.href}
                      target={choice.label === "Visit the office" ? "_blank" : undefined}
                      rel={choice.label === "Visit the office" ? "noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/35 hover:bg-white/[0.08]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/25 bg-gold/10 text-gold-light transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-cream/48">{choice.label}</span>
                        <span className="mt-1 block truncate text-sm font-medium text-cream/82">{choice.value}</span>
                      </span>
                      <span className="font-display text-lg text-gold/75">0{index + 1}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
