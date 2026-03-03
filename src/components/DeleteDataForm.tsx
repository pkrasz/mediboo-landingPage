"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/Container";
import { formProvider, honeypotFieldName } from "@/lib/forms";

export function DeleteDataForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

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
    } catch {
      setError("Nie udalo sie wyslac formularza. Sprobuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="py-10 md:py-14">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-md bg-white p-6 shadow-card md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Delete data
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-primary">
            Request permanent data deletion
          </h1>
          <p className="mt-4 text-base leading-8 text-muted-text">
            Use this form to request removal of your MediBoo account data. We may contact you
            to verify ownership before deletion is completed.
          </p>
          <div className="mt-6 rounded-md bg-secondary/60 p-4 text-sm leading-7 text-primary">
            Include the email used in the app and enough context for us to identify the account.
          </div>
        </div>

        <div className="rounded-md bg-white p-6 shadow-card md:p-8">
          {isSubmitted ? (
            <div className="rounded-md bg-secondary/60 p-5">
              <h2 className="text-xl font-semibold text-primary">Request received</h2>
              <p className="mt-3 text-base leading-8 text-muted-text">
                We will review your request and follow up using the email you provided.
              </p>
            </div>
          ) : (
            <form
              action={formProvider.endpoint}
              method="post"
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="accessKey" value={formProvider.accessKey} />
              <input type="hidden" name="subject" value="MediBoo delete data request" />
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
                  Full name
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
                  Account email
                </label>
                <input
                  id="delete-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-md border border-border bg-white px-4 py-3 text-base text-primary outline-none focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="delete-message"
                  className="mb-2 block text-sm font-medium text-primary"
                >
                  Request details
                </label>
                <textarea
                  id="delete-message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-md border border-border bg-white px-4 py-3 text-base text-primary outline-none focus:border-primary"
                  placeholder="Please delete all account data connected to this email address."
                />
              </div>

              {error ? <p className="text-sm text-error">{error}</p> : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-base font-semibold text-white shadow-card hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Submit request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
}
