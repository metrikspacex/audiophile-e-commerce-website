import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { Link, useLocation } from "react-router-dom";

export type NavLinkProps = HTMLAttributes<HTMLLIElement> & {
  text: string;
  to: string;
};
export default function NavLink({ text, to }: NavLinkProps) {
  const { pathname } = useLocation();

  return (
    <li
      className={clsx(
        "font-primary text-[1.3rem] font-bold uppercase leading-[2.5rem] tracking-[0.2rem] text-primary-100"
      )}>
      <Link
        className={clsx("")}
        state={{
          from: pathname,
        }}
        to={to}>
        {text}
      </Link>
    </li>
  );
}
