import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

export type YX1EarphonesProps = HTMLAttributes<HTMLDivElement> & {
  width: number;
};
export default function YX1Earphones({ width }: YX1EarphonesProps) {
  let productSrc = "/home/mobile/image-earphones-yx1.jpg";
  if (width < 1440 && width >= 768) {
    productSrc = "/home/tablet/image-earphones-yx1.jpg";
  } else if (width >= 1440) {
    productSrc = "/home/desktop/image-earphones-yx1.jpg";
  }

  return (
    <div
      className={clsx(
        "grid h-[42.4rem] w-full grid-cols-[1fr] grid-rows-[20rem_1fr_20rem] rounded-[0.8rem] bg-primary-100",
        "md:h-[32rem] md:grid-cols-[33.9rem_1fr_33.9rem] md:grid-rows-[1fr]",
        "xl:grid-cols-[52rem_1fr_52rem]"
      )}>
      <img
        alt="yx1 earphones"
        className={clsx(
          "col-1 row-1 h-full w-full rounded-[0.8rem]",
          "md:col-1 md:row-1"
        )}
        src={productSrc}
      />
      <div
        className={clsx(
          "col-1 row-3 flex flex-col justify-center rounded-[0.8rem] bg-primary-300",
          "md:col-3 md:row-1"
        )}>
        <div
          className={clsx(
            "ml-[2.4rem] flex h-[11.8rem] w-[24.7rem] flex-col justify-between",
            "md:ml-[4.1rem]",
            "xl:ml-[12.5rem]"
          )}>
          <h1
            className={clsx(
              "font-primary text-[2.8rem] font-bold uppercase leading-[3.8rem] tracking-[0.2rem] text-primary-800"
            )}>
            YX1 EARPHONES
          </h1>
          <Link to="/product/yx1-earphones">
            <button
              className={clsx(
                "block h-[4.8rem] w-[16rem] border-[0.1rem] border-primary-800 bg-transparent font-primary text-[1.3rem] font-bold leading-[1.8rem] tracking-[0.1rem] text-primary-800"
              )}
              type="button">
              See Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
