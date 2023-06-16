import clsx from "clsx";
import type { Dispatch, HTMLAttributes, SetStateAction } from "react";

import styles from "./nav.module.scss";

export type NavProps = HTMLAttributes<HTMLDivElement> & {
  setMenu: Dispatch<SetStateAction<boolean>>;
};
export default function Nav({ className, setMenu }: NavProps) {
  return (
    <nav className={clsx(styles.root, className)}>
      <button
        className={clsx(styles.menu__button)}
        type="button"
        onClick={() => setMenu((ps) => !ps)}>
        <img alt="hamburger" src="/shared/tablet/icon-hamburger.svg" />
      </button>
      <img alt="logo" src="/shared/desktop/logo.svg" />
      <img alt="cart" src="/shared/desktop/icon-cart.svg" />
    </nav>
  );
}
