import clsx from "clsx";
import type { ChangeEvent, HTMLAttributes } from "react";
import { useState } from "react";

export type CheckoutFormProps = HTMLAttributes<HTMLFormElement> & {};
export default function CheckoutForm({}: CheckoutFormProps) {
  const [checkoutFormData, setCheckoutFormData] = useState<CheckoutFormData>({
    address: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
    email: "",
    name: "",
    paymentMethod: {
      delivery: false,
      emoney: false,
    },
    phoneNumber: "",
    zip: "",
  });

  const handlePaymentMethod = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setCheckoutFormData((ps) => {
      const _ps = { ...ps };
      let { delivery, emoney } = _ps.paymentMethod;

      if (name === "cash_on_delivery") {
        if (delivery === false) {
          if (emoney === true) {
            emoney = false;
            delivery = true;
          } else {
            delivery = true;
          }
        } else {
          delivery = false;
        }
      } else if (name === "e_money") {
        if (emoney === false) {
          if (delivery === true) {
            delivery = false;
            emoney = true;
          } else {
            emoney = true;
          }
        } else {
          emoney = false;
        }
      }

      return {
        ..._ps,
        paymentMethod: {
          delivery,
          emoney,
        },
      };
    });
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name);
    setCheckoutFormData((ps) => {
      const _ps = { ...ps };

      switch (name) {
        case "name": {
          return {
            ...ps,
            name: value,
          };
        }
        case "email_address": {
          return {
            ...ps,
            email: value,
          };
        }
        case "phone_number": {
          return {
            ...ps,
            phoneNumber: value,
          };
        }
        case "address": {
          return {
            ...ps,
            address: value,
          };
        }
        case "zip_code": {
          return {
            ...ps,
            zip: value,
          };
        }
        case "city": {
          return {
            ...ps,
            city: value,
          };
        }
        case "country": {
          return {
            ...ps,
            country: value,
          };
        }
        case "e_money_number": {
          return {
            ...ps,
            eMoneyNumber: value,
          };
        }
        case "e_money_pin": {
          return {
            ...ps,
            eMoneyPin: value,
          };
        }
        default: {
          return { ..._ps };
        }
      }
    });
  };

  return (
    <form
      className={clsx(
        "mb-[3.2rem] w-full rounded-[0.8rem] bg-primary-100 p-[2.4rem_2.4rem_2.4rem_3.1rem]"
      )}>
      <h1
        className={clsx(
          "mb-[3.2rem] font-primary text-[2.8rem] font-bold uppercase leading-[3.8rem] tracking-[0.1rem] text-primary-800"
        )}>
        checkout
      </h1>
      {/* Billing Details  */}
      <div className={clsx("mb-[3.2rem]")}>
        <span
          className={clsx(
            "mb-[1.6rem] block font-primary text-[1.3rem] font-bold uppercase leading-[2.5rem] tracking-[0.093rem] text-primary-500"
          )}>
          billing details
        </span>

        <label
          className={clsx(
            "font-primary text-[1.2rem] font-bold leading-[1.6rem] tracking-[-0.214px] text-primary-800"
          )}
          htmlFor="name">
          Name
        </label>
        <input
          className={clsx(
            "mb-[2.4rem] mt-[0.8rem] h-[5.6rem] w-full rounded-[0.8rem] border-[0.1rem] border-[#cfcfcf] bg-primary-100",
            "px-[2.4rem] font-primary text-[1.4rem] font-bold leading-[1.6rem] tracking-[-0.25px] text-primary-800 placeholder:opacity-40 placeholder:mix-blend-normal"
          )}
          id="name"
          name="name"
          placeholder="Alexi Word"
          type="text"
          value={checkoutFormData.name}
          onChange={handleOnChange}
        />

        <label
          className={clsx(
            "font-primary text-[1.2rem] font-bold leading-[1.6rem] tracking-[-0.214px] text-primary-800"
          )}
          htmlFor="email_address">
          Email Address
        </label>
        <input
          className={clsx(
            "mb-[2.4rem] mt-[0.8rem] h-[5.6rem] w-full rounded-[0.8rem] border-[0.1rem] border-[#cfcfcf] bg-primary-100",
            "px-[2.4rem] font-primary text-[1.4rem] font-bold leading-[1.6rem] tracking-[-0.25px] text-primary-800 placeholder:opacity-40 placeholder:mix-blend-normal"
          )}
          id="email_address"
          name="email_address"
          placeholder="alexei@mail.com"
          type="text"
          value={checkoutFormData.email}
          onChange={handleOnChange}
        />

        <label
          className={clsx(
            "font-primary text-[1.2rem] font-bold leading-[1.6rem] tracking-[-0.214px] text-primary-800"
          )}
          htmlFor="phone_number">
          Phone Number
        </label>
        <input
          className={clsx(
            "mt-[0.8rem] h-[5.6rem] w-full rounded-[0.8rem] border-[0.1rem] border-[#cfcfcf] bg-primary-100",
            "px-[2.4rem] font-primary text-[1.4rem] font-bold leading-[1.6rem] tracking-[-0.25px] text-primary-800 placeholder:opacity-40 placeholder:mix-blend-normal"
          )}
          id="phone_number"
          name="phone_number"
          placeholder="+1 202-555-0136"
          type="text"
          value={checkoutFormData.phoneNumber}
          onChange={handleOnChange}
        />
      </div>

      {/* Shipping Info  */}
      <div className={clsx("mb-[3.2rem]")}>
        <span
          className={clsx(
            "mb-[1.6rem] block font-primary text-[1.3rem] font-bold uppercase leading-[2.5rem] tracking-[0.093rem] text-primary-500"
          )}>
          Shipping Info
        </span>

        <label
          className={clsx(
            "font-primary text-[1.2rem] font-bold leading-[1.6rem] tracking-[-0.214px] text-primary-800"
          )}
          htmlFor="address">
          Your Address
        </label>
        <input
          className={clsx(
            "mb-[2.4rem] mt-[0.8rem] h-[5.6rem] w-full rounded-[0.8rem] border-[0.1rem] border-[#cfcfcf] bg-primary-100",
            "px-[2.4rem] font-primary text-[1.4rem] font-bold leading-[1.6rem] tracking-[-0.25px] text-primary-800 placeholder:opacity-40 placeholder:mix-blend-normal"
          )}
          id="address"
          name="address"
          placeholder="1137 Williams Avenue"
          type="text"
          value={checkoutFormData.address}
          onChange={handleOnChange}
        />

        <label
          className={clsx(
            "font-primary text-[1.2rem] font-bold leading-[1.6rem] tracking-[-0.214px] text-primary-800"
          )}
          htmlFor="zip_code">
          Zip Code
        </label>
        <input
          className={clsx(
            "mb-[2.4rem] mt-[0.8rem] h-[5.6rem] w-full rounded-[0.8rem] border-[0.1rem] border-[#cfcfcf] bg-primary-100",
            "px-[2.4rem] font-primary text-[1.4rem] font-bold leading-[1.6rem] tracking-[-0.25px] text-primary-800 placeholder:opacity-40 placeholder:mix-blend-normal"
          )}
          id="zip_code"
          name="zip_code"
          placeholder="10001"
          type="text"
          value={checkoutFormData.zip}
          onChange={handleOnChange}
        />

        <label
          className={clsx(
            "font-primary text-[1.2rem] font-bold leading-[1.6rem] tracking-[-0.214px] text-primary-800"
          )}
          htmlFor="city">
          City
        </label>
        <input
          className={clsx(
            "mb-[2.4rem] mt-[0.8rem] h-[5.6rem] w-full rounded-[0.8rem] border-[0.1rem] border-[#cfcfcf] bg-primary-100",
            "px-[2.4rem] font-primary text-[1.4rem] font-bold leading-[1.6rem] tracking-[-0.25px] text-primary-800 placeholder:opacity-40 placeholder:mix-blend-normal"
          )}
          id="city"
          name="city"
          placeholder="New York"
          type="text"
          value={checkoutFormData.city}
          onChange={handleOnChange}
        />

        <label
          className={clsx(
            "font-primary text-[1.2rem] font-bold leading-[1.6rem] tracking-[-0.214px] text-primary-800"
          )}
          htmlFor="country">
          Country
        </label>
        <input
          className={clsx(
            "mt-[0.8rem] h-[5.6rem] w-full rounded-[0.8rem] border-[0.1rem] border-[#cfcfcf] bg-primary-100",
            "px-[2.4rem] font-primary text-[1.4rem] font-bold leading-[1.6rem] tracking-[-0.25px] text-primary-800 placeholder:opacity-40 placeholder:mix-blend-normal"
          )}
          id="country"
          name="country"
          placeholder="United States"
          type="text"
          value={checkoutFormData.country}
          onChange={handleOnChange}
        />
      </div>

      {/* Payment Details */}
      <div className={clsx("mb-[1.6rem]")}>
        <span
          className={clsx(
            "mb-[1.6rem] block font-primary text-[1.3rem] font-bold uppercase leading-[2.5rem] tracking-[0.093rem] text-primary-500"
          )}>
          Payment Details
        </span>

        <h1
          className={clsx(
            "mb-[1.7rem] font-primary text-[1.2rem] font-bold leading-[1.6rem] tracking-[-0.22px] text-primary-800"
          )}>
          Payment Method
        </h1>
        <div
          className={clsx(
            "mb-[1.6rem] mt-[0.8rem] grid h-[5.6rem] w-full grid-cols-[repeat(2,_max-content)] grid-rows-[1fr] items-center gap-x-[1.6rem] rounded-[0.8rem] border-[0.1rem] border-[#cfcfcf] bg-primary-100 px-[1.6rem]"
          )}>
          <label
            className={clsx(
              "col-2 row-1 font-primary text-[1.4rem] font-bold leading-[1.9rem] tracking-[-0.25px] text-primary-800"
            )}
            htmlFor="e_money">
            e-Money
          </label>
          <input
            checked={checkoutFormData.paymentMethod.emoney}
            className={clsx(
              "col-1 row-1 h-[2rem] w-[2rem]",
              "px-[2.4rem] font-primary text-[1.4rem] font-bold leading-[1.6rem] tracking-[-0.25px] text-primary-800 placeholder:opacity-40 placeholder:mix-blend-normal"
            )}
            id="e_money"
            name="e_money"
            type="radio"
            onChange={handlePaymentMethod}
          />
        </div>
        <div
          className={clsx(
            "mb-[3.2rem] mt-[0.8rem] grid h-[5.6rem] w-full grid-cols-[repeat(2,_max-content)] grid-rows-[1fr] items-center gap-x-[1.6rem] rounded-[0.8rem] border-[0.1rem] border-[#cfcfcf] bg-primary-100 px-[1.6rem]"
          )}>
          <label
            className={clsx(
              "col-2 row-1 font-primary text-[1.4rem] font-bold leading-[1.9rem] tracking-[-0.25px] text-primary-800"
            )}
            htmlFor="cash_on_delivery">
            Cash on Delivery
          </label>
          <input
            checked={checkoutFormData.paymentMethod.delivery}
            className={clsx(
              "col-1 row-1 h-[2rem] w-[2rem]",
              "px-[2.4rem] font-primary text-[1.4rem] font-bold leading-[1.6rem] tracking-[-0.25px] text-primary-800 placeholder:opacity-40 placeholder:mix-blend-normal"
            )}
            id="cash_on_delivery"
            name="cash_on_delivery"
            type="radio"
            onChange={handlePaymentMethod}
          />
        </div>

        {checkoutFormData.paymentMethod.emoney ? (
          <>
            <label
              className={clsx(
                "font-primary text-[1.2rem] font-bold leading-[1.6rem] tracking-[-0.214px] text-primary-800"
              )}
              htmlFor="e_money_number">
              e-Money Number
            </label>
            <input
              className={clsx(
                "mb-[2.4rem] mt-[0.8rem] h-[5.6rem] w-full rounded-[0.8rem] border-[0.1rem] border-[#cfcfcf] bg-primary-100",
                "px-[2.4rem] font-primary text-[1.4rem] font-bold leading-[1.6rem] tracking-[-0.25px] text-primary-800 placeholder:opacity-40 placeholder:mix-blend-normal"
              )}
              id="e_money_number"
              name="e_money_number"
              placeholder="238521993"
              type="text"
              value={checkoutFormData.eMoneyNumber}
              onChange={handleOnChange}
            />
            <label
              className={clsx(
                "font-primary text-[1.2rem] font-bold leading-[1.6rem] tracking-[-0.214px] text-primary-800"
              )}
              htmlFor="e_money_pin">
              e-Money PIN
            </label>
            <input
              className={clsx(
                "mt-[0.8rem] h-[5.6rem] w-full rounded-[0.8rem] border-[0.1rem] border-[#cfcfcf] bg-primary-100",
                "px-[2.4rem] font-primary text-[1.4rem] font-bold leading-[1.6rem] tracking-[-0.25px] text-primary-800 placeholder:opacity-40 placeholder:mix-blend-normal"
              )}
              id="e_money_pin"
              name="e_money_pin"
              placeholder="6891"
              type="text"
              value={checkoutFormData.eMoneyPin}
              onChange={handleOnChange}
            />
          </>
        ) : null}
      </div>
    </form>
  );
}
