import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { Link, useLocation } from "react-router-dom";

import useStore from "../../hooks/useStore";
import CartModal from "../cart/cart-modal";
import NavLink from "./nav-link";

export type NavProps = HTMLAttributes<HTMLElement> & {
  setMenu: () => void;
  width: number;
};
export default function Nav({ setMenu, width }: NavProps) {
  const { pathname } = useLocation();
  const { setCartModal, state } = useStore();

  return (
    <nav
      className={clsx(
        "relative z-[2] col-1 row-1 mx-auto flex w-full max-w-[37.5rem] items-center justify-around border-b-2 border-primary-100/10 bg-transparent",
        "md:max-w-[68.9rem] md:justify-start",
        "xl:max-w-[110rem] xl:justify-between"
      )}>
      {width < 1440 ? (
        <img
          alt="menu button"
          className={clsx("hover:cursor-pointer")}
          src="/audiophile-e-commerce-website/shared/tablet/icon-hamburger.svg"
          onClick={() => {
            if (!state.cartModal && !state.checkoutModal) setMenu();
          }}
        />
      ) : null}
      <Link
        className={clsx("md:ml-[4.2rem] md:grow", "xl:ml-0 xl:grow-0")}
        state={{ from: pathname }}
        to="/audiophile-e-commerce-website/">
        <img
          alt="logo"
          className={clsx("hover:cursor-pointer")}
          src="/audiophile-e-commerce-website/shared/desktop/logo.svg"
        />
      </Link>
      {width < 1440 ? null : (
        <ul className={clsx("flex grow justify-center gap-x-[3.4rem]")}>
          <NavLink text="home" to="/audiophile-e-commerce-website/" />
          <NavLink
            text="headphones"
            to="/audiophile-e-commerce-website/category/headphones"
          />
          <NavLink
            text="speakers"
            to="/audiophile-e-commerce-website/category/speakers"
          />
          <NavLink
            text="earphones"
            to="/audiophile-e-commerce-website/category/earphones"
          />
        </ul>
      )}
      <button
        className={clsx("bg-transparent")}
        type="button"
        onClick={() => {
          if (!state.menuModal && !state.checkoutModal) setCartModal();
        }}>
        <img
          alt="cart"
          className={clsx("hover:cursor-pointer")}
          src="/audiophile-e-commerce-website/shared/desktop/icon-cart.svg"
        />
      </button>
      {state.cartModal ? <CartModal /> : null}
    </nav>
  );
}
