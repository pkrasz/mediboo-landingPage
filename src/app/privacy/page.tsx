import { Metadata } from "next";
import { MarkdownContent } from "@/components/MarkdownContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <MarkdownContent
      fileName="privacy.pl.md"
      title="Privacy Policy"
      intro="This policy explains what information MediBoo processes and how it is used to support the service."
    />
  );
}
