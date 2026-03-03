import type { Metadata } from "next";
import "./globals.css";

import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { SiteLayout } from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: {
    default: "MediBoo",
    template: "%s | MediBoo",
  },
  description: "MediBoo helps parents keep children's care routines calm, organized, and easy to follow.",
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
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
