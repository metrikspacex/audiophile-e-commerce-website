import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

export type CategoryCardProps = HTMLAttributes<HTMLDivElement> & {
  alt: string;
  height: string;
  src: string;
  to: string;
  width: string;
};
export default function CategoryCard({
  alt,
  height,
  src,
  to,
  width,
}: CategoryCardProps) {
  return (
    <div
      className={clsx(
        "relative mb-[6.8rem] flex h-[16.5rem] flex-col items-center justify-end rounded-[0.8rem] bg-primary-300",
        "md:grow"
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
        headphones
      </h1>
      <Link to={to}>
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
