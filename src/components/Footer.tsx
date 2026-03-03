import Link from "next/link";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-white/70">
      <Container>
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Link href="/" className="text-lg font-semibold text-primary">
              MediBoo
            </Link>
            <p className="mt-3 text-sm leading-7 text-muted-text">
              Calm tools for managing pediatric routines, daily symptoms, and practical
              follow-ups with less mental overhead.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            <Link
              href="/privacy"
              className="rounded-md px-3 py-2 text-sm text-muted-text hover:bg-background hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="rounded-md px-3 py-2 text-sm text-muted-text hover:bg-background hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="/delete-data"
              className="rounded-md px-3 py-2 text-sm text-muted-text hover:bg-background hover:text-primary"
            >
              Delete Data
            </Link>
          </div>
        </div>

        <div className="border-t border-border/80 py-5 text-sm text-muted-text">
          Copyright {new Date().getFullYear()} MediBoo. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
