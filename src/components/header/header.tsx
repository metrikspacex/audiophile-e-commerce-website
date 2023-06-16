import clsx from "clsx";
import type { Dispatch, HTMLAttributes, SetStateAction } from "react";

import Hero from "../hero/hero";
import Menu from "../menu/menu";
import Nav from "../nav/nav";

export type HeaderProps = HTMLAttributes<HTMLElement> & {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
};
export default function Header({ menu, setMenu }: HeaderProps) {
  return (
    <header
      className={clsx(
        "relative grid grid-cols-[1fr] grid-rows-[9rem_1fr] bg-primary-600"
      )}>
      <Nav setMenu={setMenu} />
      {menu ? <Menu /> : <Hero src="/home/mobile/image-header.jpg" />}
    </header>
  );
}
