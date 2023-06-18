import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type FeaturesProps = HTMLAttributes<HTMLDivElement> & {
  features: Features;
};
export default function Features({ features }: FeaturesProps) {
  return (
    <div className={clsx("xl:max-w-[63.5rem]")}>
      <h1
        className={clsx(
          "mb-[2.4rem] font-primary text-[2.4rem] font-bold uppercase leading-[3.6rem] tracking-[0.0857rem] text-primary-800",
          "md:mb-[3.2rem] md:text-[3.2rem]"
        )}>
        Features
      </h1>
      {features.split("\n\n").map((item, index) => {
        return (
          <p
            className={clsx(
              "font-primary text-[1.5rem] font-medium leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal [&:not(:last-child)]:mb-[2.5rem]"
            )}
            key={`featured-pg-${index}`}>
            {item}
          </p>
        );
      })}
    </div>
  );
}
