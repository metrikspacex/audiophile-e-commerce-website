import clsx from "clsx";
import type { HTMLAttributes } from "react";

import Thumbnails from "../thumbnails/thumbnails";
import styles from "./menu.module.scss";

export type MenuProps = HTMLAttributes<HTMLMenuElement>;
export default function Menu({ className }: MenuProps) {
  return (
    <menu className={clsx(styles.root, className)}>
      <Thumbnails />
    </menu>
  );
}
