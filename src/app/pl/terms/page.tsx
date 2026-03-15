import { MarkdownContent } from "@/components/MarkdownContent";
import { getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/metadata";

const dictionary = getDictionary("pl");

export const metadata = createPageMetadata({
  title: dictionary.documents.terms.title,
  description: "Przeczytaj regulamin MediBoo dotyczący strony internetowej i aplikacji mobilnej.",
  canonical: "https://mediboo.app/pl/terms",
  locale: "pl",
  localizedUrls: {
    en: "/en/terms",
    pl: "/pl/terms",
  },
});

export default function PolishTermsPage() {
  return (
    <MarkdownContent
      fileName="terms.pl.md"
      title={dictionary.documents.terms.title}
      intro={dictionary.documents.terms.intro}
      documentLabel={dictionary.documents.label}
    />
  );
}
