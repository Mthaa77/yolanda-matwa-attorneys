"use client";

/**
 * Lightweight event bus for opening a specific service modal from anywhere
 * on the page (e.g. from the comparison table column headers), without
 * prop drilling or lifting the ServicesGrid state.
 *
 * The ServicesGrid listens for `yma:open-service` events (with the slug as
 * detail) and opens the corresponding service modal.
 */
const OPEN_SERVICE_EVENT = "yma:open-service";

export function openServiceModal(slug: string) {
  window.dispatchEvent(
    new CustomEvent(OPEN_SERVICE_EVENT, { detail: slug }),
  );
}

export const OPEN_SERVICE_EVENT_NAME = OPEN_SERVICE_EVENT;
