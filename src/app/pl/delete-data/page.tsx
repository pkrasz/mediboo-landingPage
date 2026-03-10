import type { Metadata } from "next";
import { DeleteDataForm } from "@/components/DeleteDataForm";
import { getDictionary } from "@/i18n";

const dictionary = getDictionary("pl");

export const metadata: Metadata = {
  title: dictionary.deleteData.title,
};

export default function PolishDeleteDataPage() {
  return <DeleteDataForm t={dictionary.deleteData} locale="pl" />;
}
