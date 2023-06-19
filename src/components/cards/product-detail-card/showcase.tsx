import clsx from "clsx";
import { type HTMLAttributes, useState } from "react";

import useCart from "../../../hooks/useStore";

export type ShowcaseProps = HTMLAttributes<HTMLDivElement> & {
  _id: Id;
  _new: New;
  category: Category;
  categoryImage: CategoryImage;
  description: Description;
  name: Name;
  price: Price;
  width: number;
};
export default function Showcase({
  _id,
  _new,
  category,
  categoryImage,
  description,
  name,
  price,
  width,
}: ShowcaseProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const { addItemToCart } = useCart();

  let productSrc = categoryImage.mobile;
  if (width < 1440 && width >= 768) {
    productSrc = categoryImage.tablet;
  } else if (width >= 1440) {
    productSrc = categoryImage.desktop;
  }

  const onClick = () => {
    addItemToCart({
      categoryImage: {
        desktop: categoryImage.desktop,
        mobile: categoryImage.mobile,
        tablet: categoryImage.tablet,
      },
      id: _id,
      name,
      price,
      quantity,
    });
  };

  return (
    <div
      className={clsx(
        "grid w-full grid-cols-[1fr] grid-rows-[32.7rem_3.2rem_1fr]",
        {
          "grid-rows-[32.7rem_4rem_1fr]": !_new,
        },
        "md:grid-cols-[28.1rem_6.9rem_1fr] md:grid-rows-[48rem]",
        "xl:grid-cols-[54rem_12.5rem_1fr] xl:grid-rows-[1fr]"
      )}>
      <img
        alt={name}
        className={clsx(
          "col-1 row-1 h-full w-full rounded-[0.8rem]",
          "md:col-1 md:row-1"
        )}
        src={productSrc}
      />

      <div className={clsx("col-1 row-3", "md:col-3 md:row-1 md:my-auto")}>
        {_new ? (
          <h2
            className={clsx(
              "mb-[2.4rem] font-primary text-[1.4rem] font-normal uppercase leading-[1.9rem] tracking-[1rem] text-primary-500"
            )}>
            NEW PRODUCT
          </h2>
        ) : null}
        <h1
          className={clsx(
            "mb-[2.4rem] font-primary text-[2.8rem] font-bold uppercase leading-[3.8rem] tracking-[0.1rem]"
          )}>
          <span className={clsx("block")}>
            {name.split(" ").slice(0, -1).join(" ")}
          </span>
          <span className={clsx("block")}>{category}</span>
        </h1>
        <p
          className={clsx(
            "mb-[2.4rem] font-primary text-[1.5rem] font-medium leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal"
          )}>
          {description}
        </p>
        <p
          className={clsx(
            "mb-[3.1rem] font-primary text-[1.8rem] font-bold uppercase leading-[2.5rem] tracking-[0.13rem] text-primary-800"
          )}>
          {`$ ${price}`}
        </p>
        <div className={clsx("flex h-[4.8rem] w-full gap-x-[1.6rem]")}>
          <span
            className={clsx(
              "grid h-full w-[12rem] grid-cols-[1fr_2fr_1fr] grid-rows-[1fr] place-items-center bg-primary-300 text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[0.1rem] text-primary-800"
            )}>
            <button
              className={clsx("h-full w-full opacity-25 mix-blend-normal")}
              type="button"
              onClick={() => setQuantity((ps) => (ps > 0 ? ps - 1 : 0))}>
              -
            </button>
            <span>{quantity}</span>
            <button
              className={clsx("h-full w-full opacity-25 mix-blend-normal")}
              type="button"
              onClick={() => setQuantity((ps) => ps + 1)}>
              +
            </button>
          </span>
          <span className={clsx("h-full w-[16rem]")}>
            <button
              className={clsx(
                "h-full w-full bg-primary-500 font-primary text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[0.1rem] text-primary-100"
              )}
              type="button"
              onClick={onClick}>
              ADD TO CART
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
