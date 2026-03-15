import { MarkdownContent } from "@/components/MarkdownContent";
import { getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/metadata";

const dictionary = getDictionary("pl");

export const metadata = createPageMetadata({
  title: dictionary.documents.privacy.title,
  description: "Przeczytaj Politykę Prywatności MediBoo i sprawdź, jak przetwarzane są dane osobowe oraz zdrowotne.",
  canonical: "https://mediboo.app/pl/privacy",
  locale: "pl",
  localizedUrls: {
    en: "/en/privacy",
    pl: "/pl/privacy",
  },
});

export default function PolishPrivacyPage() {
  return (
    <MarkdownContent
      fileName="privacy.pl.md"
      title={dictionary.documents.privacy.title}
      intro={dictionary.documents.privacy.intro}
      documentLabel={dictionary.documents.label}
    />
  );
}
