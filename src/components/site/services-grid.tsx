"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SERVICES, type ServiceDetail } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, staggerItem } from "./scroll-reveal";
import { ServiceModal } from "./service-modal";
import { OPEN_SERVICE_EVENT_NAME } from "@/lib/service-events";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  const [active, setActive] = useState<ServiceDetail | null>(null);

  // Allow other components (e.g. the comparison table headers) to open a
  // specific service modal by dispatching the `yma:open-service` event.
  useEffect(() => {
    const handler = (e: Event) => {
      const slug = (e as CustomEvent<string>).detail;
      const service = SERVICES.find((s) => s.slug === slug);
      if (service) setActive(service);
    };
    window.addEventListener(OPEN_SERVICE_EVENT_NAME, handler);
    return () => window.removeEventListener(OPEN_SERVICE_EVENT_NAME, handler);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative overflow-hidden bg-mist py-24 sm:py-32">
      {/* premium background accents */}
      <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-gold/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-navy/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What We Do"
            title="How We Can Help"
            description="Six core services, anchored by conveyancing — each one handled with the rigour of a practitioner who has appeared at the Competition Tribunal."
          />
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 self-start rounded-full bg-navy-deep px-5 py-3 text-sm font-semibold text-cream shadow-sm transition-all hover:bg-navy hover:shadow-premium lg:self-auto"
          >
            Start an Enquiry
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <motion.button
              key={service.slug}
              variants={staggerItem}
              onClick={() => setActive(service)}
              className={cn(
                "group relative flex flex-col items-start overflow-hidden rounded-2xl border border-border bg-white p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold/40 hover:shadow-premium",
                service.featured && "lg:col-span-2 lg:row-span-1",
              )}
            >
              {/* hover gold wash */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 opacity-0 transition-opacity duration-500 group-hover:from-gold/[0.05] group-hover:to-transparent group-hover:opacity-100" />
              {/* top gradient accent on hover */}
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-light to-transparent transition-transform duration-500 group-hover:scale-x-100" />

              <div className="relative flex w-full items-start justify-between">
                <span
                  className={cn(
                    "relative flex h-14 w-14 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110",
                    service.accent === "gold" &&
                      "border-gold/30 bg-gradient-to-br from-gold/10 to-transparent text-gold group-hover:border-gold/60",
                    service.accent === "navy" &&
                      "border-navy/20 bg-gradient-to-br from-navy/10 to-transparent text-navy group-hover:border-navy/40",
                    service.accent === "sage" &&
                      "border-sage/30 bg-gradient-to-br from-sage/10 to-transparent text-sage group-hover:border-sage/60",
                  )}
                >
                  <service.icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
              </div>

              <h3
                className={cn(
                  "relative mt-6 font-display font-bold text-navy-deep",
                  service.featured ? "text-2xl" : "text-xl",
                )}
              >
                {service.title}
              </h3>

              <p
                className={cn(
                  "relative mt-1 text-sm font-medium text-gold",
                  service.featured && "text-base",
                )}
              >
                {service.tagline}
              </p>

              <p className="relative mt-3 text-sm leading-relaxed text-foreground/70 text-pretty">
                {service.description}
              </p>

              {service.featured && (
                <ul className="relative mt-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                  {service.covers.slice(0, 4).map((c, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-foreground/75"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {c}
                    </li>
                  ))}
                </ul>
              )}

              <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-deep transition-colors group-hover:text-gold">
                Learn More
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>

              {/* bottom gold line on hover */}
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-500 group-hover:scale-x-100" />
            </motion.button>
          ))}
        </StaggerGroup>
      </div>

      <ServiceModal
        service={active}
        onClose={() => setActive(null)}
        onNavigate={setActive}
      />
    </section>
  );
}
