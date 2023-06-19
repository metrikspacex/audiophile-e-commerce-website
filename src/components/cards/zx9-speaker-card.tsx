import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

export type ZX9SpeakerProps = HTMLAttributes<HTMLDivElement> & {
  width: number;
};
export default function ZX9Speaker({ width }: ZX9SpeakerProps) {
  let productSrc = "/home/mobile/image-speaker-zx9.png";
  if (width < 1440 && width >= 768) {
    productSrc = "/home/tablet/image-speaker-zx9.png";
  } else if (width >= 1440) {
    productSrc = "/home/desktop/image-speaker-zx9.png";
  }

  return (
    <div
      className={clsx(
        "relative h-[60rem] w-full rounded-[0.8rem] bg-primary-500",
        "md:h-[72rem]",
        "xl:h-[56rem]"
      )}>
      <div className={clsx("absolute h-full w-full overflow-hidden")}>
        <svg
          className={clsx(
            "absolute left-[-11.6rem] top-[-12.1rem] h-[55.8rem] w-[55.8rem]",
            "md:left-[-12.7rem] md:top-[-28.8rem] md:h-[94.4rem] md:w-[94.4rem]",
            "xl:left-[-14.9rem] xl:top-[-3.6rem]"
          )}
          height="944"
          viewBox="0 0 944 944"
          width="944"
          xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd" opacity=".202" stroke="#FFF">
            <circle cx="472" cy="472" r="235.5" />
            <circle cx="472" cy="472" r="270.5" />
            <circle cx="472" cy="472" r="471.5" />
          </g>
        </svg>
      </div>

      <div
        className={clsx(
          "absolute left-[50%] mt-[5.5rem] h-[20.7rem] w-[17.2rem] translate-x-[-50%] overflow-hidden",
          "md:mt-[5.2rem] md:h-[23.7rem] md:w-[19.7rem]",
          "xl:left-[11.7rem] xl:top-[7.4rem] xl:mt-0 xl:h-[48.6rem] xl:w-[41.023rem] xl:translate-x-0"
        )}>
        <img alt="zx9 speaker" className={clsx("absolute")} src={productSrc} />
      </div>

      <div
        className={clsx(
          "absolute bottom-[5.5rem] left-[50%] w-full max-w-[28rem] translate-x-[-50%]",
          "md:bottom-[6.4rem] md:max-w-[34.9rem]",
          "xl:bottom-[12.4rem] xl:left-[66.6rem] xl:translate-x-0"
        )}>
        <h1
          className={clsx(
            "mb-[2.4rem] text-center font-primary text-[3.6rem] font-bold uppercase leading-[4rem] tracking-[0.13rem] text-primary-100",
            "md:text-[5.6rem] md:leading-[5.8rem]"
          )}>
          <span className={clsx("block")}>ZX9</span>
          <span className={clsx("block")}>SPEAKER</span>
        </h1>
        <p
          className={clsx(
            "mb-[2.4rem] text-center font-primary text-[1.5rem] font-medium leading-[2.5rem] text-primary-100 opacity-75 mix-blend-normal",
            "md:mb-[4rem]"
          )}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link to="/product/zx9-speaker">
          <button
            className={clsx(
              "mx-auto block h-[4.8rem] w-[16rem] bg-primary-800 font-primary text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[0.1rem] text-primary-100"
            )}
            type="button">
            See Product
          </button>
        </Link>
      </div>
    </div>
  );
}
