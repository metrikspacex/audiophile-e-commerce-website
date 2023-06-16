import clsx from "clsx";
import type { HTMLAttributes } from "react";

import styles from "./footer.module.scss";

export type FooterProps = HTMLAttributes<HTMLElement>;
export default function Footer({ className }: FooterProps) {
  return <footer className={clsx(styles.root, className)}></footer>;
}
