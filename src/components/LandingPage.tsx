"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { trackEvent } from "@/lib/analytics";
import { WaitlistModal } from "@/components/WaitlistModal";

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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,42rem)_1fr] lg:items-center lg:gap-16 xl:gap-20">
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
                className="inline-flex rounded-md shadow-card transition-opacity hover:opacity-90"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/badges/DownloadontheAppStore_US-UK.svg"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-auto w-[160px] rounded-md sm:w-[172px]"
                  priority
                />
              </a>

              <button
                type="button"
                onClick={openModal}
                className="inline-flex rounded-md shadow-card transition-opacity hover:opacity-90"
                aria-label="Join Google Play waitlist"
              >
                <Image
                  src="/badges/GetItOnGooglePlay_English.svg"
                  alt="Get it on Google Play"
                  width={239}
                  height={71}
                  className="h-auto w-[180px] rounded-md sm:w-[196px]"
                />
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-text">
              <span className="rounded-sm bg-white px-3 py-2 shadow-card">No account setup friction</span>
              <span className="rounded-sm bg-white px-3 py-2 shadow-card">Clean summaries for appointments</span>
              <span className="rounded-sm bg-white px-3 py-2 shadow-card">Designed for everyday routines</span>
            </div>
          </div>

          <div className="relative lg:mx-auto lg:w-full lg:max-w-[290px] xl:max-w-[320px]">
            <div className="absolute inset-x-8 bottom-8 top-8 rounded-[28px] bg-secondary/70 blur-3xl" />
            <div className="relative flex justify-center lg:py-4">
              <Image
                src="/images/AppJournalview.png"
                alt="MediBoo app preview"
                width={1290}
                height={2796}
                priority
                className="mx-auto h-auto w-full max-w-[250px] object-cover drop-shadow-[0_12px_30px_rgba(33,33,33,0.12)] sm:max-w-[280px] lg:max-w-[230px] xl:max-w-[250px]"
              />
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
