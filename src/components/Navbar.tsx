import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";

export const Navbar = () => {
  const navigation = [
    { href: "/#features", label: "Funkcje" },
    { href: "/#how-it-works", label: "Jak to dziala" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/95 backdrop-blur">
      <Container className="py-5">
        <nav className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden md:h-12 md:w-12">
              <Image
                src="/brand/primaryBoo.png"
                alt="MediBoo logo"
                width={778}
                height={779}
                className="h-full w-full object-contain"
                priority
              />
            </span>
            <span>
              <span className="block text-lg font-semibold text-primary">MediBoo</span>
              <span className="block text-xs text-muted-text">iOS companion for parents</span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-4 py-2 text-sm font-medium text-muted-text hover:bg-white hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
};
