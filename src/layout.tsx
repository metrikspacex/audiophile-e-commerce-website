import clsx from "clsx";
import { useState } from "react";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";

export default function Layout() {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div
      className={clsx(
        "grid min-h-screen grid-cols-[1fr] grid-rows-[60rem_1fr_64.8rem] bg-primary-100 font-primary",
        "md:grid-rows-[76.8rem_1fr_64.8rem]",
        "xl:grid-rows-[72.9rem_1fr_64.8rem]"
      )}>
      <Header menu={menu} setMenu={setMenu} />
      <Main menu={menu} />
      <Footer />
    </div>
  );
}
