"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { trackEvent } from "@/lib/analytics";
import { WaitlistModal } from "@/components/WaitlistModal";
import heroImage from "../../public/img/hero.png";

const featureCards = [
  {
    title: "One calm care timeline",
    body: "Track symptoms, medications, and follow-ups in one place so the next step is always clear.",
  },
  {
    title: "Built for busy parents",
    body: "Fast daily check-ins and reminders keep routines steady without adding more friction.",
  },
  {
    title: "Easy to share",
    body: "Bring structured notes to appointments and keep caregivers aligned on what changed.",
  },
];

const steps = [
  "Log symptoms, medications, and care notes in seconds.",
  "Keep recurring routines visible with gentle reminders.",
  "Walk into appointments with a simple history that makes sense.",
];

const faqItems = [
  {
    question: "Is MediBoo already available on iPhone?",
    answer: "Yes. The current launch is focused on the iOS experience, with Android access opening through the waitlist.",
  },
  {
    question: "Does the Google Play button download anything today?",
    answer: "No. It opens the Android waitlist modal so interested parents can get notified first.",
  },
  {
    question: "Can I request full data removal?",
    answer: "Yes. Use the dedicated delete-data page linked in the footer to send a verified removal request.",
  },
];

export function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    trackEvent("google_play_click", { destination: "waitlist_modal" });
  };

  return (
    <>
      <Container className="py-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-sm bg-secondary px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Trusted, gentle pediatric routines
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-primary md:text-5xl">
              One place to keep your child&apos;s care routine calm and clear.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-text md:max-w-xl">
              MediBoo helps parents organize symptoms, medications, and daily follow-ups
              so care decisions feel simpler, faster, and less stressful.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://apps.apple.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("app_store_click", { destination: "app_store" })}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-accent px-5 py-3 text-left text-white shadow-card hover:opacity-90"
              >
                <AppleIcon />
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.16em] text-white/85">
                    Download on the
                  </span>
                  <span className="block text-base font-semibold">App Store</span>
                </span>
              </a>

              <button
                type="button"
                onClick={openModal}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-secondary px-5 py-3 text-left text-primary shadow-card hover:opacity-90"
              >
                <PlayIcon />
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.16em] text-primary/70">
                    Android
                  </span>
                  <span className="block text-base font-semibold">Join Google Play waitlist</span>
                </span>
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-text">
              <span className="rounded-sm bg-white px-3 py-2 shadow-card">No account setup friction</span>
              <span className="rounded-sm bg-white px-3 py-2 shadow-card">Clean summaries for appointments</span>
              <span className="rounded-sm bg-white px-3 py-2 shadow-card">Designed for everyday routines</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-8 bottom-8 top-8 rounded-[28px] bg-secondary/70 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white p-4 shadow-card md:p-5">
              <div className="rounded-[24px] bg-background p-3">
                <Image
                  src={heroImage}
                  alt="MediBoo app preview"
                  priority
                  className="w-full rounded-[20px] object-cover"
                />
              </div>
              <div className="mt-4 rounded-md bg-secondary/60 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/70">
                  Gentle structure
                </p>
                <p className="mt-2 text-sm leading-7 text-primary">
                  A calm interface for fast notes, steady routines, and less backtracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <SectionTitle preTitle="Features" title="Designed to feel organized, not clinical.">
        MediBoo keeps the interface soft, readable, and intentionally simple so families can
        focus on the child, not the tool.
      </SectionTitle>

      <Container className="pb-8" id="features">
        <div className="grid gap-5 md:grid-cols-3">
          {featureCards.map((card) => (
            <div key={card.title} className="rounded-md bg-white p-6 shadow-card">
              <h3 className="text-lg font-semibold text-primary">{card.title}</h3>
              <p className="mt-3 text-base leading-8 text-muted-text">{card.body}</p>
            </div>
          ))}
        </div>
      </Container>

      <SectionTitle preTitle="How it works" title="A steady routine in three quick steps.">
        Keep updates light during the day, then bring the full picture into every follow-up.
      </SectionTitle>

      <Container className="pb-8" id="how-it-works">
        <div className="rounded-md bg-white p-6 shadow-card md:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="rounded-md bg-background p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-base leading-8 text-primary">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <SectionTitle preTitle="FAQ" title="Questions parents ask before they install.">
        The iOS app is available now, and the Android launch is being staged through the waitlist.
      </SectionTitle>

      <Container className="pb-14 md:pb-16" id="faq">
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="rounded-md bg-white p-6 shadow-card">
              <h3 className="text-lg font-semibold text-primary">{item.question}</h3>
              <p className="mt-3 text-base leading-8 text-muted-text">{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>

      <WaitlistModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-6 w-6 flex-none"
    >
      <path d="M16.56 12.49c.02 2.38 2.08 3.17 2.1 3.18-.02.06-.33 1.14-1.09 2.25-.66.96-1.34 1.92-2.42 1.94-1.06.02-1.41-.63-2.62-.63-1.22 0-1.6.61-2.6.65-1.04.04-1.82-1.04-2.49-1.99-1.37-1.98-2.41-5.61-1.01-8.05.69-1.22 1.93-1.99 3.28-2.01 1.03-.02 2 .69 2.62.69.62 0 1.8-.85 3.03-.72.52.02 1.98.21 2.92 1.59-.08.05-1.74 1.01-1.72 3.1Zm-2.14-5.56c.55-.67.93-1.61.83-2.55-.79.03-1.74.52-2.31 1.18-.51.59-.96 1.54-.84 2.45.88.07 1.78-.45 2.32-1.08Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-6 w-6 flex-none"
    >
      <path
        d="M6.5 5.2c-.46.3-.75.82-.75 1.41v10.78c0 .59.29 1.11.75 1.41l9.12-6.07L6.5 5.2Z"
        fill="currentColor"
      />
      <path
        d="M17.13 10.82 8.64 5.03a1.78 1.78 0 0 1 1.74-.04l6.04 3.33c1.15.63 1.2 2.26.71 2.5Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="m17.13 13.18-8.49 5.79c.54.33 1.22.34 1.74.04l6.04-3.33c1.15-.63 1.2-2.26.71-2.5Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}
