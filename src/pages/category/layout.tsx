import clsx from "clsx";
import { Outlet, useLocation } from "react-router-dom";

import Footer from "../../components/footer/footer";
import Menu from "../../components/menu/menu";
import Nav from "../../components/nav/nav";
import useStore from "../../hooks/useStore";
import useWidth from "../../hooks/useWidth";

export default function CategoryLayout() {
  const width = useWidth();
  const { pathname } = useLocation();
  const { setMenuModal, state } = useStore();

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
        <Nav setMenu={setMenuModal} width={width} />
        {state.menuModal && width < 1440 ? (
          <Menu setMenu={setMenuModal} />
        ) : null}
        <div
          className={clsx(
            "my-auto block text-center font-primary text-[2.8rem] font-bold uppercase leading-[3.8rem] tracking-[0.2rem] text-primary-100"
          )}>
          {pathname.split("/")[2]}
        </div>
      </header>
      <main
        className={clsx("z-[0] col-1 row-2 bg-primary-100", {
          "brightness-[0.2]":
            state.cartModal || state.checkoutModal || state.menuModal,
        })}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
