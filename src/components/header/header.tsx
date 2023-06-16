import clsx from "clsx";
import type { Dispatch, HTMLAttributes, SetStateAction } from "react";

import useWidth from "../../hooks/useWidth";
import Hero from "../hero/hero";
import Menu from "../menu/menu";
import Nav from "../nav/nav";

export type HeaderProps = HTMLAttributes<HTMLElement> & {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
};
export default function Header({ menu, setMenu }: HeaderProps) {
  const width = useWidth();

  let heroSrc = "/home/mobile/image-header.jpg";
  if (width < 1440 && width >= 768) {
    heroSrc = "/home/tablet/image-header.jpg";
  } else if (width >= 1440) {
    heroSrc = "/home/desktop/image-hero.jpg";
  }

  return (
    <header
      className={clsx(
        "relative grid grid-cols-[1fr] grid-rows-[9rem_1fr] bg-primary-600"
      )}>
      <Nav setMenu={setMenu} width={width} />
      {menu && width < 1440 ? <Menu /> : null}
      <Hero src={heroSrc} />
    </header>
  );
}
