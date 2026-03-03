import type { Metadata } from "next";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getDictionary } from "@/i18n";

const dictionary = getDictionary("pl");

export const metadata: Metadata = {
  title: dictionary.documents.terms.title,
};

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
