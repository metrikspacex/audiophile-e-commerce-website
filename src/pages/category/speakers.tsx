import clsx from "clsx";
import { useEffect, useState } from "react";

import content from "../../assets/content.json";
import BestGear from "../../components/cards/best-gear-card";
import CategoryCard from "../../components/cards/category-card";
import ProductCard from "../../components/cards/product-card";
import useWidth from "../../hooks/useWidth";

export default function SpeakersPage() {
  const [data, setData] = useState<Product[]>([]);
  const width = useWidth();

  useEffect(() => {
    const filterNew = content.filter(
      (item) => item.category === "speakers" && item.new
    );
    const filterOld = content.filter(
      (item) => item.category === "speakers" && !item.new
    );
    setData([...filterNew, ...filterOld]);
  }, []);

  return (
    <>
      <section
        aria-label="collection of our speaker products"
        className={clsx(
          "mx-auto mt-[6.4rem] flex w-full max-w-[32.7rem] flex-col gap-y-[12rem] bg-primary-100",
          "md:mt-[12rem] md:max-w-[68.9rem]",
          "xl:mt-[16rem] xl:max-w-[110rem] xl:gap-y-[16rem]"
        )}
        role="contentinfo">
        {data.map((item) => {
          return (
            <ProductCard
              _id={item.id}
              _new={item.new}
              category={item.category}
              categoryImage={item.categoryImage}
              description={item.description}
              key={item.id}
              name={item.name}
              slug={item.slug}
              width={width}
            />
          );
        })}
      </section>
      <section
        aria-label="category selection"
        className={clsx(
          "mx-auto mt-[12rem] w-full max-w-[32.7rem] rounded-[0.8rem] bg-primary-100 pt-[5.2rem]",
          "md:flex md:max-w-[68.9rem] md:justify-around md:gap-x-[1rem]",
          "xl:mt-[16rem] xl:max-w-[110rem] xl:pt-[7.9rem]"
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
        aria-label="image with article of why we have the best audio gear"
        className={clsx(
          "mx-auto my-[12rem] max-w-[32.7rem]",
          "md:max-w-[68.9rem]",
          "xl:my-[16rem] xl:max-w-[110rem]"
        )}
        role="contentinfo">
        <BestGear width={width} />
      </section>
    </>
  );
}
