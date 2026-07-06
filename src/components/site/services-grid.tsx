"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Scale,
  Sparkles,
} from "lucide-react";
import { SERVICES, type ServiceDetail } from "@/lib/site-data";
import { firmLogoImage } from "@/lib/director-welcome-image";
import { StaggerGroup, staggerItem } from "./scroll-reveal";
import { ServiceModal } from "./service-modal";
import { OPEN_SERVICE_EVENT_NAME } from "@/lib/service-events";
import { cn } from "@/lib/utils";

const accentStyles = {
  gold: {
    icon: "border-gold/35 bg-[linear-gradient(145deg,rgba(217,199,154,0.34),rgba(176,141,69,0.08))] text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_14px_26px_-16px_rgba(176,141,69,0.85)]",
    line: "from-gold via-gold-light to-transparent",
    glow: "bg-gold/20",
    number: "text-gold/25",
  },
  navy: {
    icon: "border-navy/25 bg-[linear-gradient(145deg,rgba(30,61,114,0.16),rgba(15,31,56,0.04))] text-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_14px_26px_-16px_rgba(15,31,56,0.6)]",
    line: "from-navy via-navy-light to-transparent",
    glow: "bg-navy/15",
    number: "text-navy/15",
  },
  sage: {
    icon: "border-sage/35 bg-[linear-gradient(145deg,rgba(107,127,110,0.19),rgba(107,127,110,0.05))] text-sage shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_14px_26px_-16px_rgba(107,127,110,0.7)]",
    line: "from-sage via-sage/65 to-transparent",
    glow: "bg-sage/15",
    number: "text-sage/20",
  },
} as const;

