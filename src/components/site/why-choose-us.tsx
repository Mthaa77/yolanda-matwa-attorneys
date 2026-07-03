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
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-mist/50 py-24 sm:py-32">
      {/* decorative premium accents */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-navy/[0.05] blur-3xl" />

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
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-premium"
            >
              {/* large faded number in background — premium gradient */}
              <span className="pointer-events-none absolute -right-3 -top-6 font-display text-[8rem] font-bold leading-none text-navy/[0.05] transition-all duration-300 group-hover:text-gold/[0.1] group-hover:scale-105">
                0{i + 1}
              </span>

              {/* top gradient accent line on hover */}
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-light to-transparent transition-transform duration-500 group-hover:scale-x-100" />

              <div className="relative flex items-start gap-5">
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent transition-all duration-300 group-hover:scale-110 group-hover:border-gold/60 group-hover:from-gold/20">
                  <prop.icon className="h-6 w-6 text-gold transition-transform group-hover:scale-110" />
                  {/* ring pulse on hover */}
                  <span className="absolute inset-0 rounded-xl border border-gold/0 transition-all group-hover:scale-125 group-hover:border-gold/20" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-navy/5 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-navy transition-colors group-hover:bg-gold/10 group-hover:text-gold">
                      {prop.highlight}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold leading-tight text-navy-deep">
                    {prop.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70 text-pretty">
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
            className="group inline-flex items-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-cream shadow-sm transition-all hover:bg-navy hover:shadow-premium"
          >
            See How This Applies to Your Matter
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
