import clsx from "clsx";

import BestGear from "../../components/cards/best-gear-card";
import CategoryCard from "../../components/cards/category-card";
import YX1Earphones from "../../components/cards/yx1-earphones-card.tsx";
import ZX7Speaker from "../../components/cards/zx7-speaker-card.tsx";
import ZX9Speaker from "../../components/cards/zx9-speaker-card";
import useWidth from "../../hooks/useWidth.ts";

export default function HomePage() {
  const width = useWidth();

  return (
    <>
      <section
        aria-label="category selection"
        className={clsx(
          "z-[3] mx-auto mt-[4rem] w-full max-w-[37.5rem] rounded-[0.8rem] bg-primary-100 p-[5.2rem_2.4rem_0_2.4rem]",
          "md:flex md:max-w-[68.9rem] md:justify-around md:gap-x-[1rem] md:p-[5.2rem_0_0_0]",
          "xl:mt-[12rem] xl:max-w-[110rem] xl:p-[7.9rem_0_0_0]"
        )}
        role="navigation">
        <CategoryCard
          alt="headphones"
          height={width >= 1440 ? "16rem" : "10.4rem"}
          src="/shared/desktop/image-category-thumbnail-headphones.png"
          to="/category/headphones"
          width={width >= 1440 ? "12.2rem" : "8rem"}
        />
        <CategoryCard
          alt="speakers"
          height={width >= 1440 ? "14.6rem" : "10.1rem"}
          src="/shared/desktop/image-category-thumbnail-speakers.png"
          to="/category/speakers"
          width={width >= 1440 ? "12.1rem" : "8.4rem"}
        />
        <CategoryCard
          alt="earphones"
          height={width >= 1440 ? "16.1rem" : "10.4rem"}
          src="/shared/desktop/image-category-thumbnail-earphones.png"
          to="/category/earphones"
          width={width >= 1440 ? "17.8rem" : "10.3rem"}
        />
      </section>
      <section
        aria-label="products"
        className={clsx(
          "isolate mx-auto mt-[12rem] flex max-w-[32.7rem] flex-col gap-y-[2.4rem]",
          "md:max-w-[68.9rem]",
          "xl:mt-[16.8rem] xl:max-w-[110rem] xl:gap-y-[4.8rem]"
        )}
        role="article">
        <ZX9Speaker width={width} />
        <ZX7Speaker width={width} />
        <YX1Earphones width={width} />
      </section>
      <section
        aria-label="image with article of why we have the best audio gear"
        className={clsx(
          "mx-auto my-[12rem] max-w-[32.7rem]",
          "md:max-w-[68.9rem]",
          "xl:my-[20rem] xl:max-w-[110rem]"
        )}
        role="contentinfo">
        <BestGear width={width} />
      </section>
    </>
  );
}
