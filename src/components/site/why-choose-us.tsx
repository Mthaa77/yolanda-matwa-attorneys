"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { VALUE_PROPS } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, staggerItem } from "./scroll-reveal";

export function WhyChooseUs() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* decorative diagonal accent */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-navy/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="What Sets This Practice Apart"
          description="Four things most boutique conveyancers cannot say — and one that is simply how we choose to practise."
          align="center"
          className="mx-auto max-w-3xl"
        />

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-2">
          {VALUE_PROPS.map((prop, i) => (
            <motion.article
              key={prop.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border bg-cream/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-premium"
            >
              {/* large faded number in background */}
              <span className="pointer-events-none absolute -right-2 -top-4 font-display text-[7rem] font-bold leading-none text-navy/[0.04] transition-colors duration-300 group-hover:text-gold/[0.08]">
                0{i + 1}
              </span>

              <div className="relative flex items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 transition-all duration-300 group-hover:scale-110 group-hover:border-gold/60 group-hover:bg-gold/10">
                  <prop.icon className="h-6 w-6 text-gold" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-navy/5 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-navy">
                      {prop.highlight}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold leading-tight text-navy-deep">
                    {prop.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {prop.description}
                  </p>
                </div>
              </div>

              {/* bottom gold line */}
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </StaggerGroup>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => scrollTo("#services")}
            className="group inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-semibold text-navy-deep shadow-sm transition-all hover:border-gold/50 hover:text-gold"
          >
            See How This Applies to Your Matter
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
