import { Fragment, ReactNode } from "react";

function renderInline(text: string): ReactNode[] {
  const parts = text
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*|_[^_]+_|\[[^\]]+\]\([^)]+\))/g)
    .filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    if (
      ((part.startsWith("*") && part.endsWith("*")) ||
        (part.startsWith("_") && part.endsWith("_"))) &&
      part.length > 2
    ) {
      return (
        <em key={`${part}-${index}`} className="text-sm italic text-muted-text">
          {part.slice(1, -1)}
        </em>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={`${part}-${index}`}
          href={linkMatch[2]}
          className="text-accent underline decoration-accent/40 underline-offset-4"
        >
          {linkMatch[1]}
        </a>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

export function renderMarkdown(markdown: string): ReactNode[] {
  const lines = markdown.split(/\r?\n/);
  const nodes: ReactNode[] = [];
  let paragraph: Array<{ text: string; breakAfter: boolean }> = [];
  let listItems: string[] = [];
  let listType: "ul" | "ol" | null = null;

  const flushParagraph = () => {
    if (!paragraph.length) {
      return;
    }

    nodes.push(
      <p key={`p-${nodes.length}`} className="text-base leading-8 text-muted-text">
        {paragraph.map((line, index) => (
          <Fragment key={`${line.text}-${index}`}>
            {renderInline(line.text)}
            {index < paragraph.length - 1 &&
              (line.breakAfter ? <br /> : " ")}
          </Fragment>
        ))}
      </p>,
    );
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length || !listType) {
      return;
    }

    const Tag = listType;
    nodes.push(
      <Tag key={`${listType}-${nodes.length}`} className="space-y-3 pl-6 text-base leading-8 text-muted-text">
        {listItems.map((item, index) => (
          <li key={`${item}-${index}`}>{renderInline(item)}</li>
        ))}
      </Tag>,
    );
    listItems = [];
    listType = null;
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,3})\s+(.*)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      const level = headingMatch[1].length;
      const title = headingMatch[2];
      const headingClass =
        level === 1
          ? "text-3xl font-semibold tracking-tight text-primary"
          : level === 2
            ? "text-2xl font-semibold tracking-tight text-primary"
            : "text-lg font-semibold text-primary";
      const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
      nodes.push(
        <HeadingTag key={`h-${nodes.length}`} className={headingClass}>
          {renderInline(title)}
        </HeadingTag>,
      );
      continue;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      flushParagraph();
      if (listType && listType !== "ol") {
        flushList();
      }
      listType = "ol";
      listItems.push(orderedMatch[1]);
      continue;
    }

    const unorderedMatch = trimmed.match(/^-\s+(.*)$/);
    if (unorderedMatch) {
      flushParagraph();
      if (listType && listType !== "ul") {
        flushList();
      }
      listType = "ul";
      listItems.push(unorderedMatch[1]);
      continue;
    }

    flushList();
    paragraph.push({
      text: trimmed.replace(/(?:\\\\| {2,})$/, ""),
      breakAfter: /(?:\\\\| {2,})$/.test(line),
    });
  }

  flushParagraph();
  flushList();

  return nodes;
}
