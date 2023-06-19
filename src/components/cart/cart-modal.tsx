import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

import useCart from "../../hooks/useStore";

export default function CartModal() {
  const { deleteCart, state, updateCart } = useCart();
  const { pathname } = useLocation();

  const computeCost = () => {
    if (state.cart.length === 0) {
      return 0;
    }

    return state.cart
      .map((item) => item.price * item.quantity)
      .reduce((previous, current) => previous + current);
  };

  return (
    <div
      className={clsx(
        "absolute right-0 top-[9rem] mr-[2.4rem] mt-[2.4rem] block w-[32.7rem] rounded-[0.8rem] bg-primary-100 p-[3.1rem_2.8rem_3.1rem_2.8rem]",
        "md:mr-0 md:w-[37.7rem] md:p-[3.1rem_3.3rem_3.1rem_3.3rem]"
      )}>
      <div
        className={clsx(
          "mb-[3.2rem] grid grid-cols-[repeat(2,max-content)] grid-rows-[1fr] justify-between"
        )}>
        <h1
          className={clsx(
            "font-primary text-[1.8rem] font-bold uppercase leading-[2.5rem] tracking-[0.13rem] text-primary-800"
          )}>{`Cart (${state.cart.length})`}</h1>
        <button
          className={clsx(
            "font-primary text-[1.5rem] font-medium leading-[2.5rem] text-primary-800 underline opacity-50 mix-blend-normal"
          )}
          type="button"
          onClick={() => deleteCart()}>
          Remove all
        </button>
      </div>

      <div className={clsx("mb-[3.2rem]")}>
        {state.cart.map((item, index) => {
          return (
            <div
              className={clsx(
                "grid grid-cols-[6.4rem_7.6rem_9.6rem] grid-rows-[6.4rem] items-center justify-between [&:not(:last-child)]:mb-[2.4rem]"
              )}
              key={`cart-modal-${index}`}>
              <img
                alt={item.name}
                className={clsx("h-full w-full rounded-[0.8rem]")}
                src={item.categoryImage.mobile}
              />

              <div className={clsx("h-[5rem] w-full")}>
                <h1
                  className={clsx(
                    "font-primary text-[1.5rem] font-bold leading-[2.5rem] text-primary-800 "
                  )}>
                  {item.name.split(" ").slice(0, 1).join(" ")}
                </h1>
                <p
                  className={clsx(
                    "font-primary text-[1.4rem] font-bold leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal"
                  )}>{`$ ${item.price}`}</p>
              </div>
              <span
                className={clsx(
                  "my-auto grid h-[3.2rem] w-full grid-cols-[1fr_2fr_1fr] grid-rows-[1fr] place-items-center bg-primary-300 text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[0.1rem] text-primary-800"
                )}>
                <button
                  className={clsx("h-full w-full opacity-25 mix-blend-normal")}
                  type="button"
                  onClick={() => {
                    updateCart({
                      categoryImage: item.categoryImage,
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      quantity: item.quantity - 1,
                    });
                  }}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className={clsx("h-full w-full opacity-25 mix-blend-normal")}
                  type="button"
                  onClick={() => {
                    updateCart({
                      categoryImage: item.categoryImage,
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      quantity: item.quantity + 1,
                    });
                  }}>
                  +
                </button>
              </span>
            </div>
          );
        })}
      </div>

      <div
        className={clsx(
          "mb-[2.4rem] grid grid-cols-[repeat(2,max-content)] grid-rows-[1fr] justify-between"
        )}>
        <p
          className={clsx(
            "font-primary text-[1.5rem] font-medium leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal"
          )}>
          TOTAL
        </p>
        <p
          className={clsx(
            "font-primary text-[1.8rem] font-bold uppercase leading-[2.5rem] text-primary-800"
          )}>
          {`$ ${computeCost()}`}
        </p>
      </div>

      <Link state={{ from: pathname }} to="/checkout">
        <button
          className={clsx(
            "h-[4.8rem] w-full bg-primary-500 font-primary text-[1.3rem] font-bold uppercase leading-[1.8rem] tracking-[0.1rem] text-primary-100"
          )}
          type="button">
          checkout
        </button>
      </Link>
    </div>
  );
}
