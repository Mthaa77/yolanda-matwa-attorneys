"use client";

import { useEffect, useState } from "react";
import {
  CircleDot,
  Clock,
  GraduationCap,
  Landmark,
  MapPin,
  Scale,
  ScrollText,
} from "lucide-react";

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

function useOfficeClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();

    // The office status only changes by the minute. Updating once per minute
    // avoids re-rendering the entire marquee every second.
    const millisecondsToNextMinute = 60_000 - (Date.now() % 60_000) + 40;
    const timeout = window.setTimeout(() => {
      update();
      const interval = window.setInterval(update, 60_000);
      return () => window.clearInterval(interval);
    }, millisecondsToNextMinute);

    return () => window.clearTimeout(timeout);
  }, []);

  return now;
}

function getOfficeStatus(now: Date): { open: boolean; label: string } {
  const parts = new Intl.DateTimeFormat("en-ZA", {
    timeZone: "Africa/Johannesburg",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const day = values.weekday;
  const minutes = Number(values.hour) * 60 + Number(values.minute);
  const isWeekday = day !== "Sat" && day !== "Sun";
  const open = isWeekday && minutes >= 540 && minutes < 1020;

  return { open, label: open ? "Open now" : "Closed now" };
}

export function LiveTicker() {
  const now = useOfficeClock();
  const status = now ? getOfficeStatus(now) : { open: false, label: "—" };
  const timeString = now
    ? now.toLocaleTimeString("en-ZA", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Africa/Johannesburg",
      })
    : "--:--";

  const marqueeItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section
      aria-label="Office status and credentials"
      className="relative z-10 border-y border-gold/20 bg-navy-deep/95 print:hidden"
    >
      <div className="border-b border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-2.5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2.5 text-xs text-cream/70">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            <span className="font-medium text-cream/85">Menlyn Maine</span>
            <span className="text-cream/30">·</span>
            <span className="text-cream/50">Pretoria East, Gauteng</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5 tabular-nums text-cream/80">
              <Clock className="h-3.5 w-3.5 text-gold" />
              <span className="font-semibold tracking-wide">{timeString}</span>
              <span className="text-cream/40">SAST</span>
            </span>
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
                <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${status.open ? "bg-sage" : "bg-cream/40"}`} />
              </span>
              {status.label}
            </span>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden py-2.5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy-deep to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy-deep to-transparent" />
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]">
          {marqueeItems.map((entry, index) => (
            <span key={`${entry.text}-${index}`} className="inline-flex items-center gap-2 text-xs font-medium text-cream/65">
              <entry.icon className="h-3.5 w-3.5 text-gold/80" />
              {entry.text}
              <span className="ml-8 h-1 w-1 rounded-full bg-gold/30" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
