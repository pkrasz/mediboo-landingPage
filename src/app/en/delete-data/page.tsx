import { DeleteDataForm } from "@/components/DeleteDataForm";
import { getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/metadata";

const dictionary = getDictionary("en");

export const metadata = createPageMetadata({
  title: dictionary.deleteData.title,
  description: "Submit a MediBoo account data deletion request and provide the details needed to identify your account.",
  canonical: "https://mediboo.app/en/delete-data",
  locale: "en",
  localizedUrls: {
    en: "/en/delete-data",
    pl: "/pl/delete-data",
  },
});

export default function EnglishDeleteDataPage() {
  return <DeleteDataForm t={dictionary.deleteData} locale="en" />;
}
