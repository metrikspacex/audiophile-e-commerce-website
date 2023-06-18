import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

export type FooterProps = HTMLAttributes<HTMLElement>;
export default function Footer({}: FooterProps) {
  return (
    <footer
      className={clsx(
        "col-1 row-3 grid grid-cols-[1fr] grid-rows-[repeat(5,_max-content)] content-between justify-items-center gap-y-[4.8rem] bg-primary-600 p-[5.2rem_2.4rem_3.8rem_2.4rem]",
        "md:grid-cols-[1fr_1fr] md:grid-rows-[repeat(4,_max-content)] md:justify-items-start md:gap-y-[0] md:p-[6rem_4rem_4.6rem_3.9rem]",
        "xl:grid-cols-[1fr_1fr] xl:grid-rows-[1fr_1fr_1fr] xl:p-[7.5rem_16.5rem_4.8rem_16.5rem]"
      )}>
      <div
        className={clsx(
          "col-1 row-1",
          "md:col-full md:row-1",
          "xl:col-1 xl:row-1"
        )}>
        <img alt="logo" className={clsx("")} src="/shared/desktop/logo.svg" />
      </div>
      <div
        className={clsx(
          "col-1 row-2 flex h-[14.8rem] flex-col justify-between text-center font-primary text-[1.3rem] font-bold uppercase leading-[2.5rem] tracking-[0.2rem] text-primary-100",
          "md:col-full md:row-2 md:h-[max-content] md:flex-row md:gap-x-[3.4rem]",
          "xl:col-2 xl:row-1 xl:justify-self-end"
        )}>
        <Link to="/">home</Link>
        <Link to="/category/headphones">headphones</Link>
        <Link to="/category/speakers">speakers</Link>
        <Link to="/category/earphones">earphones</Link>
      </div>
      <div
        className={clsx(
          "col-1 row-3 w-full max-w-[32.7rem] text-center font-primary text-[1.5rem] font-medium leading-[2.5rem] text-primary-100 opacity-50 mix-blend-normal",
          "md:col-full md:row-3 md:max-w-[68.9rem] md:text-justify",
          "xl:col-1 xl:row-2 xl:max-w-[54rem]"
        )}>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We’re a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
      </div>
      <div
        className={clsx(
          "col-1 row-4 font-primary text-[1.5rem] font-bold leading-[2.5rem] text-primary-100 opacity-50 mix-blend-normal",
          "md:col-1 md:row-4",
          "xl:col-full xl:row-3 xl:self-end"
        )}>
        <h2>Copyright 2021. All Rights Reserved</h2>
      </div>
      <div
        className={clsx(
          "col-1 row-5 flex flex-row gap-x-[1.6rem]",
          "md:col-2 md:row-4 md:ml-auto",
          "xl:col-2 xl:row-2 xl:self-end"
        )}>
        <img
          alt="icon facebook"
          className={clsx("")}
          src="/shared/desktop/icon-facebook.svg"
        />
        <img
          alt="icon twitter"
          className={clsx("")}
          src="/shared/desktop/icon-twitter.svg"
        />
        <img
          alt="icon instagram"
          className={clsx("")}
          src="/shared/desktop/icon-instagram.svg"
        />
      </div>
    </footer>
  );
}
