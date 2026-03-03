import type { Metadata } from "next";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getDictionary } from "@/i18n";

const dictionary = getDictionary("pl");

export const metadata: Metadata = {
  title: dictionary.documents.privacy.title,
};

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
