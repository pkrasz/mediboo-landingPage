"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Testimonials } from "@/components/Testimonials";
import { trackEvent } from "@/lib/analytics";
import { WaitlistModal } from "@/components/WaitlistModal";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { getLocaleAssets } from "@/lib/assets";
import { APPLE_APP_STORE_URL } from "@/lib/site";

interface LandingPageProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function LandingPage({ locale, dictionary }: Readonly<LandingPageProps>) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const assets = getLocaleAssets(locale);
  const { landing, testimonials, waitlist } = dictionary;

  const openModal = () => {
    setIsModalOpen(true);
    trackEvent("google_play_click", { destination: "waitlist_modal" });
  };

  const openHeroWaitlistModal = () => {
    trackEvent("android_waitlist_click", { location: "hero", locale });
    openModal();
  };

  const trackHeroAppStoreClick = () => {
    trackEvent("app_store_click", { location: "hero", locale });
  };

  const trackCtaAppStoreClick = () => {
    trackEvent("app_store_click", { location: "cta", locale });
  };

  return (
    <>
      <Container className="py-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,36rem)_minmax(0,1fr)] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,38rem)_minmax(24rem,1fr)] xl:gap-12">
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">
            <div className="inline-flex rounded-sm bg-secondary px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {landing.eyebrow}
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-primary md:text-5xl">
              {landing.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-text md:max-w-xl">
              {landing.description}
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href={APPLE_APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                onClick={trackHeroAppStoreClick}
                className="inline-flex rounded-md shadow-card transition-opacity hover:opacity-90"
                aria-label={landing.appStoreAria}
              >
                <Image
                  src={assets.appStoreBadge}
                  alt={landing.appStoreAria}
                  width={120}
                  height={40}
                  className="h-auto w-[160px] rounded-md sm:w-[172px]"
                  priority
                />
              </a>

              <button
                type="button"
                onClick={openHeroWaitlistModal}
                className="inline-flex rounded-md shadow-card transition-opacity hover:opacity-90"
                aria-label={landing.googlePlayAria}
              >
                <Image
                  src={assets.googlePlayBadge}
                  alt={landing.googlePlayAria}
                  width={239}
                  height={71}
                  className="h-auto w-[180px] rounded-md sm:w-[196px]"
                />
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-text">
              {landing.chips.map((chip) => (
                <span key={chip} className="rounded-sm bg-white px-3 py-2 shadow-card">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:mx-0 lg:justify-self-end lg:max-w-[500px] xl:max-w-[560px]">
            <div className="absolute inset-x-3 bottom-6 top-6 rounded-[32px] bg-secondary/70 blur-3xl lg:inset-x-5 lg:bottom-6 lg:top-6 xl:inset-x-6 xl:bottom-8 xl:top-8" />
            <div className="relative flex justify-center lg:justify-end">
              <Image
                src={assets.heroImage}
                alt={landing.appPreviewAlt}
                width={1290}
                height={2796}
                priority
                className="mx-auto h-auto w-full max-w-[300px] object-contain drop-shadow-[0_12px_30px_rgba(33,33,33,0.12)] sm:max-w-[340px] lg:mr-0 lg:max-w-[480px] xl:max-w-[530px]"
              />
            </div>
          </div>
        </div>
      </Container>

      <SectionTitle
        id="features"
        preTitle={landing.features.preTitle}
        title={landing.features.title}
      >
        {landing.features.description}
      </SectionTitle>

      <Container className="pb-8">
        <div className="grid gap-5 md:grid-cols-3">
          {landing.features.cards.map((card) => (
            <div key={card.title} className="rounded-md bg-white p-6 shadow-card">
              <h3 className="text-lg font-semibold text-primary">{card.title}</h3>
              <p className="mt-3 text-base leading-8 text-muted-text">{card.body}</p>
            </div>
          ))}
        </div>
      </Container>

      <SectionTitle
        id="how-it-works"
        preTitle={landing.howItWorks.preTitle}
        title={landing.howItWorks.title}
      >
        {landing.howItWorks.description}
      </SectionTitle>

      <Container className="pb-8">
        <div className="rounded-md bg-white p-6 shadow-card md:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            {landing.howItWorks.items.map((step, index) => (
              <div key={step} className="rounded-md bg-background p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  {landing.howItWorks.stepLabel} {index + 1}
                </p>
                <p className="mt-3 text-base leading-8 text-primary">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Testimonials t={testimonials} />

      <SectionTitle
        id="faq"
        preTitle={landing.faq.preTitle}
        title={landing.faq.title}
      >
        {landing.faq.description}
      </SectionTitle>

      <Container className="pb-14 md:pb-16">
        <div className="space-y-4">
          {landing.faq.items.map((item) => (
            <div key={item.question} className="rounded-md bg-white p-6 shadow-card">
              <h3 className="text-lg font-semibold text-primary">{item.question}</h3>
              <p className="mt-3 text-base leading-8 text-muted-text">{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="pb-16 md:pb-20">
        <div className="rounded-md bg-white px-6 py-10 text-center shadow-card md:px-8 md:py-14">
          <h2 className="text-3xl font-semibold tracking-tight text-primary lg:text-4xl">
            {landing.cta.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-text">
            {landing.cta.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={APPLE_APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={trackCtaAppStoreClick}
              className="inline-flex rounded-md shadow-card transition-opacity hover:opacity-90"
              aria-label={landing.appStoreAria}
            >
              <Image
                src={assets.appStoreBadge}
                alt={landing.appStoreAria}
                width={120}
                height={40}
                className="h-auto w-[160px] rounded-md sm:w-[172px]"
              />
            </a>

            <button
              type="button"
              onClick={openModal}
              className="inline-flex rounded-md shadow-card transition-opacity hover:opacity-90"
              aria-label={landing.googlePlayAria}
            >
              <Image
                src={assets.googlePlayBadge}
                alt={landing.googlePlayAria}
                width={239}
                height={71}
                className="h-auto w-[180px] rounded-md sm:w-[196px]"
              />
            </button>
          </div>
        </div>
      </Container>

      <WaitlistModal open={isModalOpen} onClose={() => setIsModalOpen(false)} t={waitlist} />
    </>
  );
}
