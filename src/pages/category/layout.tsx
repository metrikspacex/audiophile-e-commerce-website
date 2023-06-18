import clsx from "clsx";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Footer from "../../components/footer/footer";
import Menu from "../../components/menu/menu";
import Nav from "../../components/nav/nav";
import useWidth from "../../hooks/useWidth";

export default function HomeLayout() {
  const [menu, setMenu] = useState<boolean>(false);
  const { pathname } = useLocation();
  const width = useWidth();

  return (
    <div
      className={clsx(
        "grid min-h-screen grid-cols-[1fr] grid-rows-[19.2rem_1fr_65.4rem] bg-primary-100 font-primary",
        "md:grid-rows-[33.6rem_1fr_40rem]",
        "xl:grid-rows-[33.6rem_1fr_36.5rem]"
      )}>
      <header
        className={clsx(
          "relative grid grid-cols-[1fr] grid-rows-[9rem_1fr] bg-primary-600"
        )}>
        <Nav setMenu={setMenu} width={width} />
        {menu && width < 1440 ? <Menu setMenu={setMenu} /> : null}
        <div
          className={clsx(
            "my-auto block text-center font-primary text-[2.8rem] font-bold uppercase leading-[3.8rem] tracking-[0.2rem] text-primary-100"
          )}>
          {pathname.split("/")[2]}
        </div>
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
