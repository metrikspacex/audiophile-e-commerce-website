import clsx from "clsx";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div
      className={clsx(
        "grid min-h-screen grid-cols-[1fr] grid-rows-[60rem_1fr_64.8rem]",
        "bg-primary-100"
      )}>
      <header
        className={clsx(
          "relative grid grid-cols-[1fr] grid-rows-[9rem_1fr]",
          "bg-primary-600"
        )}>
        <nav
          className={clsx(
            "z-[2] col-1 row-1 mx-auto flex w-full max-w-[37.5rem]",
            "items-center justify-around bg-transparent"
          )}>
          <img
            alt="menu button"
            className={clsx("hover:cursor-pointer")}
            src="/shared/tablet/icon-hamburger.svg"
            onClick={() => setMenu((ps) => !ps)}
          />
          <Link to="/">
            <img
              alt="logo"
              className={clsx("hover:cursor-pointer")}
              src="/shared/desktop/logo.svg"
            />
          </Link>
          <Link to="/cart">
            <img
              alt="cart"
              className={clsx("hover:cursor-pointer")}
              src="/shared/desktop/icon-cart.svg"
            />
          </Link>
        </nav>

        {menu ? (
          <menu
            className={clsx(
              "absolute left-[50%] top-[0] z-[1] col-1 row-2 mx-auto h-[75rem]",
              "w-full max-w-[37.5rem] translate-x-[-50%] bg-primary-100",
              "rounded-b-[0.8rem] p-[8.4rem_2.4rem_3.2rem_2.4rem]"
            )}>
            {/* One */}
            <div
              className={clsx(
                "relative mb-[6.8rem] flex h-[16.5rem] flex-col items-center",
                "justify-end rounded-[0.8rem] bg-primary-300"
              )}>
              <img
                alt="headphones xx99-mark-one"
                className={clsx(
                  "absolute left-[50%] top-[0] h-[10.4rem] w-[8rem]",
                  "translate-x-[-50%] translate-y-[-50%]"
                )}
                src="/shared/desktop/image-category-thumbnail-headphones.png"
              />
              <h1
                className={clsx(
                  "mb-[1.7rem] font-primary text-[1.5rem] font-bold",
                  "uppercase leading-[2rem] tracking-[0.1rem] text-primary-800"
                )}>
                headphones
              </h1>
              <Link to="/shop">
                <p
                  className={clsx(
                    "mb-[2.2rem] font-primary text-[1.3rem] font-bold",
                    "uppercase leading-[1.8rem] tracking-[0.1rem] ",
                    "text-primary-800 opacity-50 mix-blend-normal"
                  )}>
                  shop
                  <img
                    alt="arrow pointing right"
                    className={clsx("ml-[1.3rem] inline-block")}
                    src="/shared/desktop/icon-arrow-right.svg"
                  />
                </p>
              </Link>
            </div>
            {/* Two */}
            <div
              className={clsx(
                "relative mb-[6.8rem] flex h-[16.5rem] flex-col items-center",
                "justify-end rounded-[0.8rem] bg-primary-300"
              )}>
              <img
                alt="speaker zx9"
                className={clsx(
                  "absolute left-[50%] top-[0] h-[10.1rem] w-[8.4rem]",
                  "translate-x-[-50%] translate-y-[-50%]"
                )}
                src="/shared/desktop/image-category-thumbnail-speakers.png"
              />
              <h1
                className={clsx(
                  "mb-[1.7rem] font-primary text-[1.5rem] font-bold",
                  "uppercase leading-[2rem] tracking-[0.1rem] text-primary-800"
                )}>
                speakers
              </h1>
              <Link to="/shop">
                <p
                  className={clsx(
                    "mb-[2.2rem] font-primary text-[1.3rem] font-bold",
                    "uppercase leading-[1.8rem] tracking-[0.1rem]",
                    "text-primary-800 opacity-50 mix-blend-normal"
                  )}>
                  shop
                  <img
                    alt="arrow pointing right"
                    className={clsx("ml-[1.3rem] inline-block")}
                    src="/shared/desktop/icon-arrow-right.svg"
                  />
                </p>
              </Link>
            </div>
            {/* Three */}
            <div
              className={clsx(
                "relative mb-[6.8rem] flex h-[16.5rem] flex-col items-center",
                "justify-end rounded-[0.8rem] bg-primary-300"
              )}>
              <img
                alt="earphones xx59"
                className={clsx(
                  "absolute left-[50%] top-[0] h-[10.4rem] w-[10.3rem]",
                  "translate-x-[-50%] translate-y-[-50%]"
                )}
                src="/shared/desktop/image-category-thumbnail-earphones.png"
              />
              <h1
                className={clsx(
                  "mb-[1.7rem] font-primary text-[1.5rem] font-bold",
                  "uppercase leading-[2rem] tracking-[0.1rem] text-primary-800"
                )}>
                earphones
              </h1>
              <Link to="/shop">
                <p
                  className={clsx(
                    "mb-[2.2rem] font-primary text-[1.3rem] font-bold",
                    "uppercase leading-[1.8rem] tracking-[0.1rem]",
                    "text-primary-800 opacity-50 mix-blend-normal"
                  )}>
                  shop
                  <img
                    alt="arrow pointing right"
                    className={clsx("ml-[1.3rem] inline-block")}
                    src="/shared/desktop/icon-arrow-right.svg"
                  />
                </p>
              </Link>
            </div>
          </menu>
        ) : (
          <div className={clsx("relative z-[0] col-1 row-full")}>
            <img
              alt="headphones"
              className={clsx("mx-auto h-[60rem]")}
              src="/home/mobile/image-header.jpg"
            />
            <div
              className={clsx(
                "absolute left-[50%] top-[50%] w-full max-w-[32.8rem]",
                "translate-x-[-50%] translate-y-[calc(-50%+4.5rem)]"
              )}>
              <h2
                className={clsx(
                  "mb-[1.6rem] text-center font-primary text-[1.4rem]",
                  "font-normal uppercase leading-[1.9rem] tracking-[1rem]",
                  "text-primary-100 opacity-[0.5] mix-blend-normal"
                )}>
                NEW PRODUCT
              </h2>
              <h1
                className={clsx(
                  "mb-[2.4rem] text-center font-primary text-[3.6rem]",
                  "font-normal uppercase leading-[4rem] tracking-[0.1rem]",
                  "text-primary-100"
                )}>
                XX99 Mark II HeadphoneS
              </h1>
              <p
                className={clsx(
                  "mb-[2.8rem] text-center font-primary text-[1.5rem]",
                  "font-medium uppercase leading-[2.5rem] text-primary-100",
                  "opacity-[0.75] mix-blend-normal"
                )}>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <button
                className={clsx(
                  "mx-auto block h-[4.8rem] w-[16rem] bg-primary-500",
                  "font-primary  text-[1.3rem] font-bold uppercase",
                  "leading-[1.8rem] tracking-[0.1rem] text-primary-100"
                )}
                type="button">
                See Product
              </button>
            </div>
          </div>
        )}
      </header>
      <main
        className={clsx("z-[0] col-1 row-2 h-[100rem] bg-primary-200", {
          "brightness-[0.2]": menu,
        })}>
        <Outlet />
      </main>
      <footer className={clsx("col-1 row-3 bg-primary-600")}></footer>
    </div>
  );
}
