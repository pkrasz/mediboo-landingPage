import { promises as fs } from "fs";
import path from "path";
import { Container } from "@/components/Container";
import { renderMarkdown } from "@/lib/markdown";

interface MarkdownContentProps {
  fileName: string;
  title: string;
  intro: string;
  documentLabel: string;
}

export async function MarkdownContent({
  fileName,
  title,
  intro,
  documentLabel,
}: Readonly<MarkdownContentProps>) {
  const filePath = path.join(process.cwd(), "content", fileName);
  const markdown = await fs.readFile(filePath, "utf8");

  return (
    <Container className="py-10 md:py-14">
      <div className="mx-auto max-w-3xl rounded-md bg-white p-6 shadow-card md:p-10">
        <div className="border-b border-border pb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {documentLabel}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-8 text-muted-text">{intro}</p>
        </div>
        <div className="mt-8 space-y-6">{renderMarkdown(markdown)}</div>
      </div>
    </Container>
  );
}
