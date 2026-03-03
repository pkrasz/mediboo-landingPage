import { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: Readonly<SiteLayoutProps>) {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
