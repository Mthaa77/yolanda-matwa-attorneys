"use client";

import { motion } from "framer-motion";
import { Award, ScrollText, Landmark, MapPin } from "lucide-react";
import { TRUST_MARKERS } from "@/lib/site-data";

const icons = [Award, ScrollText, Landmark, MapPin];

export function TrustBar() {
  return (
    <section className="relative bg-gradient-to-b from-navy-deep to-navy">
      {/* top gold hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Welcome eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 pt-10"
        >
          <span className="h-px w-6 bg-gold/40" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-gold-light/80">
            Welcome to the practice
          </span>
          <span className="h-px w-6 bg-gold/40" />
        </motion.div>

        <div className="grid grid-cols-2 gap-y-8 pb-10 pt-8 lg:grid-cols-4 lg:divide-x lg:divide-cream/10">
          {TRUST_MARKERS.map((marker, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={marker.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-center gap-4 px-2 py-2 transition-transform hover:-translate-y-0.5 sm:px-6 lg:py-4"
              >
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 transition-all group-hover:border-gold/60 group-hover:bg-gold/10">
                  <Icon className="h-5 w-5 text-gold transition-transform group-hover:scale-110" />
                  {/* subtle ring pulse on hover */}
                  <span className="absolute inset-0 rounded-full border border-gold/0 transition-all group-hover:border-gold/20 group-hover:scale-125" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-cream">
                    {marker.label}
                  </p>
                  <p className="truncate text-xs text-cream/60">
                    {marker.value}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* bottom gold hairline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
