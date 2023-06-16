import clsx from "clsx";
import type { HTMLAttributes } from "react";

import styles from "./hero-content.module.scss";

export type HeroContentProps = HTMLAttributes<HTMLDivElement>;
export default function HeroContent({ className }: HeroContentProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <h2>NEW PRODUCT</h2>
      <h1>XX99 Mark II HeadphoneS</h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <button type="button">See Product</button>
    </div>
  );
}
