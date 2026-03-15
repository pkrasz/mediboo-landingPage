import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import {
  APPLE_APP_STORE_ID,
  HOME_DESCRIPTION_EN,
  HOME_DESCRIPTION_PL,
  HOME_TITLE_EN,
  HOME_TITLE_PL,
  OG_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

type LocalizedUrls = {
  en: string;
  pl: string;
};

interface PageMetadataOptions {
  title: string;
  description: string;
  canonical: string;
  locale: Locale;
  localizedUrls: LocalizedUrls;
  openGraph?: boolean;
  includeAppleSmartBanner?: boolean;
}

function toAbsoluteUrl(path: string) {
  if (!path || path === "/") {
    return SITE_URL;
  }

  return `${SITE_URL}${path}`;
}

function toOpenGraphLocale(locale: Locale) {
  return locale === "pl" ? "pl_PL" : "en_US";
}

export function buildLocalizedAlternates(urls: LocalizedUrls) {
  return {
    en: toAbsoluteUrl(urls.en),
    "en-US": toAbsoluteUrl(urls.en),
    pl: toAbsoluteUrl(urls.pl),
    "pl-PL": toAbsoluteUrl(urls.pl),
    "x-default": toAbsoluteUrl(urls.en),
  };
}

export function createPageMetadata({
  title,
  description,
  canonical,
  locale,
  localizedUrls,
  openGraph = false,
  includeAppleSmartBanner = false,
}: PageMetadataOptions): Metadata {
  const imageUrl = toAbsoluteUrl(OG_IMAGE_PATH);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: buildLocalizedAlternates(localizedUrls),
    },
    openGraph: openGraph
      ? {
          title,
          description,
          url: canonical,
          type: "website",
          siteName: SITE_NAME,
          locale: toOpenGraphLocale(locale),
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: `${SITE_NAME} social sharing image`,
            },
          ],
        }
      : undefined,
    twitter: openGraph
      ? {
          card: "summary_large_image",
          title,
          description,
          images: [imageUrl],
        }
      : undefined,
    other:
      includeAppleSmartBanner && APPLE_APP_STORE_ID
        ? {
            "apple-itunes-app": `app-id=${APPLE_APP_STORE_ID}`,
          }
        : undefined,
  };
}

export function createHomeMetadata(locale: Locale): Metadata {
  if (locale === "pl") {
    return createPageMetadata({
      title: HOME_TITLE_PL,
      description: HOME_DESCRIPTION_PL,
      canonical: toAbsoluteUrl("/pl"),
      locale,
      localizedUrls: {
        en: "/",
        pl: "/pl",
      },
      openGraph: true,
    });
  }

  return createPageMetadata({
    title: HOME_TITLE_EN,
    description: HOME_DESCRIPTION_EN,
    canonical: SITE_URL,
    locale,
    localizedUrls: {
      en: "/",
      pl: "/pl",
    },
    openGraph: true,
    includeAppleSmartBanner: true,
  });
}

export { toAbsoluteUrl };
