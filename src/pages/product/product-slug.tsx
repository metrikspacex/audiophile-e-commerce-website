import clsx from "clsx";
import { Link, useLoaderData } from "react-router-dom";

import BestGear from "../../components/cards/best-gear-card";
import CategoryCard from "../../components/cards/category-card";
import Features from "../../components/cards/product-detail-card/features";
import Gallery from "../../components/cards/product-detail-card/gallery";
import InBox from "../../components/cards/product-detail-card/in-box";
import Recommended from "../../components/cards/product-detail-card/recommended";
import Showcase from "../../components/cards/product-detail-card/showcase";
import useStore from "../../hooks/useStore";
import useWidth from "../../hooks/useWidth";

export default function ProductSlug() {
  const product = useLoaderData() as Product;
  const width = useWidth();
  const { state } = useStore();

  return (
    <>
      <section
        className={clsx(
          "mx-auto mt-[1.6rem] w-full max-w-[32.7rem] bg-primary-100",
          "md:mt-[3.3rem] md:max-w-[68.9rem]",
          "xl:mt-[7.9rem] xl:max-w-[110rem]"
        )}
        role="link">
        {width >= 768 || !state.cartModal ? (
          <Link
            className={clsx(
              "font-primary text-[1.5rem] font-medium leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal"
            )}
            to="/">
            Go back
          </Link>
        ) : null}
      </section>
      <section
        aria-label={`showcase of ${product.name}`}
        className={clsx(
          "mx-auto mt-[2.4rem] w-full max-w-[32.7rem] bg-primary-100",
          "md:mt-[2.4rem] md:max-w-[68.9rem]",
          "xl:mt-[5.6rem] xl:max-w-[110rem]"
        )}
        role="banner">
        <Showcase
          _id={product.id}
          _new={product.new}
          categoryImage={product.categoryImage}
          description={product.description}
          name={product.name}
          price={product.price}
          width={width}
        />
      </section>
      <div
        className={clsx(
          "mx-auto mt-[8.8rem] flex w-full max-w-[32.7rem] flex-col justify-between gap-y-[11.3rem] bg-primary-100",
          "md:mt-[12rem] md:max-w-[68.9rem] md:gap-y-[12rem]",
          "xl:mt-[16rem] xl:max-w-[110rem] xl:flex-row"
        )}>
        <section
          aria-label={`feature information of ${product.name}`}
          className={clsx("")}
          role="contentinfo">
          <Features features={product.features} />
        </section>
        <section
          aria-label={`pictures of ${product.name}`}
          className={clsx("")}
          role="img">
          <InBox includes={product.includes} />
        </section>
      </div>
      <section
        className={clsx(
          "mx-auto mt-[8.8rem] w-full max-w-[32.7rem] bg-primary-100",
          "md:mt-[12rem] md:max-w-[68.9rem]",
          "xl:mt-[16rem] xl:max-w-[110rem]"
        )}
        role="link">
        <Gallery gallery={product.gallery} name={product.name} width={width} />
      </section>
      <section
        className={clsx(
          "mx-auto my-[12rem] w-full max-w-[32.7rem] bg-primary-100",
          "md:my-[12rem] md:max-w-[68.9rem]",
          "xl:my-[16rem] xl:max-w-[110rem]"
        )}
        role="link">
        <Recommended others={product.others} width={width} />
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
        aria-label="we have the best audio gear"
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
