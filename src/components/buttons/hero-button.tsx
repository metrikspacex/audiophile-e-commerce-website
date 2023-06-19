import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { Link, useLocation } from "react-router-dom";

export type HeroButtonProps = HTMLAttributes<HTMLButtonElement>;
export default function HeroButton({}: HeroButtonProps) {
  const { pathname } = useLocation();

  return (
    <Link
      state={{ from: pathname }}
      to="/audiophile-e-commerce-website/product/xx99-mark-two-headphones/">
      <button
        className={clsx(
          "mx-auto block h-[4.8rem] w-[16rem] bg-primary-500 font-primary text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[0.1rem] text-primary-100",
          "xl:mx-0"
        )}
        type="button">
        See Product
      </button>
    </Link>
  );
}
