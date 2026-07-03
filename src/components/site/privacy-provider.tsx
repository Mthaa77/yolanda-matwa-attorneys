"use client";

import { useCallback, useEffect, useState } from "react";
import { PrivacyModal } from "./privacy-modal";

const PRIVACY_OPEN_EVENT = "yma:open-privacy";

/**
 * Listens for a custom DOM event `yma:open-privacy` and toggles the
 * PrivacyModal. This lets any component (footer link, cookie banner)
 * open the privacy modal without prop drilling or a context provider.
 */
export function PrivacyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    window.addEventListener(PRIVACY_OPEN_EVENT, openModal as EventListener);
    return () =>
      window.removeEventListener(PRIVACY_OPEN_EVENT, openModal as EventListener);
  }, [openModal]);

  return (
    <>
      {children}
      <PrivacyModal open={open} onClose={closeModal} />
    </>
  );
}

/** Helper to dispatch the open-privacy event from anywhere. */
export function openPrivacyModal() {
  window.dispatchEvent(new Event(PRIVACY_OPEN_EVENT));
}
