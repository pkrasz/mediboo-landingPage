import type { Locale } from "@/i18n/config";

const localizedAssets = {
  badges: {
    appStore: {
      pl: "/badges/downloadOnTheAppStore_PL.svg",
      en: "/badges/downloadOnTheAppStore_EN.svg",
    },
    googlePlay: {
      pl: "/badges/waitlistOnGooglePlay_PL.png",
      en: "/badges/waitlistOnGooglePlay_EN.png",
    },
  },
  hero: {
    pl: "/images/heroDeviceView_pl.png",
    en: "/images/heroDeviceView_en.png",
  },
  userIdInstruction: {
    pl: "/images/userIdInstruction_pl.png",
    en: "/images/userIdInstruction_en.png",
  },
} as const;

export function getLocaleAssets(locale: Locale) {
  return {
    appStoreBadge: localizedAssets.badges.appStore[locale],
    googlePlayBadge: localizedAssets.badges.googlePlay[locale],
    heroImage: localizedAssets.hero[locale],
    userIdInstructionImage: localizedAssets.userIdInstruction[locale],
  };
}
