import clsx from "clsx";
import { Link } from "react-router-dom";

import CheckoutForm from "../../components/checkout/checkout-form";
import CheckoutSummary from "../../components/checkout/checkout-summary";
import useStore from "../../hooks/useStore";
import useWidth from "../../hooks/useWidth";

export default function CheckoutPage() {
  const width = useWidth();
  const { state } = useStore();

  return (
    <>
      <section
        className={clsx(
          "mx-auto mb-[2.4rem] mt-[1.6rem] w-full max-w-[32.7rem] bg-primary-200",
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
        aria-label="checkout form"
        className={clsx(
          "mx-auto mb-[2.4rem] mt-[1.6rem] w-full max-w-[32.7rem] bg-primary-200",
          "md:mt-[3.3rem] md:max-w-[68.9rem]",
          "xl:mt-[7.9rem] xl:max-w-[110rem]"
        )}
        role="form">
        <CheckoutForm />
      </section>
      <section
        aria-label="checkout summary"
        className={clsx(
          "mx-auto mb-[2.4rem] mt-[1.6rem] w-full max-w-[32.7rem] bg-primary-200",
          "md:mt-[3.3rem] md:max-w-[68.9rem]",
          "xl:mt-[7.9rem] xl:max-w-[110rem]"
        )}
        role="presentation">
        <CheckoutSummary cart={state.cart} />
      </section>
    </>
  );
}
