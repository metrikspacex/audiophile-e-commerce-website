import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./thumbnails.module.scss";

export default function Thumbnails() {
  return (
    <>
      <div className={clsx(styles.container)}>
        <img
          alt="thumbnail headphones"
          className={clsx(styles.thumbnail)}
          src="/shared/desktop/image-category-thumbnail-headphones.png"
        />
        <h1 className={clsx(styles.heading)}>Headphones</h1>
        <Link className={clsx(styles.link)} to="/shop">
          Shop <img alt="" src="/shared/desktop/icon-arrow-right.svg" />
        </Link>
      </div>

      <div className={clsx(styles.container)}>
        <img
          alt="thumbnail speakers"
          className={clsx(styles.thumbnail)}
          src="/shared/desktop/image-category-thumbnail-speakers.png"
        />
        <h1 className={clsx(styles.heading)}>Headphones</h1>
        <Link className={clsx(styles.link)} to="/shop">
          Shop <img alt="" src="/shared/desktop/icon-arrow-right.svg" />
        </Link>
      </div>

      <div className={clsx(styles.container)}>
        <img
          alt="thumbnail earphones"
          className={clsx(styles.thumbnail)}
          src="/shared/desktop/image-category-thumbnail-earphones.png"
        />
        <h1 className={clsx(styles.heading)}>Headphones</h1>
        <Link className={clsx(styles.link)} to="/shop">
          Shop <img alt="" src="/shared/desktop/icon-arrow-right.svg" />
        </Link>
      </div>
    </>
  );
}
