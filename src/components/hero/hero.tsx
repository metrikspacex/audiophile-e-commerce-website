import clsx from "clsx";
import type { HTMLAttributes } from "react";

import HeroButton from "../buttons/hero-button";

export type HeroProps = HTMLAttributes<HTMLDivElement> & { src: string };
export default function Hero({ src }: HeroProps) {
  return (
    <div className={clsx("relative z-[0] col-1 row-full")}>
      <img alt="headphones" className={clsx("mx-auto h-[60rem]")} src={src} />
      <div
        className={clsx(
          "absolute left-[50%] top-[50%] w-full max-w-[32.8rem] translate-x-[-50%] translate-y-[calc(-50%+4.5rem)]"
        )}>
        <h2
          className={clsx(
            "mb-[1.6rem] text-center font-primary text-[1.4rem] font-normal uppercase leading-[1.9rem] tracking-[1rem] text-primary-100 opacity-[0.5] mix-blend-normal"
          )}>
          NEW PRODUCT
        </h2>
        <h1
          className={clsx(
            "mb-[2.4rem] text-center font-primary text-[3.6rem] font-normal uppercase leading-[4rem] tracking-[0.1rem] text-primary-100"
          )}>
          XX99 Mark II HeadphoneS
        </h1>
        <p
          className={clsx(
            "mb-[2.8rem] text-center font-primary text-[1.5rem] font-medium uppercase leading-[2.5rem] text-primary-100 opacity-[0.75] mix-blend-normal"
          )}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <HeroButton />
      </div>
    </div>
  );
}
