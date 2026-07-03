"use client";

import { motion } from "framer-motion";
import { Award, ScrollText, Landmark, MapPin } from "lucide-react";
import { TRUST_MARKERS } from "@/lib/site-data";

const icons = [Award, ScrollText, Landmark, MapPin];

export function TrustBar() {
  return (
    <section className="relative border-y border-gold/15 bg-navy-deep">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 divide-x divide-cream/10 lg:grid-cols-4">
          {TRUST_MARKERS.map((marker, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={marker.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 px-4 py-7 sm:px-6 lg:py-8"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                  <Icon className="h-5 w-5 text-gold" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-cream">
                    {marker.label}
                  </p>
                  <p className="truncate text-xs text-cream/55">
                    {marker.value}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
