import clsx from "clsx";
import type { HTMLAttributes } from "react";

import useStore from "../../hooks/useStore";

export type CheckoutSummaryProps = HTMLAttributes<HTMLDivElement> & {
  cart: CartItem[];
};
export default function CheckoutSummary({ cart }: CheckoutSummaryProps) {
  const FLATSHIPPING = 50;
  const TAXRATE = 0.2;
  const { setCheckoutModal } = useStore();

  const computeTotal = () => {
    if (cart.length === 0) {
      return {
        flatShipping: 0,
        flatTotal: 0,
        grandTotal: 0,
        vatTotal: 0,
      };
    }

    const flatTotal = cart
      .map((item) => item.price * item.quantity)
      .reduce((previous, current) => previous + current);
    // I have no idea what this is
    const vatTotal = Math.floor(flatTotal * TAXRATE);
    const grandTotal = FLATSHIPPING + flatTotal;
    return {
      flatShipping: FLATSHIPPING,
      flatTotal,
      grandTotal,
      vatTotal,
    };
  };

  return (
    <div
      className={clsx(
        "mb-[9.7rem] w-full rounded-[0.8rem] bg-primary-100 p-[3.2rem_2.4rem_3.2rem_2.4rem]",
        "md:mb-[11.6rem]"
      )}>
      <h1
        className={clsx(
          "mb-[3.1rem] font-primary text-[1.8rem] font-bold uppercase leading-[2.5rem] tracking-[0.13rem] text-primary-800"
        )}>
        Summary
      </h1>

      <div className={clsx("mb-[3.2rem]")}>
        {cart.map((item, index) => {
          return (
            <div
              className={clsx(
                "grid grid-cols-[6.4rem_1fr_1.5rem] grid-rows-[6.4rem] items-center [&:not(:last-child)]:mb-[2.4rem]"
              )}
              key={`checkout-summary-${index}`}>
              <img
                alt={item.name}
                className={clsx("h-full w-full")}
                src={item.categoryImage.mobile}
              />
              <span
                className={clsx("ml-[1.6rem] flex flex-col justify-between")}>
                <h1
                  className={clsx(
                    "font-primary text-[1.5rem] font-bold leading-[2.5rem] text-primary-800"
                  )}>
                  {item.name.split(" ").slice(0, 1).join(" ")}
                </h1>
                <span
                  className={clsx(
                    "font-primary text-[1.4rem] font-bold leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal"
                  )}>{`$ ${item.price}`}</span>
              </span>
              <span
                className={clsx(
                  "font-primary text-[1.5rem] font-bold leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal"
                )}>
                {`x${item.quantity}`}
              </span>
            </div>
          );
        })}
      </div>

      <div className={clsx("")}>
        <div className={clsx("mb-[0.8rem] flex items-center justify-between")}>
          <span
            className={clsx(
              "font-primary text-[1.5rem] font-medium uppercase leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal"
            )}>
            total
          </span>
          <span
            className={clsx(
              "font-primary text-[1.8rem] font-bold uppercase leading-[2.5rem] text-primary-800"
            )}>{`$ ${computeTotal().flatTotal}`}</span>
        </div>

        <div className={clsx("mb-[0.8rem] flex items-center justify-between")}>
          <span
            className={clsx(
              "font-primary text-[1.5rem] font-medium uppercase leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal"
            )}>
            shipping
          </span>
          <span
            className={clsx(
              "font-primary text-[1.8rem] font-bold uppercase leading-[2.5rem] text-primary-800"
            )}>{`$ ${computeTotal().flatShipping}`}</span>
        </div>

        <div className={clsx("mb-[2.4rem] flex items-center justify-between")}>
          <span
            className={clsx(
              "font-primary text-[1.5rem] font-medium uppercase leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal"
            )}>
            vat (included)
          </span>
          <span
            className={clsx(
              "font-primary text-[1.8rem] font-bold uppercase leading-[2.5rem] text-primary-800"
            )}>{`$ ${computeTotal().vatTotal}`}</span>
        </div>

        <div className={clsx("mb-[3.2rem] flex items-center justify-between")}>
          <span
            className={clsx(
              "font-primary text-[1.5rem] font-medium uppercase leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal"
            )}>
            grand total
          </span>
          <span
            className={clsx(
              "font-primary text-[1.8rem] font-bold uppercase leading-[2.5rem] text-primary-400"
            )}>{`$ ${computeTotal().grandTotal}`}</span>
        </div>

        <button
          className={clsx(
            "h-[4.8rem] w-full bg-primary-500 font-primary text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[0.1rem] text-primary-100"
          )}
          type="button"
          onClick={() => {
            setCheckoutModal();
          }}>
          CONTINUE & PAY
        </button>
      </div>
    </div>
  );
}
