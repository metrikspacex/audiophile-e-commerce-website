import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type BestGearProps = HTMLAttributes<HTMLDivElement> & {
  width: number;
};
export default function BestGear({ width }: BestGearProps) {
  let src = "/shared/mobile/image-best-gear.jpg";
  if (width < 1440 && width >= 768) {
    src = "/shared/tablet/image-best-gear.jpg";
  } else if (width >= 1440) {
    src = "/shared/desktop/image-best-gear.jpg";
  }
  return (
    <div
      className={clsx(
        "grid h-[69.8rem] w-full grid-cols-[1fr] grid-rows-[30rem_1fr_35.8rem] rounded-[0.8rem]",
        "md:h-[63.3rem] md:grid-rows-[30rem_1fr_27rem]",
        "xl:h-[58.8rem] xl:grid-cols-[54rem_1fr_54rem] xl:grid-rows-[1fr]"
      )}>
      <img
        alt="usage of our headphones"
        className={clsx(
          "col-1 row-1 h-full w-full rounded-[0.8rem]",
          "xl:col-3 xl:row-1"
        )}
        src={src}
      />
      <div
        className={clsx(
          "col-1 row-3 mx-auto w-[32rem]",
          "md:w-[57.3rem]",
          "xl:col-1 xl:row-1 xl:my-auto xl:w-[44.5rem]"
        )}>
        <h1
          className={clsx(
            "mb-[3.2rem] text-center font-primary text-[2.8rem] font-bold uppercase leading-[3.8rem] tracking-[0.1rem] text-primary-800",
            "xl:text-justify"
          )}>
          Bringing you the{" "}
          <span className={clsx("text-primary-500")}>best</span> audio gear
        </h1>
        <p
          className={clsx(
            "text-center font-primary text-[1.5rem] font-medium leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal",
            "xl:text-justify"
          )}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
