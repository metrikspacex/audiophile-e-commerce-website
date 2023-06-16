import clsx from "clsx";

import Thumbnails from "../../components/thumbnails/thumbnails";
import useWidth from "../../hooks/useWidth";
import styles from "./home.module.scss";

export default function HomePage() {
  const width = useWidth();

  return (
    <>
      <section
        aria-label="thumbnail of some of our products"
        className={clsx(styles.thumbnails)}
        role="img">
        <Thumbnails />
      </section>

      <section aria-label="zx9 speaker" className={clsx(styles.zx9)} role="img">
        <img
          alt="circle pattern"
          className={clsx(styles.zx9__underlay)}
          src="/home/desktop/pattern-circles.svg"
        />
        <img
          alt="speaker zx9"
          className={clsx(styles.zx9__product)}
          src="/home/mobile/image-speaker-zx9.png"
        />
        <h1>ZX9 SPEAKER</h1>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button type="button">See Product</button>
      </section>

      <section aria-label="zx7 speaker" className={clsx(styles.zx7)} role="img">
        <img
          alt="speaker zx7"
          className={clsx(styles.zx7__product)}
          src="/home/mobile/image-speaker-zx7.jpg"
        />
        <h1>ZX7 SPEAKER</h1>
        <button type="button">See Product</button>
      </section>

      <section
        aria-label="yx1 earphones"
        className={clsx(styles.yx1)}
        role="img">
        <img
          alt="earphones yx1"
          className={clsx(styles.yx1__product)}
          src="/home/mobile/image-earphones-yx1.jpg"
        />

        <div>
          <h1>YX1 EARPHONES</h1>
          <button type="button">See Product</button>
        </div>
      </section>

      <section aria-label="about" className={clsx(styles.about)} role="article">
        <img
          alt="earphones yx1"
          className={clsx(styles.best__gear)}
          src="/shared/mobile/image-best-gear.jpg"
        />
        <h1>
          Bringing you the <span>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </section>
    </>
  );
}
