"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader2,
  MessageCircle,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { FIRM, SERVICES } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(6, "Please enter a contact number")
    .regex(/^[0-9+\s()-]+$/, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please tell us a little more (min. 10 characters)"),
});

type FormValues = z.infer<typeof schema>;

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Thank you — your enquiry has been received.", {
        description:
          "Yolanda Matwa Attorneys will be in touch within one business day.",
      });
      reset();
    } catch {
      toast.error("Something went wrong.", {
        description: "Please call us directly on " + FIRM.phone + ".",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: MapPin,
      label: "Visit",
      lines: [FIRM.address.line1, FIRM.address.line2, FIRM.address.line3],
      href: FIRM.mapsLink,
      cta: "Get Directions",
    },
    {
      icon: Phone,
      label: "Call",
      lines: [FIRM.phone],
      href: `tel:${FIRM.phoneIntl}`,
      cta: "Call Now",
    },
    {
      icon: Mail,
      label: "Email",
      lines: [FIRM.email],
      href: `mailto:${FIRM.email}`,
      cta: "Send Email",
    },
  ];

  const fieldClass =
    "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";

  return (
    <section id="contact" className="relative bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's Talk About What You Need"
          description="Whether you're buying a home, drafting a will, or navigating an estate — the first conversation is the simplest step. Tell us a little about your matter and we'll be in touch within one business day."
          align="center"
          className="mx-auto max-w-3xl"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-wider text-navy-deep"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    className={cn(
                      fieldClass,
                      errors.name && "border-destructive focus:border-destructive",
                    )}
                    {...register("name")}
                  />
                  {errors.name && (
                    <span className="text-xs text-destructive">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-wider text-navy-deep"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    className={cn(
                      fieldClass,
                      errors.email && "border-destructive focus:border-destructive",
                    )}
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-xs text-destructive">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="text-xs font-semibold uppercase tracking-wider text-navy-deep"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="082 000 0000"
                    className={cn(
                      fieldClass,
                      errors.phone && "border-destructive focus:border-destructive",
                    )}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <span className="text-xs text-destructive">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="service"
                    className="text-xs font-semibold uppercase tracking-wider text-navy-deep"
                  >
                    Service of Interest
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      className={cn(
                        fieldClass,
                        "appearance-none pr-10",
                        errors.service && "border-destructive focus:border-destructive",
                      )}
                      {...register("service")}
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other">Something else</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                  {errors.service && (
                    <span className="text-xs text-destructive">
                      {errors.service.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-wider text-navy-deep"
                >
                  How Can We Help?
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us briefly about your matter…"
                  className={cn(
                    fieldClass,
                    "resize-none",
                    errors.message && "border-destructive focus:border-destructive",
                  )}
                  {...register("message")}
                />
                {errors.message && (
                  <span className="text-xs text-destructive">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-deep px-7 py-4 text-sm font-semibold text-cream shadow-sm transition-all hover:bg-navy disabled:opacity-60 sm:w-auto"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground/70">
                Your enquiry is treated with strict confidentiality. The
                information you provide does not create an attorney-client
                relationship until formally engaged.
              </p>
            </form>
          </motion.div>

          {/* Contact details + map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="flex flex-col gap-5">
              {/* Contact cards */}
              <div className="grid gap-4">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-premium"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                      <item.icon className="h-5 w-5 text-gold" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                        {item.label}
                      </p>
                      <div className="mt-1 space-y-0.5">
                        {item.lines.map((line) => (
                          <p
                            key={line}
                            className="text-sm leading-relaxed text-navy-deep"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                      <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-gold">
                        {item.cta}
                        <ExternalLink className="h-3 w-3" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${FIRM.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-sage/30 bg-sage/5 p-5 transition-all hover:-translate-y-0.5 hover:shadow-premium"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-white">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sage">
                    Chat on WhatsApp
                  </p>
                  <p className="mt-1 text-sm text-navy-deep">
                    Quick questions &amp; transfer status updates
                  </p>
                </div>
              </a>

              {/* Office hours */}
              <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gold" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                    Office Hours
                  </p>
                </div>
                <ul className="mt-3 space-y-2">
                  {FIRM.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium text-navy-deep">
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-xl border border-border shadow-sm">
                <iframe
                  src={FIRM.mapsEmbed}
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yolanda Matwa Attorneys — Menlyn Maine office location"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
