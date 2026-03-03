import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`mt-4 flex w-full flex-col ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
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
