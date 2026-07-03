"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, CircleDot, Scale, ScrollText, GraduationCap, Landmark } from "lucide-react";
import { FIRM } from "@/lib/site-data";

/**
 * Live ticker — a premium two-part strip directly under the hero:
 *  1. A live "studio bar" showing Menlyn Maine local time + open/closed status.
 *  2. An infinite marquee of verified credentials.
 *
 * Time updates every second; open/closed is computed from the firm's hours
 * (Mon–Fri 09:00–17:00 SAST).
 */

const TICKER_ITEMS = [
  { icon: Scale, text: "Notary & Conveyancer — High Court of South Africa" },
  { icon: ScrollText, text: "Admitted Attorney since 2013" },
  { icon: GraduationCap, text: "LLM Taxation in progress — UKZN" },
  { icon: Landmark, text: "Former Competition Commission Investigator" },
  { icon: CircleDot, text: "Competition Tribunal experience" },
  { icon: GraduationCap, text: "Cert. Competition Law — University of Pretoria" },
  { icon: ScrollText, text: "Cert. Tax Law — University of South Africa" },
  { icon: MapPin, text: "Pegasus Building, Menlyn Maine, Pretoria East" },
];

function useLocalTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    // Defer the initial set into a timeout so we don't call setState
    // synchronously within the effect body (react-hooks/set-state-in-effect).
    const initial = setTimeout(() => setNow(new Date()), 0);
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => {
      clearTimeout(initial);
      clearInterval(id);
    };
  }, []);

  return now;
}

function getOfficeStatus(now: Date): { open: boolean; label: string } {
  // Pretoria is UTC+2 (SAST). Compute local day/hour from the UTC time.
  const sast = new Date(now.getTime() + (now.getTimezoneOffset() + 120) * 60000);
  const day = sast.getDay(); // 0 = Sun ... 6 = Sat
  const hour = sast.getHours();
  const minutes = sast.getHours() * 60 + sast.getMinutes();
  const open = day >= 1 && day <= 5 && minutes >= 540 && minutes < 1020; // 09:00–17:00
  return {
    open,
    label: open ? "Open now" : "Closed now",
  };
}

export function LiveTicker() {
  const now = useLocalTime();
  const status = now ? getOfficeStatus(now) : { open: false, label: "—" };

  // Format time in en-ZA, displaying SAST
  const timeString = now
    ? now.toLocaleTimeString("en-ZA", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Africa/Johannesburg",
      })
    : "--:--:--";

  // Duplicate the items for a seamless infinite marquee
  const marqueeItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section
      aria-label="Live office status and credentials"
      className="relative z-10 border-y border-gold/20 bg-navy-deep/95 backdrop-blur-sm print:hidden"
    >
      {/* === Studio bar: live time + open/closed === */}
      <div className="border-b border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-2.5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2.5 text-xs text-cream/70">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            <span className="font-medium text-cream/85">Menlyn Maine</span>
            <span className="text-cream/30">·</span>
            <span className="text-cream/50">Pretoria East, Gauteng</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            {/* Live clock */}
            <span className="inline-flex items-center gap-1.5 tabular-nums text-cream/80">
              <Clock className="h-3.5 w-3.5 text-gold" />
              <span className="font-semibold tracking-wide">{timeString}</span>
              <span className="text-cream/40">SAST</span>
            </span>
            {/* Open/closed pill */}
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-medium ${
                status.open
                  ? "border-sage/40 bg-sage/10 text-sage"
                  : "border-cream/15 bg-cream/5 text-cream/55"
              }`}
            >
              <span className="relative flex h-1.5 w-1.5">
                {status.open && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage/70" />
                )}
                <span
                  className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                    status.open ? "bg-sage" : "bg-cream/40"
                  }`}
                />
              </span>
              {status.label}
            </span>
          </div>
        </div>
      </div>

      {/* === Infinite credentials marquee === */}
      <div className="group relative overflow-hidden py-2.5">
        {/* edge fades for cinematic polish */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy-deep to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy-deep to-transparent" />

        <motion.div
          className="flex w-max items-center gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
          // pause on hover for readability
          whileHover={{ transition: { duration: 0 } }}
        >
          {marqueeItems.map((entry, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-xs font-medium text-cream/65"
            >
              <entry.icon className="h-3.5 w-3.5 text-gold/80" />
              {entry.text}
              <span className="ml-8 h-1 w-1 rounded-full bg-gold/30" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
