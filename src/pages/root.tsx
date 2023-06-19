import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import useStore from "../hooks/useStore";

export default function Root() {
  const { state, setCartModal, setMenuModal } = useStore();
  const { pathname } = useLocation();

  useEffect(() => {
    window.document.documentElement.scrollTop = 0;

    if (state.cartModal) setCartModal();
    if (state.menuModal) setMenuModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <Outlet />;
}
