import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type GalleryProps = HTMLAttributes<HTMLDivElement> & {
  gallery: Gallery;
  name: Name;
  width: number;
};
export default function Gallery({ gallery, name, width }: GalleryProps) {
  let recommendedFirstSrc = gallery.first.mobile;
  let recommendedSecondSrc = gallery.second.mobile;
  let recommendedThirdSrc = gallery.third.mobile;

  if (width < 1440 && width >= 768) {
    recommendedFirstSrc = gallery.first.tablet;
    recommendedSecondSrc = gallery.second.tablet;
    recommendedThirdSrc = gallery.third.tablet;
  } else if (width >= 1440) {
    recommendedFirstSrc = gallery.first.desktop;
    recommendedSecondSrc = gallery.second.desktop;
    recommendedThirdSrc = gallery.third.desktop;
  }

  return (
    <div
      className={clsx(
        "grid h-[75.6rem] grid-cols-[32.7rem] grid-rows-[repeat(3,_max-content)] gap-y-[2rem]",
        "md:h-[36.8rem] md:grid-cols-[1fr_1fr] md:grid-rows-[1fr_1fr] md:gap-x-[1.8rem] md:gap-y-[2rem]",
        "xl:h-[59.2rem] xl:gap-x-[3rem] xl:gap-y-[3.2rem]"
      )}>
      <img
        alt={name}
        className={clsx(
          "col-1 row-1 h-full w-full rounded-[0.8rem]",
          "md:col-1 md:row-1"
        )}
        src={recommendedFirstSrc}
      />
      <img
        alt={name}
        className={clsx(
          "col-1 row-2 h-full w-full rounded-[0.8rem] ",
          "md:col-1 md:row-2"
        )}
        src={recommendedSecondSrc}
      />
      <img
        alt={name}
        className={clsx(
          "col-1 row-3 h-full w-full rounded-[0.8rem] ",
          "md:col-2 md:row-full"
        )}
        src={recommendedThirdSrc}
      />
    </div>
  );
}
