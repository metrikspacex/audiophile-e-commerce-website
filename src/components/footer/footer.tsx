import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type FooterProps = HTMLAttributes<HTMLElement>;
export default function Footer({}: FooterProps) {
  return <footer className={clsx("col-1 row-3 bg-primary-600")}></footer>;
}
