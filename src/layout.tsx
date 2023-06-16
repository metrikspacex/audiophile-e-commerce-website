import clsx from "clsx";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Menu from "./components/menu/menu";
import Nav from "./components/nav/nav";
import useWidth from "./hooks/useWidth";
import styles from "./layout.module.scss";

export default function Layout() {
  const [menu, setMenu] = useState<boolean>(false);
  const width = useWidth();

  return (
    <div className={clsx(styles.root)}>
      <header>
        <Nav setMenu={setMenu} />
        {menu ? <Menu /> : <Hero width={width} />}
      </header>
      <main className={clsx({ [styles.menuOpen]: menu })}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
