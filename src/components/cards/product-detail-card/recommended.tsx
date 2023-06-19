import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { Link, useLocation } from "react-router-dom";

export type RecommendedProps = HTMLAttributes<HTMLDivElement> & {
  others: Others[];
  width: number;
};
export default function Recommended({ others, width }: RecommendedProps) {
  const { pathname } = useLocation();

  return (
    <div className={clsx("")}>
      <h1
        className={clsx(
          "mb-[4rem] text-center font-primary text-[2.4rem] font-bold uppercase leading-[3.6rem] tracking-[0.0857rem] text-primary-800",
          "md:mb-[5.6rem] md:text-[3.2rem]"
        )}>
        you may also like
      </h1>
      <div
        className={clsx(
          "flex h-full w-full flex-col gap-y-[5.6rem]",
          "md:flex-row md:gap-x-[1.1rem] md:gap-y-0"
        )}>
        {others.map((item, index) => {
          let src = item.image.mobile;
          if (width < 1440 && width >= 768) {
            src = item.image.tablet;
          } else if (width >= 1440) {
            src = item.image.desktop;
          }
          return (
            <div
              className={clsx("h-full w-full")}
              key={`recommended-${item.name}-${index}`}>
              <img
                alt={item.name}
                className={clsx(
                  "mb-[3.2rem] h-full w-full rounded-[0.8rem]",
                  "md:mb-[4rem]"
                )}
                src={src}
              />
              <h1
                className={clsx(
                  "mb-[3.2rem] text-center font-primary text-[2.4rem] font-bold uppercase leading-[3.395rem] tracking-[0.17rem] text-primary-800"
                )}>
                {item.name}
              </h1>
              <Link state={{ from: pathname }} to={`/product/${item.slug}/`}>
                <button
                  className={clsx(
                    "mx-auto block h-[4.8rem] w-[16rem] bg-primary-500 font-primary text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[0.1rem] text-primary-100"
                  )}
                  type="button">
                  See Product
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
