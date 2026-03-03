import type { Locale } from "@/i18n/config";

const localizedAssets = {
  badges: {
    appStore: {
      pl: "/badges/downloadOnTheAppStore_PL.svg",
      en: "/badges/downloadOnTheAppStore_EN.svg",
    },
    googlePlay: {
      pl: "/badges/getItOnGooglePlay_PL.svg",
      en: "/badges/getItOnGooglePlay_EN.svg",
    },
  },
  hero: {
    pl: "/images/heroDeviceView_pl.png",
    en: "/images/heroDeviceView_en.png",
  },
} as const;

export function getLocaleAssets(locale: Locale) {
  return {
    appStoreBadge: localizedAssets.badges.appStore[locale],
    googlePlayBadge: localizedAssets.badges.googlePlay[locale],
    heroImage: localizedAssets.hero[locale],
  };
}