export function ServicesGrid() {
  const [active, setActive] = useState<ServiceDetail | null>(null);

  useEffect(() => {
    const handler = (event: Event) => {
      const slug = (event as CustomEvent<string>).detail;
      const service = SERVICES.find((item) => item.slug === slug);
      if (service) setActive(service);
    };

    window.addEventListener(OPEN_SERVICE_EVENT_NAME, handler);
    return () => window.removeEventListener(OPEN_SERVICE_EVENT_NAME, handler);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative isolate overflow-hidden bg-mist py-16 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(ellipse_at_50%_-20%,rgba(22,48,92,0.2),transparent_68%)]" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-0 h-[32rem] w-[32rem] rounded-full bg-navy/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.035]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[1.55rem] border border-white/15 bg-navy-deep px-5 py-7 shadow-navy-deep sm:rounded-[2rem] sm:px-10 sm:py-10 lg:px-14 lg:py-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(217,199,154,0.22),transparent_24%),radial-gradient(circle_at_5%_100%,rgba(30,61,114,0.72),transparent_32%)]" />
          <div className="pointer-events-none absolute -right-10 -top-12 h-56 w-56 rounded-full border border-gold/20" />
          <div className="pointer-events-none absolute -right-2 -top-4 h-40 w-40 rounded-full border border-gold/10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/65 to-transparent" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,24rem)] lg:items-center lg:gap-12">
            <div className="min-w-0 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-3.5 py-1.5 text-[0.63rem] font-bold uppercase tracking-[0.22em] text-gold-light">
                  <Sparkles className="h-3.5 w-3.5" />
                  Practice Areas
                </span>
                <span className="h-px w-8 bg-gold/45" />
                <span className="text-xs font-medium tracking-wide text-cream/60">
                  {SERVICES.length} specialised legal services
                </span>
              </div>

              <h2 className="mt-6 max-w-[44rem] break-words font-display text-[clamp(2.2rem,9vw,4.35rem)] font-bold leading-[1.02] tracking-[-0.035em] text-cream">
                A clearer path through every legal matter.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/72 sm:text-lg">
                Focused legal services for the decisions that shape your home, your family, your estate and your business.
              </p>
            </div>

            <div className="min-w-0 rounded-[1.35rem] border border-gold/25 bg-white/[0.055] p-3 shadow-[0_22px_52px_-32px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:p-4">
              <div className="relative flex min-h-[7.75rem] items-center justify-center overflow-hidden rounded-[1rem] border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(176,141,69,0.2),transparent_52%)] px-5 py-5 sm:min-h-[9.5rem] sm:px-8">
                <div className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full border border-gold/15" />
                <div className="pointer-events-none absolute -bottom-10 -right-7 h-28 w-28 rounded-full border border-white/10" />
                <img
                  src={firmLogoImage}
                  alt="Yolanda Matwa Attorneys"
                  width={1800}
                  height={950}
                  loading="lazy"
                  decoding="async"
                  className="relative block h-auto w-full max-w-[18rem] object-contain sm:max-w-[20rem]"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-1 pt-3">
                <p className="min-w-0 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gold-light/90">
                  Yolanda Matwa Attorneys
                </p>
                <span className="shrink-0 text-xs text-cream/55">Menlyn Maine</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative mt-6 rounded-[1.55rem] border border-white/80 bg-white/70 p-3 shadow-premium backdrop-blur-sm sm:mt-8 sm:rounded-[2rem] sm:p-4">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

          <StaggerGroup className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const accent = accentStyles[service.accent];
              const serviceNumber = String(index + 1).padStart(2, "0");

              return (
                <motion.button
                  key={service.slug}
                  variants={staggerItem}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  onClick={() => setActive(service)}
                  aria-label={`Learn more about ${service.title}`}
                  className={cn(
                    "group relative min-h-[20rem] overflow-hidden rounded-[1.35rem] border border-border/80 bg-white p-6 text-left shadow-[0_8px_30px_-24px_rgba(15,31,56,0.55)] transition-[border-color,box-shadow] duration-500 hover:border-gold/45 hover:shadow-[0_20px_52px_-24px_rgba(15,31,56,0.38)] sm:min-h-[22rem] sm:rounded-[1.55rem] sm:p-7 [perspective:1200px]",
                    service.featured &&
                      "bg-[linear-gradient(135deg,#FFFFFF_0%,#FCFAF5_60%,#F2E9D5_100%)] md:col-span-2 lg:col-span-2",
                  )}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className={cn("absolute -right-20 -top-24 h-60 w-60 rounded-full blur-3xl", accent.glow)} />
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_15%,rgba(255,255,255,0.7)_45%,transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  </div>
                  <div className={cn("absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-70", accent.line)} />
                  <span className={cn("pointer-events-none absolute right-5 top-4 font-display text-6xl font-bold leading-none tracking-tighter transition-transform duration-500 group-hover:scale-110", accent.number)}>
                    {serviceNumber}
                  </span>

                  <div className="relative flex h-full flex-col [transform-style:preserve-3d]">
                    <div className="flex items-start justify-between gap-5">
                      <span
                        className={cn(
                          "relative flex h-[4.1rem] w-[4.1rem] shrink-0 items-center justify-center rounded-2xl border transition-transform duration-500 group-hover:scale-110 group-hover:[transform:translateZ(22px)] sm:h-[4.35rem] sm:w-[4.35rem]",
                          accent.icon,
                        )}
                      >
                        <span className="absolute inset-1 rounded-[0.8rem] border border-white/50" />
                        <Icon className="relative h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.7} />
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-navy/10 bg-white/70 px-3 py-1.5 text-[0.61rem] font-bold uppercase tracking-[0.15em] text-navy/60 transition-colors duration-300 group-hover:border-gold/35 group-hover:text-gold">
                        Explore
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>

                    {service.featured && (
                      <div className="mt-7 flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.19em] text-gold">
                        <Scale className="h-3.5 w-3.5" />
                        Signature practice
                      </div>
                    )}

                    <h3
                      className={cn(
                        "mt-7 max-w-xl break-words font-display font-bold leading-[1.08] text-navy-deep transition-transform duration-500 group-hover:[transform:translateZ(18px)]",
                        service.featured ? "text-3xl sm:text-[2rem]" : "text-2xl",
                      )}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm font-semibold leading-relaxed text-gold sm:text-[0.95rem]">
                      {service.tagline}
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/68 text-pretty">
                      {service.description}
                    </p>

                    {service.featured && (
                      <div className="mt-6 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-2 border-t border-gold/20 pt-5 sm:grid-cols-2">
                        {service.covers.slice(0, 4).map((cover) => (
                          <span key={cover} className="flex items-center gap-2 text-sm text-navy/75">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                              <Check className="h-2.5 w-2.5" strokeWidth={3} />
                            </span>
                            {cover}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto flex items-center justify-between pt-8">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-navy-deep transition-colors duration-300 group-hover:text-gold">
                        View service details
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </span>
                      <span className="h-px w-8 bg-gold/50 transition-all duration-500 group-hover:w-14" />
                    </div>
                  </div>

                  <span className={cn("absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100", accent.line)} />
                </motion.button>
              );
            })}
          </StaggerGroup>

          <div className="relative mx-2 mt-3 flex flex-col gap-4 rounded-[1.2rem] border border-navy/10 bg-[linear-gradient(100deg,rgba(238,241,246,0.92),rgba(255,255,255,0.92))] px-5 py-5 sm:mx-0 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div>
              <p className="text-sm font-semibold text-navy-deep">Not sure which service you need?</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                Start with a confidential enquiry and we will point you in the right direction.
              </p>
            </div>
            <button
              type="button"
              onClick={scrollToContact}
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy-deep px-5 py-3 text-sm font-bold text-cream shadow-[0_10px_24px_-12px_rgba(15,31,56,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy hover:shadow-premium"
            >
              Start an enquiry
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      <ServiceModal service={active} onClose={() => setActive(null)} onNavigate={setActive} />
    </section>
  );
}
