import { SupportPage } from "@/components/SupportPage";
import { getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/metadata";

const dictionary = getDictionary("en");

export const metadata = createPageMetadata({
  title: "Support – MediBoo",
  description: "Get support for MediBoo, find FAQ answers, and reach the team by email.",
  canonical: "https://mediboo.app/en/support",
  locale: "en",
  localizedUrls: {
    en: "/en/support",
    pl: "/pl/support",
  },
});

export default function EnglishSupportPage() {
  return <SupportPage locale="en" t={dictionary.support} />;
}
