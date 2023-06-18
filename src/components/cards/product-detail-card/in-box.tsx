import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type InBoxProps = HTMLAttributes<HTMLDivElement> & {
  includes: Includes[];
};
export default function InBox({ includes }: InBoxProps) {
  return (
    <div
      className={clsx(
        "flex flex-col",
        "md:w-[54.8rem] md:flex-row",
        "xl:w-[35rem] xl:flex-col"
      )}>
      <h1
        className={clsx(
          "mb-[2.4rem] font-primary text-[2.4rem] font-bold uppercase leading-[3.6rem] tracking-[0.854rem] text-primary-800",
          "xl:mb-[3.2rem]"
        )}>
        In Box
      </h1>
      <div
        className={clsx(
          "flex flex-col gap-y-[0.8rem]",
          "md:ml-auto",
          "xl:ml-0"
        )}>
        {includes.map((item, index) => {
          return (
            <p
              className={clsx(
                "font-primary text-[1.5rem] font-medium leading-[2.5rem]"
              )}
              key={`in-box-${index}`}>
              <span
                className={clsx(
                  "mr-[2.1rem] text-primary-500"
                )}>{`${item.quantity}x`}</span>
              <span
                className={clsx(
                  "text-primary-800 opacity-50 mix-blend-normal"
                )}>
                {item.item}
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
