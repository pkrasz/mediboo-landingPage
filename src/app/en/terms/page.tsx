import type { Metadata } from "next";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getDictionary } from "@/i18n";

const dictionary = getDictionary("en");

export const metadata: Metadata = {
  title: dictionary.documents.terms.title,
};

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
