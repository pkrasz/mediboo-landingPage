import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
  id?: string;
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
  className?: string;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  const alignmentClass = props.align === "left" ? "" : "items-center justify-center text-center";
  const customClassName = props.className ? ` ${props.className}` : "";

  return (
    <Container
      id={props.id}
      className={`mt-4 flex w-full scroll-mt-[var(--nav-scroll-offset)] flex-col ${alignmentClass}${customClassName}`}
    >
      {props.preTitle && (
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-primary lg:text-4xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-8 text-muted-text">
          {props.children}
        </p>
      )}
    </Container>
  );
};
