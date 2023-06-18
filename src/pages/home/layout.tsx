import clsx from "clsx";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Menu from "../../components/menu/menu";
import Nav from "../../components/nav/nav";
import useWidth from "../../hooks/useWidth";

export default function HomeLayout() {
  const [menu, setMenu] = useState<boolean>(false);
  const width = useWidth();

  let heroSrc = "/home/mobile/image-header.jpg";
  if (width < 1440 && width >= 768) {
    heroSrc = "/home/tablet/image-header.jpg";
  } else if (width >= 1440) {
    heroSrc = "/home/desktop/image-hero.jpg";
  }

  return (
    <div
      className={clsx(
        "grid min-h-screen grid-cols-[1fr] grid-rows-[60rem_1fr_65.4rem] bg-primary-100 font-primary",
        "md:grid-rows-[72.9rem_1fr_40rem]",
        "xl:grid-rows-[72.9rem_1fr_36.5rem]"
      )}>
      <header
        className={clsx(
          "relative grid grid-cols-[1fr] grid-rows-[9rem_1fr] bg-primary-600"
        )}>
        <Nav setMenu={setMenu} width={width} />
        {menu && width < 1440 ? <Menu setMenu={setMenu} /> : null}
        <Hero src={heroSrc} />
      </header>
      <main
        className={clsx("z-[0] col-1 row-2 bg-primary-100", {
          "brightness-[0.2]": menu,
        })}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
