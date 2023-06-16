import clsx from "clsx";
import type { Dispatch, HTMLAttributes, SetStateAction } from "react";
import { Link } from "react-router-dom";

export type NavProps = HTMLAttributes<HTMLElement> & {
  setMenu: Dispatch<SetStateAction<boolean>>;
};
export default function Nav({ setMenu }: NavProps) {
  return (
    <nav
      className={clsx(
        "z-[2] col-1 row-1 mx-auto flex w-full max-w-[37.5rem] items-center justify-around bg-transparent"
      )}>
      <img
        alt="menu button"
        className={clsx("hover:cursor-pointer")}
        src="/shared/tablet/icon-hamburger.svg"
        onClick={() => setMenu((ps) => !ps)}
      />
      <Link to="/">
        <img
          alt="logo"
          className={clsx("hover:cursor-pointer")}
          src="/shared/desktop/logo.svg"
        />
      </Link>
      <Link to="/cart">
        <img
          alt="cart"
          className={clsx("hover:cursor-pointer")}
          src="/shared/desktop/icon-cart.svg"
        />
      </Link>
    </nav>
  );
}
