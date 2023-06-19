import clsx from "clsx";
import { Outlet } from "react-router-dom";

import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Menu from "../../components/menu/menu";
import Nav from "../../components/nav/nav";
import useStore from "../../hooks/useStore";
import useWidth from "../../hooks/useWidth";

export default function HomeLayout() {
  const { setMenuModal, state } = useStore();
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
        <Nav setMenu={setMenuModal} width={width} />
        {state.menuModal && width < 1440 ? (
          <Menu setMenu={setMenuModal} />
        ) : null}
        <Hero src={heroSrc} />
      </header>
      <main
        className={clsx("z-[0] col-1 row-2 bg-primary-100", {
          "brightness-[0.2]": state.cartModal || state.menuModal,
        })}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
