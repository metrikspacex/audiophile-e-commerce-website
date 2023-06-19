import clsx from "clsx";
import { Outlet } from "react-router-dom";

import CheckoutModal from "../../components/checkout/checkout-modal";
import Footer from "../../components/footer/footer";
import Menu from "../../components/menu/menu";
import Nav from "../../components/nav/nav";
import useStore from "../../hooks/useStore";
import useWidth from "../../hooks/useWidth";

export default function CheckoutLayout() {
  const width = useWidth();
  const { setMenuModal, state } = useStore();

  return (
    <div
      className={clsx(
        "grid min-h-screen grid-cols-[1fr] grid-rows-[9rem_1fr_65.4rem] bg-primary-100 font-primary",
        "md:grid-rows-[9rem_1fr_40rem]",
        "xl:grid-rows-[9.7rem_1fr_36.5rem]"
      )}>
      <header
        className={clsx(
          "relative grid grid-cols-[1fr] grid-rows-[9.7rem_1fr] bg-primary-600"
        )}>
        <Nav setMenu={setMenuModal} width={width} />
        {state.menuModal && width < 1440 ? (
          <Menu setMenu={setMenuModal} />
        ) : null}
        {state.checkoutModal ? (
          <CheckoutModal cart={state.cart} width={width} />
        ) : null}
      </header>
      <main
        className={clsx("col-1 row-2 bg-primary-200", {
          "brightness-[0.2]":
            state.cartModal || state.checkoutModal || state.menuModal,
        })}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
