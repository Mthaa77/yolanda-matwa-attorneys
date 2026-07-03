"use client";

/**
 * Lightweight event bus for pre-filling the contact form's service dropdown
 * from anywhere on the page (e.g. from a service modal's "Start Your Enquiry"
 * button), without prop drilling.
 *
 * The ContactSection listens for `yma:prefill-service` events (with the
 * service title as detail) and sets its dropdown + scrolls into view.
 */
const PREFILL_SERVICE_EVENT = "yma:prefill-service";

export function prefillContactService(serviceTitle: string) {
  window.dispatchEvent(
    new CustomEvent(PREFILL_SERVICE_EVENT, { detail: serviceTitle }),
  );
}

export const PREFILL_SERVICE_EVENT_NAME = PREFILL_SERVICE_EVENT;
