import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import useStore from "../hooks/useStore";

export default function Root() {
  const { fetchCart, state, setCartModal, setCheckoutModal, setMenuModal } =
    useStore();
  const { pathname } = useLocation();

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.document.documentElement.scrollTop = 0;

    if (state.cartModal) setCartModal();
    if (state.checkoutModal) setCheckoutModal();
    if (state.menuModal) setMenuModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <Outlet />;
}
