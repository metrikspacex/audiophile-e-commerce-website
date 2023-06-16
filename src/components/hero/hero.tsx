import clsx from "clsx";
import type { HTMLAttributes } from "react";

import HeroContent from "./content/hero-content";
import styles from "./hero.module.scss";

export type HeroProps = HTMLAttributes<HTMLImageElement> & {
  width: number;
};
export default function Hero({ className, width }: HeroProps) {
  if (width < 768) {
    return (
      <>
        <img
          alt="logo"
          className={clsx(styles.root, className)}
          src="/home/mobile/image-header.jpg"
        />
        <HeroContent />
      </>
    );
  } else if (width >= 768 && width < 1440) {
    return (
      <img
        alt="logo"
        className={clsx(styles.root, className)}
        src="/home/tablet/image-header.jpg"
      />
    );
  }

  return (
    <img
      alt="logo"
      className={clsx(styles.root, className)}
      src="/home/desktop/image-header.jpg"
    />
  );
}
