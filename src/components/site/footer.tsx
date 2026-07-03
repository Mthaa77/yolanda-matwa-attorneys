"use client";

import { motion } from "framer-motion";
import { Facebook, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { FIRM, NAV_LINKS, SERVICES } from "@/lib/site-data";
import { Logo } from "./logo";

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-deep text-cream">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Logo className="h-11 w-11 text-cream" />
              <div className="leading-none">
                <p className="font-display text-lg font-bold text-cream">
                  Yolanda Matwa
                </p>
                <p className="text-[0.625rem] font-medium uppercase tracking-[0.28em] text-gold-light">
                  Attorneys
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/55 text-pretty">
              Boutique conveyancing, notarial and family-law practice in the
              heart of Menlyn Maine, Pretoria East — committed to helping our
              clients succeed.
            </p>
            <p className="mt-4 text-xs text-cream/40">
              Registered as Matwa Nongogo Incorporated
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light/70">
              Navigate
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-cream/60 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light/70">
              Services
            </p>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-left text-sm text-cream/60 transition-colors hover:text-gold-light"
                  >
                    {s.shortTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light/70">
              Contact
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-cream/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {FIRM.address.line1}
                  <br />
                  {FIRM.address.line2}
                  <br />
                  {FIRM.address.line3}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${FIRM.phoneIntl}`}
                  className="flex items-center gap-3 text-cream/60 transition-colors hover:text-gold-light"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  {FIRM.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${FIRM.email}`}
                  className="flex items-center gap-3 text-cream/60 transition-colors hover:text-gold-light"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  {FIRM.email}
                </a>
              </li>
            </ul>
            <a
              href={FIRM.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2 text-xs font-medium text-cream/70 transition-colors hover:border-gold/50 hover:text-gold-light"
            >
              <Facebook className="h-4 w-4" />
              Facebook
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Yolanda Matwa Attorneys / Matwa Nongogo Incorporated. All
            rights reserved.
          </p>
          <p className="max-w-md leading-relaxed sm:text-right">
            Information on this site does not constitute legal advice. An
            attorney-client relationship is formed only upon formal engagement.
          </p>
        </div>
      </div>
    </footer>
  );
}
