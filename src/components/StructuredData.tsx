import { HOME_DESCRIPTION_EN, SITE_URL } from "@/lib/site";

const mobileApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "MediBoo",
  applicationCategory: "MedicalApplication",
  operatingSystem: "iOS",
  url: SITE_URL,
  description: HOME_DESCRIPTION_EN,
  publisher: {
    "@type": "Person",
    name: "Paweł Kraszewski",
  },
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileApplicationSchema) }}
    />
  );
}
