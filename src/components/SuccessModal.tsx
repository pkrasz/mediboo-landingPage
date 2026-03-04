"use client";

import { useEffect, useRef } from "react";

interface SuccessModalProps {
  open: boolean;
  title: string;
  message: string;
  closeLabel: string;
  closeAriaLabel: string;
  onClose: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
}

export function SuccessModal({
  open,
  title,
  message,
  closeLabel,
  closeAriaLabel,
  onClose,
  secondaryLabel,
  onSecondary,
}: Readonly<SuccessModalProps>) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute("disabled"));

      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
    >
      <div
        ref={dialogRef}
        className="w-full max-w-md rounded-[16px] bg-white p-6 shadow-modal md:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="success-modal-title" className="text-2xl font-semibold text-primary">
          {title}
        </h2>
        <p className="mt-3 text-base leading-7 text-muted-text">{message}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-base font-semibold text-white shadow-card hover:opacity-90"
            aria-label={closeAriaLabel}
          >
            {closeLabel}
          </button>
          {secondaryLabel ? (
            <button
              type="button"
              onClick={onSecondary ?? onClose}
              className="text-sm font-medium text-primary underline underline-offset-4 hover:opacity-80"
            >
              {secondaryLabel}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
