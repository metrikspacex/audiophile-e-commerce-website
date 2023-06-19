import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

import CheckoutForm from "../../components/checkout/checkout-form";
import CheckoutSummary from "../../components/checkout/checkout-summary";
import useStore from "../../hooks/useStore";
import useWidth from "../../hooks/useWidth";

export default function CheckoutPage() {
  const location = useLocation();
  const width = useWidth();
  const { state } = useStore();

  return (
    <>
      <section
        className={clsx(
          "mx-auto mb-[2.4rem] mt-[1.6rem] w-full max-w-[32.7rem] bg-primary-200",
          "md:mt-[4.8rem] md:max-w-[68.9rem]",
          "xl:mb-[3.8rem] xl:mt-[7.9rem] xl:max-w-[110rem]"
        )}
        role="link">
        {width >= 768 || !state.cartModal ? (
          <Link
            className={clsx(
              "font-primary text-[1.5rem] font-medium leading-[2.5rem] text-primary-800 opacity-50 mix-blend-normal"
            )}
            to={location.state.from === null ? location.state.from : "/"}>
            Go back
          </Link>
        ) : null}
      </section>
      <div
        className={clsx(
          "mx-auto mb-[3.2rem] w-full max-w-[32.7rem] bg-primary-200",
          "md:max-w-[68.9rem]",
          "xl:mb-[14.1rem] xl:grid xl:max-w-[110rem] xl:grid-cols-[73rem_35rem] xl:grid-rows-[1fr] xl:gap-x-[3rem]"
        )}>
        <section
          aria-label="checkout form"
          className={clsx("h-full w-full", "", "xl:col-1 xl:row-1")}
          role="form">
          <CheckoutForm />
        </section>
        <section
          aria-label="checkout summary"
          className={clsx("h-full w-full", "", "xl:col-2 xl:row-1")}
          role="presentation">
          <CheckoutSummary cart={state.cart} />
        </section>
      </div>
    </>
  );
}
