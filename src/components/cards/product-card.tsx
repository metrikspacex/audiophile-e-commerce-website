import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { Link, useLocation } from "react-router-dom";

export type ProductCardProps = HTMLAttributes<HTMLDivElement> & {
  _id: Id;
  _new: New;
  category: Category;
  categoryImage: CategoryImage;
  description: Description;
  name: Name;
  slug: Slug;
  width: number;
};
export default function ProductCard({
  _id,
  _new,
  category,
  categoryImage,
  description,
  name,
  slug,
  width,
}: ProductCardProps) {
  const { pathname } = useLocation();

  let productSrc = categoryImage.mobile;
  if (width < 1440 && width >= 768) {
    productSrc = categoryImage.tablet;
  } else if (width >= 1440) {
    productSrc = categoryImage.desktop;
  }

  const getName = () => {
    return slug
      .split("-")
      .filter((item) => item !== "headphones")
      .join(" ");
  };

  return (
    <div
      className={clsx(
        "grid w-full grid-cols-[1fr] grid-rows-[35.2rem_3.2rem_1fr] rounded-[0.8rem]",
        "md:grid-rows-[35.2rem_5.2rem_1fr]",
        {
          "xl:grid-cols-[1fr_12.5rem_54rem] xl:grid-rows-[56rem]":
            _id % 2 !== 0,
          "xl:grid-cols-[54rem_12.5rem_1fr] xl:grid-rows-[56rem]":
            _id % 2 === 0,
        }
      )}>
      <img
        alt={name}
        className={clsx("col-1 row-1 h-full w-full", {
          "xl:col-1 xl:row-1": _id % 2 === 0,
          "xl:col-3 xl:row-1": _id % 2 !== 0,
        })}
        src={productSrc}
      />
      <div
        className={clsx(
          "col-1 row-3 h-full w-full",
          "xl:flex xl:flex-col xl:justify-center",
          {
            "xl:col-1 xl:row-1": _id % 2 !== 0,
            "xl:col-3 xl:row-1": _id % 2 === 0,
          }
        )}>
        {_new ? (
          <h2
            className={clsx(
              "mb-[2.4rem] text-center font-primary text-[1.4rem] font-normal uppercase leading-[1.9rem] tracking-[1rem] text-primary-500",
              "md:mb-[1.6rem]",
              "xl:text-justify"
            )}>
            NEW PRODUCT
          </h2>
        ) : null}
        <h1
          className={clsx(
            "mb-[2.4rem] text-center font-primary text-[2.8rem] font-bold uppercase leading-[3.8rem] tracking-[0.1rem] text-primary-800",
            "md:mb-[3.2rem] md:text-[4rem] md:leading-[4.4rem] md:tracking-[0.143rem]",
            "xl:text-justify"
          )}>
          <span className={clsx("block")}>{getName()}</span>
          <span className={clsx("block")}>{category}</span>
        </h1>
        <p
          className={clsx(
            "mx-auto mb-[2.4rem] max-w-[32.7rem] text-center font-primary text-[1.5rem] font-medium leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal",
            "md:max-w-[52.7rem]",
            "xl:text-justify"
          )}>
          {description}
        </p>
        <Link
          state={{ from: pathname }}
          to={`/audiophile-e-commerce-website/product/${slug}`}>
          <button
            className={clsx(
              "mx-auto block h-[4.8rem] w-[16rem] bg-primary-500 font-primary text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[0.1rem] text-primary-100",
              "xl:mx-0"
            )}
            type="button">
            See Product
          </button>
        </Link>
      </div>
    </div>
  );
}
