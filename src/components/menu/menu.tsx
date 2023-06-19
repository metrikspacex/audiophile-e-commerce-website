import clsx from "clsx";
import type { HTMLAttributes } from "react";

import CategoryCard from "../cards/category-card";

export type MenuProps = HTMLAttributes<HTMLElement> & {
  setMenu: () => void;
};
export default function Menu({ setMenu }: MenuProps) {
  return (
    <menu
      className={clsx(
        "absolute left-[50%] top-[0] z-[1] col-1 row-2 mx-auto h-[75rem] w-full max-w-[37.5rem] translate-x-[-50%] rounded-b-[0.8rem] bg-primary-100 p-[8.4rem_2.4rem_3.2rem_2.4rem]",
        "md:flex md:h-[34rem] md:max-w-[68.9rem] md:justify-around md:gap-x-[1rem] md:p-[10.8rem_4rem_6.7rem_4rem]",
        "xl:max-w-[110rem]"
      )}>
      <CategoryCard
        alt="headphones"
        height="10.4rem"
        setMenu={setMenu}
        src="/shared/desktop/image-category-thumbnail-headphones.png"
        to="/category/headphones"
        width="8rem"
      />
      <CategoryCard
        alt="speakers"
        height="10.1rem"
        setMenu={setMenu}
        src="/shared/desktop/image-category-thumbnail-speakers.png"
        to="/category/speakers"
        width="8.4rem"
      />
      <CategoryCard
        alt="earphones"
        height="10.4rem"
        setMenu={setMenu}
        src="/shared/desktop/image-category-thumbnail-earphones.png"
        to="/category/earphones"
        width="10.3rem"
      />
    </menu>
  );
}
