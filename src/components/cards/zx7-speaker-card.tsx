import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

export type ZX7SpeakerProps = HTMLAttributes<HTMLDivElement> & {
  width: number;
};
export default function ZX7Speaker({ width }: ZX7SpeakerProps) {
  let productSrc = "/home/mobile/image-speaker-zx7.jpg";
  if (width < 1440 && width >= 768) {
    productSrc = "/home/tablet/image-speaker-zx7.jpg";
  } else if (width >= 1440) {
    productSrc = "/home/desktop/image-speaker-zx7.jpg";
  }

  return (
    <div
      className={clsx(
        "relative flex h-[32rem] w-full items-center rounded-[0.8rem] bg-primary-500 px-[2.4rem]",
        "md:px-[6.2rem]",
        "xl:px-[9.5rem]"
      )}>
      <img
        alt="zx7 speaker"
        className={clsx("absolute left-0 top-0 h-full w-full rounded-[0.8rem]")}
        src={productSrc}
      />
      <div className={clsx("isolate h-[11.8rem] w-[20.4rem]")}>
        <h1
          className={clsx(
            "mb-[3.2rem] font-primary text-[2.8rem] font-bold uppercase leading-[3.8rem] tracking-[0.2rem] text-primary-800"
          )}>
          ZX7 SPEAKER
        </h1>
        <Link to="/product/5">
          <button
            className={clsx(
              "mx-auto block h-[4.8rem] w-[16rem] border-[1px] border-primary-800 bg-transparent font-primary text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[0.1rem] text-primary-800"
            )}
            type="button">
            See Product
          </button>
        </Link>
      </div>
    </div>
  );
}
