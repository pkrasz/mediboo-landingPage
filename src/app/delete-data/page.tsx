import { Metadata } from "next";
import { DeleteDataForm } from "@/components/DeleteDataForm";

export const metadata: Metadata = {
  title: "Delete Data",
};

export default function DeleteDataPage() {
  return <DeleteDataForm />;
}
