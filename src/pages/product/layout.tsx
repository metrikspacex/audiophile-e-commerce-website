import clsx from "clsx";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../components/footer/footer";
import Menu from "../../components/menu/menu";
import Nav from "../../components/nav/nav";
import useWidth from "../../hooks/useWidth";

export default function ProductLayout() {
  const [menu, setMenu] = useState<boolean>(false);
  const width = useWidth();

  return (
    <div
      className={clsx(
        "grid min-h-screen grid-cols-[1fr] grid-rows-[9rem_1fr_65.4rem] bg-primary-100 font-primary",
        "md:grid-rows-[9rem_1fr_40rem]",
        "xl:grid-rows-[9rem_1fr_36.5rem]"
      )}>
      <header
        className={clsx(
          "relative grid grid-cols-[1fr] grid-rows-[9rem_1fr] bg-primary-600"
        )}>
        <Nav setMenu={setMenu} width={width} />
        {menu && width < 1440 ? <Menu setMenu={setMenu} /> : null}
      </header>
      <main
        className={clsx("col-1 row-2 bg-primary-100", {
          "brightness-[0.2]": menu,
        })}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
