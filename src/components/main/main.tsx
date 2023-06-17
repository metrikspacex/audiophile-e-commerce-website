import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { Outlet } from "react-router-dom";

export type MainProps = HTMLAttributes<HTMLElement> & { menu: boolean };
export default function Main({ menu }: MainProps) {
  return (
    <main
      className={clsx("z-[0] col-1 row-2 bg-primary-100", {
        "brightness-[0.2]": menu,
      })}>
      <Outlet />
    </main>
  );
}
