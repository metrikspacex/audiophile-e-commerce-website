import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { Link, useLocation } from "react-router-dom";

export type CategoryCardProps = HTMLAttributes<HTMLDivElement> & {
  alt: string;
  height: string;
  setMenu?: () => void;
  src: string;
  to: string;
  width: string;
};
export default function CategoryCard({
  alt,
  height,
  setMenu,
  src,
  to,
  width,
}: CategoryCardProps) {
  const { pathname } = useLocation();
  const onClick = () => {
    if (setMenu !== undefined) setMenu();
  };

  return (
    <div
      className={clsx(
        "relative mb-[6.8rem] flex h-[16.5rem] flex-col items-center justify-end rounded-[0.8rem] bg-primary-300 last:mb-0",
        "md:mb-0 md:grow",
        "xl:h-[20.5rem]"
      )}>
      <img
        alt={alt}
        className={clsx(
          "absolute left-[50%] top-[0] translate-x-[-50%] translate-y-[-50%]"
        )}
        src={src}
        style={{ height, width }}
      />
      <h1
        className={clsx(
          "mb-[1.7rem] font-primary text-[1.5rem] font-bold uppercase leading-[2rem] tracking-[0.1rem] text-primary-800"
        )}>
        {alt}
      </h1>
      <Link state={{ from: pathname }} to={to} onClick={onClick}>
        <p
          className={clsx(
            "mb-[2.2rem] font-primary text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[0.1rem] text-primary-800 opacity-50 mix-blend-normal"
          )}>
          shop
          <img
            alt="arrow pointing right"
            className={clsx("ml-[1.3rem] inline-block")}
            src="/shared/desktop/icon-arrow-right.svg"
          />
        </p>
      </Link>
    </div>
  );
}
