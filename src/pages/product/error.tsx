import clsx from "clsx";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export default function ProductError() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <section className={clsx("grid h-full w-full place-content-center")}>
        <Link to="/">
          <h1
            className={clsx(
              "font-primary text-[1.5rem] font-medium uppercase leading-[2rem] tracking-[0.2rem] text-primary-800"
            )}>
            {error.data.message}
          </h1>
        </Link>
      </section>
    );
  }
  throw error;
}
