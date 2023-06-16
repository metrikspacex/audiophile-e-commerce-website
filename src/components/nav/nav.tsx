import clsx from "clsx";
import type { Dispatch, HTMLAttributes, SetStateAction } from "react";
import { Link } from "react-router-dom";

import NavLink from "./nav-link";

export type NavProps = HTMLAttributes<HTMLElement> & {
  setMenu: Dispatch<SetStateAction<boolean>>;
  width: number;
};
export default function Nav({ setMenu, width }: NavProps) {
  return (
    <nav
      className={clsx(
        "z-[2] col-1 row-1 mx-auto flex w-full max-w-[37.5rem] items-center justify-around border-b-2 border-primary-100/10 bg-transparent",
        "md:max-w-[68.9rem] md:justify-start",
        "xl:max-w-[110.9rem] xl:justify-between"
      )}>
      {width < 1440 ? (
        <img
          alt="menu button"
          className={clsx("hover:cursor-pointer")}
          src="/shared/tablet/icon-hamburger.svg"
          onClick={() => setMenu((ps) => !ps)}
        />
      ) : null}
      <Link
        className={clsx("md:ml-[4.2rem] md:grow", "xl:ml-0 xl:grow-0")}
        to="/">
        <img
          alt="logo"
          className={clsx("hover:cursor-pointer")}
          src="/shared/desktop/logo.svg"
        />
      </Link>
      {width < 1440 ? null : (
        <ul className={clsx("flex grow justify-center gap-x-[3.4rem]")}>
          <NavLink text="home" to="/" />
          <NavLink text="headphones" to="/" />
          <NavLink text="speakers" to="/" />
          <NavLink text="earphones" to="/" />
        </ul>
      )}
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
