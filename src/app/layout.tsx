import type { Metadata } from "next";
import "./globals.css";

import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { getDictionary } from "@/i18n";

export const metadata: Metadata = {
  title: {
    default: "MediBoo",
    template: "%s | MediBoo",
  },
  description: getDictionary("en").metadata.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
