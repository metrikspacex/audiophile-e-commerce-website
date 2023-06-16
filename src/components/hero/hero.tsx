import clsx from "clsx";
import type { HTMLAttributes } from "react";

import HeroButton from "../buttons/hero-button";

export type HeroProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
};
export default function Hero({ src }: HeroProps) {
  return (
    <div
      className={clsx(
        "relative z-[0] col-1 row-full",
        "xl:mx-auto xl:grid xl:w-full xl:max-w-[111.4rem] xl:grid-cols-[max-content_1fr]"
      )}>
      <img
        alt="headphones"
        className={clsx(
          "mx-auto h-[60rem]",
          "opacity-50 mix-blend-normal md:h-[72.9rem]",
          "xl:col-full xl:row-1 xl:object-cover xl:[object-position:50%]"
        )}
        src={src}
      />
      <div
        className={clsx(
          "absolute left-[50%] top-[50%] w-full max-w-[32.8rem] translate-x-[-50%] translate-y-[calc(-50%+4.5rem)]",
          "md:max-w-[37.6rem] md:translate-y-[calc(-50%)]",
          "xl:static xl:col-1 xl:row-1 xl:my-auto xl:max-w-[39.8rem] xl:translate-x-0 xl:translate-y-0"
        )}>
        <h2
          className={clsx(
            "mb-[1.6rem] text-center font-primary text-[1.4rem] font-normal uppercase leading-[1.9rem] tracking-[1rem] text-primary-100 opacity-[0.5] mix-blend-normal",
            "md:mb-[2.4rem]",
            "xl:text-justify"
          )}>
          NEW PRODUCT
        </h2>
        <h1
          className={clsx(
            "mb-[2.4rem] text-center font-primary text-[3.6rem] font-normal uppercase leading-[4rem] tracking-[0.1rem] text-primary-100",
            "md:text-[5.6rem] md:leading-[5.8rem] md:tracking-[0.2rem]",
            "xl:text-justify"
          )}>
          XX99 Mark II HeadphoneS
        </h1>
        <p
          className={clsx(
            "mx-auto mb-[2.8rem] max-w-[32.8rem] text-center font-primary text-[1.5rem] font-medium leading-[2.5rem] text-primary-100 opacity-[0.75] mix-blend-normal",
            "md:mb-[4rem] md:max-w-[37.6rem]",
            "xl:mx-0 xl:text-justify"
          )}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <HeroButton />
      </div>
    </div>
  );
}
