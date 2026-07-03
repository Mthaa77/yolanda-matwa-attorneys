"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircleQuestion, ArrowRight } from "lucide-react";
import { FAQ_ITEMS, type FAQItem } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, staggerItem } from "./scroll-reveal";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Property", "Family & Wills", "General"] as const;
type Category = (typeof CATEGORIES)[number];

export function FAQSection() {
  const [category, setCategory] = useState<Category>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered: FAQItem[] =
    category === "All"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((f) => f.category === category);

  const scrollToContact = () => {
    document
      .querySelector("#contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="faq" className="relative bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-navy/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Common Questions"
          title="Straight Answers, Not Legal Evasion"
          description="The questions clients ask us most. If yours isn't here, the answer is one phone call away."
          align="center"
          className="mx-auto max-w-3xl"
        />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setOpenIndex(null);
              }}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                category === cat
                  ? "bg-navy-deep text-cream shadow-sm"
                  : "border border-border bg-white text-muted-foreground hover:border-gold/40 hover:text-navy-deep",
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Accordion list */}
        <StaggerGroup className="mt-10 space-y-3">
          {filtered.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.question}
                variants={staggerItem}
                className={cn(
                  "overflow-hidden rounded-xl border bg-white transition-colors",
                  isOpen
                    ? "border-gold/40 shadow-premium"
                    : "border-border hover:border-gold/30",
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors",
                      isOpen
                        ? "border-gold bg-gold text-navy-deep"
                        : "border-navy/15 text-navy-deep",
                    )}
                  >
                    <MessageCircleQuestion className="h-4 w-4" />
                  </span>
                  <span className="flex-1">
                    <span className="mb-0.5 block text-[0.65rem] font-semibold uppercase tracking-wider text-gold">
                      {item.category}
                    </span>
                    <span className="block font-display text-base font-semibold text-navy-deep sm:text-lg">
                      {item.question}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors",
                      isOpen
                        ? "bg-gold/10 text-gold"
                        : "text-muted-foreground",
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pl-[3.75rem] sm:px-7 sm:pl-[4.75rem]">
                        <p className="border-l-2 border-gold/30 pl-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </StaggerGroup>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-navy/10 bg-white p-7 shadow-sm sm:flex-row sm:p-8"
        >
          <div>
            <h3 className="font-display text-lg font-bold text-navy-deep">
              Still have a question?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              The first conversation costs nothing — and usually answers more
              than you'd expect.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-cream transition-all hover:bg-navy"
          >
            Ask Us Directly
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
