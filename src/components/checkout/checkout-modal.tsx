import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

export type CheckoutModalProps = HTMLAttributes<HTMLDivElement> & {
  cart: CartItem[];
  width: number;
};
export default function CheckoutModal({ cart, width }: CheckoutModalProps) {
  let productSrc = cart[0].categoryImage.mobile;
  if (width < 1440 && width >= 768) {
    productSrc = cart[0].categoryImage.tablet;
  } else if (width >= 1440) {
    productSrc = cart[0].categoryImage.desktop;
  }

  return (
    <div
      className={clsx(
        "absolute left-[50%] top-[22.4rem] z-[4] mx-auto w-[32.7rem] translate-x-[-50%] rounded-[0.8rem] bg-primary-100 p-[3.2rem]",
        "md:w-[54rem] md:p-[4.8rem]"
      )}>
      {/*  */}
      <img
        alt=""
        className={clsx("mb-[2.3rem] h-[6.4rem] w-[6.4rem]", "md:mb-[3.3rem]")}
        src="/audiophile-e-commerce-website/checkout/icon-order-confirmation.svg"
      />
      <h1
        className={clsx(
          "mb-[1.6rem] font-primary text-[2.4rem] font-bold uppercase leading-[2.8rem] tracking-[0.857px] text-primary-800",
          "md:text-[3.2rem] md:leading-[3.6rem]",
          "md:mb-[2.4rem]"
        )}>
        <span className={clsx("block")}>THANK YOU</span>
        <span className={clsx("block")}>FOR YOUR ORDER</span>
      </h1>
      <p
        className={clsx(
          "mb-[2.4rem] font-primary text-[1.5rem] font-medium leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal",
          "md:mb-[3.3rem]"
        )}>
        You will receive an email confirmation shortly.
      </p>
      {/*  */}
      <div
        className={clsx(
          "mb-[2.3rem] grid grid-cols-[1fr] grid-rows-[repeat(2,_max-content)] rounded-[0.8rem] bg-primary-300",
          "md:mb-[4.6rem] md:grid-cols-[1fr_19.8rem] md:grid-rows-[14rem]"
        )}>
        {/* Preview */}
        <div
          className={clsx(
            "col-1 row-1 rounded-t-[0.8rem] px-[2.4rem] pt-[2.4rem]",
            "p-[2.4rem] md:col-1 md:row-1 md:rounded-l-[0.8rem] md:rounded-tr-[0.8rem]"
          )}>
          <div
            className={clsx(
              "grid grid-cols-[5rem_1fr_1.5rem] grid-rows-[1fr]"
            )}>
            <img
              alt={cart[0].name}
              className={clsx("mb-[1.2rem] h-full w-full", "md:mb-0")}
              src={productSrc}
            />
            <h1
              className={clsx(
                "ml-[1.6rem] flex h-[5rem] flex-col justify-between"
              )}>
              <span
                className={clsx(
                  "font-primary text-[1.5rem] font-bold leading-[2.5rem] text-primary-800"
                )}>
                {cart[0].name.split(" ").slice(0, -1).join(" ")}
              </span>
              <span
                className={clsx(
                  "font-primary text-[1.4rem] font-bold leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal"
                )}>
                $ {cart[0].price}
              </span>
            </h1>
            <span
              className={clsx(
                "font-primary text-[1.5rem] font-bold leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal"
              )}>
              x{cart[0].quantity}
            </span>
          </div>
          <hr
            className={clsx(
              "mb-[1.2rem] bg-primary-800 px-[2.4rem]",
              "my-[1.2rem]"
            )}
          />
          <p
            className={clsx(
              "mb-[2.5rem] text-center font-primary text-[1.2rem] font-bold leading-[1.6rem] tracking-[-0.214px] text-primary-800 opacity-50 mix-blend-normal",
              "md:mb-0"
            )}>{`and ${cart.length - 1} other item(s)`}</p>
        </div>
        {/* Grand total */}
        <div
          className={clsx(
            "col-1 row-2 rounded-b-[0.8rem] bg-primary-800 p-[1.5rem_2.4rem_1.5rem_2.4rem]",
            "flex flex-col justify-center md:col-2 md:row-1 md:rounded-r-[0.8rem] md:rounded-bl-[0]"
          )}>
          <h1
            className={clsx(
              "mb-[0.8rem] font-primary text-[1.5rem] font-medium uppercase leading-[2.5rem] text-primary-100 opacity-50 mix-blend-normal"
            )}>
            grand total
          </h1>
          <span
            className={clsx(
              "font-primary text-[1.8rem] font-bold uppercase leading-[2.5rem] text-primary-100"
            )}>
            $ 5446
          </span>
        </div>
      </div>
      {/*  */}
      <Link to="/audiophile-e-commerce-website/">
        <button
          className={clsx(
            "h-[4.8rem] w-full bg-primary-500 font-primary text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[1px] text-primary-100"
          )}
          type="button">
          BACK TO HOME
        </button>
      </Link>
    </div>
  );
}
