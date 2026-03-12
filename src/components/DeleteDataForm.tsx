"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { formProvider, honeypotFieldName } from "@/lib/forms";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { getLocaleAssets } from "@/lib/assets";
import { SuccessModal } from "@/components/SuccessModal";

interface DeleteDataFormProps {
  t: Dictionary["deleteData"];
  locale: Locale;
}

const deleteDataFormSubject = "MediBoo — Data Deletion Request";

export function DeleteDataForm({ t, locale }: Readonly<DeleteDataFormProps>) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isInstructionModalOpen, setIsInstructionModalOpen] = useState(false);
  const [error, setError] = useState("");
  const assets = getLocaleAssets(locale);

  useEffect(() => {
    if (!isInstructionModalOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsInstructionModalOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isInstructionModalOpen]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();
    formData.set("accessKey", formProvider.accessKey);
    formData.set("subject", deleteDataFormSubject);
    if (email) {
      formData.set("replyTo", email);
    }

    try {
      const response = await fetch(formProvider.endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setIsSuccessModalOpen(true);
    } catch {
      setError(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="py-10 md:py-14">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-md bg-white p-6 shadow-card md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {t.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-primary">
            {t.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-muted-text">
            {t.description}
          </p>
          <div className="mt-6 rounded-md bg-secondary/60 p-4 text-sm leading-7 text-primary">
            {t.note}
          </div>
        </div>

        <div className="rounded-md bg-white p-6 shadow-card md:p-8">
          <form
            action={formProvider.endpoint}
            method="post"
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="accessKey" value={formProvider.accessKey} />
            <input type="hidden" name="subject" value={deleteDataFormSubject} />
            <input type="hidden" name="formName" value="delete_data_request" />
            <div className="hidden" aria-hidden="true">
              <label htmlFor="delete-company">Company</label>
              <input id="delete-company" type="text" name={honeypotFieldName} tabIndex={-1} />
            </div>

            <div>
              <label
                htmlFor="delete-name"
                className="mb-2 block text-sm font-medium text-primary"
              >
                {t.nameLabel}
              </label>
              <input
                id="delete-name"
                type="text"
                name="name"
                required
                className="w-full rounded-md border border-border bg-white px-4 py-3 text-base text-primary outline-none focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="delete-email"
                className="mb-2 block text-sm font-medium text-primary"
              >
                {t.emailLabel}
              </label>
              <input
                id="delete-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                className="w-full rounded-md border border-border bg-white px-4 py-3 text-base text-primary outline-none focus:border-primary"
              />
            </div>

            <div>
              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                <label
                  htmlFor="delete-user-id"
                  className="text-sm font-medium text-primary"
                >
                  {t.userIdLabel}
                </label>
                <button
                  type="button"
                  onClick={() => setIsInstructionModalOpen(true)}
                  className="text-sm font-medium text-primary/75 underline decoration-primary/30 underline-offset-4 transition hover:text-primary hover:decoration-primary motion-reduce:transition-none"
                >
                  {t.instructionTrigger}
                </button>
              </div>
              <input
                id="delete-user-id"
                type="text"
                name="userId"
                required
                className="w-full rounded-md border border-border bg-white px-4 py-3 text-base text-primary outline-none focus:border-primary"
                placeholder={t.userIdPlaceholder}
              />
            </div>

            <div>
              <label
                htmlFor="delete-message"
                className="mb-2 block text-sm font-medium text-primary"
              >
                {t.messageLabel}
              </label>
              <textarea
                id="delete-message"
                name="message"
                required
                rows={6}
                className="w-full rounded-md border border-border bg-white px-4 py-3 text-base text-primary outline-none focus:border-primary"
                placeholder={t.messagePlaceholder}
              />
            </div>

            {error ? <p className="text-sm text-error">{error}</p> : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-base font-semibold text-white shadow-card hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? t.submitting : t.submit}
            </button>
          </form>
        </div>
      </div>
      {isInstructionModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/35 p-4 backdrop-blur-sm"
          onClick={() => setIsInstructionModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="user-id-instruction-title"
        >
          <div
            className="flex max-h-[calc(100dvh-2rem)] w-full max-w-lg flex-col rounded-md bg-white p-5 shadow-modal md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="user-id-instruction-title"
                  className="text-2xl font-semibold tracking-tight text-primary"
                >
                  {t.instructionTitle}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsInstructionModalOpen(false)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-background text-primary hover:bg-secondary"
                aria-label={t.instructionCloseAria}
              >
                <span className="text-xl leading-none">x</span>
              </button>
            </div>

            <div className="mt-5 min-h-0 flex-1 overflow-y-auto pr-1">
              <p className="max-w-[36rem] text-base leading-7 text-muted-text">
                {t.instructionDescription}
              </p>

              <div className="mt-5 overflow-hidden rounded-md border border-border bg-background/70">
                <Image
                  src={assets.userIdInstructionImage}
                  alt={t.instructionTitle}
                  width={1260}
                  height={798}
                  className="mx-auto h-auto w-full max-w-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <SuccessModal
        open={isSuccessModalOpen}
        title={t.successTitle}
        message={t.successBody}
        closeLabel={t.successClose}
        closeAriaLabel={t.successClose}
        secondaryLabel={t.successBackHome}
        onClose={() => setIsSuccessModalOpen(false)}
        onSecondary={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setIsSuccessModalOpen(false);
        }}
      />
    </Container>
  );
}
