import { MarkdownContent } from "@/components/MarkdownContent";
import { getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/metadata";

const dictionary = getDictionary("en");

export const metadata = createPageMetadata({
  title: dictionary.documents.privacy.title,
  description: "Read the MediBoo Privacy Policy and learn how personal and health-related data is handled.",
  canonical: "https://mediboo.app/en/privacy",
  locale: "en",
  localizedUrls: {
    en: "/en/privacy",
    pl: "/pl/privacy",
  },
});

export default function EnglishPrivacyPage() {
  return (
    <MarkdownContent
      fileName="privacy.en.md"
      title={dictionary.documents.privacy.title}
      intro={dictionary.documents.privacy.intro}
      documentLabel={dictionary.documents.label}
    />
  );
}
