import React from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & Record<string, unknown>;

export function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return React.createElement(
    Comp,
    { className: clsx("px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32", className), ...restProps },
    React.createElement("div", { className: "mx-auto w-full max-w-6xl" }, children)
  );
}
