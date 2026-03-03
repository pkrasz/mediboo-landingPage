"use client";

import { FormEvent, useEffect, useState } from "react";
import { formProvider, honeypotFieldName } from "@/lib/forms";
import { trackEvent } from "@/lib/analytics";
import type { Dictionary } from "@/i18n";

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
  t: Dictionary["waitlist"];
}

export function WaitlistModal({ open, onClose, t }: Readonly<WaitlistModalProps>) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setError("");
      setIsSubmitting(false);
      setIsSubmitted(false);
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSubmitted(true);
      form.reset();
      trackEvent("waitlist_submit", { location: "android_modal" });
    } catch {
      setError(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4 transition-opacity duration-200 motion-reduce:transition-none"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-md bg-white p-6 shadow-modal transition duration-200 motion-reduce:transition-none md:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {t.eyebrow}
            </p>
            <h2
              id="waitlist-modal-title"
              className="mt-2 text-2xl font-semibold tracking-tight text-primary"
            >
              {isSubmitted ? t.successTitle : t.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-background text-primary hover:bg-secondary"
            aria-label={t.closeAria}
          >
            <span className="text-xl leading-none">x</span>
          </button>
        </div>

        {isSubmitted ? (
          <div className="mt-6 rounded-md bg-secondary/60 p-4">
            <p className="text-base font-medium text-primary">{t.successBody}</p>
            <p className="mt-2 text-sm leading-7 text-muted-text">
              {t.successMeta}
            </p>
          </div>
        ) : (
          <form
            action={formProvider.endpoint}
            method="post"
            className="mt-6 space-y-4"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="accessKey" value={formProvider.accessKey} />
            <input type="hidden" name="subject" value="MediBoo Android waitlist" />
            <input type="hidden" name="formName" value="android_waitlist" />
            <div className="hidden" aria-hidden="true">
              <label htmlFor="waitlist-company">Company</label>
              <input id="waitlist-company" type="text" name={honeypotFieldName} tabIndex={-1} />
            </div>

            <div>
              <label
                htmlFor="waitlist-email"
                className="mb-2 block text-sm font-medium text-primary"
              >
                {t.emailLabel}
              </label>
              <input
                id="waitlist-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className="w-full rounded-md border border-border bg-white px-4 py-3 text-base text-primary outline-none ring-0 placeholder:text-muted-text/70 focus:border-primary"
                placeholder={t.emailPlaceholder}
              />
            </div>

            <label className="flex items-start gap-3 rounded-md bg-background px-4 py-3 text-sm leading-6 text-muted-text">
              <input
                type="checkbox"
                name="consent"
                value="yes"
                required
                className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
              />
              <span>{t.consent}</span>
            </label>

            {error ? <p className="text-sm text-error">{error}</p> : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-md bg-accent px-4 py-3 text-base font-semibold text-white shadow-card hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? t.submitting : t.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
