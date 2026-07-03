"use client";

import { useEffect, type RefObject } from "react";

/**
 * Traps keyboard focus inside the referenced element while `active` is true.
 *
 * - On activation: moves focus to the first focusable element (or the element itself).
 * - Tab / Shift+Tab cycles focus within the container only.
 * - On deactivation: focus is returned to the element that had it before opening
 *   (stored automatically) — the caller should pass the trigger ref for restoration,
 *   but if not provided we simply release the trap.
 *
 * Usage:
 *   const ref = useRef<HTMLDivElement>(null);
 *   useFocusTrap(ref, open);
 */
const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function useFocusTrap(
  ref: RefObject<HTMLElement | null>,
  active: boolean,
) {
  useEffect(() => {
    if (!active || !ref.current) return;

    const container = ref.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    // Move focus into the container
    const focusables = () =>
      Array.from(
        container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);

    const initialFocusables = focusables();
    if (initialFocusables.length > 0) {
      initialFocusables[0].focus();
    } else {
      container.tabIndex = -1;
      container.focus();
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    container.addEventListener("keydown", onKey);

    return () => {
      container.removeEventListener("keydown", onKey);
      // Restore focus to the trigger
      if (previouslyFocused && typeof previouslyFocused.focus === "function") {
        previouslyFocused.focus();
      }
    };
  }, [active, ref]);
}
