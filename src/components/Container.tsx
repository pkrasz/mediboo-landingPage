import React, { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  const { children, className, ...rest } = props;

  return (
    <div
      className={`container mx-auto p-8 xl:px-0 ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </div>
  );
}
