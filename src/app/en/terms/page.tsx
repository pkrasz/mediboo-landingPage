import { MarkdownContent } from "@/components/MarkdownContent";
import { getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/metadata";

const dictionary = getDictionary("en");

export const metadata = createPageMetadata({
  title: dictionary.documents.terms.title,
  description: "Review the MediBoo Terms of Use for the website and mobile app.",
  canonical: "https://mediboo.app/en/terms",
  locale: "en",
  localizedUrls: {
    en: "/en/terms",
    pl: "/pl/terms",
  },
});

export default function EnglishTermsPage() {
  return (
    <MarkdownContent
      fileName="terms.en.md"
      title={dictionary.documents.terms.title}
      intro={dictionary.documents.terms.intro}
      documentLabel={dictionary.documents.label}
    />
  );
}
