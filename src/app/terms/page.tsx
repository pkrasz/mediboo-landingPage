import { Metadata } from "next";
import { MarkdownContent } from "@/components/MarkdownContent";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <MarkdownContent
      fileName="terms.pl.md"
      title="Terms of Use"
      intro="These terms describe the basic rules for using the MediBoo website and mobile application."
    />
  );
}
